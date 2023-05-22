import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import WelcomeNavigator from './app/Navigators/WelcomeNavigator';
import AppNavigator from './app/Navigators/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
 <NavigationContainer>
      <AppNavigator />
      <StatusBar style='light' />
 </NavigationContainer>
        
  );
}

const styles = StyleSheet.create({
  
});
