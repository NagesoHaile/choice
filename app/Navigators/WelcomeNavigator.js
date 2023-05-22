import { View, } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const WelcomeNavigator = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
            options={{
                headerShown: false
            }}
            name='welcome' 
            component={WelcomeScreen} />
            {/* <Stack.Screen name="interest" component={} /> */}
        </Stack.Navigator>
    )
}

export default WelcomeNavigator;