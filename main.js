const quotes = [{
  quote: "Your happy ending may not be what you expect, but that is what will make it so special.",
  author: "Snow White"
},
{
  quote: "We are all in the gutter, but some of us are looking at the stars.",
  author: "Oscar Wilde"
},
{
  quote: "Ruby is rubbish! PHP is phpantastic!",
  author: "Nikita Popov"
},
{
  quote: "To be beautiful means to be yourself. You don’t need to be accepted by others. You need to accept yourself.",
  author: "Thich Nhat Hanh"
},
{
  quote: "There is no exquisite beauty without some strangeness in the proportion..",
  author: "Edgar Allan Poe"
},
{
  quote: "When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps.",
  author: "John Lennon "
},
{
  quote: "Talk is cheap. Show me the code. ",
  author: "â€• Linus Torvalds"
},
{
  quote: "In programming, the hard part isn't solving problems, but deciding what problems to solve.",
  author: "Paul Graham "
},
{
  quote: "Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
  author: " Linus Torvalds"
},
{
  quote: "Programming is key concept who want to understand and must have interested of ourself.",
  author: " Code Express"
}
];

//Button Generate Quotes
const btn = document.querySelector('.generate');

//Add Event Listener
btn.addEventListener('click', () => {

//Get Random text of Quotes
let random = Math.floor(Math.random() * quotes.length);
// console.log(random);

//Now Show Text On Screen
document.querySelector('.quote').innerText = quotes[random].quote;
document.querySelector('.author').innerText = quotes[random].author;

});