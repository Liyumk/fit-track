export type Exercise = {
  name: string;
  asset_url: string;
  gif_asset_url: string;
  equipment: 'barbell' | 'dumbbell' | 'cable' | 'bodyweight' | 'machine';
};

export type Workout = {
  workout_name: string;
  exercises: Exercise[];
};

export type WorkoutContextType = {
  workout: Workout | null;
  currentExerciseIndex: number;
  isWorkoutStarted: boolean;
  completedExercises: Set<number>;
  startWorkout: () => void;
  markExerciseAsCompleted: (index: number) => void;
  selectExercise: (index: number) => void;
  isEditMode: boolean;
  setIsEditMode: (isEditMode: boolean) => void;
  updateWorkoutExercises: (exercises: Exercise[]) => void;
  saveChanges: () => void;
  discardChanges: () => void;
};
