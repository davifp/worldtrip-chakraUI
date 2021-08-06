import { Box, Flex, Image, Text, SimpleGrid } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';


type CityCard = {
  id: string;
  image: string;
  cityName: string;
  countryName: string;
  regionFlag: string;
}

interface CityCardProps {
  cities: CityCard[];
}

export function CityCard({ cities }: CityCardProps) {
  return (
    <SimpleGrid mt="8" columns={{ sm: 1, md: 4 }} spacing="10">
      {cities.map(city => (
        <Box key={city.id}>
          <Image src={city.image} />
          <Flex
            justifyContent="space-between"
            align="center"
            border="1px solid #FFBA08"
            borderRadius="base"
            borderTop="none"
            borderTopRadius="none"
          >
            <Box p="4">
              <Text fontWeight="semibold" fontSize="20px">{city.cityName}</Text>
              <Text fontSize="16px" color="gray.400">{city.countryName}</Text>
            </Box>
            <Image p="4" src={city.regionFlag} />
          </Flex>
        </Box>
      ))
      }
    </SimpleGrid>
  )
}
