import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { CityCard } from "../../components/CityCard";
import { Header } from "../../components/Header";
import { PopoverIcon } from "../../components/PopoverIcon";

type Continent = {
  name: string;
  image: string;
  description: string;
  countriesCount: number;
  languagesCount: number;
  popularCitiesCount: number;
}

type CityCard = {
  id: string;
  image: string;
  cityName: string;
  countryName: string;
  regionFlag: string;
}

interface ContinentProps {
  cities: CityCard[];
  continent: Continent;
}

export default function Continent({ continent, cities }: ContinentProps) {
  return (
    <Flex direction="column" h="100%" align="center" color="gray.700">
      <Header />

      <Flex align={["center", "flex-end"]} justify={["center", "flex-start"]} h={[150, 250, 500]} maxWidth={1440} w="100%" bgImage={continent.image} bgSize="cover">
        <Heading p={"4"} fontSize={{ base: "28px", md: "48px" }} color="white">{continent.name}</Heading>
      </Flex>

      <Flex flexDirection={["column", "column", "row"]} maxWidth={1160} w="100%" alignItems="center" justify={["center", "center", "space-between"]} mt={["6", "10", "20"]}>
        <Text p={[2, 4, 6]} m={"2"} align="justify" w={["auto", 500, 600]} fontSize={["14px", "20px", "24px"]}>
          {continent.description}
        </Text>
        <Box p={[2, 4, 6]} mt={["4", "6", "0"]} d="flex" textAlign={["start", "start", "center"]} fontSize={{ base: "36px", md: "48px" }} fontWeight="semibold" justifyContent="center">
          <Box mr={["4", "8"]} >
            <Text fontSize={{ base: "24px", md: "48px" }} color="#FFBA08">{continent.countriesCount}</Text>
            <Text fontSize="20px">países</Text>
          </Box>
          <Box mr={["4", "8"]} >
            <Text fontSize={{ base: "24px", md: "48px" }} color="#FFBA08">{continent.languagesCount}</Text>
            <Text fontSize="20px">línguas</Text>
          </Box>
          <Box mr={["4", "8"]} >
            <Text fontSize={{ base: "24px", md: "48px" }} color="#FFBA08">{continent.popularCitiesCount}</Text>
            <Box d="flex" alignItems="center">
              <Text fontSize="20px" mr="1">cidades +100</Text>
              <PopoverIcon />
            </Box>
          </Box>
        </Box>
      </Flex>
      <Flex direction="column" ml={["4", "6", "8"]} mt={["8", "12", "20"]}>
        <Heading fontSize={["24px", "36px"]}>Cidades +100</Heading>
        <CityCard cities={cities} />
      </Flex>
    </Flex >
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [
      { params: { slug: 'europa' } },
      { params: { slug: 'africa' } }
    ],
    fallback: false,

  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const continents = await fetch(`http://localhost:3333/continents`).then(response => response.json());

  const continent = continents.find(continent => continent.slug === slug);
  const cities = continent.cities;

  return {
    props: { continent, cities },
    revalidate: 60,

  }
}