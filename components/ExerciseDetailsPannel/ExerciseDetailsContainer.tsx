import { Button } from 'components/Button';
import { useWorkout } from 'context/WorkoutContext';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';
import { getColor } from 'theme/colors';

import ExercisePreview from './ExercisePreview';

const buttonIcons = {
  instructions: require('../../assets/image/instructions.png'),
  warmup: require('../../assets/image/warm-up.png'),
  faq: require('../../assets/image/faq.png'),
  replace: require('../../assets/image/replace.png'),
};

export default function ExerciseDetailsContainer() {
  const { workout, currentExerciseIndex } = useWorkout();
  const currentExercise = workout?.exercises[currentExerciseIndex];

  const ButtonWithIcon = ({ title, icon, style }: { title: string; icon: any; style?: any }) => (
    <Button
      title={title}
      onPress={() => {}}
      style={{
        backgroundColor: getColor('white'),
        borderColor: getColor('black'),
        borderWidth: 1,
        ...style,
      }}
      textStyle={{ color: getColor('black') }}
      textClassName="text-sm"
      leftIcon={<Image source={icon} style={{ width: 16, height: 16 }} contentFit="contain" />}
    />
  );

  return (
    <View className={styles.container}>
      <View className="h-[64px] flex-row items-center justify-between">
        <Text className="text-primary-main text-lg font-medium">{currentExercise?.name}</Text>
        <View className="flex-row gap-2">
          <ButtonWithIcon
            title="Replace"
            icon={buttonIcons.replace}
            style={{ backgroundColor: getColor('primary.main'), borderWidth: 0 }}
          />
        </View>
      </View>
      <View className="border-1 rounded-xl border border-gray-200 p-1">
        <ExercisePreview />
      </View>
      <View className="flex flex-row justify-between gap-1">
        <ButtonWithIcon title="Instructions" icon={buttonIcons.instructions} />
        <ButtonWithIcon title="Warmup" icon={buttonIcons.warmup} />
        <ButtonWithIcon title="FAQ" icon={buttonIcons.faq} />
      </View>
    </View>
  );
}

const styles = {
  container: 'p-4 pt-0 rounded-xl bg-white flex inline-flex gap-4',
};
