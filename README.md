# eLUX API

## SIM Details

https://e-luxmobile.com/sim-details/
<br />
The goal is converting the official website's services into an API by:

- Handling POST requests with the form fields data, in JSON format
- Doing some webscraping to extract data from the HTML response
- Retruning the response to the user as JSON
  <br />

This API can be useful used for automation purposes.
<br />

## Input (Form fields)

```
{
    "id": number,
    "phone": number
}
```

<br />

## Output (result)

```
{
  "Phone Number": string,
  "ICCID": string,
  "Status": string,
  "Activation Date": string,
  "Registration Date": string,
  "Last Top Up Date": string,
  "Dormant Date": string,
  "Terminated Date": string,
  "Cash Balance": string,
  "Minutes Balance": string,
  "Data Balance":  string
}
```

## Libraries and tools

- Node.js
- [Express.js](expressjs.com/)
  - [express-validator](https://express-validator.github.io/docs/https://link)
- [axios](https://axios-http.com/)
- [form-data](https://github.com/form-data/form-data)
- [jsdom](https://github.com/jsdom/jsdom)

## Todo

- [x] Request SIM details from the official website and get the raw response (HTML) file
- [x] Extract data from the recieved webpage (Web Scraping)
- [x] Return the result as JSON

## Installation

```bash
npm install
```

or

```bash
yarn
```

## Development

You can use the development server (with nodemon) by running:

```bash
npm run dev
```

or

```bash
yarn dev
```

## Running

By default, the server listen on port 3000:

```bash
npm start
```

or

```bash
yarn start
```

But the port can be modified by set the environement variable "PORT".

## Testing

```bash
curl --location --request POST 'https://elux-api.onrender.com' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "YOUR_REGISTERED_ID_NUM",
    "phone": "352000000000"
}'
```
