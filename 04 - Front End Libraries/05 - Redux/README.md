# <link href="style.css" rel="stylesheet"></link>

# 5 Redux Tutorial

# 📜 Table of Contents

# ✏️ Summary

# ⭕ Introduction

- Redux is defined as a predictable state container for JavaScript apps

- Redux can be used with any view library but we shall use it with React

# ⭕ Tutorial Commentary

## 🟨 1: Create a Redux Store

<h3 class="intro"> ⚪ What is Redux </h3>

- Redux is a state management framework which can be usd with many different web technologies including React.

- In Redux, there is a single state object used for entire state of application - this is the Redux store.

- Redux has a createStore() which lets you create the Redux Store

<h3 class="task"> 🔴 Task </h3>

- Declare a store variable and assign it to the createStore() method, passing the reducer as argument.

- The reducer here is defined as:

```javascript
const reducer = (state = 5) => {
    return state;
}
```

<h3 class="solution"> 🟢 Solution </h3>

The solution is:

```javascript
const store = Redux.createStore(reducer)
```

<hr>

## 🟨 2: Get State from Redux store

- In order to get the state from store, we use the getState() method

<h3 class="task"> 🔴 Task </h3>

- Use the getState() method to retrieve from the store, and assign this to a new variable "currentState"

<h3 class="solution"> 🟢 Solution </h3>

The solution is:

```javascript
const store = Redux.createStore(
    (state = 5) => state;
);
// Change code below this line
var currentState = store.getState();
```
<hr>

## 🟨 3: Define a Redux Action

- In Redux, all state updates are triggered by dispatching actions.

- An action is a JavaScript object which contains informations about an action event which has occured.

- Sometimes a Redux action also carries a username afer a user logs in. Actions must contain a type property which specifies the type of action that occured.

<h3 class="task"> 🔴 Task </h3>

- Declare an object "action" and give it a property type set to the String 'LOGIN'

<h3 class="solution"> 🟢 Solution </h3>

The solution is:

```javascript
// Define an action here:
const action = {
  type: 'LOGIN'
}
```

<hr>

## 🟨 4: Define an Action Creator

- After creating an action, next step is sending the action to redux store so the state can be updated

- Action creators are used to achieve this

- Action creator is a function which returns an action.

<h3 class="task"> 🔴 Task </h3>

- Define a function named actionCreator() which returns an action when defined

<h3 class="solution"> 🟢 Solution </h3>

The solution is:

```javascript
const action = {
    type: 'LOGIN'
}
// define action creator here
function actionCreator(){
    return action;
}
```

## 🟨 5: Dispatch an Action Event

- We call store.dispatch() to dispatch actions from Redux store.

- Passing the value from an action creator will send an actin to the store.

<h3 class="task"> 🔴 Task </h3>

- The Redux store in the code below is initialised with an object containing "login: false"

- There is a loginAction which returns an object of type LOGIN

- Dispatch the LOGIN action to the Redux store by calling the dispatch method, and pass in the action created by loginAction()

<h3 class="solution"> 🟢 Solution </h3>

The solution is:

```javascript
const store = Redux.createStore(
    (state={login:false}) => state
)

const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};

// dispatch the action here

store.dispatch(loginAction())
```

## 🟨 Placeholder

<h3 class="intro"> ⚪ Introduction </h3>

<h3 class="example"> 🟠 Example </h3>

<h3 class="task"> 🔴 Task </h3>

<h3 class="solution"> 🟢 Solution </h3>

The solution is:

<h3 class="result"> 🔵 Result</h3>

The output is:
