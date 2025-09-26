function MenuPage() {
    const [activeCategory, setActiveCategory] = useState('special-pizza');
    const [searchQuery, setSearchQuery] = useState(''); // State for the search input
    const categoryRefs = useRef({});
    
    const categories = Object.keys(menuData);

    // Filter menu data based on search query
    const filteredMenuData = searchQuery.trim() === '' 
        ? menuData 
        : Object.entries(menuData).reduce((acc, [categoryId, category]) => {
            const filteredItems = category.items.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredItems.length > 0) {
                acc[categoryId] = { ...category, items: filteredItems };
            }
            return acc;
        }, {});

    const filteredCategories = Object.keys(filteredMenuData);
    
    // ... (scrollToCategory and useEffect for scroll handling remain the same) ...
     const scrollToCategory = (categoryId) => {
        const element = categoryRefs.current[categoryId];
        if (element) {
            const navHeight = 160;
            const elementPosition = element.offsetTop - navHeight;
            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
            setActiveCategory(categoryId);
        }
    };
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            for (const categoryId of categories) {
                const element = categoryRefs.current[categoryId];
                if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
                    setActiveCategory(categoryId);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [categories]);

    return (
        <div className="pt-20">
            <section className="bg-primary-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Menu</h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">Discover our authentic Pakistani cuisine</p>
                </div>
            </section>

            {/* Search Bar and Category Navigation */}
            <div className="menu-category-nav bg-white border-b shadow-sm py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Search Input */}
                    <div className="relative mb-4">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for a dish (e.g., 'Zinger Burger')"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-gold-500"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                    </div>
                    {/* Category Nav */}
                    <div className="flex overflow-x-auto space-x-6">
                        {filteredCategories.map((categoryId) => (
                            <button
                                key={categoryId}
                                onClick={() => scrollToCategory(categoryId)}
                                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors focus-visible:focus ${
                                    activeCategory === categoryId ? 'bg-gold-500 text-white' : 'text-gray-600 hover:text-primary-900 hover:bg-gray-100'
                                }`}
                            >
                                {filteredMenuData[categoryId].name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {filteredCategories.length > 0 ? (
                    filteredCategories.map((categoryId) => (
                        <MenuCategory
                            key={categoryId}
                            categoryId={categoryId}
                            category={filteredMenuData[categoryId]}
                            ref={el => categoryRefs.current[categoryId] = el}
                        />
                    ))
                ) : (
                    <div className="text-center py-16">
                        <h2 className="text-2xl font-semibold text-primary-900">No Dishes Found</h2>
                        <p className="text-gray-500 mt-2">Try adjusting your search or browse our full menu.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
const MenuCategory = React.forwardRef(({ categoryId, category }, ref) => (
    <section ref={ref} id={categoryId} className="mb-16">
        <h2 className="text-3xl font-heading font-bold text-primary-900 mb-8 border-b-2 border-gold-500 pb-4">
            {category.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((item) => (
                <MenuItemCard key={item.id} item={item} />
            ))}
        </div>
    </section>
));

function MenuItemCard({ item }) {
    const { addToCart } = React.useContext(CartContext);
    const [selectedSize, setSelectedSize] = useState(item.sizes ? Object.keys(item.sizes)[0] : null);
    const [isLoading, setIsLoading] = useState(false);
    
    const getPrice = () => {
        if (item.price) return item.price;
        if (item.sizes && selectedSize) return item.sizes[selectedSize];
        return 0;
    };
    
    const handleAddToCart = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const cartItem = { id: item.id, name: item.name, price: getPrice(), size: selectedSize || 'regular' };
        addToCart(cartItem);
        setIsLoading(false);
    };
    
    return (
        <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow card-shadow">
            <div className="aspect-w-16 aspect-h-12">
                <img src={`https://placehold.co/300x200/eeeeee/7f1d1d?text=${encodeURIComponent(item.name)}`} alt={item.name} className="w-full h-48 object-cover lazy-load" loading="lazy" />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-primary-900 mb-2">{item.name}</h3>
                
                {item.sizes && (
                    <div className="mb-4">
                        <fieldset>
                            <legend className="text-sm text-gray-600 mb-2">Size:</legend>
                            <div className="flex space-x-2" role="radiogroup">
                                {Object.keys(item.sizes).map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors focus-visible:focus ${selectedSize === size ? 'bg-gold-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                        role="radio"
                                        aria-checked={selectedSize === size}
                                        aria-label={`Size ${size}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </fieldset>
                    </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gold-600">₨{getPrice()}</span>
                </div>
                
                <button onClick={handleAddToCart} disabled={isLoading} className="w-full bg-primary-900 hover:bg-primary-800 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition-colors btn-primary focus-visible:focus" aria-label={`Add ${item.name} to cart`}>
                    {isLoading ? 'Adding...' : 'Add to Cart'}
                </button>
            </div>
        </article>
    );
}