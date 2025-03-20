import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

import { EditButton } from './EditButton';
import { ExerciseCircle } from './ExerciseCircle';
import { Exercise } from '../../types/workout';

type Props = {
  exercises: Exercise[];
  onReorder: (from: number, to: number) => void;
  onDelete: (index: number) => void;
  onSave: () => void;
  onCancel: () => void;
};

export const DraggableExerciseList: React.FC<Props> = ({
  exercises,
  onReorder,
  onDelete,
  onSave,
  onCancel,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  return (
    <View className="flex-1">
      <View className="flex-row flex-wrap gap-4 p-4">
        {exercises.map((exercise, index) => (
          <Animated.View key={exercise.name}>
            <ExerciseCircle
              image={exercise.asset_url}
              isEditMode={isEditMode}
              onLongPress={() => setIsEditMode(true)}
              onDelete={() => onDelete(index)}
              isDragging={draggingIndex === index}
            />
          </Animated.View>
        ))}
        <EditButton isEditMode={isEditMode} onPress={() => setIsEditMode(!isEditMode)} />
      </View>

      {isEditMode && (
        <View className="flex-row justify-end gap-4 p-4">
          <TouchableOpacity
            onPress={() => {
              setIsEditMode(false);
              onCancel();
            }}
            className="rounded-lg bg-gray-200 px-4 py-2">
            <Text>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsEditMode(false);
              onSave();
            }}
            className="bg-primary-main rounded-lg px-4 py-2">
            <Text className="text-white">Save</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
