import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Contacts from '../screens/Contacts';
import { MaterialIcons } from "@expo/vector-icons";
import Profile from '../screens/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => <MaterialIcons name='home' color={color} size={size}/>,
          tabBarShowLabel: false
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => <MaterialIcons name='person' color={color} size={size}/>,
          tabBarShowLabel: false
        }}
      />
      <Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarIcon: ({color, size}) => <MaterialIcons name='phone' color={color} size={size}/>,
          tabBarShowLabel: false
        }}
      />
    </Navigator>
  );
}