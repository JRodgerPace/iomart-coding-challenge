
document.getElementById("event-add").onclick = addEvent;

function addEvent() {
	var newEventName = document.getElementById("name").value;
	var newEventDescription = document.getElementById("desc").value;
	var newEventDate = Date.parse(document.getElementById("date1").value);
	var newEvent = new Event(newEventName, newEventDescription);
	newEvent.schedule_for(newEventDate);
	if(document.getElementById("crit").checked)
	{
		newEvent.type = "critical";
		criticalEvents.push(newEvent);
		
	}
	else if(document.getElementById("minor").checked)
	{
		newEvent.type = "minor";
		minorEvents.push(newEvent);
	}	
	else
	{
		alert("No event type added - minor assigned automatically");
		newEvent.type = "minor";
		minorEvents.push(newEvent);
	}
	allEvents.push(newEvent);
	alert("Event added!");
};