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

// Format the date to a human-readable string in IST
const humanReadableTimeIST = dateFromTicks.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
console.log("Human-readable time in IST:", humanReadableTimeIST);

// Calculate ticks for the IST time
const ticksIST = dateFromTicks.getTime() * 10000 + 621355968000000000;

// Print the IST time in ticks
console.log("Time in ticks (IST):", ticksIST);
