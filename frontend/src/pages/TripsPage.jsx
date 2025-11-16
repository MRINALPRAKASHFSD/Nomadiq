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
import { ArrowBack, AddLocationAlt, DirectionsCar } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const sampleTrips = [
  {
    id: 1,
    title: 'Weekend in Jaipur',
    dateRange: '21–23 Nov 2025',
    status: 'Upcoming',
    mode: 'Train',
  },
  {
    id: 2,
    title: 'Manali Homestay',
    dateRange: '12–18 Dec 2025',
    status: 'Planned',
    mode: 'Bus',
  },
];

const TripsPage = () => {
  const navigate = useNavigate();

  return (
    <Box component={motion.section}
      key="trips-page"
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
            Upcoming Trips
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Manage and create trips with dates, routes, and safety notes.
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddLocationAlt />}
          color="primary"
        >
          Add new trip
        </Button>
      </Box>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField fullWidth size="small" label="Search trips" />
            <TextField fullWidth size="small" label="Filter by status" />
          </Stack>
        </CardContent>
      </Card>

      <Grid container spacing={2.5}>
        {sampleTrips.map((trip) => (
          <Grid item xs={12} sm={6} key={trip.id}>
            <Card
              component={motion.article}
              whileHover={{ y: -4 }}
              sx={{ height: '100%' }}
            >
              <CardContent>
                <Stack direction="row" justifyContent="space-between" mb={1.5}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {trip.title}
                  </Typography>
                  <Chip label={trip.status} size="small" color="secondary" />
                </Stack>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  {trip.dateRange}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <DirectionsCar fontSize="small" />
                  <Typography variant="body2">{trip.mode}</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TripsPage;