const url = "https://stardust-4381.restdb.io/rest/bikinicollection?max=2";
const options = {
  Headers: {
    "x-apikey": "90ded75a3e51e85c9f27ed4dc204800808dcb",
  },
};
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    handleData(data);
  })
  .catch((e) => {
    console.error("An error occured", e.message);
  });

function handleData(bikinicollection) {
  bikinicollection.forEach(bikinis);
  console.log(bikinis);
}

function showProduct(product) {
  //selecting template and cloniung//
  const temp = document.querySelector("template").content;
  const clone = temp.cloneNode(true);
  //editing the dom
  clone.querySelector("a.linkToProduct").href = `product.html?id=${product.id}`;
  clone.querySelector("h2.productName").textContent =
    product.productdisplayname;
  clone.querySelector("p.brand").textContent = product.category;
  clone.querySelector("p.color").textContent = product.color;
  clone.querySelector("p.price").textContent = product.price + ",-";
  clone.querySelector(
    "img.listImg"
  ).src = `https://stardust-4381.restdb.io/home/db/633043aa70a5204f0003c8db/cards/${product.id}`;

  const parent = document.querySelector("main");
  // append it
  parent.appendChild(clone);
}
