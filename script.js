// Navigation between sections
document.getElementById('chat-button').addEventListener('click', function() {
  showSection('chat-section');
});

document.getElementById('inventory-button').addEventListener('click', function() {
  showSection('inventory-section');
});

document.getElementById('list-button').addEventListener('click', function() {
  showSection('list-section');
});

function showSection(sectionId) {
  document.querySelectorAll('.tab-content').forEach(function(section) {
    section.classList.remove('active');
  });
  
  document.getElementById(sectionId).classList.add('active');
}

// Chat Functionality
document.getElementById('send-button').addEventListener('click', function() {
  sendMessage();
});

function sendMessage() {
  let input = document.getElementById('message-input');
  let message = input.value.trim();
  if (message) {
    displayMessage('You', message);
    input.value = '';
  }
}

function displayMessage(sender, message) {
  let chatContainer = document.getElementById('chat-container');
  let messageElement = document.createElement('div');
  messageElement.className = 'message';
  messageElement.innerHTML = `<span class="sender">${sender}:</span> ${message}`;
  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom
}

// Show contacts scene
document.getElementById('add-person-button').addEventListener('click', function() {
  document.getElementById('chat-section').classList.remove('active');
  document.getElementById('contacts-scene').classList.add('active');
});

// Back button in contacts scene
document.getElementById('back-button').addEventListener('click', function() {
  document.getElementById('contacts-scene').classList.remove('active');
  document.getElementById('chat-section').classList.add('active');
});

// Add new contact
document.getElementById('add-new-contact').addEventListener('click', function() {
  let newContact = prompt('Enter new contact name:');
  if (newContact) {
    let contactList = document.getElementById('contacts-list');
    let contactDiv = document.createElement('div');
    contactDiv.className = 'contact';
    contactDiv.textContent = newContact;
    contactList.appendChild(contactDiv);
  }
});

// Delete last contact
document.getElementById('delete-contact').addEventListener('click', function() {
  let contacts = document.querySelectorAll('.contact');
  if (contacts.length > 0) {
    let contactToRemove = contacts[contacts.length - 1];
    contactToRemove.remove();
  } else {
    alert('No contacts to delete.');
  }
});

// Inventory Functionality
document.getElementById('add-section-button').addEventListener('click', function() {
  let sectionName = prompt('Enter section name (e.g., Dairy, Vegetables, Bakery):');
  if (sectionName) {
    createSection(sectionName);
  }
});

function createSection(name) {
  let container = document.getElementById('inventory-container');
  let newSection = document.createElement('div');
  newSection.className = 'section';
  newSection.innerText = name;
  container.insertBefore(newSection, document.getElementById('add-section-button'));
}

// List Functionality
document.getElementById('add-item-button').addEventListener('click', function() {
  let itemName = prompt('Enter item name:');
  let quantity = prompt('Enter quantity:');
  if (itemName && quantity) {
    addItemToList(itemName, quantity);
  }
});

function addItemToList(itemName, quantity) {
  let itemList = document.getElementById('item-list');
  let listItem = document.createElement('li');
  listItem.innerText = `${itemName} (${quantity})`;

  // Add click event to remove item
  listItem.addEventListener('click', function() {
    if (confirm(`Do you want to remove "${itemName}"?`)) {
      itemList.removeChild(listItem);
    }
  });

  itemList.appendChild(listItem);
}

// Update list numbering after removing an item
function updateListNumbers() {
  let items = document.querySelectorAll('#item-list li');
  items.forEach((item, index) => {
    let itemText = item.innerText.split('. ')[1]; // Get the item text without the number
    item.innerText = `${index + 1}. ${itemText}`;
  });
}
