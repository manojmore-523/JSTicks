// Get the current time in milliseconds
const currentTimeInMillis = new Date().getTime();

console.log("", currentTimeInMillis);
// Convert milliseconds to ticks (assuming 1 tick = 100 nanoseconds)
const ticks = currentTimeInMillis * 10000;

console.log("Current time in ticks:", ticks);
