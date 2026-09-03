import express from "express";

const app = express();
app.use(express.json());

app.get("", (req, res) => {
  return res.send("Hello World!");
});

app.post("/ai/ask", async (req, res) => {
  const message = req.body.message;
  console.log("Received message:", message);

  const response = await fetch("http://localhost:11434/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gemma2:2b",
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

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
