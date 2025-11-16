import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Chip,
  Divider,
  Drawer,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

const travelIntents = [
  'Remote work',
  'Backpacking',
  'City hopping',
  'Spiritual retreats',
  'Food‑first trips',
  'Budget exploration',
];

const ProfileDrawer = ({ open, onClose, onSave, initialProfile }) => {
  const [name, setName] = useState('');
  const [headline, setHeadline] = useState('');
  const [selectedIntents, setSelectedIntents] = useState([]);
  const [notes, setNotes] = useState('');
  const [instagram, setInstagram] = useState('');

  // Load initial profile when opened
  useEffect(() => {
    if (initialProfile) {
      setName(initialProfile.name || '');
      setHeadline(initialProfile.headline || '');
      setSelectedIntents(initialProfile.intents || []);
      setNotes(initialProfile.notes || '');
      setInstagram(initialProfile.instagram || '');
    }
  }, [initialProfile, open]);

  const toggleIntent = (intent) => {
    setSelectedIntents((current) =>
      current.includes(intent)
        ? current.filter((i) => i !== intent)
        : [...current, intent],
    );
  };

  const handleSave = () => {
    onSave({
      name,
      headline,
      intents: selectedIntents,
      notes,
      instagram,
    });
    onClose();
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          // base styling
          width: { xs: 320, sm: 380 },
          borderLeft: '1px solid rgba(148,163,184,0.35)',
          bgcolor: 'rgba(15,23,42,0.98)',
          backdropFilter: 'blur(18px)',
          backgroundImage:
            'radial-gradient(circle at top, rgba(56,189,248,0.15), transparent 55%), ' +
            'radial-gradient(circle at bottom, rgba(249,115,22,0.18), transparent 55%)',

          // animation
          transform: open ? 'translateX(0)' : 'translateX(24px)',
          opacity: open ? 1 : 0,
          transition:
            'transform 300ms cubic-bezier(0.22, 1, 0.36, 1), opacity 260ms ease-out',
        },
      }}
    >
      <Box
        sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          color: 'rgba(226,232,240,0.96)',
          animation: open ? 'profileFloat 14s ease-in-out infinite' : 'none',
        }}
      >
        <Box
          sx={{
            mb: 2.5,
            animation: 'fadeUp 420ms ease-out',
          }}
        >
          <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
            Your Nomadiq profile
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tell Nomadiq how you like to travel so we can tune suggestions.
          </Typography>
        </Box>

        <Stack
          spacing={2.25}
          sx={{
            animation: 'fadeUp 480ms ease-out',
            animationDelay: '40ms',
            animationFillMode: 'backwards',
          }}
        >
          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{
              sx: {
                borderRadius: 2,
                '&:hover': {
                  boxShadow: '0 0 0 1px rgba(59,130,246,0.6)',
                },
              },
            }}
          />

          <TextField
            label="Profile headline"
            placeholder="e.g. Remote designer who chases hill stations"
            fullWidth
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            InputProps={{
              sx: {
                borderRadius: 2,
                '&:hover': {
                  boxShadow: '0 0 0 1px rgba(94,234,212,0.7)',
                },
              },
            }}
          />

          <TextField
            label="Instagram link (optional)"
            placeholder="https://instagram.com/your_handle"
            fullWidth
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            InputProps={{
              sx: {
                borderRadius: 2,
                '&:hover': {
                  boxShadow: '0 0 0 1px rgba(244,114,182,0.7)',
                },
              },
            }}
          />

          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              What kind of travel are you into?
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {travelIntents.map((intent) => {
                const active = selectedIntents.includes(intent);
                return (
                  <Chip
                    key={intent}
                    label={intent}
                    onClick={() => toggleIntent(intent)}
                    color={active ? 'primary' : 'default'}
                    variant={active ? 'filled' : 'outlined'}
                    size="small"
                    sx={{
                      mb: 1,
                      borderRadius: 999,
                      transition:
                        'transform 140ms ease-out, box-shadow 160ms ease-out, background-color 160ms ease-out',
                      transform: active ? 'translateY(-1px)' : 'none',
                      boxShadow: active
                        ? '0 12px 30px rgba(37,99,235,0.4)'
                        : 'none',
                      bgcolor: active
                        ? 'rgba(37,99,235,0.9)'
                        : 'rgba(15,23,42,0.9)',
                      '&:hover': {
                        transform: 'translateY(-2px) scale(1.02)',
                        boxShadow: '0 14px 40px rgba(59,130,246,0.5)',
                      },
                    }}
                  />
                );
              })}
            </Stack>
          </Box>

          <TextField
            label="Anything specific you want from your next trips?"
            multiline
            minRows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Coworking with ocean views, weekend treks, cafés with Wi‑Fi, safe late‑night areas, etc."
            InputProps={{
              sx: {
                borderRadius: 2,
                '&:hover': {
                  boxShadow: '0 0 0 1px rgba(148,163,184,0.8)',
                },
              },
            }}
          />
        </Stack>

        <Box sx={{ flexGrow: 1 }} />

        <Divider
          sx={{
            my: 2,
            borderColor: 'rgba(148,163,184,0.3)',
            animation: 'fadeIn 260ms ease-out',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 1.5,
            animation: 'fadeUp 420ms ease-out',
            animationDelay: '80ms',
            animationFillMode: 'backwards',
          }}
        >
          <Button
            onClick={onClose}
            color="inherit"
            sx={{
              textTransform: 'none',
              letterSpacing: 0.4,
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              textTransform: 'none',
              letterSpacing: 0.4,
              px: 2.4,
              boxShadow: '0 14px 30px rgba(59,130,246,0.6)',
              background:
                'linear-gradient(135deg, #3b82f6, #22c55e, #06b6d4)',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 6s ease infinite',
              '&:hover': {
                boxShadow: '0 18px 45px rgba(37,99,235,0.8)',
                transform: 'translateY(-1px)',
              },
            }}
          >
            Save profile
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default ProfileDrawer;