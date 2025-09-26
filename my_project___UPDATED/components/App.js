function App() {
    const [currentPage, setCurrentPage] = useState('home');
    
    const useLazyLoading = () => {
        useEffect(() => {
            const images = document.querySelectorAll('img[data-src]');
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy-load');
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
            
            return () => imageObserver.disconnect();
        }, []);
    };
    
    useEffect(() => {
        const spinner = document.getElementById('loading-spinner');
        if (spinner) {
            setTimeout(() => {
                spinner.style.opacity = '0';
                setTimeout(() => spinner.remove(), 300);
            }, 1000);
        }
    }, []);
    
    useLazyLoading();
    
    return (
        <ErrorBoundary>
            <CartProvider>
                <div className="min-h-screen">
                    <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <main>
                        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
                        {currentPage === 'about' && <AboutPage />}
                        {currentPage === 'menu' && <MenuPage />}
                        {currentPage === 'contact' && <ContactPage />}
                        {/* ADD THIS NEW LINE */}
                        {currentPage === 'gallery' && <GalleryPage />}
                    </main>
                    <Footer setCurrentPage={setCurrentPage} />
                    <CartDrawer />
                </div>
            </CartProvider>
        </ErrorBoundary>
    );
}