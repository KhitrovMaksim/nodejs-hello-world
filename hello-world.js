const GREETING_MESSAGE = 'Hello World';
const APP_LIFE_CYCLE = 10000;
const TIMER_INTERVAL = 1000;
const GOODBYE_MESSAGE = 'Goodbye world';
let timer = 0;


const startTimer = (timerInterval) => setInterval(() => {
    timer++;
}, timerInterval);

const printMessage = (message) => {
    console.log(message);
};

const stopApp = () => {
    process.exit();
};

const userInterruptListener = () => {
    printMessage(`Stopped by user after ${timer} seconds`);
    stopApp();
};

const appLifeCycleTimer = (appLifeCycleTime, goodbyeMessage) => setTimeout(() => {
    printMessage(goodbyeMessage);
    stopApp();
}, appLifeCycleTime);

const startApp = (greetingMessage, appLifeCycleTime, timerInterval, goodbyeMessage) => {
    startTimer(timerInterval);
    printMessage(greetingMessage);
    appLifeCycleTimer(appLifeCycleTime, goodbyeMessage);
    process.stdin.on('data', userInterruptListener);
};


startApp(GREETING_MESSAGE, APP_LIFE_CYCLE , TIMER_INTERVAL, GOODBYE_MESSAGE);

