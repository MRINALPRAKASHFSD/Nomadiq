import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
  LinearProgress,
  Paper,
  Divider,
} from '@mui/material';
import {
  Add,
  ArrowBack,
  CalendarMonth,
  DirectionsBus,
  Flight,
  Hotel,
  LocationOn,
  Map,
  Search,
  Train,
  AttachMoney,
  Edit,
  Delete,
  Share,
  Star,
  CheckCircle,
  LocalActivity,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const TripsPage = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  
  const trips = [
    {
      id: 1,
      name: 'Weekend in Jaipur',
      dates: '21–23 Nov 2025',
      status: 'upcoming',
      transport: 'Train',
      destination: 'Jaipur, Rajasthan',
      budget: 15000,
      spent: 3200,
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=500',
      bookings: {
        flight: null,
        hotel: { name: 'Hotel Clarks Amer', price: 4500 },
        activities: 2,
      },
    },
    {
      id: 2,
      name: 'Manali Homestay',
      dates: '12–18 Dec 2025',
      status: 'planned',
      transport: 'Bus',
      destination: 'Manali, Himachal Pradesh',
      budget: 25000,
      spent: 8000,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500',
      bookings: {
        flight: null,
        hotel: { name: 'Manali Heights', price: 6000 },
        activities: 5,
      },
    },
    {
      id: 3,
      name: 'Goa Beach Party',
      dates: '5–10 Jan 2026',
      status: 'planned',
      transport: 'Flight',
      destination: 'Goa',
      budget: 40000,
      spent: 15000,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500',
      bookings: {
        flight: { name: 'IndiGo 6E-234', price: 8500 },
        hotel: { name: 'Taj Fort Aguada', price: 12000 },
        activities: 8,
      },
    },
  ];

  const filteredTrips = trips.filter((trip) => {
    const matchesSearch = trip.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          trip.destination.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || trip.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'success';
      case 'planned': return 'info';
      case 'completed': return 'default';
      default: return 'default';
    }
  };

  const getTransportIcon = (transport) => {
    switch (transport.toLowerCase()) {
      case 'flight': return <Flight />;
      case 'train': return <Train />;
      case 'bus': return <DirectionsBus />;
      default: return <LocationOn />;
    }
  };

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
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  mb: 1,
                }}
              >
                ✈️ Your Trips
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Manage and create trips with dates, routes, and safety notes.
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={() => navigate('/trips/new')}
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                boxShadow: '0 4px 15px rgba(102,126,234,0.4)',
                fontWeight: 600,
                px: 3,
                py: 1.5,
                borderRadius: 3,
                textTransform: 'none',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(102,126,234,0.6)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Add New Trip
            </Button>
          </Box>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
              <Tab icon={<CalendarMonth />} iconPosition="start" label="Trips" />
              <Tab icon={<Flight />} iconPosition="start" label="Bookings" />
              <Tab icon={<AttachMoney />} iconPosition="start" label="Budget" />
              <Tab icon={<Map />} iconPosition="start" label="Itinerary" />
            </Tabs>
          </Paper>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                placeholder="Search trips by name or destination..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(15,23,42,0.95)',
                    borderRadius: 3,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <Select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  sx={{
                    backgroundColor: 'rgba(15,23,42,0.95)',
                    borderRadius: 3,
                  }}
                >
                  <MenuItem value="all">All Trips</MenuItem>
                  <MenuItem value="upcoming">Upcoming</MenuItem>
                  <MenuItem value="planned">Planned</MenuItem>
                  <MenuItem value="completed">Completed</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(102,126,234,0.15) 0%, rgba(118,75,162,0.15) 100%)',
                  border: '1px solid rgba(102,126,234,0.3)',
                  borderRadius: 3,
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <CalendarMonth sx={{ color: '#667eea', mr: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      Total Trips
                    </Typography>
                  </Box>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: '#667eea' }}>
                    {trips.length}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(5,150,105,0.15) 100%)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  borderRadius: 3,
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <CheckCircle sx={{ color: '#10b981', mr: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      Upcoming
                    </Typography>
                  </Box>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: '#10b981' }}>
                    {trips.filter(t => t.status === 'upcoming').length}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(251,191,36,0.15) 0%, rgba(245,158,11,0.15) 100%)',
                  border: '1px solid rgba(251,191,36,0.3)',
                  borderRadius: 3,
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <AttachMoney sx={{ color: '#fbbf24', mr: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      Total Budget
                    </Typography>
                  </Box>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: '#fbbf24' }}>
                    ₹{trips.reduce((sum, trip) => sum + trip.budget, 0).toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(236,72,153,0.15) 0%, rgba(219,39,119,0.15) 100%)',
                  border: '1px solid rgba(236,72,153,0.3)',
                  borderRadius: 3,
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocalActivity sx={{ color: '#ec4899', mr: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      Activities
                    </Typography>
                  </Box>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: '#ec4899' }}>
                    {trips.reduce((sum, trip) => sum + trip.bookings.activities, 0)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>

        {/* Trips Grid */}
        <AnimatePresence>
          {tabValue === 0 && (
            <Grid container spacing={3}>
              {filteredTrips.map((trip, index) => (
                <Grid item xs={12} md={6} lg={4} key={trip.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        background: 'rgba(15,23,42,0.95)',
                        border: '1px solid rgba(148,163,184,0.2)',
                        borderRadius: 4,
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 12px 40px rgba(102,126,234,0.3)',
                          borderColor: 'rgba(102,126,234,0.5)',
                        },
                      }}
                    >
                      {/* Trip Image */}
                      <Box
                        sx={{
                          height: 200,
                          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${trip.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          position: 'relative',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          p: 2,
                        }}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Chip
                            label={trip.status}
                            color={getStatusColor(trip.status)}
                            size="small"
                            sx={{ fontWeight: 600, textTransform: 'capitalize' }}
                          />
                          <Box sx={{ display: 'flex', gap: 0.5 }}>
                            <IconButton size="small" sx={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                              <Share fontSize="small" />
                            </IconButton>
                            <IconButton size="small" sx={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                              <Star fontSize="small" />
                            </IconButton>
                          </Box>
                        </Box>
                        <Box>
                          <Typography variant="h5" sx={{ fontWeight: 700, color: 'white', mb: 0.5 }}>
                            {trip.name}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', color: 'rgba(255,255,255,0.9)' }}>
                            <LocationOn fontSize="small" sx={{ mr: 0.5 }} />
                            <Typography variant="body2">{trip.destination}</Typography>
                          </Box>
                        </Box>
                      </Box>

                      <CardContent sx={{ p: 2.5 }}>
                        {/* Dates and Transport */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <CalendarMonth fontSize="small" sx={{ mr: 1, color: 'primary.main' }} />
                            <Typography variant="body2" color="text.secondary">
                              {trip.dates}
                            </Typography>
                          </Box>
                          <Chip
                            icon={getTransportIcon(trip.transport)}
                            label={trip.transport}
                            size="small"
                            variant="outlined"
                          />
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        {/* Budget Progress */}
                        <Box sx={{ mb: 2 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2" color="text.secondary">
                              Budget Used
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              ₹{trip.spent.toLocaleString()} / ₹{trip.budget.toLocaleString()}
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={(trip.spent / trip.budget) * 100}
                            sx={{
                              height: 8,
                              borderRadius: 999,
                              backgroundColor: 'rgba(148,163,184,0.2)',
                              '& .MuiLinearProgress-bar': {
                                borderRadius: 999,
                                background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                              },
                            }}
                          />
                        </Box>

                        {/* Bookings Summary */}
                        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                          {trip.bookings.flight && (
                            <Chip
                              icon={<Flight fontSize="small" />}
                              label="Flight"
                              size="small"
                              color="primary"
                              variant="outlined"
                            />
                          )}
                          {trip.bookings.hotel && (
                            <Chip
                              icon={<Hotel fontSize="small" />}
                              label="Hotel"
                              size="small"
                              color="success"
                              variant="outlined"
                            />
                          )}
                          <Chip
                            icon={<LocalActivity fontSize="small" />}
                            label={`${trip.bookings.activities} Activities`}
                            size="small"
                            color="secondary"
                            variant="outlined"
                          />
                        </Box>

                        {/* Action Buttons */}
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Button
                            fullWidth
                            variant="contained"
                            sx={{
                              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                              textTransform: 'none',
                              fontWeight: 600,
                              borderRadius: 2,
                            }}
                          >
                            View Details
                          </Button>
                          <IconButton
                            sx={{
                              border: '1px solid rgba(148,163,184,0.3)',
                              borderRadius: 2,
                            }}
                          >
                            <Edit fontSize="small" />
                          </IconButton>
                          <IconButton
                            sx={{
                              border: '1px solid rgba(239,68,68,0.3)',
                              color: 'error.main',
                              borderRadius: 2,
                            }}
                          >
                            <Delete fontSize="small" />
                          </IconButton>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          )}

          {/* Other Tabs */}
          {tabValue === 1 && (
            <Box
              sx={{
                background: 'rgba(15,23,42,0.95)',
                border: '1px solid rgba(148,163,184,0.2)',
                borderRadius: 4,
                p: 4,
                textAlign: 'center',
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                🎫 Manage Your Bookings
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Book flights, hotels, buses, and activities all in one place.
              </Typography>
            </Box>
          )}

          {tabValue === 2 && (
            <Box
              sx={{
                background: 'rgba(15,23,42,0.95)',
                border: '1px solid rgba(148,163,184,0.2)',
                borderRadius: 4,
                p: 4,
                textAlign: 'center',
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                💰 Budget Tracker Coming Soon
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Track expenses, set budgets, and get spending insights.
              </Typography>
            </Box>
          )}

          {tabValue === 3 && (
            <Box
              sx={{
                background: 'rgba(15,23,42,0.95)',
                border: '1px solid rgba(148,163,184,0.2)',
                borderRadius: 4,
                p: 4,
                textAlign: 'center',
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                🗺️ Smart Itinerary Planner Coming Soon
              </Typography>
              <Typography variant="body1" color="text.secondary">
                AI-powered day-by-day itinerary planning with maps and recommendations.
              </Typography>
            </Box>
          )}
        </AnimatePresence>

        {/* No trips found */}
        {filteredTrips.length === 0 && tabValue === 0 && (
          <Box
            sx={{
              background: 'rgba(15,23,42,0.95)',
              border: '1px solid rgba(148,163,184,0.2)',
              borderRadius: 4,
              p: 6,
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              No trips found
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Start planning your next adventure!
            </Typography>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={() => navigate('/trips/new')}
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              }}
            >
              Create Your First Trip
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default TripsPage;