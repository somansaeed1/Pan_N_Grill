function Navbar({currentPage, setCurrentPage}) {
    const { getTotalItems, setIsCartOpen } = React.useContext(CartContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Updated navItems array
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'menu', label: 'Menu' },
        { id: 'gallery', label: 'Gallery' }, // ADDED
        { id: 'contact', label: 'Contact' }
    ];
    
    // ... rest of the Navbar component remains the same
    // (You can just replace the old navItems array with this new one)
    return (
        <nav className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${
            isScrolled ? 'glass-effect shadow-lg' : 'bg-white'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <button
                            onClick={() => setCurrentPage('home')}
                            className="text-2xl md:text-3xl font-script font-bold text-primary-900 hover:text-primary-700 transition-colors focus-visible:focus"
                            aria-label="The Pan N Grill - Home"
                        >
                            The Pan N Grill
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setCurrentPage(item.id)}
                                    className={`px-3 py-2 text-sm font-medium transition-colors focus-visible:focus ${
                                        currentPage === item.id
                                            ? 'text-primary-900 border-b-2 border-gold-500'
                                            : 'text-gray-700 hover:text-primary-900'
                                    }`}
                                    aria-current={currentPage === item.id ? 'page' : undefined}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative p-2 text-gray-700 hover:text-primary-900 transition-colors focus-visible:focus"
                            aria-label={`View cart - ${getTotalItems()} items`}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8" />
                            </svg>
                            {getTotalItems() > 0 && (
                                <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {getTotalItems()}
                                </span>
                            )}
                        </button>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 text-gray-700 hover:text-primary-900 transition-colors focus-visible:focus"
                                aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setCurrentPage(item.id);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors focus-visible:focus ${
                                        currentPage === item.id
                                            ? 'text-primary-900 bg-primary-50'
                                            : 'text-gray-700 hover:text-primary-900 hover:bg-gray-50'
                                    }`}
                                    aria-current={currentPage === item.id ? 'page' : undefined}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}