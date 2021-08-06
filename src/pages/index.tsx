import { Box, Center, Flex, SimpleGrid, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { ContinentSlider } from '../components/ContinentSlider';
import { Header } from '../components/Header';
import { SightsBar } from '../components/SightsBar';

export default function Home() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  //banner data
  const data = [{
    continentImage: "/europe.png",
    continentAlt: "europa",
    continentDescTitle: "Europa",
    continentDescContent: "Europa o continente mais antigo"
  }, {
    continentImage: "/africa.png",
    continentAlt: "africa",
    continentDescTitle: "África",
    continentDescContent: "Terra do Simba"
  }
  ]

  return (
    <Flex direction="column" h="100vh" align="center" >
      <Header />
      <Flex h={335} maxWidth={1440} w="100%" bgImage='/background.png' bgSize="cover" justify="center">
        <Box p={[4, 6]} maxWidth={1160} w="100%" d="flex" alignItems="center" justifyContent="space-between">
          <Box w={500}>
            <Heading color="white" mb={[2, 4, 6]} fontSize={{ base: "20px", md: "36px" }}>
              5 Continentes,<br />
              infinitas possibilidades.
            </Heading>
            <Text fontSize={{ base: "14px", md: "20px" }} color="gray.400">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text >
          </Box>
          {isWideVersion && <Image transform="auto" rotate={3} src="/airplane.png" alt="airplane" />}

        </Box>
      </Flex>
      <SimpleGrid columns={[2, 3, 5]} spacing="4" maxWidth={1160} w="100%" h="auto" p={[2, 4, 6]} mt={[6, 12, 20]}>
        <SightsBar imageAlt="cocktail" imageDesc="vida noturna" imageSrc="/cocktail.png" />
        <SightsBar imageAlt="surf" imageDesc="praia" imageSrc="/surf.png" />
        <SightsBar imageAlt="building" imageDesc="moderno" imageSrc="/building.png" />
        <SightsBar imageAlt="classic" imageDesc="clássico" imageSrc="/classic.png" />
        <SightsBar imageAlt="earth" imageDesc="e mais..." imageSrc="/earth.png" />
      </SimpleGrid>
      <Center w={{ base: "60px", md: "90px" }} mt={[6, 8, 12]} border={["1px solid gray.700", "1px solid gray.700", "2px solid gray.700"]}></Center>
      <Box>
        <Heading textAlign="center" color="gray.700" fontSize={{ base: "20px", md: "36px" }} mt={[6, 8, 12]}>
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>
      </Box>
      <Flex maxWidth={1160} w="100%" h={[200, 300, 450]} mt={[6, 8, 12]} >
        <ContinentSlider
          data={data}
        />
      </Flex>

    </Flex >
  )
}
