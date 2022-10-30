import React, {createContext, useContext, useState, useEffect} from 'react'
import {toast} from 'react-hot-toast'

const Context = createContext();


export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [quantity, setQuantity] = useState(1)

    let foundItem;
    let index

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find(item => item._id === product._id)
        setTotalPrice(prev => prev + product.price * quantity)
        setTotalQuantities(prev => prev + quantity)
        toast.success(`${quantity} ${product.name} added to the cart`)
        if(checkProductInCart){
            const updateCartItems = cartItems.map(cartProduct => {
                if (cartProduct._id === product._id) return {
                    ...cartProduct, quantity: cartProduct.quantity + quantity
                }
            })
            setCartItems(updateCartItems)
        }else {
            product.quantity = quantity
            setCartItems([...cartItems, {...product}])
        }
    }
    const removeItem = (product) =>{
        foundItem = cartItems.find(item => item._id === product._id)
        const newCartItems = cartItems.filter((item)=> item._id !== product._id)
        setTotalPrice(prev => prev - foundItem.price * foundItem.quantity)
        setTotalQuantities(prev => prev - foundItem.quantity)
        setCartItems(newCartItems)
    }
    const toggleCartItem = (id, value) => {
        foundItem = cartItems.find(item => item._id === id)
        index = cartItems.findIndex(item => item._id === id)
        const newCartItems = cartItems.filter((item)=> item._id !== id)
        if (value === 'increment') {
            setCartItems([...newCartItems, { ...foundItem, quantity: foundItem.quantity + 1}])
            setTotalPrice((prev)=> prev + foundItem.price)
            setTotalQuantities(prev => prev + 1)
        }else if (value === 'decrement'){
            if (foundItem.quantity > 1) {
                setCartItems([...newCartItems, { ...foundItem, quantity: foundItem.quantity - 1}])
                setTotalPrice((prev)=> prev - foundItem.price)
                setTotalQuantities(prev => prev - 1)
            }
        }
    }
    const increaseQty = () => {
        setQuantity(prev => prev + 1)
    }
    const decreaseQty = () => {
        setQuantity(prev => {
            if(prev - 1 < 1 ) return 1
            return prev - 1
        })
    }

    return (
        <Context.Provider value={{
            showCart, cartItems,setShowCart,
            totalQuantities, onAdd, toggleCartItem,
            totalPrice, quantity, increaseQty, decreaseQty,
            removeItem, setCartItems, setTotalPrice,setTotalQuantities
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)