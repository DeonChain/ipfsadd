import { create } from 'ipfs-http-client'
import fs from 'fs/promises';

(async () => {
    try {
      // Read the content of the file (assuming nse.txt is in the same directory)
      const filePath = './latest.txt';
      const fileContent = await fs.readFile(filePath, 'utf8');
  
      // Add a timestamp to the content to make it unique

      // Now, the timestamped content is unique
      const client = create('http://localhost:5001/api/v0');
      const { cid } = await client.add(fileContent);
      console.log('Generated CID:', cid);
    } catch (err) {
      console.error('Error:', err);
    }
})();