import { Box, Heading, Text, VStack, HStack, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function Contacts() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={4} bg="blueGray.50">
      <Heading size="xl" fontWeight="600" color="blue.700" textAlign="center" mb={8}>
        Contatos
      </Heading>
      <Box borderWidth={1} borderColor="blueGray.300" borderRadius={8} p={4} width="90%" bg="white" shadow={2}>
        <HStack alignItems="center" mb={4}>
          <Icon as={MaterialIcons} name="email" size="lg" color="blue.500" mr={2} />
          <Text fontSize="md" color="blueGray.800">federal@gmail.com</Text>
        </HStack>
        <HStack alignItems="center">
          <Icon as={MaterialIcons} name="phone" size="lg" color="blue.500" mr={2} />
          <Text fontSize="md" color="blueGray.800">190</Text>
        </HStack>
      </Box>
    </VStack>
  )
}