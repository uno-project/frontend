import jwt from "jwt-decode";

export function getAccessToken() {
    try {
        const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith('access_token='))
            .split('=')[1];
        return cookieValue
    } catch {
        return null
    }
}

export function getToken(token) {
    if (token != null)
        return jwt(token)
    return null
}