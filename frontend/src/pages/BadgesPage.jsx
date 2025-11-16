import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  IconButton,
  LinearProgress,
  Paper,
  Typography,
  Avatar,
  Divider,
  Tooltip,
  Tab,
  Tabs,
  Alert,
} from '@mui/material';
import {
  ArrowBack,
  EmojiEvents,
  Star,
  TrendingUp,
  LocalActivity,
  Flight,
  Hotel,
  AttachMoney,
  Explore,
  Security,
  Camera,
  Favorite,
  Group,
  Language,
  Timer,
  CheckCircle,
  Lock,
  Whatshot,
  Diamond,
  MilitaryTech,
  CardGiftcard,
  Schedule,
  Public,
  Hiking,
  RestaurantMenu,
  BeachAccess,
  Castle,
  Spa,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BadgesPage = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);

  // User stats (this would come from your backend)
  const userStats = {
    totalTrips: 3,
    totalDestinations: 5,
    totalDays: 21,
    totalSpent: 125000,
    totalSaved: 15000,
    photosUploaded: 47,
    friendsReferred: 2,
    reviewsWritten: 8,
    countriesVisited: 2,
    level: 5,
    xp: 3250,
    nextLevelXp: 5000,
  };

  // Badges data with progress
  const badges = [
    {
      id: 'first-trip',
      name: 'First Flight',
      description: 'Complete your first trip',
      icon: <Flight />,
      category: 'milestone',
      rarity: 'common',
      earned: true,
      earnedDate: '2025-10-15',
      progress: 100,
      target: 1,
      reward: 100,
      color: '#667eea',
    },
    {
      id: 'early-explorer',
      name: 'Early Explorer',
      description: 'Complete 3 trips',
      icon: <Explore />,
      category: 'milestone',
      rarity: 'common',
      earned: true,
      earnedDate: '2025-11-10',
      progress: 100,
      target: 3,
      reward: 250,
      color: '#10b981',
    },
    {
      id: 'budget-ninja',
      name: 'Budget Ninja',
      description: 'Save ₹10,000 on bookings',
      icon: <AttachMoney />,
      category: 'achievement',
      rarity: 'rare',
      earned: true,
      earnedDate: '2025-11-14',
      progress: 100,
      target: 10000,
      reward: 500,
      color: '#f59e0b',
    },
    {
      id: 'safe-traveler',
      name: 'Safe Route Pro',
      description: 'Complete 5 trips with safety tracking',
      icon: <Security />,
      category: 'achievement',
      rarity: 'rare',
      earned: false,
      progress: 60,
      target: 5,
      reward: 300,
      color: '#ef4444',
    },
    {
      id: 'photo-master',
      name: 'Memory Keeper',
      description: 'Upload 50 travel photos',
      icon: <Camera />,
      category: 'social',
      rarity: 'common',
      earned: false,
      progress: 94,
      target: 50,
      reward: 200,
      color: '#ec4899',
    },
    {
      id: 'social-butterfly',
      name: 'Social Butterfly',
      description: 'Refer 3 friends',
      icon: <Group />,
      category: 'social',
      rarity: 'rare',
      earned: false,
      progress: 67,
      target: 3,
      reward: 400,
      color: '#8b5cf6',
    },
    {
      id: 'globe-trotter',
      name: 'Globe Trotter',
      description: 'Visit 10 destinations',
      icon: <Public />,
      category: 'exploration',
      rarity: 'epic',
      earned: false,
      progress: 50,
      target: 10,
      reward: 800,
      color: '#3b82f6',
    },
    {
      id: 'speed-demon',
      name: 'Speed Planner',
      description: 'Plan a trip in under 10 minutes',
      icon: <Timer />,
      category: 'achievement',
      rarity: 'rare',
      earned: false,
      progress: 0,
      target: 1,
      reward: 300,
      color: '#f97316',
    },
    {
      id: 'adventure-seeker',
      name: 'Adventure Seeker',
      description: 'Complete 5 adventure activities',
      icon: <Hiking />,
      category: 'exploration',
      rarity: 'epic',
      earned: false,
      progress: 40,
      target: 5,
      reward: 600,
      color: '#14b8a6',
    },
    {
      id: 'foodie',
      name: 'Food Explorer',
      description: 'Try 20 local cuisines',
      icon: <RestaurantMenu />,
      category: 'exploration',
      rarity: 'rare',
      earned: false,
      progress: 35,
      target: 20,
      reward: 400,
      color: '#f59e0b',
    },
    {
      id: 'beach-lover',
      name: 'Beach Bum',
      description: 'Visit 5 beach destinations',
      icon: <BeachAccess />,
      category: 'exploration',
      rarity: 'rare',
      earned: false,
      progress: 20,
      target: 5,
      reward: 350,
      color: '#06b6d4',
    },
    {
      id: 'heritage-hunter',
      name: 'Heritage Hunter',
      description: 'Visit 5 UNESCO heritage sites',
      icon: <Castle />,
      category: 'exploration',
      rarity: 'epic',
      earned: false,
      progress: 20,
      target: 5,
      reward: 700,
      color: '#a855f7',
    },
    {
      id: 'wellness-warrior',
      name: 'Wellness Warrior',
      description: 'Book 3 wellness retreats',
      icon: <Spa />,
      category: 'lifestyle',
      rarity: 'rare',
      earned: false,
      progress: 33,
      target: 3,
      reward: 500,
      color: '#84cc16',
    },
    {
      id: 'legendary-nomad',
      name: 'Legendary Nomad',
      description: 'Complete 50 trips',
      icon: <MilitaryTech />,
      category: 'milestone',
      rarity: 'legendary',
      earned: false,
      progress: 6,
      target: 50,
      reward: 5000,
      color: '#fbbf24',
    },
  ];

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'common': return '#94a3b8';
      case 'rare': return '#3b82f6';
      case 'epic': return '#a855f7';
      case 'legendary': return '#f59e0b';
      default: return '#64748b';
    }
  };

  const getRarityIcon = (rarity) => {
    switch (rarity) {
      case 'common': return <Star />;
      case 'rare': return <Diamond />;
      case 'epic': return <Whatshot />;
      case 'legendary': return <MilitaryTech />;
      default: return <Star />;
    }
  };

  const filteredBadges = badges.filter((badge) => {
    if (tabValue === 0) return true; // All
    if (tabValue === 1) return badge.earned; // Earned
    if (tabValue === 2) return !badge.earned && badge.progress > 0; // In Progress
    if (tabValue === 3) return !badge.earned && badge.progress === 0; // Locked
    return true;
  });

  const earnedBadges = badges.filter((b) => b.earned).length;
  const totalXpEarned = badges.filter((b) => b.earned).reduce((sum, b) => sum + b.reward, 0);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, rgba(6,12,30,0.95) 0%, rgba(17,24,39,0.98) 100%)',
        pt: 3,
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <IconButton
              onClick={() => navigate('/')}
              sx={{
                mr: 2,
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'rgba(102,126,234,0.1)',
                },
              }}
            >
              <ArrowBack />
            </IconButton>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  mb: 1,
                }}
              >
                🏆 Badges & Achievements
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Earn badges, level up, and unlock exclusive rewards!
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* User Level Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card
            sx={{
              mb: 4,
              background: 'linear-gradient(135deg, rgba(251,191,36,0.15) 0%, rgba(245,158,11,0.15) 100%)',
              border: '2px solid rgba(251,191,36,0.3)',
              borderRadius: 4,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Animated background */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: `
                  radial-gradient(circle at 20% 50%, rgba(251,191,36,0.1), transparent 50%),
                  radial-gradient(circle at 80% 50%, rgba(245,158,11,0.1), transparent 50%)
                `,
                animation: 'pulse 3s ease-in-out infinite',
                '@keyframes pulse': {
                  '0%, 100%': { opacity: 0.5 },
                  '50%': { opacity: 1 },
                },
              }}
            />

            <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        width: 120,
                        height: 120,
                        margin: '0 auto',
                        background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
                        fontSize: '3rem',
                        fontWeight: 800,
                        border: '4px solid rgba(251,191,36,0.5)',
                        boxShadow: '0 8px 32px rgba(251,191,36,0.4)',
                      }}
                    >
                      {userStats.level}
                    </Avatar>
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 700 }}>
                      Level {userStats.level}
                    </Typography>
                    <Chip
                      label="Experienced Traveler"
                      size="small"
                      sx={{
                        mt: 1,
                        background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={9}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            Experience Points
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 700 }}>
                            {userStats.xp} / {userStats.nextLevelXp} XP
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={(userStats.xp / userStats.nextLevelXp) * 100}
                          sx={{
                            height: 12,
                            borderRadius: 999,
                            backgroundColor: 'rgba(251,191,36,0.2)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 999,
                              background: 'linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%)',
                            },
                          }}
                        />
                        <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                          {userStats.nextLevelXp - userStats.xp} XP to Level {userStats.level + 1}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={6} sm={3}>
                      <Box sx={{ textAlign: 'center' }}>
                        <EmojiEvents sx={{ fontSize: 32, color: '#f59e0b', mb: 1 }} />
                        <Typography variant="h5" sx={{ fontWeight: 800 }}>
                          {earnedBadges}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Badges Earned
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={6} sm={3}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Flight sx={{ fontSize: 32, color: '#3b82f6', mb: 1 }} />
                        <Typography variant="h5" sx={{ fontWeight: 800 }}>
                          {userStats.totalTrips}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Trips Completed
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={6} sm={3}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Public sx={{ fontSize: 32, color: '#10b981', mb: 1 }} />
                        <Typography variant="h5" sx={{ fontWeight: 800 }}>
                          {userStats.totalDestinations}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Destinations
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={6} sm={3}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Star sx={{ fontSize: 32, color: '#ec4899', mb: 1 }} />
                        <Typography variant="h5" sx={{ fontWeight: 800 }}>
                          {totalXpEarned}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Total XP
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Paper
            sx={{
              mb: 3,
              background: 'rgba(15,23,42,0.95)',
              border: '1px solid rgba(148,163,184,0.2)',
              borderRadius: 3,
            }}
          >
            <Tabs
              value={tabValue}
              onChange={(e, val) => setTabValue(val)}
              sx={{
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                },
              }}
            >
              <Tab label={`All (${badges.length})`} />
              <Tab label={`Earned (${earnedBadges})`} />
              <Tab label={`In Progress (${badges.filter(b => !b.earned && b.progress > 0).length})`} />
              <Tab label={`Locked (${badges.filter(b => !b.earned && b.progress === 0).length})`} />
            </Tabs>
          </Paper>
        </motion.div>

        {/* Badges Grid */}
        <Grid container spacing={3}>
          {filteredBadges.map((badge, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={badge.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: badge.earned
                      ? `linear-gradient(135deg, ${badge.color}20 0%, ${badge.color}10 100%)`
                      : 'rgba(15,23,42,0.95)',
                    border: badge.earned
                      ? `2px solid ${badge.color}`
                      : '2px solid rgba(148,163,184,0.2)',
                    borderRadius: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    opacity: badge.earned ? 1 : 0.8,
                    filter: !badge.earned && badge.progress === 0 ? 'grayscale(70%)' : 'none',
                    '&:hover': {
                      transform: badge.earned ? 'translateY(-8px) scale(1.02)' : 'translateY(-4px)',
                      boxShadow: badge.earned
                        ? `0 12px 40px ${badge.color}40`
                        : '0 8px 24px rgba(0,0,0,0.3)',
                      borderColor: badge.color,
                    },
                  }}
                >
                  {/* Rarity Banner */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: -32,
                      transform: 'rotate(45deg)',
                      bgcolor: getRarityColor(badge.rarity),
                      color: 'white',
                      px: 5,
                      py: 0.5,
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    }}
                  >
                    {badge.rarity}
                  </Box>

                  <CardContent sx={{ textAlign: 'center', pt: 4, pb: 3 }}>
                    {/* Badge Icon */}
                    <Box
                      sx={{
                        position: 'relative',
                        display: 'inline-block',
                        mb: 2,
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 80,
                          height: 80,
                          margin: '0 auto',
                          background: badge.earned
                            ? `linear-gradient(135deg, ${badge.color} 0%, ${badge.color}cc 100%)`
                            : 'rgba(148,163,184,0.2)',
                          fontSize: '2.5rem',
                          border: `3px solid ${badge.earned ? badge.color : 'rgba(148,163,184,0.3)'}`,
                          boxShadow: badge.earned ? `0 8px 24px ${badge.color}60` : 'none',
                        }}
                      >
                        {!badge.earned && badge.progress === 0 ? <Lock /> : badge.icon}
                      </Avatar>

                      {/* Earned Check */}
                      {badge.earned && (
                        <Avatar
                          sx={{
                            position: 'absolute',
                            bottom: -4,
                            right: -4,
                            width: 28,
                            height: 28,
                            bgcolor: '#10b981',
                            border: '2px solid rgba(15,23,42,0.95)',
                          }}
                        >
                          <CheckCircle fontSize="small" />
                        </Avatar>
                      )}
                    </Box>

                    {/* Badge Name */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 0.5,
                        color: badge.earned ? badge.color : 'text.primary',
                      }}
                    >
                      {badge.name}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, minHeight: 40 }}
                    >
                      {badge.description}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    {/* Progress or Earned Date */}
                    {badge.earned ? (
                      <Box>
                        <Chip
                          icon={<CheckCircle />}
                          label={`Earned ${new Date(badge.earnedDate).toLocaleDateString()}`}
                          size="small"
                          color="success"
                          sx={{ fontWeight: 600 }}
                        />
                        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                          <Star sx={{ color: '#fbbf24', fontSize: 18 }} />
                          <Typography variant="body2" sx={{ fontWeight: 700, color: '#fbbf24' }}>
                            +{badge.reward} XP
                          </Typography>
                        </Box>
                      </Box>
                    ) : (
                      <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="caption" color="text.secondary">
                            Progress
                          </Typography>
                          <Typography variant="caption" sx={{ fontWeight: 600 }}>
                            {badge.progress}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={badge.progress}
                          sx={{
                            height: 8,
                            borderRadius: 999,
                            backgroundColor: 'rgba(148,163,184,0.2)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 999,
                              background: `linear-gradient(90deg, ${badge.color} 0%, ${badge.color}cc 100%)`,
                            },
                          }}
                        />
                        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                          <CardGiftcard sx={{ color: badge.color, fontSize: 18 }} />
                          <Typography variant="body2" sx={{ fontWeight: 700, color: badge.color }}>
                            Reward: {badge.reward} XP
                          </Typography>
                        </Box>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Motivational Message */}
        {filteredBadges.length === 0 && (
          <Alert
            severity="info"
            sx={{
              mt: 4,
              borderRadius: 3,
              background: 'rgba(59,130,246,0.1)',
              border: '1px solid rgba(59,130,246,0.3)',
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
              No badges in this category yet!
            </Typography>
            <Typography variant="body2">
              Keep exploring and completing trips to unlock more achievements! 🎯
            </Typography>
          </Alert>
        )}

        {/* Next Badge Hint */}
        {tabValue === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Alert
              severity="success"
              icon={<TrendingUp />}
              sx={{
                mt: 4,
                borderRadius: 3,
                background: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.3)',
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                🎯 You're close to your next badge!
              </Typography>
              <Typography variant="body2">
                Complete 2 more trips to earn <strong>Safe Route Pro</strong> and get 300 XP!
              </Typography>
            </Alert>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};

export default BadgesPage;