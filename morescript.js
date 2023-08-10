const form2 = document.getElementById("form-api");

form2.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form works");

    const formData = new FormData(form2);
    const data = Object.fromEntries(formData);

    fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((data) => console.log(data));
});
