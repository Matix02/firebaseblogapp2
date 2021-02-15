// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBs8aQxdIjqyS_5jY618bedRhC543pbrLQ",
    authDomain: "bloggapp-c69c5.firebaseapp.com",
    databaseURL: "https://bloggapp-c69c5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bloggapp-c69c5",
    storageBucket: "bloggapp-c69c5.appspot.com",
    messagingSenderId: "43573396725",
    appId: "1:43573396725:web:0357ddc073147d337171bc",
    measurementId: "G-ESKG7JT46V"
};

firebase.initializeApp(firebaseConfig);

firebase.auth.Auth.Persistence.LOCAL;

$("#btn-login").click(function ()
{
    var email = $("#email").val();
    var password = $("#password").val();

    if(email !== "" && password !== "")
    {
        var result = firebase.auth().signInWithEmailAndPassword(email, password);

        result.catch(function (error)
        {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message : " + errorMessage);
        });
    }
    else
    {
        window.alert("Form is incomplete. Please fill out all fields");
    }
})

$("#btn-logout").click(function ()
{
    firebase.auth().signOut();
})