(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
  {
    "context": "You are a parent considering sending your child to Washington University Nursery School. You’ve learned that the curriculum is play-based and you want to know how learning is incorporated into a play-based context. You have some ideas about how language learning might happen, but are less sure about math.",
    "question": "Find some examples of how math learning is incorporated at Washington University Nursery School.",
    "tag": "math"
  },
  {
    "context": "You are investigating pre-school options for your 4 year old. Both you and your spouse work, so you need to fully understand what scheduling constraints each option involves. One of your schools of interest is the Washington University Nursery School.",
    "question": "When does school start and end each day? What is the longest period of time that your child can be there?",
    "tag": "school_day"
  },
  {
    "context": "You are investigating pre-school options for your 3.5 year old. You’ve been told that one of the hallmarks of a good program is teachers who have been there for a long time. You want your child to attend in the mornings only.",
    "question": "Which teachers would your child have and how long have they been at the school?",
    "tag": "teacher_tenure"
  },
  {
    "context": "You are starting to look at summer camp options and have heard good things about Washington University Nursery School for young children.",
    "question": "What are the daily camp hours? Are there any extended day opportunities?",
    "tag": "summer_camp"
  },
  {
    "context": "You are investigating pre-school options for your spirited 3 year old and want to understand their approach to discipline.",
    "question": "How do teachers at Washington University approach discipline?",
    "tag": "discipline"
  },
  {
    "context": "Your daughter is in the Teddy Bear class at Washington University Nursery School. She came home this week singing a song in Spanish about shapes, but you are pretty sure that she has some of the words wrong.",
    "question": "What are the correct lyrics?",
    "tag": "spanish_song"
  },
  {
    "context": "It is mid-December and you are thinking about things to do over your daughter's upcoming school break. She is 3 years old and attends the Washington University Nursery School and is in the Teddy Bear classroom. You are planning a trip to the library and want to check out some books that connect with something she is doing in school.",
    "question": "What are some potential book topics that relate to something that is going on in her classroom this week?",
    "tag": "books"
  },
  {
    "context": "You are a parent with a child who has just been accepted to attend as a full time student at the Washington University Nursery School. You want to accept the offer of admission.",
    "question": "Figure out what you need to do at this time to finalize your child’s place at the school.",
    "tag": "admission_2"
  },
  {
    "context": "You are a parent with a child who has just been accepted to attend as a full time student at the Washington University Nursery School. You need to pay one month of tuition as a deposit.",
    "question": "Find out how much one month of tuition is and whether or not it is possible to pay online.",
    "tag": "deposit"
  },
  {
    "context": "You are moving to St. Louis from Beijing and looking for a Pre-K program for your daughter, age 5. She is very close to her friends and you are worried that the move might be hard on her. She may need some extra support from her new teachers learning English, adapting to American culture, and making new friends.",
    "question": "How does the Washington University Nursery School staff approach providing extra help to students who need it?",
    "tag": "help"
  },
  {
    "context": "You are looking at Nursery Schools for your soon to be 3 year old. He has never been in school or daycare before and you are somewhat worried about the transition. You'd like to ensure that you'll be able to have strong communicationat his new school.",
    "question": "How does the Washington University Nursery School handle communicating with parents?",
    "tag": "communication"
  },
  {
    "context": "It’s mid-December and your son, age 4, came home all excited about science class. They learned a new word, but he can’t actually remember the word they learned about.",
    "question": "What was the topic of his recent science class?",
    "tag": "science"
  },
  {
    "context": "You are selecting a pre-school, but want to be sure that your daughter will be ready for kindergarten when it’s time.",
    "question": "How does the nursery school assess children’s knowledge, support their growth, and share the results with parents?",
    "tag": "parent_teacher_conference"
  },
  {
    "context": "You have recently accepted a position for your child for the coming school year at the Washington University Nursery School. Up to this point, your child has been at home and you are somewhat worried about the transition.",
    "question": "How does the nursery school support kids’ transitions into school?",
    "tag": "orientation"
  }
]

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = exports.Data = exports.urlData = void 0;
console.log("data loaded.");
var urlParams = new URL(window.location.href).searchParams;
exports.urlData = {
    raw: urlParams.toString(),
    assignmentID: urlParams.get("assignmentId"),
    hitID: urlParams.get("hitId"),
    workerID: urlParams.get("workerId"),
    submitTo: urlParams.get("turkSubmitTo"),
};
var Data = /** @class */ (function () {
    function Data(rawMturkURLData) {
        this.logs = {};
        this.data = {};
        this.errors = [];
        this.urlData = rawMturkURLData;
    }
    Data.prototype.serialize = function () {
        return JSON.stringify(this);
    };
    return Data;
}());
exports.Data = Data;
exports.data = new Data(exports.urlData);
Object.assign(window, { data: exports.data });

},{}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryEvent = exports.ButtonEvent = exports.ClickEvent = exports.BaseTrackerEvent = exports.isTrackerEvent = exports.objectToTrackerEvent = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("../utils/funcs");
console_wrapper_1.log("event loaded.", 2 /* BASIC */);
function objectToTrackerEvent(obj, action) {
    obj.action = action;
    obj.time = funcs_1.now();
}
exports.objectToTrackerEvent = objectToTrackerEvent;
function isTrackerEvent(obj) {
    return obj.action !== undefined && obj.time !== undefined;
}
exports.isTrackerEvent = isTrackerEvent;
var BaseTrackerEvent = /** @class */ (function () {
    function BaseTrackerEvent(action, eventInitDict) {
        this.custEv = new CustomEvent(action, eventInitDict);
        this.action = action;
        this.time = funcs_1.now();
    }
    Object.defineProperty(BaseTrackerEvent.prototype, "detail", {
        get: function () {
            return this.custEv.detail;
        },
        enumerable: false,
        configurable: true
    });
    return BaseTrackerEvent;
}());
exports.BaseTrackerEvent = BaseTrackerEvent;
// tslint:disable-next-line: max-classes-per-file
var ClickEvent = /** @class */ (function (_super) {
    __extends(ClickEvent, _super);
    function ClickEvent(x, y, id, eventInitDict) {
        var _this = _super.call(this, "click" /* CLICK */, eventInitDict) || this;
        _this.detail.x = x;
        _this.detail.y = y;
        _this.detail.id = id;
        return _this;
    }
    return ClickEvent;
}(BaseTrackerEvent));
exports.ClickEvent = ClickEvent;
// tslint:disable-next-line: max-classes-per-file
var ButtonEvent = /** @class */ (function (_super) {
    __extends(ButtonEvent, _super);
    function ButtonEvent(key, id, eventInitDict) {
        var _this = _super.call(this, "click" /* CLICK */, eventInitDict) || this;
        _this.detail.key = key;
        _this.detail.id = id;
        return _this;
    }
    return ButtonEvent;
}(BaseTrackerEvent));
exports.ButtonEvent = ButtonEvent;
// tslint:disable-next-line: max-classes-per-file
var HistoryEvent = /** @class */ (function (_super) {
    __extends(HistoryEvent, _super);
    function HistoryEvent(url, extra, eventInitDict) {
        var _this = _super.call(this, "history" /* HISTORY */, eventInitDict) || this;
        _this.detail.url = url;
        _this.detail.extra = extra;
        return _this;
    }
    return HistoryEvent;
}(BaseTrackerEvent));
exports.HistoryEvent = HistoryEvent;

},{"../utils/console_wrapper":16,"../utils/funcs":17}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventReceiver = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var event_1 = require("./event");
console_wrapper_1.log("receiver loaded.", 2 /* BASIC */);
var EventReceiver = /** @class */ (function () {
    function EventReceiver() {
        this.map = new Map();
        this.emitter = new EventTarget();
    }
    EventReceiver.prototype.register = function (eventType, callback) {
        this.emitter.addEventListener(eventType, function (event) {
            var trackEv = event.detail;
            if (event_1.isTrackerEvent(trackEv) && callback) {
                callback(trackEv);
            }
        });
        if (callback) {
            this.map.set(eventType, callback);
        }
    };
    EventReceiver.prototype.doEvent = function (event) {
        var callback = this.map.get("" + event.action);
        if (callback) {
            callback(event);
        }
    };
    return EventReceiver;
}());
exports.EventReceiver = EventReceiver;

},{"../utils/console_wrapper":16,"./event":3}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopBanner = void 0;
var router_1 = require("../router/router");
var console_wrapper_1 = require("../utils/console_wrapper");
var history_1 = require("./../router/history");
var document_1 = require("./document");
var elements_1 = require("./elements");
console_wrapper_1.log("banner loaded.", 2 /* BASIC */);
var TopBanner = /** @class */ (function () {
    function TopBanner() {
    }
    TopBanner.show = function () {
        TopBanner.showing = true;
        document_1.D.display(elements_1.Elements.ddUp, true);
        document_1.D.display(elements_1.Elements.ddDown, false);
        document_1.D.display(elements_1.Elements.ddContent, true);
    };
    TopBanner.hide = function () {
        TopBanner.showing = false;
        document_1.D.display(elements_1.Elements.ddDown, true);
        document_1.D.display(elements_1.Elements.ddUp, false);
        document_1.D.display(elements_1.Elements.ddContent, false);
    };
    TopBanner.doDisplayChange = function () {
        TopBanner.showing ? TopBanner.hide() : TopBanner.show();
    };
    TopBanner.setup = function () {
        document_1.D.addEventListener(elements_1.Elements.ddArrow, "click", TopBanner.doDisplayChange);
    };
    TopBanner.showing = true;
    return TopBanner;
}());
exports.TopBanner = TopBanner;
document_1.D.addEventListener("mturk-top-banner-back", "click", function (e) {
    if (history_1.History.canBackward()) {
        router_1.Router.loadWithPathPrefix(history_1.History.backward());
    }
    else {
        alert("There is no page history to go back for at this time!");
    }
});

},{"../router/router":14,"../utils/console_wrapper":16,"./../router/history":13,"./document":6,"./elements":7}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.D = void 0;
var console_wrapper_1 = require("./../utils/console_wrapper");
console_wrapper_1.log("document loaded.", 2 /* BASIC */);
var D = /** @class */ (function () {
    function D() {
    }
    D.elem = function (elem) {
        if (typeof elem === "string") {
            return D.id(elem);
        }
        else {
            return elem;
        }
    };
    D.display = function (elem, show) {
        elem = D.elem(elem);
        if (show) {
            elem.classList.remove("none");
            elem.classList.add("display");
        }
        else {
            elem.classList.remove("display");
            elem.classList.add("none");
        }
    };
    D.id = function (id) {
        var element = D.doc.getElementById(id);
        if (element === null) {
            throw new Error("Element was not found, id: <" + id + ">.");
        }
        else {
            return element;
        }
    };
    D.claz = function (claz) {
        return D.doc.getElementsByClassName(claz);
    };
    D.tag = function (tag) {
        return D.doc.getElementsByTagName(tag);
    };
    D.image = function (id, url) {
        console_wrapper_1.error(function () { return D.id(id).setAttribute("src", url); });
    };
    D.addEventListener = function (elem, type, listener) {
        elem = this.elem(elem);
        var wrapperFunc = function (e) {
            try {
                listener(e);
            }
            catch (err) {
                console.error(err);
            }
        };
        elem.addEventListener(type, wrapperFunc);
        return wrapperFunc;
    };
    D.each = function (elem, apply) {
        elem = this.elem(elem);
        var children = elem.children;
        for (var i = 0; i < children.length; i++) {
            apply(children[i]);
        }
    };
    D.eachRecur = function (elem, apply) {
        elem = this.elem(elem);
        var children = elem.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            apply(child);
            D.eachRecur(child, apply);
        }
    };
    D.create = function (tagName, options) {
        return document.createElement(tagName, options);
    };
    D.doc = document;
    return D;
}());
exports.D = D;

},{"./../utils/console_wrapper":16}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elements = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var document_1 = require("./document");
console_wrapper_1.log("element loaded.", 2 /* BASIC */);
/**
 * These are elements that are in every single project. Even if they are not used they should
 * be place in the project and display should be set to none. This simplifies configuration
 * and some common functions and allows less null checks to be performed overall. If the
 * element does not exist at run time an empty div with that id is created and its display
 * is set to none then appended to the body.
 */
/**
 * Attempts to get an element, if unsuccessful, creates div with id and appends to body.
 *
 * @param id - the id of the element to retrieve.
 */
function makeElemIfNotExist(id) {
    var elem;
    try {
        elem = document_1.D.id(id);
    }
    catch (err) {
        elem = document_1.D.create("div");
        elem.id = id;
        elem.style.display = "none";
        document.body.append(elem);
    }
    return elem;
}
/**
 * Commonly accessed elements, allows for clearer dom manip on these elements.
 */
exports.Elements = {
    document: document_1.D.doc.documentElement,
    wrapper: makeElemIfNotExist("wrapper"),
    htmlLoc: makeElemIfNotExist("html-loc"),
    innerBody: makeElemIfNotExist("inner-body"),
    ddDown: makeElemIfNotExist("mturk-top-banner-drop-down-button"),
    ddUp: makeElemIfNotExist("mturk-top-banner-collapse-button"),
    ddContent: makeElemIfNotExist("mturk-top-banner-drop-down-content"),
    backButton: makeElemIfNotExist("mturk-top-banner-back"),
    ddArrow: makeElemIfNotExist("mturk-top-banner-arrow"),
    mtTopBannerText: makeElemIfNotExist("mturk-top-banner-text"),
    mtScenarioContext: makeElemIfNotExist("scenario_context"),
    mtScenarioQuestion: makeElemIfNotExist("scenario_question"),
    logFileInput: makeElemIfNotExist("mturk-top-banner-drop-down-content-log-file-input"),
    submitForm: makeElemIfNotExist("mturk-submit-form"),
    modal: makeElemIfNotExist("modal"),
};

},{"../utils/console_wrapper":16,"./document":6}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLLoc = exports.ModeEnum = exports.AppEnum = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var elements_1 = require("./../dom/elements");
console_wrapper_1.log("html loc loaded.", 2 /* BASIC */);
var AppEnum;
(function (AppEnum) {
    AppEnum["INFORMATION_FORAGING"] = "information-foraging";
    AppEnum["COGNITIVE_LOAD"] = "cognitive-load";
    AppEnum["GENDER_MAG"] = "gender-mag";
    AppEnum["ERROR"] = "error";
})(AppEnum = exports.AppEnum || (exports.AppEnum = {}));
var ModeEnum;
(function (ModeEnum) {
    ModeEnum["REAL"] = "real";
    ModeEnum["SANDBOX"] = "sandbox";
    ModeEnum["TEST"] = "test";
    ModeEnum["ERROR"] = "error";
})(ModeEnum = exports.ModeEnum || (exports.ModeEnum = {}));
var HTMLLoc = /** @class */ (function () {
    function HTMLLoc() {
    }
    HTMLLoc.setup = function () {
        HTMLLoc.app = HTMLLoc.elem.dataset.app || AppEnum.ERROR;
        HTMLLoc.mode = HTMLLoc.elem.dataset.mode || ModeEnum.ERROR;
        HTMLLoc.scenario = HTMLLoc.elem.dataset.scenario || "error";
    };
    HTMLLoc.elem = elements_1.Elements.htmlLoc;
    return HTMLLoc;
}());
exports.HTMLLoc = HTMLLoc;

},{"../utils/console_wrapper":16,"./../dom/elements":7}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var console_wrapper_1 = require("./../utils/console_wrapper");
var document_1 = require("./document");
var elements_1 = require("./elements");
console_wrapper_1.log("modal loaded.", 2 /* BASIC */);
var Modal = /** @class */ (function () {
    function Modal() {
    }
    Modal.display = function (src) {
        Modal.elem.setAttribute("style", "left: " + Math.round(window.pageXOffset) + "px; top: " + Math.round(window.pageYOffset) + "px;");
        Modal.elem.classList.replace("hide-modal", "show-modal");
        document_1.D.each(Modal.elem, function (node) {
            node.src = src;
        });
        document.body.classList.add("noscroll");
    };
    Modal.hide = function () {
        Modal.elem.classList.replace("show-modal", "hide-modal");
        document_1.D.each(Modal.elem, function (node) {
            node.src = "";
        });
        document.body.classList.remove("noscroll");
    };
    Modal.elem = elements_1.Elements.modal;
    return Modal;
}());
exports.Modal = Modal;
document_1.D.addEventListener(Modal.elem, "click", function (e) {
    Modal.hide();
});
document_1.D.each(Modal.elem, function (node) {
    document_1.D.addEventListener(node, "click", function (e) {
        e.preventDefault();
    });
});

},{"./../utils/console_wrapper":16,"./document":6,"./elements":7}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scroll = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("./../utils/funcs");
console_wrapper_1.log("scroll loaded.", 2 /* BASIC */);
/**
 * Linear implementation of scrolling.
 * Follows the singleton pattern, call do to start a scroll operation.
 *
 * If a scroll is called when another scroll has already begun an
 * error will be thrown, but the first scroll will continue until completion.
 */
