/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data/genres-data.js":
/*!*********************************!*\
  !*** ./src/data/genres-data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var genres = [{
  "id": 28,
  "name": "Action"
}, {
  "id": 12,
  "name": "Adventure"
}, {
  "id": 16,
  "name": "Animation"
}, {
  "id": 35,
  "name": "Comedy"
}, {
  "id": 80,
  "name": "Crime"
}, {
  "id": 99,
  "name": "Documentary"
}, {
  "id": 18,
  "name": "Drama"
}, {
  "id": 10751,
  "name": "Family"
}, {
  "id": 14,
  "name": "Fantasy"
}, {
  "id": 36,
  "name": "History"
}, {
  "id": 27,
  "name": "Horror"
}, {
  "id": 10402,
  "name": "Music"
}, {
  "id": 9648,
  "name": "Mystery"
}, {
  "id": 10749,
  "name": "Romance"
}, {
  "id": 878,
  "name": "Science Fiction"
}, {
  "id": 10770,
  "name": "TV Movie"
}, {
  "id": 53,
  "name": "Thriller"
}, {
  "id": 10752,
  "name": "War"
}, {
  "id": 37,
  "name": "Western"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genres);

/***/ }),

/***/ "./src/data/movie-data.js":
/*!********************************!*\
  !*** ./src/data/movie-data.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var MovieData = /*#__PURE__*/function () {
  function MovieData() {
    _classCallCheck(this, MovieData);
  }
  _createClass(MovieData, null, [{
    key: "getMovies",
    value: function getMovies(url) {
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(console.log("Error Getting Data"));
        }
      });
    }
  }]);
  return MovieData;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieData);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _movie_container_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie-container.js */ "./src/movie-container.js");
/* harmony import */ var _data_genres_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/genres-data.js */ "./src/data/genres-data.js");
/* harmony import */ var _data_movie_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/movie-data.js */ "./src/data/movie-data.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var main = function main() {
  var KEY = 'api_key=32d35d1635fdcb0a5702bfaf481587f4';
  var BASE_URL = 'https://api.themoviedb.org/3';
  var IMG_URL = 'https://image.tmdb.org/t/p/w500';
  var API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + KEY;
  var searchURL = BASE_URL + '/search/movie?' + KEY;
  var movieContainerElement = document.querySelector('movie-container');
  var formElement = document.getElementById('search-form');
  var search = document.getElementById('searchElement');
  var genreElement = document.getElementById('genres');
  var selectedGenre = [];
  var setGenres = function setGenres() {
    genreElement.innerHTML = '';
    _data_genres_data_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(function (genre) {
      var item = document.createElement('div');
      item.classList.add('genre');
      item.id = genre.id;
      item.innerText = genre.name;
      item.addEventListener('click', function () {
        if (selectedGenre.length == 0) {
          selectedGenre.push(genre.id);
        } else {
          if (selectedGenre.includes(genre.id)) {
            selectedGenre.forEach(function (id, index) {
              if (id == genre.id) {
                selectedGenre.splice(index, 1);
              }
            });
          } else {
            selectedGenre.push(genre.id);
          }
        }
        console.log(selectedGenre);
        getMovies(API_URL + '&with_genres=' + encodeURI(selectedGenre.join(','))); //menggabungkan array yang berisi id ke 1 string dan dibatasi dengan koma
        activeGenre();
      });
      genreElement.append(item);
    });
  };
  setGenres();
  var activeGenre = function activeGenre() {
    var genreitem = document.querySelectorAll('.genre');
    genreitem.forEach(function (genre) {
      genre.classList.remove('highlight');
    });
    if (selectedGenre.length != 0) {
      selectedGenre.forEach(function (id) {
        var highlightgenre = document.getElementById(id);
        highlightgenre.classList.add('highlight');
      });
    }
  };
  var getMovies = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
      var result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _data_movie_data_js__WEBPACK_IMPORTED_MODULE_2__["default"].getMovies(url);
            case 3:
              result = _context.sent;
              console.log(result);
              renderAllMovie(result);
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));
    return function getMovies(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  getMovies(API_URL);
  var movieItem = document.querySelector('movie-item');
  var renderAllMovie = function renderAllMovie(movies) {
    movieContainerElement.movies = movies;

    // movieContainerElement.innerHTML = '';
    // movies.forEach(movie => {
    //     const {title, poster_path, vote_average, overview} = movie;

    //     const item = document.createElement('div');
    //     item.classList.add('movie-item');
    //     item.innerHTML = `
    //         <img src="${IMG_URL+poster_path}" alt="${title}">

    //         <div class="movie-info">
    //             <h3>${title}</h3>
    //             <span class="${getColor(vote_average)}">${vote_average}</span>
    //         </div>

    //         <div class="description">
    //             ${overview}
    //         </div>
    //     `

    //     movieContainerElement.appendChild(item);
    // })
  };

  var getColor = function getColor(vote) {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  };
  formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    var keyword = search.value;
    if (keyword) {
      getMovies(searchURL + '&query=' + keyword);
    } else {
      getMovies(API_URL);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);

/***/ }),

