const message = document.getElementById("message");

const messages = [
    "Roses are red,",
    "Violets are blue,",
    "Sugar is sweet,",
    "And so are you!"
]

const selector = Math.floor(Math.random() * messages.length);

if (message) {
    message.innerText = messages[selector];
}