import React from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useColorMode,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children, href }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}>
    {children}
  </Link>
);

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
   
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Box>Amir The Allower</Box>

        <Flex alignItems={'center'}>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>
          <NavLink href="#services">Services</NavLink>

          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
            variant="ghost"
            color="current"
            marginLeft="2"
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          />
        </Flex>
      </Flex>
    
  );
};

export default Header;
