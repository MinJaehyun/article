const model = require("../mongoose/model");

// create
const articleCreate = async (req, res) => {
  // client 에서 보낸 데이터를 받아, model 에 저장한다.
  const { content } = req.body;
  const newArticle = await model.Article({ content }).save();
  console.log(newArticle);
  res.send(newArticle);
};

module.exports = { articleCreate }