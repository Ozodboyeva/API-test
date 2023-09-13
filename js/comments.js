const commentsRow = document.querySelector(".comments");

async function getComments(id) {
  try {
    let { data } = await request.get(`posts/${id}/comments`);
    console.log(data);
    displayProducts(data);
  } catch (err) {
    console.log(err);
  }
}

function createProducts(product) {
  const { id, name } = product;
  return `<h1>${name}</h1>
             <p>${id}</p>`;
}

function displayProducts(product) {
  commentsRow.innerHTML = "";

  product.forEach((element) => {
    commentsRow.innerHTML += createProducts(element);
  });
}
