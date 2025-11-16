import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
  import {
  Edit,
  Save,
  FlightTakeoff,
  Coffee,
  Landscape,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const defaultItinerary = {
  'Day 1': [
    'Morning: Arrive, drop bags at stay, quick coffee and Wi‑Fi check.',
    'Afternoon: Explore central market and old town.',
    'Evening: Sunset point + local dinner spot.',
  ],
  'Day 2': [
    'Morning: Work block from a quiet café / cowork.',
    'Afternoon: Half‑day local experience (heritage walk, cycle tour, etc).',
    'Evening: Chill bar / music venue with safe late‑night route home.',
  ],
  'Day 3': [
    'Morning: Light hike / beach walk.',
    'Afternoon: Souvenirs + last‑minute spots from your saved list.',
    'Evening: Early dinner and pack for departure.',
  ],
};

const SmartItineraryPage = () => {
  const [itinerary, setItinerary] = useState(defaultItinerary);
  const [editingDay, setEditingDay] = useState(null);
  const [draftText, setDraftText] = useState('');

  const handleEdit = (day) => {
    setEditingDay(day);
    setDraftText(itinerary[day].join('\n'));
  };

  const handleSave = () => {
    if (!editingDay) return;
    const lines = draftText
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    setItinerary((prev) => ({
      ...prev,
      [editingDay]: lines.length ? lines : prev[editingDay],
    }));
    setEditingDay(null);
    setDraftText('');
  };

  return (
    <Box>
      <Box
        sx={{
          mb: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          flexWrap: 'wrap',
        }}
      >
        <FlightTakeoff color="primary" />
        <Typography variant="h4" component="h1">
          Smart itinerary
        </Typography>
        <Chip
          icon={<Coffee fontSize="small" />}
          label="Work + explore friendly"
          size="small"
          sx={{ ml: 1 }}
        />
      </Box>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        A balanced 3‑day structure you can edit quickly. Each day mixes work,
        exploration, and recovery so you don’t burn out.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          {Object.entries(itinerary).map(([day, items]) => (
            <Card
              key={day}
              component={motion.div}
              whileHover={{ scale: 1.01, y: -2 }}
              sx={{
                mb: 2.5,
                borderRadius: 3,
                bgcolor: 'rgba(15,23,42,0.96)',
                border: '1px solid rgba(148,163,184,0.4)',
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  <Typography variant="h6">{day}</Typography>
                  <IconButton
                    size="small"
                    onClick={() =>
                      editingDay === day ? handleSave() : handleEdit(day)
                    }
                  >
                    {editingDay === day ? <Save /> : <Edit />}
                  </IconButton>
                </Box>

                {editingDay === day ? (
                  <TextField
                    multiline
                    minRows={4}
                    fullWidth
                    value={draftText}
                    onChange={(e) => setDraftText(e.target.value)}
                    helperText="One activity per line (Morning / Afternoon / Evening)."
                  />
                ) : (
                  <List dense>
                    {items.map((t, idx) => (
                      <ListItem key={idx}>
                        <ListItemText
                          primaryTypographyProps={{ variant: 'body2' }}
                          primary={t}
                        />
                      </ListItem>
                    ))}
                  </List>
                )}
              </CardContent>
            </Card>
          ))}
        </Grid>

        <Grid item xs={12} md={5}>
          <Card
            sx={{
              borderRadius: 3,
              bgcolor: 'rgba(15,23,42,0.96)',
              border: '1px solid rgba(148,163,184,0.4)',
            }}
          >
            <CardContent>
              <Typography variant="subtitle1" sx={{ mb: 1.5 }}>
                Smart balance tips
              </Typography>
              <Typography
                variant="body2"
                sx={{ mb: 1.5, color: 'text.secondary' }}
              >
                When tweaking your itinerary, keep a rhythm of:
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography variant="body2">
                        • 1 deep work block per day if you’re remote working.
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography variant="body2">
                        • 1 “anchor experience” (viewpoint, tour, local food).
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography variant="body2">
                        • At least 1 buffer slot with no plan at all.
                      </Typography>
                    }
                  />
                </ListItem>
              </List>

              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Landscape color="success" />
                <Typography variant="caption" color="text.secondary">
                  Later we can plug this into Sarthii so it auto‑fills per city.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SmartItineraryPage;