import axios from "axios";
import FormData from "form-data";
import { JSDOM } from "jsdom";

export const getSimDetails = (id, phone) => {
  const form = new FormData();
  form.append("IDNumber", id);
  form.append("pNumber", phone);
  form.append("submit", "");

  var config = {
    method: "post",
    url: "https://e-luxmobile.com/sim-details/",
    headers: {
      ...form.getHeaders(),
    },
    data: form,
  };

  console.log("Please wait ...");

  // return results as JSON
  return axios(config)
    .then((response) => {
      // console.log(response.data);
      return extractData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const extractData = (page) => {
  const dom = new JSDOM(page);
  let content = dom.window.document.querySelector("#content");
  let table = content.querySelector("table");

  let data = {};
  if (table) {
    for (let i = 0; i < table.rows.length - 1; i++) {
      data[table.rows[i].cells[0].innerHTML.toString()] =
        table.rows[i].cells[1].innerHTML.toString();
    }
    return data;
  } else {
    data.errors = "Invalid Information!";
    return data;
  }
};
