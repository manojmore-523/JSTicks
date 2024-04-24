// Get the current date and time
const currentDate = new Date();

// Calculate ticks for the date and time
const ticks = currentDate.getTime() * 10000 + 621355968000000000;

// Print the current time in ticks
console.log("Current time in ticks:", ticks);

// Print the human-readable time
const humanReadableTime = currentDate.toLocaleString();
console.log("Human-readable time:", humanReadableTime);
