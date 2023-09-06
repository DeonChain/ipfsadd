import { create } from 'ipfs-http-client'
import fs from 'fs/promises';
var data="";


(async () => {
    try {
      // Read the content of the file (assuming btc.json is in the same directory)
      const filePath = './nse.txt';
      const fileContent = await fs.readFile(filePath, 'utf8');
  
      // Parse the JSON content
        data = fileContent;
  
      // Now the parsed data is stored in the "data" variable
    } catch (err) {
      console.error('Error:', err);
    }
  })();

const client = create('http://localhost:5001/api/v0')
const { cid } = await client.add(data)
console.log(cid)