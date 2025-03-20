import './global.css';

import 'react-native-gesture-handler';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { WorkoutProvider } from './context/WorkoutContext';
import RootStack from './navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <WorkoutProvider>
        <RootStack />
      </WorkoutProvider>
    </SafeAreaProvider>
  );
}
