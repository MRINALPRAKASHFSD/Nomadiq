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
import SarthiBot from './SarthiBot';
import LandingPage from './LandingPage';
import ProfileDrawer from './ProfileDrawer';

const DashboardShell = ({ mode, onToggleMode, children }) => {
  const theme = useTheme();
  const [sarthiOpen, setSarthiOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profile, setProfile] = useState(null);

  const enhancedChildren = React.isValidElement(children)
    ? React.cloneElement(children, {
        onOpenSarthi: () => setSarthiOpen(true),
        profile,
      })
    : children;

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Enhanced background with parallax effect */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: -3,
          backgroundImage: `
            linear-gradient(
              135deg,
              rgba(6,12,30,0.75) 0%,
              rgba(17,24,39,0.65) 50%,
              rgba(6,12,30,0.8) 100%
            ),
            url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=90")
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Animated gradient overlays */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: -2,
          background:
            'radial-gradient(circle at 20% 20%, rgba(139,92,246,0.2), transparent 50%),' +
            'radial-gradient(circle at 80% 80%, rgba(59,130,246,0.2), transparent 50%),' +
            'radial-gradient(circle at 40% 60%, rgba(16,185,129,0.15), transparent 40%)',
          animation: 'gradientShift 15s ease infinite',
          '@keyframes gradientShift': {
            '0%, 100%': { opacity: 0.8 },
            '50%': { opacity: 1 },
          },
        }}
      />

      {/* Floating particles effect */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          background: `
            radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.15), transparent),
            radial-gradient(2px 2px at 60% 70%, rgba(255,255,255,0.1), transparent),
            radial-gradient(1px 1px at 50% 50%, rgba(255,255,255,0.1), transparent),
            radial-gradient(1px 1px at 80% 10%, rgba(255,255,255,0.15), transparent)
          `,
          backgroundSize: '200px 200px, 300px 300px, 250px 250px, 350px 350px',
          backgroundPosition: '0 0, 40px 60px, 130px 270px, 70px 100px',
          opacity: 0.3,
        }}
      />

      {/* Enhanced AppBar */}
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: 'blur(20px) saturate(180%)',
          backgroundColor:
            theme.palette.mode === 'light'
              ? 'rgba(255,255,255,0.85)'
              : 'rgba(2,6,23,0.85)',
          borderBottom: `1px solid ${
            theme.palette.mode === 'light'
              ? 'rgba(148,163,184,0.25)'
              : 'rgba(56,189,248,0.15)'
          }`,
          boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open navigation"
              sx={{ 
                display: { xs: 'inline-flex', md: 'none' },
                '&:hover': {
                  backgroundColor: 'rgba(56,189,248,0.1)',
                  transform: 'scale(1.05)',
                  transition: 'all 0.2s ease',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              component="a"
              href="/"
              sx={{
                textDecoration: 'none',
                fontWeight: 800,
                letterSpacing: -0.5,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 100%)',
                backgroundSize: '200% auto',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                animation: 'gradient 3s ease infinite',
                '@keyframes gradient': {
                  '0%, 100%': { backgroundPosition: '0% center' },
                  '50%': { backgroundPosition: '100% center' },
                },
              }}
            >
              ✈️ Nomadiq
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Tooltip title="Settings">
              <IconButton 
                color="inherit"
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(56,189,248,0.1)',
                    transform: 'rotate(90deg)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                <Settings />
              </IconButton>
            </Tooltip>

            <Tooltip title={mode === 'light' ? 'Dark mode' : 'Light mode'}>
              <IconButton
                color="inherit"
                onClick={onToggleMode}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(251,191,36,0.1)',
                    transform: 'scale(1.1)',
                    transition: 'all 0.2s ease',
                  },
                }}
              >
                {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
              </IconButton>
            </Tooltip>

            <Tooltip title="Notifications">
              <IconButton 
                color="inherit"
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(249,115,22,0.1)',
                  },
                }}
              >
                <Badge 
                  badgeContent={3} 
                  color="error"
                  sx={{
                    '& .MuiBadge-badge': {
                      animation: 'pulse 2s ease-in-out infinite',
                      '@keyframes pulse': {
                        '0%, 100%': { transform: 'scale(1)' },
                        '50%': { transform: 'scale(1.1)' },
                      },
                    },
                  }}
                >
                  <NotificationsNone />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Your Profile">
              <Avatar
                alt="User avatar"
                sx={{
                  width: 40,
                  height: 40,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: '2px solid rgba(56,189,248,0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1) rotate(5deg)',
                    boxShadow: '0 8px 20px rgba(102,126,234,0.4)',
                  },
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
                borderRadius: 5,
                p: { xs: 3, md: 4 },
                background: `
                  linear-gradient(
                    135deg,
                    rgba(15,23,42,0.95) 0%,
                    rgba(17,24,39,0.98) 50%,
                    rgba(30,41,59,0.95) 100%
                  )
                `,
                border: '1px solid rgba(148,163,184,0.2)',
                boxShadow: `
                  0 0 80px rgba(139,92,246,0.15),
                  0 30px 60px rgba(0,0,0,0.3),
                  inset 0 1px 0 rgba(255,255,255,0.05)
                `,
                backdropFilter: 'blur(20px) saturate(180%)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)',
                },
              }}
            >
              <AnimatePresence mode="wait">{enhancedChildren}</AnimatePresence>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Sarthi bot */}
      <SarthiBot open={sarthiOpen} onClose={() => setSarthiOpen(false)} />

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

const DashboardHome = ({ onOpenSarthi, profile }) => {
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
              <Typography 
                variant="h4" 
                component="h1" 
                gutterBottom
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: 800,
                }}
              >
                Welcome back,{' '}
                <Box component="span" sx={{ fontWeight: 900 }}>
                  {displayName}! 👋
                </Box>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
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
                    You're into:
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
                          border: '1px solid rgba(59,130,246,0.3)',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            bgcolor: 'rgba(59,130,246,0.3)',
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              ) : null}
            </Box>

            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', flexWrap: 'wrap' }}>
              <Button
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variant='contained'
                color='primary'
                onClick={() => setInsightsOpen(true)}
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '0 4px 15px rgba(102,126,234,0.4)',
                  fontWeight: 600,
                  px: 3,
                  py: 1.2,
                  borderRadius: 3,
                  textTransform: 'none',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(102,126,234,0.6)',
                  },
                }}
              >
                🔮 Smart Insights
              </Button>
              <Button
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variant='outlined'
                color='secondary'
                onClick={() => navigate('/trips')}
                sx={{
                  borderWidth: 2,
                  fontWeight: 600,
                  px: 3,
                  py: 1.2,
                  borderRadius: 3,
                  textTransform: 'none',
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: 'rgba(249,115,22,0.1)',
                  },
                }}
              >
                ➕ New Trip
              </Button>
            </Box>
          </Box>

          {/* MAIN DASHBOARD ROW */}
          <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <DashboardStats />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <QuickActions onOpenSarthi={onOpenSarthi} />
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <ActivityTimeline />
              </motion.div>
            </Grid>
          </Grid>

          {/* EXTRA ROW: BADGES, WEATHER, VLOGGERS */}
          <Grid container spacing={3} sx={{ mt: 3 }}>
            {/* Badges / milestones */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Box
                  sx={{
                    borderRadius: 4,
                    p: 2.5,
                    bgcolor: 'rgba(15,23,42,0.96)',
                    border: '1px solid rgba(148,163,184,0.2)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 48px rgba(139,92,246,0.2)',
                      borderColor: 'rgba(139,92,246,0.4)',
                    },
                  }}
                >
                  <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 700 }}>
                    🏆 Badges & Milestones
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1.5 }}
                  >
                    You're 2 trips away from your next badge!
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Chip
                      label="Early Explorer"
                      color="primary"
                      size="small"
                      sx={{ 
                        bgcolor: 'rgba(37,99,235,0.18)',
                        border: '1px solid rgba(37,99,235,0.3)',
                        fontWeight: 600,
                      }}
                    />
                    <Chip
                      label="Budget Ninja"
                      color="success"
                      size="small"
                      sx={{ 
                        bgcolor: 'rgba(22,163,74,0.18)',
                        border: '1px solid rgba(22,163,74,0.3)',
                        fontWeight: 600,
                      }}
                    />
                    <Chip
                      label="Safe Route Pro"
                      color="warning"
                      size="small"
                      sx={{ 
                        bgcolor: 'rgba(234,179,8,0.18)',
                        border: '1px solid rgba(234,179,8,0.3)',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                  <Button
                    size="small"
                    sx={{ 
                      mt: 2, 
                      textTransform: 'none', 
                      px: 0,
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: 'primary.light',
                      },
                    }}
                    onClick={() => navigate('/badges')}
                  >
                    View all badges →
                  </Button>
                </Box>
              </motion.div>
            </Grid>

            {/* Weather snapshot */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Box
                  sx={{
                    borderRadius: 4,
                    p: 2.5,
                    bgcolor: 'rgba(15,23,42,0.96)',
                    border: '1px solid rgba(148,163,184,0.2)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 48px rgba(59,130,246,0.2)',
                      borderColor: 'rgba(59,130,246,0.4)',
                    },
                  }}
                >
                  <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 700 }}>
                    🌤️ Weather Snapshot
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
                      variant="h2"
                      sx={{ 
                        fontWeight: 800, 
                        lineHeight: 1,
                        background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                      }}
                    >
                      27°
                    </Typography>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Clear evening
                      </Typography>
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
              </motion.div>
            </Grid>

            {/* Connect with vloggers */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Box
                  sx={{
                    borderRadius: 4,
                    p: 2.5,
                    bgcolor: 'rgba(15,23,42,0.96)',
                    border: '1px solid rgba(148,163,184,0.2)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 48px rgba(16,185,129,0.2)',
                      borderColor: 'rgba(16,185,129,0.4)',
                    },
                  }}
                >
                  <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 700 }}>
                    📹 Connect with Vloggers
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
                        borderRadius: 2,
                        '&:hover': {
                          backgroundColor: 'rgba(59,130,246,0.1)',
                        },
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
                        borderRadius: 2,
                        '&:hover': {
                          backgroundColor: 'rgba(59,130,246,0.1)',
                        },
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
                        borderRadius: 2,
                        '&:hover': {
                          backgroundColor: 'rgba(59,130,246,0.1)',
                        },
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
                    sx={{ 
                      mt: 2, 
                      textTransform: 'none', 
                      px: 0,
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: 'primary.light',
                      },
                    }}
                  >
                    Browse more creators →
                  </Button>
                </Box>
              </motion.div>
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