const url = "https://stardustlab-f855.restdb.io/rest/shoe-collectionw?max=20";

const options = {
  header: {
    "x-apikey": "6336305e626b9c747864a8f0",
  },
};

//fetching the data from the API
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // handleData(data);
  })
  .catch((e) => {
    console.error("an error occured:", e.message);
  });
