const generateButton = document.getElementById('generate-button');
const nameInput = document.getElementById('name-input');
const photoInput = document.getElementById('photo-input');
const card = document.getElementById('card');
const cardName = document.getElementById('card-name');
const cardPhoto = document.getElementById('card-photo');
const toggleButton = document.getElementById('toggle-button');
const downloadButton = document.getElementById('download-button');

// Generate Card
generateButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const photoFile = photoInput.files[0];

    if (!name || !photoFile) {
        alert('Please enter a name and select a photo!');
        return;
    }

    // Set card content
    cardName.textContent = name;
    cardPhoto.src = URL.createObjectURL(photoFile);

    // Show the card
    card.classList.remove('hidden');

    // Clear inputs
    nameInput.value = '';
    photoInput.value = '';
});

// Dark Mode Toggle
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Toggle Light Mode' : 'Toggle Dark Mode';
});

// Download the Card as Image
downloadButton.addEventListener('click', () => {
    downloadButton.style.display = 'none';
    html2canvas(card).then(canvas => {
        const link = document.createElement('a');
        link.download = 'birthday_card.png';
        link.href = canvas.toDataURL('image/');
        link.click();
        downloadButton.style.display = '';
        
    });
    
});
