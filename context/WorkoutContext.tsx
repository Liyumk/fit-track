import React, { createContext, useContext, useState, useCallback } from 'react';

import workoutData from '../constants/workouts.json';
import { Workout, WorkoutContextType } from '../types/workout';

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(-1);
  const [isWorkoutStarted, setIsWorkoutStarted] = useState(false);
  const [completedExercises, setCompletedExercises] = useState<Set<number>>(new Set());
  const [isEditMode, setIsEditMode] = useState(false);

  const startWorkout = useCallback(() => {
    setWorkout(workoutData as Workout);
    setCurrentExerciseIndex(0);
    setIsWorkoutStarted(true);
    setCompletedExercises(new Set());
  }, []);

  const endWorkout = useCallback(() => {
    setWorkout(null);
    setCurrentExerciseIndex(-1);
    setIsWorkoutStarted(false);
    setCompletedExercises(new Set());
  }, []);

  const goToNextExercise = useCallback(() => {
    if (workout && currentExerciseIndex < workout.exercises.length - 1) {
      setCurrentExerciseIndex((prev) => prev + 1);
    }
  }, [workout, currentExerciseIndex]);

  const goToPreviousExercise = useCallback(() => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex((prev) => prev - 1);
    }
  }, [currentExerciseIndex]);

  const markExerciseAsCompleted = useCallback((index: number) => {
    setCompletedExercises((prev) => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  }, []);

  const selectExercise = useCallback((index: number) => {
    setCurrentExerciseIndex(index);
  }, []);

  const value = {
    workout,
    currentExerciseIndex,
    isWorkoutStarted,
    completedExercises,
    startWorkout,
    endWorkout,
    goToNextExercise,
    goToPreviousExercise,
    markExerciseAsCompleted,
    selectExercise,
    isEditMode,
    setIsEditMode,
  };

  return <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>;
};

export const useWorkout = () => {
  const context = useContext(WorkoutContext);
  if (context === undefined) {
    throw new Error('useWorkout must be used within a WorkoutProvider');
  }
  return context;
};

export default WorkoutContext;
