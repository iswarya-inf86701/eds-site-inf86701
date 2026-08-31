export default async function decorate(block) {
  const jsonUrl = block.textContent.trim();

  try {
    const response = await fetch(jsonUrl);
    const data = await response.json();

    const list = document.createElement('ul');

    data.data.forEach((item) => {
      const li = document.createElement('li');

      li.innerHTML = `
        <strong>${item.Name}</strong>
        <p>${item.Role}</p>
      `;

      list.appendChild(li);
    });

    block.innerHTML = '';
    block.appendChild(list);
  } catch (error) {
    console.error('Failed to load JSON', error);
  }
}