/*! tooto-pro - v3.11.6 - 14-03-2023 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../core/app/modules/site-editor/assets/js/atoms/indicator-bullet.scss":
/*!*****************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/atoms/indicator-bullet.scss ***!
  \*****************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/atoms/preview-iframe.scss":
/*!***************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/atoms/preview-iframe.scss ***!
  \***************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/molecules/back-button.scss":
/*!****************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/molecules/back-button.scss ***!
  \****************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/molecules/site-template.scss":
/*!******************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/molecules/site-template.scss ***!
  \******************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/add-new.scss":
/*!********************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/add-new.scss ***!
  \********************************************************************/
/***/ (() => {



/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/conditions/conditions.scss":
/*!**********************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/conditions/conditions.scss ***!
  \**********************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/template-type.scss":
/*!**************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/template-type.scss ***!
  \**************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/site-editor.scss":
/*!******************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/site-editor.scss ***!
  \******************************************************************/
/***/ (() => {



/***/ }),

/***/ "../node_modules/@reach/router/es/index.js":
/*!*************************************************!*\
  !*** ../node_modules/@reach/router/es/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "Location": () => (/* binding */ Location),
/* harmony export */   "LocationProvider": () => (/* binding */ LocationProvider),
/* harmony export */   "Match": () => (/* binding */ Match),
/* harmony export */   "Redirect": () => (/* binding */ Redirect),
/* harmony export */   "Router": () => (/* binding */ Router),
/* harmony export */   "ServerLocation": () => (/* binding */ ServerLocation),
/* harmony export */   "createHistory": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.createHistory),
/* harmony export */   "createMemorySource": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.createMemorySource),
/* harmony export */   "globalHistory": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.globalHistory),
/* harmony export */   "isRedirect": () => (/* binding */ isRedirect),
/* harmony export */   "matchPath": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_4__.match),
/* harmony export */   "navigate": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.navigate),
/* harmony export */   "redirectTo": () => (/* binding */ redirectTo),
/* harmony export */   "useLocation": () => (/* binding */ useLocation),
/* harmony export */   "useMatch": () => (/* binding */ useMatch),
/* harmony export */   "useNavigate": () => (/* binding */ useNavigate),
/* harmony export */   "useParams": () => (/* binding */ useParams)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "../node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var create_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! create-react-context */ "../node_modules/create-react-context/lib/index.js");
/* harmony import */ var create_react_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(create_react_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lifecycles-compat */ "../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/utils */ "../node_modules/@reach/router/es/lib/utils.js");
/* harmony import */ var _lib_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/history */ "../node_modules/@reach/router/es/lib/history.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/anchor-has-content */








////////////////////////////////////////////////////////////////////////////////

var createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = create_react_context__WEBPACK_IMPORTED_MODULE_2___default()(defaultValue);
  Ctx.displayName = name;
  return Ctx;
};

////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider
var LocationContext = createNamedContext("Location");

// sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider
var Location = function Location(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    LocationContext.Consumer,
    null,
    function (context) {
      return context ? children(context) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        LocationProvider,
        null,
        children
      );
    }
  );
};

var LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: { unlisten: null }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate = _props$history.navigate,
        location = _props$history.location;

    return { navigate: navigate, location: location };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, { replace: true });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;

    history._onTransitionComplete();
    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        // TODO: replace rAF with react deferred update API when it's ready https://github.com/facebook/react/issues/13306
        requestAnimationFrame(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return { context: _this2.getContext() };
            });
          }
        });
      });
    });
  };

  LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    var refs = this.state.refs;

    this.unmounted = true;
    refs.unlisten();
  };

  LocationProvider.prototype.render = function render() {
    var context = this.state.context,
        children = this.props.children;

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      LocationContext.Provider,
      { value: context },
      typeof children === "function" ? children(context) : children || null
    );
  };

  return LocationProvider;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

////////////////////////////////////////////////////////////////////////////////


LocationProvider.defaultProps = {
  history: _lib_history__WEBPACK_IMPORTED_MODULE_5__.globalHistory
};
 true ? LocationProvider.propTypes = {
  history: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object.isRequired)
} : 0;
var ServerLocation = function ServerLocation(_ref2) {
  var url = _ref2.url,
      children = _ref2.children;

  var searchIndex = url.indexOf("?");
  var searchExists = searchIndex > -1;
  var pathname = void 0;
  var search = "";
  var hash = "";

  if (searchExists) {
    pathname = url.substring(0, searchIndex);
    search = url.substring(searchIndex);
  } else {
    pathname = url;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    LocationContext.Provider,
    {
      value: {
        location: {
          pathname: pathname,
          search: search,
          hash: hash
        },
        navigate: function navigate() {
          throw new Error("You can't call navigate on the server.");
        }
      }
    },
    children
  );
};
////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links
var BaseContext = createNamedContext("Base", { baseuri: "/", basepath: "/" });

////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.
var Router = function Router(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (baseContext) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (locationContext) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RouterImpl, _extends({}, baseContext, locationContext, props));
        }
      );
    }
  );
};

var RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children,
        baseuri = _props.baseuri,
        _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = react__WEBPACK_IMPORTED_MODULE_0___default().Children.toArray(children).reduce(function (array, child) {
      var routes = createRoute(basepath)(child);
      return array.concat(routes);
    }, []);
    var pathname = location.pathname;


    var match = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.pick)(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value;

      // remove the /* from the end for child routes relative paths

      basepath = route.default ? basepath : route.path.replace(/\*$/, "");

      var props = _extends({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, uri), options);
        }
      });

      var clone = react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(element, props, element.props.children ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Router,
        { location: location, primary: primary },
        element.props.children
      ) : undefined);

      // using 'div' for < 16.3 support
      var FocusWrapper = primary ? FocusHandler : component;
      // don't pass any props to 'div'
      var wrapperProps = primary ? _extends({ uri: uri, location: location, component: component }, domProps) : domProps;

      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        BaseContext.Provider,
        { value: { baseuri: uri, basepath: basepath } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          FocusWrapper,
          wrapperProps,
          clone
        )
      );
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

RouterImpl.defaultProps = {
  primary: true
};


var FocusContext = createNamedContext("Focus");

var FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    FocusContext.Consumer,
    null,
    function (requestFocus) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FocusHandlerImpl, _extends({}, domProps, {
        component: component,
        requestFocus: requestFocus,
        uri: uri,
        location: location
      }));
    }
  );
};

// don't focus on initial render
var initialRender = true;
var focusHandlerCount = 0;

var FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus && node) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;
    if (initial) {
      return _extends({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return _extends({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;
    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (false) {}

    var requestFocus = this.props.requestFocus;


    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else if (this.node) {
        // React polyfills [autofocus] and it fires earlier than cDM,
        // so we were stealing focus away, this line prevents that.
        if (!this.node.contains(document.activeElement)) {
          this.node.focus();
        }
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props,
        children = _props2.children,
        style = _props2.style,
        requestFocus = _props2.requestFocus,
        _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component,
        uri = _props2.uri,
        location = _props2.location,
        domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "component", "uri", "location"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      Comp,
      _extends({
        style: _extends({ outline: "none" }, style),
        tabIndex: "-1",
        ref: function ref(n) {
          return _this5.node = n;
        }
      }, domProps),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        FocusContext.Provider,
        { value: this.requestFocus },
        this.props.children
      )
    );
  };

  return FocusHandlerImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

(0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__.polyfill)(FocusHandlerImpl);

var k = function k() {};

////////////////////////////////////////////////////////////////////////////////
var forwardRef = (react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef);

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref5) {
      var basepath = _ref5.basepath,
          baseuri = _ref5.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (_ref6) {
          var location = _ref6.location,
              navigate = _ref6.navigate;

          var to = props.to,
              state = props.state,
              replace = props.replace,
              _props$getProps = props.getProps,
              getProps = _props$getProps === undefined ? k : _props$getProps,
              anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

          var href = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
          var encodedHref = encodeURI(href);
          var isCurrent = location.pathname === encodedHref;
          var isPartiallyCurrent = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.startsWith)(location.pathname, encodedHref);

          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", _extends({
            ref: ref || innerRef,
            "aria-current": isCurrent ? "page" : undefined
          }, anchorProps, getProps({ isCurrent: isCurrent, isPartiallyCurrent: isPartiallyCurrent, href: href, location: location }), {
            href: href,
            onClick: function onClick(event) {
              if (anchorProps.onClick) anchorProps.onClick(event);
              if (shouldNavigate(event)) {
                event.preventDefault();
                var shouldReplace = replace;
                if (typeof replace !== "boolean" && isCurrent) {
                  var _location$state = _extends({}, location.state),
                      key = _location$state.key,
                      restState = _objectWithoutProperties(_location$state, ["key"]);

                  shouldReplace = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.shallowCompare)(_extends({}, state), restState);
                }
                navigate(href, {
                  state: state,
                  replace: shouldReplace
                });
              }
            }
          }));
        }
      );
    }
  );
});

Link.displayName = "Link";

 true ? Link.propTypes = {
  to: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired)
} : 0;

////////////////////////////////////////////////////////////////////////////////
function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  // Support React < 16 with this hook
  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate = _props3.navigate,
        to = _props3.to,
        from = _props3.from,
        _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state,
        noThrow = _props3.noThrow,
        baseuri = _props3.baseuri,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    Promise.resolve().then(function () {
      var resolvedTo = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
      navigate((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.insertParams)(resolvedTo, props), { replace: replace, state: state });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props,
        navigate = _props4.navigate,
        to = _props4.to,
        from = _props4.from,
        replace = _props4.replace,
        state = _props4.state,
        noThrow = _props4.noThrow,
        baseuri = _props4.baseuri,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    var resolvedTo = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
    if (!noThrow) redirectTo((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.insertParams)(resolvedTo, props));
    return null;
  };

  return RedirectImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var Redirect = function Redirect(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref7) {
      var baseuri = _ref7.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (locationContext) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RedirectImpl, _extends({}, locationContext, { baseuri: baseuri }, props));
        }
      );
    }
  );
};

 true ? Redirect.propTypes = {
  from: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  to: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired)
} : 0;

////////////////////////////////////////////////////////////////////////////////
var Match = function Match(_ref8) {
  var path = _ref8.path,
      children = _ref8.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref9) {
      var baseuri = _ref9.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (_ref10) {
          var navigate = _ref10.navigate,
              location = _ref10.location;

          var resolvedPath = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(path, baseuri);
          var result = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(resolvedPath, location.pathname);
          return children({
            navigate: navigate,
            location: location,
            match: result ? _extends({}, result.params, {
              uri: result.uri,
              path: path
            }) : null
          });
        }
      );
    }
  );
};

////////////////////////////////////////////////////////////////////////////////
// Hooks

var useLocation = function useLocation() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocationContext);

  if (!context) {
    throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.location;
};

var useNavigate = function useNavigate() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocationContext);

  if (!context) {
    throw new Error("useNavigate hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.navigate;
};

var useParams = function useParams() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BaseContext);

  if (!context) {
    throw new Error("useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();

  var results = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(context.basepath, location.pathname);

  return results ? results.params : null;
};

var useMatch = function useMatch(path) {
  if (!path) {
    throw new Error("useMatch(path: string) requires an argument of a string to match against");
  }
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BaseContext);

  if (!context) {
    throw new Error("useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();

  var resolvedPath = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(path, context.baseuri);
  var result = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(resolvedPath, location.pathname);
  return result ? _extends({}, result.params, {
    uri: result.uri,
    path: path
  }) : null;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var createRoute = function createRoute(basepath) {
  return function (element) {
    if (!element) {
      return null;
    }

    if (element.type === (react__WEBPACK_IMPORTED_MODULE_0___default().Fragment) && element.props.children) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(element.props.children, createRoute(basepath));
    }
    !(element.props.path || element.props.default || element.type === Redirect) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "<Router>: Children of <Router> must have a `path` or `default` prop, or be a `<Redirect>`. None found on element type `" + element.type + "`") : 0 : void 0;

    !!(element.type === Redirect && (!element.props.from || !element.props.to)) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "<Redirect from=\"" + element.props.from + "\" to=\"" + element.props.to + "\"/> requires both \"from\" and \"to\" props when inside a <Router>.") : 0 : void 0;

    !!(element.type === Redirect && !(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.validateRedirect)(element.props.from, element.props.to)) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "<Redirect from=\"" + element.props.from + " to=\"" + element.props.to + "\"/> has mismatched dynamic segments, ensure both paths have the exact same dynamic segments.") : 0 : void 0;

    if (element.props.default) {
      return { value: element, default: true };
    }

    var elementPath = element.type === Redirect ? element.props.from : element.props.path;

    var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);

    return {
      value: element,
      default: element.props.default,
      path: element.props.children ? stripSlashes(path) + "/*" : path
    };
  };
};

