import React, { Component } from "react";
import "./ErrorBound.scss";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.logErrorToMyService = this.logErrorToMyService.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  logErrorToMyService(error, errorInfo) {
    console.log("Error - " + error);
    console.log("Info - " + errorInfo);
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    this.logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="Error">
          <h1 className="ErrorMessage">
            Something went wrong. If its a bug, Please contact Ekansh Baweja{" "}
            <a href="" target="_blank">
              here
            </a>
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
