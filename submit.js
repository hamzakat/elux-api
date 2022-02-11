import axios from 'axios';
import FormData from 'form-data';

export const getSimDetails = (id, phone) => {
    const form = new FormData();
    form.append('IDNumber', id);
    form.append('pNumber', phone);
    form.append('submit', '');
    
    var config = {
      method: 'post',
      url: 'https://e-luxmobile.com/sim-details/',
      headers: { 
        ...form.getHeaders()
      },
      data : form
    };

    console.log('Please wait ...')
    
    // return results as JSON
    return axios(config)
    .then(response => {
      console.log(response.data);
      return "SIM Details Returned!"
    })
    .catch(error => {
      console.log(error);
    });    
}
