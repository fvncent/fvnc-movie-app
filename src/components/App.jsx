import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes, Switch } from 'react-router-dom';
import { Movies, MovieInformation, Actors, Profile, Navbar } from './index';

import useStyles from './styles';

function App() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" />
          <Route path="/movie" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
