// Initialize Firebase
var config = {
    apiKey: "AIzaSyArsOzYgCmZm6VGmQPfRnKJSZgciww10C0",
    authDomain: "titlesheet-27591.firebaseapp.com",
    databaseURL: "https://titlesheet-27591.firebaseio.com",
    projectId: "titlesheet-27591",
    storageBucket: "titlesheet-27591.appspot.com",
    messagingSenderId: "609136145728"
  };
  firebase.initializeApp(config);

$("#addemployee").on("click", function(){
    var name = $("#name-input").val().trim()
    var role = $("#role-input").val().trim()
    var date = $("#date-input").val().trim()
    var rate = $("#rate-input").val().trim()

    var t = $("<tr>")
    var nt = $("<td>")
    var rt = $("<td>")
    var dt = $("<td>")
    var rat = $("<td>")

    var mont = $("<td>")
    var tott = $("<td>")

    nt.text(name)
    rt.text(role)
    dt.text(date)
    rat.text(rate)

    mont.text()
    //do the math here to get the months between the date var and the current date

    tott.text()
    //do the math here to get the total billing by multiplying mont by rate


    t.append(nt)
    t.append(rt)
    t.append(dt)
    t.append(rat)
    t.append(mont)
    t.append(tott)

    $("#employees").append(t)

    $(".form-control").val("")

})

database.ref().push({
    name: name,
    role: role,
    date: firebase.database.ServerValue.TIMESTAMP,
    rate: rate
  });