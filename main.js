import { auth } from "./firebaseConfig.js"; // get out firebase auth instance
import { signInUserWithGoogle } from "./SignInWithGoogle.js";

// check if a user is logged in
auth.onAuthStateChanged(function (user) {
    if (user) {
        // user is signed in.
        console.log("User is logged in:", user.displayName);
    } else {
        // user is signed out.
        console.log("User is not logged in");
    }
});

const testButton = document.getElementById("button");

const handleGoogleSignUp = async () => {
    const response = await signInUserWithGoogle();

    if (response.message === "error") {
        console.log("Error, user not signed in with Google");
    }
};

testButton.addEventListener("click", handleGoogleSignUp);
