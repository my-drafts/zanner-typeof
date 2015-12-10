
var of = module.exports.typeOf = function(obj, objName){
	if(objName==undefined){
		return {}.toString.call(obj).toLowerCase().match(/^[\[]object[\s]+([a-zA-Z]+)[\]]$/)[1];
	}
	else if(of(objName)=='string'){
		return of(obj)==objName;
	}
	else if(of(objName)=='array'){
		return objName.some(function(objNameOne){
			return of(obj, objNameOne);
		});
	}
	else{
		throw 'Error in type.of: objName unknown';
	}
};

var ofs = module.exports.typesOf = function(objs, objName){
	if(of(objs, 'array')){
		return objs.some(function(objOne){
			return !of(objOne, objName);
		});
	}
	else return of(objs, objName);
};
