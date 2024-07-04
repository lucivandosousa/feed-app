import { Box, Button, Checkbox, Heading, VStack, Text } from "native-base";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Preferences({ route, navigation }) {

  const [selectedPreferences, setSelectedPreferences] = useState([])
  const { userData } = route.params
  const preferences = ['Esportes', 'Tecnologia', 'Música', 'Cinema', 'Gastronomia']

  function handleCheckboxChange(value) {
    setSelectedPreferences((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value]
      }
    })
  }

  async function handleSubmit() {
    userData.preferencias = selectedPreferences
    await AsyncStorage.setItem("userData", JSON.stringify(userData))
    navigation.navigate('Login')
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={4} bg="blueGray.50">
      <Heading size="xl" fontWeight="600" color="blue.700" textAlign="center" mb={8}>
        Preferências de conteúdo
      </Heading>
      {userData ? (
        <Box w="90%" bg="white" borderRadius={8} p={4} borderWidth={1} borderColor="blueGray.300" shadow={2}>
          <VStack space={4}>
            <Text fontSize="md" color="blueGray.800" mb={4}>Selecione suas preferências:</Text>
            {preferences.map(pref => (
              <Checkbox
                key={pref}
                value={pref}
                isChecked={selectedPreferences.includes(pref)}
                onChange={() => handleCheckboxChange(pref)}
                _checked={{ bg: "blue.500", borderColor: "blue.500" }}
                _text={{ fontSize: "md", color: "blueGray.800" }}
              >
                {pref}
              </Checkbox>
            ))}
            <Button colorScheme="indigo" onPress={handleSubmit} mt={4}>
              Concluir
            </Button>
            <Button colorScheme="indigo" onPress={() => navigation.navigate("CadastroUser")} mt={2}>
              Voltar
            </Button>
          </VStack>
        </Box>
      ) : (
        <Text fontSize="md" color="blueGray.800">Carregando...</Text>
      )}
    </VStack>
  )
}
