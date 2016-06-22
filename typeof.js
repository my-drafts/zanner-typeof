
var typeIs = module.exports.typeIs = function(that, objectFlag){
	var like = {}.toString.call(that).toLowerCase().match(/^[\[]object[\s]+([a-zA-Z]+)[\]]$/)[1];
	var name = objectFlag && like==='object' ? that.constructor.name.toLowerCase() : false;
	if (name===false){
		return like;
	}
	else if (objectFlag===false){
		return like;
	}
	else if (objectFlag===true){
		return [name, like];
	}
	else if (objectFlag>0){
		return name;
	}
	else if (objectFlag<0){
		return like;
	}
	else{
		return like;
	}
};

var typeOf = module.exports.typeOf = function(that, name){
	switch(typeIs(name)){
		case 'array':
			return name.some(function(name){
				return typeOf(that, name);
			});
			break;
		case 'string':
			return typeIs(that)===name;
			break;
		case 'undefined':
			return typeIs(that);
			break;
		default:
			throw 'Error in typeOf: 2 argument not type of [array, string, undefined]';
	};
};

var typeOfs = module.exports.typeOfs = function(thats, name){
	if(!typeOf(name, ['array', 'string'])){
		throw 'Error in typeOfs: 2 argument not type of [array, string]';
	}
	else if(typeOf(thats, 'array')){
		return !thats.some(function(that){
			return !typeOf(that, name);
		});
	}
	else{
		throw 'Error in typeOfs: 1 argument not type of [array]';
	}
};

