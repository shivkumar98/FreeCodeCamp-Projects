# <link href="style.css" rel="stylesheet"></link>

# 6 React and Redux Tutorial

# 📜 Table of Contents


  <br>

# ✏️ Summary


# ⭕ Introduction

- Redux is defined as a predictable state container for JavaScript apps

- Redux can be used with any view library but we shall use it with React

# ⭕ Tutorial Commentary

## 🟨 1: Getting Started with React Redux

- React is a view library that you provide with data, which then renders the view in a predictable fashion.

- Redux is a statement management framework.

- In a typical React Redux application, you create a single Redux store.

- The react components subsribe to relevant pieces of data. You then dispatch actions directly from React components which then trigger store updates.

- React components can manage their own state locally, its better to keep the app state in a single location in Redux.

- Redux is not designed to work with React out the box, you need to use the react-redux package. It provides you with a way to pass Redux state and dispatch to your React components as props.

- In the next couple of challenges, I will create a simple React component which allows you to add new text messages. These will be added to an array that's displayed in the view.

- Next, you'll create a Redux store and actions which manages state of the messages array.

- Finally, you'll use react-redux to connect the Redux store with your component which will extract local state into the Redux store.

<h3 class="task"> 🔴 Task </h3>

- Add a constructor to the DisplayMessages component and initialise it with a state with and input and messages properties. Initialise with empty string and array.

- The code is initialised as:

```jsx
class DisplayMessages extends React.Component {
    // Change code below this line

    // Change code above this line
    render(){
        return <div />
    }
}
```

- I declare a constructor and initialise the state to:

```jsx
constructor(props){
    super(props);
    this.state = { input: '',messages: [] }
}
```

<h3 class="solution"> 🟢 Solution </h3>

The solution is:

```jsx
class DisplayMessages extends React.Component {
  // Change code below this line
  constructor(props){
    super(props);
    this.state = { input: '',messages: [] }
  }
  // Change code above this line
  render() {
    return <div />
  }
};
```

## 🟨 Placeholder

<h3 class="task"> 🔴 Task </h3>

<h3 class="solution"> 🟢 Solution </h3>

The solution is:

<h3 class="result"> 🔵 Result</h3>

The output is: