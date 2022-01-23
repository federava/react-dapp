# Ethereum Dapp with React JS

This project aims to create a simple Dapp with React.

The tutorias is this [video](https://www.youtube.com/watch?v=AiWkkj8lSTc) of [Dapp University](https://www.dappuniversity.com/)


## Resources

We will use create-react-app (CRA) to initialize the project easily.

web3.js will provide interaction with Metamask .

Bootstrap is utilized to provide a nice interface, nothing too fancy.

## Steps

* npm install create-react-app
* create-react-app
* npm install web3
* npm install react-bootstrap bootstrap
* See next section
* npm start

## Troubleshooting, fixes & changes

The project can't run if you follow exactly the steps of the video, I introduced some changes.

**Error**
*Compiled with problems: ERROR in ./node_modules/cipher-base/index.js 3:16-43 ... etc*

**Solution**
*Downgrade react scripts because web3.js was throwing an error* [link](https://stackoverflow.com/questions/70472965/web3-issue-react-application-not-compiling/70512623#70512623)
* npm uninstall react-scripts
* npm i react-scripts@4.0.3

**App.js considerations**
+ ~~componentWillMount~~ componentDidMount
+ App.js file has App as a funtion, make it a class as in the video.


## Comments and notes

* Uses async await pattern because interactiang with a blockchain is about asyncronous interactions. 
* givenProvider is Metamask in case it is installed.

**By Federico**







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
