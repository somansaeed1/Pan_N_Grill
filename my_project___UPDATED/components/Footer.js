function Footer({ setCurrentPage }) {
    return (
        <footer className="bg-primary-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-script font-bold text-gold-400 mb-4">The Pan N Grill</h3>
                        <p className="text-gray-300 mb-6 max-w-md">Experience authentic Pakistani cuisine in the heart of Jhang. We serve traditional flavors with modern presentation.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><button onClick={() => setCurrentPage('home')} className="text-gray-300 hover:text-gold-400">Home</button></li>
                            <li><button onClick={() => setCurrentPage('about')} className="text-gray-300 hover:text-gold-400">About Us</button></li>
                            <li><button onClick={() => setCurrentPage('menu')} className="text-gray-300 hover:text-gold-400">Menu</button></li>
                            {/* ADD THIS NEW LINE */}
                            <li><button onClick={() => setCurrentPage('gallery')} className="text-gray-300 hover:text-gold-400">Gallery</button></li>
                            <li><button onClick={() => setCurrentPage('contact')} className="text-gray-300 hover:text-gold-400">Contact</button></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <div className="space-y-2 text-gray-300">
                            <p>Adhiwal Chowk, Sargodha Road</p>
                            <p>Jhang Sadar, Jhang, Pakistan</p>
                            <p>Phone: 0318-1717763</p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>© 2025 The Pan N Grill. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}