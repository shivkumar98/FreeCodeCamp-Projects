<link href="style.css" rel="stylesheet"></link>

# 4 React Tutorial

# ⭕ Table of Contents



# ✏️ Summary

<span style="font-size:20px; font-weight:bold">

### ✅   Sass is not understood by browsers, we use the Sass software to generate a CSS file from a SCSS file


</span>

<br>



# ⭕ Introduction

- React is a library for building modular, component-driven componets for web interfaces.

- React uses its own language called JSX which is a combination of HTML and JavaScript.

- In this tutorial, I will create difference React components, manage data in form of state properties and use different lifecycle methods

# ⭕ Tutorial Commentary

## 🟨 1: Create a Simple JSX element

<h3 class="intro"> ⚪ What is React? </h3>

- React is an open-source library maintained by FaceBook which allows us to render UI of webapps.

- It users an extension of JavaScript called JSX which lets your write JavaScript directly in HTML.

- JSX is an extension of JavaScript allowing us to write JavaScript in JSX. We write JavaScript code in curly braces:

```jsx
{ 'this is JavaScript Code' }
```

- JSX is compiled into JavaScript code, Babel is a popular transpiler.

<h3 class="task"> 🔴 Task </h3>

*The current code uses JSX to assign a div element to a constant JSX.*

*Replace dic with a h1 element and add the text "Hello to JSX!" inside it*

The code is initalised as:

```jsx
const JSX = <div></div>;
```

<h3 class="solution"> 🟢 Solution </h3>

```jsx
const JSX = <h1>Hello JSX!</h1>;
```

<h3 class="result"> 🔵 Result</h3>

![](2023-01-29-10-02-52.png)


<hr>

## 🟨 2: Create a Complex JSX element

<h3 class="intro"> ⚪ Complex JSX Elements </h3>

- A valid JSX element must return a single element, hence multiple elements must be nested inside one parent element!

- **Valid JSX:**

```jsx
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```

- **Invalid JSX**

```jsx
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```

<h3 class="task"> 🔴 Task </h3>

*Define a new constant JSX which renders a div which contains the following elements in order:*

* A h1, a p, and an unordered list with three elements.*

<h3 class="solution"> 🟢 Solution </h3>

```jsx
const JSX = <div><h1>Shiv Kumar</h1>
  <p>I like to code in:</p>
  <ul>
    <li>Java</li>
    <li>JavaScript</li>
    <li>SQL</li>
  </ul>
</div>
```

<h3 class="result"> 🔵 Result</h3>

![](2023-01-29-10-15-08.png)


## 🟨  PLACEHOLDER

<h3 class="intro"> ⚪ What is React? </h3>

<h3 class="task"> 🔴 Task </h3>

<h3 class="solution"> 🟢 Solution </h3>

<h3 class="result"> 🔵 Result</h3>

<h3 class="example"> 🟠 Example </h3>
