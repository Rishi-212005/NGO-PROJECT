const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');

// @route   POST /api/volunteers
// @desc    Register a new volunteer
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, age, city, interest, message } = req.body;
    
    // Check if email already exists (optional, keeping it simple for now)
    const newVolunteer = new Volunteer({
      name,
      email,
      phone,
      age,
      city,
      interest,
      message
    });

    const savedVolunteer = await newVolunteer.save();
    res.status(201).json({ success: true, count: 1, data: savedVolunteer });
  } catch (err) {
    console.error(err);
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({ success: false, error: messages });
    } else {
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  }
});

// @route   GET /api/volunteers
// @desc    Get all volunteers
// @access  Public (admin area)
router.get('/', async (req, res) => {
  try {
    const volunteers = await Volunteer.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: volunteers.length,
      data: volunteers
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});

// @route   GET /api/volunteers/stats
// @desc    Get volunteer statistics
// @access  Public (admin area)
router.get('/stats', async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    
    // Calculate dynamic stats
    const totalVolunteers = volunteers.length;
    
    // Unique cities represents "regions/states covered"
    const uniqueCities = new Set(volunteers.map(v => v.city?.toLowerCase().trim()).filter(Boolean));
    const statesCovered = uniqueCities.size > 0 ? uniqueCities.size : 1;
    
    // Unique interests could represent "active projects"
    const uniqueInterests = new Set(volunteers.map(v => v.interest?.toLowerCase().trim()).filter(Boolean));
    const activeProjects = uniqueInterests.size > 0 ? uniqueInterests.size : 1;

    res.status(200).json({
      success: true,
      data: {
        totalVolunteers,
        activeProjects,
        statesCovered
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});

module.exports = router;
