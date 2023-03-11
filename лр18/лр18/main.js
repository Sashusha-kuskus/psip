send = function(){
    alert("Name: " + document.getElementById("name").value +
            "\nEmail: " + document.getElementById("email").value +
            "\nLanguage: " + document.getElementById("select").value +
            "\nMessage: " + document.getElementById("message").value +
            "\nGender: " + document.querySelector('input[name = "gender"]:checked').value +
            "\nAgreement: " + document.getElementById("agreement").value)
}
let JSon = function(){
    let nameText =  document.getElementById("name").value;
    let emailText= document.getElementById("email").value;
    let info = {
        name: nameText,
        email:emailText
    };
    var file = JSON.stringify(info);
    alert(file);

}