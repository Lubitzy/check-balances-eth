# Check Balances ETH

This is a simple Node.js application that allows you to check the Ethereum (ETH) balance of multiple Ethereum addresses.

## Features

- Check the ETH balance of multiple addresses
- Supports both Ethereum mainnet and testnets (Ropsten, Rinkeby, Kovan, Goerli)
- Displays the balance in both ETH and USD (using the current Ethereum to USD exchange rate)
- Provides a command-line interface for easy usage

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)
- An Ethereum node URL Moralis

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/Lubitzy/check-balances-eth.git
   ```

2. Navigate to the project directory:

   ```
   cd check-balances-eth
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your Ethereum node URL:

   ```
   MORALIS_NODE_URL=
   API_KEY=
   ```

## Usage

1. Run the application:

   ```
   node index.js
   ```

2. Follow the prompts to enter the Ethereum addresses you want to check.

3. The application will display the ETH balance and USD equivalent for each address.

## Configuration

You can configure the following options in the `.env` file:

- `MORALIS_NODE_URL`: The URL of your Ethereum node from Moralis
- `API_KEY`: The api key from moralis

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).