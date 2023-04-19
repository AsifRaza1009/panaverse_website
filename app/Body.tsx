"use client";
import Image from "next/image";
import mg from '../public/metverse1.jpg'
import mg1 from '../public/logo4.png'
import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Footer from "./Footer";
export default function Body() {
  return (
    <>
      <Box h='1024' w='760'>
        <Box m='5'>
          <SimpleGrid
            spacing={["10", "10", "10", "20", "20"]}
            px={["1", "1", "1", "5", "40"]}
            my='20'
            columns={[1, 1, 2]}
          >
           
            <Stack m='auto'>
            <Box m='auto' w='100px'>
              <Image src={mg1} alt='METAVERSE' ></Image>
            </Box>
              <Text
                color='blue.400'
                fontStyle='normal'
                fontFamily='cursive'
                fontSize={["sm", "md"]}
                pb='20px'
                m='10px'
                w='center'
                textAlign='center'
              >
                The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
                Panaverse DAO is a movement to spread these technolgies
                globally. It is community of Web 3 and Metaverse developers,
                designers, trainers, startup founders and service providers.
              </Text>
            </Stack>
            <Box m='auto' >
              <Box borderRadius='md' overflow='hidden'>
              <Image src={mg} alt='METAVERSE'></Image>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>

        {/* <Flex direction={["column", "row"]} m='35px' gap="100px">
          <Box p='20px'bg ='red'>
            <Image src='logo4.png' alt='Panaverse DAO' w='100px'></Image>
            <Text

                color='blue.400'
                fontStyle='normal'
                fontFamily='cursive'
                fontSize={["sm", "md"]}
                pb='20px'
                m='10px'
                w='center'
                textAlign='center'
              >
                The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
                Panaverse DAO is a movement to spread these technolgies
                globally. It is community of Web 3 and Metaverse developers,
                designers, trainers, startup founders and service providers.
              </Text>
          </Box>
          <Box p='20px' overflow='hidden' bg='green' >
            <Image
              src='metverse1.jpg'
              alt='METAVERSE'
              w='auto'
              borderRadius='xl'
            ></Image>
          </Box>
        </Flex> */}
        <Box>
          <Flex direction={["column", "row"]} align='center' px='50px'>
            <Box pr={["0", "0", "30px"]}>
              {/* <Heading
                fontSize={["md", "3xl"]}
                color='red.400'
                p='10px'
                m='10px'
                bg='yellow.300'
                borderRadius='20px'
                justifyContent='center'
                textAlign='center'
              >
                Certified Web 3.0 and Metaverse Developer
              </Heading> */}
              <br />

              <Text
                color='blue.400'
                fontStyle='normal'
                fontFamily='cursive'
                fontSize={["sm", "md"]}
                pb='20px'
                m='10px'
                textAlign='center'
              >
                The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
                Panaverse DAO is a movement to spread these technolgies
                globally. It is community of Web 3 and Metaverse developers,
                designers, trainers, startup founders and service providers.
              </Text>
            </Box>
            <Box px={["20px", "20px"]}>
              {/* <Image
                src='meteverse2.jpg'
                alt='Metaverse'
                //maxW={["auto", "auto", "400px"]}
                //maxH={["auto", "auto", "400px"]}
                //mt={["0", "0", "35px"]}
              ></Image> */}
            </Box>
          </Flex>
        </Box>

        <br />
        <Box>
          <Heading
            fontSize={["md", "3xl"]}
            color='red.400'
            p='10px'
            m='10px'
            bg='yellow.300'
            borderRadius='20px'
            justifyContent='center'
            textAlign='center'
            boxSize='-webkit-max-content'
          >
            Certified Web 3.0 and Metaverse Developer
          </Heading>

          <Text
            color='blue.400'
            fontFamily='cursive'
            fontStyle='normal'
            fontSize={["sm", "md"]}
            textAlign='justify'
            p='20px'
            m='20px'
          >
            The internet is without a doubt the most important technological
            development in human history. Web3 and metaverse technologies expand
            the internet as we know it by introducing novel features and
            advancements. Metaverse will make use of all aspects of modern
            technology, including 3D, VR, AR, AI, blockchain, cloud computing,
            voice computing, ambient computing, and more. Citi is the latest
            Wall Street business to give a positive prognosis for Web 3.0 and
            the Metaverse, terms used to depict a future internet vision centred
            on decentralised technologies and virtual worlds. Citi stated in a
            March 2022 research paper that the metaverse economy might have a
            total addressable market of up to $13 trillion and five billion
            people by 2030.
          </Text>
        </Box>
        <Box>
          <Box
            bg='green.200'
            borderRadius='15px'
            overflow='hidden'
            p='10px'
            m={["20px", "auto"]}
            boxSize='-webkit-fit-content'
            textAlign='center'
          >
            <Heading fontSize={["md", "3xl"]} fontStyle='italic'>
              The Program in a Nutshell: Earn While You Learn
            </Heading>
          </Box>
          <Text
            color='blue.400'
            fontFamily='cursive'
            fontStyle='normal'
            fontSize={["sm", "md"]}
            textAlign='justify'
            p='20px'
            m='20px'
          >
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program’s beginning. It resembles a
            cross between a corporate venture and an educational project.
          </Text>
        </Box>
      </Box>
    </>
  );
}
