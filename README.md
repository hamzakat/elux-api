# eLUX API
## SIM Details
The goal is converting the official website's services into an API
<br />
https://e-luxmobile.com/sim-details/
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


## The Process (psuedo code)
- prompt user to enter form data
- send request
- scrap the response webpage
- check the html element with id=content
- if content ==  Incorrect ID Number 
  - then: the user data are incorrect
  - return
- else: read the table inside the #content html element
- convert to json
- return json


## Libraries and tools
- Node.js
- [Express.js](expressjs.com/)  
  - [express-validator](https://express-validator.github.io/docs/https://link)
- [axios](https://axios-http.com/)
- [form-data](https://github.com/form-data/form-data)

## Todo
- [x] Request SIM details from the official website and get the raw response (HTML) file
- [ ] Extract data from the webpage (the response)
- [ ] Return the result as JSON

