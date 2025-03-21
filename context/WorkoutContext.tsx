import React, { createContext, useContext, useState, useCallback } from 'react';

import workoutData from '../constants/workouts.json';
import { Workout, WorkoutContextType, Exercise } from '../types/workout';

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [tempExercises, setTempExercises] = useState<Exercise[] | null>(null);
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

  const updateWorkoutExercises = useCallback(
    (exercises: Exercise[]) => {
      if (isEditMode) {
        setTempExercises(exercises);
      } else {
        setWorkout((prev) => (prev ? { ...prev, exercises } : null));
      }
    },
    [isEditMode]
  );

  const handleSetIsEditMode = useCallback(
    (newIsEditMode: boolean) => {
      if (newIsEditMode) {
        setTempExercises(workout?.exercises ?? null);
      } else {
        setTempExercises(null);
      }
      setIsEditMode(newIsEditMode);
    },
    [workout?.exercises]
  );

  const saveChanges = useCallback(() => {
    if (tempExercises && workout) {
      setWorkout({ ...workout, exercises: tempExercises });
    }
    setTempExercises(null);
    setIsEditMode(false);
  }, [tempExercises, workout]);

  const discardChanges = useCallback(() => {
    setTempExercises(null);
    setIsEditMode(false);
  }, []);

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
    workout: isEditMode && tempExercises ? { ...workout!, exercises: tempExercises } : workout,
    currentExerciseIndex,
    isWorkoutStarted,
    completedExercises,
    startWorkout,
    markExerciseAsCompleted,
    selectExercise,
    isEditMode,
    setIsEditMode: handleSetIsEditMode,
    updateWorkoutExercises,
    saveChanges,
    discardChanges,
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
