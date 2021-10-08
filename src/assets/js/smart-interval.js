/**
 * SmartInterval creates an interval that has the following features:
 * - Can be paused/stopped
 * - Can be forced to execute
 * - Evaluates sequentially (no other call is made before the current call is evaluated)
 */
export default function SmartInterval(asyncFn, delayMs) {
    this.asyncFn = asyncFn;
    this.delayMs = delayMs;

    this.running = false;
}

SmartInterval.prototype.cycle = async function () {
    await this.asyncFn();
    await this.delay(this.delayMs);
    if (this.running) this.cycle();
};

SmartInterval.prototype.start = function () {
    if (this.running) return;
    this.running = true;
    this.cycle();
};

SmartInterval.prototype.stop = function () {
    if (this.running) this.running = false;
};

SmartInterval.prototype.forceExecution = function () {
    if (this.running) this.cycle();
};

// This function is just an arbitrary delay to be used with async/await pattern
SmartInterval.prototype.delay = function (ms) {
    return new Promise(res =>
        setTimeout(() => res(1), ms)
    );
};