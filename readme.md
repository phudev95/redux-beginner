> Example: [https://ns-odntjiwohq.now.sh/](https://ns-odntjiwohq.now.sh/)

# Learn Redux

A simple React + Redux implementation. This will be turned into a free video series once the app is totally fleshed out.

## Running

First `npm install` to grab all the necessary dependencies. 

Then run `npm start` and open <localhost:7770> in your browser.

> Please check the script tag in index.html, make sure this script run on link `/static/bundle.js`

## Production Build

Run `npm build` to create a distro folder and a bundle.js file.

## Deploy to now.sh
> **npm i -g now now-serve** (If you not install it then run this command script, otherwise you can skip it)
```
1. npm run build
2. Open index.html, change `/static/bundle.js` to `/dist/bundle.js`
3. npm run deploy
4. Enjoy and take a coffee
```