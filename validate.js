function validate() {
    let name = document.getElementById("name").value;

    if (name == "") {
        alert("Please enter your name");
        return false;
    }

    alert("Resume Submitted Successfully");
    return true;
}
