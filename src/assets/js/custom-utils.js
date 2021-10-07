
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

/**
 * I want to be able to provide the developer with simplest API possible
 * to gather inputs from the user, with beatiful prompts.
 * 
 * The promp is able to:
 * - Be awaited (async/await style)
 * - Be discarded (with outside click or cancel button click)
 * - Provide any complex template containing inputs
 * - Spit an error if the template is not valid HTML
 * - Have validation for inputs (with a lil animation)
 * - Have overflow scroll if there is too much content
 * - Two buttons, one to confirm and on to dismiss
 */
export function SmartPrompt(opts) {
    this.uuid = Math.random().toString(36).slice(2); // Yes, this is a valid UUID...

    this.title = opts.title || "";
    this.prescription = opts.prescription || "";
    this.postscription = opts.postscription || "";
    this.template = opts.template;

    this.figureColor = opts.figureColor || "#111";
    this.textColor = opts.textColor || "#111";
    this.groundColor = opts.groundColor || "#fffff1";

    if (!this.isValidTemplate(this.template)) {
        throw new Error(`Template provided is invalid. The syntax is invalid, or it's a missing a name on an input or required is not specified as required="true"`);
    }

    // Return a promise and extract resolve and reject
    return new Promise((res, rej) => {

        // Open the modal
        let el = document.createElement("DIV");
        el.innerHTML = this.getBoilerPlate();

        // Setup so that clicking outside dismisses the dialog
        el.firstElementChild.addEventListener("click", (e) => {
            if (e.target.classList[0] === ("modal-wrapper" + this.uuid)) {
                this.cancel();
            }
        });

        document.body.appendChild(el.firstElementChild);

        this.fade(1);

        window["prompt" + this.uuid] = this; // "this" is SmartPrompt

        this.resolve = res;
        this.reject = rej;
    });
}

SmartPrompt.prototype.fade = function (value, callback = () => { }) {
    let modalWrapper = document.querySelector(".modal-wrapper" + this.uuid);
    let modalContent = modalWrapper.querySelector(".modal-content");
    modalContent.style.opacity = value;
    setTimeout(() => {
        modalWrapper.style.opacity = value;
        callback();
    }, 300);
};

SmartPrompt.prototype.getForm = function () {
    let modalWrapper = document.querySelector(".modal-wrapper" + this.uuid);
    return modalWrapper.querySelector("form");
}

SmartPrompt.prototype.parseResult = function () {
    let formData = new FormData(this.getForm());
    return [...formData.entries()]
        .reduce((result, tuple) => (result[tuple[0]] = tuple[1], result), {});
};

SmartPrompt.prototype.removeModal = function () {
    this.fade(0, () => {
        document.body.removeChild(document.querySelector(".modal-wrapper" + this.uuid));
    });

    delete window["prompt" + this.uuid];
};

// I check the validity of the HTML provided and if all inputs have a name
SmartPrompt.prototype.isValidTemplate = function (template) {
    let doc = document.createElement("DIV");
    doc.innerHTML = template;
    if (doc.innerHTML !== template) { // Look strange, huh? Hehe
        return false;
    }
    let inputs = [
        ...doc.querySelectorAll("input"),
        ...doc.querySelectorAll("select")
    ];
    return inputs.every(input => input.getAttribute("name"));
};

SmartPrompt.prototype.submit = function () {
    if (this.getForm().checkValidity()) {
        this.resolve(this.parseResult());
        this.removeModal();
    } else {
        let modalWrapper = document.querySelector(".modal-wrapper" + this.uuid);
        let modalContent = modalWrapper.querySelector(".modal-content");
        modalContent.classList.add("error-animation");
        setTimeout(() => {
            modalContent.classList.remove("error-animation");
        }, 300);
    }
};

SmartPrompt.prototype.cancel = function () {
    this.removeModal();
    this.reject("Aborted by the user.");
};

