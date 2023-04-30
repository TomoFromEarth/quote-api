const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");
const req = require("express/lib/request");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

app.get("/api/quotes", (req, res, next) => {
  const { person } = req.query;

  if (person) {
    const quotesByPerson = quotes.filter(
      (quote) => quote.person.toLocaleLowerCase() === person.toLocaleLowerCase()
    );
    res.send({ quotes: quotesByPerson });
  } else {
    res.send({ quotes });
  }
});

app.get("/api/quotes/random", (req, res, next) => {
  const randomQuote = getRandomElement(quotes);
  res.send({ quote: randomQuote });
});

app.post("/api/quotes", (req, res, next) => {
  const { quote, person } = req.query;

  if (!quote || !person) {
    return res.status(400).send("Both quote and person are required");
  }

  const newQuote = { quote, person };
  quotes.push(newQuote);
  res.status(201).send({ quote: newQuote });
});
