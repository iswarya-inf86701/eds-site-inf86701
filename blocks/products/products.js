export default async function decorate(block) {
  const jsonUrl = block.textContent.trim();

  try {
    const response = await fetch(jsonUrl);
    const json = await response.json();

    block.innerHTML = '';

    const ul = document.createElement('ul');

    json.data.forEach((item) => {
      const li = document.createElement('li');

      li.innerHTML = `
        <h3>${item.Product}</h3>
        <p><strong>Company:</strong> ${item.Company}</p>
        <p><strong>Category:</strong> ${item.Category}</p>
        <p><strong>Price:</strong> ${item.Price}</p>
      `;

      ul.appendChild(li);
    });

    block.appendChild(ul);
  } catch (e) {
    console.error(e);
    block.innerHTML = '<p>Failed to load product data.</p>';
  }
}