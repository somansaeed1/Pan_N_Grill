// Mobile Navigation
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })

    // Close menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((n) =>
      n.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
      }),
    )
  }

  // Cart functionality
  let cart = []
  const cartBtn = document.getElementById("cart-btn")
  const cartSidebar = document.getElementById("cart-sidebar")
  const cartOverlay = document.getElementById("cart-overlay")
  const closeCartBtn = document.getElementById("close-cart")
  const cartItemsContainer = document.getElementById("cart-items")
  const cartCount = document.getElementById("cart-count")
  const cartTotal = document.getElementById("cart-total")

  // Add to cart functionality
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
      const menuItem = this.closest(".menu-item")
      const id = Number.parseInt(menuItem.dataset.id)
      const name = menuItem.dataset.name
      const price = Number.parseInt(menuItem.dataset.price)

      addToCart(id, name, price)
    })
  })

  function addToCart(id, name, price) {
    const existingItem = cart.find((item) => item.id === id)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({ id, name, price, quantity: 1 })
    }

    showAddToCartPopup(name)
    updateCartDisplay()
  }

  function showAddToCartPopup(itemName) {
    // Remove existing popup if any
    const existingPopup = document.querySelector(".cart-popup")
    if (existingPopup) {
      existingPopup.remove()
    }

    // Create popup element
    const popup = document.createElement("div")
    popup.className = "cart-popup"
    popup.innerHTML = `
      <div class="popup-content">
        <span class="popup-icon">✓</span>
        <span class="popup-text">${itemName} added to cart!</span>
      </div>
    `

    // Add popup to body
    document.body.appendChild(popup)

    // Show popup with animation
    setTimeout(() => {
      popup.classList.add("show")
    }, 10)

    // Remove popup after 3 seconds
    setTimeout(() => {
      popup.classList.remove("show")
      setTimeout(() => {
        if (popup.parentNode) {
          popup.parentNode.removeChild(popup)
        }
      }, 300)
    }, 3000)
  }

  function removeFromCart(id) {
    cart = cart.filter((item) => item.id !== id)
    updateCartDisplay()
  }

  function updateQuantity(id, quantity) {
    if (quantity <= 0) {
      removeFromCart(id)
    } else {
      const item = cart.find((item) => item.id === id)
      if (item) {
        item.quantity = quantity
      }
    }
    updateCartDisplay()
  }

  function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    if (cartCount) {
      cartCount.textContent = totalItems
    }

    // Update cart total
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    if (cartTotal) {
      cartTotal.textContent = total
    }

    // Update cart items display
    if (cartItemsContainer) {
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>'
      } else {
        cartItemsContainer.innerHTML = cart
          .map(
            (item) => `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <p>Rs. ${item.price}</p>
                        </div>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                            <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                        </div>
                    </div>
                `,
          )
          .join("")
      }
    }
  }

  // Make functions global for onclick handlers
  window.updateQuantity = updateQuantity
  window.removeFromCart = removeFromCart

  // Cart sidebar controls
  if (cartBtn) {
    cartBtn.addEventListener("click", () => {
      cartSidebar.classList.add("open")
      cartOverlay.classList.add("active")
    })
  }

  if (closeCartBtn) {
    closeCartBtn.addEventListener("click", () => {
      cartSidebar.classList.remove("open")
      cartOverlay.classList.remove("active")
    })
  }

  if (cartOverlay) {
    cartOverlay.addEventListener("click", () => {
      cartSidebar.classList.remove("open")
      cartOverlay.classList.remove("active")
    })
  }

  // Gallery lightbox
  window.openLightbox = (src) => {
    const lightbox = document.getElementById("lightbox")
    const lightboxImg = document.getElementById("lightbox-img")
    if (lightbox && lightboxImg) {
      lightboxImg.src = src
      lightbox.style.display = "block"
    }
  }

  window.closeLightbox = () => {
    const lightbox = document.getElementById("lightbox")
    if (lightbox) {
      lightbox.style.display = "none"
    }
  }

  // Contact form
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form data
      const formData = new FormData(this)
      const data = Object.fromEntries(formData)

      // Here you would typically send the data to a server
      console.log("Form submitted:", data)

      // Show success message
      alert("Thank you for your message! We will get back to you soon.")

      // Reset form
      this.reset()
    })
  }
})