/***/ "./src/movie-container.js":
/*!********************************!*\
  !*** ./src/movie-container.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _movie_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie-item.js */ "./src/movie-item.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var movieList = /*#__PURE__*/function (_HTMLElement) {
  _inherits(movieList, _HTMLElement);
  var _super = _createSuper(movieList);
  function movieList() {
    _classCallCheck(this, movieList);
    return _super.apply(this, arguments);
  }
  _createClass(movieList, [{
    key: "movies",
    set: function set(movies) {
      this._movies = movies;
      this.render;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      this.shadowDOM.innerHTML = '';
      this._movies.forEach(function (item) {
        var movieItem = document.createElement('movie-item');
        movieItem.movie = item;
        _this.shadowDOM.appendChild(movieItem);
      });
    }
  }]);
  return movieList;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('movie-container', movieList);

/***/ }),

/***/ "./src/movie-item.js":
/*!***************************!*\
  !*** ./src/movie-item.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_movie_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/movie-data */ "./src/data/movie-data.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MovieItem = /*#__PURE__*/function (_HTMLElement) {
  _inherits(MovieItem, _HTMLElement);
  var _super = _createSuper(MovieItem);
  function MovieItem() {
    _classCallCheck(this, MovieItem);
    return _super.apply(this, arguments);
  }
  _createClass(MovieItem, [{
    key: "movie",
    set: function set(data) {
      this._data = data;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.shadowDOM.innerHTML = "\n        <style>\n            * {\n                margin : 0;\n                padding : 0;\n            }\n                :host {\n                display: block;\n                margin-bottom: 18px;\n                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n                border-radius: 10px;\n                overflow: hidden;\n            }\n            .movie-info {\n                color: white;\n                display: flex;\n                align-items: center;\n                justify-content: space-between;\n                padding: 0.5rem 1rem 1rem;\n                letter-spacing: 0.5px;\n            }\n        \n            .movie-info h3 {\n                margin-top: 0;\n            }\n            \n            .movie-info span {\n                background-color: #145455;\n                padding: 0.25rem 0.5rem;\n                border-radius: 3px;\n                font-weight: bold;\n            }\n        \n            .movie-info span.green {\n                    color: lightgreen;\n            }\n            .movie-info span.orange {\n                    color: orange;\n            }\n            .movie-info span.red {\n                    color: red;\n            }\n            \n            .description {\n                    position: absolute;\n                    left: 0;\n                    right: 0;\n                    bottom: 0;\n                    background-color: white;\n                    padding: 1rem;\n                    max-height: 100%;\n                    transform: translateY(101%);\n                    transition: .2s ease;\n            }\n        </style>\n\n            <img src=\"".concat('https://image.tmdb.org/t/p/w500' + this._data.poster_path, "\" alt=\"").concat(this._data.title, "\">\n\n            <div class=\"movie-info\">\n                <h3>").concat(this._data.title, "</h3>\n                <span class=\"").concat(getColor(this._data.vote_average), "\">").concat(this._data.vote_average, "</span>\n            </div>\n\n            <div class=\"description\">\n                ").concat(this._data.overview, "\n            </div>\n    ");
    }
  }]);
  return MovieItem;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('movie-item', MovieItem);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Raleway&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n     margin: 0;\r\n     padding: 0;\r\n     box-sizing: border-box;\r\n}\r\na {\r\n     text-decoration: none;\r\n     color: black;\r\n}\r\nli {\r\n     list-style: none;\r\n}\r\nbody {\r\n     font-size: 100%;\r\n}\r\nbody {\r\n     font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.search-bar {\r\n     float: right;\r\n     margin-top: 10px;\r\n}\r\n.search-bar input[type=text]{\r\n     padding: 6px;\r\n     border: none;\r\n     font-size: 17px;\r\n     background-color: #E2DCC8;\r\n}\r\n\r\n.search-bar button {\r\n     float: right;\r\n     padding: 6px 10px;\r\n     font-size: 17px;\r\n     cursor: pointer;\r\n     background-color: #145455;\r\n     color: #E2DCC8;\r\n     border: none;\r\n     transition: .5s ease;\r\n}\r\n.search-bar button:hover {\r\n     background-color: #0F3D3E;\r\n}\r\nnav {\r\n     overflow: auto;\r\n}\r\n.wrap {\r\n     background-color: #0F3D3E;\r\n     overflow: auto;\r\n     padding: 0 30px;\r\n}\r\n\r\n.wrap .left-col a h1 {\r\n     font-size:18px;\r\n     color: #E2DCC8;\r\n}\r\n.wrap .left-col a:hover{\r\n     background-color: #0F3D3E;\r\n}\r\n.wrap a {\r\n     float: left;\r\n     display: block;\r\n     color: #E2DCC8;\r\n     text-align: center;\r\n     padding: 15px;\r\n     font-size: 17px;\r\n     transition: .5s ease;\r\n     background-color: #0F3D3E;\r\n}\r\n\r\n.wrap nav a:hover {\r\n     background-color: #E2DCC8;\r\n     color: #0F3D3E;\r\n}\r\n.wrap a.active {\r\n     background-color: #E2DCC8;\r\n     color: #0F3D3E;\r\n}\r\n\r\n\r\n@media screen and (max-width: 600px) {\r\n     .wrap {\r\n          padding: 0;\r\n     }\r\n     .wrap nav .search-bar{\r\n          float: none;\r\n     }\r\n     .wrap nav a, .wrap nav input[type=text], .wrap nav .search-bar button {\r\n          float: none;\r\n          display: block;\r\n          text-align: left;\r\n          width: 100%;\r\n          margin: 0;\r\n          padding: 14;\r\n     }\r\n}\r\n.movie-container {\r\n     display: flex;\r\n     flex-wrap: wrap;\r\n     justify-content: center;\r\n     background-color: #E2DCC8;\r\n}\r\n\r\n\r\n.movie-item {\r\n     width: 300px;\r\n     margin: 1rem;\r\n     border-radius: 3px;\r\n     box-shadow: 0.2px 4px 5px rgba(0, 0, 0, 0.1);\r\n     position: relative;\r\n     overflow: hidden;\r\n     background-color: #0F3D3E;\r\n}\r\n\r\n\r\n.movie-item img {\r\n     width: 100%;\r\n}\r\n\r\n.movie-info {\r\n     color: white;\r\n     display: flex;\r\n     align-items: center;\r\n     justify-content: space-between;\r\n     padding: 0.5rem 1rem 1rem;\r\n     letter-spacing: 0.5px;\r\n}\r\n\r\n.movie-info h3 {\r\n     margin-top: 0;\r\n}\r\n\r\n.movie-info span {\r\n     background-color: #145455;\r\n     padding: 0.25rem 0.5rem;\r\n     border-radius: 3px;\r\n     font-weight: bold;\r\n}\r\n\r\n.movie-info span.green {\r\n     color: lightgreen;\r\n}\r\n.movie-info span.orange {\r\n     color: orange;\r\n}\r\n.movie-info span.red {\r\n     color: red;\r\n}\r\n\r\n.description {\r\n     position: absolute;\r\n     left: 0;\r\n     right: 0;\r\n     bottom: 0;\r\n     background-color: white;\r\n     padding: 1rem;\r\n     max-height: 100%;\r\n     transform: translateY(101%);\r\n     transition: .2s ease;\r\n}\r\n\r\n.movie-item:hover .description{\r\n     transform: translateY(0);\r\n}\r\n.genre-wrap{\r\n     background-color: #E2DCC8;\r\n     overflow: auto;\r\n}\r\n#genres {\r\n     width: 80%;\r\n     display: flex;\r\n     flex-wrap: wrap;\r\n     justify-content: center;\r\n     align-items: center;\r\n     margin: 10px auto;\r\n}\r\n\r\n.genre {\r\n     color: white;\r\n     padding: 10px 15px;\r\n     background-color: #0F3D3E;\r\n     border-radius: 50px;\r\n     margin: 5px;\r\n     display: inline-block;\r\n     cursor: pointer;\r\n}\r\n\r\n.genre:hover {\r\n     background-color: #145455;\r\n}\r\n\r\n.genre.highlight {\r\n     background-color: red;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAEA;KACK,SAAS;KACT,UAAU;KACV,sBAAsB;AAC3B;AACA;KACK,qBAAqB;KACrB,YAAY;AACjB;AACA;KACK,gBAAgB;AACrB;AACA;KACK,eAAe;AACpB;AACA;KACK,qCAAqC;AAC1C;;AAEA;KACK,YAAY;KACZ,gBAAgB;AACrB;AACA;KACK,YAAY;KACZ,YAAY;KACZ,eAAe;KACf,yBAAyB;AAC9B;;AAEA;KACK,YAAY;KACZ,iBAAiB;KACjB,eAAe;KACf,eAAe;KACf,yBAAyB;KACzB,cAAc;KACd,YAAY;KACZ,oBAAoB;AACzB;AACA;KACK,yBAAyB;AAC9B;AACA;KACK,cAAc;AACnB;AACA;KACK,yBAAyB;KACzB,cAAc;KACd,eAAe;AACpB;;AAEA;KACK,cAAc;KACd,cAAc;AACnB;AACA;KACK,yBAAyB;AAC9B;AACA;KACK,WAAW;KACX,cAAc;KACd,cAAc;KACd,kBAAkB;KAClB,aAAa;KACb,eAAe;KACf,oBAAoB;KACpB,yBAAyB;AAC9B;;AAEA;KACK,yBAAyB;KACzB,cAAc;AACnB;AACA;KACK,yBAAyB;KACzB,cAAc;AACnB;;;AAGA;KACK;UACK,UAAU;KACf;KACA;UACK,WAAW;KAChB;KACA;UACK,WAAW;UACX,cAAc;UACd,gBAAgB;UAChB,WAAW;UACX,SAAS;UACT,WAAW;KAChB;AACL;AACA;KACK,aAAa;KACb,eAAe;KACf,uBAAuB;KACvB,yBAAyB;AAC9B;;;AAGA;KACK,YAAY;KACZ,YAAY;KACZ,kBAAkB;KAClB,4CAA4C;KAC5C,kBAAkB;KAClB,gBAAgB;KAChB,yBAAyB;AAC9B;;;AAGA;KACK,WAAW;AAChB;;AAEA;KACK,YAAY;KACZ,aAAa;KACb,mBAAmB;KACnB,8BAA8B;KAC9B,yBAAyB;KACzB,qBAAqB;AAC1B;;AAEA;KACK,aAAa;AAClB;;AAEA;KACK,yBAAyB;KACzB,uBAAuB;KACvB,kBAAkB;KAClB,iBAAiB;AACtB;;AAEA;KACK,iBAAiB;AACtB;AACA;KACK,aAAa;AAClB;AACA;KACK,UAAU;AACf;;AAEA;KACK,kBAAkB;KAClB,OAAO;KACP,QAAQ;KACR,SAAS;KACT,uBAAuB;KACvB,aAAa;KACb,gBAAgB;KAChB,2BAA2B;KAC3B,oBAAoB;AACzB;;AAEA;KACK,wBAAwB;AAC7B;AACA;KACK,yBAAyB;KACzB,cAAc;AACnB;AACA;KACK,UAAU;KACV,aAAa;KACb,eAAe;KACf,uBAAuB;KACvB,mBAAmB;KACnB,iBAAiB;AACtB;;AAEA;KACK,YAAY;KACZ,kBAAkB;KAClB,yBAAyB;KACzB,mBAAmB;KACnB,WAAW;KACX,qBAAqB;KACrB,eAAe;AACpB;;AAEA;KACK,yBAAyB;AAC9B;;AAEA;KACK,qBAAqB;AAC1B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\r\n* {\r\n     margin: 0;\r\n     padding: 0;\r\n     box-sizing: border-box;\r\n}\r\na {\r\n     text-decoration: none;\r\n     color: black;\r\n}\r\nli {\r\n     list-style: none;\r\n}\r\nbody {\r\n     font-size: 100%;\r\n}\r\nbody {\r\n     font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.search-bar {\r\n     float: right;\r\n     margin-top: 10px;\r\n}\r\n.search-bar input[type=text]{\r\n     padding: 6px;\r\n     border: none;\r\n     font-size: 17px;\r\n     background-color: #E2DCC8;\r\n}\r\n\r\n.search-bar button {\r\n     float: right;\r\n     padding: 6px 10px;\r\n     font-size: 17px;\r\n     cursor: pointer;\r\n     background-color: #145455;\r\n     color: #E2DCC8;\r\n     border: none;\r\n     transition: .5s ease;\r\n}\r\n.search-bar button:hover {\r\n     background-color: #0F3D3E;\r\n}\r\nnav {\r\n     overflow: auto;\r\n}\r\n.wrap {\r\n     background-color: #0F3D3E;\r\n     overflow: auto;\r\n     padding: 0 30px;\r\n}\r\n\r\n.wrap .left-col a h1 {\r\n     font-size:18px;\r\n     color: #E2DCC8;\r\n}\r\n.wrap .left-col a:hover{\r\n     background-color: #0F3D3E;\r\n}\r\n.wrap a {\r\n     float: left;\r\n     display: block;\r\n     color: #E2DCC8;\r\n     text-align: center;\r\n     padding: 15px;\r\n     font-size: 17px;\r\n     transition: .5s ease;\r\n     background-color: #0F3D3E;\r\n}\r\n\r\n.wrap nav a:hover {\r\n     background-color: #E2DCC8;\r\n     color: #0F3D3E;\r\n}\r\n.wrap a.active {\r\n     background-color: #E2DCC8;\r\n     color: #0F3D3E;\r\n}\r\n\r\n\r\n@media screen and (max-width: 600px) {\r\n     .wrap {\r\n          padding: 0;\r\n     }\r\n     .wrap nav .search-bar{\r\n          float: none;\r\n     }\r\n     .wrap nav a, .wrap nav input[type=text], .wrap nav .search-bar button {\r\n          float: none;\r\n          display: block;\r\n          text-align: left;\r\n          width: 100%;\r\n          margin: 0;\r\n          padding: 14;\r\n     }\r\n}\r\n.movie-container {\r\n     display: flex;\r\n     flex-wrap: wrap;\r\n     justify-content: center;\r\n     background-color: #E2DCC8;\r\n}\r\n\r\n\r\n.movie-item {\r\n     width: 300px;\r\n     margin: 1rem;\r\n     border-radius: 3px;\r\n     box-shadow: 0.2px 4px 5px rgba(0, 0, 0, 0.1);\r\n     position: relative;\r\n     overflow: hidden;\r\n     background-color: #0F3D3E;\r\n}\r\n\r\n\r\n.movie-item img {\r\n     width: 100%;\r\n}\r\n\r\n.movie-info {\r\n     color: white;\r\n     display: flex;\r\n     align-items: center;\r\n     justify-content: space-between;\r\n     padding: 0.5rem 1rem 1rem;\r\n     letter-spacing: 0.5px;\r\n}\r\n\r\n.movie-info h3 {\r\n     margin-top: 0;\r\n}\r\n\r\n.movie-info span {\r\n     background-color: #145455;\r\n     padding: 0.25rem 0.5rem;\r\n     border-radius: 3px;\r\n     font-weight: bold;\r\n}\r\n\r\n.movie-info span.green {\r\n     color: lightgreen;\r\n}\r\n.movie-info span.orange {\r\n     color: orange;\r\n}\r\n.movie-info span.red {\r\n     color: red;\r\n}\r\n\r\n.description {\r\n     position: absolute;\r\n     left: 0;\r\n     right: 0;\r\n     bottom: 0;\r\n     background-color: white;\r\n     padding: 1rem;\r\n     max-height: 100%;\r\n     transform: translateY(101%);\r\n     transition: .2s ease;\r\n}\r\n\r\n.movie-item:hover .description{\r\n     transform: translateY(0);\r\n}\r\n.genre-wrap{\r\n     background-color: #E2DCC8;\r\n     overflow: auto;\r\n}\r\n#genres {\r\n     width: 80%;\r\n     display: flex;\r\n     flex-wrap: wrap;\r\n     justify-content: center;\r\n     align-items: center;\r\n     margin: 10px auto;\r\n}\r\n\r\n.genre {\r\n     color: white;\r\n     padding: 10px 15px;\r\n     background-color: #0F3D3E;\r\n     border-radius: 50px;\r\n     margin: 5px;\r\n     display: inline-block;\r\n     cursor: pointer;\r\n}\r\n\r\n.genre:hover {\r\n     background-color: #145455;\r\n}\r\n\r\n.genre.highlight {\r\n     background-color: red;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./src/main.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");


document.addEventListener('DOMContentLoaded', _main_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map