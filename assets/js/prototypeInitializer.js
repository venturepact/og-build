(function(){
console.log("Loading prototypeInitializer");	
function equals(array){
    // if the other array is a falsy value, return
    console.log("hsjdj",this,array);
    if (!array)
        return false;
    
    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;
    for (var i = 0, l=this.length; i < l; i++) {
       
        // Check if we have nested arrays
        if ( Object.prototype.toString.call(this[i]) === '[object Array]' && Object.prototype.toString.call(array[i]) === '[object Object]') {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))0
                return false;       
        } 
        else if( Object.prototype.toString.call(this[i]) === '[object Object]'){
                console.log("Got Object");
                return this[i].equals(array[i]);
        }          
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
if(Array.prototype.equals){
	console.log("Overriding equals method");
  //throw( new Error( "Array.prototype.filterMap is already defined - overriding it will be dangerous." ) );
}
Array.prototype.equals = equals;



Object.defineProperty(Array.prototype, "equals", {enumerable: false});

Object.prototype.equals = function(object2) {
    //For the first loop, we only check for types
    for (propName in this) {
        if (this.hasOwnProperty(propName) != object2.hasOwnProperty(propName)) {
            this[propName] += '$';  
        }
        //Check instance type
        else if (typeof this[propName] != typeof object2[propName]) {
            //Different types => not equal
            return false;
            
        }
    }
    //Now a deeper check using other objects property names
    for(propName in object2) {
        
        //We must check instances anyway, there may be a property that only exists in object2
            //I wonder, if remembering the checked values from the first loop would be faster or not 
        if (this.hasOwnProperty(propName) != object2.hasOwnProperty(propName)) {
            console.log("++++++========",this[propName],object2[propName]);
            object2[propName] += '$';
            return false;
        }
        else if (typeof this[propName] != typeof object2[propName]) {
            return false;
        }
        //If the property is inherited, do not check any more (it must be equa if both objects inherit it)
        if(!this.hasOwnProperty(propName))
          continue;

        //Now the detail check and recursion

        //This returns the script back to the array comparing
        /**REQUIRES Array.equals**/
        if (Object.prototype.toString.call(this[propName]) === '[object Array]' && Object.prototype.toString.call(object2[propName]) === '[object Array]') {
                   // recurse into the nested arrays
           console.log("Key>>>>>>>>>>>>>>>>_________",propName);         
           if (!this[propName].equals(object2[propName])){
                this[propName].push({'changed':true}),object2[propName].push({'changed':true});
               
           }
                        
        }
        else if (Object.prototype.toString.call(this[propName]) === '[object Object]' && Object.prototype.toString.call(object2[propName]) === '[object Object]') {
                   // recurse into another objects
                   //console.log("Recursing to compare ", this[propName],"with",object2[propName], " both named \""+propName+"\"");
            console.log("Key>>>>>>>>>>>>>>>>_________",propName); 
           if (!this[propName].equals(object2[propName])){
               this['changed'] = '$',object2['changed']='$';
           }
                       
        }
        //To Handle Different types

        //Normal value comparison for strings and numbers
        else if(this[propName] != object2[propName]) {
            console.log("Key>>>>>>>>>>>>>>>>",propName);
             if(Object.prototype.toString.call(this[propName]) !== '[object Object]' && Object.prototype.toString.call(object2[propName]) !== '[object Object]'
                 && Object.prototype.toString.call(this[propName]) !== '[object Array]' && Object.prototype.toString.call(object2[propName]) !== '[object Array]') {
                     console.log("yEAahshhhhhhhhhhhhhhhhhhhhhhhhhh",propName);
                          this[propName] += '$', object2[propName] += '$'
            }
            else{
                Object.prototype.toString.call(this[propName]) === '[object Object]' ? (this[propName]['changed'] = '$' , object2[propName] += '$'):null;
                Object.prototype.toString.call(object2[propName]) === '[object Object]' ? (object2[propName]['changed'] = '$' , this[propName] += '$'):null;
                Object.prototype.toString.call(this[propName]) === '[object Array]' ? (this[propName].push({'changed': '$'}) , object2[propName] += '$'):null;
                Object.prototype.toString.call(object2[propName]) === '[object Array]' ? (object2[propName].push({'changed': '$'}),this[propName] += '$'): null;
            }
          
           
        }
    }
    //If everything passed, let's say YES
    return true;
}

})();