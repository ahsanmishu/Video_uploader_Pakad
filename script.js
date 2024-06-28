const uploadForm = document.getElementById('uploadForm');
const videoCards = document.getElementById('videoCards');

uploadForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const videoFile = document.getElementById('videoFile').files[0];
    const videoTitle = document.getElementById('videoTitle').value;

    const videoURL = URL.createObjectURL(videoFile);
    
    const card = document.createElement('div');
    card.classList.add('card');

    const videoElement = document.createElement('video');
    videoElement.src = videoURL;
    videoElement.controls = true;

    const titleElement = document.createElement('h3');
    titleElement.textContent = videoTitle;

    card.appendChild(videoElement);
    card.appendChild(titleElement);
    
    videoCards.appendChild(card);
    
    // Clear form inputs after upload
    document.getElementById('videoFile').value = '';
    document.getElementById('videoTitle').value = '';
});
