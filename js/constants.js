// DOM Classnames
const DOM_CLASSNAMES = {
    MAIN_LIST: 'MainWrapper',
    MAIN_COUNTER: 'MainHeaderCounterLabel',
    MAIN_SEARCH_INPUT: 'MainHeaderSearchInput',
}

// Character Classnames for Template
const CHARACTER_CLASSNAMES = {
    CHARACTER_CARD: "CharacterCard",
    CHARACTER_IMAGE: "CharacterImage",
    CHARACTER_NAME: "CharacterWrapperName",
    CHARACTER_GENDER_ICON: "CharacterWrapperGenderIcon",
    CHARACTER_GENDER_LABEL: "CharacterWrapperGenderLabel",
    CHARACTER_STATUS_LABEL: "CharacterWrapperStatusLabel",
    CHARACTER_STATUS_ICON: "CharacterWrapperStatusIcon",
    CHARACTER_OCCUPATION: "CharacterOccupationLabel",
    CHARACTER_HISTORY: "CharacterHistory",
}

// Template ID
const CHARACTER_TEMPLATE_ID = 'character-template';

// Maps for icons
const GENERO_ICON_MAP = {
    "Masculino": "ri-men-line",
    "Femenino": "ri-women-line",
    "Desconocido": "ri-genderless-line",
}

// Status icon map
const ESTADO_ICON_MAP = {
    "Vivo": "ri-heart-2-line",
    "Fallecido": "ri-skull-line",
    "Desconocido": "ri-question-mark",
}

// API Constants
const API_CONSTANTS = {
    BASE_URL: 'https://apisimpsons.fly.dev/api/personajes?limit=',
    MAX_CHARACTERS_LIMIT: 100,
}

export {
    DOM_CLASSNAMES,
    CHARACTER_CLASSNAMES,
    CHARACTER_TEMPLATE_ID,
    GENERO_ICON_MAP,
    ESTADO_ICON_MAP,
    API_CONSTANTS,
}