export default async function decorate(block) {
  const response = await fetch('/productdata.json');
  const json = await response.json();

  const ul = document.createElement('ul');

  json.data.forEach((product) => {
    const li = document.createElement('li');

    li.innerHTML = `
      <h3>${product.Name}</h3>
      <p>Product ID: ${product['Product ID']}</p>
      <p>Category: ${product.Category}</p>
      <p>Price: ${product.Price}</p>
    `;

    ul.append(li);
  });

  block.append(ul);
}