import express from "express";
import bodyParser from "body-parser";

const app = express();

import cors from "cors";
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server is ready.");
});

const users = [];
console.log(users);

app.post("/register", (req, res) => {
  const { username, password, email } = req.body;

  if (username && password && email) {
    users.push({ username, password, email });

    res.json({
      message: "User registered successfully",
    });
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    res.json({ message: "Login sucessful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

const port = process.env.PORT || 5151;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
