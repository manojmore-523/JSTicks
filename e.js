// Get the current date and time
const currentDate = new Date();

// Calculate ticks for the date and time
const ticks = (currentDate.getTime() * 10000) + 621355968000000000;

console.log("Current time in ticks:", ticks);
