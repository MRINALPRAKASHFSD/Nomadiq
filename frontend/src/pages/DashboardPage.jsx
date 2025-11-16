import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import DashboardStats from '../components/DashboardStats';
import QuickActions from '../components/QuickActions';
import ActivityTimeline from '../components/ActivityTimeline';
import TravelAlertsWeather from '../components/TravelAlertsWeather';
import SocialCommunity from '../components/SocialCommunity';
import BadgesGamification from '../components/BadgesGamification';
import BudgetTracker from '../components/BudgetTracker';
import TravelTimeline from '../components/TravelTimeline';

const DashboardPage = ({ onOpenSarthii }) => {
  return (
    <Container
      maxWidth="xl"
      component={motion.main}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      sx={{ py: 3 }}
    >
      {/* Header */}
      <Box
        component="header"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
          mb: 4,
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome back,{' '}
            <Box component="span" sx={{ fontWeight: 800 }}>
              Nomad
            </Box>
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Plan trips, track safety, and follow live insights in one modern
            dashboard.
          </Typography>
        </Box>
      </Box>

      {/* Main grid */}
      <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
        {/* Top row: stats + quick actions */}
        <Grid item xs={12} md={8}>
          <DashboardStats />
        </Grid>
        <Grid item xs={12} md={4}>
          <QuickActions onOpenSarthii={onOpenSarthii} />
        </Grid>

        {/* Alerts + community */}
        <Grid item xs={12} md={8}>
          <TravelAlertsWeather />
        </Grid>
        <Grid item xs={12} md={4}>
          <SocialCommunity />
        </Grid>

        {/* Activity timeline */}
        <Grid item xs={12}>
          <ActivityTimeline />
        </Grid>

        {/* Gamification + budget + upcoming timeline */}
        <Grid item xs={12} md={4}>
          <BadgesGamification />
        </Grid>
        <Grid item xs={12} md={4}>
          <BudgetTracker />
        </Grid>
        <Grid item xs={12} md={4}>
          <TravelTimeline />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardPage;