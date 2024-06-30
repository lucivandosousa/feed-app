import { Box, Heading, Text, VStack } from "native-base";

export default function Contacts() {
  return (
    <VStack flex={1} alignItems={"center"} justifyContent={"center"}>
      <Heading size="xl" fontWeight="600" color="blue.900" textAlign={"center"} marginBottom={10}>
        Contato
      </Heading>
      <Box>
        <VStack w={"100%"} paddingX={10} space={2}>
          <Text>E-mail: federal@gmail.com</Text>
          <Text>Telefone: 190</Text>
        </VStack>  
      </Box>
    </VStack>
  )
}
