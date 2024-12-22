function submitForm() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    if (!name || !age) {
        alert("Please fill in all fields.");
        return;
    }

    document.getElementById("result").innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
    `;

    alert("Form submitted successfully!");
}
