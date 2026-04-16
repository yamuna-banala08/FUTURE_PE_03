function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("successMsg").innerText =
        "Thank you " + name + "! Your appointment is booked.";

    document.querySelector("form").reset();
}
