import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider()
export const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
}