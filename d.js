// Get the current time in milliseconds
const currentTimeInMillis = new Date().getTime();

// Define the number of ticks per millisecond (1 tick = 100 nanoseconds)
const ticksPerMillisecond = 10000;

// Convert milliseconds to ticks
const ticks = currentTimeInMillis * ticksPerMillisecond;

// Define the offset in ticks between JavaScript's epoch and .NET's epoch
const epochOffsetTicks = 621355968000000000;

// Add the offset to the tick count
const adjustedTicks = ticks + epochOffsetTicks;

console.log("Current time in ticks:", adjustedTicks);
