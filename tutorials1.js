const dataURL = './tutorials.json';

async function fetchData() {
  try {
    const response = await fetch(dataURL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Get the list element
    const list = document.getElementById('list');
    // Get the dropdown element
    const dropdown = document.getElementById('dropdown');
    let selectedItem = null; // Keep track of the selected item

    // Function to toggle dropdown visibility and update content
    function toggleDropdown(item) {
      if (dropdown.style.display === 'block' && selectedItem === item) {
        // Hide dropdown if it's already visible and the same item is clicked again
        dropdown.style.display = 'none';
        selectedItem = null;
      } else {
        // Show dropdown and update content
        dropdown.innerHTML = `
          <p>${item.description}</p>
          <img src="${item.url}" alt="${item.title}">
        `;
        dropdown.style.display = 'block';
        selectedItem = item;
      }
    }

    // Create list items for each title
    data.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item.title;
      listItem.addEventListener('click', () => toggleDropdown(item));
      list.appendChild(listItem);
    });

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
