
import React, { useContext } from "react";
import { FaEnvelope, FaLock, } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialIcon from "../SocialIcon/SocialIcon";
import { AuthContext } from "../providers/AuthProvider";





const SignIn = () => {

    const { createSignIn } = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        createSignIn(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
            }).catch(err => {
                console.error(err);
            })

    }

    const handleResetPassword = () => {

    }


    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-200 to-blue-200 flex items-center justify-center p-4">
            <div className="bg-white shadow-xl rounded-lg p-6 max-w-md w-full">

                <div id="signIn">
                    <h1 className="text-2xl font-bold text-center mb-4">Sign In</h1>
                    <form onSubmit={handleSignIn}>
                        <div id="signInMessage" className="hidden"></div>
                        <div className="relative mb-4">
                            <FaEnvelope className="absolute left-2 top-3 text-gray-400" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="w-full border-b border-gray-400 focus:border-blue-500 focus:outline-none pl-8 py-2"
                                required
                            />

                        </div>
                        <div className="relative mb-4">
                            <FaLock className="absolute left-2 top-3 text-gray-400" />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                className="w-full border-b border-gray-400 focus:border-blue-500 focus:outline-none pl-8 py-2"
                                required
                            />

                        </div>
                        <p className="text-right text-sm text-blue-500 hover:underline mb-4">
                            <a onClick={handleResetPassword} href="#">Recover Password</a>
                        </p>
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Sign In
                        </button>
                    </form>
                    <div className="text-center my-4">---------- or ---------</div>
                    <SocialIcon />
                    <div className="flex justify-between">
                        <p>Don't have an account yet?</p>
                        <Link to={'/signup'}>
                            <button
                                className="text-blue-500 hover:underline"
                            >
                                Sign Up
                            </button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignIn;
