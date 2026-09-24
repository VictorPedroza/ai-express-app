import express from "express";

const PORT = 8000;
const modelName = "gemma2:2b";
const modelUrl = "http://localhost:11434"

const app = express();
app.use(express.json());

app.get("", (req, res) => {
  return res.send("Hello World!");
});

app.post("/ai/ask", async (req, res) => {
  const message = req.body.message;

  const response = await fetch(`${modelUrl}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: modelName,
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      stream: false,
    }),
  });

  const data = await response.json();
  return res.json({data});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
