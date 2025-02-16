const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 注册用户路由
app.use("/api/user", userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