var shouldNavigate = function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

////////////////////////////////////////////////////////////////////////


/***/ }),

/***/ "../node_modules/@reach/router/es/lib/history.js":
/*!*******************************************************!*\
  !*** ../node_modules/@reach/router/es/lib/history.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHistory": () => (/* binding */ createHistory),
/* harmony export */   "createMemorySource": () => (/* binding */ createMemorySource),
/* harmony export */   "globalHistory": () => (/* binding */ globalHistory),
/* harmony export */   "navigate": () => (/* binding */ navigate)
/* harmony export */ });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getLocation = function getLocation(source) {
  var _source$location = source.location,
      search = _source$location.search,
      hash = _source$location.hash,
      href = _source$location.href,
      origin = _source$location.origin,
      protocol = _source$location.protocol,
      host = _source$location.host,
      hostname = _source$location.hostname,
      port = _source$location.port;
  var pathname = source.location.pathname;


  if (!pathname && href && canUseDOM) {
    var url = new URL(href);
    pathname = url.pathname;
  }

  return {
    pathname: encodeURI(decodeURI(pathname)),
    search: search,
    hash: hash,
    href: href,
    origin: origin,
    protocol: protocol,
    host: host,
    hostname: hostname,
    port: port,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;
  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({ location: location, action: "POP" });
      };

      source.addEventListener("popstate", popstateListener);

      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      if (typeof to === "number") {
        source.history.go(to);
      } else {
        state = _extends({}, state, { key: Date.now() + "" });
        // try...catch iOS Safari limits to 100 pushState calls
        try {
          if (transitioning || replace) {
            source.history.replaceState(state, null, to);
          } else {
            source.history.pushState(state, null, to);
          }
        } catch (e) {
          source.location[replace ? "replace" : "assign"](to);
        }
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({ location: location, action: "PUSH" });
      });
      return transition;
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native
var createMemorySource = function createMemorySource() {
  var initialPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";

  var searchIndex = initialPath.indexOf("?");
  var initialLocation = {
    pathname: searchIndex > -1 ? initialPath.substr(0, searchIndex) : initialPath,
    search: searchIndex > -1 ? initialPath.substr(searchIndex) : ""
  };
  var index = 0;
  var stack = [initialLocation];
  var states = [null];

  return {
    get location() {
      return stack[index];
    },
    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},

    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({ pathname: pathname, search: search.length ? "?" + search : search });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = { pathname: pathname, search: search };
        states[index] = state;
      },
      go: function go(to) {
        var newIndex = index + to;

        if (newIndex < 0 || newIndex > states.length - 1) {
          return;
        }

        index = newIndex;
      }
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var navigate = globalHistory.navigate;

////////////////////////////////////////////////////////////////////////////////



/***/ }),

/***/ "../node_modules/@reach/router/es/lib/utils.js":
/*!*****************************************************!*\
  !*** ../node_modules/@reach/router/es/lib/utils.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertParams": () => (/* binding */ insertParams),
/* harmony export */   "match": () => (/* binding */ match),
/* harmony export */   "pick": () => (/* binding */ pick),
/* harmony export */   "resolve": () => (/* binding */ resolve),
/* harmony export */   "shallowCompare": () => (/* binding */ shallowCompare),
/* harmony export */   "startsWith": () => (/* binding */ startsWith),
/* harmony export */   "validateRedirect": () => (/* binding */ validateRedirect)
/* harmony export */ });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "../node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);


////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  true ? invariant__WEBPACK_IMPORTED_MODULE_0___default()(false, "<Router> dynamic segment \"" + dynamicMatch[1] + "\" is a reserved name. Please use a different name in path \"" + route.path + "\".") : 0 : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)

var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;

  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////


/***/ }),

/***/ "../core/app/assets/js/hooks/use-feature-lock.js":
/*!*******************************************************!*\
  !*** ../core/app/assets/js/hooks/use-feature-lock.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useFeatureLock;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _connectButton = _interopRequireDefault(__webpack_require__(/*! ../ui/connect-button */ "../core/app/assets/js/ui/connect-button.js"));
var _utils = __webpack_require__(/*! ../utils */ "../core/app/assets/js/utils.js");
function useFeatureLock(featureName) {
  var _appConfig$lock, _appConfig$lock2, _appConfig$lock3;
  const appConfig = tootoAppProConfig[featureName] ?? {},
    isLocked = ((_appConfig$lock = appConfig.lock) === null || _appConfig$lock === void 0 ? void 0 : _appConfig$lock.is_locked) ?? false;
  const buttonText = (0, _utils.htmlDecodeTextContent)((_appConfig$lock2 = appConfig.lock) === null || _appConfig$lock2 === void 0 ? void 0 : _appConfig$lock2.button.text);
  const buttonLink = (0, _utils.replaceUtmPlaceholders)(((_appConfig$lock3 = appConfig.lock) === null || _appConfig$lock3 === void 0 ? void 0 : _appConfig$lock3.button.url) ?? '', appConfig.utms ?? {});
  const ConnectButton = () => /*#__PURE__*/_react.default.createElement(_connectButton.default, {
    text: buttonText,
    url: buttonLink
  });
  return {
    isLocked,
    ConnectButton
  };
}

/***/ }),

/***/ "../core/app/assets/js/ui/connect-button.js":
/*!**************************************************!*\
  !*** ../core/app/assets/js/ui/connect-button.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
var _utils = __webpack_require__(/*! ../utils.js */ "../core/app/assets/js/utils.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ConnectButton = props => {
  const className = (0, _utils.arrayToClassName)(['e-app-connect-button', props.className]);
  const buttonRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    if (!buttonRef.current) {
      return;
    }
    jQuery(buttonRef.current).tootoConnect();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_appUi.Button, (0, _extends2.default)({}, props, {
    elRef: buttonRef,
    className: className
  }));
};
ConnectButton.propTypes = {
  ..._appUi.Button.propTypes,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  className: PropTypes.string
};
ConnectButton.defaultProps = {
  className: '',
  variant: 'contained',
  size: 'sm',
  color: 'cta',
  target: '_blank',
  rel: 'noopener noreferrer',
  text: __('Connect & Activate', 'tooto')
};
var _default = _react.default.memo(ConnectButton);
exports["default"] = _default;

/***/ }),

/***/ "../core/app/assets/js/utils.js":
/*!**************************************!*\
  !*** ../core/app/assets/js/utils.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.replaceUtmPlaceholders = exports.htmlDecodeTextContent = exports.arrayToClassName = void 0;
// Copied from Core.
const arrayToClassName = (array, action) => {
  return array.filter(item => 'object' === typeof item ? Object.entries(item)[0][1] : item).map(item => {
    const value = 'object' === typeof item ? Object.entries(item)[0][0] : item;
    return action ? action(value) : value;
  }).join(' ');
};
exports.arrayToClassName = arrayToClassName;
const htmlDecodeTextContent = input => {
  const doc = new DOMParser().parseFromString(input, 'text/html');
  return doc.documentElement.textContent;
};
exports.htmlDecodeTextContent = htmlDecodeTextContent;
const replaceUtmPlaceholders = function () {
  let link = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  let utms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!link || !utms) {
    return link;
  }
  Object.keys(utms).forEach(key => {
    const match = new RegExp(`%%${key}%%`, 'g');
    link = link.replace(match, utms[key]);
  });
  return link;
};
exports.replaceUtmPlaceholders = replaceUtmPlaceholders;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/atoms/indicator-bullet.js":
/*!***************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/atoms/indicator-bullet.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Indicator = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./indicator-bullet.scss */ "../core/app/modules/site-editor/assets/js/atoms/indicator-bullet.scss");
const Indicator = props => {
  let className = 'eps-indicator-bullet';
  if (props.active) {
    className += ` ${className}--active`;
  }
  return /*#__PURE__*/_react.default.createElement("i", {
    className: className
  });
};
exports.Indicator = Indicator;
Indicator.propTypes = {
  active: PropTypes.bool
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/atoms/preview-iframe.js":
/*!*************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/atoms/preview-iframe.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = PreviewIFrame;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./preview-iframe.scss */ "../core/app/modules/site-editor/assets/js/atoms/preview-iframe.scss");
function PreviewIFrame(props) {
  const ref = _react.default.useRef(null),
    previewBreakpoint = 1200,
    [scale, setScale] = _react.default.useState(1),
    [height, setHeight] = _react.default.useState(0);

  // In order to make sure that the iframe itself show the content in specific viewport,
  // and it should fit to the size of the card, there is a use of css props `scale` and `height`,
  // and another element that wraps the iframe to be the guidelines of the iframe sizes.
  _react.default.useEffect(() => {
    const currentScale = ref.current.clientWidth / previewBreakpoint;
    setScale(currentScale);
    setHeight(ref.current.clientHeight / currentScale);
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: `site-editor__preview-iframe site-editor__preview-iframe--${props.templateType}`
  }, /*#__PURE__*/_react.default.createElement("iframe", {
    title: "preview",
    src: props.src,
    className: `site-editor__preview-iframe__iframe`,
    style: {
      transform: `scale(${scale})`,
      height,
      width: previewBreakpoint
    }
  }));
}
PreviewIFrame.propTypes = {
  src: PropTypes.string.isRequired,
  templateType: PropTypes.string.isRequired
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/context/base-context.js":
/*!*************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/context/base-context.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.BaseContext = void 0;
class BaseContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: {
        current: null,
        loading: false,
        error: null,
        errorMeta: {}
      },
      updateActionState: this.updateActionState.bind(this),
      resetActionState: this.resetActionState.bind(this)
    };
  }
  executeAction(name, handler) {
    this.updateActionState({
      current: name,
      loading: true,
      error: null,
      errorMeta: {}
    });
    return handler().then(response => {
      this.resetActionState();
      return Promise.resolve(response);
    }).catch(error => {
      this.updateActionState({
        current: name,
        loading: false,
        error: error.message,
        errorMeta: error
      });
      return Promise.reject(error);
    });
  }
  updateActionState(data) {
    return this.setState(prev => ({
      action: {
        ...prev.action,
        ...data
      }
    }));
  }
  resetActionState() {
    this.updateActionState({
      current: null,
      loading: false,
      error: null,
      errorMeta: {}
    });
  }
}
exports.BaseContext = BaseContext;
var _default = BaseContext;
exports["default"] = _default;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/context/conditions.js":
/*!***********************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/context/conditions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.Context = exports.ConditionsProvider = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _condition = _interopRequireDefault(__webpack_require__(/*! ./models/condition */ "../core/app/modules/site-editor/assets/js/context/models/condition.js"));
var _conditionsConfig = _interopRequireDefault(__webpack_require__(/*! ./services/conditions-config */ "../core/app/modules/site-editor/assets/js/context/services/conditions-config.js"));
var _baseContext = _interopRequireDefault(__webpack_require__(/*! ./base-context */ "../core/app/modules/site-editor/assets/js/context/base-context.js"));
var _commands = __webpack_require__(/*! ../data/commands */ "../core/app/modules/site-editor/assets/js/data/commands/index.js");
const Context = _react.default.createContext();
exports.Context = Context;
class ConditionsProvider extends _baseContext.default {
  static propTypes = {
    children: PropTypes.any.isRequired,
    currentTemplate: PropTypes.object.isRequired,
    onConditionsSaved: PropTypes.func.isRequired,
    validateConflicts: PropTypes.bool
  };
  static defaultProps = {
    validateConflicts: true
  };
  static actions = {
    FETCH_CONFIG: 'fetch-config',
    SAVE: 'save',
    CHECK_CONFLICTS: 'check-conflicts'
  };

