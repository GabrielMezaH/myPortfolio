// Importing the necessary functions and classes from other modules.
import { preloadImages } from './utils.js'; // Utility function to preload images
import { Card1 } from './card.js';          // Class Card1 for data-effect hover-1

// Array to hold the instantiated card objects.
let cardsArr = [];

// Query all non-empty card elements and for each card:
[...document.querySelectorAll('.card:not(.card--empty)')].forEach(cardEl => {
    // Find the closest parent grid element of the card and get its data-effect attribute value.
    let gridEffect = cardEl.closest('.grid').getAttribute('data-effect');
    
    // Depending on the data-effect value, instantiate the appropriate Card class.
    switch(gridEffect) {
        case 'hover-1':
            cardsArr.push(new Card1(cardEl));  // For data-effect hover-1, use Card1
            break;
        default:
            console.warn('Unknown data-effect', gridEffect);
            break;
    }
});

// Preload all images
// Once all images are preloaded, remove the 'loading' class from the body.
preloadImages('.card__img').then(() => document.body.classList.remove('loading'));