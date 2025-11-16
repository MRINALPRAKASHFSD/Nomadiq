import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
} from '@mui/material';

const buddies = [
  {
    name: 'Ananya',
    initials: 'A',
    connectedDestinations: 12,
    insta: 'https://instagram.com/ananya_travels', // change to real profiles
  },
  {
    name: 'Rohit',
    initials: 'R',
    connectedDestinations: 9,
    insta: 'https://instagram.com/rohit_nomad',
  },
  {
    name: 'Priya',
    initials: 'P',
    connectedDestinations: 15,
    insta: 'https://instagram.com/priya.explores',
  },
  {
    name: 'Kabir',
    initials: 'K',
    connectedDestinations: 7,
    insta: 'https://instagram.com/kabir_ontheroad',
  },
];

const SocialCommunity = () => {
  const handleConnect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card
      component="section"
      aria-label="Travel buddies nearby"
      sx={{
        borderRadius: 3,
        bgcolor: 'rgba(15,23,42,0.95)',
        border: '1px solid rgba(148,163,184,0.35)',
      }}
    >
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Travel Buddies Nearby
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Connect with trusted travelers who share similar routes.
        </Typography>

        <List dense sx={{ mb: 1 }}>
          {buddies.map((b) => (
            <ListItem
              key={b.name}
              secondaryAction={
                <Button
                  size="small"
                  variant="outlined"
                  sx={{
                    borderRadius: 999,
                    textTransform: 'none',
                    px: 2,
                    fontSize: 12,
                  }}
                  onClick={() => handleConnect(b.insta)}
                >
                  Connect
                </Button>
              }
            >
              <ListItemAvatar>
                <Avatar
                  sx={{
                    bgcolor: 'rgba(15,23,42,0.9)',
                    border: '1px solid rgba(148,163,184,0.6)',
                    fontSize: 14,
                  }}
                >
                  {b.initials}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {b.name}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="caption"
                    sx={{ color: 'rgba(148,163,184,0.9)' }}
                  >
                    Connected destinations: {b.connectedDestinations}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 1.5 }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            Leaderboard
          </Typography>
          <Chip
            label="Top travelers"
            size="small"
            sx={{
              fontSize: 11,
              bgcolor: 'rgba(15,23,42,0.9)',
              color: 'rgba(226,232,240,0.9)',
              borderRadius: 999,
              border: '1px solid rgba(148,163,184,0.6)',
            }}
          />
        </Box>

        <Box sx={{ mt: 1 }}>
          <Typography variant="caption" color="text.secondary">
            #1 Nomad — 42 places
          </Typography>
          <br />
          <Typography variant="caption" color="text.secondary">
            #2 Ananya — 35 places
          </Typography>
          <br />
          <Typography variant="caption" color="text.secondary">
            #3 Rohit — 29 places
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SocialCommunity;