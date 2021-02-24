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
});

$("#btn-signup").click(function ()
{
    var email = $("#email").val();
    var password = $("#password").val();
    var cPassword = $("#confirmPassword").val();

    if(email !== "" && password !== "" && cPassword !== "")
    {
        if(password === cPassword){
            var result = firebase.auth().createUserWithEmailAndPassword(email, password);

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
            window.alert("Password do not match with the Confirm Password");
        }

    }
    else
    {
        window.alert("Form is incomplete. Please fill out all fields");
    }
});

$("#btn-resetPassword").click(function()
{
    var auth = firebase.auth();
    var email = $("#email").val();

    if(email !== "")
    {
        auth.sendPasswordResetEmail(email).then(function ()
        {
            window.alert("Email has been sent to you, Please check and verify. ");
        }).catch(function(error)
        {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message : " + errorMessage);
        });
    }
    else {
        window.alert("Please write your email first.");
    }
});


$("#btn-logout").click(function ()
{
    firebase.auth().signOut();
});

$("#btn-update").click(function()
{
    var phone = $("#phone").val();
    var address = $("#address").val();
    var bio = $("#bio").val();
    var fName = $("#firstName").val();
    var sName = $("#secondName").val();
    var country = $("#country").val();
    var gender = $("#gender").val();

    var rootRef = firebase.database().ref().child("Users");
    var userID = firebase.auth().currentUser.uid;
    var usersRef = rootRef.child(userID);

    if(fName!=="" && sName!=="" && phone!=="" && country!=="" && gender!=="" && bio!=="" && address!==""){

        var userData =
            {
                "phone": phone,
                "address": address,
                "bio": bio,
                "firstName": fName,
                "secondName": sName,
                "country": country,
                "gender": gender
            };

        usersRef.set(userData, function(error)
        {
            if(error){
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);

                window.alert("Message : " + errorMessage);
            } else {
                window.location.href = "MainPage.html";
            }
        });
    } else {
        window.alert("Form is incomplete. Please fill out all fields");
    }

});

function switchView(view)
{
    $.get({
        url:view,
        cache:false,
    })
        .then(function(data){
            $("#container").html(data);
        });
}


