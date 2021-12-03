"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.eimaLint=eimaLint;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_util=require("./util"),_ink=require("./ink"),_fs=_interopRequireDefault(require("fs"));function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function eimaLint(){return _eimaLint.apply(this,arguments)}function _eimaLint(){return _eimaLint=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function b(a){return _regenerator["default"].wrap(function(b){for(;;)switch(b.prev=b.next){case 0:(0,_ink.msg)("The Lint Feature Is Experimental And The Results May Not Be Accurate. Do You Still Want To Run It? (Y/N) [N]"),(0,_util.getLineInput)(function(b){"Y"===b||"y"===b?assetLint(a):process.exit()});case 2:case"end":return b.stop();}},b)})),_eimaLint.apply(this,arguments)}function assetLint(){return _assetLint.apply(this,arguments)}function _assetLint(){return _assetLint=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function b(a){var c,d,e,f,g,h;return _regenerator["default"].wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return c=(0,_util.getConfig)(),c&&0!==c.paths.length||((0,_ink.err)("Please Check eima.json"),process.exit()),c.lintPath||a||((0,_ink.err)("The Lint Feature Requires The Folder Path You Want To Search To. Please Check lintPath in eima.json or -p [path] argument"),process.exit()),b.prev=3,b.next=6,Promise.all(c.paths.map(function(a){var b=a.assets;return(0,_util.getFileList)(b,[])}));case 6:return d=b.sent,e=d.flat(1/0).map(function(a){var b=a.name,c=a.ext,d=b.replace(/[^\w\s]/gim,"_")+"_"+c.toUpperCase();return _objectSpread(_objectSpread({},a),{},{name:d})}),f="".concat(f||c.lintPath),b.next=11,(0,_util.getFilePathList)(f,[""]);case 11:g=b.sent,h=g.filter(Boolean).flat(1/0),(0,_util.mergeAllSourceFile)(f,h,function(a){var b="EIMA ASSET LINT(ALPHA)\n\n--LIST OF NON IN-USE ASSETS--\n\n",c=e.map(function(c){var d=c.name,e=c.size,f=-1===a.indexOf(".".concat(d)),g=-1===a.indexOf("{".concat(d)),h=-1===a.indexOf("{ ".concat(d)),i=-1===a.indexOf(" ".concat(d,","));return f&&g&&h&&i?(b+="".concat(d," ----- ").concat(e,"\n"),c):null}).filter(Boolean);(0,_ink.box)(b),(0,_ink.err)("DO YOU WANT TO DELETE UNUSED FILES? (Y/N) [N]");var d=c.reduce(function(a,b){var c=b._fullFilePath;return a.concat(c)},[]);(0,_ink.box)(d.join("\n")),(0,_util.getLineInput)(function(a){"Y"===a.toUpperCase()?(c.forEach(function(a){var b=a._fullFilePath;return _fs["default"].unlinkSync(b)}),(0,_ink.msg)("FILES DELETE COMPLETE"),process.exit()):process.exit()})}),b.next=20;break;case 16:b.prev=16,b.t0=b["catch"](3),console.error(b.t0),process.exit();case 20:case"end":return b.stop();}},b,null,[[3,16]])})),_assetLint.apply(this,arguments)}