import { Box, Heading, Text, VStack } from "native-base";

export default function Contacts() {
  return (
    <VStack flex={1} alignItems={"center"} justifyContent={"center"}>
      <Heading size="xl" fontWeight="600" color="blue.900" textAlign={"center"} marginBottom={10}>
        Contato
      </Heading>
      <Box borderWidth={1} borderColor={'blueGray.400'} borderRadius={10} p={20}>
        <Text>E-mail: federal@gmail.com</Text>
        <Text>Telefone: 190</Text>
      </Box>
    </VStack>
  )
}
