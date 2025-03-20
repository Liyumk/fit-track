import { useWorkout } from 'context/WorkoutContext';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';

export default function ExercisePreview() {
  const { workout, currentExerciseIndex } = useWorkout();
  const currentExercise = workout?.exercises[currentExerciseIndex];
  const equipmentName = currentExercise?.equipment
    ? currentExercise.equipment.charAt(0).toUpperCase() + currentExercise.equipment.slice(1)
    : '';

  const EquipmentBadge = () => {
    return (
      <View className="border-1 absolute bottom-3 left-2 flex min-h-[32px] min-w-[102px] flex-row items-center justify-center gap-1 rounded-full border border-gray-200 bg-gray-100 px-[14px] py-2 text-xs">
        <Text className="text-secondary">{equipmentName}</Text>
      </View>
    );
  };

  return (
    <View>
      <Image
        source={{
          uri: currentExercise?.gif_asset_url,
        }}
        style={{ width: '100%', height: 216 }}
        contentFit="contain"
      />
      <EquipmentBadge />
    </View>
  );
}