  /**
   * Holds the conditions config object.
   *
   * @type {ConditionsConfig}
   */
  conditionsConfig = null;

  /**
   * ConditionsProvider constructor.
   *
   * @param {any} props
   */
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      conditions: {},
      updateConditionItemState: this.updateConditionItemState.bind(this),
      removeConditionItemInState: this.removeConditionItemInState.bind(this),
      createConditionItemInState: this.createConditionItemInState.bind(this),
      findConditionItemInState: this.findConditionItemInState.bind(this),
      saveConditions: this.saveConditions.bind(this)
    };
  }

  /**
   * Fetch the conditions config, then normalize the conditions and then setup titles for
   * the subIds.
   */
  componentDidMount() {
    this.executeAction(ConditionsProvider.actions.FETCH_CONFIG, () => _conditionsConfig.default.create()).then(conditionsConfig => this.conditionsConfig = conditionsConfig).then(this.normalizeConditionsState.bind(this)).then(this.setSubIdTitles.bind(this));
  }

  /**
   * Execute a request to save the template conditions.
   *
   * @return {any} -
   */
  saveConditions() {
    const conditions = Object.values(this.state.conditions).map(condition => condition.forDb());
    return this.executeAction(ConditionsProvider.actions.SAVE, () => $e.data.update(_commands.TemplatesConditions.signature, {
      conditions
    }, {
      id: this.props.currentTemplate.id
    })).then(() => {
      const contextConditions = Object.values(this.state.conditions).map(condition => condition.forContext());
      this.props.onConditionsSaved(this.props.currentTemplate.id, {
        conditions: contextConditions,
        instances: this.conditionsConfig.calculateInstances(Object.values(this.state.conditions)),
        isActive: !!(Object.keys(this.state.conditions).length && 'publish' === this.props.currentTemplate.status)
      });
    });
  }

  /**
   * Check for conflicts in the server and mark the condition if there
   * is a conflict.
   *
   * @param {any} condition
   */
  checkConflicts(condition) {
    return this.executeAction(ConditionsProvider.actions.CHECK_CONFLICTS, () => $e.data.get(_commands.TemplatesConditionsConflicts.signature, {
      post_id: this.props.currentTemplate.id,
      condition: condition.clone().toString()
    })).then(response => this.updateConditionItemState(condition.id, {
      conflictErrors: Object.values(response.data)
    }, false));
  }

  /**
   * Fetching subId titles.
   *
   * @param {any} condition
   * @return {Promise<unknown>} -
   */
  fetchSubIdsTitles(condition) {
    return new Promise(resolve => {
      return tootoCommon.ajax.loadObjects({
        action: 'query_control_value_titles',
        ids: _.isArray(condition.subId) ? condition.subId : [condition.subId],
        data: {
          get_titles: condition.subIdAutocomplete,
          unique_id: tootoCommon.helpers.getUniqueId()
        },
        success(response) {
          resolve(response);
        }
      });
    });
  }

  /**
   * Get the conditions from the template and normalize it to data structure
   * that the components can work with.
   */
  normalizeConditionsState() {
    this.updateConditionsState(() => {
      return this.props.currentTemplate.conditions.reduce((current, condition) => {
        const conditionObj = new _condition.default({
          ...condition,
          default: this.props.currentTemplate.defaultCondition,
          options: this.conditionsConfig.getOptions(),
          subOptions: this.conditionsConfig.getSubOptions(condition.name),
          subIdAutocomplete: this.conditionsConfig.getSubIdAutocomplete(condition.sub),
          supIdOptions: condition.subId ? [{
            value: condition.subId,
            label: condition.subId
          }] : []
        });
        return {
          ...current,
          [conditionObj.id]: conditionObj
        };
      }, {});
    }).then(() => {
      Object.values(this.state.conditions).forEach(condition => this.checkConflicts(condition));
    });
  }

  /**
   * Set titles to the subIds,
   * for the first render of the component.
   */
  setSubIdTitles() {
    return Object.values(this.state.conditions).forEach(condition => {
      if (!condition.subId) {
        return;
      }
      return this.fetchSubIdsTitles(condition).then(response => this.updateConditionItemState(condition.id, {
        subIdOptions: [{
          label: Object.values(response)[0],
          value: condition.subId
        }]
      }, false));
    });
  }

  /**
   * Update state of specific condition item.
   *
   * @param {any}     id
   * @param {any}     args
   * @param {boolean} shouldCheckConflicts
   */
  updateConditionItemState(id, args) {
    let shouldCheckConflicts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (args.name) {
      args.subOptions = this.conditionsConfig.getSubOptions(args.name);
    }
    if (args.sub || args.name) {
      args.subIdAutocomplete = this.conditionsConfig.getSubIdAutocomplete(args.sub);

      // In case that the condition has been changed, it will set the options of the subId
      // to empty array to let select2 autocomplete handle the options.
      args.subIdOptions = [];
    }
    this.updateConditionsState(prev => {
      const condition = prev[id];
      return {
        ...prev,
        [id]: condition.clone().set(args)
      };
    }).then(() => {
      if (shouldCheckConflicts) {
        this.checkConflicts(this.findConditionItemInState(id));
      }
    });
  }

  /**
   * Remove a condition item from the state.
   *
   * @param {any} id
   */
  removeConditionItemInState(id) {
    this.updateConditionsState(prev => {
      const newConditions = {
        ...prev
      };
      delete newConditions[id];
      return newConditions;
    });
  }

  /**
   * Add a new condition item into the state.
   *
   * @param {boolean} shouldCheckConflicts
   */
  createConditionItemInState() {
    let shouldCheckConflicts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    const defaultCondition = this.props.currentTemplate.defaultCondition,
      newCondition = new _condition.default({
        name: defaultCondition,
        default: defaultCondition,
        options: this.conditionsConfig.getOptions(),
        subOptions: this.conditionsConfig.getSubOptions(defaultCondition),
        subIdAutocomplete: this.conditionsConfig.getSubIdAutocomplete('')
      });
    this.updateConditionsState(prev => ({
      ...prev,
      [newCondition.id]: newCondition
    })).then(() => {
      if (shouldCheckConflicts) {
        this.checkConflicts(newCondition);
      }
    });
  }

  /**
   * Find a condition item from the conditions state.
   *
   * @param {any} id
   * @return {Condition|null} -
   */
  findConditionItemInState(id) {
    return Object.values(this.state.conditions).find(c => c.id === id);
  }

  /**
   * Update the whole conditions state.
   *
   * @param {Function} callback
   * @return {Promise<any>} -
   */
  updateConditionsState(callback) {
    return new Promise(resolve => this.setState(prev => ({
      conditions: callback(prev.conditions)
    }), resolve));
  }

  /**
   * Renders the provider.
   *
   * @return {any} -
   */
  render() {
    if (this.state.action.current === ConditionsProvider.actions.FETCH_CONFIG) {
      if (this.state.error) {
        return /*#__PURE__*/_react.default.createElement("h3", null, __('Error:', 'tooto-pro'), " ", this.state.error);
      }
      if (this.state.loading) {
        return /*#__PURE__*/_react.default.createElement("h3", null, __('Loading', 'tooto-pro'), "...");
      }
    }
    return /*#__PURE__*/_react.default.createElement(Context.Provider, {
      value: this.state
    }, this.props.children);
  }
}
exports.ConditionsProvider = ConditionsProvider;
var _default = ConditionsProvider;
exports["default"] = _default;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/context/models/condition.js":
/*!*****************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/context/models/condition.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
class Condition {
  id = tootoCommon.helpers.getUniqueId();
  default = '';
  type = 'include';
  name = '';
  sub = '';
  subId = '';
  options = [];
  subOptions = [];
  subIdAutocomplete = [];
  subIdOptions = [];
  conflictErrors = [];
  constructor(args) {
    this.set(args);
  }
  set(args) {
    Object.assign(this, args);
    return this;
  }
  clone() {
    return Object.assign(new Condition(), this);
  }
  remove(keys) {
    if (!Array.isArray(keys)) {
      keys = [keys];
    }
    keys.forEach(key => {
      delete this[key];
    });
    return this;
  }
  only(keys) {
    if (!Array.isArray(keys)) {
      keys = [keys];
    }
    const keysToRemove = Object.keys(this).filter(conditionKey => !keys.includes(conditionKey));
    this.remove(keysToRemove);
    return this;
  }
  toJson() {
    return JSON.stringify(this);
  }
  toString() {
    return this.forDb().filter(item => item).join('/');
  }
  forDb() {
    return [this.type, this.name, this.sub, this.subId];
  }
  forContext() {
    return {
      type: this.type,
      name: this.name,
      sub: this.sub,
      subId: this.subId
    };
  }
}
exports["default"] = Condition;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/context/services/conditions-config.js":
/*!***************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/context/services/conditions-config.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ConditionsConfig = void 0;
var _commands = __webpack_require__(/*! ../../data/commands */ "../core/app/modules/site-editor/assets/js/data/commands/index.js");
class ConditionsConfig {
  static instance;
  config = null;
  constructor(config) {
    this.config = config;
  }

  /**
   * @return {Promise<ConditionsConfig>} -
   */
  static create() {
    if (ConditionsConfig.instance) {
      return Promise.resolve(ConditionsConfig.instance);
    }
    return $e.data.get(_commands.ConditionsConfig.signature, {}, {
      refresh: true
    }).then(response => {
      ConditionsConfig.instance = new ConditionsConfig(response.data);
      return ConditionsConfig.instance;
    });
  }

  /**
   * Get main options for condition name.
   *
   * @return {Array} -
   */
  getOptions() {
    return this.getSubOptions('general', true).map(_ref => {
      let {
        label,
        value
      } = _ref;
      return {
        label,
        value
      };
    });
  }

  /**
   * Get the sub options for the select.
   *
   * @param {string}  itemName
   * @param {boolean} isSubItem
   * @return {Array} -
   */
  getSubOptions(itemName) {
    let isSubItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const config = this.config[itemName];
    if (!config) {
      return [];
    }
    return [{
      label: config.all_label,
      value: isSubItem ? itemName : ''
    }, ...config.sub_conditions.map(subName => {
      const subConfig = this.config[subName];
      return {
        label: subConfig.label,
        value: subName,
        children: subConfig.sub_conditions.length ? this.getSubOptions(subName, true) : null
      };
    })];
  }

  /**
   * Get the autocomplete property from the conditions config
   *
   * @param {string} sub
   * @return {{}|any} -
   */
  getSubIdAutocomplete(sub) {
    var _controls$;
    const config = this.config[sub];
    if (!config || !('object' === typeof config.controls)) {
      return {};
    }
    const controls = Object.values(config.controls);
    if (!(controls !== null && controls !== void 0 && (_controls$ = controls[0]) !== null && _controls$ !== void 0 && _controls$.autocomplete)) {
      return {};
    }
    return controls[0].autocomplete;
  }

