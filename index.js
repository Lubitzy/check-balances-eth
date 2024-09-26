require('dotenv').config();
const colors = require('colors');
const readline = require('readline');
const { getTokenData } = require('./src/api');
const { createTable } = require('./src/display');

// Setup readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to prompt user input
function promptUser(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    try {
        // Clear the terminal screen
        console.clear();

        const apiKey = process.env.API_KEY;

        console.log('=========================================='.brightWhite);
        console.log('|          ✨ Check Balance Bot ✨       |'.brightWhite.bold);
        console.log('=========================================='.brightWhite);
        console.log('|            Created by Lubitzy          |'.brightWhite.bold);
        console.log('|       Telegram: https://t.me/lubiqt    |'.brightWhite.bold);
        console.log('=========================================='.brightWhite);

        // Prompt user for address
        const address = await promptUser('Enter your address ETH: ');

        // Get token data and display
        const tokens = await getTokenData(apiKey, address);

        if (tokens) {
            await createTable(tokens);
        } else {
            console.log('No tokens found or there was an error.');
        }
    } catch (error) {
        console.error('An unexpected error occurred:', error.message);
    } finally {
        rl.close(); // Close readline interface
    }
}

main();
