import { Box, Button, HStack, Heading, Icon, Input, Text, VStack, Pressable } from "native-base";
import { Alert, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleLogin() {
    const userData = await AsyncStorage.getItem("userData");
    if (userData) {
      const parseUser = JSON.parse(userData);
      if (parseUser.email === email && parseUser.senha === senha) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Erro', 'Email ou senha inválidos');
      }
    } else {
      Alert.alert('Erro', 'Nenhum usuário encontrado. Por favor, registre-se.');
    }
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={4} bg="blueGray.50">
      <Heading size="xl" fontWeight="600" color="blue.700" textAlign="center" mb={8}>
        Bem-vindo
      </Heading>
      <Box w="90%" bg="white" borderRadius={8} p={4} borderWidth={1} borderColor="blueGray.300" shadow={2}>
        <VStack space={4}>
          <Input
            placeholder="Email"
            w="full"
            InputLeftElement={
              <Icon
                as={MaterialIcons}
                name="mail"
                size={5}
                ml={2}
                color="blueGray.400"
              />
            }
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholder="Senha"
            w="full"
            type={showPassword ? "text" : "password"}
            InputLeftElement={
              <Icon
                as={MaterialIcons}
                name="key"
                size={5}
                ml={2}
                color="blueGray.400"
              />
            }
            InputRightElement={
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  as={MaterialIcons}
                  name={showPassword ? "visibility" : "visibility-off"}
                  size={5}
                  mr={2}
                  color="blueGray.400"
                />
              </Pressable>
            }
            value={senha}
            onChangeText={setSenha}
          />
          <Button colorScheme="indigo" onPress={handleLogin}>
            Entrar
          </Button>
          <HStack mt={6} justifyContent="center">
            <Text fontSize="sm" color="coolGray.600">
              Não tem uma conta?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("CadastroUser")}>
              <Text color="blue.700" fontWeight="medium">Cadastre-se</Text>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </Box>
    </VStack>
  )
}
