const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/codecraft_db', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user._id }, 'your_secret_key');
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Update the backend (app.js) with a new route
app.post('/execute-code', async (req, res) => {
    try {
      const { code } = req.body;
  
      // Execute and evaluate code (you might use a library like vm2)
      // Provide results or errors as response
      const result = executeCode(code);
  
      res.json({ result });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  // Implement executeCode function based on your requirements
  function executeCode(code) {
    // Your code execution logic here
    return 'Code executed successfully';
  }
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
