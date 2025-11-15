import { API_CONSTANTS } from './constants.js';


/**
 * Fetch data from API
 * @param {*} url 
 * @param {*} options 
 * @returns JSON data or null in case of error
 */
async function fetchFromAPI(url, options = {}) {
    try {
        const response = await fetch(url, options);

        // Check for HTTP errors
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        // Parse JSON response
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Erro no fetch:", error);
        return null;
    }
}

// Fetch characters from API
async function fetchCharacters() {
    const apiUrl = `${API_CONSTANTS.BASE_URL}${API_CONSTANTS.MAX_CHARACTERS_LIMIT}/`;
    const characters = await fetchFromAPI(apiUrl);
    return characters || [];
}

export {
    fetchCharacters,
}