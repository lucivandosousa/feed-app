import { Button, CheckIcon, Heading, Input, Select, VStack, Box } from 'native-base';
import { useState } from 'react';

export default function CadastroUser({ navigation }) {

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    genero: '',
    senha: ''
  });

  function handleInputChange(name, value) {
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit() {
    navigation.navigate('Preferences', { userData: formData });
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={4} bg="blueGray.50">
      <Heading size="xl" fontWeight="600" color="blue.700" textAlign="center" mb={8}>
        Cadastro
      </Heading>
      <Box w="90%" bg="white" borderRadius={8} p={4} borderWidth={1} borderColor="blueGray.300" shadow={2}>
        <VStack space={4}>
          <Input
            w="full"
            placeholder="Nome"
            value={formData.nome}
            onChangeText={(value) => handleInputChange('nome', value)}
          />
          <Input
            w="full"
            placeholder="Email"
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
          />
          <Input
            w="full"
            placeholder="Telefone"
            value={formData.telefone}
            onChangeText={(value) => handleInputChange('telefone', value)}
          />
          <Select
            selectedValue={formData.genero}
            w="full"
            accessibilityLabel="Selecione o gênero"
            placeholder="Selecione o gênero"
            _selectedItem={{
              bg: "indigo.200",
              endIcon: <CheckIcon size="5" />
            }}
            onValueChange={(value) => handleInputChange('genero', value)}
          >
            <Select.Item label="Masculino" value="masculino" />
            <Select.Item label="Feminino" value="feminino" />
            <Select.Item label="Outro" value="outro" />
          </Select>
          <Input
            w="full"
            type="password"
            placeholder="Senha"
            value={formData.senha}
            onChangeText={(value) => handleInputChange('senha', value)}
          />
          <Button colorScheme="indigo" onPress={handleSubmit} mt={4}>
            Avançar
          </Button>
          <Button colorScheme="indigo" onPress={() => navigation.navigate("Login")} mt={2}>
            Cancelar
          </Button>
        </VStack>
      </Box>
    </VStack>
  )
}

