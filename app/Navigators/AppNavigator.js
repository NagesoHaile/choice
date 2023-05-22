import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons  } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import SettingScreen from "../screens/SettingScreen";

const Tab = createBottomTabNavigator()

 function AppNavigator() {
  return (
    <Tab.Navigator
    
    screenOptions={{
      headerStyle:{
        backgroundColor:"black",
        
      },
      headerTintColor:"white",
      tabBarStyle:{
        backgroundColor:"black",
      }
    }}>
       <Tab.Screen 
       options={{
        tabBarIcon:({color,size})=> <MaterialCommunityIcons name="home" size={size} color={color} />
       }}
       name="Home" 
       component={HomeScreen} />
       <Tab.Screen 
        options={{
            tabBarIcon:({size,color})=><Ionicons name="apps" size={size} color={color} />
        }}
       name="Category" 
       component={CategoryScreen} 
       />
       <Tab.Screen 
       options={{
        tabBarIcon:({size,color})=><Ionicons name="settings" size={size} color={color} />
       }}
       name="Setting" 
       component={SettingScreen} />
    </Tab.Navigator>
  )
}

export default AppNavigator;
