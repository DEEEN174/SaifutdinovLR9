function checkInput(id, errorId, regex, errorMessage) {
    let input = document.getElementById(id);
    let errorSpan = document.getElementById(errorId);
    let inputValue = input.value.trim();

    if (regex.test(inputValue)) {
        errorSpan.style.display = "none";
        input.style.border = "1px solid #ced4da";
        return true;
    } else {
        errorSpan.style.display = "block";
        input.style.border = "1px solid red";
        errorSpan.textContent = errorMessage;
        return false;
    }
}

document.getElementById('productForm').addEventListener('submit', function(event) {
    let isValid = true;

    isValid &= checkInput('firstName', 'firstNameError', /^[a-zA-Zа-яА-ЯёЁ\s]{2,15}$/, 'Введите корректное имя');
    isValid &= checkInput('lastName', 'lastNameError', /^[a-zA-Zа-яА-ЯёЁ\s]{2,20}$/, 'Введите корректную фамилию');
    isValid &= checkInput('email', 'emailError', /\S+@\S+\.\S+/, 'Введите корректный e-mail');
    isValid &= checkInput('phone', 'phoneError', /^\+?\d{11}$/, 'Введите корректный номер телефона');
    isValid &= checkInput('product', 'productError', /[a-zA-Zа-яА-ЯёЁ\s]{2,15}$/, 'Введите корректное название товара');
    isValid &= checkInput('quantity', 'quantityError', /^\d{2,4}$/, 'Введите корректное количество товара');

    if (!isValid) {
        event.preventDefault();
    } else {
        event.preventDefault(); 
        document.getElementById('productForm').style.display = "none"; 
        document.getElementById('successMessage').style.display = "block"; 
    }
});