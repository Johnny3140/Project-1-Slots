//set symbols for lanes* 
document.addEventListener('DOMContentLoaded', function () {


const symbols = [ 
    {name: 'naruto', imageSrc: 'img/HD-wallpaper-naruto-kurama-kurama-mode-sage-of-six-path-naruto-uzumaki-nine-tails.jpg'},
    {name: 'sasuke', imageSrc: 'img/905c30ea029866b949b240ede035cb5989ae2474r1-1368-2048v2_uhq.jpg'},
    {name: 'itatchi', imageSrc: 'img/16832317_229802720815603_6959446976233233315_n.jpg'},
    {name: 'kakashi', imageSrc: 'img/desktop-wallpaper-kakashi-naruto-jaw-art-kakashi-sensei.jpg'},
    {name: 'neji', imageSrc: 'img/neji-hyuga-otwfra4pv99zcckm.jpg'},
    {name: 'shikamaru', imageSrc: 'img/6CnJhw.jpg'},
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
    const lane = document.getElementById(laneId);
    const symbolImages = Array.from(lane.querySelectorAll('.image-symbol')); // Convert to an array

    // Hide all images in the lane
    symbolImages.forEach((image) => {
        image.style.display = 'none';
    });

    // Choose a random symbol for this lane
    const randomSymbolData = getRandomSymbol();

    // Display the image associated with the selected symbol
    const selectedImage = symbolImages.find((image) => image.src.includes(randomSymbolData.imageSrc));
    if (selectedImage) {
        selectedImage.style.display = 'block';
    }
}


// Get a reference to the spin button
const spinButton = document.getElementById('spinButton');

// Add an event listener for the spin button
spinButton.addEventListener('click', () => {
    spinLane('lane1');
    spinLane('lane2');
    spinLane('lane3');
});


// betButton.addEventListener('click', placeBet);

//set up jackpot function 
const jackpotAmount = 500000;
//set up win funciton to display winnings 




});