import { Box, Image, Text, Grid, useBreakpointValue, Link as ChakraLink } from "@chakra-ui/react";

interface SightsBarProps {
  imageAlt: string;
  imageSrc: string;
  imageDesc: string;
}



export function SightsBar({ imageAlt, imageDesc, imageSrc }: SightsBarProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box d="flex" flexDirection={["row", "row", "column"]} h="auto" w="100%" alignItems="center" >
      {isWideVersion
        ? <Image m="6" boxSize={85} src={imageSrc} alt={imageAlt} />
        : <Text color="yellow.300" fontSize="2xl" mr="2">&#8226;</Text>
      }

      <Text align="center" color="gray.700" fontSize={{ base: "18px", md: "24px" }} fontWeight="semibold">{imageDesc}</Text>
    </Box>
  )
}