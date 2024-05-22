import { Avatar, Box, HStack, Icon, Pressable, FlatList } from 'native-base'
import React from 'react'

import { Feather } from '@expo/vector-icons'

import { dataStorys } from '../utils/dataStorys'
import { dataFeed } from '../utils/dataFeed'
import Storys from '../components/Storys'
import Feed from '../components/Feed'

export default function Home() {
  return (
    <Box flex={1} backgroundColor={"#f8f8f8f"} flexDirection={'column'}>
      <HStack padding={4} w={"100%"} alignItems={'center'} justifyContent={'space-between'} safeArea>
        <Box>
          <Pressable>
            <Icon as={Feather} name='menu' size={7} color={"#000"}/>
          </Pressable>
        </Box>

        <Box flexDirection={'row'} alignItems={'center'} rounded={'md'}>
          <Pressable>
            <Icon as={Feather} name='bell' size={7} color={"#000"} marginRight={5}/>
          </Pressable>

          <Pressable>
            <Avatar source={{uri: "https://avatars.githubusercontent.com/u/138980284?v=4"}} height={12} width={12}/>
          </Pressable>
        </Box>
      </HStack>

      <Box paddingX={4}>
        <FlatList 
          horizontal={true}
          data={dataStorys}
          renderItem={({ item }) => <Storys data={item}/>}
          showsHorizontalScrollIndicator={false}
        />
      </Box>

      <Box paddingX={4}>
        <FlatList 
          data={dataFeed}
          renderItem={({ item }) => <Feed data={item}/>}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </Box>
  )
}
