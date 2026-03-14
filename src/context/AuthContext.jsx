import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../service/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState(null);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const register = async (userData) => {

    const { email, password, ...profile } = userData;

    const result = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "users", result.user.uid), {
      email,
      ...profile
    });

    return result;
  };

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)

    const user = result.user;

    const userRef = doc(db, 'users', user.uid)
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      await setDoc(userRef, {
        email: user.email,
        firstName: user.displayName || "",
        lastName: "",
        telefono: "",
        address: "",
        addressNum: "",
        postalCode: "",
        city: "",
        provincia: "",
        profileCompleted: false
      })

      return { user, isNewUser: true }
    }

    const data = docSnap.data()

    if (!data.profileCompleted) {
      return { user, isNewUser: false }
    }

    return { user, isNewUser: false };
  }

  const completeProfile = async (uid, data) => {
    const userRef = doc(db, "users", uid);

    await setDoc(
      userRef,
      {
        ...data,
        profileCompleted: true
      },
      { merge: true }
    );

  };

  const logout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser)

      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProfile(docSnap.data());
        }
      } else {
        setProfile(null);
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = { user, profile, login, register, googleLogin, completeProfile, logout }

  return (
    <AuthContext.Provider value={value} >
      {!loading && children}
    </AuthContext.Provider>
  )
}