function HomePage({ setCurrentPage }) {
    const featuredCategories = [
        { id: 'pizza', name: 'Special Pizzas', image: `https://placehold.co/300x200/7f1d1d/fbbf24?text=Special+Pizza`, description: 'Authentic Pakistani-style pizzas with traditional flavors' },
        { id: 'shawarma', name: 'Shawarmas', image: `https://placehold.co/300x200/7f1d1d/fbbf24?text=Shawarmas`, description: 'Fresh and flavorful shawarmas with premium ingredients' },
        { id: 'burger', name: 'Burgers', image: `https://placehold.co/300x200/7f1d1d/fbbf24?text=Burgers`, description: 'Juicy burgers with Pakistani spices and fresh toppings' },
        { id: 'fried', name: 'Fried Items', image: `https://placehold.co/300x200/7f1d1d/fbbf24?text=Fried+Items`, description: 'Crispy and delicious fried chicken and broast' }
    ];
    
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 hero-pattern">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
                            Welcome to{' '}
                            <span className="font-script text-gold-400">The Pan N Grill</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
                            Authentic Pakistani Taste in the Heart of Jhang
                        </p>
                        <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto">
                            Experience the finest Pakistani cuisine with our signature pizzas, shawarmas, burgers, and traditional dishes. Made with love, served with pride.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setCurrentPage('menu')}
                                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg focus-visible:focus btn-primary"
                                aria-label="Explore our menu"
                            >
                                Explore Our Menu
                            </button>
                            <button
                                onClick={() => setCurrentPage('contact')}
                                className="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors focus-visible:focus"
                                aria-label="Order now"
                            >
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Featured Categories */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-4">
                            Our Specialties
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover our most popular dishes, crafted with authentic Pakistani flavors and the finest ingredients
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredCategories.map((category) => (
                            <div
                                key={category.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow card-shadow cursor-pointer"
                                onClick={() => setCurrentPage('menu')}
                                role="button"
                                aria-label={`View ${category.name} section`}
                            >
                                <div className="aspect-w-16 aspect-h-12">
                                    <img src={category.image} alt={category.name} className="w-full h-48 object-cover lazy-load" loading="lazy" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-heading font-semibold text-primary-900 mb-2">
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {category.description}
                                    </p>
                                    <button className="text-gold-500 hover:text-gold-600 font-semibold transition-colors focus-visible:focus">
                                        View Menu →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* About Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
                                Authentic Pakistani Cuisine Since Day One
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                At The Pan N Grill, we bring you the authentic taste of Pakistan with every dish. Our chefs use traditional recipes passed down through generations, combined with the freshest ingredients to create an unforgettable dining experience.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                From our signature pizzas with Pakistani spices to our perfectly grilled shawarmas and juicy burgers, every item on our menu is crafted with passion and served with pride.
                            </p>
                            <button
                                onClick={() => setCurrentPage('about')}
                                className="bg-primary-900 hover:bg-primary-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors focus-visible:focus"
                                aria-label="Learn more about us"
                            >
                                Learn More About Us
                            </button>
                        </div>
                        <div className="relative">
                            <img
                                src="https://placehold.co/600x400/eeeeee/7f1d1d?text=Restaurant+Interior"
                                alt="The Pan N Grill Restaurant Interior"
                                className="rounded-xl shadow-lg lazy-load"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Contact Preview */}
            <section className="py-20 bg-primary-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            Visit Us Today
                        </h2>
                        <p className="text-xl text-gray-200">
                            Experience authentic Pakistani flavors in the heart of Jhang
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Location</h3>
                            <p className="text-gray-200">
                                Adhiwal Chowk, Sargodha Road<br />
                                Jhang Sadar, Jhang, Pakistan
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Phone</h3>
                            <p className="text-gray-200">
                                0318-1717763<br />
                                0321-7320055
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Social Media</h3>
                            <div className="flex justify-center space-x-4">
                                <a href="https://www.facebook.com/share/1AgzKa1R8s/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors focus-visible:focus" aria-label="Facebook">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                                <a href="https://wa.me/923456500649" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors focus-visible:focus" aria-label="WhatsApp">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}