var Scroll = /** @class */ (function () {
    function Scroll(endPos, duration, complete) {
        this.endPos = endPos;
        this.duration = duration;
        this.complete = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            document.dispatchEvent(new CustomEvent("scroll"));
            complete(args);
        };
    }
    Scroll.callback = function (endPos, duration, complete) {
        if (duration === void 0) { duration = 200; }
        if (complete === void 0) { complete = funcs_1.noop; }
        if (Scroll.running) {
            throw new Error("Cannot make multiple calls to scroll at the same time.");
        }
        Scroll.running = true;
        var oldComplete = complete;
        complete = function () {
            Scroll.running = false;
            console_wrapper_1.error(oldComplete);
        };
        this.instance.update(endPos, duration, complete).attemptScroll();
    };
    Scroll.promise = function (endPos, duration) {
        var _this = this;
        if (duration === void 0) { duration = 200; }
        if (Scroll.running) {
            throw new Error("Cannot make multiple calls to scroll at the same time.");
        }
        Scroll.running = true;
        return new Promise(function (resolve, reject) {
            try {
                var runResolver = function () {
                    Scroll.running = false;
                    resolve();
                };
                _this.instance.update(endPos, duration, runResolver).attemptScroll();
            }
            catch (err) {
                Scroll.running = false;
                reject(err);
            }
        });
    };
    Object.defineProperty(Scroll, "isRunning", {
        get: function () {
            return Scroll.running;
        },
        enumerable: false,
        configurable: true
    });
    Scroll.prototype.update = function (endPos, duration, complete) {
        this.endPos = endPos;
        this.duration = duration;
        this.complete = complete;
        return this;
    };
    Scroll.prototype.calcScrollAmount = function () {
        var curTime = funcs_1.now();
        var steps = Math.max(1, (this.duration - curTime) / Scroll.STEP_IN_MS);
        var curPos = window.pageYOffset;
        return Math.ceil((this.endPos - curPos) / steps);
    };
    Scroll.prototype.scroll = function () {
        window.scroll(0, this.calcScrollAmount());
        if (window.pageYOffset === this.endPos) {
            this.complete();
        }
        else {
            requestAnimationFrame(this.scroll);
        }
    };
    Scroll.prototype.attemptScroll = function () {
        if ("requestAnimationFrame" in window === false) {
            window.scroll(0, this.endPos);
        }
        this.scroll();
    };
    Scroll.STEP_IN_MS = 17;
    Scroll.running = false;
    Scroll.instance = new Scroll(0, 0, funcs_1.noop);
    return Scroll;
}());
exports.Scroll = Scroll;

},{"../utils/console_wrapper":16,"./../utils/funcs":17}],11:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitForm = void 0;
var funcs_1 = require("../utils/funcs");
var data_1 = require("./../data-log/data");
var console_wrapper_1 = require("./../utils/console_wrapper");
var document_1 = require("./document");
var elements_1 = require("./elements");
console_wrapper_1.log("submit form loaded.", 2 /* BASIC */);
var k = "NcF2WRkUbf5tzj4bIvI981FqmS6pMlO83g2j7u5R";
var gate = "https://2ykopq1oha.execute-api.us-east-1.amazonaws.com/PROD/logs";
var AllowSubmissionDefault = {
    allow: function () { return null; },
    preSubmit: funcs_1.noop,
};
var SubmitForm = /** @class */ (function () {
    function SubmitForm() {
    }
    SubmitForm.setup = function (allowSubmission) {
        var _this = this;
        if (allowSubmission === void 0) { allowSubmission = AllowSubmissionDefault; }
        SubmitForm.submitFunc = function (event) { return __awaiter(_this, void 0, void 0, function () {
            var allowed, qp, queryString, urlParams;
            return __generator(this, function (_a) {
                event.preventDefault();
                allowed = allowSubmission.allow();
                if (allowed === null) {
                    qp = new URL(window.location.href).searchParams;
                    data_1.data.urlData.raw = window.location.href;
                    data_1.data.urlData.assignmentID = qp.get("assignmentId");
                    data_1.data.urlData.hitID = qp.get("hitId");
                    data_1.data.urlData.workerID = qp.get("workerId");
                    data_1.data.urlData.submitTo =
                        qp.get("turkSubmitTo") + "/mturk/externalSubmit";
                    if (data_1.data.urlData.assignmentID !== null) {
                        document_1.D.id("assignment-id").value =
                            data_1.data.urlData.assignmentID;
                    }
                    if (data_1.data.urlData.hitID !== null) {
                        document_1.D.id("hit-id").value = data_1.data.urlData.hitID;
                    }
                    queryString = window.location.search;
                    urlParams = new URLSearchParams(queryString);
                    data_1.data.data.task = urlParams.get("tag");
                    data_1.data.data.response = document.getElementById("text-area").value;
                    console.log("\n\nDATA FOR TASK: " + data_1.data.data.task + "\n");
                    console.log(JSON.stringify(data_1.data));
                    alert("Open console to see user data. Please record into a text document.");
                    // (Elements.submitForm as HTMLFormElement).action = data.urlData
                    //     .submitTo as string;
                    // allowSubmission.preSubmit();
                    // const resp = await fetch(gate, {
                    //     method: 'POST',
                    //     headers: {
                    //         'Content-Type': 'application/json',
                    //         'x-api-key': k,
                    //     },
                    //     body: JSON.stringify({
                    //         sandbox: params.sandbox,
                    //         wustl_key: params.wustl_key,
                    //         project: params.project,
                    //         iteration: params.iteration,
                    //         tag: params.tag,
                    //         assignmentID: data.urlData.assignmentID,
                    //         hitID: data.urlData.hitID,
                    //         workerID: data.urlData.workerID,
                    //         log: data.serialize(),
                    //     }),
                    // }); // TODO: verify this actually works
                    // console.log(resp.status);
                    // console.log(await resp.json());
                    // if (resp.status !== 200) {
                    //     alert(
                    //         'You made a bad request with your submission. The server thinks that you made this error: ' +
                    //             (await resp.json()).error
                    //     );
                    //     return;
                    // }
                    // SubmitForm.elem.removeEventListener(
                    //     'submit',
                    //     SubmitForm.submitFunc
                    // );
                    // SubmitForm.elem.submit();
                }
                else {
                    alert(allowed);
                }
                return [2 /*return*/];
            });
        }); };
        SubmitForm.elem.addEventListener("submit", SubmitForm.submitFunc);
    };
    SubmitForm.elem = elements_1.Elements.submitForm;
    SubmitForm.allowSubmitDefault = { allow: function () { return true; }, preSubmit: funcs_1.noop };
    return SubmitForm;
}());
exports.SubmitForm = SubmitForm;

},{"../utils/funcs":17,"./../data-log/data":2,"./../utils/console_wrapper":16,"./document":6,"./elements":7}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackerElements = void 0;
var banner_1 = require("./banner");
var html_loc_1 = require("./html_loc");
var TrackerElements = /** @class */ (function () {
    function TrackerElements() {
    }
    TrackerElements.setupTrackerElements = function () {
        // setup dom elements
        banner_1.TopBanner.setup();
        html_loc_1.HTMLLoc.setup();
    };
    return TrackerElements;
}());
exports.TrackerElements = TrackerElements;

},{"./banner":5,"./html_loc":8}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = void 0;
var tracker_1 = require("./../tracker/tracker");
function newHistoryEntry(currURL, hasPrevURL, prevEntry, extra) {
    tracker_1.Tracker.getEventDispatchFunc("history")({ url: currURL, extra: extra });
    return {
        currURL: currURL,
        hasPrevURL: hasPrevURL,
        prevEntry: prevEntry,
        extra: extra,
        nextEntries: [],
    };
}
var History = /** @class */ (function () {
    function History() {
    }
    History.forward = function (url, extra) {
        var histEnt = newHistoryEntry(url, true, History.currhistory, extra);
        History.currhistory.nextEntries.push(histEnt);
        History.currhistory = histEnt;
        return url;
    };
    History.canBackward = function () {
        var _a, _b;
        return (History.currhistory.hasPrevURL &&
            !((_b = (_a = History.currhistory.prevEntry) === null || _a === void 0 ? void 0 : _a.extra) === null || _b === void 0 ? void 0 : _b.wrapper));
    };
    History.backward = function () {
        if (!History.canBackward()) {
            throw new Error("Cannot go back any further.");
        }
        console.log(History.currhistory.prevEntry);
        var prevEntry = History.currhistory.prevEntry;
        var nextURL = prevEntry.currURL;
        var histEnt = newHistoryEntry(nextURL, prevEntry.hasPrevURL, prevEntry.prevEntry, { back: true });
        History.currhistory = histEnt;
        return nextURL;
    };
    History.setup = function (url, extra) {
        History.firstHistory = newHistoryEntry(url, false, undefined, extra);
        History.currhistory = History.firstHistory;
    };
    return History;
}());
exports.History = History;
window.h = History;

},{"./../tracker/tracker":15}],14:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var document_1 = require("../dom/document");
var elements_1 = require("../dom/elements");
var modal_1 = require("../dom/modal");
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("../utils/funcs");
var html_loader_1 = require("../utils/html_loader");
var history_1 = require("./history");
console_wrapper_1.log("router loaded.", 2 /* BASIC */);
function testOn(elem, config) {
    return (elem.tagName === config.module &&
        (config.mode === 1 /* ON */ ||
            config.mode === 2 /* STANDARD_ALLOWANCES */));
}
function testAllowance(config) {
    return config.mode === 2 /* STANDARD_ALLOWANCES */;
}
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.configure = function (configs, pathPrefix) {
        configs.forEach(function (config) {
            Router.configs.set(config.module, Router.upgradeConfig(config));
        });
        Router.pathPrefix = pathPrefix;
    };
    Router.setup = function (elem) {
        document_1.D.eachRecur(elem, function (node) {
            var e_1, _a;
            try {
                for (var _b = __values(Router.configs.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var config = _c.value;
                    if (testOn(node, config)) {
                        config.setup(config, node);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    };
    Router.STANDARD_LINK_LISTENER = function (e) {
        return console_wrapper_1.error(function () {
            e.preventDefault();
            var target = e.target;
            var url = target.href;
            history_1.History.forward(Router.getPathName(url));
            var ret = html_loader_1.HTMLLoader.loadURL(url, elements_1.Elements.htmlLoc);
            window.dispatchEvent(new CustomEvent("newPageLoad"));
            return ret;
        });
    };
    Router.ON_COMPLETE_SLL = function (post) {
        var _this = this;
        return function (e) {
            console_wrapper_1.error(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Router.STANDARD_LINK_LISTENER(e)];
                        case 1:
                            _a.sent();
                            post(e);
                            return [2 /*return*/];
                    }
                });
            }); });
        };
    };
    Router.IMAGE_LINK_LISTENER = function (e) {
        return console_wrapper_1.error(function () {
            e.preventDefault();
        });
    };
    Router.FORM_OFF_LISTENER = function (e) {
        e.preventDefault();
        console.error("All forms except for the one in the top header are inactive.");
    };
    Router.defaultAllowancesOn = function () {
        Router.registerAllowance({ regex: Router.EMPTY, func: Router.EMPTY_RESPONDER }, { regex: Router.HASH_TAGS, func: Router.HASH_TAG_RESPONDER }, { regex: Router.AT_SYMBOL, func: Router.AT_SYMBOL_RESPONDER });
    };
    Router.defaultAllowancesOff = function () {
        Router.unregisterAllowance(Router.EMPTY, Router.HASH_TAGS, Router.AT_SYMBOL);
    };
    Router.registerAllowance = function () {
        var regexs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            regexs[_i] = arguments[_i];
        }
        regexs.forEach(function (regex) {
            return Router.linkAllowances.set(regex.regex, regex.func);
        });
    };
    Router.unregisterAllowance = function () {
        var regexs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            regexs[_i] = arguments[_i];
        }
        regexs.forEach(function (regex) { return Router.linkAllowances.delete(regex); });
    };
    Router.clearAllowances = function () {
        Router.linkAllowances.clear();
    };
    Router.load = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        history_1.History.forward(Router.getPathName(url));
                        return [4 /*yield*/, html_loader_1.HTMLLoader.loadURL(url, elements_1.Elements.htmlLoc)];
                    case 1:
                        ret = _a.sent();
                        window.dispatchEvent(new CustomEvent("newPageLoad"));
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    Router.loadWithPathPrefix = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                ret = html_loader_1.HTMLLoader.loadURL(Router.pathPrefix + page, elements_1.Elements.htmlLoc);
                window.dispatchEvent(new CustomEvent("newPageLoad"));
                return [2 /*return*/, ret];
            });
        });
    };
    Router.upgradeConfig = function (config) {
        return {
            module: config.module,
            mode: config.mode,
            setup: Router.SetupFunctions[config.module],
        };
    };
    Router.getPathName = function (url) {
        var ret = Router.pathRegex.exec(url);
        return ret === null ? url : ret.length > 1 ? ret[1] : url;
    };
    Router.HASH_TAGS = new RegExp("#");
    Router.EMPTY = new RegExp("^$");
    Router.AT_SYMBOL = new RegExp("@");
    Router.HASH_TAG_RESPONDER = funcs_1.noop;
    Router.EMPTY_RESPONDER = function (event) { return event.preventDefault(); };
    Router.AT_SYMBOL_RESPONDER = function (event) { return event.preventDefault(); };
    Router.pathPrefix = "";
    Router.SetupFunctions = {
        A: function (config, elem) {
            var aNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_1 = true;
                var href_1 = aNode.href;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = regex.test(href_1);
                    passesRegexTest_1 = passesRegexTest_1 && !test;
                    if (test) {
                        document_1.D.addEventListener(elem, "click", func);
                    }
                });
                if (passesRegexTest_1) {
                    if (href_1.substr(href_1.length - 3) === "pdf") {
                        document_1.D.addEventListener(elem, "click", function (e) {
                            e.preventDefault();
                            modal_1.Modal.display(href_1);
                        });
                    }
                    else {
                        document_1.D.addEventListener(elem, "click", function (e) {
                            return Router.STANDARD_LINK_LISTENER(e);
                        });
                    }
                }
            }
            else {
                document_1.D.addEventListener(elem, "click", function (e) {
                    return Router.STANDARD_LINK_LISTENER(e);
                });
            }
        },
        IMG: function (config, elem) {
            var imgNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_2 = true;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = !regex.test(imgNode.src);
                    passesRegexTest_2 = passesRegexTest_2 && test;
                    if (test) {
                        document_1.D.addEventListener(elem, "click", func);
                    }
                });
                if (passesRegexTest_2) {
                    document_1.D.addEventListener(elem, "click", function (e) {
                        return Router.IMAGE_LINK_LISTENER(e);
                    });
                }
            }
            else {
                document_1.D.addEventListener(elem, "click", function (e) {
                    return Router.IMAGE_LINK_LISTENER(e);
                });
            }
        },
        FORM: function (config, elem) {
            var formNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_3 = true;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = !regex.test(formNode.src);
                    passesRegexTest_3 = passesRegexTest_3 && test;
                    if (test) {
                        document_1.D.addEventListener(elem, "click", func);
                    }
                });
                if (passesRegexTest_3) {
                    document_1.D.addEventListener(elem, "submit", Router.FORM_OFF_LISTENER);
                }
            }
            else {
                document_1.D.addEventListener(elem, "submit", Router.FORM_OFF_LISTENER);
            }
        },
    };
    Router.configs = new Map();
    Router.linkAllowances = new Map();
    Router.pathRegex = /\/([\w]+.html)/;
    return Router;
}());
exports.Router = Router;

},{"../dom/document":6,"../dom/elements":7,"../dom/modal":9,"../utils/console_wrapper":16,"../utils/funcs":17,"../utils/html_loader":18,"./history":13}],15:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
var event_1 = require("../data-log/event");
var receiver_1 = require("../data-log/receiver");
var elements_1 = require("../dom/elements");
var tracker_elems_1 = require("../dom/tracker_elems");
var console_wrapper_1 = require("../utils/console_wrapper");
var data_1 = require("./../data-log/data");
var submit_form_1 = require("./../dom/submit_form");
console_wrapper_1.log("tracker loaded.", 2 /* BASIC */);
var Tracker = /** @class */ (function () {
    function Tracker() {
    }
    Tracker.loadScenario = function (scen) {
        var sub = scen.context;
        if (sub.length > 50) {
            sub = sub.substring(0, 50);
            var inds = [
                sub.lastIndexOf(" "),
                sub.lastIndexOf("."),
                sub.lastIndexOf(","),
                sub.lastIndexOf("?"),
                sub.lastIndexOf("!"),
            ];
            var ind = Math.max.apply(Math, __spread(inds));
            sub = sub.substring(0, ind) + "...";
        }
        console.log(scen);
        console.log("loaded scen");
        elements_1.Elements.mtTopBannerText.innerText = sub;
        elements_1.Elements.mtScenarioContext.innerText = scen.context;
        elements_1.Elements.mtScenarioQuestion.innerText = scen.question;
        elements_1.Elements.htmlLoc.dataset.task = scen.tag;
    };
    Tracker.start = function (config) {
        console_wrapper_1.setDebugLevel(config.debugLevel);
        // configure tracker specific elements
        tracker_elems_1.TrackerElements.setupTrackerElements();
        submit_form_1.SubmitForm.setup(config.allowSubmission);
        data_1.data.data.task = elements_1.Elements.htmlLoc.dataset.task;
        config.setup();
    };
    Tracker.registerEvent = function (eventType) {
        data_1.data.logs[eventType] = [];
        this.receiver.register(eventType, function (event) {
            data_1.data.logs[eventType].push(event);
        });
        return this.getEventDispatchFunc(eventType);
    };
    Tracker.getEventDispatchFunc = function (eventType) {
        var _this = this;
        return function (evData) {
            if (typeof evData === "object") {
                if (!event_1.isTrackerEvent(evData)) {
                    event_1.objectToTrackerEvent(evData, eventType);
                }
                _this.receiver.doEvent(evData);
            }
        };
    };
    Tracker.attachData = function (key, attribute) {
        data_1.data.data[key] = attribute;
    };
    Tracker.computeAttribute = function (name, compute) {
        data_1.data.data[name] = compute(data_1.data.data[name]);
    };
    Tracker.lastPos = { x: 0, y: 0, time: 0 };
    Tracker.receiver = new receiver_1.EventReceiver();
    return Tracker;
}());
exports.Tracker = Tracker;

},{"../data-log/event":3,"../data-log/receiver":4,"../dom/elements":7,"../dom/tracker_elems":12,"../utils/console_wrapper":16,"./../data-log/data":2,"./../dom/submit_form":11}],16:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.setDebugLevel = exports.errorHO = exports.error = void 0;
var data_1 = require("./../data-log/data");
log("console wrapper loaded.", 2 /* BASIC */);
function error(func) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, errorHO(func)()];
        });
    });
}
exports.error = error;
function errorHO(func) {
    var _this = this;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, func(args)];
                }
                catch (error) {
                    data_1.data.errors.push(error);
                    console.error(error);
                }
                return [2 /*return*/];
            });
        });
    };
}
exports.errorHO = errorHO;
var debugLevel = 2 /* BASIC */;
function setDebugLevel(level) {
    debugLevel = level;
}
exports.setDebugLevel = setDebugLevel;
function log(message, importance) {
    if (debugLevel >= importance) {
        console.log(message);
    }
}
exports.log = log;

},{"./../data-log/data":2}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.now = exports.noop = void 0;
var console_wrapper_1 = require("./console_wrapper");
console_wrapper_1.log("funcs loaded.", 2 /* BASIC */);
// tslint:disable-next-line: no-empty
function noop() { }
exports.noop = noop;
function now() {
    return new Date().getTime();
}
exports.now = now;

},{"./console_wrapper":16}],18:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLLoader = void 0;
var document_1 = require("../dom/document");
var console_wrapper_1 = require("./console_wrapper");
var funcs_1 = require("./funcs");
console_wrapper_1.log("html loader loaded.", 2 /* BASIC */);
var HTMLLoader = /** @class */ (function () {
    function HTMLLoader() {
    }
    HTMLLoader.finish = function () {
        HTMLLoader.finished = true;
        HTMLLoader.flattenTSLoadTags();
    };
    HTMLLoader.isFinished = function () {
        return HTMLLoader.finished;
    };
    HTMLLoader.cacheHTML = function (name, content) {
        if (HTMLLoader.finished) {
            throw new Error("Cannot cache new HTML entities after the application has been started.");
        }
        var tsl = document.createElement("ts-load");
        tsl.dataset.name = name;
        tsl.innerHTML = content;
        this.CACHE[name] = tsl;
    };
    HTMLLoader.registerPostLoadFunc = function (func) {
        console_wrapper_1.log("regsiter post load function", 3 /* DETAILED */);
        HTMLLoader.postLoadFunc = func;
    };
    HTMLLoader.load = function (html, elem) {
        return new Promise(function (resolve, reject) {
            try {
                console_wrapper_1.log("begin load", 3 /* DETAILED */);
                var context = document_1.D.elem(elem);
                var range = document.createRange();
                range.selectNodeContents(context);
                var frag = range.createContextualFragment(html);
                HTMLLoader.removeTagsFromDocumentFragment(frag, "script");
                HTMLLoader.loadAllCachedElements(frag);
                context.innerHTML = "";
                context.appendChild(frag);
                console_wrapper_1.log("end load", 3 /* DETAILED */);
                HTMLLoader.postLoadFunc();
                resolve(true);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    HTMLLoader.loadURL = function (url, elem) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = HTMLLoader).load;
                        return [4 /*yield*/, HTMLLoader.getHTML(url)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), elem])];
                }
            });
        });
    };
    HTMLLoader.getHTML = function (url) {
        return new Promise(function (resolve, reject) {
            try {
                console_wrapper_1.log("begin request", 3 /* DETAILED */);
                var request_1 = new XMLHttpRequest();
                request_1.open("GET", url, true);
                request_1.send(null);
                request_1.onreadystatechange = function () {
                    if (request_1.readyState === 4) {
                        console_wrapper_1.log("resolve request", 3 /* DETAILED */);
                        resolve(request_1.responseText);
                    }
                };
            }
            catch (err) {
                reject(err);
            }
        });
    };
    HTMLLoader.removeTagsFromDocumentFragment = function (frag, tagName) {
        frag.querySelectorAll(tagName).forEach(function (tag) { return frag.removeChild(tag); });
    };
    HTMLLoader.flattenTSLoadTags = function () {
        console_wrapper_1.log("Flattening", 3 /* DETAILED */);
        var s = new Set();
        Object.keys(HTMLLoader.CACHE).forEach(function (name) {
            return (HTMLLoader.CACHE[name] = HTMLLoader.flattenTSLoadTag(HTMLLoader.getCachedContent(name), s, 0));
        });
    };
    HTMLLoader.multipleTabs = function (n) {
        var ret = "";
        for (var i = 0; i < n; i++) {
            ret += "\t";
        }
        return ret;
    };
    HTMLLoader.flattenTSLoadTag = function (elem, flattened, count) {
        var tabs = HTMLLoader.multipleTabs(count);
        if (count > 100) {
            alert("Check the console, an error has occurred.");
            throw new Error("It seems like you might have infinitely recursively nested tags." +
                "\nHere are all of the tags that have been flattened so far: " +
                flattened +
                "\nHere is the name of the current element: " +
                elem.getAttribute("data-name"));
        }
        var name = elem.getAttribute("data-name");
        if (name === null) {
            return null;
        }
        var content = HTMLLoader.getCachedContent(name);
        if (content === null) {
            return null;
        }
        if (flattened.has(name)) {
            return content;
        }
        content.querySelectorAll("script").forEach(function (e) { return e.remove(); });
        content.querySelectorAll("ts-load").forEach(function (e) {
            var child = HTMLLoader.flattenTSLoadTag(e, flattened, count + 1);
            if (child !== null) {
                e.replaceWith(child);
            }
        });
        flattened.add(name);
        return content;
    };
    HTMLLoader.getCachedContent = function (name) {
        if (name === undefined || name === null) {
            return null;
        }
        var content = HTMLLoader.CACHE[name];
        if (content === undefined || content === null) {
            return null;
        }
        return content.cloneNode(true);
    };
    HTMLLoader.loadAllCachedElements = function (frag) {
        frag.querySelectorAll("ts-load").forEach(function (elem) {
            var name = elem.getAttribute("data-name");
            var content = HTMLLoader.getCachedContent(name);
            if (content != null) {
                elem.replaceWith(content);
            }
        });
    };
    HTMLLoader.CACHE = {};
    HTMLLoader.finished = false;
    HTMLLoader.postLoadFunc = funcs_1.noop;
    return HTMLLoader;
}());
exports.HTMLLoader = HTMLLoader;

},{"../dom/document":6,"./console_wrapper":16,"./funcs":17}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDGenerator = void 0;
var elements_1 = require("../dom/elements");
var document_1 = require("./../dom/document");
var console_wrapper_1 = require("./console_wrapper");
console_wrapper_1.log("id generator loaded", 2 /* BASIC */);
var IDGenerator = /** @class */ (function () {
    function IDGenerator() {
    }
    IDGenerator.reset = function () {
        IDGenerator.idCount = 0;
    };
    Object.defineProperty(IDGenerator, "next", {
        get: function () {
            IDGenerator.idCount += 1;
            return IDGenerator.prefix + IDGenerator.idCount;
        },
        enumerable: false,
        configurable: true
    });
    IDGenerator.applyID = function (elem) {
        elem.id = elem.id ? elem.id : IDGenerator.next;
    };
    /**
     * Recursively adds ids to all elements that are below the given
     * element in the heirarchy.
     *
     * @param elem - the element to start applying ids to its children.
     *                  Will not apply an id to this element.
     */
    IDGenerator.applyRecur = function (elem) {
        document_1.D.eachRecur(elem, this.applyID);
    };
    /**
     * Attaches ids to all html elements in the target location in the DOM that do not have ids.
     */
    IDGenerator.attachIdsToAllElements = function () {
        IDGenerator.applyRecur(elements_1.Elements.htmlLoc);
    };
    IDGenerator.idCount = 0;
    IDGenerator.prefix = "auto_gen_id_unq_";
    return IDGenerator;
}());
exports.IDGenerator = IDGenerator;

},{"../dom/elements":7,"./../dom/document":6,"./console_wrapper":16}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = void 0;
var qParams = new URL(window.location.href).searchParams;
exports.params = {
    wustl_key: "",
    sandbox: false,
    project: "",
    iteration: 0,
    tag: "",
};
try {
    qParams.forEach(console.log);
    if (["wustl_key", "sandbox", "project", "iteration", "tag"].every(function (key) {
        console.log("key: " + qParams.has(key));
        return qParams.has(key);
    })) {
        exports.params.wustl_key = qParams.get("wustl_key");
        exports.params.sandbox = qParams.get("sandbox") === "true";
        exports.params.project = qParams.get("project");
        exports.params.iteration = parseInt(qParams.get("iteration"), 10);
        exports.params.tag = qParams.get("tag");
    }
    else {
        console.log("missing query params");
        alert("This HIT is missing neccessary metadata, sorry for the inconvenience. Please contact the Requester as this is not intended to happen.");
    }
}
catch (e) {
    console.log(e);
    alert(e);
    alert("This HIT is broken, sorry for the inconvenience. Please contact the Requester as this is not intended to happen.");
}

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilReady = exports.isReady = void 0;
var console_wrapper_1 = require("./console_wrapper");
console_wrapper_1.log("ready loaded", 2 /* BASIC */);
var ready = false;
var resolveFunc;
var rejectFunc;
var readyPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
});
document.addEventListener("DOMContentLoaded", function () {
    console_wrapper_1.log("document is ready", 3 /* DETAILED */);
    ready = true;
    resolveFunc(true);
});
function isReady() {
    return ready;
}
exports.isReady = isReady;
function waitUntilReady() {
    return ready ? Promise.resolve(true) : readyPromise;
}
exports.waitUntilReady = waitUntilReady;

},{"./console_wrapper":16}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scenarios = void 0;
// tslint:disable-next-line: no-var-requires
exports.scenarios = require("./../../../../scenarios/scenarios.json");
window.scenarios = exports.scenarios;

},{"./../../../../scenarios/scenarios.json":1}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = void 0;
var document_1 = require("./../core/dom/document");
var Accordion = /** @class */ (function () {
    function Accordion(outer) {
        var _this = this;
        this.outer = outer;
        document_1.D.addEventListener(outer, "click", function () {
            /* Toggle between adding and removing the "active" class,
                      to highlight the button that controls the panel */
            _this.outer.classList.toggle("active");
            /* Toggle between hiding and showing the active panel */
            var panel = _this.outer.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            }
            else {
                panel.style.display = "block";
            }
        });
    }
    Accordion.setupAll = function () {
        Accordion.discardAll();
        var accordions = document_1.D.claz("accordion");
        for (var accIndex = 0; accIndex < accordions.length; ++accIndex) {
            var elem = accordions.item(accIndex);
            if (elem == null) {
                continue;
            }
            Accordion.accordions.push(new Accordion(elem));
        }
    };
    Accordion.discardAll = function () {
        Accordion.accordions = [];
    };
    Accordion.accordions = [];
    return Accordion;
}());
exports.Accordion = Accordion;

},{"./../core/dom/document":6}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomething = void 0;
function doSomething() {
    console.log("Put some code in here!");
}
exports.doSomething = doSomething;

},{}],25:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAll = exports.PutStudentPageLoadOperationsInsideThisStudentBody = void 0;
var html_loader_1 = require("../core/utils/html_loader");
var accordion_1 = require("./accordion");
var do_something_1 = require("./do-something");
var html_imports_1 = require("./html-imports");
var slideshow_1 = require("./slideshow");
// Put all function calls that need to be made on every page load inside the setupAll function body.
function PutStudentPageLoadOperationsInsideThisStudentBody() {
    // TODO: Put all operations that you want to happen on ever page load in this function.
    // For example you could write: Sticky.setup()
    do_something_1.doSomething();
}
exports.PutStudentPageLoadOperationsInsideThisStudentBody = PutStudentPageLoadOperationsInsideThisStudentBody;
function setupAll() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 100); })];
                case 1:
                    _a.sent();
                    console.log("reloading");
                    slideshow_1.Slideshow.setupAll();
                    accordion_1.Accordion.setupAll();
                    PutStudentPageLoadOperationsInsideThisStudentBody();
                    console.log("reloaded");
                    return [2 /*return*/];
            }
        });
    });
}
exports.setupAll = setupAll;
html_imports_1.itemsToCache.forEach(function (item) {
    html_loader_1.HTMLLoader.cacheHTML(item.name, item.content);
});
window.HTMLLoader = html_loader_1.HTMLLoader;
console.log("dynamic-dom loaded");
// Do not touch this line, needed to reinitialize code in the dynamic-dom.ts setupAll function
window.addEventListener("newPageLoad", function () { return setupAll(); });

},{"../core/utils/html_loader":18,"./accordion":23,"./do-something":24,"./html-imports":26,"./slideshow":29}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsToCache = void 0;
// An HTMLContent object should look like the following:
// {
//     name: 'footer',
//     content: require('./html/footer.html'),
// }
// Then you can reference that content in your html using the following tag with the corresponding name attribute.
// <ts-load data-name="header"></ts-load>
// You can specify as many as you want inside of the array and they will all be bundled up with your website.
// Make sure to make a corresponding html file in the html file folder for each element you specify.
exports.itemsToCache = [
    // Feel free to change the content inside any of the html files in the html file folder to suit your needs.
    {
        name: "header",
        content: require("./html/header.html"),
    },
    {
        name: "footer",
        content: require("./html/footer.html"),
    },
];

},{"./html/footer.html":27,"./html/header.html":28}],27:[function(require,module,exports){
module.exports = "<footer id=\"colophon\" class=\"footer\" role=\"contentinfo\">\n  <div class=\"container\">\n    <div class=\"footer-widgets\">\n      <aside class=\"widget site-contact\">\n        <h2 class=\"footer-widget-title\">Nursery School</h2>\n        <p>6926 Forest Park Parkway</p>\n        <p>St. Louis, MO 63130</p>\n        <p class=\"phone\">314-935-6689 <span>|</span> Fax: 314-935-7249</p>\n        <p>\n          <a href=\"files/mailto:nursery@wustl.edu\">nursery@wustl.edu</a>\n        </p>\n      </aside>\n\n      <div class=\"widget-wrapper\">\n        <aside id=\"text-4\" class=\"widget widget_text widget-count-2\">\n          <h2 class=\"footer-widget-title\">Hours of Operation</h2>\n          <div class=\"textwidget\">\n            <p>\n              Classes meet Mon. through Fri.<br />\n              Morning: 9-11:45 a.m.<br />\n              Afternoon: 12:30-3:15 p.m.<br />\n              Full day: 9 a.m.-3:15 p.m.\n            </p>\n          </div>\n        </aside>\n        <aside id=\"text-3\" class=\"widget widget_text widget-count-2\">\n          <h2 class=\"footer-widget-title\">Apply for the Nursery School</h2>\n          <div class=\"textwidget\">\n            <p>\n              Experience the innovative approach and dynamic teaching\n              environment of the Washington University Nursery School.\n            </p>\n            <a href=\"files/apply.html\">Register Now</a>\n          </div>\n        </aside>\n      </div>\n    </div>\n    <div class=\"site-info\">\n      <p class=\"footer-copyright\">©2019 Washington University in St. Louis</p>\n    </div>\n  </div>\n</footer>\n";

},{}],28:[function(require,module,exports){
module.exports = "<div id=\"wustl-branding\">\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    width=\"321\"\n    height=\"28\"\n    viewBox=\"0 0 321 28\"\n    class=\"washu-logo\"\n    aria-labelledby=\"title\"\n  >\n    <title id=\"title\">Washington University in St. Louis</title>\n    <path\n      fill=\"#FFF\"\n      d=\"M10.46 1.76c-.09 0-4.41.04-10.46-1.21V18c0 .27.01.47.01.47v.02c.04.81.28 1.45.77 2 .32.34.76.7 1.38 1.05.17.1.35.18.55.28.15.07.31.14.47.2.14.06.55.24.69.29l6.59 2.5 6.59-2.5c.15-.05.56-.24.69-.29.16-.07.32-.14.47-.2.19-.1.38-.18.55-.28.62-.35 1.06-.7 1.38-1.05.48-.55.73-1.19.77-2v-.02s0-.19.01-.47V.55C14.86 1.8 10.55 1.76 10.46 1.76z\"\n    ></path>\n    <path\n      fill=\"#007360\"\n      d=\"M10.46 2.8c-.09 0-4.03.04-9.56-1.1v15.95c0 .25.01.43.01.44v.02c.04.74.25 1.33.7 1.83.29.31.7.64 1.26.95.15.09.32.17.5.26.14.07.28.13.44.19.12.05.5.22.63.27l6.03 2.29 6.03-2.29c.13-.05.51-.22.63-.27.15-.06.3-.13.44-.19.18-.09.35-.17.5-.26.56-.31.97-.64 1.26-.95.44-.5.66-1.09.7-1.83v-.02s0-.18.01-.44V1.7c-5.55 1.14-9.5 1.1-9.58 1.1z\"\n    ></path>\n    <path\n      fill=\"#E1C4AC\"\n      d=\"M10.46 3.75c-.08 0-3.68.04-8.74-1.02v4.08c5.05 1.05 8.67 1.02 8.74 1.02s3.68.04 8.74-1.02V2.73c-5.06 1.05-8.66 1.02-8.74 1.02z\"\n    ></path>\n    <path\n      fill=\"#A51417\"\n      d=\"M10.46 7.83c-.08 0-3.68.04-8.74-1.02v9.05c5.05 1.05 8.67 1.02 8.74 1.02s3.68.04 8.74-1.02V6.82c-5.06 1.04-8.66 1.01-8.74 1.01z\"\n    ></path>\n    <path\n      fill=\"#E1C4AC\"\n      d=\"M1.72 17.72c.03.69.23 1.23.64 1.68.26.28.64.58 1.15.87.15.08.29.15.46.23.13.06.26.12.4.17.11.05.46.2.58.24L10.46 23l5.51-2.09c.12-.04.46-.2.58-.24.14-.06.27-.12.4-.17.16-.08.32-.15.46-.23.51-.29.88-.58 1.15-.87.41-.46.6-1 .64-1.68v-.02s0-.16.01-.4v-1.44c-5.05 1.05-8.67 1.02-8.74 1.02s-3.68.04-8.74-1.02v1.45c-.02.25-.01.41-.01.41z\"\n    ></path>\n    <path\n      fill=\"#007360\"\n      d=\"M4.8 3.69l.41 1.23 1.29.01-1.04.77.39 1.24-1.05-.76-1.05.76.39-1.24-1.04-.77 1.29-.01.41-1.23zm11.31 0l.42 1.23 1.29.01-1.04.77.39 1.24-1.06-.76-1.05.76.39-1.24-1.04-.77 1.29-.01.41-1.23zm-5.65.48l.42 1.23 1.29.01-1.04.77.39 1.24-1.06-.76-1.06.75.39-1.24-1.04-.77 1.3-.01.41-1.22zM10.46 17.21l-.46.45v1.22l.23.65v1.09h.45v-1.09l.23-.65v-1.22l-.45-.45zm.22 4.41v-.65h-.45v.65l-.23.42.46.56.46-.56-.24-.42zm.33-.65v.5l.29.31.51-.41v-.41h-.8zm.54-2.04l-.54.6v1.09h.44v-.65l.43-.46.55.36.35-.36v-.58h-1.23zm-1.64 2.04v.5l-.29.31-.52-.41v-.41h.81zm-.55-2.04l.54.6v1.09h-.43v-.65l-.43-.46-.55.36-.35-.36v-.58h1.22z\"\n    ></path>\n    <path\n      fill=\"#E1C4AC\"\n      d=\"M14.62 9.27v5.19h-3.49l-.25.21-.43.37-.43-.37-.25-.21H6.29V9.27l-.74.54v5.38h4.12l.37.31.43.38.43-.38.37-.31h4.12V9.81l-.77-.54z\"\n    ></path>\n    <path\n      fill=\"#E1C4AC\"\n      d=\"M11.02 8.83l-.14.11-.43.38-.43-.38-.12-.11H7.03v4.89h2.88l.2.17.35.31.36-.31.19-.17h2.88V8.83h-2.87zM16.11 10.35v3.31c.95-.14 1.98-.31 3.08-.54V9.81a50.5 50.5 0 0 1-3.08.54zm-11.31 0c-.95-.14-1.98-.31-3.08-.54v3.31c1.1.23 2.14.41 3.08.54v-3.31z\"\n    ></path>\n    <path\n      fill=\"#007360\"\n      d=\"M16.11 16.76l-.31.32v.86l.15.46v.77h.31v-.77l.16-.46v-.86l-.31-.32zm.16 3.09v-.45h-.31v.46l-.15.3.31.4.32-.4-.17-.31zm.23-.45v.35l.2.22.36-.28v-.29h-.56zm.38-1.43l-.38.43v.77h.31v-.46l.3-.33.38.25.24-.25v-.41h-.85zm-1.14 1.43v.35l-.21.22-.35-.28v-.29h.56zm-.39-1.43l.39.43v.77h-.31v-.46l-.3-.33-.39.25-.24-.25v-.41h.85zM4.8 16.76l-.32.32v.86l.16.46v.77h.31v-.77l.15-.46v-.86l-.3-.32zm.16 3.09v-.45h-.31v.46l-.16.3.32.4.31-.4-.16-.31zm.22-.45v.35l.21.22.35-.28v-.29h-.56zm.39-1.43l-.39.43v.77h.31v-.46l.3-.33.39.25.24-.25v-.41h-.85zM4.42 19.4v.35l-.2.22-.36-.28v-.29h.56zm-.38-1.43l.38.43v.77h-.31v-.46l-.3-.33-.38.25-.24-.25v-.41h.85z\"\n    ></path>\n    <g fill=\"#FFF\" class=\"washu-logo-text\">\n      <path\n        d=\"M232.47 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zm13.82 12.03v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.06 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 1.99 1.68v7.64c0 1.43-.7 1.55-1.21 1.68-.03 0-.06-.01-.1 0-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.29 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.31 0 1.15-.13 2.53-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06V13.1c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.26 0 .73-.2.45-.44-.68-.5-1.97.3-1.95-2.04zM48.91 2.4c.37-.05.55-.19.55-.19 0-.24-.05-.3-.39-.3-.65 0-1.05.11-1.69.11-.71 0-1.25-.08-1.85-.08-.34 0-.31.11-.31.3 0 .21.65.08 1.02.89.21.44.13 1.36-.08 1.9l-5.01 13.74-2.14-6.1-.83-2.23s-.13.06.46-1.79l1.17-3.52c.57-1.73 1.14-2.64 1.88-2.65.92-.02.92-.57.21-.57s-1.13.06-1.75.06c-.65 0-.99-.06-1.69-.06-.26 0-.55.08-.52.3.03.21.42.14.71.3.47.24.78 1.25.45 2.3l-1.38 4.42-1.58-4.13c-.31-.78-.73-2.52.03-2.67.73-.15.63-.52.18-.52-.86 0-1.32.11-2.15.11-.91 0-1.59-.11-2.45-.11-.18 0-.52.03-.42.38.05.21.49.14.76.3 1.05.68 1.25 1.55 1.62 2.52l2.3 6.48c.42 1.16.45.74.11 1.73l-2 5.5-4.95-14.11c-.39-1.06-.6-1.79.26-2.2.37-.19.47-.22.52-.3.05-.07.1-.32-.45-.3-.89.03-1.43.11-2.32.11-.94 0-1.59-.11-2.45-.11-.29 0-.34.14-.34.35 0 .33.71.11 1.31.81.34.38.99 1.66 1.14 2.12L32.8 22.3c.11.25.14.76.48.76.27 0 .33-.57.42-.79l3.13-8.59 3.05 8.16c.13.33.31 1.22.63 1.22.26 0 .36-.43.49-.83l5.9-16.87c.5-1.36 1.07-2.79 2.01-2.96zm65.46 6.71c-3.26 0-5.77 3.28-5.77 7.13 0 1.96.52 3.51 1.42 4.63-.31.21-.92.7-2.15.7-1.07 0-1.68-.64-1.74-2V11.2l3.38-.01c.22 0 .65-1.44.67-1.52.04-.18.1-.33.12-.46.04-.28-.17-.3-.37-.01-.15.15-.32.55-.99.55h-2.81c0-2.41.03-3.51-.35-3.51-.36 0-.3.1-.63 1.17-.44 1.44-1.79 2.23-2.63 2.68-.38.09-.81.12-1.29.01-.74-.16-1.6-1.06-3.83-1.06-2.38 0-4.46 1.95-4.46 4.55 0 1.4.62 2.76 1.71 3.48-.2.12-1.53 1.24-1.37 2.56 0 0-.03 1.37 1.05 1.82-.33.14-.67.36-.96.63-.7-.26-1.72-.06-1.72-1.91V15.1c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-.73.99-2.91 1.55-.13.03-.43.1-.44.34 0 .65 1.75-.71 1.76 1.68v7.64c0 1.65-1.31 1.65-1.54 1.67-.1 0-.19 0-.31.01-.55-.05-1.51-.3-1.51-1.34V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.78-.86 2.01-1.43 2.03-.69-.09-1.22-.37-1.22-1.41v-5.14c0-2.65-1.01-6.07-4.33-6.07-1.47 0-2.75.81-3.73 1.92V2.41c0-.31-.15-.48-.31-.49-.4-.03-1.07 1.19-2.96 1.63-.13.03-.62.07-.62.25 0 .65 1.97-.31 1.99 1.69V20.6c0 1.51-1.3 1.31-1.53 1.79-.04.21.08.31.26.31.42 0 1.55-.12 2.35-.12s2.1.12 2.64.12c.31 0 .44-.06.44-.44-.27-.52-2.28.28-2.28-2.37v-6.5c0-1.57 1.87-2.78 3.03-2.78.91 0 3.14.71 3.14 4.53v5.64c0 1.11-1.18 1.23-1.27 1.57 0 .24.15.34.42.34.28 0 1.11-.12 2.12-.12.56 0 1.07.03 1.5.06.23.05.57.05.99.05.28 0 1-.11 1.82-.11s1.48.07 1.99.11c.1.01.2.01.3.01.04 0 .08.01.12.01h.01c.32.01.61 0 .74 0 .31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c0 2-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c.93 0 1.53.07 1.91.1-.29.42-.48.9-.51 1.4-.14 2.51 2.93 3.41 5.51 3.37 5.12-.07 6.57-3.62 5.51-5.51-1.09-1.95-3.44-1.87-5.68-1.86-4.2.02-3.41-2.59-1.69-2.49.4.02.2.14 1.57.14 2.43 0 4.76-1.66 4.7-4.38-.01-.23.05-1.03-.53-2.14 1.14.01.69 0 2.41 0l-.01 7.63c0 3.45 1.64 4.03 2.87 4.03 1.74 0 3.01-1.15 3.24-1.68 1.03 1.1 2.46 1.68 4.12 1.68 3.19 0 5.6-2.93 5.6-6.78 0-5.8-3.65-6.96-5.61-6.96zM95.62 21.72c.21-.01.27.08 2.64.17 2.45.06 3.33.77 3.49 1.4.26 1.12-.53 3.52-4.05 3.29-2.22-.15-2.87-1.2-3.03-1.44-.84-1.16-.16-3.35.95-3.42zm2.01-4.57c-2.08 0-2.78-2-2.78-3.91 0-1.96.59-3.58 2.67-3.58 2.11 0 2.95 2.16 2.95 4.07.01 1.93-.87 3.42-2.84 3.42zm16.99 4.81c-3.03 0-4.22-3.76-4.22-6.82 0-2.65 1.04-5.1 3.57-5.1 3.08 0 4.19 3.29 4.19 6.51.01 3.87-1.36 5.41-3.54 5.41z\"\n      ></path>\n      <path\n        d=\"M131.11 20.19v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.07 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 2 1.68v7.64c0 2-1.35 1.52-1.66 2.04-.15.27.25.33.59.33.31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.26 0 .73-.2.44-.44-.65-.49-1.94.31-1.92-2.03zM77.41 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6.02.35.77 1.57 1.07 1.57zm-17.3 6.96c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.04 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.1-.74-2.55-.74-.11 0-.52-.01-.6-.02-.13 0-.28.02-.28.02-1.81-.03-3.5 1.11-3.45 3.53.05 2.21 2.64 3.47 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.61-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52 0 .51-.01.98-.01 1.38-.07.36-.2.7-.54.72-1.24.08-.94-1.9-.94-2.95v-6.43c-.06-1.97-1.54-3.25-3.8-3.25-3.09 0-5.31 3.81-4.25 5 .25.28 1.26-.8 1.32-.86s.08-.13.08-.13c-.01-1.3.97-2.95 2.37-3.09 1.6-.15 2.4 1.04 2.4 2.65v2.09c-6.06 1.21-6.93 3.22-6.93 4.87 0 2.21 1.55 3.2 3.23 3.2 1.45 0 2.88-.69 3.96-1.8.34 1.03 1.01 1.65 2.02 1.62.35-.01.41.09 1.46-.37.37-.1.35-.09.77-.01.56.19 1.32.57 2.66.57 2.03.03 3.85-1.85 3.85-4.17 0-1.5-.43-2.41-2.39-3.63zm-8.43 4.32c0 1.65-1.68 2.52-2.6 2.52-1.38 0-2.33-.89-2.33-2.66 0-2.73 3.28-3.23 4.94-3.67-.01-.01-.01 3.81-.01 3.81zm219.99.19c-.31 0-1.07 1.29-1.07 1.63 0 .34.77 1.6 1.07 1.6.33 0 1.07-1.23 1.07-1.6s-.73-1.63-1.07-1.63zm33.71 1.12V9.92c0-.61-.34-.77-.44-.77-.39 0-.61.1-.88.16-.27.1-.58.23-1.29.23-.13 0-.79-.12-.76.25.04.37 1.57.15 1.58 1.23v7.83c-.12 1.37-1.27 2.88-2.66 2.88-.32 0-2.39-.22-2.37-3.65V9.92c0-.61-.34-.77-.44-.77-.39 0-.61.1-.88.16-.27.1-.61.22-1.32.19-.38-.02-.79-.07-.73.29.06.32 1.59 0 1.59 1.23v7.51c0 2.74 1.61 4.32 3.56 4.32 1.3 0 2.49-.28 3.24-1.8h.05v1.32c0 .13.03.48.22.48.37 0 .56-.3.83-.4.29-.07.37-.33 1.28-.42.39-.04.82-.24.82-.5-.11-.53-1.4.06-1.4-.78zM290.09 9.11c-3.26 0-5.77 3.28-5.77 7.13 0 1.73.42 3.15 1.13 4.23-.79.57-2.23 1.1-4.96 1.1-2.13 0-1.93-.74-1.93-2.55V4.57c0-2.66 1.99-1.89 2.03-2.37.03-.34-.28-.26-.61-.26-.38 0-1.07.15-2.52.15-1.25 0-2.34-.12-2.88-.12-.33 0-.63.1-.52.35.25.57 2.14.05 2.14 1.65v15.1c0 1.44.21 2.36-.45 2.73-.81.49-1.76.51-1.68.83.05.19.45.2.68.2 1.02 0 2.42-.13 3.44-.15 1.94-.06 3.86.13 5.79.13 1.12 0 1.4-.22 2.22-1.33.01-.02.02-.03.04-.05 1.01.94 2.34 1.44 3.87 1.44 3.19 0 5.6-2.93 5.6-6.78.01-5.82-3.65-6.98-5.62-6.98zm.26 12.85c-3.03 0-4.22-3.76-4.22-6.82 0-2.65 1.04-5.1 3.57-5.1 3.08 0 4.19 3.29 4.19 6.51.01 3.87-1.36 5.41-3.54 5.41zm-32.03-10.49c-.75-.37-1.85-1.04-2.39-1.36-2.37-1.37-3.3-2.26-3.37-3.52-.12-2.21 2.04-3.52 3.58-3.35 1.96 0 3.57 1.19 4.24 3.73.07.27.31.89.56.89.22 0 .26-.2.24-.45l-.33-4.02c-.02-.33-.14-.42-.27-.42-.22 0-.36.33-.56.33-.31 0-1.1-1.11-3.8-1.09-.18-.01-.43.02-.43.02-2.63-.05-5.1 1.7-5.02 5.4.07 3.37 3.85 5.3 5.89 6.59 1.51.9 3.09 2.34 3.04 3.95-.08 2.47-1.63 4.08-3.58 3.94-4.59-.08-3.96-6.13-4.78-6.13-.56 0-.45 1.52-.46 2.32 0 1.92-.08 3.49.14 3.77.07.09.29.05.74.05.9 0 2 1.05 4.65 1.05 2.95.05 5.38-2.69 5.38-6.25-.01-2.19-.62-3.58-3.47-5.45zm51.69-3.31c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zM312.64 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.33 0 .76-.8.07-.69zm5.98-6.88c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.05 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.11-.74-2.55-.74-.11 0-.52-.01-.6-.01-.13 0-.28.01-.28.01-1.81-.03-3.5 1.11-3.44 3.53.05 2.21 2.64 3.46 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.61-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52-.01 1.25-.06 2.28.1 2.46.05.06.2.03.5.03.62 0 1.38.69 3.19.69 2.03.03 3.85-1.85 3.85-4.17-.01-1.48-.43-2.39-2.39-3.6zm-48.73 5.66c-.26.13-.85.77-2.28.77-1.07 0-1.68-.64-1.74-2v-8.82l3.38-.01c.22 0 .65-1.44.67-1.52.04-.18.1-.33.12-.46.04-.28-.17-.3-.37-.01-.15.15-.32.55-.99.55h-2.81c0-2.41.03-3.04-.35-3.04-.36 0-.3.1-.63 1.17-.54 1.79-2.52 2.58-3.15 2.97-.15.08-.15.11-.15.19-.01.23.75.14 2.31.17l-.01 8.07c0 3.45 1.64 4.03 2.87 4.03 1.87 0 3.21-1.34 3.28-1.8.03-.25 0-.28-.15-.26zm-81.32-1.09c-.57 0-1.42 1.62-3.66 1.62-1.58 0-4.17-1.53-4.17-6.66h6.9c.6 0 .88.03.88-.52 0-1.25-1.4-4.95-4.59-4.95-3.24 0-5.08 3.33-5.08 7.31 0 2.05 1.35 6.38 5.24 6.38 2.33 0 4.59-2.24 4.59-2.95-.01-.11-.01-.23-.11-.23zm-5.08-9.81c1.42 0 2.88 1.56 2.88 3.3 0 .46-.15.62-.52.62h-5.11c0-1.71 1.13-3.92 2.75-3.92zm-31.7-7.33c.1-.16-.25-.24-.37-.24-.42 0-1.37.11-1.8.11-.89 0-1.64-.09-2.53-.09-.07 0-.46.05-.46.18-.01.63 2.13-.11 2.13 2.6v10.57c0 3.13-.99 6.41-5.29 6.41-3.09 0-4.76-1.94-4.76-6.17V4.41c0-1.91 1.49-1.49 1.52-1.92.03-.41-1.33-.16-1.43-.16-.71 0-1.21.08-1.95.08-.62 0-1.37-.1-1.97-.1-.12 0-.53-.02-.61.15-.23.56 1.91.26 1.91 1.83v10.92c0 4.08 1.14 8.08 7.17 7.97 7.14-.12 7.01-6.54 7.01-7.83V5.12c.01-2.43 1.2-2.2 1.43-2.57zm28.19 7.24c.17-.2.22-.53-.57-.46-.45 0-.77.08-1.22.08-.57 0-.68-.02-1.22-.04-.68-.02-.86.05-.82.25.12.6 1.55.01 1.36 1.8-.16 1.5-.65 2.79-1.14 4.07l-1.73 4.62-2.54-7.7c-.31-.96-.45-1.47-.45-1.57 0-.96 1.16-.75 1.42-1.14.16-.26-.17-.4-.54-.4-.31 0-.67.11-1.63.13-.79.02-1.36.02-1.7-.05-.89-.16-.82.33-.51.48s.46.01.91 1.36l3.91 11.06c.08.22.18.77.52.77.39 0 .39-.39.88-1.69 0 0 3.75-10.48 4-10.86.51-.74.89-.5 1.07-.71zm14.47-.5c-1.07 0-1.8 1.28-2.33 2.16h-.05V9.53c0-.3-.15-.48-.3-.48-.41 0-.72.81-2.87 1.33-.13.03-.48.1-.48.28 0 .64 1.82-.19 1.82 1.93v8.07c0 1.25-1.29 1.12-1.29 1.77 0 .18.08.27.28.27.17 0 .63-.12 2.32-.12 1.41 0 2.02.12 2.37.12.28 0 .41-.06.41-.34 0-.98-2.25.48-2.25-2.34v-6.88c0-.4.6-1.8 1.64-1.8.91 0 1.02.7 1.5.7.3 0 .91-.91.91-1.38-.01-.58-1.16-1.37-1.68-1.37zm32.55.1c-.27 0-.96.04-1.59.04-.76 0-1.13-.09-1.45-.09-.48 0-.96 0-.87.32.1.36 1.73.23 1.73 2.01 0 .23 0 .52-.33 1.71l-2.08 6.63-2.9-8.15s-.14-.26-.14-.79c0-1.32 1.54-1.17 1.6-1.41.05-.19-.21-.4-.62-.4h-3.63c-.02 0-.03.01-.05.01h-2.81c0-2.41.03-3.04-.35-3.04-.36 0-.3.1-.63 1.17-.54 1.79-2.52 2.58-3.15 2.97-.15.08-.15.11-.15.19-.01.22.76.14 2.31.17l-.01 8.07c0 3.45 1.64 4.03 2.87 4.03 1.87 0 3.21-1.33 3.28-1.8 0-.27-.04-.29-.18-.27-.26.13-.85.77-2.28.77-1.07 0-1.68-.64-1.74-2V10.7s2.5-.01 3.21-.01c.04.06.08.13.1.19l2.99 8.45c.24.69.39.92.68 2.14.19.79.12 1.51.12 1.51-.29 1.27-1.07 1.99-2.26 4.34-.12.22 1.71-.02 1.81-.05.15-.05.13-.09.31-.42l1.32-3.93 3.69-11.34c.54-1.98 1.39-1.62 1.53-1.89.12-.13 0-.3-.33-.3z\"\n      ></path>\n      <path\n        d=\"M222.22 22.76l-.07.19V23l.07-.24zm-14.74-14.6c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zM210.11 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.33 0 .76-.8.07-.69zM166.52 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.77 1.57 1.07 1.57zM169.17 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04h-.17c-.54-.1-1.06-.32-1.05-1.79v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.07 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 2 1.68v7.64c0 2-1.35 1.52-1.66 2.04-.15.27.25.33.59.33.31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.04 0 .09-.01.13-.01.11 0 .21.01.34.01.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.34.02.75-.78.08-.67zm32.72-6.89c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.05 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.1-.74-2.55-.74-.11 0-.52-.01-.6-.02-.13 0-.28.02-.28.02-1.81-.03-3.5 1.11-3.45 3.53.05 2.21 2.64 3.46 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.62-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52 0 1.25-.06 2.28.1 2.46.05.06.2.03.5.03.62 0 1.38.69 3.19.69 2.03.03 3.85-1.85 3.85-4.17 0-1.47-.42-2.38-2.38-3.6z\"\n      ></path>\n    </g>\n  </svg>\n</div>\n<header role=\"banner\">\n  <div class=\"container\">\n    <a class=\"site-title\" href=\"files/index.html\">Nursery School</a>\n    <a class=\"site-title\" id=\"apply\" href=\"files/apply.html\">Apply</a>\n  </div>\n  <div id=\"main-menu-container\">\n    <div class=\"container\">\n        <div class=\"navbar\">\n            <div class=\"dropdown\">\n                <button class=\"dropbtn\">\n                    <a id=\"about\" href=\"files/about.html\">About </a>\n                </button>\n                <div class=\"dropdown-content\">\n                    <a id=\"curriculum-overview\" href=\"files/curriculum_overview.html\">Curriculum Overview</a>\n                    <a id=\"parent-handbook\" href=\"files/parent_handbook.html\">Parent Handbook</a>\n                    <a id=\"tuition\" href=\"files/tuition.html\">Tuition</a>\n                </div>\n            </div>\n            <div class=\"dropdown\">\n                <button class=\"dropbtn\">\n                    <a id=\"classrooms\" href=\"files/classrooms.html\">Classrooms </a>\n                </button>\n                <div class=\"dropdown-content\">\n                    <a id=\"teddy-bears\" href=\"files/teddy_bears.html\">Teddy Bears</a>\n                    <a id=\"panda-bears\" href=\"files/panda_bears.html\">Panda Bears</a>\n                    <a id=\"bear-cubs\" href=\"files/bear_cubs.html\">Bear Cubs</a>\n                    <a id=\"big-bears\" href=\"files/big_bears.html\">Big Bears</a>\n                    <a id=\"sun-bears\" href=\"files/sun_bears.html\">Sun Bears</a>\n                    <a id=\"bear-tracks\" href=\"files/bear_tracks.html\">Bear Tracks</a>\n                    <a id=\"enrichment-program\" href=\"files/enrichment_programs.html\">Enrichment Program</a>\n                </div>\n            </div>\n            <a id=\"staff\" href=\"files/staff.html\">Staff</a>\n            <a id=\"calendar\" href=\"files/calendar.html\">Calendar</a>\n            <div class=\"dropdown\">\n                <button class=\"dropbtn\">\n                    <a id=\"get-involved\" href=\"files/get_involved.html\">Get Involved</a>\n                </button>\n                <div class=\"dropdown-content\">\n                    <a id=\"nursery-school-merchandise\"\n                       href=\"files/nursery_school_merchandise.html\">Nursery School Merchandise</a>\n                    <a id=\"parent-association\" href=\"files/parent_association.html\">Parent Association</a>\n                </div>\n            </div>\n            <a id=\"parent-resources\" href=\"files/parent_resources.html\">Parent Resources</a>\n\n            <a id=\"summer-camp\" href=\"files/summer_camp.html\">Summer Camp</a>\n        </div>\n    </div>\n  </div>\n</header>\n";

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slideshow = void 0;
var document_1 = require("./../core/dom/document");
var Slideshow = /** @class */ (function () {
    function Slideshow(outer) {
        var _this = this;
        this.outer = outer;
        this.slideIndex = 0;
        this.slideCount = 0;
        this.slides = [];
        this.dots = [];
        document_1.D.eachRecur(this.outer, function (elem) {
            var cList = elem.classList;
            if (cList.contains("prev-slideshow-button")) {
                document_1.D.addEventListener(elem, "click", function () { return _this.minusSlide(1); });
            }
            else if (cList.contains("next-slideshow-button")) {
                document_1.D.addEventListener(elem, "click", function () { return _this.plusSlide(1); });
            }
            else if (cList.contains("slideshow-entry")) {
                _this.slides.push(elem);
            }
            else if (cList.contains("slideshow-dot")) {
                _this.dots.push(elem);
            }
        });
        var _loop_1 = function (i) {
            document_1.D.addEventListener(this_1.dots[i], "click", function () { return _this.showSlide(i); });
        };
        var this_1 = this;
        for (var i = 0; i < this.dots.length; ++i) {
            _loop_1(i);
        }
        this.slideCount = this.slides.length;
        this.showSlide(this.slideIndex);
    }
    Slideshow.setupAll = function () {
        Slideshow.discardAll();
        var slideshows = document_1.D.claz("slideshow");
        for (var ssIndex = 0; ssIndex < slideshows.length; ++ssIndex) {
            var elem = slideshows.item(ssIndex);
            if (elem == null) {
                continue;
            }
            Slideshow.slideshows.push(new Slideshow(elem));
        }
    };
    Slideshow.discardAll = function () {
        Slideshow.slideshows = [];
    };
    Slideshow.prototype.plusSlide = function (n) {
        this.showSlide((this.slideIndex += n));
    };
    Slideshow.prototype.minusSlide = function (n) {
        this.showSlide((this.slideIndex -= n));
    };
    Slideshow.prototype.showSlide = function (index) {
        this.slideIndex = index % this.slideCount;
        this.slideIndex = Math.max(this.slideIndex, -1 * this.slideIndex);
        for (var i = 0; i < this.slides.length; ++i) {
            this.slides[i].style.display = "none";
        }
        for (var i = 0; i < this.dots.length; i++) {
            this.dots[i].classList.remove("active");
        }
        this.slides[this.slideIndex].style.display = "block";
        this.dots[this.slideIndex].classList.add("active");
    };
    Slideshow.slideshows = [];
    return Slideshow;
}());
exports.Slideshow = Slideshow;

},{"./../core/dom/document":6}],30:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var q_params_1 = require("../core/utils/q_params");
var data_1 = require("./../core/data-log/data");
var document_1 = require("./../core/dom/document");
var elements_1 = require("./../core/dom/elements");
var scroll_1 = require("./../core/dom/scroll");
var history_1 = require("./../core/router/history");
var router_1 = require("./../core/router/router");
var tracker_1 = require("./../core/tracker/tracker");
var html_loader_1 = require("./../core/utils/html_loader");
var id_generator_1 = require("./../core/utils/id_generator");
var ready_1 = require("./../core/utils/ready");
var scenarios_1 = require("./../core/utils/scenarios");
var setup = function () { return __awaiter(void 0, void 0, void 0, function () {
    var scenario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ready_1.waitUntilReady()];
            case 1:
                _a.sent();
                scenario = scenarios_1.scenarios.find(function (scen) { return scen.tag === q_params_1.params.tag; });
                if (!q_params_1.params.sandbox) {
                    if (scenario === null || scenario === undefined) {
                        alert("This HIT is broken and cannot be completed at this time.");
                    }
                    else {
                        tracker_1.Tracker.loadScenario(scenario);
                    }
                }
                tracker_1.Tracker.start({
                    keyPrefix: "information-foraging",
                    bucketName: "cse-256-log",
                    allowSubmission: {
                        allow: function () {
                            try {
                                var textArea = document_1.D.id("text-area");
                                console.log(textArea.value);
                                if (textArea.value === "") {
                                    return "You must fill out the text box to turn this HIT in.";
                                }
                                else {
                                    return null;
                                }
                            }
                            catch (error) {
                                console.log(error);
                                return "There was an error fill out the form and try again.";
                            }
                        },
                        preSubmit: function () {
                            data_1.data.data.response = document_1.D.id("text-area").value;
                            return;
                        },
                    },
                    debugLevel: 1 /* NONE */,
                    setup: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var sElem;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        // configure router
                                        router_1.Router.defaultAllowancesOn();
                                        router_1.Router.configure([
                                            {
                                                mode: 2 /* STANDARD_ALLOWANCES */,
                                                module: "A" /* A */,
                                            },
                                            { mode: 0 /* OFF */, module: "FORM" /* FORM */ },
                                            {
                                                mode: 2 /* STANDARD_ALLOWANCES */,
                                                module: "IMG" /* IMG */,
                                            },
                                        ], "files/");
                                        history_1.History.setup(window.location.href, { wrapper: true });
                                        // configure html loader post operation
                                        html_loader_1.HTMLLoader.finish();
                                        html_loader_1.HTMLLoader.registerPostLoadFunc(function () {
                                            id_generator_1.IDGenerator.reset();
                                            id_generator_1.IDGenerator.attachIdsToAllElements();
                                            router_1.Router.setup(elements_1.Elements.htmlLoc);
                                            scroll_1.Scroll.promise(0);
                                        });
                                        // configure listeners on html loc
                                        document_1.D.addEventListener(elements_1.Elements.htmlLoc, "click" /* CLICK */, function (e) {
                                            var ev = e;
                                            var obj = {
                                                x: ev.clientX,
                                                y: ev.clientY,
                                                id: ev.target.id,
                                            };
                                            tracker_1.Tracker.getEventDispatchFunc("click" /* CLICK */)(obj);
                                        });
                                        document_1.D.addEventListener(elements_1.Elements.document, "keypress", function (e) {
                                            var ev = e;
                                            var obj = {
                                                key: ev.key,
                                                id: ev.srcElement.id,
                                            };
                                            tracker_1.Tracker.getEventDispatchFunc("button" /* BUTTON */)(obj);
                                        });
                                        sElem = document.scrollingElement;
                                        document.addEventListener("scroll", function (e) {
                                            var dx = sElem.scrollLeft;
                                            var dy = sElem.scrollTop;
                                            var dtime = new Date().getTime();
                                            if (Math.abs(tracker_1.Tracker.lastPos.x - dx) > 10 ||
                                                (Math.abs(tracker_1.Tracker.lastPos.y - dy) > 10 &&
                                                    dtime - tracker_1.Tracker.lastPos.time > 100)) {
                                                tracker_1.Tracker.lastPos.x = dx;
                                                tracker_1.Tracker.lastPos.y = dy;
                                                tracker_1.Tracker.lastPos.time = dtime;
                                                var obj = { x: dx, y: dy };
                                                tracker_1.Tracker.getEventDispatchFunc("scroll" /* SCROLL */)(obj);
                                            }
                                        });
                                        // configure tracked events
                                        tracker_1.Tracker.registerEvent("history" /* HISTORY */);
                                        tracker_1.Tracker.registerEvent("button" /* BUTTON */);
                                        tracker_1.Tracker.registerEvent("click" /* CLICK */);
                                        tracker_1.Tracker.registerEvent("scroll" /* SCROLL */);
                                        // load first page
                                        return [4 /*yield*/, router_1.Router.load("files/index.html")];
                                    case 1:
                                        // load first page
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    },
                });
                return [2 /*return*/];
        }
    });
}); };
setup();

},{"../core/utils/q_params":20,"./../core/data-log/data":2,"./../core/dom/document":6,"./../core/dom/elements":7,"./../core/dom/scroll":10,"./../core/router/history":13,"./../core/router/router":14,"./../core/tracker/tracker":15,"./../core/utils/html_loader":18,"./../core/utils/id_generator":19,"./../core/utils/ready":21,"./../core/utils/scenarios":22}]},{},[25,30])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY2VuYXJpb3Mvc2NlbmFyaW9zLmpzb24iLCJzY3JpcHRzL3RzL2NvcmUvZGF0YS1sb2cvZGF0YS50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9ldmVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9yZWNlaXZlci50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vYmFubmVyLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9kb2N1bWVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vZWxlbWVudHMudHMiLCJzY3JpcHRzL3RzL2NvcmUvZG9tL2h0bWxfbG9jLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9tb2RhbC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vc2Nyb2xsLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9zdWJtaXRfZm9ybS50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vdHJhY2tlcl9lbGVtcy50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvaGlzdG9yeS50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvcm91dGVyLnRzIiwic2NyaXB0cy90cy9jb3JlL3RyYWNrZXIvdHJhY2tlci50cyIsInNjcmlwdHMvdHMvY29yZS91dGlscy9jb25zb2xlX3dyYXBwZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvZnVuY3MudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaHRtbF9sb2FkZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaWRfZ2VuZXJhdG9yLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3FfcGFyYW1zLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3JlYWR5LnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3NjZW5hcmlvcy50cyIsInNjcmlwdHMvdHMvZHluYW1pYy1kb20vYWNjb3JkaW9uLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9kby1zb21ldGhpbmcuanMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2R5bmFtaWMtZG9tLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9odG1sLWltcG9ydHMudHMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvZm9vdGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvaGVhZGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL3NsaWRlc2hvdy50cyIsInNjcmlwdHMvdHMvdHJhY2tlci90cmFja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDdkVBLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFTNUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUM7QUFFaEQsUUFBQSxPQUFPLEdBQWlCO0lBQ25DLEdBQUcsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFO0lBQ3pCLFlBQVksRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUMzQyxLQUFLLEVBQUUsU0FB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LENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztnREFDN0IsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztnREFDN0IsaUJBQU8sQ0FBQyxvQkFBb0IsdUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7NkNBQ3REO3dDQUNILENBQUMsQ0FBQyxDQUFDO3dDQUNILDJCQUEyQjt3Q0FDM0IsaUJBQU8sQ0FBQyxhQUFhLHlCQUFvQixDQUFDO3dDQUMxQyxpQkFBTyxDQUFDLGFBQWEsdUJBQW1CLENBQUM7d0NBQ3pDLGlCQUFPLENBQUMsYUFBYSxxQkFBa0IsQ0FBQzt3Q0FDeEMsaUJBQU8sQ0FBQyxhQUFhLHVCQUFtQixDQUFDO3dDQUN6QyxrQkFBa0I7d0NBQ2xCLHFCQUFNLGVBQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBQTs7d0NBRHJDLGtCQUFrQjt3Q0FDbEIsU0FBcUMsQ0FBQzs7Ozs7cUJBQ3ZDO2lCQUNGLENBQUMsQ0FBQzs7OztLQUNKLENBQUM7QUFFRixLQUFLLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIm1vZHVsZS5leHBvcnRzPVtcbiAge1xuICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgYSBwYXJlbnQgY29uc2lkZXJpbmcgc2VuZGluZyB5b3VyIGNoaWxkIHRvIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC4gWW914oCZdmUgbGVhcm5lZCB0aGF0IHRoZSBjdXJyaWN1bHVtIGlzIHBsYXktYmFzZWQgYW5kIHlvdSB3YW50IHRvIGtub3cgaG93IGxlYXJuaW5nIGlzIGluY29ycG9yYXRlZCBpbnRvIGEgcGxheS1iYXNlZCBjb250ZXh0LiBZb3UgaGF2ZSBzb21lIGlkZWFzIGFib3V0IGhvdyBsYW5ndWFnZSBsZWFybmluZyBtaWdodCBoYXBwZW4sIGJ1dCBhcmUgbGVzcyBzdXJlIGFib3V0IG1hdGguXCIsXG4gICAgXCJxdWVzdGlvblwiOiBcIkZpbmQgc29tZSBleGFtcGxlcyBvZiBob3cgbWF0aCBsZWFybmluZyBpcyBpbmNvcnBvcmF0ZWQgYXQgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLlwiLFxuICAgIFwidGFnXCI6IFwibWF0aFwiXG4gIH0sXG4gIHtcbiAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGludmVzdGlnYXRpbmcgcHJlLXNjaG9vbCBvcHRpb25zIGZvciB5b3VyIDQgeWVhciBvbGQuIEJvdGggeW91IGFuZCB5b3VyIHNwb3VzZSB3b3JrLCBzbyB5b3UgbmVlZCB0byBmdWxseSB1bmRlcnN0YW5kIHdoYXQgc2NoZWR1bGluZyBjb25zdHJhaW50cyBlYWNoIG9wdGlvbiBpbnZvbHZlcy4gT25lIG9mIHlvdXIgc2Nob29scyBvZiBpbnRlcmVzdCBpcyB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLlwiLFxuICAgIFwicXVlc3Rpb25cIjogXCJXaGVuIGRvZXMgc2Nob29sIHN0YXJ0IGFuZCBlbmQgZWFjaCBkYXk/IFdoYXQgaXMgdGhlIGxvbmdlc3QgcGVyaW9kIG9mIHRpbWUgdGhhdCB5b3VyIGNoaWxkIGNhbiBiZSB0aGVyZT9cIixcbiAgICBcInRhZ1wiOiBcInNjaG9vbF9kYXlcIlxuICB9LFxuICB7XG4gICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBpbnZlc3RpZ2F0aW5nIHByZS1zY2hvb2wgb3B0aW9ucyBmb3IgeW91ciAzLjUgeWVhciBvbGQuIFlvdeKAmXZlIGJlZW4gdG9sZCB0aGF0IG9uZSBvZiB0aGUgaGFsbG1hcmtzIG9mIGEgZ29vZCBwcm9ncmFtIGlzIHRlYWNoZXJzIHdobyBoYXZlIGJlZW4gdGhlcmUgZm9yIGEgbG9uZyB0aW1lLiBZb3Ugd2FudCB5b3VyIGNoaWxkIHRvIGF0dGVuZCBpbiB0aGUgbW9ybmluZ3Mgb25seS5cIixcbiAgICBcInF1ZXN0aW9uXCI6IFwiV2hpY2ggdGVhY2hlcnMgd291bGQgeW91ciBjaGlsZCBoYXZlIGFuZCBob3cgbG9uZyBoYXZlIHRoZXkgYmVlbiBhdCB0aGUgc2Nob29sP1wiLFxuICAgIFwidGFnXCI6IFwidGVhY2hlcl90ZW51cmVcIlxuICB9LFxuICB7XG4gICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBzdGFydGluZyB0byBsb29rIGF0IHN1bW1lciBjYW1wIG9wdGlvbnMgYW5kIGhhdmUgaGVhcmQgZ29vZCB0aGluZ3MgYWJvdXQgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sIGZvciB5b3VuZyBjaGlsZHJlbi5cIixcbiAgICBcInF1ZXN0aW9uXCI6IFwiV2hhdCBhcmUgdGhlIGRhaWx5IGNhbXAgaG91cnM/IEFyZSB0aGVyZSBhbnkgZXh0ZW5kZWQgZGF5IG9wcG9ydHVuaXRpZXM/XCIsXG4gICAgXCJ0YWdcIjogXCJzdW1tZXJfY2FtcFwiXG4gIH0sXG4gIHtcbiAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGludmVzdGlnYXRpbmcgcHJlLXNjaG9vbCBvcHRpb25zIGZvciB5b3VyIHNwaXJpdGVkIDMgeWVhciBvbGQgYW5kIHdhbnQgdG8gdW5kZXJzdGFuZCB0aGVpciBhcHByb2FjaCB0byBkaXNjaXBsaW5lLlwiLFxuICAgIFwicXVlc3Rpb25cIjogXCJIb3cgZG8gdGVhY2hlcnMgYXQgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IGFwcHJvYWNoIGRpc2NpcGxpbmU/XCIsXG4gICAgXCJ0YWdcIjogXCJkaXNjaXBsaW5lXCJcbiAgfSxcbiAge1xuICAgIFwiY29udGV4dFwiOiBcIllvdXIgZGF1Z2h0ZXIgaXMgaW4gdGhlIFRlZGR5IEJlYXIgY2xhc3MgYXQgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLiBTaGUgY2FtZSBob21lIHRoaXMgd2VlayBzaW5naW5nIGEgc29uZyBpbiBTcGFuaXNoIGFib3V0IHNoYXBlcywgYnV0IHlvdSBhcmUgcHJldHR5IHN1cmUgdGhhdCBzaGUgaGFzIHNvbWUgb2YgdGhlIHdvcmRzIHdyb25nLlwiLFxuICAgIFwicXVlc3Rpb25cIjogXCJXaGF0IGFyZSB0aGUgY29ycmVjdCBseXJpY3M/XCIsXG4gICAgXCJ0YWdcIjogXCJzcGFuaXNoX3NvbmdcIlxuICB9LFxuICB7XG4gICAgXCJjb250ZXh0XCI6IFwiSXQgaXMgbWlkLURlY2VtYmVyIGFuZCB5b3UgYXJlIHRoaW5raW5nIGFib3V0IHRoaW5ncyB0byBkbyBvdmVyIHlvdXIgZGF1Z2h0ZXIncyB1cGNvbWluZyBzY2hvb2wgYnJlYWsuIFNoZSBpcyAzIHllYXJzIG9sZCBhbmQgYXR0ZW5kcyB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sIGFuZCBpcyBpbiB0aGUgVGVkZHkgQmVhciBjbGFzc3Jvb20uIFlvdSBhcmUgcGxhbm5pbmcgYSB0cmlwIHRvIHRoZSBsaWJyYXJ5IGFuZCB3YW50IHRvIGNoZWNrIG91dCBzb21lIGJvb2tzIHRoYXQgY29ubmVjdCB3aXRoIHNvbWV0aGluZyBzaGUgaXMgZG9pbmcgaW4gc2Nob29sLlwiLFxuICAgIFwicXVlc3Rpb25cIjogXCJXaGF0IGFyZSBzb21lIHBvdGVudGlhbCBib29rIHRvcGljcyB0aGF0IHJlbGF0ZSB0byBzb21ldGhpbmcgdGhhdCBpcyBnb2luZyBvbiBpbiBoZXIgY2xhc3Nyb29tIHRoaXMgd2Vlaz9cIixcbiAgICBcInRhZ1wiOiBcImJvb2tzXCJcbiAgfSxcbiAge1xuICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgYSBwYXJlbnQgd2l0aCBhIGNoaWxkIHdobyBoYXMganVzdCBiZWVuIGFjY2VwdGVkIHRvIGF0dGVuZCBhcyBhIGZ1bGwgdGltZSBzdHVkZW50IGF0IHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuIFlvdSB3YW50IHRvIGFjY2VwdCB0aGUgb2ZmZXIgb2YgYWRtaXNzaW9uLlwiLFxuICAgIFwicXVlc3Rpb25cIjogXCJGaWd1cmUgb3V0IHdoYXQgeW91IG5lZWQgdG8gZG8gYXQgdGhpcyB0aW1lIHRvIGZpbmFsaXplIHlvdXIgY2hpbGTigJlzIHBsYWNlIGF0IHRoZSBzY2hvb2wuXCIsXG4gICAgXCJ0YWdcIjogXCJhZG1pc3Npb25fMlwiXG4gIH0sXG4gIHtcbiAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGEgcGFyZW50IHdpdGggYSBjaGlsZCB3aG8gaGFzIGp1c3QgYmVlbiBhY2NlcHRlZCB0byBhdHRlbmQgYXMgYSBmdWxsIHRpbWUgc3R1ZGVudCBhdCB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLiBZb3UgbmVlZCB0byBwYXkgb25lIG1vbnRoIG9mIHR1aXRpb24gYXMgYSBkZXBvc2l0LlwiLFxuICAgIFwicXVlc3Rpb25cIjogXCJGaW5kIG91dCBob3cgbXVjaCBvbmUgbW9udGggb2YgdHVpdGlvbiBpcyBhbmQgd2hldGhlciBvciBub3QgaXQgaXMgcG9zc2libGUgdG8gcGF5IG9ubGluZS5cIixcbiAgICBcInRhZ1wiOiBcImRlcG9zaXRcIlxuICB9LFxuICB7XG4gICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBtb3ZpbmcgdG8gU3QuIExvdWlzIGZyb20gQmVpamluZyBhbmQgbG9va2luZyBmb3IgYSBQcmUtSyBwcm9ncmFtIGZvciB5b3VyIGRhdWdodGVyLCBhZ2UgNS4gU2hlIGlzIHZlcnkgY2xvc2UgdG8gaGVyIGZyaWVuZHMgYW5kIHlvdSBhcmUgd29ycmllZCB0aGF0IHRoZSBtb3ZlIG1pZ2h0IGJlIGhhcmQgb24gaGVyLiBTaGUgbWF5IG5lZWQgc29tZSBleHRyYSBzdXBwb3J0IGZyb20gaGVyIG5ldyB0ZWFjaGVycyBsZWFybmluZyBFbmdsaXNoLCBhZGFwdGluZyB0byBBbWVyaWNhbiBjdWx0dXJlLCBhbmQgbWFraW5nIG5ldyBmcmllbmRzLlwiLFxuICAgIFwicXVlc3Rpb25cIjogXCJIb3cgZG9lcyB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sIHN0YWZmIGFwcHJvYWNoIHByb3ZpZGluZyBleHRyYSBoZWxwIHRvIHN0dWRlbnRzIHdobyBuZWVkIGl0P1wiLFxuICAgIFwidGFnXCI6IFwiaGVscFwiXG4gIH0sXG4gIHtcbiAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGxvb2tpbmcgYXQgTnVyc2VyeSBTY2hvb2xzIGZvciB5b3VyIHNvb24gdG8gYmUgMyB5ZWFyIG9sZC4gSGUgaGFzIG5ldmVyIGJlZW4gaW4gc2Nob29sIG9yIGRheWNhcmUgYmVmb3JlIGFuZCB5b3UgYXJlIHNvbWV3aGF0IHdvcnJpZWQgYWJvdXQgdGhlIHRyYW5zaXRpb24uIFlvdSdkIGxpa2UgdG8gZW5zdXJlIHRoYXQgeW91J2xsIGJlIGFibGUgdG8gaGF2ZSBzdHJvbmcgY29tbXVuaWNhdGlvbmF0IGhpcyBuZXcgc2Nob29sLlwiLFxuICAgIFwicXVlc3Rpb25cIjogXCJIb3cgZG9lcyB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sIGhhbmRsZSBjb21tdW5pY2F0aW5nIHdpdGggcGFyZW50cz9cIixcbiAgICBcInRhZ1wiOiBcImNvbW11bmljYXRpb25cIlxuICB9LFxuICB7XG4gICAgXCJjb250ZXh0XCI6IFwiSXTigJlzIG1pZC1EZWNlbWJlciBhbmQgeW91ciBzb24sIGFnZSA0LCBjYW1lIGhvbWUgYWxsIGV4Y2l0ZWQgYWJvdXQgc2NpZW5jZSBjbGFzcy4gVGhleSBsZWFybmVkIGEgbmV3IHdvcmQsIGJ1dCBoZSBjYW7igJl0IGFjdHVhbGx5IHJlbWVtYmVyIHRoZSB3b3JkIHRoZXkgbGVhcm5lZCBhYm91dC5cIixcbiAgICBcInF1ZXN0aW9uXCI6IFwiV2hhdCB3YXMgdGhlIHRvcGljIG9mIGhpcyByZWNlbnQgc2NpZW5jZSBjbGFzcz9cIixcbiAgICBcInRhZ1wiOiBcInNjaWVuY2VcIlxuICB9LFxuICB7XG4gICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBzZWxlY3RpbmcgYSBwcmUtc2Nob29sLCBidXQgd2FudCB0byBiZSBzdXJlIHRoYXQgeW91ciBkYXVnaHRlciB3aWxsIGJlIHJlYWR5IGZvciBraW5kZXJnYXJ0ZW4gd2hlbiBpdOKAmXMgdGltZS5cIixcbiAgICBcInF1ZXN0aW9uXCI6IFwiSG93IGRvZXMgdGhlIG51cnNlcnkgc2Nob29sIGFzc2VzcyBjaGlsZHJlbuKAmXMga25vd2xlZGdlLCBzdXBwb3J0IHRoZWlyIGdyb3d0aCwgYW5kIHNoYXJlIHRoZSByZXN1bHRzIHdpdGggcGFyZW50cz9cIixcbiAgICBcInRhZ1wiOiBcInBhcmVudF90ZWFjaGVyX2NvbmZlcmVuY2VcIlxuICB9LFxuICB7XG4gICAgXCJjb250ZXh0XCI6IFwiWW91IGhhdmUgcmVjZW50bHkgYWNjZXB0ZWQgYSBwb3NpdGlvbiBmb3IgeW91ciBjaGlsZCBmb3IgdGhlIGNvbWluZyBzY2hvb2wgeWVhciBhdCB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLiBVcCB0byB0aGlzIHBvaW50LCB5b3VyIGNoaWxkIGhhcyBiZWVuIGF0IGhvbWUgYW5kIHlvdSBhcmUgc29tZXdoYXQgd29ycmllZCBhYm91dCB0aGUgdHJhbnNpdGlvbi5cIixcbiAgICBcInF1ZXN0aW9uXCI6IFwiSG93IGRvZXMgdGhlIG51cnNlcnkgc2Nob29sIHN1cHBvcnQga2lkc+KAmSB0cmFuc2l0aW9ucyBpbnRvIHNjaG9vbD9cIixcbiAgICBcInRhZ1wiOiBcIm9yaWVudGF0aW9uXCJcbiAgfVxuXVxuIiwiaW1wb3J0IHsgVHJhY2tlckV2ZW50IH0gZnJvbSBcIi4vZXZlbnRcIjtcbmNvbnNvbGUubG9nKFwiZGF0YSBsb2FkZWQuXCIpO1xuZXhwb3J0IGludGVyZmFjZSBNdHVya1VSTERhdGEge1xuICByYXc6IHN0cmluZztcbiAgYXNzaWdubWVudElEOiBzdHJpbmcgfCBudWxsO1xuICBoaXRJRDogc3RyaW5nIHwgbnVsbDtcbiAgd29ya2VySUQ6IHN0cmluZyB8IG51bGw7XG4gIHN1Ym1pdFRvOiBzdHJpbmcgfCBudWxsO1xufVxuXG5jb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXM7XG5cbmV4cG9ydCBjb25zdCB1cmxEYXRhOiBNdHVya1VSTERhdGEgPSB7XG4gIHJhdzogdXJsUGFyYW1zLnRvU3RyaW5nKCksXG4gIGFzc2lnbm1lbnRJRDogdXJsUGFyYW1zLmdldChcImFzc2lnbm1lbnRJZFwiKSxcbiAgaGl0SUQ6IHVybFBhcmFtcy5nZXQoXCJoaXRJZFwiKSxcbiAgd29ya2VySUQ6IHVybFBhcmFtcy5nZXQoXCJ3b3JrZXJJZFwiKSxcbiAgc3VibWl0VG86IHVybFBhcmFtcy5nZXQoXCJ0dXJrU3VibWl0VG9cIiksXG59O1xuXG5leHBvcnQgY2xhc3MgRGF0YSB7XG4gIHB1YmxpYyBsb2dzOiB7IFtldmVudFR5cGU6IHN0cmluZ106IFRyYWNrZXJFdmVudFtdIH0gPSB7fTtcbiAgcHVibGljIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgcHVibGljIGVycm9yczogYW55W10gPSBbXTtcbiAgcHVibGljIHVybERhdGE6IE10dXJrVVJMRGF0YTtcblxuICBjb25zdHJ1Y3RvcihyYXdNdHVya1VSTERhdGE6IE10dXJrVVJMRGF0YSkge1xuICAgIHRoaXMudXJsRGF0YSA9IHJhd010dXJrVVJMRGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBzZXJpYWxpemUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRhdGEgPSBuZXcgRGF0YSh1cmxEYXRhKTtcblxuT2JqZWN0LmFzc2lnbih3aW5kb3csIHsgZGF0YSB9KTtcbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XG5pbXBvcnQgeyBub3cgfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3NcIjtcbmxvZyhcImV2ZW50IGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNvbnN0IGVudW0gQWN0aW9uRW51bSB7XG4gIENMSUNLID0gXCJjbGlja1wiLFxuICBCVVRUT04gPSBcImJ1dHRvblwiLFxuICBTQ1JPTEwgPSBcInNjcm9sbFwiLFxuICBISVNUT1JZID0gXCJoaXN0b3J5XCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tlckV2ZW50IHtcbiAgYWN0aW9uOiBzdHJpbmc7XG4gIHRpbWU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFRvVHJhY2tlckV2ZW50KG9iajogYW55LCBhY3Rpb246IHN0cmluZykge1xuICBvYmouYWN0aW9uID0gYWN0aW9uO1xuICBvYmoudGltZSA9IG5vdygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUcmFja2VyRXZlbnQob2JqOiBhbnkpOiBvYmogaXMgVHJhY2tlckV2ZW50IHtcbiAgcmV0dXJuIG9iai5hY3Rpb24gIT09IHVuZGVmaW5lZCAmJiBvYmoudGltZSAhPT0gdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY2xhc3MgQmFzZVRyYWNrZXJFdmVudDxUPiBpbXBsZW1lbnRzIFRyYWNrZXJFdmVudCB7XG4gIHB1YmxpYyBjdXN0RXY6IEN1c3RvbUV2ZW50O1xuICBwdWJsaWMgYWN0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyB0aW1lOiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKGFjdGlvbjogc3RyaW5nLCBldmVudEluaXREaWN0PzogQ3VzdG9tRXZlbnRJbml0PFQ+IHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5jdXN0RXYgPSBuZXcgQ3VzdG9tRXZlbnQoYWN0aW9uLCBldmVudEluaXREaWN0KTtcbiAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICB0aGlzLnRpbWUgPSBub3coKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGV0YWlsKCkge1xuICAgIHJldHVybiB0aGlzLmN1c3RFdi5kZXRhaWw7XG4gIH1cbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtY2xhc3Nlcy1wZXItZmlsZVxuZXhwb3J0IGNsYXNzIENsaWNrRXZlbnQgZXh0ZW5kcyBCYXNlVHJhY2tlckV2ZW50PHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGlkOiBzdHJpbmc7XG59PiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHg6IG51bWJlcixcbiAgICB5OiBudW1iZXIsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBldmVudEluaXREaWN0PzpcbiAgICAgIHwgQ3VzdG9tRXZlbnRJbml0PHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IGlkOiBzdHJpbmcgfT5cbiAgICAgIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHN1cGVyKEFjdGlvbkVudW0uQ0xJQ0ssIGV2ZW50SW5pdERpY3QpO1xuICAgIHRoaXMuZGV0YWlsLnggPSB4O1xuICAgIHRoaXMuZGV0YWlsLnkgPSB5O1xuICAgIHRoaXMuZGV0YWlsLmlkID0gaWQ7XG4gIH1cbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtY2xhc3Nlcy1wZXItZmlsZVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkV2ZW50IGV4dGVuZHMgQmFzZVRyYWNrZXJFdmVudDx7IGtleTogc3RyaW5nOyBpZDogc3RyaW5nIH0+IHtcbiAgY29uc3RydWN0b3IoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBldmVudEluaXREaWN0PzogQ3VzdG9tRXZlbnRJbml0PHsga2V5OiBzdHJpbmc7IGlkOiBzdHJpbmcgfT4gfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgc3VwZXIoQWN0aW9uRW51bS5DTElDSywgZXZlbnRJbml0RGljdCk7XG4gICAgdGhpcy5kZXRhaWwua2V5ID0ga2V5O1xuICAgIHRoaXMuZGV0YWlsLmlkID0gaWQ7XG4gIH1cbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtY2xhc3Nlcy1wZXItZmlsZVxuZXhwb3J0IGNsYXNzIEhpc3RvcnlFdmVudCBleHRlbmRzIEJhc2VUcmFja2VyRXZlbnQ8e1xuICB1cmw6IHN0cmluZztcbiAgZXh0cmE/OiBhbnk7XG59PiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGV4dHJhPzogYW55LFxuICAgIGV2ZW50SW5pdERpY3Q/OiBDdXN0b21FdmVudEluaXQ8eyB1cmw6IHN0cmluZyB9PiB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBzdXBlcihBY3Rpb25FbnVtLkhJU1RPUlksIGV2ZW50SW5pdERpY3QpO1xuICAgIHRoaXMuZGV0YWlsLnVybCA9IHVybDtcbiAgICB0aGlzLmRldGFpbC5leHRyYSA9IGV4dHJhO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xuaW1wb3J0IHsgaXNUcmFja2VyRXZlbnQsIFRyYWNrZXJFdmVudCB9IGZyb20gXCIuL2V2ZW50XCI7XG5sb2coXCJyZWNlaXZlciBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBjbGFzcyBFdmVudFJlY2VpdmVyIHtcbiAgcHJpdmF0ZSBtYXAgPSBuZXcgTWFwPHN0cmluZywgKGV2ZW50OiBUcmFja2VyRXZlbnQpID0+IHZvaWQ+KCk7XG4gIHByaXZhdGUgZW1pdHRlciA9IG5ldyBFdmVudFRhcmdldCgpO1xuXG4gIHB1YmxpYyByZWdpc3RlcihldmVudFR5cGU6IHN0cmluZywgY2FsbGJhY2s/OiAoZXZlbnQ6IFRyYWNrZXJFdmVudCkgPT4gdm9pZCkge1xuICAgIHRoaXMuZW1pdHRlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgY29uc3QgdHJhY2tFdiA9IChldmVudCBhcyB1bmtub3duIGFzIEN1c3RvbUV2ZW50KS5kZXRhaWwgYXMgVHJhY2tlckV2ZW50O1xuICAgICAgaWYgKGlzVHJhY2tlckV2ZW50KHRyYWNrRXYpICYmIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKHRyYWNrRXYpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgdGhpcy5tYXAuc2V0KGV2ZW50VHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkb0V2ZW50KGV2ZW50OiBUcmFja2VyRXZlbnQpIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMubWFwLmdldChcIlwiICsgZXZlbnQuYWN0aW9uKTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9yb3V0ZXIvcm91dGVyXCI7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gXCIuLy4uL3JvdXRlci9oaXN0b3J5XCI7XG5pbXBvcnQgeyBEIH0gZnJvbSBcIi4vZG9jdW1lbnRcIjtcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcbmxvZyhcImJhbm5lciBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBjbGFzcyBUb3BCYW5uZXIge1xuICBwdWJsaWMgc3RhdGljIHNob3coKSB7XG4gICAgVG9wQmFubmVyLnNob3dpbmcgPSB0cnVlO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZFVwLCB0cnVlKTtcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGREb3duLCBmYWxzZSk7XG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkQ29udGVudCwgdHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGhpZGUoKSB7XG4gICAgVG9wQmFubmVyLnNob3dpbmcgPSBmYWxzZTtcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGREb3duLCB0cnVlKTtcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGRVcCwgZmFsc2UpO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZENvbnRlbnQsIGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZG9EaXNwbGF5Q2hhbmdlKCkge1xuICAgIFRvcEJhbm5lci5zaG93aW5nID8gVG9wQmFubmVyLmhpZGUoKSA6IFRvcEJhbm5lci5zaG93KCk7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBzZXR1cCgpIHtcbiAgICBELmFkZEV2ZW50TGlzdGVuZXIoRWxlbWVudHMuZGRBcnJvdywgXCJjbGlja1wiLCBUb3BCYW5uZXIuZG9EaXNwbGF5Q2hhbmdlKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHNob3dpbmcgPSB0cnVlO1xufVxuXG5ELmFkZEV2ZW50TGlzdGVuZXIoXCJtdHVyay10b3AtYmFubmVyLWJhY2tcIiwgXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoSGlzdG9yeS5jYW5CYWNrd2FyZCgpKSB7XG4gICAgUm91dGVyLmxvYWRXaXRoUGF0aFByZWZpeChIaXN0b3J5LmJhY2t3YXJkKCkpO1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0KFwiVGhlcmUgaXMgbm8gcGFnZSBoaXN0b3J5IHRvIGdvIGJhY2sgZm9yIGF0IHRoaXMgdGltZSFcIik7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGVycm9yLCBsb2cgfSBmcm9tIFwiLi8uLi91dGlscy9jb25zb2xlX3dyYXBwZXJcIjtcbmxvZyhcImRvY3VtZW50IGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNsYXNzIEQge1xuICBwdWJsaWMgc3RhdGljIGRvYzogRG9jdW1lbnQgPSBkb2N1bWVudDtcblxuICBwdWJsaWMgc3RhdGljIGVsZW0oZWxlbTogRWxlbWVudCB8IHN0cmluZyk6IEVsZW1lbnQge1xuICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIEQuaWQoZWxlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGVtIGFzIEVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkaXNwbGF5KGVsZW06IEVsZW1lbnQgfCBzdHJpbmcsIHNob3c6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBlbGVtID0gRC5lbGVtKGVsZW0pO1xuICAgIGlmIChzaG93KSB7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJub25lXCIpO1xuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheVwiKTtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpZChpZDogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBELmRvYy5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRWxlbWVudCB3YXMgbm90IGZvdW5kLCBpZDogPCR7aWR9Pi5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBzdGF0aWMgY2xheihjbGF6OiBzdHJpbmcpOiBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+IHtcbiAgICByZXR1cm4gRC5kb2MuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGF6KTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIHRhZyh0YWc6IHN0cmluZyk6IEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD4ge1xuICAgIHJldHVybiBELmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWcpO1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgaW1hZ2UoaWQ6IHN0cmluZywgdXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBlcnJvcigoKSA9PiBELmlkKGlkKS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdXJsKSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFkZEV2ZW50TGlzdGVuZXIoXG4gICAgZWxlbTogRWxlbWVudCB8IHN0cmluZyxcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgbGlzdGVuZXI6IChlOiBFdmVudCkgPT4gYW55XG4gICkge1xuICAgIGVsZW0gPSB0aGlzLmVsZW0oZWxlbSk7XG4gICAgY29uc3Qgd3JhcHBlckZ1bmMgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxpc3RlbmVyKGUpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIChlbGVtIGFzIEVsZW1lbnQpLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgd3JhcHBlckZ1bmMpO1xuICAgIHJldHVybiB3cmFwcGVyRnVuYztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZWFjaChlbGVtOiBFbGVtZW50IHwgc3RyaW5nLCBhcHBseTogKG5vZGU6IEVsZW1lbnQpID0+IGFueSkge1xuICAgIGVsZW0gPSB0aGlzLmVsZW0oZWxlbSk7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBlbGVtLmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFwcGx5KGNoaWxkcmVuW2ldKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGVhY2hSZWN1cihcbiAgICBlbGVtOiBFbGVtZW50IHwgc3RyaW5nLFxuICAgIGFwcGx5OiAobm9kZTogRWxlbWVudCkgPT4gYW55XG4gICkge1xuICAgIGVsZW0gPSB0aGlzLmVsZW0oZWxlbSk7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBlbGVtLmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBhcHBseShjaGlsZCk7XG4gICAgICBELmVhY2hSZWN1cihjaGlsZCwgYXBwbHkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KFxuICAgIHRhZ05hbWU6IEssXG4gICAgb3B0aW9ucz86IEVsZW1lbnRDcmVhdGlvbk9wdGlvbnNcbiAgKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBvcHRpb25zKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuLi91dGlscy9jb25zb2xlX3dyYXBwZXJcIjtcbmltcG9ydCB7IEQgfSBmcm9tIFwiLi9kb2N1bWVudFwiO1xubG9nKFwiZWxlbWVudCBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbi8qKlxuICogVGhlc2UgYXJlIGVsZW1lbnRzIHRoYXQgYXJlIGluIGV2ZXJ5IHNpbmdsZSBwcm9qZWN0LiBFdmVuIGlmIHRoZXkgYXJlIG5vdCB1c2VkIHRoZXkgc2hvdWxkXG4gKiBiZSBwbGFjZSBpbiB0aGUgcHJvamVjdCBhbmQgZGlzcGxheSBzaG91bGQgYmUgc2V0IHRvIG5vbmUuIFRoaXMgc2ltcGxpZmllcyBjb25maWd1cmF0aW9uXG4gKiBhbmQgc29tZSBjb21tb24gZnVuY3Rpb25zIGFuZCBhbGxvd3MgbGVzcyBudWxsIGNoZWNrcyB0byBiZSBwZXJmb3JtZWQgb3ZlcmFsbC4gSWYgdGhlXG4gKiBlbGVtZW50IGRvZXMgbm90IGV4aXN0IGF0IHJ1biB0aW1lIGFuIGVtcHR5IGRpdiB3aXRoIHRoYXQgaWQgaXMgY3JlYXRlZCBhbmQgaXRzIGRpc3BsYXlcbiAqIGlzIHNldCB0byBub25lIHRoZW4gYXBwZW5kZWQgdG8gdGhlIGJvZHkuXG4gKi9cblxuLyoqXG4gKiBBdHRlbXB0cyB0byBnZXQgYW4gZWxlbWVudCwgaWYgdW5zdWNjZXNzZnVsLCBjcmVhdGVzIGRpdiB3aXRoIGlkIGFuZCBhcHBlbmRzIHRvIGJvZHkuXG4gKlxuICogQHBhcmFtIGlkIC0gdGhlIGlkIG9mIHRoZSBlbGVtZW50IHRvIHJldHJpZXZlLlxuICovXG5mdW5jdGlvbiBtYWtlRWxlbUlmTm90RXhpc3QoaWQ6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgbGV0IGVsZW07XG4gIHRyeSB7XG4gICAgZWxlbSA9IEQuaWQoaWQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBlbGVtID0gRC5jcmVhdGUoXCJkaXZcIik7XG4gICAgZWxlbS5pZCA9IGlkO1xuICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGVsZW0pO1xuICB9XG4gIHJldHVybiBlbGVtO1xufVxuXG4vKipcbiAqIENvbW1vbmx5IGFjY2Vzc2VkIGVsZW1lbnRzLCBhbGxvd3MgZm9yIGNsZWFyZXIgZG9tIG1hbmlwIG9uIHRoZXNlIGVsZW1lbnRzLlxuICovXG5leHBvcnQgY29uc3QgRWxlbWVudHMgPSB7XG4gIGRvY3VtZW50OiBELmRvYy5kb2N1bWVudEVsZW1lbnQsXG4gIHdyYXBwZXI6IG1ha2VFbGVtSWZOb3RFeGlzdChcIndyYXBwZXJcIiksXG4gIGh0bWxMb2M6IG1ha2VFbGVtSWZOb3RFeGlzdChcImh0bWwtbG9jXCIpLFxuICBpbm5lckJvZHk6IG1ha2VFbGVtSWZOb3RFeGlzdChcImlubmVyLWJvZHlcIiksXG4gIGRkRG93bjogbWFrZUVsZW1JZk5vdEV4aXN0KFwibXR1cmstdG9wLWJhbm5lci1kcm9wLWRvd24tYnV0dG9uXCIpLFxuICBkZFVwOiBtYWtlRWxlbUlmTm90RXhpc3QoXCJtdHVyay10b3AtYmFubmVyLWNvbGxhcHNlLWJ1dHRvblwiKSxcbiAgZGRDb250ZW50OiBtYWtlRWxlbUlmTm90RXhpc3QoXCJtdHVyay10b3AtYmFubmVyLWRyb3AtZG93bi1jb250ZW50XCIpLFxuICBiYWNrQnV0dG9uOiBtYWtlRWxlbUlmTm90RXhpc3QoXCJtdHVyay10b3AtYmFubmVyLWJhY2tcIiksXG4gIGRkQXJyb3c6IG1ha2VFbGVtSWZOb3RFeGlzdChcIm10dXJrLXRvcC1iYW5uZXItYXJyb3dcIiksXG4gIG10VG9wQmFubmVyVGV4dDogbWFrZUVsZW1JZk5vdEV4aXN0KFwibXR1cmstdG9wLWJhbm5lci10ZXh0XCIpLFxuICBtdFNjZW5hcmlvQ29udGV4dDogbWFrZUVsZW1JZk5vdEV4aXN0KFwic2NlbmFyaW9fY29udGV4dFwiKSxcbiAgbXRTY2VuYXJpb1F1ZXN0aW9uOiBtYWtlRWxlbUlmTm90RXhpc3QoXCJzY2VuYXJpb19xdWVzdGlvblwiKSxcbiAgbG9nRmlsZUlucHV0OiBtYWtlRWxlbUlmTm90RXhpc3QoXG4gICAgXCJtdHVyay10b3AtYmFubmVyLWRyb3AtZG93bi1jb250ZW50LWxvZy1maWxlLWlucHV0XCJcbiAgKSxcbiAgc3VibWl0Rm9ybTogbWFrZUVsZW1JZk5vdEV4aXN0KFwibXR1cmstc3VibWl0LWZvcm1cIiksXG4gIG1vZGFsOiBtYWtlRWxlbUlmTm90RXhpc3QoXCJtb2RhbFwiKSxcbn07XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi8uLi9kb20vZWxlbWVudHNcIjtcbmxvZyhcImh0bWwgbG9jIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGVudW0gQXBwRW51bSB7XG4gIElORk9STUFUSU9OX0ZPUkFHSU5HID0gXCJpbmZvcm1hdGlvbi1mb3JhZ2luZ1wiLFxuICBDT0dOSVRJVkVfTE9BRCA9IFwiY29nbml0aXZlLWxvYWRcIixcbiAgR0VOREVSX01BRyA9IFwiZ2VuZGVyLW1hZ1wiLFxuICBFUlJPUiA9IFwiZXJyb3JcIixcbn1cblxuZXhwb3J0IGVudW0gTW9kZUVudW0ge1xuICBSRUFMID0gXCJyZWFsXCIsXG4gIFNBTkRCT1ggPSBcInNhbmRib3hcIixcbiAgVEVTVCA9IFwidGVzdFwiLFxuICBFUlJPUiA9IFwiZXJyb3JcIixcbn1cblxuZXhwb3J0IGNsYXNzIEhUTUxMb2Mge1xuICBwdWJsaWMgc3RhdGljIGVsZW0gPSBFbGVtZW50cy5odG1sTG9jO1xuICBwdWJsaWMgc3RhdGljIGFwcDogQXBwRW51bTtcbiAgcHVibGljIHN0YXRpYyBtb2RlOiBNb2RlRW51bTtcbiAgcHVibGljIHN0YXRpYyBzY2VuYXJpbzogc3RyaW5nO1xuXG4gIHB1YmxpYyBzdGF0aWMgc2V0dXAoKSB7XG4gICAgSFRNTExvYy5hcHAgPSAoSFRNTExvYy5lbGVtLmRhdGFzZXQuYXBwIGFzIEFwcEVudW0pIHx8IEFwcEVudW0uRVJST1I7XG4gICAgSFRNTExvYy5tb2RlID0gKEhUTUxMb2MuZWxlbS5kYXRhc2V0Lm1vZGUgYXMgTW9kZUVudW0pIHx8IE1vZGVFbnVtLkVSUk9SO1xuICAgIEhUTUxMb2Muc2NlbmFyaW8gPSBIVE1MTG9jLmVsZW0uZGF0YXNldC5zY2VuYXJpbyB8fCBcImVycm9yXCI7XG4gIH1cbn1cbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi8uLi91dGlscy9jb25zb2xlX3dyYXBwZXJcIjtcbmltcG9ydCB7IEQgfSBmcm9tIFwiLi9kb2N1bWVudFwiO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xubG9nKFwibW9kYWwgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY2xhc3MgTW9kYWwge1xuICBwdWJsaWMgc3RhdGljIGVsZW0gPSBFbGVtZW50cy5tb2RhbDtcblxuICBwdWJsaWMgc3RhdGljIGRpc3BsYXkoc3JjOiBzdHJpbmcpIHtcbiAgICBNb2RhbC5lbGVtLnNldEF0dHJpYnV0ZShcbiAgICAgIFwic3R5bGVcIixcbiAgICAgIGBsZWZ0OiAke01hdGgucm91bmQod2luZG93LnBhZ2VYT2Zmc2V0KX1weDsgdG9wOiAke01hdGgucm91bmQoXG4gICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgKX1weDtgXG4gICAgKTtcbiAgICBNb2RhbC5lbGVtLmNsYXNzTGlzdC5yZXBsYWNlKFwiaGlkZS1tb2RhbFwiLCBcInNob3ctbW9kYWxcIik7XG4gICAgRC5lYWNoKE1vZGFsLmVsZW0sIChub2RlKSA9PiB7XG4gICAgICAobm9kZSBhcyBIVE1MSUZyYW1lRWxlbWVudCkuc3JjID0gc3JjO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm5vc2Nyb2xsXCIpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBoaWRlKCkge1xuICAgIE1vZGFsLmVsZW0uY2xhc3NMaXN0LnJlcGxhY2UoXCJzaG93LW1vZGFsXCIsIFwiaGlkZS1tb2RhbFwiKTtcbiAgICBELmVhY2goTW9kYWwuZWxlbSwgKG5vZGUpID0+IHtcbiAgICAgIChub2RlIGFzIEhUTUxJRnJhbWVFbGVtZW50KS5zcmMgPSBcIlwiO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm5vc2Nyb2xsXCIpO1xuICB9XG59XG5cbkQuYWRkRXZlbnRMaXN0ZW5lcihNb2RhbC5lbGVtLCBcImNsaWNrXCIsIChlKSA9PiB7XG4gIE1vZGFsLmhpZGUoKTtcbn0pO1xuRC5lYWNoKE1vZGFsLmVsZW0sIChub2RlKSA9PiB7XG4gIEQuYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbn0pO1xuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGVycm9yLCBsb2cgfSBmcm9tIFwiLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XG5pbXBvcnQgeyBub29wLCBub3cgfSBmcm9tIFwiLi8uLi91dGlscy9mdW5jc1wiO1xubG9nKFwic2Nyb2xsIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuLyoqXG4gKiBMaW5lYXIgaW1wbGVtZW50YXRpb24gb2Ygc2Nyb2xsaW5nLlxuICogRm9sbG93cyB0aGUgc2luZ2xldG9uIHBhdHRlcm4sIGNhbGwgZG8gdG8gc3RhcnQgYSBzY3JvbGwgb3BlcmF0aW9uLlxuICpcbiAqIElmIGEgc2Nyb2xsIGlzIGNhbGxlZCB3aGVuIGFub3RoZXIgc2Nyb2xsIGhhcyBhbHJlYWR5IGJlZ3VuIGFuXG4gKiBlcnJvciB3aWxsIGJlIHRocm93biwgYnV0IHRoZSBmaXJzdCBzY3JvbGwgd2lsbCBjb250aW51ZSB1bnRpbCBjb21wbGV0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgU2Nyb2xsIHtcbiAgcHVibGljIHN0YXRpYyBTVEVQX0lOX01TID0gMTc7XG5cbiAgcHVibGljIHN0YXRpYyBjYWxsYmFjayhcbiAgICBlbmRQb3M6IG51bWJlcixcbiAgICBkdXJhdGlvbjogbnVtYmVyID0gMjAwLFxuICAgIGNvbXBsZXRlOiAoLi4uYXJnczogYW55KSA9PiBhbnkgPSBub29wXG4gICk6IHZvaWQge1xuICAgIGlmIChTY3JvbGwucnVubmluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IG1ha2UgbXVsdGlwbGUgY2FsbHMgdG8gc2Nyb2xsIGF0IHRoZSBzYW1lIHRpbWUuXCIpO1xuICAgIH1cbiAgICBTY3JvbGwucnVubmluZyA9IHRydWU7XG4gICAgY29uc3Qgb2xkQ29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIFNjcm9sbC5ydW5uaW5nID0gZmFsc2U7XG4gICAgICBlcnJvcihvbGRDb21wbGV0ZSk7XG4gICAgfTtcbiAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZShlbmRQb3MsIGR1cmF0aW9uLCBjb21wbGV0ZSkuYXR0ZW1wdFNjcm9sbCgpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBwcm9taXNlKGVuZFBvczogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMjAwKSB7XG4gICAgaWYgKFNjcm9sbC5ydW5uaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgbWFrZSBtdWx0aXBsZSBjYWxscyB0byBzY3JvbGwgYXQgdGhlIHNhbWUgdGltZS5cIik7XG4gICAgfVxuICAgIFNjcm9sbC5ydW5uaW5nID0gdHJ1ZTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoXG4gICAgICAocmVzb2x2ZTogKHZhbHVlPzogdW5rbm93bikgPT4gdm9pZCwgcmVqZWN0OiAoYXJnMDogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcnVuUmVzb2x2ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBTY3JvbGwucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGUoZW5kUG9zLCBkdXJhdGlvbiwgcnVuUmVzb2x2ZXIpLmF0dGVtcHRTY3JvbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBydW5uaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlID0gbmV3IFNjcm9sbCgwLCAwLCBub29wKTtcbiAgcHJpdmF0ZSBjb21wbGV0ZTogKC4uLmFyZ3M6IGFueSkgPT4gYW55O1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbmRQb3M6IG51bWJlcixcbiAgICBwcml2YXRlIGR1cmF0aW9uOiBudW1iZXIsXG4gICAgY29tcGxldGU6ICguLi5hcmdzOiBhbnkpID0+IGFueVxuICApIHtcbiAgICB0aGlzLmNvbXBsZXRlID0gKC4uLmFyZ3M6IGFueSkgPT4ge1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJzY3JvbGxcIikpO1xuICAgICAgY29tcGxldGUoYXJncyk7XG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGlzUnVubmluZygpIHtcbiAgICByZXR1cm4gU2Nyb2xsLnJ1bm5pbmc7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZShcbiAgICBlbmRQb3M6IG51bWJlcixcbiAgICBkdXJhdGlvbjogbnVtYmVyLFxuICAgIGNvbXBsZXRlOiAoLi4uYXJnczogYW55KSA9PiBhbnlcbiAgKTogU2Nyb2xsIHtcbiAgICB0aGlzLmVuZFBvcyA9IGVuZFBvcztcbiAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjU2Nyb2xsQW1vdW50KCkge1xuICAgIGNvbnN0IGN1clRpbWUgPSBub3coKTtcbiAgICBjb25zdCBzdGVwcyA9IE1hdGgubWF4KDEsICh0aGlzLmR1cmF0aW9uIC0gY3VyVGltZSkgLyBTY3JvbGwuU1RFUF9JTl9NUyk7XG4gICAgY29uc3QgY3VyUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHJldHVybiBNYXRoLmNlaWwoKHRoaXMuZW5kUG9zIC0gY3VyUG9zKSAvIHN0ZXBzKTtcbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsKCkge1xuICAgIHdpbmRvdy5zY3JvbGwoMCwgdGhpcy5jYWxjU2Nyb2xsQW1vdW50KCkpO1xuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPT09IHRoaXMuZW5kUG9zKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnNjcm9sbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhdHRlbXB0U2Nyb2xsKCkge1xuICAgIGlmIChcInJlcXVlc3RBbmltYXRpb25GcmFtZVwiIGluIHdpbmRvdyA9PT0gZmFsc2UpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGwoMCwgdGhpcy5lbmRQb3MpO1xuICAgIH1cbiAgICB0aGlzLnNjcm9sbCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBub29wIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmNzXCI7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4vLi4vZGF0YS1sb2cvZGF0YVwiO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuLy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xuaW1wb3J0IHsgcGFyYW1zIH0gZnJvbSBcIi4vLi4vdXRpbHMvcV9wYXJhbXNcIjtcbmltcG9ydCB7IEQgfSBmcm9tIFwiLi9kb2N1bWVudFwiO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xubG9nKFwic3VibWl0IGZvcm0gbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgaW50ZXJmYWNlIEFsbG93U3VibWlzc2lvbiB7XG4gIGFsbG93KCk6IHN0cmluZyB8IG51bGw7XG4gIHByZVN1Ym1pdCguLi5hcmdzOiBhbnkpOiBhbnk7XG59XG5cbmNvbnN0IGsgPSBcIk5jRjJXUmtVYmY1dHpqNGJJdkk5ODFGcW1TNnBNbE84M2cyajd1NVJcIjtcbmNvbnN0IGdhdGUgPSBcImh0dHBzOi8vMnlrb3BxMW9oYS5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9QUk9EL2xvZ3NcIjtcblxuY29uc3QgQWxsb3dTdWJtaXNzaW9uRGVmYXVsdDogQWxsb3dTdWJtaXNzaW9uID0ge1xuICBhbGxvdzogKCkgPT4gbnVsbCxcbiAgcHJlU3VibWl0OiBub29wLFxufTtcblxuZXhwb3J0IGNsYXNzIFN1Ym1pdEZvcm0ge1xuICBwdWJsaWMgc3RhdGljIGVsZW0gPSBFbGVtZW50cy5zdWJtaXRGb3JtIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgcHVibGljIHN0YXRpYyBhbGxvd1N1Ym1pdERlZmF1bHQgPSB7IGFsbG93OiAoKSA9PiB0cnVlLCBwcmVTdWJtaXQ6IG5vb3AgfTtcblxuICBwdWJsaWMgc3RhdGljIHNldHVwKFxuICAgIGFsbG93U3VibWlzc2lvbjogQWxsb3dTdWJtaXNzaW9uID0gQWxsb3dTdWJtaXNzaW9uRGVmYXVsdFxuICApIHtcbiAgICBTdWJtaXRGb3JtLnN1Ym1pdEZ1bmMgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBhbGxvd2VkID0gYWxsb3dTdWJtaXNzaW9uLmFsbG93KCk7XG4gICAgICBpZiAoYWxsb3dlZCA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBxcCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcztcbiAgICAgICAgZGF0YS51cmxEYXRhLnJhdyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICBkYXRhLnVybERhdGEuYXNzaWdubWVudElEID0gcXAuZ2V0KFwiYXNzaWdubWVudElkXCIpO1xuICAgICAgICBkYXRhLnVybERhdGEuaGl0SUQgPSBxcC5nZXQoXCJoaXRJZFwiKTtcbiAgICAgICAgZGF0YS51cmxEYXRhLndvcmtlcklEID0gcXAuZ2V0KFwid29ya2VySWRcIik7XG4gICAgICAgIGRhdGEudXJsRGF0YS5zdWJtaXRUbyA9XG4gICAgICAgICAgcXAuZ2V0KFwidHVya1N1Ym1pdFRvXCIpICsgXCIvbXR1cmsvZXh0ZXJuYWxTdWJtaXRcIjtcbiAgICAgICAgaWYgKGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQgIT09IG51bGwpIHtcbiAgICAgICAgICAoRC5pZChcImFzc2lnbm1lbnQtaWRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPVxuICAgICAgICAgICAgZGF0YS51cmxEYXRhLmFzc2lnbm1lbnRJRDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS51cmxEYXRhLmhpdElEICE9PSBudWxsKSB7XG4gICAgICAgICAgKEQuaWQoXCJoaXQtaWRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSBkYXRhLnVybERhdGEuaGl0SUQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xuICAgICAgICBkYXRhLmRhdGEudGFzayA9IHVybFBhcmFtcy5nZXQoXCJ0YWdcIik7XG4gICAgICAgIGRhdGEuZGF0YS5yZXNwb25zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dC1hcmVhXCIpLnZhbHVlO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiXFxuXFxuREFUQSBGT1IgVEFTSzogXCIgKyBkYXRhLmRhdGEudGFzayArIFwiXFxuXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgICAgICAgYWxlcnQoXG4gICAgICAgICAgXCJPcGVuIGNvbnNvbGUgdG8gc2VlIHVzZXIgZGF0YS4gUGxlYXNlIHJlY29yZCBpbnRvIGEgdGV4dCBkb2N1bWVudC5cIlxuICAgICAgICApO1xuXG4gICAgICAgIC8vIChFbGVtZW50cy5zdWJtaXRGb3JtIGFzIEhUTUxGb3JtRWxlbWVudCkuYWN0aW9uID0gZGF0YS51cmxEYXRhXG4gICAgICAgIC8vICAgICAuc3VibWl0VG8gYXMgc3RyaW5nO1xuICAgICAgICAvLyBhbGxvd1N1Ym1pc3Npb24ucHJlU3VibWl0KCk7XG4gICAgICAgIC8vIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChnYXRlLCB7XG4gICAgICAgIC8vICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgLy8gICAgIGhlYWRlcnM6IHtcbiAgICAgICAgLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAvLyAgICAgICAgICd4LWFwaS1rZXknOiBrLFxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgLy8gICAgICAgICBzYW5kYm94OiBwYXJhbXMuc2FuZGJveCxcbiAgICAgICAgLy8gICAgICAgICB3dXN0bF9rZXk6IHBhcmFtcy53dXN0bF9rZXksXG4gICAgICAgIC8vICAgICAgICAgcHJvamVjdDogcGFyYW1zLnByb2plY3QsXG4gICAgICAgIC8vICAgICAgICAgaXRlcmF0aW9uOiBwYXJhbXMuaXRlcmF0aW9uLFxuICAgICAgICAvLyAgICAgICAgIHRhZzogcGFyYW1zLnRhZyxcbiAgICAgICAgLy8gICAgICAgICBhc3NpZ25tZW50SUQ6IGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQsXG4gICAgICAgIC8vICAgICAgICAgaGl0SUQ6IGRhdGEudXJsRGF0YS5oaXRJRCxcbiAgICAgICAgLy8gICAgICAgICB3b3JrZXJJRDogZGF0YS51cmxEYXRhLndvcmtlcklELFxuICAgICAgICAvLyAgICAgICAgIGxvZzogZGF0YS5zZXJpYWxpemUoKSxcbiAgICAgICAgLy8gICAgIH0pLFxuICAgICAgICAvLyB9KTsgLy8gVE9ETzogdmVyaWZ5IHRoaXMgYWN0dWFsbHkgd29ya3NcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcC5zdGF0dXMpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhd2FpdCByZXNwLmpzb24oKSk7XG4gICAgICAgIC8vIGlmIChyZXNwLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIC8vICAgICBhbGVydChcbiAgICAgICAgLy8gICAgICAgICAnWW91IG1hZGUgYSBiYWQgcmVxdWVzdCB3aXRoIHlvdXIgc3VibWlzc2lvbi4gVGhlIHNlcnZlciB0aGlua3MgdGhhdCB5b3UgbWFkZSB0aGlzIGVycm9yOiAnICtcbiAgICAgICAgLy8gICAgICAgICAgICAgKGF3YWl0IHJlc3AuanNvbigpKS5lcnJvclxuICAgICAgICAvLyAgICAgKTtcbiAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBTdWJtaXRGb3JtLmVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgLy8gICAgICdzdWJtaXQnLFxuICAgICAgICAvLyAgICAgU3VibWl0Rm9ybS5zdWJtaXRGdW5jXG4gICAgICAgIC8vICk7XG4gICAgICAgIC8vIFN1Ym1pdEZvcm0uZWxlbS5zdWJtaXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KGFsbG93ZWQpO1xuICAgICAgfVxuICAgIH07XG4gICAgU3VibWl0Rm9ybS5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgU3VibWl0Rm9ybS5zdWJtaXRGdW5jKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHN1Ym1pdEZ1bmM6IChldmVudDogRXZlbnQpID0+IGFueTtcbn1cbiIsImltcG9ydCB7IFRvcEJhbm5lciB9IGZyb20gXCIuL2Jhbm5lclwiO1xuaW1wb3J0IHsgSFRNTExvYyB9IGZyb20gXCIuL2h0bWxfbG9jXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFja2VyRWxlbWVudHMge1xuICBwdWJsaWMgc3RhdGljIHNldHVwVHJhY2tlckVsZW1lbnRzKCkge1xuICAgIC8vIHNldHVwIGRvbSBlbGVtZW50c1xuICAgIFRvcEJhbm5lci5zZXR1cCgpO1xuICAgIEhUTUxMb2Muc2V0dXAoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gXCIuLy4uL3RyYWNrZXIvdHJhY2tlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhpc3RvcnlFbnRyeSB7XG4gIGhhc1ByZXZVUkw6IGJvb2xlYW47XG4gIHByZXZFbnRyeT86IEhpc3RvcnlFbnRyeTtcbiAgY3VyclVSTDogc3RyaW5nO1xuICBleHRyYT86IGFueTtcbiAgbmV4dEVudHJpZXM6IEhpc3RvcnlFbnRyeVtdO1xufVxuXG5mdW5jdGlvbiBuZXdIaXN0b3J5RW50cnkoXG4gIGN1cnJVUkw6IHN0cmluZyxcbiAgaGFzUHJldlVSTDogYm9vbGVhbixcbiAgcHJldkVudHJ5PzogSGlzdG9yeUVudHJ5LFxuICBleHRyYT86IGFueVxuKTogSGlzdG9yeUVudHJ5IHtcbiAgVHJhY2tlci5nZXRFdmVudERpc3BhdGNoRnVuYyhcImhpc3RvcnlcIikoeyB1cmw6IGN1cnJVUkwsIGV4dHJhIH0pO1xuICByZXR1cm4ge1xuICAgIGN1cnJVUkwsXG4gICAgaGFzUHJldlVSTCxcbiAgICBwcmV2RW50cnksXG4gICAgZXh0cmEsXG4gICAgbmV4dEVudHJpZXM6IFtdLFxuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgSGlzdG9yeSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yd2FyZCh1cmw6IHN0cmluZywgZXh0cmE/OiBhbnkpOiBzdHJpbmcge1xuICAgIGNvbnN0IGhpc3RFbnQgPSBuZXdIaXN0b3J5RW50cnkodXJsLCB0cnVlLCBIaXN0b3J5LmN1cnJoaXN0b3J5LCBleHRyYSk7XG4gICAgSGlzdG9yeS5jdXJyaGlzdG9yeS5uZXh0RW50cmllcy5wdXNoKGhpc3RFbnQpO1xuICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkgPSBoaXN0RW50O1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNhbkJhY2t3YXJkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBIaXN0b3J5LmN1cnJoaXN0b3J5Lmhhc1ByZXZVUkwgJiZcbiAgICAgICFIaXN0b3J5LmN1cnJoaXN0b3J5LnByZXZFbnRyeT8uZXh0cmE/LndyYXBwZXJcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBiYWNrd2FyZCgpOiBzdHJpbmcge1xuICAgIGlmICghSGlzdG9yeS5jYW5CYWNrd2FyZCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ28gYmFjayBhbnkgZnVydGhlci5cIik7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKEhpc3RvcnkuY3Vycmhpc3RvcnkucHJldkVudHJ5KTtcbiAgICBjb25zdCBwcmV2RW50cnkgPSBIaXN0b3J5LmN1cnJoaXN0b3J5LnByZXZFbnRyeSBhcyBIaXN0b3J5RW50cnk7XG4gICAgY29uc3QgbmV4dFVSTCA9IHByZXZFbnRyeS5jdXJyVVJMO1xuICAgIGNvbnN0IGhpc3RFbnQgPSBuZXdIaXN0b3J5RW50cnkoXG4gICAgICBuZXh0VVJMLFxuICAgICAgcHJldkVudHJ5Lmhhc1ByZXZVUkwsXG4gICAgICBwcmV2RW50cnkucHJldkVudHJ5LFxuICAgICAgeyBiYWNrOiB0cnVlIH1cbiAgICApO1xuICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkgPSBoaXN0RW50O1xuICAgIHJldHVybiBuZXh0VVJMO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBzZXR1cCh1cmw6IHN0cmluZywgZXh0cmE/OiBhbnkpIHtcbiAgICBIaXN0b3J5LmZpcnN0SGlzdG9yeSA9IG5ld0hpc3RvcnlFbnRyeSh1cmwsIGZhbHNlLCB1bmRlZmluZWQsIGV4dHJhKTtcbiAgICBIaXN0b3J5LmN1cnJoaXN0b3J5ID0gSGlzdG9yeS5maXJzdEhpc3Rvcnk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBmaXJzdEhpc3Rvcnk6IEhpc3RvcnlFbnRyeTtcbiAgcHJpdmF0ZSBzdGF0aWMgY3Vycmhpc3Rvcnk6IEhpc3RvcnlFbnRyeTtcbn1cblxuKHdpbmRvdyBhcyBhbnkpLmggPSBIaXN0b3J5O1xuIiwiaW1wb3J0IHsgRCB9IGZyb20gXCIuLi9kb20vZG9jdW1lbnRcIjtcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4uL2RvbS9lbGVtZW50c1wiO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi4vZG9tL21vZGFsXCI7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgZXJyb3IsIGxvZyB9IGZyb20gXCIuLi91dGlscy9jb25zb2xlX3dyYXBwZXJcIjtcbmltcG9ydCB7IG5vb3AgfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3NcIjtcbmltcG9ydCB7IEhUTUxMb2FkZXIgfSBmcm9tIFwiLi4vdXRpbHMvaHRtbF9sb2FkZXJcIjtcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tIFwiLi9oaXN0b3J5XCI7XG5sb2coXCJyb3V0ZXIgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY29uc3QgZW51bSBSb3V0ZXJNb2RlIHtcbiAgT0ZGLFxuICBPTixcbiAgU1RBTkRBUkRfQUxMT1dBTkNFUyxcbn1cblxuLy8gVE9ETzogTmVlZCB0byBpbXByb3ZlIHRoaXMgdG8gdGFrZSBpbiBhIGZ1bmN0aW9uIGZvciB0aGUgYWxsb3dhbmNlIG9yIHJlZHVjZSBhYnN0cmFjdG5lc3Mgb3ZlcmFsbC5cblxuZXhwb3J0IGNvbnN0IGVudW0gUm91dGVyTW9kdWxlIHtcbiAgQSA9IFwiQVwiLFxuICBJTUcgPSBcIklNR1wiLFxuICBGT1JNID0gXCJGT1JNXCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVyQ29uZmlnIHtcbiAgbW9kdWxlOiBSb3V0ZXJNb2R1bGU7XG4gIG1vZGU6IFJvdXRlck1vZGU7XG59XG5cbmludGVyZmFjZSBGdWxsUm91dGVyQ29uZmlnIGV4dGVuZHMgUm91dGVyQ29uZmlnIHtcbiAgc2V0dXAoY29uZmlnOiBGdWxsUm91dGVyQ29uZmlnLCBlbGVtOiBFbGVtZW50KTogYW55O1xufVxuXG5mdW5jdGlvbiB0ZXN0T24oZWxlbTogRWxlbWVudCwgY29uZmlnOiBSb3V0ZXJDb25maWcpIHtcbiAgcmV0dXJuIChcbiAgICBlbGVtLnRhZ05hbWUgPT09IGNvbmZpZy5tb2R1bGUgJiZcbiAgICAoY29uZmlnLm1vZGUgPT09IFJvdXRlck1vZGUuT04gfHxcbiAgICAgIGNvbmZpZy5tb2RlID09PSBSb3V0ZXJNb2RlLlNUQU5EQVJEX0FMTE9XQU5DRVMpXG4gICk7XG59XG5mdW5jdGlvbiB0ZXN0QWxsb3dhbmNlKGNvbmZpZzogUm91dGVyQ29uZmlnKSB7XG4gIHJldHVybiBjb25maWcubW9kZSA9PT0gUm91dGVyTW9kZS5TVEFOREFSRF9BTExPV0FOQ0VTO1xufVxuXG5leHBvcnQgY2xhc3MgUm91dGVyIHtcbiAgcHVibGljIHN0YXRpYyBIQVNIX1RBR1MgPSBuZXcgUmVnRXhwKFwiI1wiKTtcbiAgcHVibGljIHN0YXRpYyBFTVBUWSA9IG5ldyBSZWdFeHAoXCJeJFwiKTtcbiAgcHVibGljIHN0YXRpYyBBVF9TWU1CT0wgPSBuZXcgUmVnRXhwKFwiQFwiKTtcblxuICBwdWJsaWMgc3RhdGljIEhBU0hfVEFHX1JFU1BPTkRFUiA9IG5vb3A7XG4gIHB1YmxpYyBzdGF0aWMgRU1QVFlfUkVTUE9OREVSID0gKGV2ZW50OiBFdmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgcHVibGljIHN0YXRpYyBBVF9TWU1CT0xfUkVTUE9OREVSID0gKGV2ZW50OiBFdmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBwdWJsaWMgc3RhdGljIHBhdGhQcmVmaXggPSBcIlwiO1xuXG4gIHB1YmxpYyBzdGF0aWMgY29uZmlndXJlKGNvbmZpZ3M6IFJvdXRlckNvbmZpZ1tdLCBwYXRoUHJlZml4OiBzdHJpbmcpIHtcbiAgICBjb25maWdzLmZvckVhY2goKGNvbmZpZykgPT4ge1xuICAgICAgUm91dGVyLmNvbmZpZ3Muc2V0KGNvbmZpZy5tb2R1bGUsIFJvdXRlci51cGdyYWRlQ29uZmlnKGNvbmZpZykpO1xuICAgIH0pO1xuICAgIFJvdXRlci5wYXRoUHJlZml4ID0gcGF0aFByZWZpeDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2V0dXAoZWxlbTogRWxlbWVudCB8IHN0cmluZykge1xuICAgIEQuZWFjaFJlY3VyKGVsZW0sIChub2RlKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGNvbmZpZyBvZiBSb3V0ZXIuY29uZmlncy52YWx1ZXMoKSkge1xuICAgICAgICBpZiAodGVzdE9uKG5vZGUsIGNvbmZpZykpIHtcbiAgICAgICAgICBjb25maWcuc2V0dXAoY29uZmlnLCBub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBTVEFOREFSRF9MSU5LX0xJU1RFTkVSKGU6IE1vdXNlRXZlbnQpIHtcbiAgICByZXR1cm4gZXJyb3IoKCkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgICBjb25zdCB1cmwgPSB0YXJnZXQuaHJlZjtcbiAgICAgIEhpc3RvcnkuZm9yd2FyZChSb3V0ZXIuZ2V0UGF0aE5hbWUodXJsKSk7XG4gICAgICBjb25zdCByZXQgPSBIVE1MTG9hZGVyLmxvYWRVUkwodXJsLCBFbGVtZW50cy5odG1sTG9jKTtcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIm5ld1BhZ2VMb2FkXCIpKTtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIE9OX0NPTVBMRVRFX1NMTChwb3N0OiAoZTogTW91c2VFdmVudCkgPT4gYW55KSB7XG4gICAgcmV0dXJuIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBlcnJvcihhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IFJvdXRlci5TVEFOREFSRF9MSU5LX0xJU1RFTkVSKGUpO1xuICAgICAgICBwb3N0KGUpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgSU1BR0VfTElOS19MSVNURU5FUihlOiBNb3VzZUV2ZW50KSB7XG4gICAgcmV0dXJuIGVycm9yKCgpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgRk9STV9PRkZfTElTVEVORVIoZTogRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiQWxsIGZvcm1zIGV4Y2VwdCBmb3IgdGhlIG9uZSBpbiB0aGUgdG9wIGhlYWRlciBhcmUgaW5hY3RpdmUuXCJcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0QWxsb3dhbmNlc09uKCkge1xuICAgIFJvdXRlci5yZWdpc3RlckFsbG93YW5jZShcbiAgICAgIHsgcmVnZXg6IFJvdXRlci5FTVBUWSwgZnVuYzogUm91dGVyLkVNUFRZX1JFU1BPTkRFUiB9LFxuICAgICAgeyByZWdleDogUm91dGVyLkhBU0hfVEFHUywgZnVuYzogUm91dGVyLkhBU0hfVEFHX1JFU1BPTkRFUiB9LFxuICAgICAgeyByZWdleDogUm91dGVyLkFUX1NZTUJPTCwgZnVuYzogUm91dGVyLkFUX1NZTUJPTF9SRVNQT05ERVIgfVxuICAgICk7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0QWxsb3dhbmNlc09mZigpIHtcbiAgICBSb3V0ZXIudW5yZWdpc3RlckFsbG93YW5jZShcbiAgICAgIFJvdXRlci5FTVBUWSxcbiAgICAgIFJvdXRlci5IQVNIX1RBR1MsXG4gICAgICBSb3V0ZXIuQVRfU1lNQk9MXG4gICAgKTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyQWxsb3dhbmNlKFxuICAgIC4uLnJlZ2V4czogQXJyYXk8eyByZWdleDogUmVnRXhwOyBmdW5jOiAoZXZlbnQ6IEV2ZW50KSA9PiBhbnkgfT5cbiAgKSB7XG4gICAgcmVnZXhzLmZvckVhY2goKHJlZ2V4KSA9PlxuICAgICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLnNldChyZWdleC5yZWdleCwgcmVnZXguZnVuYylcbiAgICApO1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgdW5yZWdpc3RlckFsbG93YW5jZSguLi5yZWdleHM6IFJlZ0V4cFtdKSB7XG4gICAgcmVnZXhzLmZvckVhY2goKHJlZ2V4KSA9PiBSb3V0ZXIubGlua0FsbG93YW5jZXMuZGVsZXRlKHJlZ2V4KSk7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBjbGVhckFsbG93YW5jZXMoKSB7XG4gICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLmNsZWFyKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGxvYWQodXJsOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBIaXN0b3J5LmZvcndhcmQoUm91dGVyLmdldFBhdGhOYW1lKHVybCkpO1xuICAgIGNvbnN0IHJldCA9IGF3YWl0IEhUTUxMb2FkZXIubG9hZFVSTCh1cmwsIEVsZW1lbnRzLmh0bWxMb2MpO1xuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIm5ld1BhZ2VMb2FkXCIpKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkV2l0aFBhdGhQcmVmaXgocGFnZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgcmV0ID0gSFRNTExvYWRlci5sb2FkVVJMKFJvdXRlci5wYXRoUHJlZml4ICsgcGFnZSwgRWxlbWVudHMuaHRtbExvYyk7XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwibmV3UGFnZUxvYWRcIikpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBTZXR1cEZ1bmN0aW9ucyA9IHtcbiAgICBBOiAoY29uZmlnOiBGdWxsUm91dGVyQ29uZmlnLCBlbGVtOiBFbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBhTm9kZSA9IGVsZW0gYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgICBpZiAodGVzdEFsbG93YW5jZShjb25maWcpKSB7XG4gICAgICAgIGxldCBwYXNzZXNSZWdleFRlc3QgPSB0cnVlO1xuICAgICAgICBjb25zdCBocmVmID0gYU5vZGUuaHJlZjtcbiAgICAgICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLmZvckVhY2goKGZ1bmMsIHJlZ2V4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVzdCA9IHJlZ2V4LnRlc3QoaHJlZik7XG4gICAgICAgICAgcGFzc2VzUmVnZXhUZXN0ID0gcGFzc2VzUmVnZXhUZXN0ICYmICF0ZXN0O1xuICAgICAgICAgIGlmICh0ZXN0KSB7XG4gICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgXCJjbGlja1wiLCBmdW5jKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocGFzc2VzUmVnZXhUZXN0KSB7XG4gICAgICAgICAgaWYgKGhyZWYuc3Vic3RyKGhyZWYubGVuZ3RoIC0gMykgPT09IFwicGRmXCIpIHtcbiAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCBcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgTW9kYWwuZGlzcGxheShocmVmKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgXCJjbGlja1wiLCAoZSkgPT5cbiAgICAgICAgICAgICAgUm91dGVyLlNUQU5EQVJEX0xJTktfTElTVEVORVIoZSBhcyBNb3VzZUV2ZW50KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCBcImNsaWNrXCIsIChlKSA9PlxuICAgICAgICAgIFJvdXRlci5TVEFOREFSRF9MSU5LX0xJU1RFTkVSKGUgYXMgTW91c2VFdmVudClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIElNRzogKGNvbmZpZzogRnVsbFJvdXRlckNvbmZpZywgZWxlbTogRWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgaW1nTm9kZSA9IGVsZW0gYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgIGlmICh0ZXN0QWxsb3dhbmNlKGNvbmZpZykpIHtcbiAgICAgICAgbGV0IHBhc3Nlc1JlZ2V4VGVzdCA9IHRydWU7XG4gICAgICAgIFJvdXRlci5saW5rQWxsb3dhbmNlcy5mb3JFYWNoKChmdW5jLCByZWdleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlc3QgPSAhcmVnZXgudGVzdChpbWdOb2RlLnNyYyk7XG4gICAgICAgICAgcGFzc2VzUmVnZXhUZXN0ID0gcGFzc2VzUmVnZXhUZXN0ICYmIHRlc3Q7XG4gICAgICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCBcImNsaWNrXCIsIGZ1bmMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChwYXNzZXNSZWdleFRlc3QpIHtcbiAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgXCJjbGlja1wiLCAoZSkgPT5cbiAgICAgICAgICAgIFJvdXRlci5JTUFHRV9MSU5LX0xJU1RFTkVSKGUgYXMgTW91c2VFdmVudClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgXCJjbGlja1wiLCAoZSkgPT5cbiAgICAgICAgICBSb3V0ZXIuSU1BR0VfTElOS19MSVNURU5FUihlIGFzIE1vdXNlRXZlbnQpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcbiAgICBGT1JNOiAoY29uZmlnOiBGdWxsUm91dGVyQ29uZmlnLCBlbGVtOiBFbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBmb3JtTm9kZSA9IGVsZW0gYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgICAgaWYgKHRlc3RBbGxvd2FuY2UoY29uZmlnKSkge1xuICAgICAgICBsZXQgcGFzc2VzUmVnZXhUZXN0ID0gdHJ1ZTtcbiAgICAgICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLmZvckVhY2goKGZ1bmMsIHJlZ2V4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVzdCA9ICFyZWdleC50ZXN0KGZvcm1Ob2RlLnNyYyk7XG4gICAgICAgICAgcGFzc2VzUmVnZXhUZXN0ID0gcGFzc2VzUmVnZXhUZXN0ICYmIHRlc3Q7XG4gICAgICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCBcImNsaWNrXCIsIGZ1bmMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChwYXNzZXNSZWdleFRlc3QpIHtcbiAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgXCJzdWJtaXRcIiwgUm91dGVyLkZPUk1fT0ZGX0xJU1RFTkVSKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sIFwic3VibWl0XCIsIFJvdXRlci5GT1JNX09GRl9MSVNURU5FUik7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcblxuICBwcml2YXRlIHN0YXRpYyBjb25maWdzID0gbmV3IE1hcDxSb3V0ZXJNb2R1bGUsIEZ1bGxSb3V0ZXJDb25maWc+KCk7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgbGlua0FsbG93YW5jZXM6IE1hcDxSZWdFeHAsIChldmVudDogRXZlbnQpID0+IGFueT4gPSBuZXcgTWFwPFxuICAgIFJlZ0V4cCxcbiAgICAoZXZlbnQ6IEV2ZW50KSA9PiBhbnlcbiAgPigpO1xuXG4gIHByaXZhdGUgc3RhdGljIHBhdGhSZWdleCA9IC9cXC8oW1xcd10rLmh0bWwpLztcblxuICBwcml2YXRlIHN0YXRpYyB1cGdyYWRlQ29uZmlnKGNvbmZpZzogUm91dGVyQ29uZmlnKTogRnVsbFJvdXRlckNvbmZpZyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZHVsZTogY29uZmlnLm1vZHVsZSxcbiAgICAgIG1vZGU6IGNvbmZpZy5tb2RlLFxuICAgICAgc2V0dXA6IFJvdXRlci5TZXR1cEZ1bmN0aW9uc1tjb25maWcubW9kdWxlXSxcbiAgICB9O1xuICB9XG4gIHByaXZhdGUgc3RhdGljIGdldFBhdGhOYW1lKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCByZXQgPSBSb3V0ZXIucGF0aFJlZ2V4LmV4ZWModXJsKTtcbiAgICByZXR1cm4gcmV0ID09PSBudWxsID8gdXJsIDogcmV0Lmxlbmd0aCA+IDEgPyByZXRbMV0gOiB1cmw7XG4gIH1cbn1cbiIsImltcG9ydCB7IGlzVHJhY2tlckV2ZW50LCBvYmplY3RUb1RyYWNrZXJFdmVudCB9IGZyb20gXCIuLi9kYXRhLWxvZy9ldmVudFwiO1xuaW1wb3J0IHsgRXZlbnRSZWNlaXZlciB9IGZyb20gXCIuLi9kYXRhLWxvZy9yZWNlaXZlclwiO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi4vZG9tL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBUcmFja2VyRWxlbWVudHMgfSBmcm9tIFwiLi4vZG9tL3RyYWNrZXJfZWxlbXNcIjtcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2csIHNldERlYnVnTGV2ZWwgfSBmcm9tIFwiLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XG5pbXBvcnQgeyBTY2VuYXJpbyB9IGZyb20gXCIuLi91dGlscy9zY2VuYXJpb3NcIjtcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi8uLi9kYXRhLWxvZy9kYXRhXCI7XG5pbXBvcnQgeyBBbGxvd1N1Ym1pc3Npb24sIFN1Ym1pdEZvcm0gfSBmcm9tIFwiLi8uLi9kb20vc3VibWl0X2Zvcm1cIjtcblxubG9nKFwidHJhY2tlciBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja2VyQ29uZmlndXJhdGlvbiB7XG4gIGFsbG93U3VibWlzc2lvbjogQWxsb3dTdWJtaXNzaW9uO1xuICBkZWJ1Z0xldmVsOiBEZWJ1Z0xldmVsRW51bTtcbiAgYnVja2V0TmFtZTogc3RyaW5nO1xuICBrZXlQcmVmaXg6IHN0cmluZztcbiAgc2V0dXAoKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIFRyYWNrZXIge1xuICBwdWJsaWMgc3RhdGljIGxhc3RQb3MgPSB7IHg6IDAsIHk6IDAsIHRpbWU6IDAgfTtcblxuICBwdWJsaWMgc3RhdGljIGxvYWRTY2VuYXJpbyhzY2VuOiBTY2VuYXJpbykge1xuICAgIGxldCBzdWIgPSBzY2VuLmNvbnRleHQ7XG4gICAgaWYgKHN1Yi5sZW5ndGggPiA1MCkge1xuICAgICAgc3ViID0gc3ViLnN1YnN0cmluZygwLCA1MCk7XG4gICAgICBjb25zdCBpbmRzID0gW1xuICAgICAgICBzdWIubGFzdEluZGV4T2YoXCIgXCIpLFxuICAgICAgICBzdWIubGFzdEluZGV4T2YoXCIuXCIpLFxuICAgICAgICBzdWIubGFzdEluZGV4T2YoXCIsXCIpLFxuICAgICAgICBzdWIubGFzdEluZGV4T2YoXCI/XCIpLFxuICAgICAgICBzdWIubGFzdEluZGV4T2YoXCIhXCIpLFxuICAgICAgXTtcbiAgICAgIGNvbnN0IGluZCA9IE1hdGgubWF4KC4uLmluZHMpO1xuICAgICAgc3ViID0gc3ViLnN1YnN0cmluZygwLCBpbmQpICsgXCIuLi5cIjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coc2Nlbik7XG4gICAgY29uc29sZS5sb2coXCJsb2FkZWQgc2NlblwiKTtcbiAgICBFbGVtZW50cy5tdFRvcEJhbm5lclRleHQuaW5uZXJUZXh0ID0gc3ViO1xuICAgIEVsZW1lbnRzLm10U2NlbmFyaW9Db250ZXh0LmlubmVyVGV4dCA9IHNjZW4uY29udGV4dDtcbiAgICBFbGVtZW50cy5tdFNjZW5hcmlvUXVlc3Rpb24uaW5uZXJUZXh0ID0gc2Nlbi5xdWVzdGlvbjtcbiAgICBFbGVtZW50cy5odG1sTG9jLmRhdGFzZXQudGFzayA9IHNjZW4udGFnO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBzdGFydChjb25maWc6IFRyYWNrZXJDb25maWd1cmF0aW9uKSB7XG4gICAgc2V0RGVidWdMZXZlbChjb25maWcuZGVidWdMZXZlbCk7XG4gICAgLy8gY29uZmlndXJlIHRyYWNrZXIgc3BlY2lmaWMgZWxlbWVudHNcbiAgICBUcmFja2VyRWxlbWVudHMuc2V0dXBUcmFja2VyRWxlbWVudHMoKTtcbiAgICBTdWJtaXRGb3JtLnNldHVwKGNvbmZpZy5hbGxvd1N1Ym1pc3Npb24pO1xuICAgIGRhdGEuZGF0YS50YXNrID0gRWxlbWVudHMuaHRtbExvYy5kYXRhc2V0LnRhc2s7XG4gICAgY29uZmlnLnNldHVwKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyRXZlbnQoZXZlbnRUeXBlOiBzdHJpbmcpIHtcbiAgICBkYXRhLmxvZ3NbZXZlbnRUeXBlXSA9IFtdO1xuICAgIHRoaXMucmVjZWl2ZXIucmVnaXN0ZXIoZXZlbnRUeXBlLCAoZXZlbnQpID0+IHtcbiAgICAgIGRhdGEubG9nc1tldmVudFR5cGVdLnB1c2goZXZlbnQpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmdldEV2ZW50RGlzcGF0Y2hGdW5jKGV2ZW50VHlwZSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEV2ZW50RGlzcGF0Y2hGdW5jKGV2ZW50VHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChldkRhdGE6IGFueSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBldkRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYgKCFpc1RyYWNrZXJFdmVudChldkRhdGEpKSB7XG4gICAgICAgICAgb2JqZWN0VG9UcmFja2VyRXZlbnQoZXZEYXRhLCBldmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVjZWl2ZXIuZG9FdmVudChldkRhdGEpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGF0dGFjaERhdGEoa2V5OiBzdHJpbmcsIGF0dHJpYnV0ZTogYW55KSB7XG4gICAgZGF0YS5kYXRhW2tleV0gPSBhdHRyaWJ1dGU7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNvbXB1dGVBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCBjb21wdXRlOiAodmFsOiBhbnkpID0+IGFueSkge1xuICAgIGRhdGEuZGF0YVtuYW1lXSA9IGNvbXB1dGUoZGF0YS5kYXRhW25hbWVdKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHJlY2VpdmVyID0gbmV3IEV2ZW50UmVjZWl2ZXIoKTtcbn1cbiIsImltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi8uLi9kYXRhLWxvZy9kYXRhXCI7XG5sb2coXCJjb25zb2xlIHdyYXBwZXIgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXJyb3I8VD4oXG4gIGZ1bmM6ICguLi5hcmdzOiBhbnkpID0+IFRcbik6IFByb21pc2U8VCB8IHVuZGVmaW5lZD4ge1xuICByZXR1cm4gZXJyb3JITyhmdW5jKSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JITzxUPihcbiAgZnVuYzogKC4uLmFyZ3M6IGFueSkgPT4gVFxuKTogKC4uLmFyZ3M6IGFueSkgPT4gUHJvbWlzZTxUIHwgdW5kZWZpbmVkPiB7XG4gIHJldHVybiBhc3luYyAoLi4uYXJnczogYW55KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jKGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkYXRhLmVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gRGVidWdMZXZlbEVudW0ge1xuICBOT05FID0gMSxcbiAgQkFTSUMgPSAyLFxuICBERVRBSUxFRCA9IDMsXG59XG5cbmxldCBkZWJ1Z0xldmVsOiBEZWJ1Z0xldmVsRW51bSA9IERlYnVnTGV2ZWxFbnVtLkJBU0lDO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVidWdMZXZlbChsZXZlbDogRGVidWdMZXZlbEVudW0pIHtcbiAgZGVidWdMZXZlbCA9IGxldmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nKG1lc3NhZ2U6IHN0cmluZywgaW1wb3J0YW5jZTogRGVidWdMZXZlbEVudW0pIHtcbiAgaWYgKGRlYnVnTGV2ZWwgPj0gaW1wb3J0YW5jZSkge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4vY29uc29sZV93cmFwcGVyXCI7XG5sb2coXCJmdW5jcyBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZW1wdHlcbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge31cbmV4cG9ydCBmdW5jdGlvbiBub3coKTogbnVtYmVyIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufVxuIiwiaW1wb3J0IHsgRCB9IGZyb20gXCIuLi9kb20vZG9jdW1lbnRcIjtcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi9jb25zb2xlX3dyYXBwZXJcIjtcbmltcG9ydCB7IG5vb3AgfSBmcm9tIFwiLi9mdW5jc1wiO1xubG9nKFwiaHRtbCBsb2FkZXIgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgaW50ZXJmYWNlIENhY2hlIHtcbiAgW25hbWU6IHN0cmluZ106IEVsZW1lbnQ7XG59XG5leHBvcnQgY2xhc3MgSFRNTExvYWRlciB7XG4gIHB1YmxpYyBzdGF0aWMgQ0FDSEU6IENhY2hlID0ge307XG5cbiAgcHVibGljIHN0YXRpYyBmaW5pc2goKSB7XG4gICAgSFRNTExvYWRlci5maW5pc2hlZCA9IHRydWU7XG4gICAgSFRNTExvYWRlci5mbGF0dGVuVFNMb2FkVGFncygpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpc0ZpbmlzaGVkKCkge1xuICAgIHJldHVybiBIVE1MTG9hZGVyLmZpbmlzaGVkO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjYWNoZUhUTUwobmFtZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcbiAgICBpZiAoSFRNTExvYWRlci5maW5pc2hlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNhbm5vdCBjYWNoZSBuZXcgSFRNTCBlbnRpdGllcyBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZC5cIlxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgdHNsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRzLWxvYWRcIik7XG4gICAgdHNsLmRhdGFzZXQubmFtZSA9IG5hbWU7XG4gICAgdHNsLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5DQUNIRVtuYW1lXSA9IHRzbDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJQb3N0TG9hZEZ1bmMoZnVuYzogKCkgPT4gYW55KSB7XG4gICAgbG9nKFwicmVnc2l0ZXIgcG9zdCBsb2FkIGZ1bmN0aW9uXCIsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICBIVE1MTG9hZGVyLnBvc3RMb2FkRnVuYyA9IGZ1bmM7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGxvYWQoaHRtbDogc3RyaW5nLCBlbGVtOiBFbGVtZW50IHwgc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxvZyhcImJlZ2luIGxvYWRcIiwgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gRC5lbGVtKGVsZW0pO1xuICAgICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhjb250ZXh0KTtcbiAgICAgICAgY29uc3QgZnJhZyA9IHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChodG1sKTtcbiAgICAgICAgSFRNTExvYWRlci5yZW1vdmVUYWdzRnJvbURvY3VtZW50RnJhZ21lbnQoZnJhZywgXCJzY3JpcHRcIik7XG4gICAgICAgIEhUTUxMb2FkZXIubG9hZEFsbENhY2hlZEVsZW1lbnRzKGZyYWcpO1xuICAgICAgICBjb250ZXh0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGNvbnRleHQuYXBwZW5kQ2hpbGQoZnJhZyk7XG4gICAgICAgIGxvZyhcImVuZCBsb2FkXCIsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgSFRNTExvYWRlci5wb3N0TG9hZEZ1bmMoKTtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZFVSTCh1cmw6IHN0cmluZywgZWxlbTogRWxlbWVudCB8IHN0cmluZykge1xuICAgIHJldHVybiBIVE1MTG9hZGVyLmxvYWQoYXdhaXQgSFRNTExvYWRlci5nZXRIVE1MKHVybCksIGVsZW0pO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRIVE1MKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBsb2coXCJiZWdpbiByZXF1ZXN0XCIsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcbiAgICAgICAgcmVxdWVzdC5zZW5kKG51bGwpO1xuICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBsb2coXCJyZXNvbHZlIHJlcXVlc3RcIiwgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xuICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZmluaXNoZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIHN0YXRpYyBwb3N0TG9hZEZ1bmM6ICgpID0+IGFueSA9IG5vb3A7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVtb3ZlVGFnc0Zyb21Eb2N1bWVudEZyYWdtZW50KFxuICAgIGZyYWc6IERvY3VtZW50RnJhZ21lbnQsXG4gICAgdGFnTmFtZTogc3RyaW5nXG4gICkge1xuICAgIGZyYWcucXVlcnlTZWxlY3RvckFsbCh0YWdOYW1lKS5mb3JFYWNoKCh0YWcpID0+IGZyYWcucmVtb3ZlQ2hpbGQodGFnKSk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBmbGF0dGVuVFNMb2FkVGFncygpIHtcbiAgICBsb2coXCJGbGF0dGVuaW5nXCIsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICBjb25zdCBzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgT2JqZWN0LmtleXMoSFRNTExvYWRlci5DQUNIRSkuZm9yRWFjaChcbiAgICAgIChuYW1lKSA9PlxuICAgICAgICAoSFRNTExvYWRlci5DQUNIRVtuYW1lXSA9IEhUTUxMb2FkZXIuZmxhdHRlblRTTG9hZFRhZyhcbiAgICAgICAgICBIVE1MTG9hZGVyLmdldENhY2hlZENvbnRlbnQobmFtZSkgYXMgRWxlbWVudCxcbiAgICAgICAgICBzLFxuICAgICAgICAgIDBcbiAgICAgICAgKSBhcyBFbGVtZW50KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBtdWx0aXBsZVRhYnMobjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgcmV0ID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgcmV0ICs9IFwiXFx0XCI7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBmbGF0dGVuVFNMb2FkVGFnKFxuICAgIGVsZW06IEVsZW1lbnQsXG4gICAgZmxhdHRlbmVkOiBTZXQ8c3RyaW5nPixcbiAgICBjb3VudDogbnVtYmVyXG4gICk6IEVsZW1lbnQgfCBudWxsIHtcbiAgICBjb25zdCB0YWJzID0gSFRNTExvYWRlci5tdWx0aXBsZVRhYnMoY291bnQpO1xuICAgIGlmIChjb3VudCA+IDEwMCkge1xuICAgICAgYWxlcnQoXCJDaGVjayB0aGUgY29uc29sZSwgYW4gZXJyb3IgaGFzIG9jY3VycmVkLlwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJJdCBzZWVtcyBsaWtlIHlvdSBtaWdodCBoYXZlIGluZmluaXRlbHkgcmVjdXJzaXZlbHkgbmVzdGVkIHRhZ3MuXCIgK1xuICAgICAgICAgIFwiXFxuSGVyZSBhcmUgYWxsIG9mIHRoZSB0YWdzIHRoYXQgaGF2ZSBiZWVuIGZsYXR0ZW5lZCBzbyBmYXI6IFwiICtcbiAgICAgICAgICBmbGF0dGVuZWQgK1xuICAgICAgICAgIFwiXFxuSGVyZSBpcyB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBlbGVtZW50OiBcIiArXG4gICAgICAgICAgZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIilcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IG5hbWUgPSBlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKTtcbiAgICBpZiAobmFtZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRlbnQgPSBIVE1MTG9hZGVyLmdldENhY2hlZENvbnRlbnQobmFtZSk7XG4gICAgaWYgKGNvbnRlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoZmxhdHRlbmVkLmhhcyhuYW1lKSkge1xuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuICAgIGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbChcInNjcmlwdFwiKS5mb3JFYWNoKChlKSA9PiBlLnJlbW92ZSgpKTtcbiAgICBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0cy1sb2FkXCIpLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gSFRNTExvYWRlci5mbGF0dGVuVFNMb2FkVGFnKGUsIGZsYXR0ZW5lZCwgY291bnQgKyAxKTtcbiAgICAgIGlmIChjaGlsZCAhPT0gbnVsbCkge1xuICAgICAgICBlLnJlcGxhY2VXaXRoKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBmbGF0dGVuZWQuYWRkKG5hbWUpO1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0Q2FjaGVkQ29udGVudChcbiAgICBuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkXG4gICk6IEVsZW1lbnQgfCBudWxsIHtcbiAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkIHx8IG5hbWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBjb250ZW50ID0gSFRNTExvYWRlci5DQUNIRVtuYW1lXTtcbiAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGxvYWRBbGxDYWNoZWRFbGVtZW50cyhmcmFnOiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgZnJhZy5xdWVyeVNlbGVjdG9yQWxsKFwidHMtbG9hZFwiKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIik7XG4gICAgICBjb25zdCBjb250ZW50ID0gSFRNTExvYWRlci5nZXRDYWNoZWRDb250ZW50KG5hbWUpO1xuICAgICAgaWYgKGNvbnRlbnQgIT0gbnVsbCkge1xuICAgICAgICBlbGVtLnJlcGxhY2VXaXRoKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gXCIuLi9kb20vZWxlbWVudHNcIjtcbmltcG9ydCB7IEQgfSBmcm9tIFwiLi8uLi9kb20vZG9jdW1lbnRcIjtcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi9jb25zb2xlX3dyYXBwZXJcIjtcbmxvZyhcImlkIGdlbmVyYXRvciBsb2FkZWRcIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNsYXNzIElER2VuZXJhdG9yIHtcbiAgcHVibGljIHN0YXRpYyByZXNldCgpIHtcbiAgICBJREdlbmVyYXRvci5pZENvdW50ID0gMDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG5leHQoKSB7XG4gICAgSURHZW5lcmF0b3IuaWRDb3VudCArPSAxO1xuICAgIHJldHVybiBJREdlbmVyYXRvci5wcmVmaXggKyBJREdlbmVyYXRvci5pZENvdW50O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhcHBseUlEKGVsZW06IEVsZW1lbnQpIHtcbiAgICBlbGVtLmlkID0gZWxlbS5pZCA/IGVsZW0uaWQgOiBJREdlbmVyYXRvci5uZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlY3Vyc2l2ZWx5IGFkZHMgaWRzIHRvIGFsbCBlbGVtZW50cyB0aGF0IGFyZSBiZWxvdyB0aGUgZ2l2ZW5cbiAgICogZWxlbWVudCBpbiB0aGUgaGVpcmFyY2h5LlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbSAtIHRoZSBlbGVtZW50IHRvIHN0YXJ0IGFwcGx5aW5nIGlkcyB0byBpdHMgY2hpbGRyZW4uXG4gICAqICAgICAgICAgICAgICAgICAgV2lsbCBub3QgYXBwbHkgYW4gaWQgdG8gdGhpcyBlbGVtZW50LlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhcHBseVJlY3VyKGVsZW06IEVsZW1lbnQgfCBzdHJpbmcpIHtcbiAgICBELmVhY2hSZWN1cihlbGVtLCB0aGlzLmFwcGx5SUQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIGlkcyB0byBhbGwgaHRtbCBlbGVtZW50cyBpbiB0aGUgdGFyZ2V0IGxvY2F0aW9uIGluIHRoZSBET00gdGhhdCBkbyBub3QgaGF2ZSBpZHMuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGF0dGFjaElkc1RvQWxsRWxlbWVudHMoKSB7XG4gICAgSURHZW5lcmF0b3IuYXBwbHlSZWN1cihFbGVtZW50cy5odG1sTG9jKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGlkQ291bnQgPSAwO1xuICBwcml2YXRlIHN0YXRpYyBwcmVmaXggPSBcImF1dG9fZ2VuX2lkX3VucV9cIjtcbn1cbiIsImNvbnN0IHFQYXJhbXMgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXM7XG5leHBvcnQgY29uc3QgcGFyYW1zID0ge1xuICB3dXN0bF9rZXk6IFwiXCIsXG4gIHNhbmRib3g6IGZhbHNlLFxuICBwcm9qZWN0OiBcIlwiLFxuICBpdGVyYXRpb246IDAsXG4gIHRhZzogXCJcIixcbn07XG50cnkge1xuICBxUGFyYW1zLmZvckVhY2goY29uc29sZS5sb2cpO1xuICBpZiAoXG4gICAgW1wid3VzdGxfa2V5XCIsIFwic2FuZGJveFwiLCBcInByb2plY3RcIiwgXCJpdGVyYXRpb25cIiwgXCJ0YWdcIl0uZXZlcnkoKGtleSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJrZXk6IFwiICsgcVBhcmFtcy5oYXMoa2V5KSk7XG4gICAgICByZXR1cm4gcVBhcmFtcy5oYXMoa2V5KTtcbiAgICB9KVxuICApIHtcbiAgICBwYXJhbXMud3VzdGxfa2V5ID0gcVBhcmFtcy5nZXQoXCJ3dXN0bF9rZXlcIikgYXMgc3RyaW5nO1xuICAgIHBhcmFtcy5zYW5kYm94ID0gcVBhcmFtcy5nZXQoXCJzYW5kYm94XCIpID09PSBcInRydWVcIjtcbiAgICBwYXJhbXMucHJvamVjdCA9IHFQYXJhbXMuZ2V0KFwicHJvamVjdFwiKSBhcyBzdHJpbmc7XG4gICAgcGFyYW1zLml0ZXJhdGlvbiA9IHBhcnNlSW50KHFQYXJhbXMuZ2V0KFwiaXRlcmF0aW9uXCIpIGFzIHN0cmluZywgMTApO1xuICAgIHBhcmFtcy50YWcgPSBxUGFyYW1zLmdldChcInRhZ1wiKSBhcyBzdHJpbmc7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJtaXNzaW5nIHF1ZXJ5IHBhcmFtc1wiKTtcbiAgICBhbGVydChcbiAgICAgIFwiVGhpcyBISVQgaXMgbWlzc2luZyBuZWNjZXNzYXJ5IG1ldGFkYXRhLCBzb3JyeSBmb3IgdGhlIGluY29udmVuaWVuY2UuIFBsZWFzZSBjb250YWN0IHRoZSBSZXF1ZXN0ZXIgYXMgdGhpcyBpcyBub3QgaW50ZW5kZWQgdG8gaGFwcGVuLlwiXG4gICAgKTtcbiAgfVxufSBjYXRjaCAoZSkge1xuICBjb25zb2xlLmxvZyhlKTtcbiAgYWxlcnQoZSk7XG4gIGFsZXJ0KFxuICAgIFwiVGhpcyBISVQgaXMgYnJva2VuLCBzb3JyeSBmb3IgdGhlIGluY29udmVuaWVuY2UuIFBsZWFzZSBjb250YWN0IHRoZSBSZXF1ZXN0ZXIgYXMgdGhpcyBpcyBub3QgaW50ZW5kZWQgdG8gaGFwcGVuLlwiXG4gICk7XG59XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4vY29uc29sZV93cmFwcGVyXCI7XG5cbmxvZyhcInJlYWR5IGxvYWRlZFwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5cbmxldCByZWFkeSA9IGZhbHNlO1xuXG5sZXQgcmVzb2x2ZUZ1bmM6ICh2YWw6IGJvb2xlYW4pID0+IGFueTtcbmxldCByZWplY3RGdW5jO1xuY29uc3QgcmVhZHlQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmU6ICh2YWw6IGJvb2xlYW4pID0+IGFueSwgcmVqZWN0KSA9PiB7XG4gIHJlc29sdmVGdW5jID0gcmVzb2x2ZTtcbiAgcmVqZWN0RnVuYyA9IHJlamVjdDtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGxvZyhcImRvY3VtZW50IGlzIHJlYWR5XCIsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgcmVhZHkgPSB0cnVlO1xuICByZXNvbHZlRnVuYyh0cnVlKTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWFkeSgpIHtcbiAgcmV0dXJuIHJlYWR5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdhaXRVbnRpbFJlYWR5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICByZXR1cm4gcmVhZHkgPyBQcm9taXNlLnJlc29sdmUodHJ1ZSkgOiByZWFkeVByb21pc2U7XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFNjZW5hcmlvIHtcbiAgY29udGV4dDogc3RyaW5nO1xuICBxdWVzdGlvbjogc3RyaW5nO1xuICB0YWc6IHN0cmluZztcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby12YXItcmVxdWlyZXNcbmV4cG9ydCBjb25zdCBzY2VuYXJpb3M6IFNjZW5hcmlvW10gPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9zY2VuYXJpb3Mvc2NlbmFyaW9zLmpzb25cIik7XG4od2luZG93IGFzIGFueSkuc2NlbmFyaW9zID0gc2NlbmFyaW9zO1xuIiwiaW1wb3J0IHsgRCB9IGZyb20gXCIuLy4uL2NvcmUvZG9tL2RvY3VtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBBY2NvcmRpb24ge1xuICBwdWJsaWMgc3RhdGljIHNldHVwQWxsKCkge1xuICAgIEFjY29yZGlvbi5kaXNjYXJkQWxsKCk7XG4gICAgY29uc3QgYWNjb3JkaW9ucyA9IEQuY2xheihcImFjY29yZGlvblwiKTtcbiAgICBmb3IgKGxldCBhY2NJbmRleCA9IDA7IGFjY0luZGV4IDwgYWNjb3JkaW9ucy5sZW5ndGg7ICsrYWNjSW5kZXgpIHtcbiAgICAgIGNvbnN0IGVsZW0gPSBhY2NvcmRpb25zLml0ZW0oYWNjSW5kZXgpO1xuICAgICAgaWYgKGVsZW0gPT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIEFjY29yZGlvbi5hY2NvcmRpb25zLnB1c2gobmV3IEFjY29yZGlvbihlbGVtKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkaXNjYXJkQWxsKCkge1xuICAgIEFjY29yZGlvbi5hY2NvcmRpb25zID0gW107XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBhY2NvcmRpb25zOiBBY2NvcmRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3V0ZXI6IEVsZW1lbnQpIHtcbiAgICBELmFkZEV2ZW50TGlzdGVuZXIob3V0ZXIsIFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLyogVG9nZ2xlIGJldHdlZW4gYWRkaW5nIGFuZCByZW1vdmluZyB0aGUgXCJhY3RpdmVcIiBjbGFzcyxcbiAgICAgICAgICAgICAgICB0byBoaWdobGlnaHQgdGhlIGJ1dHRvbiB0aGF0IGNvbnRyb2xzIHRoZSBwYW5lbCAqL1xuICAgICAgdGhpcy5vdXRlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXG4gICAgICAvKiBUb2dnbGUgYmV0d2VlbiBoaWRpbmcgYW5kIHNob3dpbmcgdGhlIGFjdGl2ZSBwYW5lbCAqL1xuICAgICAgY29uc3QgcGFuZWwgPSB0aGlzLm91dGVyLm5leHRFbGVtZW50U2libGluZyBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChwYW5lbC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICAgICAgcGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFuZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRvU29tZXRoaW5nKCkge1xuICBjb25zb2xlLmxvZyhcIlB1dCBzb21lIGNvZGUgaW4gaGVyZSFcIik7XG59XG4iLCJpbXBvcnQgeyBIVE1MTG9hZGVyIH0gZnJvbSBcIi4uL2NvcmUvdXRpbHMvaHRtbF9sb2FkZXJcIjtcbmltcG9ydCB7IEFjY29yZGlvbiB9IGZyb20gXCIuL2FjY29yZGlvblwiO1xuaW1wb3J0IHsgZG9Tb21ldGhpbmcgfSBmcm9tIFwiLi9kby1zb21ldGhpbmdcIjtcbmltcG9ydCB7IEhUTUxDb250ZW50LCBpdGVtc1RvQ2FjaGUgfSBmcm9tIFwiLi9odG1sLWltcG9ydHNcIjtcbmltcG9ydCB7IFNsaWRlc2hvdyB9IGZyb20gXCIuL3NsaWRlc2hvd1wiO1xuXG4vLyBQdXQgYWxsIGZ1bmN0aW9uIGNhbGxzIHRoYXQgbmVlZCB0byBiZSBtYWRlIG9uIGV2ZXJ5IHBhZ2UgbG9hZCBpbnNpZGUgdGhlIHNldHVwQWxsIGZ1bmN0aW9uIGJvZHkuXG5leHBvcnQgZnVuY3Rpb24gUHV0U3R1ZGVudFBhZ2VMb2FkT3BlcmF0aW9uc0luc2lkZVRoaXNTdHVkZW50Qm9keSgpIHtcbiAgLy8gVE9ETzogUHV0IGFsbCBvcGVyYXRpb25zIHRoYXQgeW91IHdhbnQgdG8gaGFwcGVuIG9uIGV2ZXIgcGFnZSBsb2FkIGluIHRoaXMgZnVuY3Rpb24uXG4gIC8vIEZvciBleGFtcGxlIHlvdSBjb3VsZCB3cml0ZTogU3RpY2t5LnNldHVwKClcbiAgZG9Tb21ldGhpbmcoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldHVwQWxsKCkge1xuICBhd2FpdCBuZXcgUHJvbWlzZSgocjogYW55KSA9PiBzZXRUaW1lb3V0KHIsIDEwMCkpO1xuICBjb25zb2xlLmxvZyhcInJlbG9hZGluZ1wiKTtcbiAgU2xpZGVzaG93LnNldHVwQWxsKCk7XG4gIEFjY29yZGlvbi5zZXR1cEFsbCgpO1xuICBQdXRTdHVkZW50UGFnZUxvYWRPcGVyYXRpb25zSW5zaWRlVGhpc1N0dWRlbnRCb2R5KCk7XG4gIGNvbnNvbGUubG9nKFwicmVsb2FkZWRcIik7XG59XG5cbml0ZW1zVG9DYWNoZS5mb3JFYWNoKChpdGVtOiBIVE1MQ29udGVudCkgPT4ge1xuICBIVE1MTG9hZGVyLmNhY2hlSFRNTChpdGVtLm5hbWUsIGl0ZW0uY29udGVudCk7XG59KTtcbih3aW5kb3cgYXMgYW55KS5IVE1MTG9hZGVyID0gSFRNTExvYWRlcjtcblxuY29uc29sZS5sb2coXCJkeW5hbWljLWRvbSBsb2FkZWRcIik7XG4vLyBEbyBub3QgdG91Y2ggdGhpcyBsaW5lLCBuZWVkZWQgdG8gcmVpbml0aWFsaXplIGNvZGUgaW4gdGhlIGR5bmFtaWMtZG9tLnRzIHNldHVwQWxsIGZ1bmN0aW9uXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm5ld1BhZ2VMb2FkXCIsICgpID0+IHNldHVwQWxsKCkpO1xuIiwiZGVjbGFyZSBmdW5jdGlvbiByZXF1aXJlKGlkOiBzdHJpbmcpOiBzdHJpbmc7XG5cbi8vIFRoaXMgZGVmaW5lcyB0aGUgZGF0YSB0aGF0IG5lZWRzIHRvIGJlIHBhc3NlZCB0byB0aGUgSFRNTExvYWRlciB0byBjYWNoZSB5b3VyIGh0bWwgY29udGVudC5cbmV4cG9ydCBpbnRlcmZhY2UgSFRNTENvbnRlbnQge1xuICBuYW1lOiBzdHJpbmc7IC8vIFRoZSBuYW1lIHRoYXQgeW91IHdpbGwgdXNlIHRvIHJlZmVyZW5jZSB0aGUgY29udGVudCBpbiB5b3VyIGh0bWwgcGFnZXMuXG4gIGNvbnRlbnQ6IHN0cmluZzsgLy8gVGhlIGFjdHVhbCBodG1sIHN0cmluZyB0aGF0IHdpbGwgYmUgcHVsbGVkIGZyb20gdGhlIHNvdXJjZSBmaWxlIHRoYXQgeW91IHNwZWNpZnkuXG59XG5cbi8vIEFuIEhUTUxDb250ZW50IG9iamVjdCBzaG91bGQgbG9vayBsaWtlIHRoZSBmb2xsb3dpbmc6XG4vLyB7XG4vLyAgICAgbmFtZTogJ2Zvb3RlcicsXG4vLyAgICAgY29udGVudDogcmVxdWlyZSgnLi9odG1sL2Zvb3Rlci5odG1sJyksXG4vLyB9XG5cbi8vIFRoZW4geW91IGNhbiByZWZlcmVuY2UgdGhhdCBjb250ZW50IGluIHlvdXIgaHRtbCB1c2luZyB0aGUgZm9sbG93aW5nIHRhZyB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIG5hbWUgYXR0cmlidXRlLlxuLy8gPHRzLWxvYWQgZGF0YS1uYW1lPVwiaGVhZGVyXCI+PC90cy1sb2FkPlxuXG4vLyBZb3UgY2FuIHNwZWNpZnkgYXMgbWFueSBhcyB5b3Ugd2FudCBpbnNpZGUgb2YgdGhlIGFycmF5IGFuZCB0aGV5IHdpbGwgYWxsIGJlIGJ1bmRsZWQgdXAgd2l0aCB5b3VyIHdlYnNpdGUuXG4vLyBNYWtlIHN1cmUgdG8gbWFrZSBhIGNvcnJlc3BvbmRpbmcgaHRtbCBmaWxlIGluIHRoZSBodG1sIGZpbGUgZm9sZGVyIGZvciBlYWNoIGVsZW1lbnQgeW91IHNwZWNpZnkuXG5cbmV4cG9ydCBjb25zdCBpdGVtc1RvQ2FjaGUgPSBbXG4gIC8vIEZlZWwgZnJlZSB0byBjaGFuZ2UgdGhlIGNvbnRlbnQgaW5zaWRlIGFueSBvZiB0aGUgaHRtbCBmaWxlcyBpbiB0aGUgaHRtbCBmaWxlIGZvbGRlciB0byBzdWl0IHlvdXIgbmVlZHMuXG4gIHtcbiAgICBuYW1lOiBcImhlYWRlclwiLFxuICAgIGNvbnRlbnQ6IHJlcXVpcmUoXCIuL2h0bWwvaGVhZGVyLmh0bWxcIiksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImZvb3RlclwiLFxuICAgIGNvbnRlbnQ6IHJlcXVpcmUoXCIuL2h0bWwvZm9vdGVyLmh0bWxcIiksXG4gIH0sXG4gIC8vIFB1dCBtb3JlIGl0ZW1zIGluIHRoZSBhcnJheSBiZWxvdyBoZXJlLlxuXTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9vdGVyIGlkPVxcXCJjb2xvcGhvblxcXCIgY2xhc3M9XFxcImZvb3RlclxcXCIgcm9sZT1cXFwiY29udGVudGluZm9cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyLXdpZGdldHNcXFwiPlxcbiAgICAgIDxhc2lkZSBjbGFzcz1cXFwid2lkZ2V0IHNpdGUtY29udGFjdFxcXCI+XFxuICAgICAgICA8aDIgY2xhc3M9XFxcImZvb3Rlci13aWRnZXQtdGl0bGVcXFwiPk51cnNlcnkgU2Nob29sPC9oMj5cXG4gICAgICAgIDxwPjY5MjYgRm9yZXN0IFBhcmsgUGFya3dheTwvcD5cXG4gICAgICAgIDxwPlN0LiBMb3VpcywgTU8gNjMxMzA8L3A+XFxuICAgICAgICA8cCBjbGFzcz1cXFwicGhvbmVcXFwiPjMxNC05MzUtNjY4OSA8c3Bhbj58PC9zcGFuPiBGYXg6IDMxNC05MzUtNzI0OTwvcD5cXG4gICAgICAgIDxwPlxcbiAgICAgICAgICA8YSBocmVmPVxcXCJmaWxlcy9tYWlsdG86bnVyc2VyeUB3dXN0bC5lZHVcXFwiPm51cnNlcnlAd3VzdGwuZWR1PC9hPlxcbiAgICAgICAgPC9wPlxcbiAgICAgIDwvYXNpZGU+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwid2lkZ2V0LXdyYXBwZXJcXFwiPlxcbiAgICAgICAgPGFzaWRlIGlkPVxcXCJ0ZXh0LTRcXFwiIGNsYXNzPVxcXCJ3aWRnZXQgd2lkZ2V0X3RleHQgd2lkZ2V0LWNvdW50LTJcXFwiPlxcbiAgICAgICAgICA8aDIgY2xhc3M9XFxcImZvb3Rlci13aWRnZXQtdGl0bGVcXFwiPkhvdXJzIG9mIE9wZXJhdGlvbjwvaDI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHR3aWRnZXRcXFwiPlxcbiAgICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgICAgQ2xhc3NlcyBtZWV0IE1vbi4gdGhyb3VnaCBGcmkuPGJyIC8+XFxuICAgICAgICAgICAgICBNb3JuaW5nOiA5LTExOjQ1IGEubS48YnIgLz5cXG4gICAgICAgICAgICAgIEFmdGVybm9vbjogMTI6MzAtMzoxNSBwLm0uPGJyIC8+XFxuICAgICAgICAgICAgICBGdWxsIGRheTogOSBhLm0uLTM6MTUgcC5tLlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2FzaWRlPlxcbiAgICAgICAgPGFzaWRlIGlkPVxcXCJ0ZXh0LTNcXFwiIGNsYXNzPVxcXCJ3aWRnZXQgd2lkZ2V0X3RleHQgd2lkZ2V0LWNvdW50LTJcXFwiPlxcbiAgICAgICAgICA8aDIgY2xhc3M9XFxcImZvb3Rlci13aWRnZXQtdGl0bGVcXFwiPkFwcGx5IGZvciB0aGUgTnVyc2VyeSBTY2hvb2w8L2gyPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0d2lkZ2V0XFxcIj5cXG4gICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgIEV4cGVyaWVuY2UgdGhlIGlubm92YXRpdmUgYXBwcm9hY2ggYW5kIGR5bmFtaWMgdGVhY2hpbmdcXG4gICAgICAgICAgICAgIGVudmlyb25tZW50IG9mIHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuXFxuICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcImZpbGVzL2FwcGx5Lmh0bWxcXFwiPlJlZ2lzdGVyIE5vdzwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2FzaWRlPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1pbmZvXFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwiZm9vdGVyLWNvcHlyaWdodFxcXCI+wqkyMDE5IFdhc2hpbmd0b24gVW5pdmVyc2l0eSBpbiBTdC4gTG91aXM8L3A+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9mb290ZXI+XFxuXCI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBpZD1cXFwid3VzdGwtYnJhbmRpbmdcXFwiPlxcbiAgPHN2Z1xcbiAgICB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiXFxuICAgIHdpZHRoPVxcXCIzMjFcXFwiXFxuICAgIGhlaWdodD1cXFwiMjhcXFwiXFxuICAgIHZpZXdCb3g9XFxcIjAgMCAzMjEgMjhcXFwiXFxuICAgIGNsYXNzPVxcXCJ3YXNodS1sb2dvXFxcIlxcbiAgICBhcmlhLWxhYmVsbGVkYnk9XFxcInRpdGxlXFxcIlxcbiAgPlxcbiAgICA8dGl0bGUgaWQ9XFxcInRpdGxlXFxcIj5XYXNoaW5ndG9uIFVuaXZlcnNpdHkgaW4gU3QuIExvdWlzPC90aXRsZT5cXG4gICAgPHBhdGhcXG4gICAgICBmaWxsPVxcXCIjRkZGXFxcIlxcbiAgICAgIGQ9XFxcIk0xMC40NiAxLjc2Yy0uMDkgMC00LjQxLjA0LTEwLjQ2LTEuMjFWMThjMCAuMjcuMDEuNDcuMDEuNDd2LjAyYy4wNC44MS4yOCAxLjQ1Ljc3IDIgLjMyLjM0Ljc2LjcgMS4zOCAxLjA1LjE3LjEuMzUuMTguNTUuMjguMTUuMDcuMzEuMTQuNDcuMi4xNC4wNi41NS4yNC42OS4yOWw2LjU5IDIuNSA2LjU5LTIuNWMuMTUtLjA1LjU2LS4yNC42OS0uMjkuMTYtLjA3LjMyLS4xNC40Ny0uMi4xOS0uMS4zOC0uMTguNTUtLjI4LjYyLS4zNSAxLjA2LS43IDEuMzgtMS4wNS40OC0uNTUuNzMtMS4xOS43Ny0ydi0uMDJzMC0uMTkuMDEtLjQ3Vi41NUMxNC44NiAxLjggMTAuNTUgMS43NiAxMC40NiAxLjc2elxcXCJcXG4gICAgPjwvcGF0aD5cXG4gICAgPHBhdGhcXG4gICAgICBmaWxsPVxcXCIjMDA3MzYwXFxcIlxcbiAgICAgIGQ9XFxcIk0xMC40NiAyLjhjLS4wOSAwLTQuMDMuMDQtOS41Ni0xLjF2MTUuOTVjMCAuMjUuMDEuNDMuMDEuNDR2LjAyYy4wNC43NC4yNSAxLjMzLjcgMS44My4yOS4zMS43LjY0IDEuMjYuOTUuMTUuMDkuMzIuMTcuNS4yNi4xNC4wNy4yOC4xMy40NC4xOS4xMi4wNS41LjIyLjYzLjI3bDYuMDMgMi4yOSA2LjAzLTIuMjljLjEzLS4wNS41MS0uMjIuNjMtLjI3LjE1LS4wNi4zLS4xMy40NC0uMTkuMTgtLjA5LjM1LS4xNy41LS4yNi41Ni0uMzEuOTctLjY0IDEuMjYtLjk1LjQ0LS41LjY2LTEuMDkuNy0xLjgzdi0uMDJzMC0uMTguMDEtLjQ0VjEuN2MtNS41NSAxLjE0LTkuNSAxLjEtOS41OCAxLjF6XFxcIlxcbiAgICA+PC9wYXRoPlxcbiAgICA8cGF0aFxcbiAgICAgIGZpbGw9XFxcIiNFMUM0QUNcXFwiXFxuICAgICAgZD1cXFwiTTEwLjQ2IDMuNzVjLS4wOCAwLTMuNjguMDQtOC43NC0xLjAydjQuMDhjNS4wNSAxLjA1IDguNjcgMS4wMiA4Ljc0IDEuMDJzMy42OC4wNCA4Ljc0LTEuMDJWMi43M2MtNS4wNiAxLjA1LTguNjYgMS4wMi04Ljc0IDEuMDJ6XFxcIlxcbiAgICA+PC9wYXRoPlxcbiAgICA8cGF0aFxcbiAgICAgIGZpbGw9XFxcIiNBNTE0MTdcXFwiXFxuICAgICAgZD1cXFwiTTEwLjQ2IDcuODNjLS4wOCAwLTMuNjguMDQtOC43NC0xLjAydjkuMDVjNS4wNSAxLjA1IDguNjcgMS4wMiA4Ljc0IDEuMDJzMy42OC4wNCA4Ljc0LTEuMDJWNi44MmMtNS4wNiAxLjA0LTguNjYgMS4wMS04Ljc0IDEuMDF6XFxcIlxcbiAgICA+PC9wYXRoPlxcbiAgICA8cGF0aFxcbiAgICAgIGZpbGw9XFxcIiNFMUM0QUNcXFwiXFxuICAgICAgZD1cXFwiTTEuNzIgMTcuNzJjLjAzLjY5LjIzIDEuMjMuNjQgMS42OC4yNi4yOC42NC41OCAxLjE1Ljg3LjE1LjA4LjI5LjE1LjQ2LjIzLjEzLjA2LjI2LjEyLjQuMTcuMTEuMDUuNDYuMi41OC4yNEwxMC40NiAyM2w1LjUxLTIuMDljLjEyLS4wNC40Ni0uMi41OC0uMjQuMTQtLjA2LjI3LS4xMi40LS4xNy4xNi0uMDguMzItLjE1LjQ2LS4yMy41MS0uMjkuODgtLjU4IDEuMTUtLjg3LjQxLS40Ni42LTEgLjY0LTEuNjh2LS4wMnMwLS4xNi4wMS0uNHYtMS40NGMtNS4wNSAxLjA1LTguNjcgMS4wMi04Ljc0IDEuMDJzLTMuNjguMDQtOC43NC0xLjAydjEuNDVjLS4wMi4yNS0uMDEuNDEtLjAxLjQxelxcXCJcXG4gICAgPjwvcGF0aD5cXG4gICAgPHBhdGhcXG4gICAgICBmaWxsPVxcXCIjMDA3MzYwXFxcIlxcbiAgICAgIGQ9XFxcIk00LjggMy42OWwuNDEgMS4yMyAxLjI5LjAxLTEuMDQuNzcuMzkgMS4yNC0xLjA1LS43Ni0xLjA1Ljc2LjM5LTEuMjQtMS4wNC0uNzcgMS4yOS0uMDEuNDEtMS4yM3ptMTEuMzEgMGwuNDIgMS4yMyAxLjI5LjAxLTEuMDQuNzcuMzkgMS4yNC0xLjA2LS43Ni0xLjA1Ljc2LjM5LTEuMjQtMS4wNC0uNzcgMS4yOS0uMDEuNDEtMS4yM3ptLTUuNjUuNDhsLjQyIDEuMjMgMS4yOS4wMS0xLjA0Ljc3LjM5IDEuMjQtMS4wNi0uNzYtMS4wNi43NS4zOS0xLjI0LTEuMDQtLjc3IDEuMy0uMDEuNDEtMS4yMnpNMTAuNDYgMTcuMjFsLS40Ni40NXYxLjIybC4yMy42NXYxLjA5aC40NXYtMS4wOWwuMjMtLjY1di0xLjIybC0uNDUtLjQ1em0uMjIgNC40MXYtLjY1aC0uNDV2LjY1bC0uMjMuNDIuNDYuNTYuNDYtLjU2LS4yNC0uNDJ6bS4zMy0uNjV2LjVsLjI5LjMxLjUxLS40MXYtLjQxaC0uOHptLjU0LTIuMDRsLS41NC42djEuMDloLjQ0di0uNjVsLjQzLS40Ni41NS4zNi4zNS0uMzZ2LS41OGgtMS4yM3ptLTEuNjQgMi4wNHYuNWwtLjI5LjMxLS41Mi0uNDF2LS40MWguODF6bS0uNTUtMi4wNGwuNTQuNnYxLjA5aC0uNDN2LS42NWwtLjQzLS40Ni0uNTUuMzYtLjM1LS4zNnYtLjU4aDEuMjJ6XFxcIlxcbiAgICA+PC9wYXRoPlxcbiAgICA8cGF0aFxcbiAgICAgIGZpbGw9XFxcIiNFMUM0QUNcXFwiXFxuICAgICAgZD1cXFwiTTE0LjYyIDkuMjd2NS4xOWgtMy40OWwtLjI1LjIxLS40My4zNy0uNDMtLjM3LS4yNS0uMjFINi4yOVY5LjI3bC0uNzQuNTR2NS4zOGg0LjEybC4zNy4zMS40My4zOC40My0uMzguMzctLjMxaDQuMTJWOS44MWwtLjc3LS41NHpcXFwiXFxuICAgID48L3BhdGg+XFxuICAgIDxwYXRoXFxuICAgICAgZmlsbD1cXFwiI0UxQzRBQ1xcXCJcXG4gICAgICBkPVxcXCJNMTEuMDIgOC44M2wtLjE0LjExLS40My4zOC0uNDMtLjM4LS4xMi0uMTFINy4wM3Y0Ljg5aDIuODhsLjIuMTcuMzUuMzEuMzYtLjMxLjE5LS4xN2gyLjg4VjguODNoLTIuODd6TTE2LjExIDEwLjM1djMuMzFjLjk1LS4xNCAxLjk4LS4zMSAzLjA4LS41NFY5LjgxYTUwLjUgNTAuNSAwIDAgMS0zLjA4LjU0em0tMTEuMzEgMGMtLjk1LS4xNC0xLjk4LS4zMS0zLjA4LS41NHYzLjMxYzEuMS4yMyAyLjE0LjQxIDMuMDguNTR2LTMuMzF6XFxcIlxcbiAgICA+PC9wYXRoPlxcbiAgICA8cGF0aFxcbiAgICAgIGZpbGw9XFxcIiMwMDczNjBcXFwiXFxuICAgICAgZD1cXFwiTTE2LjExIDE2Ljc2bC0uMzEuMzJ2Ljg2bC4xNS40NnYuNzdoLjMxdi0uNzdsLjE2LS40NnYtLjg2bC0uMzEtLjMyem0uMTYgMy4wOXYtLjQ1aC0uMzF2LjQ2bC0uMTUuMy4zMS40LjMyLS40LS4xNy0uMzF6bS4yMy0uNDV2LjM1bC4yLjIyLjM2LS4yOHYtLjI5aC0uNTZ6bS4zOC0xLjQzbC0uMzguNDN2Ljc3aC4zMXYtLjQ2bC4zLS4zMy4zOC4yNS4yNC0uMjV2LS40MWgtLjg1em0tMS4xNCAxLjQzdi4zNWwtLjIxLjIyLS4zNS0uMjh2LS4yOWguNTZ6bS0uMzktMS40M2wuMzkuNDN2Ljc3aC0uMzF2LS40NmwtLjMtLjMzLS4zOS4yNS0uMjQtLjI1di0uNDFoLjg1ek00LjggMTYuNzZsLS4zMi4zMnYuODZsLjE2LjQ2di43N2guMzF2LS43N2wuMTUtLjQ2di0uODZsLS4zLS4zMnptLjE2IDMuMDl2LS40NWgtLjMxdi40NmwtLjE2LjMuMzIuNC4zMS0uNC0uMTYtLjMxem0uMjItLjQ1di4zNWwuMjEuMjIuMzUtLjI4di0uMjloLS41NnptLjM5LTEuNDNsLS4zOS40M3YuNzdoLjMxdi0uNDZsLjMtLjMzLjM5LjI1LjI0LS4yNXYtLjQxaC0uODV6TTQuNDIgMTkuNHYuMzVsLS4yLjIyLS4zNi0uMjh2LS4yOWguNTZ6bS0uMzgtMS40M2wuMzguNDN2Ljc3aC0uMzF2LS40NmwtLjMtLjMzLS4zOC4yNS0uMjQtLjI1di0uNDFoLjg1elxcXCJcXG4gICAgPjwvcGF0aD5cXG4gICAgPGcgZmlsbD1cXFwiI0ZGRlxcXCIgY2xhc3M9XFxcIndhc2h1LWxvZ28tdGV4dFxcXCI+XFxuICAgICAgPHBhdGhcXG4gICAgICAgIGQ9XFxcIk0yMzIuNDcgOC4xNmMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNnMuNzYgMS41NyAxLjA3IDEuNTd6bTEzLjgyIDEyLjAzdi01LjA4YzAtMi4zNC0uNzYtNS43Ni00LjIyLTUuNzYtMi41MSAwLTMuODEgMi4zOC0zLjc2IDIuMDFWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0xLjA0IDEuMDEtMy4wNiAxLjYyLS4xMy4wMy0uNS4wNC0uNTEuMjcgMCAuNjUgMi4wMy0uODQgMS45OSAxLjY4djcuNjRjMCAxLjQzLS43IDEuNTUtMS4yMSAxLjY4LS4wMyAwLS4wNi0uMDEtLjEgMC0uNTItLjAzLTEuNjMtLjIzLTEuNjMtMS4zNVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLS45OCAxLjA4LTIuNjMgMS42NC0uMTMuMDMtLjM3LjA2LS4zNy4yNCAwIC42NSAxLjQ5LS42MSAxLjQyIDEuNjl2Ny4yN2MuMDYgMS44Ni0uOTYgMi4wNC0xLjUyIDIuMDQtLjg0LS4wMS0uNjMuMS0uNjMuMzYuMDMuMzEuNTMuMzMgMS4zNy4zNC4yOSAwIDEtLjExIDEuODItLjExIDEuMDcgMCAxLjg3LjEyIDIuNDEuMTIuMzEgMCAxLjE1LS4xMyAyLjUzLS4xMyAxLjUgMCAyLjAyLjEzIDIuNDYuMTMuMzkgMCAuODMtLjE3LjU3LS40NC0uNDItLjQxLTIuMjguMDYtMi4yOC0yLjA2VjEzLjFjLS4wMy0uNDkuODgtMi40IDMuMDYtMi40IDIuMSAwIDMuMDMgMi4zMSAzLjAzIDMuODV2NS43NmMtLjAzIDIuMjctLjggMS41NS0xLjExIDItLjE3LjI1LjEzLjM3LjQ2LjM3cy44OC0uMTMgMS44Ny0uMTNjMS4yNyAwIDEuODIuMTIgMi4xNi4xMi4yNiAwIC43My0uMi40NS0uNDQtLjY4LS41LTEuOTcuMy0xLjk1LTIuMDR6TTQ4LjkxIDIuNGMuMzctLjA1LjU1LS4xOS41NS0uMTkgMC0uMjQtLjA1LS4zLS4zOS0uMy0uNjUgMC0xLjA1LjExLTEuNjkuMTEtLjcxIDAtMS4yNS0uMDgtMS44NS0uMDgtLjM0IDAtLjMxLjExLS4zMS4zIDAgLjIxLjY1LjA4IDEuMDIuODkuMjEuNDQuMTMgMS4zNi0uMDggMS45bC01LjAxIDEzLjc0LTIuMTQtNi4xLS44My0yLjIzcy0uMTMuMDYuNDYtMS43OWwxLjE3LTMuNTJjLjU3LTEuNzMgMS4xNC0yLjY0IDEuODgtMi42NS45Mi0uMDIuOTItLjU3LjIxLS41N3MtMS4xMy4wNi0xLjc1LjA2Yy0uNjUgMC0uOTktLjA2LTEuNjktLjA2LS4yNiAwLS41NS4wOC0uNTIuMy4wMy4yMS40Mi4xNC43MS4zLjQ3LjI0Ljc4IDEuMjUuNDUgMi4zbC0xLjM4IDQuNDItMS41OC00LjEzYy0uMzEtLjc4LS43My0yLjUyLjAzLTIuNjcuNzMtLjE1LjYzLS41Mi4xOC0uNTItLjg2IDAtMS4zMi4xMS0yLjE1LjExLS45MSAwLTEuNTktLjExLTIuNDUtLjExLS4xOCAwLS41Mi4wMy0uNDIuMzguMDUuMjEuNDkuMTQuNzYuMyAxLjA1LjY4IDEuMjUgMS41NSAxLjYyIDIuNTJsMi4zIDYuNDhjLjQyIDEuMTYuNDUuNzQuMTEgMS43M2wtMiA1LjUtNC45NS0xNC4xMWMtLjM5LTEuMDYtLjYtMS43OS4yNi0yLjIuMzctLjE5LjQ3LS4yMi41Mi0uMy4wNS0uMDcuMS0uMzItLjQ1LS4zLS44OS4wMy0xLjQzLjExLTIuMzIuMTEtLjk0IDAtMS41OS0uMTEtMi40NS0uMTEtLjI5IDAtLjM0LjE0LS4zNC4zNSAwIC4zMy43MS4xMSAxLjMxLjgxLjM0LjM4Ljk5IDEuNjYgMS4xNCAyLjEyTDMyLjggMjIuM2MuMTEuMjUuMTQuNzYuNDguNzYuMjcgMCAuMzMtLjU3LjQyLS43OWwzLjEzLTguNTkgMy4wNSA4LjE2Yy4xMy4zMy4zMSAxLjIyLjYzIDEuMjIuMjYgMCAuMzYtLjQzLjQ5LS44M2w1LjktMTYuODdjLjUtMS4zNiAxLjA3LTIuNzkgMi4wMS0yLjk2em02NS40NiA2LjcxYy0zLjI2IDAtNS43NyAzLjI4LTUuNzcgNy4xMyAwIDEuOTYuNTIgMy41MSAxLjQyIDQuNjMtLjMxLjIxLS45Mi43LTIuMTUuNy0xLjA3IDAtMS42OC0uNjQtMS43NC0yVjExLjJsMy4zOC0uMDFjLjIyIDAgLjY1LTEuNDQuNjctMS41Mi4wNC0uMTguMS0uMzMuMTItLjQ2LjA0LS4yOC0uMTctLjMtLjM3LS4wMS0uMTUuMTUtLjMyLjU1LS45OS41NWgtMi44MWMwLTIuNDEuMDMtMy41MS0uMzUtMy41MS0uMzYgMC0uMy4xLS42MyAxLjE3LS40NCAxLjQ0LTEuNzkgMi4yMy0yLjYzIDIuNjgtLjM4LjA5LS44MS4xMi0xLjI5LjAxLS43NC0uMTYtMS42LTEuMDYtMy44My0xLjA2LTIuMzggMC00LjQ2IDEuOTUtNC40NiA0LjU1IDAgMS40LjYyIDIuNzYgMS43MSAzLjQ4LS4yLjEyLTEuNTMgMS4yNC0xLjM3IDIuNTYgMCAwLS4wMyAxLjM3IDEuMDUgMS44Mi0uMzMuMTQtLjY3LjM2LS45Ni42My0uNy0uMjYtMS43Mi0uMDYtMS43Mi0xLjkxVjE1LjFjMC0yLjM0LS43Ni01Ljc2LTQuMjItNS43Ni0yLjUxIDAtMy44MSAyLjM4LTMuNzYgMi4wMVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLS43My45OS0yLjkxIDEuNTUtLjEzLjAzLS40My4xLS40NC4zNCAwIC42NSAxLjc1LS43MSAxLjc2IDEuNjh2Ny42NGMwIDEuNjUtMS4zMSAxLjY1LTEuNTQgMS42Ny0uMSAwLS4xOSAwLS4zMS4wMS0uNTUtLjA1LTEuNTEtLjMtMS41MS0xLjM0VjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjk4IDEuMDgtMi42MyAxLjY0LS4xMy4wMy0uMzcuMDYtLjM3LjI0IDAgLjY1IDEuNDktLjYxIDEuNDIgMS42OXY3LjI3Yy4wNiAxLjc4LS44NiAyLjAxLTEuNDMgMi4wMy0uNjktLjA5LTEuMjItLjM3LTEuMjItMS40MXYtNS4xNGMwLTIuNjUtMS4wMS02LjA3LTQuMzMtNi4wNy0xLjQ3IDAtMi43NS44MS0zLjczIDEuOTJWMi40MWMwLS4zMS0uMTUtLjQ4LS4zMS0uNDktLjQtLjAzLTEuMDcgMS4xOS0yLjk2IDEuNjMtLjEzLjAzLS42Mi4wNy0uNjIuMjUgMCAuNjUgMS45Ny0uMzEgMS45OSAxLjY5VjIwLjZjMCAxLjUxLTEuMyAxLjMxLTEuNTMgMS43OS0uMDQuMjEuMDguMzEuMjYuMzEuNDIgMCAxLjU1LS4xMiAyLjM1LS4xMnMyLjEuMTIgMi42NC4xMmMuMzEgMCAuNDQtLjA2LjQ0LS40NC0uMjctLjUyLTIuMjguMjgtMi4yOC0yLjM3di02LjVjMC0xLjU3IDEuODctMi43OCAzLjAzLTIuNzguOTEgMCAzLjE0LjcxIDMuMTQgNC41M3Y1LjY0YzAgMS4xMS0xLjE4IDEuMjMtMS4yNyAxLjU3IDAgLjI0LjE1LjM0LjQyLjM0LjI4IDAgMS4xMS0uMTIgMi4xMi0uMTIuNTYgMCAxLjA3LjAzIDEuNS4wNi4yMy4wNS41Ny4wNS45OS4wNS4yOCAwIDEtLjExIDEuODItLjExczEuNDguMDcgMS45OS4xMWMuMS4wMS4yLjAxLjMuMDEuMDQgMCAuMDguMDEuMTIuMDFoLjAxYy4zMi4wMS42MSAwIC43NCAwIC4zMSAwIC44My0uMTMgMi4yLS4xMyAxLjUgMCAyLjAyLjEzIDIuNDYuMTMuMzkgMCAuODMtLjE3LjU3LS40NC0uNDItLjQxLTIuMjguMDYtMi4yOC0yLjA2di03LjA5Yy0uMDMtLjQ5Ljg4LTIuNCAzLjA2LTIuNCAyLjEgMCAzLjAzIDIuMzEgMy4wMyAzLjg1djUuNzZjMCAyLS44IDEuNTUtMS4xMSAyLS4xNy4yNS4xMy4zNy40Ni4zN3MuODgtLjEzIDEuODctLjEzYy45MyAwIDEuNTMuMDcgMS45MS4xLS4yOS40Mi0uNDguOS0uNTEgMS40LS4xNCAyLjUxIDIuOTMgMy40MSA1LjUxIDMuMzcgNS4xMi0uMDcgNi41Ny0zLjYyIDUuNTEtNS41MS0xLjA5LTEuOTUtMy40NC0xLjg3LTUuNjgtMS44Ni00LjIuMDItMy40MS0yLjU5LTEuNjktMi40OS40LjAyLjIuMTQgMS41Ny4xNCAyLjQzIDAgNC43Ni0xLjY2IDQuNy00LjM4LS4wMS0uMjMuMDUtMS4wMy0uNTMtMi4xNCAxLjE0LjAxLjY5IDAgMi40MSAwbC0uMDEgNy42M2MwIDMuNDUgMS42NCA0LjAzIDIuODcgNC4wMyAxLjc0IDAgMy4wMS0xLjE1IDMuMjQtMS42OCAxLjAzIDEuMSAyLjQ2IDEuNjggNC4xMiAxLjY4IDMuMTkgMCA1LjYtMi45MyA1LjYtNi43OCAwLTUuOC0zLjY1LTYuOTYtNS42MS02Ljk2ek05NS42MiAyMS43MmMuMjEtLjAxLjI3LjA4IDIuNjQuMTcgMi40NS4wNiAzLjMzLjc3IDMuNDkgMS40LjI2IDEuMTItLjUzIDMuNTItNC4wNSAzLjI5LTIuMjItLjE1LTIuODctMS4yLTMuMDMtMS40NC0uODQtMS4xNi0uMTYtMy4zNS45NS0zLjQyem0yLjAxLTQuNTdjLTIuMDggMC0yLjc4LTItMi43OC0zLjkxIDAtMS45Ni41OS0zLjU4IDIuNjctMy41OCAyLjExIDAgMi45NSAyLjE2IDIuOTUgNC4wNy4wMSAxLjkzLS44NyAzLjQyLTIuODQgMy40MnptMTYuOTkgNC44MWMtMy4wMyAwLTQuMjItMy43Ni00LjIyLTYuODIgMC0yLjY1IDEuMDQtNS4xIDMuNTctNS4xIDMuMDggMCA0LjE5IDMuMjkgNC4xOSA2LjUxLjAxIDMuODctMS4zNiA1LjQxLTMuNTQgNS40MXpcXFwiXFxuICAgICAgPjwvcGF0aD5cXG4gICAgICA8cGF0aFxcbiAgICAgICAgZD1cXFwiTTEzMS4xMSAyMC4xOXYtNS4wOGMwLTIuMzQtLjc2LTUuNzYtNC4yMi01Ljc2LTIuNTEgMC0zLjgxIDIuMzgtMy43NiAyLjAxVjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtMS4wNCAxLjAxLTMuMDcgMS42Mi0uMTMuMDMtLjUuMDQtLjUxLjI3IDAgLjY1IDIuMDMtLjg0IDIgMS42OHY3LjY0YzAgMi0xLjM1IDEuNTItMS42NiAyLjA0LS4xNS4yNy4yNS4zMy41OS4zMy4zMSAwIC44My0uMTMgMi4yLS4xMyAxLjUgMCAyLjAyLjEzIDIuNDYuMTMuMzkgMCAuODMtLjE3LjU3LS40NC0uNDItLjQxLTIuMjguMDYtMi4yOC0yLjA2di03LjA5Yy0uMDMtLjQ5Ljg4LTIuNCAzLjA2LTIuNCAyLjEgMCAzLjAzIDIuMzEgMy4wMyAzLjg1djUuNzZjLS4wMyAyLjI3LS44IDEuNTUtMS4xMSAyLS4xNy4yNS4xMy4zNy40Ni4zN3MuODgtLjEzIDEuODctLjEzYzEuMjcgMCAxLjgyLjEyIDIuMTYuMTIuMjYgMCAuNzMtLjIuNDQtLjQ0LS42NS0uNDktMS45NC4zMS0xLjkyLTIuMDN6TTc3LjQxIDguMTZjLjMzIDAgMS4wNy0xLjIgMS4wNy0xLjU3IDAtLjM2LS43NC0xLjYtMS4wNy0xLjYtLjMgMC0xLjA3IDEuMjYtMS4wNyAxLjYuMDIuMzUuNzcgMS41NyAxLjA3IDEuNTd6bS0xNy4zIDYuOTZjLS41MS0uMjQtMS4yNy0uNjgtMS42NS0uODgtMS42My0uODktMi4yNy0xLjQ3LTIuMzEtMi4zLS4wOC0xLjQ0IDEuMTUtMi4xOSAyLjIxLTIuMDggMi41NC0uMDQgMi44OCAyLjggMy4xNCAyLjguMzkgMCAuMjgtLjM3LjI4LTEuMjEgMC0uMjEuMDMtMS4yNy0uMTMtMS41Mi0uMzEtLjQ2LTIuMS0uNzQtMi41NS0uNzQtLjExIDAtLjUyLS4wMS0uNi0uMDItLjEzIDAtLjI4LjAyLS4yOC4wMi0xLjgxLS4wMy0zLjUgMS4xMS0zLjQ1IDMuNTMuMDUgMi4yMSAyLjY0IDMuNDcgNC4wNCA0LjMgMS4wNC41OSAyLjI2IDEuMTUgMi4yNCAyLjU3LS4wMiAxLjYxLTEuMjcgMi42OC0yLjYxIDIuNi0zLjE1LS4wNS0yLjcyLTQtMy4yOC00LS4zOSAwLS4zMSAxLS4zMSAxLjUyIDAgLjUxLS4wMS45OC0uMDEgMS4zOC0uMDcuMzYtLjIuNy0uNTQuNzItMS4yNC4wOC0uOTQtMS45LS45NC0yLjk1di02LjQzYy0uMDYtMS45Ny0xLjU0LTMuMjUtMy44LTMuMjUtMy4wOSAwLTUuMzEgMy44MS00LjI1IDUgLjI1LjI4IDEuMjYtLjggMS4zMi0uODZzLjA4LS4xMy4wOC0uMTNjLS4wMS0xLjMuOTctMi45NSAyLjM3LTMuMDkgMS42LS4xNSAyLjQgMS4wNCAyLjQgMi42NXYyLjA5Yy02LjA2IDEuMjEtNi45MyAzLjIyLTYuOTMgNC44NyAwIDIuMjEgMS41NSAzLjIgMy4yMyAzLjIgMS40NSAwIDIuODgtLjY5IDMuOTYtMS44LjM0IDEuMDMgMS4wMSAxLjY1IDIuMDIgMS42Mi4zNS0uMDEuNDEuMDkgMS40Ni0uMzcuMzctLjEuMzUtLjA5Ljc3LS4wMS41Ni4xOSAxLjMyLjU3IDIuNjYuNTcgMi4wMy4wMyAzLjg1LTEuODUgMy44NS00LjE3IDAtMS41LS40My0yLjQxLTIuMzktMy42M3ptLTguNDMgNC4zMmMwIDEuNjUtMS42OCAyLjUyLTIuNiAyLjUyLTEuMzggMC0yLjMzLS44OS0yLjMzLTIuNjYgMC0yLjczIDMuMjgtMy4yMyA0Ljk0LTMuNjctLjAxLS4wMS0uMDEgMy44MS0uMDEgMy44MXptMjE5Ljk5LjE5Yy0uMzEgMC0xLjA3IDEuMjktMS4wNyAxLjYzIDAgLjM0Ljc3IDEuNiAxLjA3IDEuNi4zMyAwIDEuMDctMS4yMyAxLjA3LTEuNnMtLjczLTEuNjMtMS4wNy0xLjYzem0zMy43MSAxLjEyVjkuOTJjMC0uNjEtLjM0LS43Ny0uNDQtLjc3LS4zOSAwLS42MS4xLS44OC4xNi0uMjcuMS0uNTguMjMtMS4yOS4yMy0uMTMgMC0uNzktLjEyLS43Ni4yNS4wNC4zNyAxLjU3LjE1IDEuNTggMS4yM3Y3LjgzYy0uMTIgMS4zNy0xLjI3IDIuODgtMi42NiAyLjg4LS4zMiAwLTIuMzktLjIyLTIuMzctMy42NVY5LjkyYzAtLjYxLS4zNC0uNzctLjQ0LS43Ny0uMzkgMC0uNjEuMS0uODguMTYtLjI3LjEtLjYxLjIyLTEuMzIuMTktLjM4LS4wMi0uNzktLjA3LS43My4yOS4wNi4zMiAxLjU5IDAgMS41OSAxLjIzdjcuNTFjMCAyLjc0IDEuNjEgNC4zMiAzLjU2IDQuMzIgMS4zIDAgMi40OS0uMjggMy4yNC0xLjhoLjA1djEuMzJjMCAuMTMuMDMuNDguMjIuNDguMzcgMCAuNTYtLjMuODMtLjQuMjktLjA3LjM3LS4zMyAxLjI4LS40Mi4zOS0uMDQuODItLjI0LjgyLS41LS4xMS0uNTMtMS40LjA2LTEuNC0uNzh6TTI5MC4wOSA5LjExYy0zLjI2IDAtNS43NyAzLjI4LTUuNzcgNy4xMyAwIDEuNzMuNDIgMy4xNSAxLjEzIDQuMjMtLjc5LjU3LTIuMjMgMS4xLTQuOTYgMS4xLTIuMTMgMC0xLjkzLS43NC0xLjkzLTIuNTVWNC41N2MwLTIuNjYgMS45OS0xLjg5IDIuMDMtMi4zNy4wMy0uMzQtLjI4LS4yNi0uNjEtLjI2LS4zOCAwLTEuMDcuMTUtMi41Mi4xNS0xLjI1IDAtMi4zNC0uMTItMi44OC0uMTItLjMzIDAtLjYzLjEtLjUyLjM1LjI1LjU3IDIuMTQuMDUgMi4xNCAxLjY1djE1LjFjMCAxLjQ0LjIxIDIuMzYtLjQ1IDIuNzMtLjgxLjQ5LTEuNzYuNTEtMS42OC44My4wNS4xOS40NS4yLjY4LjIgMS4wMiAwIDIuNDItLjEzIDMuNDQtLjE1IDEuOTQtLjA2IDMuODYuMTMgNS43OS4xMyAxLjEyIDAgMS40LS4yMiAyLjIyLTEuMzMuMDEtLjAyLjAyLS4wMy4wNC0uMDUgMS4wMS45NCAyLjM0IDEuNDQgMy44NyAxLjQ0IDMuMTkgMCA1LjYtMi45MyA1LjYtNi43OC4wMS01LjgyLTMuNjUtNi45OC01LjYyLTYuOTh6bS4yNiAxMi44NWMtMy4wMyAwLTQuMjItMy43Ni00LjIyLTYuODIgMC0yLjY1IDEuMDQtNS4xIDMuNTctNS4xIDMuMDggMCA0LjE5IDMuMjkgNC4xOSA2LjUxLjAxIDMuODctMS4zNiA1LjQxLTMuNTQgNS40MXptLTMyLjAzLTEwLjQ5Yy0uNzUtLjM3LTEuODUtMS4wNC0yLjM5LTEuMzYtMi4zNy0xLjM3LTMuMy0yLjI2LTMuMzctMy41Mi0uMTItMi4yMSAyLjA0LTMuNTIgMy41OC0zLjM1IDEuOTYgMCAzLjU3IDEuMTkgNC4yNCAzLjczLjA3LjI3LjMxLjg5LjU2Ljg5LjIyIDAgLjI2LS4yLjI0LS40NWwtLjMzLTQuMDJjLS4wMi0uMzMtLjE0LS40Mi0uMjctLjQyLS4yMiAwLS4zNi4zMy0uNTYuMzMtLjMxIDAtMS4xLTEuMTEtMy44LTEuMDktLjE4LS4wMS0uNDMuMDItLjQzLjAyLTIuNjMtLjA1LTUuMSAxLjctNS4wMiA1LjQuMDcgMy4zNyAzLjg1IDUuMyA1Ljg5IDYuNTkgMS41MS45IDMuMDkgMi4zNCAzLjA0IDMuOTUtLjA4IDIuNDctMS42MyA0LjA4LTMuNTggMy45NC00LjU5LS4wOC0zLjk2LTYuMTMtNC43OC02LjEzLS41NiAwLS40NSAxLjUyLS40NiAyLjMyIDAgMS45Mi0uMDggMy40OS4xNCAzLjc3LjA3LjA5LjI5LjA1Ljc0LjA1LjkgMCAyIDEuMDUgNC42NSAxLjA1IDIuOTUuMDUgNS4zOC0yLjY5IDUuMzgtNi4yNS0uMDEtMi4xOS0uNjItMy41OC0zLjQ3LTUuNDV6bTUxLjY5LTMuMzFjLjMzIDAgMS4wNy0xLjIgMS4wNy0xLjU3IDAtLjM2LS43NC0xLjYtMS4wNy0xLjYtLjMgMC0xLjA3IDEuMjYtMS4wNyAxLjZzLjc2IDEuNTcgMS4wNyAxLjU3ek0zMTIuNjQgMjJjLS41Mi0uMDMtMS42My0uMjMtMS42My0xLjM1VjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjk4IDEuMDgtMi42MyAxLjY0LS4xMy4wMy0uMzcuMDYtLjM3LjI0IDAgLjY1IDEuNDktLjYxIDEuNDIgMS42OXY3LjI3Yy4wNiAxLjg2LS45NiAyLjA0LTEuNTIgMi4wNC0uODQtLjAxLS42My4xLS42My4zNi4wMy4zMS41My4zMyAxLjM3LjM0LjI4IDAgMS0uMTEgMS44Mi0uMTEgMS4wNyAwIDEuODcuMTIgMi40MS4xMi4zMyAwIC43Ni0uOC4wNy0uNjl6bTUuOTgtNi44OGMtLjUxLS4yNC0xLjI3LS42OC0xLjY1LS44OC0xLjYzLS44OS0yLjI3LTEuNDctMi4zMS0yLjMtLjA4LTEuNDQgMS4xNS0yLjE5IDIuMjEtMi4wOCAyLjU0LS4wNSAyLjg4IDIuOCAzLjE0IDIuOC4zOSAwIC4yOC0uMzcuMjgtMS4yMSAwLS4yMS4wMy0xLjI3LS4xMy0xLjUyLS4zMS0uNDYtMi4xMS0uNzQtMi41NS0uNzQtLjExIDAtLjUyLS4wMS0uNi0uMDEtLjEzIDAtLjI4LjAxLS4yOC4wMS0xLjgxLS4wMy0zLjUgMS4xMS0zLjQ0IDMuNTMuMDUgMi4yMSAyLjY0IDMuNDYgNC4wNCA0LjMgMS4wNC41OSAyLjI2IDEuMTUgMi4yNCAyLjU3LS4wMiAxLjYxLTEuMjcgMi42OC0yLjYxIDIuNi0zLjE1LS4wNS0yLjcyLTQtMy4yOC00LS4zOSAwLS4zMSAxLS4zMSAxLjUyLS4wMSAxLjI1LS4wNiAyLjI4LjEgMi40Ni4wNS4wNi4yLjAzLjUuMDMuNjIgMCAxLjM4LjY5IDMuMTkuNjkgMi4wMy4wMyAzLjg1LTEuODUgMy44NS00LjE3LS4wMS0xLjQ4LS40My0yLjM5LTIuMzktMy42em0tNDguNzMgNS42NmMtLjI2LjEzLS44NS43Ny0yLjI4Ljc3LTEuMDcgMC0xLjY4LS42NC0xLjc0LTJ2LTguODJsMy4zOC0uMDFjLjIyIDAgLjY1LTEuNDQuNjctMS41Mi4wNC0uMTguMS0uMzMuMTItLjQ2LjA0LS4yOC0uMTctLjMtLjM3LS4wMS0uMTUuMTUtLjMyLjU1LS45OS41NWgtMi44MWMwLTIuNDEuMDMtMy4wNC0uMzUtMy4wNC0uMzYgMC0uMy4xLS42MyAxLjE3LS41NCAxLjc5LTIuNTIgMi41OC0zLjE1IDIuOTctLjE1LjA4LS4xNS4xMS0uMTUuMTktLjAxLjIzLjc1LjE0IDIuMzEuMTdsLS4wMSA4LjA3YzAgMy40NSAxLjY0IDQuMDMgMi44NyA0LjAzIDEuODcgMCAzLjIxLTEuMzQgMy4yOC0xLjguMDMtLjI1IDAtLjI4LS4xNS0uMjZ6bS04MS4zMi0xLjA5Yy0uNTcgMC0xLjQyIDEuNjItMy42NiAxLjYyLTEuNTggMC00LjE3LTEuNTMtNC4xNy02LjY2aDYuOWMuNiAwIC44OC4wMy44OC0uNTIgMC0xLjI1LTEuNC00Ljk1LTQuNTktNC45NS0zLjI0IDAtNS4wOCAzLjMzLTUuMDggNy4zMSAwIDIuMDUgMS4zNSA2LjM4IDUuMjQgNi4zOCAyLjMzIDAgNC41OS0yLjI0IDQuNTktMi45NS0uMDEtLjExLS4wMS0uMjMtLjExLS4yM3ptLTUuMDgtOS44MWMxLjQyIDAgMi44OCAxLjU2IDIuODggMy4zIDAgLjQ2LS4xNS42Mi0uNTIuNjJoLTUuMTFjMC0xLjcxIDEuMTMtMy45MiAyLjc1LTMuOTJ6bS0zMS43LTcuMzNjLjEtLjE2LS4yNS0uMjQtLjM3LS4yNC0uNDIgMC0xLjM3LjExLTEuOC4xMS0uODkgMC0xLjY0LS4wOS0yLjUzLS4wOS0uMDcgMC0uNDYuMDUtLjQ2LjE4LS4wMS42MyAyLjEzLS4xMSAyLjEzIDIuNnYxMC41N2MwIDMuMTMtLjk5IDYuNDEtNS4yOSA2LjQxLTMuMDkgMC00Ljc2LTEuOTQtNC43Ni02LjE3VjQuNDFjMC0xLjkxIDEuNDktMS40OSAxLjUyLTEuOTIuMDMtLjQxLTEuMzMtLjE2LTEuNDMtLjE2LS43MSAwLTEuMjEuMDgtMS45NS4wOC0uNjIgMC0xLjM3LS4xLTEuOTctLjEtLjEyIDAtLjUzLS4wMi0uNjEuMTUtLjIzLjU2IDEuOTEuMjYgMS45MSAxLjgzdjEwLjkyYzAgNC4wOCAxLjE0IDguMDggNy4xNyA3Ljk3IDcuMTQtLjEyIDcuMDEtNi41NCA3LjAxLTcuODNWNS4xMmMuMDEtMi40MyAxLjItMi4yIDEuNDMtMi41N3ptMjguMTkgNy4yNGMuMTctLjIuMjItLjUzLS41Ny0uNDYtLjQ1IDAtLjc3LjA4LTEuMjIuMDgtLjU3IDAtLjY4LS4wMi0xLjIyLS4wNC0uNjgtLjAyLS44Ni4wNS0uODIuMjUuMTIuNiAxLjU1LjAxIDEuMzYgMS44LS4xNiAxLjUtLjY1IDIuNzktMS4xNCA0LjA3bC0xLjczIDQuNjItMi41NC03LjdjLS4zMS0uOTYtLjQ1LTEuNDctLjQ1LTEuNTcgMC0uOTYgMS4xNi0uNzUgMS40Mi0xLjE0LjE2LS4yNi0uMTctLjQtLjU0LS40LS4zMSAwLS42Ny4xMS0xLjYzLjEzLS43OS4wMi0xLjM2LjAyLTEuNy0uMDUtLjg5LS4xNi0uODIuMzMtLjUxLjQ4cy40Ni4wMS45MSAxLjM2bDMuOTEgMTEuMDZjLjA4LjIyLjE4Ljc3LjUyLjc3LjM5IDAgLjM5LS4zOS44OC0xLjY5IDAgMCAzLjc1LTEwLjQ4IDQtMTAuODYuNTEtLjc0Ljg5LS41IDEuMDctLjcxem0xNC40Ny0uNWMtMS4wNyAwLTEuOCAxLjI4LTIuMzMgMi4xNmgtLjA1VjkuNTNjMC0uMy0uMTUtLjQ4LS4zLS40OC0uNDEgMC0uNzIuODEtMi44NyAxLjMzLS4xMy4wMy0uNDguMS0uNDguMjggMCAuNjQgMS44Mi0uMTkgMS44MiAxLjkzdjguMDdjMCAxLjI1LTEuMjkgMS4xMi0xLjI5IDEuNzcgMCAuMTguMDguMjcuMjguMjcuMTcgMCAuNjMtLjEyIDIuMzItLjEyIDEuNDEgMCAyLjAyLjEyIDIuMzcuMTIuMjggMCAuNDEtLjA2LjQxLS4zNCAwLS45OC0yLjI1LjQ4LTIuMjUtMi4zNHYtNi44OGMwLS40LjYtMS44IDEuNjQtMS44LjkxIDAgMS4wMi43IDEuNS43LjMgMCAuOTEtLjkxLjkxLTEuMzgtLjAxLS41OC0xLjE2LTEuMzctMS42OC0xLjM3em0zMi41NS4xYy0uMjcgMC0uOTYuMDQtMS41OS4wNC0uNzYgMC0xLjEzLS4wOS0xLjQ1LS4wOS0uNDggMC0uOTYgMC0uODcuMzIuMS4zNiAxLjczLjIzIDEuNzMgMi4wMSAwIC4yMyAwIC41Mi0uMzMgMS43MWwtMi4wOCA2LjYzLTIuOS04LjE1cy0uMTQtLjI2LS4xNC0uNzljMC0xLjMyIDEuNTQtMS4xNyAxLjYtMS40MS4wNS0uMTktLjIxLS40LS42Mi0uNGgtMy42M2MtLjAyIDAtLjAzLjAxLS4wNS4wMWgtMi44MWMwLTIuNDEuMDMtMy4wNC0uMzUtMy4wNC0uMzYgMC0uMy4xLS42MyAxLjE3LS41NCAxLjc5LTIuNTIgMi41OC0zLjE1IDIuOTctLjE1LjA4LS4xNS4xMS0uMTUuMTktLjAxLjIyLjc2LjE0IDIuMzEuMTdsLS4wMSA4LjA3YzAgMy40NSAxLjY0IDQuMDMgMi44NyA0LjAzIDEuODcgMCAzLjIxLTEuMzMgMy4yOC0xLjggMC0uMjctLjA0LS4yOS0uMTgtLjI3LS4yNi4xMy0uODUuNzctMi4yOC43Ny0xLjA3IDAtMS42OC0uNjQtMS43NC0yVjEwLjdzMi41LS4wMSAzLjIxLS4wMWMuMDQuMDYuMDguMTMuMS4xOWwyLjk5IDguNDVjLjI0LjY5LjM5LjkyLjY4IDIuMTQuMTkuNzkuMTIgMS41MS4xMiAxLjUxLS4yOSAxLjI3LTEuMDcgMS45OS0yLjI2IDQuMzQtLjEyLjIyIDEuNzEtLjAyIDEuODEtLjA1LjE1LS4wNS4xMy0uMDkuMzEtLjQybDEuMzItMy45MyAzLjY5LTExLjM0Yy41NC0xLjk4IDEuMzktMS42MiAxLjUzLTEuODkuMTItLjEzIDAtLjMtLjMzLS4zelxcXCJcXG4gICAgICA+PC9wYXRoPlxcbiAgICAgIDxwYXRoXFxuICAgICAgICBkPVxcXCJNMjIyLjIyIDIyLjc2bC0uMDcuMTlWMjNsLjA3LS4yNHptLTE0Ljc0LTE0LjZjLjMzIDAgMS4wNy0xLjIgMS4wNy0xLjU3IDAtLjM2LS43NC0xLjYtMS4wNy0xLjYtLjMgMC0xLjA3IDEuMjYtMS4wNyAxLjZzLjc2IDEuNTcgMS4wNyAxLjU3ek0yMTAuMTEgMjJjLS41Mi0uMDMtMS42My0uMjMtMS42My0xLjM1VjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjk4IDEuMDgtMi42MyAxLjY0LS4xMy4wMy0uMzcuMDYtLjM3LjI0IDAgLjY1IDEuNDktLjYxIDEuNDIgMS42OXY3LjI3Yy4wNiAxLjg2LS45NiAyLjA0LTEuNTIgMi4wNC0uODQtLjAxLS42My4xLS42My4zNi4wMy4zMS41My4zMyAxLjM3LjM0LjI4IDAgMS0uMTEgMS44Mi0uMTEgMS4wNyAwIDEuODcuMTIgMi40MS4xMi4zMyAwIC43Ni0uOC4wNy0uNjl6TTE2Ni41MiA4LjE2Yy4zMyAwIDEuMDctMS4yIDEuMDctMS41NyAwLS4zNi0uNzQtMS42LTEuMDctMS42LS4zIDAtMS4wNyAxLjI2LTEuMDcgMS42cy43NyAxLjU3IDEuMDcgMS41N3pNMTY5LjE3IDIyYy0uNTItLjAzLTEuNjMtLjIzLTEuNjMtMS4zNVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLS45OCAxLjA4LTIuNjMgMS42NC0uMTMuMDMtLjM3LjA2LS4zNy4yNCAwIC42NSAxLjQ5LS42MSAxLjQyIDEuNjl2Ny4yN2MuMDYgMS44Ni0uOTYgMi4wNC0xLjUyIDIuMDRoLS4xN2MtLjU0LS4xLTEuMDYtLjMyLTEuMDUtMS43OXYtNS4wOGMwLTIuMzQtLjc2LTUuNzYtNC4yMi01Ljc2LTIuNTEgMC0zLjgxIDIuMzgtMy43NiAyLjAxVjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtMS4wNCAxLjAxLTMuMDcgMS42Mi0uMTMuMDMtLjUuMDQtLjUxLjI3IDAgLjY1IDIuMDMtLjg0IDIgMS42OHY3LjY0YzAgMi0xLjM1IDEuNTItMS42NiAyLjA0LS4xNS4yNy4yNS4zMy41OS4zMy4zMSAwIC44My0uMTMgMi4yLS4xMyAxLjUgMCAyLjAyLjEzIDIuNDYuMTMuMzkgMCAuODMtLjE3LjU3LS40NC0uNDItLjQxLTIuMjguMDYtMi4yOC0yLjA2di03LjA5Yy0uMDMtLjQ5Ljg4LTIuNCAzLjA2LTIuNCAyLjEgMCAzLjAzIDIuMzEgMy4wMyAzLjg1djUuNzZjLS4wMyAyLjI3LS44IDEuNTUtMS4xMSAyLS4xNy4yNS4xMy4zNy40Ni4zN3MuODgtLjEzIDEuODctLjEzYzEuMjcgMCAxLjgyLjEyIDIuMTYuMTIuMDQgMCAuMDktLjAxLjEzLS4wMS4xMSAwIC4yMS4wMS4zNC4wMS4yOCAwIDEtLjExIDEuODItLjExIDEuMDcgMCAxLjg3LjEyIDIuNDEuMTIuMzQuMDIuNzUtLjc4LjA4LS42N3ptMzIuNzItNi44OWMtLjUxLS4yNC0xLjI3LS42OC0xLjY1LS44OC0xLjYzLS44OS0yLjI3LTEuNDctMi4zMS0yLjMtLjA4LTEuNDQgMS4xNS0yLjE5IDIuMjEtMi4wOCAyLjU0LS4wNSAyLjg4IDIuOCAzLjE0IDIuOC4zOSAwIC4yOC0uMzcuMjgtMS4yMSAwLS4yMS4wMy0xLjI3LS4xMy0xLjUyLS4zMS0uNDYtMi4xLS43NC0yLjU1LS43NC0uMTEgMC0uNTItLjAxLS42LS4wMi0uMTMgMC0uMjguMDItLjI4LjAyLTEuODEtLjAzLTMuNSAxLjExLTMuNDUgMy41My4wNSAyLjIxIDIuNjQgMy40NiA0LjA0IDQuMyAxLjA0LjU5IDIuMjYgMS4xNSAyLjI0IDIuNTctLjAyIDEuNjItMS4yNyAyLjY4LTIuNjEgMi42LTMuMTUtLjA1LTIuNzItNC0zLjI4LTQtLjM5IDAtLjMxIDEtLjMxIDEuNTIgMCAxLjI1LS4wNiAyLjI4LjEgMi40Ni4wNS4wNi4yLjAzLjUuMDMuNjIgMCAxLjM4LjY5IDMuMTkuNjkgMi4wMy4wMyAzLjg1LTEuODUgMy44NS00LjE3IDAtMS40Ny0uNDItMi4zOC0yLjM4LTMuNnpcXFwiXFxuICAgICAgPjwvcGF0aD5cXG4gICAgPC9nPlxcbiAgPC9zdmc+XFxuPC9kaXY+XFxuPGhlYWRlciByb2xlPVxcXCJiYW5uZXJcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGEgY2xhc3M9XFxcInNpdGUtdGl0bGVcXFwiIGhyZWY9XFxcImZpbGVzL2luZGV4Lmh0bWxcXFwiPk51cnNlcnkgU2Nob29sPC9hPlxcbiAgICA8YSBjbGFzcz1cXFwic2l0ZS10aXRsZVxcXCIgaWQ9XFxcImFwcGx5XFxcIiBocmVmPVxcXCJmaWxlcy9hcHBseS5odG1sXFxcIj5BcHBseTwvYT5cXG4gIDwvZGl2PlxcbiAgPGRpdiBpZD1cXFwibWFpbi1tZW51LWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGJ0blxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBpZD1cXFwiYWJvdXRcXFwiIGhyZWY9XFxcImZpbGVzL2Fib3V0Lmh0bWxcXFwiPkFib3V0IDwvYT5cXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XFxcImN1cnJpY3VsdW0tb3ZlcnZpZXdcXFwiIGhyZWY9XFxcImZpbGVzL2N1cnJpY3VsdW1fb3ZlcnZpZXcuaHRtbFxcXCI+Q3VycmljdWx1bSBPdmVydmlldzwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGlkPVxcXCJwYXJlbnQtaGFuZGJvb2tcXFwiIGhyZWY9XFxcImZpbGVzL3BhcmVudF9oYW5kYm9vay5odG1sXFxcIj5QYXJlbnQgSGFuZGJvb2s8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8YSBpZD1cXFwidHVpdGlvblxcXCIgaHJlZj1cXFwiZmlsZXMvdHVpdGlvbi5odG1sXFxcIj5UdWl0aW9uPC9hPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRyb3BidG5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XFxcImNsYXNzcm9vbXNcXFwiIGhyZWY9XFxcImZpbGVzL2NsYXNzcm9vbXMuaHRtbFxcXCI+Q2xhc3Nyb29tcyA8L2E+XFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGlkPVxcXCJ0ZWRkeS1iZWFyc1xcXCIgaHJlZj1cXFwiZmlsZXMvdGVkZHlfYmVhcnMuaHRtbFxcXCI+VGVkZHkgQmVhcnM8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8YSBpZD1cXFwicGFuZGEtYmVhcnNcXFwiIGhyZWY9XFxcImZpbGVzL3BhbmRhX2JlYXJzLmh0bWxcXFwiPlBhbmRhIEJlYXJzPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XFxcImJlYXItY3Vic1xcXCIgaHJlZj1cXFwiZmlsZXMvYmVhcl9jdWJzLmh0bWxcXFwiPkJlYXIgQ3ViczwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGlkPVxcXCJiaWctYmVhcnNcXFwiIGhyZWY9XFxcImZpbGVzL2JpZ19iZWFycy5odG1sXFxcIj5CaWcgQmVhcnM8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8YSBpZD1cXFwic3VuLWJlYXJzXFxcIiBocmVmPVxcXCJmaWxlcy9zdW5fYmVhcnMuaHRtbFxcXCI+U3VuIEJlYXJzPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XFxcImJlYXItdHJhY2tzXFxcIiBocmVmPVxcXCJmaWxlcy9iZWFyX3RyYWNrcy5odG1sXFxcIj5CZWFyIFRyYWNrczwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGlkPVxcXCJlbnJpY2htZW50LXByb2dyYW1cXFwiIGhyZWY9XFxcImZpbGVzL2VucmljaG1lbnRfcHJvZ3JhbXMuaHRtbFxcXCI+RW5yaWNobWVudCBQcm9ncmFtPC9hPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8YSBpZD1cXFwic3RhZmZcXFwiIGhyZWY9XFxcImZpbGVzL3N0YWZmLmh0bWxcXFwiPlN0YWZmPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJjYWxlbmRhclxcXCIgaHJlZj1cXFwiZmlsZXMvY2FsZW5kYXIuaHRtbFxcXCI+Q2FsZW5kYXI8L2E+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkcm9wYnRuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGlkPVxcXCJnZXQtaW52b2x2ZWRcXFwiIGhyZWY9XFxcImZpbGVzL2dldF9pbnZvbHZlZC5odG1sXFxcIj5HZXQgSW52b2x2ZWQ8L2E+XFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGlkPVxcXCJudXJzZXJ5LXNjaG9vbC1tZXJjaGFuZGlzZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XFxcImZpbGVzL251cnNlcnlfc2Nob29sX21lcmNoYW5kaXNlLmh0bWxcXFwiPk51cnNlcnkgU2Nob29sIE1lcmNoYW5kaXNlPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XFxcInBhcmVudC1hc3NvY2lhdGlvblxcXCIgaHJlZj1cXFwiZmlsZXMvcGFyZW50X2Fzc29jaWF0aW9uLmh0bWxcXFwiPlBhcmVudCBBc3NvY2lhdGlvbjwvYT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInBhcmVudC1yZXNvdXJjZXNcXFwiIGhyZWY9XFxcImZpbGVzL3BhcmVudF9yZXNvdXJjZXMuaHRtbFxcXCI+UGFyZW50IFJlc291cmNlczwvYT5cXG5cXG4gICAgICAgICAgICA8YSBpZD1cXFwic3VtbWVyLWNhbXBcXFwiIGhyZWY9XFxcImZpbGVzL3N1bW1lcl9jYW1wLmh0bWxcXFwiPlN1bW1lciBDYW1wPC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9oZWFkZXI+XFxuXCI7XG4iLCJpbXBvcnQgeyBEIH0gZnJvbSBcIi4vLi4vY29yZS9kb20vZG9jdW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIFNsaWRlc2hvdyB7XG4gIHB1YmxpYyBzdGF0aWMgc2V0dXBBbGwoKSB7XG4gICAgU2xpZGVzaG93LmRpc2NhcmRBbGwoKTtcbiAgICBjb25zdCBzbGlkZXNob3dzID0gRC5jbGF6KFwic2xpZGVzaG93XCIpO1xuICAgIGZvciAobGV0IHNzSW5kZXggPSAwOyBzc0luZGV4IDwgc2xpZGVzaG93cy5sZW5ndGg7ICsrc3NJbmRleCkge1xuICAgICAgY29uc3QgZWxlbSA9IHNsaWRlc2hvd3MuaXRlbShzc0luZGV4KTtcbiAgICAgIGlmIChlbGVtID09IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBTbGlkZXNob3cuc2xpZGVzaG93cy5wdXNoKG5ldyBTbGlkZXNob3coZWxlbSkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGlzY2FyZEFsbCgpIHtcbiAgICBTbGlkZXNob3cuc2xpZGVzaG93cyA9IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2xpZGVzaG93czogU2xpZGVzaG93W10gPSBbXTtcblxuICBwcml2YXRlIHNsaWRlSW5kZXggPSAwO1xuICBwcml2YXRlIHNsaWRlQ291bnQgPSAwO1xuICBwcml2YXRlIHNsaWRlczogRWxlbWVudFtdID0gW107XG4gIHByaXZhdGUgZG90czogRWxlbWVudFtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdXRlcjogRWxlbWVudCkge1xuICAgIEQuZWFjaFJlY3VyKHRoaXMub3V0ZXIsIChlbGVtKSA9PiB7XG4gICAgICBjb25zdCBjTGlzdCA9IGVsZW0uY2xhc3NMaXN0O1xuICAgICAgaWYgKGNMaXN0LmNvbnRhaW5zKFwicHJldi1zbGlkZXNob3ctYnV0dG9uXCIpKSB7XG4gICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCBcImNsaWNrXCIsICgpID0+IHRoaXMubWludXNTbGlkZSgxKSk7XG4gICAgICB9IGVsc2UgaWYgKGNMaXN0LmNvbnRhaW5zKFwibmV4dC1zbGlkZXNob3ctYnV0dG9uXCIpKSB7XG4gICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCBcImNsaWNrXCIsICgpID0+IHRoaXMucGx1c1NsaWRlKDEpKTtcbiAgICAgIH0gZWxzZSBpZiAoY0xpc3QuY29udGFpbnMoXCJzbGlkZXNob3ctZW50cnlcIikpIHtcbiAgICAgICAgdGhpcy5zbGlkZXMucHVzaChlbGVtKTtcbiAgICAgIH0gZWxzZSBpZiAoY0xpc3QuY29udGFpbnMoXCJzbGlkZXNob3ctZG90XCIpKSB7XG4gICAgICAgIHRoaXMuZG90cy5wdXNoKGVsZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb3RzLmxlbmd0aDsgKytpKSB7XG4gICAgICBELmFkZEV2ZW50TGlzdGVuZXIodGhpcy5kb3RzW2ldLCBcImNsaWNrXCIsICgpID0+IHRoaXMuc2hvd1NsaWRlKGkpKTtcbiAgICB9XG4gICAgdGhpcy5zbGlkZUNvdW50ID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xuICAgIHRoaXMuc2hvd1NsaWRlKHRoaXMuc2xpZGVJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgcGx1c1NsaWRlKG46IG51bWJlcikge1xuICAgIHRoaXMuc2hvd1NsaWRlKCh0aGlzLnNsaWRlSW5kZXggKz0gbikpO1xuICB9XG4gIHB1YmxpYyBtaW51c1NsaWRlKG46IG51bWJlcikge1xuICAgIHRoaXMuc2hvd1NsaWRlKCh0aGlzLnNsaWRlSW5kZXggLT0gbikpO1xuICB9XG4gIHB1YmxpYyBzaG93U2xpZGUoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc2xpZGVJbmRleCA9IGluZGV4ICUgdGhpcy5zbGlkZUNvdW50O1xuICAgIHRoaXMuc2xpZGVJbmRleCA9IE1hdGgubWF4KHRoaXMuc2xpZGVJbmRleCwgLTEgKiB0aGlzLnNsaWRlSW5kZXgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbGlkZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICh0aGlzLnNsaWRlc1tpXSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5kb3RzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgICh0aGlzLnNsaWRlc1t0aGlzLnNsaWRlSW5kZXhdIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHRoaXMuZG90c1t0aGlzLnNsaWRlSW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH1cbn1cbiIsImltcG9ydCB7IHBhcmFtcyB9IGZyb20gXCIuLi9jb3JlL3V0aWxzL3FfcGFyYW1zXCI7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4vLi4vY29yZS9kYXRhLWxvZy9kYXRhXCI7XG5pbXBvcnQgeyBBY3Rpb25FbnVtIH0gZnJvbSBcIi4vLi4vY29yZS9kYXRhLWxvZy9ldmVudFwiO1xuaW1wb3J0IHsgRCB9IGZyb20gXCIuLy4uL2NvcmUvZG9tL2RvY3VtZW50XCI7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gXCIuLy4uL2NvcmUvZG9tL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBTY3JvbGwgfSBmcm9tIFwiLi8uLi9jb3JlL2RvbS9zY3JvbGxcIjtcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tIFwiLi8uLi9jb3JlL3JvdXRlci9oaXN0b3J5XCI7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlck1vZGUsIFJvdXRlck1vZHVsZSB9IGZyb20gXCIuLy4uL2NvcmUvcm91dGVyL3JvdXRlclwiO1xuaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gXCIuLy4uL2NvcmUvdHJhY2tlci90cmFja2VyXCI7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSB9IGZyb20gXCIuLy4uL2NvcmUvdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XG5pbXBvcnQgeyBIVE1MTG9hZGVyIH0gZnJvbSBcIi4vLi4vY29yZS91dGlscy9odG1sX2xvYWRlclwiO1xuaW1wb3J0IHsgSURHZW5lcmF0b3IgfSBmcm9tIFwiLi8uLi9jb3JlL3V0aWxzL2lkX2dlbmVyYXRvclwiO1xuaW1wb3J0IHsgd2FpdFVudGlsUmVhZHkgfSBmcm9tIFwiLi8uLi9jb3JlL3V0aWxzL3JlYWR5XCI7XG5pbXBvcnQgeyBzY2VuYXJpb3MsIFNjZW5hcmlvIH0gZnJvbSBcIi4vLi4vY29yZS91dGlscy9zY2VuYXJpb3NcIjtcblxuY29uc3Qgc2V0dXAgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHdhaXRVbnRpbFJlYWR5KCk7XG4gIGNvbnN0IHNjZW5hcmlvID0gc2NlbmFyaW9zLmZpbmQoKHNjZW4pID0+IHNjZW4udGFnID09PSBwYXJhbXMudGFnKTtcbiAgaWYgKCFwYXJhbXMuc2FuZGJveCkge1xuICAgIGlmIChzY2VuYXJpbyA9PT0gbnVsbCB8fCBzY2VuYXJpbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbGVydChcIlRoaXMgSElUIGlzIGJyb2tlbiBhbmQgY2Fubm90IGJlIGNvbXBsZXRlZCBhdCB0aGlzIHRpbWUuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBUcmFja2VyLmxvYWRTY2VuYXJpbyhzY2VuYXJpbyBhcyBTY2VuYXJpbyk7XG4gICAgfVxuICB9XG4gIFRyYWNrZXIuc3RhcnQoe1xuICAgIGtleVByZWZpeDogXCJpbmZvcm1hdGlvbi1mb3JhZ2luZ1wiLFxuICAgIGJ1Y2tldE5hbWU6IFwiY3NlLTI1Ni1sb2dcIixcbiAgICBhbGxvd1N1Ym1pc3Npb246IHtcbiAgICAgIGFsbG93KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHRleHRBcmVhID0gRC5pZChcInRleHQtYXJlYVwiKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRleHRBcmVhLnZhbHVlKTtcbiAgICAgICAgICBpZiAodGV4dEFyZWEudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBcIllvdSBtdXN0IGZpbGwgb3V0IHRoZSB0ZXh0IGJveCB0byB0dXJuIHRoaXMgSElUIGluLlwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIHJldHVybiBcIlRoZXJlIHdhcyBhbiBlcnJvciBmaWxsIG91dCB0aGUgZm9ybSBhbmQgdHJ5IGFnYWluLlwiO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJlU3VibWl0KCkge1xuICAgICAgICBkYXRhLmRhdGEucmVzcG9uc2UgPSAoRC5pZChcInRleHQtYXJlYVwiKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGVidWdMZXZlbDogRGVidWdMZXZlbEVudW0uTk9ORSxcblxuICAgIGFzeW5jIHNldHVwKCkge1xuICAgICAgLy8gY29uZmlndXJlIHJvdXRlclxuICAgICAgUm91dGVyLmRlZmF1bHRBbGxvd2FuY2VzT24oKTtcbiAgICAgIFJvdXRlci5jb25maWd1cmUoXG4gICAgICAgIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtb2RlOiBSb3V0ZXJNb2RlLlNUQU5EQVJEX0FMTE9XQU5DRVMsXG4gICAgICAgICAgICBtb2R1bGU6IFJvdXRlck1vZHVsZS5BLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBtb2RlOiBSb3V0ZXJNb2RlLk9GRiwgbW9kdWxlOiBSb3V0ZXJNb2R1bGUuRk9STSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1vZGU6IFJvdXRlck1vZGUuU1RBTkRBUkRfQUxMT1dBTkNFUyxcbiAgICAgICAgICAgIG1vZHVsZTogUm91dGVyTW9kdWxlLklNRyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBcImZpbGVzL1wiXG4gICAgICApO1xuICAgICAgSGlzdG9yeS5zZXR1cCh3aW5kb3cubG9jYXRpb24uaHJlZiwgeyB3cmFwcGVyOiB0cnVlIH0pO1xuICAgICAgLy8gY29uZmlndXJlIGh0bWwgbG9hZGVyIHBvc3Qgb3BlcmF0aW9uXG4gICAgICBIVE1MTG9hZGVyLmZpbmlzaCgpO1xuICAgICAgSFRNTExvYWRlci5yZWdpc3RlclBvc3RMb2FkRnVuYygoKSA9PiB7XG4gICAgICAgIElER2VuZXJhdG9yLnJlc2V0KCk7XG4gICAgICAgIElER2VuZXJhdG9yLmF0dGFjaElkc1RvQWxsRWxlbWVudHMoKTtcbiAgICAgICAgUm91dGVyLnNldHVwKEVsZW1lbnRzLmh0bWxMb2MpO1xuICAgICAgICBTY3JvbGwucHJvbWlzZSgwKTtcbiAgICAgIH0pO1xuICAgICAgLy8gY29uZmlndXJlIGxpc3RlbmVycyBvbiBodG1sIGxvY1xuICAgICAgRC5hZGRFdmVudExpc3RlbmVyKEVsZW1lbnRzLmh0bWxMb2MsIEFjdGlvbkVudW0uQ0xJQ0ssIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ID0gZSBhcyBNb3VzZUV2ZW50O1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgeDogZXYuY2xpZW50WCxcbiAgICAgICAgICB5OiBldi5jbGllbnRZLFxuICAgICAgICAgIGlkOiAoZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pZCxcbiAgICAgICAgfTtcbiAgICAgICAgVHJhY2tlci5nZXRFdmVudERpc3BhdGNoRnVuYyhBY3Rpb25FbnVtLkNMSUNLKShvYmopO1xuICAgICAgfSk7XG4gICAgICBELmFkZEV2ZW50TGlzdGVuZXIoRWxlbWVudHMuZG9jdW1lbnQsIFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgZXYgPSBlIGFzIEtleWJvYXJkRXZlbnQ7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICBrZXk6IGV2LmtleSxcbiAgICAgICAgICBpZDogKGV2LnNyY0VsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmlkLFxuICAgICAgICB9O1xuICAgICAgICBUcmFja2VyLmdldEV2ZW50RGlzcGF0Y2hGdW5jKEFjdGlvbkVudW0uQlVUVE9OKShvYmopO1xuICAgICAgfSk7XG4gICAgICAvLyBTUEVDSUFMIENBU0U6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCBkb2VzIG5vdCBiZWhhdmUgdGhlIHNhbWUgd2F5IGFzIGRvY3VtZW50IHNvIHRoZSBiZWxvdyBmdW5jdGlvbiBtdXN0IGJlaGF2ZSBkaWZmZXJlbnRseSB0aGFuIHRoZSBsaXN0ZW5lcnMgYWJvdmUuXG4gICAgICBjb25zdCBzRWxlbSA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgYXMgRWxlbWVudDtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgZHggPSBzRWxlbS5zY3JvbGxMZWZ0O1xuICAgICAgICBjb25zdCBkeSA9IHNFbGVtLnNjcm9sbFRvcDtcbiAgICAgICAgY29uc3QgZHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIE1hdGguYWJzKFRyYWNrZXIubGFzdFBvcy54IC0gZHgpID4gMTAgfHxcbiAgICAgICAgICAoTWF0aC5hYnMoVHJhY2tlci5sYXN0UG9zLnkgLSBkeSkgPiAxMCAmJlxuICAgICAgICAgICAgZHRpbWUgLSBUcmFja2VyLmxhc3RQb3MudGltZSA+IDEwMClcbiAgICAgICAgKSB7XG4gICAgICAgICAgVHJhY2tlci5sYXN0UG9zLnggPSBkeDtcbiAgICAgICAgICBUcmFja2VyLmxhc3RQb3MueSA9IGR5O1xuICAgICAgICAgIFRyYWNrZXIubGFzdFBvcy50aW1lID0gZHRpbWU7XG4gICAgICAgICAgY29uc3Qgb2JqID0geyB4OiBkeCwgeTogZHkgfTtcbiAgICAgICAgICBUcmFja2VyLmdldEV2ZW50RGlzcGF0Y2hGdW5jKEFjdGlvbkVudW0uU0NST0xMKShvYmopO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIGNvbmZpZ3VyZSB0cmFja2VkIGV2ZW50c1xuICAgICAgVHJhY2tlci5yZWdpc3RlckV2ZW50KEFjdGlvbkVudW0uSElTVE9SWSk7XG4gICAgICBUcmFja2VyLnJlZ2lzdGVyRXZlbnQoQWN0aW9uRW51bS5CVVRUT04pO1xuICAgICAgVHJhY2tlci5yZWdpc3RlckV2ZW50KEFjdGlvbkVudW0uQ0xJQ0spO1xuICAgICAgVHJhY2tlci5yZWdpc3RlckV2ZW50KEFjdGlvbkVudW0uU0NST0xMKTtcbiAgICAgIC8vIGxvYWQgZmlyc3QgcGFnZVxuICAgICAgYXdhaXQgUm91dGVyLmxvYWQoXCJmaWxlcy9pbmRleC5odG1sXCIpO1xuICAgIH0sXG4gIH0pO1xufTtcblxuc2V0dXAoKTtcbiJdfQ==
