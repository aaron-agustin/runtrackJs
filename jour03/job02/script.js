document.addEventListener("DOMContentLoaded", function() {
    const imgContainer = document.getElementById("imgContainer");
    const shuffleButton = document.getElementById("shuffleButton");
    const resetButton = document.getElementById("resetButton");
    const message = document.getElementById("message");
    const images = Array.from(document.querySelectorAll("#imgContainer img"));
    const originalOrder = images.map(img => img.cloneNode(true)); // Corrected line

    shuffleButton.addEventListener("click", shuffleImages);
    resetButton.addEventListener("click", resetImages);

    function shuffleImages() {
        images.sort(() => Math.random() - 5);
        images.forEach(image => imgContainer.appendChild(image));
        updateMessage();
    }

    function resetImages() {
        imgContainer.innerHTML = ''; 
        originalOrder.forEach(image => imgContainer.appendChild(image.cloneNode(true))); // Corrected line
        images.length = 0; // Clear the images array
        Array.from(document.querySelectorAll("#imgContainer img")).forEach(image => images.push(image)); // Re-populate the images array with the original images
        updateMessage();
    }

    function updateMessage() {
        const isCorrect = images.every((image, index) => image.src.endsWith(`arc${index + 1}.png`));
        if (isCorrect) {
            message.textContent = "Vous avez gagné";
            message.style.color = "green";
        } else {
            message.textContent = "Vous avez perdu";
            message.style.color = "red";
        }
    }
});
