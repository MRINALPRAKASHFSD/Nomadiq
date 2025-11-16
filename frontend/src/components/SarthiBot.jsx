import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  IconButton,
  Typography,
  TextField,
  Paper,
  Fade,
  Avatar,
  CircularProgress,
} from '@mui/material';
import { Close, Send, SmartToy } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const SarthiiBot = ({ open, onClose }) => {
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: "Hi, I'm Sarthii – your Nomadiq travel co‑pilot. Ask me anything about routes, safety, budgets, visas, or emergency help in your destination.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  // auto-scroll to last message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMessage = { from: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Call your backend API
      const res = await fetch('/api/sarthii', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          history: messages.slice(-10), // send last 10 messages as short context
        }),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();

      const botText =
        data.reply ||
        "I had trouble getting a response right now. Please try again in a moment.";

      setMessages((prev) => [
        ...prev,
        userMessage, // ensure user msg is present
        { from: 'bot', text: botText },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          from: 'bot',
          text:
            "Hmm, I couldn't reach my brain (API) just now. Check your internet / server and try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <Fade in={open}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.96 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 2000,
          }}
        >
          <Paper
            elevation={10}
            sx={{
              width: { xs: 320, sm: 380 },
              height: 460,
              borderRadius: 4,
              overflow: 'hidden',
              bgcolor: 'rgba(15,23,42,0.98)',
              border: '1px solid rgba(148,163,184,0.5)',
              display: 'flex',
              flexDirection: 'column',
              backdropFilter: 'blur(18px)',
            }}
          >
            {/* header */}
            <Box
              sx={{
                px: 2,
                py: 1.5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(148,163,184,0.4)',
                bgcolor: 'rgba(15,23,42,0.95)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar
                  sx={{
                    bgcolor: 'linear-gradient(135deg,#22c55e,#0ea5e9)',
                    background:
                      'linear-gradient(135deg,#22c55e,#0ea5e9)',
                    width: 32,
                    height: 32,
                  }}
                >
                  <SmartToy fontSize="small" />
                </Avatar>
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, lineHeight: 1.1 }}
                  >
                    Sarthii
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: 'rgba(148,163,184,0.9)' }}
                  >
                    Travel safety & planning assistant
                  </Typography>
                </Box>
              </Box>
              <IconButton size="small" onClick={onClose}>
                <Close fontSize="small" />
              </IconButton>
            </Box>

            {/* messages */}
            <Box
              ref={scrollRef}
              sx={{
                flex: 1,
                px: 2,
                pt: 1.5,
                pb: 1,
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                  width: 4,
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'rgba(148,163,184,0.6)',
                  borderRadius: 999,
                },
              }}
            >
              {messages.map((m, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: 'flex',
                    justifyContent:
                      m.from === 'user' ? 'flex-end' : 'flex-start',
                    mb: 1,
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: '80%',
                      px: 1.5,
                      py: 1,
                      borderRadius: 3,
                      bgcolor:
                        m.from === 'user'
                          ? 'rgba(56,189,248,0.2)'
                          : 'rgba(15,23,42,0.95)',
                      border:
                        m.from === 'user'
                          ? '1px solid rgba(56,189,248,0.8)'
                          : '1px solid rgba(148,163,184,0.5)',
                      color: 'rgba(226,232,240,0.96)',
                      fontSize: 13.5,
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {m.text}
                  </Box>
                </Box>
              ))}

              {loading && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CircularProgress size={16} />
                  <Typography
                    variant="caption"
                    sx={{ color: 'rgba(148,163,184,0.9)' }}
                  >
                    Sarthii is thinking about the best route…
                  </Typography>
                </Box>
              )}
            </Box>

            {/* input */}
            <Box
              sx={{
                p: 1.5,
                borderTop: '1px solid rgba(148,163,184,0.4)',
                bgcolor: 'rgba(15,23,42,0.97)',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <TextField
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about routes, safety, budgets, visas..."
                variant="outlined"
                size="small"
                fullWidth
                multiline
                minRows={1}
                maxRows={3}
                InputProps={{
                  sx: {
                    bgcolor: 'rgba(15,23,42,0.9)',
                    borderRadius: 999,
                    color: 'rgba(226,232,240,0.96)',
                    '& fieldset': {
                      borderColor: 'rgba(148,163,184,0.6)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(148,163,184,0.9)',
                    },
                  },
                }}
              />
              <IconButton
                color="primary"
                onClick={handleSend}
                disabled={loading || !input.trim()}
              >
                {loading ? (
                  <CircularProgress size={22} />
                ) : (
                  <Send fontSize="small" />
                )}
              </IconButton>
            </Box>
          </Paper>
        </Box>
      </Fade>
    </AnimatePresence>
  );
};

export default SarthiiBot;