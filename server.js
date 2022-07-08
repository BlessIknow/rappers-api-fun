const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "21 savage": {
    birthName: "Shéyaa Bin Abraham-Joseph",
    age: 19,
    birthLocation: "Plaistow, London, England",
  },
  "chance the rapper": {
    birthName: "Chancelor Bennett",
    age: 29,
    birthLocation: "Chicago, Illinois, USA",
  },
  " dylan": {
    birthName: "Dylan",
    age: 20,
    birthLocation: "None",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (req, res) => {
  const rappersName = req.params.rapperName.toLowerCase();
  if (rappers[rappersName]) {
    res.json(rappers[rappersName]);
  } else {
    res.json(rappers[" dylan"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Port ${PORT} is curently runing, you better go catch it!`);
});
