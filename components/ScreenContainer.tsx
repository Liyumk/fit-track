import { View } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

import { CustomHeader } from './CustomHeader';

type ScreenContainerProps = {
  children: React.ReactNode;
  showHeader?: boolean;
  rightElement?: React.ReactNode;
  safeAreaEdges?: Edge[];
  title?: string;
};

export const ScreenContainer = ({
  children,
  showHeader = true,
  rightElement,
  title,
}: ScreenContainerProps) => {
  return (
    <SafeAreaView className={styles.containerSafeArea}>
      <View className={styles.container}>
        {showHeader && <CustomHeader rightElement={rightElement} title={title} />}
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = {
  containerSafeArea: 'flex-1 bg-background',
  container: 'flex-1 relative bg-background gap-4',
};
