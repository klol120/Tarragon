import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type CartProduct = {
  id: string;
  name: string;
  label: string;
};

export type CartItem = CartProduct & {
  quantity: number;
};

type CartContextValue = {
  cartItems: CartItem[];
  cartCount: number;
  addItem: (product: CartProduct) => void;
  removeItem: (id: string) => void;
  decreaseItem: (id: string) => void;
  clearCart: () => void;
};

const STORAGE_KEY = 'tarragon-cart';
const CartContext = createContext<CartContextValue | undefined>(undefined);

function readStoredCart() {
  try {
    const savedCart = window.localStorage.getItem(STORAGE_KEY);
    return savedCart ? (JSON.parse(savedCart) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(readStoredCart);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const value = useMemo<CartContextValue>(() => {
    const addItem = (product: CartProduct) => {
      setCartItems((currentItems) => {
        const existingItem = currentItems.find((item) => item.id === product.id);

        if (existingItem) {
          return currentItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
          );
        }

        return [...currentItems, { ...product, quantity: 1 }];
      });
    };

    const removeItem = (id: string) => {
      setCartItems((currentItems) => currentItems.filter((item) => item.id !== id));
    };

    const decreaseItem = (id: string) => {
      setCartItems((currentItems) =>
        currentItems.flatMap((item) => {
          if (item.id !== id) {
            return [item];
          }

          return item.quantity > 1 ? [{ ...item, quantity: item.quantity - 1 }] : [];
        }),
      );
    };

    const clearCart = () => setCartItems([]);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return { cartItems, cartCount, addItem, removeItem, decreaseItem, clearCart };
  }, [cartItems]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used inside CartProvider');
  }

  return context;
}
