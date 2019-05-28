//Peter Victoratos
//Copyright 2019 (c)
//CallBox Assessment

var array_one = ["apple", "dog", "cat", "food", "kite", "elephant", "lunch", "book", "laptop"];
var array_two = ["dog", "goose", "kite", "meal", "laptop"];

function compare(array_one, array_two){
	var array_compare = [];

	array_one.forEach((e1)=>array_two.forEach((e2)=>
						{if(e1 == e2){
							array_compare.push(e1)
						}
					}
					));
	return array_compare;
}


console.log(compare(array_one, array_two));

//Looked up a tutorial online and figured this one out. BTW all of my programs were written in Sublime Text