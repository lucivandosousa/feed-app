import { Button, CheckIcon, Heading, Input, Select, VStack } from 'native-base'
import { useState } from 'react'

export default function CadastroUser({ navigation }) {

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    genero: '',
    senha: ''
  })

  function handleInputChange(name, value) {
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit() {
    console.log(formData)
    navigation.navigate('Login');
  }

  return (
    <VStack flex={1} alignItems={"center"} justifyContent={"center"} paddingX={10} space={2}>
      <Heading size="xl" fontWeight="600" color="blue.900" textAlign={"center"} marginBottom={10}>
        Cadastro
      </Heading>
      <Input
        w={'full'}
        placeholder='Nome'
        onChangeText={(value) => handleInputChange('nome', value)}
      />
      <Input
        w={'full'}
        placeholder='Email'
        onChangeText={(value) => handleInputChange('email', value)}
      />
      <Input
        w={'full'}
        placeholder='Telefone'
        onChangeText={(value) => handleInputChange('telefone', value)}
      />
      <Select
        selectedValue={formData.genero}
        w={'full'}
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
        w={'full'}
        type='password'
        placeholder='Senha'
        onChangeText={(value) => handleInputChange('senha', value)}
      />
      <Button
        colorScheme={"indigo"}
        w={'full'}
        onPress={handleSubmit}
      >
        Concluir
      </Button>
    </VStack>
  )
}
