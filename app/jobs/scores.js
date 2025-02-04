const { consolidatePrizes, updateScore } = require("../controllers/prizes");
const { getUser } = require("../controllers/users");

const handleClick = async (req, res) => {
  const userId = req.userId;
  let user = await getUser({ userId, fields: "" });

  const reward = updateScore(user);

  await user.save();
  return res.json({ score: user.score, reward });
};

const handleReset = async (req, res) => {
  const userId = req.userId;
  let user = await getUser({ userId, fields: "" });

  user.prizes = [];
  user.score = 0;

  await user.save();
  return res.json({ score: 0, prizes: {} });
};

const handleGetScore = async (req, res) => {
  const { userId } = req;
  const user = await getUser({ userId, fields: "-_id -__v" });
  return res.json({ ...user._doc, prizes: consolidatePrizes(user.prizes) });
};

module.exports = { handleClick, handleReset, handleGetScore };
