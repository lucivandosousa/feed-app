import { Avatar, Box, HStack, Icon, Pressable, FlatList, Divider } from 'native-base';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { dataStorys } from '../../utils/dataStorys';
import { dataFeed } from '../../utils/dataFeed';
import Storys from '../../components/Storys';
import Feed from '../../components/Feed';

export default function Home() {
  return (
    <Box flex={1} bg="blueGray.50">
      <HStack px={4} py={2} w="100%" alignItems="center" justifyContent="space-between" safeArea>
        <Pressable>
          <Icon as={MaterialIcons} name="menu" size={7} color="blueGray.700" />
        </Pressable>
        <HStack alignItems="center" space={4}>
          <Pressable>
            <Avatar
              source={{ uri: "https://avatars.githubusercontent.com/u/138980284?v=4" }}
              size="lg"
              bg="blueGray.500"
            />
          </Pressable>
        </HStack>
      </HStack>

      <Box px={4}>
        <FlatList
          horizontal
          data={dataStorys}
          renderItem={({ item }) => <Storys data={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          my={2}
        />
      </Box>

      <Divider mb={2} />

      <Box flex={1} px={4}>
        <FlatList
          data={dataFeed}
          renderItem={({ item }) => <Feed data={item} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </Box>
  );
}
