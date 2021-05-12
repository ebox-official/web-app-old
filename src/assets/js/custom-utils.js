export function AsyncLoop(asyncFn, cycledDelay, startDelay) {

    this.asyncFn = asyncFn;
    this.cycleDelay = cycledDelay;
    this.startDelay = startDelay;

    this.runningState = { isRunning: false };
    this.timers = [];
}

AsyncLoop.prototype.start = function () {

    if (this.runningState.isRunning) {
        console.log("AsyncLoop is already running, please stop it first.");
        return;
    }

    let runningState = this.runningState;
    let loop = async () => {
        await this.asyncFn();
        if (runningState.isRunning) {
            this.timers.push(setTimeout(loop.bind(this), this.cycleDelay));
        }
    };

    this.timers.push(setTimeout(loop.bind(this), this.startDelay));
    this.runningState.isRunning = true;
    console.log('AsyncLoop started.');
};

AsyncLoop.prototype.stop = function () {

    if (!this.runningState.isRunning) {
        console.log('AsyncLoop is already stopped, please start it first.');
        return;
    }

    this.runningState.isRunning = false;
    this.timers.forEach(timer => clearTimeout(timer));
    console.log('AsyncLoop stopped.');
    this.runningState = { isRunning: false };
};
