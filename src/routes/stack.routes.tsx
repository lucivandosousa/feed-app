import { createStackNavigator } from "@react-navigation/stack"
import Login from "../screens/Login"
import CadastroUser from "../screens/CadastroUser"
import TabRoutes from "./tab.routes"
import Preferences from "../screens/Preferences"

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
        component={TabRoutes}
      />
      <Screen
        name="CadastroUser"
        component={CadastroUser}
      />
      <Screen
        name="Preferences"
        component={Preferences}
      />
    </Navigator>
  )
}
