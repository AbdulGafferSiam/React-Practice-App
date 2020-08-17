### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

### Deploy app in github pages
Step 1: Go to the app folder <br />
    cd /path/to/first-react-project 

Step 2: npm install gh-pages --save-dev 

step 3: run "git remote add origin https://github.com/AbdulGafferSiam/React-Practice-App.git"

step 4: Add "homepage" on package.json file<br />
    http://github-username.github.io/React-Practice-App

step 5: Add "predeploy" and "deploy" on package.json <br />
    "predeploy": "npm run build", <br />
    "deploy": "gh-pages -d build"

Step 6: run "npm run deploy" 

### Deploy in github
git init<br />
git add . <br />
git commit -m "first commit" <br />
git remote add origin https://github.com/AbdulGafferSiam/React-Practice-App.git <br />
git push -u origin master

### JSX
Javascript Extention/XML

