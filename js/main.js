document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('validationForm');
    const resultDiv = document.getElementById("result");

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const dataType = document.getElementById("dataType").value;
        const inputData = document.getElementById("inputData").value;
        let regex;

        switch (dataType) {
            case 'email':
                regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
                break;
            case 'phone':
                regex = /^[0-9\-() ]+$/;
                break;
            case "postcode":
                regex = /^\d{4}$/;
                break;
            default:
                break;
        }

        const isValid = regex.test(inputData);

        if (isValid) {
            resultDiv.innerHTML = 'Valid';
            resultDiv.className = 'valid';
        } else {
            resultDiv.innerHTML = 'Invalid';
            resultDiv.className = 'invalid';
        }
    })
});