  /**
   * Calculate instances from the conditions.
   *
   * @param {Array} conditions
   * @return {Object} -
   */
  calculateInstances(conditions) {
    let instances = conditions.reduce((current, condition) => {
      if ('exclude' === condition.type) {
        return current;
      }
      const key = condition.sub || condition.name,
        config = this.config[key];
      if (!config) {
        return current;
      }
      const instanceLabel = condition.subId ? `${config.label} #${condition.subId}` : config.all_label;
      return {
        ...current,
        [key]: instanceLabel
      };
    }, {});
    if (0 === Object.keys(instances).length) {
      instances = [__('No instances', 'tooto-pro')];
    }
    return instances;
  }
}
exports.ConditionsConfig = ConditionsConfig;
var _default = ConditionsConfig;
exports["default"] = _default;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/context/templates.js":
/*!**********************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/context/templates.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.TemplatesProvider = exports.Context = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _baseContext = _interopRequireDefault(__webpack_require__(/*! ./base-context */ "../core/app/modules/site-editor/assets/js/context/base-context.js"));
var _commands = __webpack_require__(/*! ../data/commands */ "../core/app/modules/site-editor/assets/js/data/commands/index.js");
var _component = _interopRequireDefault(__webpack_require__(/*! ../data/component */ "../core/app/modules/site-editor/assets/js/data/component.js"));
const Context = _react.default.createContext();
exports.Context = Context;
class TemplatesProvider extends _baseContext.default {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  static actions = {
    FETCH: 'fetch',
    DELETE: 'delete',
    UPDATE: 'update',
    IMPORT: 'import'
  };
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      action: {
        ...this.state.action,
        current: TemplatesProvider.actions.FETCH,
        loading: true
      },
      templates: {},
      updateTemplateItemState: this.updateTemplateItemState.bind(this),
      findTemplateItemInState: this.findTemplateItemInState.bind(this),
      fetchTemplates: this.fetchTemplates.bind(this),
      deleteTemplate: this.deleteTemplate.bind(this),
      updateTemplate: this.updateTemplate.bind(this),
      importTemplates: this.importTemplates.bind(this)
    };
  }
  componentDidMount() {
    this.fetchTemplates();
  }
  importTemplates(_ref) {
    let {
      fileName,
      fileData
    } = _ref;
    return this.executeAction(TemplatesProvider.actions.IMPORT, () => $e.data.create(_commands.Templates.signature, {
      fileName,
      fileData
    })).then(response => {
      this.updateTemplatesState(prev => ({
        ...prev,
        ...Object.values(response.data).reduce((current, template) => {
          if (!template.supportsSiteEditor) {
            return current;
          }
          return {
            ...current,
            [template.id]: template
          };
        }, {})
      }));
      return response;
    });
  }
  deleteTemplate(id) {
    return this.executeAction(TemplatesProvider.actions.DELETE, () => $e.data.delete(_commands.Templates.signature, {
      id
    })).then(() => {
      this.updateTemplatesState(prev => {
        const newTemplates = {
          ...prev
        };
        delete newTemplates[id];
        return newTemplates;
      });
    });
  }
  updateTemplate(id, args) {
    return this.executeAction(TemplatesProvider.actions.UPDATE, () => $e.data.update(_commands.Templates.signature, args, {
      id
    })).then(response => {
      this.updateTemplateItemState(id, response.data);
    });
  }
  fetchTemplates() {
    return this.executeAction(TemplatesProvider.actions.FETCH, () => $e.data.get(_commands.Templates.signature, {}, {
      refresh: true
    })).then(response => {
      this.updateTemplatesState(() => Object.values(response.data).reduce((current, template) => ({
        ...current,
        [template.id]: template
      }), {}), false);
    });
  }
  updateTemplateItemState(id, args) {
    return this.updateTemplatesState(prev => {
      const template = {
        ...prev[id],
        ...args
      };
      return {
        ...prev,
        [id]: template
      };
    });
  }
  updateTemplatesState(callback) {
    let clearCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (clearCache) {
      $e.data.deleteCache($e.components.get(_component.default.namespace), _commands.Templates.signature);
    }
    return this.setState(prev => {
      return {
        templates: callback(prev.templates)
      };
    });
  }
  findTemplateItemInState(id) {
    return this.state.templates[id];
  }
  render() {
    if (this.state.action.current === TemplatesProvider.actions.FETCH) {
      if (this.state.action.error) {
        return /*#__PURE__*/_react.default.createElement("h3", null, __('Error:', 'tooto-pro'), " ", this.state.action.error);
      }
      if (this.state.action.loading) {
        return /*#__PURE__*/_react.default.createElement("h3", null, __('Loading', 'tooto-pro'), "...");
      }
    }
    return /*#__PURE__*/_react.default.createElement(Context.Provider, {
      value: this.state
    }, this.props.children);
  }
}
exports.TemplatesProvider = TemplatesProvider;
var _default = TemplatesProvider;
exports["default"] = _default;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/data/commands/conditions-config.js":
/*!************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/data/commands/conditions-config.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ConditionsConfig = void 0;
class ConditionsConfig extends $e.modules.CommandData {
  static signature = 'site-editor/conditions-config';
  static getEndpointFormat() {
    return 'site-editor/conditions-config/{id}';
  }
}
exports.ConditionsConfig = ConditionsConfig;
var _default = ConditionsConfig;
exports["default"] = _default;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/data/commands/index.js":
/*!************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/data/commands/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "ConditionsConfig", ({
  enumerable: true,
  get: function () {
    return _conditionsConfig.ConditionsConfig;
  }
}));
Object.defineProperty(exports, "Templates", ({
  enumerable: true,
  get: function () {
    return _templates.Templates;
  }
}));
Object.defineProperty(exports, "TemplatesConditions", ({
  enumerable: true,
  get: function () {
    return _templatesConditions.TemplatesConditions;
  }
}));
Object.defineProperty(exports, "TemplatesConditionsConflicts", ({
  enumerable: true,
  get: function () {
    return _templatesConditionsConflicts.TemplatesConditionsConflicts;
  }
}));
var _templates = __webpack_require__(/*! ./templates */ "../core/app/modules/site-editor/assets/js/data/commands/templates.js");
var _conditionsConfig = __webpack_require__(/*! ./conditions-config */ "../core/app/modules/site-editor/assets/js/data/commands/conditions-config.js");
var _templatesConditions = __webpack_require__(/*! ./templates-conditions */ "../core/app/modules/site-editor/assets/js/data/commands/templates-conditions.js");
var _templatesConditionsConflicts = __webpack_require__(/*! ./templates-conditions-conflicts */ "../core/app/modules/site-editor/assets/js/data/commands/templates-conditions-conflicts.js");

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/data/commands/templates-conditions-conflicts.js":
/*!*************************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/data/commands/templates-conditions-conflicts.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.TemplatesConditionsConflicts = void 0;
class TemplatesConditionsConflicts extends $e.modules.CommandData {
  static signature = 'site-editor/templates-conditions-conflicts';
  static getEndpointFormat() {
    return `${TemplatesConditionsConflicts.signature}/{id}`;
  }
}
exports.TemplatesConditionsConflicts = TemplatesConditionsConflicts;
var _default = TemplatesConditionsConflicts;
exports["default"] = _default;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/data/commands/templates-conditions.js":
/*!***************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/data/commands/templates-conditions.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.TemplatesConditions = void 0;
class TemplatesConditions extends $e.modules.CommandData {
  static signature = 'site-editor/templates-conditions';
  static getEndpointFormat() {
    return 'site-editor/templates-conditions/{id}';
  }
}
exports.TemplatesConditions = TemplatesConditions;
var _default = TemplatesConditions;
exports["default"] = _default;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/data/commands/templates.js":
/*!****************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/data/commands/templates.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.Templates = void 0;
class Templates extends $e.modules.CommandData {
  static signature = 'site-editor/templates';
  static getEndpointFormat() {
    return 'site-editor/templates/{id}';
  }
}
exports.Templates = Templates;
var _default = Templates;
exports["default"] = _default;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/data/component.js":
/*!*******************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/data/component.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var dataCommands = _interopRequireWildcard(__webpack_require__(/*! ./commands */ "../core/app/modules/site-editor/assets/js/data/commands/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class Component extends $e.modules.ComponentBase {
  static namespace = 'site-editor';
  getNamespace() {
    return this.constructor.namespace;
  }
  defaultData() {
    return this.importCommands(dataCommands);
  }
}
exports["default"] = Component;

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/hooks/use-templates-screenshot.js":
/*!***********************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/hooks/use-templates-screenshot.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useTemplatesScreenshot;
var _templates = __webpack_require__(/*! ../context/templates */ "../core/app/modules/site-editor/assets/js/context/templates.js");
var _useScreenshot = _interopRequireWildcard(__webpack_require__(/*! modules/screenshots/app/assets/js/hooks/use-screenshot */ "../modules/screenshots/app/assets/js/hooks/use-screenshot.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Wrapper function that was made to take screenshots specific for template.
 * it will capture a screenshot and update the templates context with the new screenshot.
 *
 * @param {any} templateType
 */
function useTemplatesScreenshot() {
  let templateType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  const {
    updateTemplateItemState,
    templates
  } = React.useContext(_templates.Context);
  const templatesForScreenshot = Object.values(templates).filter(template => shouldScreenshotTemplate(template, templateType));

  // Start to capture screenshots.
  const screenshot = (0, _useScreenshot.default)(templatesForScreenshot);

  // Update the thumbnail url when screenshot created.
  React.useEffect(() => {
    screenshot.posts.filter(post => post.status === _useScreenshot.SCREENSHOT_STATUS_SUCCEED).forEach(post => updateTemplateItemState(post.id, {
      thumbnail: post.imageUrl
    }));
  }, [screenshot.succeed]);

  // Update the screenshot url that was failed.
  // When the user will hit the route on the second time it will avoid trying to take another screenshot.
  React.useEffect(() => {
    screenshot.posts.filter(post => post.status === _useScreenshot.SCREENSHOT_STATUS_FAILED).forEach(post => updateTemplateItemState(post.id, {
      screenshot_url: null
    }));
  }, [screenshot.failed]);
  return screenshot;
}

/**
 * Filter handler.
 * will remove all the drafts and private and also will filter by template type if exists.
 *
 * @param {any} template
 * @param {any} templateType
 * @return {boolean} -
 */
function shouldScreenshotTemplate(template) {
  let templateType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (templateType) {
    return false;
  }
  return 'publish' === template.status && !template.thumbnail && template.screenshot_url;
}

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/molecules/back-button.js":
/*!**************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/molecules/back-button.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = BackButton;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
__webpack_require__(/*! ./back-button.scss */ "../core/app/modules/site-editor/assets/js/molecules/back-button.scss");
function BackButton(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "back-button-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    className: "eps-back-button",
    text: __('Back', 'tooto-pro'),
    icon: "eicon-chevron-left",
    onClick: props.onClick
  }));
}
BackButton.propTypes = {
  onClick: PropTypes.func
};
BackButton.defaultProps = {
  onClick: () => history.back()
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/molecules/site-template-body.js":
/*!*********************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/molecules/site-template-body.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SiteTemplateBody = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
var _siteTemplateThumbnail = _interopRequireDefault(__webpack_require__(/*! ./site-template-thumbnail */ "../core/app/modules/site-editor/assets/js/molecules/site-template-thumbnail.js"));
var _previewIframe = _interopRequireDefault(__webpack_require__(/*! ../atoms/preview-iframe */ "../core/app/modules/site-editor/assets/js/atoms/preview-iframe.js"));
const SiteTemplateBody = props => {
  return /*#__PURE__*/_react.default.createElement(_appUi.CardBody, null, props.extended ? /*#__PURE__*/_react.default.createElement(_previewIframe.default, {
    src: props.previewUrl,
    templateType: props.type
  }) : /*#__PURE__*/_react.default.createElement(_siteTemplateThumbnail.default, {
    id: props.id,
    title: props.title,
    type: props.type,
    thumbnail: props.thumbnail,
    placeholder: props.placeholderUrl
  }));
};
exports.SiteTemplateBody = SiteTemplateBody;
SiteTemplateBody.propTypes = {
  extended: PropTypes.bool,
  id: PropTypes.number,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  placeholderUrl: PropTypes.string,
  type: PropTypes.string,
  previewUrl: PropTypes.string
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/molecules/site-template-footer.js":
/*!***********************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/molecules/site-template-footer.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SiteTemplateFooter = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
const SiteTemplateFooter = props => {
  const instances = Object.values(props.instances).join(', ');
  return /*#__PURE__*/_react.default.createElement(_appUi.CardFooter, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-template__instances"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Icon, {
    className: "eicon-flow"
  }), /*#__PURE__*/_react.default.createElement(_appUi.Text, {
    tag: "span",
    variant: "sm"
  }, /*#__PURE__*/_react.default.createElement("b", null, __('Instances', 'tooto-pro'), ":")), /*#__PURE__*/_react.default.createElement(_appUi.Text, {
    className: "e-site-template__instances-list",
    tag: "span",
    variant: "xxs"
  }, " ", instances), /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    text: __('Edit Conditions', 'tooto-pro'),
    className: "e-site-template__edit-conditions",
    url: `/site-editor/conditions/${props.id}`
  })));
};
exports.SiteTemplateFooter = SiteTemplateFooter;
SiteTemplateFooter.propTypes = {
  id: PropTypes.number.isRequired,
  instances: PropTypes.any
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/molecules/site-template-header.js":
/*!***********************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/molecules/site-template-header.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SiteTemplateHeader = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
var _dialogsAndButtons = _interopRequireDefault(__webpack_require__(/*! ../part-actions/dialogs-and-buttons */ "../core/app/modules/site-editor/assets/js/part-actions/dialogs-and-buttons.js"));
var _indicatorBullet = __webpack_require__(/*! ../atoms/indicator-bullet */ "../core/app/modules/site-editor/assets/js/atoms/indicator-bullet.js");
const SiteTemplateHeader = props => {
  const status = props.status && 'publish' !== props.status ? ` (${props.status})` : '',
    title = props.title + status,
    ActionButtons = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
      text: __('Edit', 'tooto-pro'),
      icon: "eicon-edit",
      className: "e-site-template__edit-btn",
      size: "sm",
      url: props.editURL
    }), /*#__PURE__*/_react.default.createElement(_dialogsAndButtons.default, props)),
    MetaDataIcon = innerProps => /*#__PURE__*/_react.default.createElement(_appUi.Text, {
      tag: "span",
      className: "e-site-template__meta-data"
    }, /*#__PURE__*/_react.default.createElement(_appUi.Icon, {
      className: innerProps.icon
    }), innerProps.content),
    MetaData = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(MetaDataIcon, {
      icon: "eicon-user-circle-o",
      content: props.author
    }), /*#__PURE__*/_react.default.createElement(MetaDataIcon, {
      icon: "eicon-clock-o",
      content: props.modifiedDate
    })),
    IndicatorDot = props.showInstances ? /*#__PURE__*/_react.default.createElement(_indicatorBullet.Indicator, {
      active: props.isActive
    }) : '';
  return /*#__PURE__*/_react.default.createElement(_appUi.CardHeader, null, IndicatorDot, /*#__PURE__*/_react.default.createElement(_appUi.Heading, {
    tag: "h1",
    title: title,
    variant: "text-sm",
    className: "eps-card__headline"
  }, title), props.extended && /*#__PURE__*/_react.default.createElement(MetaData, null), props.extended && /*#__PURE__*/_react.default.createElement(ActionButtons, null));
};
exports.SiteTemplateHeader = SiteTemplateHeader;
SiteTemplateHeader.propTypes = {
  isActive: PropTypes.bool,
  author: PropTypes.string,
  editURL: PropTypes.string,
  extended: PropTypes.bool,
  modifiedDate: PropTypes.string,
  status: PropTypes.string,
  title: PropTypes.string,
  showInstances: PropTypes.bool
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/molecules/site-template-thumbnail.js":
/*!**************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/molecules/site-template-thumbnail.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = SiteTemplateThumbnail;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
function SiteTemplateThumbnail(props) {
  return /*#__PURE__*/_react.default.createElement(_appUi.CardImage, {
    alt: props.title,
    src: props.thumbnail || props.placeholder,
    className: !props.thumbnail ? 'e-site-template__placeholder' : ''
  }, /*#__PURE__*/_react.default.createElement(_appUi.CardOverlay, {
    className: "e-site-template__overlay-preview"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    className: "e-site-template__overlay-preview-button",
    text: __('Preview', 'tooto-pro'),
    icon: "eicon-preview-medium",
    url: `/site-editor/templates/${props.type}/${props.id}`
  })));
}
SiteTemplateThumbnail.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
  thumbnail: PropTypes.string,
  placeholder: PropTypes.string
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/molecules/site-template.js":
/*!****************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/molecules/site-template.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = SiteTemplate;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
var _siteTemplateHeader = __webpack_require__(/*! ./site-template-header */ "../core/app/modules/site-editor/assets/js/molecules/site-template-header.js");
var _siteTemplateBody = __webpack_require__(/*! ./site-template-body */ "../core/app/modules/site-editor/assets/js/molecules/site-template-body.js");
var _siteTemplateFooter = __webpack_require__(/*! ./site-template-footer */ "../core/app/modules/site-editor/assets/js/molecules/site-template-footer.js");
__webpack_require__(/*! ./site-template.scss */ "../core/app/modules/site-editor/assets/js/molecules/site-template.scss");
function SiteTemplate(props) {
  const baseClassName = 'e-site-template',
    classes = [baseClassName],
    ref = _react.default.useRef(null);
  _react.default.useEffect(() => {
    if (!props.isSelected) {
      return;
    }
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, [props.isSelected]);
  if (props.extended) {
    classes.push(`${baseClassName}--extended`);
  }
  if (props.aspectRatio) {
    classes.push(`${baseClassName}--${props.aspectRatio}`);
  }
  const CardFooter = props.extended && props.showInstances ? /*#__PURE__*/_react.default.createElement(_siteTemplateFooter.SiteTemplateFooter, props) : '';
  return /*#__PURE__*/_react.default.createElement(_appUi.Card, {
    className: classes.join(' '),
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(_siteTemplateHeader.SiteTemplateHeader, props), /*#__PURE__*/_react.default.createElement(_siteTemplateBody.SiteTemplateBody, props), CardFooter);
}
SiteTemplate.propTypes = {
  aspectRatio: PropTypes.string,
  className: PropTypes.string,
  extended: PropTypes.bool,
  id: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  status: PropTypes.string,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  type: PropTypes.string.isRequired,
  showInstances: PropTypes.bool
};
SiteTemplate.defaultProps = {
  isSelected: false
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/organisms/site-templates.js":
/*!*****************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/organisms/site-templates.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = SiteTemplates;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
var _siteTemplate = _interopRequireDefault(__webpack_require__(/*! ../molecules/site-template */ "../core/app/modules/site-editor/assets/js/molecules/site-template.js"));
var _dialogsAndButtons = __webpack_require__(/*! ../part-actions/dialogs-and-buttons */ "../core/app/modules/site-editor/assets/js/part-actions/dialogs-and-buttons.js");
var _templates = __webpack_require__(/*! ../context/templates */ "../core/app/modules/site-editor/assets/js/context/templates.js");
var _useTemplatesScreenshot = _interopRequireDefault(__webpack_require__(/*! ../hooks/use-templates-screenshot */ "../core/app/modules/site-editor/assets/js/hooks/use-templates-screenshot.js"));
function SiteTemplates(props) {
  const {
    templates: contextTemplates,
    action,
    resetActionState
  } = _react.default.useContext(_templates.Context);
  let gridColumns, templates;

  // Make the templates object a memorize value, will re run again only if
  // templates has been changed, also sort the templates by `isActive`.
  templates = _react.default.useMemo(() => {
    return Object.values(contextTemplates).sort((a, b) => {
      // This sort make sure to show first the active templates, second the
      // inactive templates that are not draft, and then the drafts,
      // in each category it sorts it inside by date.

      if (!b.isActive && !a.isActive) {
        if ('draft' === b.status && 'draft' === a.status || 'draft' !== b.status && 'draft' !== a.status) {
          return b.date < a.date ? 1 : -1;
        }
        return 'draft' === a.status ? 1 : -1;
      }
      if (b.isActive && a.isActive) {
        return b.date < a.date ? 1 : -1;
      }
      return b.isActive ? 1 : -1;
    });
  }, [contextTemplates]);

  // Start to capture screenshots.
  (0, _useTemplatesScreenshot.default)(props.type);
  const siteTemplateConfig = {};
  if (props.type) {
    templates = templates.filter(item => item.type === props.type);
    siteTemplateConfig.extended = true;
    siteTemplateConfig.type = props.type;
    switch (props.type) {
      case 'header':
      case 'footer':
        gridColumns = 1;
        siteTemplateConfig.aspectRatio = 'wide';
        break;
      default:
        gridColumns = 2;
    }
  }
  if (!templates || !templates.length) {
    return /*#__PURE__*/_react.default.createElement("h3", null, __('No Templates found. Want to create one?', 'tooto-pro'), "...");
  }
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "e-site-editor__site-templates"
  }, /*#__PURE__*/_react.default.createElement(_dialogsAndButtons.PartActionsDialogs, null), action.error && /*#__PURE__*/_react.default.createElement(_appUi.Dialog, {
    text: action.error,
    dismissButtonText: __('Go Back', 'tooto-pro'),
    dismissButtonOnClick: resetActionState,
    approveButtonText: __('Learn More', 'tooto-pro'),
    approveButtonColor: "link",
    approveButtonUrl: "https://go.tooto.com/app-theme-builder-template-load-issue",
    approveButtonTarget: "_target"
  }), /*#__PURE__*/_react.default.createElement(_appUi.CssGrid, {
    columns: gridColumns,
    spacing: 24,
    colMinWidth: 200
  }, templates.map(item => /*#__PURE__*/_react.default.createElement(_siteTemplate.default, (0, _extends2.default)({
    key: item.id
  }, item, siteTemplateConfig, {
    isSelected: parseInt(props.id) === item.id
  })))));
}
SiteTemplates.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/add-new.js":
/*!******************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/add-new.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = AddNew;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
var _siteEditor = __webpack_require__(/*! @tooto/site-editor */ "@tooto/site-editor");
__webpack_require__(/*! ./add-new.scss */ "../core/app/modules/site-editor/assets/js/pages/add-new.scss");
var _templates = __webpack_require__(/*! ../context/templates */ "../core/app/modules/site-editor/assets/js/context/templates.js");
var _backButton = _interopRequireDefault(__webpack_require__(/*! ../molecules/back-button */ "../core/app/modules/site-editor/assets/js/molecules/back-button.js"));
var _useFeatureLock = _interopRequireDefault(__webpack_require__(/*! tooto-pro-app/hooks/use-feature-lock */ "../core/app/assets/js/hooks/use-feature-lock.js"));
function AddNew() {
  const {
      templates
    } = _react.default.useContext(_templates.Context),
    hasTemplates = 1 <= Object.keys(templates).length;
  const {
    isLocked,
    ConnectButton
  } = (0, _useFeatureLock.default)('site-editor');

  /**
   * An hover element for each site part.
   *
   * @param {any} props
   */
  const HoverElement = props => {
    if (isLocked) {
      return /*#__PURE__*/_react.default.createElement(_appUi.CardOverlay, {
        className: "e-site-editor__promotion-overlay"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "e-site-editor__promotion-overlay__link"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "e-site-editor__promotion-overlay__icon eicon-lock"
      })));
    }
    return /*#__PURE__*/_react.default.createElement("a", {
      href: props.urls.create,
      className: "eps-card__image-overlay eps-add-new__overlay"
    }, /*#__PURE__*/_react.default.createElement(_appUi.AddNewButton, {
      hideText: true
    }));
  };
  HoverElement.propTypes = {
    urls: PropTypes.object.isRequired
  };
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "e-site-editor__add-new"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Grid, {
    container: true,
    direction: "column",
    className: "e-site-editor__header"
  }, hasTemplates && /*#__PURE__*/_react.default.createElement(_appUi.Grid, {
    item: true
  }, /*#__PURE__*/_react.default.createElement(_backButton.default, null)), /*#__PURE__*/_react.default.createElement(_appUi.Grid, {
    item: true,
    container: true,
    justify: "space-between",
    alignItems: "start"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Heading, {
    variant: "h1"
  }, __('Start customizing every part of your site', 'tooto-pro')), isLocked && /*#__PURE__*/_react.default.createElement(ConnectButton, null))), /*#__PURE__*/_react.default.createElement(_siteEditor.SiteParts, {
    hoverElement: HoverElement
  }));
}

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-conflicts.js":
/*!*****************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/conditions/condition-conflicts.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ConditionConflicts;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
function ConditionConflicts(props) {
  if (!props.conflicts.length) {
    return '';
  }
  const conflictLinks = props.conflicts.map(conflict => {
    return /*#__PURE__*/_react.default.createElement(_appUi.Button, {
      key: conflict.template_id,
      target: "_blank",
      url: conflict.edit_url,
      text: conflict.template_title
    });
  });
  return /*#__PURE__*/_react.default.createElement(_appUi.Text, {
    className: "e-site-editor-conditions__conflict",
    variant: "sm"
  }, __('tooto recognized that you have set this location for other templates: ', 'tooto-pro'), " ", conflictLinks);
}
ConditionConflicts.propTypes = {
  conflicts: PropTypes.array.isRequired
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-name.js":
/*!************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/conditions/condition-name.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ConditionName;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
function ConditionName(props) {
  // Hide for template types that has another default, like single & archive.
  if ('general' !== props.default) {
    return '';
  }
  const onChange = e => props.updateConditions(props.id, {
    name: e.target.value,
    sub: '',
    subId: ''
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__input-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Select, {
    options: props.options,
    value: props.name,
    onChange: onChange
  }));
}
ConditionName.propTypes = {
  updateConditions: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  default: PropTypes.string.isRequired
};
ConditionName.defaultProps = {
  name: ''
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-sub-id.js":
/*!**************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/conditions/condition-sub-id.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ConditionSubId;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
/**
 * Main component.
 *
 * @param {any} props
 * @return {any} -
 * @class
 */
function ConditionSubId(props) {
  const settings = _react.default.useMemo(() => Object.keys(props.subIdAutocomplete).length ? getSettings(props.subIdAutocomplete) : null, [props.subIdAutocomplete]);
  if (!props.sub || !settings) {
    return '';
  }
  const onChange = e => props.updateConditions(props.id, {
    subId: e.target.value
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__input-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Select2, {
    onChange: onChange,
    value: props.subId,
    settings: settings,
    options: props.subIdOptions
  }));
}

/**
 * Get settings for the select2 base on the autocomplete settings,
 * that passes as a prop
 *
 * @param {any} autocomplete
 * @return {Object} -
 */
function getSettings(autocomplete) {
  return {
    allowClear: false,
    placeholder: __('All', 'tooto-pro'),
    dir: tootoCommon.config.isRTL ? 'rtl' : 'ltr',
    ajax: {
      transport(params, success, failure) {
        return tootoCommon.ajax.addRequest('pro_panel_posts_control_filter_autocomplete', {
          data: {
            q: params.data.q,
            autocomplete
          },
          success,
          error: failure
        });
      },
      data(params) {
        return {
          q: params.term,
          page: params.page
        };
      },
      cache: true
    },
    escapeMarkup(markup) {
      return markup;
    },
    minimumInputLength: 1
  };
}
ConditionSubId.propTypes = {
  subIdAutocomplete: PropTypes.object,
  id: PropTypes.string.isRequired,
  sub: PropTypes.string,
  subId: PropTypes.string,
  updateConditions: PropTypes.func,
  subIdOptions: PropTypes.array
};
ConditionSubId.defaultProps = {
  subId: '',
  subIdOptions: []
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-sub.js":
/*!***********************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/conditions/condition-sub.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ConditionSub;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
function ConditionSub(props) {
  if ('general' === props.name || !props.subOptions.length) {
    return '';
  }
  const onChange = e => props.updateConditions(props.id, {
    sub: e.target.value,
    subId: ''
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__input-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Select, {
    options: props.subOptions,
    value: props.sub,
    onChange: onChange
  }));
}
ConditionSub.propTypes = {
  updateConditions: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  subOptions: PropTypes.array.isRequired
};
ConditionSub.defaultProps = {
  sub: '',
  subOptions: {}
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-type.js":
/*!************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/conditions/condition-type.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ConditionType;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
function ConditionType(props) {
  const wrapperRef = _react.default.createRef();
  const options = [{
    label: __('Include', 'tooto-pro'),
    value: 'include'
  }, {
    label: __('Exclude', 'tooto-pro'),
    value: 'exclude'
  }];
  const onChange = e => {
    props.updateConditions(props.id, {
      type: e.target.value
    });
  };
  _react.default.useEffect(() => {
    wrapperRef.current.setAttribute('data-tooto-condition-type', props.type);
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__input-wrapper e-site-editor-conditions__input-wrapper--condition-type",
    ref: wrapperRef
  }, /*#__PURE__*/_react.default.createElement(_appUi.Select, {
    options: options,
    value: props.type,
    onChange: onChange
  }));
}
ConditionType.propTypes = {
  updateConditions: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
ConditionType.defaultProps = {
  type: ''
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/conditions/conditions-rows.js":
/*!*************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/conditions/conditions-rows.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ConditionsRows;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));
var _conditions = __webpack_require__(/*! ../../context/conditions */ "../core/app/modules/site-editor/assets/js/context/conditions.js");
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
var _conditionType = _interopRequireDefault(__webpack_require__(/*! ./condition-type */ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-type.js"));
var _conditionName = _interopRequireDefault(__webpack_require__(/*! ./condition-name */ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-name.js"));
var _conditionSub = _interopRequireDefault(__webpack_require__(/*! ./condition-sub */ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-sub.js"));
var _conditionSubId = _interopRequireDefault(__webpack_require__(/*! ./condition-sub-id */ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-sub-id.js"));
var _conditionConflicts = _interopRequireDefault(__webpack_require__(/*! ./condition-conflicts */ "../core/app/modules/site-editor/assets/js/pages/conditions/condition-conflicts.js"));
function ConditionsRows(props) {
  const {
    conditions,
    createConditionItemInState: create,
    updateConditionItemState: update,
    removeConditionItemInState: remove,
    saveConditions: save,
    action,
    resetActionState
  } = _react.default.useContext(_conditions.Context);
  const rows = Object.values(conditions).map(condition => /*#__PURE__*/_react.default.createElement("div", {
    key: condition.id
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `e-site-editor-conditions__row-controls ${condition.conflictErrors.length && 'e-site-editor-conditions__row-controls--error'}`
  }, /*#__PURE__*/_react.default.createElement(_conditionType.default, (0, _extends2.default)({}, condition, {
    updateConditions: update
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__row-controls-inner"
  }, /*#__PURE__*/_react.default.createElement(_conditionName.default, (0, _extends2.default)({}, condition, {
    updateConditions: update
  })), /*#__PURE__*/_react.default.createElement(_conditionSub.default, (0, _extends2.default)({}, condition, {
    updateConditions: update
  })), /*#__PURE__*/_react.default.createElement(_conditionSubId.default, (0, _extends2.default)({}, condition, {
    updateConditions: update
  })))), /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    className: "e-site-editor-conditions__remove-condition",
    text: __('Delete', 'tooto-pro'),
    icon: "eicon-close",
    hideText: true,
    onClick: () => remove(condition.id)
  })), /*#__PURE__*/_react.default.createElement(_conditionConflicts.default, {
    conflicts: condition.conflictErrors
  })));
  const isSaving = action.current === _conditions.ConditionsProvider.actions.SAVE && action.loading;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, action.error && /*#__PURE__*/_react.default.createElement(_appUi.Dialog, {
    text: action.error,
    dismissButtonText: __('Go Back', 'tooto-pro'),
    dismissButtonOnClick: resetActionState,
    approveButtonText: __('Learn More', 'tooto-pro'),
    approveButtonColor: "link",
    approveButtonUrl: "https://go.tooto.com/app-theme-builder-conditions-load-issue",
    approveButtonTarget: "_target"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__rows"
  }, rows), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__add-button-container"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    className: "e-site-editor-conditions__add-button",
    variant: "contained",
    size: "lg",
    text: __('Add Condition', 'tooto-pro'),
    onClick: create
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__footer"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    variant: "contained",
    color: "primary",
    size: "lg",
    hideText: isSaving,
    icon: isSaving ? 'eicon-loading eicon-animation-spin' : '',
    text: __('Save & Close', 'tooto-pro'),
    onClick: () => save().then(props.onAfterSave)
  })));
}
ConditionsRows.propTypes = {
  onAfterSave: PropTypes.func
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/conditions/conditions.js":
/*!********************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/conditions/conditions.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Conditions;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
var _conditions = _interopRequireDefault(__webpack_require__(/*! ../../context/conditions */ "../core/app/modules/site-editor/assets/js/context/conditions.js"));
var _templates = __webpack_require__(/*! ../../context/templates */ "../core/app/modules/site-editor/assets/js/context/templates.js");
var _conditionsRows = _interopRequireDefault(__webpack_require__(/*! ./conditions-rows */ "../core/app/modules/site-editor/assets/js/pages/conditions/conditions-rows.js"));
__webpack_require__(/*! ./conditions.scss */ "../core/app/modules/site-editor/assets/js/pages/conditions/conditions.scss");
var _backButton = _interopRequireDefault(__webpack_require__(/*! ../../molecules/back-button */ "../core/app/modules/site-editor/assets/js/molecules/back-button.js"));
function Conditions(props) {
  const {
      findTemplateItemInState,
      updateTemplateItemState
    } = _react.default.useContext(_templates.Context),
    template = findTemplateItemInState(parseInt(props.id));
  if (!template) {
    return /*#__PURE__*/_react.default.createElement("div", null, __('Not Found', 'tooto-pro'));
  }
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "e-site-editor-conditions"
  }, /*#__PURE__*/_react.default.createElement(_backButton.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "e-site-editor-conditions__header"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "e-site-editor-conditions__header-image",
    src: `${tootoAppProConfig.baseUrl}/modules/theme-builder/assets/images/conditions-tab.svg`,
    alt: __('Import template', 'tooto-pro')
  }), /*#__PURE__*/_react.default.createElement(_appUi.Heading, {
    variant: "h1",
    tag: "h1"
  }, __('Where Do You Want to Display Your Template?', 'tooto-pro')), /*#__PURE__*/_react.default.createElement(_appUi.Text, {
    variant: "p"
  }, __('Set the conditions that determine where your template is used throughout your site.', 'tooto-pro'), /*#__PURE__*/_react.default.createElement("br", null), __('For example, choose \'Entire Site\' to display the template across your site.', 'tooto-pro'))), /*#__PURE__*/_react.default.createElement(_conditions.default, {
    currentTemplate: template,
    onConditionsSaved: updateTemplateItemState
  }, /*#__PURE__*/_react.default.createElement(_conditionsRows.default, {
    onAfterSave: () => history.back()
  })));
}
Conditions.propTypes = {
  id: PropTypes.string
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/import.js":
/*!*****************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/import.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Import;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
var _templates = __webpack_require__(/*! ../context/templates */ "../core/app/modules/site-editor/assets/js/context/templates.js");
var _backButton = _interopRequireDefault(__webpack_require__(/*! ../molecules/back-button */ "../core/app/modules/site-editor/assets/js/molecules/back-button.js"));
function Import() {
  const {
      importTemplates,
      action,
      resetActionState
    } = _react.default.useContext(_templates.Context),
    [importedTemplate, setImportedTemplate] = _react.default.useState(null),
    isImport = _react.default.useMemo(() => action.current === _templates.TemplatesProvider.actions.IMPORT, [action]),
    isUploading = _react.default.useMemo(() => isImport && action.loading, [action]),
    hasError = _react.default.useMemo(() => isImport && action.error, [action]);
  const upload = _react.default.useCallback(file => {
    if (isUploading) {
      return;
    }
    readFile(file).then(fileData => importTemplates({
      fileName: file.name,
      fileData
    })).then(response => {
      // For now it show a dialog for the first template ONLY!
      setImportedTemplate(response.data[0]);
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "site-editor__import"
  }, importedTemplate && /*#__PURE__*/_react.default.createElement(_appUi.Dialog, {
    title: __('Your template was imported', 'tooto-pro'),
    approveButtonText: __('Preview', 'tooto-pro'),
    approveButtonUrl: importedTemplate.url,
    approveButtonTarget: "_blank",
    dismissButtonText: __('Edit', 'tooto-pro'),
    dismissButtonUrl: importedTemplate.editURL,
    dismissButtonTarget: "_top",
    onClose: () => setImportedTemplate(null)
  }), hasError && /*#__PURE__*/_react.default.createElement(_appUi.Dialog, {
    title: action.error,
    approveButtonText: __('Learn More', 'tooto-pro'),
    approveButtonUrl: "https://go.tooto.com/app-theme-builder-import-issue",
    approveButtonTarget: "_blank",
    approveButtonColor: "link",
    dismissButtonText: __('Go Back', 'tooto-pro'),
    dismissButtonOnClick: resetActionState,
    onClose: resetActionState
  }), /*#__PURE__*/_react.default.createElement(_backButton.default, null), /*#__PURE__*/_react.default.createElement(_appUi.DropZone, {
    heading: __('Import Template To Your Library', 'tooto-pro'),
    text: __('Drag & Drop your .JSON or .zip template file', 'tooto-pro'),
    secondaryText: __('or', 'tooto-pro'),
    onFileSelect: upload,
    isLoading: isUploading,
    filetypes: ['zip', 'json']
  }));
}
function readFile(file) {
  return new Promise(resolve => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = event => {
      // Replace the mime type that prepended to the base64 with empty string and return a
      // resolved promise only with the base64 string.
      resolve(event.target.result.replace(/^[^,]+,/, ''));
    };
  });
}

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/template-type.js":
/*!************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/template-type.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = TemplateType;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _siteEditor = __webpack_require__(/*! @tooto/site-editor */ "@tooto/site-editor");
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
var _siteTemplates = _interopRequireDefault(__webpack_require__(/*! ../organisms/site-templates */ "../core/app/modules/site-editor/assets/js/organisms/site-templates.js"));
var _useFeatureLock = _interopRequireDefault(__webpack_require__(/*! tooto-pro-app/hooks/use-feature-lock */ "../core/app/assets/js/hooks/use-feature-lock.js"));
__webpack_require__(/*! ./template-type.scss */ "../core/app/modules/site-editor/assets/js/pages/template-type.scss");
function TemplateType(props) {
  const {
      templateTypes
    } = _react.default.useContext(_siteEditor.TemplateTypesContext),
    currentType = templateTypes.find(item => item.type === props.type),
    {
      isLocked,
      ConnectButton
    } = (0, _useFeatureLock.default)('site-editor');
  if (!currentType) {
    return /*#__PURE__*/_react.default.createElement(_appUi.NotFound, null);
  }
  return /*#__PURE__*/_react.default.createElement("section", {
    className: `e-site-editor__templates e-site-editor__templates--type-${props.type}`
  }, /*#__PURE__*/_react.default.createElement(_appUi.Grid, {
    className: "page-header",
    container: true,
    justify: "space-between"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Heading, {
    variant: "h1"
  }, currentType.page_title), isLocked ? /*#__PURE__*/_react.default.createElement(ConnectButton, null) : /*#__PURE__*/_react.default.createElement(_appUi.AddNewButton, {
    url: currentType.urls.create,
    text: __('Add New', 'tooto-pro')
  })), /*#__PURE__*/_react.default.createElement("hr", {
    className: "eps-separator"
  }), /*#__PURE__*/_react.default.createElement(_siteTemplates.default, {
    type: currentType.type,
    id: props.id
  }));
}
TemplateType.propTypes = {
  type: PropTypes.string,
  page_title: PropTypes.string,
  id: PropTypes.string
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/pages/templates.js":
/*!********************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/pages/templates.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Templates;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _siteTemplates = _interopRequireDefault(__webpack_require__(/*! ../organisms/site-templates */ "../core/app/modules/site-editor/assets/js/organisms/site-templates.js"));
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
var _useFeatureLock = _interopRequireDefault(__webpack_require__(/*! tooto-pro-app/hooks/use-feature-lock */ "../core/app/assets/js/hooks/use-feature-lock.js"));
function Templates() {
  const {
    isLocked,
    ConnectButton
  } = (0, _useFeatureLock.default)('site-editor');
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "e-site-editor__site-templates"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Grid, {
    container: true,
    justify: "space-between",
    alignItems: "start",
    className: "page-header"
  }, /*#__PURE__*/_react.default.createElement("h1", null, __('Your Site\'s Global Parts', 'tooto-pro')), isLocked ? /*#__PURE__*/_react.default.createElement(ConnectButton, null) : /*#__PURE__*/_react.default.createElement(_appUi.AddNewButton, {
    url: "/site-editor/add-new"
  })), /*#__PURE__*/_react.default.createElement("hr", {
    className: "eps-separator"
  }), /*#__PURE__*/_react.default.createElement(_siteTemplates.default, null));
}

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/part-actions/dialog-delete.js":
/*!*******************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/part-actions/dialog-delete.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = DialogDelete;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
var _templates = __webpack_require__(/*! ../context/templates */ "../core/app/modules/site-editor/assets/js/context/templates.js");
function DialogDelete(props) {
  const {
    deleteTemplate,
    findTemplateItemInState
  } = _react.default.useContext(_templates.Context);
  const closeDialog = shouldUpdate => {
    props.setId(null);
    if (shouldUpdate) {
      deleteTemplate(props.id);
    }
  };
  if (!props.id) {
    return '';
  }
  const template = findTemplateItemInState(props.id);
  return /*#__PURE__*/_react.default.createElement(_appUi.Dialog, {
    title: __('Move Item To Trash', 'tooto-pro'),
    text: __('Are you sure you want to move this item to trash:', 'tooto-pro') + ` "${template.title}"`,
    onSubmit: () => closeDialog(true),
    approveButtonText: __('Move to Trash', 'tooto-pro'),
    approveButtonOnClick: () => closeDialog(true),
    approveButtonColor: "danger",
    dismissButtonText: __('Cancel', 'tooto-pro'),
    dismissButtonOnClick: () => closeDialog(),
    onClose: () => closeDialog()
  });
}
DialogDelete.propTypes = {
  id: PropTypes.number,
  setId: PropTypes.func.isRequired
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/part-actions/dialog-rename.js":
/*!*******************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/part-actions/dialog-rename.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = DialogRename;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
var _templates = __webpack_require__(/*! ../context/templates */ "../core/app/modules/site-editor/assets/js/context/templates.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function DialogRename(props) {
  const {
      findTemplateItemInState,
      updateTemplate
    } = _react.default.useContext(_templates.Context),
    template = findTemplateItemInState(props.id);
  const [title, setTitle] = _react.default.useState('');
  (0, _react.useEffect)(() => {
    // The "title" state should be updated if the template title changed.
    if (template) {
      setTitle(template.title);
    }
  }, [template]);
  const closeDialog = shouldUpdate => {
    props.setId(null);
    if (shouldUpdate) {
      updateTemplate(props.id, {
        post_title: title
      });
    }
  };
  if (!props.id) {
    return '';
  }
  return /*#__PURE__*/_react.default.createElement(_appUi.Dialog, {
    title: __('Rename Site Part', 'tooto-pro'),
    approveButtonText: __('Change', 'tooto-pro'),
    onSubmit: () => closeDialog(true),
    approveButtonOnClick: () => closeDialog(true),
    approveButtonColor: "primary",
    dismissButtonText: __('Cancel', 'tooto-pro'),
    dismissButtonOnClick: () => closeDialog(),
    onClose: () => closeDialog()
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "eps-input eps-input-text eps-input--block"
    // eslint-disable-next-line jsx-a11y/no-autofocus
    ,
    autoFocus: true,
    value: title,
    onChange: e => setTitle(e.target.value)
  }));
}
DialogRename.propTypes = {
  id: PropTypes.number,
  setId: PropTypes.func.isRequired
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/part-actions/dialogs-and-buttons.js":
/*!*************************************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/part-actions/dialogs-and-buttons.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];
/* provided dependency */ var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PartActionsDialogs = PartActionsDialogs;
exports["default"] = PartActionsButtons;
exports.handlers = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _dialogRename = _interopRequireDefault(__webpack_require__(/*! ./dialog-rename */ "../core/app/modules/site-editor/assets/js/part-actions/dialog-rename.js"));
var _dialogDelete = _interopRequireDefault(__webpack_require__(/*! ./dialog-delete */ "../core/app/modules/site-editor/assets/js/part-actions/dialog-delete.js"));
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
const handlers = {
  rename: null,
  delete: null
};

// TODO: Think about refactor to portals: https://reactjs.org/docs/portals.html
exports.handlers = handlers;
function PartActionsDialogs() {
  const [DialogRenameId, setDialogRenameId] = _react.default.useState(null);
  const [DialogDeleteId, setDialogDeleteId] = _react.default.useState(null);
  handlers.rename = setDialogRenameId;
  handlers.delete = setDialogDeleteId;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_dialogRename.default, {
    id: DialogRenameId,
    setId: setDialogRenameId
  }), /*#__PURE__*/_react.default.createElement(_dialogDelete.default, {
    id: DialogDeleteId,
    setId: setDialogDeleteId
  }));
}
function PartActionsButtons(props) {
  const [showMenu, setShowMenu] = _react.default.useState(false);
  let SiteTemplatePopover = '';
  if (showMenu) {
    SiteTemplatePopover = /*#__PURE__*/_react.default.createElement(_appUi.Popover, {
      closeFunction: () => setShowMenu(!showMenu)
    }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
      className: "eps-popover__item",
      icon: "eicon-sign-out",
      text: __('Export', 'tooto-pro'),
      url: props.exportLink
    })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
      className: "eps-popover__item eps-popover__item--danger",
      icon: "eicon-trash-o",
      text: __('Trash', 'tooto-pro'),
      onClick: () => handlers.delete(props.id)
    })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
      className: "eps-popover__item",
      icon: "eicon-edit",
      text: __('Rename', 'tooto-pro'),
      onClick: () => handlers.rename(props.id)
    })));
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "eps-popover__container"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    text: __('Toggle', 'tooto-pro'),
    hideText: true,
    icon: "eicon-ellipsis-h",
    size: "lg",
    onClick: () => setShowMenu(!showMenu)
  }), SiteTemplatePopover);
}
PartActionsButtons.propTypes = {
  id: PropTypes.number.isRequired,
  exportLink: PropTypes.string.isRequired
};

