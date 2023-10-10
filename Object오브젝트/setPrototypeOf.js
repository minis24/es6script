let Sports = function(){};
Sports.prototype.getCount = function(){
    return 123;
}

let prtoObj = Object.setPrototypeOf({},Sports.prototype);

console.log('prtoObj.getCount() :: ', prtoObj.getCount())
