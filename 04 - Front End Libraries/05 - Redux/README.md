# <link href="style.css" rel="stylesheet"></link>

# 5 Redux Tutorial

# 📜 Table of Contents

# ✏️ Summary

# ⭕ Introduction

- Redux is defined as a predictable state container for JavaScript apps

- Redux can be used with any view library but we shall use it with React

# ⭕ Tutorial Commentary

## 🟨 1: Create a Redux Store

<h3 class="intro"> ⚪ What id Redux </h3>

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




## 🟨 Placeholder

<h3 class="intro"> ⚪ Introduction </h3>

<h3 class="example"> 🟠 Example </h3>

<h3 class="task"> 🔴 Task </h3>

<h3 class="solution"> 🟢 Solution </h3>

The solution is:

<h3 class="result"> 🔵 Result</h3>

The output is:
