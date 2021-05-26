"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// ES5
// function infoFunc() {
//     document.write("hello");
// }
// const infoData = new infoFunc();
// console.log(infoData);
// ES6
// const infoFunc = () => {
//     document.write("hello");
// }
// const infoData = new infoFunc();
// console.log(infoData);
var infoClass = /*#__PURE__*/function () {
  function infoClass() {
    _classCallCheck(this, infoClass);

    console.log("constructor worikng");
  }

  _createClass(infoClass, [{
    key: "elosetinfo",
    value: function elosetinfo() {
      console.log("eloset isliyir obshnoyda");
    }
  }, {
    key: "mehmmed",
    value: function mehmmed() {
      console.log("mehmmed");
    }
  }]);

  return infoClass;
}();

var infoData = new infoClass();
console.log(infoData.mehmmed);
console.log(infoData.elosetinfo);
