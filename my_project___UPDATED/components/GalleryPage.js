function GalleryPage() {
    const galleryImages = [
        {
            category: "Restaurant Ambiance",
            images: [
                { src: "https://placehold.co/600x400/7f1d1d/FFFFFF?text=Main+Dining+Area", alt: "Main dining area with comfortable seating" },
                { src: "https://placehold.co/600x400/7f1d1d/FFFFFF?text=Cozy+Corner", alt: "A cozy corner for small groups" },
                { src: "https://placehold.co/600x400/7f1d1d/FFFFFF?text=Outdoor+View", alt: "View from the restaurant's entrance" },
            ]
        },
        {
            category: "Our Kitchen",
            images: [
                { src: "https://placehold.co/600x400/4a5568/FFFFFF?text=Grill+Station", alt: "The bustling grill station" },
                { src: "https://placehold.co/600x400/4a5568/FFFFFF?text=Pizza+Oven", alt: "Our hot pizza oven in action" },
                { src: "https://placehold.co/600x400/4a5568/FFFFFF?text=Hygienic+Prep+Area", alt: "Clean and hygienic food preparation area" },
            ]
        },
        {
            category: "Delicious Food",
            images: [
                { src: "https://placehold.co/600x400/d97706/FFFFFF?text=Specialty+Pizza", alt: "A freshly baked specialty pizza" },
                { src: "https://placehold.co/600x400/d97706/FFFFFF?text=Loaded+Shawarma", alt: "A delicious and loaded shawarma platter" },
                { src: "https://placehold.co/600x400/d97706/FFFFFF?text=Juicy+Zinger+Burger", alt: "Our famous juicy zinger burger" },
            ]
        }
    ];

    return (
        <div className="pt-20">
            {/* Gallery Hero Section */}
            <section className="bg-primary-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                        Our Gallery
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        A glimpse into the heart of The Pan N Grill
                    </p>
                </div>
            </section>

            {/* Image Grid Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {galleryImages.map((section, index) => (
                        <div key={index} className="mb-16">
                            <h2 className="text-3xl font-heading font-bold text-primary-900 mb-8 border-b-2 border-gold-500 pb-4">
                                {section.category}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.images.map((image, imgIndex) => (
                                    <div key={imgIndex} className="bg-white rounded-xl shadow-lg overflow-hidden card-shadow">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-64 object-cover lazy-load"
                                            loading="lazy"
                                        />
                                        <div className="p-4">
                                            <p className="text-gray-600 text-center">{image.alt}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}