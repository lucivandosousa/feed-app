import { createStackNavigator } from "@react-navigation/stack"
import Login from "../screens/Login"
import Home from "../screens/Home"
import CadastroUser from "../screens/CadastroUser"

const { Navigator, Screen } = createStackNavigator()

export default function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="Login"
        component={Login}
      />
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="CadastroUser"
        component={CadastroUser}
      />
    </Navigator>
  )
}
