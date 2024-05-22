import { Box, Image } from 'native-base'
import React from 'react'

export default function Storys({ data }) {
  return (
    <Box flex={1} mb={4} padding={2} borderRadius={4}>
      <Box
        padding={"0.5"}
        borderRadius={32}
        bg={{
          linearGradient: {
            colors: ["lightBlue.300", "violet.800"]
          }
        }}>
        <Image
          source={{ uri: data.avatarUrl }}
          width={16}
          height={16}
          borderRadius={32}
          alt='avatar profile'
        />
      </Box>
    </Box>
  )
}
