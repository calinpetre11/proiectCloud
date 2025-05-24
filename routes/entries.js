const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');


router.post('/', async (req, res) => {
    if (!req.body.name || req.body.name.trim() === '') {
    return res.status(400).json({ error: 'Numele nu poate fi gol!' });
  }
  if (!req.body.message || req.body.message.trim() === '') {
    return res.status(400).json({ error: 'Mesajul nu poate fi gol!' });
  }

  if (req.body.name.trim().length < 2) {
    return res.status(400).json({ error: 'Numele trebuie să aibă minim 2 caractere!' });
  }
  if (req.body.message.trim().length < 3) {
    return res.status(400).json({ error: 'Mesajul trebuie să aibă minim 3 caractere!' });
  }

  try {
    const newEntry = await Entry.create(req.body);  // Folosește "Entry.create()"
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const entries = await Entry.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;