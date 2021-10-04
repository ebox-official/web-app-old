
// This function is just an arbitrary delay to be used with async/await pattern
export function delay(ms) {
    return new Promise(res =>
        setTimeout(() =>
        res(1)
        , ms)
        );
    }
    
/**
 * SmartInterval creates an interval that has the following features:
 * - Can be paused/stopped
 * - Can be forced to execute
 * - Evaluates sequentially (no other call is made before the current call is evaluated)
 */
export function SmartInterval(asyncFn, delayMs) {
    this.asyncFn = asyncFn;
    this.delayMs = delayMs;

    this.running = false;
}

SmartInterval.prototype.cycle = async function () {
    await this.asyncFn();
    await delay(this.delayMs);
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

export function deviceType() {
    let ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
}

export function isMetaMaskInstalled() {
    return window.ethereum
        && window.ethereum.isMetaMask;
}

/**
 * The objective of the two following snippets is to
 * handle async events with an imperative style of
 * coding
 * 
 * I also want the API to be compatible with that of
 * observables, so that I can drop-in replace them
 * That means it should also work with "| async"
 * in Angular
 * 
 * By convention use $ as suffix to mark the varname
 * (so that you know it's a special var)
 * 
 * I want a AsyncVar to:
 * - Sets some data
 * - Remembers the data
 * - Can be listened for changes
 * - Can stop being listened
 */
export function AsyncVar(value = undefined) {
    this.value = value;
    this.consumers = {};
}

AsyncVar.prototype.set = function(value) {
    this.value = value;
    for (let key in this.consumers) {
        this.consumers[key](value); // Should I use hasOwnProperty?
    }
};
AsyncVar.prototype.next = AsyncVar.prototype.set;

AsyncVar.prototype.get = function() {
    return this.value;  
};
AsyncVar.prototype.getValue = AsyncVar.prototype.get;

AsyncVar.prototype.sub = function(callback) {

    // This is necessary for "| async" in Angular
    if ("next" in callback) {
        callback = callback.next;
    }

    // Run it with last value
    callback(this.value);

    // This is a kind of unique id
    let namespace = Math.random().toString(36).slice(2);

    this.consumers[namespace] = callback;

    let usub = () => {
        delete this.consumers[namespace];
    };

    return {
      usub,
      unsubscribe: usub  
    };
}
AsyncVar.prototype.subscribe = AsyncVar.prototype.sub;

/**
 * I want an AsyncPulse that:
 * - Sends some data (but doesn't remember it)
 * - Can be listened for changes
 * - Can stop being listened
 */
export function AsyncPulse() {
    this.consumers = {};
}

AsyncPulse.prototype.set = function(value) {
    for (let key in this.consumers) {
        this.consumers[key](value); // Should I use hasOwnProperty?
    }
};
AsyncPulse.prototype.next = AsyncPulse.prototype.set;

AsyncPulse.prototype.sub = function(callback) {

    // This is necessary for "| async" in Angular
    if ("next" in callback) {
        callback = callback.next;
    }

    // This is a kind of unique id
    let namespace = Math.random().toString(36).slice(2);

    this.consumers[namespace] = callback;

    let usub = () => {
        delete this.consumers[namespace];
    };

    return {
      usub,
      unsubscribe: usub  
    };
}
AsyncPulse.prototype.subscribe = AsyncPulse.prototype.sub;
