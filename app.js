function validateForm() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (name === "" || username === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }
    // You can add more advanced validation logic here if needed

    // If all validation passes, submit the form
    return true;
}
