const quotes = [
  {
    quote:
      "Who controls the past controls the future. Who controls the present controls the past.",
    author: "George Orwell",
  },
  {
    quote: "Work banishes those three great evils, boredom, vice and poverty",
    author: "Goethe",
  },
  {
    quote:
      "One man who has a mind and knows it can always beat ten men who haven't and don't.",
    author: "George Bernard Shaw",
  },
  {
    quote:
      "We have no more right to consume happiness without producing it than to consume wealth without producing it.",
    author: "George Bernard Shaw",
  },
  {
    quote: "A friend in power is a friend lost.",
    author: "Henry Adams",
  },
  {
    quote:
      "Time is a great teacher, but unfortunately it kills all its pupils.",
    author: "yeHector Berliozonjae",
  },
  {
    quote:
      "Although the world is full of suffering, it is full also of the overcoming of it.",
    author: "Helen Keller",
  },
  {
    quote: "The hardest work is to go idle.",
    author: "Jewish proverb",
  },
  {
    quote:
      "Liberty without learning is always in peril and learning without liberty is always in vain.",
    author: "John F. Kennedy",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
