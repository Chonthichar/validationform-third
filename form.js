document.querySelector('.submit').addEventListener('click', function (e) {
    let error = []

    const emails = document.getElementById('email').value;

    if (emails === '') {
        error.push('correct email are request');
    } else if (!emailPaten()) {
        error.push('Please add @');
    }

    const passwords = document.getElementById('password').value;
    if (passwords.length < 8) {
        error.push('password must be over 8 number');
    }
    if (passwords.length >= 20) {
        error.push('password must not over 20 number');
    }

    if (error.length > 0) {
        e.preventDefault()
        document.getElementById('error').textContent = error.join(', ');
    } else {
        document.getElementById('error').innerText = " ";
    }

    function emailPaten() {
        const patternEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
        return emails.match(patternEmail);
    }
})