SmartPrompt.prototype.getBoilerPlate = function () {
    return `<div class="modal-wrapper${this.uuid}">
    <style>
      body {
        overflow: hidden;
      }
  
      .modal-wrapper${this.uuid} ::-webkit-scrollbar {
        width: 1rem;
      }
  
      .modal-wrapper${this.uuid} ::-webkit-scrollbar-track {
        background: ${this.groundColor};
        background-image: linear-gradient(
          90deg,
          #ddd,
          10%,
          ${this.groundColor}
        );
      }
  
      .error-animation {
        animation: ErrorAnimation .3s;
      }
  
      @keyframes ErrorAnimation {
        0% { transform: rotateZ(0); }
        25% { transform: rotateZ(-3deg); }
        50% { transform: rotateZ(3deg); }
        75% { transform: rotateZ(-3deg); }
        100% { transform: rotateZ(0); }
      }
  
      .modal-wrapper${this.uuid} ::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background-color: ${this.figureColor};
        background-image: linear-gradient(
          90deg,
          #ddd,
          10%,
          ${this.figureColor}
        );
      }
  
      .modal-wrapper${this.uuid} input[type="number"],
      .modal-wrapper${this.uuid} input[type="text"],
      .modal-wrapper${this.uuid} select {
        width: 100%;
        padding: .5rem;
        border: 2px solid ${this.figureColor};
        border-radius: 1rem;
        background-color: #0000;
      }
  
      .modal-wrapper${this.uuid} input:invalid,
      .modal-wrapper${this.uuid} select:invalid {
        box-shadow: 0 0 4px 2px orange
      }
  
      .modal-wrapper${this.uuid} {
        position: fixed;
        top: 0;
        z-index: 999999;
        width: 100vw;
        height: 100vh;
        display: grid;
        justify-items: center;
        align-items: center;
        color: ${this.textColor};
        background-image: linear-gradient(
          230deg,
          #a4c8,
          #47c8,
          #4cc8
        );
        background-size: 300% 300%;
        opacity: 0;
        animation: MoveBG 30s ease infinite;
        transition: all .3s ease;
      }
  
      @keyframes MoveBG {
        0% {
          background-position: 0% 84%;
        }
        50% {
            background-position: 100% 16%;
        }
        100% {
            background-position: 0% 84%;
        }
      }
  
      .modal-wrapper${this.uuid} .modal-content  {
        width: 90%;
        max-width: 600px;
        max-height: 90vh;
        padding: 1rem;
        overflow: auto;
        background-color: ${this.groundColor};
        border-radius: 1rem;
        box-shadow:  10px 10px 80px #a4c9,
                     -10px -10px 80px #4cc9;
        opacity: 0;
        transition: all .3s ease;
      }
  
      .modal-wrapper${this.uuid} .title {
        color: ${this.figureColor};
      }
  
      .modal-wrapper${this.uuid} .buttons {
        display: flex;
        justify-content: space-around;
        gap: 1rem;
      }
  
      .modal-wrapper${this.uuid} .submit ,
      .modal-wrapper${this.uuid} .cancel {
        width: 100%;
        padding: 1rem;
        border-radius: 1rem;
        transition: all .3s ease;
      }
  
      .modal-wrapper${this.uuid} .submit {
        border: 0;
        color: ${this.groundColor};
        background-color: ${this.figureColor};
      }
  
      .modal-wrapper${this.uuid} .cancel {
        border: 2px solid;
        color: ${this.figureColor};
        background-color: ${this.groundColor};
      }
  
      .modal-wrapper${this.uuid} .submit:hover,
      .modal-wrapper${this.uuid} .cancel:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px #0002;
      }
    </style>
    <div class="modal-content">
      <form>
        <h3 class="title">${this.title}</h3>
        <div style="margin: 1.5rem 0;">${this.prescription}</div>
        ${this.template}
        <div style="margin: 1.5rem 0;">${this.postscription}</div>
        <div class="buttons">
          <button type="button" class="submit" onclick="prompt${this.uuid}.submit()">Submit</button>
          <button type="button" class="cancel" onclick="prompt${this.uuid}.cancel()">Cancel</button>
        </div>
      </form>
    </div>
  </div>`;
};
