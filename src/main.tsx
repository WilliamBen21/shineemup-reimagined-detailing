import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Error Boundary Component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#080808] text-white flex items-center justify-center p-4">
          <div className="max-w-md w-full">
            <div className="relative">
              <div className="absolute inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl blur"></div>
              <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/10">
                <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
                <p className="text-gray-400 mb-6">We apologize for the inconvenience. Please try refreshing the page.</p>
                <pre className="bg-black/20 p-4 rounded-lg text-sm text-gray-400 overflow-auto">
                  {this.state.error?.toString()}
                </pre>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300"
                >
                  Refresh Page
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
