
function ObjectAssign() {

}

ObjectAssign.prototype.assign = function assign(target, original) {
	Object.keys(original).forEach(function(key) { target[key] = original[key] });
	return target;
}
