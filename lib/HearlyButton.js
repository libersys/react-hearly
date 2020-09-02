"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HearlyButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _useHearly2 = _interopRequireDefault(require("./useHearly"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var HearlyButton = function HearlyButton(_ref) {
  var clientId = _ref.clientId,
      loadingText = _ref.loadingText,
      idleButtonText = _ref.idleButtonText,
      talkingButtonText = _ref.talkingButtonText,
      rest = _objectWithoutProperties(_ref, ["clientId", "loadingText", "idleButtonText", "talkingButtonText"]);

  var _useHearly = (0, _useHearly2["default"])(clientId),
      isReady = _useHearly.isReady,
      isTalking = _useHearly.isTalking,
      start = _useHearly.start,
      end = _useHearly.end;

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isReady ? /*#__PURE__*/_react["default"].createElement("button", _extends({}, rest, {
    onClick: isTalking ? end : start
  }), isTalking ? talkingButtonText : idleButtonText) : /*#__PURE__*/_react["default"].createElement("div", null, loadingText));
};

exports.HearlyButton = HearlyButton;
HearlyButton.defaultProps = {
  loadingText: 'Loading...',
  idleButtonText: 'Start Conversation',
  talkingButtonText: 'End Conversation'
};
var _default = HearlyButton;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9IZWFybHlCdXR0b24udHN4Il0sIm5hbWVzIjpbIkhlYXJseUJ1dHRvbiIsImNsaWVudElkIiwibG9hZGluZ1RleHQiLCJpZGxlQnV0dG9uVGV4dCIsInRhbGtpbmdCdXR0b25UZXh0IiwicmVzdCIsImlzUmVhZHkiLCJpc1RhbGtpbmciLCJzdGFydCIsImVuZCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0FBVU8sSUFBTUEsWUFFWixHQUFHLFNBRlNBLFlBRVQsT0FBK0Y7QUFBQSxNQUE1RkMsUUFBNEYsUUFBNUZBLFFBQTRGO0FBQUEsTUFBbEZDLFdBQWtGLFFBQWxGQSxXQUFrRjtBQUFBLE1BQXJFQyxjQUFxRSxRQUFyRUEsY0FBcUU7QUFBQSxNQUFyREMsaUJBQXFELFFBQXJEQSxpQkFBcUQ7QUFBQSxNQUEvQkMsSUFBK0I7O0FBQUEsbUJBQ3BELDRCQUFVSixRQUFWLENBRG9EO0FBQUEsTUFDdkZLLE9BRHVGLGNBQ3ZGQSxPQUR1RjtBQUFBLE1BQzlFQyxTQUQ4RSxjQUM5RUEsU0FEOEU7QUFBQSxNQUNuRUMsS0FEbUUsY0FDbkVBLEtBRG1FO0FBQUEsTUFDNURDLEdBRDRELGNBQzVEQSxHQUQ0RDs7QUFHL0Ysc0JBQ0ksa0VBQ0tILE9BQU8sZ0JBQ0osdURBQVlELElBQVo7QUFBa0IsSUFBQSxPQUFPLEVBQUVFLFNBQVMsR0FBR0UsR0FBSCxHQUFTRDtBQUE3QyxNQUNLRCxTQUFTLEdBQUdILGlCQUFILEdBQXVCRCxjQURyQyxDQURJLGdCQUtKLDZDQUFNRCxXQUFOLENBTlIsQ0FESjtBQVdILENBaEJNOzs7QUFrQlBGLFlBQVksQ0FBQ1UsWUFBYixHQUE0QjtBQUN4QlIsRUFBQUEsV0FBVyxFQUFFLFlBRFc7QUFFeEJDLEVBQUFBLGNBQWMsRUFBRSxvQkFGUTtBQUd4QkMsRUFBQUEsaUJBQWlCLEVBQUU7QUFISyxDQUE1QjtlQU1lSixZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VIZWFybHkgZnJvbSAnLi91c2VIZWFybHknO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhlYXJseUJ1dHRvblByb3BzIHtcbiAgICBjbGllbnRJZDogc3RyaW5nO1xuICAgIC8vIGxvYWRpbmc/OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT47XG4gICAgbG9hZGluZ1RleHQ/OiBzdHJpbmc7XG4gICAgaWRsZUJ1dHRvblRleHQ/OiBzdHJpbmc7XG4gICAgdGFsa2luZ0J1dHRvblRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBIZWFybHlCdXR0b246IFJlYWN0LkZDPFxuICAgIEhlYXJseUJ1dHRvblByb3BzICYgUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8UmVhY3QuQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+LCBIVE1MQnV0dG9uRWxlbWVudD5cbj4gPSAoeyBjbGllbnRJZCwgbG9hZGluZ1RleHQsIGlkbGVCdXR0b25UZXh0LCB0YWxraW5nQnV0dG9uVGV4dCwgLi4ucmVzdCB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgICBjb25zdCB7IGlzUmVhZHksIGlzVGFsa2luZywgc3RhcnQsIGVuZCB9ID0gdXNlSGVhcmx5KGNsaWVudElkKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7aXNSZWFkeSA/IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHsuLi5yZXN0fSBvbkNsaWNrPXtpc1RhbGtpbmcgPyBlbmQgOiBzdGFydH0+XG4gICAgICAgICAgICAgICAgICAgIHtpc1RhbGtpbmcgPyB0YWxraW5nQnV0dG9uVGV4dCA6IGlkbGVCdXR0b25UZXh0fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2Pntsb2FkaW5nVGV4dH08L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5IZWFybHlCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICAgIGxvYWRpbmdUZXh0OiAnTG9hZGluZy4uLicsXG4gICAgaWRsZUJ1dHRvblRleHQ6ICdTdGFydCBDb252ZXJzYXRpb24nLFxuICAgIHRhbGtpbmdCdXR0b25UZXh0OiAnRW5kIENvbnZlcnNhdGlvbicsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFybHlCdXR0b247XG4iXX0=