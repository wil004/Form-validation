// If the input has an @ and is a wrong input it will show it under the login input field!

const isWrong = document.getElementById('ifWrong')

// If a password is too short you will see a warning under the password input field!

const tooShort = document.getElementById('tooShort')



const login = (e) => {
let numberOfStrings = 0;
    if (e.target.value.includes('@')) {
        return isWrong.innerText = 'Gebruikersnaam mag geen @ bevatten';
    }
    else if(e.target.value.includes('@') === false)
        return isWrong.innerText = ''
    console.log(e)
}



const loginInput = document.getElementById('login');

loginInput.addEventListener('keyup', login);




const password = (e) => {
    if (e.target.value.length > 0 && e.target.value.length <= 6) {
        return tooShort.innerText = 'Password length needs to be above 6'
    }
    else if (e.target.value.length === 0 || e.target.value.length >= 7) {
        return tooShort.innerText = '';
    }
}



const passwordInput = document.getElementById('password');

passwordInput.addEventListener('keyup', password);