import React from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h3>Error Template in case any module fails.</h3>;
      }
  
      return this.props.children; 
    }
  }