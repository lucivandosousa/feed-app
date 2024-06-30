import { createStackNavigator } from "@react-navigation/stack"
import Login from "../screens/Login"
import CadastroUser from "../screens/CadastroUser"
import TabRoutes from "./tab.routes"

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
    </Navigator>
  )
}
