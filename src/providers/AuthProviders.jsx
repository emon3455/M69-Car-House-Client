
/* eslint-disable no-unused-vars */

import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const Logout = () => {
        setLoading(true);
        return signOut(auth)
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

            const logedUser = {
                email: currentUser?.email
            }
            if (currentUser && currentUser.email) {

                fetch('http://localhost:5000/jwt', {
                    method: "POST",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(logedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // warning: not the best way to store
                        localStorage.setItem('car-access-token', data.token);
                    })
                    .catch(er => console.log(er.message))

            }
            else{
                localStorage.removeItem('car-access-token');
            }

        });

        return () => {
            return unsubscribe();
        }

    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        loginWithGoogle,
        Logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;