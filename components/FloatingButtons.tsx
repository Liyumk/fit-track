import { useWorkout } from 'context/WorkoutContext';
import { View, Platform } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { getColor } from 'theme/colors';

import { Button } from './Button';

export default function FloatingButtons() {
  const { isEditMode, setIsEditMode } = useWorkout();
  const isAndroid = Platform.OS === 'android';

  return (
    <View className={twMerge(styles.container, isAndroid && 'bottom-4')}>
      {isEditMode && (
        <View className="border-1 w-full flex-row gap-4 rounded-full border-gray-200 bg-white p-5 ">
          <Button
            title="Discard"
            onPress={() => {
              setIsEditMode(false);
            }}
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
            onPress={() => {}}
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
  container: 'absolute bottom-0 flex w-full flex-row justify-center gap-4 px-4',
};
