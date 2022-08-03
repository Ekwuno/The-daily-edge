# Forum application built with Pages Functions, Workers KV and Durable Objects
This example application showcases a forum application  that allows authenticated users to leave comments, like comments and reply on other user’s comments using Pages Functions to handle server-side logic such as Authentication and posting comments to Workers KV. We will also use Workers KV for storage of our comment entries and Durable Objects to keep the count of likes consistent.  

![Screen Recording 2022-08-02 at 01 43 51](https://user-images.githubusercontent.com/35943047/182391704-ef720814-8c05-45d1-9e30-ade7e9ce6e74.gif)


## Set up 

To run this locally, ensure you have `Wrangler` version `>=16.7.0` then run 

```sh
npm install && npm run start
``` 

# React Component structure.

The componets can be found in `src/components`. The image below shows a breakd
own of how the components are used 

<img width="1075" alt="Screenshot 2022-08-01 at 15 44 48" src="https://user-images.githubusercontent.com/35943047/182390650-a68cb25a-b8dc-48e5-ad4f-7c2bb4787849.png">

# Pages Functions 
<img width="1143" alt="Screenshot 2022-08-01 at 10 43 09" src="https://user-images.githubusercontent.com/35943047/182391478-c0467eb2-21d2-4b00-9984-9fca389648e7.png">


All Pages Functions are under `functions/api` folder. The React components are in the `src/components`.

# Added resources
- [Learn more about Pages Functions](https://developers.cloudflare.com/pages/platform/functions/)
- [Workers KV](https://developers.cloudflare.com/workers/learning/how-kv-works/)
- [Durable Objects](https://developers.cloudflare.com/workers/learning/using-durable-objects/)

