
var is = module.exports.is = function(_obj){
	return {}.toString.call(_obj).toLowerCase().match(/^[\[]object[\s]+([a-zA-Z]+)[\]]$/)[1];
};

var of = module.exports.of = function(_obj, _name){
	switch(is(_name)){
		case 'array':
			return _name.some(function(name){
				return of(_obj, name);
			});
		case 'string':
			return is(_obj)==_name;
		case 'undefined':
			return is(_obj);
		default:
			throw 'Error in type.of: name unknown';
	}
};

var ofs = module.exports.ofs = function(_objs, _name){
	if(!of(_name, ['array', 'string'])){
		throw 'Error in type.ofs: name unknown';
	}
	else if(of(_objs, 'array')){
		return !_objs.some(function(obj){
			return !of(obj, _name);
		});
	}
	else{
		throw 'Error in type.ofs: objects unknown';
	}
};
