
var typeOf = module.exports.typeOf = function(obj, objName){
	if(objName==undefined){
		return {}.toString.call(obj).toLowerCase().match(/^[\[]object[\s]+([a-zA-Z]+)[\]]$/)[1];
	}
	else if(typeOf(objName)=='string'){
		return typeOf(obj)==objName;
	}
	else if(typeOf(objName)=='array'){
		return objName.some(function(objNameOne){
			return typeOf(obj, objNameOne);
		});
	}
	else{
		throw 'Error in typeOf: objName unknown';
	}
};
