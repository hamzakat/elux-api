# eLUX API
## SIM Details
https://e-luxmobile.com/sim-details/
<br />
The goal is converting the official website's services into an API by:
- Handling POST requests with the form fields data, in JSON format
- Doing some webscraping to extract data from the HTML response
- Retruning the response to the user as JSON
<br />

## Input (Form fields)
`
{
    'id': number, 
    'phone': number
}
`
<br />
## Output (result)
`
{ `<br />`
    'phone_number': number, `<br />`
    'iccid': number, `<br />`
    'status': string, `<br />`
    'activiation_date': string, `<br />`
    'registeration_date': string, `<br />`
    'refill_date': string, `<br />`
    'dormant_date': string, `<br />`
    'terminated_date': string, `<br />`
    'cash_balance': string, `<br />`
    'minutes_balance': string, `<br />`
    'data_balance': string `<br />`
}
`

## Libraries and tools
- Node.js
- [Express.js](expressjs.com/)  
  - [express-validator](https://express-validator.github.io/docs/https://link)
- [axios](https://axios-http.com/)
- [form-data](https://github.com/form-data/form-data)
- [jsdom](https://github.com/jsdom/jsdom)

## Todo
- [x] Request SIM details from the official website and get the raw response (HTML) file
- [X] Extract data from the recieved webpage (Web Scraping) 
- [X] Return the result as JSON

