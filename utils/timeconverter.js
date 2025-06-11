function timeToMilliseconds(timeString) {
    const parts = timeString.split(':');

    // HH:MM:SS
    if (parts.length !== 3) {
        console.error("Invalid time format. Please use HH:MM:SS.");
        return NaN; 
    }

    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);
    const seconds = parseInt(parts[2], 10);

    
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        console.error("Invalid time values. Ensure HH, MM, SS are numbers.");
        return NaN;
    }

    
    const totalMilliseconds = (hours * 3600 * 1000) + 
                              (minutes * 60 * 1000) +  
                              (seconds * 1000);        

    return totalMilliseconds;
}