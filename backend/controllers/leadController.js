const Lead = require('../models/Lead');

const submitLead = async (req, res) => {
  try {
    const newLead = new Lead(req.body);
    await newLead.save();
    res.status(201).json({ message: 'Lead captured successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to capture lead', details: err });
  }
};

module.exports = { submitLead };
