import { Box, Button, Checkbox, Heading, VStack } from "native-base";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Preferences({ route, navigation }) {

  const [selectedPreferences, setSelectedPreferences] = useState([])

  const { userData } = route.params

  const preferences = ['Esportes', 'Tecnologia', 'Música', 'Cinema', 'Gastronomia']

  function handleCheckboxChange(value) {
    setSelectedPreferences((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    })
  }

  async function handleSubmit() {
    userData.preferencias = selectedPreferences
    await AsyncStorage.setItem("userData", JSON.stringify(userData))
    navigation.navigate('Login');
  }

  return (
    <VStack flex={1} alignItems={"center"} justifyContent={"center"}>
      <Heading size="xl" fontWeight="600" color="blue.900" textAlign={"center"} marginBottom={10}>
        Preferências de conteúdo
      </Heading>
      {
        userData ? (
          <Box w={"full"}>
            <VStack paddingX={10} space={2}>
              <Box mb={10}>
                {preferences.map(pref => (
                  <Checkbox
                    key={pref}
                    value={pref}
                    isChecked={selectedPreferences.includes(pref)}
                    onChange={() => handleCheckboxChange(pref)}
                  >
                    {pref}
                  </Checkbox>
                ))}
              </Box>
              <Button
                colorScheme={"indigo"}
                w={'full'}
                onPress={handleSubmit}
              >
                Concluir
              </Button>
              <Button
                colorScheme={"indigo"}
                w={'full'}
                onPress={() => navigation.navigate("CadastroUser")}
              >
                Voltar
              </Button>
            </VStack>
          </Box>
        ) : (
          null
        )
      }
    </VStack>
  )
}