/***/ }),

/***/ "../core/app/modules/site-editor/assets/js/site-editor.js":
/*!****************************************************************!*\
  !*** ../core/app/modules/site-editor/assets/js/site-editor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n")["__"];


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! @reach/router */ "../node_modules/@reach/router/es/index.js");
var _templates = _interopRequireDefault(__webpack_require__(/*! ./pages/templates */ "../core/app/modules/site-editor/assets/js/pages/templates.js"));
var _templateType = _interopRequireDefault(__webpack_require__(/*! ./pages/template-type */ "../core/app/modules/site-editor/assets/js/pages/template-type.js"));
var _addNew = _interopRequireDefault(__webpack_require__(/*! ./pages/add-new */ "../core/app/modules/site-editor/assets/js/pages/add-new.js"));
var _conditions = _interopRequireDefault(__webpack_require__(/*! ./pages/conditions/conditions */ "../core/app/modules/site-editor/assets/js/pages/conditions/conditions.js"));
var _import = _interopRequireDefault(__webpack_require__(/*! ./pages/import */ "../core/app/modules/site-editor/assets/js/pages/import.js"));
var _templates2 = _interopRequireWildcard(__webpack_require__(/*! ./context/templates */ "../core/app/modules/site-editor/assets/js/context/templates.js"));
var _siteEditor = __webpack_require__(/*! @tooto/site-editor */ "@tooto/site-editor");
var _appUi = __webpack_require__(/*! @tooto/app-ui */ "@tooto/app-ui");
var _router2 = _interopRequireDefault(__webpack_require__(/*! @tooto/router */ "@tooto/router"));
var _component = _interopRequireDefault(__webpack_require__(/*! ./data/component */ "../core/app/modules/site-editor/assets/js/data/component.js"));
var _useFeatureLock = _interopRequireDefault(__webpack_require__(/*! tooto-pro-app/hooks/use-feature-lock */ "../core/app/assets/js/hooks/use-feature-lock.js"));
__webpack_require__(/*! ./site-editor.scss */ "../core/app/modules/site-editor/assets/js/site-editor.scss");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function SiteEditor() {
  var _tootoAppProConfi, _tootoAppProConfi2;
  const {
    isLocked
  } = (0, _useFeatureLock.default)('site-editor');
  const basePath = 'site-editor';
  const headerButtons = [{
    id: 'import',
    text: __('import', 'tooto-pro'),
    hideText: true,
    icon: 'eicon-download-circle-o',
    onClick: () => _router2.default.appHistory.navigate(basePath + '/import')
  }];

  // Remove Core cache.
  tootoCommon.ajax.invalidateCache({
    unique_id: 'app_site_editor_template_types'
  });
  const SiteEditorDefault = () => {
    const {
      templates
    } = _react.default.useContext(_templates2.Context);
    if (Object.keys(templates).length) {
      return /*#__PURE__*/_react.default.createElement(_router.Redirect, {
        from: '/',
        to: '/' + basePath + '/templates',
        noThrow: true
      });
    }
    return /*#__PURE__*/_react.default.createElement(_router.Redirect, {
      from: '/',
      to: '/' + basePath + '/add-new',
      noThrow: true
    });
  };
  return /*#__PURE__*/_react.default.createElement(_appUi.ErrorBoundary, {
    title: __('Theme Builder could not be loaded', 'tooto-pro'),
    learnMoreUrl: "https://go.tooto.com/app-theme-builder-load-issue"
  }, /*#__PURE__*/_react.default.createElement(_siteEditor.Layout, {
    allPartsButton: /*#__PURE__*/_react.default.createElement(_siteEditor.AllPartsButton, {
      url: '/' + basePath
    }),
    headerButtons: headerButtons,
    titleRedirectRoute: '/' + basePath,
    promotion: isLocked
  }, /*#__PURE__*/_react.default.createElement(_appUi.Grid, {
    container: true,
    className: "e-site-editor__content_container"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Grid, {
    item: true,
    className: "e-site-editor__content_container_main"
  }, /*#__PURE__*/_react.default.createElement(_templates2.default, null, /*#__PURE__*/_react.default.createElement(_router.LocationProvider, {
    history: _router2.default.appHistory
  }, /*#__PURE__*/_react.default.createElement(_router.Router, null, /*#__PURE__*/_react.default.createElement(SiteEditorDefault, {
    path: basePath
  }), /*#__PURE__*/_react.default.createElement(_templates.default, {
    path: basePath + '/templates'
  }), /*#__PURE__*/_react.default.createElement(_templateType.default, {
    path: basePath + '/templates/:type/*id'
  }), /*#__PURE__*/_react.default.createElement(_addNew.default, {
    path: basePath + '/add-new'
  }), /*#__PURE__*/_react.default.createElement(_conditions.default, {
    path: basePath + '/conditions/:id'
  }), /*#__PURE__*/_react.default.createElement(_import.default, {
    path: basePath + '/import'
  }), /*#__PURE__*/_react.default.createElement(_siteEditor.NotFound, {
    default: true
  }))))), /*#__PURE__*/_react.default.createElement(_appUi.Grid, {
    item: true,
    className: "e-site-editor__content_container_secondary"
  }, /*#__PURE__*/_react.default.createElement(_appUi.Button, {
    text: __('Switch to table view', 'tooto-pro'),
    url: (_tootoAppProConfi = tootoAppProConfig['site-editor']) === null || _tootoAppProConfi === void 0 ? void 0 : (_tootoAppProConfi2 = _tootoAppProConfi.urls) === null || _tootoAppProConfi2 === void 0 ? void 0 : _tootoAppProConfi2.legacy_view
  })))));
}
class Module {
  constructor() {
    tootoCommon.debug.addURLToWatch('tooto-pro/assets');
    $e.components.register(new _component.default());
    _router2.default.addRoute({
      path: '/site-editor/*',
      component: SiteEditor
    });
  }
}
exports["default"] = Module;

