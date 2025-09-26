function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `Hello! I'm contacting you from your website.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
        const whatsappUrl = `https://wa.me/923456500649?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        showToast('Redirecting to WhatsApp...');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };
    
    return (
        <div className="pt-20">
            <section className="bg-primary-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">Get in touch for reservations, orders, or any questions.</p>
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-primary-900 mb-8">Get In Touch</h2>
                            <div className="space-y-8">
                                <ContactInfo icon="location" title="Our Location" lines={["Adhiwal Chowk, Sargodha Road", "Jhang Sadar, Jhang, Pakistan"]} link={{ href: "https://www.google.com/maps/search/?api=1&query=Adhiwal+Chowk,Sargodha+Road,Jhang+Sadar", text: "View on Google Maps →" }} />
                                <ContactInfo icon="phone" title="Phone Numbers" lines={["0318-1717763", "0321-7320055"]} />
                                <ContactInfo icon="whatsapp" title="WhatsApp" lines={["0345-6500649"]} link={{ href: "https://wa.me/923456500649", text: "Chat on WhatsApp" }} />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-primary-900 mb-8">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <InputField id="name" label="Full Name *" value={formData.name} onChange={handleInputChange} required />
                                <InputField id="email" type="email" label="Email Address" value={formData.email} onChange={handleInputChange} />
                                <InputField id="phone" type="tel" label="Phone Number *" value={formData.phone} onChange={handleInputChange} required />
                                <TextAreaField id="message" label="Message *" value={formData.message} onChange={handleInputChange} required />
                                <button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-white py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg focus-visible:focus btn-primary">
                                    Send Message via WhatsApp
                                </button>
                                <p className="text-sm text-gray-500 text-center">* Required fields. Your message will be sent via WhatsApp.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const InputField = ({ id, label, ...props }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        <input id={id} name={id} {...props} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors" />
    </div>
);

const TextAreaField = ({ id, label, ...props }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        <textarea id={id} name={id} rows={5} {...props} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors resize-vertical" />
    </div>
);

const ContactInfo = ({ title, lines, link }) => (
    <div className="flex items-start space-x-4">
        <div className="bg-gold-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
            {/* SVG icons can be added here based on 'icon' prop */}
        </div>
        <div>
            <h3 className="text-xl font-semibold text-primary-900 mb-2">{title}</h3>
            {lines.map(line => <p key={line} className="text-gray-600 text-lg">{line}</p>)}
            {link && <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-gold-600 font-semibold mt-2 inline-block focus-visible:focus">{link.text}</a>}
        </div>
    </div>
);