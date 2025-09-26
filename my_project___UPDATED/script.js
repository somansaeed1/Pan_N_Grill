const { useState, useEffect, useRef } = React;

function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast px-6 py-3 rounded-lg shadow-lg text-white ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`;
    toast.textContent = message;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toastContainer.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

try {
    ReactDOM.render(<App />, document.getElementById('app'));
} catch (error) {
    console.error('Failed to render app:', error);
    document.getElementById('app').innerHTML = `
        <div class="min-h-screen flex items-center justify-center bg-gray-50">
            <div class="text-center p-8">
                <h1 class="text-2xl font-bold text-red-600 mb-4">Unable to Load Application</h1>
                <p class="text-gray-600 mb-6">Please refresh the page or contact us for assistance.</p>
                <a href="tel:03181717763" class="bg-primary-900 text-white px-6 py-3 rounded-lg hover:bg-primary-800 transition-colors">
                    Call Us: 0318-1717763
                </a>
            </div>
        </div>
    `;
}