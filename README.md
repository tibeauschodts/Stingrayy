# Stingrayy

![Stingrayy logo](https://imgur.com/BYC922D.png)

Stingrayy is a NFT (non-fungible token) browser using the OpenSea API. The application is bootstrapped with CRA (create-react-app) and written in Typescript. 

**Here's a list of all technologies that were used and why:**

 - [React](https://github.com/facebook/create-react-app) as the main framework
 - [Typescript](https://www.typescriptlang.org/) and the required types for better typing and quicker error handling
 - [Axios](https://github.com/axios/axios) to send HTTP requests to the backend server
 - [Rbx](https://dfee.github.io/rbx/) as the UI framework (based on Bulma, written in TypeScript) to quickly build components for the application

 Each component has its own CSS file and class names, this way its easier to find and change component styles. CSS properties are arranged alphabetically so you can quickly find the right property. There's also a backend server that requests the OpenSea API, extracts the necessary values, and sends it to the frontend. Both the frontend and the backend are written in Typescript.

**Extra information and documentation can be found in the code, you can also view a live demo of Stingrayy on [Heroku](https://stingrayy.herokuapp.com/).**