const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

router.post('/juggling-balls-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
      var jugglingBalls = req.session.data['how-many-balls']
    
    
    // Check whether the variable matches a condition
      if (jugglingBalls == "3 or more"){
        // Send user to next page
        res.redirect('/juggling-trick')
      }
      else {
        // Send user to ineligible page
        res.redirect('/ineligible')
      }
    
    
    })