import{ auth,onAuthStateChanged,signInWithEmailAndPassword,
 
    GoogleAuthProvider,
    signInWithPopup,provider} from'./firebase.js';
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
    console.log("user exist");
    
    } else {
      console.log("user not found");
      
    }
  });
  
  
  
  let googleLogin = document.querySelector("#googleBtn")
  let googleBtn = ()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
    
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
     
      const user = result.user;
      console.log(token);
      console.log(user);
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: user.email,
          id: user.uid,
          name: user.displayName,
          picture: user.photoURL,
        })
      );
      window.location.href = 'index.html';
      
      
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    console.log(errorMessage);
    
      const credential = GoogleAuthProvider.credentialFromError(error);
     
    });
  }
  googleLogin.addEventListener("click",googleBtn)
  
  
  
  
  
  
  document.addEventListener('DOMContentLoaded', () => {
    let login = document.getElementById('loginBtn');
    let logBtn = () => {
        let email = document.getElementById('email');
        let password = document.getElementById('password');
  
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
  
                alert("Login successfully"); // Displaying user email
                // Clear input fields
                email.value = "";
                password.value = "";
                localStorage.setItem(
                    "user",
                    JSON.stringify({ email: user.email, id: user.uid })
                );
  
                // Redirect to home.html after a short delay
                setTimeout(function() {
                    window.location.href = 'index.html';
                }, 3000);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                // Displaying error message
            });
    };
  
    login.addEventListener('click', logBtn);
  });