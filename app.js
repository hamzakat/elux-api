import express from 'express';
import { getSimDetails } from './submit.js';
import { body, validationResult } from 'express-validator';

let PORT = 3000;
const args = process.argv.slice(2);
if (args[0] && parseInt(args[0])) PORT = args[0];

const app = express();

app.use(express.json());

app.post('/', 
    body('id').isInt().isLength({max: 11, min: 11}).withMessage('Please enter the registeration ID number (length must be 11)'),

    body('phone').isInt().isLength({max: 12, min: 12}).withMessage('Please enter the phone number (length must be 12)'),

    (req, res) => {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        getSimDetails(req.body.id, req.body.phone)
        .then((details)=> {
            console.log("Details have been sent as JSON! \n", details);
            return res.status(200).json(details);
        })
  
    }
);

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Listening on port ", PORT);
});