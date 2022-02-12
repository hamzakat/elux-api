import { JSDOM } from "jsdom";
import * as fs from 'fs/promises';
import { table } from "console";
import { stringify } from "querystring";

const extractData = (page) => {
    

    const dom = new JSDOM(page);
    let content = dom.window.document.querySelector('#content');
    let table = content.querySelector('table');
    if (table) {
        let data = {};
        for (let i=0; i < table.rows.length - 1; i++) {
            data[table.rows[i].cells[0].innerHTML.toString()] = table.rows[i].cells[1].innerHTML.toString();
        }
        return data;
    } else {
        return "INVALID NUMBER!"
    }

}

fs.readFile('./success.html')
.then(file => {
    console.log('SUCCESSFUL_____');
    console.log(extractData(file));
})


fs.readFile('./invalid.html')
.then(file => {
    console.log('INVALID_______');
    console.log(extractData(file));
})
