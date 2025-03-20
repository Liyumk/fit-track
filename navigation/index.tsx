import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CustomHeader } from '../components/CustomHeader';
import Overview from '../screens/Tracking';

export type RootStackParamList = {
  Tracking: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tracking"
        screenOptions={{
          header: ({ navigation }) => <CustomHeader showBack={navigation.canGoBack()} />,
        }}>
        <Stack.Screen name="Tracking" options={{ headerShown: false }} component={Overview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
