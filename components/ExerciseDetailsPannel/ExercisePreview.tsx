import { useWorkout } from 'context/WorkoutContext';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { getColor } from 'theme/colors';

const equipmentIcons = {
  barbell: require('../../assets/image/equipments/barbell.png'),
  dumbbell: require('../../assets/image/equipments/dumbell.png'),
  cable: require('../../assets/image/equipments/cabel.png'),
  machine: require('../../assets/image/equipments/machine.png'),
  bodyweight: require('../../assets/image/equipments/bodyweight.png'),
};

export default function ExercisePreview() {
  const { workout, currentExerciseIndex } = useWorkout();
  const currentExercise = workout?.exercises[currentExerciseIndex];
  const [isLoading, setIsLoading] = useState(false);
  const [currentGifUrl, setCurrentGifUrl] = useState('');

  // Reset loading state and update current GIF URL when exercise changes
  useEffect(() => {
    if (currentExercise?.gif_asset_url !== currentGifUrl) {
      setIsLoading(true);
      setCurrentGifUrl(currentExercise?.gif_asset_url || '');
    }
  }, [currentExercise?.gif_asset_url]);

  const equipmentName = currentExercise?.equipment
    ? currentExercise.equipment.charAt(0).toUpperCase() + currentExercise.equipment.slice(1)
    : '';

  const EquipmentBadge = () => {
    return (
      <View className="border-1 absolute bottom-3 left-2 flex min-h-[32px] min-w-[102px] flex-row items-center justify-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-[14px] py-2 text-xs">
        {currentExercise?.equipment && (
          <Image
            source={equipmentIcons[currentExercise.equipment as keyof typeof equipmentIcons]}
            style={{ width: 14, height: 14 }}
            contentFit="contain"
          />
        )}
        <Text className="text-secondary">{equipmentName}</Text>
      </View>
    );
  };

  if (!currentExercise?.gif_asset_url) {
    return (
      <View className="h-[216px] w-full items-center justify-center bg-gray-50">
        <Text className="text-gray-400">No exercise selected</Text>
      </View>
    );
  }

  return (
    <View className="relative">
      <View
        className="absolute h-[216px] w-full items-center justify-center bg-gray-50"
        style={{ opacity: isLoading ? 1 : 0 }}>
        <ActivityIndicator size="large" color={getColor('primary.main')} />
      </View>
      <Image
        source={{ uri: currentGifUrl }}
        style={{
          width: '100%',
          height: 216,
          opacity: isLoading ? 0 : 1,
        }}
        contentFit="contain"
        onLoadEnd={() => {
          setIsLoading(false);
        }}
        cachePolicy="memory-disk"
      />
      <EquipmentBadge />
    </View>
  );
}
