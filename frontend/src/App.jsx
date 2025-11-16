import React, { useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import DashboardLayout from './components/DashboardLayout';
import TripsPage from './pages/TripsPage';
import PlacesPage from './pages/PlacesPage';
import SafetyPage from './pages/SafetyPage';
import HoursPage from './pages/HoursPage';
import BadgesPage from './pages/BadgesPage';
import NewTripPage from './pages/NewTripPage';
import SmartItineraryPage from './pages/SmartItineraryPage';

function App() {
  // this must be an array from useState – NOT a number or string
  const [mode, setMode] = useState('dark');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'dark'
            ? {
                background: {
                  default: '#020617',
                  paper: '#020617',
                },
              }
            : {
                background: {
                  default: '#f3f4f6',
                  paper: '#ffffff',
                },
              }),
        },
      }),
    [mode]
  );

  const toggleMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const DashboardHome = DashboardLayout.DashboardHome;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardLayout mode={mode} onToggleMode={toggleMode}>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/trips" element={<TripsPage />} />
          <Route path="/trips/new" element={<NewTripPage />} />
          <Route path="/itinerary" element={<SmartItineraryPage />} />
          <Route path="/places" element={<PlacesPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/hours" element={<HoursPage />} />
          <Route path="/badges" element={<BadgesPage />} />
        </Routes>
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default App;