function submit() {
    var name = {
        "name": document.getElementById('name').value
    };
    var email = {
        "email": document.getElementById('email').value
    };
    var message = {
        "message": document.getElementById('message').value
    };

    var errors = [];

    for (p in name) {
        var nameverifier = (name[p]);
    }
    for (p in email) {
        var emailverifier = (email[p]);
    }
    for (p in message) {
        var messageverifier = (message[p]);
    }
    nameverifier = nameverifier.trim();
    emailverifier = emailverifier.trim();
    messageverifier = messageverifier.trim();

    if (nameverifier == "") {
        nameverifier = "Full name is missing";
        errors.push({
            "name": nameverifier
        });
    }
    if (emailverifier == "") {
        emailverifier = "Email is missing";
        errors.push({
            "email": emailverifier
        });
    } else {

        {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailverifier)) {
                emailverifier = "Email is incorrect";
                errors.push({
                    "email": emailverifier
                });
            }
        }

    }
    if (messageverifier == "") {
        messageverifier = "Message name is missing";
        errors.push({
            "message": messageverifier
        });
    }
    if (errors == "") {
        console.log("COLLECTED DATA\n", name, email, message);
        Swal.fire({
            title: 'Information successfully submitted',
            type: 'success',
            confirmButtonText: 'Got it!'
        })
    } else {
        console.log("ERRORS\n", errors);
        Swal.fire({
            title: 'Error!',
            text: 'Some of the information you entered is either missing or incorrect. Check the console for more info!',
            type: 'error',
            confirmButtonText: 'Got it!'
        })
    }
}