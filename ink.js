"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.box=box,exports.err=err,exports.help=help,exports.log=log,exports.msg=msg;var _react=_interopRequireDefault(require("react")),_ink=require("ink"),_constants=require("./constants"),Help=function(a){var b=a.msg;return _react["default"].createElement(_ink.Static,{items:["help"]},function(a){return _react["default"].createElement(_ink.Box,{key:a},_react["default"].createElement(_ink.Text,{color:"cyanBright"},"[",_constants.EIMA,"] :"),_react["default"].createElement(_ink.Text,{color:"yellow",dimColor:!0}," ".concat(b)))})},Error=function(a){var b=a.msg;return _react["default"].createElement(_ink.Static,{items:["error"]},function(a){return _react["default"].createElement(_ink.Box,{key:a},_react["default"].createElement(_ink.Text,{color:"cyanBright"},"[",_constants.EIMA,"] :"),_react["default"].createElement(_ink.Text,{color:"red",dimColor:!0}," ".concat(b)))})},Message=function(a){var b=a.msg;return _react["default"].createElement(_ink.Static,{items:["msg"]},function(a){return _react["default"].createElement(_ink.Box,{key:a},_react["default"].createElement(_ink.Text,{color:"cyanBright"},"[",_constants.EIMA,"] : "),_react["default"].createElement(_ink.Text,{color:"rgb(43,210,131)"},"".concat(b)))})},BoxMessage=function(a){var b=a.msg;return _react["default"].createElement(_ink.Static,{items:["box"]},function(a){return _react["default"].createElement(_ink.Box,{key:a,borderStyle:"double",paddingX:2},_react["default"].createElement(_ink.Text,{color:"rgb(43,210,131)"},"".concat(b)))})},Log=function(a){var b=a.msg;return _react["default"].createElement(_ink.Static,{items:["log"]},function(a){return _react["default"].createElement(_ink.Box,{key:a},_react["default"].createElement(_ink.Text,{color:"cyanBright"},"[",_constants.EIMA,"] :"),_react["default"].createElement(_ink.Text,{color:"yellow",dimColor:!0}," ".concat(b)))})};function box(){(0,_ink.render)(_react["default"].createElement(BoxMessage,{msg:Array.prototype.slice.call(arguments)})).cleanup()}function msg(){(0,_ink.render)(_react["default"].createElement(Message,{msg:Array.prototype.slice.call(arguments)})).cleanup()}function help(){(0,_ink.render)(_react["default"].createElement(Help,{msg:Array.prototype.slice.call(arguments)})).cleanup()}function err(){(0,_ink.render)(_react["default"].createElement(Error,{msg:Array.prototype.slice.call(arguments)})).cleanup()}function log(){(0,_ink.render)(_react["default"].createElement(Log,{msg:Array.prototype.slice.call(arguments)})).cleanup()}