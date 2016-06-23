
var typeIs = module.exports.typeIs = function(that, thatFlag){
	var like = {}.toString.call(that).toLowerCase().match(/^[\[]object[\s]+([a-zA-Z]+)[\]]$/)[1];
	var name = thatFlag && like==='object' ? that.constructor.name.toLowerCase() : false;
	if (name!==false && thatFlag===true){
		return [name, like];
	}
	else if (name!==false && thatFlag>0){
		return name;
	}
	else if (name===false || thatFlag===false || thatFlag<0){
		return like;
	}
	else{
		return like;
	}
};

var typeOf = module.exports.typeOf = function(that, name, thatFlag){
	switch(typeIs(name)){
		case 'array':
			return name.some(function(nameOne){
				return typeOf(that, nameOne, thatFlag);
			});
			break;
		case 'null':
			return typeIs(that, thatFlag);
			break;
		case 'number':
			return typeIs(that, name);
			break;
		case 'string':
			return typeIs(that, typeIs(thatFlag)==='number' ? thatFlag : false)===name;
			break;
		case 'undefined':
			return typeIs(that, false);
			break;
		default:
			throw 'Error in typeOf: 2 argument not type of [array, null, number, string, undefined]';
	};
};

var typeOfs = module.exports.typeOfs = function(thats, name, thatFlag){
	if(!typeOf(name, ['array', 'string'], false)){
		throw 'Error in typeOfs: 2 argument not type of [array, string]';
	}
	else if(!typeOf(thats, 'array', false)){
		throw 'Error in typeOfs: 1 argument not type of [array]';
	}
	else{
		return !thats.some(function(that){
			return !typeOf(that, name, thatFlag);
		});
	}
};

