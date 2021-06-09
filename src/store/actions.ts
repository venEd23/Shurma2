export enum Actions {
    setUserLogin = "SET_USER_LOGIN",
}


export const setUserLoginAction = (login: string) => {
    return {       
        type: Actions.setUserLogin,
        payload: login.toUpperCase(),        
    };
};