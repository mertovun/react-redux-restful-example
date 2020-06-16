import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

export class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "411919426327-sglftdkhe4jjes4qqhv7lt1f92lo4c5f.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    isSignedIn
      ? this.props.signIn(this.auth.currentUser.get().getId())
      : this.props.signOut();
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    return this.props.isSignedIn === null ? null : this.props.isSignedIn ? (
      <button className="ui red google button" onClick={this.onSignOutClick}>
        <i className="google icon"></i>Sign Out
      </button>
    ) : (
      <button className="ui red google button" onClick={this.onSignInClick}>
        <i className="google icon"></i>Sign In with Google
      </button>
    );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
  userId: state.auth.userId,
});

const mapDispatchToProps = { signIn, signOut };

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
