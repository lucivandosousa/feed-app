import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Box, Heading, Text, VStack } from 'native-base';

export default function Profile() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function getUserData() {
      const jsonUser = await AsyncStorage.getItem('userData')
      setUser(jsonUser != null ? JSON.parse(jsonUser) : null)
    }

    getUserData();
  }, [])

  return (
    <VStack flex={1} alignItems={"center"} justifyContent={"center"}>
      <Heading size="xl" fontWeight="600" color="blue.900" textAlign={"center"} marginBottom={10}>
        Perfil
      </Heading>
      {
        user ? (
          <Box borderWidth={1} borderColor={'blueGray.400'} borderRadius={10} p={20}>
            <Text>{user.nome}</Text>
            <Text>{user.email}</Text>
            <Text>{user.telefone}</Text>
            <Text>{user.genero}</Text>
          </Box>
        ) : (
          null
        )
      }
    </VStack>
  )
}
