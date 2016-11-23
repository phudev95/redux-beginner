> Example: [https://ns-fhmrsbafrp.now.sh/](https://ns-fhmrsbafrp.now.sh/)

# Learn Redux

A simple React + Redux implementation. This will be turned into a free video series once the app is totally fleshed out.

## Structure
- `Actions`: Define Action Creators. Ex: Add + remove comments, increment the likes in post
- `Components`: Define more views in application as: Comments, Single, PhotoGrid,...
- `Data`: Create the seed data for process development.
- `Reducers`: Handle data on State of Redux. It includes: Add + remove comments, increment **likes** in post, add new posts,...
- `Styles`: Write CSS with stylus, it funny and cool ^^
+ **reduxstagram.js**: This is App root, it's define and config Routers
+ **store.js**: Config state, config debug on Dev Tools Redux of Chrome browser, Define Store with Redux, History and config auto reload scripts with Hot Reloading Redux.

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

## Debug Redux with Redux Dev Tools
![Screenshot](http://i.imgur.com/hZRb8j2.png)