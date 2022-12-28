import { useCallback, useEffect, useMemo } from 'react';
import useCountDown from 'react-countdown-hook';

export const useCountdown = (
  time: number,
  interval = 1000,
  redoCallback?: () => Promise<void> | void,
) => {
  const [timeLeft, { start, reset }] = useCountDown(time, interval);
  const isDone = useMemo(() => timeLeft <= 0, [timeLeft]);
  const stringValue = useMemo(
    () =>
      [Math.floor(timeLeft / 1000 / 60), (timeLeft / 1000) % 60]
        .map((i) => String(i).padStart(2, '0'))
        .join(':'),
    [timeLeft],
  );
  useEffect(() => {
    start();
  }, []);
  const redo = useCallback<any>(async () => {
    await redoCallback?.();
    start(2 * 1000);
  }, [reset, start, redoCallback]);

  return [isDone, stringValue, redo];
};
