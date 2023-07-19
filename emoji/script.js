const itemsPerPage = 10;
let currentPage = 1;
let filteredData = [];

function createEmojiCard(emoji) {
  const card = document.createElement('div');
  card.className = 'emoji-card';

  const emojiImg = document.createElement('span');
  emojiImg.innerHTML = emoji.htmlCode[0]; // Use the first element of the htmlCode array
  emojiImg.className = 'emoji';

  const nameHeader = document.createElement('h3');
  nameHeader.textContent = emoji.name;

  const categoryPara = document.createElement('p');
  categoryPara.textContent = `Category: ${emoji.category}`;

  const groupPara = document.createElement('p');
  groupPara.textContent = `Group: ${emoji.group}`;

  card.appendChild(emojiImg);
  card.appendChild(nameHeader);
  card.appendChild(categoryPara);
  card.appendChild(groupPara);

  return card;
}

// Render the emoji cards
function renderEmojiList(data) {
  const emojiListElement = document.getElementById('emoji-list');

  emojiListElement.innerHTML = '';

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  for (const emoji of currentData) {
    const card = createEmojiCard(emoji);
    emojiListElement.appendChild(card);
  }
}


// Function to populate the category filter dropdown
function populateCategoryFilter(data) {
  const categorySelect = document.getElementById('categorySelect');
  const categories = new Set(data.map(emoji => emoji.category));

  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });

  categorySelect.addEventListener('change', () => {
    const selectedCategory = categorySelect.value;
    const filteredData = data.filter(emoji => emoji.category === selectedCategory);
    currentPage = 1;
    renderEmojiList(filteredData);
  });
}

 fetch('emoji.json') 
  .then(response => response.json())
  .then(data => {
    filteredData = data;
   
   // console.log(data); 
   populateCategoryFilter(data);
    
    renderEmojiList(data);
  })
  .catch(error => {
    
    console.error('Error:', error);
  });

  