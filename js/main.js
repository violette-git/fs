'use strict';
(() => {
    const url = `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart`;
    
    const handleError = (error) => {

        console.error("The is an error with the API!". error);
    }

    const handleAPI = (api) => {
        console.log('in api handler')

        const type = api.type;
        const setup = api.setup;
        const delivery = api.delivery;

        const joke = {
            type,
            setup,
            delivery

        };

        console.table(joke)

        const setupEl = document.getElementById('setup');
        setupEl.textContent = setup

        const delEl = document.getElementById('delivery');
        delEl.textContent = 'Click here to reveal the punchline';

        delEl.addEventListener('click', () => {
            delEl.textContent = delivery;
        });
    }

    const anothaOne = document.getElementById('anothaOne');
    anothaOne.addEventListener('click', () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                handleAPI(data);
            })
            .catch(error => handleError(error));
    });

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            handleAPI(data);
        })
        .catch(error => handleError(error));

    
    
})()