import { createContext, useContext, FC, useState, SetStateAction, Dispatch, useEffect } from 'react';

interface AppContextProps {
    cartItems: {
        id: string,
        order_quantity: number
    }[],
    setCartItems: Dispatch<SetStateAction<{
        id: string,
        order_quantity: number
    }[]>>,
    changeItemQuantity: (amount: number, id?: string) => void,
    addToCart: (amount: number, id?: string) => void,
    removeItemFromCart: (id: string) => void,
    removeAllFromCart: () => void
}

const AppContext = createContext<AppContextProps>({
    cartItems: [],
    setCartItems: () => [],
    changeItemQuantity: (amount, id) => null,
    addToCart: (amount, id) => null,
    removeItemFromCart: (id) => null,
    removeAllFromCart: () => null
});

export const AppWrapper: FC = ({ children }) => {
    const cartName = `${process.env.NEXT_PUBLIC_CART_NAME}`
    const [cartItems, setCartItems] = useState<{ id: string, order_quantity: number }[]>([])
    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem(cartName) || '[]'))
    }, [])

    const changeCartItems = (newItems: { id: string, order_quantity: number }[]) => {
        localStorage.setItem(cartName, JSON.stringify(newItems))
        setCartItems(JSON.parse(localStorage.getItem(cartName) || '[]'))
    }

    const changeItemQuantity = (amount: number, id?: string) => {
        const newItems = cartItems
        if (id && newItems.map(item => item.id).includes(id)) {
            const itemIndex = newItems.findIndex(item => item.id === id)
            if (itemIndex !== -1) {
                newItems[itemIndex] = { id: id, order_quantity: amount }
            }
        }
        changeCartItems(newItems)
    }

    const addToCart = (amount: number, id?: string) => {
        const newItems = cartItems
        if (id && newItems.map(item => item.id).includes(id)) {
            const itemIndex = newItems.findIndex(item => item.id === id)
            if (itemIndex !== -1) {
                newItems[itemIndex] = { id: id, order_quantity: amount }
            }
        }
        else if (id) {
            newItems.push({ id: id, order_quantity: amount })
        }
        changeCartItems(newItems)
    }

    const removeItemFromCart = (id: string) => {
        const filterCart = cartItems.filter(item => item.id !== id)
        changeCartItems(filterCart)
    }

    const removeAllFromCart = () => {
        localStorage.removeItem(cartName)
        setCartItems([])
    }
    const cartItemsValue = { cartItems, setCartItems, changeItemQuantity, addToCart, removeItemFromCart, removeAllFromCart }

    return (
        <AppContext.Provider value={cartItemsValue} >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}