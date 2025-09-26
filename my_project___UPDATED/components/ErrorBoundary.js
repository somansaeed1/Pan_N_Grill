class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    
    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }
    
    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-50">
                    <div className="text-center p-8">
                        <h1 className="text-2xl font-bold text-primary-900 mb-4">
                            Oops! Something went wrong
                        </h1>
                        <p className="text-gray-600 mb-6">
                            We're sorry for the inconvenience. Please refresh the page or contact us.
                        </p>
                        <div className="space-x-4">
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-primary-900 text-white px-6 py-3 rounded-lg hover:bg-primary-800 transition-colors"
                            >
                                Refresh Page
                            </button>
                            <a
                                href="tel:03181717763"
                                className="bg-gold-500 text-white px-6 py-3 rounded-lg hover:bg-gold-600 transition-colors inline-block"
                            >
                                Call Us
                            </a>
                        </div>
                    </div>
                </div>
            );
        }
        
        return this.props.children;
    }
}