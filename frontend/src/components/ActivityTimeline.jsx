import React from 'react';
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import {
  Place,
  Hotel,
  Restaurant,
  DirectionsCar,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Place,
    title: 'Saved Jaipur as a weekend getaway',
    time: '5 minutes ago',
  },
  {
    icon: Hotel,
    title: 'Booked homestay in Manali for next month',
    time: '1 hour ago',
  },
  {
    icon: Restaurant,
    title: 'Rated restaurant in Mumbai: 4.5⭐ for Vada Pav',
    time: 'Today',
  },
  {
    icon: DirectionsCar,
    title: 'Added road trip route from Delhi to Rishikesh',
    time: 'Yesterday',
  },
];

const ActivityTimeline = () => {
  const theme = useTheme();

  return (
    <Card
      component={motion.section}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Recent Activity
        </Typography>
        <List disablePadding>
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <ListItem
                key={item.title}
                component={motion.li}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.07 * index }}
                sx={{ py: 1.2 }}
              >
                <ListItemIcon
                  sx={{ minWidth: 40, color: theme.palette.primary.main }}
                >
                  <Icon fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {item.title}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="caption" color="text.secondary">
                      {item.time}
                    </Typography>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default ActivityTimeline;