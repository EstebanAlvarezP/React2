import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsAsync } from '../utils/MockData'
import ItemList from './ItemList'
import Spinner from './Spinner'

const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    getProductsAsync().then((products) => {
      if (categoryId) {
        const filteredProducts = products.filter(
          (product) => product.category === categoryId
        )
        setItems(filteredProducts)
        setLoading(false)
      } else {
        setItems(products)
        setLoading(false)
      }
    })
  }, [categoryId])

  return loading ? (
    <Spinner />
  ) : (
    <>
      <ItemList itemList={items} />
    </>
  )
}

ItemListContainer.propTypes = {}

export default ItemListContainer
