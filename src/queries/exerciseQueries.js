const { gql } = require('@apollo/client');

const GetBodyPartList = gql`
  query BodyPartList {
    bodyPartList
  }
`;
const GetBodyPart = gql`
  query BodyPart($bodyPart: String!) {
    bodyPart(bodyPart: $bodyPart) {
      bodyPart
      equipment
      gifUrl
      id
      name
      target
    }
  }
`;
const GetExerciseId = gql`
  query ExerciseId($exerciseId: String!) {
    exerciseId(id: $exerciseId) {
      bodyPart
      equipment
      gifUrl
      id
      name
      target
    }
  }
`;
const GetExerciseName = gql`
  query ExerciseName($exerciseName: String!) {
    exerciseName(name: $exerciseName) {
      bodyPart
      equipment
      gifUrl
      id
      name
      target
    }
  }
`;
const GetTargetMuscles = gql`
  query TargetMuscles {
    targetMuscles
  }
`;
const GetTargetMuscle = gql`
  query TargetMuscle($targetMuscle: String!) {
    targetMuscle(target: $targetMuscle) {
      bodyPart
      equipment
      gifUrl
      id
      name
      target
    }
  }
`;
const GetAllExercises = gql`
  query AllExercises {
    allExercises {
      bodyPart
      equipment
      gifUrl
      id
      name
      target
    }
  }
`;
const GetEquipmentType = gql`
  query EquipmentType($equipmentType: String!) {
    equipmentType(type: $equipmentType) {
      bodyPart
      equipment
      gifUrl
      id
      name
      target
    }
  }
`;
const GetAllEquipments = gql`
  query AllEquipments {
    allEquipments
  }
`;

export {
  GetBodyPartList,
  GetBodyPart,
  GetExerciseId,
  GetExerciseName,
  GetTargetMuscles,
  GetTargetMuscle,
  GetAllExercises,
  GetEquipmentType,
  GetAllEquipments,
};
