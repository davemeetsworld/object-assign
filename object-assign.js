use strict;

function ObjectAssign() {

}

ObjectAssign.prototype.assign = function assign(target, original) {
	Object.keys(original).forEach(function(key) { target[c] = original[key] });
	return target;
}