/***/ }),

/***/ "../modules/screenshots/app/assets/js/hooks/use-screenshot.js":
/*!********************************************************************!*\
  !*** ../modules/screenshots/app/assets/js/hooks/use-screenshot.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var React = __webpack_require__(/*! react */ "react");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SCREENSHOT_STATUS_SUCCEED = exports.SCREENSHOT_STATUS_QUEUE = exports.SCREENSHOT_STATUS_IN_PROGRESS = exports.SCREENSHOT_STATUS_FAILED = void 0;
exports["default"] = useScreenshot;
const {
  useState,
  useEffect,
  useMemo,
  useCallback
} = React;
const SCREENSHOT_STATUS_QUEUE = 'queue';
exports.SCREENSHOT_STATUS_QUEUE = SCREENSHOT_STATUS_QUEUE;
const SCREENSHOT_STATUS_IN_PROGRESS = 'in-progress';
exports.SCREENSHOT_STATUS_IN_PROGRESS = SCREENSHOT_STATUS_IN_PROGRESS;
const SCREENSHOT_STATUS_SUCCEED = 'succeed';
exports.SCREENSHOT_STATUS_SUCCEED = SCREENSHOT_STATUS_SUCCEED;
const SCREENSHOT_STATUS_FAILED = 'failed';

