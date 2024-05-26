export const userSignup = ({ email, password }) => {
    let users = localStorage.getItem('users') || '[]';
    let isExit = false;

    users = JSON.parse(users);
    isExit = users.find(item => item.email == email) ? true : false;

    if (isExit) {
        return false;
    }

    users.push({ email, password })
    localStorage.setItem('users', JSON.stringify(users));
    return true;
}

