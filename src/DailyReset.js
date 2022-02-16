import React from 'react'

const DailyReset = () => {
    var date = new Date();
    var nextDate = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + 1, 0, 0, 0);
    var now = Date.now();
    var diff = Math.floor((nextDate - now) / 1000); // remove milliseconds

    var hours = Math.floor(diff / 3600), minutes = Math.floor(diff % 3600 / 60), seconds = Math.floor(diff % 3600 % 60)
    if (seconds === 60) {
        seconds = 0;
    }
    if (hours === 0 && minutes === 0 && seconds === 0) {
        date = new Date();
        nextDate = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + 1, 0, 0, 0);
        now = Date.now();
        diff = Math.floor((nextDate - now) / 1000); // remove milliseconds

        hours = Math.floor(diff / 3600);
        minutes = Math.floor(diff % 3600 / 60);
        seconds = Math.floor(diff % 3600 % 60);
    }

    return (
        <div>
            <span>{hours.toString().padStart(2, '0') + 'hrs ' + minutes.toString().padStart(2, '0') +
                'mins ' + seconds.toString().padStart(2, '0') + 'secs'}</span>
        </div>
    );
}

export default DailyReset;