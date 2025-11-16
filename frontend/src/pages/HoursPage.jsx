import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import { ArrowBack, Schedule } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HoursPage = () => {
  const navigate = useNavigate();

  return (
    <Box component={motion.section}
      key="hours-page"
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
            Hours Tracked
          </Typography>
          <Typography variant="body2" color="text.secondary">
            See how much time you spend on travel, planning, and work.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                This week
              </Typography>
              <Typography variant="h4" gutterBottom>
                18 h
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                12 h travel · 6 h planning
              </Typography>
              <LinearProgress value={60} variant="determinate" />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Monthly goal
              </Typography>
              <Typography variant="h4" gutterBottom>
                128 / 160 h
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                You are on track – keep exploring.
              </Typography>
              <LinearProgress value={80} color="secondary" variant="determinate" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HoursPage;