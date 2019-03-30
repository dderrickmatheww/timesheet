







name = $("#name-input").val().trim();
age = $("#age-input").val().trim();
email = $("#email-input").val().trim();
comment = $("#comment-input").val().trim();





var config = {
    apiKey: "AIzaSyBqtgcatkRo935JTDFgyezWT20kkVsDNyE",
    authDomain: "test-project-9bcc3.firebaseapp.com",
    databaseURL: "https://test-project-9bcc3.firebaseio.com",
    projectId: "test-project-9bcc3",
    storageBucket: "test-project-9bcc3.appspot.com",
    messagingSenderId: "632747193806"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#add-user").on("click", function(event) {
    // Don't refresh the page!
    event.preventDefault();

    // Code in the logic for storing and retrieving the most recent user.
    name = $("#name-input").val().trim();
    age = $("#age-input").val().trim();
    email = $("#email-input").val().trim();
    comment = $("#comment-input").val().trim();

    var row = $("<div>")
    
})