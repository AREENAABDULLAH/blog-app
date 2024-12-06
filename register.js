
import { app,auth,createUserWithEmailAndPassword,} from "./firebase.js"

let register = document.getElementById('registerBtn')
let userRgister =()=>{
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    alert("your account has been registered sucessfully")
    window.location.href = 'index.html'
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(error);
    
  });


}
 register.addEventListener('click',userRgister)