const input = document.getElementById('input');
const text = document.querySelector('.text');

const array = [
    'Go ahead', 'Come on type something',
    'What are you waiting for?',
    'Hello?',
];

input.addEventListener('input', function() { 
    if (input.value.length === 0) {
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomString = array[randomIndex];
        text.innerHTML = randomString;
    } else {
        text.innerHTML = input.value;
    }
});