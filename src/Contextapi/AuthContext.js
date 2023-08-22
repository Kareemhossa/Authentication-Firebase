import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  linkWithCredential,
  // signInWithRedirect,
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  //Func to create with Google
  const googleSignIn = () => {
    const providerGoogle = new GoogleAuthProvider();
    signInWithPopup(auth, providerGoogle);
    // signInWithRedirect(auth, providerGoogle);
  };

  //Func to create with Gitub
  const githubSignIn = () => {
    const providerGithub = new GithubAuthProvider();

    signInWithPopup(auth, providerGithub)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const user = result.user;

        // Check if GitHub provider is already linked
        const isGitHubProviderLinked = user.providerData.some(
          (provider) => provider.providerId === providerGithub.providerId
        );

        if (isGitHubProviderLinked) {
          console.log("GitHub provider is already linked to the account");
          return;
        }

        // Link the GitHub credential to the existing user
        linkWithCredential(user, credential)
          .then(() => {
            // Successful account linking
            console.log("GitHub account successfully linked");
          })
          .catch((linkError) => {
            console.error("Error linking GitHub account:", linkError.message);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error("GitHub sign-in error:", errorMessage);
      });
  };

  //Func to create email
  const createUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //Func to sign in
  const signIn = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //func to logout
  const logout = () => {
    return signOut(auth);
  };

  // when render the  onAuthStateChanged check if user sign or not
  useEffect(() => {
    const clean = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return clean();
  }, []);

  return (
    <UserContext.Provider
      value={{
        createUser,
        user,
        logout,
        signIn,
        googleSignIn,
        githubSignIn,
      }}
    >
      {!loading && children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
