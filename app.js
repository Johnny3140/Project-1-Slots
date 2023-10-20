//set symbols for lanes* 

document.addEventListener('DOMContentLoaded', function () {
let balance = 100000; 
let jackpot = 500000;
let spinCount = 0;

const symbols = [ 
    {name: 'naruto', imageSrc: 'img/HD-wallpaper-naruto-kurama-kurama-mode-sage-of-six-path-naruto-uzumaki-nine-tails.jpg', isJackpotSymbol: false},
    {name: 'sasuke', imageSrc: 'img/905c30ea029866b949b240ede035cb5989ae2474r1-1368-2048v2_uhq.jpg', isJackpotSymbol: false},
    {name: 'itatchi', imageSrc: 'img/16832317_229802720815603_6959446976233233315_n.jpg', isJackpotSymbol: false},
    {name: 'kakashi', imageSrc: 'img/desktop-wallpaper-kakashi-naruto-jaw-art-kakashi-sensei.jpg', isJackpotSymbol: false},
    {name: 'neji', imageSrc: 'img/neji-hyuga-otwfra4pv99zcckm.jpg', isJackpotSymbol: false},
    {name: 'shikamaru', imageSrc: 'img/6CnJhw.jpg', isJackpotSymbol: false},
    {name: 'jackpot', imageSrc: 'img/513216.webp', isJackpotSymbol: true},
] //strings until I gather up the images for each characters subject to change 
//set up bet button and array of wage amounts
const betButton = document.getElementById('betButton');
// const spinButton = document.getElementById('spinButton');
const wagerAmounts = [1000, 2500, 5000, 10000];
//set up function to grab random symbol from array
function getRandomSymbol() {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}

// Function to spin a lane
// Define the spinLane function
function spinLane(laneId) {
    console.log('lanespun')
    const lane = document.getElementById(laneId);
    const symbolImages = Array.from(lane.querySelectorAll('.image-symbol')); // Convert to an array

    // Hide all images in the lane

    // Choose a random symbol for this lane
    const randomSymbolData = getRandomSymbol();

    // Display the image associated with the selected symbol
    symbolImages.forEach((image)=>{
        const randomSymbolData = getRandomSymbol();
        image.src = randomSymbolData.imageSrc;

    })
    
}
// Function to check for a win and update the balance
function checkForWin() {
    if (spinCount % 4 === 0) {
        // Grant a win every 4 spins
        const wagerAmount = parseInt(document.getElementById('wager').value);
        const resultImage = document.getElementById('resultImage');
        if (isNaN(wagerAmount)) {
            console.log('Invalid wager amount. Please enter a valid number.');
            return;
        }
        if (wagerAmount <= balance) {
            balance += wagerAmount * 2;
            console.log('Congratulations! You won!');
            resultImage.src ='img/winningsym.png';
            resultImage.style.display = 'block';

            // Update all lanes with the same symbol for the win
            const winSymbol = getRandomSymbol();
            document.getElementById('lane1').querySelector('.image-symbol').src = winSymbol.imageSrc;
            document.getElementById('lane2').querySelector('.image-symbol').src = winSymbol.imageSrc;
            document.getElementById('lane3').querySelector('.image-symbol').src = winSymbol.imageSrc;
        } else {
            console.log('Not enough balance to place this wager.');
        }

        // Update the balance display immediately after a win
        document.getElementById('balance').textContent = `Balance: $${balance}`;
        setTimeout(() => {
        resultImage.style.display = 'none';
    },1000);
    }    else {
        const wagerAmount = parseInt(document.getElementById('wager').value);

        if (isNaN(wagerAmount)) {
            console.log('Invalid wager amount. Please enter a valid number.');
            return;
        }

        if (wagerAmount <= balance) {
            balance -= wagerAmount; // Deduct the wager from the balance when you lose
            console.log('No win this time. Try again.');
            console.log(`Balance: $${balance}`);
            resultImage.src ='img/LOSTSYM.png';
            resultImage.style.display = 'block';
             // Update the balance display immediately after a loss
            document.getElementById('balance').textContent = `Balance: $${balance}`;
            setTimeout(() => {
                resultImage.style.display = 'none';
            },1000);
        } 
        else {
            console.log('Not enough balance to place this wager.');
        }
    }
    
}

function checkForJackpot() {
    const lane1Symbol = document.getElementById('lane1').querySelector('.image-symbol').getAttribute('src');
    const lane2Symbol = document.getElementById('lane2').querySelector('.image-symbol').getAttribute('src');
    const lane3Symbol = document.getElementById('lane3').querySelector('.image-symbol').getAttribute('src');

    // Check if all three lanes have the jackpot symbol
    if (
        symbols.find(symbol => symbol.isJackpotSymbol && symbol.imageSrc === lane1Symbol) &&
        symbols.find(symbol => symbol.isJackpotSymbol && symbol.imageSrc === lane2Symbol) &&
        symbols.find(symbol => symbol.isJackpotSymbol && symbol.imageSrc === lane3Symbol)
    ) {
        if (jackpot > 0) {
            balance += jackpot;
            jackpot = 0; // Reset the jackpot to 0 after winning
            console.log('Congratulations! You won the jackpot!');
            console.log(`Balance: $${balance}`);
        } else {
            console.log('The jackpot has already been won. Try again.');
        }
        // Update the balance and jackpot displays immediately after winning
        document.getElementById('balance').textContent = `Balance: $${balance}`;
        document.getElementById('jackpotAmount').textContent = `${jackpot}`;
      
    }
}
// Get a reference to the spin button
const spinButton = document.getElementById('spinButton');

// Add an event listener for the spin button
spinButton.addEventListener('click', () => {
    spinButton.disabled = false
    spinLane('lane1');
    spinLane('lane2');
    spinLane('lane3');
    checkForWin();
    checkForJackpot();
    spinCount++;
    setTimeout(()=>{
        spinButton.disabled = false;
    }, 3000)
});
});
