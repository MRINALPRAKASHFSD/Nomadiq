import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { ArrowBack, FavoriteBorder, Place } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const savedPlaces = [
  { id: 1, name: 'Jaipur Old City', tag: 'Culture', notes: 'Great for weekend walks.' },
  { id: 2, name: 'Manali Homestay', tag: 'Mountain', notes: 'Cozy with valley view.' },
];

const PlacesPage = () => {
  const navigate = useNavigate();

  return (
    <Box component={motion.section}
      key="places-page"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      sx={{ maxWidth: '960px', mx: 'auto', px: 2 }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 1.5 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/')}
          color="inherit"
        >
          Back to dashboard
        </Button>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, gap: 2 }}>
        <Box>
          <Typography variant="h5" gutterBottom>
            Saved Places
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Your curated list of destinations, homestays, and experiences.
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<FavoriteBorder />}
          color="secondary"
        >
          Add place
        </Button>
      </Box>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <TextField fullWidth size="small" label="Search places" />
        </CardContent>
      </Card>

      <Grid container spacing={2.5}>
        {savedPlaces.map((place) => (
          <Grid item xs={12} sm={6} key={place.id}>
            <Card
              component={motion.article}
              whileHover={{ y: -4 }}
              sx={{ height: '100%' }}
            >
              <CardContent>
                <Stack direction="row" justifyContent="space-between" mb={1.5}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {place.name}
                  </Typography>
                  <Chip label={place.tag} size="small" color="primary" />
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                  <Place fontSize="small" />
                  <Typography variant="body2">India</Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  {place.notes}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlacesPage;