import express from "express";
import { getSimDetails } from "./submit.js";
import { body, validationResult } from "express-validator";

const app = express();
let PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(400).json({
    message:
      "Welcome! See this page for more information on usage https://github.com/hamzakat/elux-api",
  });
});

app.post(
  "/",
  body("id")
    .isInt()
    .isLength({ min: 1 })
    .withMessage("Please enter a valid registeration ID number"),

  body("phone")
    .isInt()
    .isLength({ max: 12, min: 12 })
    .withMessage("Please enter the phone number (length must be 12)"),

  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    getSimDetails(req.body.id, req.body.phone).then((details) => {
      console.log("Details have been sent as JSON! \n", details);
      return res.status(200).json(details);
    });
  }
);

app.listen(process.env.PORT || 3000, function (err) {
  if (err) console.log(err);
  console.log("Listening on port", PORT);
});
