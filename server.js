import express from "express";
const app = express();
app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("📞 Airtel webhook received:", req.body);
  res.sendStatus(200);
});

app.get("/", (req, res) => res.send("Infrabyte CTI webhook live ✅"));

app.listen(3000);
