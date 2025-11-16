import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
  useTheme,
} from '@mui/material';
import {
  Bolt,
  FavoriteBorder,
  Schedule,
  TravelExplore,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Example metrics (you can replace with real backend data later)
const stats = [
  {
    label: 'Upcoming Trips',
    value: 4,
    icon: TravelExplore,
    color: 'primary',
    progress: 70,
  },
  {
    label: 'Places Saved',
    value: 23,
    icon: FavoriteBorder,
    color: 'secondary',
    progress: 55,
  },
  {
    label: 'Hours Tracked',
    value: 128,
    icon: Schedule,
    color: 'warning',
    progress: 80,
  },
  {
    label: 'Safety Score',
    value: '92%',
    icon: Bolt,
    color: 'success',
    progress: 92,
  },
];

const DashboardStats = () => {
  const theme = useTheme();

  return (
    <Box component="section" aria-label="Key travel metrics">
      <Grid container spacing={2.5}>
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <Grid item xs={12} sm={6} key={item.label}>
              <Card
                component={motion.article}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                whileHover={{ y: -4 }}
                sx={{
                  height: '100%',
                  background:
                    theme.palette.mode === 'light'
                      ? 'linear-gradient(135deg,#ffffff,#f4f7ff)'
                      : 'linear-gradient(135deg,#141a2e,#0b1020)',
                  border:
                    theme.palette.mode === 'light'
                      ? '1px solid rgba(148,163,184,0.35)'
                      : '1px solid rgba(55,65,81,0.8)',
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: 1.5,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 0.5 }}
                      >
                        {item.label}
                      </Typography>
                      <Typography variant="h5" component="p">
                        {item.value}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: theme.palette[item.color].main + '22',
                        color: theme.palette[item.color].main,
                      }}
                    >
                      <Icon fontSize="small" />
                    </Box>
                  </Box>

                  <LinearProgress
                    aria-label={`${item.label} progress`}
                    variant="determinate"
                    value={item.progress}
                    color={item.color}
                    sx={{
                      height: 6,
                      borderRadius: 999,
                      backgroundColor:
                        theme.palette.mode === 'light' ? '#e5e7eb' : '#1f2937',
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default DashboardStats;