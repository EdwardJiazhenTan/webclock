import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const formatTime = (time) => {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        // Add leading zeros to hours, minutes, and seconds if they are less than 10
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        return `${hours}:${minutes}:${seconds}`;
    };

    return <div style={{ color: 'white', fontSize: '2em' }}>{formatTime(time)}</div>;
};

export default DigitalClock;
