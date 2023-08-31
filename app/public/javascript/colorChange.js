const colorfulLetters = document.querySelectorAll('.letter');
const colors = ['#1A5D1A', '#7B2C8B', '#CA3435', '#1746A0', '#FFD700', '#008080', '#FF4500', '#8A2BE2', '#32CD32', '#FF6347', '#800000', '#808000', '#4B0082', '#ADFF2F', '#FF00FF', '#FF69B4', '#00CED1', '#191970', '#DC143C', '#FF8C00', '#8B008B', '#2E8B57', '#B22222', '#7CFC00', '#000080', '#FF1493', '#556B2F', '#FF4500', '#483D8B', '#8B4513'];

function changeColors() {
  colorfulLetters.forEach(letter => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    letter.style.color = randomColor;
  });

  setTimeout(changeColors, 2000); // Change colors every 2 seconds
}

changeColors(); // Start changing colors immediately

