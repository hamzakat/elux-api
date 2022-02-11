import express from 'express';
import { getSimDetails } from './submit.js';
import { body, validationResult } from 'express-validator';

const app = express();

app.use(express.json());

app.post('/', 
    body('id').isInt().isLength({max: 11, min: 11}).withMessage('ID length must be 11'),

    body('phone').isInt().isLength({max: 12, min: 12}).withMessage('Phone number length must be 12'),

    (req, res) => {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        getSimDetails(req.body.id, req.body.phone)
        .then((data)=> {
            return res.status(200).json({data: data});
        })
  
    }
);

app.listen(3000, function(err){
    if (err) console.log(err);
    console.log("Listening on port ", 3000);
});