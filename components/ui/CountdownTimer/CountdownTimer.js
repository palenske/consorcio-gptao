import { useState, useEffect } from "react";
import { Text } from "@labsmaisdigital/dsmaisevo";

const CountdownTimer = ({
  setEnableCancel,
  setIsTimeOut,
  initialMinute = 0,
  initialSeconds = 0,
}) => {
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (minutes < 4) setEnableCancel(true);
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    if (minutes + seconds === 0) setIsTimeOut(true);
  }, [seconds]);

  return minutes === 0 && seconds === 0 ? null : (
    <Text
      color="primary"
      italic
      size="sm"
    >{`Tempo de validade do código: ${minutes}m${
      seconds < 10 ? `0${seconds}` : seconds
    }s`}</Text>
  );
};

export default CountdownTimer;
