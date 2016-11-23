> Example: [https://ns-odntjiwohq.now.sh/](https://ns-odntjiwohq.now.sh/)

# Learn Redux

A simple React + Redux implementation. This will be turned into a free video series once the app is totally fleshed out.

## Structure
- `Actions`: Define Action Creators. Ex: Add + Remove comments, Add posts 
- `Components`: Define more views in Application like: Comments, Single, PhotoGrid,...
- `Data`: Data temp for process development.
- `Reducers`: Handle data on State of Redux. It includes: Add + Remove comments, Increment Like of Posts, Add new Posts,...
- `Styles`: Write CSS with stylus, it funny and cool ^^
+ **reduxstagram.j**s: This is App root, it's define and config Routers
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