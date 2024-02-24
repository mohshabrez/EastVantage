**React Random User App**

_This is a simple Random User Predictor app built with React, Redux, and Redux Thunk. It gives you the random users everytime you refresh._

**Getting Started[^1].**

***>To get started, clone this repository and install the dependencies:***

```
git clone https://github.com/mohshabrez/EastVantage.git
cd EastVantage
cd my-app
npm install
```

**Next, start the development server:**
```
npm start
```
_*>This will start the app in development mode, and you can view it by navigating to http://localhost:3000 in your browser.*_


**Dependencies**
- React
* Redux
+ Redux Thunk
React Router
Tailwind CSS
Redux
This app uses Redux to manage the state of the application. 
npm install redux react-redux redux-thunk
Redux Thunk
Redux Thunk is a middleware that allows you to write asynchronous actions in Redux. This is useful for making API calls and updating the state of the application once the data has been retrieved.

To use Redux Thunk, you can define an action creator that returns a function instead of an object. This function will be passed the dispatch function from Redux, which you can use to dispatch actions once the data has been retrieved.
Components
This app includes several components, including:

NavBar: A navigation bar that includes links to the different pages of the app.
AddItemForm: A form for adding new items to the inventory.
ItemList: A list of all the items in the inventory.
ItemDetail: A detailed view of a single item in the inventory.
Styling
