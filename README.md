# eLUX API
## SIM Details
https://e-luxmobile.com/sim-details/
<br />

## Input (Form fields)
`
{
    'id': number, 
    'pNum': number
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