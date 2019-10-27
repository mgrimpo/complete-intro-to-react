import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
    state = { hasError: false, redirect: false };

    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
    }

    componentDidUpdate() {
        if (this.state.hasError) {
            setTimeout(() => this.setState({ redirect: true }), 5000);
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
        if (this.state.hasError) {
            return (
                <h1>
                    An error has occurred. <Link to="/">Click here</Link> to
                    return to the main page or wait five seconds to be
                    redirected.
                </h1>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
