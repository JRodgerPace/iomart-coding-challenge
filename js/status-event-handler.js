

//class definition for events
function Event(name, description) {
	//Private Properties
	var name = name;
	var description = description;
	var scheduledDate = new Date();
	var resolvedDate = undefined;
	var last_updated = new Date();
	
	//Public Properties
	this.selected = false;
	this.resolved = false;
	this.active = true;
	this.type = undefined;
	
	//Public Methods
	//Setters
	this.set_name = function(newName){
		this.name = newName; //method to change name of the event
	};	
	this.set_description = function(newDescription){
		this.description = newDescription; //method to change the description
	};
	this.schedule_for = function(newDate){
		this.scheduledDate = newDate; //method to schedule a date/time for the event
	};
	this.set_resolved = function(newDate){
		this.resolved = true;
		this.resolvedDate = newDate; //method to resolve the event and add a date/time
	};
	this.update_time= function(newDate){
		this.last_updated = new Date(); //method to update the date/time of any activity
	};
	//Getters
	this.get_name = function(){
		return name;
	};
};

function Status(name, colour) {
	var name = name;
	var colour = colour;
	var active = false;
	
	this.get_name = function(){
		return name;
	};
	this.get_colour = function(){
		return colour;
	};
	
};

var critical = new Status("Critical", "red");
var minor = new Status("Minor", "orange");
var allOK = new Status("All OK", "green");
var currentStatus = allOK;
var allEvents = [];
var currentEvents = [];
var criticalEvents = [];
var minorEvents = [];


