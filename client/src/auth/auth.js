const AUTH_KEY = "inventorysync_user";

export const loginSession = (user) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
};

export const logoutSession = () => {
    localStorage.removeItem(AUTH_KEY);
};

export const getCurrentUser = () => {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? JSON.parse(raw) : null;
};

export const isAuthenticated = () => {
    return getCurrentUser() !== null;
};