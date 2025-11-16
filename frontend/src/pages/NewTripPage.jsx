import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Chip,
  Stack,
} from '@mui/material';

import { FlightTakeoff, Public, Work, Hiking } from '@mui/icons-material';
import { motion } from 'framer-motion';

const travelStyles = [
  { label: 'Work + Explore', icon: <Work fontSize="small" /> },
  { label: 'Backpacking', icon: <Hiking fontSize="small" /> },
  { label: 'City Hopping', icon: <Public fontSize="small" /> },
];

const budgetLevels = [
  { value: 'lean', label: 'Lean · ₹2–3k / day' },
  { value: 'balanced', label: 'Balanced · ₹3–6k / day' },
  { value: 'premium', label: 'Premium · ₹6k+ / day' },
];

const NewTripPage = () => {
  const [destination, setDestination] = useState('');
  const [style, setStyle] = useState('Work + Explore');
  const [budget, setBudget] = useState('balanced');
  const [notes, setNotes] = useState('');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handlePreset = (city) => {
    setDestination(city);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box>
        <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <FlightTakeoff color="primary" />
          <Typography variant="h4" component="h1">
            Plan a new trip
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Left: form */}
          <Grid item xs={12} md={7}>
            <Card
              sx={{
                borderRadius: 3,
                bgcolor: 'rgba(15,23,42,0.96)',
                border: '1px solid rgba(148,163,184,0.4)',
              }}
            >
              <CardContent>
                <Typography variant="subtitle1" sx={{ mb: 2 }}>
                  Basics
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Destination / city"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="e.g. Goa, Manali, Bali"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <DatePicker
                      label="Start date"
                      value={fromDate}
                      onChange={setFromDate}
                      slotProps={{
                        textField: { fullWidth: true, size: 'medium' },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <DatePicker
                      label="End date"
                      value={toDate}
                      onChange={setToDate}
                      slotProps={{
                        textField: { fullWidth: true, size: 'medium' },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                      Travel style
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {travelStyles.map((s) => (
                        <Chip
                          key={s.label}
                          icon={s.icon}
                          label={s.label}
                          onClick={() => setStyle(s.label)}
                          color={style === s.label ? 'primary' : 'default'}
                          variant={style === s.label ? 'filled' : 'outlined'}
                          sx={{ mb: 1 }}
                        />
                      ))}
                    </Stack>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      select
                      fullWidth
                      label="Budget level"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                    >
                      {budgetLevels.map((b) => (
                        <MenuItem key={b.value} value={b.value}>
                          {b.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      minRows={3}
                      label="What do you want from this trip?"
                      placeholder="Coworking + sunset beaches, light treks, cafés with Wi‑Fi…"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </Grid>
                </Grid>

                <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                  <Button
                    component={motion.button}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    variant="contained"
                    color="primary"
                  >
                    Save draft trip
                  </Button>
                  <Button
                    component={motion.button}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    variant="outlined"
                    color="inherit"
                  >
                    Export summary
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Right: smart suggestions / preview */}
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                borderRadius: 3,
                bgcolor: 'rgba(15,23,42,0.96)',
                border: '1px solid rgba(148,163,184,0.4)',
              }}
            >
              <CardContent>
                <Typography variant="subtitle1" sx={{ mb: 2 }}>
                  Smart starter templates
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
                  {['Goa', 'Manali', 'Jaipur', 'Bali'].map((city) => (
                    <Chip
                      key={city}
                      label={city}
                      onClick={() => handlePreset(city)}
                      variant={
                        destination.toLowerCase() === city.toLowerCase()
                          ? 'filled'
                          : 'outlined'
                      }
                      color={
                        destination.toLowerCase() === city.toLowerCase()
                          ? 'primary'
                          : 'default'
                      }
                      sx={{ mb: 1 }}
                    />
                  ))}
                </Stack>

                <Typography
                  variant="subtitle2"
                  sx={{ mt: 1, mb: 1, color: 'text.secondary' }}
                >
                  Trip summary
                </Typography>

                <Box
                  component={motion.div}
                  initial={{ opacity: 0.7, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'rgba(15,23,42,0.9)',
                    border: '1px solid rgba(148,163,184,0.4)',
                    fontSize: 14,
                    color: 'rgba(226,232,240,0.96)',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {destination ? (
                    <>
                      <strong>Destination:</strong> {destination}
                      {'\n'}
                    </>
                  ) : (
                    'Add a destination to see a summary.\n'
                  )}
                  {fromDate && toDate && (
                    <>
                      <strong>Dates:</strong> {fromDate.toLocaleDateString()} –{' '}
                      {toDate.toLocaleDateString()}
                      {'\n'}
                    </>
                  )}
                  <strong>Style:</strong> {style}
                  {'\n'}
                  <strong>Budget:</strong>{' '}
                  {
                    budgetLevels.find((b) => b.value === budget)?.label ??
                    'Not set'
                  }
                  {'\n\n'}
                  {notes
                    ? notes
                    : 'Tell Nomadiq what kind of experience you want and this summary will help guide your itinerary.'}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </LocalizationProvider>
  );
};

export default NewTripPage;