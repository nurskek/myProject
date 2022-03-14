const firebaseConfig = {
    apiKey: "AIzaSyDq9uSoJ7ttIKR306ZPrsCtw6xfKblxHHE",
    authDomain: "nursunist.firebaseapp.com",
    projectId: "nursunist",
    storageBucket: "nursunist.appspot.com",
    messagingSenderId: "916692165741",
    appId: "1:916692165741:web:5fc07835214b4590510b64",
    measurementId: "G-M9XMWQJ1FS"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  var auth = firebase.auth();

  const form = document.querySelector("form");
  const but = document.querySelector("#signInBut");
  const googleBut = document.querySelector("#googleButton");

  const phoneBut = document.querySelector("#phoneButton");
  const verCode = document.querySelector("#verificationCode");
  const phoneNumb = document.querySelector("#phoneNum");
  const numSubmit = document.querySelector("#signInPhone");

  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  
  
async function signInEmail() {
    const ema = email.value;
    const passw = password.value;
    await auth.signInWithEmailAndPassword(ema, passw)
    .then((userCredential) => {
        // Signed in
        console.log("Signed in")
        // ...
    })
    .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
    });
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

async function signInGoogle() { 
    await auth
      .signInWithPopup(provider)
      .then((result) => {
        // @type {firebase.auth.OAuthCredential}
        var credential = GoogleAuthProvider.credentialFromResult(result);
    
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        alert(user.displayName);
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorMessage);
        alert(error.message);
        // ...
      });
      googleBut.addEventListener('click', signInGoogle);
}

  


// IT WAS FOR TOGGLE PHONE FORM, currently not working
// function togglePhoneForm(){
//     var x = document.querySelector("#phoneDiv");
//     if(x.style.display === 'none') {
//         x.style.display === 'flex';
//     }
// }

// phoneBut.onclick = togglePhoneForm;