/**
 * Default options for the hook function
 *
 * @type {{numberOfScreenshotInParallel: number}}
 */
exports.SCREENSHOT_STATUS_FAILED = SCREENSHOT_STATUS_FAILED;
const defaultOptions = {
  numberOfScreenshotInParallel: 1
};

/**
 * Filter the posts by status.
 *
 * @param {Array}  posts
 * @param {string} status
 * @return {Array} -
 */
function filterPostByStatus(posts, status) {
  return posts.filter(item => status === item.status);
}

/**
 * Receive the initial posts and normalize it
 * to an array that the hook can work with.
 *
 * @param {Array} posts
 */
function normalizeInitialPosts(posts) {
  return posts.map(post => ({
    id: post.id,
    screenshot_url: post.screenshot_url,
    status: 'queue',
    iframe: null,
    imageUrl: null
  }));
}

/**
 * Find the post id inside the posts array, update it with the attrs,
 * and make sure to return the whole posts array.
 *
 *
 * @param {Array}  posts
 * @param {number} id
 * @param {Object} attrs
 * @return {Array} -
 */
function updatePostsAttrs(posts, id) {
  let attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return posts.map(post => {
    if (post.id !== id) {
      return post;
    }
    return {
      ...post,
      ...attrs
    };
  });
}

