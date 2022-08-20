import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BodyParts from '../../pages/Exercise/BodyParts';
import BodyPart from '../../pages/Exercise/BodyPart';
import Exercise from '../../pages/Exercise/Exercise';
import TargetMuscles from '../../pages/Exercise/TargetMuscles';
import TargetMuscle from '../../pages/Exercise/TargetMuscle';

import Exercises from '../../pages/Exercise/Exercises';
import EquipmentType from '../../pages/Exercise/EquipmentType';
import Equipments from '../../pages/Exercise/Equipments';
import ExerciseNames from '../../pages/Exercise/ExerciseNames';
const ExerciseRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="exerciseId/:exerciseId" element={<Exercise />} />
        <Route path="BodyParts" element={<BodyParts />} />
        <Route path="BodyPart/:bodyPart" element={<BodyPart />} />

        <Route path="ExerciseName/:exerciseName" element={<ExerciseNames />} />
        <Route path="TargetMuscle/:targetMuscle" element={<TargetMuscle />} />
        <Route path="TargetMuscles" element={<TargetMuscles />} />
        <Route path="Exercises" element={<Exercises />} />
        <Route
          path="EquipmentType/:equipmentType"
          element={<EquipmentType />}
        />
        <Route path="Equipments" element={<Equipments />} />
      </Routes>
    </div>
  );
};

export default ExerciseRoute;
