import { Box, Heading, Icon, Image, Text } from 'native-base'
import React from 'react'

import { Feather } from "@expo/vector-icons"

export default function Feed({ data }) {
  return (
    <Box flex={1} flexDirection={'column'} marginBottom={4} backgroundColor={"#fff"} padding={2} borderRadius={4}>
      <Box>
        <Image source={{uri: data.feedUrl}} w={"100%"} h={120} alt='post feed'/>
      </Box>

      <Box marginY={3}>
        <Heading size={'sm'} padding={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
        <Text numberOfLines={4}>{data.post}</Text>
      </Box>

      <Box marginY={1} flexDir={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Box flexDir={'row'} alignItems={'center'}>
          <Icon as={Feather} name='user' color={"#000"} marginRight={2}/>
          <Text fontWeight={'bold'}>{data.user}</Text>
        </Box>
        <Box flexDir={'row'}>
          <Icon as={Feather} name='heart' color={"#000"} marginX={4}/>
          <Icon as={Feather} name='share' color={"#000"}/>
        </Box>
      </Box>
    </Box>
  )
}
