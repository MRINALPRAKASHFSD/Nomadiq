import React, { useState } from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
  NotificationsNone,
  Settings,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import DashboardStats from './DashboardStats';
import QuickActions from './QuickActions';
import ActivityTimeline from './ActivityTimeline';
import InsightsModal from './InsightsModal';
import SarthiiBot from './SarthiiBot';
import LandingPage from './LandingPage';
import ProfileDrawer from './ProfileDrawer';

const DashboardShell = ({ mode, onToggleMode, children }) => {
  const theme = useTheme();
  const [sarthiiOpen, setSarthiiOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profile, setProfile] = useState(null);

  const enhancedChildren = React.isValidElement(children)
    ? React.cloneElement(children, {
        onOpenSarthii: () => setSarthiiOpen(true),
        profile,
      })
    : children;

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Global background image */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: -3,
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(6,12,30,0.55),
              rgba(6,12,30,0.75)
            ),
            url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80")
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Accent overlays */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: -2,
          background:
            'radial-gradient(circle at top left, rgba(56,189,248,0.24), transparent 60%),' +
            'radial-gradient(circle at bottom right, rgba(249,115,22,0.26), transparent 55%)',
        }}
      />

      {/* AppBar */}
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: 'blur(14px)',
          backgroundColor:
            theme.palette.mode === 'light'
              ? 'rgba(245,247,251,0.9)'
              : 'rgba(5,10,25,0.9)',
          borderBottom: `1px solid ${
            theme.palette.mode === 'light'
              ? 'rgba(148,163,184,0.35)'
              : 'rgba(55,65,81,0.7)'
          }`,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open navigation"
              sx={{ display: { xs: 'inline-flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                textDecoration: 'none',
                fontWeight: 700,
                letterSpacing: 0.5,
                background: 'linear-gradient(120deg,#1976d2,#4caf50)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Nomadiq Dashboard
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Tooltip title="Settings">
              <IconButton color="inherit">
                <Settings />
              </IconButton>
            </Tooltip>

            <Tooltip
              title={
                mode === 'light'
                  ? 'Switch to dark mode'
                  : 'Switch to light mode'
              }
            >
              <IconButton
                color="inherit"
                onClick={onToggleMode}
                aria-label="toggle light/dark theme"
              >
                {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
              </IconButton>
            </Tooltip>

            <Tooltip title="Notifications">
              <IconButton color="inherit" aria-label="notifications">
                <Badge color="warning" variant="dot">
                  <NotificationsNone />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Edit profile">
              <Avatar
                alt="User avatar"
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: theme.palette.primary.main,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
                onClick={() => setProfileOpen(true)}
              >
                {profile?.name?.[0]?.toUpperCase() || 'M'}
              </Avatar>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Landing hero + dashboard content */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Hero section */}
        <LandingPage />

        {/* Dashboard section */}
        <Box id="nomadiq-dashboard-main" sx={{ py: 4 }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                borderRadius: 4,
                p: { xs: 2.5, md: 3.5 },
                background:
                  'linear-gradient(135deg, rgba(15,23,42,0.96), rgba(17,24,39,0.98))',
                border: '1px solid rgba(148,163,184,0.45)',
                boxShadow: '0 26px 70px rgba(15,23,42,0.9)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <AnimatePresence mode="wait">{enhancedChildren}</AnimatePresence>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Sarthii bot */}
      <SarthiiBot open={sarthiiOpen} onClose={() => setSarthiiOpen(false)} />

      {/* Profile drawer */}
      <ProfileDrawer
        open={profileOpen}
        onClose={() => setProfileOpen(false)}
        onSave={setProfile}
        initialProfile={profile}
      />
    </Box>
  );
};

const DashboardHome = ({ onOpenSarthii, profile }) => {
  const [insightsOpen, setInsightsOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const displayName = profile?.name || 'Nomad';

  return (
    <>
      <Container maxWidth="lg">
        <motion.section
          key="dashboard-home"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {/* HEADER */}
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
                  {displayName}
                </Box>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Plan trips, track safety, and follow live insights in one modern
                dashboard.
              </Typography>

              {profile?.intents?.length ? (
                <Box sx={{ mt: 1.5 }}>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ mb: 0.5, display: 'block' }}
                  >
                    You’re into:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                    {profile.intents.map((intent) => (
                      <Chip
                        key={intent}
                        label={intent}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(59,130,246,0.2)',
                          borderRadius: 999,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              ) : null}
            </Box>

            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
              <Button
                component={motion.button}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                variant='contained'
                color='primary'
                onClick={() => setInsightsOpen(true)}
              >
                View Smart Insights
              </Button>
              <Button
                component={motion.button}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                variant='outlined'
                color='secondary'
                onClick={() => navigate('/trips')}
              >
                New Trip
              </Button>
            </Box>
          </Box>

          {/* MAIN DASHBOARD ROW */}
          <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
            <Grid item xs={12} md={8}>
              <DashboardStats />
            </Grid>
            <Grid item xs={12} md={4}>
              <QuickActions onOpenSarthii={onOpenSarthii} />
            </Grid>
            <Grid item xs={12}>
              <ActivityTimeline />
            </Grid>
          </Grid>

          {/* EXTRA ROW: BADGES, WEATHER, VLOGGERS */}
          <Grid container spacing={3} sx={{ mt: 3 }}>
            {/* Badges / milestones */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  borderRadius: 3,
                  p: 2.5,
                  bgcolor: 'rgba(15,23,42,0.96)',
                  border: '1px solid rgba(148,163,184,0.45)',
                }}
              >
                <Typography variant="subtitle1" sx={{ mb: 1.5 }}>
                  Badges & milestones
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1.5 }}
                >
                  You’re 2 trips away from your next badge.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip
                    label="Early Explorer"
                    color="primary"
                    size="small"
                    sx={{ bgcolor: 'rgba(37,99,235,0.18)' }}
                  />
                  <Chip
                    label="Budget Ninja"
                    color="success"
                    size="small"
                    sx={{ bgcolor: 'rgba(22,163,74,0.18)' }}
                  />
                  <Chip
                    label="Safe Route Pro"
                    color="warning"
                    size="small"
                    sx={{ bgcolor: 'rgba(234,179,8,0.18)' }}
                  />
                </Box>
                <Button
                  size="small"
                  sx={{ mt: 2, textTransform: 'none', px: 0 }}
                  onClick={() => navigate('/badges')}
                >
                  View all badges →
                </Button>
              </Box>
            </Grid>

            {/* Weather snapshot */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  borderRadius: 3,
                  p: 2.5,
                  bgcolor: 'rgba(15,23,42,0.96)',
                  border: '1px solid rgba(148,163,184,0.45)',
                }}
              >
                <Typography variant="subtitle1" sx={{ mb: 1.5 }}>
                  Weather snapshot
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Jaipur · Next 24 hours
                </Typography>
                <Box
                  sx={{
                    mt: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: 700, lineHeight: 1 }}
                  >
                    27°
                  </Typography>
                  <Box>
                    <Typography variant="body2">Clear evening</Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      Feels like 25° · Light breeze
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: 'block', mt: 1.5 }}
                >
                  Full weather insights coming soon.
                </Typography>
              </Box>
            </Grid>

            {/* Connect with vloggers */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  borderRadius: 3,
                  p: 2.5,
                  bgcolor: 'rgba(15,23,42,0.96)',
                  border: '1px solid rgba(148,163,184,0.45)',
                }}
              >
                <Typography variant="subtitle1" sx={{ mb: 1.5 }}>
                  Connect with vloggers
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1.5 }}
                >
                  Learn from people already on the road.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{
                      justifyContent: 'space-between',
                      textTransform: 'none',
                    }}
                    component="a"
                    href="https://instagram.com/your_goa_remote_worker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Box>
                      Remote worker in Goa
                      <Typography
                        component="span"
                        variant="caption"
                        sx={{ ml: 1, color: 'text.secondary' }}
                      >
                        @your_goa_remote_worker
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      12k subs
                    </Typography>
                  </Button>

                  <Button
                    size="small"
                    variant="outlined"
                    sx={{
                      justifyContent: 'space-between',
                      textTransform: 'none',
                    }}
                    component="a"
                    href="https://instagram.com/himachal_slow_travel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Box>
                      Himachal slow‑travel series
                      <Typography
                        component="span"
                        variant="caption"
                        sx={{ ml: 1, color: 'text.secondary' }}
                      >
                        @himachal_slow_travel
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      45 videos
                    </Typography>
                  </Button>

                  <Button
                    size="small"
                    variant="outlined"
                    sx={{
                      justifyContent: 'space-between',
                      textTransform: 'none',
                    }}
                    component="a"
                    href="https://instagram.com/nomad_city_hopper"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Box>
                      City‑hopping creator
                      <Typography
                        component="span"
                        variant="caption"
                        sx={{ ml: 1, color: 'text.secondary' }}
                      >
                        @nomad_city_hopper
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      80 reels
                    </Typography>
                  </Button>
                </Box>

                <Button
                  size="small"
                  sx={{ mt: 2, textTransform: 'none', px: 0 }}
                >
                  Browse more creators →
                </Button>
              </Box>
            </Grid>
          </Grid>
        </motion.section>
      </Container>

      <InsightsModal
        open={insightsOpen}
        onClose={() => setInsightsOpen(false)}
      />
    </>
  );
};

const DashboardLayout = ({ mode, onToggleMode, children }) => (
  <DashboardShell mode={mode} onToggleMode={onToggleMode}>
    {children}
  </DashboardShell>
);

DashboardLayout.DashboardHome = DashboardHome;

export default DashboardLayout;