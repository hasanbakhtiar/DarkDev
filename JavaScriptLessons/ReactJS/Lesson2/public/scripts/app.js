"use strict";

var root = document.querySelector("#root");
var number = 0;

var oneMinusItem = function oneMinusItem() {
  if (number > 0) {
    number--;
    renderApp();
  }
};

var onePlusItem = function onePlusItem() {
  number++;
  renderApp();
};

var renderApp = function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Number:", number, " "), /*#__PURE__*/React.createElement("button", {
    style: {
      "background-color": "red",
      "color": "white",
      "border": "none",
      "font-size": "20px",
      "margin-right": "10px"
    },
    onClick: oneMinusItem
  }, "-1"), /*#__PURE__*/React.createElement("button", {
    style: {
      "background-color": "green",
      "color": "white",
      "border": "none",
      "font-size": "20px"
    },
    onClick: onePlusItem
  }, "+1"));
  ReactDOM.render(template, root);
}; // renderApp();


var counter = function counter() {
  var infoTime = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Time is:", new Date().toLocaleTimeString()));
  ReactDOM.render(infoTime, root);
};

setInterval(counter, 1000);
