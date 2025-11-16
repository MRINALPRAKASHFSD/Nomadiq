import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';

const trips = [
  {
    id: 1,
    label: 'Goa · Oct 2025',
    status: 'past',
    note: 'Beach getaway',
  },
  {
    id: 2,
    label: 'Rajasthan · Nov 2025 🔴',
    status: 'current',
    note: 'Live now',
  },
  {
    id: 3,
    label: 'Kerala · Dec 2025',
    status: 'upcoming',
    note: '20 days to go',
  },
  {
    id: 4,
    label: 'Northeast India · Jan 2026',
    status: 'upcoming',
    note: 'Planned',
  },
];

const TravelTimeline = () => {
  return (
    <Card
      component={motion.section}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      aria-label="Travel timeline"
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Travel Timeline
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Scroll through past, current, and upcoming trips.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            py: 1,
            gap: 1.5,
          }}
        >
          {trips.map((trip) => (
            <Box
              key={trip.id}
              sx={{
                minWidth: 180,
                p: 1.5,
                borderRadius: 2,
                bgcolor: 'rgba(15,23,42,0.7)',
                border: '1px solid rgba(148,163,184,0.4)',
                flexShrink: 0,
              }}
            >
              <Stack direction="row" justifyContent="space-between" mb={0.5}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    color:
                      trip.status === 'past'
                        ? 'text.secondary'
                        : trip.status === 'current'
                        ? 'warning.main'
                        : 'text.primary',
                  }}
                >
                  {trip.label}
                </Typography>
                <Chip
                  size="small"
                  label={
                    trip.status === 'past'
                      ? 'Past'
                      : trip.status === 'current'
                      ? 'Live'
                      : 'Upcoming'
                  }
                  color={
                    trip.status === 'past'
                      ? 'default'
                      : trip.status === 'current'
                      ? 'error'
                      : 'primary'
                  }
                />
              </Stack>
              <Typography variant="caption" color="text.secondary">
                {trip.note}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TravelTimeline;