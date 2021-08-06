import { Box, Image, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
  Navigation, Autoplay, Pagination
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Autoplay]);

interface ContinentSlider {
  // id: string;
  continentImage: string;
  continentAlt: string;
  continentDescTitle: string;
  continentDescContent: string;
}

interface ContinentSliderProps {
  data: ContinentSlider[]
}

export function ContinentSlider({ data }: ContinentSliderProps) {

  return (
    <Swiper navigation={true} cssMode={true} pagination={true} autoplay={{
      "delay": 3500,
      "disableOnInteraction": false
    }} className="mySwiper">
      {data.map(item => (
        <SwiperSlide key={item.continentAlt}>
          <Image display="block" h="100%" w="100%" objectFit="cover" src={item.continentImage} alt={item.continentAlt} />
          <Link href={`/continent/${item.continentAlt}`} >
            <Box cursor='pointer' position="absolute">
              <Text color="white" fontSize={{ base: "24px", md: "48px" }} fontWeight="bold">{item.continentDescTitle}</Text>
              <Text color="white" fontSize={{ base: "14px", md: "24px" }} fontWeight="bold">{item.continentDescContent}</Text>
            </Box>
          </Link>
        </SwiperSlide>
      ))
      }

    </Swiper >
  )
}