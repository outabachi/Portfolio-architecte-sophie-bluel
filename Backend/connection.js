function connection() {
    let submit = document.querySelector("form")
    submit.addEventListener("submit", (event) => {
        // Désactivation du comportement par défaut du navigateur
        event.preventDefault();

        let email = document.getElementById("input_email").value;
        let password = document.getElementById("input_password").value;
        let identifiants = {
            email: email,
            password: password
        };
        fetch("http://localhost:5678/api/users/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(identifiants)
        })
            .then(response => response.json())
            .then(data => {
                if (data.message === "user not found") {
                    window.alert("email ou mot de passe incorrect")
                }
                else {
                    localStorage.getItem(data);
                    window.location.href = './index.html'

                }

            })
    })

};
connection()
