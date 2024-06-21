import { Box, Button, HStack, Heading, Input, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";

export default function Login() {
  return (
    <VStack flex={1} alignItems={"center"} justifyContent={"center"}>
      <Heading size="xl" fontWeight="600" color="blue.900" textAlign={"center"} marginBottom={10}>
        Bem-vindo
      </Heading>
      <Box>
        <VStack w={"100%"} paddingX={10}>
          <Input placeholder="Email" w={"100%"} marginBottom={5} />
          <Input placeholder="Senha" w={"100%"} marginBottom={5} type="password"/>
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
