import React from 'react';

const ExerciseRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Tracks />} />
        {/* <Route index element={<Tracks />} /> */}
        <Route path="author/:authorId" element={<Author />} />

        <Route path="track/:trackId" element={<Track />} />
        <Route path="track/:trackId/module/:moduleId" element={<Module />} />
        <Route path="track/:trackId/modules" element={<Modules />} />

        <Route path="exercise/:exerciseId" element={<Exercise />} />
        <Route path="exercise/BodyParts" element={<BodyParts />} />
        <Route path="exercise/BodyPart/:bodyPart" element={<BodyPart />} />

        <Route
          path="exercise/ExerciseName/:exerciseName"
          element={<ExerciseNames />}
        />
        <Route
          path="exercise/TargetMuscle/:targetMuscle"
          element={<TargetMuscle />}
        />
        <Route path="exercise/TargetMuscles" element={<TargetMuscles />} />
        <Route path="exercise/Exercises" element={<Exercises />} />
        <Route
          path="exercise/EquipmentType/:equipmentType"
          element={<EquipmentType />}
        />
        <Route path="exercise/Equipments" element={<Equipments />} />

        <Route path="books" element={<Books />}></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default ExerciseRoute;
