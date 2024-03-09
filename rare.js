import axios from "axios";

// Replace this with the Bitcoin address you want to check
const btcAddress = 'bc1pwp23km08mkmuzqjvu2jzkyl7x0uy4zgvkwjhcnd8knnqhuzxnvtsas0xne';

// 1FeexV6bAHb8ybZjqQMjJrcCrHGW9sb6uF -  This address has rare sats

const apiUrl = `https://api.blockcypher.com/v1/btc/main/addrs/${btcAddress}?unspentOnly=true`;

async function fetchUTXOs() {
  try {
    const response = await axios.get(apiUrl);
    const utxos = response.data.txrefs;

    if (utxos && utxos.length > 0) {
      console.log(`Found ${utxos.length} UTXO(s) for address ${btcAddress}:`);
      utxos.forEach((utxo, index) => {
        console.log(utxo)
        console.log(`UTXO ${index + 1}:`);
        console.log(`  Tx Hash: ${utxo.tx_hash}`);
        console.log(`  Output Index: ${utxo.tx_output_n}`);
        console.log(`  Value: ${utxo.value} satoshis`);
        console.log(`  Confirmations: ${utxo.confirmations}`);

        // Calculate rarity
        const rarity = calculateRarity(utxo);
        console.log(`  Rarity: ${rarity}\n`);
      });
    } else {
      console.log(`No UTXOs found for address ${btcAddress}.`);
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log(`No UTXOs found for address ${btcAddress}.`);
    } else {
      console.error(`Error fetching UTXOs: ${error.message}`);
    }
  }
}

// Function to calculate rarity based on value and confirmations
function calculateRarity(utxo) {
    const value = utxo.value; // Value of the UTXO in satoshis
    const confirmations = utxo.confirmations; // Number of confirmations

    // Define thresholds for rarity based on your criteria
    const valueThreshold = 10000; // Example: UTXOs with value greater than this threshold are considered rare
    const confirmationThreshold = 144; // Example: UTXOs with more than 144 confirmations are considered rare

    // Check if the UTXO meets rarity criteria
    if (value > valueThreshold && confirmations > confirmationThreshold) {
        return "Rare 🔥";
    } else {
        return "Common 😞"; // Adjust as needed based on your criteria
    }
}

fetchUTXOs();