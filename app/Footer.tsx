import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (
    <Box bg="gray.300" h='400px' pl='200px'mt='700px' m='center'boxDecorationBreak='slice'>
        <Flex textAlign='center' >
<Box bg="red"h='300x'w='300px'mt='25px'>
hello from box 1
</Box>
<Box bg='green'h='300px'w='300px' mt='25px'>
hello from box 2
</Box>
<Box bg='blue'h='300px'w='300px' mt='25px'>
hello from box 3
</Box>

        </Flex>

    </Box>
  )
}
