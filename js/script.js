/**
 * CSCI 1170: Intro to Web Design & Development (Fall 2024)
 * Section 02
 * 
 * Example used during lecture discussion on Oct 21, 2024
 * Exploratory discussion on CSS
 */


/**
 * Event listener to show and hide HTML content using JavaScript
 * - Let's show and hide the two recap HTML and JS sections using CSS.
 */


/**
 * Add click event listener to the button
 * Configure the event listener to read the quotes and display them as
 *  an unordered list in the <section> element.
 * NOTE: This event listener uses data that's stored in the 'data.js' file,
 *  so remember to link data.js before script.js in HTML.
 */

document.querySelector(".btn").addEventListener("click", function() {

    const train = document.querySelector('.train');

    document.addEventListener('mousemove', (e) => {
        train.style.left = `${e.pageX}px`;
        train.style.top = `${e.pageY}px`;
    });
    
    
    
    
    // (1) Read Jedi Quotes data
    const jediData = JSON.parse(jediQuotesJSON);

    // (2) Create unordered list container
    const ul = document.createElement("ul");

    // (3) Loop and add the quotes one by one to the HTML, as <li>, and
    //     append each <li> to the unordered list
    jediData.forEach(jedi => {
        let message = `<strong>${jedi.name}</strong> says <em>"${jedi.quote}"</em>`;
        let li = document.createElement("li");
        li.innerHTML = message;
        ul.appendChild(li);
    });

    // (4) Append the unordered list to the <section>
    document.querySelector("#info-box").appendChild(ul);

    // (5) After getting the quotes, make sure to disable the button,
    //     so that the same quotes are not displayed again!
    document.querySelector(".btn").setAttribute("disabled", true);
});
