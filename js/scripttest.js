var status = "init";
document.getElementById("current-status").innerHTML = status;

var currentEvents = [];

//class definition for events
function Event(name, description) {
	//Private Properties
	var name = name;
	var description = description;
	var link = "#";
	var scheduledDate = new Date();
	var resolvedDate = undefined;
	var last_updated = new Date();
	
	//Public Properties
	this.selected = false;
	this.resolved = false;
	
	//Public Methods
	this.set_name = function(newName){
		this.name = newName; //method to change name of the event
	};	
	this.set_description = function(newDescription){
		this.description = newDescription; //method to change the description
	};
	this.schedule_for = function(newDate){
		this.scheduledDate = newDate; //method to schedule a date/time for the event
	};
	this.set_resolved(newDate){
		this.resolved = true;
		this.resolvedDate = newDate; //method to resolve the event and add a date/time
	};
	this.update_time(newDate){
		this.last_updated = new Date(); //method to update the date/time of any activity
	};
};