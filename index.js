document.addEventListener("DOMContentLoaded", () => {
    const totalImages = 20;
    const gameContainer = document.querySelector(".game");
    const startButton = document.querySelector("button:nth-of-type(4)");
    const resetButton = document.querySelector("button:nth-of-type(5)");
    const easyButton = document.getElementById("easy-btn");
    const mediumButton = document.getElementById("medium-btn");
    const hardButton = document.getElementById("hard-btn");
    let gameCards = [];
    let firstCard, secondCard;
    let lockBoard = false;

    // Generate the array with the images
    function generateImageArray() {
        const images = [];
        for (let i = 1; i <= totalImages; i++) {
            images.push(`fruit-${i}.png`);
        }
        return images;
    }

    // Set up the game
    function generateGame(level = "easy") {
        const images = generateImageArray();
        let pairCount;

        if (level === "easy") pairCount = 8;
        if (level === "medium") pairCount = 12;
        if (level === "hard") pairCount = 20;

        const selectedImages = images.slice(0, pairCount);
        gameCards = [...selectedImages, ...selectedImages];

        // Shuffle the cards
        gameCards = shuffleArray(gameCards);

        // Clear previous game
        gameContainer.innerHTML = "";
        const columns = Math.ceil(Math.sqrt(gameCards.length));
        gameContainer.style.gridTemplateColumns = `repeat(${columns}, auto)`;


        // Create cards
        gameCards.forEach((image) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.image = image;

            card.innerHTML = `
                <div class="front"></div>
                <div class="back">
                    <img src="./images/${image}" alt="${image}">
                </div>`;
            card.addEventListener("click", flipCard);
            gameContainer.appendChild(card);
        });
    }

    // Flip the cards
    function flipCard() {
        if (lockBoard || this === firstCard) return;
        this.classList.add("flipped");

        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this;
        checkMatch();
    }

    // Check if the two cards match
    function checkMatch() {
        const isMatch = firstCard.dataset.image === secondCard.dataset.image;

        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }

    // Shuffle the array
    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    // Event listeners for difficulty buttons
    easyButton.addEventListener("click", () => {
        generateGame("easy");
    });

    mediumButton.addEventListener("click", () => {
        generateGame("medium");
    });

    hardButton.addEventListener("click", () => {
        generateGame("hard");
    });

    // Add reset functionality
    resetButton.addEventListener("click", () => {
        gameContainer.innerHTML = "<p>Press Start to Play!</p>";
        firstCard = secondCard = null; // Reset board state
        startButton.classList.remove("hidden");
    });

    // Add start functionality
    startButton.addEventListener("click", () => {
        generateGame();
        startButton.classList.add("hidden");
    });

    // Initial message
    gameContainer.innerHTML = "<p>Press Start to Play!</p>";
});
