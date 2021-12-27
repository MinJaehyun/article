const model = require("../mongoose/model");

// create
const articleCreate = async (req, res) => {
  // client 에서 보낸 데이터를 받아, model 에 저장한다.
  const { content } = req.body;
  const newArticle = await model.Article({ content }).save();
  console.log(newArticle);
  res.send(newArticle);
};

// read, articleRead
const articleRead = async (req, res) => {
  const article = await model.Article.find({});
  console.log(article);
  res.send(article);
};

// update, articleUpdate
const articleUpdate = async (req, res) => {
  const { id, content } = req.body;
  const article = await model.Article.findByIdAndUpdate(id, { content }, { new: true });
  console.log(article);
  res.send(article);
};

// Hard delete, articleDelete
const articleDelete = async (req, res) => {
  const { id } = req.params;
  const article = await model.Article.findByIdAndDelete(id);
  console.log(article);
  res.send(article);
};

// detail
const articleDetail = async (req, res) => {
  const { id } = req.params;
  const article = await model.Article.findById(id);
  console.log(article);
  res.send(article);
};

module.exports = {
  articleCreate,
  articleDetail,
  articleUpdate,
  articleRead,
  articleDelete,
}