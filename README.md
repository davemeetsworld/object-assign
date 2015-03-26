# object-assign

An implmentation of ES6 Object.assign();



## Install

$ bower install es6-object-assign


## Usage

```js
var oa = new ObjectAssign();

var t = { name : "lisa", age : 25 };

var r = { speak : function ()  { console.log('Hello, World!')} }

var k = oa.assign(r,t);

// k = { name : "lisa", age : 25,  speak : function ()  { console.log('Hello, World!')} }

