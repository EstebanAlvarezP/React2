import React from 'react'
import CartWidget from './CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  ButtonGroup,
  Flex,
  Box,
  Spacer,
  Image
} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
      <Flex>
        <Box p='4' bg='red.400'>
          <Box>
            <Image src='/Icono.png' alt='Icono' boxSize="40px"/>
          </Box>
        </Box>
        <Spacer bg='red.400'/>
        <Menu>
          <MenuButton bg='red.400'>
            Categorias
          </MenuButton>
          <MenuList>
            <MenuItem>Productos</MenuItem>
            <MenuItem>Trabaja con nosotros</MenuItem>
            <MenuItem>Ubicaciones</MenuItem>
          </MenuList>
        </Menu>
        <Spacer bg='red.400'/>
        <Box p='4' bg='red.400'>
          <CartWidget />
        </Box>
      </Flex>


    </div>

  )
}

export default NavBar