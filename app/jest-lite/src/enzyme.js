"use strict";
exports.__esModule = true;
var enzyme_1 = require("enzyme");
exports.mount = enzyme_1.mount;
exports.shallow = enzyme_1.shallow;
var enzyme_adapter_react_16_1 = require("enzyme-adapter-react-16");
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1() });
