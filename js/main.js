const productsRow = document.querySelector(".test__box");

async function getData() {
  try {
    let { data } = await request.get("posts");
    displayProduct(data);
  } catch (err) {
    console.log(err);
  }
}
getData();

function createProduct(product) {
  const { id, title, body } = product;
  return `<h1>${title}</h1>
           <p>${body}</p>
           <a href='comments.html'><button class="btn">Comments${id}</button></a>`;
}

function displayProduct(product) {
  productsRow.innerHTML = "";

  product.forEach((element) => {
    productsRow.innerHTML += createProduct(element);
  });
}
