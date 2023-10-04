import PropType from "prop-types";

export const setLocalStorage = (data) => {
    return new Promise((resolve, reject) => {
        localStorage.setItem("user", JSON.stringify(data));
        resolve(data);
    });
};

export const getLocalStorage = (key) => {
    return new Promise((resolve, reject) => {
        resolve(JSON.parse(localStorage.getItem(key)));
    });
};

export const clearLocalStorage = (key) => {
    return localStorage.removeItem(key);
};

setLocalStorage.defaultProps = {
    data: PropType.object.isRequired,
};

getLocalStorage.defaultProps = {
    key: PropType.string.isRequired,
};

clearLocalStorage.defaultProps = {
    key: PropType.string.isRequired,
};
