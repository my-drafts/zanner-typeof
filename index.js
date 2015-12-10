
var is = module.exports.is = function(obj){
	return {}.toString.call(obj).toLowerCase().match(/^[\[]object[\s]+([a-zA-Z]+)[\]]$/)[1];
};

var of = module.exports.of = function(obj, objName){
	switch(is(objName)){
		case 'array':
			return objName.some(function(objNameOne){
				return of(obj, objNameOne);
			});
		case 'string':
			return is(obj)==objName;
		case 'undefined':
			return is(obj);
		default:
			throw 'Error in type.of: objName unknown';
	}
};

var ofs = module.exports.ofs = function(objs, objName){
	switch(of(objs)){
		case 'array':
			return !objs.some(function(objOne){
				return !of(objOne, objName);
			});
		default:
			throw 'Error in type.ofs: objs unknown';
	}
};
