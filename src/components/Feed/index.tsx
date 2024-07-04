import { Box, Heading, Icon, Image, Text } from 'native-base';
import React from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import { IFeed } from '../../interfaces/IFeed';

interface FeedProps {
  data: IFeed
}

export default function Feed({ data }: FeedProps) {
  return (
    <Box
      flex={1}
      flexDirection="column"
      mb={4}
      bg="white"
      p={4}
      borderRadius="lg"
      shadow={2}
    >
      <Image
        source={{ uri: data.feedUrl }}
        w="100%"
        h={200}
        alt="post feed"
        borderRadius="md"
        mb={4}
      />
      <Box mb={3}>
        <Heading size="md" mb={2} color="blueGray.900">
          {data.title || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        </Heading>
        <Text fontSize="sm" color="blueGray.700" numberOfLines={4}>
          {data.post}
        </Text>
      </Box>
      <Box flexDir="row" alignItems="center" justifyContent="space-between">
        <Box flexDir="row" alignItems="center">
          <Icon as={MaterialIcons} name="perm-identity" color="blueGray.700" mr={2} />
          <Text fontWeight="bold" color="blueGray.900">{data.user}</Text>
        </Box>
        <Box flexDir="row">
          <Icon as={MaterialIcons} name="favorite-border" color="blueGray.700" mx={2} />
          <Icon as={MaterialIcons} name="share" color="blueGray.700" />
        </Box>
      </Box>
    </Box>
  )
}
