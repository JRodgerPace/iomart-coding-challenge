var status = "init";
document.getElementById("current-status").innerHTML = status;

function Event(name, description) {
	var name = name;
	var description = description;
	this.set_name = function(newName){
		this.name = newName;
	};	
	this.set_description = function(newDescription){
		this.description = newDescription;
	};
};