import { Box, Image } from 'native-base';
import React from 'react';
import { IStorys } from '../../interfaces/IStorys';

interface StorysProps {
  data: IStorys
}

export default function Storys({ data }: StorysProps) {
  return (
    <Box flex={1} mb={4} alignItems="center" justifyContent="center" p={2}>
      <Box
        p={0.5}
        borderRadius={32}
        bg={{
          linearGradient: {
            colors: ['lightBlue.300', 'violet.800'],
            start: [0, 0],
            end: [1, 1],
          },
        }}
        shadow={2}
      >
        <Image
          source={{ uri: data.avatarUrl }}
          w={16}
          h={16}
          borderRadius={32}
          alt="avatar profile"
          borderWidth={2}
          borderColor="white"
        />
      </Box>
    </Box>
  )
}
