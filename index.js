document.addEventListener("DOMContentLoaded", () => {
    const totalImages = 20;
    const gameContainer = document.querySelector(".game");
    const startButton = document.getElementById("start-btn");
    const resetButton = document.getElementById("reset-btn");
    const easyButton = document.getElementById("easy-btn");
    const mediumButton = document.getElementById("medium-btn");
    const hardButton = document.getElementById("hard-btn");
    const winPopup = document.getElementById("win-popup");
    const closePopupBtn = document.getElementById("close-popup-btn");
    let gameCards = [];
    let firstCard, secondCard;
    let lockBoard = false;
    let gameStarted = false;
    let selectedDifficulty = null;

    // Generate the array with the images
    function generateImageArray() {
        const images = [];
        for (let i = 1; i <= totalImages; i++) {
            images.push(`fruit-${i}.png`);
        }
        return images;
    }

    // Set up the game
    function generateGame(level) {
        selectedDifficulty = level;
        gameStarted = false;
        gameContainer.innerHTML = "";

        const images = generateImageArray();
        let pairCount = level === "easy" ? 8 : level === "medium" ? 12 : 20;
        const selectedImages = images.slice(0, pairCount);
        gameCards = [...selectedImages, ...selectedImages];

        // Shuffle the cards
        gameCards = shuffleArray(gameCards);

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
            card.style.pointerEvents = "none";
            gameContainer.appendChild(card);
        });

        gameContainer.insertAdjacentHTML("beforeend", '<p class="start-msg">Press Start to Begin!</p>');
    }

    function startGame() {
        if (!selectedDifficulty) {
            alert("Please select a difficulty level first!");
            return;
        }

        gameStarted = true;
        document.querySelectorAll(".card").forEach(card => {
            card.style.pointerEvents = "auto";
        });

        gameContainer.querySelector("p")?.remove();
    }

    // Flip the cards
    function flipCard() {
        if (!gameStarted || lockBoard || this === firstCard) return;
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
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");

        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);

        resetBoard();
        checkWin();
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
    easyButton.addEventListener("click", () => generateGame("easy"));
    mediumButton.addEventListener("click", () => generateGame("medium"));
    hardButton.addEventListener("click", () => generateGame("hard"));

    startButton.addEventListener("click", startGame);

    // Add reset functionality
    resetButton.addEventListener("click", () => {
        gameContainer.innerHTML = "<p>Pick Your Difficulty and Start the Adventure!</p>";
        firstCard = secondCard = null; // Reset board state
        selectedDifficulty = null;
        gameStarted = false;
    });

    // Initial message
    gameContainer.innerHTML = "<p>Pick Your Difficulty and Start the Adventure!</p>";

    //Check if the player found all the pairs
    function checkWin() {
        console.log("Checking win condition...");
        console.log("Matched cards:", document.querySelectorAll(".card.matched").length);
        console.log("Total game cards:", gameCards.length);

        if (document.querySelectorAll(".card.matched").length === gameCards.length) {
            console.log("🎉 WIN DETECTED!");
            winPopup.style.display = "flex";
        }
    }

    closePopupBtn.addEventListener("click", () => {
        winPopup.style.display = "none";
        gameContainer.innerHTML = "<p>Pick Your Difficulty and Start the Adventure!</p>";
        selectedDifficulty = null;
    });
});
