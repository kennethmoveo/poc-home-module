"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;
var _pocSharedComponentsModule = require("poc-shared-components-module");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Home() {
  return /*#__PURE__*/_react.default.createElement("div", null, "This is home module", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_pocSharedComponentsModule.Button, {
    label: "Button v1.0.4"
  }));
}