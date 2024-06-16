export const addUserToLocalStorage = (user) => {
    window.localStorage.setItem('user' ,JSON.stringify(user))
};

export const removeUserFromLocalStorage = () => {
   window.localStorage.removeItem('user');
}

export const getUserFromLocalStorage = () => {
    const result = window.localStorage.removeItem('user');
    const user = result?JSON.parse(result) : null;
    return user ;
}