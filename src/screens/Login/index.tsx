import { Box, Button, HStack, Heading, Icon, Input, Text, VStack } from "native-base";
import { Pressable, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from "react";

export default function Login() {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <VStack flex={1} alignItems={"center"} justifyContent={"center"}>
      <Heading size="xl" fontWeight="600" color="blue.900" textAlign={"center"} marginBottom={10}>
        Bem-vindo
      </Heading>
      <Box>
        <VStack w={"100%"} paddingX={10}>
          <Input
            placeholder="Email"
            w={"100%"}
            marginBottom={5}
            InputLeftElement={
              <Icon
                as={MaterialIcons}
                name="mail"
                size={5}
                marginLeft={2}
              />
            }
          />
          <Input
            placeholder="Senha"
            w={"100%"}
            marginBottom={5}
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
          />
          <Button colorScheme={"indigo"}>Entrar</Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600">
              Não tem uma conta?{" "}
            </Text>
            <TouchableOpacity>
              <Text color={"blue.700"}>Cadastre-se</Text>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </Box>
    </VStack>
  )
}
