var express = require("express");
var router = express.Router();

var superheroes = [
  { name: "Superman", superpower: "Kryptonian", humbleScore: 10 },
  { name: "Batman", superpower: "Rich/IQ", humbleScore: 3 },
];

/* GET superheroes page. */
router.get("/superheroes", function (req, res, next) {
  // sort superheroes decreasing value of humblescore
  superheroes.sort((x, y) => y.humbleScore - x.humbleScore);
  res.json({ title: "Humble Superheroes", superheroes });
});

/* POST a new superhero */
router.post("/superheroes", function (req, res, next) {
  let { name, superpower, humbleScore } = req.body;

  // validations
  try {
    if (!name || !superpower || !humbleScore) {
      return res.status(400).json({
        result: "error",
        error: "name, superpower and humbleScore needs to be provided!",
      });
    }
    if (humbleScore < 1 || humbleScore > 10) {
      return res.status(400).json({
        result: "error",
        error: "humbleScore needs to be between 1 and 10!",
      });
    }

    const newHero = { name, superpower, humbleScore };
    if (!newHero) {
      return res
        .status(400)
        .json({ status: "error", error: "Error creating hero" });
    }
    // add superhero to array
    superheroes.push(newHero);
    res.status(200).json({ result: "Success", addedHero: newHero });
  } catch (err) {
    return res
      .status(500)
      .json({ result: "Fail", error: "Error creating a new hero" });
  }
});

module.exports = router;
