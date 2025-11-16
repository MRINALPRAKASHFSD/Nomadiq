import React from 'react';
import {
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import {
  AddLocationAlt,
  Map,
  ShieldMoon,
  Lightbulb,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const QuickActions = ({ onOpenSarthii }) => {
  const navigate = useNavigate();

  return (
    <Card
      component="section"
      aria-label="Quick actions"
      sx={{
        borderRadius: 3,
        bgcolor: 'rgba(15,23,42,0.9)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(148,163,184,0.35)',
      }}
    >
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Quick Actions
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Jump back into planning with a single click.
        </Typography>

        <Stack spacing={1.5}>
          <Button
            component={motion.button}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            variant="outlined"
            color="primary"
            startIcon={<AddLocationAlt />}
            sx={{ justifyContent: 'flex-start' }}
            onClick={() => navigate('/trips')}
          >
            Plan a new trip
          </Button>

          <Button
            component={motion.button}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            variant="outlined"
            color="secondary"
            startIcon={<Map />}
            sx={{ justifyContent: 'flex-start' }}
            onClick={() => navigate('/places')}
          >
            Open smart itinerary
          </Button>

          <Button
            component={motion.button}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            variant="outlined"
            color="warning"
            startIcon={<ShieldMoon />}
            sx={{ justifyContent: 'flex-start' }}
            onClick={() => navigate('/safety')}
          >
            Toggle safety mode
          </Button>

          <Button
            component={motion.button}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            variant="contained"
            color="success"
            startIcon={<Lightbulb />}
            sx={{ justifyContent: 'flex-start' }}
            onClick={onOpenSarthii}
          >
            Ask Sarthii
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default QuickActions;