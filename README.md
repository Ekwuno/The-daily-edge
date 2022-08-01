# Forum application built with Pages Functions, Workers KV and Durable Objects
This example application showcases a forum application  that allows authenticated users to leave comments, like comments and reply on other user’s comments using Pages Functions to handle server-side logic such as Authentication and posting comments to Workers KV. We will also use Workers KV for storage of our comment entries and Durable Objects to keep the count of likes consistent.  

## Set up 

To run this locally, ensure you have `Wrangler` version `>=16.7.0` then run 

```sh
npm install && npm run start
``` 

[Learn more about Pages Functions](https://developers.cloudflare.com/pages/platform/functions/)
