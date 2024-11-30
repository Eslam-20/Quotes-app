/* @format */

var arrayOfQuotes = [
  {
    author: "Albert Camus",
    quote:
      "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not leadWalk beside me… just be my friend.",
  },
  {
    author: "EElbert Hubbard",
    quote: "A friend is someone who knows all about you and still loves you.",
  },
  { author: "Frank Sinatra", quote: "The best revenge is massive success." },

  {
    author: "Wayne Gretzy",
    quote: "You miss 100% of the shots you don't take.",
  },

  {
    author: "Nelson Mandela",
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
  },
  {
    author: "Friedrich Nie  tzsche",
    quote: "Without music, life would be a mistake.",
  },
  {
    author: "Neil Gaiman, Coraline",
    quote:
      "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
  },
];

function quotation() {
  var x = Math.floor(Math.random() * arrayOfQuotes.length);
  document.querySelector(
    "#quote"
  ).textContent = `\"${arrayOfQuotes[x].quote}\"`;
  document.querySelector(
    "#author"
  ).textContent = `--${arrayOfQuotes[x].author}`;
}
