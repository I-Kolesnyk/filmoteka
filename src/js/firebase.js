// Import the functions you need from the SDKs you need
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDFRxvG-cLncd4nzHUtwRVnlgrm2OeK7W8',
  authDomain: 'filmoteka-test-90b99.firebaseapp.com',
  projectId: 'filmoteka-test-90b99',
  storageBucket: 'filmoteka-test-90b99.appspot.com',
  messagingSenderId: '222913084900',
  appId: '1:222913084900:web:1011c02877eb5816a41bf1',
  measurementId: 'G-V4RKSJYRFE',
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const auth = getAuth(app);

const form = document.querySelector('.auth-form');
const registrationButton = document.querySelector('.form-button-register');
const signInButton = document.querySelector('.form-button-sign-in');

registrationButton.addEventListener('click', handleRegistration);
signInButton.addEventListener('click', handleSignIn);
// let registeredUsers = [];
// localStorage.setItem('users', JSON.stringify(registeredUsers));

async function handleRegistration(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    console.log(user);

    if (email && password) {
      alert('Thank you for registration');
      form.reset();
    }
  } catch (error) {
    console.log(error);
    handleRegistrationError(error);
  }
}

async function handleSignIn(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = response.user;
    console.log(user);

    if (email && password) {
      alert('Thank you for coming back!');
      form.reset();
    }
  } catch (error) {
    console.log(error);
    handleRegistrationError(error);
  }
}

function handleRegistrationError(error) {
  let errorMessage = error.message;
  if (errorMessage == 'Firebase: Error (auth/email-already-in-use).') {
    alert('This user is already exist. Please sign in!');
    // form.reset();
  } else if (errorMessage == 'Firebase: Error (auth/wrong-password).') {
    alert('Authorization error. Incorrect password');
  }
}
