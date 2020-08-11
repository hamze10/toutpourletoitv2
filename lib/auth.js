import { auth } from "./firebase";

const signIn = (email, password) =>
  auth
    .signInWithEmailAndPassword(email, password)
    .then((result) => result)
    .catch((err) => {
      throw err;
    });

const signOut = () =>
  auth.signOut().catch((err) => {
    throw err;
  });

export { signIn, signOut };
