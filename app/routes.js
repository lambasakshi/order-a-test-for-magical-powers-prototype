// External dependencies
const express = require('express')

const router = express.Router()

// Called when answering question about whether NHS number is known
router.post('/magical-powers-answer', (req, res) => {

const hasSymptoms= req.session.data.hasSymptoms
// Check whether the variable matches a condition 
if (hasSymptoms==='Yes'){
    res.redirect('/details')
}
else if (hasSymptoms==='No'){
    res.redirect('/ineligible')
}

else if (hasSymptoms==="I don't know"){
    res.redirect('/ineligible')
}

else {res.redirect('/magical-powers')

} 
});
module.exports = router
