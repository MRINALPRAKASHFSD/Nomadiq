import React from 'react';
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Chip,
  LinearProgress,
  Box,
} from '@mui/material';
import {
  EmojiEvents,
  Shield,
  Star,
  Public,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const badges = [
  {
    id: 1,
    label: 'First Solo Trip',
    description: 'Completed your first solo journey in India.',
    icon: EmojiEvents,
    color: 'primary',
  },
  {
    id: 2,
    label: 'Safety Champion',
    description: 'Maintained a safety score above 90% for 3 trips.',
    icon: Shield,
    color: 'success',
  },
  {
    id: 3,
    label: 'Review Master',
    description: 'Shared 10+ reviews for stays & food.',
    icon: Star,
    color: 'warning',
  },
  {
    id: 4,
    label: '10 Cities Unlocked',
    description: 'Visited 10 unique Indian cities.',
    icon: Public,
    color: 'secondary',
  },
];

const BadgesGamification = () => {
  const progressToNextBadge = 70;

  return (
    <Card
      component={motion.section}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      aria-label="Badges and gamification"
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Badges
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Keep exploring to unlock new achievements.
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          sx={{ mb: 2, flexWrap: 'wrap', rowGap: 1 }}
        >
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <Chip
                key={badge.id}
                icon={<Icon fontSize="small" />}
                label={badge.label}
                color={badge.color}
                variant="outlined"
                sx={{
                  borderRadius: 999,
                  '& .MuiChip-icon': { ml: 0.5 },
                }}
              />
            );
          })}
        </Stack>

        <Box sx={{ mb: 0.5 }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Next badge unlock
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Visit 3 more cities to unlock &quot;Backpacking Pro&quot;
          </Typography>
        </Box>

        <LinearProgress
          variant="determinate"
          value={progressToNextBadge}
          sx={{
            mt: 1,
            height: 8,
            borderRadius: 999,
            backgroundColor: 'rgba(148,163,184,0.35)',
            '& .MuiLinearProgress-bar': {
              borderRadius: 999,
              background: 'linear-gradient(90deg, #4caf50, #ff9800, #f44336)',
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default BadgesGamification;