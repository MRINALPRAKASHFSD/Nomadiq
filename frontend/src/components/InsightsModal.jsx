import React from 'react';
import {
  Box,
  Chip,
  IconButton,
  Modal,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { AnimatePresence, motion } from 'framer-motion';

const modalStyle = (theme) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'min(480px, 92vw)',
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 3,
  outline: 'none',
  border:
    theme.palette.mode === 'light'
      ? '1px solid rgba(148,163,184,0.5)'
      : '1px solid rgba(55,65,81,0.9)',
});

const InsightsModal = ({ open, onClose }) => {
  const theme = useTheme();

  return (
    <AnimatePresence>
      {open && (
        <Modal
          open={open}
          onClose={onClose}
          aria-labelledby="smart-insights-title"
          aria-describedby="smart-insights-description"
          closeAfterTransition
        >
          <Box
            component={motion.section}
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.25 }}
            sx={modalStyle(theme)}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 1.5,
                alignItems: 'center',
              }}
            >
              <Typography id="smart-insights-title" variant="h6" component="h2">
                Smart Travel Insights
              </Typography>
              <IconButton
                size="small"
                onClick={onClose}
                aria-label="Close insights"
              >
                <Close fontSize="small" />
              </IconButton>
            </Box>

            <Typography
              id="smart-insights-description"
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              Based on your recent activity, here are quick suggestions to make
              your next trip safer and more enjoyable.
            </Typography>

            <Stack spacing={1.5}>
              <Typography variant="body1">
                • Consider extending your stay in <strong>Jaipur</strong>; hotel
                prices drop mid-week while safety metrics remain high.
              </Typography>
              <Typography variant="body1">
                • Your average daily budget is under target. You can add more
                experiences without exceeding your limit.
              </Typography>
              <Typography variant="body1">
                • Night travel in <strong>mountain regions</strong> is riskier
                this season—prefer day-time journeys where possible.
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <Chip label="Budget-friendly" color="secondary" size="small" />
              <Chip label="Safety-first" color="warning" size="small" />
              <Chip label="Smart routing" color="primary" size="small" />
            </Stack>
          </Box>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default InsightsModal;