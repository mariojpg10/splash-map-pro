import { useState, useEffect } from 'react';

const EVENT_DATE = new Date('2026-03-01T08:00:00');

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = EVENT_DATE.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'Días' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Seg' },
  ];

  return (
    <div className="flex gap-3 md:gap-4 justify-center">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="flex flex-col items-center"
        >
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-lg">
            <span className="font-bold text-2xl md:text-3xl text-primary tabular-nums">
              {String(unit.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs md:text-sm text-muted-foreground mt-2 font-medium">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
