const CartContext = React.createContext();

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('panngrill-cart');
            if (savedCart) {
                const parsedCart = JSON.parse(savedCart);
                if (Array.isArray(parsedCart)) {
                    setCartItems(parsedCart);
                }
            }
        } catch (error) {
            console.error('Error loading cart from localStorage:', error);
            localStorage.removeItem('panngrill-cart');
        }
    }, []);
    
    useEffect(() => {
        try {
            localStorage.setItem('panngrill-cart', JSON.stringify(cartItems));
        } catch (error) {
            console.error('Error saving cart to localStorage:', error);
            showToast('Unable to save cart. Please try again.', 'error');
        }
    }, [cartItems]);
    
    const addToCart = (item) => {
        setCartItems(prev => {
            const existingItem = prev.find(cartItem => 
                cartItem.id === item.id && cartItem.size === item.size
            );
            
            if (existingItem) {
                return prev.map(cartItem =>
                    cartItem.id === item.id && cartItem.size === item.size
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prev, { ...item, quantity: 1 }];
            }
        });
        
        showToast(`${item.name} added to cart!`);
    };
    
    const removeFromCart = (itemId, size) => {
        setCartItems(prev => prev.filter(item => 
            !(item.id === itemId && item.size === size)
        ));
    };
    
    const updateQuantity = (itemId, size, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(itemId, size);
            return;
        }
        
        setCartItems(prev => prev.map(item =>
            item.id === itemId && item.size === size
                ? { ...item, quantity: newQuantity }
                : item
        ));
    };
    
    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };
    
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };
    
    const clearCart = () => {
        setCartItems([]);
    };
    
    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            getTotalItems,
            getTotalPrice,
            clearCart,
            isCartOpen,
            setIsCartOpen
        }}>
            {children}
        </CartContext.Provider>
    );
}