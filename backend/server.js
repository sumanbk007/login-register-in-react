import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server is ready.");
});

const users = [];

app.post("/register", (req, res) => {
  const { username, password, email } = req.body;

  users.push({ username, password, email });

  res.json({
    message: "User registered successfully",
  });
});

console.log(users);

const port = process.env.PORT || 5151;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
