import React from 'react';
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Chip,
  Box,
} from '@mui/material';
import {
  WbSunny,
  Cloud,
  Thunderstorm,
  WarningAmber,
  CheckCircle,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const weatherData = [
  {
    id: 1,
    city: 'Jaipur',
    temp: '28°C',
    condition: 'Sunny',
    icon: WbSunny,
    color: 'warning',
  },
  {
    id: 2,
    city: 'Manali',
    temp: '12°C',
    condition: 'Cloudy',
    icon: Cloud,
    color: 'info',
  },
  {
    id: 3,
    city: 'Kerala',
    temp: '26°C',
    condition: 'Rainy',
    icon: Thunderstorm,
    color: 'primary',
  },
];

const alerts = [
  {
    id: 1,
    level: 'good',
    title: 'All clear for Jaipur trip',
    description: 'No major delays expected. Roads are normal.',
    icon: CheckCircle,
    color: 'success',
  },
  {
    id: 2,
    level: 'caution',
    title: 'Festival traffic in Mumbai',
    description: 'Expect heavier traffic this weekend due to local events.',
    icon: WarningAmber,
    color: 'warning',
  },
  {
    id: 3,
    level: 'urgent',
    title: 'Heavy rain alert in Manali',
    description: 'Possible road closures tonight. Check routes before travel.',
    icon: WarningAmber,
    color: 'error',
  },
];

const TravelAlertsWeather = () => {
  return (
    <Card
      component={motion.section}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      aria-label="Travel alerts and weather"
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Travel Alerts &amp; Weather
        </Typography>

        {/* Weather row */}
        <Stack
          direction="row"
          spacing={1.5}
          sx={{ mb: 2, overflowX: 'auto', pb: 0.5 }}
        >
          {weatherData.map((w) => {
            const Icon = w.icon;
            return (
              <Box
                key={w.id}
                sx={{
                  minWidth: 120,
                  p: 1,
                  borderRadius: 2,
                  bgcolor: 'rgba(15,23,42,0.6)',
                  border: '1px solid rgba(148,163,184,0.4)',
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Icon color={w.color} fontSize="small" />
                  <Typography variant="body2">{w.city}</Typography>
                </Stack>
                <Typography variant="caption" color="text.secondary">
                  {w.temp} · {w.condition}
                </Typography>
              </Box>
            );
          })}
        </Stack>

        {/* Alerts list */}
        <Stack spacing={1.5}>
          {alerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <Box
                key={alert.id}
                sx={{
                  p: 1.1,
                  borderRadius: 2,
                  bgcolor: 'rgba(15,23,42,0.6)',
                  border: '1px solid rgba(148,163,184,0.4)',
                }}
              >
                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <Icon color={alert.color} fontSize="small" />
                  <Box sx={{ flexGrow: 1 }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {alert.title}
                      </Typography>
                      <Chip
                        size="small"
                        label={
                          alert.level === 'good'
                            ? 'Good'
                            : alert.level === 'caution'
                            ? 'Caution'
                            : 'Urgent'
                        }
                        color={
                          alert.level === 'good'
                            ? 'success'
                            : alert.level === 'caution'
                            ? 'warning'
                            : 'error'
                        }
                      />
                    </Stack>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ display: 'block', mt: 0.4 }}
                    >
                      {alert.description}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            );
          })}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TravelAlertsWeather;