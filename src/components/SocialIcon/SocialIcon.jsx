import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { app } from '../../firebase/firebase.init';

const SocialIcon = () => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()


    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
            })
            .catch(err => {
                console.log(err);
            })
    }


    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="flex justify-center space-x-4 mb-4">
            <FaGoogle
                onClick={handleGoogleLogin}
                className="text-blue-500 cursor-pointer text-2xl" />
            <FaGithub
                onClick={handleGithubLogin}
                className="text-blue-500 cursor-pointer text-2xl" />
        </div>
    );
};

export default SocialIcon;