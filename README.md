# Fruit-Game
Fruit Hunt Game
Fruit Hunt is a memory game where players can test their memory skills by matching fruit images. You can choose from three difficulty levels: Easy, Medium, and Hard.

Description
This project is a simple memory game built with HTML, CSS, and JavaScript. The goal of the game is to encourage players to improve their memory by quickly matching pairs of fruit images.

## Features
- **Choose your difficulty:** Easy, Medium, or Hard.
Start a new game: You can start a new game once you've finished or reset the current game.
Reset game: You can reset the game at any time.
Win the game: When all the pairs are found, a pop-up window will appear to congratulate the player.
Technologies Used
HTML5 for the structure of the page.
CSS3 for styling the page and elements.
JavaScript for game logic, user interaction, and event handling.
How to Run the Project
Clone or download this repository to your local machine.
Open the index.html file in a modern browser (e.g., Chrome, Firefox).
Select the difficulty level (Easy, Medium, or Hard) and click the corresponding button to start the game.
Click on the cards to flip them and match pairs.
Once all the pairs are matched correctly, you win and receive a congratulatory message.
Code Explanation
Key Functions:
generateImageArray(): Generates an array of fruit images that the game will use for the cards.

generateGame(level): Sets up the game based on the selected difficulty level (easy, medium, or hard), generates and shuffles the cards, and then displays them in the game container.

startGame(): Starts the game, allowing the user to click on the cards to flip them.

flipCard(): Flips the cards when the user clicks on them and checks if the two flipped cards are identical.

checkMatch(): Checks if the two flipped cards match. If they do, they are marked as "matched". Otherwise, they are flipped back.

checkWin(): Checks if all the pairs have been matched, and if so, displays a win message.

User Interactions:
"Easy" Button: Activates the Easy difficulty level (8 pairs of cards).
"Medium" Button: Activates the Medium difficulty level (12 pairs of cards).
"Hard" Button: Activates the Hard difficulty level (20 pairs of cards).
"Start New Game" Button: Starts a new game once a difficulty level has been selected.
"Reset" Button: Resets the game to its initial state.
Win Pop-up: Displays a congratulatory message when all pairs are matched.
Files
index.html: The main page of the game.
styles.css: The CSS file containing the styles for the game.
index.js: The JavaScript file that handles the game logic and user interactions.
