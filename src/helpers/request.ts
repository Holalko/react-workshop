export const request = async (url: string, options = {}) => {
    const response = await fetch(url, options)

    const text = await response.text();
    return JSON.parse(text);
}