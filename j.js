// Get the current date and time
const currentDate = new Date();

// Calculate ticks for the date and time
const ticks = currentDate.getTime() * 10000 + 621355968000000000;

// Print the current time in ticks
console.log("Current time in ticks (GMT):", ticks);

// Define the ticks per millisecond (1 tick = 100 nanoseconds)
const ticksPerMillisecond = 0.0001;

// Calculate milliseconds from ticks
const milliseconds = (ticks - 621355968000000000) * ticksPerMillisecond;

// Create a new Date object using the milliseconds
const dateFromTicks = new Date(milliseconds);

// Format the date to a human-readable string in local time
const humanReadableLocalTime = dateFromTicks.toLocaleString();
console.log(typeof humanReadableLocalTime)
console.log("Human-readable time in local time:", humanReadableLocalTime);


var ticks2 = Date.parse(humanReadableLocalTime);
var a = ticks2 * 10000 + 621355968000000000;

console.log(a);

// Calculate ticks for the local time
//const ticksLocalTime = dateFromTicks.getTime() * 10000 + 621355968000000000;

// Print the local time in ticks
//console.log("Time in ticks (local time):", ticksLocalTime);
