import {LOGO_MAIN} from './constants.js';

/**
 * This function proceduraly adds a header to the page, it needs some styles from global.css
 */

export function headerRender() {
    const header = document.createElement('header'),
        headerContainer = document.createElement('div'),
        logoContainer = document.createElement('a');

    header.classList.add('header');
    headerContainer.classList.add('header__container');
    logoContainer.classList.add('header__logo');
    logoContainer.innerHTML = `${LOGO_MAIN}`;
    logoContainer.href = '../index.html';
    headerContainer.append(logoContainer);
    header.append(headerContainer);
    const body = document.querySelector('body');
    body.appendChild(header);
}
