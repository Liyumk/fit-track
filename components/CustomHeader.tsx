import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

import { getColor } from '../theme/colors';

type CustomHeaderProps = {
  showBack?: boolean;
  rightElement?: React.ReactNode;
  title?: string;
};

export const CustomHeader = ({ showBack = true, rightElement, title }: CustomHeaderProps) => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View className={styles.header}>
      <View className={styles.leftContainer}>
        {showBack && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className={styles.backButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <Feather name="chevron-left" size={24} color={getColor('text.primary')} />
          </TouchableOpacity>
        )}
        <Text className={styles.title}>{title || route.name}</Text>
      </View>
      {rightElement && <View className={styles.rightContainer}>{rightElement}</View>}
    </View>
  );
};

const styles = {
  header: 'h-12 flex-row items-center px-4 bg-background',
  leftContainer: 'flex-row items-center gap-3',
  backButton: 'flex-row items-center',
  title: 'text-md font-medium text-text tracking-tight',
  rightContainer: 'ml-auto flex-row items-center',
};
