window.gapi.load("client:auth2", () => {
  window.gapi.client
    .init({
      clientId:
        "411919426327-sglftdkhe4jjes4qqhv7lt1f92lo4c5f.apps.googleusercontent.com",
      scope: "email",
    })
    .then(() => {
      const auth = window.gapi.auth2.getAuthInstance();
      this.onAuthChange();
      auth.isSignedIn.listen(this.onAuthChange);
    });
});
