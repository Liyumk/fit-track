import { useWorkout } from 'context/WorkoutContext';
import { View, Platform } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { getColor } from 'theme/colors';

import { Button } from './Button';

export default function FloatingButtons() {
  const { isEditMode, discardChanges, saveChanges } = useWorkout();
  const isAndroid = Platform.OS === 'android';

  return (
    <View
      className={twMerge(
        'absolute bottom-0 left-0 right-0 mb-4 flex justify-center px-4',
        isAndroid && 'bottom-4'
      )}
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
      }}>
      {isEditMode && (
        <View className="w-full flex-row gap-4 rounded-full border-gray-200 bg-white p-5">
          <Button
            title="Discard"
            onPress={discardChanges}
            style={{
              height: 52,
              backgroundColor: getColor('gray.100'),
              flex: 1,
            }}
            textStyle={{ color: getColor('black') }}
            textClassName="text-sm"
          />
          <Button
            title="Save changes"
            onPress={saveChanges}
            style={{
              height: 52,
              backgroundColor: getColor('primary.main'),
              flex: 1,
            }}
            textStyle={{ color: getColor('black') }}
            textClassName="text-sm"
          />
        </View>
      )}
    </View>
  );
}

const styles = {
  container: 'absolute bottom-0 flex w-full flex-row justify-center',
};
