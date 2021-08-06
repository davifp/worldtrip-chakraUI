import { Box, Image } from '@chakra-ui/react';
import Link from 'next/link';

export function Header() {
  return (
    <Box d="flex" alignItems="center" justifyContent="center" maxWidth={1440} w="100%" h="auto">
      <Link href="/">
        <Image cursor="pointer" height={[22, 45]} width={[81, 184]} src="/logo.png" alt="logo" my="7" />
      </Link>
    </Box >
  );
}