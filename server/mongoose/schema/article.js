const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 내용과 시간을 담는다
const Article = new Schema({
  content: { type: String, default: '', required: true, },
  createdAt: { type: Date, default: Date.now, require: true, },
});

// model 생성은 server/mongoose/model.js 에서 한다
module.exports = Article