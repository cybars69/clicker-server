const consolidatePrizes = (prizesArr) => {
  const consolidated = {};
  prizesArr.forEach((prize) => {
    if (!consolidated[prize]) consolidated[prize] = 0;
    consolidated[prize] += 1;
  });
  return consolidated;
};

const PRIZES = [
  "Shawarma",
  "Cake",
  "Pancake",
  "Burger",
  "French Fries",
  "Pizza",
  "Taco",
  "Salad",
  "Popcorn",
  "Spaghetti",
  "Cookie",
  "Sushi",
  "Shawarma",
  "Cake",
];

const updateScore = (user) => {
  const random = Math.random();
  let reward = null;

  if (random < 0.25) {
    const prize = PRIZES[Math.floor(Math.random() * PRIZES.length)];
    user.prizes.push(prize);
    reward = prize;
  } else if (random < 0.75) {
    user.score += 10;
    reward = "points";
  } else {
    user.score += 1;
  }
  return reward;
};

module.exports = { consolidatePrizes, updateScore };
