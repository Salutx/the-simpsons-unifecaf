import { CHARACTER_CLASSNAMES, CHARACTER_TEMPLATE_ID, DOM_CLASSNAMES, ESTADO_ICON_MAP, GENERO_ICON_MAP } from "./constants.js"
import { fetchCharacters } from "./api.js"

/**
 * Renders a character card from the character object
 * @param {*} character 
 * @returns DocumentFragment
 */
const renderCharacter = (character) => {
    const template = document.querySelector(`.${CHARACTER_TEMPLATE_ID}`);
    const clone = template.content.cloneNode(true);

    clone.querySelector(`.${CHARACTER_CLASSNAMES.CHARACTER_CARD}`).setAttribute('data-id', character._id);
    clone.querySelector(`.${CHARACTER_CLASSNAMES.CHARACTER_IMAGE}`).src = character.Imagen;
    clone.querySelector(`.${CHARACTER_CLASSNAMES.CHARACTER_NAME}`).textContent = character.Nombre;
    clone.querySelector(`.${CHARACTER_CLASSNAMES.CHARACTER_GENDER_ICON}`).classList.add(GENERO_ICON_MAP[character.Genero] || GENERO_ICON_MAP["Desconocido"]);
    clone.querySelector(`.${CHARACTER_CLASSNAMES.CHARACTER_GENDER_LABEL}`).textContent = character.Genero;
    clone.querySelector(`.${CHARACTER_CLASSNAMES.CHARACTER_STATUS_ICON}`).classList.add(ESTADO_ICON_MAP[character.Estado] || ESTADO_ICON_MAP["Desconocido"]);
    clone.querySelector(`.${CHARACTER_CLASSNAMES.CHARACTER_STATUS_LABEL}`).textContent = character.Estado;
    clone.querySelector(`.${CHARACTER_CLASSNAMES.CHARACTER_OCCUPATION}`).textContent = character.Ocupacion;
    clone.querySelector(`.${CHARACTER_CLASSNAMES.CHARACTER_OCCUPATION}`).title = character.Ocupacion;
    clone.querySelector(`.${CHARACTER_CLASSNAMES.CHARACTER_HISTORY}`).textContent = character.Historia;
    clone.querySelector(`.${CHARACTER_CLASSNAMES.CHARACTER_HISTORY}`).title = character.Historia;

    return clone;
}

/*============= Logics Render ============*/

/**
 * Renders the main character list
 * @param {*} characters
 * @return void
 */
const renderCharacterList = (characters) => {
    const listContainer = document.querySelector(`.${DOM_CLASSNAMES.MAIN_LIST}`);

    characters.forEach(character => {
        const characterCard = renderCharacter(character);
        listContainer.appendChild(characterCard);
    });
}

/**
 * Updates the character counter in the header
 * @param {*} count 
 */
const updateCharacterCounter = (count) => {
    const counterLabel = document.querySelector(`.${DOM_CLASSNAMES.MAIN_COUNTER}`);
    counterLabel.textContent = `Personajes: ${count}`;
}

/*============= Initial Load ============*/

/** Initial application load */
const initialLoad = async () => {
    const characters = await fetchCharacters();

    renderCharacterList(characters.docs);
    updateCharacterCounter(characters.docs.length);
}

initialLoad();