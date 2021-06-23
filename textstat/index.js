/**
 * Event handler for 'Statistics' button.
 * Calculates following values fot the given text and displays them in corresponding fields:
 * 1. Count of characters;
 * 2. Count of spaces;
 * 3. Count of chars for vowels and consonants;
 * 4. Count of words.
 * @param {object} event - Event class
 */
function onStatisticsClicked(event) {
    //TODO: Implement this function
    console.log('onStatisticsClicked called');
    const text = document.getElementById("text").value
    const words = text.split(" ").length
    const char_count = document.getElementById("valCharCount")
    const space_count = document.getElementById("valSpacesCount")
    const words_count = document.getElementById("valWordsCount")
    const vowels_count = document.getElementById("valVowelsCount")
    const consonants_count = document.getElementById("valConsonantsCount")
    char_count.value = text.length;
    space_count.value = words - 1
    words_count.value = text.split(" ").length
    vowels_count.value = text.toLowerCase().match(/[aeiou]/g).length
    consonants_count.value = text.length - text.toLowerCase().match(/[aeiou]/g).length - words - 1

}

/**
 * Event handler for 'Statistics' button.
 * Removes all the even words in the given text (starting from 1) and displays result in corresponding field.
 * @param {object} event - Event class
 */
function onRemoveWordsClicked(event) {
    //TODO: Implement this function
    console.log('onRemoveWordsClicked called');
    const odd_words_input = document.getElementById("valOddWords")
    const text_list = document.getElementById("text").value.split(" "),
    odd_words_list = text_list.filter(function(el, index) {return index % 2 === 0;}).join(' ');
    odd_words_input.value = odd_words_list
}


/**********************************************/

function init() {
    const text = document.getElementById('text');
    text.value = txt;
}

document.addEventListener('DOMContentLoaded', init);
