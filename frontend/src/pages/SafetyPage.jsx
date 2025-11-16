import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Chip,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { ShieldMoon, NotificationsActive, PhoneIphone } from '@mui/icons-material';

const SafetyPage = () => {
  const [safetyOn, setSafetyOn] = useState(true);
  const [alertsOn, setAlertsOn] = useState(true);
  const [shareLocation, setShareLocation] = useState(false);

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
        <ShieldMoon color="warning" />
        <Typography variant="h4" component="h1">
          Safety Center
        </Typography>
        <Chip
          label={safetyOn ? 'Safety mode · ON' : 'Safety mode · OFF'}
          color={safetyOn ? 'success' : 'default'}
          size="small"
        />
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 3,
              bgcolor: 'rgba(15,23,42,0.96)',
              border: '1px solid rgba(148,163,184,0.4)',
            }}
          >
            <CardContent>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Safety mode controls
              </Typography>

              <FormControlLabel
                control={
                  <Switch
                    checked={safetyOn}
                    onChange={(e) => setSafetyOn(e.target.checked)}
                  />
                }
                label="Safety mode"
              />
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', mb: 2 }}
              >
                When ON, Nomadiq will highlight safer areas, timings, and
                transport options first.
              </Typography>

              <FormControlLabel
                control={
                  <Switch
                    checked={alertsOn}
                    onChange={(e) => setAlertsOn(e.target.checked)}
                  />
                }
                label="Critical alerts"
              />
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', mb: 2 }}
              >
                Receive push‑style alerts if safety conditions change for your
                saved cities.
              </Typography>

              <FormControlLabel
                control={
                  <Switch
                    checked={shareLocation}
                    onChange={(e) => setShareLocation(e.target.checked)}
                  />
                }
                label="Share live location with trusted contacts"
              />
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block' }}
              >
                We’ll later connect this to a contact list / WhatsApp share.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 3,
              bgcolor: 'rgba(15,23,42,0.96)',
              border: '1px solid rgba(148,163,184,0.4)',
            }}
          >
            <CardContent>
              <Typography variant="subtitle1" sx={{ mb: 1.5 }}>
                What safety mode changes
              </Typography>

              <List dense>
                <ListItem>
                  <ListItemText
                    primary="Highlights safer neighborhoods and times of day."
                    secondary="For example, it may suggest daytime transport instead of late‑night cabs in certain cities."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Surfaces emergency numbers by country inside Sarthii."
                    secondary="When you ask Sarthii for emergency help, it will show the likely local numbers first."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Shows safety checklists before big moves."
                    secondary="E.g. reminders about copies of documents, offline maps, and key contacts."
                  />
                </ListItem>
              </List>

              <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <NotificationsActive color="warning" />
                <PhoneIphone color="primary" />
                <Typography variant="caption" color="text.secondary">
                  Later, we can sync this with your phone notifications and
                  Sarthii chat behaviour.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SafetyPage;