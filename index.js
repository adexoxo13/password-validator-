function validator(password) {
    return /^(?=.[a-zA-Z\d])(?=.*[a-zA-Z])(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,}$/.test(password)
}
console.log(validator("123abcABC"))