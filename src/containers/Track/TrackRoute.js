import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Track from '../../pages/Tracks/Track.js';
import Module from '../../pages/Tracks/Module.js';
import Modules from '../../pages/Tracks/Modules.js';

const TrackRoute = () => {
  return (
    <div>
      <Routes>
        <Route path=":trackId" element={<Track />} />
        <Route path=":trackId/module/:moduleId" element={<Module />} />
        <Route path=":trackId/modules" element={<Modules />} />
      </Routes>
    </div>
  );
};

export default TrackRoute;