/**
 * Creates an IFrame that will create the screenshot.
 *
 * @param {Object} post
 * @return {any} -
 */
function createScreenshotIframe(post) {
  const iframe = document.createElement('iframe');
  iframe.src = post.screenshot_url;
  iframe.width = '1200';
  iframe.style = 'visibility: hidden;';
  document.body.appendChild(iframe);
  return iframe;
}

/**
 * Returns a callback, that will be bind to the iframe message event.
 *
 * @param {Array}    inProgressPosts
 * @param {Function} setPosts
 * @return {any} -
 */
function useIFrameMessageListener(inProgressPosts, setPosts) {
  return useCallback(message => {
    const {
      data
    } = message;
    if (!data.name || data.name !== 'capture-screenshot-done') {
      return;
    }
    const post = inProgressPosts.find(item => item.id === parseInt(data.id));
    if (!post) {
      return;
    }
    post.iframe.remove();
    setPosts(prevState => updatePostsAttrs(prevState, post.id, {
      status: data.success ? SCREENSHOT_STATUS_SUCCEED : SCREENSHOT_STATUS_FAILED,
      imageUrl: data.imageUrl
    }));
  }, [inProgressPosts]);
}

/**
 * Will create a screenshot based on the posts that was passed to it.
 *
 * @param {Array}  initialPosts
 * @param {number} numberOfScreenshotInParallel
 * @return {{inProgress: Array, succeed: Array, failed: Array, posts: Array, queue: Array}} -
 */
function useScreenshot(initialPosts) {
  let {
    numberOfScreenshotInParallel
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
  const [posts, setPosts] = useState([]);

  // Holds some kind of computed value of the `posts` state,
  // it is been created mostly for convenient workflow and little bit performance optimization.
  const queue = useMemo(() => filterPostByStatus(posts, SCREENSHOT_STATUS_QUEUE), [posts]);
  const inProgress = useMemo(() => filterPostByStatus(posts, SCREENSHOT_STATUS_IN_PROGRESS), [posts]);
  const succeed = useMemo(() => filterPostByStatus(posts, SCREENSHOT_STATUS_SUCCEED), [posts]);
  const failed = useMemo(() => filterPostByStatus(posts, SCREENSHOT_STATUS_FAILED), [posts]);

  // Will run every initialPosts change, make the diff between the local state
  // and initialPosts and creates a new local state.
  useEffect(() => {
    const postsDiff = initialPosts.filter(initialPost => !posts.find(statePost => statePost.id === initialPost.id));
    if (!postsDiff.length) {
      return;
    }
    setPosts(prev => [...prev, ...normalizeInitialPosts(postsDiff)]);
  }, [initialPosts]);

  // Holds the useCallback that will be used to listen to the screenshot iframe events.
  const iframeMessageListener = useIFrameMessageListener(inProgress, setPosts);

  // Listens to the screenshot iframe events
  // eventually will remove the iframe and set the post status to succeed or failed.
  useEffect(() => {
    window.addEventListener('message', iframeMessageListener, false);
    return () => {
      window.removeEventListener('message', iframeMessageListener);
    };
  }, [iframeMessageListener]);

  // Runs every time `posts` state change (all most every event in this hook will trigger change to `posts`),
  // this logic response for setting status of the process to DONE if needed + taking the next post and start
  // to capture a screenshot.
  useEffect(() => {
    if (0 === queue.length || inProgress.length >= numberOfScreenshotInParallel) {
      return;
    }
    const [nextPost] = queue;
    const iframe = createScreenshotIframe(nextPost);
    setPosts(prevState => updatePostsAttrs(prevState, nextPost.id, {
      status: SCREENSHOT_STATUS_IN_PROGRESS,
      iframe
    }));
  }, [posts]);
  return {
    posts,
    queue,
    inProgress,
    succeed,
    failed
  };
}

/***/ }),

/***/ "../node_modules/create-react-context/lib/implementation.js":
/*!******************************************************************!*\
  !*** ../node_modules/create-react-context/lib/implementation.js ***!
  \******************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__(/*! gud */ "../node_modules/gud/index.js");

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__(/*! warning */ "../node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (true) {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports["default"] = createReactContext;
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/create-react-context/lib/index.js":
/*!*********************************************************!*\
  !*** ../node_modules/create-react-context/lib/index.js ***!
  \*********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__(/*! ./implementation */ "../node_modules/create-react-context/lib/implementation.js");

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/gud/index.js":
/*!************************************!*\
  !*** ../node_modules/gud/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return __webpack_require__.g[key] = (__webpack_require__.g[key] || 0) + 1;
};


/***/ }),

/***/ "../node_modules/invariant/browser.js":
/*!********************************************!*\
  !*** ../node_modules/invariant/browser.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "../node_modules/object-assign/index.js":
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../node_modules/prop-types/checkPropTypes.js":
/*!****************************************************!*\
  !*** ../node_modules/prop-types/checkPropTypes.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "../node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*************************************************************!*\
  !*** ../node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "../node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../node_modules/prop-types/index.js":
/*!*******************************************!*\
  !*** ../node_modules/prop-types/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!**************************************************************!*\
  !*** ../node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../node_modules/prop-types/lib/has.js":
/*!*********************************************!*\
  !*** ../node_modules/prop-types/lib/has.js ***!
  \*********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************!*\
  !*** ../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../node_modules/prop-types/node_modules/react-is/index.js":
/*!*****************************************************************!*\
  !*** ../node_modules/prop-types/node_modules/react-is/index.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polyfill": () => (/* binding */ polyfill)
/* harmony export */ });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "../node_modules/warning/warning.js":
/*!******************************************!*\
  !*** ../node_modules/warning/warning.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "@tooto/app-ui":
/*!*********************************************!*\
  !*** external "tootoAppPackages.appUi" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = tootoAppPackages.appUi;

/***/ }),

/***/ "@tooto/router":
/*!**********************************************!*\
  !*** external "tootoAppPackages.router" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = tootoAppPackages.router;

/***/ }),

/***/ "@tooto/site-editor":
/*!**************************************************!*\
  !*** external "tootoAppPackages.siteEditor" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = tootoAppPackages.siteEditor;

/***/ }),

/***/ "@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = wp.i18n;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/extends.js":
/*!*********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/extends.js ***!
  \*********************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************************!*\
  !*** ../core/app/assets/js/index.js ***!
  \**************************************/


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _siteEditor = _interopRequireDefault(__webpack_require__(/*! ../../modules/site-editor/assets/js/site-editor */ "../core/app/modules/site-editor/assets/js/site-editor.js"));
new _siteEditor.default();
})();

/******/ })()
;
//# sourceMappingURL=app.js.map