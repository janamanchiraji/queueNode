const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

app.use(cors());
app.use(express.json()); 
let queue = [5, 10];

app.post("/enqueue", (req, res) => {
  const { item } = req.body;
  if (item) {
      queue.push(item);
      res.status(201).json(queue);
    
  } else {
    res.status(400).json({ message: "Invalid input" });
  }
});

app.get("/dequeue", (req, res) => {
  console.log(queue)
  if (queue.length > 0) {
    const item = queue.shift();
    res.status(200).json(queue);
  } else {
    res.status(400).json({ message: "Queue is empty" });
  }
});

app.get('/', (req, res) => {
  res.status(200).json(queue);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
