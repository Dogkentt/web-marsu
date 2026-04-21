export const formatTime = (totalSeconds: number): string => {
    if (totalSeconds < 0) return "00:00:00";

    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);

    const pad = (n: number) => n.toString().padStart(2, '0');

    return `${pad(days)}:${pad(hours)}:${pad(minutes)}`;
};