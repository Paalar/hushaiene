import auth from './index';
import firebase from 'firebase';

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signUp = () => auth.signInWithRedirect(googleProvider);
export const { currentUser } = auth;

export const getRedirectFromGoogle = async (): Promise<firebase.User | null> => {
    const response = firebase.auth().getRedirectResult();
    const result = await response;
    console.log('result', result);
    return result.user;
};
