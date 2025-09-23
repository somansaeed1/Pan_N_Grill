"use client"

import { useState } from "react"
import Image from "next/image"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

export default function HomePage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [showCart, setShowCart] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [popupMessage, setPopupMessage] = useState("")

  const addToCart = (name: string, price: number) => {
    const id = name.toLowerCase().replace(/\s+/g, "-")
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id)
      if (existingItem) {
        return prevCart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
      } else {
        return [...prevCart, { id, name, price, quantity: 1 }]
      }
    })

    // Show popup notification
    setPopupMessage(`✓ ${name} added to cart!`)
    setShowPopup(true)
    setTimeout(() => setShowPopup(false), 3000)
  }

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id))
    } else {
      setCart((prevCart) => prevCart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const scrollToSection = (sectionId: string) => {
    console.log("[v0] Attempting to scroll to section:", sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      console.log("[v0] Element found, scrolling to:", element)
      element.scrollIntoView({ behavior: "smooth" })
    } else {
      console.log("[v0] Element not found for ID:", sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-card/95 backdrop-blur-sm shadow-sm sticky top-0 z-40 border-b border-border">
        <div className="container-max">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Pan N Grill</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("menu")}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Menu
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
            <button
              onClick={() => setShowCart(true)}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-sm"
            >
              View Cart ({getTotalItems()})
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/elegant-restaurant-interior-with-warm-lighting-and.jpg"
            alt="Pan N Grill Restaurant Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay" />
        </div>
        <div className="relative z-10 container-max text-center text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up">Pan N Grill</h1>
          <p className="text-2xl md:text-3xl mb-4 animate-fade-in-up animate-delay-100">Authentic Pakistani Flavors</p>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Experience the finest pizza, shawarma, burgers, and traditional Pakistani dishes in the heart of Jhang
          </p>
          <button
            onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in-up animate-delay-300"
          >
            Explore Our Menu
          </button>
        </div>
      </section>

      <section className="section-padding bg-accent">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Our Signature Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card text-center">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/gourmet-burger-with-beef-patty-and-fresh-toppings.jpg"
                  alt="Special Pizza"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-3">Special Pizza</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our signature family pizza with premium toppings and authentic Pakistani flavors
              </p>
              <p className="text-3xl font-bold text-primary mb-4">Rs. 2000</p>
              <button onClick={() => addToCart("Special Family Pizza", 2000)} className="add-to-cart-btn">
                Add to Cart
              </button>
            </div>

            <div className="feature-card text-center">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/delicious-chicken-shawarma-wrap-with-vegetables-an.jpg"
                  alt="Chicken Shawarma"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-3">Chicken Shawarma</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Tender chicken wrapped in fresh bread with our special sauce and crisp vegetables
              </p>
              <p className="text-3xl font-bold text-primary mb-4">Rs. 200</p>
              <button onClick={() => addToCart("Chicken Shawarma", 200)} className="add-to-cart-btn">
                Add to Cart
              </button>
            </div>

            <div className="feature-card text-center">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/grilled-fish-with-spices-and-vegetables.jpg"
                  alt="Full Broast"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-3">Full Broast</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Complete chicken broast with our signature spices and crispy coating
              </p>
              <p className="text-3xl font-bold text-primary mb-4">Rs. 1600</p>
              <button onClick={() => addToCart("Full Broast", 1600)} className="add-to-cart-btn">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="section-padding bg-background">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Complete Menu</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our extensive collection of authentic Pakistani dishes, from traditional favorites to modern
              creations
            </p>
          </div>

          {/* Special Pizza */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">Special Pizza</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Family Pizza", price: 2000, image: "/gourmet-burger-with-beef-patty-and-fresh-toppings.jpg" },
                { name: "X-Large Pizza", price: 2750, image: "/gourmet-burger-with-beef-patty-and-fresh-toppings.jpg" },
                { name: "Large Pizza", price: 1500, image: "/gourmet-burger-with-beef-patty-and-fresh-toppings.jpg" },
                { name: "Medium Pizza", price: 1000, image: "/gourmet-burger-with-beef-patty-and-fresh-toppings.jpg" },
                { name: "Small Pizza", price: 500, image: "/gourmet-burger-with-beef-patty-and-fresh-toppings.jpg" },
              ].map((item) => (
                <div key={item.name} className="menu-item">
                  <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <h4>{item.name}</h4>
                  <p className="price">Rs. {item.price}</p>
                  <button onClick={() => addToCart(item.name, item.price)} className="add-to-cart-btn">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Special Shawarmas */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">Special Shawarmas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Chicken Shawarma",
                  price: 200,
                  image: "/delicious-chicken-shawarma-wrap-with-vegetables-an.jpg",
                },
                { name: "Zinger Shawarma", price: 300, image: "/beef-shawarma-wrap.jpg" },
                { name: "Beef Shawarma", price: 250, image: "/beef-shawarma-wrap.jpg" },
                { name: "Mix Shawarma", price: 350, image: "/mixed-shawarma-platter.jpg" },
                { name: "Malai Botti Shawarma", price: 400, image: "/mixed-shawarma-platter.jpg" },
                { name: "Seekh Kabab Shawarma", price: 300, image: "/mixed-shawarma-platter.jpg" },
              ].map((item) => (
                <div key={item.name} className="menu-item">
                  <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <h4>{item.name}</h4>
                  <p className="price">Rs. {item.price}</p>
                  <button onClick={() => addToCart(item.name, item.price)} className="add-to-cart-btn">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Chorizo Burgers */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">Chorizo Burgers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Modern Burger", price: 450, image: "/bbq-bacon-burger-with-onion-rings.jpg" },
                { name: "Zinger Burger", price: 350, image: "/grilled-chicken-burger-with-avocado.jpg" },
                { name: "Chicken Burger", price: 300, image: "/grilled-chicken-burger-with-avocado.jpg" },
                { name: "Beef Burger", price: 400, image: "/bbq-bacon-burger-with-onion-rings.jpg" },
                { name: "Fish Burger", price: 350, image: "/grilled-fish-with-spices-and-vegetables.jpg" },
                { name: "Veg Burger", price: 250, image: "/grilled-chicken-burger-with-avocado.jpg" },
              ].map((item) => (
                <div key={item.name} className="menu-item">
                  <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <h4>{item.name}</h4>
                  <p className="price">Rs. {item.price}</p>
                  <button onClick={() => addToCart(item.name, item.price)} className="add-to-cart-btn">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Fried Items */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">Fried Items</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Full Broast", price: 1600, image: "/grilled-fish-with-spices-and-vegetables.jpg" },
                { name: "Half Broast", price: 800, image: "/grilled-fish-with-spices-and-vegetables.jpg" },
                { name: "4 Pcs Broast", price: 600, image: "/grilled-fish-with-spices-and-vegetables.jpg" },
                { name: "2 Pcs Broast", price: 350, image: "/grilled-fish-with-spices-and-vegetables.jpg" },
                { name: "1 Pc Broast", price: 200, image: "/grilled-fish-with-spices-and-vegetables.jpg" },
                { name: "Chicken Wings (6 pcs)", price: 450, image: "/grilled-fish-with-spices-and-vegetables.jpg" },
                { name: "Chicken Strips", price: 400, image: "/grilled-fish-with-spices-and-vegetables.jpg" },
                { name: "Fish & Chips", price: 500, image: "/golden-crispy-french-fries.png" },
              ].map((item) => (
                <div key={item.name} className="menu-item">
                  <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <h4>{item.name}</h4>
                  <p className="price">Rs. {item.price}</p>
                  <button onClick={() => addToCart(item.name, item.price)} className="add-to-cart-btn">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-accent">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8">About Pan N Grill</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Located in the heart of Jhang, Pan N Grill brings you the finest Pakistani cuisine with a modern twist.
              From our signature pizzas and shawarmas to traditional broast and burgers, we serve authentic flavors that
              satisfy every craving.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to quality ingredients and exceptional service has made us a favorite dining destination
              for families and food lovers throughout Jhang and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-background">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Contact Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-lg">📍</span>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-lg">Address</p>
                    <p className="text-muted-foreground">Adhiwal Chowk, Sargodha Road, Jhang Sadar, Jhang, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-lg">📞</span>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-lg">Phone</p>
                    <p className="text-muted-foreground">0318-1717763</p>
                    <p className="text-muted-foreground">0321-7320055</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-lg">💬</span>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-lg">WhatsApp</p>
                    <p className="text-muted-foreground">0345-6500649</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-lg">📘</span>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-lg">Facebook</p>
                    <a
                      href="https://www.facebook.com/share/1AgzKa1R8s/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      Visit our Facebook page
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6">Opening Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground font-medium">Monday - Sunday</span>
                  <span className="text-card-foreground font-semibold">11:00 AM - 11:00 PM</span>
                </div>
                <div className="mt-6 p-4 bg-accent rounded-lg">
                  <p className="text-accent-foreground text-sm">
                    <strong>Note:</strong> We're open every day to serve you the best Pakistani cuisine in Jhang!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showCart && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowCart(false)}></div>
          <div className="absolute right-0 top-0 h-full w-96 bg-card shadow-2xl border-l border-border">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-card-foreground">Your Cart</h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-muted-foreground hover:text-card-foreground w-8 h-8 rounded-full hover:bg-accent flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">Your cart is empty</p>
                  <p className="text-muted-foreground text-sm mt-2">Add some delicious items to get started!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg bg-accent"
                    >
                      <div className="flex-1">
                        <h3 className="font-medium text-accent-foreground">{item.name}</h3>
                        <p className="text-primary font-semibold">Rs. {item.price}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="border-t border-border p-6 bg-accent">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl font-bold text-accent-foreground">Total: Rs. {getTotalPrice()}</span>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-4 rounded-xl hover:bg-primary/90 transition-colors font-semibold text-lg shadow-sm">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {showPopup && (
        <div className="fixed top-6 right-6 z-50 bg-secondary text-secondary-foreground px-6 py-4 rounded-xl shadow-lg transform transition-all duration-300 ease-in-out border border-border">
          <div className="flex items-center space-x-2">
            <span className="text-lg">✓</span>
            <span className="font-medium">{popupMessage}</span>
          </div>
        </div>
      )}
    </div>
  )
}
