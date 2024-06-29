import { Box, Button, HStack, Heading, Icon, Input, Text, VStack } from "native-base";
import { Alert, Pressable, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  async function handleLogin() {
    const userData = await AsyncStorage.getItem("userData")
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
    <VStack flex={1} alignItems={"center"} justifyContent={"center"}>
      <Heading size="xl" fontWeight="600" color="blue.900" textAlign={"center"} marginBottom={10}>
        Bem-vindo
      </Heading>
      <Box>
        <VStack w={"100%"} paddingX={10} space={2}>
          <Input
            placeholder="Email"
            w={"100%"}
            InputLeftElement={
              <Icon
                as={MaterialIcons}
                name="mail"
                size={5}
                marginLeft={2}
              />
            }
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholder="Senha"
            w={"100%"}
            type={showPassword ? "text" : "password"}
            InputLeftElement={
              <Icon
                as={MaterialIcons}
                name="key"
                size={5}
                marginLeft={2}
              />
            }
            InputRightElement={
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  as={MaterialIcons}
                  name={showPassword ? "visibility" : "visibility-off"}
                  size={5}
                  marginRight={2}
                />
              </Pressable>
            }
            value={senha}
            onChangeText={setSenha}
          />
          <Button
            colorScheme={"indigo"}
            onPress={handleLogin}
          >
            Entrar
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600">
              Não tem uma conta?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("CadastroUser")}>
              <Text color={"blue.700"}>Cadastre-se</Text>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </Box>
    </VStack>
  )
}
