import { firebaseAuth, FacebookProvider, GoogleProvider } from './firsebase';

class Auth {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Facebook':
        return FacebookProvider;
        break;
      case 'Google':
        return GoogleProvider;
        break;
      default:
        throw new Error(console.log(`${providerName} is not exist`));
    }
  }
}

export default Auth;
