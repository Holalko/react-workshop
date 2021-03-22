export const request = async (url: string, options: RequestInit = {}) => {
    const response = await fetch(`http://localhost:8080/${url}`, {
        ...options, headers: {
            'Content-Type': 'application/json'
        }
    })

    const text = await response.text();
    if(text){
        return JSON.parse(text);
    }
    return null;
}


export const getRequest = async (url: string, options: RequestInit = {}) => request(url, {
    method: "GET",
    ...options,
});


export const postRequest = async (url: string, body: object, options: RequestInit = {}) => request(url, {
    method: "POST",
    ...options,
    body: JSON.stringify(body)
});

export const putRequest = async (url: string, body: object, options: RequestInit = {}) => request(url, {
    method: "PUT",
    ...options,
    body: JSON.stringify(body)
});

export const deleteRequest = async (url: string, options: RequestInit = {}) => request(url, {
    method: "DELETE",
    ...options,
});




