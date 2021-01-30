# Calculator

React implimentation of a Calculator.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and does not use extra packages except those which 
come by default with CRA

## Available Scripts

In the project directory, you can run:

`yarn install`
`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Code Overview

### Calculator -> Parent Component

Main component with logic to perform calculations and render buttons in the DOM

State Variables:

* prevValue : store previous input value
* nextValue : store current input value
* display : store the value to be displayed in result container
* op : store the operator to be performed
* sm : store the state of scientific-mode toggle

### CalculatorKeys -> Component to impliment button functionality of a calculator

Reusable component to impliment different keys of the calculator

### LightDarkMode -> Component to impliment light/dark mode toggle buttons

Implimentation of Light/Dark mode styling using localstorage and css variables

State Variables:

* theme : store current theme state
