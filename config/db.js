const mongoose = require("mongoose");

console.log(process.env.DATABASE_CONNECTION);

const connectDB = async () => {
  await mongoose.connect(process.env.DATABASE_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;
