import { API_BASE_URL, ACCESS_TOKEN } from '../../constants/Connect';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function getCurrentRentaler() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/rentaler/me",
        method: 'GET'
    });
}

export function getCurrentAdmin() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/admin/me",
        method: 'GET'
    });
}

export function forgotPassword(emailRequest) {
    return request({
        url: API_BASE_URL + "/auth/forgot-password",
        method: 'POST',
        body: JSON.stringify(emailRequest)
    });
}

export function changeConfirmedStatus(emailRequest) {
    return request({
        url: API_BASE_URL + "/auth/confirmed",
        method: 'POST',
        body: JSON.stringify(emailRequest)
    });
}

export function resetPassword(resetPassword) {
    return request({
        url: API_BASE_URL + "/auth/reset-password",
        method: 'POST',
        body: JSON.stringify(resetPassword)
    });
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

// RENTALER
export function getAllRoomOfRentaler(pageNo, pageSize, name) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/room?pageNo="+pageNo+"&pageSize="+pageSize+"&title="+name,
        method: 'GET'
    });
}

export function getAllContractOfRentaler(pageNo, pageSize, name) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/contract?pageNo="+pageNo+"&pageSize="+pageSize+"&name="+name,
        method: 'GET'
    });
}

export function getAllMaintenceOfRentaler(pageNo, pageSize, name) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/maintenance?pageNo="+pageNo+"&pageSize="+pageSize+"&keyword="+name,
        method: 'GET'
    });
}

export function getRoom(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/room/"+id,
        method: 'GET'
    });
}

export function getRentOfHome() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/room/rent-home",
        method: 'GET'
    });
}

export function getContract(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/contract/" + id,
        method: 'GET'
    });
}

export function getMaintenance(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/maintenance/" + id,
        method: 'GET'
    });
}


export function disableRoom(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/room/"+id,
        method: 'POST'
    });
}

export function deleteMaintenance(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/maintenance/"+id,
        method: 'DELETE'
    });
}