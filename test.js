const axios = require('axios');

// IPFS link to the text file
const ipfsLink = 'https://ipfs.io/ipfs/QmYRsbkCFSAcEvB9pCnrL51wCtgnjNKfuKATYTmfEsYR2t';

// Fetch the text from the IPFS link using Axios
axios.get(ipfsLink)
  .then(response => {
    // Log the retrieved text to the console
    console.log('Text from IPFS:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
