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
            var allowed, qp, queryString, urlParams, textAreaElem;
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
                    textAreaElem = document.getElementById("text-area");
                    data_1.data.data.response = textAreaElem ? textAreaElem.value : "";
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
            _this.toggle();
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
        // Setup read link listeners
        Accordion.setupReadLinks();
    };
    Accordion.discardAll = function () {
        Accordion.accordions = [];
    };
    Accordion.expandAccordionById = function (accordionId) {
        var accordion = Accordion.accordions.find(function (acc) { return acc.outer.id === accordionId; });
        if (accordion) {
            accordion.expand();
        }
    };
    Accordion.setupReadLinks = function () {
        var readLinks = document.querySelectorAll("[data-accordion]");
        readLinks.forEach(function (link) {
            document_1.D.addEventListener(link, "click", function (e) {
                e.preventDefault();
                var accordionId = link.getAttribute("data-accordion");
                if (accordionId) {
                    Accordion.expandAccordionById(accordionId);
                    // Scroll to the accordion smoothly
                    var accordionElement = document.getElementById(accordionId);
                    if (accordionElement) {
                        accordionElement.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    }
                }
            });
        });
    };
    Accordion.prototype.toggle = function () {
        /* Toggle between adding and removing the "active" class,
                  to highlight the button that controls the panel */
        this.outer.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var panel = this.outer.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        }
        else {
            panel.style.display = "block";
        }
    };
    Accordion.prototype.expand = function () {
        // Only expand if not already expanded
        if (!this.outer.classList.contains("active")) {
            this.outer.classList.add("active");
            var panel = this.outer.nextElementSibling;
            panel.style.display = "block";
        }
    };
    Accordion.prototype.collapse = function () {
        if (this.outer.classList.contains("active")) {
            this.outer.classList.remove("active");
            var panel = this.outer.nextElementSibling;
            panel.style.display = "none";
        }
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
module.exports = "<footer id=\"colophon\" class=\"footer\" role=\"contentinfo\">\r\n  <div class=\"container\">\r\n    <div class=\"footer-widgets\">\r\n      <aside class=\"widget site-contact\">\r\n        <h2 class=\"footer-widget-title\">Nursery School</h2>\r\n        <p>6926 Forest Park Parkway</p>\r\n        <p>St. Louis, MO 63130</p>\r\n        <p class=\"phone\">314-935-6689 <span>|</span> Fax: 314-935-7249</p>\r\n        <p>\r\n          <a href=\"files/mailto:nursery@wustl.edu\">nursery@wustl.edu</a>\r\n        </p>\r\n      </aside>\r\n\r\n      <div class=\"widget-wrapper\">\r\n        <aside id=\"text-4\" class=\"widget widget_text widget-count-2\">\r\n          <h2 class=\"footer-widget-title\">Hours of Operation</h2>\r\n          <div class=\"textwidget\">\r\n            <p>\r\n              Classes meet Mon. through Fri.<br />\r\n              Morning: 9-11:45 a.m.<br />\r\n              Afternoon: 12:30-3:15 p.m.<br />\r\n              Full day: 9 a.m.-3:15 p.m.\r\n            </p>\r\n          </div>\r\n        </aside>\r\n        <aside id=\"text-3\" class=\"widget widget_text widget-count-2\">\r\n          <h2 class=\"footer-widget-title\">Apply for the Nursery School</h2>\r\n          <div class=\"textwidget\">\r\n            <p>\r\n              Experience the innovative approach and dynamic teaching\r\n              environment of the Washington University Nursery School.\r\n            </p>\r\n            <a href=\"files/apply.html\">Register Now</a>\r\n          </div>\r\n        </aside>\r\n      </div>\r\n    </div>\r\n    <div class=\"site-info\">\r\n      <p class=\"footer-copyright\">©2019 Washington University in St. Louis</p>\r\n    </div>\r\n  </div>\r\n</footer>\r\n";

},{}],28:[function(require,module,exports){
module.exports = "<div id=\"wustl-branding\">\r\n  <svg\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n    width=\"321\"\r\n    height=\"28\"\r\n    viewBox=\"0 0 321 28\"\r\n    class=\"washu-logo\"\r\n    aria-labelledby=\"title\"\r\n  >\r\n    <title id=\"title\">Washington University in St. Louis</title>\r\n    <path\r\n      fill=\"#FFF\"\r\n      d=\"M10.46 1.76c-.09 0-4.41.04-10.46-1.21V18c0 .27.01.47.01.47v.02c.04.81.28 1.45.77 2 .32.34.76.7 1.38 1.05.17.1.35.18.55.28.15.07.31.14.47.2.14.06.55.24.69.29l6.59 2.5 6.59-2.5c.15-.05.56-.24.69-.29.16-.07.32-.14.47-.2.19-.1.38-.18.55-.28.62-.35 1.06-.7 1.38-1.05.48-.55.73-1.19.77-2v-.02s0-.19.01-.47V.55C14.86 1.8 10.55 1.76 10.46 1.76z\"\r\n    ></path>\r\n    <path\r\n      fill=\"#007360\"\r\n      d=\"M10.46 2.8c-.09 0-4.03.04-9.56-1.1v15.95c0 .25.01.43.01.44v.02c.04.74.25 1.33.7 1.83.29.31.7.64 1.26.95.15.09.32.17.5.26.14.07.28.13.44.19.12.05.5.22.63.27l6.03 2.29 6.03-2.29c.13-.05.51-.22.63-.27.15-.06.3-.13.44-.19.18-.09.35-.17.5-.26.56-.31.97-.64 1.26-.95.44-.5.66-1.09.7-1.83v-.02s0-.18.01-.44V1.7c-5.55 1.14-9.5 1.1-9.58 1.1z\"\r\n    ></path>\r\n    <path\r\n      fill=\"#E1C4AC\"\r\n      d=\"M10.46 3.75c-.08 0-3.68.04-8.74-1.02v4.08c5.05 1.05 8.67 1.02 8.74 1.02s3.68.04 8.74-1.02V2.73c-5.06 1.05-8.66 1.02-8.74 1.02z\"\r\n    ></path>\r\n    <path\r\n      fill=\"#A51417\"\r\n      d=\"M10.46 7.83c-.08 0-3.68.04-8.74-1.02v9.05c5.05 1.05 8.67 1.02 8.74 1.02s3.68.04 8.74-1.02V6.82c-5.06 1.04-8.66 1.01-8.74 1.01z\"\r\n    ></path>\r\n    <path\r\n      fill=\"#E1C4AC\"\r\n      d=\"M1.72 17.72c.03.69.23 1.23.64 1.68.26.28.64.58 1.15.87.15.08.29.15.46.23.13.06.26.12.4.17.11.05.46.2.58.24L10.46 23l5.51-2.09c.12-.04.46-.2.58-.24.14-.06.27-.12.4-.17.16-.08.32-.15.46-.23.51-.29.88-.58 1.15-.87.41-.46.6-1 .64-1.68v-.02s0-.16.01-.4v-1.44c-5.05 1.05-8.67 1.02-8.74 1.02s-3.68.04-8.74-1.02v1.45c-.02.25-.01.41-.01.41z\"\r\n    ></path>\r\n    <path\r\n      fill=\"#007360\"\r\n      d=\"M4.8 3.69l.41 1.23 1.29.01-1.04.77.39 1.24-1.05-.76-1.05.76.39-1.24-1.04-.77 1.29-.01.41-1.23zm11.31 0l.42 1.23 1.29.01-1.04.77.39 1.24-1.06-.76-1.05.76.39-1.24-1.04-.77 1.29-.01.41-1.23zm-5.65.48l.42 1.23 1.29.01-1.04.77.39 1.24-1.06-.76-1.06.75.39-1.24-1.04-.77 1.3-.01.41-1.22zM10.46 17.21l-.46.45v1.22l.23.65v1.09h.45v-1.09l.23-.65v-1.22l-.45-.45zm.22 4.41v-.65h-.45v.65l-.23.42.46.56.46-.56-.24-.42zm.33-.65v.5l.29.31.51-.41v-.41h-.8zm.54-2.04l-.54.6v1.09h.44v-.65l.43-.46.55.36.35-.36v-.58h-1.23zm-1.64 2.04v.5l-.29.31-.52-.41v-.41h.81zm-.55-2.04l.54.6v1.09h-.43v-.65l-.43-.46-.55.36-.35-.36v-.58h1.22z\"\r\n    ></path>\r\n    <path\r\n      fill=\"#E1C4AC\"\r\n      d=\"M14.62 9.27v5.19h-3.49l-.25.21-.43.37-.43-.37-.25-.21H6.29V9.27l-.74.54v5.38h4.12l.37.31.43.38.43-.38.37-.31h4.12V9.81l-.77-.54z\"\r\n    ></path>\r\n    <path\r\n      fill=\"#E1C4AC\"\r\n      d=\"M11.02 8.83l-.14.11-.43.38-.43-.38-.12-.11H7.03v4.89h2.88l.2.17.35.31.36-.31.19-.17h2.88V8.83h-2.87zM16.11 10.35v3.31c.95-.14 1.98-.31 3.08-.54V9.81a50.5 50.5 0 0 1-3.08.54zm-11.31 0c-.95-.14-1.98-.31-3.08-.54v3.31c1.1.23 2.14.41 3.08.54v-3.31z\"\r\n    ></path>\r\n    <path\r\n      fill=\"#007360\"\r\n      d=\"M16.11 16.76l-.31.32v.86l.15.46v.77h.31v-.77l.16-.46v-.86l-.31-.32zm.16 3.09v-.45h-.31v.46l-.15.3.31.4.32-.4-.17-.31zm.23-.45v.35l.2.22.36-.28v-.29h-.56zm.38-1.43l-.38.43v.77h.31v-.46l.3-.33.38.25.24-.25v-.41h-.85zm-1.14 1.43v.35l-.21.22-.35-.28v-.29h.56zm-.39-1.43l.39.43v.77h-.31v-.46l-.3-.33-.39.25-.24-.25v-.41h.85zM4.8 16.76l-.32.32v.86l.16.46v.77h.31v-.77l.15-.46v-.86l-.3-.32zm.16 3.09v-.45h-.31v.46l-.16.3.32.4.31-.4-.16-.31zm.22-.45v.35l.21.22.35-.28v-.29h-.56zm.39-1.43l-.39.43v.77h.31v-.46l.3-.33.39.25.24-.25v-.41h-.85zM4.42 19.4v.35l-.2.22-.36-.28v-.29h.56zm-.38-1.43l.38.43v.77h-.31v-.46l-.3-.33-.38.25-.24-.25v-.41h.85z\"\r\n    ></path>\r\n    <g fill=\"#FFF\" class=\"washu-logo-text\">\r\n      <path\r\n        d=\"M232.47 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zm13.82 12.03v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.06 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 1.99 1.68v7.64c0 1.43-.7 1.55-1.21 1.68-.03 0-.06-.01-.1 0-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.29 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.31 0 1.15-.13 2.53-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06V13.1c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.26 0 .73-.2.45-.44-.68-.5-1.97.3-1.95-2.04zM48.91 2.4c.37-.05.55-.19.55-.19 0-.24-.05-.3-.39-.3-.65 0-1.05.11-1.69.11-.71 0-1.25-.08-1.85-.08-.34 0-.31.11-.31.3 0 .21.65.08 1.02.89.21.44.13 1.36-.08 1.9l-5.01 13.74-2.14-6.1-.83-2.23s-.13.06.46-1.79l1.17-3.52c.57-1.73 1.14-2.64 1.88-2.65.92-.02.92-.57.21-.57s-1.13.06-1.75.06c-.65 0-.99-.06-1.69-.06-.26 0-.55.08-.52.3.03.21.42.14.71.3.47.24.78 1.25.45 2.3l-1.38 4.42-1.58-4.13c-.31-.78-.73-2.52.03-2.67.73-.15.63-.52.18-.52-.86 0-1.32.11-2.15.11-.91 0-1.59-.11-2.45-.11-.18 0-.52.03-.42.38.05.21.49.14.76.3 1.05.68 1.25 1.55 1.62 2.52l2.3 6.48c.42 1.16.45.74.11 1.73l-2 5.5-4.95-14.11c-.39-1.06-.6-1.79.26-2.2.37-.19.47-.22.52-.3.05-.07.1-.32-.45-.3-.89.03-1.43.11-2.32.11-.94 0-1.59-.11-2.45-.11-.29 0-.34.14-.34.35 0 .33.71.11 1.31.81.34.38.99 1.66 1.14 2.12L32.8 22.3c.11.25.14.76.48.76.27 0 .33-.57.42-.79l3.13-8.59 3.05 8.16c.13.33.31 1.22.63 1.22.26 0 .36-.43.49-.83l5.9-16.87c.5-1.36 1.07-2.79 2.01-2.96zm65.46 6.71c-3.26 0-5.77 3.28-5.77 7.13 0 1.96.52 3.51 1.42 4.63-.31.21-.92.7-2.15.7-1.07 0-1.68-.64-1.74-2V11.2l3.38-.01c.22 0 .65-1.44.67-1.52.04-.18.1-.33.12-.46.04-.28-.17-.3-.37-.01-.15.15-.32.55-.99.55h-2.81c0-2.41.03-3.51-.35-3.51-.36 0-.3.1-.63 1.17-.44 1.44-1.79 2.23-2.63 2.68-.38.09-.81.12-1.29.01-.74-.16-1.6-1.06-3.83-1.06-2.38 0-4.46 1.95-4.46 4.55 0 1.4.62 2.76 1.71 3.48-.2.12-1.53 1.24-1.37 2.56 0 0-.03 1.37 1.05 1.82-.33.14-.67.36-.96.63-.7-.26-1.72-.06-1.72-1.91V15.1c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-.73.99-2.91 1.55-.13.03-.43.1-.44.34 0 .65 1.75-.71 1.76 1.68v7.64c0 1.65-1.31 1.65-1.54 1.67-.1 0-.19 0-.31.01-.55-.05-1.51-.3-1.51-1.34V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.78-.86 2.01-1.43 2.03-.69-.09-1.22-.37-1.22-1.41v-5.14c0-2.65-1.01-6.07-4.33-6.07-1.47 0-2.75.81-3.73 1.92V2.41c0-.31-.15-.48-.31-.49-.4-.03-1.07 1.19-2.96 1.63-.13.03-.62.07-.62.25 0 .65 1.97-.31 1.99 1.69V20.6c0 1.51-1.3 1.31-1.53 1.79-.04.21.08.31.26.31.42 0 1.55-.12 2.35-.12s2.1.12 2.64.12c.31 0 .44-.06.44-.44-.27-.52-2.28.28-2.28-2.37v-6.5c0-1.57 1.87-2.78 3.03-2.78.91 0 3.14.71 3.14 4.53v5.64c0 1.11-1.18 1.23-1.27 1.57 0 .24.15.34.42.34.28 0 1.11-.12 2.12-.12.56 0 1.07.03 1.5.06.23.05.57.05.99.05.28 0 1-.11 1.82-.11s1.48.07 1.99.11c.1.01.2.01.3.01.04 0 .08.01.12.01h.01c.32.01.61 0 .74 0 .31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c0 2-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c.93 0 1.53.07 1.91.1-.29.42-.48.9-.51 1.4-.14 2.51 2.93 3.41 5.51 3.37 5.12-.07 6.57-3.62 5.51-5.51-1.09-1.95-3.44-1.87-5.68-1.86-4.2.02-3.41-2.59-1.69-2.49.4.02.2.14 1.57.14 2.43 0 4.76-1.66 4.7-4.38-.01-.23.05-1.03-.53-2.14 1.14.01.69 0 2.41 0l-.01 7.63c0 3.45 1.64 4.03 2.87 4.03 1.74 0 3.01-1.15 3.24-1.68 1.03 1.1 2.46 1.68 4.12 1.68 3.19 0 5.6-2.93 5.6-6.78 0-5.8-3.65-6.96-5.61-6.96zM95.62 21.72c.21-.01.27.08 2.64.17 2.45.06 3.33.77 3.49 1.4.26 1.12-.53 3.52-4.05 3.29-2.22-.15-2.87-1.2-3.03-1.44-.84-1.16-.16-3.35.95-3.42zm2.01-4.57c-2.08 0-2.78-2-2.78-3.91 0-1.96.59-3.58 2.67-3.58 2.11 0 2.95 2.16 2.95 4.07.01 1.93-.87 3.42-2.84 3.42zm16.99 4.81c-3.03 0-4.22-3.76-4.22-6.82 0-2.65 1.04-5.1 3.57-5.1 3.08 0 4.19 3.29 4.19 6.51.01 3.87-1.36 5.41-3.54 5.41z\"\r\n      ></path>\r\n      <path\r\n        d=\"M131.11 20.19v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.07 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 2 1.68v7.64c0 2-1.35 1.52-1.66 2.04-.15.27.25.33.59.33.31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.26 0 .73-.2.44-.44-.65-.49-1.94.31-1.92-2.03zM77.41 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6.02.35.77 1.57 1.07 1.57zm-17.3 6.96c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.04 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.1-.74-2.55-.74-.11 0-.52-.01-.6-.02-.13 0-.28.02-.28.02-1.81-.03-3.5 1.11-3.45 3.53.05 2.21 2.64 3.47 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.61-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52 0 .51-.01.98-.01 1.38-.07.36-.2.7-.54.72-1.24.08-.94-1.9-.94-2.95v-6.43c-.06-1.97-1.54-3.25-3.8-3.25-3.09 0-5.31 3.81-4.25 5 .25.28 1.26-.8 1.32-.86s.08-.13.08-.13c-.01-1.3.97-2.95 2.37-3.09 1.6-.15 2.4 1.04 2.4 2.65v2.09c-6.06 1.21-6.93 3.22-6.93 4.87 0 2.21 1.55 3.2 3.23 3.2 1.45 0 2.88-.69 3.96-1.8.34 1.03 1.01 1.65 2.02 1.62.35-.01.41.09 1.46-.37.37-.1.35-.09.77-.01.56.19 1.32.57 2.66.57 2.03.03 3.85-1.85 3.85-4.17 0-1.5-.43-2.41-2.39-3.63zm-8.43 4.32c0 1.65-1.68 2.52-2.6 2.52-1.38 0-2.33-.89-2.33-2.66 0-2.73 3.28-3.23 4.94-3.67-.01-.01-.01 3.81-.01 3.81zm219.99.19c-.31 0-1.07 1.29-1.07 1.63 0 .34.77 1.6 1.07 1.6.33 0 1.07-1.23 1.07-1.6s-.73-1.63-1.07-1.63zm33.71 1.12V9.92c0-.61-.34-.77-.44-.77-.39 0-.61.1-.88.16-.27.1-.58.23-1.29.23-.13 0-.79-.12-.76.25.04.37 1.57.15 1.58 1.23v7.83c-.12 1.37-1.27 2.88-2.66 2.88-.32 0-2.39-.22-2.37-3.65V9.92c0-.61-.34-.77-.44-.77-.39 0-.61.1-.88.16-.27.1-.61.22-1.32.19-.38-.02-.79-.07-.73.29.06.32 1.59 0 1.59 1.23v7.51c0 2.74 1.61 4.32 3.56 4.32 1.3 0 2.49-.28 3.24-1.8h.05v1.32c0 .13.03.48.22.48.37 0 .56-.3.83-.4.29-.07.37-.33 1.28-.42.39-.04.82-.24.82-.5-.11-.53-1.4.06-1.4-.78zM290.09 9.11c-3.26 0-5.77 3.28-5.77 7.13 0 1.73.42 3.15 1.13 4.23-.79.57-2.23 1.1-4.96 1.1-2.13 0-1.93-.74-1.93-2.55V4.57c0-2.66 1.99-1.89 2.03-2.37.03-.34-.28-.26-.61-.26-.38 0-1.07.15-2.52.15-1.25 0-2.34-.12-2.88-.12-.33 0-.63.1-.52.35.25.57 2.14.05 2.14 1.65v15.1c0 1.44.21 2.36-.45 2.73-.81.49-1.76.51-1.68.83.05.19.45.2.68.2 1.02 0 2.42-.13 3.44-.15 1.94-.06 3.86.13 5.79.13 1.12 0 1.4-.22 2.22-1.33.01-.02.02-.03.04-.05 1.01.94 2.34 1.44 3.87 1.44 3.19 0 5.6-2.93 5.6-6.78.01-5.82-3.65-6.98-5.62-6.98zm.26 12.85c-3.03 0-4.22-3.76-4.22-6.82 0-2.65 1.04-5.1 3.57-5.1 3.08 0 4.19 3.29 4.19 6.51.01 3.87-1.36 5.41-3.54 5.41zm-32.03-10.49c-.75-.37-1.85-1.04-2.39-1.36-2.37-1.37-3.3-2.26-3.37-3.52-.12-2.21 2.04-3.52 3.58-3.35 1.96 0 3.57 1.19 4.24 3.73.07.27.31.89.56.89.22 0 .26-.2.24-.45l-.33-4.02c-.02-.33-.14-.42-.27-.42-.22 0-.36.33-.56.33-.31 0-1.1-1.11-3.8-1.09-.18-.01-.43.02-.43.02-2.63-.05-5.1 1.7-5.02 5.4.07 3.37 3.85 5.3 5.89 6.59 1.51.9 3.09 2.34 3.04 3.95-.08 2.47-1.63 4.08-3.58 3.94-4.59-.08-3.96-6.13-4.78-6.13-.56 0-.45 1.52-.46 2.32 0 1.92-.08 3.49.14 3.77.07.09.29.05.74.05.9 0 2 1.05 4.65 1.05 2.95.05 5.38-2.69 5.38-6.25-.01-2.19-.62-3.58-3.47-5.45zm51.69-3.31c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zM312.64 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.33 0 .76-.8.07-.69zm5.98-6.88c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.05 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.11-.74-2.55-.74-.11 0-.52-.01-.6-.01-.13 0-.28.01-.28.01-1.81-.03-3.5 1.11-3.44 3.53.05 2.21 2.64 3.46 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.61-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52-.01 1.25-.06 2.28.1 2.46.05.06.2.03.5.03.62 0 1.38.69 3.19.69 2.03.03 3.85-1.85 3.85-4.17-.01-1.48-.43-2.39-2.39-3.6zm-48.73 5.66c-.26.13-.85.77-2.28.77-1.07 0-1.68-.64-1.74-2v-8.82l3.38-.01c.22 0 .65-1.44.67-1.52.04-.18.1-.33.12-.46.04-.28-.17-.3-.37-.01-.15.15-.32.55-.99.55h-2.81c0-2.41.03-3.04-.35-3.04-.36 0-.3.1-.63 1.17-.54 1.79-2.52 2.58-3.15 2.97-.15.08-.15.11-.15.19-.01.23.75.14 2.31.17l-.01 8.07c0 3.45 1.64 4.03 2.87 4.03 1.87 0 3.21-1.34 3.28-1.8.03-.25 0-.28-.15-.26zm-81.32-1.09c-.57 0-1.42 1.62-3.66 1.62-1.58 0-4.17-1.53-4.17-6.66h6.9c.6 0 .88.03.88-.52 0-1.25-1.4-4.95-4.59-4.95-3.24 0-5.08 3.33-5.08 7.31 0 2.05 1.35 6.38 5.24 6.38 2.33 0 4.59-2.24 4.59-2.95-.01-.11-.01-.23-.11-.23zm-5.08-9.81c1.42 0 2.88 1.56 2.88 3.3 0 .46-.15.62-.52.62h-5.11c0-1.71 1.13-3.92 2.75-3.92zm-31.7-7.33c.1-.16-.25-.24-.37-.24-.42 0-1.37.11-1.8.11-.89 0-1.64-.09-2.53-.09-.07 0-.46.05-.46.18-.01.63 2.13-.11 2.13 2.6v10.57c0 3.13-.99 6.41-5.29 6.41-3.09 0-4.76-1.94-4.76-6.17V4.41c0-1.91 1.49-1.49 1.52-1.92.03-.41-1.33-.16-1.43-.16-.71 0-1.21.08-1.95.08-.62 0-1.37-.1-1.97-.1-.12 0-.53-.02-.61.15-.23.56 1.91.26 1.91 1.83v10.92c0 4.08 1.14 8.08 7.17 7.97 7.14-.12 7.01-6.54 7.01-7.83V5.12c.01-2.43 1.2-2.2 1.43-2.57zm28.19 7.24c.17-.2.22-.53-.57-.46-.45 0-.77.08-1.22.08-.57 0-.68-.02-1.22-.04-.68-.02-.86.05-.82.25.12.6 1.55.01 1.36 1.8-.16 1.5-.65 2.79-1.14 4.07l-1.73 4.62-2.54-7.7c-.31-.96-.45-1.47-.45-1.57 0-.96 1.16-.75 1.42-1.14.16-.26-.17-.4-.54-.4-.31 0-.67.11-1.63.13-.79.02-1.36.02-1.7-.05-.89-.16-.82.33-.51.48s.46.01.91 1.36l3.91 11.06c.08.22.18.77.52.77.39 0 .39-.39.88-1.69 0 0 3.75-10.48 4-10.86.51-.74.89-.5 1.07-.71zm14.47-.5c-1.07 0-1.8 1.28-2.33 2.16h-.05V9.53c0-.3-.15-.48-.3-.48-.41 0-.72.81-2.87 1.33-.13.03-.48.1-.48.28 0 .64 1.82-.19 1.82 1.93v8.07c0 1.25-1.29 1.12-1.29 1.77 0 .18.08.27.28.27.17 0 .63-.12 2.32-.12 1.41 0 2.02.12 2.37.12.28 0 .41-.06.41-.34 0-.98-2.25.48-2.25-2.34v-6.88c0-.4.6-1.8 1.64-1.8.91 0 1.02.7 1.5.7.3 0 .91-.91.91-1.38-.01-.58-1.16-1.37-1.68-1.37zm32.55.1c-.27 0-.96.04-1.59.04-.76 0-1.13-.09-1.45-.09-.48 0-.96 0-.87.32.1.36 1.73.23 1.73 2.01 0 .23 0 .52-.33 1.71l-2.08 6.63-2.9-8.15s-.14-.26-.14-.79c0-1.32 1.54-1.17 1.6-1.41.05-.19-.21-.4-.62-.4h-3.63c-.02 0-.03.01-.05.01h-2.81c0-2.41.03-3.04-.35-3.04-.36 0-.3.1-.63 1.17-.54 1.79-2.52 2.58-3.15 2.97-.15.08-.15.11-.15.19-.01.22.76.14 2.31.17l-.01 8.07c0 3.45 1.64 4.03 2.87 4.03 1.87 0 3.21-1.33 3.28-1.8 0-.27-.04-.29-.18-.27-.26.13-.85.77-2.28.77-1.07 0-1.68-.64-1.74-2V10.7s2.5-.01 3.21-.01c.04.06.08.13.1.19l2.99 8.45c.24.69.39.92.68 2.14.19.79.12 1.51.12 1.51-.29 1.27-1.07 1.99-2.26 4.34-.12.22 1.71-.02 1.81-.05.15-.05.13-.09.31-.42l1.32-3.93 3.69-11.34c.54-1.98 1.39-1.62 1.53-1.89.12-.13 0-.3-.33-.3z\"\r\n      ></path>\r\n      <path\r\n        d=\"M222.22 22.76l-.07.19V23l.07-.24zm-14.74-14.6c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zM210.11 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.33 0 .76-.8.07-.69zM166.52 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.77 1.57 1.07 1.57zM169.17 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04h-.17c-.54-.1-1.06-.32-1.05-1.79v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.07 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 2 1.68v7.64c0 2-1.35 1.52-1.66 2.04-.15.27.25.33.59.33.31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.04 0 .09-.01.13-.01.11 0 .21.01.34.01.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.34.02.75-.78.08-.67zm32.72-6.89c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.05 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.1-.74-2.55-.74-.11 0-.52-.01-.6-.02-.13 0-.28.02-.28.02-1.81-.03-3.5 1.11-3.45 3.53.05 2.21 2.64 3.46 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.62-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52 0 1.25-.06 2.28.1 2.46.05.06.2.03.5.03.62 0 1.38.69 3.19.69 2.03.03 3.85-1.85 3.85-4.17 0-1.47-.42-2.38-2.38-3.6z\"\r\n      ></path>\r\n    </g>\r\n  </svg>\r\n</div>\r\n<header role=\"banner\">\r\n  <div class=\"container\">\r\n    <a class=\"site-title\" href=\"files/index.html\">Nursery School</a>\r\n    <nav class=\"action-buttons\">\r\n      <a class=\"action-button\" href=\"files/apply.html\">Apply</a>\r\n      <a class=\"action-button\" href=\"mailto:nursery@wustl.edu\"\r\n        >Contact Us</a\r\n      >\r\n    </nav>\r\n  </div>\r\n  <div id=\"main-menu-container\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar\">\r\n        <a id=\"home\" href=\"files/index.html\">Home</a>\r\n        <div class=\"dropdown\">\r\n          \r\n          <button class=\"dropbtn\">\r\n            \r\n            <a id=\"about\" href=\"files/about.html\">About</a>\r\n          </button>\r\n          <div class=\"dropdown-content\">\r\n            <a id=\"curriculum-overview\" href=\"files/curriculum_overview.html\"\r\n              >Curriculum Overview</a>\r\n            <a id=\"tuition\" href=\"files/tuition.html\">Tuition</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"dropdown\">\r\n          <button class=\"dropbtn\">\r\n            <a id=\"classrooms\" href=\"files/classrooms.html\">Classrooms </a>\r\n          </button>\r\n          <div class=\"dropdown-content\">\r\n            <a id=\"teddy-bears\" href=\"files/teddy_bears.html\">Teddy Bears</a>\r\n            <a id=\"panda-bears\" href=\"files/panda_bears.html\">Panda Bears</a>\r\n            <a id=\"bear-cubs\" href=\"files/bear_cubs.html\">Bear Cubs</a>\r\n            <a id=\"big-bears\" href=\"files/big_bears.html\">Big Bears</a>\r\n            <a id=\"sun-bears\" href=\"files/sun_bears.html\">Sun Bears</a>\r\n            <a id=\"bear-tracks\" href=\"files/bear_tracks.html\">Bear Tracks</a>\r\n            <a id=\"enrichment-program\" href=\"files/enrichment_programs.html\"\r\n              >Enrichment Program</a\r\n            >\r\n          </div>\r\n        </div>\r\n        <a id=\"summer-camp\" href=\"files/summer_camp.html\">Summer Camp</a>\r\n        <a id=\"staff\" href=\"files/staff.html\">Staff</a>\r\n        <a id=\"calendar\" href=\"files/calendar.html\">Calendar</a>\r\n        <div class=\"dropdown\">\r\n          <button class=\"dropbtn\">\r\n            <a id=\"nursery-school-merchandise\" href=\"files/parent_resources.html\">\r\n            For Parents & Family\r\n            </a>\r\n          </button>\r\n          <div class=\"dropdown-content\">\r\n            <a\r\n              id=\"nursery-school-merchandise\"\r\n              href=\"files/nursery_school_merchandise.html\"\r\n              >Nursery School Merchandise</a\r\n            >\r\n            <a id=\"parent-association\" href=\"files/parent_association.html\"\r\n              >Parent Association</a\r\n            >\r\n            <a id=\"get-involved\" href=\"files/get_involved.html\">Get Involved</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY2VuYXJpb3Mvc2NlbmFyaW9zLmpzb24iLCJzY3JpcHRzL3RzL2NvcmUvZGF0YS1sb2cvZGF0YS50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9ldmVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9yZWNlaXZlci50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vYmFubmVyLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9kb2N1bWVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vZWxlbWVudHMudHMiLCJzY3JpcHRzL3RzL2NvcmUvZG9tL2h0bWxfbG9jLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9tb2RhbC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vc2Nyb2xsLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9zdWJtaXRfZm9ybS50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vdHJhY2tlcl9lbGVtcy50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvaGlzdG9yeS50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvcm91dGVyLnRzIiwic2NyaXB0cy90cy9jb3JlL3RyYWNrZXIvdHJhY2tlci50cyIsInNjcmlwdHMvdHMvY29yZS91dGlscy9jb25zb2xlX3dyYXBwZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvZnVuY3MudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaHRtbF9sb2FkZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaWRfZ2VuZXJhdG9yLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3FfcGFyYW1zLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3JlYWR5LnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3NjZW5hcmlvcy50cyIsInNjcmlwdHMvdHMvZHluYW1pYy1kb20vYWNjb3JkaW9uLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9kby1zb21ldGhpbmcuanMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2R5bmFtaWMtZG9tLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9odG1sLWltcG9ydHMudHMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvZm9vdGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvaGVhZGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL3NsaWRlc2hvdy50cyIsInNjcmlwdHMvdHMvdHJhY2tlci90cmFja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDdkVBLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFTNUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUM7QUFFaEQsUUFBQSxPQUFPLEdBQWlCO0lBQ25DLEdBQUcsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFO0lBQ3pCLFlBQVksRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUMzQyxLQUFLLEVBQUUsU0FB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QUFDO3dDQUN6QyxrQkFBa0I7d0NBQ2xCLHFCQUFNLGVBQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBQTs7d0NBRHJDLGtCQUFrQjt3Q0FDbEIsU0FBcUMsQ0FBQzs7Ozs7cUJBQ3ZDO2lCQUNGLENBQUMsQ0FBQzs7OztLQUNKLENBQUM7QUFFRixLQUFLLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIm1vZHVsZS5leHBvcnRzPVtcclxuICB7XHJcbiAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGEgcGFyZW50IGNvbnNpZGVyaW5nIHNlbmRpbmcgeW91ciBjaGlsZCB0byBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuIFlvdeKAmXZlIGxlYXJuZWQgdGhhdCB0aGUgY3VycmljdWx1bSBpcyBwbGF5LWJhc2VkIGFuZCB5b3Ugd2FudCB0byBrbm93IGhvdyBsZWFybmluZyBpcyBpbmNvcnBvcmF0ZWQgaW50byBhIHBsYXktYmFzZWQgY29udGV4dC4gWW91IGhhdmUgc29tZSBpZGVhcyBhYm91dCBob3cgbGFuZ3VhZ2UgbGVhcm5pbmcgbWlnaHQgaGFwcGVuLCBidXQgYXJlIGxlc3Mgc3VyZSBhYm91dCBtYXRoLlwiLFxyXG4gICAgXCJxdWVzdGlvblwiOiBcIkZpbmQgc29tZSBleGFtcGxlcyBvZiBob3cgbWF0aCBsZWFybmluZyBpcyBpbmNvcnBvcmF0ZWQgYXQgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLlwiLFxyXG4gICAgXCJ0YWdcIjogXCJtYXRoXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgaW52ZXN0aWdhdGluZyBwcmUtc2Nob29sIG9wdGlvbnMgZm9yIHlvdXIgNCB5ZWFyIG9sZC4gQm90aCB5b3UgYW5kIHlvdXIgc3BvdXNlIHdvcmssIHNvIHlvdSBuZWVkIHRvIGZ1bGx5IHVuZGVyc3RhbmQgd2hhdCBzY2hlZHVsaW5nIGNvbnN0cmFpbnRzIGVhY2ggb3B0aW9uIGludm9sdmVzLiBPbmUgb2YgeW91ciBzY2hvb2xzIG9mIGludGVyZXN0IGlzIHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuXCIsXHJcbiAgICBcInF1ZXN0aW9uXCI6IFwiV2hlbiBkb2VzIHNjaG9vbCBzdGFydCBhbmQgZW5kIGVhY2ggZGF5PyBXaGF0IGlzIHRoZSBsb25nZXN0IHBlcmlvZCBvZiB0aW1lIHRoYXQgeW91ciBjaGlsZCBjYW4gYmUgdGhlcmU/XCIsXHJcbiAgICBcInRhZ1wiOiBcInNjaG9vbF9kYXlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBpbnZlc3RpZ2F0aW5nIHByZS1zY2hvb2wgb3B0aW9ucyBmb3IgeW91ciAzLjUgeWVhciBvbGQuIFlvdeKAmXZlIGJlZW4gdG9sZCB0aGF0IG9uZSBvZiB0aGUgaGFsbG1hcmtzIG9mIGEgZ29vZCBwcm9ncmFtIGlzIHRlYWNoZXJzIHdobyBoYXZlIGJlZW4gdGhlcmUgZm9yIGEgbG9uZyB0aW1lLiBZb3Ugd2FudCB5b3VyIGNoaWxkIHRvIGF0dGVuZCBpbiB0aGUgbW9ybmluZ3Mgb25seS5cIixcclxuICAgIFwicXVlc3Rpb25cIjogXCJXaGljaCB0ZWFjaGVycyB3b3VsZCB5b3VyIGNoaWxkIGhhdmUgYW5kIGhvdyBsb25nIGhhdmUgdGhleSBiZWVuIGF0IHRoZSBzY2hvb2w/XCIsXHJcbiAgICBcInRhZ1wiOiBcInRlYWNoZXJfdGVudXJlXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgc3RhcnRpbmcgdG8gbG9vayBhdCBzdW1tZXIgY2FtcCBvcHRpb25zIGFuZCBoYXZlIGhlYXJkIGdvb2QgdGhpbmdzIGFib3V0IFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbCBmb3IgeW91bmcgY2hpbGRyZW4uXCIsXHJcbiAgICBcInF1ZXN0aW9uXCI6IFwiV2hhdCBhcmUgdGhlIGRhaWx5IGNhbXAgaG91cnM/IEFyZSB0aGVyZSBhbnkgZXh0ZW5kZWQgZGF5IG9wcG9ydHVuaXRpZXM/XCIsXHJcbiAgICBcInRhZ1wiOiBcInN1bW1lcl9jYW1wXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgaW52ZXN0aWdhdGluZyBwcmUtc2Nob29sIG9wdGlvbnMgZm9yIHlvdXIgc3Bpcml0ZWQgMyB5ZWFyIG9sZCBhbmQgd2FudCB0byB1bmRlcnN0YW5kIHRoZWlyIGFwcHJvYWNoIHRvIGRpc2NpcGxpbmUuXCIsXHJcbiAgICBcInF1ZXN0aW9uXCI6IFwiSG93IGRvIHRlYWNoZXJzIGF0IFdhc2hpbmd0b24gVW5pdmVyc2l0eSBhcHByb2FjaCBkaXNjaXBsaW5lP1wiLFxyXG4gICAgXCJ0YWdcIjogXCJkaXNjaXBsaW5lXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiY29udGV4dFwiOiBcIllvdXIgZGF1Z2h0ZXIgaXMgaW4gdGhlIFRlZGR5IEJlYXIgY2xhc3MgYXQgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLiBTaGUgY2FtZSBob21lIHRoaXMgd2VlayBzaW5naW5nIGEgc29uZyBpbiBTcGFuaXNoIGFib3V0IHNoYXBlcywgYnV0IHlvdSBhcmUgcHJldHR5IHN1cmUgdGhhdCBzaGUgaGFzIHNvbWUgb2YgdGhlIHdvcmRzIHdyb25nLlwiLFxyXG4gICAgXCJxdWVzdGlvblwiOiBcIldoYXQgYXJlIHRoZSBjb3JyZWN0IGx5cmljcz9cIixcclxuICAgIFwidGFnXCI6IFwic3BhbmlzaF9zb25nXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiY29udGV4dFwiOiBcIkl0IGlzIG1pZC1EZWNlbWJlciBhbmQgeW91IGFyZSB0aGlua2luZyBhYm91dCB0aGluZ3MgdG8gZG8gb3ZlciB5b3VyIGRhdWdodGVyJ3MgdXBjb21pbmcgc2Nob29sIGJyZWFrLiBTaGUgaXMgMyB5ZWFycyBvbGQgYW5kIGF0dGVuZHMgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbCBhbmQgaXMgaW4gdGhlIFRlZGR5IEJlYXIgY2xhc3Nyb29tLiBZb3UgYXJlIHBsYW5uaW5nIGEgdHJpcCB0byB0aGUgbGlicmFyeSBhbmQgd2FudCB0byBjaGVjayBvdXQgc29tZSBib29rcyB0aGF0IGNvbm5lY3Qgd2l0aCBzb21ldGhpbmcgc2hlIGlzIGRvaW5nIGluIHNjaG9vbC5cIixcclxuICAgIFwicXVlc3Rpb25cIjogXCJXaGF0IGFyZSBzb21lIHBvdGVudGlhbCBib29rIHRvcGljcyB0aGF0IHJlbGF0ZSB0byBzb21ldGhpbmcgdGhhdCBpcyBnb2luZyBvbiBpbiBoZXIgY2xhc3Nyb29tIHRoaXMgd2Vlaz9cIixcclxuICAgIFwidGFnXCI6IFwiYm9va3NcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBhIHBhcmVudCB3aXRoIGEgY2hpbGQgd2hvIGhhcyBqdXN0IGJlZW4gYWNjZXB0ZWQgdG8gYXR0ZW5kIGFzIGEgZnVsbCB0aW1lIHN0dWRlbnQgYXQgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC4gWW91IHdhbnQgdG8gYWNjZXB0IHRoZSBvZmZlciBvZiBhZG1pc3Npb24uXCIsXHJcbiAgICBcInF1ZXN0aW9uXCI6IFwiRmlndXJlIG91dCB3aGF0IHlvdSBuZWVkIHRvIGRvIGF0IHRoaXMgdGltZSB0byBmaW5hbGl6ZSB5b3VyIGNoaWxk4oCZcyBwbGFjZSBhdCB0aGUgc2Nob29sLlwiLFxyXG4gICAgXCJ0YWdcIjogXCJhZG1pc3Npb25fMlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGEgcGFyZW50IHdpdGggYSBjaGlsZCB3aG8gaGFzIGp1c3QgYmVlbiBhY2NlcHRlZCB0byBhdHRlbmQgYXMgYSBmdWxsIHRpbWUgc3R1ZGVudCBhdCB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLiBZb3UgbmVlZCB0byBwYXkgb25lIG1vbnRoIG9mIHR1aXRpb24gYXMgYSBkZXBvc2l0LlwiLFxyXG4gICAgXCJxdWVzdGlvblwiOiBcIkZpbmQgb3V0IGhvdyBtdWNoIG9uZSBtb250aCBvZiB0dWl0aW9uIGlzIGFuZCB3aGV0aGVyIG9yIG5vdCBpdCBpcyBwb3NzaWJsZSB0byBwYXkgb25saW5lLlwiLFxyXG4gICAgXCJ0YWdcIjogXCJkZXBvc2l0XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgbW92aW5nIHRvIFN0LiBMb3VpcyBmcm9tIEJlaWppbmcgYW5kIGxvb2tpbmcgZm9yIGEgUHJlLUsgcHJvZ3JhbSBmb3IgeW91ciBkYXVnaHRlciwgYWdlIDUuIFNoZSBpcyB2ZXJ5IGNsb3NlIHRvIGhlciBmcmllbmRzIGFuZCB5b3UgYXJlIHdvcnJpZWQgdGhhdCB0aGUgbW92ZSBtaWdodCBiZSBoYXJkIG9uIGhlci4gU2hlIG1heSBuZWVkIHNvbWUgZXh0cmEgc3VwcG9ydCBmcm9tIGhlciBuZXcgdGVhY2hlcnMgbGVhcm5pbmcgRW5nbGlzaCwgYWRhcHRpbmcgdG8gQW1lcmljYW4gY3VsdHVyZSwgYW5kIG1ha2luZyBuZXcgZnJpZW5kcy5cIixcclxuICAgIFwicXVlc3Rpb25cIjogXCJIb3cgZG9lcyB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sIHN0YWZmIGFwcHJvYWNoIHByb3ZpZGluZyBleHRyYSBoZWxwIHRvIHN0dWRlbnRzIHdobyBuZWVkIGl0P1wiLFxyXG4gICAgXCJ0YWdcIjogXCJoZWxwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgbG9va2luZyBhdCBOdXJzZXJ5IFNjaG9vbHMgZm9yIHlvdXIgc29vbiB0byBiZSAzIHllYXIgb2xkLiBIZSBoYXMgbmV2ZXIgYmVlbiBpbiBzY2hvb2wgb3IgZGF5Y2FyZSBiZWZvcmUgYW5kIHlvdSBhcmUgc29tZXdoYXQgd29ycmllZCBhYm91dCB0aGUgdHJhbnNpdGlvbi4gWW91J2QgbGlrZSB0byBlbnN1cmUgdGhhdCB5b3UnbGwgYmUgYWJsZSB0byBoYXZlIHN0cm9uZyBjb21tdW5pY2F0aW9uYXQgaGlzIG5ldyBzY2hvb2wuXCIsXHJcbiAgICBcInF1ZXN0aW9uXCI6IFwiSG93IGRvZXMgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbCBoYW5kbGUgY29tbXVuaWNhdGluZyB3aXRoIHBhcmVudHM/XCIsXHJcbiAgICBcInRhZ1wiOiBcImNvbW11bmljYXRpb25cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJjb250ZXh0XCI6IFwiSXTigJlzIG1pZC1EZWNlbWJlciBhbmQgeW91ciBzb24sIGFnZSA0LCBjYW1lIGhvbWUgYWxsIGV4Y2l0ZWQgYWJvdXQgc2NpZW5jZSBjbGFzcy4gVGhleSBsZWFybmVkIGEgbmV3IHdvcmQsIGJ1dCBoZSBjYW7igJl0IGFjdHVhbGx5IHJlbWVtYmVyIHRoZSB3b3JkIHRoZXkgbGVhcm5lZCBhYm91dC5cIixcclxuICAgIFwicXVlc3Rpb25cIjogXCJXaGF0IHdhcyB0aGUgdG9waWMgb2YgaGlzIHJlY2VudCBzY2llbmNlIGNsYXNzP1wiLFxyXG4gICAgXCJ0YWdcIjogXCJzY2llbmNlXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgc2VsZWN0aW5nIGEgcHJlLXNjaG9vbCwgYnV0IHdhbnQgdG8gYmUgc3VyZSB0aGF0IHlvdXIgZGF1Z2h0ZXIgd2lsbCBiZSByZWFkeSBmb3Iga2luZGVyZ2FydGVuIHdoZW4gaXTigJlzIHRpbWUuXCIsXHJcbiAgICBcInF1ZXN0aW9uXCI6IFwiSG93IGRvZXMgdGhlIG51cnNlcnkgc2Nob29sIGFzc2VzcyBjaGlsZHJlbuKAmXMga25vd2xlZGdlLCBzdXBwb3J0IHRoZWlyIGdyb3d0aCwgYW5kIHNoYXJlIHRoZSByZXN1bHRzIHdpdGggcGFyZW50cz9cIixcclxuICAgIFwidGFnXCI6IFwicGFyZW50X3RlYWNoZXJfY29uZmVyZW5jZVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImNvbnRleHRcIjogXCJZb3UgaGF2ZSByZWNlbnRseSBhY2NlcHRlZCBhIHBvc2l0aW9uIGZvciB5b3VyIGNoaWxkIGZvciB0aGUgY29taW5nIHNjaG9vbCB5ZWFyIGF0IHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuIFVwIHRvIHRoaXMgcG9pbnQsIHlvdXIgY2hpbGQgaGFzIGJlZW4gYXQgaG9tZSBhbmQgeW91IGFyZSBzb21ld2hhdCB3b3JyaWVkIGFib3V0IHRoZSB0cmFuc2l0aW9uLlwiLFxyXG4gICAgXCJxdWVzdGlvblwiOiBcIkhvdyBkb2VzIHRoZSBudXJzZXJ5IHNjaG9vbCBzdXBwb3J0IGtpZHPigJkgdHJhbnNpdGlvbnMgaW50byBzY2hvb2w/XCIsXHJcbiAgICBcInRhZ1wiOiBcIm9yaWVudGF0aW9uXCJcclxuICB9XHJcbl1cclxuIiwiaW1wb3J0IHsgVHJhY2tlckV2ZW50IH0gZnJvbSBcIi4vZXZlbnRcIjtcclxuY29uc29sZS5sb2coXCJkYXRhIGxvYWRlZC5cIik7XHJcbmV4cG9ydCBpbnRlcmZhY2UgTXR1cmtVUkxEYXRhIHtcclxuICByYXc6IHN0cmluZztcclxuICBhc3NpZ25tZW50SUQ6IHN0cmluZyB8IG51bGw7XHJcbiAgaGl0SUQ6IHN0cmluZyB8IG51bGw7XHJcbiAgd29ya2VySUQ6IHN0cmluZyB8IG51bGw7XHJcbiAgc3VibWl0VG86IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcbmNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcztcclxuXHJcbmV4cG9ydCBjb25zdCB1cmxEYXRhOiBNdHVya1VSTERhdGEgPSB7XHJcbiAgcmF3OiB1cmxQYXJhbXMudG9TdHJpbmcoKSxcclxuICBhc3NpZ25tZW50SUQ6IHVybFBhcmFtcy5nZXQoXCJhc3NpZ25tZW50SWRcIiksXHJcbiAgaGl0SUQ6IHVybFBhcmFtcy5nZXQoXCJoaXRJZFwiKSxcclxuICB3b3JrZXJJRDogdXJsUGFyYW1zLmdldChcIndvcmtlcklkXCIpLFxyXG4gIHN1Ym1pdFRvOiB1cmxQYXJhbXMuZ2V0KFwidHVya1N1Ym1pdFRvXCIpLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGEge1xyXG4gIHB1YmxpYyBsb2dzOiB7IFtldmVudFR5cGU6IHN0cmluZ106IFRyYWNrZXJFdmVudFtdIH0gPSB7fTtcclxuICBwdWJsaWMgZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gIHB1YmxpYyBlcnJvcnM6IGFueVtdID0gW107XHJcbiAgcHVibGljIHVybERhdGE6IE10dXJrVVJMRGF0YTtcclxuXHJcbiAgY29uc3RydWN0b3IocmF3TXR1cmtVUkxEYXRhOiBNdHVya1VSTERhdGEpIHtcclxuICAgIHRoaXMudXJsRGF0YSA9IHJhd010dXJrVVJMRGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXJpYWxpemUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhID0gbmV3IERhdGEodXJsRGF0YSk7XHJcblxyXG5PYmplY3QuYXNzaWduKHdpbmRvdywgeyBkYXRhIH0pO1xyXG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBub3cgfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3NcIjtcclxubG9nKFwiZXZlbnQgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XHJcbmV4cG9ydCBjb25zdCBlbnVtIEFjdGlvbkVudW0ge1xyXG4gIENMSUNLID0gXCJjbGlja1wiLFxyXG4gIEJVVFRPTiA9IFwiYnV0dG9uXCIsXHJcbiAgU0NST0xMID0gXCJzY3JvbGxcIixcclxuICBISVNUT1JZID0gXCJoaXN0b3J5XCIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tlckV2ZW50IHtcclxuICBhY3Rpb246IHN0cmluZztcclxuICB0aW1lOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RUb1RyYWNrZXJFdmVudChvYmo6IGFueSwgYWN0aW9uOiBzdHJpbmcpIHtcclxuICBvYmouYWN0aW9uID0gYWN0aW9uO1xyXG4gIG9iai50aW1lID0gbm93KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1RyYWNrZXJFdmVudChvYmo6IGFueSk6IG9iaiBpcyBUcmFja2VyRXZlbnQge1xyXG4gIHJldHVybiBvYmouYWN0aW9uICE9PSB1bmRlZmluZWQgJiYgb2JqLnRpbWUgIT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VUcmFja2VyRXZlbnQ8VD4gaW1wbGVtZW50cyBUcmFja2VyRXZlbnQge1xyXG4gIHB1YmxpYyBjdXN0RXY6IEN1c3RvbUV2ZW50O1xyXG4gIHB1YmxpYyBhY3Rpb246IHN0cmluZztcclxuICBwdWJsaWMgdGltZTogbnVtYmVyO1xyXG4gIGNvbnN0cnVjdG9yKGFjdGlvbjogc3RyaW5nLCBldmVudEluaXREaWN0PzogQ3VzdG9tRXZlbnRJbml0PFQ+IHwgdW5kZWZpbmVkKSB7XHJcbiAgICB0aGlzLmN1c3RFdiA9IG5ldyBDdXN0b21FdmVudChhY3Rpb24sIGV2ZW50SW5pdERpY3QpO1xyXG4gICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcbiAgICB0aGlzLnRpbWUgPSBub3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZGV0YWlsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VzdEV2LmRldGFpbDtcclxuICB9XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWNsYXNzZXMtcGVyLWZpbGVcclxuZXhwb3J0IGNsYXNzIENsaWNrRXZlbnQgZXh0ZW5kcyBCYXNlVHJhY2tlckV2ZW50PHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG4gIGlkOiBzdHJpbmc7XHJcbn0+IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHg6IG51bWJlcixcclxuICAgIHk6IG51bWJlcixcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgICBldmVudEluaXREaWN0PzpcclxuICAgICAgfCBDdXN0b21FdmVudEluaXQ8eyB4OiBudW1iZXI7IHk6IG51bWJlcjsgaWQ6IHN0cmluZyB9PlxyXG4gICAgICB8IHVuZGVmaW5lZFxyXG4gICkge1xyXG4gICAgc3VwZXIoQWN0aW9uRW51bS5DTElDSywgZXZlbnRJbml0RGljdCk7XHJcbiAgICB0aGlzLmRldGFpbC54ID0geDtcclxuICAgIHRoaXMuZGV0YWlsLnkgPSB5O1xyXG4gICAgdGhpcy5kZXRhaWwuaWQgPSBpZDtcclxuICB9XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWNsYXNzZXMtcGVyLWZpbGVcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkV2ZW50IGV4dGVuZHMgQmFzZVRyYWNrZXJFdmVudDx7IGtleTogc3RyaW5nOyBpZDogc3RyaW5nIH0+IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGtleTogc3RyaW5nLFxyXG4gICAgaWQ6IHN0cmluZyxcclxuICAgIGV2ZW50SW5pdERpY3Q/OiBDdXN0b21FdmVudEluaXQ8eyBrZXk6IHN0cmluZzsgaWQ6IHN0cmluZyB9PiB8IHVuZGVmaW5lZFxyXG4gICkge1xyXG4gICAgc3VwZXIoQWN0aW9uRW51bS5DTElDSywgZXZlbnRJbml0RGljdCk7XHJcbiAgICB0aGlzLmRldGFpbC5rZXkgPSBrZXk7XHJcbiAgICB0aGlzLmRldGFpbC5pZCA9IGlkO1xyXG4gIH1cclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtY2xhc3Nlcy1wZXItZmlsZVxyXG5leHBvcnQgY2xhc3MgSGlzdG9yeUV2ZW50IGV4dGVuZHMgQmFzZVRyYWNrZXJFdmVudDx7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgZXh0cmE/OiBhbnk7XHJcbn0+IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgZXh0cmE/OiBhbnksXHJcbiAgICBldmVudEluaXREaWN0PzogQ3VzdG9tRXZlbnRJbml0PHsgdXJsOiBzdHJpbmcgfT4gfCB1bmRlZmluZWRcclxuICApIHtcclxuICAgIHN1cGVyKEFjdGlvbkVudW0uSElTVE9SWSwgZXZlbnRJbml0RGljdCk7XHJcbiAgICB0aGlzLmRldGFpbC51cmwgPSB1cmw7XHJcbiAgICB0aGlzLmRldGFpbC5leHRyYSA9IGV4dHJhO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBpc1RyYWNrZXJFdmVudCwgVHJhY2tlckV2ZW50IH0gZnJvbSBcIi4vZXZlbnRcIjtcclxubG9nKFwicmVjZWl2ZXIgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XHJcbmV4cG9ydCBjbGFzcyBFdmVudFJlY2VpdmVyIHtcclxuICBwcml2YXRlIG1hcCA9IG5ldyBNYXA8c3RyaW5nLCAoZXZlbnQ6IFRyYWNrZXJFdmVudCkgPT4gdm9pZD4oKTtcclxuICBwcml2YXRlIGVtaXR0ZXIgPSBuZXcgRXZlbnRUYXJnZXQoKTtcclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyKGV2ZW50VHlwZTogc3RyaW5nLCBjYWxsYmFjaz86IChldmVudDogVHJhY2tlckV2ZW50KSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLmVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgdHJhY2tFdiA9IChldmVudCBhcyB1bmtub3duIGFzIEN1c3RvbUV2ZW50KS5kZXRhaWwgYXMgVHJhY2tlckV2ZW50O1xyXG4gICAgICBpZiAoaXNUcmFja2VyRXZlbnQodHJhY2tFdikgJiYgY2FsbGJhY2spIHtcclxuICAgICAgICBjYWxsYmFjayh0cmFja0V2KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5tYXAuc2V0KGV2ZW50VHlwZSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRvRXZlbnQoZXZlbnQ6IFRyYWNrZXJFdmVudCkge1xyXG4gICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLm1hcC5nZXQoXCJcIiArIGV2ZW50LmFjdGlvbik7XHJcbiAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgY2FsbGJhY2soZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vcm91dGVyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSBcIi4vLi4vcm91dGVyL2hpc3RvcnlcIjtcclxuaW1wb3J0IHsgRCB9IGZyb20gXCIuL2RvY3VtZW50XCI7XHJcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcclxubG9nKFwiYmFubmVyIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xyXG5leHBvcnQgY2xhc3MgVG9wQmFubmVyIHtcclxuICBwdWJsaWMgc3RhdGljIHNob3coKSB7XHJcbiAgICBUb3BCYW5uZXIuc2hvd2luZyA9IHRydWU7XHJcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGRVcCwgdHJ1ZSk7XHJcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGREb3duLCBmYWxzZSk7XHJcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGRDb250ZW50LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaGlkZSgpIHtcclxuICAgIFRvcEJhbm5lci5zaG93aW5nID0gZmFsc2U7XHJcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGREb3duLCB0cnVlKTtcclxuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZFVwLCBmYWxzZSk7XHJcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGRDb250ZW50LCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGRvRGlzcGxheUNoYW5nZSgpIHtcclxuICAgIFRvcEJhbm5lci5zaG93aW5nID8gVG9wQmFubmVyLmhpZGUoKSA6IFRvcEJhbm5lci5zaG93KCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBzdGF0aWMgc2V0dXAoKSB7XHJcbiAgICBELmFkZEV2ZW50TGlzdGVuZXIoRWxlbWVudHMuZGRBcnJvdywgXCJjbGlja1wiLCBUb3BCYW5uZXIuZG9EaXNwbGF5Q2hhbmdlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHNob3dpbmcgPSB0cnVlO1xyXG59XHJcblxyXG5ELmFkZEV2ZW50TGlzdGVuZXIoXCJtdHVyay10b3AtYmFubmVyLWJhY2tcIiwgXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGlmIChIaXN0b3J5LmNhbkJhY2t3YXJkKCkpIHtcclxuICAgIFJvdXRlci5sb2FkV2l0aFBhdGhQcmVmaXgoSGlzdG9yeS5iYWNrd2FyZCgpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYWxlcnQoXCJUaGVyZSBpcyBubyBwYWdlIGhpc3RvcnkgdG8gZ28gYmFjayBmb3IgYXQgdGhpcyB0aW1lIVwiKTtcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgZXJyb3IsIGxvZyB9IGZyb20gXCIuLy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xyXG5sb2coXCJkb2N1bWVudCBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcclxuZXhwb3J0IGNsYXNzIEQge1xyXG4gIHB1YmxpYyBzdGF0aWMgZG9jOiBEb2N1bWVudCA9IGRvY3VtZW50O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGVsZW0oZWxlbTogRWxlbWVudCB8IHN0cmluZyk6IEVsZW1lbnQge1xyXG4gICAgaWYgKHR5cGVvZiBlbGVtID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIHJldHVybiBELmlkKGVsZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGVsZW0gYXMgRWxlbWVudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZGlzcGxheShlbGVtOiBFbGVtZW50IHwgc3RyaW5nLCBzaG93OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBlbGVtID0gRC5lbGVtKGVsZW0pO1xyXG4gICAgaWYgKHNob3cpIHtcclxuICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTtcclxuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlcIik7XHJcbiAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlkKGlkOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gRC5kb2MuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbGVtZW50IHdhcyBub3QgZm91bmQsIGlkOiA8JHtpZH0+LmApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBzdGF0aWMgY2xheihjbGF6OiBzdHJpbmcpOiBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+IHtcclxuICAgIHJldHVybiBELmRvYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXopO1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIHRhZyh0YWc6IHN0cmluZyk6IEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD4ge1xyXG4gICAgcmV0dXJuIEQuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZyk7XHJcbiAgfVxyXG4gIHB1YmxpYyBzdGF0aWMgaW1hZ2UoaWQ6IHN0cmluZywgdXJsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGVycm9yKCgpID0+IEQuaWQoaWQpLnNldEF0dHJpYnV0ZShcInNyY1wiLCB1cmwpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIGVsZW06IEVsZW1lbnQgfCBzdHJpbmcsXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICBsaXN0ZW5lcjogKGU6IEV2ZW50KSA9PiBhbnlcclxuICApIHtcclxuICAgIGVsZW0gPSB0aGlzLmVsZW0oZWxlbSk7XHJcbiAgICBjb25zdCB3cmFwcGVyRnVuYyA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxpc3RlbmVyKGUpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICAoZWxlbSBhcyBFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIHdyYXBwZXJGdW5jKTtcclxuICAgIHJldHVybiB3cmFwcGVyRnVuYztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZWFjaChlbGVtOiBFbGVtZW50IHwgc3RyaW5nLCBhcHBseTogKG5vZGU6IEVsZW1lbnQpID0+IGFueSkge1xyXG4gICAgZWxlbSA9IHRoaXMuZWxlbShlbGVtKTtcclxuICAgIGNvbnN0IGNoaWxkcmVuID0gZWxlbS5jaGlsZHJlbjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYXBwbHkoY2hpbGRyZW5baV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBlYWNoUmVjdXIoXHJcbiAgICBlbGVtOiBFbGVtZW50IHwgc3RyaW5nLFxyXG4gICAgYXBwbHk6IChub2RlOiBFbGVtZW50KSA9PiBhbnlcclxuICApIHtcclxuICAgIGVsZW0gPSB0aGlzLmVsZW0oZWxlbSk7XHJcbiAgICBjb25zdCBjaGlsZHJlbiA9IGVsZW0uY2hpbGRyZW47XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XHJcbiAgICAgIGFwcGx5KGNoaWxkKTtcclxuICAgICAgRC5lYWNoUmVjdXIoY2hpbGQsIGFwcGx5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KFxyXG4gICAgdGFnTmFtZTogSyxcclxuICAgIG9wdGlvbnM/OiBFbGVtZW50Q3JlYXRpb25PcHRpb25zXHJcbiAgKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBEIH0gZnJvbSBcIi4vZG9jdW1lbnRcIjtcclxubG9nKFwiZWxlbWVudCBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcclxuLyoqXHJcbiAqIFRoZXNlIGFyZSBlbGVtZW50cyB0aGF0IGFyZSBpbiBldmVyeSBzaW5nbGUgcHJvamVjdC4gRXZlbiBpZiB0aGV5IGFyZSBub3QgdXNlZCB0aGV5IHNob3VsZFxyXG4gKiBiZSBwbGFjZSBpbiB0aGUgcHJvamVjdCBhbmQgZGlzcGxheSBzaG91bGQgYmUgc2V0IHRvIG5vbmUuIFRoaXMgc2ltcGxpZmllcyBjb25maWd1cmF0aW9uXHJcbiAqIGFuZCBzb21lIGNvbW1vbiBmdW5jdGlvbnMgYW5kIGFsbG93cyBsZXNzIG51bGwgY2hlY2tzIHRvIGJlIHBlcmZvcm1lZCBvdmVyYWxsLiBJZiB0aGVcclxuICogZWxlbWVudCBkb2VzIG5vdCBleGlzdCBhdCBydW4gdGltZSBhbiBlbXB0eSBkaXYgd2l0aCB0aGF0IGlkIGlzIGNyZWF0ZWQgYW5kIGl0cyBkaXNwbGF5XHJcbiAqIGlzIHNldCB0byBub25lIHRoZW4gYXBwZW5kZWQgdG8gdGhlIGJvZHkuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEF0dGVtcHRzIHRvIGdldCBhbiBlbGVtZW50LCBpZiB1bnN1Y2Nlc3NmdWwsIGNyZWF0ZXMgZGl2IHdpdGggaWQgYW5kIGFwcGVuZHMgdG8gYm9keS5cclxuICpcclxuICogQHBhcmFtIGlkIC0gdGhlIGlkIG9mIHRoZSBlbGVtZW50IHRvIHJldHJpZXZlLlxyXG4gKi9cclxuZnVuY3Rpb24gbWFrZUVsZW1JZk5vdEV4aXN0KGlkOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgbGV0IGVsZW07XHJcbiAgdHJ5IHtcclxuICAgIGVsZW0gPSBELmlkKGlkKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGVsZW0gPSBELmNyZWF0ZShcImRpdlwiKTtcclxuICAgIGVsZW0uaWQgPSBpZDtcclxuICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZWxlbSk7XHJcbiAgfVxyXG4gIHJldHVybiBlbGVtO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tbW9ubHkgYWNjZXNzZWQgZWxlbWVudHMsIGFsbG93cyBmb3IgY2xlYXJlciBkb20gbWFuaXAgb24gdGhlc2UgZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRWxlbWVudHMgPSB7XHJcbiAgZG9jdW1lbnQ6IEQuZG9jLmRvY3VtZW50RWxlbWVudCxcclxuICB3cmFwcGVyOiBtYWtlRWxlbUlmTm90RXhpc3QoXCJ3cmFwcGVyXCIpLFxyXG4gIGh0bWxMb2M6IG1ha2VFbGVtSWZOb3RFeGlzdChcImh0bWwtbG9jXCIpLFxyXG4gIGlubmVyQm9keTogbWFrZUVsZW1JZk5vdEV4aXN0KFwiaW5uZXItYm9keVwiKSxcclxuICBkZERvd246IG1ha2VFbGVtSWZOb3RFeGlzdChcIm10dXJrLXRvcC1iYW5uZXItZHJvcC1kb3duLWJ1dHRvblwiKSxcclxuICBkZFVwOiBtYWtlRWxlbUlmTm90RXhpc3QoXCJtdHVyay10b3AtYmFubmVyLWNvbGxhcHNlLWJ1dHRvblwiKSxcclxuICBkZENvbnRlbnQ6IG1ha2VFbGVtSWZOb3RFeGlzdChcIm10dXJrLXRvcC1iYW5uZXItZHJvcC1kb3duLWNvbnRlbnRcIiksXHJcbiAgYmFja0J1dHRvbjogbWFrZUVsZW1JZk5vdEV4aXN0KFwibXR1cmstdG9wLWJhbm5lci1iYWNrXCIpLFxyXG4gIGRkQXJyb3c6IG1ha2VFbGVtSWZOb3RFeGlzdChcIm10dXJrLXRvcC1iYW5uZXItYXJyb3dcIiksXHJcbiAgbXRUb3BCYW5uZXJUZXh0OiBtYWtlRWxlbUlmTm90RXhpc3QoXCJtdHVyay10b3AtYmFubmVyLXRleHRcIiksXHJcbiAgbXRTY2VuYXJpb0NvbnRleHQ6IG1ha2VFbGVtSWZOb3RFeGlzdChcInNjZW5hcmlvX2NvbnRleHRcIiksXHJcbiAgbXRTY2VuYXJpb1F1ZXN0aW9uOiBtYWtlRWxlbUlmTm90RXhpc3QoXCJzY2VuYXJpb19xdWVzdGlvblwiKSxcclxuICBsb2dGaWxlSW5wdXQ6IG1ha2VFbGVtSWZOb3RFeGlzdChcclxuICAgIFwibXR1cmstdG9wLWJhbm5lci1kcm9wLWRvd24tY29udGVudC1sb2ctZmlsZS1pbnB1dFwiXHJcbiAgKSxcclxuICBzdWJtaXRGb3JtOiBtYWtlRWxlbUlmTm90RXhpc3QoXCJtdHVyay1zdWJtaXQtZm9ybVwiKSxcclxuICBtb2RhbDogbWFrZUVsZW1JZk5vdEV4aXN0KFwibW9kYWxcIiksXHJcbn07XHJcbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XHJcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4vLi4vZG9tL2VsZW1lbnRzXCI7XHJcbmxvZyhcImh0bWwgbG9jIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xyXG5leHBvcnQgZW51bSBBcHBFbnVtIHtcclxuICBJTkZPUk1BVElPTl9GT1JBR0lORyA9IFwiaW5mb3JtYXRpb24tZm9yYWdpbmdcIixcclxuICBDT0dOSVRJVkVfTE9BRCA9IFwiY29nbml0aXZlLWxvYWRcIixcclxuICBHRU5ERVJfTUFHID0gXCJnZW5kZXItbWFnXCIsXHJcbiAgRVJST1IgPSBcImVycm9yXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1vZGVFbnVtIHtcclxuICBSRUFMID0gXCJyZWFsXCIsXHJcbiAgU0FOREJPWCA9IFwic2FuZGJveFwiLFxyXG4gIFRFU1QgPSBcInRlc3RcIixcclxuICBFUlJPUiA9IFwiZXJyb3JcIixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhUTUxMb2Mge1xyXG4gIHB1YmxpYyBzdGF0aWMgZWxlbSA9IEVsZW1lbnRzLmh0bWxMb2M7XHJcbiAgcHVibGljIHN0YXRpYyBhcHA6IEFwcEVudW07XHJcbiAgcHVibGljIHN0YXRpYyBtb2RlOiBNb2RlRW51bTtcclxuICBwdWJsaWMgc3RhdGljIHNjZW5hcmlvOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2V0dXAoKSB7XHJcbiAgICBIVE1MTG9jLmFwcCA9IChIVE1MTG9jLmVsZW0uZGF0YXNldC5hcHAgYXMgQXBwRW51bSkgfHwgQXBwRW51bS5FUlJPUjtcclxuICAgIEhUTUxMb2MubW9kZSA9IChIVE1MTG9jLmVsZW0uZGF0YXNldC5tb2RlIGFzIE1vZGVFbnVtKSB8fCBNb2RlRW51bS5FUlJPUjtcclxuICAgIEhUTUxMb2Muc2NlbmFyaW8gPSBIVE1MTG9jLmVsZW0uZGF0YXNldC5zY2VuYXJpbyB8fCBcImVycm9yXCI7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi8uLi91dGlscy9jb25zb2xlX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgRCB9IGZyb20gXCIuL2RvY3VtZW50XCI7XHJcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcclxubG9nKFwibW9kYWwgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XHJcbmV4cG9ydCBjbGFzcyBNb2RhbCB7XHJcbiAgcHVibGljIHN0YXRpYyBlbGVtID0gRWxlbWVudHMubW9kYWw7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZGlzcGxheShzcmM6IHN0cmluZykge1xyXG4gICAgTW9kYWwuZWxlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIFwic3R5bGVcIixcclxuICAgICAgYGxlZnQ6ICR7TWF0aC5yb3VuZCh3aW5kb3cucGFnZVhPZmZzZXQpfXB4OyB0b3A6ICR7TWF0aC5yb3VuZChcclxuICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXRcclxuICAgICAgKX1weDtgXHJcbiAgICApO1xyXG4gICAgTW9kYWwuZWxlbS5jbGFzc0xpc3QucmVwbGFjZShcImhpZGUtbW9kYWxcIiwgXCJzaG93LW1vZGFsXCIpO1xyXG4gICAgRC5lYWNoKE1vZGFsLmVsZW0sIChub2RlKSA9PiB7XHJcbiAgICAgIChub2RlIGFzIEhUTUxJRnJhbWVFbGVtZW50KS5zcmMgPSBzcmM7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm5vc2Nyb2xsXCIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBoaWRlKCkge1xyXG4gICAgTW9kYWwuZWxlbS5jbGFzc0xpc3QucmVwbGFjZShcInNob3ctbW9kYWxcIiwgXCJoaWRlLW1vZGFsXCIpO1xyXG4gICAgRC5lYWNoKE1vZGFsLmVsZW0sIChub2RlKSA9PiB7XHJcbiAgICAgIChub2RlIGFzIEhUTUxJRnJhbWVFbGVtZW50KS5zcmMgPSBcIlwiO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJub3Njcm9sbFwiKTtcclxuICB9XHJcbn1cclxuXHJcbkQuYWRkRXZlbnRMaXN0ZW5lcihNb2RhbC5lbGVtLCBcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgTW9kYWwuaGlkZSgpO1xyXG59KTtcclxuRC5lYWNoKE1vZGFsLmVsZW0sIChub2RlKSA9PiB7XHJcbiAgRC5hZGRFdmVudExpc3RlbmVyKG5vZGUsIFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxufSk7XHJcbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBlcnJvciwgbG9nIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBub29wLCBub3cgfSBmcm9tIFwiLi8uLi91dGlscy9mdW5jc1wiO1xyXG5sb2coXCJzY3JvbGwgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XHJcbi8qKlxyXG4gKiBMaW5lYXIgaW1wbGVtZW50YXRpb24gb2Ygc2Nyb2xsaW5nLlxyXG4gKiBGb2xsb3dzIHRoZSBzaW5nbGV0b24gcGF0dGVybiwgY2FsbCBkbyB0byBzdGFydCBhIHNjcm9sbCBvcGVyYXRpb24uXHJcbiAqXHJcbiAqIElmIGEgc2Nyb2xsIGlzIGNhbGxlZCB3aGVuIGFub3RoZXIgc2Nyb2xsIGhhcyBhbHJlYWR5IGJlZ3VuIGFuXHJcbiAqIGVycm9yIHdpbGwgYmUgdGhyb3duLCBidXQgdGhlIGZpcnN0IHNjcm9sbCB3aWxsIGNvbnRpbnVlIHVudGlsIGNvbXBsZXRpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2Nyb2xsIHtcclxuICBwdWJsaWMgc3RhdGljIFNURVBfSU5fTVMgPSAxNztcclxuXHJcbiAgcHVibGljIHN0YXRpYyBjYWxsYmFjayhcclxuICAgIGVuZFBvczogbnVtYmVyLFxyXG4gICAgZHVyYXRpb246IG51bWJlciA9IDIwMCxcclxuICAgIGNvbXBsZXRlOiAoLi4uYXJnczogYW55KSA9PiBhbnkgPSBub29wXHJcbiAgKTogdm9pZCB7XHJcbiAgICBpZiAoU2Nyb2xsLnJ1bm5pbmcpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IG1ha2UgbXVsdGlwbGUgY2FsbHMgdG8gc2Nyb2xsIGF0IHRoZSBzYW1lIHRpbWUuXCIpO1xyXG4gICAgfVxyXG4gICAgU2Nyb2xsLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgY29uc3Qgb2xkQ29tcGxldGUgPSBjb21wbGV0ZTtcclxuICAgIGNvbXBsZXRlID0gKCkgPT4ge1xyXG4gICAgICBTY3JvbGwucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICBlcnJvcihvbGRDb21wbGV0ZSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5pbnN0YW5jZS51cGRhdGUoZW5kUG9zLCBkdXJhdGlvbiwgY29tcGxldGUpLmF0dGVtcHRTY3JvbGwoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcHJvbWlzZShlbmRQb3M6IG51bWJlciwgZHVyYXRpb246IG51bWJlciA9IDIwMCkge1xyXG4gICAgaWYgKFNjcm9sbC5ydW5uaW5nKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBtYWtlIG11bHRpcGxlIGNhbGxzIHRvIHNjcm9sbCBhdCB0aGUgc2FtZSB0aW1lLlwiKTtcclxuICAgIH1cclxuICAgIFNjcm9sbC5ydW5uaW5nID0gdHJ1ZTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShcclxuICAgICAgKHJlc29sdmU6ICh2YWx1ZT86IHVua25vd24pID0+IHZvaWQsIHJlamVjdDogKGFyZzA6IGFueSkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBydW5SZXNvbHZlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlKGVuZFBvcywgZHVyYXRpb24sIHJ1blJlc29sdmVyKS5hdHRlbXB0U2Nyb2xsKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBTY3JvbGwucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcnVubmluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlID0gbmV3IFNjcm9sbCgwLCAwLCBub29wKTtcclxuICBwcml2YXRlIGNvbXBsZXRlOiAoLi4uYXJnczogYW55KSA9PiBhbnk7XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVuZFBvczogbnVtYmVyLFxyXG4gICAgcHJpdmF0ZSBkdXJhdGlvbjogbnVtYmVyLFxyXG4gICAgY29tcGxldGU6ICguLi5hcmdzOiBhbnkpID0+IGFueVxyXG4gICkge1xyXG4gICAgdGhpcy5jb21wbGV0ZSA9ICguLi5hcmdzOiBhbnkpID0+IHtcclxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJzY3JvbGxcIikpO1xyXG4gICAgICBjb21wbGV0ZShhcmdzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBpc1J1bm5pbmcoKSB7XHJcbiAgICByZXR1cm4gU2Nyb2xsLnJ1bm5pbmc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZShcclxuICAgIGVuZFBvczogbnVtYmVyLFxyXG4gICAgZHVyYXRpb246IG51bWJlcixcclxuICAgIGNvbXBsZXRlOiAoLi4uYXJnczogYW55KSA9PiBhbnlcclxuICApOiBTY3JvbGwge1xyXG4gICAgdGhpcy5lbmRQb3MgPSBlbmRQb3M7XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XHJcbiAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY1Njcm9sbEFtb3VudCgpIHtcclxuICAgIGNvbnN0IGN1clRpbWUgPSBub3coKTtcclxuICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5tYXgoMSwgKHRoaXMuZHVyYXRpb24gLSBjdXJUaW1lKSAvIFNjcm9sbC5TVEVQX0lOX01TKTtcclxuICAgIGNvbnN0IGN1clBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgIHJldHVybiBNYXRoLmNlaWwoKHRoaXMuZW5kUG9zIC0gY3VyUG9zKSAvIHN0ZXBzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2Nyb2xsKCkge1xyXG4gICAgd2luZG93LnNjcm9sbCgwLCB0aGlzLmNhbGNTY3JvbGxBbW91bnQoKSk7XHJcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID09PSB0aGlzLmVuZFBvcykge1xyXG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5zY3JvbGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhdHRlbXB0U2Nyb2xsKCkge1xyXG4gICAgaWYgKFwicmVxdWVzdEFuaW1hdGlvbkZyYW1lXCIgaW4gd2luZG93ID09PSBmYWxzZSkge1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsKDAsIHRoaXMuZW5kUG9zKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2Nyb2xsKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IG5vb3AgfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3NcIjtcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLy4uL2RhdGEtbG9nL2RhdGFcIjtcclxuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuLy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBwYXJhbXMgfSBmcm9tIFwiLi8uLi91dGlscy9xX3BhcmFtc1wiO1xyXG5pbXBvcnQgeyBEIH0gZnJvbSBcIi4vZG9jdW1lbnRcIjtcclxuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xyXG5sb2coXCJzdWJtaXQgZm9ybSBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcclxuZXhwb3J0IGludGVyZmFjZSBBbGxvd1N1Ym1pc3Npb24ge1xyXG4gIGFsbG93KCk6IHN0cmluZyB8IG51bGw7XHJcbiAgcHJlU3VibWl0KC4uLmFyZ3M6IGFueSk6IGFueTtcclxufVxyXG5cclxuY29uc3QgayA9IFwiTmNGMldSa1ViZjV0emo0Ykl2STk4MUZxbVM2cE1sTzgzZzJqN3U1UlwiO1xyXG5jb25zdCBnYXRlID0gXCJodHRwczovLzJ5a29wcTFvaGEuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vUFJPRC9sb2dzXCI7XHJcblxyXG5jb25zdCBBbGxvd1N1Ym1pc3Npb25EZWZhdWx0OiBBbGxvd1N1Ym1pc3Npb24gPSB7XHJcbiAgYWxsb3c6ICgpID0+IG51bGwsXHJcbiAgcHJlU3VibWl0OiBub29wLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFN1Ym1pdEZvcm0ge1xyXG4gIHB1YmxpYyBzdGF0aWMgZWxlbSA9IEVsZW1lbnRzLnN1Ym1pdEZvcm0gYXMgSFRNTEZvcm1FbGVtZW50O1xyXG4gIHB1YmxpYyBzdGF0aWMgYWxsb3dTdWJtaXREZWZhdWx0ID0geyBhbGxvdzogKCkgPT4gdHJ1ZSwgcHJlU3VibWl0OiBub29wIH07XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2V0dXAoXHJcbiAgICBhbGxvd1N1Ym1pc3Npb246IEFsbG93U3VibWlzc2lvbiA9IEFsbG93U3VibWlzc2lvbkRlZmF1bHRcclxuICApIHtcclxuICAgIFN1Ym1pdEZvcm0uc3VibWl0RnVuYyA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBhbGxvd2VkID0gYWxsb3dTdWJtaXNzaW9uLmFsbG93KCk7XHJcbiAgICAgIGlmIChhbGxvd2VkID09PSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgcXAgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXM7XHJcbiAgICAgICAgZGF0YS51cmxEYXRhLnJhdyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQgPSBxcC5nZXQoXCJhc3NpZ25tZW50SWRcIik7XHJcbiAgICAgICAgZGF0YS51cmxEYXRhLmhpdElEID0gcXAuZ2V0KFwiaGl0SWRcIik7XHJcbiAgICAgICAgZGF0YS51cmxEYXRhLndvcmtlcklEID0gcXAuZ2V0KFwid29ya2VySWRcIik7XHJcbiAgICAgICAgZGF0YS51cmxEYXRhLnN1Ym1pdFRvID1cclxuICAgICAgICAgIHFwLmdldChcInR1cmtTdWJtaXRUb1wiKSArIFwiL210dXJrL2V4dGVybmFsU3VibWl0XCI7XHJcbiAgICAgICAgaWYgKGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQgIT09IG51bGwpIHtcclxuICAgICAgICAgIChELmlkKFwiYXNzaWdubWVudC1pZFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9XHJcbiAgICAgICAgICAgIGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhLnVybERhdGEuaGl0SUQgIT09IG51bGwpIHtcclxuICAgICAgICAgIChELmlkKFwiaGl0LWlkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gZGF0YS51cmxEYXRhLmhpdElEO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xyXG4gICAgICAgIGRhdGEuZGF0YS50YXNrID0gdXJsUGFyYW1zLmdldChcInRhZ1wiKTtcclxuICAgICAgICBjb25zdCB0ZXh0QXJlYUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHQtYXJlYVwiKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbDtcclxuICAgICAgICBkYXRhLmRhdGEucmVzcG9uc2UgPSB0ZXh0QXJlYUVsZW0gPyB0ZXh0QXJlYUVsZW0udmFsdWUgOiBcIlwiO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlxcblxcbkRBVEEgRk9SIFRBU0s6IFwiICsgZGF0YS5kYXRhLnRhc2sgKyBcIlxcblwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcblxyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgXCJPcGVuIGNvbnNvbGUgdG8gc2VlIHVzZXIgZGF0YS4gUGxlYXNlIHJlY29yZCBpbnRvIGEgdGV4dCBkb2N1bWVudC5cIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIChFbGVtZW50cy5zdWJtaXRGb3JtIGFzIEhUTUxGb3JtRWxlbWVudCkuYWN0aW9uID0gZGF0YS51cmxEYXRhXHJcbiAgICAgICAgLy8gICAgIC5zdWJtaXRUbyBhcyBzdHJpbmc7XHJcbiAgICAgICAgLy8gYWxsb3dTdWJtaXNzaW9uLnByZVN1Ym1pdCgpO1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChnYXRlLCB7XHJcbiAgICAgICAgLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIC8vICAgICAgICAgJ3gtYXBpLWtleSc6IGssXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAvLyAgICAgICAgIHNhbmRib3g6IHBhcmFtcy5zYW5kYm94LFxyXG4gICAgICAgIC8vICAgICAgICAgd3VzdGxfa2V5OiBwYXJhbXMud3VzdGxfa2V5LFxyXG4gICAgICAgIC8vICAgICAgICAgcHJvamVjdDogcGFyYW1zLnByb2plY3QsXHJcbiAgICAgICAgLy8gICAgICAgICBpdGVyYXRpb246IHBhcmFtcy5pdGVyYXRpb24sXHJcbiAgICAgICAgLy8gICAgICAgICB0YWc6IHBhcmFtcy50YWcsXHJcbiAgICAgICAgLy8gICAgICAgICBhc3NpZ25tZW50SUQ6IGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQsXHJcbiAgICAgICAgLy8gICAgICAgICBoaXRJRDogZGF0YS51cmxEYXRhLmhpdElELFxyXG4gICAgICAgIC8vICAgICAgICAgd29ya2VySUQ6IGRhdGEudXJsRGF0YS53b3JrZXJJRCxcclxuICAgICAgICAvLyAgICAgICAgIGxvZzogZGF0YS5zZXJpYWxpemUoKSxcclxuICAgICAgICAvLyAgICAgfSksXHJcbiAgICAgICAgLy8gfSk7IC8vIFRPRE86IHZlcmlmeSB0aGlzIGFjdHVhbGx5IHdvcmtzXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcC5zdGF0dXMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGF3YWl0IHJlc3AuanNvbigpKTtcclxuICAgICAgICAvLyBpZiAocmVzcC5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgIC8vICAgICBhbGVydChcclxuICAgICAgICAvLyAgICAgICAgICdZb3UgbWFkZSBhIGJhZCByZXF1ZXN0IHdpdGggeW91ciBzdWJtaXNzaW9uLiBUaGUgc2VydmVyIHRoaW5rcyB0aGF0IHlvdSBtYWRlIHRoaXMgZXJyb3I6ICcgK1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIChhd2FpdCByZXNwLmpzb24oKSkuZXJyb3JcclxuICAgICAgICAvLyAgICAgKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBTdWJtaXRGb3JtLmVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAvLyAgICAgJ3N1Ym1pdCcsXHJcbiAgICAgICAgLy8gICAgIFN1Ym1pdEZvcm0uc3VibWl0RnVuY1xyXG4gICAgICAgIC8vICk7XHJcbiAgICAgICAgLy8gU3VibWl0Rm9ybS5lbGVtLnN1Ym1pdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KGFsbG93ZWQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgU3VibWl0Rm9ybS5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgU3VibWl0Rm9ybS5zdWJtaXRGdW5jKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHN1Ym1pdEZ1bmM6IChldmVudDogRXZlbnQpID0+IGFueTtcclxufVxyXG4iLCJpbXBvcnQgeyBUb3BCYW5uZXIgfSBmcm9tIFwiLi9iYW5uZXJcIjtcclxuaW1wb3J0IHsgSFRNTExvYyB9IGZyb20gXCIuL2h0bWxfbG9jXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhY2tlckVsZW1lbnRzIHtcclxuICBwdWJsaWMgc3RhdGljIHNldHVwVHJhY2tlckVsZW1lbnRzKCkge1xyXG4gICAgLy8gc2V0dXAgZG9tIGVsZW1lbnRzXHJcbiAgICBUb3BCYW5uZXIuc2V0dXAoKTtcclxuICAgIEhUTUxMb2Muc2V0dXAoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gXCIuLy4uL3RyYWNrZXIvdHJhY2tlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIaXN0b3J5RW50cnkge1xyXG4gIGhhc1ByZXZVUkw6IGJvb2xlYW47XHJcbiAgcHJldkVudHJ5PzogSGlzdG9yeUVudHJ5O1xyXG4gIGN1cnJVUkw6IHN0cmluZztcclxuICBleHRyYT86IGFueTtcclxuICBuZXh0RW50cmllczogSGlzdG9yeUVudHJ5W107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld0hpc3RvcnlFbnRyeShcclxuICBjdXJyVVJMOiBzdHJpbmcsXHJcbiAgaGFzUHJldlVSTDogYm9vbGVhbixcclxuICBwcmV2RW50cnk/OiBIaXN0b3J5RW50cnksXHJcbiAgZXh0cmE/OiBhbnlcclxuKTogSGlzdG9yeUVudHJ5IHtcclxuICBUcmFja2VyLmdldEV2ZW50RGlzcGF0Y2hGdW5jKFwiaGlzdG9yeVwiKSh7IHVybDogY3VyclVSTCwgZXh0cmEgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGN1cnJVUkwsXHJcbiAgICBoYXNQcmV2VVJMLFxyXG4gICAgcHJldkVudHJ5LFxyXG4gICAgZXh0cmEsXHJcbiAgICBuZXh0RW50cmllczogW10sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhpc3Rvcnkge1xyXG4gIHB1YmxpYyBzdGF0aWMgZm9yd2FyZCh1cmw6IHN0cmluZywgZXh0cmE/OiBhbnkpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaGlzdEVudCA9IG5ld0hpc3RvcnlFbnRyeSh1cmwsIHRydWUsIEhpc3RvcnkuY3Vycmhpc3RvcnksIGV4dHJhKTtcclxuICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkubmV4dEVudHJpZXMucHVzaChoaXN0RW50KTtcclxuICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkgPSBoaXN0RW50O1xyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY2FuQmFja3dhcmQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBIaXN0b3J5LmN1cnJoaXN0b3J5Lmhhc1ByZXZVUkwgJiZcclxuICAgICAgIUhpc3RvcnkuY3Vycmhpc3RvcnkucHJldkVudHJ5Py5leHRyYT8ud3JhcHBlclxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYmFja3dhcmQoKTogc3RyaW5nIHtcclxuICAgIGlmICghSGlzdG9yeS5jYW5CYWNrd2FyZCgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBnbyBiYWNrIGFueSBmdXJ0aGVyLlwiKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKEhpc3RvcnkuY3Vycmhpc3RvcnkucHJldkVudHJ5KTtcclxuICAgIGNvbnN0IHByZXZFbnRyeSA9IEhpc3RvcnkuY3Vycmhpc3RvcnkucHJldkVudHJ5IGFzIEhpc3RvcnlFbnRyeTtcclxuICAgIGNvbnN0IG5leHRVUkwgPSBwcmV2RW50cnkuY3VyclVSTDtcclxuICAgIGNvbnN0IGhpc3RFbnQgPSBuZXdIaXN0b3J5RW50cnkoXHJcbiAgICAgIG5leHRVUkwsXHJcbiAgICAgIHByZXZFbnRyeS5oYXNQcmV2VVJMLFxyXG4gICAgICBwcmV2RW50cnkucHJldkVudHJ5LFxyXG4gICAgICB7IGJhY2s6IHRydWUgfVxyXG4gICAgKTtcclxuICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkgPSBoaXN0RW50O1xyXG4gICAgcmV0dXJuIG5leHRVUkw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHNldHVwKHVybDogc3RyaW5nLCBleHRyYT86IGFueSkge1xyXG4gICAgSGlzdG9yeS5maXJzdEhpc3RvcnkgPSBuZXdIaXN0b3J5RW50cnkodXJsLCBmYWxzZSwgdW5kZWZpbmVkLCBleHRyYSk7XHJcbiAgICBIaXN0b3J5LmN1cnJoaXN0b3J5ID0gSGlzdG9yeS5maXJzdEhpc3Rvcnk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBmaXJzdEhpc3Rvcnk6IEhpc3RvcnlFbnRyeTtcclxuICBwcml2YXRlIHN0YXRpYyBjdXJyaGlzdG9yeTogSGlzdG9yeUVudHJ5O1xyXG59XHJcblxyXG4od2luZG93IGFzIGFueSkuaCA9IEhpc3Rvcnk7XHJcbiIsImltcG9ydCB7IEQgfSBmcm9tIFwiLi4vZG9tL2RvY3VtZW50XCI7XHJcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4uL2RvbS9lbGVtZW50c1wiO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi9kb20vbW9kYWxcIjtcclxuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGVycm9yLCBsb2cgfSBmcm9tIFwiLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XHJcbmltcG9ydCB7IG5vb3AgfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3NcIjtcclxuaW1wb3J0IHsgSFRNTExvYWRlciB9IGZyb20gXCIuLi91dGlscy9odG1sX2xvYWRlclwiO1xyXG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSBcIi4vaGlzdG9yeVwiO1xyXG5sb2coXCJyb3V0ZXIgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XHJcbmV4cG9ydCBjb25zdCBlbnVtIFJvdXRlck1vZGUge1xyXG4gIE9GRixcclxuICBPTixcclxuICBTVEFOREFSRF9BTExPV0FOQ0VTLFxyXG59XHJcblxyXG4vLyBUT0RPOiBOZWVkIHRvIGltcHJvdmUgdGhpcyB0byB0YWtlIGluIGEgZnVuY3Rpb24gZm9yIHRoZSBhbGxvd2FuY2Ugb3IgcmVkdWNlIGFic3RyYWN0bmVzcyBvdmVyYWxsLlxyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gUm91dGVyTW9kdWxlIHtcclxuICBBID0gXCJBXCIsXHJcbiAgSU1HID0gXCJJTUdcIixcclxuICBGT1JNID0gXCJGT1JNXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVyQ29uZmlnIHtcclxuICBtb2R1bGU6IFJvdXRlck1vZHVsZTtcclxuICBtb2RlOiBSb3V0ZXJNb2RlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRnVsbFJvdXRlckNvbmZpZyBleHRlbmRzIFJvdXRlckNvbmZpZyB7XHJcbiAgc2V0dXAoY29uZmlnOiBGdWxsUm91dGVyQ29uZmlnLCBlbGVtOiBFbGVtZW50KTogYW55O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXN0T24oZWxlbTogRWxlbWVudCwgY29uZmlnOiBSb3V0ZXJDb25maWcpIHtcclxuICByZXR1cm4gKFxyXG4gICAgZWxlbS50YWdOYW1lID09PSBjb25maWcubW9kdWxlICYmXHJcbiAgICAoY29uZmlnLm1vZGUgPT09IFJvdXRlck1vZGUuT04gfHxcclxuICAgICAgY29uZmlnLm1vZGUgPT09IFJvdXRlck1vZGUuU1RBTkRBUkRfQUxMT1dBTkNFUylcclxuICApO1xyXG59XHJcbmZ1bmN0aW9uIHRlc3RBbGxvd2FuY2UoY29uZmlnOiBSb3V0ZXJDb25maWcpIHtcclxuICByZXR1cm4gY29uZmlnLm1vZGUgPT09IFJvdXRlck1vZGUuU1RBTkRBUkRfQUxMT1dBTkNFUztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvdXRlciB7XHJcbiAgcHVibGljIHN0YXRpYyBIQVNIX1RBR1MgPSBuZXcgUmVnRXhwKFwiI1wiKTtcclxuICBwdWJsaWMgc3RhdGljIEVNUFRZID0gbmV3IFJlZ0V4cChcIl4kXCIpO1xyXG4gIHB1YmxpYyBzdGF0aWMgQVRfU1lNQk9MID0gbmV3IFJlZ0V4cChcIkBcIik7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgSEFTSF9UQUdfUkVTUE9OREVSID0gbm9vcDtcclxuICBwdWJsaWMgc3RhdGljIEVNUFRZX1JFU1BPTkRFUiA9IChldmVudDogRXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgcHVibGljIHN0YXRpYyBBVF9TWU1CT0xfUkVTUE9OREVSID0gKGV2ZW50OiBFdmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBwYXRoUHJlZml4ID0gXCJcIjtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBjb25maWd1cmUoY29uZmlnczogUm91dGVyQ29uZmlnW10sIHBhdGhQcmVmaXg6IHN0cmluZykge1xyXG4gICAgY29uZmlncy5mb3JFYWNoKChjb25maWcpID0+IHtcclxuICAgICAgUm91dGVyLmNvbmZpZ3Muc2V0KGNvbmZpZy5tb2R1bGUsIFJvdXRlci51cGdyYWRlQ29uZmlnKGNvbmZpZykpO1xyXG4gICAgfSk7XHJcbiAgICBSb3V0ZXIucGF0aFByZWZpeCA9IHBhdGhQcmVmaXg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHNldHVwKGVsZW06IEVsZW1lbnQgfCBzdHJpbmcpIHtcclxuICAgIEQuZWFjaFJlY3VyKGVsZW0sIChub2RlKSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgY29uZmlnIG9mIFJvdXRlci5jb25maWdzLnZhbHVlcygpKSB7XHJcbiAgICAgICAgaWYgKHRlc3RPbihub2RlLCBjb25maWcpKSB7XHJcbiAgICAgICAgICBjb25maWcuc2V0dXAoY29uZmlnLCBub2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBTVEFOREFSRF9MSU5LX0xJU1RFTkVSKGU6IE1vdXNlRXZlbnQpIHtcclxuICAgIHJldHVybiBlcnJvcigoKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IHVybCA9IHRhcmdldC5ocmVmO1xyXG4gICAgICBIaXN0b3J5LmZvcndhcmQoUm91dGVyLmdldFBhdGhOYW1lKHVybCkpO1xyXG4gICAgICBjb25zdCByZXQgPSBIVE1MTG9hZGVyLmxvYWRVUkwodXJsLCBFbGVtZW50cy5odG1sTG9jKTtcclxuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwibmV3UGFnZUxvYWRcIikpO1xyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIE9OX0NPTVBMRVRFX1NMTChwb3N0OiAoZTogTW91c2VFdmVudCkgPT4gYW55KSB7XHJcbiAgICByZXR1cm4gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgZXJyb3IoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IFJvdXRlci5TVEFOREFSRF9MSU5LX0xJU1RFTkVSKGUpO1xyXG4gICAgICAgIHBvc3QoZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgSU1BR0VfTElOS19MSVNURU5FUihlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICByZXR1cm4gZXJyb3IoKCkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgRk9STV9PRkZfTElTVEVORVIoZTogRXZlbnQpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIFwiQWxsIGZvcm1zIGV4Y2VwdCBmb3IgdGhlIG9uZSBpbiB0aGUgdG9wIGhlYWRlciBhcmUgaW5hY3RpdmUuXCJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRBbGxvd2FuY2VzT24oKSB7XHJcbiAgICBSb3V0ZXIucmVnaXN0ZXJBbGxvd2FuY2UoXHJcbiAgICAgIHsgcmVnZXg6IFJvdXRlci5FTVBUWSwgZnVuYzogUm91dGVyLkVNUFRZX1JFU1BPTkRFUiB9LFxyXG4gICAgICB7IHJlZ2V4OiBSb3V0ZXIuSEFTSF9UQUdTLCBmdW5jOiBSb3V0ZXIuSEFTSF9UQUdfUkVTUE9OREVSIH0sXHJcbiAgICAgIHsgcmVnZXg6IFJvdXRlci5BVF9TWU1CT0wsIGZ1bmM6IFJvdXRlci5BVF9TWU1CT0xfUkVTUE9OREVSIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdEFsbG93YW5jZXNPZmYoKSB7XHJcbiAgICBSb3V0ZXIudW5yZWdpc3RlckFsbG93YW5jZShcclxuICAgICAgUm91dGVyLkVNUFRZLFxyXG4gICAgICBSb3V0ZXIuSEFTSF9UQUdTLFxyXG4gICAgICBSb3V0ZXIuQVRfU1lNQk9MXHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyQWxsb3dhbmNlKFxyXG4gICAgLi4ucmVnZXhzOiBBcnJheTx7IHJlZ2V4OiBSZWdFeHA7IGZ1bmM6IChldmVudDogRXZlbnQpID0+IGFueSB9PlxyXG4gICkge1xyXG4gICAgcmVnZXhzLmZvckVhY2goKHJlZ2V4KSA9PlxyXG4gICAgICBSb3V0ZXIubGlua0FsbG93YW5jZXMuc2V0KHJlZ2V4LnJlZ2V4LCByZWdleC5mdW5jKVxyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIHN0YXRpYyB1bnJlZ2lzdGVyQWxsb3dhbmNlKC4uLnJlZ2V4czogUmVnRXhwW10pIHtcclxuICAgIHJlZ2V4cy5mb3JFYWNoKChyZWdleCkgPT4gUm91dGVyLmxpbmtBbGxvd2FuY2VzLmRlbGV0ZShyZWdleCkpO1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIGNsZWFyQWxsb3dhbmNlcygpIHtcclxuICAgIFJvdXRlci5saW5rQWxsb3dhbmNlcy5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBIaXN0b3J5LmZvcndhcmQoUm91dGVyLmdldFBhdGhOYW1lKHVybCkpO1xyXG4gICAgY29uc3QgcmV0ID0gYXdhaXQgSFRNTExvYWRlci5sb2FkVVJMKHVybCwgRWxlbWVudHMuaHRtbExvYyk7XHJcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJuZXdQYWdlTG9hZFwiKSk7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkV2l0aFBhdGhQcmVmaXgocGFnZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCByZXQgPSBIVE1MTG9hZGVyLmxvYWRVUkwoUm91dGVyLnBhdGhQcmVmaXggKyBwYWdlLCBFbGVtZW50cy5odG1sTG9jKTtcclxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIm5ld1BhZ2VMb2FkXCIpKTtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBTZXR1cEZ1bmN0aW9ucyA9IHtcclxuICAgIEE6IChjb25maWc6IEZ1bGxSb3V0ZXJDb25maWcsIGVsZW06IEVsZW1lbnQpID0+IHtcclxuICAgICAgY29uc3QgYU5vZGUgPSBlbGVtIGFzIEhUTUxBbmNob3JFbGVtZW50O1xyXG4gICAgICBpZiAodGVzdEFsbG93YW5jZShjb25maWcpKSB7XHJcbiAgICAgICAgbGV0IHBhc3Nlc1JlZ2V4VGVzdCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgaHJlZiA9IGFOb2RlLmhyZWY7XHJcbiAgICAgICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLmZvckVhY2goKGZ1bmMsIHJlZ2V4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0ZXN0ID0gcmVnZXgudGVzdChocmVmKTtcclxuICAgICAgICAgIHBhc3Nlc1JlZ2V4VGVzdCA9IHBhc3Nlc1JlZ2V4VGVzdCAmJiAhdGVzdDtcclxuICAgICAgICAgIGlmICh0ZXN0KSB7XHJcbiAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCBcImNsaWNrXCIsIGZ1bmMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChwYXNzZXNSZWdleFRlc3QpIHtcclxuICAgICAgICAgIGlmIChocmVmLnN1YnN0cihocmVmLmxlbmd0aCAtIDMpID09PSBcInBkZlwiKSB7XHJcbiAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCBcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIE1vZGFsLmRpc3BsYXkoaHJlZik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sIFwiY2xpY2tcIiwgKGUpID0+XHJcbiAgICAgICAgICAgICAgUm91dGVyLlNUQU5EQVJEX0xJTktfTElTVEVORVIoZSBhcyBNb3VzZUV2ZW50KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgXCJjbGlja1wiLCAoZSkgPT5cclxuICAgICAgICAgIFJvdXRlci5TVEFOREFSRF9MSU5LX0xJU1RFTkVSKGUgYXMgTW91c2VFdmVudClcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgSU1HOiAoY29uZmlnOiBGdWxsUm91dGVyQ29uZmlnLCBlbGVtOiBFbGVtZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGltZ05vZGUgPSBlbGVtIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgIGlmICh0ZXN0QWxsb3dhbmNlKGNvbmZpZykpIHtcclxuICAgICAgICBsZXQgcGFzc2VzUmVnZXhUZXN0ID0gdHJ1ZTtcclxuICAgICAgICBSb3V0ZXIubGlua0FsbG93YW5jZXMuZm9yRWFjaCgoZnVuYywgcmVnZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRlc3QgPSAhcmVnZXgudGVzdChpbWdOb2RlLnNyYyk7XHJcbiAgICAgICAgICBwYXNzZXNSZWdleFRlc3QgPSBwYXNzZXNSZWdleFRlc3QgJiYgdGVzdDtcclxuICAgICAgICAgIGlmICh0ZXN0KSB7XHJcbiAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCBcImNsaWNrXCIsIGZ1bmMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChwYXNzZXNSZWdleFRlc3QpIHtcclxuICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCBcImNsaWNrXCIsIChlKSA9PlxyXG4gICAgICAgICAgICBSb3V0ZXIuSU1BR0VfTElOS19MSVNURU5FUihlIGFzIE1vdXNlRXZlbnQpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgXCJjbGlja1wiLCAoZSkgPT5cclxuICAgICAgICAgIFJvdXRlci5JTUFHRV9MSU5LX0xJU1RFTkVSKGUgYXMgTW91c2VFdmVudClcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgRk9STTogKGNvbmZpZzogRnVsbFJvdXRlckNvbmZpZywgZWxlbTogRWxlbWVudCkgPT4ge1xyXG4gICAgICBjb25zdCBmb3JtTm9kZSA9IGVsZW0gYXMgSFRNTEZvcm1FbGVtZW50O1xyXG4gICAgICBpZiAodGVzdEFsbG93YW5jZShjb25maWcpKSB7XHJcbiAgICAgICAgbGV0IHBhc3Nlc1JlZ2V4VGVzdCA9IHRydWU7XHJcbiAgICAgICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLmZvckVhY2goKGZ1bmMsIHJlZ2V4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0ZXN0ID0gIXJlZ2V4LnRlc3QoZm9ybU5vZGUuc3JjKTtcclxuICAgICAgICAgIHBhc3Nlc1JlZ2V4VGVzdCA9IHBhc3Nlc1JlZ2V4VGVzdCAmJiB0ZXN0O1xyXG4gICAgICAgICAgaWYgKHRlc3QpIHtcclxuICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sIFwiY2xpY2tcIiwgZnVuYyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHBhc3Nlc1JlZ2V4VGVzdCkge1xyXG4gICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sIFwic3VibWl0XCIsIFJvdXRlci5GT1JNX09GRl9MSVNURU5FUik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCBcInN1Ym1pdFwiLCBSb3V0ZXIuRk9STV9PRkZfTElTVEVORVIpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGNvbmZpZ3MgPSBuZXcgTWFwPFJvdXRlck1vZHVsZSwgRnVsbFJvdXRlckNvbmZpZz4oKTtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgbGlua0FsbG93YW5jZXM6IE1hcDxSZWdFeHAsIChldmVudDogRXZlbnQpID0+IGFueT4gPSBuZXcgTWFwPFxyXG4gICAgUmVnRXhwLFxyXG4gICAgKGV2ZW50OiBFdmVudCkgPT4gYW55XHJcbiAgPigpO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBwYXRoUmVnZXggPSAvXFwvKFtcXHddKy5odG1sKS87XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHVwZ3JhZGVDb25maWcoY29uZmlnOiBSb3V0ZXJDb25maWcpOiBGdWxsUm91dGVyQ29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1vZHVsZTogY29uZmlnLm1vZHVsZSxcclxuICAgICAgbW9kZTogY29uZmlnLm1vZGUsXHJcbiAgICAgIHNldHVwOiBSb3V0ZXIuU2V0dXBGdW5jdGlvbnNbY29uZmlnLm1vZHVsZV0sXHJcbiAgICB9O1xyXG4gIH1cclxuICBwcml2YXRlIHN0YXRpYyBnZXRQYXRoTmFtZSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCByZXQgPSBSb3V0ZXIucGF0aFJlZ2V4LmV4ZWModXJsKTtcclxuICAgIHJldHVybiByZXQgPT09IG51bGwgPyB1cmwgOiByZXQubGVuZ3RoID4gMSA/IHJldFsxXSA6IHVybDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaXNUcmFja2VyRXZlbnQsIG9iamVjdFRvVHJhY2tlckV2ZW50IH0gZnJvbSBcIi4uL2RhdGEtbG9nL2V2ZW50XCI7XHJcbmltcG9ydCB7IEV2ZW50UmVjZWl2ZXIgfSBmcm9tIFwiLi4vZGF0YS1sb2cvcmVjZWl2ZXJcIjtcclxuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi4vZG9tL2VsZW1lbnRzXCI7XHJcbmltcG9ydCB7IFRyYWNrZXJFbGVtZW50cyB9IGZyb20gXCIuLi9kb20vdHJhY2tlcl9lbGVtc1wiO1xyXG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nLCBzZXREZWJ1Z0xldmVsIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBTY2VuYXJpbyB9IGZyb20gXCIuLi91dGlscy9zY2VuYXJpb3NcIjtcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLy4uL2RhdGEtbG9nL2RhdGFcIjtcclxuaW1wb3J0IHsgQWxsb3dTdWJtaXNzaW9uLCBTdWJtaXRGb3JtIH0gZnJvbSBcIi4vLi4vZG9tL3N1Ym1pdF9mb3JtXCI7XHJcblxyXG5sb2coXCJ0cmFja2VyIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmFja2VyQ29uZmlndXJhdGlvbiB7XHJcbiAgYWxsb3dTdWJtaXNzaW9uOiBBbGxvd1N1Ym1pc3Npb247XHJcbiAgZGVidWdMZXZlbDogRGVidWdMZXZlbEVudW07XHJcbiAgYnVja2V0TmFtZTogc3RyaW5nO1xyXG4gIGtleVByZWZpeDogc3RyaW5nO1xyXG4gIHNldHVwKCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFja2VyIHtcclxuICBwdWJsaWMgc3RhdGljIGxhc3RQb3MgPSB7IHg6IDAsIHk6IDAsIHRpbWU6IDAgfTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBsb2FkU2NlbmFyaW8oc2NlbjogU2NlbmFyaW8pIHtcclxuICAgIGxldCBzdWIgPSBzY2VuLmNvbnRleHQ7XHJcbiAgICBpZiAoc3ViLmxlbmd0aCA+IDUwKSB7XHJcbiAgICAgIHN1YiA9IHN1Yi5zdWJzdHJpbmcoMCwgNTApO1xyXG4gICAgICBjb25zdCBpbmRzID0gW1xyXG4gICAgICAgIHN1Yi5sYXN0SW5kZXhPZihcIiBcIiksXHJcbiAgICAgICAgc3ViLmxhc3RJbmRleE9mKFwiLlwiKSxcclxuICAgICAgICBzdWIubGFzdEluZGV4T2YoXCIsXCIpLFxyXG4gICAgICAgIHN1Yi5sYXN0SW5kZXhPZihcIj9cIiksXHJcbiAgICAgICAgc3ViLmxhc3RJbmRleE9mKFwiIVwiKSxcclxuICAgICAgXTtcclxuICAgICAgY29uc3QgaW5kID0gTWF0aC5tYXgoLi4uaW5kcyk7XHJcbiAgICAgIHN1YiA9IHN1Yi5zdWJzdHJpbmcoMCwgaW5kKSArIFwiLi4uXCI7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhzY2VuKTtcclxuICAgIGNvbnNvbGUubG9nKFwibG9hZGVkIHNjZW5cIik7XHJcbiAgICBFbGVtZW50cy5tdFRvcEJhbm5lclRleHQuaW5uZXJUZXh0ID0gc3ViO1xyXG4gICAgRWxlbWVudHMubXRTY2VuYXJpb0NvbnRleHQuaW5uZXJUZXh0ID0gc2Nlbi5jb250ZXh0O1xyXG4gICAgRWxlbWVudHMubXRTY2VuYXJpb1F1ZXN0aW9uLmlubmVyVGV4dCA9IHNjZW4ucXVlc3Rpb247XHJcbiAgICBFbGVtZW50cy5odG1sTG9jLmRhdGFzZXQudGFzayA9IHNjZW4udGFnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzdGFydChjb25maWc6IFRyYWNrZXJDb25maWd1cmF0aW9uKSB7XHJcbiAgICBzZXREZWJ1Z0xldmVsKGNvbmZpZy5kZWJ1Z0xldmVsKTtcclxuICAgIC8vIGNvbmZpZ3VyZSB0cmFja2VyIHNwZWNpZmljIGVsZW1lbnRzXHJcbiAgICBUcmFja2VyRWxlbWVudHMuc2V0dXBUcmFja2VyRWxlbWVudHMoKTtcclxuICAgIFN1Ym1pdEZvcm0uc2V0dXAoY29uZmlnLmFsbG93U3VibWlzc2lvbik7XHJcbiAgICBkYXRhLmRhdGEudGFzayA9IEVsZW1lbnRzLmh0bWxMb2MuZGF0YXNldC50YXNrO1xyXG4gICAgY29uZmlnLnNldHVwKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyRXZlbnQoZXZlbnRUeXBlOiBzdHJpbmcpIHtcclxuICAgIGRhdGEubG9nc1tldmVudFR5cGVdID0gW107XHJcbiAgICB0aGlzLnJlY2VpdmVyLnJlZ2lzdGVyKGV2ZW50VHlwZSwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGRhdGEubG9nc1tldmVudFR5cGVdLnB1c2goZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRFdmVudERpc3BhdGNoRnVuYyhldmVudFR5cGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRFdmVudERpc3BhdGNoRnVuYyhldmVudFR5cGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIChldkRhdGE6IGFueSkgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIGV2RGF0YSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGlmICghaXNUcmFja2VyRXZlbnQoZXZEYXRhKSkge1xyXG4gICAgICAgICAgb2JqZWN0VG9UcmFja2VyRXZlbnQoZXZEYXRhLCBldmVudFR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlY2VpdmVyLmRvRXZlbnQoZXZEYXRhKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXR0YWNoRGF0YShrZXk6IHN0cmluZywgYXR0cmlidXRlOiBhbnkpIHtcclxuICAgIGRhdGEuZGF0YVtrZXldID0gYXR0cmlidXRlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjb21wdXRlQXR0cmlidXRlKG5hbWU6IHN0cmluZywgY29tcHV0ZTogKHZhbDogYW55KSA9PiBhbnkpIHtcclxuICAgIGRhdGEuZGF0YVtuYW1lXSA9IGNvbXB1dGUoZGF0YS5kYXRhW25hbWVdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHJlY2VpdmVyID0gbmV3IEV2ZW50UmVjZWl2ZXIoKTtcclxufVxyXG4iLCJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4vLi4vZGF0YS1sb2cvZGF0YVwiO1xyXG5sb2coXCJjb25zb2xlIHdyYXBwZXIgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlcnJvcjxUPihcclxuICBmdW5jOiAoLi4uYXJnczogYW55KSA9PiBUXHJcbik6IFByb21pc2U8VCB8IHVuZGVmaW5lZD4ge1xyXG4gIHJldHVybiBlcnJvckhPKGZ1bmMpKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlcnJvckhPPFQ+KFxyXG4gIGZ1bmM6ICguLi5hcmdzOiBhbnkpID0+IFRcclxuKTogKC4uLmFyZ3M6IGFueSkgPT4gUHJvbWlzZTxUIHwgdW5kZWZpbmVkPiB7XHJcbiAgcmV0dXJuIGFzeW5jICguLi5hcmdzOiBhbnkpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBmdW5jKGFyZ3MpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGF0YS5lcnJvcnMucHVzaChlcnJvcik7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIERlYnVnTGV2ZWxFbnVtIHtcclxuICBOT05FID0gMSxcclxuICBCQVNJQyA9IDIsXHJcbiAgREVUQUlMRUQgPSAzLFxyXG59XHJcblxyXG5sZXQgZGVidWdMZXZlbDogRGVidWdMZXZlbEVudW0gPSBEZWJ1Z0xldmVsRW51bS5CQVNJQztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREZWJ1Z0xldmVsKGxldmVsOiBEZWJ1Z0xldmVsRW51bSkge1xyXG4gIGRlYnVnTGV2ZWwgPSBsZXZlbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZyhtZXNzYWdlOiBzdHJpbmcsIGltcG9ydGFuY2U6IERlYnVnTGV2ZWxFbnVtKSB7XHJcbiAgaWYgKGRlYnVnTGV2ZWwgPj0gaW1wb3J0YW5jZSkge1xyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi9jb25zb2xlX3dyYXBwZXJcIjtcclxubG9nKFwiZnVuY3MgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZW1wdHlcclxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxyXG5leHBvcnQgZnVuY3Rpb24gbm93KCk6IG51bWJlciB7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG59XHJcbiIsImltcG9ydCB7IEQgfSBmcm9tIFwiLi4vZG9tL2RvY3VtZW50XCI7XHJcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi9jb25zb2xlX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgbm9vcCB9IGZyb20gXCIuL2Z1bmNzXCI7XHJcbmxvZyhcImh0bWwgbG9hZGVyIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xyXG5leHBvcnQgaW50ZXJmYWNlIENhY2hlIHtcclxuICBbbmFtZTogc3RyaW5nXTogRWxlbWVudDtcclxufVxyXG5leHBvcnQgY2xhc3MgSFRNTExvYWRlciB7XHJcbiAgcHVibGljIHN0YXRpYyBDQUNIRTogQ2FjaGUgPSB7fTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBmaW5pc2goKSB7XHJcbiAgICBIVE1MTG9hZGVyLmZpbmlzaGVkID0gdHJ1ZTtcclxuICAgIEhUTUxMb2FkZXIuZmxhdHRlblRTTG9hZFRhZ3MoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXNGaW5pc2hlZCgpIHtcclxuICAgIHJldHVybiBIVE1MTG9hZGVyLmZpbmlzaGVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjYWNoZUhUTUwobmFtZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcclxuICAgIGlmIChIVE1MTG9hZGVyLmZpbmlzaGVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBcIkNhbm5vdCBjYWNoZSBuZXcgSFRNTCBlbnRpdGllcyBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZC5cIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdHNsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRzLWxvYWRcIik7XHJcbiAgICB0c2wuZGF0YXNldC5uYW1lID0gbmFtZTtcclxuICAgIHRzbC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gICAgdGhpcy5DQUNIRVtuYW1lXSA9IHRzbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJQb3N0TG9hZEZ1bmMoZnVuYzogKCkgPT4gYW55KSB7XHJcbiAgICBsb2coXCJyZWdzaXRlciBwb3N0IGxvYWQgZnVuY3Rpb25cIiwgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xyXG4gICAgSFRNTExvYWRlci5wb3N0TG9hZEZ1bmMgPSBmdW5jO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBsb2FkKGh0bWw6IHN0cmluZywgZWxlbTogRWxlbWVudCB8IHN0cmluZykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsb2coXCJiZWdpbiBsb2FkXCIsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gRC5lbGVtKGVsZW0pO1xyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoY29udGV4dCk7XHJcbiAgICAgICAgY29uc3QgZnJhZyA9IHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChodG1sKTtcclxuICAgICAgICBIVE1MTG9hZGVyLnJlbW92ZVRhZ3NGcm9tRG9jdW1lbnRGcmFnbWVudChmcmFnLCBcInNjcmlwdFwiKTtcclxuICAgICAgICBIVE1MTG9hZGVyLmxvYWRBbGxDYWNoZWRFbGVtZW50cyhmcmFnKTtcclxuICAgICAgICBjb250ZXh0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgY29udGV4dC5hcHBlbmRDaGlsZChmcmFnKTtcclxuICAgICAgICBsb2coXCJlbmQgbG9hZFwiLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XHJcbiAgICAgICAgSFRNTExvYWRlci5wb3N0TG9hZEZ1bmMoKTtcclxuICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGxvYWRVUkwodXJsOiBzdHJpbmcsIGVsZW06IEVsZW1lbnQgfCBzdHJpbmcpIHtcclxuICAgIHJldHVybiBIVE1MTG9hZGVyLmxvYWQoYXdhaXQgSFRNTExvYWRlci5nZXRIVE1MKHVybCksIGVsZW0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRIVE1MKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsb2coXCJiZWdpbiByZXF1ZXN0XCIsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgcmVxdWVzdC5zZW5kKG51bGwpO1xyXG4gICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgICAgICBsb2coXCJyZXNvbHZlIHJlcXVlc3RcIiwgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBmaW5pc2hlZCA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBwb3N0TG9hZEZ1bmM6ICgpID0+IGFueSA9IG5vb3A7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHJlbW92ZVRhZ3NGcm9tRG9jdW1lbnRGcmFnbWVudChcclxuICAgIGZyYWc6IERvY3VtZW50RnJhZ21lbnQsXHJcbiAgICB0YWdOYW1lOiBzdHJpbmdcclxuICApIHtcclxuICAgIGZyYWcucXVlcnlTZWxlY3RvckFsbCh0YWdOYW1lKS5mb3JFYWNoKCh0YWcpID0+IGZyYWcucmVtb3ZlQ2hpbGQodGFnKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBmbGF0dGVuVFNMb2FkVGFncygpIHtcclxuICAgIGxvZyhcIkZsYXR0ZW5pbmdcIiwgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xyXG4gICAgY29uc3QgcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gICAgT2JqZWN0LmtleXMoSFRNTExvYWRlci5DQUNIRSkuZm9yRWFjaChcclxuICAgICAgKG5hbWUpID0+XHJcbiAgICAgICAgKEhUTUxMb2FkZXIuQ0FDSEVbbmFtZV0gPSBIVE1MTG9hZGVyLmZsYXR0ZW5UU0xvYWRUYWcoXHJcbiAgICAgICAgICBIVE1MTG9hZGVyLmdldENhY2hlZENvbnRlbnQobmFtZSkgYXMgRWxlbWVudCxcclxuICAgICAgICAgIHMsXHJcbiAgICAgICAgICAwXHJcbiAgICAgICAgKSBhcyBFbGVtZW50KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIG11bHRpcGxlVGFicyhuOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJldCA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgICByZXQgKz0gXCJcXHRcIjtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBmbGF0dGVuVFNMb2FkVGFnKFxyXG4gICAgZWxlbTogRWxlbWVudCxcclxuICAgIGZsYXR0ZW5lZDogU2V0PHN0cmluZz4sXHJcbiAgICBjb3VudDogbnVtYmVyXHJcbiAgKTogRWxlbWVudCB8IG51bGwge1xyXG4gICAgY29uc3QgdGFicyA9IEhUTUxMb2FkZXIubXVsdGlwbGVUYWJzKGNvdW50KTtcclxuICAgIGlmIChjb3VudCA+IDEwMCkge1xyXG4gICAgICBhbGVydChcIkNoZWNrIHRoZSBjb25zb2xlLCBhbiBlcnJvciBoYXMgb2NjdXJyZWQuXCIpO1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgXCJJdCBzZWVtcyBsaWtlIHlvdSBtaWdodCBoYXZlIGluZmluaXRlbHkgcmVjdXJzaXZlbHkgbmVzdGVkIHRhZ3MuXCIgK1xyXG4gICAgICAgICAgXCJcXG5IZXJlIGFyZSBhbGwgb2YgdGhlIHRhZ3MgdGhhdCBoYXZlIGJlZW4gZmxhdHRlbmVkIHNvIGZhcjogXCIgK1xyXG4gICAgICAgICAgZmxhdHRlbmVkICtcclxuICAgICAgICAgIFwiXFxuSGVyZSBpcyB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBlbGVtZW50OiBcIiArXHJcbiAgICAgICAgICBlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmFtZSA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIpO1xyXG4gICAgaWYgKG5hbWUgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb250ZW50ID0gSFRNTExvYWRlci5nZXRDYWNoZWRDb250ZW50KG5hbWUpO1xyXG4gICAgaWYgKGNvbnRlbnQgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoZmxhdHRlbmVkLmhhcyhuYW1lKSkge1xyXG4gICAgICByZXR1cm4gY29udGVudDtcclxuICAgIH1cclxuICAgIGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbChcInNjcmlwdFwiKS5mb3JFYWNoKChlKSA9PiBlLnJlbW92ZSgpKTtcclxuICAgIGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbChcInRzLWxvYWRcIikuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICBjb25zdCBjaGlsZCA9IEhUTUxMb2FkZXIuZmxhdHRlblRTTG9hZFRhZyhlLCBmbGF0dGVuZWQsIGNvdW50ICsgMSk7XHJcbiAgICAgIGlmIChjaGlsZCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGUucmVwbGFjZVdpdGgoY2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGZsYXR0ZW5lZC5hZGQobmFtZSk7XHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGdldENhY2hlZENvbnRlbnQoXHJcbiAgICBuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkXHJcbiAgKTogRWxlbWVudCB8IG51bGwge1xyXG4gICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCB8fCBuYW1lID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29udGVudCA9IEhUTUxMb2FkZXIuQ0FDSEVbbmFtZV07XHJcbiAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRlbnQgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgRWxlbWVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGxvYWRBbGxDYWNoZWRFbGVtZW50cyhmcmFnOiBEb2N1bWVudEZyYWdtZW50KSB7XHJcbiAgICBmcmFnLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0cy1sb2FkXCIpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgY29uc3QgbmFtZSA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIpO1xyXG4gICAgICBjb25zdCBjb250ZW50ID0gSFRNTExvYWRlci5nZXRDYWNoZWRDb250ZW50KG5hbWUpO1xyXG4gICAgICBpZiAoY29udGVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgZWxlbS5yZXBsYWNlV2l0aChjb250ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4uL2RvbS9lbGVtZW50c1wiO1xyXG5pbXBvcnQgeyBEIH0gZnJvbSBcIi4vLi4vZG9tL2RvY3VtZW50XCI7XHJcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi9jb25zb2xlX3dyYXBwZXJcIjtcclxubG9nKFwiaWQgZ2VuZXJhdG9yIGxvYWRlZFwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XHJcbmV4cG9ydCBjbGFzcyBJREdlbmVyYXRvciB7XHJcbiAgcHVibGljIHN0YXRpYyByZXNldCgpIHtcclxuICAgIElER2VuZXJhdG9yLmlkQ291bnQgPSAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgbmV4dCgpIHtcclxuICAgIElER2VuZXJhdG9yLmlkQ291bnQgKz0gMTtcclxuICAgIHJldHVybiBJREdlbmVyYXRvci5wcmVmaXggKyBJREdlbmVyYXRvci5pZENvdW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhcHBseUlEKGVsZW06IEVsZW1lbnQpIHtcclxuICAgIGVsZW0uaWQgPSBlbGVtLmlkID8gZWxlbS5pZCA6IElER2VuZXJhdG9yLm5leHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWN1cnNpdmVseSBhZGRzIGlkcyB0byBhbGwgZWxlbWVudHMgdGhhdCBhcmUgYmVsb3cgdGhlIGdpdmVuXHJcbiAgICogZWxlbWVudCBpbiB0aGUgaGVpcmFyY2h5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVsZW0gLSB0aGUgZWxlbWVudCB0byBzdGFydCBhcHBseWluZyBpZHMgdG8gaXRzIGNoaWxkcmVuLlxyXG4gICAqICAgICAgICAgICAgICAgICAgV2lsbCBub3QgYXBwbHkgYW4gaWQgdG8gdGhpcyBlbGVtZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgYXBwbHlSZWN1cihlbGVtOiBFbGVtZW50IHwgc3RyaW5nKSB7XHJcbiAgICBELmVhY2hSZWN1cihlbGVtLCB0aGlzLmFwcGx5SUQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXR0YWNoZXMgaWRzIHRvIGFsbCBodG1sIGVsZW1lbnRzIGluIHRoZSB0YXJnZXQgbG9jYXRpb24gaW4gdGhlIERPTSB0aGF0IGRvIG5vdCBoYXZlIGlkcy5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGF0dGFjaElkc1RvQWxsRWxlbWVudHMoKSB7XHJcbiAgICBJREdlbmVyYXRvci5hcHBseVJlY3VyKEVsZW1lbnRzLmh0bWxMb2MpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgaWRDb3VudCA9IDA7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcHJlZml4ID0gXCJhdXRvX2dlbl9pZF91bnFfXCI7XHJcbn1cclxuIiwiY29uc3QgcVBhcmFtcyA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcztcclxuZXhwb3J0IGNvbnN0IHBhcmFtcyA9IHtcclxuICB3dXN0bF9rZXk6IFwiXCIsXHJcbiAgc2FuZGJveDogZmFsc2UsXHJcbiAgcHJvamVjdDogXCJcIixcclxuICBpdGVyYXRpb246IDAsXHJcbiAgdGFnOiBcIlwiLFxyXG59O1xyXG50cnkge1xyXG4gIHFQYXJhbXMuZm9yRWFjaChjb25zb2xlLmxvZyk7XHJcbiAgaWYgKFxyXG4gICAgW1wid3VzdGxfa2V5XCIsIFwic2FuZGJveFwiLCBcInByb2plY3RcIiwgXCJpdGVyYXRpb25cIiwgXCJ0YWdcIl0uZXZlcnkoKGtleSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImtleTogXCIgKyBxUGFyYW1zLmhhcyhrZXkpKTtcclxuICAgICAgcmV0dXJuIHFQYXJhbXMuaGFzKGtleSk7XHJcbiAgICB9KVxyXG4gICkge1xyXG4gICAgcGFyYW1zLnd1c3RsX2tleSA9IHFQYXJhbXMuZ2V0KFwid3VzdGxfa2V5XCIpIGFzIHN0cmluZztcclxuICAgIHBhcmFtcy5zYW5kYm94ID0gcVBhcmFtcy5nZXQoXCJzYW5kYm94XCIpID09PSBcInRydWVcIjtcclxuICAgIHBhcmFtcy5wcm9qZWN0ID0gcVBhcmFtcy5nZXQoXCJwcm9qZWN0XCIpIGFzIHN0cmluZztcclxuICAgIHBhcmFtcy5pdGVyYXRpb24gPSBwYXJzZUludChxUGFyYW1zLmdldChcIml0ZXJhdGlvblwiKSBhcyBzdHJpbmcsIDEwKTtcclxuICAgIHBhcmFtcy50YWcgPSBxUGFyYW1zLmdldChcInRhZ1wiKSBhcyBzdHJpbmc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKFwibWlzc2luZyBxdWVyeSBwYXJhbXNcIik7XHJcbiAgICBhbGVydChcclxuICAgICAgXCJUaGlzIEhJVCBpcyBtaXNzaW5nIG5lY2Nlc3NhcnkgbWV0YWRhdGEsIHNvcnJ5IGZvciB0aGUgaW5jb252ZW5pZW5jZS4gUGxlYXNlIGNvbnRhY3QgdGhlIFJlcXVlc3RlciBhcyB0aGlzIGlzIG5vdCBpbnRlbmRlZCB0byBoYXBwZW4uXCJcclxuICAgICk7XHJcbiAgfVxyXG59IGNhdGNoIChlKSB7XHJcbiAgY29uc29sZS5sb2coZSk7XHJcbiAgYWxlcnQoZSk7XHJcbiAgYWxlcnQoXHJcbiAgICBcIlRoaXMgSElUIGlzIGJyb2tlbiwgc29ycnkgZm9yIHRoZSBpbmNvbnZlbmllbmNlLiBQbGVhc2UgY29udGFjdCB0aGUgUmVxdWVzdGVyIGFzIHRoaXMgaXMgbm90IGludGVuZGVkIHRvIGhhcHBlbi5cIlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuL2NvbnNvbGVfd3JhcHBlclwiO1xyXG5cclxubG9nKFwicmVhZHkgbG9hZGVkXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcclxuXHJcbmxldCByZWFkeSA9IGZhbHNlO1xyXG5cclxubGV0IHJlc29sdmVGdW5jOiAodmFsOiBib29sZWFuKSA9PiBhbnk7XHJcbmxldCByZWplY3RGdW5jO1xyXG5jb25zdCByZWFkeVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKHZhbDogYm9vbGVhbikgPT4gYW55LCByZWplY3QpID0+IHtcclxuICByZXNvbHZlRnVuYyA9IHJlc29sdmU7XHJcbiAgcmVqZWN0RnVuYyA9IHJlamVjdDtcclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgbG9nKFwiZG9jdW1lbnQgaXMgcmVhZHlcIiwgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xyXG4gIHJlYWR5ID0gdHJ1ZTtcclxuICByZXNvbHZlRnVuYyh0cnVlKTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNSZWFkeSgpIHtcclxuICByZXR1cm4gcmVhZHk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHdhaXRVbnRpbFJlYWR5KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIHJldHVybiByZWFkeSA/IFByb21pc2UucmVzb2x2ZSh0cnVlKSA6IHJlYWR5UHJvbWlzZTtcclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIFNjZW5hcmlvIHtcclxuICBjb250ZXh0OiBzdHJpbmc7XHJcbiAgcXVlc3Rpb246IHN0cmluZztcclxuICB0YWc6IHN0cmluZztcclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby12YXItcmVxdWlyZXNcclxuZXhwb3J0IGNvbnN0IHNjZW5hcmlvczogU2NlbmFyaW9bXSA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL3NjZW5hcmlvcy9zY2VuYXJpb3MuanNvblwiKTtcclxuKHdpbmRvdyBhcyBhbnkpLnNjZW5hcmlvcyA9IHNjZW5hcmlvcztcclxuIiwiaW1wb3J0IHsgRCB9IGZyb20gXCIuLy4uL2NvcmUvZG9tL2RvY3VtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uIHtcclxuICBwdWJsaWMgc3RhdGljIHNldHVwQWxsKCkge1xyXG4gICAgQWNjb3JkaW9uLmRpc2NhcmRBbGwoKTtcclxuICAgIGNvbnN0IGFjY29yZGlvbnMgPSBELmNsYXooXCJhY2NvcmRpb25cIik7XHJcbiAgICBmb3IgKGxldCBhY2NJbmRleCA9IDA7IGFjY0luZGV4IDwgYWNjb3JkaW9ucy5sZW5ndGg7ICsrYWNjSW5kZXgpIHtcclxuICAgICAgY29uc3QgZWxlbSA9IGFjY29yZGlvbnMuaXRlbShhY2NJbmRleCk7XHJcbiAgICAgIGlmIChlbGVtID09IG51bGwpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBBY2NvcmRpb24uYWNjb3JkaW9ucy5wdXNoKG5ldyBBY2NvcmRpb24oZWxlbSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHVwIHJlYWQgbGluayBsaXN0ZW5lcnNcclxuICAgIEFjY29yZGlvbi5zZXR1cFJlYWRMaW5rcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBkaXNjYXJkQWxsKCkge1xyXG4gICAgQWNjb3JkaW9uLmFjY29yZGlvbnMgPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZXhwYW5kQWNjb3JkaW9uQnlJZChhY2NvcmRpb25JZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBhY2NvcmRpb24gPSBBY2NvcmRpb24uYWNjb3JkaW9ucy5maW5kKFxyXG4gICAgICAoYWNjKSA9PiBhY2Mub3V0ZXIuaWQgPT09IGFjY29yZGlvbklkXHJcbiAgICApO1xyXG4gICAgaWYgKGFjY29yZGlvbikge1xyXG4gICAgICBhY2NvcmRpb24uZXhwYW5kKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBzZXR1cFJlYWRMaW5rcygpIHtcclxuICAgIGNvbnN0IHJlYWRMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hY2NvcmRpb25dXCIpO1xyXG4gICAgcmVhZExpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGxpbmssIFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgYWNjb3JkaW9uSWQgPSBsaW5rLmdldEF0dHJpYnV0ZShcImRhdGEtYWNjb3JkaW9uXCIpO1xyXG4gICAgICAgIGlmIChhY2NvcmRpb25JZCkge1xyXG4gICAgICAgICAgQWNjb3JkaW9uLmV4cGFuZEFjY29yZGlvbkJ5SWQoYWNjb3JkaW9uSWQpO1xyXG4gICAgICAgICAgLy8gU2Nyb2xsIHRvIHRoZSBhY2NvcmRpb24gc21vb3RobHlcclxuICAgICAgICAgIGNvbnN0IGFjY29yZGlvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhY2NvcmRpb25JZCk7XHJcbiAgICAgICAgICBpZiAoYWNjb3JkaW9uRWxlbWVudCkge1xyXG4gICAgICAgICAgICBhY2NvcmRpb25FbGVtZW50LnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICAgICAgICBibG9jazogXCJzdGFydFwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBhY2NvcmRpb25zOiBBY2NvcmRpb25bXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG91dGVyOiBFbGVtZW50KSB7XHJcbiAgICBELmFkZEV2ZW50TGlzdGVuZXIob3V0ZXIsIFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZSgpIHtcclxuICAgIC8qIFRvZ2dsZSBiZXR3ZWVuIGFkZGluZyBhbmQgcmVtb3ZpbmcgdGhlIFwiYWN0aXZlXCIgY2xhc3MsXHJcbiAgICAgICAgICAgICAgdG8gaGlnaGxpZ2h0IHRoZSBidXR0b24gdGhhdCBjb250cm9scyB0aGUgcGFuZWwgKi9cclxuICAgIHRoaXMub3V0ZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAvKiBUb2dnbGUgYmV0d2VlbiBoaWRpbmcgYW5kIHNob3dpbmcgdGhlIGFjdGl2ZSBwYW5lbCAqL1xyXG4gICAgY29uc3QgcGFuZWwgPSB0aGlzLm91dGVyLm5leHRFbGVtZW50U2libGluZyBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmIChwYW5lbC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgcGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFuZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBleHBhbmQoKSB7XHJcbiAgICAvLyBPbmx5IGV4cGFuZCBpZiBub3QgYWxyZWFkeSBleHBhbmRlZFxyXG4gICAgaWYgKCF0aGlzLm91dGVyLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICB0aGlzLm91dGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgIGNvbnN0IHBhbmVsID0gdGhpcy5vdXRlci5uZXh0RWxlbWVudFNpYmxpbmcgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIHBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29sbGFwc2UoKSB7XHJcbiAgICBpZiAodGhpcy5vdXRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgdGhpcy5vdXRlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICBjb25zdCBwYW5lbCA9IHRoaXMub3V0ZXIubmV4dEVsZW1lbnRTaWJsaW5nIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBwYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBkb1NvbWV0aGluZygpIHtcclxuICBjb25zb2xlLmxvZyhcIlB1dCBzb21lIGNvZGUgaW4gaGVyZSFcIik7XHJcbn1cclxuIiwiaW1wb3J0IHsgSFRNTExvYWRlciB9IGZyb20gXCIuLi9jb3JlL3V0aWxzL2h0bWxfbG9hZGVyXCI7XHJcbmltcG9ydCB7IEFjY29yZGlvbiB9IGZyb20gXCIuL2FjY29yZGlvblwiO1xyXG5pbXBvcnQgeyBkb1NvbWV0aGluZyB9IGZyb20gXCIuL2RvLXNvbWV0aGluZ1wiO1xyXG5pbXBvcnQgeyBIVE1MQ29udGVudCwgaXRlbXNUb0NhY2hlIH0gZnJvbSBcIi4vaHRtbC1pbXBvcnRzXCI7XHJcbmltcG9ydCB7IFNsaWRlc2hvdyB9IGZyb20gXCIuL3NsaWRlc2hvd1wiO1xyXG5cclxuLy8gUHV0IGFsbCBmdW5jdGlvbiBjYWxscyB0aGF0IG5lZWQgdG8gYmUgbWFkZSBvbiBldmVyeSBwYWdlIGxvYWQgaW5zaWRlIHRoZSBzZXR1cEFsbCBmdW5jdGlvbiBib2R5LlxyXG5leHBvcnQgZnVuY3Rpb24gUHV0U3R1ZGVudFBhZ2VMb2FkT3BlcmF0aW9uc0luc2lkZVRoaXNTdHVkZW50Qm9keSgpIHtcclxuICAvLyBUT0RPOiBQdXQgYWxsIG9wZXJhdGlvbnMgdGhhdCB5b3Ugd2FudCB0byBoYXBwZW4gb24gZXZlciBwYWdlIGxvYWQgaW4gdGhpcyBmdW5jdGlvbi5cclxuICAvLyBGb3IgZXhhbXBsZSB5b3UgY291bGQgd3JpdGU6IFN0aWNreS5zZXR1cCgpXHJcbiAgZG9Tb21ldGhpbmcoKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldHVwQWxsKCkge1xyXG4gIGF3YWl0IG5ldyBQcm9taXNlKChyOiBhbnkpID0+IHNldFRpbWVvdXQociwgMTAwKSk7XHJcbiAgY29uc29sZS5sb2coXCJyZWxvYWRpbmdcIik7XHJcbiAgU2xpZGVzaG93LnNldHVwQWxsKCk7XHJcbiAgQWNjb3JkaW9uLnNldHVwQWxsKCk7XHJcbiAgUHV0U3R1ZGVudFBhZ2VMb2FkT3BlcmF0aW9uc0luc2lkZVRoaXNTdHVkZW50Qm9keSgpO1xyXG4gIGNvbnNvbGUubG9nKFwicmVsb2FkZWRcIik7XHJcbn1cclxuXHJcbml0ZW1zVG9DYWNoZS5mb3JFYWNoKChpdGVtOiBIVE1MQ29udGVudCkgPT4ge1xyXG4gIEhUTUxMb2FkZXIuY2FjaGVIVE1MKGl0ZW0ubmFtZSwgaXRlbS5jb250ZW50KTtcclxufSk7XHJcbih3aW5kb3cgYXMgYW55KS5IVE1MTG9hZGVyID0gSFRNTExvYWRlcjtcclxuXHJcbmNvbnNvbGUubG9nKFwiZHluYW1pYy1kb20gbG9hZGVkXCIpO1xyXG4vLyBEbyBub3QgdG91Y2ggdGhpcyBsaW5lLCBuZWVkZWQgdG8gcmVpbml0aWFsaXplIGNvZGUgaW4gdGhlIGR5bmFtaWMtZG9tLnRzIHNldHVwQWxsIGZ1bmN0aW9uXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibmV3UGFnZUxvYWRcIiwgKCkgPT4gc2V0dXBBbGwoKSk7XHJcbiIsImRlY2xhcmUgZnVuY3Rpb24gcmVxdWlyZShpZDogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuLy8gVGhpcyBkZWZpbmVzIHRoZSBkYXRhIHRoYXQgbmVlZHMgdG8gYmUgcGFzc2VkIHRvIHRoZSBIVE1MTG9hZGVyIHRvIGNhY2hlIHlvdXIgaHRtbCBjb250ZW50LlxyXG5leHBvcnQgaW50ZXJmYWNlIEhUTUxDb250ZW50IHtcclxuICBuYW1lOiBzdHJpbmc7IC8vIFRoZSBuYW1lIHRoYXQgeW91IHdpbGwgdXNlIHRvIHJlZmVyZW5jZSB0aGUgY29udGVudCBpbiB5b3VyIGh0bWwgcGFnZXMuXHJcbiAgY29udGVudDogc3RyaW5nOyAvLyBUaGUgYWN0dWFsIGh0bWwgc3RyaW5nIHRoYXQgd2lsbCBiZSBwdWxsZWQgZnJvbSB0aGUgc291cmNlIGZpbGUgdGhhdCB5b3Ugc3BlY2lmeS5cclxufVxyXG5cclxuLy8gQW4gSFRNTENvbnRlbnQgb2JqZWN0IHNob3VsZCBsb29rIGxpa2UgdGhlIGZvbGxvd2luZzpcclxuLy8ge1xyXG4vLyAgICAgbmFtZTogJ2Zvb3RlcicsXHJcbi8vICAgICBjb250ZW50OiByZXF1aXJlKCcuL2h0bWwvZm9vdGVyLmh0bWwnKSxcclxuLy8gfVxyXG5cclxuLy8gVGhlbiB5b3UgY2FuIHJlZmVyZW5jZSB0aGF0IGNvbnRlbnQgaW4geW91ciBodG1sIHVzaW5nIHRoZSBmb2xsb3dpbmcgdGFnIHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgbmFtZSBhdHRyaWJ1dGUuXHJcbi8vIDx0cy1sb2FkIGRhdGEtbmFtZT1cImhlYWRlclwiPjwvdHMtbG9hZD5cclxuXHJcbi8vIFlvdSBjYW4gc3BlY2lmeSBhcyBtYW55IGFzIHlvdSB3YW50IGluc2lkZSBvZiB0aGUgYXJyYXkgYW5kIHRoZXkgd2lsbCBhbGwgYmUgYnVuZGxlZCB1cCB3aXRoIHlvdXIgd2Vic2l0ZS5cclxuLy8gTWFrZSBzdXJlIHRvIG1ha2UgYSBjb3JyZXNwb25kaW5nIGh0bWwgZmlsZSBpbiB0aGUgaHRtbCBmaWxlIGZvbGRlciBmb3IgZWFjaCBlbGVtZW50IHlvdSBzcGVjaWZ5LlxyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zVG9DYWNoZSA9IFtcclxuICAvLyBGZWVsIGZyZWUgdG8gY2hhbmdlIHRoZSBjb250ZW50IGluc2lkZSBhbnkgb2YgdGhlIGh0bWwgZmlsZXMgaW4gdGhlIGh0bWwgZmlsZSBmb2xkZXIgdG8gc3VpdCB5b3VyIG5lZWRzLlxyXG4gIHtcclxuICAgIG5hbWU6IFwiaGVhZGVyXCIsXHJcbiAgICBjb250ZW50OiByZXF1aXJlKFwiLi9odG1sL2hlYWRlci5odG1sXCIpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJmb290ZXJcIixcclxuICAgIGNvbnRlbnQ6IHJlcXVpcmUoXCIuL2h0bWwvZm9vdGVyLmh0bWxcIiksXHJcbiAgfSxcclxuICAvLyBQdXQgbW9yZSBpdGVtcyBpbiB0aGUgYXJyYXkgYmVsb3cgaGVyZS5cclxuXTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb290ZXIgaWQ9XFxcImNvbG9waG9uXFxcIiBjbGFzcz1cXFwiZm9vdGVyXFxcIiByb2xlPVxcXCJjb250ZW50aW5mb1xcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXItd2lkZ2V0c1xcXCI+XFxyXFxuICAgICAgPGFzaWRlIGNsYXNzPVxcXCJ3aWRnZXQgc2l0ZS1jb250YWN0XFxcIj5cXHJcXG4gICAgICAgIDxoMiBjbGFzcz1cXFwiZm9vdGVyLXdpZGdldC10aXRsZVxcXCI+TnVyc2VyeSBTY2hvb2w8L2gyPlxcclxcbiAgICAgICAgPHA+NjkyNiBGb3Jlc3QgUGFyayBQYXJrd2F5PC9wPlxcclxcbiAgICAgICAgPHA+U3QuIExvdWlzLCBNTyA2MzEzMDwvcD5cXHJcXG4gICAgICAgIDxwIGNsYXNzPVxcXCJwaG9uZVxcXCI+MzE0LTkzNS02Njg5IDxzcGFuPnw8L3NwYW4+IEZheDogMzE0LTkzNS03MjQ5PC9wPlxcclxcbiAgICAgICAgPHA+XFxyXFxuICAgICAgICAgIDxhIGhyZWY9XFxcImZpbGVzL21haWx0bzpudXJzZXJ5QHd1c3RsLmVkdVxcXCI+bnVyc2VyeUB3dXN0bC5lZHU8L2E+XFxyXFxuICAgICAgICA8L3A+XFxyXFxuICAgICAgPC9hc2lkZT5cXHJcXG5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJ3aWRnZXQtd3JhcHBlclxcXCI+XFxyXFxuICAgICAgICA8YXNpZGUgaWQ9XFxcInRleHQtNFxcXCIgY2xhc3M9XFxcIndpZGdldCB3aWRnZXRfdGV4dCB3aWRnZXQtY291bnQtMlxcXCI+XFxyXFxuICAgICAgICAgIDxoMiBjbGFzcz1cXFwiZm9vdGVyLXdpZGdldC10aXRsZVxcXCI+SG91cnMgb2YgT3BlcmF0aW9uPC9oMj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dHdpZGdldFxcXCI+XFxyXFxuICAgICAgICAgICAgPHA+XFxyXFxuICAgICAgICAgICAgICBDbGFzc2VzIG1lZXQgTW9uLiB0aHJvdWdoIEZyaS48YnIgLz5cXHJcXG4gICAgICAgICAgICAgIE1vcm5pbmc6IDktMTE6NDUgYS5tLjxiciAvPlxcclxcbiAgICAgICAgICAgICAgQWZ0ZXJub29uOiAxMjozMC0zOjE1IHAubS48YnIgLz5cXHJcXG4gICAgICAgICAgICAgIEZ1bGwgZGF5OiA5IGEubS4tMzoxNSBwLm0uXFxyXFxuICAgICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvYXNpZGU+XFxyXFxuICAgICAgICA8YXNpZGUgaWQ9XFxcInRleHQtM1xcXCIgY2xhc3M9XFxcIndpZGdldCB3aWRnZXRfdGV4dCB3aWRnZXQtY291bnQtMlxcXCI+XFxyXFxuICAgICAgICAgIDxoMiBjbGFzcz1cXFwiZm9vdGVyLXdpZGdldC10aXRsZVxcXCI+QXBwbHkgZm9yIHRoZSBOdXJzZXJ5IFNjaG9vbDwvaDI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHR3aWRnZXRcXFwiPlxcclxcbiAgICAgICAgICAgIDxwPlxcclxcbiAgICAgICAgICAgICAgRXhwZXJpZW5jZSB0aGUgaW5ub3ZhdGl2ZSBhcHByb2FjaCBhbmQgZHluYW1pYyB0ZWFjaGluZ1xcclxcbiAgICAgICAgICAgICAgZW52aXJvbm1lbnQgb2YgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC5cXHJcXG4gICAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiZmlsZXMvYXBwbHkuaHRtbFxcXCI+UmVnaXN0ZXIgTm93PC9hPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvYXNpZGU+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzaXRlLWluZm9cXFwiPlxcclxcbiAgICAgIDxwIGNsYXNzPVxcXCJmb290ZXItY29weXJpZ2h0XFxcIj7CqTIwMTkgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IGluIFN0LiBMb3VpczwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Zvb3Rlcj5cXHJcXG5cIjtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPVxcXCJ3dXN0bC1icmFuZGluZ1xcXCI+XFxyXFxuICA8c3ZnXFxyXFxuICAgIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCJcXHJcXG4gICAgd2lkdGg9XFxcIjMyMVxcXCJcXHJcXG4gICAgaGVpZ2h0PVxcXCIyOFxcXCJcXHJcXG4gICAgdmlld0JveD1cXFwiMCAwIDMyMSAyOFxcXCJcXHJcXG4gICAgY2xhc3M9XFxcIndhc2h1LWxvZ29cXFwiXFxyXFxuICAgIGFyaWEtbGFiZWxsZWRieT1cXFwidGl0bGVcXFwiXFxyXFxuICA+XFxyXFxuICAgIDx0aXRsZSBpZD1cXFwidGl0bGVcXFwiPldhc2hpbmd0b24gVW5pdmVyc2l0eSBpbiBTdC4gTG91aXM8L3RpdGxlPlxcclxcbiAgICA8cGF0aFxcclxcbiAgICAgIGZpbGw9XFxcIiNGRkZcXFwiXFxyXFxuICAgICAgZD1cXFwiTTEwLjQ2IDEuNzZjLS4wOSAwLTQuNDEuMDQtMTAuNDYtMS4yMVYxOGMwIC4yNy4wMS40Ny4wMS40N3YuMDJjLjA0LjgxLjI4IDEuNDUuNzcgMiAuMzIuMzQuNzYuNyAxLjM4IDEuMDUuMTcuMS4zNS4xOC41NS4yOC4xNS4wNy4zMS4xNC40Ny4yLjE0LjA2LjU1LjI0LjY5LjI5bDYuNTkgMi41IDYuNTktMi41Yy4xNS0uMDUuNTYtLjI0LjY5LS4yOS4xNi0uMDcuMzItLjE0LjQ3LS4yLjE5LS4xLjM4LS4xOC41NS0uMjguNjItLjM1IDEuMDYtLjcgMS4zOC0xLjA1LjQ4LS41NS43My0xLjE5Ljc3LTJ2LS4wMnMwLS4xOS4wMS0uNDdWLjU1QzE0Ljg2IDEuOCAxMC41NSAxLjc2IDEwLjQ2IDEuNzZ6XFxcIlxcclxcbiAgICA+PC9wYXRoPlxcclxcbiAgICA8cGF0aFxcclxcbiAgICAgIGZpbGw9XFxcIiMwMDczNjBcXFwiXFxyXFxuICAgICAgZD1cXFwiTTEwLjQ2IDIuOGMtLjA5IDAtNC4wMy4wNC05LjU2LTEuMXYxNS45NWMwIC4yNS4wMS40My4wMS40NHYuMDJjLjA0Ljc0LjI1IDEuMzMuNyAxLjgzLjI5LjMxLjcuNjQgMS4yNi45NS4xNS4wOS4zMi4xNy41LjI2LjE0LjA3LjI4LjEzLjQ0LjE5LjEyLjA1LjUuMjIuNjMuMjdsNi4wMyAyLjI5IDYuMDMtMi4yOWMuMTMtLjA1LjUxLS4yMi42My0uMjcuMTUtLjA2LjMtLjEzLjQ0LS4xOS4xOC0uMDkuMzUtLjE3LjUtLjI2LjU2LS4zMS45Ny0uNjQgMS4yNi0uOTUuNDQtLjUuNjYtMS4wOS43LTEuODN2LS4wMnMwLS4xOC4wMS0uNDRWMS43Yy01LjU1IDEuMTQtOS41IDEuMS05LjU4IDEuMXpcXFwiXFxyXFxuICAgID48L3BhdGg+XFxyXFxuICAgIDxwYXRoXFxyXFxuICAgICAgZmlsbD1cXFwiI0UxQzRBQ1xcXCJcXHJcXG4gICAgICBkPVxcXCJNMTAuNDYgMy43NWMtLjA4IDAtMy42OC4wNC04Ljc0LTEuMDJ2NC4wOGM1LjA1IDEuMDUgOC42NyAxLjAyIDguNzQgMS4wMnMzLjY4LjA0IDguNzQtMS4wMlYyLjczYy01LjA2IDEuMDUtOC42NiAxLjAyLTguNzQgMS4wMnpcXFwiXFxyXFxuICAgID48L3BhdGg+XFxyXFxuICAgIDxwYXRoXFxyXFxuICAgICAgZmlsbD1cXFwiI0E1MTQxN1xcXCJcXHJcXG4gICAgICBkPVxcXCJNMTAuNDYgNy44M2MtLjA4IDAtMy42OC4wNC04Ljc0LTEuMDJ2OS4wNWM1LjA1IDEuMDUgOC42NyAxLjAyIDguNzQgMS4wMnMzLjY4LjA0IDguNzQtMS4wMlY2LjgyYy01LjA2IDEuMDQtOC42NiAxLjAxLTguNzQgMS4wMXpcXFwiXFxyXFxuICAgID48L3BhdGg+XFxyXFxuICAgIDxwYXRoXFxyXFxuICAgICAgZmlsbD1cXFwiI0UxQzRBQ1xcXCJcXHJcXG4gICAgICBkPVxcXCJNMS43MiAxNy43MmMuMDMuNjkuMjMgMS4yMy42NCAxLjY4LjI2LjI4LjY0LjU4IDEuMTUuODcuMTUuMDguMjkuMTUuNDYuMjMuMTMuMDYuMjYuMTIuNC4xNy4xMS4wNS40Ni4yLjU4LjI0TDEwLjQ2IDIzbDUuNTEtMi4wOWMuMTItLjA0LjQ2LS4yLjU4LS4yNC4xNC0uMDYuMjctLjEyLjQtLjE3LjE2LS4wOC4zMi0uMTUuNDYtLjIzLjUxLS4yOS44OC0uNTggMS4xNS0uODcuNDEtLjQ2LjYtMSAuNjQtMS42OHYtLjAyczAtLjE2LjAxLS40di0xLjQ0Yy01LjA1IDEuMDUtOC42NyAxLjAyLTguNzQgMS4wMnMtMy42OC4wNC04Ljc0LTEuMDJ2MS40NWMtLjAyLjI1LS4wMS40MS0uMDEuNDF6XFxcIlxcclxcbiAgICA+PC9wYXRoPlxcclxcbiAgICA8cGF0aFxcclxcbiAgICAgIGZpbGw9XFxcIiMwMDczNjBcXFwiXFxyXFxuICAgICAgZD1cXFwiTTQuOCAzLjY5bC40MSAxLjIzIDEuMjkuMDEtMS4wNC43Ny4zOSAxLjI0LTEuMDUtLjc2LTEuMDUuNzYuMzktMS4yNC0xLjA0LS43NyAxLjI5LS4wMS40MS0xLjIzem0xMS4zMSAwbC40MiAxLjIzIDEuMjkuMDEtMS4wNC43Ny4zOSAxLjI0LTEuMDYtLjc2LTEuMDUuNzYuMzktMS4yNC0xLjA0LS43NyAxLjI5LS4wMS40MS0xLjIzem0tNS42NS40OGwuNDIgMS4yMyAxLjI5LjAxLTEuMDQuNzcuMzkgMS4yNC0xLjA2LS43Ni0xLjA2Ljc1LjM5LTEuMjQtMS4wNC0uNzcgMS4zLS4wMS40MS0xLjIyek0xMC40NiAxNy4yMWwtLjQ2LjQ1djEuMjJsLjIzLjY1djEuMDloLjQ1di0xLjA5bC4yMy0uNjV2LTEuMjJsLS40NS0uNDV6bS4yMiA0LjQxdi0uNjVoLS40NXYuNjVsLS4yMy40Mi40Ni41Ni40Ni0uNTYtLjI0LS40MnptLjMzLS42NXYuNWwuMjkuMzEuNTEtLjQxdi0uNDFoLS44em0uNTQtMi4wNGwtLjU0LjZ2MS4wOWguNDR2LS42NWwuNDMtLjQ2LjU1LjM2LjM1LS4zNnYtLjU4aC0xLjIzem0tMS42NCAyLjA0di41bC0uMjkuMzEtLjUyLS40MXYtLjQxaC44MXptLS41NS0yLjA0bC41NC42djEuMDloLS40M3YtLjY1bC0uNDMtLjQ2LS41NS4zNi0uMzUtLjM2di0uNThoMS4yMnpcXFwiXFxyXFxuICAgID48L3BhdGg+XFxyXFxuICAgIDxwYXRoXFxyXFxuICAgICAgZmlsbD1cXFwiI0UxQzRBQ1xcXCJcXHJcXG4gICAgICBkPVxcXCJNMTQuNjIgOS4yN3Y1LjE5aC0zLjQ5bC0uMjUuMjEtLjQzLjM3LS40My0uMzctLjI1LS4yMUg2LjI5VjkuMjdsLS43NC41NHY1LjM4aDQuMTJsLjM3LjMxLjQzLjM4LjQzLS4zOC4zNy0uMzFoNC4xMlY5LjgxbC0uNzctLjU0elxcXCJcXHJcXG4gICAgPjwvcGF0aD5cXHJcXG4gICAgPHBhdGhcXHJcXG4gICAgICBmaWxsPVxcXCIjRTFDNEFDXFxcIlxcclxcbiAgICAgIGQ9XFxcIk0xMS4wMiA4LjgzbC0uMTQuMTEtLjQzLjM4LS40My0uMzgtLjEyLS4xMUg3LjAzdjQuODloMi44OGwuMi4xNy4zNS4zMS4zNi0uMzEuMTktLjE3aDIuODhWOC44M2gtMi44N3pNMTYuMTEgMTAuMzV2My4zMWMuOTUtLjE0IDEuOTgtLjMxIDMuMDgtLjU0VjkuODFhNTAuNSA1MC41IDAgMCAxLTMuMDguNTR6bS0xMS4zMSAwYy0uOTUtLjE0LTEuOTgtLjMxLTMuMDgtLjU0djMuMzFjMS4xLjIzIDIuMTQuNDEgMy4wOC41NHYtMy4zMXpcXFwiXFxyXFxuICAgID48L3BhdGg+XFxyXFxuICAgIDxwYXRoXFxyXFxuICAgICAgZmlsbD1cXFwiIzAwNzM2MFxcXCJcXHJcXG4gICAgICBkPVxcXCJNMTYuMTEgMTYuNzZsLS4zMS4zMnYuODZsLjE1LjQ2di43N2guMzF2LS43N2wuMTYtLjQ2di0uODZsLS4zMS0uMzJ6bS4xNiAzLjA5di0uNDVoLS4zMXYuNDZsLS4xNS4zLjMxLjQuMzItLjQtLjE3LS4zMXptLjIzLS40NXYuMzVsLjIuMjIuMzYtLjI4di0uMjloLS41NnptLjM4LTEuNDNsLS4zOC40M3YuNzdoLjMxdi0uNDZsLjMtLjMzLjM4LjI1LjI0LS4yNXYtLjQxaC0uODV6bS0xLjE0IDEuNDN2LjM1bC0uMjEuMjItLjM1LS4yOHYtLjI5aC41NnptLS4zOS0xLjQzbC4zOS40M3YuNzdoLS4zMXYtLjQ2bC0uMy0uMzMtLjM5LjI1LS4yNC0uMjV2LS40MWguODV6TTQuOCAxNi43NmwtLjMyLjMydi44NmwuMTYuNDZ2Ljc3aC4zMXYtLjc3bC4xNS0uNDZ2LS44NmwtLjMtLjMyem0uMTYgMy4wOXYtLjQ1aC0uMzF2LjQ2bC0uMTYuMy4zMi40LjMxLS40LS4xNi0uMzF6bS4yMi0uNDV2LjM1bC4yMS4yMi4zNS0uMjh2LS4yOWgtLjU2em0uMzktMS40M2wtLjM5LjQzdi43N2guMzF2LS40NmwuMy0uMzMuMzkuMjUuMjQtLjI1di0uNDFoLS44NXpNNC40MiAxOS40di4zNWwtLjIuMjItLjM2LS4yOHYtLjI5aC41NnptLS4zOC0xLjQzbC4zOC40M3YuNzdoLS4zMXYtLjQ2bC0uMy0uMzMtLjM4LjI1LS4yNC0uMjV2LS40MWguODV6XFxcIlxcclxcbiAgICA+PC9wYXRoPlxcclxcbiAgICA8ZyBmaWxsPVxcXCIjRkZGXFxcIiBjbGFzcz1cXFwid2FzaHUtbG9nby10ZXh0XFxcIj5cXHJcXG4gICAgICA8cGF0aFxcclxcbiAgICAgICAgZD1cXFwiTTIzMi40NyA4LjE2Yy4zMyAwIDEuMDctMS4yIDEuMDctMS41NyAwLS4zNi0uNzQtMS42LTEuMDctMS42LS4zIDAtMS4wNyAxLjI2LTEuMDcgMS42cy43NiAxLjU3IDEuMDcgMS41N3ptMTMuODIgMTIuMDN2LTUuMDhjMC0yLjM0LS43Ni01Ljc2LTQuMjItNS43Ni0yLjUxIDAtMy44MSAyLjM4LTMuNzYgMi4wMVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLTEuMDQgMS4wMS0zLjA2IDEuNjItLjEzLjAzLS41LjA0LS41MS4yNyAwIC42NSAyLjAzLS44NCAxLjk5IDEuNjh2Ny42NGMwIDEuNDMtLjcgMS41NS0xLjIxIDEuNjgtLjAzIDAtLjA2LS4wMS0uMSAwLS41Mi0uMDMtMS42My0uMjMtMS42My0xLjM1VjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjk4IDEuMDgtMi42MyAxLjY0LS4xMy4wMy0uMzcuMDYtLjM3LjI0IDAgLjY1IDEuNDktLjYxIDEuNDIgMS42OXY3LjI3Yy4wNiAxLjg2LS45NiAyLjA0LTEuNTIgMi4wNC0uODQtLjAxLS42My4xLS42My4zNi4wMy4zMS41My4zMyAxLjM3LjM0LjI5IDAgMS0uMTEgMS44Mi0uMTEgMS4wNyAwIDEuODcuMTIgMi40MS4xMi4zMSAwIDEuMTUtLjEzIDIuNTMtLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZWMTMuMWMtLjAzLS40OS44OC0yLjQgMy4wNi0yLjQgMi4xIDAgMy4wMyAyLjMxIDMuMDMgMy44NXY1Ljc2Yy0uMDMgMi4yNy0uOCAxLjU1LTEuMTEgMi0uMTcuMjUuMTMuMzcuNDYuMzdzLjg4LS4xMyAxLjg3LS4xM2MxLjI3IDAgMS44Mi4xMiAyLjE2LjEyLjI2IDAgLjczLS4yLjQ1LS40NC0uNjgtLjUtMS45Ny4zLTEuOTUtMi4wNHpNNDguOTEgMi40Yy4zNy0uMDUuNTUtLjE5LjU1LS4xOSAwLS4yNC0uMDUtLjMtLjM5LS4zLS42NSAwLTEuMDUuMTEtMS42OS4xMS0uNzEgMC0xLjI1LS4wOC0xLjg1LS4wOC0uMzQgMC0uMzEuMTEtLjMxLjMgMCAuMjEuNjUuMDggMS4wMi44OS4yMS40NC4xMyAxLjM2LS4wOCAxLjlsLTUuMDEgMTMuNzQtMi4xNC02LjEtLjgzLTIuMjNzLS4xMy4wNi40Ni0xLjc5bDEuMTctMy41MmMuNTctMS43MyAxLjE0LTIuNjQgMS44OC0yLjY1LjkyLS4wMi45Mi0uNTcuMjEtLjU3cy0xLjEzLjA2LTEuNzUuMDZjLS42NSAwLS45OS0uMDYtMS42OS0uMDYtLjI2IDAtLjU1LjA4LS41Mi4zLjAzLjIxLjQyLjE0LjcxLjMuNDcuMjQuNzggMS4yNS40NSAyLjNsLTEuMzggNC40Mi0xLjU4LTQuMTNjLS4zMS0uNzgtLjczLTIuNTIuMDMtMi42Ny43My0uMTUuNjMtLjUyLjE4LS41Mi0uODYgMC0xLjMyLjExLTIuMTUuMTEtLjkxIDAtMS41OS0uMTEtMi40NS0uMTEtLjE4IDAtLjUyLjAzLS40Mi4zOC4wNS4yMS40OS4xNC43Ni4zIDEuMDUuNjggMS4yNSAxLjU1IDEuNjIgMi41MmwyLjMgNi40OGMuNDIgMS4xNi40NS43NC4xMSAxLjczbC0yIDUuNS00Ljk1LTE0LjExYy0uMzktMS4wNi0uNi0xLjc5LjI2LTIuMi4zNy0uMTkuNDctLjIyLjUyLS4zLjA1LS4wNy4xLS4zMi0uNDUtLjMtLjg5LjAzLTEuNDMuMTEtMi4zMi4xMS0uOTQgMC0xLjU5LS4xMS0yLjQ1LS4xMS0uMjkgMC0uMzQuMTQtLjM0LjM1IDAgLjMzLjcxLjExIDEuMzEuODEuMzQuMzguOTkgMS42NiAxLjE0IDIuMTJMMzIuOCAyMi4zYy4xMS4yNS4xNC43Ni40OC43Ni4yNyAwIC4zMy0uNTcuNDItLjc5bDMuMTMtOC41OSAzLjA1IDguMTZjLjEzLjMzLjMxIDEuMjIuNjMgMS4yMi4yNiAwIC4zNi0uNDMuNDktLjgzbDUuOS0xNi44N2MuNS0xLjM2IDEuMDctMi43OSAyLjAxLTIuOTZ6bTY1LjQ2IDYuNzFjLTMuMjYgMC01Ljc3IDMuMjgtNS43NyA3LjEzIDAgMS45Ni41MiAzLjUxIDEuNDIgNC42My0uMzEuMjEtLjkyLjctMi4xNS43LTEuMDcgMC0xLjY4LS42NC0xLjc0LTJWMTEuMmwzLjM4LS4wMWMuMjIgMCAuNjUtMS40NC42Ny0xLjUyLjA0LS4xOC4xLS4zMy4xMi0uNDYuMDQtLjI4LS4xNy0uMy0uMzctLjAxLS4xNS4xNS0uMzIuNTUtLjk5LjU1aC0yLjgxYzAtMi40MS4wMy0zLjUxLS4zNS0zLjUxLS4zNiAwLS4zLjEtLjYzIDEuMTctLjQ0IDEuNDQtMS43OSAyLjIzLTIuNjMgMi42OC0uMzguMDktLjgxLjEyLTEuMjkuMDEtLjc0LS4xNi0xLjYtMS4wNi0zLjgzLTEuMDYtMi4zOCAwLTQuNDYgMS45NS00LjQ2IDQuNTUgMCAxLjQuNjIgMi43NiAxLjcxIDMuNDgtLjIuMTItMS41MyAxLjI0LTEuMzcgMi41NiAwIDAtLjAzIDEuMzcgMS4wNSAxLjgyLS4zMy4xNC0uNjcuMzYtLjk2LjYzLS43LS4yNi0xLjcyLS4wNi0xLjcyLTEuOTFWMTUuMWMwLTIuMzQtLjc2LTUuNzYtNC4yMi01Ljc2LTIuNTEgMC0zLjgxIDIuMzgtMy43NiAyLjAxVjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjczLjk5LTIuOTEgMS41NS0uMTMuMDMtLjQzLjEtLjQ0LjM0IDAgLjY1IDEuNzUtLjcxIDEuNzYgMS42OHY3LjY0YzAgMS42NS0xLjMxIDEuNjUtMS41NCAxLjY3LS4xIDAtLjE5IDAtLjMxLjAxLS41NS0uMDUtMS41MS0uMy0xLjUxLTEuMzRWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuNzgtLjg2IDIuMDEtMS40MyAyLjAzLS42OS0uMDktMS4yMi0uMzctMS4yMi0xLjQxdi01LjE0YzAtMi42NS0xLjAxLTYuMDctNC4zMy02LjA3LTEuNDcgMC0yLjc1LjgxLTMuNzMgMS45MlYyLjQxYzAtLjMxLS4xNS0uNDgtLjMxLS40OS0uNC0uMDMtMS4wNyAxLjE5LTIuOTYgMS42My0uMTMuMDMtLjYyLjA3LS42Mi4yNSAwIC42NSAxLjk3LS4zMSAxLjk5IDEuNjlWMjAuNmMwIDEuNTEtMS4zIDEuMzEtMS41MyAxLjc5LS4wNC4yMS4wOC4zMS4yNi4zMS40MiAwIDEuNTUtLjEyIDIuMzUtLjEyczIuMS4xMiAyLjY0LjEyYy4zMSAwIC40NC0uMDYuNDQtLjQ0LS4yNy0uNTItMi4yOC4yOC0yLjI4LTIuMzd2LTYuNWMwLTEuNTcgMS44Ny0yLjc4IDMuMDMtMi43OC45MSAwIDMuMTQuNzEgMy4xNCA0LjUzdjUuNjRjMCAxLjExLTEuMTggMS4yMy0xLjI3IDEuNTcgMCAuMjQuMTUuMzQuNDIuMzQuMjggMCAxLjExLS4xMiAyLjEyLS4xMi41NiAwIDEuMDcuMDMgMS41LjA2LjIzLjA1LjU3LjA1Ljk5LjA1LjI4IDAgMS0uMTEgMS44Mi0uMTFzMS40OC4wNyAxLjk5LjExYy4xLjAxLjIuMDEuMy4wMS4wNCAwIC4wOC4wMS4xMi4wMWguMDFjLjMyLjAxLjYxIDAgLjc0IDAgLjMxIDAgLjgzLS4xMyAyLjItLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZ2LTcuMDljLS4wMy0uNDkuODgtMi40IDMuMDYtMi40IDIuMSAwIDMuMDMgMi4zMSAzLjAzIDMuODV2NS43NmMwIDItLjggMS41NS0xLjExIDItLjE3LjI1LjEzLjM3LjQ2LjM3cy44OC0uMTMgMS44Ny0uMTNjLjkzIDAgMS41My4wNyAxLjkxLjEtLjI5LjQyLS40OC45LS41MSAxLjQtLjE0IDIuNTEgMi45MyAzLjQxIDUuNTEgMy4zNyA1LjEyLS4wNyA2LjU3LTMuNjIgNS41MS01LjUxLTEuMDktMS45NS0zLjQ0LTEuODctNS42OC0xLjg2LTQuMi4wMi0zLjQxLTIuNTktMS42OS0yLjQ5LjQuMDIuMi4xNCAxLjU3LjE0IDIuNDMgMCA0Ljc2LTEuNjYgNC43LTQuMzgtLjAxLS4yMy4wNS0xLjAzLS41My0yLjE0IDEuMTQuMDEuNjkgMCAyLjQxIDBsLS4wMSA3LjYzYzAgMy40NSAxLjY0IDQuMDMgMi44NyA0LjAzIDEuNzQgMCAzLjAxLTEuMTUgMy4yNC0xLjY4IDEuMDMgMS4xIDIuNDYgMS42OCA0LjEyIDEuNjggMy4xOSAwIDUuNi0yLjkzIDUuNi02Ljc4IDAtNS44LTMuNjUtNi45Ni01LjYxLTYuOTZ6TTk1LjYyIDIxLjcyYy4yMS0uMDEuMjcuMDggMi42NC4xNyAyLjQ1LjA2IDMuMzMuNzcgMy40OSAxLjQuMjYgMS4xMi0uNTMgMy41Mi00LjA1IDMuMjktMi4yMi0uMTUtMi44Ny0xLjItMy4wMy0xLjQ0LS44NC0xLjE2LS4xNi0zLjM1Ljk1LTMuNDJ6bTIuMDEtNC41N2MtMi4wOCAwLTIuNzgtMi0yLjc4LTMuOTEgMC0xLjk2LjU5LTMuNTggMi42Ny0zLjU4IDIuMTEgMCAyLjk1IDIuMTYgMi45NSA0LjA3LjAxIDEuOTMtLjg3IDMuNDItMi44NCAzLjQyem0xNi45OSA0LjgxYy0zLjAzIDAtNC4yMi0zLjc2LTQuMjItNi44MiAwLTIuNjUgMS4wNC01LjEgMy41Ny01LjEgMy4wOCAwIDQuMTkgMy4yOSA0LjE5IDYuNTEuMDEgMy44Ny0xLjM2IDUuNDEtMy41NCA1LjQxelxcXCJcXHJcXG4gICAgICA+PC9wYXRoPlxcclxcbiAgICAgIDxwYXRoXFxyXFxuICAgICAgICBkPVxcXCJNMTMxLjExIDIwLjE5di01LjA4YzAtMi4zNC0uNzYtNS43Ni00LjIyLTUuNzYtMi41MSAwLTMuODEgMi4zOC0zLjc2IDIuMDFWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0xLjA0IDEuMDEtMy4wNyAxLjYyLS4xMy4wMy0uNS4wNC0uNTEuMjcgMCAuNjUgMi4wMy0uODQgMiAxLjY4djcuNjRjMCAyLTEuMzUgMS41Mi0xLjY2IDIuMDQtLjE1LjI3LjI1LjMzLjU5LjMzLjMxIDAgLjgzLS4xMyAyLjItLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZ2LTcuMDljLS4wMy0uNDkuODgtMi40IDMuMDYtMi40IDIuMSAwIDMuMDMgMi4zMSAzLjAzIDMuODV2NS43NmMtLjAzIDIuMjctLjggMS41NS0xLjExIDItLjE3LjI1LjEzLjM3LjQ2LjM3cy44OC0uMTMgMS44Ny0uMTNjMS4yNyAwIDEuODIuMTIgMi4xNi4xMi4yNiAwIC43My0uMi40NC0uNDQtLjY1LS40OS0xLjk0LjMxLTEuOTItMi4wM3pNNzcuNDEgOC4xNmMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNi4wMi4zNS43NyAxLjU3IDEuMDcgMS41N3ptLTE3LjMgNi45NmMtLjUxLS4yNC0xLjI3LS42OC0xLjY1LS44OC0xLjYzLS44OS0yLjI3LTEuNDctMi4zMS0yLjMtLjA4LTEuNDQgMS4xNS0yLjE5IDIuMjEtMi4wOCAyLjU0LS4wNCAyLjg4IDIuOCAzLjE0IDIuOC4zOSAwIC4yOC0uMzcuMjgtMS4yMSAwLS4yMS4wMy0xLjI3LS4xMy0xLjUyLS4zMS0uNDYtMi4xLS43NC0yLjU1LS43NC0uMTEgMC0uNTItLjAxLS42LS4wMi0uMTMgMC0uMjguMDItLjI4LjAyLTEuODEtLjAzLTMuNSAxLjExLTMuNDUgMy41My4wNSAyLjIxIDIuNjQgMy40NyA0LjA0IDQuMyAxLjA0LjU5IDIuMjYgMS4xNSAyLjI0IDIuNTctLjAyIDEuNjEtMS4yNyAyLjY4LTIuNjEgMi42LTMuMTUtLjA1LTIuNzItNC0zLjI4LTQtLjM5IDAtLjMxIDEtLjMxIDEuNTIgMCAuNTEtLjAxLjk4LS4wMSAxLjM4LS4wNy4zNi0uMi43LS41NC43Mi0xLjI0LjA4LS45NC0xLjktLjk0LTIuOTV2LTYuNDNjLS4wNi0xLjk3LTEuNTQtMy4yNS0zLjgtMy4yNS0zLjA5IDAtNS4zMSAzLjgxLTQuMjUgNSAuMjUuMjggMS4yNi0uOCAxLjMyLS44NnMuMDgtLjEzLjA4LS4xM2MtLjAxLTEuMy45Ny0yLjk1IDIuMzctMy4wOSAxLjYtLjE1IDIuNCAxLjA0IDIuNCAyLjY1djIuMDljLTYuMDYgMS4yMS02LjkzIDMuMjItNi45MyA0Ljg3IDAgMi4yMSAxLjU1IDMuMiAzLjIzIDMuMiAxLjQ1IDAgMi44OC0uNjkgMy45Ni0xLjguMzQgMS4wMyAxLjAxIDEuNjUgMi4wMiAxLjYyLjM1LS4wMS40MS4wOSAxLjQ2LS4zNy4zNy0uMS4zNS0uMDkuNzctLjAxLjU2LjE5IDEuMzIuNTcgMi42Ni41NyAyLjAzLjAzIDMuODUtMS44NSAzLjg1LTQuMTcgMC0xLjUtLjQzLTIuNDEtMi4zOS0zLjYzem0tOC40MyA0LjMyYzAgMS42NS0xLjY4IDIuNTItMi42IDIuNTItMS4zOCAwLTIuMzMtLjg5LTIuMzMtMi42NiAwLTIuNzMgMy4yOC0zLjIzIDQuOTQtMy42Ny0uMDEtLjAxLS4wMSAzLjgxLS4wMSAzLjgxem0yMTkuOTkuMTljLS4zMSAwLTEuMDcgMS4yOS0xLjA3IDEuNjMgMCAuMzQuNzcgMS42IDEuMDcgMS42LjMzIDAgMS4wNy0xLjIzIDEuMDctMS42cy0uNzMtMS42My0xLjA3LTEuNjN6bTMzLjcxIDEuMTJWOS45MmMwLS42MS0uMzQtLjc3LS40NC0uNzctLjM5IDAtLjYxLjEtLjg4LjE2LS4yNy4xLS41OC4yMy0xLjI5LjIzLS4xMyAwLS43OS0uMTItLjc2LjI1LjA0LjM3IDEuNTcuMTUgMS41OCAxLjIzdjcuODNjLS4xMiAxLjM3LTEuMjcgMi44OC0yLjY2IDIuODgtLjMyIDAtMi4zOS0uMjItMi4zNy0zLjY1VjkuOTJjMC0uNjEtLjM0LS43Ny0uNDQtLjc3LS4zOSAwLS42MS4xLS44OC4xNi0uMjcuMS0uNjEuMjItMS4zMi4xOS0uMzgtLjAyLS43OS0uMDctLjczLjI5LjA2LjMyIDEuNTkgMCAxLjU5IDEuMjN2Ny41MWMwIDIuNzQgMS42MSA0LjMyIDMuNTYgNC4zMiAxLjMgMCAyLjQ5LS4yOCAzLjI0LTEuOGguMDV2MS4zMmMwIC4xMy4wMy40OC4yMi40OC4zNyAwIC41Ni0uMy44My0uNC4yOS0uMDcuMzctLjMzIDEuMjgtLjQyLjM5LS4wNC44Mi0uMjQuODItLjUtLjExLS41My0xLjQuMDYtMS40LS43OHpNMjkwLjA5IDkuMTFjLTMuMjYgMC01Ljc3IDMuMjgtNS43NyA3LjEzIDAgMS43My40MiAzLjE1IDEuMTMgNC4yMy0uNzkuNTctMi4yMyAxLjEtNC45NiAxLjEtMi4xMyAwLTEuOTMtLjc0LTEuOTMtMi41NVY0LjU3YzAtMi42NiAxLjk5LTEuODkgMi4wMy0yLjM3LjAzLS4zNC0uMjgtLjI2LS42MS0uMjYtLjM4IDAtMS4wNy4xNS0yLjUyLjE1LTEuMjUgMC0yLjM0LS4xMi0yLjg4LS4xMi0uMzMgMC0uNjMuMS0uNTIuMzUuMjUuNTcgMi4xNC4wNSAyLjE0IDEuNjV2MTUuMWMwIDEuNDQuMjEgMi4zNi0uNDUgMi43My0uODEuNDktMS43Ni41MS0xLjY4LjgzLjA1LjE5LjQ1LjIuNjguMiAxLjAyIDAgMi40Mi0uMTMgMy40NC0uMTUgMS45NC0uMDYgMy44Ni4xMyA1Ljc5LjEzIDEuMTIgMCAxLjQtLjIyIDIuMjItMS4zMy4wMS0uMDIuMDItLjAzLjA0LS4wNSAxLjAxLjk0IDIuMzQgMS40NCAzLjg3IDEuNDQgMy4xOSAwIDUuNi0yLjkzIDUuNi02Ljc4LjAxLTUuODItMy42NS02Ljk4LTUuNjItNi45OHptLjI2IDEyLjg1Yy0zLjAzIDAtNC4yMi0zLjc2LTQuMjItNi44MiAwLTIuNjUgMS4wNC01LjEgMy41Ny01LjEgMy4wOCAwIDQuMTkgMy4yOSA0LjE5IDYuNTEuMDEgMy44Ny0xLjM2IDUuNDEtMy41NCA1LjQxem0tMzIuMDMtMTAuNDljLS43NS0uMzctMS44NS0xLjA0LTIuMzktMS4zNi0yLjM3LTEuMzctMy4zLTIuMjYtMy4zNy0zLjUyLS4xMi0yLjIxIDIuMDQtMy41MiAzLjU4LTMuMzUgMS45NiAwIDMuNTcgMS4xOSA0LjI0IDMuNzMuMDcuMjcuMzEuODkuNTYuODkuMjIgMCAuMjYtLjIuMjQtLjQ1bC0uMzMtNC4wMmMtLjAyLS4zMy0uMTQtLjQyLS4yNy0uNDItLjIyIDAtLjM2LjMzLS41Ni4zMy0uMzEgMC0xLjEtMS4xMS0zLjgtMS4wOS0uMTgtLjAxLS40My4wMi0uNDMuMDItMi42My0uMDUtNS4xIDEuNy01LjAyIDUuNC4wNyAzLjM3IDMuODUgNS4zIDUuODkgNi41OSAxLjUxLjkgMy4wOSAyLjM0IDMuMDQgMy45NS0uMDggMi40Ny0xLjYzIDQuMDgtMy41OCAzLjk0LTQuNTktLjA4LTMuOTYtNi4xMy00Ljc4LTYuMTMtLjU2IDAtLjQ1IDEuNTItLjQ2IDIuMzIgMCAxLjkyLS4wOCAzLjQ5LjE0IDMuNzcuMDcuMDkuMjkuMDUuNzQuMDUuOSAwIDIgMS4wNSA0LjY1IDEuMDUgMi45NS4wNSA1LjM4LTIuNjkgNS4zOC02LjI1LS4wMS0yLjE5LS42Mi0zLjU4LTMuNDctNS40NXptNTEuNjktMy4zMWMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNnMuNzYgMS41NyAxLjA3IDEuNTd6TTMxMi42NCAyMmMtLjUyLS4wMy0xLjYzLS4yMy0xLjYzLTEuMzVWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuODYtLjk2IDIuMDQtMS41MiAyLjA0LS44NC0uMDEtLjYzLjEtLjYzLjM2LjAzLjMxLjUzLjMzIDEuMzcuMzQuMjggMCAxLS4xMSAxLjgyLS4xMSAxLjA3IDAgMS44Ny4xMiAyLjQxLjEyLjMzIDAgLjc2LS44LjA3LS42OXptNS45OC02Ljg4Yy0uNTEtLjI0LTEuMjctLjY4LTEuNjUtLjg4LTEuNjMtLjg5LTIuMjctMS40Ny0yLjMxLTIuMy0uMDgtMS40NCAxLjE1LTIuMTkgMi4yMS0yLjA4IDIuNTQtLjA1IDIuODggMi44IDMuMTQgMi44LjM5IDAgLjI4LS4zNy4yOC0xLjIxIDAtLjIxLjAzLTEuMjctLjEzLTEuNTItLjMxLS40Ni0yLjExLS43NC0yLjU1LS43NC0uMTEgMC0uNTItLjAxLS42LS4wMS0uMTMgMC0uMjguMDEtLjI4LjAxLTEuODEtLjAzLTMuNSAxLjExLTMuNDQgMy41My4wNSAyLjIxIDIuNjQgMy40NiA0LjA0IDQuMyAxLjA0LjU5IDIuMjYgMS4xNSAyLjI0IDIuNTctLjAyIDEuNjEtMS4yNyAyLjY4LTIuNjEgMi42LTMuMTUtLjA1LTIuNzItNC0zLjI4LTQtLjM5IDAtLjMxIDEtLjMxIDEuNTItLjAxIDEuMjUtLjA2IDIuMjguMSAyLjQ2LjA1LjA2LjIuMDMuNS4wMy42MiAwIDEuMzguNjkgMy4xOS42OSAyLjAzLjAzIDMuODUtMS44NSAzLjg1LTQuMTctLjAxLTEuNDgtLjQzLTIuMzktMi4zOS0zLjZ6bS00OC43MyA1LjY2Yy0uMjYuMTMtLjg1Ljc3LTIuMjguNzctMS4wNyAwLTEuNjgtLjY0LTEuNzQtMnYtOC44MmwzLjM4LS4wMWMuMjIgMCAuNjUtMS40NC42Ny0xLjUyLjA0LS4xOC4xLS4zMy4xMi0uNDYuMDQtLjI4LS4xNy0uMy0uMzctLjAxLS4xNS4xNS0uMzIuNTUtLjk5LjU1aC0yLjgxYzAtMi40MS4wMy0zLjA0LS4zNS0zLjA0LS4zNiAwLS4zLjEtLjYzIDEuMTctLjU0IDEuNzktMi41MiAyLjU4LTMuMTUgMi45Ny0uMTUuMDgtLjE1LjExLS4xNS4xOS0uMDEuMjMuNzUuMTQgMi4zMS4xN2wtLjAxIDguMDdjMCAzLjQ1IDEuNjQgNC4wMyAyLjg3IDQuMDMgMS44NyAwIDMuMjEtMS4zNCAzLjI4LTEuOC4wMy0uMjUgMC0uMjgtLjE1LS4yNnptLTgxLjMyLTEuMDljLS41NyAwLTEuNDIgMS42Mi0zLjY2IDEuNjItMS41OCAwLTQuMTctMS41My00LjE3LTYuNjZoNi45Yy42IDAgLjg4LjAzLjg4LS41MiAwLTEuMjUtMS40LTQuOTUtNC41OS00Ljk1LTMuMjQgMC01LjA4IDMuMzMtNS4wOCA3LjMxIDAgMi4wNSAxLjM1IDYuMzggNS4yNCA2LjM4IDIuMzMgMCA0LjU5LTIuMjQgNC41OS0yLjk1LS4wMS0uMTEtLjAxLS4yMy0uMTEtLjIzem0tNS4wOC05LjgxYzEuNDIgMCAyLjg4IDEuNTYgMi44OCAzLjMgMCAuNDYtLjE1LjYyLS41Mi42MmgtNS4xMWMwLTEuNzEgMS4xMy0zLjkyIDIuNzUtMy45MnptLTMxLjctNy4zM2MuMS0uMTYtLjI1LS4yNC0uMzctLjI0LS40MiAwLTEuMzcuMTEtMS44LjExLS44OSAwLTEuNjQtLjA5LTIuNTMtLjA5LS4wNyAwLS40Ni4wNS0uNDYuMTgtLjAxLjYzIDIuMTMtLjExIDIuMTMgMi42djEwLjU3YzAgMy4xMy0uOTkgNi40MS01LjI5IDYuNDEtMy4wOSAwLTQuNzYtMS45NC00Ljc2LTYuMTdWNC40MWMwLTEuOTEgMS40OS0xLjQ5IDEuNTItMS45Mi4wMy0uNDEtMS4zMy0uMTYtMS40My0uMTYtLjcxIDAtMS4yMS4wOC0xLjk1LjA4LS42MiAwLTEuMzctLjEtMS45Ny0uMS0uMTIgMC0uNTMtLjAyLS42MS4xNS0uMjMuNTYgMS45MS4yNiAxLjkxIDEuODN2MTAuOTJjMCA0LjA4IDEuMTQgOC4wOCA3LjE3IDcuOTcgNy4xNC0uMTIgNy4wMS02LjU0IDcuMDEtNy44M1Y1LjEyYy4wMS0yLjQzIDEuMi0yLjIgMS40My0yLjU3em0yOC4xOSA3LjI0Yy4xNy0uMi4yMi0uNTMtLjU3LS40Ni0uNDUgMC0uNzcuMDgtMS4yMi4wOC0uNTcgMC0uNjgtLjAyLTEuMjItLjA0LS42OC0uMDItLjg2LjA1LS44Mi4yNS4xMi42IDEuNTUuMDEgMS4zNiAxLjgtLjE2IDEuNS0uNjUgMi43OS0xLjE0IDQuMDdsLTEuNzMgNC42Mi0yLjU0LTcuN2MtLjMxLS45Ni0uNDUtMS40Ny0uNDUtMS41NyAwLS45NiAxLjE2LS43NSAxLjQyLTEuMTQuMTYtLjI2LS4xNy0uNC0uNTQtLjQtLjMxIDAtLjY3LjExLTEuNjMuMTMtLjc5LjAyLTEuMzYuMDItMS43LS4wNS0uODktLjE2LS44Mi4zMy0uNTEuNDhzLjQ2LjAxLjkxIDEuMzZsMy45MSAxMS4wNmMuMDguMjIuMTguNzcuNTIuNzcuMzkgMCAuMzktLjM5Ljg4LTEuNjkgMCAwIDMuNzUtMTAuNDggNC0xMC44Ni41MS0uNzQuODktLjUgMS4wNy0uNzF6bTE0LjQ3LS41Yy0xLjA3IDAtMS44IDEuMjgtMi4zMyAyLjE2aC0uMDVWOS41M2MwLS4zLS4xNS0uNDgtLjMtLjQ4LS40MSAwLS43Mi44MS0yLjg3IDEuMzMtLjEzLjAzLS40OC4xLS40OC4yOCAwIC42NCAxLjgyLS4xOSAxLjgyIDEuOTN2OC4wN2MwIDEuMjUtMS4yOSAxLjEyLTEuMjkgMS43NyAwIC4xOC4wOC4yNy4yOC4yNy4xNyAwIC42My0uMTIgMi4zMi0uMTIgMS40MSAwIDIuMDIuMTIgMi4zNy4xMi4yOCAwIC40MS0uMDYuNDEtLjM0IDAtLjk4LTIuMjUuNDgtMi4yNS0yLjM0di02Ljg4YzAtLjQuNi0xLjggMS42NC0xLjguOTEgMCAxLjAyLjcgMS41LjcuMyAwIC45MS0uOTEuOTEtMS4zOC0uMDEtLjU4LTEuMTYtMS4zNy0xLjY4LTEuMzd6bTMyLjU1LjFjLS4yNyAwLS45Ni4wNC0xLjU5LjA0LS43NiAwLTEuMTMtLjA5LTEuNDUtLjA5LS40OCAwLS45NiAwLS44Ny4zMi4xLjM2IDEuNzMuMjMgMS43MyAyLjAxIDAgLjIzIDAgLjUyLS4zMyAxLjcxbC0yLjA4IDYuNjMtMi45LTguMTVzLS4xNC0uMjYtLjE0LS43OWMwLTEuMzIgMS41NC0xLjE3IDEuNi0xLjQxLjA1LS4xOS0uMjEtLjQtLjYyLS40aC0zLjYzYy0uMDIgMC0uMDMuMDEtLjA1LjAxaC0yLjgxYzAtMi40MS4wMy0zLjA0LS4zNS0zLjA0LS4zNiAwLS4zLjEtLjYzIDEuMTctLjU0IDEuNzktMi41MiAyLjU4LTMuMTUgMi45Ny0uMTUuMDgtLjE1LjExLS4xNS4xOS0uMDEuMjIuNzYuMTQgMi4zMS4xN2wtLjAxIDguMDdjMCAzLjQ1IDEuNjQgNC4wMyAyLjg3IDQuMDMgMS44NyAwIDMuMjEtMS4zMyAzLjI4LTEuOCAwLS4yNy0uMDQtLjI5LS4xOC0uMjctLjI2LjEzLS44NS43Ny0yLjI4Ljc3LTEuMDcgMC0xLjY4LS42NC0xLjc0LTJWMTAuN3MyLjUtLjAxIDMuMjEtLjAxYy4wNC4wNi4wOC4xMy4xLjE5bDIuOTkgOC40NWMuMjQuNjkuMzkuOTIuNjggMi4xNC4xOS43OS4xMiAxLjUxLjEyIDEuNTEtLjI5IDEuMjctMS4wNyAxLjk5LTIuMjYgNC4zNC0uMTIuMjIgMS43MS0uMDIgMS44MS0uMDUuMTUtLjA1LjEzLS4wOS4zMS0uNDJsMS4zMi0zLjkzIDMuNjktMTEuMzRjLjU0LTEuOTggMS4zOS0xLjYyIDEuNTMtMS44OS4xMi0uMTMgMC0uMy0uMzMtLjN6XFxcIlxcclxcbiAgICAgID48L3BhdGg+XFxyXFxuICAgICAgPHBhdGhcXHJcXG4gICAgICAgIGQ9XFxcIk0yMjIuMjIgMjIuNzZsLS4wNy4xOVYyM2wuMDctLjI0em0tMTQuNzQtMTQuNmMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNnMuNzYgMS41NyAxLjA3IDEuNTd6TTIxMC4xMSAyMmMtLjUyLS4wMy0xLjYzLS4yMy0xLjYzLTEuMzVWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuODYtLjk2IDIuMDQtMS41MiAyLjA0LS44NC0uMDEtLjYzLjEtLjYzLjM2LjAzLjMxLjUzLjMzIDEuMzcuMzQuMjggMCAxLS4xMSAxLjgyLS4xMSAxLjA3IDAgMS44Ny4xMiAyLjQxLjEyLjMzIDAgLjc2LS44LjA3LS42OXpNMTY2LjUyIDguMTZjLjMzIDAgMS4wNy0xLjIgMS4wNy0xLjU3IDAtLjM2LS43NC0xLjYtMS4wNy0xLjYtLjMgMC0xLjA3IDEuMjYtMS4wNyAxLjZzLjc3IDEuNTcgMS4wNyAxLjU3ek0xNjkuMTcgMjJjLS41Mi0uMDMtMS42My0uMjMtMS42My0xLjM1VjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjk4IDEuMDgtMi42MyAxLjY0LS4xMy4wMy0uMzcuMDYtLjM3LjI0IDAgLjY1IDEuNDktLjYxIDEuNDIgMS42OXY3LjI3Yy4wNiAxLjg2LS45NiAyLjA0LTEuNTIgMi4wNGgtLjE3Yy0uNTQtLjEtMS4wNi0uMzItMS4wNS0xLjc5di01LjA4YzAtMi4zNC0uNzYtNS43Ni00LjIyLTUuNzYtMi41MSAwLTMuODEgMi4zOC0zLjc2IDIuMDFWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0xLjA0IDEuMDEtMy4wNyAxLjYyLS4xMy4wMy0uNS4wNC0uNTEuMjcgMCAuNjUgMi4wMy0uODQgMiAxLjY4djcuNjRjMCAyLTEuMzUgMS41Mi0xLjY2IDIuMDQtLjE1LjI3LjI1LjMzLjU5LjMzLjMxIDAgLjgzLS4xMyAyLjItLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZ2LTcuMDljLS4wMy0uNDkuODgtMi40IDMuMDYtMi40IDIuMSAwIDMuMDMgMi4zMSAzLjAzIDMuODV2NS43NmMtLjAzIDIuMjctLjggMS41NS0xLjExIDItLjE3LjI1LjEzLjM3LjQ2LjM3cy44OC0uMTMgMS44Ny0uMTNjMS4yNyAwIDEuODIuMTIgMi4xNi4xMi4wNCAwIC4wOS0uMDEuMTMtLjAxLjExIDAgLjIxLjAxLjM0LjAxLjI4IDAgMS0uMTEgMS44Mi0uMTEgMS4wNyAwIDEuODcuMTIgMi40MS4xMi4zNC4wMi43NS0uNzguMDgtLjY3em0zMi43Mi02Ljg5Yy0uNTEtLjI0LTEuMjctLjY4LTEuNjUtLjg4LTEuNjMtLjg5LTIuMjctMS40Ny0yLjMxLTIuMy0uMDgtMS40NCAxLjE1LTIuMTkgMi4yMS0yLjA4IDIuNTQtLjA1IDIuODggMi44IDMuMTQgMi44LjM5IDAgLjI4LS4zNy4yOC0xLjIxIDAtLjIxLjAzLTEuMjctLjEzLTEuNTItLjMxLS40Ni0yLjEtLjc0LTIuNTUtLjc0LS4xMSAwLS41Mi0uMDEtLjYtLjAyLS4xMyAwLS4yOC4wMi0uMjguMDItMS44MS0uMDMtMy41IDEuMTEtMy40NSAzLjUzLjA1IDIuMjEgMi42NCAzLjQ2IDQuMDQgNC4zIDEuMDQuNTkgMi4yNiAxLjE1IDIuMjQgMi41Ny0uMDIgMS42Mi0xLjI3IDIuNjgtMi42MSAyLjYtMy4xNS0uMDUtMi43Mi00LTMuMjgtNC0uMzkgMC0uMzEgMS0uMzEgMS41MiAwIDEuMjUtLjA2IDIuMjguMSAyLjQ2LjA1LjA2LjIuMDMuNS4wMy42MiAwIDEuMzguNjkgMy4xOS42OSAyLjAzLjAzIDMuODUtMS44NSAzLjg1LTQuMTcgMC0xLjQ3LS40Mi0yLjM4LTIuMzgtMy42elxcXCJcXHJcXG4gICAgICA+PC9wYXRoPlxcclxcbiAgICA8L2c+XFxyXFxuICA8L3N2Zz5cXHJcXG48L2Rpdj5cXHJcXG48aGVhZGVyIHJvbGU9XFxcImJhbm5lclxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICA8YSBjbGFzcz1cXFwic2l0ZS10aXRsZVxcXCIgaHJlZj1cXFwiZmlsZXMvaW5kZXguaHRtbFxcXCI+TnVyc2VyeSBTY2hvb2w8L2E+XFxyXFxuICAgIDxuYXYgY2xhc3M9XFxcImFjdGlvbi1idXR0b25zXFxcIj5cXHJcXG4gICAgICA8YSBjbGFzcz1cXFwiYWN0aW9uLWJ1dHRvblxcXCIgaHJlZj1cXFwiZmlsZXMvYXBwbHkuaHRtbFxcXCI+QXBwbHk8L2E+XFxyXFxuICAgICAgPGEgY2xhc3M9XFxcImFjdGlvbi1idXR0b25cXFwiIGhyZWY9XFxcIm1haWx0bzpudXJzZXJ5QHd1c3RsLmVkdVxcXCJcXHJcXG4gICAgICAgID5Db250YWN0IFVzPC9hXFxyXFxuICAgICAgPlxcclxcbiAgICA8L25hdj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBpZD1cXFwibWFpbi1tZW51LWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyXFxcIj5cXHJcXG4gICAgICAgIDxhIGlkPVxcXCJob21lXFxcIiBocmVmPVxcXCJmaWxlcy9pbmRleC5odG1sXFxcIj5Ib21lPC9hPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICBcXHJcXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGJ0blxcXCI+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPGEgaWQ9XFxcImFib3V0XFxcIiBocmVmPVxcXCJmaWxlcy9hYm91dC5odG1sXFxcIj5BYm91dDwvYT5cXHJcXG4gICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJjdXJyaWN1bHVtLW92ZXJ2aWV3XFxcIiBocmVmPVxcXCJmaWxlcy9jdXJyaWN1bHVtX292ZXJ2aWV3Lmh0bWxcXFwiXFxyXFxuICAgICAgICAgICAgICA+Q3VycmljdWx1bSBPdmVydmlldzwvYT5cXHJcXG4gICAgICAgICAgICA8YSBpZD1cXFwidHVpdGlvblxcXCIgaHJlZj1cXFwiZmlsZXMvdHVpdGlvbi5odG1sXFxcIj5UdWl0aW9uPC9hPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkcm9wYnRuXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBpZD1cXFwiY2xhc3Nyb29tc1xcXCIgaHJlZj1cXFwiZmlsZXMvY2xhc3Nyb29tcy5odG1sXFxcIj5DbGFzc3Jvb21zIDwvYT5cXHJcXG4gICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJ0ZWRkeS1iZWFyc1xcXCIgaHJlZj1cXFwiZmlsZXMvdGVkZHlfYmVhcnMuaHRtbFxcXCI+VGVkZHkgQmVhcnM8L2E+XFxyXFxuICAgICAgICAgICAgPGEgaWQ9XFxcInBhbmRhLWJlYXJzXFxcIiBocmVmPVxcXCJmaWxlcy9wYW5kYV9iZWFycy5odG1sXFxcIj5QYW5kYSBCZWFyczwvYT5cXHJcXG4gICAgICAgICAgICA8YSBpZD1cXFwiYmVhci1jdWJzXFxcIiBocmVmPVxcXCJmaWxlcy9iZWFyX2N1YnMuaHRtbFxcXCI+QmVhciBDdWJzPC9hPlxcclxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJiaWctYmVhcnNcXFwiIGhyZWY9XFxcImZpbGVzL2JpZ19iZWFycy5odG1sXFxcIj5CaWcgQmVhcnM8L2E+XFxyXFxuICAgICAgICAgICAgPGEgaWQ9XFxcInN1bi1iZWFyc1xcXCIgaHJlZj1cXFwiZmlsZXMvc3VuX2JlYXJzLmh0bWxcXFwiPlN1biBCZWFyczwvYT5cXHJcXG4gICAgICAgICAgICA8YSBpZD1cXFwiYmVhci10cmFja3NcXFwiIGhyZWY9XFxcImZpbGVzL2JlYXJfdHJhY2tzLmh0bWxcXFwiPkJlYXIgVHJhY2tzPC9hPlxcclxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJlbnJpY2htZW50LXByb2dyYW1cXFwiIGhyZWY9XFxcImZpbGVzL2VucmljaG1lbnRfcHJvZ3JhbXMuaHRtbFxcXCJcXHJcXG4gICAgICAgICAgICAgID5FbnJpY2htZW50IFByb2dyYW08L2FcXHJcXG4gICAgICAgICAgICA+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8YSBpZD1cXFwic3VtbWVyLWNhbXBcXFwiIGhyZWY9XFxcImZpbGVzL3N1bW1lcl9jYW1wLmh0bWxcXFwiPlN1bW1lciBDYW1wPC9hPlxcclxcbiAgICAgICAgPGEgaWQ9XFxcInN0YWZmXFxcIiBocmVmPVxcXCJmaWxlcy9zdGFmZi5odG1sXFxcIj5TdGFmZjwvYT5cXHJcXG4gICAgICAgIDxhIGlkPVxcXCJjYWxlbmRhclxcXCIgaHJlZj1cXFwiZmlsZXMvY2FsZW5kYXIuaHRtbFxcXCI+Q2FsZW5kYXI8L2E+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRyb3BidG5cXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJudXJzZXJ5LXNjaG9vbC1tZXJjaGFuZGlzZVxcXCIgaHJlZj1cXFwiZmlsZXMvcGFyZW50X3Jlc291cmNlcy5odG1sXFxcIj5cXHJcXG4gICAgICAgICAgICBGb3IgUGFyZW50cyAmIEZhbWlseVxcclxcbiAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxhXFxyXFxuICAgICAgICAgICAgICBpZD1cXFwibnVyc2VyeS1zY2hvb2wtbWVyY2hhbmRpc2VcXFwiXFxyXFxuICAgICAgICAgICAgICBocmVmPVxcXCJmaWxlcy9udXJzZXJ5X3NjaG9vbF9tZXJjaGFuZGlzZS5odG1sXFxcIlxcclxcbiAgICAgICAgICAgICAgPk51cnNlcnkgU2Nob29sIE1lcmNoYW5kaXNlPC9hXFxyXFxuICAgICAgICAgICAgPlxcclxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJwYXJlbnQtYXNzb2NpYXRpb25cXFwiIGhyZWY9XFxcImZpbGVzL3BhcmVudF9hc3NvY2lhdGlvbi5odG1sXFxcIlxcclxcbiAgICAgICAgICAgICAgPlBhcmVudCBBc3NvY2lhdGlvbjwvYVxcclxcbiAgICAgICAgICAgID5cXHJcXG4gICAgICAgICAgICA8YSBpZD1cXFwiZ2V0LWludm9sdmVkXFxcIiBocmVmPVxcXCJmaWxlcy9nZXRfaW52b2x2ZWQuaHRtbFxcXCI+R2V0IEludm9sdmVkPC9hPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvaGVhZGVyPlxcclxcblwiO1xuIiwiaW1wb3J0IHsgRCB9IGZyb20gXCIuLy4uL2NvcmUvZG9tL2RvY3VtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2xpZGVzaG93IHtcclxuICBwdWJsaWMgc3RhdGljIHNldHVwQWxsKCkge1xyXG4gICAgU2xpZGVzaG93LmRpc2NhcmRBbGwoKTtcclxuICAgIGNvbnN0IHNsaWRlc2hvd3MgPSBELmNsYXooXCJzbGlkZXNob3dcIik7XHJcbiAgICBmb3IgKGxldCBzc0luZGV4ID0gMDsgc3NJbmRleCA8IHNsaWRlc2hvd3MubGVuZ3RoOyArK3NzSW5kZXgpIHtcclxuICAgICAgY29uc3QgZWxlbSA9IHNsaWRlc2hvd3MuaXRlbShzc0luZGV4KTtcclxuICAgICAgaWYgKGVsZW0gPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIFNsaWRlc2hvdy5zbGlkZXNob3dzLnB1c2gobmV3IFNsaWRlc2hvdyhlbGVtKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGRpc2NhcmRBbGwoKSB7XHJcbiAgICBTbGlkZXNob3cuc2xpZGVzaG93cyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgc2xpZGVzaG93czogU2xpZGVzaG93W10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBzbGlkZUluZGV4ID0gMDtcclxuICBwcml2YXRlIHNsaWRlQ291bnQgPSAwO1xyXG4gIHByaXZhdGUgc2xpZGVzOiBFbGVtZW50W10gPSBbXTtcclxuICBwcml2YXRlIGRvdHM6IEVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG91dGVyOiBFbGVtZW50KSB7XHJcbiAgICBELmVhY2hSZWN1cih0aGlzLm91dGVyLCAoZWxlbSkgPT4ge1xyXG4gICAgICBjb25zdCBjTGlzdCA9IGVsZW0uY2xhc3NMaXN0O1xyXG4gICAgICBpZiAoY0xpc3QuY29udGFpbnMoXCJwcmV2LXNsaWRlc2hvdy1idXR0b25cIikpIHtcclxuICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgXCJjbGlja1wiLCAoKSA9PiB0aGlzLm1pbnVzU2xpZGUoMSkpO1xyXG4gICAgICB9IGVsc2UgaWYgKGNMaXN0LmNvbnRhaW5zKFwibmV4dC1zbGlkZXNob3ctYnV0dG9uXCIpKSB7XHJcbiAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sIFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5wbHVzU2xpZGUoMSkpO1xyXG4gICAgICB9IGVsc2UgaWYgKGNMaXN0LmNvbnRhaW5zKFwic2xpZGVzaG93LWVudHJ5XCIpKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXMucHVzaChlbGVtKTtcclxuICAgICAgfSBlbHNlIGlmIChjTGlzdC5jb250YWlucyhcInNsaWRlc2hvdy1kb3RcIikpIHtcclxuICAgICAgICB0aGlzLmRvdHMucHVzaChlbGVtKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG90cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICBELmFkZEV2ZW50TGlzdGVuZXIodGhpcy5kb3RzW2ldLCBcImNsaWNrXCIsICgpID0+IHRoaXMuc2hvd1NsaWRlKGkpKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2xpZGVDb3VudCA9IHRoaXMuc2xpZGVzLmxlbmd0aDtcclxuICAgIHRoaXMuc2hvd1NsaWRlKHRoaXMuc2xpZGVJbmRleCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGx1c1NsaWRlKG46IG51bWJlcikge1xyXG4gICAgdGhpcy5zaG93U2xpZGUoKHRoaXMuc2xpZGVJbmRleCArPSBuKSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBtaW51c1NsaWRlKG46IG51bWJlcikge1xyXG4gICAgdGhpcy5zaG93U2xpZGUoKHRoaXMuc2xpZGVJbmRleCAtPSBuKSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBzaG93U2xpZGUoaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5zbGlkZUluZGV4ID0gaW5kZXggJSB0aGlzLnNsaWRlQ291bnQ7XHJcbiAgICB0aGlzLnNsaWRlSW5kZXggPSBNYXRoLm1heCh0aGlzLnNsaWRlSW5kZXgsIC0xICogdGhpcy5zbGlkZUluZGV4KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbGlkZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgKHRoaXMuc2xpZGVzW2ldIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmRvdHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuICAgICh0aGlzLnNsaWRlc1t0aGlzLnNsaWRlSW5kZXhdIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgdGhpcy5kb3RzW3RoaXMuc2xpZGVJbmRleF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcGFyYW1zIH0gZnJvbSBcIi4uL2NvcmUvdXRpbHMvcV9wYXJhbXNcIjtcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLy4uL2NvcmUvZGF0YS1sb2cvZGF0YVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25FbnVtIH0gZnJvbSBcIi4vLi4vY29yZS9kYXRhLWxvZy9ldmVudFwiO1xyXG5pbXBvcnQgeyBEIH0gZnJvbSBcIi4vLi4vY29yZS9kb20vZG9jdW1lbnRcIjtcclxuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi8uLi9jb3JlL2RvbS9lbGVtZW50c1wiO1xyXG5pbXBvcnQgeyBTY3JvbGwgfSBmcm9tIFwiLi8uLi9jb3JlL2RvbS9zY3JvbGxcIjtcclxuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gXCIuLy4uL2NvcmUvcm91dGVyL2hpc3RvcnlcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJNb2RlLCBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiLi8uLi9jb3JlL3JvdXRlci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gXCIuLy4uL2NvcmUvdHJhY2tlci90cmFja2VyXCI7XHJcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtIH0gZnJvbSBcIi4vLi4vY29yZS91dGlscy9jb25zb2xlX3dyYXBwZXJcIjtcclxuaW1wb3J0IHsgSFRNTExvYWRlciB9IGZyb20gXCIuLy4uL2NvcmUvdXRpbHMvaHRtbF9sb2FkZXJcIjtcclxuaW1wb3J0IHsgSURHZW5lcmF0b3IgfSBmcm9tIFwiLi8uLi9jb3JlL3V0aWxzL2lkX2dlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyB3YWl0VW50aWxSZWFkeSB9IGZyb20gXCIuLy4uL2NvcmUvdXRpbHMvcmVhZHlcIjtcclxuaW1wb3J0IHsgc2NlbmFyaW9zLCBTY2VuYXJpbyB9IGZyb20gXCIuLy4uL2NvcmUvdXRpbHMvc2NlbmFyaW9zXCI7XHJcblxyXG5jb25zdCBzZXR1cCA9IGFzeW5jICgpID0+IHtcclxuICBhd2FpdCB3YWl0VW50aWxSZWFkeSgpO1xyXG4gIGNvbnN0IHNjZW5hcmlvID0gc2NlbmFyaW9zLmZpbmQoKHNjZW4pID0+IHNjZW4udGFnID09PSBwYXJhbXMudGFnKTtcclxuICBpZiAoIXBhcmFtcy5zYW5kYm94KSB7XHJcbiAgICBpZiAoc2NlbmFyaW8gPT09IG51bGwgfHwgc2NlbmFyaW8gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBhbGVydChcIlRoaXMgSElUIGlzIGJyb2tlbiBhbmQgY2Fubm90IGJlIGNvbXBsZXRlZCBhdCB0aGlzIHRpbWUuXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVHJhY2tlci5sb2FkU2NlbmFyaW8oc2NlbmFyaW8gYXMgU2NlbmFyaW8pO1xyXG4gICAgfVxyXG4gIH1cclxuICBUcmFja2VyLnN0YXJ0KHtcclxuICAgIGtleVByZWZpeDogXCJpbmZvcm1hdGlvbi1mb3JhZ2luZ1wiLFxyXG4gICAgYnVja2V0TmFtZTogXCJjc2UtMjU2LWxvZ1wiLFxyXG4gICAgYWxsb3dTdWJtaXNzaW9uOiB7XHJcbiAgICAgIGFsbG93KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB0ZXh0QXJlYSA9IEQuaWQoXCJ0ZXh0LWFyZWFcIikgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRleHRBcmVhLnZhbHVlKTtcclxuICAgICAgICAgIGlmICh0ZXh0QXJlYS52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJZb3UgbXVzdCBmaWxsIG91dCB0aGUgdGV4dCBib3ggdG8gdHVybiB0aGlzIEhJVCBpbi5cIjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICByZXR1cm4gXCJUaGVyZSB3YXMgYW4gZXJyb3IgZmlsbCBvdXQgdGhlIGZvcm0gYW5kIHRyeSBhZ2Fpbi5cIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHByZVN1Ym1pdCgpIHtcclxuICAgICAgICBkYXRhLmRhdGEucmVzcG9uc2UgPSAoRC5pZChcInRleHQtYXJlYVwiKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGRlYnVnTGV2ZWw6IERlYnVnTGV2ZWxFbnVtLk5PTkUsXHJcblxyXG4gICAgYXN5bmMgc2V0dXAoKSB7XHJcbiAgICAgIC8vIGNvbmZpZ3VyZSByb3V0ZXJcclxuICAgICAgUm91dGVyLmRlZmF1bHRBbGxvd2FuY2VzT24oKTtcclxuICAgICAgUm91dGVyLmNvbmZpZ3VyZShcclxuICAgICAgICBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1vZGU6IFJvdXRlck1vZGUuU1RBTkRBUkRfQUxMT1dBTkNFUyxcclxuICAgICAgICAgICAgbW9kdWxlOiBSb3V0ZXJNb2R1bGUuQSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IG1vZGU6IFJvdXRlck1vZGUuT0ZGLCBtb2R1bGU6IFJvdXRlck1vZHVsZS5GT1JNIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1vZGU6IFJvdXRlck1vZGUuU1RBTkRBUkRfQUxMT1dBTkNFUyxcclxuICAgICAgICAgICAgbW9kdWxlOiBSb3V0ZXJNb2R1bGUuSU1HLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiZmlsZXMvXCJcclxuICAgICAgKTtcclxuICAgICAgSGlzdG9yeS5zZXR1cCh3aW5kb3cubG9jYXRpb24uaHJlZiwgeyB3cmFwcGVyOiB0cnVlIH0pO1xyXG4gICAgICAvLyBjb25maWd1cmUgaHRtbCBsb2FkZXIgcG9zdCBvcGVyYXRpb25cclxuICAgICAgSFRNTExvYWRlci5maW5pc2goKTtcclxuICAgICAgSFRNTExvYWRlci5yZWdpc3RlclBvc3RMb2FkRnVuYygoKSA9PiB7XHJcbiAgICAgICAgSURHZW5lcmF0b3IucmVzZXQoKTtcclxuICAgICAgICBJREdlbmVyYXRvci5hdHRhY2hJZHNUb0FsbEVsZW1lbnRzKCk7XHJcbiAgICAgICAgUm91dGVyLnNldHVwKEVsZW1lbnRzLmh0bWxMb2MpO1xyXG4gICAgICAgIFNjcm9sbC5wcm9taXNlKDApO1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gY29uZmlndXJlIGxpc3RlbmVycyBvbiBodG1sIGxvY1xyXG4gICAgICBELmFkZEV2ZW50TGlzdGVuZXIoRWxlbWVudHMuaHRtbExvYywgQWN0aW9uRW51bS5DTElDSywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBldiA9IGUgYXMgTW91c2VFdmVudDtcclxuICAgICAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgICB4OiBldi5jbGllbnRYLFxyXG4gICAgICAgICAgeTogZXYuY2xpZW50WSxcclxuICAgICAgICAgIGlkOiAoZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIFRyYWNrZXIuZ2V0RXZlbnREaXNwYXRjaEZ1bmMoQWN0aW9uRW51bS5DTElDSykob2JqKTtcclxuICAgICAgfSk7XHJcbiAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihFbGVtZW50cy5kb2N1bWVudCwgXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGV2ID0gZSBhcyBLZXlib2FyZEV2ZW50O1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICAgIGtleTogZXYua2V5LFxyXG4gICAgICAgICAgaWQ6IChldi5zcmNFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5pZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIFRyYWNrZXIuZ2V0RXZlbnREaXNwYXRjaEZ1bmMoQWN0aW9uRW51bS5CVVRUT04pKG9iaik7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBTUEVDSUFMIENBU0U6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCBkb2VzIG5vdCBiZWhhdmUgdGhlIHNhbWUgd2F5IGFzIGRvY3VtZW50IHNvIHRoZSBiZWxvdyBmdW5jdGlvbiBtdXN0IGJlaGF2ZSBkaWZmZXJlbnRseSB0aGFuIHRoZSBsaXN0ZW5lcnMgYWJvdmUuXHJcbiAgICAgIGNvbnN0IHNFbGVtID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCBhcyBFbGVtZW50O1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZHggPSBzRWxlbS5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIGNvbnN0IGR5ID0gc0VsZW0uc2Nyb2xsVG9wO1xyXG4gICAgICAgIGNvbnN0IGR0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgTWF0aC5hYnMoVHJhY2tlci5sYXN0UG9zLnggLSBkeCkgPiAxMCB8fFxyXG4gICAgICAgICAgKE1hdGguYWJzKFRyYWNrZXIubGFzdFBvcy55IC0gZHkpID4gMTAgJiZcclxuICAgICAgICAgICAgZHRpbWUgLSBUcmFja2VyLmxhc3RQb3MudGltZSA+IDEwMClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIFRyYWNrZXIubGFzdFBvcy54ID0gZHg7XHJcbiAgICAgICAgICBUcmFja2VyLmxhc3RQb3MueSA9IGR5O1xyXG4gICAgICAgICAgVHJhY2tlci5sYXN0UG9zLnRpbWUgPSBkdGltZTtcclxuICAgICAgICAgIGNvbnN0IG9iaiA9IHsgeDogZHgsIHk6IGR5IH07XHJcbiAgICAgICAgICBUcmFja2VyLmdldEV2ZW50RGlzcGF0Y2hGdW5jKEFjdGlvbkVudW0uU0NST0xMKShvYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIC8vIGNvbmZpZ3VyZSB0cmFja2VkIGV2ZW50c1xyXG4gICAgICBUcmFja2VyLnJlZ2lzdGVyRXZlbnQoQWN0aW9uRW51bS5ISVNUT1JZKTtcclxuICAgICAgVHJhY2tlci5yZWdpc3RlckV2ZW50KEFjdGlvbkVudW0uQlVUVE9OKTtcclxuICAgICAgVHJhY2tlci5yZWdpc3RlckV2ZW50KEFjdGlvbkVudW0uQ0xJQ0spO1xyXG4gICAgICBUcmFja2VyLnJlZ2lzdGVyRXZlbnQoQWN0aW9uRW51bS5TQ1JPTEwpO1xyXG4gICAgICAvLyBsb2FkIGZpcnN0IHBhZ2VcclxuICAgICAgYXdhaXQgUm91dGVyLmxvYWQoXCJmaWxlcy9pbmRleC5odG1sXCIpO1xyXG4gICAgfSxcclxuICB9KTtcclxufTtcclxuXHJcbnNldHVwKCk7XHJcbiJdfQ==
