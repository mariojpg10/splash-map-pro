import { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

const EVENT_DATE = new Date('2026-03-01T08:00:00');

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isEventDay, setIsEventDay] = useState(false);
  const confettiFired = useRef(false);

  function calculateTimeLeft() {
    const difference = EVENT_DATE.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isOver: false,
    };
  }

  const fireConfetti = () => {
    const duration = 5000;
    const animationEnd = Date.now() + duration;
    const colors = ['#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      if (newTimeLeft.isOver && !confettiFired.current) {
        setIsEventDay(true);
        confettiFired.current = true;
        fireConfetti();
      }
    }, 1000);

    // Check on mount
    const initial = calculateTimeLeft();
    if (initial.isOver) {
      setIsEventDay(true);
      if (!confettiFired.current) {
        confettiFired.current = true;
        setTimeout(fireConfetti, 500);
      }
    }

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'Días' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Seg' },
  ];

  if (isEventDay) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-pulse rounded-2xl px-8 py-6 shadow-xl">
          <span className="text-3xl md:text-5xl font-bold text-primary-foreground">
            🎉 ¡Es hoy! 🎉
          </span>
        </div>
        <button
          onClick={fireConfetti}
          className="text-sm text-primary hover:text-accent transition-colors underline"
        >
          ¡Más confeti!
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-3 md:gap-4 justify-center">
      {timeUnits.map((unit) => (
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
