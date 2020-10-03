import { apiUrl2 } from "../../../config.json";
import { BehaviorSubject } from 'rxjs';
import { fetchWrapper } from '../fetch-wrapper';
import { history } from '../history';

const userSubject = new BehaviorSubject(null);

export const authService = {
    signin,
    google,
    logout,
    refreshToken,
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value }
};

function signin(data) {
    return fetchWrapper.post(apiUrl2 + "/Account/SignIn", data)
        .then(user => {
            // publish user to subscribers and start timer to refresh token
            userSubject.next(user);
            startRefreshTokenTimer();
            return user;
        });
}

function google(data) {
    return fetchWrapper.post(apiUrl2 + "/Account/Google", data)
        .then(user => {
            // publish user to subscribers and start timer to refresh token
            userSubject.next(user);
            startRefreshTokenTimer();
            return user;
        });
}

function logout() {
    // revoke token, stop refresh timer, publish null to user subscribers and redirect to login page
    fetchWrapper.post(`${apiUrl2}/Account/RevokeToken`, {});
    stopRefreshTokenTimer();
    userSubject.next(null);
    history.push('/account/login');
}

function refreshToken() {
    return fetchWrapper.post(`${apiUrl2}/Account/RefreshToken`, {})
        .then(user => {
            // publish user to subscribers and start timer to refresh token
            userSubject.next(user);
            startRefreshTokenTimer();
            return user;
        });
}

// helper functions
let refreshTokenTimeout;

function startRefreshTokenTimer() {
    // parse json object from base64 encoded jwt token
    const jwtToken = JSON.parse(atob(userSubject.value.jwtToken.split('.')[1]));

    // set a timeout to refresh the token a minute before it expires
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (60 * 1000);
    refreshTokenTimeout = setTimeout(refreshToken, timeout);
    console.log('timer is set');
}

function stopRefreshTokenTimer() {
    clearTimeout(refreshTokenTimeout);
}