const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://zoejeton:9RbRWsRGhth49qGl@cluster0.o1lwd.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("DB connected");
  });
