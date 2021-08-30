
export default function ValidationLogin(username) {
    if (username.length < 2 || username === false) {
        return "Login powinien składać przynajmniej z dwóch znaków"
    }
    return 0;
}