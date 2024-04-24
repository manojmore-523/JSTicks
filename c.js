// Get the current time in milliseconds
const currentTimeInMillis = new Date().getTime();

// Define the number of ticks per millisecond (1 tick = 100 nanoseconds)
const ticksPerMillisecond = 10000;

// Convert milliseconds to ticks
const ticks = currentTimeInMillis * ticksPerMillisecond + 621355968000000000;

console.log("Current time in ticks:", ticks);
