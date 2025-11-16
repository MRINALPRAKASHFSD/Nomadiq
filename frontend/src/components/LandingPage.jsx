import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const words = ['freedom', 'clarity', 'confidence'];

const LandingPage = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // typewriter for the final word
  useEffect(() => {
    const current = words[wordIndex % words.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next.length === current.length) {
          setIsDeleting(true);
        }
      } else {
        const next = current.slice(0, displayed.length - 1);
        setDisplayed(next);
        if (next.length === 0) {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, isDeleting ? 70 : 120);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  const handleScrollToDashboard = () => {
    const el = document.getElementById('nomadiq-dashboard-main');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)', // full view under app bar
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'left',
        color: 'white',
        px: { xs: 3, md: 8 },
        pb: 8,
      }}
    >
      {/* very light overlay so image stays visible */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(15,23,42,0.38), rgba(15,23,42,0.32))',
          zIndex: -1,
        }}
      />

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        sx={{
          maxWidth: 760,
          animation: 'floatSoft 9s ease-in-out infinite',
        }}
      >
        {/* Tiny pill badge */}
        <Chip
          label="Nomadiq · Intelligent Travel Cloud"
          variant="outlined"
          sx={{
            mb: 2,
            borderColor: 'rgba(148,163,184,0.6)',
            bgcolor: 'rgba(15,23,42,0.6)',
            color: 'rgba(226,232,240,0.96)',
            fontSize: 11,
            letterSpacing: 2.5,
            textTransform: 'uppercase',
          }}
        />

        {/* MAIN WORD: Travel with gradient + display font */}
        <Typography
          variant="h2"
          className="font-display"
          sx={{
            mt: 0.5,
            mb: 0,
            fontWeight: 800,
            letterSpacing: 6,
            textTransform: 'uppercase',
            background:
              'linear-gradient(120deg, #e0f2fe, #38bdf8, #a5b4fc, #f97316)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Travel
        </Typography>

        {/* Vision line under Travel */}
        <Typography
          variant="h4"
          className="font-display"
          sx={{
            mb: 2.5,
            fontWeight: 600,
            color: 'rgba(241,245,249,0.96)',
          }}
        >
          where every journey feels curated, calm, and truly yours.
        </Typography>

        {/* Vision paragraph */}
        <Typography
          variant="h6"
          sx={{
            mb: 2.5,
            color: 'rgba(226,232,240,0.94)',
            maxWidth: 640,
          }}
        >
          Nomadiq is your command center for movement—uniting live safety
          signals, budgets, and local insight into one elegant dashboard, so you
          can roam the world without losing your sense of home.
        </Typography>

        {/* Animated sentence */}
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(191,219,254,0.96)',
            mb: 4,
            fontSize: 15.5,
          }}
        >
          Plan with{' '}
          <Box
            component="span"
            sx={{
              fontWeight: 600,
              color: '#38bdf8',
              textShadow: '0 0 16px rgba(56,189,248,0.55)',
            }}
          >
            {displayed || '\u00A0'}
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: 3,
                ml: 0.25,
                height: 20,
                bgcolor: '#38bdf8',
                animation: 'blink 1s step-end infinite',
                verticalAlign: 'bottom',
                borderRadius: 999,
              }}
            />
          </Box>
          .
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button
            component={motion.button}
            whileHover={{ scale: 1.04, boxShadow: '0 16px 40px rgba(59,130,246,0.6)' }}
            whileTap={{ scale: 0.97 }}
            variant="contained"
            size="large"
            onClick={handleScrollToDashboard}
            sx={{
              px: 3.4,
              py: 1.2,
              borderRadius: 999,
              fontWeight: 600,
              textTransform: 'none',
              fontSize: 15.5,
              background:
                'linear-gradient(135deg, #3b82f6, #22c55e)',
            }}
          >
            Enter Nomadiq Dashboard
          </Button>

          <Button
            component={motion.button}
            whileHover={{ scale: 1.04, backgroundColor: 'rgba(15,23,42,0.8)' }}
            whileTap={{ scale: 0.97 }}
            variant="outlined"
            size="large"
            onClick={handleScrollToDashboard}
            sx={{
              px: 3.2,
              py: 1.2,
              borderRadius: 999,
              fontWeight: 500,
              textTransform: 'none',
              fontSize: 15,
              borderColor: 'rgba(226,232,240,0.85)',
              color: 'rgba(241,245,249,0.96)',
              backgroundColor: 'rgba(15,23,42,0.6)',
            }}
          >
            Explore live insights
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;