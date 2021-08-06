import { Popover, PopoverBody, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

export function PopoverIcon() {
  return (
    <Popover>
      <PopoverTrigger>
        <InfoOutlineIcon h={4} w={4} color="gray.400" />
      </PopoverTrigger>
      <PopoverContent mt="2" w={200} color="gray.400" bgColor="gray.50" fontWeight="normal" fontSize="sm">
        <PopoverArrow />
        <PopoverCloseButton color="gray.700" />
        <PopoverBody >As 100 cidades mais visitadas do mundo</PopoverBody>
      </PopoverContent>
    </Popover>
  )
}