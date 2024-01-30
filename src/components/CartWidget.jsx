import React from 'react'
import { Icon, Button} from '@chakra-ui/react'
import { MdShoppingCart } from 'react-icons/md'

const CartWidget = () => {
  return (
    <div>
      <Button>
      <Icon as={MdShoppingCart} />
       -- 5 --
      </Button>
      
    </div>
  )
}

export default CartWidget