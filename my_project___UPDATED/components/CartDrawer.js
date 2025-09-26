function CartDrawer() {
    const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, getTotalPrice, clearCart } = React.useContext(CartContext);
    
    const handleCheckout = () => {
        if (cartItems.length === 0) {
            showToast('Your cart is empty!', 'error');
            return;
        }
        const orderDetails = cartItems.map(item => `${item.name}${item.size !== 'regular' ? ` (${item.size})` : ''} x${item.quantity} - ₨${item.price * item.quantity}`).join('\n');
        const message = `Hello! I would like to place an order:\n\n${orderDetails}\n\nTotal: ₨${getTotalPrice()}\n\nPlease confirm my order. Thank you!`;
        const whatsappUrl = `https://wa.me/923456500649?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        showToast('Redirecting to WhatsApp for order confirmation...');
    };
    
    return (
        <>
            {isCartOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsCartOpen(false)} aria-label="Close cart" />}
            <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 cart-slide-in ${isCartOpen ? 'open' : ''}`}>
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-6 border-b">
                        <h2 className="text-xl font-heading font-semibold text-primary-900">Your Cart ({cartItems.length})</h2>
                        <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors focus-visible:focus" aria-label="Close cart">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-6">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-12"><p className="text-gray-500 text-lg">Your cart is empty</p></div>
                        ) : (
                            <div className="space-y-4">
                                {cartItems.map((item) => <CartItem key={`${item.id}-${item.size}`} item={item} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} />)}
                            </div>
                        )}
                    </div>
                    {cartItems.length > 0 && (
                        <div className="border-t p-6 space-y-4">
                            <div className="flex items-center justify-between text-xl font-semibold">
                                <span>Total:</span><span className="text-gold-600">₨{getTotalPrice()}</span>
                            </div>
                            <button onClick={handleCheckout} className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-semibold transition-colors focus-visible:focus btn-primary">Order via WhatsApp</button>
                            <button onClick={() => { clearCart(); showToast('Cart cleared!'); }} className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-semibold transition-colors focus-visible:focus">Clear Cart</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

function CartItem({ item, onUpdateQuantity, onRemove }) {
    return (
        <div className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
            <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-primary-900 truncate">{item.name}</h4>
                {item.size !== 'regular' && <p className="text-xs text-gray-500">Size: {item.size}</p>}
                <p className="text-sm font-semibold text-gold-600">₨{item.price}</p>
            </div>
            <div className="flex items-center space-x-2">
                <button onClick={() => onUpdateQuantity(item.id, item.size, item.quantity - 1)} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors focus-visible:focus" aria-label={`Decrease quantity of ${item.name}`}>-</button>
                <span className="w-8 text-center font-semibold">{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.id, item.size, item.quantity + 1)} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors focus-visible:focus" aria-label={`Increase quantity of ${item.name}`}>+</button>
            </div>
            <button onClick={() => { onRemove(item.id, item.size); showToast(`${item.name} removed from cart`); }} className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors focus-visible:focus" aria-label={`Remove ${item.name} from cart`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </button>
        </div>
    );
}