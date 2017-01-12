webpackJsonp([10,13],{

/***/ 127:
/***/ function(module, exports) {

module.exports = "/*!\n * Hover.css (http://ianlunn.github.io/Hover/)\n * Version: 2.0.2\n * Author: Ian Lunn @IanLunn\n * Author URL: http://ianlunn.co.uk/\n * Github: https://github.com/IanLunn/Hover\n\n * Made available under a MIT License:\n * http://www.opensource.org/licenses/mit-license.php\n\n * Hover.css Copyright Ian Lunn 2014. Generated with Sass.\n */\n/* 2D TRANSITIONS */\n/* Grow */\n.hvr-grow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n\n/* Shrink */\n.hvr-shrink {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.hvr-shrink:hover, .hvr-shrink:focus, .hvr-shrink:active {\n  -webkit-transform: scale(0.9);\n  transform: scale(0.9);\n}\n\n/* Pulse */\n@-webkit-keyframes hvr-pulse {\n  25% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n\n  75% {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9);\n  }\n}\n\n@keyframes hvr-pulse {\n  25% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n\n  75% {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9);\n  }\n}\n\n.hvr-pulse {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-pulse:hover, .hvr-pulse:focus, .hvr-pulse:active {\n  -webkit-animation-name: hvr-pulse;\n  animation-name: hvr-pulse;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n/* Pulse Grow */\n@-webkit-keyframes hvr-pulse-grow {\n  to {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n}\n\n@keyframes hvr-pulse-grow {\n  to {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n}\n\n.hvr-pulse-grow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-pulse-grow:hover, .hvr-pulse-grow:focus, .hvr-pulse-grow:active {\n  -webkit-animation-name: hvr-pulse-grow;\n  animation-name: hvr-pulse-grow;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n  animation-direction: alternate;\n}\n\n/* Pulse Shrink */\n@-webkit-keyframes hvr-pulse-shrink {\n  to {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9);\n  }\n}\n\n@keyframes hvr-pulse-shrink {\n  to {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9);\n  }\n}\n\n.hvr-pulse-shrink {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-pulse-shrink:hover, .hvr-pulse-shrink:focus, .hvr-pulse-shrink:active {\n  -webkit-animation-name: hvr-pulse-shrink;\n  animation-name: hvr-pulse-shrink;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n  animation-direction: alternate;\n}\n\n/* Push */\n@-webkit-keyframes hvr-push {\n  50% {\n    -webkit-transform: scale(0.8);\n    transform: scale(0.8);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes hvr-push {\n  50% {\n    -webkit-transform: scale(0.8);\n    transform: scale(0.8);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.hvr-push {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-push:hover, .hvr-push:focus, .hvr-push:active {\n  -webkit-animation-name: hvr-push;\n  animation-name: hvr-push;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Pop */\n@-webkit-keyframes hvr-pop {\n  50% {\n    -webkit-transform: scale(1.2);\n    transform: scale(1.2);\n  }\n}\n\n@keyframes hvr-pop {\n  50% {\n    -webkit-transform: scale(1.2);\n    transform: scale(1.2);\n  }\n}\n\n.hvr-pop {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-pop:hover, .hvr-pop:focus, .hvr-pop:active {\n  -webkit-animation-name: hvr-pop;\n  animation-name: hvr-pop;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Bounce In */\n.hvr-bounce-in {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n}\n.hvr-bounce-in:hover, .hvr-bounce-in:focus, .hvr-bounce-in:active {\n  -webkit-transform: scale(1.2);\n  transform: scale(1.2);\n  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n}\n\n/* Bounce Out */\n.hvr-bounce-out {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n}\n.hvr-bounce-out:hover, .hvr-bounce-out:focus, .hvr-bounce-out:active {\n  -webkit-transform: scale(0.8);\n  transform: scale(0.8);\n  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n}\n\n/* Rotate */\n.hvr-rotate {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.hvr-rotate:hover, .hvr-rotate:focus, .hvr-rotate:active {\n  -webkit-transform: rotate(4deg);\n  transform: rotate(4deg);\n}\n\n/* Grow Rotate */\n.hvr-grow-rotate {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.hvr-grow-rotate:hover, .hvr-grow-rotate:focus, .hvr-grow-rotate:active {\n  -webkit-transform: scale(1.1) rotate(4deg);\n  transform: scale(1.1) rotate(4deg);\n}\n\n/* Float */\n.hvr-float {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-float:hover, .hvr-float:focus, .hvr-float:active {\n  -webkit-transform: translateY(-8px);\n  transform: translateY(-8px);\n}\n\n/* Sink */\n.hvr-sink {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-sink:hover, .hvr-sink:focus, .hvr-sink:active {\n  -webkit-transform: translateY(8px);\n  transform: translateY(8px);\n}\n\n/* Bob */\n@-webkit-keyframes hvr-bob {\n  0% {\n    -webkit-transform: translateY(-8px);\n    transform: translateY(-8px);\n  }\n\n  50% {\n    -webkit-transform: translateY(-4px);\n    transform: translateY(-4px);\n  }\n\n  100% {\n    -webkit-transform: translateY(-8px);\n    transform: translateY(-8px);\n  }\n}\n\n@keyframes hvr-bob {\n  0% {\n    -webkit-transform: translateY(-8px);\n    transform: translateY(-8px);\n  }\n\n  50% {\n    -webkit-transform: translateY(-4px);\n    transform: translateY(-4px);\n  }\n\n  100% {\n    -webkit-transform: translateY(-8px);\n    transform: translateY(-8px);\n  }\n}\n\n@-webkit-keyframes hvr-bob-float {\n  100% {\n    -webkit-transform: translateY(-8px);\n    transform: translateY(-8px);\n  }\n}\n\n@keyframes hvr-bob-float {\n  100% {\n    -webkit-transform: translateY(-8px);\n    transform: translateY(-8px);\n  }\n}\n\n.hvr-bob {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-bob:hover, .hvr-bob:focus, .hvr-bob:active {\n  -webkit-animation-name: hvr-bob-float, hvr-bob;\n  animation-name: hvr-bob-float, hvr-bob;\n  -webkit-animation-duration: .3s, 1.5s;\n  animation-duration: .3s, 1.5s;\n  -webkit-animation-delay: 0s, .3s;\n  animation-delay: 0s, .3s;\n  -webkit-animation-timing-function: ease-out, ease-in-out;\n  animation-timing-function: ease-out, ease-in-out;\n  -webkit-animation-iteration-count: 1, infinite;\n  animation-iteration-count: 1, infinite;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-direction: normal, alternate;\n  animation-direction: normal, alternate;\n}\n\n/* Hang */\n@-webkit-keyframes hvr-hang {\n  0% {\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px);\n  }\n\n  50% {\n    -webkit-transform: translateY(4px);\n    transform: translateY(4px);\n  }\n\n  100% {\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px);\n  }\n}\n\n@keyframes hvr-hang {\n  0% {\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px);\n  }\n\n  50% {\n    -webkit-transform: translateY(4px);\n    transform: translateY(4px);\n  }\n\n  100% {\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px);\n  }\n}\n\n@-webkit-keyframes hvr-hang-sink {\n  100% {\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px);\n  }\n}\n\n@keyframes hvr-hang-sink {\n  100% {\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px);\n  }\n}\n\n.hvr-hang {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-hang:hover, .hvr-hang:focus, .hvr-hang:active {\n  -webkit-animation-name: hvr-hang-sink, hvr-hang;\n  animation-name: hvr-hang-sink, hvr-hang;\n  -webkit-animation-duration: .3s, 1.5s;\n  animation-duration: .3s, 1.5s;\n  -webkit-animation-delay: 0s, .3s;\n  animation-delay: 0s, .3s;\n  -webkit-animation-timing-function: ease-out, ease-in-out;\n  animation-timing-function: ease-out, ease-in-out;\n  -webkit-animation-iteration-count: 1, infinite;\n  animation-iteration-count: 1, infinite;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-direction: normal, alternate;\n  animation-direction: normal, alternate;\n}\n\n/* Skew */\n.hvr-skew {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.hvr-skew:hover, .hvr-skew:focus, .hvr-skew:active {\n  -webkit-transform: skew(-10deg);\n  transform: skew(-10deg);\n}\n\n/* Skew Forward */\n.hvr-skew-forward {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n}\n.hvr-skew-forward:hover, .hvr-skew-forward:focus, .hvr-skew-forward:active {\n  -webkit-transform: skew(-10deg);\n  transform: skew(-10deg);\n}\n\n/* Skew Backward */\n.hvr-skew-backward {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n}\n.hvr-skew-backward:hover, .hvr-skew-backward:focus, .hvr-skew-backward:active {\n  -webkit-transform: skew(10deg);\n  transform: skew(10deg);\n}\n\n/* Wobble Vertical */\n@-webkit-keyframes hvr-wobble-vertical {\n  16.65% {\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px);\n  }\n\n  33.3% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n\n  49.95% {\n    -webkit-transform: translateY(4px);\n    transform: translateY(4px);\n  }\n\n  66.6% {\n    -webkit-transform: translateY(-2px);\n    transform: translateY(-2px);\n  }\n\n  83.25% {\n    -webkit-transform: translateY(1px);\n    transform: translateY(1px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes hvr-wobble-vertical {\n  16.65% {\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px);\n  }\n\n  33.3% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n\n  49.95% {\n    -webkit-transform: translateY(4px);\n    transform: translateY(4px);\n  }\n\n  66.6% {\n    -webkit-transform: translateY(-2px);\n    transform: translateY(-2px);\n  }\n\n  83.25% {\n    -webkit-transform: translateY(1px);\n    transform: translateY(1px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.hvr-wobble-vertical {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-wobble-vertical:hover, .hvr-wobble-vertical:focus, .hvr-wobble-vertical:active {\n  -webkit-animation-name: hvr-wobble-vertical;\n  animation-name: hvr-wobble-vertical;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Wobble Horizontal */\n@-webkit-keyframes hvr-wobble-horizontal {\n  16.65% {\n    -webkit-transform: translateX(8px);\n    transform: translateX(8px);\n  }\n\n  33.3% {\n    -webkit-transform: translateX(-6px);\n    transform: translateX(-6px);\n  }\n\n  49.95% {\n    -webkit-transform: translateX(4px);\n    transform: translateX(4px);\n  }\n\n  66.6% {\n    -webkit-transform: translateX(-2px);\n    transform: translateX(-2px);\n  }\n\n  83.25% {\n    -webkit-transform: translateX(1px);\n    transform: translateX(1px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes hvr-wobble-horizontal {\n  16.65% {\n    -webkit-transform: translateX(8px);\n    transform: translateX(8px);\n  }\n\n  33.3% {\n    -webkit-transform: translateX(-6px);\n    transform: translateX(-6px);\n  }\n\n  49.95% {\n    -webkit-transform: translateX(4px);\n    transform: translateX(4px);\n  }\n\n  66.6% {\n    -webkit-transform: translateX(-2px);\n    transform: translateX(-2px);\n  }\n\n  83.25% {\n    -webkit-transform: translateX(1px);\n    transform: translateX(1px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.hvr-wobble-horizontal {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-wobble-horizontal:hover, .hvr-wobble-horizontal:focus, .hvr-wobble-horizontal:active {\n  -webkit-animation-name: hvr-wobble-horizontal;\n  animation-name: hvr-wobble-horizontal;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Wobble To Bottom Right */\n@-webkit-keyframes hvr-wobble-to-bottom-right {\n  16.65% {\n    -webkit-transform: translate(8px, 8px);\n    transform: translate(8px, 8px);\n  }\n\n  33.3% {\n    -webkit-transform: translate(-6px, -6px);\n    transform: translate(-6px, -6px);\n  }\n\n  49.95% {\n    -webkit-transform: translate(4px, 4px);\n    transform: translate(4px, 4px);\n  }\n\n  66.6% {\n    -webkit-transform: translate(-2px, -2px);\n    transform: translate(-2px, -2px);\n  }\n\n  83.25% {\n    -webkit-transform: translate(1px, 1px);\n    transform: translate(1px, 1px);\n  }\n\n  100% {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0);\n  }\n}\n\n@keyframes hvr-wobble-to-bottom-right {\n  16.65% {\n    -webkit-transform: translate(8px, 8px);\n    transform: translate(8px, 8px);\n  }\n\n  33.3% {\n    -webkit-transform: translate(-6px, -6px);\n    transform: translate(-6px, -6px);\n  }\n\n  49.95% {\n    -webkit-transform: translate(4px, 4px);\n    transform: translate(4px, 4px);\n  }\n\n  66.6% {\n    -webkit-transform: translate(-2px, -2px);\n    transform: translate(-2px, -2px);\n  }\n\n  83.25% {\n    -webkit-transform: translate(1px, 1px);\n    transform: translate(1px, 1px);\n  }\n\n  100% {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0);\n  }\n}\n\n.hvr-wobble-to-bottom-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-wobble-to-bottom-right:hover, .hvr-wobble-to-bottom-right:focus, .hvr-wobble-to-bottom-right:active {\n  -webkit-animation-name: hvr-wobble-to-bottom-right;\n  animation-name: hvr-wobble-to-bottom-right;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Wobble To Top Right */\n@-webkit-keyframes hvr-wobble-to-top-right {\n  16.65% {\n    -webkit-transform: translate(8px, -8px);\n    transform: translate(8px, -8px);\n  }\n\n  33.3% {\n    -webkit-transform: translate(-6px, 6px);\n    transform: translate(-6px, 6px);\n  }\n\n  49.95% {\n    -webkit-transform: translate(4px, -4px);\n    transform: translate(4px, -4px);\n  }\n\n  66.6% {\n    -webkit-transform: translate(-2px, 2px);\n    transform: translate(-2px, 2px);\n  }\n\n  83.25% {\n    -webkit-transform: translate(1px, -1px);\n    transform: translate(1px, -1px);\n  }\n\n  100% {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0);\n  }\n}\n\n@keyframes hvr-wobble-to-top-right {\n  16.65% {\n    -webkit-transform: translate(8px, -8px);\n    transform: translate(8px, -8px);\n  }\n\n  33.3% {\n    -webkit-transform: translate(-6px, 6px);\n    transform: translate(-6px, 6px);\n  }\n\n  49.95% {\n    -webkit-transform: translate(4px, -4px);\n    transform: translate(4px, -4px);\n  }\n\n  66.6% {\n    -webkit-transform: translate(-2px, 2px);\n    transform: translate(-2px, 2px);\n  }\n\n  83.25% {\n    -webkit-transform: translate(1px, -1px);\n    transform: translate(1px, -1px);\n  }\n\n  100% {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0);\n  }\n}\n\n.hvr-wobble-to-top-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-wobble-to-top-right:hover, .hvr-wobble-to-top-right:focus, .hvr-wobble-to-top-right:active {\n  -webkit-animation-name: hvr-wobble-to-top-right;\n  animation-name: hvr-wobble-to-top-right;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Wobble Top */\n@-webkit-keyframes hvr-wobble-top {\n  16.65% {\n    -webkit-transform: skew(-12deg);\n    transform: skew(-12deg);\n  }\n\n  33.3% {\n    -webkit-transform: skew(10deg);\n    transform: skew(10deg);\n  }\n\n  49.95% {\n    -webkit-transform: skew(-6deg);\n    transform: skew(-6deg);\n  }\n\n  66.6% {\n    -webkit-transform: skew(4deg);\n    transform: skew(4deg);\n  }\n\n  83.25% {\n    -webkit-transform: skew(-2deg);\n    transform: skew(-2deg);\n  }\n\n  100% {\n    -webkit-transform: skew(0);\n    transform: skew(0);\n  }\n}\n\n@keyframes hvr-wobble-top {\n  16.65% {\n    -webkit-transform: skew(-12deg);\n    transform: skew(-12deg);\n  }\n\n  33.3% {\n    -webkit-transform: skew(10deg);\n    transform: skew(10deg);\n  }\n\n  49.95% {\n    -webkit-transform: skew(-6deg);\n    transform: skew(-6deg);\n  }\n\n  66.6% {\n    -webkit-transform: skew(4deg);\n    transform: skew(4deg);\n  }\n\n  83.25% {\n    -webkit-transform: skew(-2deg);\n    transform: skew(-2deg);\n  }\n\n  100% {\n    -webkit-transform: skew(0);\n    transform: skew(0);\n  }\n}\n\n.hvr-wobble-top {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n}\n.hvr-wobble-top:hover, .hvr-wobble-top:focus, .hvr-wobble-top:active {\n  -webkit-animation-name: hvr-wobble-top;\n  animation-name: hvr-wobble-top;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Wobble Bottom */\n@-webkit-keyframes hvr-wobble-bottom {\n  16.65% {\n    -webkit-transform: skew(-12deg);\n    transform: skew(-12deg);\n  }\n\n  33.3% {\n    -webkit-transform: skew(10deg);\n    transform: skew(10deg);\n  }\n\n  49.95% {\n    -webkit-transform: skew(-6deg);\n    transform: skew(-6deg);\n  }\n\n  66.6% {\n    -webkit-transform: skew(4deg);\n    transform: skew(4deg);\n  }\n\n  83.25% {\n    -webkit-transform: skew(-2deg);\n    transform: skew(-2deg);\n  }\n\n  100% {\n    -webkit-transform: skew(0);\n    transform: skew(0);\n  }\n}\n\n@keyframes hvr-wobble-bottom {\n  16.65% {\n    -webkit-transform: skew(-12deg);\n    transform: skew(-12deg);\n  }\n\n  33.3% {\n    -webkit-transform: skew(10deg);\n    transform: skew(10deg);\n  }\n\n  49.95% {\n    -webkit-transform: skew(-6deg);\n    transform: skew(-6deg);\n  }\n\n  66.6% {\n    -webkit-transform: skew(4deg);\n    transform: skew(4deg);\n  }\n\n  83.25% {\n    -webkit-transform: skew(-2deg);\n    transform: skew(-2deg);\n  }\n\n  100% {\n    -webkit-transform: skew(0);\n    transform: skew(0);\n  }\n}\n\n.hvr-wobble-bottom {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform-origin: 100% 0;\n  transform-origin: 100% 0;\n}\n.hvr-wobble-bottom:hover, .hvr-wobble-bottom:focus, .hvr-wobble-bottom:active {\n  -webkit-animation-name: hvr-wobble-bottom;\n  animation-name: hvr-wobble-bottom;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Wobble Skew */\n@-webkit-keyframes hvr-wobble-skew {\n  16.65% {\n    -webkit-transform: skew(-12deg);\n    transform: skew(-12deg);\n  }\n\n  33.3% {\n    -webkit-transform: skew(10deg);\n    transform: skew(10deg);\n  }\n\n  49.95% {\n    -webkit-transform: skew(-6deg);\n    transform: skew(-6deg);\n  }\n\n  66.6% {\n    -webkit-transform: skew(4deg);\n    transform: skew(4deg);\n  }\n\n  83.25% {\n    -webkit-transform: skew(-2deg);\n    transform: skew(-2deg);\n  }\n\n  100% {\n    -webkit-transform: skew(0);\n    transform: skew(0);\n  }\n}\n\n@keyframes hvr-wobble-skew {\n  16.65% {\n    -webkit-transform: skew(-12deg);\n    transform: skew(-12deg);\n  }\n\n  33.3% {\n    -webkit-transform: skew(10deg);\n    transform: skew(10deg);\n  }\n\n  49.95% {\n    -webkit-transform: skew(-6deg);\n    transform: skew(-6deg);\n  }\n\n  66.6% {\n    -webkit-transform: skew(4deg);\n    transform: skew(4deg);\n  }\n\n  83.25% {\n    -webkit-transform: skew(-2deg);\n    transform: skew(-2deg);\n  }\n\n  100% {\n    -webkit-transform: skew(0);\n    transform: skew(0);\n  }\n}\n\n.hvr-wobble-skew {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-wobble-skew:hover, .hvr-wobble-skew:focus, .hvr-wobble-skew:active {\n  -webkit-animation-name: hvr-wobble-skew;\n  animation-name: hvr-wobble-skew;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Buzz */\n@-webkit-keyframes hvr-buzz {\n  50% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  100% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n}\n\n@keyframes hvr-buzz {\n  50% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  100% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n}\n\n.hvr-buzz {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-buzz:hover, .hvr-buzz:focus, .hvr-buzz:active {\n  -webkit-animation-name: hvr-buzz;\n  animation-name: hvr-buzz;\n  -webkit-animation-duration: 0.15s;\n  animation-duration: 0.15s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n/* Buzz Out */\n@-webkit-keyframes hvr-buzz-out {\n  10% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  20% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n\n  30% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  40% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(2px) rotate(1deg);\n    transform: translateX(2px) rotate(1deg);\n  }\n\n  60% {\n    -webkit-transform: translateX(-2px) rotate(-1deg);\n    transform: translateX(-2px) rotate(-1deg);\n  }\n\n  70% {\n    -webkit-transform: translateX(2px) rotate(1deg);\n    transform: translateX(2px) rotate(1deg);\n  }\n\n  80% {\n    -webkit-transform: translateX(-2px) rotate(-1deg);\n    transform: translateX(-2px) rotate(-1deg);\n  }\n\n  90% {\n    -webkit-transform: translateX(1px) rotate(0);\n    transform: translateX(1px) rotate(0);\n  }\n\n  100% {\n    -webkit-transform: translateX(-1px) rotate(0);\n    transform: translateX(-1px) rotate(0);\n  }\n}\n\n@keyframes hvr-buzz-out {\n  10% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  20% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n\n  30% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  40% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(2px) rotate(1deg);\n    transform: translateX(2px) rotate(1deg);\n  }\n\n  60% {\n    -webkit-transform: translateX(-2px) rotate(-1deg);\n    transform: translateX(-2px) rotate(-1deg);\n  }\n\n  70% {\n    -webkit-transform: translateX(2px) rotate(1deg);\n    transform: translateX(2px) rotate(1deg);\n  }\n\n  80% {\n    -webkit-transform: translateX(-2px) rotate(-1deg);\n    transform: translateX(-2px) rotate(-1deg);\n  }\n\n  90% {\n    -webkit-transform: translateX(1px) rotate(0);\n    transform: translateX(1px) rotate(0);\n  }\n\n  100% {\n    -webkit-transform: translateX(-1px) rotate(0);\n    transform: translateX(-1px) rotate(0);\n  }\n}\n\n.hvr-buzz-out {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-buzz-out:hover, .hvr-buzz-out:focus, .hvr-buzz-out:active {\n  -webkit-animation-name: hvr-buzz-out;\n  animation-name: hvr-buzz-out;\n  -webkit-animation-duration: 0.75s;\n  animation-duration: 0.75s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* BACKGROUND TRANSITIONS */\n/* Fade */\n.hvr-fade {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  overflow: hidden;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: color, background-color;\n  transition-property: color, background-color;\n}\n.hvr-fade:hover, .hvr-fade:focus, .hvr-fade:active {\n  background-color: #2098d1;\n  color: white;\n}\n\n/* Back Pulse */\n@-webkit-keyframes hvr-back-pulse {\n  50% {\n    background-color: rgba(32, 152, 209, 0.75);\n  }\n}\n\n@keyframes hvr-back-pulse {\n  50% {\n    background-color: rgba(32, 152, 209, 0.75);\n  }\n}\n\n.hvr-back-pulse {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  overflow: hidden;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n  -webkit-transition-property: color, background-color;\n  transition-property: color, background-color;\n}\n.hvr-back-pulse:hover, .hvr-back-pulse:focus, .hvr-back-pulse:active {\n  -webkit-animation-name: hvr-back-pulse;\n  animation-name: hvr-back-pulse;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-delay: 0.5s;\n  animation-delay: 0.5s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  background-color: #2098d1;\n  background-color: #2098d1;\n  color: white;\n}\n\n/* Sweep To Right */\n.hvr-sweep-to-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-sweep-to-right:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-sweep-to-right:hover, .hvr-sweep-to-right:focus, .hvr-sweep-to-right:active {\n  color: white;\n}\n.hvr-sweep-to-right:hover:before, .hvr-sweep-to-right:focus:before, .hvr-sweep-to-right:active:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n\n/* Sweep To Left */\n.hvr-sweep-to-left {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-sweep-to-left:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 100% 50%;\n  transform-origin: 100% 50%;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-sweep-to-left:hover, .hvr-sweep-to-left:focus, .hvr-sweep-to-left:active {\n  color: white;\n}\n.hvr-sweep-to-left:hover:before, .hvr-sweep-to-left:focus:before, .hvr-sweep-to-left:active:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n\n/* Sweep To Bottom */\n.hvr-sweep-to-bottom {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-sweep-to-bottom:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  -webkit-transform: scaleY(0);\n  transform: scaleY(0);\n  -webkit-transform-origin: 50% 0;\n  transform-origin: 50% 0;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-sweep-to-bottom:hover, .hvr-sweep-to-bottom:focus, .hvr-sweep-to-bottom:active {\n  color: white;\n}\n.hvr-sweep-to-bottom:hover:before, .hvr-sweep-to-bottom:focus:before, .hvr-sweep-to-bottom:active:before {\n  -webkit-transform: scaleY(1);\n  transform: scaleY(1);\n}\n\n/* Sweep To Top */\n.hvr-sweep-to-top {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-sweep-to-top:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  -webkit-transform: scaleY(0);\n  transform: scaleY(0);\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-sweep-to-top:hover, .hvr-sweep-to-top:focus, .hvr-sweep-to-top:active {\n  color: white;\n}\n.hvr-sweep-to-top:hover:before, .hvr-sweep-to-top:focus:before, .hvr-sweep-to-top:active:before {\n  -webkit-transform: scaleY(1);\n  transform: scaleY(1);\n}\n\n/* Bounce To Right */\n.hvr-bounce-to-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n}\n.hvr-bounce-to-right:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-bounce-to-right:hover, .hvr-bounce-to-right:focus, .hvr-bounce-to-right:active {\n  color: white;\n}\n.hvr-bounce-to-right:hover:before, .hvr-bounce-to-right:focus:before, .hvr-bounce-to-right:active:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\n\n/* Bounce To Left */\n.hvr-bounce-to-left {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n}\n.hvr-bounce-to-left:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 100% 50%;\n  transform-origin: 100% 50%;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-bounce-to-left:hover, .hvr-bounce-to-left:focus, .hvr-bounce-to-left:active {\n  color: white;\n}\n.hvr-bounce-to-left:hover:before, .hvr-bounce-to-left:focus:before, .hvr-bounce-to-left:active:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\n\n/* Bounce To Bottom */\n.hvr-bounce-to-bottom {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n}\n.hvr-bounce-to-bottom:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  -webkit-transform: scaleY(0);\n  transform: scaleY(0);\n  -webkit-transform-origin: 50% 0;\n  transform-origin: 50% 0;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-bounce-to-bottom:hover, .hvr-bounce-to-bottom:focus, .hvr-bounce-to-bottom:active {\n  color: white;\n}\n.hvr-bounce-to-bottom:hover:before, .hvr-bounce-to-bottom:focus:before, .hvr-bounce-to-bottom:active:before {\n  -webkit-transform: scaleY(1);\n  transform: scaleY(1);\n  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\n\n/* Bounce To Top */\n.hvr-bounce-to-top {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n}\n.hvr-bounce-to-top:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  -webkit-transform: scaleY(0);\n  transform: scaleY(0);\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-bounce-to-top:hover, .hvr-bounce-to-top:focus, .hvr-bounce-to-top:active {\n  color: white;\n}\n.hvr-bounce-to-top:hover:before, .hvr-bounce-to-top:focus:before, .hvr-bounce-to-top:active:before {\n  -webkit-transform: scaleY(1);\n  transform: scaleY(1);\n  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\n\n/* Radial Out */\n.hvr-radial-out {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n  background: #e1e1e1;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-radial-out:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  border-radius: 100%;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-radial-out:hover, .hvr-radial-out:focus, .hvr-radial-out:active {\n  color: white;\n}\n.hvr-radial-out:hover:before, .hvr-radial-out:focus:before, .hvr-radial-out:active:before {\n  -webkit-transform: scale(2);\n  transform: scale(2);\n}\n\n/* Radial In */\n.hvr-radial-in {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n  background: #2098d1;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-radial-in:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #e1e1e1;\n  border-radius: 100%;\n  -webkit-transform: scale(2);\n  transform: scale(2);\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-radial-in:hover, .hvr-radial-in:focus, .hvr-radial-in:active {\n  color: white;\n}\n.hvr-radial-in:hover:before, .hvr-radial-in:focus:before, .hvr-radial-in:active:before {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n\n/* Rectangle In */\n.hvr-rectangle-in {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  background: #2098d1;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-rectangle-in:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #e1e1e1;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-rectangle-in:hover, .hvr-rectangle-in:focus, .hvr-rectangle-in:active {\n  color: white;\n}\n.hvr-rectangle-in:hover:before, .hvr-rectangle-in:focus:before, .hvr-rectangle-in:active:before {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n\n/* Rectangle Out */\n.hvr-rectangle-out {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  background: #e1e1e1;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-rectangle-out:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-rectangle-out:hover, .hvr-rectangle-out:focus, .hvr-rectangle-out:active {\n  color: white;\n}\n.hvr-rectangle-out:hover:before, .hvr-rectangle-out:focus:before, .hvr-rectangle-out:active:before {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n}\n\n/* Shutter In Horizontal */\n.hvr-shutter-in-horizontal {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  background: #2098d1;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-shutter-in-horizontal:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #e1e1e1;\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n  -webkit-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-shutter-in-horizontal:hover, .hvr-shutter-in-horizontal:focus, .hvr-shutter-in-horizontal:active {\n  color: white;\n}\n.hvr-shutter-in-horizontal:hover:before, .hvr-shutter-in-horizontal:focus:before, .hvr-shutter-in-horizontal:active:before {\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n}\n\n/* Shutter Out Horizontal */\n.hvr-shutter-out-horizontal {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  background: #e1e1e1;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-shutter-out-horizontal:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #2098d1;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-shutter-out-horizontal:hover, .hvr-shutter-out-horizontal:focus, .hvr-shutter-out-horizontal:active {\n  color: white;\n}\n.hvr-shutter-out-horizontal:hover:before, .hvr-shutter-out-horizontal:focus:before, .hvr-shutter-out-horizontal:active:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n\n/* Shutter In Vertical */\n.hvr-shutter-in-vertical {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  background: #2098d1;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-shutter-in-vertical:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #e1e1e1;\n  -webkit-transform: scaleY(1);\n  transform: scaleY(1);\n  -webkit-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-shutter-in-vertical:hover, .hvr-shutter-in-vertical:focus, .hvr-shutter-in-vertical:active {\n  color: white;\n}\n.hvr-shutter-in-vertical:hover:before, .hvr-shutter-in-vertical:focus:before, .hvr-shutter-in-vertical:active:before {\n  -webkit-transform: scaleY(0);\n  transform: scaleY(0);\n}\n\n/* Shutter Out Vertical */\n.hvr-shutter-out-vertical {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  background: #e1e1e1;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-shutter-out-vertical:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #2098d1;\n  -webkit-transform: scaleY(0);\n  transform: scaleY(0);\n  -webkit-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-shutter-out-vertical:hover, .hvr-shutter-out-vertical:focus, .hvr-shutter-out-vertical:active {\n  color: white;\n}\n.hvr-shutter-out-vertical:hover:before, .hvr-shutter-out-vertical:focus:before, .hvr-shutter-out-vertical:active:before {\n  -webkit-transform: scaleY(1);\n  transform: scaleY(1);\n}\n\n/* BORDER TRANSITIONS */\n/* Border Fade */\n.hvr-border-fade {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: box-shadow;\n  transition-property: box-shadow;\n  box-shadow: inset 0 0 0 4px #e1e1e1, 0 0 1px rgba(0, 0, 0, 0);\n  /* Hack to improve aliasing on mobile/tablet devices */\n}\n.hvr-border-fade:hover, .hvr-border-fade:focus, .hvr-border-fade:active {\n  box-shadow: inset 0 0 0 4px #2098d1, 0 0 1px rgba(0, 0, 0, 0);\n  /* Hack to improve aliasing on mobile/tablet devices */\n}\n\n/* Hollow */\n.hvr-hollow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: background;\n  transition-property: background;\n  box-shadow: inset 0 0 0 4px #e1e1e1, 0 0 1px rgba(0, 0, 0, 0);\n  /* Hack to improve aliasing on mobile/tablet devices */\n}\n.hvr-hollow:hover, .hvr-hollow:focus, .hvr-hollow:active {\n  background: none;\n}\n\n/* Trim */\n.hvr-trim {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-trim:before {\n  content: '';\n  position: absolute;\n  border: white solid 4px;\n  top: 4px;\n  left: 4px;\n  right: 4px;\n  bottom: 4px;\n  opacity: 0;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n}\n.hvr-trim:hover:before, .hvr-trim:focus:before, .hvr-trim:active:before {\n  opacity: 1;\n}\n\n/* Ripple Out */\n@-webkit-keyframes hvr-ripple-out {\n  100% {\n    top: -12px;\n    right: -12px;\n    bottom: -12px;\n    left: -12px;\n    opacity: 0;\n  }\n}\n\n@keyframes hvr-ripple-out {\n  100% {\n    top: -12px;\n    right: -12px;\n    bottom: -12px;\n    left: -12px;\n    opacity: 0;\n  }\n}\n\n.hvr-ripple-out {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-ripple-out:before {\n  content: '';\n  position: absolute;\n  border: #e1e1e1 solid 6px;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n}\n.hvr-ripple-out:hover:before, .hvr-ripple-out:focus:before, .hvr-ripple-out:active:before {\n  -webkit-animation-name: hvr-ripple-out;\n  animation-name: hvr-ripple-out;\n}\n\n/* Ripple In */\n@-webkit-keyframes hvr-ripple-in {\n  100% {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    opacity: 1;\n  }\n}\n\n@keyframes hvr-ripple-in {\n  100% {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    opacity: 1;\n  }\n}\n\n.hvr-ripple-in {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-ripple-in:before {\n  content: '';\n  position: absolute;\n  border: #e1e1e1 solid 4px;\n  top: -12px;\n  right: -12px;\n  bottom: -12px;\n  left: -12px;\n  opacity: 0;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n}\n.hvr-ripple-in:hover:before, .hvr-ripple-in:focus:before, .hvr-ripple-in:active:before {\n  -webkit-animation-name: hvr-ripple-in;\n  animation-name: hvr-ripple-in;\n}\n\n/* Outline Out */\n.hvr-outline-out {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-outline-out:before {\n  content: '';\n  position: absolute;\n  border: #e1e1e1 solid 4px;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: top, right, bottom, left;\n  transition-property: top, right, bottom, left;\n}\n.hvr-outline-out:hover:before, .hvr-outline-out:focus:before, .hvr-outline-out:active:before {\n  top: -8px;\n  right: -8px;\n  bottom: -8px;\n  left: -8px;\n}\n\n/* Outline In */\n.hvr-outline-in {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-outline-in:before {\n  pointer-events: none;\n  content: '';\n  position: absolute;\n  border: #e1e1e1 solid 4px;\n  top: -16px;\n  right: -16px;\n  bottom: -16px;\n  left: -16px;\n  opacity: 0;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: top, right, bottom, left;\n  transition-property: top, right, bottom, left;\n}\n.hvr-outline-in:hover:before, .hvr-outline-in:focus:before, .hvr-outline-in:active:before {\n  top: -8px;\n  right: -8px;\n  bottom: -8px;\n  left: -8px;\n  opacity: 1;\n}\n\n/* Round Corners */\n.hvr-round-corners {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: border-radius;\n  transition-property: border-radius;\n}\n.hvr-round-corners:hover, .hvr-round-corners:focus, .hvr-round-corners:active {\n  border-radius: 1em;\n}\n\n/* Underline From Left */\n.hvr-underline-from-left {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n.hvr-underline-from-left:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  right: 100%;\n  bottom: 0;\n  background: #2098d1;\n  height: 4px;\n  -webkit-transition-property: right;\n  transition-property: right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-underline-from-left:hover:before, .hvr-underline-from-left:focus:before, .hvr-underline-from-left:active:before {\n  right: 0;\n}\n\n/* Underline From Center */\n.hvr-underline-from-center {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n.hvr-underline-from-center:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #2098d1;\n  height: 4px;\n  -webkit-transition-property: left, right;\n  transition-property: left, right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {\n  left: 0;\n  right: 0;\n}\n\n/* Underline From Right */\n.hvr-underline-from-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n.hvr-underline-from-right:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 100%;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  height: 4px;\n  -webkit-transition-property: left;\n  transition-property: left;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-underline-from-right:hover:before, .hvr-underline-from-right:focus:before, .hvr-underline-from-right:active:before {\n  left: 0;\n}\n\n/* Overline From Left */\n.hvr-overline-from-left {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n.hvr-overline-from-left:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  right: 100%;\n  top: 0;\n  background: #2098d1;\n  height: 4px;\n  -webkit-transition-property: right;\n  transition-property: right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-overline-from-left:hover:before, .hvr-overline-from-left:focus:before, .hvr-overline-from-left:active:before {\n  right: 0;\n}\n\n/* Overline From Center */\n.hvr-overline-from-center {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n.hvr-overline-from-center:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  top: 0;\n  background: #2098d1;\n  height: 4px;\n  -webkit-transition-property: left, right;\n  transition-property: left, right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-overline-from-center:hover:before, .hvr-overline-from-center:focus:before, .hvr-overline-from-center:active:before {\n  left: 0;\n  right: 0;\n}\n\n/* Overline From Right */\n.hvr-overline-from-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n.hvr-overline-from-right:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 100%;\n  right: 0;\n  top: 0;\n  background: #2098d1;\n  height: 4px;\n  -webkit-transition-property: left;\n  transition-property: left;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-overline-from-right:hover:before, .hvr-overline-from-right:focus:before, .hvr-overline-from-right:active:before {\n  left: 0;\n}\n\n/* Reveal */\n.hvr-reveal {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n.hvr-reveal:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  border-color: #2098d1;\n  border-style: solid;\n  border-width: 0;\n  -webkit-transition-property: border-width;\n  transition-property: border-width;\n  -webkit-transition-duration: 0.1s;\n  transition-duration: 0.1s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-reveal:hover:before, .hvr-reveal:focus:before, .hvr-reveal:active:before {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  border-width: 4px;\n}\n\n/* Underline Reveal */\n.hvr-underline-reveal {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n.hvr-underline-reveal:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  height: 4px;\n  -webkit-transform: translateY(4px);\n  transform: translateY(4px);\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-underline-reveal:hover:before, .hvr-underline-reveal:focus:before, .hvr-underline-reveal:active:before {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n}\n\n/* Overline Reveal */\n.hvr-overline-reveal {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n.hvr-overline-reveal:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  right: 0;\n  top: 0;\n  background: #2098d1;\n  height: 4px;\n  -webkit-transform: translateY(-4px);\n  transform: translateY(-4px);\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-overline-reveal:hover:before, .hvr-overline-reveal:focus:before, .hvr-overline-reveal:active:before {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n}\n\n/* SHADOW/GLOW TRANSITIONS */\n/* Glow */\n.hvr-glow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: box-shadow;\n  transition-property: box-shadow;\n}\n.hvr-glow:hover, .hvr-glow:focus, .hvr-glow:active {\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\n}\n\n/* Shadow */\n.hvr-shadow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: box-shadow;\n  transition-property: box-shadow;\n}\n.hvr-shadow:hover, .hvr-shadow:focus, .hvr-shadow:active {\n  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);\n}\n\n/* Grow Shadow */\n.hvr-grow-shadow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: box-shadow, transform;\n  -webkit-transition-property: box-shadow, -webkit-transform;\n  transition-property: box-shadow, -webkit-transform;\n  transition-property: box-shadow, transform;\n  transition-property: box-shadow, transform, -webkit-transform;\n}\n.hvr-grow-shadow:hover, .hvr-grow-shadow:focus, .hvr-grow-shadow:active {\n  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n\n/* Box Shadow Outset */\n.hvr-box-shadow-outset {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: box-shadow;\n  transition-property: box-shadow;\n}\n.hvr-box-shadow-outset:hover, .hvr-box-shadow-outset:focus, .hvr-box-shadow-outset:active {\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);\n}\n\n/* Box Shadow Inset */\n.hvr-box-shadow-inset {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: box-shadow;\n  transition-property: box-shadow;\n  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0);\n  /* Hack to improve aliasing on mobile/tablet devices */\n}\n.hvr-box-shadow-inset:hover, .hvr-box-shadow-inset:focus, .hvr-box-shadow-inset:active {\n  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0);\n  /* Hack to improve aliasing on mobile/tablet devices */\n}\n\n/* Float Shadow */\n.hvr-float-shadow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.hvr-float-shadow:before {\n  pointer-events: none;\n  position: absolute;\n  z-index: -1;\n  content: '';\n  top: 100%;\n  left: 5%;\n  height: 10px;\n  width: 90%;\n  opacity: 0;\n  background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);\n  background: -webkit-radial-gradient(center ellipse, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);\n  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);\n  /* W3C */\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform, opacity;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n}\n.hvr-float-shadow:hover, .hvr-float-shadow:focus, .hvr-float-shadow:active {\n  -webkit-transform: translateY(-5px);\n  transform: translateY(-5px);\n  /* move the element up by 5px */\n}\n.hvr-float-shadow:hover:before, .hvr-float-shadow:focus:before, .hvr-float-shadow:active:before {\n  opacity: 1;\n  -webkit-transform: translateY(5px);\n  transform: translateY(5px);\n  /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */\n}\n\n/* Shadow Radial */\n.hvr-shadow-radial {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-shadow-radial:before, .hvr-shadow-radial:after {\n  pointer-events: none;\n  position: absolute;\n  content: '';\n  left: 0;\n  width: 100%;\n  box-sizing: border-box;\n  background-repeat: no-repeat;\n  height: 5px;\n  opacity: 0;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n}\n.hvr-shadow-radial:before {\n  bottom: 100%;\n  background: -webkit-radial-gradient(50% 150%, ellipse, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);\n  background: -webkit-radial-gradient(50% 150% ellipse, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);\n  background: radial-gradient(ellipse at 50% 150%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);\n}\n.hvr-shadow-radial:after {\n  top: 100%;\n  background: -webkit-radial-gradient(50% -50%, ellipse, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);\n  background: -webkit-radial-gradient(50% -50% ellipse, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);\n  background: radial-gradient(ellipse at 50% -50%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);\n}\n.hvr-shadow-radial:hover:before, .hvr-shadow-radial:focus:before, .hvr-shadow-radial:active:before, .hvr-shadow-radial:hover:after, .hvr-shadow-radial:focus:after, .hvr-shadow-radial:active:after {\n  opacity: 1;\n}\n\n/* SPEECH BUBBLES */\n/* Bubble Top */\n.hvr-bubble-top {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-bubble-top:before {\n  pointer-events: none;\n  position: absolute;\n  z-index: -1;\n  content: '';\n  border-style: solid;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  left: calc(50% - 10px);\n  top: 0;\n  border-width: 0 10px 10px 10px;\n  border-color: transparent transparent #e1e1e1 transparent;\n}\n.hvr-bubble-top:hover:before, .hvr-bubble-top:focus:before, .hvr-bubble-top:active:before {\n  -webkit-transform: translateY(-10px);\n  transform: translateY(-10px);\n}\n\n/* Bubble Right */\n.hvr-bubble-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-bubble-right:before {\n  pointer-events: none;\n  position: absolute;\n  z-index: -1;\n  content: '';\n  border-style: solid;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  top: calc(50% - 10px);\n  right: 0;\n  border-width: 10px 0 10px 10px;\n  border-color: transparent transparent transparent #e1e1e1;\n}\n.hvr-bubble-right:hover:before, .hvr-bubble-right:focus:before, .hvr-bubble-right:active:before {\n  -webkit-transform: translateX(10px);\n  transform: translateX(10px);\n}\n\n/* Bubble Bottom */\n.hvr-bubble-bottom {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-bubble-bottom:before {\n  pointer-events: none;\n  position: absolute;\n  z-index: -1;\n  content: '';\n  border-style: solid;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  left: calc(50% - 10px);\n  bottom: 0;\n  border-width: 10px 10px 0 10px;\n  border-color: #e1e1e1 transparent transparent transparent;\n}\n.hvr-bubble-bottom:hover:before, .hvr-bubble-bottom:focus:before, .hvr-bubble-bottom:active:before {\n  -webkit-transform: translateY(10px);\n  transform: translateY(10px);\n}\n\n/* Bubble Left */\n.hvr-bubble-left {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-bubble-left:before {\n  pointer-events: none;\n  position: absolute;\n  z-index: -1;\n  content: '';\n  border-style: solid;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  top: calc(50% - 10px);\n  left: 0;\n  border-width: 10px 10px 10px 0;\n  border-color: transparent #e1e1e1 transparent transparent;\n}\n.hvr-bubble-left:hover:before, .hvr-bubble-left:focus:before, .hvr-bubble-left:active:before {\n  -webkit-transform: translateX(-10px);\n  transform: translateX(-10px);\n}\n\n/* Bubble Float Top */\n.hvr-bubble-float-top {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.hvr-bubble-float-top:before {\n  position: absolute;\n  z-index: -1;\n  content: '';\n  left: calc(50% - 10px);\n  top: 0;\n  border-style: solid;\n  border-width: 0 10px 10px 10px;\n  border-color: transparent transparent #e1e1e1 transparent;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.hvr-bubble-float-top:hover, .hvr-bubble-float-top:focus, .hvr-bubble-float-top:active {\n  -webkit-transform: translateY(10px);\n  transform: translateY(10px);\n}\n.hvr-bubble-float-top:hover:before, .hvr-bubble-float-top:focus:before, .hvr-bubble-float-top:active:before {\n  -webkit-transform: translateY(-10px);\n  transform: translateY(-10px);\n}\n\n/* Bubble Float Right */\n.hvr-bubble-float-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.hvr-bubble-float-right:before {\n  position: absolute;\n  z-index: -1;\n  top: calc(50% - 10px);\n  right: 0;\n  content: '';\n  border-style: solid;\n  border-width: 10px 0 10px 10px;\n  border-color: transparent transparent transparent #e1e1e1;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.hvr-bubble-float-right:hover, .hvr-bubble-float-right:focus, .hvr-bubble-float-right:active {\n  -webkit-transform: translateX(-10px);\n  transform: translateX(-10px);\n}\n.hvr-bubble-float-right:hover:before, .hvr-bubble-float-right:focus:before, .hvr-bubble-float-right:active:before {\n  -webkit-transform: translateX(10px);\n  transform: translateX(10px);\n}\n\n/* Bubble Float Bottom */\n.hvr-bubble-float-bottom {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.hvr-bubble-float-bottom:before {\n  position: absolute;\n  z-index: -1;\n  content: '';\n  left: calc(50% - 10px);\n  bottom: 0;\n  border-style: solid;\n  border-width: 10px 10px 0 10px;\n  border-color: #e1e1e1 transparent transparent transparent;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.hvr-bubble-float-bottom:hover, .hvr-bubble-float-bottom:focus, .hvr-bubble-float-bottom:active {\n  -webkit-transform: translateY(-10px);\n  transform: translateY(-10px);\n}\n.hvr-bubble-float-bottom:hover:before, .hvr-bubble-float-bottom:focus:before, .hvr-bubble-float-bottom:active:before {\n  -webkit-transform: translateY(10px);\n  transform: translateY(10px);\n}\n\n/* Bubble Float Left */\n.hvr-bubble-float-left {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.hvr-bubble-float-left:before {\n  position: absolute;\n  z-index: -1;\n  content: '';\n  top: calc(50% - 10px);\n  left: 0;\n  border-style: solid;\n  border-width: 10px 10px 10px 0;\n  border-color: transparent #e1e1e1 transparent transparent;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.hvr-bubble-float-left:hover, .hvr-bubble-float-left:focus, .hvr-bubble-float-left:active {\n  -webkit-transform: translateX(10px);\n  transform: translateX(10px);\n}\n.hvr-bubble-float-left:hover:before, .hvr-bubble-float-left:focus:before, .hvr-bubble-float-left:active:before {\n  -webkit-transform: translateX(-10px);\n  transform: translateX(-10px);\n}\n\n/* ICONS */\n/* Icon Back */\n.hvr-icon-back {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-left: 2.2em;\n  -webkit-transition-duration: 0.1s;\n  transition-duration: 0.1s;\n}\n.hvr-icon-back:before {\n  content: \"\\f137\";\n  position: absolute;\n  left: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.1s;\n  transition-duration: 0.1s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-back:hover:before, .hvr-icon-back:focus:before, .hvr-icon-back:active:before {\n  -webkit-transform: translateX(-4px);\n  transform: translateX(-4px);\n}\n\n/* Icon Forward */\n.hvr-icon-forward {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.1s;\n  transition-duration: 0.1s;\n}\n.hvr-icon-forward:before {\n  content: \"\\f138\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.1s;\n  transition-duration: 0.1s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-forward:hover:before, .hvr-icon-forward:focus:before, .hvr-icon-forward:active:before {\n  -webkit-transform: translateX(4px);\n  transform: translateX(4px);\n}\n\n/* Icon Down */\n@-webkit-keyframes hvr-icon-down {\n  0%,\n  50%,\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  25%,\n  75% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n}\n\n@keyframes hvr-icon-down {\n  0%,\n  50%,\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  25%,\n  75% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n}\n\n/* Icon Down */\n.hvr-icon-down {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n}\n.hvr-icon-down:before {\n  content: \"\\f01a\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.hvr-icon-down:hover:before, .hvr-icon-down:focus:before, .hvr-icon-down:active:before {\n  -webkit-animation-name: hvr-icon-down;\n  animation-name: hvr-icon-down;\n  -webkit-animation-duration: 0.75s;\n  animation-duration: 0.75s;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n/* Icon Up */\n@-webkit-keyframes hvr-icon-up {\n  0%,\n  50%,\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  25%,\n  75% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n}\n\n@keyframes hvr-icon-up {\n  0%,\n  50%,\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  25%,\n  75% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n}\n\n/* Icon Up */\n.hvr-icon-up {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n}\n.hvr-icon-up:before {\n  content: \"\\f01b\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.hvr-icon-up:hover:before, .hvr-icon-up:focus:before, .hvr-icon-up:active:before {\n  -webkit-animation-name: hvr-icon-up;\n  animation-name: hvr-icon-up;\n  -webkit-animation-duration: 0.75s;\n  animation-duration: 0.75s;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n/* Icon Spin */\n.hvr-icon-spin {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n}\n.hvr-icon-spin:before {\n  content: \"\\f021\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transition-duration: 1s;\n  transition-duration: 1s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-timing-function: ease-in-out;\n  transition-timing-function: ease-in-out;\n}\n.hvr-icon-spin:hover:before, .hvr-icon-spin:focus:before, .hvr-icon-spin:active:before {\n  -webkit-transform: rotate(360deg);\n  transform: rotate(360deg);\n}\n\n/* Icon Drop */\n@-webkit-keyframes hvr-icon-drop {\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%);\n  }\n\n  51%,\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes hvr-icon-drop {\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%);\n  }\n\n  51%,\n  100% {\n    opacity: 1;\n  }\n}\n\n/* Icon Drop */\n.hvr-icon-drop {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n}\n.hvr-icon-drop:before {\n  content: \"\\f041\";\n  position: absolute;\n  right: 1em;\n  opacity: 1;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.hvr-icon-drop:hover:before, .hvr-icon-drop:focus:before, .hvr-icon-drop:active:before {\n  opacity: 0;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-animation-name: hvr-icon-drop;\n  animation-name: hvr-icon-drop;\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n  animation-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\n\n/* Icon Fade */\n.hvr-icon-fade {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n}\n.hvr-icon-fade:before {\n  content: \"\\f00c\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n  -webkit-transition-property: color;\n  transition-property: color;\n}\n.hvr-icon-fade:hover:before, .hvr-icon-fade:focus:before, .hvr-icon-fade:active:before {\n  color: #0F9E5E;\n}\n\n/* Icon Float Away */\n@-webkit-keyframes hvr-icon-float-away {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-1em);\n    transform: translateY(-1em);\n  }\n}\n\n@keyframes hvr-icon-float-away {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-1em);\n    transform: translateY(-1em);\n  }\n}\n\n/* Icon Float Away */\n.hvr-icon-float-away {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n}\n.hvr-icon-float-away:before, .hvr-icon-float-away:after {\n  content: \"\\f055\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n}\n.hvr-icon-float-away:after {\n  opacity: 0;\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n.hvr-icon-float-away:hover:after, .hvr-icon-float-away:focus:after, .hvr-icon-float-away:active:after {\n  -webkit-animation-name: hvr-icon-float-away;\n  animation-name: hvr-icon-float-away;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n/* Icon Sink Away */\n@-webkit-keyframes hvr-icon-sink-away {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(1em);\n    transform: translateY(1em);\n  }\n}\n\n@keyframes hvr-icon-sink-away {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(1em);\n    transform: translateY(1em);\n  }\n}\n\n/* Icon Sink Away */\n.hvr-icon-sink-away {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n}\n.hvr-icon-sink-away:before, .hvr-icon-sink-away:after {\n  content: \"\\f056\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.hvr-icon-sink-away:after {\n  opacity: 0;\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n.hvr-icon-sink-away:hover:after, .hvr-icon-sink-away:focus:after, .hvr-icon-sink-away:active:after {\n  -webkit-animation-name: hvr-icon-sink-away;\n  animation-name: hvr-icon-sink-away;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n/* Icon Grow */\n.hvr-icon-grow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-grow:before {\n  content: \"\\f118\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-grow:hover:before, .hvr-icon-grow:focus:before, .hvr-icon-grow:active:before {\n  -webkit-transform: scale(1.3) translateZ(0);\n  transform: scale(1.3) translateZ(0);\n}\n\n/* Icon Shrink */\n.hvr-icon-shrink {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-shrink:before {\n  content: \"\\f119\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-shrink:hover:before, .hvr-icon-shrink:focus:before, .hvr-icon-shrink:active:before {\n  -webkit-transform: scale(0.8);\n  transform: scale(0.8);\n}\n\n/* Icon Pulse */\n@-webkit-keyframes hvr-icon-pulse {\n  25% {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n  }\n\n  75% {\n    -webkit-transform: scale(0.8);\n    transform: scale(0.8);\n  }\n}\n\n@keyframes hvr-icon-pulse {\n  25% {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n  }\n\n  75% {\n    -webkit-transform: scale(0.8);\n    transform: scale(0.8);\n  }\n}\n\n.hvr-icon-pulse {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n}\n.hvr-icon-pulse:before {\n  content: \"\\f015\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-pulse:hover:before, .hvr-icon-pulse:focus:before, .hvr-icon-pulse:active:before {\n  -webkit-animation-name: hvr-icon-pulse;\n  animation-name: hvr-icon-pulse;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n/* Icon Pulse Grow */\n@-webkit-keyframes hvr-icon-pulse-grow {\n  to {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n  }\n}\n\n@keyframes hvr-icon-pulse-grow {\n  to {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n  }\n}\n\n.hvr-icon-pulse-grow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n}\n.hvr-icon-pulse-grow:before {\n  content: \"\\f015\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-pulse-grow:hover:before, .hvr-icon-pulse-grow:focus:before, .hvr-icon-pulse-grow:active:before {\n  -webkit-animation-name: hvr-icon-pulse-grow;\n  animation-name: hvr-icon-pulse-grow;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n  animation-direction: alternate;\n}\n\n/* Icon Pulse Shrink */\n@-webkit-keyframes hvr-icon-pulse-shrink {\n  to {\n    -webkit-transform: scale(0.8);\n    transform: scale(0.8);\n  }\n}\n\n@keyframes hvr-icon-pulse-shrink {\n  to {\n    -webkit-transform: scale(0.8);\n    transform: scale(0.8);\n  }\n}\n\n.hvr-icon-pulse-shrink {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n}\n.hvr-icon-pulse-shrink:before {\n  content: \"\\f015\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-pulse-shrink:hover:before, .hvr-icon-pulse-shrink:focus:before, .hvr-icon-pulse-shrink:active:before {\n  -webkit-animation-name: hvr-icon-pulse-shrink;\n  animation-name: hvr-icon-pulse-shrink;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n  animation-direction: alternate;\n}\n\n/* Icon Push */\n@-webkit-keyframes hvr-icon-push {\n  50% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n}\n\n@keyframes hvr-icon-push {\n  50% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n}\n\n.hvr-icon-push {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-push:before {\n  content: \"\\f006\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-push:hover:before, .hvr-icon-push:focus:before, .hvr-icon-push:active:before {\n  -webkit-animation-name: hvr-icon-push;\n  animation-name: hvr-icon-push;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Icon Pop */\n@-webkit-keyframes hvr-icon-pop {\n  50% {\n    -webkit-transform: scale(1.5);\n    transform: scale(1.5);\n  }\n}\n\n@keyframes hvr-icon-pop {\n  50% {\n    -webkit-transform: scale(1.5);\n    transform: scale(1.5);\n  }\n}\n\n.hvr-icon-pop {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-pop:before {\n  content: \"\\f005\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-pop:hover:before, .hvr-icon-pop:focus:before, .hvr-icon-pop:active:before {\n  -webkit-animation-name: hvr-icon-pop;\n  animation-name: hvr-icon-pop;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Icon Bounce */\n.hvr-icon-bounce {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-bounce:before {\n  content: \"\\f087\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-bounce:hover:before, .hvr-icon-bounce:focus:before, .hvr-icon-bounce:active:before {\n  -webkit-transform: scale(1.5);\n  transform: scale(1.5);\n  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n}\n\n/* Icon Rotate */\n.hvr-icon-rotate {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-rotate:before {\n  content: \"\\f0c6\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-rotate:hover:before, .hvr-icon-rotate:focus:before, .hvr-icon-rotate:active:before {\n  -webkit-transform: rotate(20deg);\n  transform: rotate(20deg);\n}\n\n/* Icon Grow Rotate */\n.hvr-icon-grow-rotate {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-grow-rotate:before {\n  content: \"\\f095\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-grow-rotate:hover:before, .hvr-icon-grow-rotate:focus:before, .hvr-icon-grow-rotate:active:before {\n  -webkit-transform: scale(1.5) rotate(12deg);\n  transform: scale(1.5) rotate(12deg);\n}\n\n/* Icon Float */\n.hvr-icon-float {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-float:before {\n  content: \"\\f01b\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-float:hover:before, .hvr-icon-float:focus:before, .hvr-icon-float:active:before {\n  -webkit-transform: translateY(-4px);\n  transform: translateY(-4px);\n}\n\n/* Icon Sink */\n.hvr-icon-sink {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-sink:before {\n  content: \"\\f01a\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-sink:hover:before, .hvr-icon-sink:focus:before, .hvr-icon-sink:active:before {\n  -webkit-transform: translateY(4px);\n  transform: translateY(4px);\n}\n\n/* Icon Bob */\n@-webkit-keyframes hvr-icon-bob {\n  0% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n\n  50% {\n    -webkit-transform: translateY(-2px);\n    transform: translateY(-2px);\n  }\n\n  100% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n}\n\n@keyframes hvr-icon-bob {\n  0% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n\n  50% {\n    -webkit-transform: translateY(-2px);\n    transform: translateY(-2px);\n  }\n\n  100% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n}\n\n@-webkit-keyframes hvr-icon-bob-float {\n  100% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n}\n\n@keyframes hvr-icon-bob-float {\n  100% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n}\n\n.hvr-icon-bob {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-bob:before {\n  content: \"\\f077\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.hvr-icon-bob:hover:before, .hvr-icon-bob:focus:before, .hvr-icon-bob:active:before {\n  -webkit-animation-name: hvr-icon-bob-float, hvr-icon-bob;\n  animation-name: hvr-icon-bob-float, hvr-icon-bob;\n  -webkit-animation-duration: .3s, 1.5s;\n  animation-duration: .3s, 1.5s;\n  -webkit-animation-delay: 0s, .3s;\n  animation-delay: 0s, .3s;\n  -webkit-animation-timing-function: ease-out, ease-in-out;\n  animation-timing-function: ease-out, ease-in-out;\n  -webkit-animation-iteration-count: 1, infinite;\n  animation-iteration-count: 1, infinite;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-direction: normal, alternate;\n  animation-direction: normal, alternate;\n}\n\n/* Icon Hang */\n@-webkit-keyframes hvr-icon-hang {\n  0% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n\n  50% {\n    -webkit-transform: translateY(2px);\n    transform: translateY(2px);\n  }\n\n  100% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n}\n\n@keyframes hvr-icon-hang {\n  0% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n\n  50% {\n    -webkit-transform: translateY(2px);\n    transform: translateY(2px);\n  }\n\n  100% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n}\n\n@-webkit-keyframes hvr-icon-hang-sink {\n  100% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n}\n\n@keyframes hvr-icon-hang-sink {\n  100% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n}\n\n.hvr-icon-hang {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-hang:before {\n  content: \"\\f078\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.hvr-icon-hang:hover:before, .hvr-icon-hang:focus:before, .hvr-icon-hang:active:before {\n  -webkit-animation-name: hvr-icon-hang-sink, hvr-icon-hang;\n  animation-name: hvr-icon-hang-sink, hvr-icon-hang;\n  -webkit-animation-duration: .3s, 1.5s;\n  animation-duration: .3s, 1.5s;\n  -webkit-animation-delay: 0s, .3s;\n  animation-delay: 0s, .3s;\n  -webkit-animation-timing-function: ease-out, ease-in-out;\n  animation-timing-function: ease-out, ease-in-out;\n  -webkit-animation-iteration-count: 1, infinite;\n  animation-iteration-count: 1, infinite;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-direction: normal, alternate;\n  animation-direction: normal, alternate;\n}\n\n/* Icon Wobble Horizontal */\n@-webkit-keyframes hvr-icon-wobble-horizontal {\n  16.65% {\n    -webkit-transform: translateX(6px);\n    transform: translateX(6px);\n  }\n\n  33.3% {\n    -webkit-transform: translateX(-5px);\n    transform: translateX(-5px);\n  }\n\n  49.95% {\n    -webkit-transform: translateX(4px);\n    transform: translateX(4px);\n  }\n\n  66.6% {\n    -webkit-transform: translateX(-2px);\n    transform: translateX(-2px);\n  }\n\n  83.25% {\n    -webkit-transform: translateX(1px);\n    transform: translateX(1px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes hvr-icon-wobble-horizontal {\n  16.65% {\n    -webkit-transform: translateX(6px);\n    transform: translateX(6px);\n  }\n\n  33.3% {\n    -webkit-transform: translateX(-5px);\n    transform: translateX(-5px);\n  }\n\n  49.95% {\n    -webkit-transform: translateX(4px);\n    transform: translateX(4px);\n  }\n\n  66.6% {\n    -webkit-transform: translateX(-2px);\n    transform: translateX(-2px);\n  }\n\n  83.25% {\n    -webkit-transform: translateX(1px);\n    transform: translateX(1px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.hvr-icon-wobble-horizontal {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-wobble-horizontal:before {\n  content: \"\\f061\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.hvr-icon-wobble-horizontal:hover:before, .hvr-icon-wobble-horizontal:focus:before, .hvr-icon-wobble-horizontal:active:before {\n  -webkit-animation-name: hvr-icon-wobble-horizontal;\n  animation-name: hvr-icon-wobble-horizontal;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Icon Wobble Vertical */\n@-webkit-keyframes hvr-icon-wobble-vertical {\n  16.65% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n\n  33.3% {\n    -webkit-transform: translateY(-5px);\n    transform: translateY(-5px);\n  }\n\n  49.95% {\n    -webkit-transform: translateY(4px);\n    transform: translateY(4px);\n  }\n\n  66.6% {\n    -webkit-transform: translateY(-2px);\n    transform: translateY(-2px);\n  }\n\n  83.25% {\n    -webkit-transform: translateY(1px);\n    transform: translateY(1px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes hvr-icon-wobble-vertical {\n  16.65% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n\n  33.3% {\n    -webkit-transform: translateY(-5px);\n    transform: translateY(-5px);\n  }\n\n  49.95% {\n    -webkit-transform: translateY(4px);\n    transform: translateY(4px);\n  }\n\n  66.6% {\n    -webkit-transform: translateY(-2px);\n    transform: translateY(-2px);\n  }\n\n  83.25% {\n    -webkit-transform: translateY(1px);\n    transform: translateY(1px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.hvr-icon-wobble-vertical {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-wobble-vertical:before {\n  content: \"\\f062\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.hvr-icon-wobble-vertical:hover:before, .hvr-icon-wobble-vertical:focus:before, .hvr-icon-wobble-vertical:active:before {\n  -webkit-animation-name: hvr-icon-wobble-vertical;\n  animation-name: hvr-icon-wobble-vertical;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Icon Buzz */\n@-webkit-keyframes hvr-icon-buzz {\n  50% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  100% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n}\n\n@keyframes hvr-icon-buzz {\n  50% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  100% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n}\n\n.hvr-icon-buzz {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-buzz:before {\n  content: \"\\f017\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.hvr-icon-buzz:hover:before, .hvr-icon-buzz:focus:before, .hvr-icon-buzz:active:before {\n  -webkit-animation-name: hvr-icon-buzz;\n  animation-name: hvr-icon-buzz;\n  -webkit-animation-duration: 0.15s;\n  animation-duration: 0.15s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n/* Icon Buzz Out */\n@-webkit-keyframes hvr-icon-buzz-out {\n  10% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  20% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n\n  30% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  40% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(2px) rotate(1deg);\n    transform: translateX(2px) rotate(1deg);\n  }\n\n  60% {\n    -webkit-transform: translateX(-2px) rotate(-1deg);\n    transform: translateX(-2px) rotate(-1deg);\n  }\n\n  70% {\n    -webkit-transform: translateX(2px) rotate(1deg);\n    transform: translateX(2px) rotate(1deg);\n  }\n\n  80% {\n    -webkit-transform: translateX(-2px) rotate(-1deg);\n    transform: translateX(-2px) rotate(-1deg);\n  }\n\n  90% {\n    -webkit-transform: translateX(1px) rotate(0);\n    transform: translateX(1px) rotate(0);\n  }\n\n  100% {\n    -webkit-transform: translateX(-1px) rotate(0);\n    transform: translateX(-1px) rotate(0);\n  }\n}\n\n@keyframes hvr-icon-buzz-out {\n  10% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  20% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n\n  30% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  40% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(2px) rotate(1deg);\n    transform: translateX(2px) rotate(1deg);\n  }\n\n  60% {\n    -webkit-transform: translateX(-2px) rotate(-1deg);\n    transform: translateX(-2px) rotate(-1deg);\n  }\n\n  70% {\n    -webkit-transform: translateX(2px) rotate(1deg);\n    transform: translateX(2px) rotate(1deg);\n  }\n\n  80% {\n    -webkit-transform: translateX(-2px) rotate(-1deg);\n    transform: translateX(-2px) rotate(-1deg);\n  }\n\n  90% {\n    -webkit-transform: translateX(1px) rotate(0);\n    transform: translateX(1px) rotate(0);\n  }\n\n  100% {\n    -webkit-transform: translateX(-1px) rotate(0);\n    transform: translateX(-1px) rotate(0);\n  }\n}\n\n.hvr-icon-buzz-out {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-buzz-out:before {\n  content: \"\\f023\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.hvr-icon-buzz-out:hover:before, .hvr-icon-buzz-out:focus:before, .hvr-icon-buzz-out:active:before {\n  -webkit-animation-name: hvr-icon-buzz-out;\n  animation-name: hvr-icon-buzz-out;\n  -webkit-animation-duration: 0.75s;\n  animation-duration: 0.75s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* CURLS */\n/* Curl Top Left */\n.hvr-curl-top-left {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-curl-top-left:before {\n  pointer-events: none;\n  position: absolute;\n  content: '';\n  height: 0;\n  width: 0;\n  top: 0;\n  left: 0;\n  background: white;\n  /* IE9 */\n  background: -webkit-linear-gradient(315deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%);\n  background: linear-gradient(135deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%);\n  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffffff', endColorstr='#000000');\n  /*For IE7-8-9*/\n  z-index: 1000;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: width, height;\n  transition-property: width, height;\n}\n.hvr-curl-top-left:hover:before, .hvr-curl-top-left:focus:before, .hvr-curl-top-left:active:before {\n  width: 25px;\n  height: 25px;\n}\n\n/* Curl Top Right */\n.hvr-curl-top-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-curl-top-right:before {\n  pointer-events: none;\n  position: absolute;\n  content: '';\n  height: 0;\n  width: 0;\n  top: 0;\n  right: 0;\n  background: white;\n  /* IE9 */\n  background: -webkit-linear-gradient(225deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%);\n  background: linear-gradient(225deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%);\n  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.4);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: width, height;\n  transition-property: width, height;\n}\n.hvr-curl-top-right:hover:before, .hvr-curl-top-right:focus:before, .hvr-curl-top-right:active:before {\n  width: 25px;\n  height: 25px;\n}\n\n/* Curl Bottom Right */\n.hvr-curl-bottom-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-curl-bottom-right:before {\n  pointer-events: none;\n  position: absolute;\n  content: '';\n  height: 0;\n  width: 0;\n  bottom: 0;\n  right: 0;\n  background: white;\n  /* IE9 */\n  background: -webkit-linear-gradient(135deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%);\n  background: linear-gradient(315deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%);\n  box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.4);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: width, height;\n  transition-property: width, height;\n}\n.hvr-curl-bottom-right:hover:before, .hvr-curl-bottom-right:focus:before, .hvr-curl-bottom-right:active:before {\n  width: 25px;\n  height: 25px;\n}\n\n/* Curl Bottom Left */\n.hvr-curl-bottom-left {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-curl-bottom-left:before {\n  pointer-events: none;\n  position: absolute;\n  content: '';\n  height: 0;\n  width: 0;\n  bottom: 0;\n  left: 0;\n  background: white;\n  /* IE9 */\n  background: -webkit-linear-gradient(45deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%);\n  background: linear-gradient(45deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%);\n  box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.4);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: width, height;\n  transition-property: width, height;\n}\n.hvr-curl-bottom-left:hover:before, .hvr-curl-bottom-left:focus:before, .hvr-curl-bottom-left:active:before {\n  width: 25px;\n  height: 25px;\n}\n"

/***/ },

/***/ 128:
/***/ function(module, exports) {

module.exports = "/* loader animation start */\n.elem{\n    height: 15px;\n    display: block;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transition-duration: 1s;\n            transition-duration: 1s;\n}\n.elem-rotate {\n    -webkit-animation-name: rotate;\n            animation-name: rotate; \n    -webkit-animation-duration: 2s; \n            animation-duration: 2s; \n    -webkit-animation-iteration-count: infinite; \n            animation-iteration-count: infinite;\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    color: #fb545b;\n}\n.navbar .btn.btn-basic.btn-menu.btn-menu.green-bg{\n    background: rgb(26, 188, 156);\n    border: 1px solid rgb(26, 188, 156);\n}\n.btn-menu .elem i.green-color {\n    color: #fff;\n}\n.btn-menu .elem.elem-rotate i{color: #fb545b;}\n@-webkit-keyframes rotate {\n    from {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n    to {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n}\n@keyframes rotate {\n    from {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n    to {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n}\n/* loader animation end */\n.label {\n  border-radius: 1px;\n}\n.label,\n.label.label-default {\n  background-color: #9e9e9e;\n}\n.label.label-inverse {\n  background-color: #3f51b5;\n}\n.label.label-primary {\n  background-color: #009688;\n}\n.label.label-success {\n  background-color: #4caf50;\n}\n.label.label-info {\n  background-color: #03a9f4;\n}\n.label.label-warning {\n  background-color: #ff5722;\n}\n.label.label-danger {\n  background-color: #f44336;\n}\n.form-control,\n.form-group .form-control {\n  border: 0;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#009688, #009688), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 0 2px, 100% 1px;\n  background-repeat: no-repeat;\n  background-position: center bottom, center calc(100% - 1px);\n  background-color: rgba(0, 0, 0, 0);\n  -webkit-transition: background 0s ease-out;\n          transition: background 0s ease-out;\n  float: none;\n  box-shadow: none;\n  border-radius: 0;\n}\n.form-group .form-control.material-textarea {\n  min-height: 5em;\n}\n.form-control::-moz-placeholder,\n.form-group .form-control::-moz-placeholder {\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-control:-ms-input-placeholder,\n.form-group .form-control:-ms-input-placeholder {\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-control::-webkit-input-placeholder,\n.form-group .form-control::-webkit-input-placeholder {\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-control[readonly],\n.form-group .form-control[readonly],\n.form-control[disabled],\n.form-group .form-control[disabled],\nfieldset[disabled] .form-control,\nfieldset[disabled] .form-group .form-control {\n  background-color: rgba(0, 0, 0, 0);\n}\n.form-control[disabled],\n.form-group .form-control[disabled],\nfieldset[disabled] .form-control,\nfieldset[disabled] .form-group .form-control {\n  background-image: none;\n  border-bottom: 1px dotted #D2D2D2;\n}\n.form-group {\n  position: relative;\n}\n.form-group.label-static label.control-label,\n.form-group.label-placeholder label.control-label,\n.form-group.label-floating label.control-label {\n  position: absolute;\n  pointer-events: none;\n  -webkit-transition: 0.3s ease all;\n          transition: 0.3s ease all;\n}\n.form-group.label-floating label.control-label {\n  will-change: left, top, contents;\n}\n.form-group.label-placeholder:not(.is-empty) label.control-label {\n  display: none;\n}\n.form-group .help-block {\n  position: absolute;\n  display: none;\n}\n.form-group.is-focused .form-control {\n  outline: none;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#009688, #009688), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 100% 2px, 100% 1px;\n  box-shadow: none;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n}\n.form-group.is-focused .form-control .material-input:after {\n  background-color: #009688;\n}\n.form-group.is-focused label,\n.form-group.is-focused label.control-label {\n  color: #009688;\n}\n.form-group.is-focused.label-placeholder label,\n.form-group.is-focused.label-placeholder label.control-label {\n  color: #BDBDBD;\n}\n.form-group.is-focused .help-block {\n  display: block;\n}\n.form-group.has-warning .form-control {\n  box-shadow: none;\n}\n.form-group.has-warning.is-focused .form-control {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#ff5722), to(#ff5722)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#ff5722, #ff5722), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#ff5722, #ff5722), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-warning label.control-label,\n.form-group.has-warning .help-block {\n  color: #ff5722;\n}\n.form-group.has-error .form-control {\n  box-shadow: none;\n}\n.form-group.has-error.is-focused .form-control {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#f44336), to(#f44336)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#f44336, #f44336), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#f44336, #f44336), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-error label.control-label,\n.form-group.has-error .help-block {\n  color: #f44336;\n}\n.form-group.has-success .form-control {\n  box-shadow: none;\n}\n.form-group.has-success.is-focused .form-control {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#4caf50), to(#4caf50)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#4caf50, #4caf50), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-success label.control-label,\n.form-group.has-success .help-block {\n  color: #4caf50;\n}\n.form-group.has-info .form-control {\n  box-shadow: none;\n}\n.form-group.has-info.is-focused .form-control {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#03a9f4), to(#03a9f4)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#03a9f4, #03a9f4), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#03a9f4, #03a9f4), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-info label.control-label,\n.form-group.has-info .help-block {\n  color: #03a9f4;\n}\n.form-group textarea {\n  resize: none;\n}\n.form-group textarea ~ .form-control-highlight {\n  margin-top: -11px;\n}\n.form-group select {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.form-group select ~ .material-input:after {\n  display: none;\n}\n.form-control {\n  margin-bottom: 7px;\n}\n.form-control::-moz-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-control:-ms-input-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-control::-webkit-input-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.checkbox label,\n.radio label,\nlabel {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\nlabel.control-label {\n  font-size: 12px;\n  line-height: 1.07142857;\n  color: #BDBDBD;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.help-block {\n  margin-top: 0;\n  font-size: 12px;\n}\n.form-group {\n  padding-bottom: 7px;\n  margin: 28px 0 0 0;\n}\n.form-group .form-control {\n  margin-bottom: 7px;\n}\n.form-group .form-control::-moz-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group .form-control:-ms-input-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group .form-control::-webkit-input-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group .checkbox label,\n.form-group .radio label,\n.form-group label {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group label.control-label {\n  font-size: 12px;\n  line-height: 1.07142857;\n  color: #BDBDBD;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group .help-block {\n  margin-top: 0;\n  font-size: 12px;\n}\n.form-group.label-floating label.control-label,\n.form-group.label-placeholder label.control-label {\n  top: -7px;\n  font-size: 16px;\n  line-height: 1.42857143;\n}\n.form-group.label-static label.control-label,\n.form-group.label-floating.is-focused label.control-label,\n.form-group.label-floating:not(.is-empty) label.control-label {\n  top: -30px;\n  left: 0;\n  font-size: 12px;\n  line-height: 1.07142857;\n}\n.form-group.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -30px;\n  left: 0;\n  font-size: 12px;\n  line-height: 1.07142857;\n}\n.form-group.form-group-sm {\n  padding-bottom: 3px;\n  margin: 21px 0 0 0;\n}\n.form-group.form-group-sm .form-control {\n  margin-bottom: 3px;\n}\n.form-group.form-group-sm .form-control::-moz-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-sm .form-control:-ms-input-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-sm .form-control::-webkit-input-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-sm .checkbox label,\n.form-group.form-group-sm .radio label,\n.form-group.form-group-sm label {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-sm label.control-label {\n  font-size: 9px;\n  line-height: 1.125;\n  color: #BDBDBD;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group.form-group-sm .help-block {\n  margin-top: 0;\n  font-size: 9px;\n}\n.form-group.form-group-sm.label-floating label.control-label,\n.form-group.form-group-sm.label-placeholder label.control-label {\n  top: -11px;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.form-group.form-group-sm.label-static label.control-label,\n.form-group.form-group-sm.label-floating.is-focused label.control-label,\n.form-group.form-group-sm.label-floating:not(.is-empty) label.control-label {\n  top: -25px;\n  left: 0;\n  font-size: 9px;\n  line-height: 1.125;\n}\n.form-group.form-group-sm.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -25px;\n  left: 0;\n  font-size: 9px;\n  line-height: 1.125;\n}\n.form-group.form-group-lg {\n  padding-bottom: 9px;\n  margin: 30px 0 0 0;\n}\n.form-group.form-group-lg .form-control {\n  margin-bottom: 9px;\n}\n.form-group.form-group-lg .form-control::-moz-placeholder {\n  font-size: 18px;\n  line-height: 1.3333333;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-lg .form-control:-ms-input-placeholder {\n  font-size: 18px;\n  line-height: 1.3333333;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-lg .form-control::-webkit-input-placeholder {\n  font-size: 18px;\n  line-height: 1.3333333;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-lg .checkbox label,\n.form-group.form-group-lg .radio label,\n.form-group.form-group-lg label {\n  font-size: 18px;\n  line-height: 1.3333333;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-lg label.control-label {\n  font-size: 14px;\n  line-height: 0.99999998;\n  color: #BDBDBD;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group.form-group-lg .help-block {\n  margin-top: 0;\n  font-size: 14px;\n}\n.form-group.form-group-lg.label-floating label.control-label,\n.form-group.form-group-lg.label-placeholder label.control-label {\n  top: -5px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.form-group.form-group-lg.label-static label.control-label,\n.form-group.form-group-lg.label-floating.is-focused label.control-label,\n.form-group.form-group-lg.label-floating:not(.is-empty) label.control-label {\n  top: -32px;\n  left: 0;\n  font-size: 14px;\n  line-height: 0.99999998;\n}\n.form-group.form-group-lg.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -32px;\n  left: 0;\n  font-size: 14px;\n  line-height: 0.99999998;\n}\n\n\n/* custom material css start (sahil) */\n    .sahil-material .form-control {\n        height: 38px;\n        padding: 7px 0;\n        font-size: 14px;\n        line-height: 1.42857143;\n        font-family: montserratregular;\n        color: #62696d;\n    }\n    .sahil-material .form-group label.control-label {\n        font-size: 14px;\n        line-height: 1.07142857;\n        color: #8e989f;\n        font-weight: 400;\n        margin: 16px 0 0 0;\n        font-family: montserratregular;\n    }\n    .sahil-material .form-group label.control-label.seo-static-label{\n        text-transform: uppercase !important;\n        font-size: 10px !important;\n        color: #8e989f !important;\n    }\n    .sahil-material .form-group.label-floating label.control-label,\n    .sahil-material .form-group.label-placeholder label.control-label {\n        top: -7px;\n        font-size: 14px;\n        line-height: 18px;\n        color: #8e989f;\n    }\n    .sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\n        top: -20px;\n        font-family: montserratregular;\n        font-size: 11px;\n        text-transform: uppercase;\n        color: #8e989f !important;\n    }\n    .sahil-material .form-group.label-floating.is-focused label.control-label {\n        top: -20px;\n        font-size: 11px;\n        font-family: montserratregular;\n        color: #8e989f !important;\n    }\n    .sahil-material .form-group.is-focused label,\n    .sahil-material .form-group.is-focused label.control-label {\n        font-size: 11px;\n        font-family: montserratregular;\n        color: #8e989f !important;\n        text-transform: uppercase;\n    }\n    .sahil-material .form-control,\n    .sahil-material .form-group .form-control {\n        border: 0 !important;\n        background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n        background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #D2D2D2);\n        background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #d7dbdd);\n        background-image: linear-gradient(#009688, #009688), linear-gradient(#d7dbdd, #d7dbdd);\n\n    }\n    \n    .sahil-material .form-group.is-focused .form-control {\n        outline: none;\n        background-image: -webkit-gradient(linear, left top, left bottom, from(#fb545b), to(#fb545b)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n        background-image: -webkit-linear-gradient(#fb545b, #fb545b), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n        background-image: linear-gradient(#fb545b, #fb545b), linear-gradient(#D2D2D2, #D2D2D2);\n        background-size: 100% 2px, 100% 1px;\n        box-shadow: none;\n        -webkit-transition-duration: 0.3s;\n                transition-duration: 0.3s;\n    }\n\n/* custom material css end (sahil) */\n\n\n"

/***/ },

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__script_store__ = __webpack_require__(564);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Script; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Script = (function () {
    function Script() {
        var _this = this;
        this.scripts = {};
        __WEBPACK_IMPORTED_MODULE_1__script_store__["a" /* ScriptStore */].forEach(function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    Script.prototype.load = function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i - 0] = arguments[_i];
        }
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    Script.prototype.loadScript = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //resolve if already loaded
            if (_this.scripts[name].loaded) {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
            else {
                //load script
                var script_1 = document.createElement('script');
                script_1.type = 'text/javascript';
                script_1.src = _this.scripts[name].src;
                if (script_1.readyState) {
                    script_1.onreadystatechange = function () {
                        if (script_1.readyState === "loaded" || script_1.readyState === "complete") {
                            script_1.onreadystatechange = null;
                            _this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else {
                    script_1.onload = function () {
                        _this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script_1.onerror = function (error) { return resolve({ script: name, loaded: false, status: 'Loaded' }); };
                document.getElementsByTagName('head')[0].appendChild(script_1);
            }
        });
    };
    Script.prototype.runScript = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            jQuery.getScript(_this.scripts[name].src)
                .then(function (data) {
                resolve([{ script: name, loaded: true, status: 'Loaded' }]);
            });
        });
    };
    Script = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], Script);
    return Script;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/script.service.js.map

/***/ },

/***/ 130:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cookie_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MarketingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarketingService = (function () {
    function MarketingService(_cookieService) {
        this._cookieService = _cookieService;
        this.intercom_id = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].INTERCOM_ID;
    }
    MarketingService.prototype.initMarketingStuff = function () {
        //Intercom
        if (this._cookieService.readCookie('storage')) {
            var storage = JSON.parse(this._cookieService.readCookie('storage'));
            window.Intercom('boot', {
                app_id: this.intercom_id,
                email: storage.user.emails[0].email,
                name: storage.user.name,
                'ISLEAD': false,
                created_at: (Math.round(Date.parse(storage.user.createdAt) / 1000)),
                custom_launcher_selector: '.intercom_trigger',
                widget: {
                    activator: '#IntercomDefaultWidget'
                }
            });
        }
        else {
            window.Intercom('boot', {
                app_id: this.intercom_id,
                widget: {
                    activator: '#IntercomDefaultWidget'
                }
            });
        }
        //LeadDyno
        LeadDyno.domain = "outgrow.co";
        LeadDyno.key = '41c6592b3fbd4a29945c14f3e766a12a1d796246';
        LeadDyno.recordVisit();
        LeadDyno.autoWatch();
        //webengage
        //webengage.init('~15ba1d98c');
        if (window.location.href.indexOf('/preview') >= 0) {
            window.Intercom('update', { hide_default_launcher: true });
        }
    };
    MarketingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cookie_service__["a" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__cookie_service__["a" /* CookieService */]) === 'function' && _a) || Object])
    ], MarketingService);
    return MarketingService;
    var _a;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/marketing.service.js.map

/***/ },

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SubDomainService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubDomainService = (function (_super) {
    __extends(SubDomainService, _super);
    function SubDomainService(_companyService) {
        _super.call(this);
        this._companyService = _companyService;
        this.subDomain = {
            exists: false,
            is_sub_domain_url: false,
            sub_domain: '',
            company_id: '',
            user_id: '',
            name: ''
        };
        this.subDomain.exists = false;
        var url = window.location.hostname;
        this.subDomain.is_sub_domain_url = this.checkSubDomain(url);
        if (this.subDomain.is_sub_domain_url) {
            this.subDomain.sub_domain = url.split('.')[0];
        }
    }
    SubDomainService.prototype.subDomainExists = function () {
        var _this = this;
        if (this.subDomain.is_sub_domain_url) {
            var self_1 = this;
            this._companyService.isSubDomainExist(this.subDomain.sub_domain)
                .subscribe(function (result) {
                localStorage.setItem('lodashAuthToken', JSON.stringify(result));
                self_1.subDomain.exists = true;
                self_1.subDomain.company_id = result._id;
                self_1.subDomain.name = result.name;
                localStorage.setItem('company', result._id);
                if (self_1.readCookie('storage')) {
                    var storage = JSON.parse(self_1.readCookie('storage'));
                    self_1.subDomain.user_id = storage.user._id;
                }
            }, function (err) {
                if (err.error.code === 'E_COMPANY_NOT_FOUND') {
                    var url = window.location.href;
                    var routeObject = url.split('/');
                    if (routeObject[3] !== 'Error')
                        window.location.href = window.location.origin + '/Error';
                    if (_this.readCookie('storage')) {
                        var storage = JSON.parse(_this.readCookie('storage'));
                        if (storage.company.sub_domain === _this.subDomain.sub_domain)
                            _this.createCookie('storage', '', -1);
                    }
                }
            });
        }
    };
    SubDomainService.prototype.checkCompanyMembership = function () {
        this._companyService.isCompanyMember(this.subDomain.company_id, this.subDomain.user_id)
            .subscribe(function (data) { }, function (response) {
            localStorage.setItem('hasAccess', 'false');
        });
    };
    SubDomainService.prototype.checkSubDomain = function (url) {
        // trim spaces
        url = url.replace(/^\s+/, '');
        url = url.replace(/\s+$/, '');
        // convert back slash to forward slash
        url = url.replace(/\\/g, '/');
        // remove 'http://', 'https://' or 'ftp://'
        url = url.replace(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i, '');
        // remove 'www.' if exist
        url = url.replace(/^www\./i, '');
        if (url.split('.').length === 3 && url.split('.')[0] === 'app')
            return false;
        // remove path after domain
        url = url.replace(/\/(.*)/, '');
        // remove tld's
        if (url.match(/\.[a-z]{2,3}\.[a-z]{2}$/i)) {
            url = url.replace(/\.[a-z]{2,3}\.[a-z]{2}$/i, '');
        }
        else if (url.match(/\.[a-z]{2,5}$/i)) {
            url = url.replace(/\.[a-z]{2,5}$/i, '');
        }
        return (url.match(/\./g)) ? true : false;
    };
    SubDomainService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__company_service__["a" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__company_service__["a" /* CompanyService */]) === 'function' && _a) || Object])
    ], SubDomainService);
    return SubDomainService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__base_service__["a" /* BaseService */]));
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/subdomain.service.js.map

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
var environment = {
    production: true,
    API: 'http://api.rely.co/api/v1',
    APP_DOMAIN: 'http://app.rely.co',
    APP_EXTENSION: 'rely.co',
    PARENT_APP_DOMAIN: 'app.rely.co',
    INTERCOM_ID: "om2goh5g",
    PROTOCOL: 'http://',
    FB_API: '574602582728913',
    FILE_PICKER_API: 'A3ygIw4hISSCdApqW4SAwz'
};
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/environment.prod.js.map

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CompanyService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompanyService = (function (_super) {
    __extends(CompanyService, _super);
    function CompanyService(_http) {
        _super.call(this);
        this._http = _http;
    }
    CompanyService.prototype.isCompanyMember = function (company_id, user_id) {
        var checkMembershipUrl = this._url + '/users_companies/companies/' + company_id + '/users/' + user_id;
        return this._http.get(checkMembershipUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.getFirstCompany = function (user_id) {
        var getFirstCompany = this._url + '/users_companies/users/' + user_id;
        return this._http.get(getFirstCompany, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.getCompanies = function () {
        var getCompaniesUrl = this._url + '/users_companies/companies';
        return this._http.get(getCompaniesUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.getCompanyUsers = function (company_id) {
        var getBasicUrl = this._url + '/users_companies/' + company_id + '/users';
        var data = {};
        return this._http.post(getBasicUrl, data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.getUserCompanies = function (user_id) {
        var getCompaniesUrl = this._url + '/users_companies/companies/user/' + user_id;
        return this._http.get(getCompaniesUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.isCompanyExist = function (company) {
        var companyurl = this._url + '/companies/name/' + company;
        return this._http.get(companyurl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.isSubDomainExist = function (company) {
        var companyurl = this._url + '/companies/sub_domain/' + company;
        return this._http.get(companyurl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.addUser = function (data, company_id) {
        var details = {
            'email': data.userEmail,
            'name': data.userName,
            'role': data.userRole
        };
        return this._http.post(this._url + '/users_companies/' + company_id, details, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.createCompany = function (data) {
        var companyurl = this._url + '/companies';
        var details = {
            'name': data.companyname,
            'sub_domain': data.domain,
            'agency': data.agency
        };
        return this._http.post(companyurl, details, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.searchCompany = function (company) {
        var companyurl = this._url + '/companies/list/' + company;
        return this._http.get(companyurl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.joinCompany = function (companyId) {
        var companyUrl = this._url + '/users_companies';
        var details = {
            'company_id': companyId
        };
        return this._http.post(companyUrl, details, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.leaveCompany = function (compId) {
        var getBasicUrl = this._url + '/users_companies/' + compId;
        return this._http.delete(getBasicUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.removeUser = function (companyId, userId) {
        var getBasicUrl = this._url + '/users_companies/companies/' + companyId + '/users/' + userId;
        return this._http.delete(getBasicUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.approveUser = function (userId, companyId, userRole) {
        var getBasicUrl = this._url + '/users_companies/approve';
        var admin = false;
        if (userRole === 'ADMIN')
            admin = true;
        var details = {
            'user_id': userId,
            'company_id': companyId,
            'admin': admin
        };
        return this._http.put(getBasicUrl, details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.makeAdmin = function (companyId, userId) {
        var getBasicUrl = this._url + '/users_companies/' + companyId + '/admin';
        var details = {
            'user_id': userId,
            'admin': true
        };
        return this._http.put(getBasicUrl, details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.makeManager = function (companyId, userId) {
        var getBasicUrl = this._url + '/users_companies/' + companyId + '/admin';
        var details = {
            'user_id': userId,
            'admin': false
        };
        return this._http.put(getBasicUrl, details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.saveCallSchedule = function (data) {
        var ls = localStorage.getItem('storage');
        var storage = JSON.parse(ls);
        var details = {
            'leads': {
                'total': data.leads
            },
            'traffic': {
                'frequency': data.traffic
            },
            'agency': data.companyType
        };
        return this._http.put(this._url + '/companies/' + storage.company._id, details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.updateCompany = function (compId, company, isAdmin) {
        if (isAdmin === void 0) { isAdmin = false; }
        var companyUrl = this._url + '/companies/' + compId;
        var details = {};
        if (isAdmin) {
            details = {
                'name': company.name,
                'sub_domain': company.sub_domain,
                'agency': company.agency,
                'is_admin_created': company.is_admin_created,
                'billing': {
                    'chargebee_plan_id': company.chargebee_plan_id,
                    'chargebee_subscription_id': company.chargebee_subscription_id,
                    'chargebee_customer_id': company.chargebee_customer_id,
                    'stripe_customer_id': company.stripe_customer_id
                },
                'current_limit': {
                    'leads': company.current_limit_leads,
                    'traffic': company.current_limit_traffic
                },
                'integration': company.integration
            };
        }
        else {
            details = {
                'name': company.companyname,
                'sub_domain': company.domain,
                'agency': company.agency
            };
        }
        return this._http.put(companyUrl, details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    //Get Apps
    CompanyService.prototype.getCompanyProjects = function (id) {
        var URL = this._url + '/dashboard/company_projects/' + id;
        return this._http.get(URL, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.getCompanyHomeProjects = function (id) {
        var URL = this._url + '/dashboard/company_home_projects/' + id;
        return this._http.get(URL)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.getLiveCompanyProjects = function (company_id) {
        var URL = this._url + '/dashboard/live_projects/' + company_id;
        return this._http.get(URL, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.getProjectsStats = function (id) {
        var URL = this._url + '/analytic/projects_stats/' + id;
        return this._http.get(URL, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.getAllCompanies = function (data) {
        var getCompaniesUrl = this._url + '/companies/all';
        return this._http.post(getCompaniesUrl, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.getCompanyInfo = function (id) {
        var URL = this._url + '/companies/' + id;
        return this._http.get(URL, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    //Get Templates
    CompanyService.prototype.getTemplates = function () {
        var getPlanUrl = this._url + '/dashboard/get_templates';
        return this._http.get(getPlanUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.generateApiKey = function (compId) {
        var details = {
            'id': compId
        };
        return this._http.post(this._url + '/apikey/create', details, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], CompanyService);
    return CompanyService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_5__base_service__["a" /* BaseService */]));
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/company.service.js.map

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CookieService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CookieService = (function () {
    function CookieService() {
    }
    CookieService.prototype.createCookie = function (name, value, days) {
        var expires = "";
        var domain = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].APP_EXTENSION;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; domain=" + domain + "; path=/";
    };
    CookieService.prototype.readCookie = function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    };
    CookieService.prototype.eraseCookie = function (name) {
        this.createCookie(name, "", -1);
    };
    CookieService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], CookieService);
    return CookieService;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/cookie.service.js.map

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__site_routes__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculator_routes__ = __webpack_require__(545);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return APP_ROUTER_PROVIDERS; });



var routing = __WEBPACK_IMPORTED_MODULE_1__site_routes__["a" /* SITE_ROUTES */].concat(__WEBPACK_IMPORTED_MODULE_2__calculator_routes__["a" /* CALCULATOR_ROUTES */]);
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routing);
var APP_ROUTER_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_1__site_routes__["b" /* AUTH_PROVIDERS */]
];
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/index.js.map

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return IntegrationService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IntegrationService = (function (_super) {
    __extends(IntegrationService, _super);
    function IntegrationService(_http, _cookieService, _subdomainService) {
        _super.call(this);
        this._http = _http;
        this._cookieService = _cookieService;
        this._subdomainService = _subdomainService;
    }
    IntegrationService.prototype.getLink = function (data, type) {
        var companyId = localStorage.getItem('company');
        var url = this._url + '/integration/getlink/' + type + '/' + companyId;
        return this._http.post(url, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    IntegrationService.prototype.authorization = function (data, type, companyId) {
        if (companyId === void 0) { companyId = null; }
        var company = this._subdomainService.subDomain.company_id;
        if (companyId !== null) {
            company = companyId;
        }
        var url = this._url + '/integration/auth/' + type + '/' + company;
        console.log(url, 'urrrrrrrllll');
        return this._http.post(url, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    IntegrationService.prototype.getCalcIntegrations = function (appId) {
        var url = this._url + '/integration/' + appId;
        return this._http.get(url, this.get_options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    IntegrationService.prototype.updateCalcIntegrations = function (data, appId) {
        var url = this._url + '/integration/' + appId;
        return this._http.put(url, data, this.put_options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    IntegrationService.prototype.getAllConfiguration = function () {
        var company = localStorage.getItem('company');
        var url = this._url + '/integration/getIntegrations/' + company;
        return this._http.get(url, this.get_options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    IntegrationService.prototype.connectMarketo = function (data) {
        return this._http.post(this._url + '/integration/marketo/auth', data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    IntegrationService.prototype.testSaveLead = function (type, appId) {
        var url = this._url + '/integration/test/' + type + '/' + appId;
        return this._http.get(url, this.get_options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    IntegrationService.prototype.getCompanySyncLeads = function () {
        var company = localStorage.getItem('company');
        var url = this._url + '/integration/sync/count/company/' + company;
        return this._http.get(url, this.get_options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    IntegrationService.prototype.getCalcSyncLeads = function (calc) {
        var url = this._url + '/integration/sync/count/calc/' + calc;
        return this._http.get(url, this.get_options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    IntegrationService.prototype.syncLeads = function (type) {
        var company = localStorage.getItem('company');
        var url = this._url + '/integration/sync/log/company/' + type + '/' + company;
        return this._http.post(url, this.get_options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    IntegrationService.prototype.syncCalcLeads = function (type, appId) {
        var data = {};
        var url = this._url + '/integration/sync/log/calc/' + type + '/' + appId;
        return this._http.post(url, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    IntegrationService.prototype.getCalTestData = function (type, appId) {
        var url = this._url + '/integration/calc/config/' + type + '/' + appId;
        return this._http.get(url, this.get_options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    IntegrationService.prototype.getConfiguration = function () {
        var company = localStorage.getItem('company');
        var url = this._url + '/integration/getIntegrations/' + company;
        return this._http.get(url, this.get_options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    IntegrationService.prototype.getCalcMapFields = function (type, appId) {
        var url = this._url + '/integration/fields/get/' + type + '/' + appId;
        return this._http.get(url, this.get_options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    IntegrationService.prototype.sendMapFields = function (type, appId, data) {
        var url = this._url + '/integration/fields/save/' + type + '/' + appId;
        return this._http.post(url, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    IntegrationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__index__["d" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__index__["d" /* CookieService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__index__["e" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__index__["e" /* SubDomainService */]) === 'function' && _c) || Object])
    ], IntegrationService);
    return IntegrationService;
    var _a, _b, _c;
}(__WEBPACK_IMPORTED_MODULE_5__index__["l" /* BaseService */]));
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/integration.service.js.map

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__subdomain_service__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(_http, subDomainService) {
        _super.call(this);
        this._http = _http;
        this.subDomainService = subDomainService;
        this.domainUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].APP_EXTENSION;
        this.subDomain = subDomainService.subDomain;
    }
    UserService.prototype.getUser = function (id) {
        var getUserUrl = this._url + '/users/' + id;
        return this._http.get(getUserUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.leads = function (email) {
        localStorage.removeItem('storage');
        var data = {
            email: email
        };
        return this._http.post(this._url + '/leads', data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.register = function (data) {
        localStorage.removeItem('storage');
        var details = {
            'user': {
                'emails': {
                    'email': data.emails.email
                },
                'name': data.name,
                'password': data.password
            },
            'company': {
                'sub_domain': data.domain,
                'name': data.companyname
            }
        };
        return this._http.post(this._url + '/auth/signup', details, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.addUserFromAdmin = function (data) {
        var details = {
            'user': {
                'emails': {
                    'email': data.useremail
                },
                'name': data.username,
                'password': data.userPassword,
                'is_admin_created': true,
            },
            'company': {
                'sub_domain': data.companySubDomain,
                'name': data.companyName,
                'is_admin_created': true
            },
            'is_admin': {
                'chargebee_customer_id': data.chargebeeId,
                'chargebee_subscription_id': data.chargebeeSubsId,
                'plan_id': data.plan
            }
        };
        return this._http.post(this._url + '/auth/signup', details, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.login = function (username, password, companyName) {
        var data = {
            'username': username,
            'password': password,
            'sub_domain': companyName
        };
        return this._http.post(this._url + '/auth/login', data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.updateBasicDetails = function (data, isAdmin) {
        if (isAdmin === void 0) { isAdmin = false; }
        var storage = this.readCookie('storage');
        storage = JSON.parse(storage);
        var user_id = storage.user._id;
        if (isAdmin)
            user_id = data.id;
        return this._http.put(this._url + '/users/' + user_id, data, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.getBasicDetails = function (user_id) {
        if (user_id === void 0) { user_id = null; }
        var storage = this.readCookie('storage');
        storage = JSON.parse(storage);
        if (user_id === null)
            user_id = storage.user._id;
        var getBasicUrl = this._url + '/users/' + user_id;
        return this._http.get(getBasicUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.getAllUsers = function (data) {
        var getUsersUrl = this._url + '/users';
        return this._http.post(getUsersUrl, data, this.get_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.updatePassword = function (old_password, new_password) {
        var data = {
            'old_password': old_password,
            'new_password': new_password
        };
        var storage = this.readCookie('storage');
        storage = JSON.parse(storage);
        return this._http.put(this._url + '/users/password', data, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.updateEmail = function (old_email, new_email, password) {
        var storage = this.readCookie('storage');
        storage = JSON.parse(storage);
        var data = {
            'emails': {
                'old_email': old_email,
                'new_email': new_email
            },
            'password': password
        };
        console.log('email json', data);
        return this._http.put(this._url + '/users/email', data, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.logout = function () {
        this.eraseCookie('storage');
        this.eraseCookie('filepicker_token_json');
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(true);
    };
    UserService.prototype.saveDetail = function (data) {
        var storage = this.readCookie('storage');
        storage = JSON.parse(storage);
        var details = {
            'company': {
                'name': data.companyname,
                'sub_domain': data.domain
            },
            'emails': {
                'old_email': storage.email,
                'new_email': data.emails.email
            },
            'username': data.first_name,
            'password': data.password
        };
        return this._http.put(this._url + '/users/' + storage.user._id, details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.setNewPassword = function (new_password) {
        var data = {
            'password': new_password
        };
        var storage = localStorage.getItem('verification');
        storage = JSON.parse(storage);
        return this._http.patch(this._url + '/users/password/' + storage.verification_id, data, this.patch_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.verfiyToken = function (data) {
        var verifyUrl = this._url + '/auth/verify/' + data;
        return this._http.get(verifyUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.verfiyEmail = function (data) {
        var verifyUrl = this._url + '/auth/verifyEmail/' + data;
        return this._http.get(verifyUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.userApproval = function (companyId) {
        if (companyId === void 0) { companyId = null; }
        var storage = this.readCookie('storage');
        storage = JSON.parse(storage);
        var Cid = storage.company_id;
        if (companyId)
            Cid = companyId;
        return this._http.put(this._url + '/users/' + storage.user._id + '/companies/' + Cid + '/join', this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.forgetPassword = function (capctha, email) {
        var details = {
            'response': capctha,
            'email': email.forgetemail
        };
        return this._http.post(this._url + '/users/forgetPassword', details, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.generateToken = function (data) {
        var getBasicUrl = this._url + '/users/token/' + data;
        return this._http.get(getBasicUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.getEmailLogs = function (data) {
        var getUsersUrl = this._url + '/emailLogs';
        return this._http.post(getUsersUrl, data, this.get_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.resendEmail = function (data) {
        var verifyUrl = this._url + '/resendVerificationEmail/' + data;
        return this._http.get(verifyUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.updatebillingStatus = function () {
        var storage = this.readCookie('storage');
        storage = JSON.parse(storage);
        var user_id = storage.user._id;
        return this._http.get(this._url + '/user_companies/status/' + user_id, this.get_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__subdomain_service__["a" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__subdomain_service__["a" /* SubDomainService */]) === 'function' && _b) || Object])
    ], UserService);
    return UserService;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_7__base_service__["a" /* BaseService */]));
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/user.service.js.map

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardService = (function (_super) {
    __extends(DashboardService, _super);
    function DashboardService(_http) {
        _super.call(this);
        this._http = _http;
    }
    DashboardService.prototype.duplicateApp = function (appId) {
        return this._http.post(this._url + '/dashboard/duplicate_app', appId, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    DashboardService.prototype.deleteApp = function (appId) {
        return this._http.post(this._url + '/dashboard/delete_app', appId, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    DashboardService.prototype.changeAppMode = function (id, mode) {
        var details = {
            'id': id,
            'mode': mode
        };
        return this._http.post(this._url + '/dashboard/change_app_mode', details, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    DashboardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], DashboardService);
    return DashboardService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__base_service__["a" /* BaseService */]));
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/dashboard.service.js.map

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_is_loggedin__ = __webpack_require__(351);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoggedInService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggedInService = (function () {
    function LoggedInService() {
        this.loggedIn = { isLoggedIn: false };
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__authentication_is_loggedin__["a" /* isLoggedin */])()) {
            this.loggedIn.isLoggedIn = true;
        }
    }
    LoggedInService.prototype.login = function () {
        console.log('inside logged in service');
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__authentication_is_loggedin__["a" /* isLoggedin */])())
            this.loggedIn.isLoggedIn = true;
    };
    LoggedInService.prototype.logout = function () {
        this.loggedIn.isLoggedIn = false;
    };
    LoggedInService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], LoggedInService);
    return LoggedInService;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/logged-in.service.js.map

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = isLoggedin;
function isLoggedin() {
    return !!localStorage.getItem('storage');
}
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/is-loggedin.js.map

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invitedLogin_component__ = __webpack_require__(555);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__invitedLogin_component__["a"]; });

//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/index.js.map

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email_validator__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_script_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_marketing_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LoginComponent = (function () {
    function LoginComponent(fb, _userService, router, loggedInSerivce, subDomainService, _companyService, _cookieService, _membershipService, _script, _marketingService, titleService, route) {
        var _this = this;
        this.fb = fb;
        this._userService = _userService;
        this.router = router;
        this.loggedInSerivce = loggedInSerivce;
        this.subDomainService = subDomainService;
        this._companyService = _companyService;
        this._cookieService = _cookieService;
        this._membershipService = _membershipService;
        this._script = _script;
        this._marketingService = _marketingService;
        this.titleService = titleService;
        this.route = route;
        this.error = false;
        this.ErrorMessageIsVisible = false;
        this.isDomainExist = false;
        this.resendEmailShow = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_6__user__["a" /* User */](new __WEBPACK_IMPORTED_MODULE_6__user__["b" /* Email */]('', true), '');
        this.isAdminCreated = false;
        this.cardStatus = '';
        this.route.params.subscribe(function (params) {
            if (_this.validateEmail(params['email'])) {
                _this.model.emails.email = params['email'];
            }
        });
        this.titleService.setTitle("Outgrow Home");
        this._script.load('marketing')
            .then(function (data) {
            console.log('Scripts Loaded', data);
            if (data.length && data[0].status == 'Loaded')
                _marketingService.initMarketingStuff();
        })
            .catch(function (error) {
            //any error
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var link = window.location.hostname.split('.');
        if (link[0] === 'app') {
            this.isDomainExist = true;
        }
        var userEmail = localStorage.getItem('leads');
        if (userEmail) {
            this.model.emails.email = userEmail;
        }
        this.loginForm = this.fb.group({
            email: [this.model.emails.email, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email_validator__["a" /* EmailValidator */].format
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].minLength(8)
                ])]
        });
        jQuery.material.init();
    };
    LoginComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    LoginComponent.prototype.showErrorMessage = function () {
        this.ErrorMessageIsVisible = true;
    };
    LoginComponent.prototype.hideErrorMessage = function () {
        this.ErrorMessageIsVisible = false;
    };
    LoginComponent.prototype.onSubmit = function (value) {
        var _this = this;
        value = this.loginForm.value;
        var self = this;
        jQuery('#loginSubmit').addClass('loading');
        jQuery('#loginSubmit').html('Please wait');
        jQuery('#loginSubmit').attr('disabled', true);
        var link = window.location.hostname;
        var linkArray = link.split('.');
        //this.co = window.location.href.split('.outgrow')[0].split('//')[1];
        this.co = window.location.href.split('//')[1].split('.')[0];
        var companyName = null;
        if (linkArray.length === 3 && linkArray[0] !== 'app')
            companyName = linkArray[0];
        this._userService.login(value.email, value.password, companyName)
            .subscribe(function (response) {
            console.log('filepicker_token_set', response.companyAccess);
            if (response.token) {
                self.isAdminCreated = response.user.is_admin_created;
                if (response.user.role !== 'ADMIN')
                    self.cardStatus = response.subscription.currentplan.customer.card_status;
                localStorage.removeItem('leads');
                var storage = void 0;
                if (response.user.role === 'ADMIN') {
                    storage = {
                        'token': response.token,
                        'user': response.user
                    };
                }
                else {
                    storage = {
                        'token': response.token,
                        'user': response.user,
                        'company': response.company,
                        'companyList': response.companyList,
                        'showUpgradeModal': false,
                    };
                    storage.company['cost'] = response.plan.price;
                    // console.log('STORAGE JSON', storage.company.cost);
                    _this._cookieService.createCookie('filepicker_token_json', JSON.stringify(response.companyAccess), 3);
                    if (response.user.chargebee_plan_id === 'starter')
                        storage.showUpgradeModal = true;
                }
                jQuery('#login').modal('hide');
                _this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
                if (response.user.role !== 'ADMIN') {
                    var status = {
                        cardStatus: self.cardStatus,
                        subsStatus: response.subscription.currentplan.subscription.status
                    };
                    _this._cookieService.createCookie('status', JSON.stringify(status), 3);
                }
                if (_this.subDomainService.subDomain.is_sub_domain_url) {
                    _this._companyService.isSubDomainExist(_this.co)
                        .subscribe(function (success) {
                        localStorage.setItem('company', success._id);
                    }, function (error) {
                        // console.log('company Error',error);
                    });
                }
                if (response.user.role !== 'ADMIN') {
                    _this.loggedInSerivce.login();
                    _this._userService.token = response.token;
                    var url = response.company.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].APP_EXTENSION + '/dashboard';
                    if (!_this.subDomainService.subDomain.is_sub_domain_url) {
                        jQuery(location).attr('href', __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].PROTOCOL + url);
                    }
                    else {
                        window.location.href = window.location.origin + '/dashboard';
                    }
                    /*--- Tracking events goes here ---*/
                    ga('markettingteam.send', 'event', 'Login', 'Submit', 'LoginPage');
                    _kmq.push(['identify', value.email]);
                    _kmq.push(['record', 'Logged In']);
                }
                else {
                    window.location.href = window.location.origin + '/admin';
                }
            }
        }, function (response) {
            _this.resendEmailShow = false;
            jQuery('#loginSubmit').removeClass('loading');
            jQuery('#loginSubmit').html('Login');
            jQuery('#loginSubmit').attr('disabled', false);
            _this.error = true;
            _this.ErrorMessage = response.error.message;
            if (response.error.code === 'E_USER_ACCOUNT_DISABLED') {
                _this.userId = response.error.err_errors;
                if (_this.userId !== null) {
                    _this.ErrorMessage = 'Your account has been disabled. Please verify your email to continue using Outgrow.';
                    _this.resendEmailShow = true;
                }
                else {
                    _this.ErrorMessage = 'Your account has been disabled. Please signup again!';
                }
            }
            if (response.error.code === 'E_USER_ACCOUNT_LEFT') {
                _this.ErrorMessage = response.error.message;
                _this.userId = response.error.err_errors;
            }
            _this.showErrorMessage();
        });
    };
    LoginComponent.prototype.signUp = function () {
        jQuery('#leads').addClass('hide');
        jQuery('#signUp').removeClass('hide');
        this.router.navigate(['/signup']);
    };
    LoginComponent.prototype.closeLogin = function () {
        // Redirecting to main home page //
        this.router.navigate(['/']);
    };
    LoginComponent.prototype.resendEmail = function () {
        console.log('user id', this.userId);
        this._userService.resendEmail(this.userId)
            .subscribe(function (success) {
            jQuery('#sendMail').addClass('hide');
            window.toastNotification('Email has been sent, Please check your email.');
        }, function (error) {
            //console.log('company Error', error);
        });
    };
    LoginComponent.prototype.forgetPassword = function () {
        this.router.navigate(['/forgetPassword']);
    };
    LoginComponent.prototype.callGA = function () {
        _kmq.push(['record', 'Log In Click']);
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* Component */])({
            selector: 'og-login',
            template: __webpack_require__(764),
            styles: [__webpack_require__(747), __webpack_require__(127), __webpack_require__(128)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["g" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_index__["g" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["f" /* LoggedInService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_index__["f" /* LoggedInService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["e" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_index__["e" /* SubDomainService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* CompanyService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["d" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_index__["d" /* CookieService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["h" /* MembershipService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_index__["h" /* MembershipService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__services_script_service__["a" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_script_service__["a" /* Script */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__services_marketing_service__["a" /* MarketingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_marketing_service__["a" /* MarketingService */]) === 'function' && _k) || Object, (typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["b" /* Title */]) === 'function' && _l) || Object, (typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _m) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/login.component.js.map

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = (function () {
    function LogoutComponent(_userService, router, loggedInService, subDomainService) {
        this._userService = _userService;
        this.router = router;
        this.loggedInService = loggedInService;
        this.subDomainService = subDomainService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.logout()
            .subscribe(function () {
            _this.loggedInService.logout();
            _this.router.navigate(['/']);
            if (_this.subDomainService.subDomain.is_sub_domain_url) {
                window.location.href = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].APP_DOMAIN;
            }
        });
    };
    LogoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'og-logout',
            template: ''
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* LoggedInService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* LoggedInService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* SubDomainService */]) === 'function' && _d) || Object])
    ], LogoutComponent);
    return LogoutComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/logout.component.js.map

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotFoundComponent = (function () {
    function NotFoundComponent(_cookieService, _router) {
        this._cookieService = _cookieService;
        this._router = _router;
        this.isLoggedin = false;
    }
    ;
    NotFoundComponent.prototype.ngOnInit = function () {
        this.link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].APP_EXTENSION;
        var storage = this._cookieService.readCookie('storage');
        if (storage) {
            this.isLoggedin = true;
        }
    };
    NotFoundComponent.prototype.login = function () {
        this._router.navigate(['/login']);
    };
    NotFoundComponent.prototype.pricing = function () {
        this.link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].APP_EXTENSION;
        var protocol = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].PROTOCOL;
        var url = this.link + '/pricing.html';
        jQuery(location).attr('href', protocol + url);
    };
    NotFoundComponent.prototype.features = function () {
        this.link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].APP_EXTENSION;
        var protocol = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].PROTOCOL;
        var url = this.link + '/features.html';
        jQuery(location).attr('href', protocol + url);
    };
    NotFoundComponent.prototype.whyCalculators = function () {
        this.link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].APP_EXTENSION;
        var protocol = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].PROTOCOL;
        var url = this.link + '/why_calculators.html';
        jQuery(location).attr('href', protocol + url);
    };
    NotFoundComponent.prototype.examples = function () {
        this.link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].APP_EXTENSION;
        var protocol = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].PROTOCOL;
        var url = this.link + '/examples.html';
        jQuery(location).attr('href', protocol + url);
    };
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'og-not-found',
            template: __webpack_require__(765),
            styles: [__webpack_require__(748)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["d" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_index__["d" /* CookieService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], NotFoundComponent);
    return NotFoundComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/notfound.component.js.map

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_validators_email_validator__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ForgetPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgetPasswordComponent = (function () {
    function ForgetPasswordComponent(fb, _userService, _companyService, _render, _element, _router, _script) {
        this.fb = fb;
        this._userService = _userService;
        this._companyService = _companyService;
        this._render = _render;
        this._element = _element;
        this._router = _router;
        this._script = _script;
        this.error = false;
        this.signUp = false;
        this.companyType = false;
        this.emailError = false;
        this.forgetPasswordError = false;
        this.isCaptcha = false;
        this.resendEmailShow = false;
        window['verifyCallback'] = this.verifyCallback.bind(this);
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
        this.forgetPasswordForm = this.fb.group({
            forgetemail: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__shared_validators_email_validator__["a" /* EmailValidator */].format
                ])]
        });
        jQuery.material.init();
    };
    ForgetPasswordComponent.prototype.ngAfterViewInit = function () {
        this._script.load('captcha')
            .then(function (data) {
            console.log('capctha', data);
        })
            .catch(function (error) {
            //console.log('Script not loaded', error);
        });
    };
    ForgetPasswordComponent.prototype.errorShow = function () {
        this.error = true;
    };
    ForgetPasswordComponent.prototype.errorHide = function () {
        this.error = false;
        this.forgetPasswordError = false;
        jQuery('#success-mailSent').addClass('hide');
    };
    ForgetPasswordComponent.prototype.errorEmailHide = function () {
        this.emailError = false;
    };
    ForgetPasswordComponent.prototype.checkEmail = function () {
        this.errorHide();
    };
    ForgetPasswordComponent.prototype.checkCompanyEmail = function () {
        this.errorEmailHide();
    };
    ForgetPasswordComponent.prototype.verifyCallback = function (cap) {
        this.captchaCode = cap;
        this.isCaptcha = true;
        var email = this.forgetPasswordForm.value.forgetemail;
        if (email != '')
            jQuery('#btnReset').attr('disabled', false);
    };
    ForgetPasswordComponent.prototype.forgetPassword = function () {
        var _this = this;
        jQuery('#btnReset').addClass('loading');
        jQuery('#btnReset').text('Please Wait');
        jQuery('#btnReset').attr('disabled', true);
        /*this._userService.verifyCaptcha(this.captchaCode)
            .subscribe(
            (response: any) => {*/
        this._userService.forgetPassword(this.captchaCode, this.forgetPasswordForm.value)
            .subscribe(function (response) {
            if (response.active === false) {
                _this.errorMsg = 'User Account has not been approved yet!';
                _this.forgetPasswordError = _this.errorMsg;
            }
            else {
                _this.mailSent = 'We have sent you an email with a link to reset your password.' +
                    'Please check your email, click on the link and set a new password.';
                jQuery('#success-mailSent').removeClass('hide');
                setTimeout(function () {
                    window.location.href = window.location.origin;
                }, 5000);
            }
            jQuery('#btnReset').text('Reset Password');
            jQuery('#btnReset').removeClass('loading');
        }, function (error) {
            var error_code = error.error.code;
            if (error_code === 'E_USER_INVALID_CAPTCHA' || error_code === 'E_USER_NO_CAPTCHA') {
                _this.errorMsg = error.error.err_message;
            }
            else if (error.error.code === 'E_USER_ACCOUNT_DISABLED') {
                _this.errorMsg = 'Your account has been disabled.Please verify your email to continue using Outgrow.';
                _this.forgetPasswordError = _this.errorMsg;
                _this.userId = error.error.err_errors;
                _this.resendEmailShow = true;
            }
            else {
                _this.errorMsg = error.error.message;
            }
            _this.forgetPasswordError = _this.errorMsg;
            jQuery('#btnReset').text('Reset Password');
            jQuery('#btnReset').removeClass('loading');
            jQuery('#btnReset').attr('disabled', false);
        });
    };
    ForgetPasswordComponent.prototype.resendEmail = function () {
        console.log('user id', this.userId);
        this._userService.resendEmail(this.userId)
            .subscribe(function (success) {
            jQuery('#sendMail').addClass('hide');
            window.toastNotification('Email has been sent, Please check your email.');
        }, function (error) {
            //console.log('company Error', error);
        });
    };
    ForgetPasswordComponent.prototype.login = function () {
        this._router.navigate(['/login']);
    };
    ForgetPasswordComponent.prototype.close = function () {
        this._router.navigate(['/login']);
    };
    ForgetPasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* Component */])({
            selector: 'og-forget-passwrd',
            template: __webpack_require__(768),
            styles: [__webpack_require__(750), __webpack_require__(127), __webpack_require__(128)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["g" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["g" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* CompanyService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* Renderer */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ElementRef */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* Script */]) === 'function' && _g) || Object])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/forgetPassword.component.js.map

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_logged_in_service__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_subdomain_service__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(subDomainService, loggedInService, router) {
        this.subDomainService = subDomainService;
        this.loggedInService = loggedInService;
        this.router = router;
        this.subDomain = subDomainService.subDomain;
        this.loggedIn = loggedInService.loggedIn;
        // if(
        //     this.subDomain.is_sub_domain_url &&
        //     !this.subDomain.exists &&
        //     this.subDomain.sub_domain !== ''
        //   ) {
        //       this.router.navigate(['/Error']);
        //     }
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.loggedIn.isLoggedIn)
            this.router.navigate(['/dashboard']);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'app-home',
            template: "\n    <signup-component *ngIf=\"!subDomain.is_sub_domain_url && !loggedIn.isLoggedIn\"></signup-component>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_subdomain_service__["a" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_subdomain_service__["a" /* SubDomainService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_logged_in_service__["a" /* LoggedInService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_logged_in_service__["a" /* LoggedInService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/home.component.js.map

/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SetPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetPasswordComponent = (function () {
    function SetPasswordComponent(fb, _userService, _loggedInSerivce, _cookieService, _router) {
        this.fb = fb;
        this._userService = _userService;
        this._loggedInSerivce = _loggedInSerivce;
        this._cookieService = _cookieService;
        this._router = _router;
        this.error = false;
    }
    SetPasswordComponent.prototype.ngOnInit = function () {
        var link = window.location.hostname;
        this.company = link.split('.')[0];
        var url = window.location.pathname;
        this.tokenUrl = url.split('/')[2];
        this.setPasswordForm = this.fb.group({
            newPassword: [this.newPassword, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].minLength(8)])],
            confirmPassword: [this.confirmPassword, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].minLength(8)])]
        });
        jQuery.material.init();
    };
    SetPasswordComponent.prototype.errorShow = function () {
        this.error = true;
    };
    SetPasswordComponent.prototype.errorHide = function () {
        this.error = false;
        this.message = '';
    };
    SetPasswordComponent.prototype.setPassword = function (value) {
        var _this = this;
        var url = window.location.pathname;
        this.tokenUrl = url.split('/')[2];
        jQuery('#btnSetNewPassword').text('Please Wait...');
        jQuery('#btnSetNewPassword').attr('disabled', true);
        value = this.setPasswordForm.value;
        var new_password = value.newPassword;
        var confirm_password = value.confirmPassword;
        if (new_password === confirm_password) {
            var resetPassword_1 = this._userService.setNewPassword(confirm_password)
                .subscribe(function (response) {
                //console.log(response.companyList);
                response.companyList.push(_this.company);
                if (response.token) {
                    var storage = {
                        'token': response.token,
                        'user': response.user,
                        'company_id': _this.company,
                        'company': JSON.parse(localStorage.getItem('lodashAuthToken')),
                        'companyList': response.companyList
                    };
                    _this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
                    _this._cookieService.createCookie('filepicker_token_json', JSON.stringify(response.companyAccess), 3);
                    _this._loggedInSerivce.login();
                    if (_this.tokenUrl === 'forgetPassword') {
                        //this._router.navigateByUrl('dashboard');
                        var link = window.location.pathname;
                        var dashboard = link.split('/')[0] + '/dashboard';
                        jQuery(location).attr('href', dashboard);
                    }
                    else {
                        _this._router.navigateByUrl('/userApproval');
                    }
                }
            }, function (error) {
                _this.error = error.error.err_message;
                resetPassword_1.unsubscribe();
                jQuery('#btnSetNewPassword').text('Update');
                jQuery('#btnSetNewPassword').attr('disabled', false);
            });
        }
        else {
            this.message = 'Passwords do not match';
            jQuery('#btnSetNewPassword').text('Update');
            jQuery('#btnSetNewPassword').attr('disabled', false);
        }
    };
    SetPasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* Component */])({
            selector: 'set-password',
            template: __webpack_require__(769),
            styles: [__webpack_require__(752), __webpack_require__(751)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["g" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["g" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["f" /* LoggedInService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["f" /* LoggedInService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["d" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["d" /* CookieService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _e) || Object])
    ], SetPasswordComponent);
    return SetPasswordComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/setPassword.component.js.map

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserApprovalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserApprovalComponent = (function () {
    function UserApprovalComponent(_router, _userService, _loggedInSerivce, _cookieService) {
        this._router = _router;
        this._userService = _userService;
        this._loggedInSerivce = _loggedInSerivce;
        this._cookieService = _cookieService;
    }
    UserApprovalComponent.prototype.ngOnInit = function () {
        this.adminApproval();
        this.userApproval();
    };
    UserApprovalComponent.prototype.userApproval = function () {
        var _this = this;
        var approval = this._userService.userApproval()
            .subscribe(function (response) {
            _this._loggedInSerivce.login();
            _this._userService.updatebillingStatus()
                .subscribe(function (status) {
                _this._cookieService.createCookie('filepicker_token_json', JSON.stringify(status), 3);
                var link = window.location.pathname;
                var dashboard = link.split('/')[0] + '/dashboard';
                jQuery(location).attr('href', dashboard);
            });
        }, function (error) {
            jQuery('#approval-error').removeClass('hide');
            _this.errorMsg = error.error.err_message;
            approval.unsubscribe();
        });
    };
    UserApprovalComponent.prototype.adminApproval = function () {
        var _this = this;
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        if (storage.company.is_admin_created) {
            var approval_1 = this._userService.userApproval()
                .subscribe(function (response) {
                _this._loggedInSerivce.login();
                _this._userService.updatebillingStatus()
                    .subscribe(function (status) {
                    _this._cookieService.createCookie('filepicker_token_json', JSON.stringify(status), 3);
                    var link = window.location.pathname;
                    var dashboard = link.split('/')[0] + '/dashboard';
                    jQuery(location).attr('href', dashboard);
                });
            }, function (error) {
                jQuery('#approval-error').removeClass('hide');
                _this.errorMsg = error.error.err_message;
                approval_1.unsubscribe();
            });
        }
    };
    UserApprovalComponent.prototype.home = function () {
        var link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].APP_DOMAIN;
        var protocol = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].PROTOCOL;
        jQuery(location).attr('href', protocol + link);
    };
    UserApprovalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'user-approval',
            template: __webpack_require__(770)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["g" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["g" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["f" /* LoggedInService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["f" /* LoggedInService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["d" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["d" /* CookieService */]) === 'function' && _d) || Object])
    ], UserApprovalComponent);
    return UserApprovalComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/userApproval.component.js.map

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return VerifyUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VerifyUserComponent = (function () {
    function VerifyUserComponent(fb, _userService, _router, loggedInService, _companyService, _cookieService) {
        this.fb = fb;
        this._userService = _userService;
        this._router = _router;
        this.loggedInService = loggedInService;
        this._companyService = _companyService;
        this._cookieService = _cookieService;
        this.authToken = 'access_token';
        this.error = false;
    }
    VerifyUserComponent.prototype.ngOnInit = function () {
        var link = window.location.hostname;
        this.company = link.split('.')[0];
        this.isTokenVerified();
    };
    VerifyUserComponent.prototype.isTokenVerified = function () {
        var _this = this;
        var url = window.location.pathname;
        this.tokenHash = url.split('/')[2];
        var verification = this._userService.verfiyToken(this.tokenHash)
            .subscribe(function (response) {
            var storage = {
                'verification_id': response._id,
            };
            localStorage.setItem('verification', JSON.stringify(storage));
            if (response.action === 'set-password') {
                var link = window.location.pathname;
                var setNewPassword = link.split('/')[0] + '/setNewPassword';
                jQuery(location).attr('href', setNewPassword);
            }
            if (response.action === 'forget-password') {
                _this._router.navigate(['/setNewPassword/forgetPassword']);
            }
            if (response.action === 'existingUser-activate') {
                _this.generateToken(response.user._id);
            }
            if (response.action.split('_')[0] === 'admin-accept-user-request') {
                var action = response.action;
                _this.generateToken(response.user._id, action);
            }
        }, function (error) {
            jQuery('#token-error').removeClass('hide');
            _this.error = true;
            _this.errorMsg = error.error.err_message;
            verification.unsubscribe();
        });
    };
    VerifyUserComponent.prototype.home = function () {
        var link = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].APP_DOMAIN;
        jQuery(location).attr('href', link);
    };
    VerifyUserComponent.prototype.generateToken = function (data, action) {
        var _this = this;
        if (action === void 0) { action = null; }
        var approval = this._userService.generateToken(data)
            .subscribe(function (response) {
            if (response.token) {
                response.companyList.push(_this.company);
                var storage = {
                    'token': response.token,
                    'user': response.user,
                    'company_id': _this.company,
                    'company': response.company,
                    'companyList': response.companyList
                };
                _this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
                _this.loggedInService.login();
                if (action !== null) {
                    var user_id = action.split('_')[1];
                    var company_id = action.split('_')[2];
                    _this._companyService.approveUser(user_id, company_id, 'ADMIN')
                        .subscribe(function (res) {
                        var link = window.location.pathname;
                        var dashboard = link.split('/')[0] + '/dashboard';
                        jQuery(location).attr('href', dashboard);
                    }, function (error) {
                        jQuery('#token-error').removeClass('hide');
                        _this.errorMsg = error.error.err_message;
                    });
                }
                else {
                    _this.inviteUserApproval();
                }
            }
        }, function (error) {
            jQuery('#approval-error').removeClass('hide');
            _this.errorMsg = error.error.err_message;
            approval.unsubscribe();
        });
    };
    VerifyUserComponent.prototype.inviteUserApproval = function () {
        var _this = this;
        var approval = this._userService.userApproval()
            .subscribe(function (response) {
            _this.loggedInService.login();
            _this._userService.updatebillingStatus()
                .subscribe(function (status) {
                _this._cookieService.createCookie('filepicker_token_json', JSON.stringify(status), 3);
                var link = window.location.pathname;
                var dashboard = link.split('/')[0] + '/dashboard';
                jQuery(location).attr('href', dashboard);
            });
        }, function (error) {
            jQuery('#approval-error').removeClass('hide');
            _this.errorMsg = error.error.err_message;
            approval.unsubscribe();
        });
    };
    VerifyUserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* Component */])({
            selector: 'verify-user',
            template: __webpack_require__(771),
            styles: [__webpack_require__(753)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["g" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["g" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["f" /* LoggedInService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["f" /* LoggedInService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["a" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["a" /* CompanyService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["d" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["d" /* CookieService */]) === 'function' && _f) || Object])
    ], VerifyUserComponent);
    return VerifyUserComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/verifyUser.component.js.map

/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__site_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_index__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invitedUser_index__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgetPassword_index__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__verify_email_index__ = __webpack_require__(590);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__site_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__home_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__invitedUser_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__invitedUser_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__invitedUser_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__forgetPassword_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__verify_email_index__["a"]; });


// export * from './+builder/index';
// export * from './templates/index';



//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/index.js.map

/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LazyAssistantComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LazyAssistantComponent = (function () {
    function LazyAssistantComponent(_router) {
        this._router = _router;
        _router.navigateByUrl('/calc', { skipLocationChange: true });
    }
    LazyAssistantComponent.prototype.ngOnInit = function () {
    };
    LazyAssistantComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'og-lazy',
            template: ''
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], LazyAssistantComponent);
    return LazyAssistantComponent;
    var _a;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/lazyAssistant.component.js.map

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_cookie_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_integration_service__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SalesforceRedirectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SalesforceRedirectComponent = (function () {
    function SalesforceRedirectComponent(_cookieService, _integrationService, router) {
        this._cookieService = _cookieService;
        this._integrationService = _integrationService;
        this.router = router;
        this.isSalesforceError = false;
    }
    SalesforceRedirectComponent.prototype.ngOnInit = function () {
        this.getAuthorizationCode();
    };
    SalesforceRedirectComponent.prototype.getAuthorizationCode = function () {
        var _this = this;
        var companyId = this._cookieService.readCookie('comp');
        var authcode = decodeURIComponent(window.location.search.split('code=')[1]);
        var data = {
            authcode: authcode,
        };
        this._integrationService.authorization(data, 'salesforce', companyId)
            .subscribe(function (result) {
            console.log('result in -----------------------------auth', result);
            _this._cookieService.createCookie('comp', 'success', 3);
        }, function (error) {
            _this._cookieService.eraseCookie('comp');
            _this.isSalesforceError = true;
            _this.salesforceError = error.error.err_message;
            // jQuery('#salesforce-error').modal({backdrop: 'static', keyboard: false});
            jQuery('#salesforce-error').modal('show');
        });
    };
    SalesforceRedirectComponent.prototype.close = function () {
        window.close();
    };
    SalesforceRedirectComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'app-og-salesforce-redirect',
            styles: [__webpack_require__(759)],
            template: __webpack_require__(777)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_cookie_service__["a" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_cookie_service__["a" /* CookieService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_integration_service__["a" /* IntegrationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_integration_service__["a" /* IntegrationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], SalesforceRedirectComponent);
    return SalesforceRedirectComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/salesforce-redirect.component.js.map

/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_script_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_marketing_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SiteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SiteComponent = (function () {
    function SiteComponent(subDomainService, _cookieService, _featureAuthService, router, _script, _marketingService, titleService) {
        this.subDomainService = subDomainService;
        this._cookieService = _cookieService;
        this._featureAuthService = _featureAuthService;
        this.router = router;
        this._script = _script;
        this._marketingService = _marketingService;
        this.titleService = titleService;
        this.intercom_id = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].INTERCOM_ID;
        this.titleService.setTitle("Outgrow Home");
        this.subDomain = subDomainService.subDomain;
        this._script.load('marketing')
            .then(function (data) {
            console.log('Scripts Loaded', data);
            if (data.length && data[0].status == 'Loaded')
                _marketingService.initMarketingStuff();
        })
            .catch(function (error) {
            //any error
        });
    }
    SiteComponent.prototype.ngOnInit = function () {
        //Intercom
        if (this._cookieService.readCookie('storage')) {
            var storage = JSON.parse(this._cookieService.readCookie('storage'));
            if (storage.user.role !== "ADMIN")
                this._featureAuthService.getAllFeatureAccess();
        }
    };
    SiteComponent.prototype.ngOnDestroy = function () {
        window.Intercom('hide');
        window.Intercom('shutdown');
    };
    SiteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'og-site',
            template: "\n    <sd-toolbar></sd-toolbar>\n    <router-outlet></router-outlet>\n  ",
            styles: [__webpack_require__(760)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* SubDomainService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["d" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["d" /* CookieService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["c" /* FeatureAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["c" /* FeatureAuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_script_service__["a" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_script_service__["a" /* Script */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_marketing_service__["a" /* MarketingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_marketing_service__["a" /* MarketingService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["b" /* Title */]) === 'function' && _g) || Object])
    ], SiteComponent);
    return SiteComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/site.component.js.map

/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return VerifyEmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VerifyEmailComponent = (function () {
    function VerifyEmailComponent(fb, _userService, _router, loggedInService, _companyService, _cookieService) {
        this.fb = fb;
        this._userService = _userService;
        this._router = _router;
        this.loggedInService = loggedInService;
        this._companyService = _companyService;
        this._cookieService = _cookieService;
        this.authToken = 'access_token';
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
        var link = window.location.hostname;
        this.company = link.split('.')[0];
        this.isTokenVerified();
        // console.log('VERRRIIIIFFFFYYYYY EEEMAILLLLL');
    };
    VerifyEmailComponent.prototype.isTokenVerified = function () {
        var _this = this;
        var url = window.location.pathname;
        this.tokenHash = url.split('/')[2];
        var verification = this._userService.verfiyEmail(this.tokenHash)
            .subscribe(function (response) {
            _this.generateToken(response._id);
            // console.log('&&&&&&&&&&&&&&',response);
        }, function (error) {
            jQuery('#token-error').removeClass('hide');
            _this.errorMsg = error.error.err_message;
            verification.unsubscribe();
        });
    };
    VerifyEmailComponent.prototype.generateToken = function (data, action) {
        var _this = this;
        if (action === void 0) { action = null; }
        var approval = this._userService.generateToken(data)
            .subscribe(function (response) {
            if (response.token) {
                response.companyList.push(_this.company);
                //console.log(response.companyList);
                var storage = {
                    'token': response.token,
                    'user': response.user,
                    'company_id': _this.company,
                    'company': response.company,
                    'companyList': response.companyList
                };
                if (_this._cookieService.readCookie('storage') !== null) {
                    _this._cookieService.eraseCookie('storage');
                }
                _this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
                _this._cookieService.createCookie('filepicker_token_json', JSON.stringify(response.companyAccess), 3);
                _this.loggedInService.login();
                // let link = window.location.pathname;
                // let dashboard = link.split('/')[0]+'/dashboard';
                // jQuery(location).attr('href', dashboard );
                _this.redirectToFirstCompany(response.company);
            }
        }, function (error) {
            jQuery('#approval-error').removeClass('hide');
            _this.errorMsg = error.error.err_message;
            approval.unsubscribe();
        });
    };
    VerifyEmailComponent.prototype.redirectToFirstCompany = function (company) {
        var url = company.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].APP_EXTENSION + '/dashboard';
        jQuery(location).attr('href', __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].PROTOCOL + url);
    };
    VerifyEmailComponent.prototype.home = function () {
        this._router.navigate(['/']);
    };
    VerifyEmailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* Component */])({
            selector: 'verify-email',
            template: __webpack_require__(778),
            styles: [__webpack_require__(761)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["g" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["g" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["f" /* LoggedInService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["f" /* LoggedInService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["a" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["a" /* CompanyService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["d" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["d" /* CookieService */]) === 'function' && _f) || Object])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/verify-email.component.js.map

/***/ },

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

var map = {
	"app/admin/admin.module": [
		800,
		5
	],
	"app/site/+Settings/settings.module": [
		801,
		1
	],
	"app/site/+builder/builder.module": [
		802,
		0
	],
	"app/site/components/+analytics/analytics.module": [
		803,
		7
	],
	"app/site/components/+dashboard/dashboard.module": [
		804,
		6
	],
	"app/site/components/+signup/signup.module": [
		805,
		9
	],
	"app/site/components/+templates/templates.module": [
		806,
		8
	],
	"app/site/templates/calculator.module": [
		807,
		4
	],
	"app/site/templates/templateAll/preview.module": [
		808,
		3
	],
	"app/site/templates/templateAll/sampleCode.module": [
		809,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 417;


/***/ },

/***/ 418:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(544);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/main.js.map

/***/ },

/***/ 420:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__safeHtml_pipe__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__safeStyle_pipe__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__safeUrl_pipe__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RemoveTags_pipe__ = __webpack_require__(586);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PipesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__safeHtml_pipe__["a" /* SafeHtml */], __WEBPACK_IMPORTED_MODULE_2__safeStyle_pipe__["a" /* SafeStyle */], __WEBPACK_IMPORTED_MODULE_3__safeUrl_pipe__["a" /* SafeUrl */], __WEBPACK_IMPORTED_MODULE_4__RemoveTags_pipe__["a" /* RemoveTags */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__safeHtml_pipe__["a" /* SafeHtml */], __WEBPACK_IMPORTED_MODULE_2__safeStyle_pipe__["a" /* SafeStyle */], __WEBPACK_IMPORTED_MODULE_3__safeUrl_pipe__["a" /* SafeUrl */], __WEBPACK_IMPORTED_MODULE_4__RemoveTags_pipe__["a" /* RemoveTags */]]
        }), 
        __metadata('design:paramtypes', [])
    ], PipesModule);
    return PipesModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/pipes.module.js.map

/***/ },

/***/ 421:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_leads__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_traffic__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userCompany__ = __webpack_require__(426);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Company; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return AdminCompany; });



var Company = (function () {
    function Company(company) {
        if (company) {
            this.id = company._id;
            this.updatedAt = company.updatedAt;
            this.createdAt = company.createdAt;
            this.name = company.name;
            this.sub_domain = company.sub_domain;
            this.agency = company.agency;
            this.leads = new __WEBPACK_IMPORTED_MODULE_0__models_leads__["a" /* Leads */](company.leads);
            this.traffic = new __WEBPACK_IMPORTED_MODULE_1__models_traffic__["a" /* Traffic */](company.traffic);
            this.user_company = new __WEBPACK_IMPORTED_MODULE_2__userCompany__["a" /* UsersCompany */](company.user_company);
        }
    }
    return Company;
}());
var AdminCompany = (function () {
    function AdminCompany(company) {
        this.current_limit_leads = null;
        this.current_limit_traffic = null;
        this.current_limit_calculators = null;
        this.current_usage_leads = null;
        this.current_usage_traffic = null;
        if (company) {
            this.id = company._id;
            this.updatedAt = company.updatedAt;
            this.createdAt = company.createdAt;
            this.name = company.name;
            this.sub_domain = company.sub_domain;
            this.agency = company.agency;
            this.leads = new __WEBPACK_IMPORTED_MODULE_0__models_leads__["a" /* Leads */](company.leads);
            this.traffic = new __WEBPACK_IMPORTED_MODULE_1__models_traffic__["a" /* Traffic */](company.traffic);
            this.user_company = new __WEBPACK_IMPORTED_MODULE_2__userCompany__["a" /* UsersCompany */](company.user_company);
            this.chargebee_customer_id = company.billing.chargebee_customer_id;
            this.chargebee_plan_id = company.billing.chargebee_plan_id;
            this.chargebee_subscription_id = company.billing.chargebee_subscription_id;
            this.stripe_customer_id = company.billing.stripe_customer_id;
            this.is_admin_created = company.is_admin_created;
            this.current_limit_leads = company.current_limit.leads;
            this.current_limit_traffic = company.current_limit.traffic;
            this.current_limit_calculators = company.current_limit.calculators;
            this.current_usage_leads = company.current_usage.leads;
            this.current_usage_traffic = company.current_usage.traffic;
            this.addon_leads = company.addon.leads;
            this.addon_traffic = company.addon.traffic;
            this.addon_quantity = company.addon.quantity;
            this.integration = company.integration ? company.integration : false;
            this.api = company.api;
            this.reset_current_usage = company.reset_current_usage ? company.reset_current_usage : false;
        }
    }
    return AdminCompany;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/company.js.map

/***/ },

/***/ 422:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_company_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_premiumModal_premiumModal_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toolbar_component__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_paymentModal_paymentModal_module__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ToolbarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ToolbarModule = (function () {
    function ToolbarModule() {
    }
    ToolbarModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_6__shared_paymentModal_paymentModal_module__["a" /* PaymentModalModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__toolbar_component__["a" /* ToolbarComponent */], __WEBPACK_IMPORTED_MODULE_4__shared_premiumModal_premiumModal_component__["a" /* PremiumModalComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__shared_services_company_service__["a" /* CompanyService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__toolbar_component__["a" /* ToolbarComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ToolbarModule);
    return ToolbarModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/toolbar.module.js.map

/***/ },

/***/ 423:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export CurrentPlan */
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Subscriptions; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return Customer; });
/* unused harmony export PaymentMethod */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Card; });
/* unused harmony export BillingAddress */
var CurrentPlan = (function () {
    function CurrentPlan(currentPlan) {
        if (currentPlan) {
            this.subscription = new Subscriptions(currentPlan.subscription);
            this.customer = new Customer(currentPlan.customer);
            if (currentPlan.customer.card_status !== 'no_card')
                this.card = new Card(currentPlan.card);
        }
    }
    return CurrentPlan;
}());
var Subscriptions = (function () {
    function Subscriptions(subscription) {
        if (subscription) {
            this.id = subscription.id;
            this.customer_id = subscription.customer_id;
            this.plan_id = subscription.plan_id;
            this.plan_quantity = subscription.plan_quantity;
            this.status = subscription.status;
            this.start_date = moment.unix(subscription.start_date).format('MMM Do YYYY');
            this.trial_start = moment.unix(subscription.trial_start).format('MMM Do YYYY');
            this.trial_end = moment.unix(subscription.trial_end).format('MMM Do YYYY');
            if (this.status != 'in_trial') {
                this.current_term_start = moment.unix(subscription.current_term_start).format('MMM Do YYYY');
                this.current_term_end = moment.unix(subscription.current_term_end).format('MMM Do YYYY');
            }
            this.created_at = moment.unix(subscription.created_at).format('MMM Do YYYY');
            this.started_at = moment.unix(subscription.started_at).format('MMM Do YYYY');
            this.has_scheduled_changes = subscription.has_scheduled_changes;
            this.object = subscription.object;
            this.currency_code = subscription.currency_code;
            this.due_invoices_count = subscription.due_invoice_count;
            if (subscription.coupons) {
                this.coupons = [];
                for (var i = 0; i < subscription.coupons.length; i++) {
                    this.coupons.push(subscription.coupons[i].coupon_id);
                }
            }
        }
    }
    return Subscriptions;
}());
var Customer = (function () {
    function Customer(customer) {
        if (customer) {
            this.id = customer.id;
            this.first_name = customer.first_name;
            this.email = customer.email;
            this.company = customer.company;
            this.auto_collection = customer.auto_collection;
            this.allow_direct_debit = customer.allow_direct_debit;
            this.created_at = moment.unix(customer.created_at).format('MMM Do YYYY');
            this.taxability = customer.taxability;
            this.object = customer.object;
            this.card_status = customer.card_status;
            this.billing_address = new BillingAddress(customer.billing_address);
            this.payment_method = new PaymentMethod(customer.payment_method);
            this.promotional_credits = customer.promotional_credits;
            this.refundable_credits = customer.refundable_credits;
            this.excess_payments = customer.excess_payments;
            this.cf_features = customer.cf_features;
        }
    }
    return Customer;
}());
var PaymentMethod = (function () {
    function PaymentMethod(paymentMethod) {
        if (paymentMethod) {
            this.object = paymentMethod.object;
            this.type = paymentMethod.type;
            this.reference_id = paymentMethod.reference_id;
            this.gateway = paymentMethod.gateway;
            this.status = paymentMethod.status;
        }
    }
    return PaymentMethod;
}());
var Card = (function () {
    function Card(card) {
        if (card) {
            this.customer_id = card.customer_id;
            this.status = card.status;
            this.gateway = card.gateway;
            this.iin = card.iin;
            this.last4 = card.last4;
            this.card_type = card.card_type;
            this.expiry_month = card.expiry_month;
            this.expiry_year = card.expiry_year;
            this.object = card.object;
            this.masked_number = card.masked_number;
        }
    }
    return Card;
}());
var BillingAddress = (function () {
    function BillingAddress(billingAddress) {
        if (billingAddress) {
            this.line1 = billingAddress.line1;
            this.city = billingAddress.city;
            this.state = billingAddress.state;
            this.country = billingAddress.country;
            this.zip = billingAddress.zip;
            this.validation_status = billingAddress.validation_status;
            this.object = billingAddress.object;
        }
    }
    return BillingAddress;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/currentPlan.js.map

/***/ },

/***/ 424:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MembershipService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MembershipService = (function (_super) {
    __extends(MembershipService, _super);
    function MembershipService(_http) {
        _super.call(this);
        this._http = _http;
        this.domainUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].APP_EXTENSION;
    }
    MembershipService.prototype.getPaymentDetails = function (id) {
        if (id === void 0) { id = null; }
        var company;
        if (id === null)
            company = localStorage.getItem('company');
        else
            company = id;
        var getPlanUrl = this._url + '/customer/' + company + '/card';
        return this._http.get(getPlanUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.getBillingAddress = function (id) {
        if (id === void 0) { id = null; }
        var company;
        if (id === null)
            company = localStorage.getItem('company');
        else
            company = id;
        var getPlanUrl = this._url + '/customer/' + company;
        return this._http.get(getPlanUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.getPlans = function () {
        var getPlanUrl = this._url + '/plans';
        return this._http.get(getPlanUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.setupCustomerPayment = function (data) {
        var company = localStorage.getItem('company');
        var details = {
            'card': {
                'number': data.cardNumber,
                'exp_month': data.cardMonth,
                'exp_year': data.cardYear,
                'cvv': data.cvv,
            }
        };
        return this._http.post(this._url + '/customer/' + company + '/cards', details, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.resetPayment = function (data) {
        var company = localStorage.getItem('company');
        var details = {
            'card': {
                'number': data.cardNumber,
                'exp_month': data.cardMonth,
                'exp_year': data.cardYear,
                'cvv': data.cvv,
            }
        };
        return this._http.put(this._url + '/customer/' + company + '/cards', details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.cancelMembership = function () {
        var details = {};
        var company_id = localStorage.getItem('company');
        return this._http.put(this._url + '/subscriptions/' + company_id, details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.setupBilling = function (data) {
        var company = localStorage.getItem('company');
        var details = {
            'billing': {
                'name': data.inputName,
                'line1': data.inputAddress,
                'city': data.inputCity,
                'state': data.inputState,
                'zip': data.inputZipCode,
                'country': data.inputCountry
            }
        };
        return this._http.put(this._url + '/customer/' + company + '/billing', details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.planSubscription = function (plan_id) {
        var company_id = localStorage.getItem('company');
        var details = {
            'company_id': company_id,
            'plan_id': plan_id
        };
        return this._http.post(this._url + '/subscriptions', details, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.getplanSubscription = function (id) {
        if (id === void 0) { id = null; }
        var company;
        if (id === null)
            company = localStorage.getItem('company');
        else
            company = id;
        var getPlanUrl = this._url + '/subscriptions/' + company;
        return this._http.post(getPlanUrl, {}, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.updateSubscription = function (data) {
        var company = localStorage.getItem('company');
        var url = this._url + '/subscription/update/' + company;
        return this._http.put(url, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.updateAddon = function (data, companyId) {
        var company = companyId ? companyId : localStorage.getItem('company');
        var url = this._url + '/subscription/updateAddon/' + company;
        return this._http.put(url, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.getInvoices = function (id) {
        if (id === void 0) { id = null; }
        var company;
        if (id === null)
            company = localStorage.getItem('company');
        else
            company = id;
        var getPlanUrl = this._url + '/invoices/' + company;
        return this._http.get(getPlanUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.getInvoicesPdf = function (data, id) {
        if (id === void 0) { id = null; }
        localStorage.getItem('company');
        var company;
        if (id === null)
            company = localStorage.getItem('company');
        else
            company = id;
        var getPlanUrl = this._url + '/invoices/' + company + '/pdf/' + data;
        return this._http.get(getPlanUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.getAddonEstimate = function (data) {
        console.log('data addon estimate service', data);
        var company = localStorage.getItem('company');
        var getUrl = this._url + '/estimate/updateAddon/' + company;
        return this._http.post(getUrl, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.getUpdateEstimate = function (data) {
        var company = localStorage.getItem('company');
        var getUrl = this._url + '/estimate/update/' + company;
        return this._http.post(getUrl, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.getPlanById = function (plan_id) {
        var getUrl = this._url + '/plans/' + plan_id;
        return this._http.get(getUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.getPlanList = function () {
        var getUrl = this._url + '/plan/list';
        return this._http.get(getUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.getAddons = function () {
        var getUrl = this._url + '/addons';
        return this._http.get(getUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.activateNow = function () {
        var company = localStorage.getItem('company');
        var url = this._url + '/subscriptions/reactivate/' + company;
        var data = '';
        return this._http.put(url, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.updateCustomer = function (data) {
        var company = localStorage.getItem('company');
        var details = {
            'first_name': data,
        };
        return this._http.put(this._url + '/customer/' + company + '/updateCustomer', details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], MembershipService);
    return MembershipService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_4__base_service__["a" /* BaseService */]));
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/membership.service.js.map

/***/ },

/***/ 425:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PlanService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { SubDomain } from './../interfaces/subdomain.interface';
// import { SubDomainService } from './subdomain.service';
var PlanService = (function (_super) {
    __extends(PlanService, _super);
    function PlanService(_http) {
        _super.call(this);
        this._http = _http;
    }
    PlanService.prototype.getPlanFeatures = function (plan) {
        var getPlanUrl = this._url + '/planfeature/' + plan;
        return this._http.get(getPlanUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PlanService.prototype.updatePlanFeatures = function (plan, data) {
        var planUrl = this._url + '/planfeature/active/' + plan;
        return this._http.put(planUrl, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PlanService.prototype.getPlans = function () {
        var planUrl = this._url + '/userplans';
        return this._http.get(planUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PlanService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], PlanService);
    return PlanService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_5__base_service__["a" /* BaseService */]));
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/plan.service.js.map

/***/ },

/***/ 426:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UsersCompany; });
/* unused harmony export Deleted */
/* unused harmony export Invite */
// import {Leads} from "./leads";
// import {Traffic} from "./traffic";
// export class UsersCompany{
//   public id: String;
//   public updatesAt: Date;
//   public createdAt: Date;
//   public name: String;
//   public sub_domain: String;
//   public leads: Leads;
//   public traffic: Traffic;
//   public agency: boolean;
//   public user_company: UserDetails;
//   constructor(usersCompany: any) {
//     this.id = usersCompany._id;
//     this.updatesAt = usersCompany.updatedAt;
//     this.createdAt = usersCompany.createdAt;
//     this.name = usersCompany.name;
//     this.sub_domain = usersCompany.sub_domain,
//     this.leads = new Leads(usersCompany.leads);
//     this.traffic = new Traffic(usersCompany.traffic);
//     this.agency = usersCompany.agency;
//     this.user_company = new UserDetails(usersCompany.user_company);
//   }
// }
// export class UserDetails{
//   public id: String;
//   public active: Boolean;
//   public updatedAt: Date;
//   public createdAt: Date;
//   public user: String;
//   public status: String;
//   public left_at: Date;
//   public deleted: Deleted;
//   public invite: Invite;
//   public role: String
//   constructor(userDetail: any){
//     this.id = userDetail._id;
//     this.active = userDetail.active;
//     this.updatedAt = userDetail.updatedAt;
//     this.createdAt = userDetail.createdAt;
//     this.user = userDetail.user;
//     this.status = userDetail.status;
//     this.left_at = userDetail.left_at;
//     this.deleted = new Deleted(userDetail.deleted)
//     this.invite = new Invite(userDetail.invite);
//     this.role = userDetail.role;
//   }
// }
// export class Deleted{
//   public at: Date;
//   constructor(deleted: any){
//     this.at = deleted.at;
//   }
// }
// export class Invite{
//   public request_from: String;
//   public requested_by: String;
//   public approved_by: String;
//   public approved_at: String;
//   public requested_at: String;
//   constructor(invite: any){
//     this.request_from = invite.request_from;
//     this.requested_by = invite.requested_by;
//     this.approved_by = invite.approved_by;
//     this.approved_at = invite.approved_at;
//     this.requested_at = invite.requested_at;
//   }
// }
var UsersCompany = (function () {
    function UsersCompany(users_company) {
        if (users_company) {
            this.id = users_company._id;
            this.updatedAt = users_company.updatedAt;
            this.createdAt = users_company.createdAt;
            this.user = users_company.user;
            this.active = users_company.active;
            this.status = users_company.status;
            this.left_at = users_company.left_at;
            this.role = users_company.role;
            this.deleted = new Deleted(users_company.deleted);
            this.invite = new Invite(users_company.invite);
            this.companyName = users_company.companyName;
            this.domain = users_company.domain;
        }
    }
    return UsersCompany;
}());
var Deleted = (function () {
    function Deleted(deleted) {
        if (deleted)
            this.at = deleted.at;
    }
    return Deleted;
}());
var Invite = (function () {
    function Invite(invite) {
        if (invite) {
            this.request_from = invite.request_from;
            this.requested_at = invite.requested_at;
            this.approved_by = invite.approved_by;
            this.approved_at = invite.approved_at;
            this.requested_at = invite.requested_at;
        }
    }
    return Invite;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/userCompany.js.map

/***/ },

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AdminGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = (function () {
    function AdminGuard(router, _cookieService) {
        this.router = router;
        this._cookieService = _cookieService;
    }
    AdminGuard.prototype.canActivate = function () {
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        if (this._cookieService.readCookie('storage') !== null && storage.user.role == "ADMIN") {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AdminGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* CookieService */]) === 'function' && _b) || Object])
    ], AdminGuard);
    return AdminGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/admin.guard.js.map

/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_flow_1_index__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup_flow_2_index__ = __webpack_require__(582);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__signup_flow_1_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__signup_flow_2_index__["a"]; });


//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/index.js.map

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logged_in_service__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logged_out_service__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subdomain_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__membership_service__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_service__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_communication_service__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__feature_access_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cookie_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__plan_service__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__script_service__ = __webpack_require__(129);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__base_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__company_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__logged_in_service__["a"]; });
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__subdomain_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__user_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__membership_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__dashboard_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "j", function() { return __WEBPACK_IMPORTED_MODULE_8__settings_communication_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_9__feature_access_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_10__cookie_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "k", function() { return __WEBPACK_IMPORTED_MODULE_11__plan_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_12__script_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__dashboard_service__["a"]; });














//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/index.js.map

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BaseService; });




var BaseService = (function () {
    // private loggedOutService : LoggedOutService = new LoggedOutService();
    function BaseService() {
        this._url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API;
        this.storage = this.readCookie('storage');
        if (this.storage) {
            this.storage = JSON.parse(this.storage);
            this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'JWT ' + this.storage.token });
        }
        else {
            this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        }
        this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
        //console.log(this.options);
    }
    BaseService.prototype.post_options = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* RequestOptions */]({ headers: this.headers, method: 'post' });
    };
    BaseService.prototype.get_options = function () {
        this.storage = this.readCookie('storage');
        if (this.storage) {
            this.storage = JSON.parse(this.storage);
            this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'JWT ' + this.storage.token });
        }
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
    };
    BaseService.prototype.put_options = function () {
        this.storage = this.readCookie('storage');
        if (this.storage) {
            this.storage = JSON.parse(this.storage);
            this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'JWT ' + this.storage.token });
        }
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* RequestOptions */]({ headers: this.headers, method: 'put' });
    };
    BaseService.prototype.patch_options = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* RequestOptions */]({ headers: this.headers, method: 'patch' });
    };
    BaseService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    BaseService.prototype.boolData = function (res) {
        var body = res.json();
        return body.data;
    };
    BaseService.prototype.handleError = function (error) {
        var body = error.json();
        if (body.error.code === 'TokenExpiredError') {
            var expires = "";
            var domain = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].APP_EXTENSION;
            var days = -1;
            var value = '';
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = "storage=" + value + expires + "; domain=" + domain + "; path=/";
            window.location.href = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].APP_DOMAIN;
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(body);
    };
    BaseService.prototype.readCookie = function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    };
    BaseService.prototype.createCookie = function (name, value, days) {
        var expires = "";
        var domain = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].APP_EXTENSION;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; domain=" + domain + "; path=/";
    };
    BaseService.prototype.eraseCookie = function (name) {
        this.createCookie(name, "", -1);
    };
    return BaseService;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/base.service.js.map

/***/ },

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(subDomainService, featureAuthService, sanitizer, _cookieService) {
        this.subDomainService = subDomainService;
        this.featureAuthService = featureAuthService;
        this._cookieService = _cookieService;
        this.safeSubDomainUrl = '';
        this.subDomainUrl = '';
        this.mainUrl = '';
        this.sub_domain = '';
        this.subDomain = subDomainService.subDomain;
        this.mainUrl = sanitizer.bypassSecurityTrustResourceUrl(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PROTOCOL + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PARENT_APP_DOMAIN + '/cross-domain.html');
        this.subDomainService.subDomainExists();
        if (this.subDomain.is_sub_domain_url) {
            this.subDomainUrl = this.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].APP_EXTENSION;
            this.safeSubDomainUrl = sanitizer.bypassSecurityTrustResourceUrl(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PROTOCOL + this.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].APP_EXTENSION);
        }
        window.onbeforeunload = function (e) {
            if (localStorage.getItem('targetRoute') && _cookieService.readCookie('storage') == null)
                localStorage.clear();
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        //Intercom
        if (this._cookieService.readCookie('storage')) {
            var storage = JSON.parse(this._cookieService.readCookie('storage'));
            if (storage.user.role !== "ADMIN") {
                this.featureAuthService.getAllFeatureAccess();
            }
        }
        // Google remarketing tag
        // let urla = window.location.href;
        // if(urla.indexOf("outgrow.co") >= 0) {
        //     window.google_trackConversion({
        //         google_conversion_id: 876549213,
        //         google_custom_params: window.google_tag_params,
        //         google_remarketing_only: true
        //     });
        // }
        /** changes for meta tags */
        jQuery('meta[property="og:description"]').attr('content', 'venturepact');
        jQuery('meta[property="og:title"]').attr('content', 'venturepact');
        var url = window.location.href;
        var routeObject = url.split('/');
        url = window.location.hostname;
        this.sub_domain = url.split('.')[0];
        if (this._cookieService.readCookie('storage')) {
            var storage = JSON.parse(this._cookieService.readCookie('storage'));
            if (!this.subDomain.is_sub_domain_url && storage.user.role !== 'ADMIN' && routeObject[3] !== 'verifyEmail') {
                // console.log('this is the culprit here');
                this.redirectToFirstCompany();
            }
            else if (!this.subDomain.is_sub_domain_url && storage.user.role === 'ADMIN' && routeObject[3] !== 'admin') {
                // console.log('now this is the culprit here');
                window.location.href = window.location.origin + '/admin';
            }
            else if (this.subDomain.is_sub_domain_url && !routeObject[3]) {
                this.redirectToDashboard();
            }
        }
        else if (!routeObject[3] && this.subDomain.is_sub_domain_url) {
            //Appcues Anonymous
            // Appcues.anonymous();
            url = 'app.' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].APP_EXTENSION + '/login';
            window.location.href = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PROTOCOL + url;
        }
    };
    AppComponent.prototype.redirectToDashboard = function () {
        var _this = this;
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var companyAccess = JSON.parse(this._cookieService.readCookie('filepicker_token_json'));
        var url = '';
        companyAccess.forEach(function (e) {
            if (e.key === _this.sub_domain) {
                url = _this.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].APP_EXTENSION + '/dashboard';
            }
        });
        var company = storage.company;
        if (url == '')
            url = company.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].APP_EXTENSION + '/dashboard';
        var isException = this.exceptionRoutes();
        if (isException) {
            return;
        }
        window.location.href = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PROTOCOL + url;
    };
    AppComponent.prototype.redirectToFirstCompany = function () {
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var company = storage.company;
        var url = company.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].APP_EXTENSION + '/dashboard';
        var isException = this.exceptionRoutes();
        if (isException) {
            return;
        }
        window.location.href = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PROTOCOL + url;
    };
    AppComponent.prototype.exceptionRoutes = function () {
        var url = window.location.pathname;
        if (url === '/authorize/salesforce') {
            return true;
        }
        return false;
    };
    // updateBillingStatusCookie(){
    //   this._userService.updatebillingStatus().
    //     subscribe((result:any)=>{
    //       let statusCookie = result;
    //       this._cookieService.createCookie('filepicker_token_json', JSON.stringify(statusCookie),3);
    //       console.log(JSON.parse(this._cookieService.readCookie('filepicker_token_json')));
    //       this.featureAuthService.getAllFeatureAccess();
    //   });
    // }
    AppComponent.prototype.ngOnDestroy = function () {
        window.Intercom('hide');
        window.Intercom('shutdown');
        if (window.location.href.indexOf('/preview') >= 0) {
            window.Intercom('update', { hide_default_launcher: false });
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'sd-app',
            template: __webpack_require__(762),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["e" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["e" /* SubDomainService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["c" /* FeatureAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["c" /* FeatureAuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["d" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["d" /* CookieService */]) === 'function' && _d) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/app.component.js.map

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_module__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_routes_index__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_modules_shared_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_notfound_notfound_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__site_components_signup_index__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_login_login_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_logout_logout_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_feature_access_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__site_home_home_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__site_templates_pipes_pipes_module__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__site_site_module__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__site_lazyAssistant_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_services_marketing_service__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_notfound_notfound_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_11__site_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__site_components_signup_index__["b" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shared_logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__site_lazyAssistant_component__["a" /* LazyAssistantComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__config_routes_index__["a" /* routes */],
                __WEBPACK_IMPORTED_MODULE_5__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__core_module__["a" /* CoreModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__site_site_module__["a" /* SiteModule */],
                __WEBPACK_IMPORTED_MODULE_12__site_templates_pipes_pipes_module__["a" /* PipesModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__shared_services_feature_access_service__["a" /* FeatureAuthService */], __WEBPACK_IMPORTED_MODULE_4__config_routes_index__["b" /* APP_ROUTER_PROVIDERS */], __WEBPACK_IMPORTED_MODULE_15__shared_services_marketing_service__["a" /* MarketingService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/app.module.js.map

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__site_lazyAssistant_component__ = __webpack_require__(362);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CALCULATOR_ROUTES; });

var CALCULATOR_ROUTES = [
    {
        path: 'seo',
        loadChildren: 'app/site/templates/calculator.module#CalculatorModule'
    },
    {
        path: 'calc',
        loadChildren: 'app/site/templates/calculator.module#CalculatorModule'
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_0__site_lazyAssistant_component__["a" /* LazyAssistantComponent */]
    }
];
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/calculator.routes.js.map

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__site_index__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_authentication_auth_guard__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_authentication_admin_guard__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_authentication_subdomain_guard__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_authentication_analytics_guard__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_feature_access_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_authentication_home_route_guard__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_authentication_company_profile_route_guard__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_notfound_notfound_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_logout_logout_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_login_index__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_authentication_freemium_guard__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_authentication_setupnew_password_guard__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__site_index__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_invitedLogin_index__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__site_redirectUri_salesforce_redirect_component__ = __webpack_require__(363);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SITE_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return AUTH_PROVIDERS; });
















var SITE_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__site_index__["a" /* SiteComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__site_index__["b" /* HomeComponent */],
            },
            {
                path: 'verify/:token',
                component: __WEBPACK_IMPORTED_MODULE_13__site_index__["c" /* VerifyUserComponent */]
            },
            {
                path: 'verifyEmail/:token',
                component: __WEBPACK_IMPORTED_MODULE_13__site_index__["d" /* VerifyEmailComponent */]
            },
            {
                path: 'authorize/salesforce',
                component: __WEBPACK_IMPORTED_MODULE_15__site_redirectUri_salesforce_redirect_component__["a" /* SalesforceRedirectComponent */]
            },
            {
                path: 'setNewPassword',
                component: __WEBPACK_IMPORTED_MODULE_13__site_index__["e" /* SetPasswordComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_12__shared_authentication_setupnew_password_guard__["a" /* SetupNewPasswordGuard */]]
            },
            {
                path: 'setNewPassword/forgetPassword',
                component: __WEBPACK_IMPORTED_MODULE_13__site_index__["e" /* SetPasswordComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_12__shared_authentication_setupnew_password_guard__["a" /* SetupNewPasswordGuard */]]
            },
            {
                path: 'userApproval',
                component: __WEBPACK_IMPORTED_MODULE_13__site_index__["f" /* UserApprovalComponent */]
            },
            {
                path: 'Invitedlogin',
                component: __WEBPACK_IMPORTED_MODULE_14__shared_invitedLogin_index__["a" /* InvitedLoginComponent */]
            },
            // {
            //   path:'company-profile',
            //   component: CompanyProfileComponent,
            //   canActivate:[CompanyProfileRouteGuard]
            // },
            {
                path: 'forgetPassword',
                component: __WEBPACK_IMPORTED_MODULE_13__site_index__["g" /* ForgetPasswordComponent */]
            }
        ]
    },
    {
        path: 'analytics',
        loadChildren: 'app/site/components/+analytics/analytics.module#AnalyticsModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__shared_authentication_freemium_guard__["a" /* FreemiumGuard */], __WEBPACK_IMPORTED_MODULE_1__shared_authentication_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_4__shared_authentication_analytics_guard__["a" /* AnalyticsGuard */]]
    },
    {
        path: 'templates',
        loadChildren: 'app/site/components/+templates/templates.module#TemplatesModule'
    },
    {
        path: 'login/:email',
        component: __WEBPACK_IMPORTED_MODULE_10__shared_login_index__["a" /* LoginComponent */],
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_10__shared_login_index__["a" /* LoginComponent */],
    },
    {
        path: 'logout',
        component: __WEBPACK_IMPORTED_MODULE_9__shared_logout_logout_component__["a" /* LogoutComponent */]
    },
    {
        path: 'dashboard',
        loadChildren: 'app/site/components/+dashboard/dashboard.module#DashboardModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_authentication_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_11__shared_authentication_freemium_guard__["a" /* FreemiumGuard */]]
    },
    {
        path: 'settings',
        loadChildren: 'app/site/+Settings/settings.module#SettingsModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_authentication_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'signup/:email',
        loadChildren: 'app/site/components/+signup/signup.module#SignUpModule'
    },
    {
        path: 'signup',
        loadChildren: 'app/site/components/+signup/signup.module#SignUpModule'
    },
    {
        path: 'builder',
        loadChildren: 'app/site/+builder/builder.module#BuilderModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_authentication_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'preview',
        loadChildren: 'app/site/templates/templateAll/preview.module#PreviewModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_authentication_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_11__shared_authentication_freemium_guard__["a" /* FreemiumGuard */]]
    },
    {
        path: 'samplecode',
        loadChildren: 'app/site/templates/templateAll/sampleCode.module#SampleCodeModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_authentication_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_11__shared_authentication_freemium_guard__["a" /* FreemiumGuard */]]
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_authentication_admin_guard__["a" /* AdminGuard */]]
    },
    {
        path: 'Error',
        component: __WEBPACK_IMPORTED_MODULE_8__shared_notfound_notfound_component__["a" /* NotFoundComponent */]
    }
];
var AUTH_PROVIDERS = [__WEBPACK_IMPORTED_MODULE_1__shared_authentication_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_2__shared_authentication_admin_guard__["a" /* AdminGuard */], __WEBPACK_IMPORTED_MODULE_6__shared_authentication_home_route_guard__["a" /* HomeRouteGuard */], __WEBPACK_IMPORTED_MODULE_3__shared_authentication_subdomain_guard__["a" /* SubdomainGuard */], __WEBPACK_IMPORTED_MODULE_7__shared_authentication_company_profile_route_guard__["a" /* CompanyProfileRouteGuard */], __WEBPACK_IMPORTED_MODULE_4__shared_authentication_analytics_guard__["a" /* AnalyticsGuard */], __WEBPACK_IMPORTED_MODULE_5__shared_services_feature_access_service__["a" /* FeatureAuthService */], __WEBPACK_IMPORTED_MODULE_11__shared_authentication_freemium_guard__["a" /* FreemiumGuard */], __WEBPACK_IMPORTED_MODULE_12__shared_authentication_setupnew_password_guard__["a" /* SetupNewPasswordGuard */]];
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/site.routes.js.map

/***/ },

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_feature_access_service__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var CoreModule = (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule,
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_index__["g" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["f" /* LoggedInService */], __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["j" /* SettingsCommunicationService */], __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["h" /* MembershipService */], __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* CookieService */], __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["b" /* Script */], __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["e" /* SubDomainService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_feature_access_service__["a" /* FeatureAuthService */]]
        };
    };
    CoreModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */]]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Optional */])()),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* SkipSelf */])()), 
        __metadata('design:paramtypes', [CoreModule])
    ], CoreModule);
    return CoreModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/core.module.js.map

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_feature_access_service__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnalyticsGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnalyticsGuard = (function () {
    function AnalyticsGuard(router, featureAuth) {
        this.router = router;
        this.featureAuth = featureAuth;
        //this.getAccess();
    }
    AnalyticsGuard.prototype.canActivate = function () {
        return this.featureAuth.getfeatureAccess('analytics');
    };
    AnalyticsGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_feature_access_service__["a" /* FeatureAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_feature_access_service__["a" /* FeatureAuthService */]) === 'function' && _b) || Object])
    ], AnalyticsGuard);
    return AnalyticsGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/analytics.guard.js.map

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, subDomainService, _cookieService) {
        this.router = router;
        this.subDomainService = subDomainService;
        this._cookieService = _cookieService;
    }
    AuthGuard.prototype.canActivate = function () {
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var sub_domain = this.subDomainService.subDomain.sub_domain;
        if (this._cookieService.readCookie('storage') != null && storage.user.role === "ADMIN") {
            return true;
        }
        if (this._cookieService.readCookie('storage') != null && storage.companyList.indexOf(sub_domain) >= 0) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* SubDomainService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* CookieService */]) === 'function' && _c) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/auth.guard.js.map

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CompanyProfileRouteGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyProfileRouteGuard = (function () {
    function CompanyProfileRouteGuard(router) {
        this.router = router;
    }
    CompanyProfileRouteGuard.prototype.canActivate = function () {
        var url = window.location.hostname;
        var url_array = url.split('.');
        console.log(url_array.length);
        if (url_array.length !== 3) {
            console.log('In');
            this.router.navigate(['/']);
        }
        return true;
    };
    CompanyProfileRouteGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], CompanyProfileRouteGuard);
    return CompanyProfileRouteGuard;
    var _a;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/company-profile-route.guard.js.map

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FreemiumGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FreemiumGuard = (function () {
    function FreemiumGuard(router, subDomainService, _cookieService) {
        this.router = router;
        this.subDomainService = subDomainService;
        this._cookieService = _cookieService;
    }
    FreemiumGuard.prototype.canActivate = function () {
        var _this = this;
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var sub_domain = this.subDomainService.subDomain.sub_domain;
        var plan_id = storage.company.billing.chargebee_plan_id;
        var companyAccess = JSON.parse(this._cookieService.readCookie('filepicker_token_json'));
        var subscription_status = '';
        if (!companyAccess)
            window.location.href = window.location.origin + '/logout';
        else
            companyAccess.forEach(function (e) {
                if (e.key === sub_domain) {
                    subscription_status = e.value;
                }
            });
        // after initial  trial period if customer dont upgrade the plan
        if (((subscription_status == "active" && plan_id == 'freemium') || subscription_status == "cancelled") && !storage.company.is_admin_created) {
            var timer_1 = setInterval(function () {
                storage = JSON.parse(_this._cookieService.readCookie('storage'));
                if (storage) {
                    _this.abortTimer(timer_1);
                }
            }, 200);
            return false;
        }
        return true;
    };
    FreemiumGuard.prototype.abortTimer = function (timer) {
        clearInterval(timer);
        this.router.navigate(['/settings/membership']);
    };
    FreemiumGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* SubDomainService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* CookieService */]) === 'function' && _c) || Object])
    ], FreemiumGuard);
    return FreemiumGuard;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/freemium.guard.js.map

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__is_loggedin__ = __webpack_require__(351);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeRouteGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeRouteGuard = (function () {
    function HomeRouteGuard(router) {
        this.router = router;
    }
    HomeRouteGuard.prototype.canActivate = function () {
        var url = window.location.hostname;
        var url_array = url.split('.');
        console.log(url_array.length);
        if (url_array.length === 3) {
            console.log('In');
            this.router.navigate(['company-profile']);
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__is_loggedin__["a" /* isLoggedin */])()) {
            this.router.navigate(['dashboard']);
        }
        return true;
    };
    HomeRouteGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], HomeRouteGuard);
    return HomeRouteGuard;
    var _a;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/home-route.guard.js.map

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SetupNewPasswordGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SetupNewPasswordGuard = (function () {
    function SetupNewPasswordGuard(router, _cookieService, subDomainService) {
        this.router = router;
        this._cookieService = _cookieService;
        this.subDomainService = subDomainService;
    }
    SetupNewPasswordGuard.prototype.canActivate = function () {
        var verification = JSON.parse(localStorage.getItem('verification'));
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var sub_domain = this.subDomainService.subDomain.sub_domain;
        if (verification != null) {
            return true;
        }
        if (this._cookieService.readCookie('storage') != null && storage.companyList.includes(sub_domain)) {
            this.router.navigate(['/dashboard']);
            return false;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    SetupNewPasswordGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* CookieService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* SubDomainService */]) === 'function' && _c) || Object])
    ], SetupNewPasswordGuard);
    return SetupNewPasswordGuard;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/setupnew-password.guard.js.map

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SubdomainGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubdomainGuard = (function () {
    function SubdomainGuard(router, subDomainService) {
        this.router = router;
        this.subDomainService = subDomainService;
    }
    SubdomainGuard.prototype.canActivate = function () {
        console.log('this.subDomainService.subDomain.is_sub_domain_url', this.subDomainService.subDomain.is_sub_domain_url, 'this.subDomainService.subDomain.exists', this.subDomainService.subDomain.exists);
        if (this.subDomainService.subDomain.is_sub_domain_url && !this.subDomainService.subDomain.exists) {
            this.router.navigate(['Error']);
            return false;
        }
        return true;
    };
    SubdomainGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* SubDomainService */]) === 'function' && _b) || Object])
    ], SubdomainGuard);
    return SubdomainGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/subdomain.guard.js.map

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email_validator__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return InvitedLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InvitedLoginComponent = (function () {
    function InvitedLoginComponent(fb, _userService, router, loggedInSerivce, subDomianService, _cookieService) {
        this.fb = fb;
        this._userService = _userService;
        this.router = router;
        this.loggedInSerivce = loggedInSerivce;
        this.subDomianService = subDomianService;
        this._cookieService = _cookieService;
        this.error = false;
        this.ErrorMessageIsVisible = false;
    }
    InvitedLoginComponent.prototype.ngOnInit = function () {
        jQuery('#login').removeClass('hide');
        jQuery('#login').modal('show');
        this.loginForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_4__validators_email_validator__["a" /* EmailValidator */].format
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required
                ])]
        });
        jQuery.material.init();
    };
    InvitedLoginComponent.prototype.showErrorMessage = function () {
        this.ErrorMessageIsVisible = true;
    };
    InvitedLoginComponent.prototype.hideErrorMessage = function () {
        this.ErrorMessageIsVisible = false;
    };
    InvitedLoginComponent.prototype.onSubmit = function (value) {
        var _this = this;
        value = this.loginForm.value;
        jQuery('#loginSubmit').html('Please wait...');
        var link = window.location.hostname;
        var linkArray = link.split('.');
        var companyName = null;
        if (linkArray.length === 3 && linkArray[0] !== 'app')
            companyName = linkArray[0];
        this._userService.login(value.email, value.password, companyName)
            .subscribe(function (response) {
            console.log(response);
            if (response.token) {
                var storage = {
                    'token': response.token,
                    'user': response.user
                };
                if (response.user.role === 'ADMIN') {
                    console.log('Admin');
                    _this.router.navigate(['/admin/users']);
                }
                jQuery('#loginSubmit').html('Login');
                jQuery('#login').modal('hide');
                console.log(_this.ErrorMessageIsVisible);
                // localStorage.setItem('storage',JSON.stringify(storage));
                _this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
                if (_this.subDomianService.subDomain.is_sub_domain_url) {
                }
                _this.loggedInSerivce.login();
                _this._userService.token = response.token;
                var url = response.user_company.company.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].APP_EXTENSION;
                if (!_this.subDomianService.subDomain.is_sub_domain_url)
                    jQuery(location).attr('href', 'http://' + url);
            }
        }, function (response) {
            jQuery('#loginSubmit').html('Login');
            _this.error = true;
            console.log(response);
            _this.ErrorMessage = response.error.message;
            console.log(response.error.message);
            _this.showErrorMessage();
        });
    };
    InvitedLoginComponent.prototype.signUp = function () {
        console.log('okkk');
        jQuery('#login').modal('hide');
        jQuery('#signUp').modal('show');
        jQuery('.slide1 ').removeClass('hide');
        jQuery('.slide2 ').addClass('hide');
    };
    InvitedLoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* Component */])({
            selector: 'og-invitedlogin',
            template: __webpack_require__(763),
            styles: [__webpack_require__(746), __webpack_require__(744), __webpack_require__(745)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["g" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_index__["g" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["f" /* LoggedInService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_index__["f" /* LoggedInService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["e" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_index__["e" /* SubDomainService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["d" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_index__["d" /* CookieService */]) === 'function' && _f) || Object])
    ], InvitedLoginComponent);
    return InvitedLoginComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/invitedLogin.component.js.map

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__(353);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });

//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/index.js.map

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Email; });
var User = (function () {
    function User(emails, password) {
        this.emails = emails;
        this.password = password;
    }
    return User;
}());
var Email = (function () {
    function Email(email, is_primary) {
        this.email = email;
        this.is_primary = is_primary;
    }
    return Email;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/user.js.map

/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Leads; });
var Leads = (function () {
    function Leads(leads) {
        if (leads) {
            this.total = leads.total;
            this.period = leads.period;
        }
    }
    return Leads;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/leads.js.map

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Traffic; });
var Traffic = (function () {
    function Traffic(traffic) {
        if (traffic) {
            this.frequency = traffic.frequency;
            this.period = traffic.period;
        }
    }
    return Traffic;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/traffic.js.map

/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_currentPlan__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PaymentModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentModalComponent = (function () {
    function PaymentModalComponent(fb, _membershipService, _script, _cookieService) {
        this.fb = fb;
        this._membershipService = _membershipService;
        this._script = _script;
        this._cookieService = _cookieService;
        this.cardType = '';
        this.cardValid = false;
        this.error = false;
        this.errorMessage = '';
        this.errormsg = '';
        this.errorcard = false;
        this.CardDetail = new __WEBPACK_IMPORTED_MODULE_3__models_currentPlan__["a" /* Card */](null);
        this.card_status = '';
        this.isChangePlan = false;
        this.cardStatus = '';
        this.subsStatus = '';
        this.payment_left = 0;
        this.ogExt = '';
    }
    PaymentModalComponent.prototype.ngOnInit = function () {
        this.errorMessage = '';
        this.errormsg = '';
        this.error = false;
        this.errorcard = false;
        this.setupPaymentForm = this.fb.group({
            cardNumber1: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('^[0-9]*$')])],
            cardNumber2: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('^[0-9]*$')])],
            cardNumber3: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('^[0-9]*$')])],
            cardNumber4: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('^[0-9]*$')])],
            nameOnCard: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)])],
            cvv: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('^[0-9]*$')])],
            cardMonth: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('^[0-9]*$')])],
            cardYear: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('^[0-9]*$')])]
        });
        jQuery('.modal').on('hidden.bs.modal', function () {
            this.errorMessage = '';
            this.error = 'false';
        });
        var storage = this._cookieService.readCookie('storage');
        if (storage) {
            storage = JSON.parse(storage);
            this.payment_left = storage.company.cost / 100;
            // console.log("storage" , storage);
            this.username = storage.user.name;
        }
        var status = this._cookieService.readCookie('status');
        if (status) {
            status = JSON.parse(status);
            this.cardStatus = status.cardStatus;
            this.subsStatus = status.subsStatus;
        }
        this.ogExt = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].APP_EXTENSION;
    };
    PaymentModalComponent.prototype.onChangeCardNumber = function (cardNum) {
        var self = this;
        jQuery('#cardNumber1').validateCreditCard(function (result) {
            if (result.card_type != null) {
                self.cardType = result.card_type.name;
                if (result.length_valid && result.luhn_valid && result.valid)
                    self.cardValid = true;
            }
        });
        var pattern = /[a-z\s',\."/{}()[\]]/gi;
        var stringnumber = cardNum.value.replace(pattern, '');
        cardNum.value = stringnumber;
        if (cardNum.value.length === 4) {
            jQuery(cardNum).next('input').focus();
        }
    };
    PaymentModalComponent.prototype.ngAfterViewInit = function () {
        this._script.load('cardValidator')
            .then(function (data) {
            //console.log('Scripts Loaded', data);
        })
            .catch(function (error) {
            //console.log('Script failed to load',error);
        });
    };
    PaymentModalComponent.prototype.setup = function () {
        this.error = false;
        this.errorMessage = '';
        jQuery('#new-setup-payment').modal('hide');
        jQuery('#cc-modal-payment').modal({ backdrop: 'static', keyboard: false });
        jQuery('#cc-modal-payment').modal('show');
    };
    PaymentModalComponent.prototype.setupPayment = function () {
        var _this = this;
        this.errorcard = false;
        var cardData = {
            'cardNumber': this.setupPaymentForm.value.cardNumber1
                + this.setupPaymentForm.value.cardNumber2
                + this.setupPaymentForm.value.cardNumber3
                + this.setupPaymentForm.value.cardNumber4,
            'cvv': this.setupPaymentForm.value.cvv,
            'cardMonth': this.setupPaymentForm.value.cardMonth,
            'cardYear': this.setupPaymentForm.value.cardYear,
        };
        this.error = false;
        this.errorMessage = '';
        var self = this;
        jQuery('#btnSetupCard').html('Please wait...').attr('disabled', true);
        var setupPayment = self._membershipService.resetPayment(cardData)
            .subscribe(function (success) {
            self.cardType = '';
            self.cardValid = false;
            if (_this.subsStatus === 'cancelled') {
                _this.activateNow();
            }
            else {
                console.log(success);
                var status = JSON.parse(_this._cookieService.readCookie('status'));
                status.cardStatus = success.customer.card_status;
                _this._cookieService.createCookie('status', JSON.stringify(status), 3);
                _this.CardDetail = new __WEBPACK_IMPORTED_MODULE_3__models_currentPlan__["a" /* Card */](success.card);
                _this.card_status = success.customer.card_status;
                _this.error = false;
                _this.errorMessage = '';
                jQuery('#cc-modal-payment').modal('hide');
                jQuery('.modal-backdrop').remove();
                jQuery('#premiumPaymentModal').modal('hide');
                _this.errorMessage = '';
                window.toastNotification('Payment successfully added');
                self._cookieService.createCookie('cardStatus', self.card_status, 3);
                window.location.reload();
            }
            jQuery('#btnSetupCard').html('Submit').attr('disabled', false);
            jQuery('#cc-modal-payment input').val('');
            /*---- Tracking code goes here ----*/
            ga('markettingteam.send', 'event', 'Settings', 'Submit', 'Settings Add Payment Method');
            _kmq.push(['record', 'Settings Payment Method Added']);
            /*---------------------------------*/
        }, function (error) {
            _this.error = true;
            _this.errorMessage = 'Invalid card details';
            if (_this.isChangePlan)
                jQuery('#btnSetupCard').html('Make Payment').attr('disabled', false);
            else
                jQuery('#btnSetupCard').html('Submit').attr('disabled', false);
            setupPayment.unsubscribe();
        });
    };
    PaymentModalComponent.prototype.activateNow = function () {
        var _this = this;
        var self = this;
        this.errorcard = false;
        this.error = false;
        jQuery('.btnActivateNow').html('Please wait...').attr('disabled', true);
        self._membershipService.activateNow()
            .subscribe(function (success) {
            console.log('activated', success);
            var status = {
                cardStatus: 'valid',
                subsStatus: success.subscription.status,
            };
            window.toastNotification('Payment successfull');
            var membership = JSON.parse(_this._cookieService.readCookie('filepicker_token_json'));
            membership[1].value = success.subscription.status;
            _this._cookieService.eraseCookie('filepicker_token_json');
            _this._cookieService.createCookie('filepicker_token_json', JSON.stringify(membership), 3);
            jQuery('#btnActivateNow').html('Activate Now').attr('disabled', false);
            _this._cookieService.createCookie('status', JSON.stringify(status), 3);
            jQuery('.modal-backdrop').remove();
            jQuery('#new-setup-payment').modal('hide');
            jQuery('#cc-modal-payment').modal('hide');
            window.location.reload();
        }, function (error) {
            _this.errorcard = true;
            _this.error = true;
            _this.errorMessage = error.error.err_message; //'Subscription cannot be re-activated as your card is decline';
            jQuery('.btnActivateNow').html('Make Payment').attr('disabled', false);
        });
    };
    PaymentModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'og-payment-modal',
            template: __webpack_require__(766),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["h" /* MembershipService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["h" /* MembershipService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* Script */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* CookieService */]) === 'function' && _d) || Object])
    ], PaymentModalComponent);
    return PaymentModalComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/paymentModal.component.js.map

/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_shared_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paymentModal_component__ = __webpack_require__(560);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PaymentModalModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentModalModule = (function () {
    function PaymentModalModule() {
    }
    PaymentModalModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__modules_shared_module__["a" /* SharedModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__paymentModal_component__["a" /* PaymentModalComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__paymentModal_component__["a" /* PaymentModalComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], PaymentModalModule);
    return PaymentModalModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/paymentModal.module.js.map

/***/ },

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PremiumModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PremiumModalComponent = (function () {
    function PremiumModalComponent(_cookieService) {
        this._cookieService = _cookieService;
    }
    PremiumModalComponent.prototype.callGA = function (str) {
        switch (str) {
            case "UPGRADE":
                ga('markettingteam.send', 'event', 'UpgradeNow', 'Click', 'Upgradepopup');
                _kmq.push(['record', 'Upgrade popup click']);
                break;
            case "LATER":
                this.updateStorage();
                ga('markettingteam.send', 'event', 'UpgradeLater', 'Click', 'Upgradepopup');
                _kmq.push(['record', 'Upgrade later link click']);
                break;
        }
    };
    PremiumModalComponent.prototype.updateStorage = function () {
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        if (storage.showUpgradeModal) {
            storage.showUpgradeModal = false;
            this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
        }
    };
    PremiumModalComponent.prototype.closePremModal = function () {
        this.callGA('UPGRADE');
        jQuery('#premiumModal').modal('hide');
    };
    PremiumModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'og-premium-modal',
            styles: [__webpack_require__(749)],
            template: __webpack_require__(767),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["d" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_index__["d" /* CookieService */]) === 'function' && _a) || Object])
    ], PremiumModalComponent);
    return PremiumModalComponent;
    var _a;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/premiumModal.component.js.map

/***/ },

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export LoggedOutService */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoggedOutService = (function () {
    function LoggedOutService() {
        this.is_sub_domain_url = false;
    }
    LoggedOutService.prototype.checkSubDomain = function (url) {
        // trim spaces
        url = url.replace(/^\s+/, '');
        url = url.replace(/\s+$/, '');
        // convert back slash to forward slash
        url = url.replace(/\\/g, '/');
        // remove 'http://', 'https://' or 'ftp://'
        url = url.replace(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i, '');
        // remove 'www.' if exist
        url = url.replace(/^www\./i, '');
        if (url.split('.').length === 3 && url.split('.')[0] === 'app')
            return false;
        // remove path after domain
        url = url.replace(/\/(.*)/, '');
        // remove tld's
        if (url.match(/\.[a-z]{2,3}\.[a-z]{2}$/i)) {
            url = url.replace(/\.[a-z]{2,3}\.[a-z]{2}$/i, '');
        }
        else if (url.match(/\.[a-z]{2,5}$/i)) {
            url = url.replace(/\.[a-z]{2,5}$/i, '');
        }
        return (url.match(/\./g)) ? true : false;
    };
    LoggedOutService.prototype.logout = function () {
        this.is_sub_domain_url = this.checkSubDomain(window.location.hostname);
        console.log('is_sub_domain_url', this.is_sub_domain_url);
        if (this.is_sub_domain_url) {
            console.log('sub domain url', this.is_sub_domain_url);
            var win = document.getElementById('mainUrlIframe').contentWindow;
            // localStorage.removeItem('storage');
            win.postMessage(JSON.stringify({ key: 'storage', method: 'remove' }), '*');
        }
        localStorage.removeItem('storage');
        localStorage.removeItem('company');
        window.location.reload();
    };
    LoggedOutService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], LoggedOutService);
    return LoggedOutService;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/logged-out.service.js.map

/***/ },

/***/ 564:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ScriptStore; });
var ScriptStore = [
    //for plugins on builder page
    { name: 'wysiwyg', src: '../../../assets/js/wysiwyg.js' },
    { name: 'link', src: '../../../assets/js/link.min.js' },
    { name: 'filepicker', src: '//api.filestackapi.com/filestack.js' },
    { name: 'fancybox', src: '../../../assets/js/fancybox.js' },
    { name: 'math', src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjs/3.3.0/math.min.js' },
    { name: 'jqueryUI', src: '//code.jquery.com/ui/1.11.4/jquery-ui.js' },
    { name: 'clipboard', src: '../../../assets/js/clipboard.min.js' },
    { name: 'rangeSlider', src: '../../../assets/js/ion.rangeSlider.min.js' },
    { name: 'isotope', src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.11/isotope.pkgd.min.js' },
    { name: 'selectize', src: '//cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.1/js/standalone/selectize.min.js' },
    //for graphs on analytics page
    { name: 'gCharts', src: 'https://www.gstatic.com/charts/loader.js' },
    { name: 'raphael', src: '//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js' },
    { name: 'morrisCharts', src: '../../../assets/js/morris-0.4.1.min.js' },
    { name: 'daterangepicker', src: '../../../assets/js/daterangepicker.js' },
    { name: 'moment', src: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.14.1/moment.min.js' },
    //other scripts
    { name: 'cardValidator', src: '../../../assets/js/jquery.creditCardValidator.js' },
    { name: 'timeZoneMin', src: '../../../assets/js/timezones.full.min.js' },
    { name: 'googleLocation', src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDMGMieCyF6dY6nnRCkga45GVCXVuydaLA&libraries=places' },
    { name: 'datatables', src: 'https://cdn.datatables.net/v/dt/dt-1.10.12/datatables.min.js' },
    { name: 'slimScroll', src: 'https://cdnjs.cloudflare.com/ajax/libs/jQuery-slimScroll/1.3.8/jquery.slimscroll.min.js' },
    { name: 'captcha', src: 'https://www.google.com/recaptcha/api.js' },
    { name: 'iFrameResizer', src: '../../../assets/js/iFrameResizer.js' },
    { name: 'colorPickerSliders', src: '../../../assets/js/bootstrap.colorpickersliders.js' },
    { name: 'tinyColor', src: 'https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.4.1/tinycolor.js' },
    { name: 'bootBox', src: '../../../assets/js/bootbox.js' },
    { name: 'marketing', src: '../../../assets/js/marketing.js' },
    { name: 'zapierIntegration1', src: 'https://zapier.com/zapbook/embed/widget.js?services=outgrow&container=true&limit=10&html_id=zapier' },
    { name: 'zapierIntegration', src: 'https://zapier.com/zapbook/embed/widget.js?guided_zaps=14284,14285,14375,14280,14282,14277,14281,14279,14278&html_id=zapier' }
];
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/script.store.js.map

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SettingsCommunicationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsCommunicationService = (function () {
    function SettingsCommunicationService() {
    }
    SettingsCommunicationService.prototype.updateCompanyList = function (companyList) {
        this.companyList = companyList;
    };
    SettingsCommunicationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], SettingsCommunicationService);
    return SettingsCommunicationService;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/settings.communication.service.js.map

/***/ },

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forgetPassword_component__ = __webpack_require__(356);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__forgetPassword_component__["a"]; });

//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/index.js.map

/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(357);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });

//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/index.js.map

/***/ },

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifyUser_index__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setPassword_index__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userApproval_index__ = __webpack_require__(570);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__verifyUser_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__setPassword_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__userApproval_index__["a"]; });



//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/index.js.map

/***/ },

/***/ 569:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setPassword_component__ = __webpack_require__(358);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__setPassword_component__["a"]; });

//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/index.js.map

/***/ },

/***/ 570:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userApproval_component__ = __webpack_require__(359);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__userApproval_component__["a"]; });

//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/index.js.map

/***/ },

/***/ 571:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifyUser_component__ = __webpack_require__(360);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__verifyUser_component__["a"]; });

//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/index.js.map

/***/ },

/***/ 572:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CompanyNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * This class represents the navigation bar component.
 */
var CompanyNavbarComponent = (function () {
    function CompanyNavbarComponent(loggedInService, _cookieService) {
        this.loggedInService = loggedInService;
        this._cookieService = _cookieService;
        this.showLogin = false;
        var url = window.location.hostname;
        var url_array = url.split('.');
        if (url_array.length === 3) {
            this.showLogin = true;
        }
        this.loggedIn = loggedInService.loggedIn;
        var storage = _cookieService.readCookie('storage');
        if (storage !== null) {
            storage = JSON.parse(storage);
            console.log(storage.user.username);
            this.username = storage.user.username;
        }
    }
    CompanyNavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'company-navbar',
            template: __webpack_require__(772),
            styles: [__webpack_require__(754)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["f" /* LoggedInService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["f" /* LoggedInService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* CookieService */]) === 'function' && _b) || Object])
    ], CompanyNavbarComponent);
    return CompanyNavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/company-navbar.component.js.map

/***/ },

/***/ 573:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__company_navbar_component__ = __webpack_require__(572);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__company_navbar_component__["a"]; });
/**
 * This barrel file provides the export for the shared NavbarComponent.
 */

//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/index.js.map

/***/ },

/***/ 574:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__site_navbar_component__ = __webpack_require__(575);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__site_navbar_component__["a"]; });
/**
 * This barrel file provides the export for the shared NavbarComponent.
 */

//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/index.js.map

/***/ },

/***/ 575:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SiteNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * This class represents the navigation bar component.
 */
var SiteNavbarComponent = (function () {
    function SiteNavbarComponent(loggedInService, _cookieService) {
        this.loggedInService = loggedInService;
        this._cookieService = _cookieService;
        this.showLogin = false;
        console.log(window.location.hostname);
        var url = window.location.hostname;
        var url_array = url.split('.');
        if (url_array.length === 3) {
            this.showLogin = true;
        }
        this.loggedIn = loggedInService.loggedIn;
        var storage = _cookieService.readCookie('storage');
        if (storage !== null) {
            storage = JSON.parse(storage);
            this.username = storage.user.username;
        }
    }
    SiteNavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'site-navbar',
            template: __webpack_require__(773),
            styles: [__webpack_require__(755)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["f" /* LoggedInService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["f" /* LoggedInService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* CookieService */]) === 'function' && _b) || Object])
    ], SiteNavbarComponent);
    return SiteNavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/site-navbar.component.js.map

/***/ },

/***/ 576:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__site_navbar_index__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_navbar_index__ = __webpack_require__(573);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__site_navbar_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__company_navbar_index__["a"]; });


//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/index.js.map

/***/ },

/***/ 577:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_modules_shared_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_routes_index__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(576);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavBarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavBarModule = (function () {
    function NavBarModule() {
    }
    NavBarModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* CompanyNavbarComponent */], __WEBPACK_IMPORTED_MODULE_3__index__["b" /* SiteNavbarComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__config_routes_index__["a" /* routes */],
                __WEBPACK_IMPORTED_MODULE_0__shared_modules_shared_module__["a" /* SharedModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* CompanyNavbarComponent */], __WEBPACK_IMPORTED_MODULE_3__index__["b" /* SiteNavbarComponent */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], NavBarModule);
    return NavBarModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/navbar.module.js.map

/***/ },

/***/ 578:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Email; });
var User = (function () {
    function User(name, emails, role, companyname, domain, isLoggedIn, password) {
        this.name = name;
        this.emails = emails;
        this.role = role;
        this.companyname = companyname;
        this.domain = domain;
        this.isLoggedIn = isLoggedIn;
        this.password = password;
    }
    return User;
}());
var Email = (function () {
    function Email(email, is_primary) {
        this.email = email;
        this.is_primary = is_primary;
    }
    return Email;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/User.js.map

/***/ },

/***/ 579:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_component__ = __webpack_require__(580);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__signup_component__["a"]; });

//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/index.js.map

/***/ },

/***/ 580:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__User__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_validators_email_validator__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignupComponent = (function () {
    function SignupComponent(fb, _userService, _companyService, _render, _element, _router, titleService) {
        this.fb = fb;
        this._userService = _userService;
        this._companyService = _companyService;
        this._render = _render;
        this._element = _element;
        this._router = _router;
        this.titleService = titleService;
        this.error = false;
        this.signUp = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__User__["a" /* User */]('', new __WEBPACK_IMPORTED_MODULE_3__User__["b" /* Email */]('', true), '', '', '', false, '');
        this.emailError = false;
        this.isLeadExist = false;
        this.titleService.setTitle("Outgrow Home");
    }
    SignupComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('leads');
        this.signupForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__shared_validators_email_validator__["a" /* EmailValidator */].format
                ])]
        });
        jQuery.material.init();
    };
    SignupComponent.prototype.errorShow = function () {
        this.error = true;
    };
    SignupComponent.prototype.errorHide = function () {
        this.error = false;
    };
    SignupComponent.prototype.errorEmailHide = function () {
        this.emailError = false;
    };
    SignupComponent.prototype.saveLeads = function () {
        var _this = this;
        jQuery('#btnSignUp').addClass('loading');
        jQuery('#btnSignUp').text('Please wait');
        jQuery('#btnSignUp').attr('disabled', true);
        var data = this.signupForm.value.email;
        localStorage.setItem('leads', data);
        /*=== Tracking snippet ===*/
        window.Intercom('update', { 'email': data, 'ISLEAD': true });
        if (window.location.href.indexOf('outgrow.co') >= 0) {
            fbq('track', 'Lead');
        }
        /*========================*/
        var signupSubscription = this._userService.leads(data)
            .subscribe(function (response) {
            if (response._id !== null) {
                //jQuery('#leads').addClass('hide');
                _this._router.navigate(['/signup']);
            }
        }, function (error) {
            var error_code = error.error.code;
            if (error_code === 'E_UNEXPECTED' && error.error.err_message === 'Email is already registered with us, please log in!') {
                _this.login();
            }
            else {
                _this.errorMsg = (error.error.err_errors !== '') ? error.error.err_errors.email.message :
                    error.error.err_message;
            }
            _this.error = _this.errorMsg;
            jQuery('#btnSignUp').removeClass('loading');
            jQuery('#btnSignUp').attr('disabled', false);
            jQuery('#btnSignUp').html('Get Started');
            signupSubscription.unsubscribe();
        });
    };
    SignupComponent.prototype.checkEmail = function () {
        this.errorHide();
    };
    SignupComponent.prototype.checkCompanyEmail = function () {
        this.errorEmailHide();
    };
    SignupComponent.prototype.login = function () {
        this._router.navigate(['/login']);
    };
    SignupComponent.prototype.reset = function () {
        this._router.navigate(['/forgetPassword']);
    };
    SignupComponent.prototype.close = function () {
        var link = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].APP_EXTENSION;
        var protocol = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].PROTOCOL;
        window.location.href = protocol + link;
    };
    SignupComponent.prototype.callGA = function () {
        ga('markettingteam.send', 'event', 'Signup', 'Click', 'Landingpage');
        _kmq.push(['record', 'Sign Up Click']);
    };
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* Component */])({
            selector: 'signup-component',
            template: __webpack_require__(774),
            styles: [__webpack_require__(756), __webpack_require__(127), __webpack_require__(128)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["g" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["g" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* CompanyService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* Renderer */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ElementRef */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["b" /* Title */]) === 'function' && _g) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/signup.component.js.map

/***/ },

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Email; });
var User = (function () {
    function User(name, emails, role, companyname, domain, isLoggedIn, password) {
        this.name = name;
        this.emails = emails;
        this.role = role;
        this.companyname = companyname;
        this.domain = domain;
        this.isLoggedIn = isLoggedIn;
        this.password = password;
    }
    return User;
}());
var Email = (function () {
    function Email(email, is_primary) {
        this.email = email;
        this.is_primary = is_primary;
    }
    return Email;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/User.js.map

/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signupDetail_component__ = __webpack_require__(583);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__signupDetail_component__["a"]; });

//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/index.js.map

/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__User__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_validators_email_validator__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_marketing_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_script_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SignupDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SignupDetailComponent = (function () {
    function SignupDetailComponent(fb, _userService, _companyService, _render, _element, _router, _cookieService, _marketingService, _script, titleService, route) {
        var _this = this;
        this.fb = fb;
        this._userService = _userService;
        this._companyService = _companyService;
        this._render = _render;
        this._element = _element;
        this._router = _router;
        this._cookieService = _cookieService;
        this._marketingService = _marketingService;
        this._script = _script;
        this.titleService = titleService;
        this.route = route;
        this.error = false;
        this.signUp = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__User__["a" /* User */]('', new __WEBPACK_IMPORTED_MODULE_3__User__["b" /* Email */]('', true), '', '', '', false, '');
        this.companyType = false;
        this.emailError = false;
        this.forgetPasswordError = false;
        this.temp_name = 'template';
        this.isSubmit = false;
        this.isExtension = false;
        this.domainExtension = '';
        this.route.params.subscribe(function (params) {
            var data = params['email'];
            if (data && _this.validateEmail(data)) {
                _this.populateForm(data);
                _this.saveLeads(data);
            }
        });
        this.titleService.setTitle("Outgrow Home");
        var data = localStorage.getItem('leads');
        if (data !== null) {
            this.populateForm(data);
        }
        this._script.load('marketing')
            .then(function (data) {
            console.log('Scripts Loaded', data);
            if (data.length && data[0].status == 'Loaded')
                _marketingService.initMarketingStuff();
        })
            .catch(function (error) {
            //any error
        });
    }
    SignupDetailComponent.prototype.ngOnInit = function () {
        this.domainExtension = '.' + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].APP_EXTENSION;
        this.isExtension = false;
        this.signupFormdetail = this.fb.group({
            name: [this.model.name, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].minLength(3)])],
            email: [this.model.emails.email, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__shared_validators_email_validator__["a" /* EmailValidator */].format])],
            password: [this.model.password, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].minLength(8)])],
            companyname: [this.model.companyname, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].minLength(4)])],
            domain: [this.model.domain, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].pattern('^[a-zA-Z0-9]*$')
                ])]
        });
        this.callSchedule = this.fb.group({
            traffic: [this.traffic, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].pattern('^[0-9]*$')])],
            leads: [this.leads, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].pattern('^[0-9]*$')])],
            companyType: this.companyType
        });
        this.forgetPasswordForm = this.fb.group({
            forgetemail: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_4__shared_validators_email_validator__["a" /* EmailValidator */].format
                ])]
        });
        jQuery.material.init();
    };
    SignupDetailComponent.prototype.populateForm = function (data) {
        this.model.name = data.split('@')[0];
        this.model.emails.email = data;
        this.model.companyname = data.split('@')[1].split('.')[0];
        this.model.domain = data.split('@')[1].split('.')[0];
    };
    SignupDetailComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    SignupDetailComponent.prototype.saveLeads = function (data) {
        var _this = this;
        localStorage.setItem('leads', data);
        /*=== Tracking snippet ===*/
        if (window.location.href.indexOf('outgrow.co') >= 0) {
            fbq('track', 'Lead');
        }
        /*========================*/
        var signupSubscription = this._userService.leads(data)
            .subscribe(function (response) {
            if (response._id !== null) {
            }
        }, function (error) {
            console.log("ERROR", error);
            var error_code = error.error.code;
            if (error_code === 'E_UNEXPECTED' && error.error.err_message === 'Email is already registered with us, please log in!') {
                _this.login();
            }
            else {
                _this.errorMsg = (error.error.err_errors !== '') ? error.error.err_errors.email.message :
                    error.error.err_message;
            }
            _this.error = _this.errorMsg;
            signupSubscription.unsubscribe();
        });
    };
    SignupDetailComponent.prototype.errorShow = function () {
        this.error = true;
    };
    SignupDetailComponent.prototype.errorHide = function () {
        this.error = false;
        this.forgetPasswordError = false;
    };
    SignupDetailComponent.prototype.errorEmailHide = function () {
        this.emailError = false;
    };
    SignupDetailComponent.prototype.userSignUp = function (user) {
        var _this = this;
        this.isSubmit = true;
        this.errorMsg = '';
        if (this.signupFormdetail.valid) {
            this.isSubmit = false;
            jQuery('#btnSaveDetail').addClass('loading');
            jQuery('#btnSaveDetail').text('Please wait');
            jQuery('#btnSaveDetail').attr('disabled', true);
            user = this.model;
            var signupSubscription_1 = this._userService.register(user)
                .subscribe(function (response) {
                var storage = {
                    'token': response.token,
                    'user': response.user,
                    'company': response.company,
                    'temp_name': _this.temp_name,
                    'companyList': response.companyList
                };
                _this._cookieService.createCookie('filepicker_token_json', JSON.stringify(response.companyAccess), 3);
                _this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
                localStorage.setItem('domain', _this.model.domain);
                localStorage.removeItem('leads');
                /*----- Analytics Tracking code here -------*/
                ga('markettingteam.send', 'event', 'Signup', 'Submit', 'SignUpPage');
                _kmq.push(['identify', user.emails.email]);
                _kmq.push(['record', 'Signed Up']);
                if (window.location.href.indexOf('outgrow.co') >= 0) {
                    fbq('track', 'CompleteRegistration');
                }
                /*------------------------------------------*/
                //this._router.navigate(['/templates']);
                _this.redirectToDomain();
            }, function (error) {
                var error_code = error.error.code;
                if (error_code === 'E_UNIQUE_USERNAME_VALIDATION' ||
                    error_code === 'E_UNIQUE_EMAIL_VALIDATION' ||
                    error_code === 'E_UNIQUE_UNIDENTIFIED_VALIDATION') {
                    _this.errorMsg = ' Email is already registered with us! Please Log in';
                }
                else if (error.error.err_errors['sub_domain']) {
                    _this.errorMsg = error.error.err_errors['sub_domain'].message;
                }
                else if (error_code === 'E_UNEXPECTED' && error.error.err_message === 'id : The size should not be more than 50') {
                    _this.errorMsg = 'The size should not be more than 50 characters';
                }
                else {
                    _this.errorMsg = error.error.err_errors['emails.0.email'] ?
                        error.error.err_errors['emails.0.email'].message : error.error.err_message;
                }
                _this.emailError = _this.errorMsg;
                jQuery('#btnSaveDetail').removeClass('loading');
                jQuery('#btnSaveDetail').text('SignUp');
                jQuery('#btnSaveDetail').attr('disabled', false);
                signupSubscription_1.unsubscribe();
            });
        }
    };
    SignupDetailComponent.prototype.saveSchedule = function () {
        var _this = this;
        jQuery('#btnLeads').text('Please wait..');
        var signupSubscription = this._companyService.saveCallSchedule(this.callSchedule.value)
            .subscribe(function (response) {
            _this.redirectToDomain();
        }, function (error) {
            jQuery('#btnLeads').text('Save');
            signupSubscription.unsubscribe();
        });
    };
    SignupDetailComponent.prototype.skip = function () {
        var link = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].APP_EXTENSION;
        var url = this.model.domain + '.' + link;
        var protocol = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].PROTOCOL;
        jQuery(location).attr('href', protocol + url);
    };
    SignupDetailComponent.prototype.redirectToDomain = function () {
        localStorage.removeItem('leads');
        var link = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].APP_EXTENSION;
        var protocol = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].PROTOCOL;
        var url = this.model.domain + '.' + link + '/dashboard';
        jQuery(location).attr('href', protocol + url);
    };
    SignupDetailComponent.prototype.checkEmail = function () {
        this.errorHide();
    };
    SignupDetailComponent.prototype.checkCompanyEmail = function () {
        this.errorEmailHide();
        this.isExtension = false;
    };
    SignupDetailComponent.prototype.showExtension = function () {
        this.isExtension = true;
    };
    SignupDetailComponent.prototype.closeModal = function () {
        if (this._cookieService.readCookie('storage') !== null) {
            this.redirectToDomain();
        }
        else {
            jQuery('#signUp').modal('hide');
        }
    };
    SignupDetailComponent.prototype.showPassword = function () {
        if (jQuery('#password').attr('type') === 'password') {
            jQuery('#btnShowPassword').addClass('hide');
            jQuery('#btnHidePassword').removeClass('hide');
            jQuery('#password').attr('type', 'text');
        }
    };
    SignupDetailComponent.prototype.hidePassword = function () {
        if (jQuery('#password').attr('type') === 'text') {
            jQuery('#btnHidePassword').addClass('hide');
            jQuery('#btnShowPassword').removeClass('hide');
            jQuery('#password').attr('type', 'password');
        }
    };
    SignupDetailComponent.prototype.login = function () {
        this._router.navigate(['/login']);
    };
    SignupDetailComponent.prototype.close = function () {
        this._router.navigate(['/']);
    };
    SignupDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* Component */])({
            selector: 'signup-detail-component',
            template: __webpack_require__(775),
            styles: [__webpack_require__(757), __webpack_require__(127), __webpack_require__(128)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["g" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["g" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* CompanyService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* Renderer */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ElementRef */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["d" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["d" /* CookieService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_marketing_service__["a" /* MarketingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_services_marketing_service__["a" /* MarketingService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__shared_services_script_service__["a" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_services_script_service__["a" /* Script */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["b" /* Title */]) === 'function' && _k) || Object, (typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === 'function' && _l) || Object])
    ], SignupDetailComponent);
    return SignupDetailComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/signupDetail.component.js.map

/***/ },

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_company__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ToolbarComponent = (function () {
    function ToolbarComponent(_subDomainService, loggedInService, _userService, _companyService, _featureAuthService, _cookieService, router, _script) {
        var _this = this;
        this._subDomainService = _subDomainService;
        this.loggedInService = loggedInService;
        this._userService = _userService;
        this._companyService = _companyService;
        this._featureAuthService = _featureAuthService;
        this._cookieService = _cookieService;
        this.router = router;
        this._script = _script;
        this.loggedIn = { isLoggedIn: false };
        this.isSubDomainUrl = false;
        // hasAccess: Boolean = true;
        this.companyInitial = '';
        this.companyName = '';
        this.isEmailVerified = true;
        this.mycompanyLength = 0;
        this.isAnalyticsAvailable = true;
        this.cookiesStatus = false;
        this.respTitle = '';
        this.isAdminCreated = false;
        this.is_subcripion_cancelled = false;
        this.cardStatus = '';
        this.subsStatus = '';
        this.IEbrowser = false;
        this.showDashboardLink = true;
        /*console.log(window.location.hostname);
        let url = window.location.hostname;
        let url_array = url.split('.');
        if(url_array.length === 3) {
            this.showLogin = true;
        }*/
        // let self = this;
        // setTimeout(function() {
        //   console.log(self.loggedIn);
        // }, 2000);
        if (_cookieService.readCookie('storage'))
            this.loggedIn = { isLoggedIn: true };
        var storage = JSON.parse(_cookieService.readCookie('storage'));
        // console.log('cookie storage',storage);
        if (storage !== null) {
            this.name = storage.user.name;
            //CODE TO CHECK FOR SUBSCRIPTION STATUS AND HIDE CTAs ACCORDINGLY START
            var plan_id = storage.company.billing.chargebee_plan_id;
            var companyAccess = JSON.parse(this._cookieService.readCookie('filepicker_token_json'));
            var subscription_status_1 = '';
            if (companyAccess)
                companyAccess.forEach(function (e) {
                    if (e.key === _this._subDomainService.subDomain.sub_domain) {
                        subscription_status_1 = e.value;
                    }
                });
            if (((subscription_status_1 == "active" && plan_id == 'freemium') || subscription_status_1 == "cancelled") && !storage.company.is_admin_created) {
                this.showDashboardLink = false;
            }
        }
        this.isSubDomainUrl = this._subDomainService.subDomain.is_sub_domain_url;
        if (this.isSubDomainUrl) {
            this.companyInitial = this._subDomainService.subDomain.sub_domain.charAt(0).toUpperCase();
            this.companyName = this._subDomainService.subDomain.sub_domain.charAt(0).toUpperCase() + this._subDomainService.subDomain.sub_domain.slice(1);
        }
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // jQuery('.cookies-header').addClass('hide');
        jQuery(window).scroll(function () {
            var scroll = jQuery(window).scrollTop();
            if (scroll >= 100) {
                jQuery(".navbar-fixed-top").addClass("header-boxshadow");
            }
            else {
                jQuery(".navbar-fixed-top").removeClass("header-boxshadow");
            }
        });
        if (navigator.appName.indexOf("Microsoft") != -1)
            this.IEbrowser = true;
        else
            this.IEbrowser = false;
        // if (localStorage.getItem('hasAccess'))
        // 	this.hasAccess = <Boolean>localStorage.getItem('hasAccess');
        this.currentUrl = '';
        if (this.loggedIn.isLoggedIn)
            this.getCompanies();
        this.subDomainExt = '.' + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].APP_EXTENSION;
        //this.loggedIn = this.loggedInService.loggedIn;
        var sub_domain = this._subDomainService.subDomain.sub_domain;
        var companyAccess = JSON.parse(this._cookieService.readCookie('filepicker_token_json'));
        var storage = this._cookieService.readCookie('storage');
        if (storage) {
            storage = JSON.parse(storage);
            this.name = storage.user.name;
            this.userId = storage.user._id;
            this.isAdminCreated = storage.company.is_admin_created;
            this.isEmailVerified = false;
            if (storage.user.emails[0].verification.complete) {
                this.isEmailVerified = true;
            }
        }
        var subscription_status = '';
        if (companyAccess)
            companyAccess.forEach(function (e) {
                if (e.key === sub_domain) {
                    subscription_status = e.value;
                }
            });
        if (subscription_status === 'cancelled') {
            this.is_subcripion_cancelled = true;
        }
        // if(window.location.href.indexOf('venturepact'))
        // 	this.co = window.location.href.split('.')[0].split('//')[1];
        // else if(window.location.href.indexOf('outgrow'))
        // 	this.co = window.location.href.split('.')[0].split('//')[1];
        this.co = window.location.href.split('//')[1].split('.')[0];
        this.respTitle = window.location.href.split('//')[1].split('/')[1];
        if (this.co !== 'app' && this.loggedIn.isLoggedIn) {
            //console.log('co',this.co);
            this._companyService.isSubDomainExist(this.co)
                .subscribe(function (success) {
                localStorage.setItem('company', success._id);
                _this._companyService.getCompanyUsers(success._id)
                    .subscribe(function (success) {
                    for (var i = 0; i < success.length; i++) {
                        if (success[i].username === storage.user.username) {
                            localStorage.setItem('role', success[i].user_company.role);
                            _this._cookieService.createCookie('role', success[i].user_company.role, 3);
                            break;
                        }
                    }
                }, function (error) {
                    //console.log('company users Error', error);
                });
            }, function (error) {
                //console.log('company Error', error);
            });
        }
        if (this._cookieService.readCookie('storage'))
            this.isAnalyticsAvailable = this._featureAuthService.features.analytics;
        /*let storage : any = this._cookieService.readCookie('storage');
        if (storage) {
        storage = JSON.parse(storage);
        this.isAdminCreated = storage.user.is_admin_created;
        }*/
        this.cardStatus = '';
        this.subsStatus = '';
        var status = this._cookieService.readCookie('status');
        if (status) {
            status = JSON.parse(status);
            this.cardStatus = status.cardStatus;
            this.subsStatus = status.subsStatus;
        }
        if (this.isAdminCreated && this.subsStatus === 'cancelled') {
            jQuery('#new-setup-payment').modal({ backdrop: 'static', keyboard: false });
            jQuery('#new-setup-payment').modal('show');
        }
    };
    ToolbarComponent.prototype.ngAfterViewInit = function () {
        this.showNotification();
        this._script.load('slimScroll')
            .then(function (data) {
            jQuery('.slimscroll').slimscroll();
        })
            .catch(function (error) {
            //console.log('Script not loaded', error);
        });
    };
    ToolbarComponent.prototype.showNotification = function () {
        if (this.isEmailVerified === false) {
            jQuery('#main-div').addClass('settings-cookies');
            jQuery('.dashboard-topsec, .wrapper, .left-sidebar, .membership-details-inner-tabs').addClass('dashboard-cookies');
            jQuery('#new-header').addClass('cookies-parent');
        }
    };
    ToolbarComponent.prototype.getCompanies = function () {
        var self = this;
        this._companyService.getCompanies()
            .subscribe(function (data) {
            self.myCompanies = [];
            if (data) {
                data.forEach(function (company) {
                    if (company.user_company.status !== 'LEFT' && company.user_company.status !== 'DELETED' && company.user_company.status !== 'REQUESTED' && company.user_company.active) {
                        self.myCompanies.push(new __WEBPACK_IMPORTED_MODULE_3__shared_models_company__["a" /* Company */](company));
                    }
                });
            }
            self.mycompanyLength = self.myCompanies.length;
            setTimeout(function () {
                jQuery('.slimscroll').slimscroll({
                    railVisible: true,
                    alwaysVisible: true
                });
            }, 500);
        }, function (response) {
            //console.log('users_companies error toolbar', response);
        });
    };
    ToolbarComponent.prototype.videoModal = function () {
        jQuery('#video-modal').modal('show');
    };
    ToolbarComponent.prototype.checkCookies = function () {
        if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
            this.cookiesStatus = navigator.cookieEnabled;
            if (this.cookiesStatus) {
                jQuery('.cookies-header').removeClass('hide');
                jQuery('#nav-cookies-div').addClass('cookies-parent');
                //console.log(jQuery('.navbar-fixed-top').parent('.main-div'),'sjdbfjksdbhjsdbh!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
                jQuery('.navbar-fixed-top').parent('.main-div').addClass('cookies-main');
            }
        }
    };
    ToolbarComponent.prototype.resendEmail = function () {
        this._userService.resendEmail(this.userId)
            .subscribe(function (success) {
            window.toastNotification('Email has been sent, Please check your email.');
        }, function (error) {
            //console.log('company Error', error);
        });
    };
    ToolbarComponent.prototype.onLogout = function () {
        var _this = this;
        localStorage.setItem('doingLogout', 'true');
        this._userService.logout()
            .subscribe(function () {
            _this.loggedInService.logout();
            // this.router.navigate(['/']);
            localStorage.clear();
            window.location.href = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].APP_DOMAIN;
        });
    };
    ToolbarComponent.prototype.close = function () {
        jQuery('.cookies-header').addClass('hide');
        jQuery('#main-div').removeClass('settings-cookies');
        jQuery('.dashboard-topsec, .wrapper, .left-sidebar, .membership-details-inner-tabs').removeClass('dashboard-cookies');
        jQuery('#new-header').removeClass('cookies-parent');
    };
    /*setCurrentUrl(company:any){
        let curUrlDomain = window.location.hostname.split('.')[0];
        if(curUrlDomain != company.sub_domain){
            localStorage.setItem('company',company.id);
            jQuery(location).attr('href','http://'+company.sub_domain+this.subDomainExt+':5555');
        }
    }*/
    ToolbarComponent.prototype.analyticsClick = function (event) {
        this.isAnalyticsAvailable = this._featureAuthService.features.analytics;
        if (!this.isAnalyticsAvailable) {
            event.preventDefault();
            jQuery('#premiumModal').modal('show');
            jQuery('.modal-backdrop').insertAfter('#premiumModal');
            jQuery('#analyticsRef').attr('active', false);
        }
        else {
            jQuery('#analyticsRef').attr('active', true);
            this.router.navigate(['/analytics']);
        }
    };
    ToolbarComponent.prototype.header = function (title) {
        this.respTitle = title;
        //console.log(title);
    };
    ToolbarComponent.prototype.callGA = function () {
        ga('markettingteam.send', 'event', 'ResendVerificationEmail', 'Click', 'Dashboard');
        _kmq.push(['record', 'Resend verification email link click']);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', String)
    ], ToolbarComponent.prototype, "page", void 0);
    ToolbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'sd-toolbar',
            template: __webpack_require__(776),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ViewEncapsulation */].None,
            styles: [__webpack_require__(758)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* SubDomainService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["f" /* LoggedInService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["f" /* LoggedInService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["g" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["g" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* CompanyService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["c" /* FeatureAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["c" /* FeatureAuthService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["d" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["d" /* CookieService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* Script */]) === 'function' && _h) || Object])
    ], ToolbarComponent);
    return ToolbarComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/toolbar.component.js.map

/***/ },

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_navbar_navbar_module__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invitedUser_verifyUser_verifyUser_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invitedUser_setPassword_setPassword_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invitedUser_userApproval_userApproval_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgetPassword_forgetPassword_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__verify_email_verify_email_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_invitedLogin_index__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__redirectUri_salesforce_redirect_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__site_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__config_routes_index__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_modules_shared_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_toolbar_toolbar_module__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_integration_service__ = __webpack_require__(264);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SiteModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var SiteModule = (function () {
    function SiteModule() {
    }
    SiteModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__site_component__["a" /* SiteComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_invitedLogin_index__["a" /* InvitedLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_2__invitedUser_verifyUser_verifyUser_component__["a" /* VerifyUserComponent */],
                __WEBPACK_IMPORTED_MODULE_3__invitedUser_setPassword_setPassword_component__["a" /* SetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_4__invitedUser_userApproval_userApproval_component__["a" /* UserApprovalComponent */],
                __WEBPACK_IMPORTED_MODULE_5__forgetPassword_forgetPassword_component__["a" /* ForgetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_6__verify_email_verify_email_component__["a" /* VerifyEmailComponent */],
                __WEBPACK_IMPORTED_MODULE_8__redirectUri_salesforce_redirect_component__["a" /* SalesforceRedirectComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__config_routes_index__["a" /* routes */],
                __WEBPACK_IMPORTED_MODULE_11__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_12__components_toolbar_toolbar_module__["a" /* ToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__components_navbar_navbar_module__["a" /* NavBarModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_9__site_component__["a" /* SiteComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_13__shared_services_integration_service__["a" /* IntegrationService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SiteModule);
    return SiteModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/site.module.js.map

/***/ },

/***/ 586:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RemoveTags; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RemoveTags = (function () {
    function RemoveTags() {
        //code
    }
    RemoveTags.prototype.transform = function (body) {
        var regex = /(<([^>]+)>)/ig;
        var html = body.replace(regex, "");
        return html;
    };
    RemoveTags = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Pipe */])({
            name: 'removeTags'
        }), 
        __metadata('design:paramtypes', [])
    ], RemoveTags);
    return RemoveTags;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/RemoveTags.pipe.js.map

/***/ },

/***/ 587:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SafeHtml; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtml = (function () {
    function SafeHtml(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtml.prototype.transform = function (html) {
        var styleSanitized = this.sanitizer.bypassSecurityTrustStyle(html);
        var htmlSanitized = this.sanitizer.bypassSecurityTrustHtml(html);
        return htmlSanitized;
    };
    SafeHtml = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Pipe */])({
            name: 'safeHtml'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _a) || Object])
    ], SafeHtml);
    return SafeHtml;
    var _a;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/safeHtml.pipe.js.map

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SafeStyle; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeStyle = (function () {
    function SafeStyle(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeStyle.prototype.transform = function (style) {
        var styleSanitized = this.sanitizer.bypassSecurityTrustStyle(style);
        return styleSanitized;
    };
    SafeStyle = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Pipe */])({
            name: 'safeStyle'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _a) || Object])
    ], SafeStyle);
    return SafeStyle;
    var _a;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/safeStyle.pipe.js.map

/***/ },

/***/ 589:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SafeUrl; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeUrl = (function () {
    function SafeUrl(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeUrl.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafeUrl = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Pipe */])({
            name: 'safeUrl'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _a) || Object])
    ], SafeUrl);
    return SafeUrl;
    var _a;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/safeUrl.pipe.js.map

/***/ },

/***/ 590:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verify_email_component__ = __webpack_require__(365);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__verify_email_component__["a"]; });

//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/index.js.map

/***/ },

/***/ 591:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/polyfills.js.map

/***/ },

/***/ 744:
/***/ function(module, exports) {

module.exports = "/*\n\nTo get this list of colors inject jQuery at http://www.google.com/design/spec/style/color.html#color-color-palette\n\nThen, run this script to get the list.\n\n\n(function() {\n  var colors = {}, main = {};\n  $(\".color-group\").each(function() {\n    var color = $(this).find(\".name\").text().trim().toLowerCase().replace(\" \", \"-\");\n    colors[color] = {};\n\n    $(this).find(\".color\").not(\".main-color\").each(function() {\n      var shade = $(this).find(\".shade\").text().trim(),\n          hex   = $(this).find(\".hex\").text().trim();\n\n      colors[color][shade] = hex;\n    });\n    main[color] = color + \"-\" + $(this).find(\".main-color .shade\").text().trim();\n\n  });\n  var LESS = \"\";\n  $.each(colors, function(name, shades) {\n    LESS += \"\\n\\n\";\n    $.each(shades, function(shade, hex) {\n      LESS += \"@\" + name + \"-\" + shade + \": \" + hex + \";\\n\";\n    });\n    if (main[name]) {\n      LESS += \"@\" + name + \": \" + main[name] + \";\\n\";\n    }\n  });\n  console.log(LESS);\n})();\n\n\n*/\n/* ANIMATION */\n/* SHADOWS */\n/* Shadows (from mdl http://www.getmdl.io/) */\nbody {\n  background-color: #EEEEEE;\n}\nbody.inverse {\n  background: #333333;\n}\nbody.inverse,\nbody.inverse .form-control {\n  color: rgba(255,255,255, 0.84);\n}\nbody.inverse .modal,\nbody.inverse .panel-default,\nbody.inverse .card,\nbody.inverse .modal .form-control,\nbody.inverse .panel-default .form-control,\nbody.inverse .card .form-control {\n  background-color: initial;\n  color: initial;\n}\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4 {\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  font-weight: 300;\n}\nh5,\nh6 {\n  font-weight: 400;\n}\na,\na:hover,\na:focus {\n  color: #009688;\n}\na .material-icons,\na:hover .material-icons,\na:focus .material-icons {\n  vertical-align: middle;\n}\nbody .container .well.well-sm,\nbody .container-fluid .well.well-sm {\n  padding: 10px;\n}\nbody .container .well.well-lg,\nbody .container-fluid .well.well-lg {\n  padding: 26px;\n}\nbody .container .well,\nbody .container-fluid .well,\nbody .container .jumbotron,\nbody .container-fluid .jumbotron {\n  background-color: #fff;\n  padding: 19px;\n  margin-bottom: 20px;\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 2px;\n  border: 0;\n}\nbody .container .well p,\nbody .container-fluid .well p,\nbody .container .jumbotron p,\nbody .container-fluid .jumbotron p {\n  font-weight: 300;\n}\nbody .container .well,\nbody .container-fluid .well,\nbody .container .jumbotron,\nbody .container-fluid .jumbotron,\nbody .container .well-default,\nbody .container-fluid .well-default,\nbody .container .jumbotron-default,\nbody .container-fluid .jumbotron-default {\n  background-color: #ffffff;\n}\nbody .container .well-inverse,\nbody .container-fluid .well-inverse,\nbody .container .jumbotron-inverse,\nbody .container-fluid .jumbotron-inverse {\n  background-color: #3f51b5;\n}\nbody .container .well-primary,\nbody .container-fluid .well-primary,\nbody .container .jumbotron-primary,\nbody .container-fluid .jumbotron-primary {\n  background-color: #009688;\n}\nbody .container .well-success,\nbody .container-fluid .well-success,\nbody .container .jumbotron-success,\nbody .container-fluid .jumbotron-success {\n  background-color: #4caf50;\n}\nbody .container .well-info,\nbody .container-fluid .well-info,\nbody .container .jumbotron-info,\nbody .container-fluid .jumbotron-info {\n  background-color: #03a9f4;\n}\nbody .container .well-warning,\nbody .container-fluid .well-warning,\nbody .container .jumbotron-warning,\nbody .container-fluid .jumbotron-warning {\n  background-color: #ff5722;\n}\nbody .container .well-danger,\nbody .container-fluid .well-danger,\nbody .container .jumbotron-danger,\nbody .container-fluid .jumbotron-danger {\n  background-color: #f44336;\n}\n.btn,\n.input-group-btn .btn {\n  border: none;\n  border-radius: 2px;\n  position: relative;\n  padding: 8px 30px;\n  margin: 10px 1px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0;\n  will-change: box-shadow, transform;\n  -webkit-transition: -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n          -webkit-transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n          transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  background: transparent;\n}\n.btn::-moz-focus-inner,\n.input-group-btn .btn::-moz-focus-inner {\n  border: 0;\n}\n.btn:not(.btn-raised),\n.input-group-btn .btn:not(.btn-raised) {\n  box-shadow: none;\n}\n.btn:not(.btn-raised),\n.input-group-btn .btn:not(.btn-raised),\n.btn:not(.btn-raised).btn-default,\n.input-group-btn .btn:not(.btn-raised).btn-default {\n  color: rgba(0,0,0, 0.87);\n}\n.btn:not(.btn-raised).btn-inverse,\n.input-group-btn .btn:not(.btn-raised).btn-inverse {\n  color: #3f51b5;\n}\n.btn:not(.btn-raised).btn-primary,\n.input-group-btn .btn:not(.btn-raised).btn-primary {\n  color: #009688;\n}\n.btn:not(.btn-raised).btn-success,\n.input-group-btn .btn:not(.btn-raised).btn-success {\n  color: #4caf50;\n}\n.btn:not(.btn-raised).btn-info,\n.input-group-btn .btn:not(.btn-raised).btn-info {\n  color: #03a9f4;\n}\n.btn:not(.btn-raised).btn-warning,\n.input-group-btn .btn:not(.btn-raised).btn-warning {\n  color: #ff5722;\n}\n.btn:not(.btn-raised).btn-danger,\n.input-group-btn .btn:not(.btn-raised).btn-danger {\n  color: #f44336;\n}\n.btn:not(.btn-raised):not(.btn-link):hover,\n.input-group-btn .btn:not(.btn-raised):not(.btn-link):hover,\n.btn:not(.btn-raised):not(.btn-link):focus,\n.input-group-btn .btn:not(.btn-raised):not(.btn-link):focus {\n  background-color: rgba(153, 153, 153, 0.2);\n}\n.theme-dark .btn:not(.btn-raised):not(.btn-link):hover,\n.theme-dark .input-group-btn .btn:not(.btn-raised):not(.btn-link):hover,\n.theme-dark .btn:not(.btn-raised):not(.btn-link):focus,\n.theme-dark .input-group-btn .btn:not(.btn-raised):not(.btn-link):focus {\n  background-color: rgba(204, 204, 204, 0.15);\n}\n.btn.btn-raised,\n.input-group-btn .btn.btn-raised,\n.btn.btn-fab,\n.input-group-btn .btn.btn-fab,\n.btn.btn-raised.btn-default,\n.input-group-btn .btn.btn-raised.btn-default,\n.btn.btn-fab.btn-default,\n.input-group-btn .btn.btn-fab.btn-default {\n  background-color: transparent;\n  color: rgba(0,0,0, 0.87);\n}\n.btn.btn-raised.btn-inverse,\n.input-group-btn .btn.btn-raised.btn-inverse,\n.btn.btn-fab.btn-inverse,\n.input-group-btn .btn.btn-fab.btn-inverse {\n  background-color: #3f51b5;\n  color: #ffffff;\n}\n.btn.btn-raised.btn-primary,\n.input-group-btn .btn.btn-raised.btn-primary,\n.btn.btn-fab.btn-primary,\n.input-group-btn .btn.btn-fab.btn-primary {\n  background-color: #009688;\n  color: rgba(255,255,255, 0.84);\n}\n.btn.btn-raised.btn-success,\n.input-group-btn .btn.btn-raised.btn-success,\n.btn.btn-fab.btn-success,\n.input-group-btn .btn.btn-fab.btn-success {\n  background-color: #4caf50;\n  color: rgba(255,255,255, 0.84);\n}\n.btn.btn-raised.btn-info,\n.input-group-btn .btn.btn-raised.btn-info,\n.btn.btn-fab.btn-info,\n.input-group-btn .btn.btn-fab.btn-info {\n  background-color: #03a9f4;\n  color: rgba(255,255,255, 0.84);\n}\n.btn.btn-raised.btn-warning,\n.input-group-btn .btn.btn-raised.btn-warning,\n.btn.btn-fab.btn-warning,\n.input-group-btn .btn.btn-fab.btn-warning {\n  background-color: #ff5722;\n  color: rgba(255,255,255, 0.84);\n}\n.btn.btn-raised.btn-danger,\n.input-group-btn .btn.btn-raised.btn-danger,\n.btn.btn-fab.btn-danger,\n.input-group-btn .btn.btn-fab.btn-danger {\n  background-color: #f44336;\n  color: rgba(255,255,255, 0.84);\n}\n.btn.btn-raised:not(.btn-link),\n.input-group-btn .btn.btn-raised:not(.btn-link) {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.btn.btn-raised:not(.btn-link).active,\n.input-group-btn .btn.btn-raised:not(.btn-link).active,\n.btn.btn-raised:not(.btn-link):active,\n.input-group-btn .btn.btn-raised:not(.btn-link):active {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n}\n.btn.btn-raised:not(.btn-link):focus:not(:active),\n.input-group-btn .btn.btn-raised:not(.btn-link):focus:not(:active) {\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.18), 0 8px 16px rgba(0, 0, 0, 0.36);\n}\n.btn.btn-fab,\n.input-group-btn .btn.btn-fab {\n  border-radius: 50%;\n  font-size: 24px;\n  height: 56px;\n  margin: auto;\n  min-width: 56px;\n  width: 56px;\n  padding: 0;\n  overflow: hidden;\n  box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);\n  position: relative;\n  line-height: normal;\n}\n.btn.btn-fab .ripple-container,\n.input-group-btn .btn.btn-fab .ripple-container {\n  border-radius: 50%;\n}\n.btn.btn-fab.btn-fab-mini,\n.input-group-btn .btn.btn-fab.btn-fab-mini,\n.btn-group-sm .btn.btn-fab,\n.btn-group-sm .input-group-btn .btn.btn-fab {\n  height: 40px;\n  min-width: 40px;\n  width: 40px;\n}\n.btn.btn-fab.btn-fab-mini.material-icons,\n.input-group-btn .btn.btn-fab.btn-fab-mini.material-icons,\n.btn-group-sm .btn.btn-fab.material-icons,\n.btn-group-sm .input-group-btn .btn.btn-fab.material-icons {\n  top: 0px;\n  left: 0px;\n}\n.btn.btn-fab i.material-icons,\n.input-group-btn .btn.btn-fab i.material-icons {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-12px, -12px);\n          transform: translate(-12px, -12px);\n  line-height: 24px;\n  width: 24px;\n}\n.btn i.material-icons,\n.input-group-btn .btn i.material-icons {\n  vertical-align: middle;\n}\n.btn.btn-lg,\n.input-group-btn .btn.btn-lg,\n.btn-group-lg .btn,\n.btn-group-lg .input-group-btn .btn {\n  font-size: 16px;\n}\n.btn.btn-sm,\n.input-group-btn .btn.btn-sm,\n.btn-group-sm .btn,\n.btn-group-sm .input-group-btn .btn {\n  padding: 5px 20px;\n  font-size: 12px;\n}\n.btn.btn-xs,\n.input-group-btn .btn.btn-xs,\n.btn-group-xs .btn,\n.btn-group-xs .input-group-btn .btn {\n  padding: 4px 15px;\n  font-size: 10px;\n}\nfieldset[disabled][disabled] .btn,\nfieldset[disabled][disabled] .input-group-btn .btn,\nfieldset[disabled][disabled] .btn-group,\nfieldset[disabled][disabled] .btn-group-vertical,\n.btn.disabled,\n.input-group-btn .btn.disabled,\n.btn-group.disabled,\n.btn-group-vertical.disabled,\n.btn:disabled,\n.input-group-btn .btn:disabled,\n.btn-group:disabled,\n.btn-group-vertical:disabled,\n.btn[disabled][disabled],\n.input-group-btn .btn[disabled][disabled],\n.btn-group[disabled][disabled],\n.btn-group-vertical[disabled][disabled] {\n  color: rgba(0, 0, 0, 0.26);\n  background: transparent;\n}\n.theme-dark fieldset[disabled][disabled] .btn,\n.theme-dark fieldset[disabled][disabled] .input-group-btn .btn,\n.theme-dark fieldset[disabled][disabled] .btn-group,\n.theme-dark fieldset[disabled][disabled] .btn-group-vertical,\n.theme-dark .btn.disabled,\n.theme-dark .input-group-btn .btn.disabled,\n.theme-dark .btn-group.disabled,\n.theme-dark .btn-group-vertical.disabled,\n.theme-dark .btn:disabled,\n.theme-dark .input-group-btn .btn:disabled,\n.theme-dark .btn-group:disabled,\n.theme-dark .btn-group-vertical:disabled,\n.theme-dark .btn[disabled][disabled],\n.theme-dark .input-group-btn .btn[disabled][disabled],\n.theme-dark .btn-group[disabled][disabled],\n.theme-dark .btn-group-vertical[disabled][disabled] {\n  color: rgba(255, 255, 255, 0.3);\n}\nfieldset[disabled][disabled] .btn.btn-raised,\nfieldset[disabled][disabled] .input-group-btn .btn.btn-raised,\nfieldset[disabled][disabled] .btn-group.btn-raised,\nfieldset[disabled][disabled] .btn-group-vertical.btn-raised,\n.btn.disabled.btn-raised,\n.input-group-btn .btn.disabled.btn-raised,\n.btn-group.disabled.btn-raised,\n.btn-group-vertical.disabled.btn-raised,\n.btn:disabled.btn-raised,\n.input-group-btn .btn:disabled.btn-raised,\n.btn-group:disabled.btn-raised,\n.btn-group-vertical:disabled.btn-raised,\n.btn[disabled][disabled].btn-raised,\n.input-group-btn .btn[disabled][disabled].btn-raised,\n.btn-group[disabled][disabled].btn-raised,\n.btn-group-vertical[disabled][disabled].btn-raised,\nfieldset[disabled][disabled] .btn.btn-group-raised,\nfieldset[disabled][disabled] .input-group-btn .btn.btn-group-raised,\nfieldset[disabled][disabled] .btn-group.btn-group-raised,\nfieldset[disabled][disabled] .btn-group-vertical.btn-group-raised,\n.btn.disabled.btn-group-raised,\n.input-group-btn .btn.disabled.btn-group-raised,\n.btn-group.disabled.btn-group-raised,\n.btn-group-vertical.disabled.btn-group-raised,\n.btn:disabled.btn-group-raised,\n.input-group-btn .btn:disabled.btn-group-raised,\n.btn-group:disabled.btn-group-raised,\n.btn-group-vertical:disabled.btn-group-raised,\n.btn[disabled][disabled].btn-group-raised,\n.input-group-btn .btn[disabled][disabled].btn-group-raised,\n.btn-group[disabled][disabled].btn-group-raised,\n.btn-group-vertical[disabled][disabled].btn-group-raised,\nfieldset[disabled][disabled] .btn.btn-raised.active,\nfieldset[disabled][disabled] .input-group-btn .btn.btn-raised.active,\nfieldset[disabled][disabled] .btn-group.btn-raised.active,\nfieldset[disabled][disabled] .btn-group-vertical.btn-raised.active,\n.btn.disabled.btn-raised.active,\n.input-group-btn .btn.disabled.btn-raised.active,\n.btn-group.disabled.btn-raised.active,\n.btn-group-vertical.disabled.btn-raised.active,\n.btn:disabled.btn-raised.active,\n.input-group-btn .btn:disabled.btn-raised.active,\n.btn-group:disabled.btn-raised.active,\n.btn-group-vertical:disabled.btn-raised.active,\n.btn[disabled][disabled].btn-raised.active,\n.input-group-btn .btn[disabled][disabled].btn-raised.active,\n.btn-group[disabled][disabled].btn-raised.active,\n.btn-group-vertical[disabled][disabled].btn-raised.active,\nfieldset[disabled][disabled] .btn.btn-group-raised.active,\nfieldset[disabled][disabled] .input-group-btn .btn.btn-group-raised.active,\nfieldset[disabled][disabled] .btn-group.btn-group-raised.active,\nfieldset[disabled][disabled] .btn-group-vertical.btn-group-raised.active,\n.btn.disabled.btn-group-raised.active,\n.input-group-btn .btn.disabled.btn-group-raised.active,\n.btn-group.disabled.btn-group-raised.active,\n.btn-group-vertical.disabled.btn-group-raised.active,\n.btn:disabled.btn-group-raised.active,\n.input-group-btn .btn:disabled.btn-group-raised.active,\n.btn-group:disabled.btn-group-raised.active,\n.btn-group-vertical:disabled.btn-group-raised.active,\n.btn[disabled][disabled].btn-group-raised.active,\n.input-group-btn .btn[disabled][disabled].btn-group-raised.active,\n.btn-group[disabled][disabled].btn-group-raised.active,\n.btn-group-vertical[disabled][disabled].btn-group-raised.active,\nfieldset[disabled][disabled] .btn.btn-raised:active,\nfieldset[disabled][disabled] .input-group-btn .btn.btn-raised:active,\nfieldset[disabled][disabled] .btn-group.btn-raised:active,\nfieldset[disabled][disabled] .btn-group-vertical.btn-raised:active,\n.btn.disabled.btn-raised:active,\n.input-group-btn .btn.disabled.btn-raised:active,\n.btn-group.disabled.btn-raised:active,\n.btn-group-vertical.disabled.btn-raised:active,\n.btn:disabled.btn-raised:active,\n.input-group-btn .btn:disabled.btn-raised:active,\n.btn-group:disabled.btn-raised:active,\n.btn-group-vertical:disabled.btn-raised:active,\n.btn[disabled][disabled].btn-raised:active,\n.input-group-btn .btn[disabled][disabled].btn-raised:active,\n.btn-group[disabled][disabled].btn-raised:active,\n.btn-group-vertical[disabled][disabled].btn-raised:active,\nfieldset[disabled][disabled] .btn.btn-group-raised:active,\nfieldset[disabled][disabled] .input-group-btn .btn.btn-group-raised:active,\nfieldset[disabled][disabled] .btn-group.btn-group-raised:active,\nfieldset[disabled][disabled] .btn-group-vertical.btn-group-raised:active,\n.btn.disabled.btn-group-raised:active,\n.input-group-btn .btn.disabled.btn-group-raised:active,\n.btn-group.disabled.btn-group-raised:active,\n.btn-group-vertical.disabled.btn-group-raised:active,\n.btn:disabled.btn-group-raised:active,\n.input-group-btn .btn:disabled.btn-group-raised:active,\n.btn-group:disabled.btn-group-raised:active,\n.btn-group-vertical:disabled.btn-group-raised:active,\n.btn[disabled][disabled].btn-group-raised:active,\n.input-group-btn .btn[disabled][disabled].btn-group-raised:active,\n.btn-group[disabled][disabled].btn-group-raised:active,\n.btn-group-vertical[disabled][disabled].btn-group-raised:active,\nfieldset[disabled][disabled] .btn.btn-raised:focus:not(:active),\nfieldset[disabled][disabled] .input-group-btn .btn.btn-raised:focus:not(:active),\nfieldset[disabled][disabled] .btn-group.btn-raised:focus:not(:active),\nfieldset[disabled][disabled] .btn-group-vertical.btn-raised:focus:not(:active),\n.btn.disabled.btn-raised:focus:not(:active),\n.input-group-btn .btn.disabled.btn-raised:focus:not(:active),\n.btn-group.disabled.btn-raised:focus:not(:active),\n.btn-group-vertical.disabled.btn-raised:focus:not(:active),\n.btn:disabled.btn-raised:focus:not(:active),\n.input-group-btn .btn:disabled.btn-raised:focus:not(:active),\n.btn-group:disabled.btn-raised:focus:not(:active),\n.btn-group-vertical:disabled.btn-raised:focus:not(:active),\n.btn[disabled][disabled].btn-raised:focus:not(:active),\n.input-group-btn .btn[disabled][disabled].btn-raised:focus:not(:active),\n.btn-group[disabled][disabled].btn-raised:focus:not(:active),\n.btn-group-vertical[disabled][disabled].btn-raised:focus:not(:active),\nfieldset[disabled][disabled] .btn.btn-group-raised:focus:not(:active),\nfieldset[disabled][disabled] .input-group-btn .btn.btn-group-raised:focus:not(:active),\nfieldset[disabled][disabled] .btn-group.btn-group-raised:focus:not(:active),\nfieldset[disabled][disabled] .btn-group-vertical.btn-group-raised:focus:not(:active),\n.btn.disabled.btn-group-raised:focus:not(:active),\n.input-group-btn .btn.disabled.btn-group-raised:focus:not(:active),\n.btn-group.disabled.btn-group-raised:focus:not(:active),\n.btn-group-vertical.disabled.btn-group-raised:focus:not(:active),\n.btn:disabled.btn-group-raised:focus:not(:active),\n.input-group-btn .btn:disabled.btn-group-raised:focus:not(:active),\n.btn-group:disabled.btn-group-raised:focus:not(:active),\n.btn-group-vertical:disabled.btn-group-raised:focus:not(:active),\n.btn[disabled][disabled].btn-group-raised:focus:not(:active),\n.input-group-btn .btn[disabled][disabled].btn-group-raised:focus:not(:active),\n.btn-group[disabled][disabled].btn-group-raised:focus:not(:active),\n.btn-group-vertical[disabled][disabled].btn-group-raised:focus:not(:active) {\n  box-shadow: none;\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  margin: 10px 1px;\n}\n.btn-group.open > .dropdown-toggle.btn,\n.btn-group-vertical.open > .dropdown-toggle.btn,\n.btn-group.open > .dropdown-toggle.btn.btn-default,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-default {\n  background-color: transparent;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-inverse,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-inverse {\n  background-color: #3f51b5;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-primary,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-primary {\n  background-color: #009688;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-success,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-success {\n  background-color: #4caf50;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-info,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-info {\n  background-color: #03a9f4;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-warning,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-warning {\n  background-color: #ff5722;\n}\n.btn-group.open > .dropdown-toggle.btn.btn-danger,\n.btn-group-vertical.open > .dropdown-toggle.btn.btn-danger {\n  background-color: #f44336;\n}\n.btn-group .dropdown-menu,\n.btn-group-vertical .dropdown-menu {\n  border-radius: 0 0 2px 2px;\n}\n.btn-group.btn-group-raised,\n.btn-group-vertical.btn-group-raised {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.btn-group .btn + .btn,\n.btn-group-vertical .btn + .btn,\n.btn-group .btn,\n.btn-group-vertical .btn,\n.btn-group .btn:active,\n.btn-group-vertical .btn:active,\n.btn-group .btn-group,\n.btn-group-vertical .btn-group {\n  margin: 0;\n}\n.checkbox label {\n  cursor: pointer;\n  padding-left: 0;\n  color: rgba(0, 0, 0, 0.54);\n}\n.checkbox input[type=checkbox] {\n  opacity: 0;\n  position: absolute;\n  margin: 0;\n  z-index: -1;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  left: 0;\n  pointer-events: none;\n}\n.checkbox .checkbox-material {\n  vertical-align: middle;\n  position: relative;\n  top: 3px;\n}\n.checkbox .checkbox-material:before {\n  display: block;\n  position: absolute;\n  left: 0;\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0.84);\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  z-index: 1;\n  opacity: 0;\n  margin: 0;\n  -webkit-transform: scale3d(2.3, 2.3, 1);\n          transform: scale3d(2.3, 2.3, 1);\n}\n.checkbox .checkbox-material .check {\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border: 2px solid rgba(0, 0, 0, 0.54);\n  overflow: hidden;\n  z-index: 1;\n}\n.checkbox .checkbox-material .check:before {\n  position: absolute;\n  content: \"\";\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  display: block;\n  margin-top: -4px;\n  margin-left: 6px;\n  width: 0;\n  height: 0;\n  box-shadow: 0 0 0 0,\n        0 0 0 0,\n        0 0 0 0,\n        0 0 0 0,\n        0 0 0 0,\n        0 0 0 0,\n        0 0 0 0 inset;\n  -webkit-animation: checkbox-off 0.3s forwards;\n          animation: checkbox-off 0.3s forwards;\n}\n.checkbox input[type=checkbox]:focus + .checkbox-material .check:after {\n  opacity: 0.2;\n}\n.checkbox input[type=checkbox]:checked + .checkbox-material .check {\n  color: #4caf50;\n  border-color: #4caf50;\n}\n.checkbox input[type=checkbox]:checked + .checkbox-material .check:before {\n  color: #4caf50;\n  box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\n  -webkit-animation: checkbox-on 0.3s forwards;\n          animation: checkbox-on 0.3s forwards;\n}\n.checkbox input[type=checkbox]:checked + .checkbox-material:before {\n  -webkit-animation: rippleOn 500ms;\n          animation: rippleOn 500ms;\n}\n.checkbox input[type=checkbox]:checked + .checkbox-material .check:after {\n  -webkit-animation: rippleOn 500ms forwards;\n          animation: rippleOn 500ms forwards;\n}\n.checkbox input[type=checkbox]:not(:checked) + .checkbox-material:before {\n  -webkit-animation: rippleOff 500ms;\n          animation: rippleOff 500ms;\n}\n.checkbox input[type=checkbox]:not(:checked) + .checkbox-material .check:after {\n  -webkit-animation: rippleOff 500ms forwards;\n          animation: rippleOff 500ms forwards;\n}\nfieldset[disabled] .checkbox,\nfieldset[disabled] .checkbox input[type=checkbox],\n.checkbox input[type=checkbox][disabled]:not(:checked) ~ .checkbox-material .check:before,\n.checkbox input[type=checkbox][disabled]:not(:checked) ~ .checkbox-material .check,\n.checkbox input[type=checkbox][disabled] + .circle {\n  opacity: 0.5;\n}\n.checkbox input[type=checkbox][disabled] + .checkbox-material .check:after {\n  background-color: rgba(0,0,0, 0.87);\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n@-webkit-keyframes checkbox-on {\n  0% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 15px 2px 0 11px;\n  }\n  50% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px 2px 0 11px;\n  }\n  100% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\n  }\n}\n@keyframes checkbox-on {\n  0% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 15px 2px 0 11px;\n  }\n  50% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px 2px 0 11px;\n  }\n  100% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;\n  }\n}\n@-webkit-keyframes checkbox-off {\n  0% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px, 0 0 0 0 inset;\n  }\n  25% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px, 0 0 0 0 inset;\n  }\n  50% {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    margin-top: -4px;\n    margin-left: 6px;\n    width: 0;\n    height: 0;\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 15px 2px 0 11px, 0 0 0 0 inset;\n  }\n  51% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    margin-top: -2px;\n    margin-left: -2px;\n    width: 20px;\n    height: 20px;\n    box-shadow: 0 0 0 0,\n      0 0 0 0,\n      0 0 0 0,\n      0 0 0 0,\n      0 0 0 0,\n      0 0 0 0,\n      0px 0 0 10px inset;\n  }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    margin-top: -2px;\n    margin-left: -2px;\n    width: 20px;\n    height: 20px;\n    box-shadow: 0 0 0 0,\n      0 0 0 0,\n      0 0 0 0,\n      0 0 0 0,\n      0 0 0 0,\n      0 0 0 0,\n      0px 0 0 0 inset;\n  }\n}\n@keyframes checkbox-off {\n  0% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px, 0 0 0 0 inset;\n  }\n  25% {\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px, 0 0 0 0 inset;\n  }\n  50% {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    margin-top: -4px;\n    margin-left: 6px;\n    width: 0;\n    height: 0;\n    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 15px 2px 0 11px, 0 0 0 0 inset;\n  }\n  51% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    margin-top: -2px;\n    margin-left: -2px;\n    width: 20px;\n    height: 20px;\n    box-shadow: 0 0 0 0,\n      0 0 0 0,\n      0 0 0 0,\n      0 0 0 0,\n      0 0 0 0,\n      0 0 0 0,\n      0px 0 0 10px inset;\n  }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    margin-top: -2px;\n    margin-left: -2px;\n    width: 20px;\n    height: 20px;\n    box-shadow: 0 0 0 0,\n      0 0 0 0,\n      0 0 0 0,\n      0 0 0 0,\n      0 0 0 0,\n      0 0 0 0,\n      0px 0 0 0 inset;\n  }\n}\n@-webkit-keyframes rippleOn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes rippleOn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes rippleOff {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes rippleOff {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.togglebutton {\n  vertical-align: middle;\n}\n.togglebutton,\n.togglebutton label,\n.togglebutton input,\n.togglebutton .toggle {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.togglebutton label {\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.54);\n}\n.togglebutton label input[type=checkbox] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.togglebutton label .toggle,\n.togglebutton label input[type=checkbox][disabled] + .toggle {\n  content: \"\";\n  display: inline-block;\n  width: 30px;\n  height: 15px;\n  background-color: rgba(80, 80, 80, 0.7);\n  border-radius: 15px;\n  margin-right: 15px;\n  -webkit-transition: background 0.3s ease;\n          transition: background 0.3s ease;\n  vertical-align: middle;\n}\n.togglebutton label .toggle:after {\n  content: \"\";\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background-color: #F1F1F1;\n  border-radius: 20px;\n  position: relative;\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);\n  left: -5px;\n  top: -2px;\n  -webkit-transition: left 0.3s ease, background 0.3s ease, -webkit-box-shadow 0.1s ease;\n          -webkit-transition: left 0.3s ease, background 0.3s ease, box-shadow 0.1s ease;\n          transition: left 0.3s ease, background 0.3s ease, box-shadow 0.1s ease;\n}\n.togglebutton label input[type=checkbox][disabled] + .toggle:after,\n.togglebutton label input[type=checkbox][disabled]:checked + .toggle:after {\n  background-color: #BDBDBD;\n}\n.togglebutton label input[type=checkbox] + .toggle:active:after,\n.togglebutton label input[type=checkbox][disabled] + .toggle:active:after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 0, 0, 0.1);\n}\n.togglebutton label input[type=checkbox]:checked + .toggle:after {\n  left: 15px;\n}\n.togglebutton label label input[type=checkbox]:checked + .toggle {\n  background-color: rgba(0, 150, 136, 0.5);\n}\n.togglebutton label label input[type=checkbox]:checked + .toggle:after {\n  background-color: #009688;\n}\n.togglebutton label label input[type=checkbox]:checked + .toggle:active:after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 150, 136, 0.1);\n}\n.radio label {\n  cursor: pointer;\n  padding-left: 45px;\n  position: relative;\n  color: rgba(0, 0, 0, 0.54);\n}\n.radio label span {\n  display: block;\n  position: absolute;\n  left: 10px;\n  top: 2px;\n  -webkit-transition-duration: 0.2s;\n          transition-duration: 0.2s;\n}\n.radio label .circle {\n  border: 2px solid rgba(0, 0, 0, 0.54);\n  height: 15px;\n  width: 15px;\n  border-radius: 100%;\n}\n.radio label .check {\n  height: 15px;\n  width: 15px;\n  border-radius: 100%;\n  background-color: #009688;\n  -webkit-transform: scale3d(0, 0, 0);\n          transform: scale3d(0, 0, 0);\n}\n.radio label .check:after {\n  display: block;\n  position: absolute;\n  content: \"\";\n  background-color: rgba(0,0,0, 0.87);\n  left: -18px;\n  top: -18px;\n  height: 50px;\n  width: 50px;\n  border-radius: 100%;\n  z-index: 1;\n  opacity: 0;\n  margin: 0;\n  -webkit-transform: scale3d(1.5, 1.5, 1);\n          transform: scale3d(1.5, 1.5, 1);\n}\n.radio label input[type=radio]:not(:checked) ~ .check:after {\n  -webkit-animation: rippleOff 500ms;\n          animation: rippleOff 500ms;\n}\n.radio label input[type=radio]:checked ~ .check:after {\n  -webkit-animation: rippleOn 500ms;\n          animation: rippleOn 500ms;\n}\n.radio input[type=radio] {\n  opacity: 0;\n  height: 0;\n  width: 0;\n  overflow: hidden;\n}\n.radio input[type=radio]:checked ~ .check,\n.radio input[type=radio]:checked ~ .circle {\n  opacity: 1;\n}\n.radio input[type=radio]:checked ~ .check {\n  background-color: #009688;\n}\n.radio input[type=radio]:checked ~ .circle {\n  border-color: #009688;\n}\n.radio input[type=radio]:checked ~ .check {\n  -webkit-transform: scale3d(0.55, 0.55, 1);\n          transform: scale3d(0.55, 0.55, 1);\n}\n.radio input[type=radio][disabled] ~ .check,\n.radio input[type=radio][disabled] ~ .circle {\n  opacity: 0.26;\n}\n.radio input[type=radio][disabled] ~ .check {\n  background-color: #000000;\n}\n.radio input[type=radio][disabled] ~ .circle {\n  border-color: #000000;\n}\n.theme-dark .radio input[type=radio][disabled] ~ .check,\n.theme-dark .radio input[type=radio][disabled] ~ .circle {\n  opacity: 0.3;\n}\n.theme-dark .radio input[type=radio][disabled] ~ .check {\n  background-color: #ffffff;\n}\n.theme-dark .radio input[type=radio][disabled] ~ .circle {\n  border-color: #ffffff;\n}\n@keyframes rippleOn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes rippleOff {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0;\n  }\n}\nlegend {\n  margin-bottom: 22px;\n  font-size: 24px;\n}\noutput {\n  padding-top: 8px;\n  font-size: 16px;\n  line-height: 1.42857143;\n}\n.form-control {\n  height: 38px;\n  padding: 7px 0;\n  font-size: 16px;\n  line-height: 1.42857143;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 38px;\n  }\n  input[type=\"date\"].input-sm,\n  input[type=\"time\"].input-sm,\n  input[type=\"datetime-local\"].input-sm,\n  input[type=\"month\"].input-sm,\n  .input-group-sm input[type=\"date\"],\n  .input-group-sm input[type=\"time\"],\n  .input-group-sm input[type=\"datetime-local\"],\n  .input-group-sm input[type=\"month\"] {\n    line-height: 24px;\n  }\n  input[type=\"date\"].input-lg,\n  input[type=\"time\"].input-lg,\n  input[type=\"datetime-local\"].input-lg,\n  input[type=\"month\"].input-lg,\n  .input-group-lg input[type=\"date\"],\n  .input-group-lg input[type=\"time\"],\n  .input-group-lg input[type=\"datetime-local\"],\n  .input-group-lg input[type=\"month\"] {\n    line-height: 44px;\n  }\n}\n.radio label,\n.checkbox label {\n  min-height: 22px;\n}\n.form-control-static {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  min-height: 38px;\n}\n.input-sm .input-sm {\n  height: 24px;\n  padding: 3px 0;\n  font-size: 11px;\n  line-height: 1.5;\n  border-radius: 0;\n}\n.input-sm select.input-sm {\n  height: 24px;\n  line-height: 24px;\n}\n.input-sm textarea.input-sm,\n.input-sm select[multiple].input-sm {\n  height: auto;\n}\n.form-group-sm .form-control {\n  height: 24px;\n  padding: 3px 0;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.form-group-sm select.form-control {\n  height: 24px;\n  line-height: 24px;\n}\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n.form-group-sm .form-control-static {\n  height: 24px;\n  min-height: 33px;\n  padding: 4px 0;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.input-lg .input-lg {\n  height: 44px;\n  padding: 9px 0;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0;\n}\n.input-lg select.input-lg {\n  height: 44px;\n  line-height: 44px;\n}\n.input-lg textarea.input-lg,\n.input-lg select[multiple].input-lg {\n  height: auto;\n}\n.form-group-lg .form-control {\n  height: 44px;\n  padding: 9px 0;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.form-group-lg select.form-control {\n  height: 44px;\n  line-height: 44px;\n}\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n.form-group-lg .form-control-static {\n  height: 44px;\n  min-height: 40px;\n  padding: 10px 0;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 8px;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 30px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    padding-top: 8px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 12.9999997px;\n    font-size: 18px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 4px;\n    font-size: 11px;\n  }\n}\n.label {\n  border-radius: 1px;\n}\n.label,\n.label.label-default {\n  background-color: #9e9e9e;\n}\n.label.label-inverse {\n  background-color: #3f51b5;\n}\n.label.label-primary {\n  background-color: #009688;\n}\n.label.label-success {\n  background-color: #4caf50;\n}\n.label.label-info {\n  background-color: #03a9f4;\n}\n.label.label-warning {\n  background-color: #ff5722;\n}\n.label.label-danger {\n  background-color: #f44336;\n}\n.form-control,\n.form-group .form-control {\n  border: 0;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#009688, #009688), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 0 2px, 100% 1px;\n  background-repeat: no-repeat;\n  background-position: center bottom, center calc(100% - 1px);\n  background-color: rgba(0, 0, 0, 0);\n  -webkit-transition: background 0s ease-out;\n          transition: background 0s ease-out;\n  float: none;\n  box-shadow: none;\n  border-radius: 0;\n}\n.form-control::-moz-placeholder,\n.form-group .form-control::-moz-placeholder {\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-control:-ms-input-placeholder,\n.form-group .form-control:-ms-input-placeholder {\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-control::-webkit-input-placeholder,\n.form-group .form-control::-webkit-input-placeholder {\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-control[readonly],\n.form-group .form-control[readonly],\n.form-control[disabled],\n.form-group .form-control[disabled],\nfieldset[disabled] .form-control,\nfieldset[disabled] .form-group .form-control {\n  background-color: rgba(0, 0, 0, 0);\n}\n.form-control[disabled],\n.form-group .form-control[disabled],\nfieldset[disabled] .form-control,\nfieldset[disabled] .form-group .form-control {\n  background-image: none;\n  border-bottom: 1px dotted #D2D2D2;\n}\n.form-group {\n  position: relative;\n}\n.form-group.label-static label.control-label,\n.form-group.label-placeholder label.control-label,\n.form-group.label-floating label.control-label {\n  position: absolute;\n  pointer-events: none;\n  -webkit-transition: 0.3s ease all;\n          transition: 0.3s ease all;\n}\n.form-group.label-floating label.control-label {\n  will-change: left, top, contents;\n}\n.form-group.label-placeholder:not(.is-empty) label.control-label {\n  display: none;\n}\n.form-group .help-block {\n  position: absolute;\n  display: none;\n}\n.form-group.is-focused .form-control {\n  outline: none;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#009688, #009688), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 100% 2px, 100% 1px;\n  box-shadow: none;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n}\n.form-group.is-focused .form-control .material-input:after {\n  background-color: #009688;\n}\n.form-group.is-focused label,\n.form-group.is-focused label.control-label {\n  color: #009688;\n}\n.form-group.is-focused.label-placeholder label,\n.form-group.is-focused.label-placeholder label.control-label {\n  color: #BDBDBD;\n}\n.form-group.is-focused .help-block {\n  display: block;\n}\n.form-group.has-warning .form-control {\n  box-shadow: none;\n}\n.form-group.has-warning.is-focused .form-control {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#ff5722), to(#ff5722)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#ff5722, #ff5722), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#ff5722, #ff5722), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-warning label.control-label,\n.form-group.has-warning .help-block {\n  color: #ff5722;\n}\n.form-group.has-error .form-control {\n  box-shadow: none;\n}\n.form-group.has-error.is-focused .form-control {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#f44336), to(#f44336)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#f44336, #f44336), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#f44336, #f44336), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-error label.control-label,\n.form-group.has-error .help-block {\n  color: #f44336;\n}\n.form-group.has-success .form-control {\n  box-shadow: none;\n}\n.form-group.has-success.is-focused .form-control {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#4caf50), to(#4caf50)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#4caf50, #4caf50), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-success label.control-label,\n.form-group.has-success .help-block {\n  color: #4caf50;\n}\n.form-group.has-info .form-control {\n  box-shadow: none;\n}\n.form-group.has-info.is-focused .form-control {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#03a9f4), to(#03a9f4)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#03a9f4, #03a9f4), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#03a9f4, #03a9f4), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-info label.control-label,\n.form-group.has-info .help-block {\n  color: #03a9f4;\n}\n.form-group textarea {\n  resize: none;\n}\n.form-group textarea ~ .form-control-highlight {\n  margin-top: -11px;\n}\n.form-group select {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.form-group select ~ .material-input:after {\n  display: none;\n}\n.form-control {\n  margin-bottom: 7px;\n}\n.form-control::-moz-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-control:-ms-input-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-control::-webkit-input-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.checkbox label,\n.radio label,\nlabel {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\nlabel.control-label {\n  font-size: 12px;\n  line-height: 1.07142857;\n  color: #BDBDBD;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.help-block {\n  margin-top: 0;\n  font-size: 12px;\n}\n.form-group {\n  padding-bottom: 7px;\n  margin: 28px 0 0 0;\n}\n.form-group .form-control {\n  margin-bottom: 7px;\n}\n.form-group .form-control::-moz-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group .form-control:-ms-input-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group .form-control::-webkit-input-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group .checkbox label,\n.form-group .radio label,\n.form-group label {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group label.control-label {\n  font-size: 12px;\n  line-height: 1.07142857;\n  color: #BDBDBD;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group .help-block {\n  margin-top: 0;\n  font-size: 12px;\n}\n.form-group.label-floating label.control-label,\n.form-group.label-placeholder label.control-label {\n  top: -7px;\n  font-size: 16px;\n  line-height: 1.42857143;\n}\n.form-group.label-static label.control-label,\n.form-group.label-floating.is-focused label.control-label,\n.form-group.label-floating:not(.is-empty) label.control-label {\n  top: -30px;\n  left: 0;\n  font-size: 12px;\n  line-height: 1.07142857;\n}\n.form-group.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -30px;\n  left: 0;\n  font-size: 12px;\n  line-height: 1.07142857;\n}\n.form-group.form-group-sm {\n  padding-bottom: 3px;\n  margin: 21px 0 0 0;\n}\n.form-group.form-group-sm .form-control {\n  margin-bottom: 3px;\n}\n.form-group.form-group-sm .form-control::-moz-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-sm .form-control:-ms-input-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-sm .form-control::-webkit-input-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-sm .checkbox label,\n.form-group.form-group-sm .radio label,\n.form-group.form-group-sm label {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-sm label.control-label {\n  font-size: 9px;\n  line-height: 1.125;\n  color: #BDBDBD;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group.form-group-sm .help-block {\n  margin-top: 0;\n  font-size: 9px;\n}\n.form-group.form-group-sm.label-floating label.control-label,\n.form-group.form-group-sm.label-placeholder label.control-label {\n  top: -11px;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.form-group.form-group-sm.label-static label.control-label,\n.form-group.form-group-sm.label-floating.is-focused label.control-label,\n.form-group.form-group-sm.label-floating:not(.is-empty) label.control-label {\n  top: -25px;\n  left: 0;\n  font-size: 9px;\n  line-height: 1.125;\n}\n.form-group.form-group-sm.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -25px;\n  left: 0;\n  font-size: 9px;\n  line-height: 1.125;\n}\n.form-group.form-group-lg {\n  padding-bottom: 9px;\n  margin: 30px 0 0 0;\n}\n.form-group.form-group-lg .form-control {\n  margin-bottom: 9px;\n}\n.form-group.form-group-lg .form-control::-moz-placeholder {\n  font-size: 18px;\n  line-height: 1.3333333;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-lg .form-control:-ms-input-placeholder {\n  font-size: 18px;\n  line-height: 1.3333333;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-lg .form-control::-webkit-input-placeholder {\n  font-size: 18px;\n  line-height: 1.3333333;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-lg .checkbox label,\n.form-group.form-group-lg .radio label,\n.form-group.form-group-lg label {\n  font-size: 18px;\n  line-height: 1.3333333;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-lg label.control-label {\n  font-size: 14px;\n  line-height: 0.99999998;\n  color: #BDBDBD;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group.form-group-lg .help-block {\n  margin-top: 0;\n  font-size: 14px;\n}\n.form-group.form-group-lg.label-floating label.control-label,\n.form-group.form-group-lg.label-placeholder label.control-label {\n  top: -5px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.form-group.form-group-lg.label-static label.control-label,\n.form-group.form-group-lg.label-floating.is-focused label.control-label,\n.form-group.form-group-lg.label-floating:not(.is-empty) label.control-label {\n  top: -32px;\n  left: 0;\n  font-size: 14px;\n  line-height: 0.99999998;\n}\n.form-group.form-group-lg.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -32px;\n  left: 0;\n  font-size: 14px;\n  line-height: 0.99999998;\n}\nselect.form-control {\n  border: 0;\n  box-shadow: none;\n  border-radius: 0;\n}\n.form-group.is-focused select.form-control {\n  box-shadow: none;\n  border-color: #D2D2D2;\n}\nselect.form-control[multiple],\n.form-group.is-focused select.form-control[multiple] {\n  height: 85px;\n}\n.input-group-btn .btn {\n  margin: 0 0 7px 0;\n}\n.form-group.form-group-sm .input-group-btn .btn {\n  margin: 0 0 3px 0;\n}\n.form-group.form-group-lg .input-group-btn .btn {\n  margin: 0 0 9px 0;\n}\n.input-group .input-group-btn {\n  padding: 0 12px;\n}\n.input-group .input-group-addon {\n  border: 0;\n  background: transparent;\n}\n.form-group input[type=file] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 0;\n}\n.form-horizontal .radio {\n  margin-bottom: 10px;\n}\n.form-horizontal label {\n  text-align: right;\n}\n.form-horizontal label.control-label {\n  margin: 0;\n}\nlegend {\n  border-bottom: 0;\n}\n.list-group {\n  border-radius: 0;\n}\n.list-group .list-group-item {\n  background-color: transparent;\n  overflow: hidden;\n  border: 0;\n  border-radius: 0;\n  padding: 0 16px;\n}\n.list-group .list-group-item.baseline {\n  border-bottom: 1px solid #cecece;\n}\n.list-group .list-group-item.baseline:last-child {\n  border-bottom: none;\n}\n.list-group .list-group-item .row-picture,\n.list-group .list-group-item .row-action-primary {\n  display: inline-block;\n  padding-right: 16px;\n}\n.list-group .list-group-item .row-picture img,\n.list-group .list-group-item .row-action-primary img,\n.list-group .list-group-item .row-picture i,\n.list-group .list-group-item .row-action-primary i,\n.list-group .list-group-item .row-picture label,\n.list-group .list-group-item .row-action-primary label {\n  display: block;\n  width: 56px;\n  height: 56px;\n}\n.list-group .list-group-item .row-picture img,\n.list-group .list-group-item .row-action-primary img {\n  background: rgba(0, 0, 0, 0.1);\n  padding: 1px;\n}\n.list-group .list-group-item .row-picture img.circle,\n.list-group .list-group-item .row-action-primary img.circle {\n  border-radius: 100%;\n}\n.list-group .list-group-item .row-picture i,\n.list-group .list-group-item .row-action-primary i {\n  background: rgba(0, 0, 0, 0.25);\n  border-radius: 100%;\n  text-align: center;\n  line-height: 56px;\n  font-size: 20px;\n  color: white;\n}\n.list-group .list-group-item .row-picture label,\n.list-group .list-group-item .row-action-primary label {\n  margin-left: 7px;\n  margin-right: -7px;\n  margin-top: 5px;\n  margin-bottom: -5px;\n}\n.list-group .list-group-item .row-picture label .checkbox-material,\n.list-group .list-group-item .row-action-primary label .checkbox-material {\n  left: -10px;\n}\n.list-group .list-group-item .row-content {\n  display: inline-block;\n  width: calc(100% - 92px);\n  min-height: 66px;\n}\n.list-group .list-group-item .row-content .action-secondary {\n  position: absolute;\n  right: 16px;\n  top: 16px;\n}\n.list-group .list-group-item .row-content .action-secondary i {\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n}\n.list-group .list-group-item .row-content .action-secondary ~ * {\n  max-width: calc(100% - 30px);\n}\n.list-group .list-group-item .row-content .least-content {\n  position: absolute;\n  right: 16px;\n  top: 0;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px;\n}\n.list-group .list-group-item .list-group-item-heading {\n  color: rgba(0, 0, 0, 0.77);\n  font-size: 20px;\n  line-height: 29px;\n}\n.list-group .list-group-item.active:hover,\n.list-group .list-group-item.active:focus {\n  background: rgba(0, 0, 0, 0.15);\n  outline: 10px solid rgba(0, 0, 0, 0.15);\n}\n.list-group .list-group-item.active .list-group-item-heading,\n.list-group .list-group-item.active .list-group-item-text {\n  color: rgba(0,0,0, 0.87);\n}\n.list-group .list-group-separator {\n  clear: both;\n  overflow: hidden;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.list-group .list-group-separator:before {\n  content: \"\";\n  width: calc(100% - 90px);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  float: right;\n}\n.navbar {\n  background-color: #009688;\n  border: 0;\n  border-radius: 0;\n}\n.navbar .navbar-brand {\n  position: relative;\n  height: 60px;\n  line-height: 30px;\n  color: inherit;\n}\n.navbar .navbar-brand:hover,\n.navbar .navbar-brand:focus {\n  color: inherit;\n  background-color: transparent;\n}\n.navbar .navbar-text {\n  color: inherit;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.navbar .navbar-nav > li > a {\n  color: inherit;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.navbar .navbar-nav > li > a:hover,\n.navbar .navbar-nav > li > a:focus {\n  color: inherit;\n  background-color: transparent;\n}\n.navbar .navbar-nav > .active > a,\n.navbar .navbar-nav > .active > a:hover,\n.navbar .navbar-nav > .active > a:focus {\n  color: inherit;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.navbar .navbar-nav > .disabled > a,\n.navbar .navbar-nav > .disabled > a:hover,\n.navbar .navbar-nav > .disabled > a:focus {\n  color: inherit;\n  background-color: transparent;\n  opacity: 0.9;\n}\n.navbar .navbar-toggle {\n  border: 0;\n}\n.navbar .navbar-toggle:hover,\n.navbar .navbar-toggle:focus {\n  background-color: transparent;\n}\n.navbar .navbar-toggle .icon-bar {\n  background-color: inherit;\n  border: 1px solid;\n}\n.navbar .navbar-default .navbar-toggle,\n.navbar .navbar-inverse .navbar-toggle {\n  border-color: transparent;\n}\n.navbar .navbar-collapse,\n.navbar .navbar-form {\n  border-color: rgba(0, 0, 0, 0.1);\n}\n.navbar .navbar-nav > .open > a,\n.navbar .navbar-nav > .open > a:hover,\n.navbar .navbar-nav > .open > a:focus {\n  background-color: transparent;\n  color: inherit;\n}\n@media (max-width: 767px) {\n  .navbar .navbar-nav .navbar-text {\n    color: inherit;\n    margin-top: 15px;\n    margin-bottom: 15px;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border: 0;\n    color: inherit;\n  }\n  .navbar .navbar-nav .open .dropdown-menu .divider {\n    border-bottom: 1px solid;\n    opacity: 0.08;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > li > a {\n    color: inherit;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: inherit;\n    background-color: transparent;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: inherit;\n    background-color: transparent;\n  }\n  .navbar .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: inherit;\n    background-color: transparent;\n  }\n}\n.navbar .navbar-link {\n  color: inherit;\n}\n.navbar .navbar-link:hover {\n  color: inherit;\n}\n.navbar .btn-link {\n  color: inherit;\n}\n.navbar .btn-link:hover,\n.navbar .btn-link:focus {\n  color: inherit;\n}\n.navbar .btn-link[disabled]:hover,\nfieldset[disabled] .navbar .btn-link:hover,\n.navbar .btn-link[disabled]:focus,\nfieldset[disabled] .navbar .btn-link:focus {\n  color: inherit;\n}\n.navbar .navbar-form {\n  margin-top: 16px;\n}\n.navbar .navbar-form .form-group {\n  margin: 0;\n  padding: 0;\n}\n.navbar .navbar-form .form-group .material-input:before,\n.navbar .navbar-form .form-group.is-focused .material-input:after {\n  background-color: inherit;\n}\n.navbar .navbar-form .form-group .form-control,\n.navbar .navbar-form .form-control {\n  border-color: inherit;\n  color: inherit;\n  padding: 0;\n  margin: 0;\n  height: 28px;\n  font-size: 14px;\n  line-height: 1.42857143;\n}\n.navbar,\n.navbar.navbar-default {\n  background-color: #009688;\n  color: rgba(255,255,255, 0.84);\n}\n.navbar .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-default .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar .navbar-form input.form-control::-moz-placeholder,\n.navbar.navbar-default .navbar-form input.form-control::-moz-placeholder {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-default .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar .navbar-form input.form-control:-ms-input-placeholder,\n.navbar.navbar-default .navbar-form input.form-control:-ms-input-placeholder {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-default .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar .navbar-form input.form-control::-webkit-input-placeholder,\n.navbar.navbar-default .navbar-form input.form-control::-webkit-input-placeholder {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar .dropdown-menu,\n.navbar.navbar-default .dropdown-menu {\n  border-radius: 2px;\n}\n.navbar .dropdown-menu li > a,\n.navbar.navbar-default .dropdown-menu li > a {\n  font-size: 16px;\n  padding: 13px 16px;\n}\n.navbar .dropdown-menu li > a:hover,\n.navbar.navbar-default .dropdown-menu li > a:hover,\n.navbar .dropdown-menu li > a:focus,\n.navbar.navbar-default .dropdown-menu li > a:focus {\n  color: #009688;\n  background-color: #eeeeee;\n}\n.navbar .dropdown-menu .active > a,\n.navbar.navbar-default .dropdown-menu .active > a {\n  background-color: #009688;\n  color: rgba(255,255,255, 0.84);\n}\n.navbar .dropdown-menu .active > a:hover,\n.navbar.navbar-default .dropdown-menu .active > a:hover,\n.navbar .dropdown-menu .active > a:focus,\n.navbar.navbar-default .dropdown-menu .active > a:focus {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-inverse {\n  background-color: #3f51b5;\n  color: #ffffff;\n}\n.navbar.navbar-inverse .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-inverse .navbar-form input.form-control::-moz-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-inverse .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-inverse .navbar-form input.form-control:-ms-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-inverse .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-inverse .navbar-form input.form-control::-webkit-input-placeholder {\n  color: #ffffff;\n}\n.navbar.navbar-inverse .dropdown-menu {\n  border-radius: 2px;\n}\n.navbar.navbar-inverse .dropdown-menu li > a {\n  font-size: 16px;\n  padding: 13px 16px;\n}\n.navbar.navbar-inverse .dropdown-menu li > a:hover,\n.navbar.navbar-inverse .dropdown-menu li > a:focus {\n  color: #3f51b5;\n  background-color: #eeeeee;\n}\n.navbar.navbar-inverse .dropdown-menu .active > a {\n  background-color: #3f51b5;\n  color: #ffffff;\n}\n.navbar.navbar-inverse .dropdown-menu .active > a:hover,\n.navbar.navbar-inverse .dropdown-menu .active > a:focus {\n  color: #ffffff;\n}\n.navbar.navbar-primary {\n  background-color: #009688;\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-primary .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-primary .navbar-form input.form-control::-moz-placeholder {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-primary .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-primary .navbar-form input.form-control:-ms-input-placeholder {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-primary .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-primary .navbar-form input.form-control::-webkit-input-placeholder {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-primary .dropdown-menu {\n  border-radius: 2px;\n}\n.navbar.navbar-primary .dropdown-menu li > a {\n  font-size: 16px;\n  padding: 13px 16px;\n}\n.navbar.navbar-primary .dropdown-menu li > a:hover,\n.navbar.navbar-primary .dropdown-menu li > a:focus {\n  color: #009688;\n  background-color: #eeeeee;\n}\n.navbar.navbar-primary .dropdown-menu .active > a {\n  background-color: #009688;\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-primary .dropdown-menu .active > a:hover,\n.navbar.navbar-primary .dropdown-menu .active > a:focus {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-success {\n  background-color: #4caf50;\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-success .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-success .navbar-form input.form-control::-moz-placeholder {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-success .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-success .navbar-form input.form-control:-ms-input-placeholder {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-success .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-success .navbar-form input.form-control::-webkit-input-placeholder {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-success .dropdown-menu {\n  border-radius: 2px;\n}\n.navbar.navbar-success .dropdown-menu li > a {\n  font-size: 16px;\n  padding: 13px 16px;\n}\n.navbar.navbar-success .dropdown-menu li > a:hover,\n.navbar.navbar-success .dropdown-menu li > a:focus {\n  color: #4caf50;\n  background-color: #eeeeee;\n}\n.navbar.navbar-success .dropdown-menu .active > a {\n  background-color: #4caf50;\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-success .dropdown-menu .active > a:hover,\n.navbar.navbar-success .dropdown-menu .active > a:focus {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-info {\n  background-color: #03a9f4;\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-info .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-info .navbar-form input.form-control::-moz-placeholder {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-info .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-info .navbar-form input.form-control:-ms-input-placeholder {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-info .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-info .navbar-form input.form-control::-webkit-input-placeholder {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-info .dropdown-menu {\n  border-radius: 2px;\n}\n.navbar.navbar-info .dropdown-menu li > a {\n  font-size: 16px;\n  padding: 13px 16px;\n}\n.navbar.navbar-info .dropdown-menu li > a:hover,\n.navbar.navbar-info .dropdown-menu li > a:focus {\n  color: #03a9f4;\n  background-color: #eeeeee;\n}\n.navbar.navbar-info .dropdown-menu .active > a {\n  background-color: #03a9f4;\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-info .dropdown-menu .active > a:hover,\n.navbar.navbar-info .dropdown-menu .active > a:focus {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-warning {\n  background-color: #ff5722;\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-warning .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-warning .navbar-form input.form-control::-moz-placeholder {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-warning .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-warning .navbar-form input.form-control:-ms-input-placeholder {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-warning .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-warning .navbar-form input.form-control::-webkit-input-placeholder {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-warning .dropdown-menu {\n  border-radius: 2px;\n}\n.navbar.navbar-warning .dropdown-menu li > a {\n  font-size: 16px;\n  padding: 13px 16px;\n}\n.navbar.navbar-warning .dropdown-menu li > a:hover,\n.navbar.navbar-warning .dropdown-menu li > a:focus {\n  color: #ff5722;\n  background-color: #eeeeee;\n}\n.navbar.navbar-warning .dropdown-menu .active > a {\n  background-color: #ff5722;\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-warning .dropdown-menu .active > a:hover,\n.navbar.navbar-warning .dropdown-menu .active > a:focus {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-danger {\n  background-color: #f44336;\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-danger .navbar-form .form-group input.form-control::-moz-placeholder,\n.navbar.navbar-danger .navbar-form input.form-control::-moz-placeholder {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-danger .navbar-form .form-group input.form-control:-ms-input-placeholder,\n.navbar.navbar-danger .navbar-form input.form-control:-ms-input-placeholder {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-danger .navbar-form .form-group input.form-control::-webkit-input-placeholder,\n.navbar.navbar-danger .navbar-form input.form-control::-webkit-input-placeholder {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-danger .dropdown-menu {\n  border-radius: 2px;\n}\n.navbar.navbar-danger .dropdown-menu li > a {\n  font-size: 16px;\n  padding: 13px 16px;\n}\n.navbar.navbar-danger .dropdown-menu li > a:hover,\n.navbar.navbar-danger .dropdown-menu li > a:focus {\n  color: #f44336;\n  background-color: #eeeeee;\n}\n.navbar.navbar-danger .dropdown-menu .active > a {\n  background-color: #f44336;\n  color: rgba(255,255,255, 0.84);\n}\n.navbar.navbar-danger .dropdown-menu .active > a:hover,\n.navbar.navbar-danger .dropdown-menu .active > a:focus {\n  color: rgba(255,255,255, 0.84);\n}\n.navbar-inverse {\n  background-color: #3f51b5;\n}\n@media (max-width: 1199px) {\n  .navbar .navbar-brand {\n    height: 50px;\n    padding: 10px 15px;\n  }\n  .navbar .navbar-form {\n    margin-top: 10px;\n  }\n  .navbar .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n.dropdown-menu {\n  border: 0;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n.dropdown-menu .divider {\n  background-color: rgba(229, 229, 229, 0.12);\n}\n.dropdown-menu li {\n  overflow: hidden;\n  position: relative;\n}\n.dropdown-menu li a:hover {\n  background-color: transparent;\n  color: #009688;\n}\n.alert {\n  border: 0;\n  border-radius: 0;\n}\n.alert,\n.alert.alert-default {\n  background-color: rgba(255,255,255, 0.84);\n  color: rgba(255,255,255, 0.84);\n}\n.alert a,\n.alert.alert-default a,\n.alert .alert-link,\n.alert.alert-default .alert-link {\n  color: rgba(255,255,255, 0.84);\n}\n.alert.alert-inverse {\n  background-color: #3f51b5;\n  color: #ffffff;\n}\n.alert.alert-inverse a,\n.alert.alert-inverse .alert-link {\n  color: #ffffff;\n}\n.alert.alert-primary {\n  background-color: #009688;\n  color: rgba(255,255,255, 0.84);\n}\n.alert.alert-primary a,\n.alert.alert-primary .alert-link {\n  color: rgba(255,255,255, 0.84);\n}\n.alert.alert-success {\n  background-color: #4caf50;\n  color: rgba(255,255,255, 0.84);\n}\n.alert.alert-success a,\n.alert.alert-success .alert-link {\n  color: rgba(255,255,255, 0.84);\n}\n.alert.alert-info {\n  background-color: #03a9f4;\n  color: rgba(255,255,255, 0.84);\n}\n.alert.alert-info a,\n.alert.alert-info .alert-link {\n  color: rgba(255,255,255, 0.84);\n}\n.alert.alert-warning {\n  background-color: #ff5722;\n  color: rgba(255,255,255, 0.84);\n}\n.alert.alert-warning a,\n.alert.alert-warning .alert-link {\n  color: rgba(255,255,255, 0.84);\n}\n.alert.alert-danger {\n  background-color: #f44336;\n  color: rgba(255,255,255, 0.84);\n}\n.alert.alert-danger a,\n.alert.alert-danger .alert-link {\n  color: rgba(255,255,255, 0.84);\n}\n.alert-info,\n.alert-danger,\n.alert-warning,\n.alert-success {\n  color: rgba(255,255,255, 0.84);\n}\n.alert-default a,\n.alert-default .alert-link {\n  color: rgba(0,0,0, 0.87);\n}\n.progress {\n  height: 4px;\n  border-radius: 0;\n  box-shadow: none;\n  background: #c8c8c8;\n}\n.progress .progress-bar {\n  box-shadow: none;\n}\n.progress .progress-bar,\n.progress .progress-bar.progress-bar-default {\n  background-color: #009688;\n}\n.progress .progress-bar.progress-bar-inverse {\n  background-color: #3f51b5;\n}\n.progress .progress-bar.progress-bar-primary {\n  background-color: #009688;\n}\n.progress .progress-bar.progress-bar-success {\n  background-color: #4caf50;\n}\n.progress .progress-bar.progress-bar-info {\n  background-color: #03a9f4;\n}\n.progress .progress-bar.progress-bar-warning {\n  background-color: #ff5722;\n}\n.progress .progress-bar.progress-bar-danger {\n  background-color: #f44336;\n}\n.text-warning {\n  color: #ff5722;\n}\n.text-primary {\n  color: #009688;\n}\n.text-danger {\n  color: #f44336;\n}\n.text-success {\n  color: #4caf50;\n}\n.text-info {\n  color: #03a9f4;\n}\n.nav-tabs {\n  background: #009688;\n}\n.nav-tabs > li > a {\n  color: #FFFFFF;\n  border: 0;\n  margin: 0;\n}\n.nav-tabs > li > a:hover {\n  background-color: transparent;\n  border: 0;\n}\n.nav-tabs > li > a,\n.nav-tabs > li > a:hover,\n.nav-tabs > li > a:focus {\n  background-color: transparent !important;\n  border: 0 !important;\n  color: #FFFFFF !important;\n  font-weight: 500;\n}\n.nav-tabs > li.disabled > a,\n.nav-tabs > li.disabled > a:hover {\n  color: rgba(255, 255, 255, 0.5);\n}\n.popover,\n.tooltip-inner {\n  color: #ececec;\n  line-height: 1em;\n  background: rgba(101, 101, 101, 0.9);\n  border: none;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);\n}\n.tooltip,\n.tooltip.in {\n  opacity: 1;\n}\n.popover .arrow,\n.tooltip .arrow,\n.popover .tooltip-arrow,\n.tooltip .tooltip-arrow {\n  display: none;\n}\n.card {\n  /***** Make height equal to width (http://stackoverflow.com/a/6615994) ****/\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  /**************************************************************************/\n  border-radius: 2px;\n  color: rgba(0,0,0, 0.87);\n  background: #fff;\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.card .card-height-indicator {\n  margin-top: 100%;\n}\n.card .card-content {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.card .card-image {\n  height: 60%;\n  position: relative;\n  overflow: hidden;\n}\n.card .card-image img {\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  pointer-events: none;\n}\n.card .card-image .card-image-headline {\n  position: absolute;\n  bottom: 16px;\n  left: 18px;\n  color: #fff;\n  font-size: 2em;\n}\n.card .card-body {\n  height: 30%;\n  padding: 18px;\n}\n.card .card-footer {\n  height: 10%;\n  padding: 18px;\n}\n.card .card-footer button {\n  margin: 0 !important;\n  position: relative;\n  bottom: 25px;\n  width: auto;\n}\n.card .card-footer button:first-child {\n  left: -15px;\n}\n.modal-content {\n  box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2), 0 40px 77px 0 rgba(0, 0, 0, 0.22);\n  border-radius: 2px;\n  border: none;\n}\n.modal-content .modal-header {\n  border-bottom: none;\n  padding-top: 24px;\n  padding-right: 24px;\n  padding-bottom: 0;\n  padding-left: 24px;\n}\n.modal-content .modal-body {\n  padding-top: 24px;\n  padding-right: 24px;\n  padding-bottom: 16px;\n  padding-left: 24px;\n}\n.modal-content .modal-footer {\n  border-top: none;\n  padding: 7px;\n}\n.modal-content .modal-footer button {\n  margin: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: auto;\n}\n.modal-content .modal-footer button.pull-left {\n  padding-left: 5px;\n  padding-right: 5px;\n  position: relative;\n  left: -5px;\n}\n.modal-content .modal-footer button + button {\n  margin-bottom: 16px;\n}\n.modal-content .modal-body + .modal-footer {\n  padding-top: 0;\n}\n.modal-backdrop {\n  background: rgba(0, 0, 0, 0.3);\n}\n.panel {\n  border-radius: 2px;\n  border: 0;\n  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);\n}\n.panel > .panel-heading,\n.panel.panel-default > .panel-heading {\n  background-color: #eeeeee;\n}\n.panel.panel-inverse > .panel-heading {\n  background-color: #3f51b5;\n}\n.panel.panel-primary > .panel-heading {\n  background-color: #009688;\n}\n.panel.panel-success > .panel-heading {\n  background-color: #4caf50;\n}\n.panel.panel-info > .panel-heading {\n  background-color: #03a9f4;\n}\n.panel.panel-warning > .panel-heading {\n  background-color: #ff5722;\n}\n.panel.panel-danger > .panel-heading {\n  background-color: #f44336;\n}\n[class*=\"panel-\"] > .panel-heading {\n  color: rgba(255,255,255, 0.84);\n  border: 0;\n}\n.panel-default > .panel-heading,\n.panel:not([class*=\"panel-\"]) > .panel-heading {\n  color: rgba(0,0,0, 0.87);\n}\n.panel-footer {\n  background-color: #eeeeee;\n}\nhr.on-dark {\n  color: #1a1a1a;\n}\nhr.on-light {\n  color: #ffffff;\n}\n@media (-webkit-min-device-pixel-ratio: 0.75), (min--moz-device-pixel-ratio: 0.75), (-o-device-pixel-ratio: 3/4), (min-device-pixel-ratio: 0.75), (min-resolution: 0.75dppx), (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi) {\n  hr {\n    height: 0.75px;\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 1), (min--moz-device-pixel-ratio: 1), (-o-device-pixel-ratio: 1), (min-device-pixel-ratio: 1), (min-resolution: 1dppx), (-webkit-min-device-pixel-ratio: 1.6666666666666667), (min-resolution: 160dpi) {\n  hr {\n    height: 1px;\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 1.33), (min--moz-device-pixel-ratio: 1.33), (-o-device-pixel-ratio: 133/100), (min-device-pixel-ratio: 1.33), (min-resolution: 1.33dppx), (-webkit-min-device-pixel-ratio: 2.21875), (min-resolution: 213dpi) {\n  hr {\n    height: 1.333px;\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-device-pixel-ratio: 3/2), (min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx), (-webkit-min-device-pixel-ratio: 2.5), (min-resolution: 240dpi) {\n  hr {\n    height: 1.5px;\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min--moz-device-pixel-ratio: 2), (-o-device-pixel-ratio: 2/1), (min-device-pixel-ratio: 2), (min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 3.9583333333333335), (min-resolution: 380dpi) {\n  hr {\n    height: 2px;\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 3), (min--moz-device-pixel-ratio: 3), (-o-device-pixel-ratio: 3/1), (min-device-pixel-ratio: 3), (min-resolution: 3dppx), (-webkit-min-device-pixel-ratio: 5), (min-resolution: 480dpi) {\n  hr {\n    height: 3px;\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 4), (min--moz-device-pixel-ratio: 4), (-o-device-pixel-ratio: 4/1), (min-device-pixel-ratio: 3), (min-resolution: 4dppx), (-webkit-min-device-pixel-ratio: 6.666666666666667), (min-resolution: 640dpi) {\n  hr {\n    height: 4px;\n  }\n}\n* {\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  -webkit-tap-highlight-color: transparent;\n}\n*:focus {\n  outline: 0;\n}\n.snackbar {\n  background-color: #323232;\n  color: rgba(255,255,255, 0.84);\n  font-size: 14px;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);\n  height: 0;\n  -webkit-transition: -webkit-transform 0.2s ease-in-out, opacity 0.2s ease-in, height 0 linear 0.2s, padding 0 linear 0.2s, height 0 linear 0.2s;\n          -webkit-transition: opacity 0.2s ease-in, height 0 linear 0.2s, padding 0 linear 0.2s, height 0 linear 0.2s, -webkit-transform 0.2s ease-in-out;\n          transition: opacity 0.2s ease-in, height 0 linear 0.2s, padding 0 linear 0.2s, height 0 linear 0.2s, -webkit-transform 0.2s ease-in-out;\n          transition: transform 0.2s ease-in-out, opacity 0.2s ease-in, height 0 linear 0.2s, padding 0 linear 0.2s, height 0 linear 0.2s;\n          transition: transform 0.2s ease-in-out, opacity 0.2s ease-in, height 0 linear 0.2s, padding 0 linear 0.2s, height 0 linear 0.2s, -webkit-transform 0.2s ease-in-out;\n  -webkit-transform: translateY(200%);\n          transform: translateY(200%);\n}\n.snackbar.snackbar-opened {\n  padding: 14px 15px;\n  margin-bottom: 20px;\n  height: auto;\n  -webkit-transition: -webkit-transform 0.2s ease-in-out, opacity 0.2s ease-in, height 0 linear 0.2s, height 0 linear 0.2s;\n          -webkit-transition: opacity 0.2s ease-in, height 0 linear 0.2s, height 0 linear 0.2s, -webkit-transform 0.2s ease-in-out;\n          transition: opacity 0.2s ease-in, height 0 linear 0.2s, height 0 linear 0.2s, -webkit-transform 0.2s ease-in-out;\n          transition: transform 0.2s ease-in-out, opacity 0.2s ease-in, height 0 linear 0.2s, height 0 linear 0.2s;\n          transition: transform 0.2s ease-in-out, opacity 0.2s ease-in, height 0 linear 0.2s, height 0 linear 0.2s, -webkit-transform 0.2s ease-in-out;\n  -webkit-transform: none;\n          transform: none;\n}\n.snackbar.toast {\n  border-radius: 200px;\n}\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -ms-touch-action: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-sizing: border-box;\n}\n.noUi-base {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.noUi-origin {\n  position: absolute;\n  right: 0;\n  top: 0;\n  left: 0;\n  bottom: 0;\n}\n.noUi-handle {\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n}\n.noUi-stacking .noUi-handle {\n  z-index: 10;\n}\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: left 0.3s, top 0.3s;\n          transition: left 0.3s, top 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n.noUi-horizontal {\n  height: 10px;\n}\n.noUi-handle {\n  box-sizing: border-box;\n  width: 12px;\n  height: 12px;\n  left: -10px;\n  top: -5px;\n  cursor: ew-resize;\n  border-radius: 100%;\n  -webkit-transition: all 0.2s ease-out;\n          transition: all 0.2s ease-out;\n  border: 1px solid;\n}\n.noUi-vertical .noUi-handle {\n  margin-left: 5px;\n  cursor: ns-resize;\n}\n.noUi-horizontal.noUi-extended {\n  padding: 0 15px;\n}\n.noUi-horizontal.noUi-extended .noUi-origin {\n  right: -15px;\n}\n.noUi-background {\n  height: 2px;\n  margin: 20px 0;\n}\n.noUi-origin {\n  margin: 0;\n  border-radius: 0;\n  height: 2px;\n  background: #c8c8c8;\n}\n.noUi-origin[style^=\"left: 0\"] .noUi-handle {\n  background-color: #fff;\n  border: 2px solid #c8c8c8;\n}\n.noUi-origin[style^=\"left: 0\"] .noUi-handle.noUi-active {\n  border-width: 1px;\n}\n.noUi-target {\n  border-radius: 2px;\n}\n.noUi-horizontal {\n  height: 2px;\n  margin: 15px 0;\n}\n.noUi-vertical {\n  height: 100%;\n  width: 2px;\n  margin: 0 15px;\n  display: inline-block;\n}\n.noUi-handle.noUi-active {\n  -webkit-transform: scale3d(2.5, 2.5, 1);\n          transform: scale3d(2.5, 2.5, 1);\n}\n[disabled].noUi-slider {\n  opacity: 0.5;\n}\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n.slider {\n  background: #c8c8c8;\n}\n.slider.noUi-connect,\n.slider.slider-default.noUi-connect {\n  background-color: #009688;\n}\n.slider.slider-inverse.noUi-connect {\n  background-color: #3f51b5;\n}\n.slider.slider-primary.noUi-connect {\n  background-color: #009688;\n}\n.slider.slider-success.noUi-connect {\n  background-color: #4caf50;\n}\n.slider.slider-info.noUi-connect {\n  background-color: #03a9f4;\n}\n.slider.slider-warning.noUi-connect {\n  background-color: #ff5722;\n}\n.slider.slider-danger.noUi-connect {\n  background-color: #f44336;\n}\n.slider .noUi-connect,\n.slider.slider-default .noUi-connect {\n  background-color: #009688;\n}\n.slider.slider-inverse .noUi-connect {\n  background-color: #3f51b5;\n}\n.slider.slider-primary .noUi-connect {\n  background-color: #009688;\n}\n.slider.slider-success .noUi-connect {\n  background-color: #4caf50;\n}\n.slider.slider-info .noUi-connect {\n  background-color: #03a9f4;\n}\n.slider.slider-warning .noUi-connect {\n  background-color: #ff5722;\n}\n.slider.slider-danger .noUi-connect {\n  background-color: #f44336;\n}\n.slider .noUi-handle,\n.slider.slider-default .noUi-handle {\n  background-color: #009688;\n}\n.slider.slider-inverse .noUi-handle {\n  background-color: #3f51b5;\n}\n.slider.slider-primary .noUi-handle {\n  background-color: #009688;\n}\n.slider.slider-success .noUi-handle {\n  background-color: #4caf50;\n}\n.slider.slider-info .noUi-handle {\n  background-color: #03a9f4;\n}\n.slider.slider-warning .noUi-handle {\n  background-color: #ff5722;\n}\n.slider.slider-danger .noUi-handle {\n  background-color: #f44336;\n}\n.slider .noUi-handle,\n.slider.slider-default .noUi-handle {\n  border-color: #009688;\n}\n.slider.slider-inverse .noUi-handle {\n  border-color: #3f51b5;\n}\n.slider.slider-primary .noUi-handle {\n  border-color: #009688;\n}\n.slider.slider-success .noUi-handle {\n  border-color: #4caf50;\n}\n.slider.slider-info .noUi-handle {\n  border-color: #03a9f4;\n}\n.slider.slider-warning .noUi-handle {\n  border-color: #ff5722;\n}\n.slider.slider-danger .noUi-handle {\n  border-color: #f44336;\n}\n.selectize-control.single,\n.selectize-control.multi {\n  padding: 0;\n}\n.selectize-control.single .selectize-input,\n.selectize-control.multi .selectize-input,\n.selectize-control.single .selectize-input.input-active,\n.selectize-control.multi .selectize-input.input-active {\n  cursor: text;\n  background: transparent;\n  box-shadow: none;\n  border: 0;\n  padding: 0;\n  height: 100%;\n  font-size: 14px;\n  line-height: 30px;\n}\n.selectize-control.single .selectize-input .has-items,\n.selectize-control.multi .selectize-input .has-items,\n.selectize-control.single .selectize-input.input-active .has-items,\n.selectize-control.multi .selectize-input.input-active .has-items {\n  padding: 0;\n}\n.selectize-control.single .selectize-input:after,\n.selectize-control.multi .selectize-input:after,\n.selectize-control.single .selectize-input.input-active:after,\n.selectize-control.multi .selectize-input.input-active:after {\n  right: 5px;\n  position: absolute;\n  font-size: 7px;\n  content: \"\\e894\";\n  font-family: \"Material-Design-Icons\";\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 4;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.selectize-control.single .selectize-input input,\n.selectize-control.multi .selectize-input input,\n.selectize-control.single .selectize-input.input-active input,\n.selectize-control.multi .selectize-input.input-active input {\n  font-size: 14px;\n  outline: 0;\n  border: 0;\n  background: transparent;\n}\n.selectize-control.single .selectize-input.label-floating-fix input,\n.selectize-control.multi .selectize-input.label-floating-fix input,\n.selectize-control.single .selectize-input.input-active.label-floating-fix input,\n.selectize-control.multi .selectize-input.input-active.label-floating-fix input {\n  opacity: 0;\n}\n.selectize-control.single .selectize-input > div,\n.selectize-control.multi .selectize-input > div,\n.selectize-control.single .selectize-input.input-active > div,\n.selectize-control.multi .selectize-input.input-active > div,\n.selectize-control.single .selectize-input > .item,\n.selectize-control.multi .selectize-input > .item,\n.selectize-control.single .selectize-input.input-active > .item,\n.selectize-control.multi .selectize-input.input-active > .item {\n  display: inline-block;\n  margin: 0 8px 3px 0;\n  padding: 0;\n  background: transparent;\n  border: 0;\n}\n.selectize-control.single .selectize-input > div:after,\n.selectize-control.multi .selectize-input > div:after,\n.selectize-control.single .selectize-input.input-active > div:after,\n.selectize-control.multi .selectize-input.input-active > div:after,\n.selectize-control.single .selectize-input > .item:after,\n.selectize-control.multi .selectize-input > .item:after,\n.selectize-control.single .selectize-input.input-active > .item:after,\n.selectize-control.multi .selectize-input.input-active > .item:after {\n  content: \",\";\n}\n.selectize-control.single .selectize-input > div:last-of-type:after,\n.selectize-control.multi .selectize-input > div:last-of-type:after,\n.selectize-control.single .selectize-input.input-active > div:last-of-type:after,\n.selectize-control.multi .selectize-input.input-active > div:last-of-type:after,\n.selectize-control.single .selectize-input > .item:last-of-type:after,\n.selectize-control.multi .selectize-input > .item:last-of-type:after,\n.selectize-control.single .selectize-input.input-active > .item:last-of-type:after,\n.selectize-control.multi .selectize-input.input-active > .item:last-of-type:after {\n  content: \"\";\n}\n.selectize-control.single .selectize-input > div.active,\n.selectize-control.multi .selectize-input > div.active,\n.selectize-control.single .selectize-input.input-active > div.active,\n.selectize-control.multi .selectize-input.input-active > div.active,\n.selectize-control.single .selectize-input > .item.active,\n.selectize-control.multi .selectize-input > .item.active,\n.selectize-control.single .selectize-input.input-active > .item.active,\n.selectize-control.multi .selectize-input.input-active > .item.active {\n  font-weight: bold;\n  background: transparent;\n  border: 0;\n}\n.selectize-control.single .selectize-dropdown,\n.selectize-control.multi .selectize-dropdown {\n  position: absolute;\n  z-index: 1000;\n  border: 0;\n  width: 100% !important;\n  left: 0 !important;\n  height: auto;\n  background-color: #FFF;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border-radius: 2px;\n  padding: 0;\n  margin-top: 3px;\n}\n.selectize-control.single .selectize-dropdown .active,\n.selectize-control.multi .selectize-dropdown .active {\n  background-color: inherit;\n}\n.selectize-control.single .selectize-dropdown .highlight,\n.selectize-control.multi .selectize-dropdown .highlight {\n  background-color: #d5d8ff;\n}\n.selectize-control.single .selectize-dropdown .selected,\n.selectize-control.multi .selectize-dropdown .selected,\n.selectize-control.single .selectize-dropdown .selected.active,\n.selectize-control.multi .selectize-dropdown .selected.active {\n  background-color: #EEEEEE;\n}\n.selectize-control.single .selectize-dropdown [data-selectable],\n.selectize-control.multi .selectize-dropdown [data-selectable],\n.selectize-control.single .selectize-dropdown .optgroup-header,\n.selectize-control.multi .selectize-dropdown .optgroup-header {\n  padding: 10px 20px;\n  cursor: pointer;\n}\n.selectize-control.single .dropdown-active ~ .selectize-dropdown,\n.selectize-control.multi .dropdown-active ~ .selectize-dropdown {\n  display: block;\n}\n.dropdownjs:after {\n  right: 5px;\n  top: 3px;\n  font-size: 25px;\n  position: absolute;\n  content: \"\\e8ac\";\n  font-family: \"Material-Design-Icons\";\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  pointer-events: none;\n  color: #757575;\n}"

/***/ },

/***/ 745:
/***/ function(module, exports) {

module.exports = ".withripple{position:relative}.ripple-container{position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;overflow:hidden;border-radius:inherit;pointer-events:none}.ripple{position:absolute;width:20px;height:20px;margin-left:-10px;margin-top:-10px;border-radius:100%;background-color:#000;background-color:rgba(0,0,0,.05);-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50%;transform-origin:50%;opacity:0;pointer-events:none}.ripple.ripple-on{-webkit-transition:opacity .15s ease-in 0s,-webkit-transform .5s cubic-bezier(.4,0,.2,1) .1s;transition:opacity .15s ease-in 0s,-webkit-transform .5s cubic-bezier(.4,0,.2,1) .1s;transition:opacity .15s ease-in 0s,transform .5s cubic-bezier(.4,0,.2,1) .1s;transition:opacity .15s ease-in 0s,transform .5s cubic-bezier(.4,0,.2,1) .1s,-webkit-transform .5s cubic-bezier(.4,0,.2,1) .1s;opacity:.1}.ripple.ripple-out{-webkit-transition:opacity .1s linear 0s!important;transition:opacity .1s linear 0s!important;opacity:0}\n "

/***/ },

/***/ 746:
/***/ function(module, exports) {

module.exports = "@font-face {\n font-family: 'Material Icons';\n font-style: normal;\n font-weight: 400;\n src: url(MaterialIcons-Regular.eot); /* For IE6-8 */\n src: local('Material Icons'),\n      local('materialIcons-Regular'),\n      url(../fonts/materialIcons-Regular.woff2) format('woff2'),\n      url(../fonts/materialIcons-Regular.woff) format('woff'),\n      url(../fonts/materialIcons-Regular.ttf) format('truetype');\n}\n\n.material-icons {\n font-family: 'Material Icons';\n font-weight: normal;\n font-style: normal;\n display: inline-block;\n line-height: 1;\n text-transform: none;\n letter-spacing: normal;\n word-wrap: normal;\n white-space: nowrap;\n direction: ltr;\n\n /* Support for all WebKit browsers. */\n -webkit-font-smoothing: antialiased;\n /* Support for Safari and Chrome. */\n text-rendering: optimizeLegibility;\n\n /* Support for Firefox. */\n -moz-osx-font-smoothing: grayscale;\n\n /* Support for IE. */\n -webkit-font-feature-settings: 'liga';\n         font-feature-settings: 'liga';\n}\nul,li{\n  list-style: none;\n}\na:hover, a:focus{  \n  -webkit-transition: all 0.3s ease 0s !important;  \n  transition: all 0.3s ease 0s !important;\n}\na:focus, img:focus, button:focus{\n  outline: none !important;\n}\n.ellipsis {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.btn-flat{\n  border-radius: 0px;\n}\n.btn-basic{\n  color: #e97252;\n  border: 1px solid #dae2e6;\n  font-size: 13px;\n}\n.btn-basic2{\n  color: #e97252;\n  border: 1px solid #dae2e6;\n  font-size: 11px;\n  background: #f6f8f9;\n  padding: 10px;\n}\n.btn-basic2 i{\n  color: #e97252;\n  font-size: 14px;\n  position: relative;\n  top: 3px;\n}\n.no-padding{\n  padding: 0px;\n}\n.navbar-fixed-top .nav-padding{\n  padding-left: 30px;\n  padding-right: 30px;\n}\n.template-outr{\n  padding-left: 30px;\n}\n.template-outr .no-padding{\n  padding: 0px;\n}\n.sidebar-offcanvas{\n  padding-right: 30px;\n}\n.navbar-rightside{\n  float: right;\n  margin-top: 13px;\n}\n.navbar-default{\n  background: #fff;\n  border-color: #dae2e6;\n  padding-bottom: 10px;\n}\n.navbar-logopadding{\n  padding-right: 35px;\n}\n/* responsive tabs css start */\n\n.panel-heading {\n    padding: 0\n}\n.panel-heading a {\n    display: block;\n    padding: 20px 10px;\n}\n.panel-heading a.collapsed {\n    background: #fff\n}\n.panel-heading a {\n    background: #f7f7f7;\n    border-radius: 5px;\n}\n.panel-heading a:after {\n    content: '-'\n}\n.panel-heading a.collapsed:after {\n    content: '+'\n}\n.nav.nav-tabs li a,\n.nav.nav-tabs li.active > a:hover,\n.nav.nav-tabs li.active > a:active,\n.nav.nav-tabs li.active > a:focus {\n    border-bottom-width: 0px;\n    outline: none;\n}\n.nav.nav-tabs li a {\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n.tab-pane {\n    background: #fff;\n    padding: 10px;\n    border: 1px solid #ddd;\n    margin-top: -1px;\n}\n\n/* start: common css */\n.np{padding: 0px;}\n.clearfix {\n    clear: both;\n    float: left;\n    width: 100%;\n}\n.text-center{\n  text-align: center;\n}\n.section {\n    width: 100%;\n    float: left;\n}\na:hover, a:focus{text-decoration: none; color: #8e989f;}\n.font-italic{font-style: italic;}\n.text-grey{color: #8e989f;}\n.dis-block{display: block;}\n/* end: common css */\n\n#main {\n    height: 100%;\n    width: 100%;\n    float: left;\n}\n#main .container {\n    width: 100%;\n    padding: 0 30px;\n}\n\n/* Start: header section */\n#header {\n    height: 65px;\n}\n#header .logo {\n    padding-right: 40px;\n    margin-right: 0px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n#header .logo a img.standard-logo {\n    display: block;\n    max-width: 100%;\n}\n.logo {\n    /*float: left;*/\n    font-size: 32px;\n    line-height: 100%;\n    height: 35px;\n}\n#header .menu {\n    /*float: right;\n    width: 83%;*/\n    margin-top: 20px;\n}\n.navbar {\n    margin-top: 20px;\n    min-height: 35px;\n}\n.top-search{\n    /*float: left;\n    width: 90%;  */  \n    border-right: 1px solid #dae2e6;\n    border-left: 1px solid #dae2e6;\n    padding-left: 30px;\n}\n.top-search .form-group {\n    padding-bottom: 0;\n    margin: 0;\n}\n.top-search input{\n    font-size: 14px;\n    color: #bec5c9;\n    font-family: robotoregular !important;\n    box-shadow: none;\n    border: none;\n    float: left;\n    width: 95%;\n}\n.top-search input.form-control:focus {\n    border-color: none;\n    outline: none;\n    box-shadow: none;\n    background: none;\n}\n.top-search input[type=text] {\n    font-size: 14px;\n    color: #bec5c9;\n    border: none;\n    background: none;\n    padding: 6px 12px;\n    margin-bottom: 0px;\n}\n.top-search input::-webkit-input-placeholder {\n    font-size: 14px !important;\n}\n.top-search span.icon {\n    float: left;\n    margin-top: 10px;\n}\n.top-search span.icon i{\n    font-size: 18px;    \n    color: #bec5c9;\n}\n.login{\n  /*float: right;\n  width: 10%;*/\n}\n.login-text {\n    float: right;\n    color: #8e989f;\n    font-size: 14px;\n    padding-top: 5px;\n}\n.login .login-text span.icon i {\n    font-size: 18px;\n    color: #ee795a;\n    top: 0px;\n    position: relative;\n}\n.login a:hover.login-text {\n    text-decoration: none;\n    color: #8e989f;\n}\n.signup-text{\n    float: right;\n    color: #8e989f;\n    font-size: 14px;\n    padding-top: 5px;\n    margin-right: 15px;\n}\n.login .signup-text span.icon i {\n    font-size: 18px;\n    color: #ee795a;\n    top: 0px;\n    position: relative;\n}\n.login a:hover.signup-text, .login a:focus.signup-text, .login a:active.signup-text {\n    text-decoration: none;\n    color: #8e989f;\n}\n\n/* End: header section */\n\n/* start: tabs section */\n.main-tabs .nav>li>a {\n    padding: 8px 40px;\n    font-size: 13px;\n    color: #8e989f !important;\n    line-height: 20px;\n    border-right: 1px solid #e9eef0 !important;\n    border-radius: 0;\n    margin-right: 0px;\n    width: 185px;\n    text-align: center;\n}\n.main-tabs .nav-tabs>li.active>a, .main-tabs .nav-tabs>li.active>a:focus, .main-tabs .nav-tabs>li.active>a:hover {\n    color: #8e989f !important;\n    cursor: pointer;\n    background-color: #e9eef0 !important;\n    border: none;\n    border-bottom-color: transparent;\n}\n.main-tabs .nav>li>a:hover {\n    background-color: #e9eef0 !important;\n    color: #8e989f !important;\n}\n.main-tabs .nav-tabs {\n    border-bottom: 1px solid #e9eef0;\n    border-top: 1px solid #e9eef0;\n    background: none;\n}\n.main-tabs .tab-pane {\n    background: #fff;\n    padding: 10px 0; \n    border: none;\n    margin-top: 0px;\n    float: left;\n}\n.main-tabs h1{\n  font-size: 24px;\n  color: #8e989f;\n  font-family: 'robotoregular';\n}\n.main-tabs p{\n  font-size: 14px;\n  color: #8e989f;\n  font-family: 'robotoregular';\n}\n.main-tabs hr {\n    margin-top: 30px;\n    margin-bottom: 35px;\n    border: 0;\n    border-top: 1px solid #e9eef0 !important;\n}\n.btn-blue {\n    color: #fff !important;\n    background-color: #5cc9e6 !important;\n    border-color: #5cc9e6 !important;\n    border-radius: 0 !important;\n    padding: 7px 60px !important;\n    margin-top: 15px !IMPORTANT;\n    margin-right: 25px !important;\n    -webkit-transition: all 0.3s ease 0s;\n    transition: all 0.3s ease 0s;\n    text-transform: none !important;\n}\n.btn-blue:hover, .btn-blue:focus, .btn-blue:active {\n    color: #fff;\n    background-color: #57bdd8;\n    border-color: #57bdd8;\n    box-shadow: none;\n}\nhr {\n    margin-top: 30px;\n    margin-bottom: 30px;\n    border: 0;\n    border-top: 1px solid #e9eef0 !important;\n}\n/* end: tabs section */\n\n/* Start: sec featured */\n.featured-section{\n   float: left;\n   width: 100%;\n}\n.featured-section h2{\n  font-size: 22px;\n  color: #269fd8;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n.featured-section span{\n  color: #8e989f;\n  font-size: 14px;\n}\n.featured-section .featured-text-block {\n    line-height: 22px;\n}\n.featured-section .icon i.material-icons {\n    font-size: 48px;\n    color: #c2c9cd;\n}\n.featured-section .icon-list{\n    margin-right: 15px;\n    position: relative;\n}\n.featured-section .icon-list span.badge {\n    position: absolute;\n    bottom: 0;\n    right: 0px;\n    background: #f65a30;\n    color: #fff;\n    font-size: 10px;\n    font-family: robotobold;\n    box-shadow: 0px 1px 1px rgba(0,0,0,0.18);\n}\n.featured-section .icon-list.active .icon i.material-icons {\n    color: #8e989f;\n}\n.featured-section .icon-list.active .icon i.material-icons {\n    color: #8e989f;\n}\n.featured-section .icon-list .icon i.material-icons:hover {\n    color: #8e989f;\n}\n.featured-list{margin-top: 25px;}\n/* End: sec featured */\n\n/* start: footer */\n.footer-main{\n  float: left;\n  width: 100%;\n}\n.footer-top{\n  float: left;\n  width: 100%;\n  background: #e9eef0;\n  padding: 20px 10px 30px;\n}\n.footer-main .footer-top p{\n    font-size: 13px;\n    color: #8e989f;\n    line-height: 18px;\n    margin-top: 15px;\n}\n.footer-main .footer-top .footer-social-icons{\n    margin-top: 30px;\n}\n.footer-main .footer-top .footer-social-icons a img{\n    margin-right: 5px;\n}\n.footer-bottom{\n  float: left;\n  width: 100%;\n  margin: 25px 0px 15px;\n}\n.footer-bottom a{\n  color: #bbc1c5;\n  font-size: 12px;\n}\n.footer-bottom a:hover, .footer-bottom a:focus, .footer-bottom a:active{\n  text-decoration: none;\n  color: #8e989f;\n}\n.footer-bottom p.copyright{\n  font-size: 13px;\n  color: #bbc1c5;\n  text-align: right;\n}\n\n/* end: footer */\n\n/* Start: Modal Login (materialize) */\n#login .modal-content{\n  border-radius: 0px;\n  /*border: 1px solid #e9eef0;*/\n  float: left;\n  width: 100%;\n}\n#login .modal-header {\n    padding: 20px 25px;\n    border-bottom: none;\n}\n#login .modal-logo{\n    margin-bottom: 20px;\n    margin-top: 70px;\n}\n#login .modal-body {\n    position: relative;\n    padding: 0px;\n    float: left;\n    width: 100%;\n}\n#login .modal-left{\n    width: 50%;\n    float: left;\n    padding: 40px 40px 40px 30px;\n}\n#login .modal-right {\n    background: #fb545b;\n    float: left;\n    width: 50%;\n    /*min-height: 350px;*/\n    height: 530px;\n    padding: 30px;\n}\n#login .img-margin{\n    margin: 80px 0px;\n}\n.img-width{\n    width: 100%;\n}\n#login .input-group {\n    width: 100%;\n    margin-top: 30px;\n    border-bottom: 1px solid #d7dbdd;\n}\n#login .input-field {\n    float: left !important;\n    /* width: 100% !important; */\n    border: none;\n    box-shadow: none;\n    color: #8e989f;\n    font-size: 14px;\n    font-family: montserratregular;\n    padding: 0;\n}\n#login input[type=\"email\"]::-webkit-input-placeholder, \n#login input[type=\"password\"]::-webkit-input-placeholder,\n#login input[type=\"text\"]::-webkit-input-placeholder {\n  color: #8e989f !important;\n}\n#login.modal .form-group label.control-label {\n    font-size: 14px;\n    line-height: 1.07142857;\n    color: #8e989f;\n    font-weight: 400;\n    margin: 16px 0 0 0;\n    font-family: montserratregular;\n}\n#login .dont-acc-signup {\n    color: #62696d;\n    font-size: 12px;\n    font-family: montserratregular;\n    margin-bottom: 0px;\n    padding-top: 5px;\n}\n#login .forgot-btn {\n    position: absolute;\n    right: 2px;\n    bottom: 25px;\n    z-index: 9;\n    color: #f07175;\n    font-size: 12px;\n}\n#login .forgot-btn:hover,  #login .forgot-btn:focus{\n    color: #fa5282;\n}\n#login .btn-login{margin-top: 50px !important;}\n\n/* End: Modal Login (materialize) */\n\n/* Start: Modal Forgot Password (materialize) */\n#forgot-password .modal-content{\n  border-radius: 0px;\n  /*border: 1px solid #e9eef0;*/\n  float: left;\n  width: 100%;\n}\n#forgot-password .modal-header {\n    padding: 20px 25px;\n    border-bottom: none;\n}\n#forgot-password .modal-logo{\n    margin-bottom: 20px;\n    margin-top: 100px;\n}\n#forgot-password .modal-body {\n    position: relative;\n    padding: 0px;\n    float: left;\n    width: 100%;\n}\n#forgot-password .modal-left{\n    width: 50%;\n    float: left;\n    padding: 40px 40px 40px 30px;\n}\n#forgot-password .modal-right {\n    background: #fb545b;\n    float: left;\n    width: 50%;\n    /*min-height: 350px;*/\n    height: 530px;\n    padding: 30px;\n}\n#forgot-password .img-margin{\n    margin: 80px 0px;\n}\n.img-width{\n    width: 100%;\n}\n#forgot-password .input-group {\n    width: 100%;\n    margin-top: 30px;\n    border-bottom: 1px solid #d7dbdd;\n}\n#forgot-password .input-field {\n    float: left !important;\n    /* width: 100% !important; */\n    border: none;\n    box-shadow: none;\n    color: #8e989f;\n    font-size: 14px;\n    font-family: montserratregular;\n    padding: 0;\n}\n#forgot-password input[type=\"email\"]::-webkit-input-placeholder, \n#forgot-password input[type=\"password\"]::-webkit-input-placeholder,\n#forgot-password input[type=\"text\"]::-webkit-input-placeholder {\n  color: #8e989f !important;\n}\n#forgot-password.modal .form-group label.control-label {\n    font-size: 14px;\n    line-height: 1.07142857;\n    color: #8e989f;\n    font-weight: 400;\n    margin: 16px 0 0 0;\n    font-family: montserratregular;\n}\n#forgot-password .or-login {\n    color: #62696d;\n    font-size: 12px;\n    font-family: montserratregular;\n    margin-bottom: 0px;\n    padding-top: 5px;\n}\n#forgot-password .forgot-btn {\n    position: absolute;\n    right: 2px;\n    bottom: 25px;\n    z-index: 9;\n    color: #f07175;\n    font-size: 12px;\n}\n\n/* End: Modal Login (materialize) */\n\n/* Start: Modal SignUp */\n.modal-xlg{\n    width: 1140px;\n}\n#signUp .modal-content{\n  border-radius: 0px;\n  /*border: 1px solid #e9eef0;*/\n  float: left;\n  width: 100%;\n}\n#signUp .modal-header {\n    padding: 20px 25px;\n    border-bottom: none;\n}\n#signUp .modal-logo{\n    margin-bottom: 20px;\n}\n#signUp .modal-body {\n    position: relative;\n    padding: 0px;\n    float: left;\n    width: 100%;\n}\n#signUp .modal-left{\n    width: 50%;\n    float: left;\n    padding: 40px 40px 40px 30px;\n}\n#signUp .modal-right {\n    background: #fb545b;\n    float: left;\n    width: 50%;\n    /*min-height: 350px;*/\n    height: 550px;\n    padding: 30px;\n}\n#signUp .img-margin{\n    margin: 100px 0px;\n}\n.img-width{\n    width: 100%;\n}\n#signUp .input-group {\n    width: 100%;\n    margin-top: 30px;\n    border-bottom: 1px solid #d7dbdd;\n}\n#signUp .input-field {\n    float: left !important;\n    /* width: 100% !important; */\n    border: none;\n    box-shadow: none;\n    color: #8e989f;\n    font-size: 14px;\n    font-family: montserratregular;\n    padding: 0;\n}\n#signUp input[type=\"email\"]::-webkit-input-placeholder, \n#signUp input[type=\"password\"]::-webkit-input-placeholder,\n#signUp input[type=\"text\"]::-webkit-input-placeholder {\n  color: #8e989f !important;\n}\n#signUp.modal .monthly-traffic .form-control {\n    /*color: #fb545b;*/\n    font-size: 18px;\n}\n#signUp.modal .contact-num .form-control {\n    /*color: #fb545b;*/\n    font-size: 18px;\n}\n#signUp.modal .slide2 .form-group.is-focused label,\n#signUp.modal .slide2 .form-group.is-focused label.control-label {\n    color: #8e989f;\n    text-transform: uppercase;\n}\n#signUp .have-an-acc{\n    color: #62696d;\n    font-size: 12px;\n    font-family: montserratregular;\n    margin-bottom: 0px;\n    padding-top: 5px;\n}\n#signUp.modal .slide2 .form-group.label-floating:not(.is-empty) label.control-label {\n    top: -22px;\n}    \n#signUp.modal .slide2 .form-group.label-floating.is-focused label.control-label {\n    top: -22px;\n}   \n\n\n/* Start: Toggle switch (Materialize) */\n#signUp .form-group.toggle-switch {\n    margin-top: 20px;\n}\n.toggle-switch .togglebutton label input[type=checkbox]:checked + .toggle {\n    background-color: rgba(251, 84, 91, 0.5);\n}\n.toggle-switch .togglebutton label input[type=checkbox]:checked + .toggle:after {\n    background-color: #fb545b;\n}\n.toggle-switch.form-group .togglebutton label{\n    color: #62696d;\n    font-size: 14px;\n}\n/* End: Toggle switch (Materialize) */\n\n/* Start: Toggle switch (custom) */\n\n.toggle-switch.form-group label {\n    color: #62696d;\n    font-size: 14px;\n}\n.toggle-switch label {\n   cursor: pointer;\n   margin-bottom: 0px;\n}\n.toggle-switch label input[type=checkbox] {\n   opacity: 0;\n   width: 0;\n   height: 0;\n}\n.toggle-switch label input[type=checkbox][disabled]+.lever:after,\n.switch label input[type=checkbox][disabled]:checked+.lever:after {\n   background-color: #00c494;\n}\n.toggle-switch label input[type=checkbox]:checked+.lever {\n    border: 1px solid #dae2e6;\n}\n.toggle-switch label .lever {\n    content: \"\";\n    display: inline-block;\n    position: relative;\n    width: 55px;\n    height: 12px;\n    border: 1px solid #dae2e6;\n    border-radius: 25px;\n    margin-right: 10px;\n    -webkit-transition: background 0.3s ease;\n    transition: background 0.3s ease;\n    vertical-align: middle;\n    font-size: 10px;\n    padding: 3px 4px;\n    font-family: 'robotobold';\n    text-transform: uppercase;\n}\n.toggle-switch label .lever:after {\n    content: \"Yes\";\n    position: absolute;\n    display: inline-block;\n    width: 35px;\n    height: 18px;\n    background-color: #00c494;\n    border-radius: 8px;\n    left: 0px;\n    top: -4px;\n    color: #fff;\n    -webkit-transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease;\n    transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease;\n    padding: 2px 8px;\n    font-family: robotobold;\n} \n.toggle-switch label input[type=checkbox]:checked+.lever:after {\n    background-color: #fb545b;\n    left: 20px;\n    content: \"No\";\n    padding: 2px 11px;\n}\n\n/* End: Toggle switch (custom) */\n\n/* Start: radio (Time slot) */\n.time-slot .form-group .radio label, \n.time-slot .form-group label {\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #8e989f;\n    font-weight: 400;\n}\n.time-slot .radio input[type=radio]:checked ~ .circle {\n    border-color: #fb545b;\n    background-color: #fb545b;\n}\n.time-slot .radio input[type=radio]:checked ~ .check {\n    background-color: #fb545b;\n}\n.time-slot .radio input[type=radio]:checked + span + span + div {\n    color: #fb545b;\n}.time-slot .radio-inline {\n    padding-left: 0px; \n    width: 35px;\n    float: left;\n    margin-right: 1px;\n}\n.time-slot .radio label .circle {\n    border: none;\n    height: 8px;\n    width: 35px;\n    border-radius: 0;\n    background: #d7dbdd;\n}\n.time-slot .radio label .check {\n    height: 8px;\n    width: 35px;\n    border-radius: 0;\n    background-color: #fb545b;\n}\n.time-slot .radio label span {\n    display: block;\n    position: absolute;\n    left: 0px;\n    top: 0px;\n}\n#signUp.modal .time-slot.form-group label.control-label.time-slot-text{\n    color: #62696d;\n    font-size: 14px;\n    margin-bottom: 10px;\n    margin-top: 10px;\n}\n.time-slot.form-group .radio label, .time-slot.form-group label {\n    font-size: 10px;\n    line-height: 1.42857143;\n    color: #8e989f;\n    font-weight: 400;\n    padding-left: 0px;\n    width: 100%;\n    float: left;\n}\n.time-slot.form-group .radio label div {\n    position: relative;\n    top: -15px;\n}\n.time-slot.form-group .radio{\n    margin-top: 30px;\n}\n.time-slot .radio-inline+.radio-inline {\n    margin-right: 1px;\n    float: left;\n    margin-left: 0px;\n}\n.time-slot .radio input[type=radio], .time-slot .radio-inline input[type=radio] {\n    position: absolute;\n    margin-top: 4px\\9;\n    margin-left: 35px;\n    top: 2px;\n}\n.time-slot .time-slot-bottom{\n    font-size: 12px;\n    color: #8e989f;\n    text-align: center;\n    width: 82%;\n    padding-left: 5px;\n}\n.time-slot .time-slot-bottom .time-am{\n    font-size: 10px;\n    color: #fb545b;\n}\n.time-slot .radio label, .checkbox label {\n    min-height: 14px;\n}\n#signUp .form-group.time-slot {\n    /* margin-top: 20px; */\n    margin-bottom: 20px;\n    border-bottom: 1px solid #d7dbdd;\n    padding-bottom: 25px;\n}\n.time-slot .radio label .check:after {\n    display: block;\n    position: absolute;\n    content: \"\";\n    background-color: rgba(0,0,0, 0.87);\n    left: -3px;\n    top: -18px;\n    height: 42px;\n    width: 42px;\n    border-radius: 100%;\n    z-index: 1;\n    opacity: 0;\n    margin: 0;\n    -webkit-transform: scale3d(1.5, 1.5, 1);\n    transform: scale3d(1.5, 1.5, 1);\n}\n\n/* End: radio (Time slot) */\n\n.grey-text{\n    color: #8e989f;\n}\n.text-red{\n    color: #fb545b;\n}\na.text-red:hover , a.text-red:focus {\n    color: #fa5282  ;\n}\n.btn-red {\n    color: #fff !important;\n    background-color: #fb545b !important;\n    border-color: #fb545b !important;\n    border-radius: 0 !important;\n    font-size: 16px !important;\n    padding: 7px 72px !important;\n    margin-top: 25px !important;\n    -webkit-transition: all 0.3s ease 0s;\n    transition: all 0.3s ease 0s;\n    margin-right: 0 !important;\n    font-family: montserratregular;\n    font-weight: 700;\n    text-transform: none !important;\n}\n.btn-red:hover, .btn-red:focus, .btn-red:active {\n    color: #fff;\n    background-color: #fb545b;\n    border-color: #fb545b;\n    box-shadow: none;\n}\n/*#signUp .togglebutton {\n    border-bottom: 1px solid #d7dbdd;\n    height: 34px;\n}*/\n#signUp .skip-step{\n    color: #62696d;\n    font-size: 12px;\n    font-family: montserratregular;\n    margin-bottom: 0px;\n    padding-top: 5px;\n}\n#signUp.modal .form-group label.control-label {\n    font-size: 14px;\n    line-height: 1.07142857;\n    color: #8e989f;\n    font-weight: 400;\n    margin: 16px 0 0 0;\n    font-family: montserratregular;\n}\n\n/* End: Modal SignUp */\n\n/* Start: Modal Forms Materiliaze CSS */\n.modal i.material-icons {\n    font-size: 18px;\n    color: #fff;\n}\n.modal button.close.btn-close {\n    position: absolute;\n    right: 15px;\n    top: 15px;\n    z-index: 9;\n    opacity: 0.7;\n     -webkit-transition: all 0.3s ease 0s !important;\n     transition: all 0.3s ease 0s !important;\n}\n.modal .close:focus, .modal .close:hover {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n    filter: alpha(opacity=50);\n    opacity: .9 !important;\n}\n.modal-open .modal {\n    overflow-x: hidden;\n}\n.modal{\n    font-family: montserratregular;\n}\n.modal .form-control {\n    height: 38px;\n    padding: 7px 0;\n    font-size: 14px;\n    line-height: 1.42857143;\n    font-family: montserratregular;\n    color: #62696d;\n}\n.modal .form-group label.control-label {\n    font-size: 14px;\n    line-height: 1.07142857;\n    color: #8e989f;\n    font-weight: 400;\n    margin: 16px 0 0 0;\n    font-family: montserratregular;\n}\n.modal .form-group.label-floati62696dng label.control-label, \n.modal .form-group.label-placeholder label.control-label {\n    top: -7px;\n    font-size: 14px;\n    line-height: 18px;\n}\n.modal .form-group.label-floating:not(.is-empty) label.control-label {\n    top: -20px; \n    font-family: montserratregular;\n    font-size: 10px !important; \n    text-transform: uppercase;\n    color: #8e989f !important;\n}\n.modal .form-group.label-floating.is-focused label.control-label {\n    top: -20px; \n    font-size: 10px !important; \n    font-family: montserratregular;\n    color: #fb545b !important;\n}\n.modal .form-group.is-focused label,\n.modal .form-group.is-focused label.control-label {\n    color: #8e989f;\n    text-transform: uppercase;\n}\n.modal .form-control,\n.modal .form-group .form-control {\n  border: 0;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #D2D2D2);\n  background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #d7dbdd);\n  background-image: linear-gradient(#009688, #009688), linear-gradient(#d7dbdd, #d7dbdd);\n}\n.modal .form-group.is-focused .form-control {\n  outline: none;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fb545b), to(#fb545b)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#fb545b, #fb545b), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#fb545b, #fb545b), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 100% 2px, 100% 1px;\n  box-shadow: none;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n}\n.modal .form-group {\n    padding-bottom: 7px;\n    margin: 12px 0 0 0;\n    clear: both;\n}\n.modal-backdrop {\n    background: rgba(0, 0, 0, 0.99) !important;\n}\n\n/* End: Modal Forms Materiliaze CSS */\n\n.slideimg2{display: none;}\n/*.slide2-content{display: none;}*/\n\n/* end: product css*/\n\n/*@media only screen and (min-width : 320px) and (max-width : 768px){\n  .main-tabs .nav>li>a{\n      width: 298px;\n  }\n}*/\n\n\n\n/* custom material css start (sahil) */\n.sahil-material .form-control {\n    height: 38px;\n    padding: 7px 0;\n    font-size: 14px;\n    line-height: 1.42857143;\n    font-family: montserratregular;\n    color: #62696d;\n}\n.sahil-material .form-group label.control-label {\n    font-size: 14px;\n    line-height: 1.07142857;\n    color: #8e989f;\n    font-weight: 400;\n    margin: 16px 0 0 0;\n    font-family: montserratregular;\n}\n.sahil-material .form-group label.control-label.seo-static-label{\n    text-transform: uppercase !important;\n    font-size: 10px !important; \n    color: #8e989f !important;\n}\n.sahil-material .form-group.label-floating label.control-label, \n.sahil-material .form-group.label-placeholder label.control-label {\n    top: -7px;\n    font-size: 14px;\n    line-height: 18px;\n    color: #8e989f;\n}\n.sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\n    top: -20px; \n    font-family: montserratregular;\n    font-size: 11px; \n    text-transform: uppercase;\n    color: #8e989f !important;\n}\n.sahil-material .form-group.label-floating.is-focused label.control-label {\n    top: -20px; \n    font-size: 11px; \n    font-family: montserratregular;\n    color: #8e989f !important;\n}\n.sahil-material .form-group.is-focused label,\n.sahil-material .form-group.is-focused label.control-label {\n    font-size: 11px; \n    font-family: montserratregular;\n    color: #8e989f !important;\n    text-transform: uppercase;\n}\n.sahil-material .form-control,\n.sahil-material .form-group .form-control {\n    border: 0 !important;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #D2D2D2);\n    background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #d7dbdd);\n    background-image: linear-gradient(#009688, #009688), linear-gradient(#d7dbdd, #d7dbdd);\n}\n\n.sahil-material .form-group.is-focused .form-control {\n    outline: none;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#fb545b), to(#fb545b)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: -webkit-linear-gradient(#fb545b, #fb545b), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n    background-image: linear-gradient(#fb545b, #fb545b), linear-gradient(#D2D2D2, #D2D2D2);\n    background-size: 100% 2px, 100% 1px;\n    box-shadow: none;\n    -webkit-transition-duration: 0.3s;\n            transition-duration: 0.3s;\n}\n\n/* custom material css end (sahil) */\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ },

/***/ 747:
/***/ function(module, exports) {

module.exports = "@font-face {\n    font-family: 'Material Icons';\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/MaterialIcons-Regular.eot);\n    src: local('Material Icons'), \n    local('materialIcons-Regular'), \n    url(../../../../../assets/fonts/materialIcons-Regular.woff2) format('woff2'), \n    url(../../../../../assets/fonts/materialIcons-Regular.woff) format('woff'), \n    url(../../../../../assets/fonts/materialIcons-Regular.ttf) format('truetype')\n}\n\n.material-icons {\n font-family: 'Material Icons';\n font-weight: normal;\n font-style: normal;\n display: inline-block;\n line-height: 1;\n text-transform: none;\n letter-spacing: normal;\n word-wrap: normal;\n white-space: nowrap;\n direction: ltr;\n\n /* Support for all WebKit browsers. */\n -webkit-font-smoothing: antialiased;\n /* Support for Safari and Chrome. */\n text-rendering: optimizeLegibility;\n\n /* Support for Firefox. */\n -moz-osx-font-smoothing: grayscale;\n\n /* Support for IE. */\n -webkit-font-feature-settings: 'liga';\n         font-feature-settings: 'liga';\n}\n\n@font-face {\n    font-family: montserratregular;\n   font-style: normal;\n   font-weight: 400;\n   src: url(../../../../../assets/fonts/montserrat-regular-webfont.eot) format(\"embedded-opentype\"), \n   url(../../../../../assets/fonts/montserrat-regular-webfont.woff2) format(\"woff2\"),\n   url(../../../../../assets/fonts/montserrat-regular-webfont.woff) format(\"woff\"), \n   url(../../../../../assets/fonts/montserrat-regular-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratbold;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-bold-webfont.eot) format(\"embedded-opentype\"), \n    url(../../../../../assets/fonts/montserrat-bold-webfont.woff2) format(\"woff2\"), \n    url(../../../../../assets/fonts/montserrat-bold-webfont.woff) format(\"woff\"), \n    url(../../../../../assets/fonts/montserrat-bold-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratsemibold;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-semibold-webfont.eot?#iefix) format(\"embedded-opentype\"), \n    url(../../../../../assets/fonts/montserrat-semibold-webfont.woff2) format(\"woff2\"), \n    url(../../../../../assets/fonts/montserrat-semibold-webfont.woff) format(\"woff\"), \n    url(../../../../../assets/fonts/montserrat-semibold-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratlight;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-light-webfont.eot) format(\"embedded-opentype\"), \n    url(../../../../../assets/fonts/montserrat-light-webfont.woff2) format(\"woff2\"), \n    url(../../../../../assets./fonts/montserrat-light-webfont.woff) format(\"woff\"), \n    url(../../../../../assets/fonts/montserrat-light-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserrathairline;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-hairline-webfont.eot?#iefix) format(\"embedded-opentype\"), url(../../../../../assets/fonts/montserrat-hairline-webfont.woff2) format(\"woff2\"), url(../../../../../assets/fonts/montserrat-hairline-webfont.woff) format(\"woff\"), url(../../../../../assets/fonts/montserrat-hairline-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratultra_light;\n    src: url(../../../../../assets/fonts/montserrat-ultralight-webfont.woff2) format('woff2'), url(../../../../../assets/fonts/montserrat-ultralight-webfont.woff) format('woff'), url(../../../../../assets/fonts/montserrat-ultralight-webfont.ttf) format('truetype');\n    font-weight: 400;\n    font-style: normal\n}\n\n.font_newlight {\n    font-family: montserratlight!important\n}\n\n.font_newhairline {\n    font-family: montserrathairline\n}\n\n.font_newregular {\n    font-family: montserratregular\n}\n\n.font_newbold {\n    font-family: montserratbold\n}\n\n.font_semibold {\n    font-family: montserratsemibold\n}\nul,li{\n  list-style: none;\n}\na:hover, a:focus{\n  -webkit-transition: all 0.3s ease 0s !important;\n  transition: all 0.3s ease 0s !important;\n}\na:focus, img:focus, button:focus{\n  outline: none !important;\n}\n.ellipsis {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.btn-flat{\n  border-radius: 0px;\n}\n.btn-basic{\n  color: #e97252;\n  border: 1px solid #dae2e6;\n  font-size: 13px;\n}\n.btn-basic2{\n  color: #e97252;\n  border: 1px solid #dae2e6;\n  font-size: 11px;\n  background: #f6f8f9;\n  padding: 10px;\n}\n.btn-basic2 i{\n  color: #e97252;\n  font-size: 14px;\n  position: relative;\n  top: 3px;\n}\n.no-padding{\n  padding: 0px;\n}\n.position-right{\n  right: 0px;\n}\n.navbar-fixed-top .nav-padding{\n  padding-left: 30px;\n  padding-right: 30px;\n}\n.template-outr{\n  padding-left: 30px;\n}\n.template-outr .no-padding{\n  padding: 0px;\n}\n/* responsive tabs css start */\n\n.panel-heading {\n    padding: 0\n}\n.panel-heading a {\n    display: block;\n    padding: 20px 10px;\n}\n.panel-heading a.collapsed {\n    background: #fff\n}\n.panel-heading a {\n    background: #f7f7f7;\n    border-radius: 5px;\n}\n.panel-heading a:after {\n    content: '-'\n}\n.panel-heading a.collapsed:after {\n    content: '+'\n}\n.nav.nav-tabs li a,\n.nav.nav-tabs li.active > a:hover,\n.nav.nav-tabs li.active > a:active,\n.nav.nav-tabs li.active > a:focus {\n    border-bottom-width: 0px;\n    outline: none;\n}\n.nav.nav-tabs li a {\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n.tab-pane {\n    background: #fff;\n    padding: 10px;\n    border: 1px solid #ddd;\n    margin-top: -1px;\n}\n\n/* start: common css */\n.np{padding: 0px;}\n.clearfix {\n    clear: both;\n    float: left;\n    width: 100%;\n}\n.text-center{\n  text-align: center;\n}\n.section {\n    width: 100%;\n    float: left;\n}\na:hover, a:focus{text-decoration: none; color: #8e989f;}\n.font-italic{font-style: italic;}\n.text-grey{color: #8e989f;}\n.dis-block{display: block;}\n/* end: common css */\n\n#main {\n    height: 100%;\n    width: 100%;\n    float: left;\n}\n#main .container {\n    width: 100%;\n    padding: 0 30px;\n}\n\n/* Start: header section */\n#header {\n    height: 65px;\n}\n#header .logo {\n    padding-right: 40px;\n    margin-right: 0px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n#header .logo a img.standard-logo {\n    display: block;\n    max-width: 100%;\n}\n.logo {\n    /*float: left;*/\n    font-size: 32px;\n    line-height: 100%;\n    height: 35px;\n}\n#header .menu {\n    /*float: right;\n    width: 83%;*/\n    margin-top: 20px;\n}\n.navbar {\n    margin-top: 20px;\n    min-height: 35px;\n}\n.top-search{\n    /*float: left;\n    width: 90%;  */\n    border-right: 1px solid #dae2e6;\n    border-left: 1px solid #dae2e6;\n    padding-left: 30px;\n}\n.top-search .form-group {\n    padding-bottom: 0;\n    margin: 0;\n}\n.top-search input{\n    font-size: 14px;\n    color: #bec5c9;\n    font-family: robotoregular !important;\n    box-shadow: none;\n    border: none;\n    float: left;\n    width: 95%;\n}\n.top-search input.form-control:focus {\n    border-color: none;\n    outline: none;\n    box-shadow: none;\n    background: none;\n}\n.top-search input[type=text] {\n    font-size: 14px;\n    color: #bec5c9;\n    border: none;\n    background: none;\n    padding: 6px 12px;\n    margin-bottom: 0px;\n}\n.top-search input::-webkit-input-placeholder {\n    font-size: 14px !important;\n}\n.top-search span.icon {\n    float: left;\n    margin-top: 10px;\n}\n.top-search span.icon i{\n    font-size: 18px;\n    color: #bec5c9;\n}\n.login{\n  /*float: right;\n  width: 10%;*/\n}\n.login-text {\n    float: right;\n    color: #8e989f;\n    font-size: 14px;\n    padding-top: 5px;\n}\n.login .login-text span.icon i {\n    font-size: 18px;\n    color: #ee795a;\n    top: 0px;\n    position: relative;\n}\n.login a:hover.login-text {\n    text-decoration: none;\n    color: #8e989f;\n}\n.signup-text{\n    float: right;\n    color: #8e989f;\n    font-size: 14px;\n    padding-top: 5px;\n    margin-right: 15px;\n}\n.login .signup-text span.icon i {\n    font-size: 18px;\n    color: #ee795a;\n    top: 0px;\n    position: relative;\n}\n.login a:hover.signup-text, .login a:focus.signup-text, .login a:active.signup-text {\n    text-decoration: none;\n    color: #8e989f;\n}\n\n/* End: header section */\n\n/* start: tabs section */\n.main-tabs .nav>li>a {\n    padding: 8px 40px;\n    font-size: 13px;\n    color: #8e989f !important;\n    line-height: 20px;\n    border-right: 1px solid #e9eef0 !important;\n    border-radius: 0;\n    margin-right: 0px;\n    width: 185px;\n    text-align: center;\n}\n.main-tabs .nav-tabs>li.active>a, .main-tabs .nav-tabs>li.active>a:focus, .main-tabs .nav-tabs>li.active>a:hover {\n    color: #8e989f !important;\n    cursor: pointer;\n    background-color: #e9eef0 !important;\n    border: none;\n    border-bottom-color: transparent;\n}\n.main-tabs .nav>li>a:hover {\n    background-color: #e9eef0 !important;\n    color: #8e989f !important;\n}\n.main-tabs .nav-tabs {\n    border-bottom: 1px solid #e9eef0;\n    border-top: 1px solid #e9eef0;\n    background: none;\n}\n.main-tabs .tab-pane {\n    background: #fff;\n    padding: 10px 0;\n    border: none;\n    margin-top: 0px;\n    float: left;\n}\n.main-tabs h1{\n  font-size: 24px;\n  color: #8e989f;\n  font-family: 'robotoregular';\n}\n.main-tabs p{\n  font-size: 14px;\n  color: #8e989f;\n  font-family: 'robotoregular';\n}\n.main-tabs hr {\n    margin-top: 30px;\n    margin-bottom: 35px;\n    border: 0;\n    border-top: 1px solid #e9eef0 !important;\n}\n.btn-blue {\n    color: #fff !important;\n    background-color: #5cc9e6 !important;\n    border-color: #5cc9e6 !important;\n    border-radius: 0 !important;\n    padding: 7px 60px !important;\n    margin-top: 15px !IMPORTANT;\n    margin-right: 25px !important;\n    -webkit-transition: all 0.3s ease 0s;\n    transition: all 0.3s ease 0s;\n    text-transform: none !important;\n}\n.btn-blue:hover, .btn-blue:focus, .btn-blue:active {\n    color: #fff;\n    background-color: #57bdd8;\n    border-color: #57bdd8;\n    box-shadow: none;\n}\nhr {\n    margin-top: 30px;\n    margin-bottom: 30px;\n    border: 0;\n    border-top: 1px solid #e9eef0 !important;\n}\n/* end: tabs section */\n\n/* Start: sec featured */\n.featured-section{\n   float: left;\n   width: 100%;\n}\n.featured-section h2{\n  font-size: 22px;\n  color: #269fd8;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n.featured-section span{\n  color: #8e989f;\n  font-size: 14px;\n}\n.featured-section .featured-text-block {\n    line-height: 22px;\n}\n.featured-section .icon i.material-icons {\n    font-size: 48px;\n    color: #c2c9cd;\n}\n.featured-section .icon-list{\n    margin-right: 15px;\n    position: relative;\n}\n.featured-section .icon-list span.badge {\n    position: absolute;\n    bottom: 0;\n    right: 0px;\n    background: #f65a30;\n    color: #fff;\n    font-size: 10px;\n    font-family: robotobold;\n    box-shadow: 0px 1px 1px rgba(0,0,0,0.18);\n}\n.featured-section .icon-list.active .icon i.material-icons {\n    color: #8e989f;\n}\n.featured-section .icon-list.active .icon i.material-icons {\n    color: #8e989f;\n}\n.featured-section .icon-list .icon i.material-icons:hover {\n    color: #8e989f;\n}\n.featured-list{margin-top: 25px;}\n/* End: sec featured */\n\n/* start: footer */\n.footer-main{\n  float: left;\n  width: 100%;\n}\n.footer-top{\n  float: left;\n  width: 100%;\n  background: #e9eef0;\n  padding: 20px 10px 30px;\n}\n.footer-main .footer-top p{\n    font-size: 13px;\n    color: #8e989f;\n    line-height: 18px;\n    margin-top: 15px;\n}\n.footer-main .footer-top .footer-social-icons{\n    margin-top: 30px;\n}\n.footer-main .footer-top .footer-social-icons a img{\n    margin-right: 5px;\n}\n.footer-bottom{\n  float: left;\n  width: 100%;\n  margin: 25px 0px 15px;\n}\n.footer-bottom a{\n  color: #bbc1c5;\n  font-size: 12px;\n}\n.footer-bottom a:hover, .footer-bottom a:focus, .footer-bottom a:active{\n  text-decoration: none;\n  color: #8e989f;\n}\n.footer-bottom p.copyright{\n  font-size: 13px;\n  color: #bbc1c5;\n  text-align: right;\n}\n\n/* end: footer */\n\n/* Start: Modal Forms Materiliaze CSS */\n    .modal i.material-icons {\n        font-size: 18px;\n        color: #fff;\n    }\n\n    .modal button.close.btn-close {\n        position: absolute;\n        right: 15px;\n        top: 15px;\n        z-index: 9;\n        opacity: 0.7;\n         -webkit-transition: all 0.3s ease 0s !important;\n         transition: all 0.3s ease 0s !important;\n    }\n\n    .modal .close:focus, .modal .close:hover {\n        color: #000;\n        text-decoration: none;\n        cursor: pointer;\n        filter: alpha(opacity=50);\n        opacity: .9 !important;\n    }\n\n    .modal-open .modal {\n        overflow-x: hidden;\n    }\n\n    .modal{\n        font-family: montserratregular;\n    }\n\n    .modal .form-control {\n        height: 38px;\n        padding: 7px 0;\n        font-size: 14px;\n        line-height: 1.42857143;\n        font-family: montserratregular;\n        color: #62696d;\n    }\n\n    .modal .form-group label.control-label {\n        font-size: 14px;\n        line-height: 1.07142857;\n        color: #8e989f;\n        font-weight: 400;\n        margin: 16px 0 0 0;\n        font-family: montserratregular;\n    }\n\n    .modal .form-group.label-floati62696dng label.control-label,\n    .modal .form-group.label-placeholder label.control-label {\n        top: -7px;\n        font-size: 14px;\n        line-height: 18px;\n    }\n\n    .modal .form-group.label-floating:not(.is-empty) label.control-label {\n        top: -20px;\n        font-family: montserratregular;\n        font-size: 10px !important;\n        text-transform: uppercase;\n        color: #8e989f !important;\n    }\n\n    .modal .form-group.label-floating.is-focused label.control-label {\n        top: -20px;\n        font-size: 10px !important;\n        font-family: montserratregular;\n        color: #fb545b !important;\n    }\n\n    .modal .form-group.is-focused label,\n    .modal .form-group.is-focused label.control-label {\n        color: #8e989f;\n        text-transform: uppercase;\n    }\n\n    .modal .form-control,\n    .modal .form-group .form-control {\n      border: 0;\n      background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n      background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #D2D2D2);\n      background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #d7dbdd);\n      background-image: linear-gradient(#009688, #009688), linear-gradient(#d7dbdd, #d7dbdd);\n    }\n\n    .modal .form-group.is-focused .form-control {\n      outline: none;\n      background-image: -webkit-gradient(linear, left top, left bottom, from(#fb545b), to(#fb545b)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n      background-image: -webkit-linear-gradient(#fb545b, #fb545b), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n      background-image: linear-gradient(#fb545b, #fb545b), linear-gradient(#D2D2D2, #D2D2D2);\n      background-size: 100% 2px, 100% 1px;\n      box-shadow: none;\n      -webkit-transition-duration: 0.3s;\n              transition-duration: 0.3s;\n    }\n\n    .modal .form-group {\n        padding-bottom: 7px;\n        margin: 12px 0 0 0;\n        clear: both;\n    }\n\n    .modal-backdrop {\n        background: rgba(0, 0, 0, 0.99) !important;\n    }\n\n/* End: Modal Forms Materiliaze CSS */\n\n/* end: product css*/\n\n/* custom material css start (sahil) */\n    .sahil-material .form-control {\n        height: 38px;\n        padding: 7px 0;\n        font-size: 14px;\n        line-height: 1.42857143;\n        font-family: montserratregular;\n        color: #62696d;\n    }\n    .sahil-material .form-group label.control-label {\n        font-size: 14px;\n        line-height: 1.07142857;\n        color: #8e989f;\n        font-weight: 400;\n        margin: 16px 0 0 0;\n        font-family: montserratregular;\n    }\n    .sahil-material .form-group label.control-label.seo-static-label{\n        text-transform: uppercase !important;\n        font-size: 11px;\n        color: #8e989f !important;\n    }\n    .sahil-material .form-group.label-floating label.control-label,\n    .sahil-material .form-group.label-placeholder label.control-label {\n        top: -7px;\n        font-size: 14px;\n        line-height: 18px;\n        color: #8e989f;\n    }\n    .sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\n        top: -20px;\n        font-family: montserratregular;\n        font-size: 11px;\n        text-transform: uppercase;\n        color: #8e989f !important;\n    }\n    .sahil-material .form-group.label-floating.is-focused label.control-label {\n        top: -20px;\n        font-size: 11px;\n        font-family: montserratregular;\n        color: #8e989f !important;\n    }\n    .sahil-material .form-group.is-focused label,\n    .sahil-material .form-group.is-focused label.control-label {\n        font-size: 11px;\n        font-family: montserratregular;\n        color: #8e989f !important;\n        text-transform: uppercase;\n    }\n    .sahil-material .form-control,\n    .sahil-material .form-group .form-control {\n        border: 0 !important;\n        background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n        background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #D2D2D2);\n        background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #d7dbdd);\n        background-image: linear-gradient(#009688, #009688), linear-gradient(#d7dbdd, #d7dbdd);\n    }\n    /*input:-webkit-autofill,\n    input:-webkit-autofill:hover,\n    input:-webkit-autofill:focus,\n    input:-webkit-autofill:active,\n    .form-group.is-focused input:-webkit-autofill,\n    .form-group.is-focused input:-webkit-autofill:hover,\n    .form-group.is-focused input:-webkit-autofill:focus,\n    .form-group.is-focused input:-webkit-autofill:active {\n        -webkit-box-shadow: 0 0 0px 20px #fff inset !important;\n    }*/\n    .sahil-material .form-group.is-focused .form-control {\n        outline: none;\n        background-image: -webkit-gradient(linear, left top, left bottom, from(#fb545b), to(#fb545b)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n        background-image: -webkit-linear-gradient(#fb545b, #fb545b), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n        background-image: linear-gradient(#fb545b, #fb545b), linear-gradient(#D2D2D2, #D2D2D2);\n        background-size: 100% 2px, 100% 1px;\n        box-shadow: none;\n        -webkit-transition-duration: 0.3s;\n                transition-duration: 0.3s;\n    }\n\n/* custom material css end (sahil) */\n\n\n/* Start: Modal Login (materialize) */\n    #login.login {\n        width: 100%;\n        float: left;\n            /*margin-top: -72px;*/\n    }\n\n    #login .login-content{\n      border-radius: 0px;\n      /*border: 1px solid #e9eef0;*/\n      float: left;\n      width: 100%;\n    }\n\n    #login .login-header {\n        padding: 20px 25px;\n        border-bottom: none;\n    }\n\n    #login .logo-section{\n        margin-bottom: 40px;\n    }\n\n    #login .logo-section span{\n        display: block;\n        font-size: 30px;\n        color: #fb545b;\n        font-family: montserratultra_light;\n        line-height: 36px;\n        margin-top: 10px;\n    }\n\n    #login .login-logo{\n        /*margin-bottom: 50px;\n        margin-top: 40px;*/\n    }\n\n    #login .login-body {\n        position: relative;\n        padding: 0px;\n        float: left;\n        width: 100%;\n        /*background: #f6f8f9;*/\n        z-index: 9999;\n    }\n\n    #login .login-left{\n        width: 50%;\n        float: left;\n        padding: 40px 40px 40px 30px;\n        display: table;\n        height: 100vh;\n        /*margin-top: 35px;*/\n        background: #fff;\n    }\n\n    #login .login-left-inner {\n        display: table-cell;\n        vertical-align: middle;\n        float: none;\n    }\n\n    #login .login-right {\n        background: #fb545b;\n        float: left;\n        width: 50%;\n        /*min-height: 350px;*/\n        height: 100vh;\n        padding: 30px;\n        display: table;\n        /*margin-top: 35px; */\n    }\n\n    #login .login-right-inner {\n        display: table-cell;\n        vertical-align: middle;\n        float: none;\n    }\n\n    /*#login .img-margin{\n        margin: 40px 0px 15px;\n    }*/\n\n    #login .img-section {\n        float: left;\n        width: 100%;\n        margin: 40px 0px 0px;\n        /*margin-left: 5% !important;*/\n        position: relative;\n        min-height: 365px;\n    }\n\n    #login .img-width{\n        width: auto;\n        /*margin-left: 5% !important;*/\n        box-shadow: -9px -9px 12px rgba(0, 0, 0, 0.14);\n        /*position: relative;*/\n    }\n\n    .login-img1 {\n        position: absolute;\n        left: 30px;\n        top: 0;\n    }\n\n    .login-img2 {\n        position: absolute;\n        left: 233px;\n        top: 78px;\n        z-index: 9;\n    }\n\n    .login-img3 {\n        position: absolute;\n        left: 130px;\n        top: 180px;\n        z-index: 9;\n    }\n\n    #login .input-group {\n        width: 100%;\n        margin-top: 30px;\n        border-bottom: 1px solid #d7dbdd;\n    }\n\n    #login .input-field {\n        float: left !important;\n        /* width: 100% !important; */\n        border: none;\n        box-shadow: none;\n        color: #8e989f;\n        font-size: 14px;\n        font-family: montserratregular;\n        padding: 0;\n    }\n\n    #login input[type=\"email\"]::-webkit-input-placeholder,\n    #login input[type=\"password\"]::-webkit-input-placeholder,\n    #login input[type=\"text\"]::-webkit-input-placeholder {\n      color: #8e989f !important;\n    }\n\n    #login.login .form-group label.control-label {\n        font-size: 14px;\n        line-height: 1.07142857;\n        color: #8e989f;\n        font-weight: 400;\n        margin: 16px 0 0 0;\n        font-family: montserratregular;\n    }\n\n    #login .dont-acc-signup {\n        color: #62696d !important;\n        font-size: 12px;\n        font-family: montserratregular;\n        margin-bottom: 0px;\n        padding-top: 10px;\n        opacity: 1;\n    }\n\n    #login .forgot-btn {\n        position: absolute;\n        right: 2px;\n        bottom: 25px;\n        z-index: 9;\n        color: #fb545b !important;\n        font-size: 11px;\n        text-transform: uppercase;\n        font-family: montserratregular;\n         opacity: 1;\n    }\n\n    #login .forgot-btn:hover,  #login .forgot-btn:focus{\n        color: #fa5282;\n    }\n\n    #login .btn-login{\n        margin-top: 40px !important;\n        margin-bottom: 0px !important;\n    }\n\n    #login.login .val-success-msg {\n        float: left;\n        margin: 0;\n    }\n\n    #login.login button.close.btn-close {\n        position: absolute;\n        right: 15px;\n        top: 15px;\n        z-index: 9;\n        opacity: 0.7;\n        -webkit-transition: all 0.3s ease 0s !important;\n        transition: all 0.3s ease 0s !important;\n    }\n\n    #login.login button.close.btn-close:focus, #login.login button.close.btn-close:hover {\n        color: #000;\n        text-decoration: none;\n        cursor: pointer;\n        filter: alpha(opacity=50);\n        opacity: .9 !important;\n    }\n\n    #login.login button.close.btn-close i.material-icons {\n        font-size: 18px;\n        color: #fff;\n    }\n\n    #login.login .alert.alert-danger {\n        background: none !important;\n        position: relative;\n        width: 100%;\n    }\n\n    #login.login .alert.alert-danger p{\n        position: absolute;\n        width: 100%;\n    }\n    #login.login .alert.alert-danger.custom-alert{ padding: 10px; background: #feddde !important;}\n    #login.login .alert.alert-danger.custom-alert p{position: relative;}\n    #login.login{\n    width: 100%;\n    float: left;\n    }\n\n    #login.login .alert.alert-danger span.mat-icon{\n        float: left;\n        width: auto;\n    }\n\n    #login.login .alert.alert-danger span.mat-icon i.material-icons {\n        font-size: 12px;\n        margin-right: 5px;\n        margin-top: 1px;\n        color: #fb545b;\n    }\n\n    #login.login .form-group:first-child{\n        margin-top: 12px;\n    }\n\n    #login.login .form-group{\n        padding-bottom: 7px;\n        margin: 23px 0 0;\n        clear: both;\n    }\n\n    a.text-red{\n        color: #fb545b;\n    }\n\n    a.text-red:hover, a.text-red:focus{\n        color: #fa5282;\n    }\n\n    .video-wrapper{\n        position: relative;\n        float: left;\n        width: 100%;\n    }\n\n    iframe {\n        position: absolute;\n        top: 70px;\n        left: 98px;\n        right: 0;\n        width: 68%;\n    }\n\n    /* Start: login-testimonial */\n\n        .login-testimonial {\n            float: left;\n            width: 100%;\n            padding: 0px 25px;\n        }\n\n        .testimonial-block {\n            background: rgba(255,255,255, 0.3);\n            border-radius: 50%;\n            width: 76px;\n            height: 76px;\n            float: left;\n            position: relative;\n        }\n\n        .testimonial-block span{\n            position: absolute;\n            top: -15px;\n            left: 18px;\n            font-size: 120px;\n            color: #fff;\n            font-family: montserratlight;\n        }\n\n        .testimonial-content {\n            float: left;\n            width: 82%;\n            margin-left: 20px;\n            margin-top: 10px;\n        }\n\n        .testi-desc{\n            float: left;\n            width: 100%;\n            font-size: 24px;\n            color: #fff;\n            line-height: 26px;\n            font-family: montserratlight;\n        }\n\n        .testi-client{\n            font-size: 16px;\n            color: rgba(255,255,255,0.8);\n            line-height: 26px;\n            font-family: montserratregular;\n            font-style: italic;\n            float: left;\n            width: 100%;\n            padding-top: 15px;\n        }\n\n    /* End: login-testimonial */\n\n    /* Start: loading dots */\n\n        .loading:after {\n            content: ' .';\n            -webkit-animation: dots 1s steps(5, end) infinite;\n                    animation: dots 1s steps(5, end) infinite;\n            font-size: 18px;\n            line-height: 1px;\n            position: relative;\n            left: -3px;\n        }\n\n        @-webkit-keyframes dots {\n            0%, 20% {\n                color: rgba(0,0,0,0);\n                text-shadow: .25em 0 0 rgba(0,0,0,0),\n                                .5em 0 0 rgba(0,0,0,0);\n            }\n\n            40% {\n                color: white;\n                text-shadow: .25em 0 0 rgba(0,0,0,0),\n                             .5em 0 0 rgba(0,0,0,0);\n            }\n\n            60% {\n                text-shadow: .25em 0 0 white,\n                             .5em 0 0 rgba(0,0,0,0);\n            }\n            80%, 100% {\n                text-shadow: .25em 0 0 white,\n                             .5em 0 0 white;\n            }\n\n        }\n\n        @keyframes dots {\n            0%, 20% {\n                color: rgba(0,0,0,0);\n                text-shadow: .25em 0 0 rgba(0,0,0,0),\n                                .5em 0 0 rgba(0,0,0,0);\n            }\n\n            40% {\n                color: white;\n                text-shadow: .25em 0 0 rgba(0,0,0,0),\n                             .5em 0 0 rgba(0,0,0,0);\n            }\n\n            60% {\n                text-shadow: .25em 0 0 white,\n                             .5em 0 0 rgba(0,0,0,0);\n            }\n            80%, 100% {\n                text-shadow: .25em 0 0 white,\n                             .5em 0 0 white;\n            }\n\n        }\n\n    /* End: loading dots */\n\n/* End: Modal Login (materialize) */\n\n/* Start: Responsive - Login Modal */\n\n    @media (max-width: 767px){\n        #login.login{\n            padding-left: 0;\n            margin-top: -50px;\n        }\n\n        #login .login-right{\n            display: none;\n        }\n\n        #login.login .login-dialog {\n            width: auto;\n        }\n\n        #login.login .login-left{\n            width: 100%;\n            padding: 40px 30px 60px;\n        }\n\n        #login .login-logo{\n            margin-top: 10px;\n        }\n\n        #login.login button.close.btn-close i.material-icons{\n            color: #8e989f !important;\n        }\n\n    }\n\n    @media screen and (min-width: 768px) and (max-width: 768px) {\n        .testimonial-block{\n            float: none;\n            margin: 0 auto;\n        }\n\n        .testimonial-content{\n            float: left;\n            width: 100%;\n            margin-left: 0;\n        }\n\n        .testi-desc{\n            text-align: center;\n        }\n\n        .testi-client{\n            text-align: center;\n        }\n\n        /*.video-wrapper iframe{\n            position: absolute;\n            top: 60px;\n            left: 55px;\n            right: 0;\n            width: 215px;\n            height: 120px;\n        }*/\n\n        .login-testimonial {\n            padding: 0px 25px;\n        }\n\n        #login .login-right {\n            padding: 0px;\n        }\n\n        .testi-desc{\n            font-size: 18px;\n        }\n\n        .testi-client {\n            font-size: 13px;\n        }\n\n        #login .img-width {\n            width: 54%;\n        }\n\n        .login-img2 {\n            left: 145px;\n            top: 45px;\n        }\n\n        .login-img3 {\n            left: 85px;\n            top: 105px;\n        }\n\n        #login .img-section {\n            margin: 55px 0px 0px;\n            min-height: 217px;\n        }\n\n    }\n\n    @media screen and (min-width: 1024px) and (max-width: 1024px) {\n        .testimonial-block{\n            float: none;\n            margin: 0 auto;\n        }\n\n        .testimonial-content{\n            float: left;\n            width: 100%;\n            margin-left: 0;\n        }\n\n        .testi-desc{\n            text-align: center;\n        }\n\n        .testi-client{\n            text-align: center;\n        }\n\n        /*iframe.iframe-1024{\n            position: absolute;\n            top: 60px;\n            left: 74px;\n            right: 0;\n            width: 305px;\n            height: 177px;\n        }*/\n\n        #login .img-width{\n            width: 55%;\n        }\n\n        .login-img2{\n            left: 165px;\n            top: 52px;\n        }\n\n        .login-img3{\n            left: 100px;\n            top: 122px;\n        }\n\n        #login .img-section {\n            min-height: 253px;\n        }\n\n    }\n\n    @media screen and (min-width: 1024px) and (max-width: 1279px) {\n        #login .img-width{\n            width: 55%;\n        }\n\n        .login-img2{\n            left: 165px;\n            top: 52px;\n        }\n\n        .login-img3{\n            left: 100px;\n            top: 122px;\n        }\n\n        #login .img-section {\n            min-height: 253px;\n        }\n\n        .testimonial-block{\n            float: none;\n            margin: 0 auto;\n        }\n\n        .testi-desc {\n            text-align: center;\n        }\n\n        .testi-client{\n            text-align: center;\n        }\n\n    }\n\n    @media screen and (min-width: 1280px) and (max-width: 1280px) {\n        .testimonial-block{\n            float: none;\n            margin: 0 auto;\n        }\n\n        .testimonial-content{\n            float: left;\n            width: 100%;\n            margin-left: 0;\n        }\n\n        .testi-desc{\n            text-align: center;\n        }\n\n        .testi-client{\n            text-align: center;\n        }\n\n        /*iframe{\n            position: absolute;\n            top: 65px;\n            left: 92px;\n            right: 0;\n            width: 380px;\n            height: 214px;\n        }*/\n\n        #login .img-width{\n            width: 54%;\n        }\n\n        #login .img-section{\n            margin: 30px 0px 0px;\n            min-height: 325px;\n        }\n\n        .login-img2{\n            left: 200px;\n            top: 67px;\n        }\n\n        .login-img3{\n            left: 130px;\n            top: 155px;\n        }\n\n    }\n\n    @media screen and (min-width: 1920px) and (max-width: 1920px) {\n        /*iframe{\n            position: absolute;\n            top: 75px;\n            left: 140px;\n            right: 0;\n            width: 610px;\n            height: 347px;\n        }*/\n\n        #login .img-section{\n            width: 85%;\n            margin-left: 18%;\n        }\n\n    }\n\n/* End: Responsive - Login Modal */\n\n/* Start: Modal Full screen get premium*/\n.model-full{\n  width: 100%;\n  margin: 0px;\n}\n.two-side .modal-left {\n  width: 50%;\n  float: left;\n  height: 100vh;\n  display: table;\n  padding: 0px 170px;\n}\n.two-side .modal-left p{\n  font-size: 16px;\n  font-family: montserratlight;\n}\n.two-side .modal-right {\n  background: #fb545b;\n  float: left;\n  width: 50%;\n  padding: 30px;\n  height: 100vh;\n  display: table;\n}\n.two-side .modal-right p{\n  color: #fff;\n  font-size: 14px\n}\n.two-side .modal-content {\n  border-radius: 0px;\n  float: left;\n  width: 100%;\n}\n.two-side .modal-right img{\n  margin: 40px 0px;\n  width: 100%;\n  box-shadow: 0 1px 27px 8px rgba(0, 0, 0, 0.7);\n}\n.two-side .modal-body{\n  padding: 0px;\n}\n.two-side .modal-content {\n  border-radius: 0px;\n  margin: 0px;\n  border: none;\n}\n.two-side .table-center {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  float: none;\n}\n\n.two-side .premium-label {\n  background: #fb545b;\n  color: #fff;\n  display: inline-block;\n  font-size: 11px;\n  padding: 1px 17px;\n  border-radius: 12px;\n  margin-top: 15px;\n  margin-bottom: 30px;\n}\n.two-side a{\n  color: #fb545b;\n  font-size: 12px;\n\n}\n.two-side .btn-red{\n  margin-bottom: 15px;\n  padding: 7px 40px !Important;\n}\n\n/*.two-side .btn-red:hover {\n    background: #fff !important;\n    color: #fb545b !important;\n    border: 1px solid #fb545b;\n}\n\n.two-side .btn-red:disabled {\n    background: #fb545b !important;\n    color: #fff !important;\n}*/\n\n#premiumPaymentModal.modal {\n    padding-right: 0px !important;\n}\n\n/* Start: Responsive of upgrade to pro modal */\n@media screen and (min-width: 320px) and (max-width: 768px){\n  .two-side .modal-left {\n    padding: 0 70px;\n    width: 100%;\n  }\n\n  .two-side .modal-right {\n    display: none;\n  }\n  .chart-position {position: absolute; top: -45px !important; left: -146px !important;}\n}\n\n@media screen and (min-width: 768px) and (max-width: 1023px){\n  .two-side .modal-left {\n    padding: 0px 85px;\n  }\n\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1100px){\n  .two-side .modal-left {\n    padding: 0px 150px;\n  }\n\n}\n\n/* End: Responsive of upgrade to pro modal */\n\n@media (max-width: 1900px) {\n    #signUp .form-group .control-label.label-url,\n    .modal .form-group.label-floating.is-focused label.control-label,\n    .modal .form-group.label-floating:not(.is-empty) label.control-label,\n    .my-profile .form-group.favicon-upload label.control-label,\n    .my-profile .form-group.time-zone label.control-label,\n    .sahil-material .form-group.label-floating.is-focused label.control-label,\n    .sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\n        font-size: 10px!important\n    }\n}\n\n.btn-red {\n    color: #fff;\n    background-color: #fb545b;\n    border-color: #fb545b;\n    border-radius: 0;\n    font-size: 14px;\n    padding: 7px 70px;\n    margin-top: 25px;\n    -webkit-transition: all .3s ease 0s;\n    transition: all .3s ease 0s;\n    margin-right: 0;\n    font-weight: 400;\n    text-transform: uppercase;\n    font-family: montserratregular;\n}\n.alert.alert-danger {\n    background: 0 0!important;\n    border: none;\n    position: relative;\n    top: -12px;\n    left: 0;\n    padding: 0;\n    color: #fb545b!important;\n    font-size: 11px;\n    margin: 0;\n    float: left;\n    width: 100%;\n    text-align: left\n}\n.alert.alert-danger p {\n    position: absolute;\n    width: 100%;\n    font-family: montserratregular;\n}\n.alert.alert-dange p span.mat-icon {\n    float: left;\n    width: auto\n}\n.alert.alert-danger p span.mat-icon i.material-icons {\n    float: left;\n    font-size: 12px!important;\n    margin-right: 5px;\n    margin-top: 1px;\n    color: #fb545b!important\n}\n.alert.alert-danger.custom-alert {\n    padding: 10px;\n    margin-top: 10px;\n    border-radius: 0;\n    background: #feddde!important\n}\n.alert.alert-danger.custom-alert p {\n    position: relative\n}\n.text-red {\n    color: #fb545b;\n}\na.text-red:focus,\na.text-red:hover {\n    color: #fa5282\n}\na.text-red {\n    cursor: pointer;\n}\n\n\n\n\n\n\n"

/***/ },

/***/ 748:
/***/ function(module, exports) {

module.exports = "/*################### 404  css start ###################*/\n@font-face {\n    font-family: 'Material Icons';\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/MaterialIcons-Regular.eot);\n    src: local('Material Icons'), \n    local('materialIcons-Regular'), \n    url(../../../../../assets/fonts/materialIcons-Regular.woff2) format('woff2'), \n    url(../../../../../assets/fonts/materialIcons-Regular.woff) format('woff'), \n    url(../../../../../assets/fonts/materialIcons-Regular.ttf) format('truetype')\n}\n\n.material-icons {\n font-family: 'Material Icons';\n font-weight: normal;\n font-style: normal;\n font-size: 24px;  /* Preferred icon size */\n display: inline-block;\n line-height: 1;\n text-transform: none;\n letter-spacing: normal;\n word-wrap: normal;\n white-space: nowrap;\n direction: ltr;\n\n /* Support for all WebKit browsers. */\n -webkit-font-smoothing: antialiased;\n /* Support for Safari and Chrome. */\n text-rendering: optimizeLegibility;\n\n /* Support for Firefox. */\n -moz-osx-font-smoothing: grayscale;\n\n /* Support for IE. */\n -webkit-font-feature-settings: 'liga';\n         font-feature-settings: 'liga';\n}\n\n@font-face {\n    font-family: montserratregular;\n   font-style: normal;\n   font-weight: 400;\n   src: url(../../../../../assets/fonts/montserrat-regular-webfont.eot) format(\"embedded-opentype\"), \n   url(../../../../../assets/fonts/montserrat-regular-webfont.woff2) format(\"woff2\"),\n   url(../../../../../assets/fonts/montserrat-regular-webfont.woff) format(\"woff\"), \n   url(../../../../../assets/fonts/montserrat-regular-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratbold;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-bold-webfont.eot) format(\"embedded-opentype\"), \n    url(../../../../../assets/fonts/montserrat-bold-webfont.woff2) format(\"woff2\"), \n    url(../../../../../assets/fonts/montserrat-bold-webfont.woff) format(\"woff\"), \n    url(../../../../../assets/fonts/montserrat-bold-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratsemibold;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-semibold-webfont.eot?#iefix) format(\"embedded-opentype\"), \n    url(../../../../../assets/fonts/montserrat-semibold-webfont.woff2) format(\"woff2\"), \n    url(../../../../../assets/fonts/montserrat-semibold-webfont.woff) format(\"woff\"), \n    url(../../../../../assets/fonts/montserrat-semibold-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratlight;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-light-webfont.eot) format(\"embedded-opentype\"), \n    url(../../../../../assets/fonts/montserrat-light-webfont.woff2) format(\"woff2\"), \n    url(../../../../../assets./fonts/montserrat-light-webfont.woff) format(\"woff\"), \n    url(../../../../../assets/fonts/montserrat-light-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserrathairline;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-hairline-webfont.eot?#iefix) format(\"embedded-opentype\"), url(../../../../../assets/fonts/montserrat-hairline-webfont.woff2) format(\"woff2\"), url(../../../../../assets/fonts/montserrat-hairline-webfont.woff) format(\"woff\"), url(../../../../../assets/fonts/montserrat-hairline-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratultra_light;\n    src: url(../../../../../assets/fonts/montserrat-ultralight-webfont.woff2) format('woff2'), url(../../../../../assets/fonts/montserrat-ultralight-webfont.woff) format('woff'), url(../../../../../assets/fonts/montserrat-ultralight-webfont.ttf) format('truetype');\n    font-weight: 400;\n    font-style: normal\n}\n\n.font_newlight {\n    font-family: montserratlight!important\n}\n\n.font_newhairline {\n    font-family: montserrathairline\n}\n\n.font_newregular {\n    font-family: montserratregular\n}\n\n.font_newbold {\n    font-family: montserratbold\n}\n\n.font_semibold {\n    font-family: montserratsemibold\n}\nbody.main-profile{ overflow: hidden;}\n.navbar-brand{\n    padding: 0px;\n    margin-left: 10px !important;\n    margin-top: 5px;\n}\n.custom-navbar.navbar-default{\n    background:#fff;\n    border:none;\n    padding: 10px;\n\tpadding-right: 25px;\n    margin: 0px;\n}\n.custom-navbar.navbar-default .navbar-nav > li{\n    margin-right: 20px;\n}\n.custom-navbar.navbar-default .navbar-nav > li > a{\n    font-size: 14px;\n    color: #62696d;\n    text-transform: uppercase;\n}\n.custom-navbar.navbar-default .navbar-nav > li > a:hover{\n    color: #fb5f66;\n}\n.custom-navbar.navbar-default .navbar-nav > li > a.active{\n    color: #fb5f66;\n}\n.custom-navbar.navbar-default .navbar-nav > li > a.line-through{\n    text-decoration: line-through;\n}\n.custom-navbar .btn-login{\n    background: #fb5f66;\n    color: #fff !important;\n    text-transform: none !important;\n    padding: 3px 30px;\n    margin-top: 10px;\n    border: 2px solid #fb5f66;\n}\n.custom-navbar .btn-login:hover{\n    border: 2px solid #fb5f66;\n    background: none;\n    color: #fb5f66 !important;\n}\n.custom-navbar .link-login{\n    color: #fb6c73 !important;\n    /*padding: 3px 30px;\n    margin-top: 10px;\n    border: 2px solid #fff;*/\n\tfont-family:montserratbold;\n}\n.custom-navbar .link-login:hover{\n    /*border: 2px solid #fb5f66;*/\n    background: none;\n    color: #fb5f66 !important;\n\topacity:0.5;\n}\n.nav-boxshadow{\n\tbox-shadow:0 2px 9px 1px rgba(0,0,0,0.2);\n}\n.section{\n    float: left;\n    width: 100%;\n    margin-top: 30px;\n    margin-bottom: 30px;\n}\n.section-1{\n    float: left;\n    width: 100%;\n    background: #fff; \n    padding-top: 52px;\n\tpadding-bottom: 30px;\n    margin-bottom: 0;\n}\n.section-1 .container-fluid{\n    padding: 0px;\n}\n.section-1-left{\n    padding-left: 55px;\n    display: table;\n}\n.section1-left-cell{\n    display: table-cell;\n    height: 83vh;\n    vertical-align: middle;\n}\n.section-1-left h3{\n    float: left;\n    width: 100%;\n    font-size: 36px;\n    font-family:montserratbold;\n    color: #fb6c73;\n    text-transform: uppercase;\n    margin-bottom: 30px;\n    margin-top: 0px;\n}\n.section-1-left h4{\n    float: left;\n    width: 100%;\n    font-size: 24px;\n    font-family:montserratlight;\n    color: #62696d;\n    margin-bottom: 30px;\n}\n.section-1-left input{\n    padding: 10px;\n    width: 70%;\n}\n.section-1-left .btn-buildcal{\n    background: #62696d;\n    border: none;\n    color: #fff;\n    float: left;\n    font-size: 18px;\n    text-transform: uppercase;\n    padding: 15px 25px;\n    margin-top: 20px;\n}\n.section-1-left .btn-buildcal i{\n    display: inline-block;\n    float:left;\n    margin-right: 10px;\n}\n.section-1-left .btn-bottominfo{\n    float: left;\n    width: 282px;\n    text-align: center;\n    margin-top: 10px;\n}\n.section-1-left .btn-bottominfo span{\n    float: none;\n    width: 100%;\n    color: #fb6c73;\n    font-size: 12px;\n    font-family: montserratbold;\n    text-align: left;\n}\n.section-1-left .btn-bottominfo label{\n    float: none;\n    width: 100%;\n    color: #62696d;\n    font-size: 12px;\n    font-family: montserratlight;\n}\n\n.section-1-left h3.heading-404{\n    float: left;\n    width: 100%;\n    font-size: 72px;\n    font-family: montserratsemibold;\n    color: #fb6c73;\n    text-transform: uppercase;\n    margin-bottom:0px;\n    margin-top: 0px;\n}\n.section-1-left h4.heading2-404 {\n    float: left;\n    width: 100%;\n    font-size: 18px;\n    font-family: montserratlight;\n    color: #62696d;\n    margin-bottom: 30px;\n    line-height: 25px;\n}\n.section-1 .btn-buildcal.login-404{\n    background: #62696d;\n    border: none;\n    color: #fff;\n    float: left;\n    font-size: 16px;\n    text-transform: uppercase;\n    border:2px solid #62696d;\n    padding: 15px 25px;\n    margin-top: 20px;\n\t-webkit-transition: .5s ease-in-out;\n    transition: .5s ease-in-out;\n}\n.section-1 .btn-buildcal.login-404:hover{\n    background:none;\n\tborder:2px solid #62696d;\n\tcolor:#62696d;\n}\n.sec1-box-left.img-404{\n    margin-top: 18%;\n}\n.footer-404{\n    position: fixed;\n    bottom: 15px;\n}\n.footer-404 i{\n    font-size: 14px;\n    color: #62696d;\n    position: relative;\n    top: 2px;\n    right: 4px;\n}\n.footer-404 span{\n    font-family: \"montserratlight\";\n    font-size: 14px;\n    color: #62696d;\n}\n.footer-404 img{\n    position: relative;\n    top: -3px;\n    right: -5px;\n}\n\n\n/*################### 404  css end ###################*/"

/***/ },

/***/ 749:
/***/ function(module, exports) {

module.exports = ".np {\n    padding: 0;\n}\n\n.model-full {\n    width: 100%;\n    margin: 0\n}\n\n.btn-red,\n.modal,\n.modal .form-control,\n.modal .form-group label.control-label {\n    font-family: montserratregular\n}\n\n.btn-red {\n    color: #fff!important;\n    background-color: #fb545b!important;\n    border-color: #fb545b!important;\n    border-radius: 0!important;\n    font-size: 14px!important;\n    padding: 7px 70px!important;\n    margin-top: 25px!important;\n    -webkit-transition: all .3s ease 0s;\n    transition: all .3s ease 0s;\n    margin-right: 0!important;\n    font-weight: 400;\n    text-transform: uppercase\n}\n\n.btn-red:active,\n.btn-red:focus,\n.btn-red:hover {\n    color: #fff;\n    background-color: #fb545b;\n    border-color: #fb545b;\n    box-shadow: none\n}\n\n.modal i.material-icons {\n    font-size: 18px;\n    color: #fff\n}\n\n.modal button.close.btn-close {\n    position: absolute;\n    right: 15px;\n    top: 15px;\n    z-index: 9;\n    opacity: .7;\n    -webkit-transition: all .3s ease 0s!important;\n    transition: all .3s ease 0s!important\n}\n\n.modal .form-group.is-focused .form-control,\n.my-profile .form-group.is-focused .form-control {\n    -webkit-box-shadow: none;\n    -webkit-transition-duration: .3s;\n    -o-transition-duration: .3s;\n    outline: 0\n}\n\n.two-side .modal-left,\n.two-side .modal-right {\n    width: 50%;\n    height: 100vh;\n    display: table;\n    float: left\n}\n\n.two-side .modal-left {\n    padding: 0 170px\n}\n\n.two-side .modal-left p {\n    font-size: 16px;\n    font-family: montserratlight\n}\n\n.two-side .modal-right {\n    background: #fb545b;\n    padding: 30px\n}\n\n.two-side .modal-right p {\n    color: #fff;\n    font-size: 14px\n}\n\n.two-side .modal-right img {\n    margin: 40px 0;\n    width: 100%;\n    box-shadow: 0 1px 27px 8px rgba(0, 0, 0, .7)\n}\n\n.two-side .modal-body {\n    padding: 0\n}\n\n.two-side .modal-content {\n    float: left;\n    width: 100%;\n    border-radius: 0;\n    margin: 0;\n    border: none\n}\n\n.two-side .table-center {\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center;\n    float: none\n}\n\n.two-side .premium-label {\n    background: #fb545b;\n    color: #fff;\n    display: inline-block;\n    font-size: 11px;\n    padding: 1px 17px;\n    border-radius: 12px;\n    margin-top: 15px;\n    margin-bottom: 30px\n}\n\n.two-side a {\n    color: #fb545b;\n    font-size: 12px\n}\n\n.two-side .btn-red {\n    margin-bottom: 15px\n}\n\n#premiumModal.modal {\n    padding-right: 0!important\n}\n"

/***/ },

/***/ 750:
/***/ function(module, exports) {

module.exports = "@font-face {\n    font-family: 'Material Icons';\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/MaterialIcons-Regular.eot);\n    src: local('Material Icons'), \n    local('materialIcons-Regular'), \n    url(../../../../../assets/fonts/materialIcons-Regular.woff2) format('woff2'), \n    url(../../../../../assets/fonts/materialIcons-Regular.woff) format('woff'), \n    url(../../../../../assets/fonts/materialIcons-Regular.ttf) format('truetype')\n}\n\n.material-icons {\n font-family: 'Material Icons';\n font-weight: normal;\n font-style: normal;\n display: inline-block;\n line-height: 1;\n text-transform: none;\n letter-spacing: normal;\n word-wrap: normal;\n white-space: nowrap;\n direction: ltr;\n\n /* Support for all WebKit browsers. */\n -webkit-font-smoothing: antialiased;\n /* Support for Safari and Chrome. */\n text-rendering: optimizeLegibility;\n\n /* Support for Firefox. */\n -moz-osx-font-smoothing: grayscale;\n\n /* Support for IE. */\n -webkit-font-feature-settings: 'liga';\n         font-feature-settings: 'liga';\n}\n\n@font-face {\n    font-family: montserratregular;\n   font-style: normal;\n   font-weight: 400;\n   src: url(../../../../../assets/fonts/montserrat-regular-webfont.eot) format(\"embedded-opentype\"), \n   url(../../../../../assets/fonts/montserrat-regular-webfont.woff2) format(\"woff2\"),\n   url(../../../../../assets/fonts/montserrat-regular-webfont.woff) format(\"woff\"), \n   url(../../../../../assets/fonts/montserrat-regular-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratbold;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-bold-webfont.eot) format(\"embedded-opentype\"), \n    url(../../../../../assets/fonts/montserrat-bold-webfont.woff2) format(\"woff2\"), \n    url(../../../../../assets/fonts/montserrat-bold-webfont.woff) format(\"woff\"), \n    url(../../../../../assets/fonts/montserrat-bold-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratsemibold;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-semibold-webfont.eot?#iefix) format(\"embedded-opentype\"), \n    url(../../../../../assets/fonts/montserrat-semibold-webfont.woff2) format(\"woff2\"), \n    url(../../../../../assets/fonts/montserrat-semibold-webfont.woff) format(\"woff\"), \n    url(../../../../../assets/fonts/montserrat-semibold-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratlight;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-light-webfont.eot) format(\"embedded-opentype\"), \n    url(../../../../../assets/fonts/montserrat-light-webfont.woff2) format(\"woff2\"), \n    url(../../../../../assets./fonts/montserrat-light-webfont.woff) format(\"woff\"), \n    url(../../../../../assets/fonts/montserrat-light-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserrathairline;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-hairline-webfont.eot?#iefix) format(\"embedded-opentype\"), url(../../../../../assets/fonts/montserrat-hairline-webfont.woff2) format(\"woff2\"), url(../../../../../assets/fonts/montserrat-hairline-webfont.woff) format(\"woff\"), url(../../../../../assets/fonts/montserrat-hairline-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratultra_light;\n    src: url(../../../../../assets/fonts/montserrat-ultralight-webfont.woff2) format('woff2'), url(../../../../../assets/fonts/montserrat-ultralight-webfont.woff) format('woff'), url(../../../../../assets/fonts/montserrat-ultralight-webfont.ttf) format('truetype');\n    font-weight: 400;\n    font-style: normal\n}\n\n.font_newlight {\n    font-family: montserratlight!important\n}\n\n.font_newhairline {\n    font-family: montserrathairline\n}\n\n.font_newregular {\n    font-family: montserratregular\n}\n\n.font_newbold {\n    font-family: montserratbold\n}\n\n.font_semibold {\n    font-family: montserratsemibold\n}\nul,li{\n  list-style: none;\n}\na:hover, a:focus{  \n  -webkit-transition: all 0.3s ease 0s !important;  \n  transition: all 0.3s ease 0s !important;\n}\na:focus, img:focus, button:focus{\n  outline: none !important;\n}\n.ellipsis {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.btn-flat{\n  border-radius: 0px;\n}\n.btn-basic{\n  color: #e97252;\n  border: 1px solid #dae2e6;\n  font-size: 13px;\n}\n.btn-basic2{\n  color: #e97252;\n  border: 1px solid #dae2e6;\n  font-size: 11px;\n  background: #f6f8f9;\n  padding: 10px;\n}\n.btn-basic2 i{\n  color: #e97252;\n  font-size: 14px;\n  position: relative;\n  top: 3px;\n}\n.no-padding{\n  padding: 0px;\n}\n.navbar-fixed-top .nav-padding{\n  padding-left: 30px;\n  padding-right: 30px;\n}\n.template-outr{\n  padding-left: 30px;\n}\n/* responsive tabs css start */\n\n.panel-heading {\n    padding: 0\n}\n.panel-heading a {\n    display: block;\n    padding: 20px 10px;\n}\n.panel-heading a.collapsed {\n    background: #fff\n}\n.panel-heading a {\n    background: #f7f7f7;\n    border-radius: 5px;\n}\n.panel-heading a:after {\n    content: '-'\n}\n.panel-heading a.collapsed:after {\n    content: '+'\n}\n.nav.nav-tabs li a,\n.nav.nav-tabs li.active > a:hover,\n.nav.nav-tabs li.active > a:active,\n.nav.nav-tabs li.active > a:focus {\n    border-bottom-width: 0px;\n    outline: none;\n}\n.nav.nav-tabs li a {\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n.tab-pane {\n    background: #fff;\n    padding: 10px;\n    border: 1px solid #ddd;\n    margin-top: -1px;\n}\n\n/* responsive tabs css end */\n\n\n\n/* start: product css*/\n\n/* start: common css */\n.np{padding: 0px;}\n.clearfix {\n    clear: both;\n    float: left;\n    width: 100%;\n}\n.text-center{\n  text-align: center;\n}\n.section {\n    width: 100%;\n    float: left;\n}\na:hover, a:focus{text-decoration: none; color: #8e989f;}\n.font-italic{font-style: italic;}\n.text-grey{color: #8e989f;}\n.dis-block{display: block;}\n/* end: common css */\n\n#main {\n    height: 100%;\n    width: 100%;\n    float: left;\n}\n#main .container {\n    width: 100%;\n    padding: 0 30px;\n}\n\n/* Start: header section */\n#header {\n    height: 65px;\n}\n#header .logo {\n    padding-right: 40px;\n    margin-right: 0px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n#header .logo a img.standard-logo {\n    display: block;\n    max-width: 100%;\n}\n.logo {\n    /*float: left;*/\n    font-size: 32px;\n    line-height: 100%;\n    height: 35px;\n}\n#header .menu {\n    /*float: right;\n    width: 83%;*/\n    margin-top: 20px;\n}\n.navbar {\n    margin-top: 20px;\n    min-height: 35px;\n}\n.top-search{\n    /*float: left;\n    width: 90%;  */  \n    border-right: 1px solid #dae2e6;\n    border-left: 1px solid #dae2e6;\n    padding-left: 30px;\n}\n.top-search .form-group {\n    padding-bottom: 0;\n    margin: 0;\n}\n.top-search input{\n    font-size: 14px;\n    color: #bec5c9;\n    font-family: robotoregular !important;\n    box-shadow: none;\n    border: none;\n    float: left;\n    width: 95%;\n}\n.top-search input.form-control:focus {\n    border-color: none;\n    outline: none;\n    box-shadow: none;\n    background: none;\n}\n.top-search input[type=text] {\n    font-size: 14px;\n    color: #bec5c9;\n    border: none;\n    background: none;\n    padding: 6px 12px;\n    margin-bottom: 0px;\n}\n.top-search input::-webkit-input-placeholder {\n    font-size: 14px !important;\n}\n.top-search span.icon {\n    float: left;\n    margin-top: 10px;\n}\n.top-search span.icon i{\n    font-size: 18px;    \n    color: #bec5c9;\n}\n.login{\n  /*float: right;\n  width: 10%;*/\n}\n.login-text {\n    float: right;\n    color: #8e989f;\n    font-size: 14px;\n    padding-top: 5px;\n}\n.login .login-text span.icon i {\n    font-size: 18px;\n    color: #ee795a;\n    top: 0px;\n    position: relative;\n}\n.login a:hover.login-text {\n    text-decoration: none;\n    color: #8e989f;\n}\n.signup-text{\n    float: right;\n    color: #8e989f;\n    font-size: 14px;\n    padding-top: 5px;\n    margin-right: 15px;\n}\n.login .signup-text span.icon i {\n    font-size: 18px;\n    color: #ee795a;\n    top: 0px;\n    position: relative;\n}\n.login a:hover.signup-text, .login a:focus.signup-text, .login a:active.signup-text {\n    text-decoration: none;\n    color: #8e989f;\n}\n\n/* End: header section */\n\n/* start: tabs section */\n.main-tabs .nav>li>a {\n    padding: 8px 40px;\n    font-size: 13px;\n    color: #8e989f !important;\n    line-height: 20px;\n    border-right: 1px solid #e9eef0 !important;\n    border-radius: 0;\n    margin-right: 0px;\n    width: 185px;\n    text-align: center;\n}\n.main-tabs .nav-tabs>li.active>a, .main-tabs .nav-tabs>li.active>a:focus, .main-tabs .nav-tabs>li.active>a:hover {\n    color: #8e989f !important;\n    cursor: pointer;\n    background-color: #e9eef0 !important;\n    border: none;\n    border-bottom-color: transparent;\n}\n.main-tabs .nav>li>a:hover {\n    background-color: #e9eef0 !important;\n    color: #8e989f !important;\n}\n.main-tabs .nav-tabs {\n    border-bottom: 1px solid #e9eef0;\n    border-top: 1px solid #e9eef0;\n    background: none;\n}\n.main-tabs .tab-pane {\n    background: #fff;\n    padding: 10px 0; \n    border: none;\n    margin-top: 0px;\n    float: left;\n}\n.main-tabs h1{\n  font-size: 24px;\n  color: #8e989f;\n  font-family: 'robotoregular';\n}\n.main-tabs p{\n  font-size: 14px;\n  color: #8e989f;\n  font-family: 'robotoregular';\n}\n.main-tabs hr {\n    margin-top: 30px;\n    margin-bottom: 35px;\n    border: 0;\n    border-top: 1px solid #e9eef0 !important;\n}\n.btn-blue {\n    color: #fff !important;\n    background-color: #5cc9e6 !important;\n    border-color: #5cc9e6 !important;\n    border-radius: 0 !important;\n    padding: 7px 60px !important;\n    margin-top: 15px !IMPORTANT;\n    margin-right: 25px !important;\n    -webkit-transition: all 0.3s ease 0s;\n    transition: all 0.3s ease 0s;\n    text-transform: none !important;\n}\n.btn-blue:hover, .btn-blue:focus, .btn-blue:active {\n    color: #fff;\n    background-color: #57bdd8;\n    border-color: #57bdd8;\n    box-shadow: none;\n}\nhr {\n    margin-top: 30px;\n    margin-bottom: 30px;\n    border: 0;\n    border-top: 1px solid #e9eef0 !important;\n}\n/* end: tabs section */\n\n/* Start: sec featured */\n.featured-section{\n   float: left;\n   width: 100%;\n}\n.featured-section h2{\n  font-size: 22px;\n  color: #269fd8;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n.featured-section span{\n  color: #8e989f;\n  font-size: 14px;\n}\n.featured-section .featured-text-block {\n    line-height: 22px;\n}\n.featured-section .icon i.material-icons {\n    font-size: 48px;\n    color: #c2c9cd;\n}\n.featured-section .icon-list{\n    margin-right: 15px;\n    position: relative;\n}\n.featured-section .icon-list span.badge {\n    position: absolute;\n    bottom: 0;\n    right: 0px;\n    background: #f65a30;\n    color: #fff;\n    font-size: 10px;\n    font-family: robotobold;\n    box-shadow: 0px 1px 1px rgba(0,0,0,0.18);\n}\n.featured-section .icon-list.active .icon i.material-icons {\n    color: #8e989f;\n}\n.featured-section .icon-list.active .icon i.material-icons {\n    color: #8e989f;\n}\n.featured-section .icon-list .icon i.material-icons:hover {\n    color: #8e989f;\n}\n.featured-list{margin-top: 25px;}\n/* End: sec featured */\n\n/* start: footer */\n.footer-main{\n  float: left;\n  width: 100%;\n}\n.footer-top{\n  float: left;\n  width: 100%;\n  background: #e9eef0;\n  padding: 20px 10px 30px;\n}\n.footer-main .footer-top p{\n    font-size: 13px;\n    color: #8e989f;\n    line-height: 18px;\n    margin-top: 15px;\n}\n.footer-main .footer-top .footer-social-icons{\n    margin-top: 30px;\n}\n.footer-main .footer-top .footer-social-icons a img{\n    margin-right: 5px;\n}\n.footer-bottom{\n  float: left;\n  width: 100%;\n  margin: 25px 0px 15px;\n}\n.footer-bottom a{\n  color: #bbc1c5;\n  font-size: 12px;\n}\n.footer-bottom a:hover, .footer-bottom a:focus, .footer-bottom a:active{\n  text-decoration: none;\n  color: #8e989f;\n}\n.footer-bottom p.copyright{\n  font-size: 13px;\n  color: #bbc1c5;\n  text-align: right;\n}\n\n/* end: footer */\n\n/* Start: Modal Forms Materiliaze CSS */\n  .modal i.material-icons {\n      font-size: 18px;\n      color: #fff;\n  }\n  .modal button.close.btn-close {\n      position: absolute;\n      right: 15px;\n      top: 15px;\n      z-index: 9;\n      opacity: 0.7;\n       -webkit-transition: all 0.3s ease 0s !important;\n       transition: all 0.3s ease 0s !important;\n  }\n  .modal .close:focus, .modal .close:hover {\n      color: #000;\n      text-decoration: none;\n      cursor: pointer;\n      filter: alpha(opacity=50);\n      opacity: .9 !important;\n  }\n  .modal-open .modal {\n      overflow-x: hidden;\n  }\n  .modal{\n      font-family: montserratregular;\n  }\n  .modal .form-control {\n      height: 38px;\n      padding: 7px 0;\n      font-size: 14px;\n      line-height: 1.42857143;\n      font-family: montserratregular;\n      color: #62696d;\n  }\n  .modal .form-group label.control-label {\n      font-size: 14px;\n      line-height: 1.07142857;\n      color: #8e989f;\n      font-weight: 400;\n      margin: 16px 0 0 0;\n      font-family: montserratregular;\n  }\n  .modal .form-group.label-floati62696dng label.control-label, \n  .modal .form-group.label-placeholder label.control-label {\n      top: -7px;\n      font-size: 14px;\n      line-height: 18px;\n  }\n  .modal .form-group.label-floating:not(.is-empty) label.control-label {\n      top: -20px; \n      font-family: montserratregular;\n      font-size: 11px; \n      text-transform: uppercase;\n      color: #8e989f !important;\n  }\n  .modal .form-group.label-floating.is-focused label.control-label {\n      top: -20px; \n      font-size: 11px; \n      font-family: montserratregular;\n      color: #8e989f !important;\n  }\n  .modal .form-group.is-focused label,\n  .modal .form-group.is-focused label.control-label {\n      color: #8e989f;\n      text-transform: uppercase;\n  }\n  .modal .form-control,\n  .modal .form-group .form-control {\n    border: 0;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #D2D2D2);\n    background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #d7dbdd);\n    background-image: linear-gradient(#009688, #009688), linear-gradient(#d7dbdd, #d7dbdd);\n  }\n  .modal .form-group.is-focused .form-control {\n    outline: none;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#fb545b), to(#fb545b)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: -webkit-linear-gradient(#fb545b, #fb545b), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n    background-image: linear-gradient(#fb545b, #fb545b), linear-gradient(#D2D2D2, #D2D2D2);\n    background-size: 100% 2px, 100% 1px;\n    box-shadow: none;\n    -webkit-transition-duration: 0.3s;\n            transition-duration: 0.3s;\n  }\n  .modal .form-group {\n      padding-bottom: 7px;\n      margin: 12px 0 0 0;\n      clear: both;\n  }\n  .modal-backdrop {\n      background: rgba(0, 0, 0, 0.99) !important;\n  }\n\n/* End: Modal Forms Materiliaze CSS */\n\n/* custom material css start (sahil) */\n    .sahil-material .form-control {\n        height: 38px;\n        padding: 7px 0;\n        font-size: 14px;\n        line-height: 1.42857143;\n        font-family: montserratregular;\n        color: #62696d;\n    }\n    .sahil-material .form-group label.control-label {\n        font-size: 14px;\n        line-height: 1.07142857;\n        color: #8e989f;\n        font-weight: 400;\n        margin: 16px 0 0 0;\n        font-family: montserratregular;\n    }\n    .sahil-material .form-group label.control-label.seo-static-label{\n        text-transform: uppercase !important;\n        font-size: 11px; \n        color: #8e989f !important;\n    }\n    .sahil-material .form-group.label-floating label.control-label, \n    .sahil-material .form-group.label-placeholder label.control-label {\n        top: -7px;\n        font-size: 14px;\n        line-height: 18px;\n        color: #8e989f;\n    }\n    .sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\n        top: -20px; \n        font-family: montserratregular;\n        font-size: 11px ; \n        text-transform: uppercase;\n        color: #8e989f !important;\n    }\n    .sahil-material .form-group.label-floating.is-focused label.control-label {\n        top: -20px; \n        font-size: 11px; \n        font-family: montserratregular;\n        color: #8e989f !important;\n    }\n    .sahil-material .form-group.is-focused label,\n    .sahil-material .form-group.is-focused label.control-label {\n        font-size: 11px; \n        font-family: montserratregular;\n        color: #8e989f !important;\n        text-transform: uppercase;\n    }\n    .sahil-material .form-control,\n    .sahil-material .form-group .form-control {\n        border: 0 !important;\n        background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n        background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #D2D2D2);\n        background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #d7dbdd);\n        background-image: linear-gradient(#009688, #009688), linear-gradient(#d7dbdd, #d7dbdd);\n        \n    }\n   \n    .sahil-material .form-group.is-focused .form-control {\n        outline: none;\n        background-image: -webkit-gradient(linear, left top, left bottom, from(#fb545b), to(#fb545b)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n        background-image: -webkit-linear-gradient(#fb545b, #fb545b), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n        background-image: linear-gradient(#fb545b, #fb545b), linear-gradient(#D2D2D2, #D2D2D2);\n        background-size: 100% 2px, 100% 1px;\n        box-shadow: none;\n        -webkit-transition-duration: 0.3s;\n                transition-duration: 0.3s;\n    }\n\n/* custom material css end (sahil) */\n\n/* end: product css*/\n\n\n/* Start: Modal Forgot Password (materialize) */\n    #forgot-password.forgot-password{\n      width: 100%;\n      float: left;\n        margin-top: -34px;\n    }\n\n    #forgot-password .forgot-password-content{\n      border-radius: 0px;\n      /*border: 1px solid #e9eef0;*/\n      float: left;\n      width: 100%;\n    }\n\n    #forgot-password .forgot-password-header {\n        padding: 20px 25px;\n        border-bottom: none;\n    }\n\n    #forgot-password .logo-section{\n        margin-bottom: 40px;\n    }\n\n    #forgot-password .logo-section span{\n        display: block;\n        font-size: 30px;\n        color: #fb545b;\n        font-family: montserratultra_light;\n        line-height: 36px;\n        margin-top: 10px;\n    }\n\n    #forgot-password .forgot-password-logo{\n        /*margin-bottom: 20px;*/\n       /* margin-top: 100px;*/\n    }\n\n    #forgot-password .forgot-password-body {\n        position: relative;\n        padding: 0px;\n        float: left;\n        width: 100%;\n        z-index: 9999;\n    }\n\n    #forgot-password .forgot-password-left{\n        width: 50%;\n        float: left;\n        padding: 40px 40px 40px 30px;\n        display: table;\n        height: 100vh;\n        /*margin-top: 35px;*/\n        background: #fff;\n    }\n\n    #forgot-password .forgot-password-left-inner {\n        display: table-cell;\n        vertical-align: middle;\n        float: none;\n    }\n\n    #forgot-password .forgot-password-right {\n        background: #fb545b;\n        float: left;\n        width: 50%;\n        height: 100vh;\n        padding: 30px;\n        display: table;\n        /*margin-top: 35px;*/\n    }\n\n    #forgot-password .forgot-password-right-inner {\n        display: table-cell;\n        vertical-align: middle;\n        float: none;\n    }\n\n    /*#forgot-password .img-margin{\n        margin: 40px 0px 15px;\n    }*/\n\n    #forgot-password .img-section {\n        float: left;\n        width: 100%;\n        margin: 40px 0px 0px;\n        /*margin-left: 5% !important;*/\n        position: relative;\n        min-height: 365px;\n    }\n\n    #forgot-password .img-width{\n        width: auto;\n        /*margin-left: 5% !important;*/\n        box-shadow: -9px -9px 12px rgba(0, 0, 0, 0.14);\n        /*position: relative;*/\n    }\n\n    .login-img1 {\n        position: absolute;\n        left: 30px;\n        top: 0;\n    }\n\n    .login-img2 {\n        position: absolute;\n        left: 233px;\n        top: 78px;\n        z-index: 9;\n    }\n\n    .login-img3 {\n        position: absolute;\n        left: 130px;\n        top: 180px;\n        z-index: 9;\n    }\n\n    #forgot-password .input-group {\n        width: 100%;\n        margin-top: 30px;\n        border-bottom: 1px solid #d7dbdd;\n    }\n\n    #forgot-password .input-field {\n        float: left !important;\n        /* width: 100% !important; */\n        border: none;\n        box-shadow: none;\n        color: #8e989f;\n        font-size: 14px;\n        font-family: montserratregular;\n        padding: 0;\n    }\n\n    #forgot-password input[type=\"email\"]::-webkit-input-placeholder, \n    #forgot-password input[type=\"password\"]::-webkit-input-placeholder,\n    #forgot-password input[type=\"text\"]::-webkit-input-placeholder {\n      color: #8e989f !important;\n    }\n\n    #forgot-password.forgot-password .form-group label.control-label {\n        font-size: 14px;\n        line-height: 1.07142857;\n        color: #8e989f;\n        font-weight: 400;\n        margin: 16px 0 0 0;\n        font-family: montserratregular;\n    }\n\n    #forgot-password .or-login {\n        color: #62696d;\n        font-size: 12px;\n        font-family: montserratregular;\n        margin-bottom: 0px;\n        padding-top: 5px;\n    }\n\n    #forgot-password .forgot-btn {\n        position: absolute;\n        right: 2px;\n        bottom: 25px;\n        z-index: 9;\n        color: #f07175;\n        font-size: 12px;\n         opacity: 1;\n    }\n\n    #forgot-password.forgot-password button.close.btn-close {\n        position: absolute;\n        right: 15px;\n        top: 15px;\n        z-index: 9;\n        opacity: 0.7;\n        -webkit-transition: all 0.3s ease 0s !important;\n        transition: all 0.3s ease 0s !important;\n    }\n\n    #forgot-password.forgot-password .close:focus, #forgot-password.forgot-password .close:hover {\n        color: #000;\n        text-decoration: none;\n        cursor: pointer;\n        filter: alpha(opacity=50);\n        opacity: .9 !important;\n    }\n\n    #forgot-password.forgot-password i.material-icons {\n        font-size: 18px;\n        color: #fff;\n    }\n\n    #forgot-password.forgot-password .btn-reset {\n        margin-top: 40px !important;\n        padding: 7px 40px !important;\n        margin-bottom: 0px;\n        font-size: 13px;\n    }\n\n    #forgot-password.forgot-password .alert.alert-danger {\n        background: none !important;\n        position: relative;\n        width: 100%;\n        margin: 0;\n        padding: 0px 0px 10px;\n    }\n\n    #forgot-password.forgot-password .alert.alert-danger p{\n        position: absolute;\n        width: 100%;\n    }\n\n    #forgot-password.forgot-password .alert.alert-danger span.mat-icon{\n        float: left;\n        width: auto;\n    }\n\n    #forgot-password.forgot-password .alert.alert-danger span.mat-icon i.material-icons {\n        font-size: 12px;\n        margin-right: 5px;\n        margin-top: 1px;\n        color: #fb545b;\n    }\n\n    #forgot-password.forgot-password .form-group{\n        padding-bottom: 7px;\n        margin: 12px 0 0;\n        clear: both;\n    }\n\n    /* Start: login-testimonial */\n\n        .login-testimonial {\n            float: left;\n            width: 100%;\n            padding: 0px 25px;\n        }\n\n        .testimonial-block {\n            background: rgba(255,255,255, 0.3);\n            border-radius: 50%;\n            width: 76px;\n            height: 76px;\n            float: left;\n            position: relative;\n        }\n\n        .testimonial-block span{\n            position: absolute;\n            top: -15px;\n            left: 18px;\n            font-size: 120px;\n            color: #fff;\n            font-family: montserratlight;\n        }\n\n        .testimonial-content {\n            float: left;\n            width: 82%;\n            margin-left: 20px;\n            margin-top: 10px;\n        }\n\n        .testi-desc{\n            float: left;\n            width: 100%;\n            font-size: 24px;\n            color: #fff;\n            line-height: 26px;\n            font-family: montserratlight;\n        }\n\n        .testi-client{\n            font-size: 16px;\n            color: rgba(255,255,255,0.8);\n            line-height: 26px;\n            font-family: montserratregular;\n            font-style: italic;\n            float: left;\n            width: 100%;\n            padding-top: 15px;\n        }\n\n        .video-wrapper{\n            position: relative;\n            float: left;\n            width: 100%;\n        }\n\n        iframe {\n            position: absolute; \n            top: 70px; \n            left: 98px;  \n            right: 0;\n            width: 68%;\n        }\n\n    /* End: login-testimonial */\n\n    /* Start: loading dots */\n\n        .loading:after {\n            content: ' .';\n            -webkit-animation: dots 1s steps(5, end) infinite;\n                    animation: dots 1s steps(5, end) infinite;\n            font-size: 18px;\n            line-height: 1px;\n            position: relative;\n            left: -3px;\n        }\n\n        @-webkit-keyframes dots {\n            0%, 20% {\n                color: rgba(0,0,0,0);\n                text-shadow: .25em 0 0 rgba(0,0,0,0),\n                                .5em 0 0 rgba(0,0,0,0);\n            }\n\n            40% {\n                color: white;\n                text-shadow: .25em 0 0 rgba(0,0,0,0),\n                             .5em 0 0 rgba(0,0,0,0);\n            }\n\n            60% {\n                text-shadow: .25em 0 0 white,\n                             .5em 0 0 rgba(0,0,0,0);\n            }\n            80%, 100% {\n                text-shadow: .25em 0 0 white,\n                             .5em 0 0 white;\n            }\n        \n        }\n\n        @keyframes dots {\n            0%, 20% {\n                color: rgba(0,0,0,0);\n                text-shadow: .25em 0 0 rgba(0,0,0,0),\n                                .5em 0 0 rgba(0,0,0,0);\n            }\n\n            40% {\n                color: white;\n                text-shadow: .25em 0 0 rgba(0,0,0,0),\n                             .5em 0 0 rgba(0,0,0,0);\n            }\n\n            60% {\n                text-shadow: .25em 0 0 white,\n                             .5em 0 0 rgba(0,0,0,0);\n            }\n            80%, 100% {\n                text-shadow: .25em 0 0 white,\n                             .5em 0 0 white;\n            }\n        \n        }\n        \n    /* End: loading dots */\n\n    /* Start: validations success msg */\n        #forgot-password.forgot-password .val-success-msg {\n            font-size: 12px;\n            position: relative;\n            top: -10px;\n            margin: 0px;\n            margin-top: 15px;\n        }\n\n        #forgot-password.forgot-password .val-success-msg span.icon-success {\n            float: left;\n            margin-right: 5px;\n            margin-top: 2px;\n        }\n\n        #forgot-password.forgot-password .val-success-msg span.icon-success i.material-icons {\n            font-size: 14px;\n            color: #00c853;\n        }\n        .g-recaptcha{\n            float: left;\n            width: 100%;\n            margin-top: 20px;\n        }\n\n      /* Start: validations error msg */\n\n/* End: Modal Forgot Password (materialize) */\n\n/* Start: Responsive - Forgot Password Modal */\n\n  @media (max-width: 767px){\n      #forgot-password.forgot-password{\n          padding-left: 0;\n          margin-top: -50px;\n      }\n\n      #forgot-password .forgot-password-right{\n          display: none;\n      }\n\n      #forgot-password.forgot-password .forgot-password-dialog {\n          width: auto;\n      }\n\n      #forgot-password.forgot-password .forgot-password-left{\n          width: 100% !important;\n          padding: 40px 30px 75px !important;\n      } \n\n      #forgot-password.forgot-password button.close.btn-close i.material-icons{\n          color: #8e989f;\n          top: 5px;\n          position: relative;\n      }\n\n      #forgot-password.forgot-password .forgot-password-logo{\n          margin-top: 10px;\n      }\n\n  }\n\n  @media screen and (min-width: 768px) and (max-width: 768px) {\n        .testimonial-block{\n            float: none;\n            margin: 0 auto;\n        }\n\n        .testimonial-content {\n            float: left;\n            width: 100%;\n            margin-left: 0;\n        }\n\n        .testi-desc{\n            text-align: center;\n        }\n\n        .testi-client{\n            text-align: center;\n        }\n\n        /*.video-wrapper iframe{\n            position: absolute;\n            top: 60px;\n            left: 55px;\n            right: 0;\n            width: 215px;\n            height: 120px;\n        }*/\n\n        .login-testimonial {\n            padding: 0px 25px;\n        }\n\n        #forgot-password .forgot-password-right {\n            padding: 0px;\n        }\n\n        .testi-desc{\n            font-size: 18px;\n        }\n\n        .testi-client {\n            font-size: 13px;\n        }\n\n        #forgot-password .img-width {\n            width: 54%;\n        }\n\n        .login-img2 {\n            left: 145px;\n            top: 45px;\n        }\n\n        .login-img3 {\n            left: 85px;\n            top: 105px;\n        }\n\n        #forgot-password .img-section {\n            margin: 55px 0px 0px;\n            min-height: 217px;\n        }\n\n    }\n\n    @media screen and (min-width: 1024px) and (max-width: 1024px) {\n        .testimonial-block{\n            float: none;\n            margin: 0 auto;\n        }\n\n        .testimonial-content{\n            float: left;\n            width: 100%;\n            margin-left: 0;\n        }\n\n        .testi-desc{\n            text-align: center;\n        }\n\n        .testi-client{\n            text-align: center;\n        }\n\n        /*iframe.iframe-1024{\n            position: absolute;\n            top: 60px;\n            left: 69px;\n            right: 0;\n            width: 305px;\n            height: 177px;\n        }*/\n\n        #forgot-password .img-width{\n            width: 55%;\n        }\n\n        .login-img2{\n            left: 165px;\n            top: 52px;\n        }\n\n        .login-img3{\n            left: 100px;\n            top: 122px;\n        }\n\n        #forgot-password .img-section {\n            min-height: 253px;\n        }\n\n    }\n\n    @media screen and (min-width: 1024px) and (max-width: 1279px) {\n        #forgot-password .img-width{\n            width: 55%;\n        }\n\n        .login-img2{\n            left: 165px;\n            top: 52px;\n        }\n\n        .login-img3{\n            left: 100px;\n            top: 122px;\n        }\n\n        #forgot-password .img-section {\n            min-height: 253px;\n        }\n\n        .testimonial-block{\n            float: none;\n            margin: 0 auto;\n        }\n\n        .testi-desc {\n            text-align: center;\n        }\n\n        .testi-client{\n            text-align: center;\n        }\n\n    }\n\n    @media screen and (min-width: 1280px) and (max-width: 1280px) {\n        .testimonial-block{\n            float: none;\n            margin: 0 auto;\n        }\n\n        .testimonial-content{\n            float: left;\n            width: 100%;\n            margin-left: 0;\n        }\n\n        .testi-desc{\n            text-align: center;\n        }\n\n        .testi-client{\n            text-align: center;\n        }\n\n        /*iframe{\n            position: absolute;\n            top: 65px;\n            left: 92px;\n            right: 0;\n            width: 390px;\n            height: 219px;\n        }*/\n\n        #forgot-password .img-width{\n            width: 54%;\n        }\n\n        #forgot-password .img-section{\n            margin: 30px 0px 0px;\n            min-height: 325px;\n        }\n\n        .login-img2{\n            left: 200px;\n            top: 67px;\n        }\n\n        .login-img3{\n            left: 130px;\n            top: 155px;\n        }\n\n    }\n\n    @media screen and (min-width: 1920px) and (max-width: 1920px) {\n        /*iframe{\n            position: absolute;\n            top: 75px;\n            left: 140px;\n            right: 0;\n            width: 610px;\n            height: 347px;\n        }*/\n\n        #forgot-password .img-section{\n            width: 85%;\n            margin-left: 18%;\n        }\n\n    }\n\n/* End: Responsive - Forgot Password Modal */\n\n@media (max-width: 1900px) {\n    #signUp .form-group .control-label.label-url,\n    .modal .form-group.label-floating.is-focused label.control-label,\n    .modal .form-group.label-floating:not(.is-empty) label.control-label,\n    .my-profile .form-group.favicon-upload label.control-label,\n    .my-profile .form-group.time-zone label.control-label,\n    .sahil-material .form-group.label-floating.is-focused label.control-label,\n    .sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\n        font-size: 10px!important\n    }\n}\n\n.btn-red {\n    color: #fff;\n    background-color: #fb545b;\n    border-color: #fb545b;\n    border-radius: 0;\n    font-size: 14px;\n    padding: 7px 70px;\n    margin-top: 25px;\n    -webkit-transition: all .3s ease 0s;\n    transition: all .3s ease 0s;\n    margin-right: 0;\n    font-weight: 400;\n    text-transform: uppercase;\n    font-family: montserratregular;\n}\n.alert.alert-danger {\n    background: 0 0!important;\n    border: none;\n    position: relative;\n    top: -12px;\n    left: 0;\n    padding: 0;\n    color: #fb545b!important;\n    font-size: 11px;\n    margin: 0;\n    float: left;\n    width: 100%;\n    text-align: left\n}\n.alert.alert-danger p {\n    position: absolute;\n    width: 100%;\n    font-family: montserratregular;\n}\n.alert.alert-dange p span.mat-icon {\n    float: left;\n    width: auto\n}\n.alert.alert-danger p span.mat-icon i.material-icons {\n    float: left;\n    font-size: 12px!important;\n    margin-right: 5px;\n    margin-top: 1px;\n    color: #fb545b!important\n}\n.alert.alert-danger.custom-alert {\n    padding: 10px;\n    margin-top: 10px;\n    border-radius: 0;\n    background: #feddde!important\n}\n.alert.alert-danger.custom-alert p {\n    position: relative\n}\n.text-red {\n    color: #fb545b;\n}\na.text-red:focus,\na.text-red:hover {\n    color: #fa5282\n}\na.text-red {\n    cursor: pointer;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ },

/***/ 751:
/***/ function(module, exports) {

module.exports = ".label {\n  border-radius: 1px;\n}\n.label,\n.label.label-default {\n  background-color: #9e9e9e;\n}\n.label.label-inverse {\n  background-color: #3f51b5;\n}\n.label.label-primary {\n  background-color: #009688;\n}\n.label.label-success {\n  background-color: #4caf50;\n}\n.label.label-info {\n  background-color: #03a9f4;\n}\n.label.label-warning {\n  background-color: #ff5722;\n}\n.label.label-danger {\n  background-color: #f44336;\n}\n.form-control,\n.form-group .form-control {\n  border: 0;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#009688, #009688), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 0 2px, 100% 1px;\n  background-repeat: no-repeat;\n  background-position: center bottom, center calc(100% - 1px);\n  background-color: rgba(0, 0, 0, 0);\n  -webkit-transition: background 0s ease-out;\n          transition: background 0s ease-out;\n  float: none;\n  box-shadow: none;\n  border-radius: 0;\n}\n.form-group .form-control.material-textarea {\n  min-height: 5em;\n}\n.form-control::-moz-placeholder,\n.form-group .form-control::-moz-placeholder {\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-control:-ms-input-placeholder,\n.form-group .form-control:-ms-input-placeholder {\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-control::-webkit-input-placeholder,\n.form-group .form-control::-webkit-input-placeholder {\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-control[readonly],\n.form-group .form-control[readonly],\n.form-control[disabled],\n.form-group .form-control[disabled],\nfieldset[disabled] .form-control,\nfieldset[disabled] .form-group .form-control {\n  background-color: rgba(0, 0, 0, 0);\n}\n.form-control[disabled],\n.form-group .form-control[disabled],\nfieldset[disabled] .form-control,\nfieldset[disabled] .form-group .form-control {\n  background-image: none;\n  border-bottom: 1px dotted #D2D2D2;\n}\n.form-group {\n  position: relative;\n}\n.form-group.label-static label.control-label,\n.form-group.label-placeholder label.control-label,\n.form-group.label-floating label.control-label {\n  position: absolute;\n  pointer-events: none;\n  -webkit-transition: 0.3s ease all;\n          transition: 0.3s ease all;\n}\n.form-group.label-floating label.control-label {\n  will-change: left, top, contents;\n}\n.form-group.label-placeholder:not(.is-empty) label.control-label {\n  display: none;\n}\n.form-group .help-block {\n  position: absolute;\n  display: none;\n}\n.form-group.is-focused .form-control {\n  outline: none;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#009688, #009688), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 100% 2px, 100% 1px;\n  box-shadow: none;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n}\n.form-group.is-focused .form-control .material-input:after {\n  background-color: #009688;\n}\n.form-group.is-focused label,\n.form-group.is-focused label.control-label {\n  color: #009688;\n}\n.form-group.is-focused.label-placeholder label,\n.form-group.is-focused.label-placeholder label.control-label {\n  color: #BDBDBD;\n}\n.form-group.is-focused .help-block {\n  display: block;\n}\n.form-group.has-warning .form-control {\n  box-shadow: none;\n}\n.form-group.has-warning.is-focused .form-control {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#ff5722), to(#ff5722)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#ff5722, #ff5722), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#ff5722, #ff5722), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-warning label.control-label,\n.form-group.has-warning .help-block {\n  color: #ff5722;\n}\n.form-group.has-error .form-control {\n  box-shadow: none;\n}\n.form-group.has-error.is-focused .form-control {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#f44336), to(#f44336)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#f44336, #f44336), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#f44336, #f44336), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-error label.control-label,\n.form-group.has-error .help-block {\n  color: #f44336;\n}\n.form-group.has-success .form-control {\n  box-shadow: none;\n}\n.form-group.has-success.is-focused .form-control {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#4caf50), to(#4caf50)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#4caf50, #4caf50), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-success label.control-label,\n.form-group.has-success .help-block {\n  color: #4caf50;\n}\n.form-group.has-info .form-control {\n  box-shadow: none;\n}\n.form-group.has-info.is-focused .form-control {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#03a9f4), to(#03a9f4)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#03a9f4, #03a9f4), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#03a9f4, #03a9f4), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-info label.control-label,\n.form-group.has-info .help-block {\n  color: #03a9f4;\n}\n.form-group textarea {\n  resize: none;\n}\n.form-group textarea ~ .form-control-highlight {\n  margin-top: -11px;\n}\n.form-group select {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.form-group select ~ .material-input:after {\n  display: none;\n}\n.form-control {\n  margin-bottom: 7px;\n}\n.form-control::-moz-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-control:-ms-input-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-control::-webkit-input-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.checkbox label,\n.radio label,\nlabel {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\nlabel.control-label {\n  font-size: 12px;\n  line-height: 1.07142857;\n  color: #BDBDBD;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.help-block {\n  margin-top: 0;\n  font-size: 12px;\n}\n.form-group {\n  padding-bottom: 7px;\n  margin: 28px 0 0 0;\n}\n.form-group .form-control {\n  margin-bottom: 7px;\n}\n.form-group .form-control::-moz-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group .form-control:-ms-input-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group .form-control::-webkit-input-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group .checkbox label,\n.form-group .radio label,\n.form-group label {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group label.control-label {\n  font-size: 12px;\n  line-height: 1.07142857;\n  color: #BDBDBD;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group .help-block {\n  margin-top: 0;\n  font-size: 12px;\n}\n.form-group.label-floating label.control-label,\n.form-group.label-placeholder label.control-label {\n  top: -7px;\n  font-size: 16px;\n  line-height: 1.42857143;\n}\n.form-group.label-static label.control-label,\n.form-group.label-floating.is-focused label.control-label,\n.form-group.label-floating:not(.is-empty) label.control-label {\n  top: -30px;\n  left: 0;\n  font-size: 12px;\n  line-height: 1.07142857;\n}\n.form-group.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -30px;\n  left: 0;\n  font-size: 12px;\n  line-height: 1.07142857;\n}\n.form-group.form-group-sm {\n  padding-bottom: 3px;\n  margin: 21px 0 0 0;\n}\n.form-group.form-group-sm .form-control {\n  margin-bottom: 3px;\n}\n.form-group.form-group-sm .form-control::-moz-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-sm .form-control:-ms-input-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-sm .form-control::-webkit-input-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-sm .checkbox label,\n.form-group.form-group-sm .radio label,\n.form-group.form-group-sm label {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-sm label.control-label {\n  font-size: 9px;\n  line-height: 1.125;\n  color: #BDBDBD;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group.form-group-sm .help-block {\n  margin-top: 0;\n  font-size: 9px;\n}\n.form-group.form-group-sm.label-floating label.control-label,\n.form-group.form-group-sm.label-placeholder label.control-label {\n  top: -11px;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.form-group.form-group-sm.label-static label.control-label,\n.form-group.form-group-sm.label-floating.is-focused label.control-label,\n.form-group.form-group-sm.label-floating:not(.is-empty) label.control-label {\n  top: -25px;\n  left: 0;\n  font-size: 9px;\n  line-height: 1.125;\n}\n.form-group.form-group-sm.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -25px;\n  left: 0;\n  font-size: 9px;\n  line-height: 1.125;\n}\n.form-group.form-group-lg {\n  padding-bottom: 9px;\n  margin: 30px 0 0 0;\n}\n.form-group.form-group-lg .form-control {\n  margin-bottom: 9px;\n}\n.form-group.form-group-lg .form-control::-moz-placeholder {\n  font-size: 18px;\n  line-height: 1.3333333;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-lg .form-control:-ms-input-placeholder {\n  font-size: 18px;\n  line-height: 1.3333333;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-lg .form-control::-webkit-input-placeholder {\n  font-size: 18px;\n  line-height: 1.3333333;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-lg .checkbox label,\n.form-group.form-group-lg .radio label,\n.form-group.form-group-lg label {\n  font-size: 18px;\n  line-height: 1.3333333;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-lg label.control-label {\n  font-size: 14px;\n  line-height: 0.99999998;\n  color: #BDBDBD;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group.form-group-lg .help-block {\n  margin-top: 0;\n  font-size: 14px;\n}\n.form-group.form-group-lg.label-floating label.control-label,\n.form-group.form-group-lg.label-placeholder label.control-label {\n  top: -5px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.form-group.form-group-lg.label-static label.control-label,\n.form-group.form-group-lg.label-floating.is-focused label.control-label,\n.form-group.form-group-lg.label-floating:not(.is-empty) label.control-label {\n  top: -32px;\n  left: 0;\n  font-size: 14px;\n  line-height: 0.99999998;\n}\n.form-group.form-group-lg.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -32px;\n  left: 0;\n  font-size: 14px;\n  line-height: 0.99999998;\n}"

/***/ },

/***/ 752:
/***/ function(module, exports) {

module.exports = "body, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4 {\n  font-family: 'montserratregular';\n}\n@font-face {\n    font-family: 'Material Icons';\n    font-style: normal;\n    font-weight: 400;\n    src: url(./../../../assets/fonts/MaterialIcons-Regular.eot);\n    src: local('Material Icons'), \n    local('materialIcons-Regular'), \n    url(./../../../assets/fonts/materialIcons-Regular.woff2) format('woff2'), \n    url(./../../../assets/fonts/materialIcons-Regular.woff) format('woff'), \n    url(./../../../assets/fonts/materialIcons-Regular.ttf) format('truetype')\n}\n\n.material-icons {\n font-family: 'Material Icons';\n font-weight: normal;\n font-style: normal;\n font-size: 24px;  /* Preferred icon size */\n display: inline-block;\n line-height: 1;\n text-transform: none;\n letter-spacing: normal;\n word-wrap: normal;\n white-space: nowrap;\n direction: ltr;\n\n /* Support for all WebKit browsers. */\n -webkit-font-smoothing: antialiased;\n /* Support for Safari and Chrome. */\n text-rendering: optimizeLegibility;\n\n /* Support for Firefox. */\n -moz-osx-font-smoothing: grayscale;\n\n /* Support for IE. */\n -webkit-font-feature-settings: 'liga';\n         font-feature-settings: 'liga';\n}\n\n@font-face {\n    font-family: montserratregular;\n   font-style: normal;\n   font-weight: 400;\n   src: url(./../../../assets/fonts/montserrat-regular-webfont.eot) format(\"embedded-opentype\"), \n   url(./../../../assets/fonts/montserrat-regular-webfont.woff2) format(\"woff2\"),\n   url(./../../../assets/fonts/montserrat-regular-webfont.woff) format(\"woff\"), \n   url(./../../../assets/fonts/montserrat-regular-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratbold;\n    font-style: normal;\n    font-weight: 400;\n    src: url(./../../../assets/fonts/montserrat-bold-webfont.eot) format(\"embedded-opentype\"), \n    url(./../../../assets/fonts/montserrat-bold-webfont.woff2) format(\"woff2\"), \n    url(./../../../assets/fonts/montserrat-bold-webfont.woff) format(\"woff\"), \n    url(./../../../assets/fonts/montserrat-bold-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratsemibold;\n    font-style: normal;\n    font-weight: 400;\n    src: url(./../../../assets/fonts/montserrat-semibold-webfont.eot?#iefix) format(\"embedded-opentype\"), \n    url(./../../../assets/fonts/montserrat-semibold-webfont.woff2) format(\"woff2\"), \n    url(./../../../assets/fonts/montserrat-semibold-webfont.woff) format(\"woff\"), \n    url(./../../../assets/fonts/montserrat-semibold-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratlight;\n    font-style: normal;\n    font-weight: 400;\n    src: url(./../../../assets/fonts/montserrat-light-webfont.eot) format(\"embedded-opentype\"), \n    url(./../../../assets/fonts/montserrat-light-webfont.woff2) format(\"woff2\"), \n    url(./../../../assets/fonts/montserrat-light-webfont.woff) format(\"woff\"), \n    url(./../../../assets/fonts/montserrat-light-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserrathairline;\n    font-style: normal;\n    font-weight: 400;\n    src: url(./../../../assets/fonts/montserrat-hairline-webfont.eot?#iefix) format(\"embedded-opentype\"), \n    url(./../../../assets/fonts/montserrat-hairline-webfont.woff2) format(\"woff2\"), \n    url(./../../../assets/fonts/montserrat-hairline-webfont.woff) format(\"woff\"), \n    url(./../../../assets/fonts/montserrat-hairline-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratultra_light;\n    src: url(./../../../assets/fonts/montserrat-ultralight-webfont.woff2) format('woff2'), \n    url(./../../../assets/fonts/montserrat-ultralight-webfont.woff) format('woff'), \n    url(./../../../assets/fonts/montserrat-ultralight-webfont.ttf) format('truetype');\n    font-weight: 400;\n    font-style: normal\n}\n\n.font_newlight {\n    font-family: montserratlight!important\n}\n\n.font_newhairline {\n    font-family: montserrathairline\n}\n\n.font_newregular {\n    font-family: montserratregular\n}\n\n.font_newbold {\n    font-family: montserratbold\n}\n\n.font_semibold {\n    font-family: montserratsemibold\n}\n.wrapper.dashboard-cookies{\n  padding-top: 95px;\n}\n\n/* custom material css start (sahil) */\n    .sahil-material .form-control {\n        height: 38px;\n        padding: 7px 0;\n        font-size: 14px;\n        line-height: 1.42857143;\n        font-family: montserratregular;\n        color: #62696d;\n    }\n\n    .sahil-material .form-group label.control-label {\n        font-size: 14px;\n        line-height: 1.07142857;\n        color: #8e989f;\n        font-weight: 400;\n        margin: 16px 0 0 0;\n        font-family: montserratregular;\n    }\n\n    .sahil-material .form-group label.control-label.seo-static-label{\n        text-transform: uppercase !important;\n        font-size: 11px; \n        color: #8e989f !important;\n    }\n\n    .sahil-material .form-group.label-floating label.control-label, \n    .sahil-material .form-group.label-placeholder label.control-label {\n        top: -7px;\n        font-size: 14px;\n        line-height: 18px;\n        left: 0px;\n    }\n\n    .sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\n        top: -20px; \n        font-family: montserratregular;\n        font-size: 11px; \n        text-transform: uppercase;\n        color: #8e989f !important;\n    }\n\n    .sahil-material .form-group.label-floating.is-focused label.control-label {\n        top: -20px; \n        font-size: 11px; \n        font-family: montserratregular;\n        color: #8e989f !important;\n    }\n\n    .sahil-material .form-group.is-focused label,\n    .sahil-material .form-group.is-focused label.control-label {\n        font-size: 11px; \n        font-family: montserratregular;\n        color: #8e989f !important;\n        text-transform: uppercase;\n    }\n\n    .sahil-material .form-control,\n    .sahil-material .form-group .form-control {\n        border: 0;\n        background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n        background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #D2D2D2);\n        background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #d7dbdd);\n        background-image: linear-gradient(#009688, #009688), linear-gradient(#d7dbdd, #d7dbdd);\n        \n    }\n\n    .sahil-material .form-group.is-focused .form-control {\n        outline: none;\n        background-image: -webkit-gradient(linear, left top, left bottom, from(#fb545b), to(#fb545b)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n        background-image: -webkit-linear-gradient(#fb545b, #fb545b), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n        background-image: linear-gradient(#fb545b, #fb545b), linear-gradient(#D2D2D2, #D2D2D2);\n        background-size: 100% 2px, 100% 1px;\n        box-shadow: none;\n        -webkit-transition-duration: 0.3s;\n                transition-duration: 0.3s;\n    }\n\n/* custom material css end (sahil) */\n\n.setPassword .sahil-material {\n    margin-top: 100px;\n}\n.setPassword h4.setNewPassword {\n    color: #62696d;\n    margin-bottom: 30px;\n    margin-top: 0;\n    font-size: 20px;\n}\n\n.alert.alert-danger {\n    background: 0 0!important;\n    border: none;\n    position: relative;\n    top: -12px;\n    left: 0;\n    padding: 0;\n    color: #fb545b!important;\n    font-size: 11px;\n    margin: 0;\n    float: left;\n    width: 100%;\n    text-align: left\n}\n.alert.alert-danger p {\n    position: absolute;\n    width: 100%\n}\n.alert.alert-dange p span.mat-icon {\n    float: left;\n    width: auto\n}\n.alert.alert-danger p span.mat-icon i.material-icons {\n    float: left;\n    font-size: 12px!important;\n    margin-right: 5px;\n    margin-top: 1px;\n    color: #fb545b!important\n}\n\n.btn-red-outline {\n    color: #fb545b;\n    background-color: #fff;\n    border-color: #ffb5b8;\n    padding: 7px 30px;\n    margin: 20px 0;\n    font-family: montserratregular;\n    float: left;\n    border-radius: 0px;\n    font-size: 11px;\n    -webkit-transition: all .3s ease 0s;\n    transition: all .3s ease 0s;\n    text-transform: uppercase;\n}\n.btn-red-outline.hvr-sweep-to-right::before {\n    background: #ffb5b8;\n    color: #fff!important\n}\n.btn-hover:hover {\n    -webkit-transition: .5s ease-in-out;\n    transition: .5s ease-in-out;\n    background: #fdb6b9!important;\n    color: #fb545b!important;\n    border-color: #fdb6b9!important;\n}\n:focus {\n    outline: none !important;\n    box-shadow: none;\n}\n@media (max-width: 767px) {\n    #lgScrSideNavbar,\n    .dash-circle,\n    .dash-prog-outer h2,\n    .full-menu {\n        display: none\n    }\n    #responsive-header .navbar-fixed-top .nav-padding {\n        padding-right: 0;\n        padding-left: 0\n    }\n    .main-logo {\n        display: none!important\n    }\n    .mobile-menu {\n        display: block;\n        float: right;\n        margin-top: 7px;\n        position: relative\n    }\n    #responsive-header .navbar-default {\n        background: #fb5f66!important;\n        border: none;\n        margin-top: 0\n    }\n    #responsive-header .navbar-default .mat-icon i.material-icons {\n        font-size: 24px;\n        color: #fff;\n        padding: 13px\n    }\n    #responsive-header .navbar-header h4.title {\n        color: #fff;\n        font-size: 16px;\n        text-align: center;\n        text-transform: uppercase;\n        padding-top: 7px\n    }\n    .mobile-menu button {\n        border: none;\n        box-shadow: none;\n        color: #fff;\n        background: 0 0;\n        float: right;\n        margin: 0 5px\n    }\n    .mobile-menu button:focus {\n        background: 0 0!important;\n        color: #fff!important\n    }\n    .mobile-menu .btn-default:hover {\n        color: #fff;\n        background: 0 0\n    }\n    .mobile-dash {\n        padding: 0\n    }\n    .mobile-menu .dropdown-menu {\n        background: #62696d;\n        top: -11px;\n        border-radius: 0;\n        left: -176px;\n        width: 235px;\n        font-family: montserratlight;\n        padding-bottom: 55px\n    }\n    .mobile-menu .name-dropdown-border {\n        width: 100%;\n        margin: 5px 0\n    }\n    .mobile-menu .user-outr {\n        float: left;\n        width: 100%;\n        padding: 0;\n        margin: 0;\n        display: block;\n        text-transform: capitalize\n    }\n    .mobile-menu .user-outr li {\n        float: right;\n        font-size: 24px;\n        font-family: montserratlight;\n        color: #fff;\n        margin-right: 24px;\n        margin-top: 8px;\n        margin-bottom: 6px;\n        margin-left: 30px;\n        /*white-space: normal;*/\n        word-wrap: break-word;\n        width: 175px;\n        text-align: right;\n    }\n    .mobile-menu .user-outr li a {\n        margin-right: 30px\n    }\n    .user-outr li a {\n        float: left;\n        width: auto;\n        border: 2px solid #dae2e6;\n        border-radius: 50%;\n        margin-left: 5px;\n        margin-bottom: 5px\n    }\n    .user-outr li a:hover {\n        border: 2px solid #f56151\n    }\n    .mobile-menu .company-list li,\n    .mobile-menu .name-list li {\n        margin: 10px 0;\n        text-align: right;\n        font-size: 16px;\n        width: 100%;\n        float: left;\n        padding-right: 20px\n    }\n    .mobile-menu .company-list li a,\n    .mobile-menu .name-list li a {\n        float: right;\n        color: #fff\n    }\n    .mobile-menu .company-list li a i {\n        margin-right: 20px;\n        float: left\n    }\n    .mobile-menu .name-list li a i {\n        margin-left: 20px;\n        float: right\n    }\n    .mobile-menu .company-list-title {\n        float: left;\n        color: #fff\n    }\n    .white-logo {\n        display: block!important\n    }\n    .dash-prog-outer {\n        float: left;\n        width: 100%;\n        margin-top: 10px;\n        margin-bottom: 10px\n    }\n    .dash-prog-outer h5 {\n        font-size: 24px;\n        text-align: center;\n        width: 100%;\n        margin-bottom: 1px\n    }\n    .dash-prog-outer .company-dropdown-wrapper {\n        min-height: 35px;\n        width: 100%;\n        text-align: center\n    }\n    .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n        margin: 0 auto;\n        float: none;\n        text-align: center\n    }\n    #responsive-header .navbar-header {\n        float: left;\n        margin-left: -5px;\n        margin-right: 0!important\n    }\n    #responsive-header .navbar-logopadding {\n        padding-right: 0;\n        padding-top: 0\n    }\n    #responsive-header .navbar-default {\n        height: 50px;\n        margin: 0;\n        padding-bottom: 0\n    }\n    .settings-cookies #new-header.cookies-parent {\n        height: 50px;\n        margin-bottom: 0\n    }\n    .white-logo .navbar-brand img {\n        height: 53px;\n        margin: -20px auto 0\n    }\n    .white-logo .navbar-brand {\n        float: none\n    }\n    .user-outr li a.add-user {\n        width: 45px;\n        height: 45px;\n        padding-top: 9px\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\n        top: -30px;\n        left: 17px;\n        font-size: 34px;\n        position: relative;\n        color: #f87b80\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a .company-title {\n        font-size: 16px\n    }\n    .company-dropdown-wrapper .dropdown-menu>li>a .company-site {\n        width: 91%;\n        font-size: 14px\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a .company-block-inner {\n        width: 35px;\n        height: 35px;\n        padding-top: 8px;\n        font-size: 14px;\n        top: 13px\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a.add-new-company {\n        font-size: 14px\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a i.material-icons {\n        font-size: 24px\n    }\n    .company-block-content {\n        margin-left: 50px\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\n        right: 34px\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n        top: 8px;\n        left: -8px\n    }\n    header#new-header.cookies-parent {\n        margin-bottom: 0;\n        height: 50px\n    }\n    .settings-cookies #smScrSideNavbar.left-sidebar,\n    .settings-cookies .membership-details-inner-tabs {\n        top: 50px!important\n    }\n    #smScrWrapperContent {\n        display: none\n    }\n    #new-header .company-nav {\n        display: block!important\n    }\n    #new-header .navbar-default.company-nav {\n        background: #fff!important;\n        border-bottom: 1px solid #dae2e6;\n        padding-top: 0!important\n    }\n    #new-header .company-nav .navbar-header {\n        width: 90%!important\n    }\n    #new-header .company-nav.navbar-default .navbar-collapse, #new-header .company-nav.navbar-default .navbar-form {\n        float: left;\n        width: 10%;\n        margin-top: 20px;\n    }\n    #new-header .company-nav .navbar-logopadding {\n        padding-left: 15px;\n        padding-top: 22px;\n        height: 105px;\n        width: 100%;\n        padding-right: 15px!important\n    }\n    .company_name_avatar-circle {\n        margin-right: 15px\n    }\n    .company_name_span {\n        width: 45%;\n        line-height: 30px\n    }\n    #new-header .company-nav.navbar-default .navbar-collapse, #new-header .company-nav.navbar-default .navbar-form {\n        float: left;\n        width: 5%;\n        margin-top: 20px;\n        display: block;\n        padding: 0;\n        border: none;\n    }\n    #new-header .navbar-right {\n        width: 55px;\n    }\n    #new-header {\n        height: 50px !important;\n    }\n    #new-header .company-nav.navbar-fixed-top .nav-padding {\n        padding-left: 0;\n        padding-right: 0\n    }\n    #new-header.cookies-parent{\n        margin-bottom: 0;\n    }\n}"

/***/ },

/***/ 753:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 754:
/***/ function(module, exports) {

module.exports = ":host {\n  border-color: #e1e1e1;\n  border-style: solid;\n  border-width: 0 0 1px;\n  display: block;\n  height: 48px;\n  padding: 0 16px;\n}\n\nnav a {\n  color: #8f8f8f;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 48px;\n  margin-right: 20px;\n  text-decoration: none;\n  vertical-align: middle;\n      font-family: 'montserratregular';\n}\n\nnav a.router-link-active {\n  color: #106cc8;\n}\n"

/***/ },

/***/ 755:
/***/ function(module, exports) {

module.exports = ":host {\n  border-color: #e1e1e1;\n  border-style: solid;\n  border-width: 0 0 1px;\n  display: block;\n  height: 48px;\n  padding: 0 16px;\n}\n\nnav a {\n  color: #8f8f8f;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 48px;\n  margin-right: 20px;\n  text-decoration: none;\n  vertical-align: middle;\n      font-family: 'montserratregular';\n}\n\nnav a.router-link-active {\n  color: #106cc8;\n}\n"

/***/ },

/***/ 756:
/***/ function(module, exports) {

module.exports = "@font-face {\n    font-family: 'Material Icons';\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/MaterialIcons-Regular.eot);\n    src: local('Material Icons'), \n    local('materialIcons-Regular'), \n    url(../../../../../assets/fonts/materialIcons-Regular.woff2) format('woff2'), \n    url(../../../../../assets/fonts/materialIcons-Regular.woff) format('woff'), \n    url(../../../../../assets/fonts/materialIcons-Regular.ttf) format('truetype')\n}\n\n.material-icons {\n font-family: 'Material Icons';\n font-weight: normal;\n font-style: normal;\n display: inline-block;\n line-height: 1;\n text-transform: none;\n letter-spacing: normal;\n word-wrap: normal;\n white-space: nowrap;\n direction: ltr;\n\n /* Support for all WebKit browsers. */\n -webkit-font-smoothing: antialiased;\n /* Support for Safari and Chrome. */\n text-rendering: optimizeLegibility;\n\n /* Support for Firefox. */\n -moz-osx-font-smoothing: grayscale;\n\n /* Support for IE. */\n -webkit-font-feature-settings: 'liga';\n         font-feature-settings: 'liga';\n}\n\n@font-face {\n    font-family: montserratregular;\n   font-style: normal;\n   font-weight: 400;\n   src: url(../../../../../assets/fonts/montserrat-regular-webfont.eot) format(\"embedded-opentype\"), \n   url(../../../../../assets/fonts/montserrat-regular-webfont.woff2) format(\"woff2\"),\n   url(../../../../../assets/fonts/montserrat-regular-webfont.woff) format(\"woff\"), \n   url(../../../../../assets/fonts/montserrat-regular-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratbold;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-bold-webfont.eot) format(\"embedded-opentype\"), \n    url(../../../../../assets/fonts/montserrat-bold-webfont.woff2) format(\"woff2\"), \n    url(../../../../../assets/fonts/montserrat-bold-webfont.woff) format(\"woff\"), \n    url(../../../../../assets/fonts/montserrat-bold-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratsemibold;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-semibold-webfont.eot?#iefix) format(\"embedded-opentype\"), \n    url(../../../../../assets/fonts/montserrat-semibold-webfont.woff2) format(\"woff2\"), \n    url(../../../../../assets/fonts/montserrat-semibold-webfont.woff) format(\"woff\"), \n    url(../../../../../assets/fonts/montserrat-semibold-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratlight;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-light-webfont.eot) format(\"embedded-opentype\"), \n    url(../../../../../assets/fonts/montserrat-light-webfont.woff2) format(\"woff2\"), \n    url(../../../../../assets./fonts/montserrat-light-webfont.woff) format(\"woff\"), \n    url(../../../../../assets/fonts/montserrat-light-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserrathairline;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-hairline-webfont.eot?#iefix) format(\"embedded-opentype\"), url(../../../../../assets/fonts/montserrat-hairline-webfont.woff2) format(\"woff2\"), url(../../../../../assets/fonts/montserrat-hairline-webfont.woff) format(\"woff\"), url(../../../../../assets/fonts/montserrat-hairline-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratultra_light;\n    src: url(../../../../../assets/fonts/montserrat-ultralight-webfont.woff2) format('woff2'), url(../../../../../assets/fonts/montserrat-ultralight-webfont.woff) format('woff'), url(../../../../../assets/fonts/montserrat-ultralight-webfont.ttf) format('truetype');\n    font-weight: 400;\n    font-style: normal\n}\n\n.font_newlight {\n    font-family: montserratlight!important\n}\n\n.font_newhairline {\n    font-family: montserrathairline\n}\n\n.font_newregular {\n    font-family: montserratregular\n}\n\n.font_newbold {\n    font-family: montserratbold\n}\n\n.font_semibold {\n    font-family: montserratsemibold\n}\n\nul,li{\n  list-style: none;\n}\na:hover, a:focus{\n  -webkit-transition: all 0.3s ease 0s !important;\n  transition: all 0.3s ease 0s !important;\n}\na:focus, img:focus, button:focus{\n  outline: none !important;\n}\n.ellipsis {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.btn-flat{\n  border-radius: 0px;\n}\n.btn-basic{\n  color: #e97252;\n  border: 1px solid #dae2e6;\n  font-size: 13px;\n}\n.btn-basic2{\n  color: #e97252;\n  border: 1px solid #dae2e6;\n  font-size: 11px;\n  background: #f6f8f9;\n  padding: 10px;\n}\n.btn-basic2 i{\n  color: #e97252;\n  font-size: 14px;\n  position: relative;\n  top: 3px;\n}\n.no-padding{\n  padding: 0px;\n}\n.navbar-fixed-top .nav-padding{\n  padding-left: 30px;\n  padding-right: 30px;\n}\n.template-outr{\n  padding-left: 30px;\n}\n/* responsive tabs css start */\n\n.panel-heading {\n    padding: 0\n}\n.panel-heading a {\n    display: block;\n    padding: 20px 10px;\n}\n.panel-heading a.collapsed {\n    background: #fff\n}\n.panel-heading a {\n    background: #f7f7f7;\n    border-radius: 5px;\n}\n.panel-heading a:after {\n    content: '-'\n}\n.panel-heading a.collapsed:after {\n    content: '+'\n}\n.nav.nav-tabs li a,\n.nav.nav-tabs li.active > a:hover,\n.nav.nav-tabs li.active > a:active,\n.nav.nav-tabs li.active > a:focus {\n    border-bottom-width: 0px;\n    outline: none;\n}\n.nav.nav-tabs li a {\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n.tab-pane {\n    background: #fff;\n    padding: 10px;\n    border: 1px solid #ddd;\n    margin-top: -1px;\n}\n\n/* responsive tabs css end */\n\n\n\n/* start: product css*/\n\n/* start: common css */\n    .np{padding: 0px;}\n    .clearfix {\n        clear: both;\n        float: left;\n        width: 100%;\n    }\n    .text-center{\n      text-align: center;\n    }\n    .section {\n        width: 100%;\n        float: left;\n    }\n    a:hover, a:focus{text-decoration: none; color: #8e989f;}\n    .font-italic{font-style: italic;}\n    .text-grey{color: #8e989f;}\n    .dis-block{display: block;}\n/* end: common css */\n\n#main {\n    height: 100%;\n    width: 100%;\n    float: left;\n}\n#main .container {\n    width: 100%;\n    padding: 0 30px;\n}\n\n/* Start: header section */\n    #header {\n        height: 65px;\n    }\n    #header .logo {\n        padding-right: 40px;\n        margin-right: 0px;\n        margin-top: 20px;\n        margin-bottom: 20px;\n    }\n    #header .logo a img.standard-logo {\n        display: block;\n        max-width: 100%;\n    }\n    .logo {\n        /*float: left;*/\n        font-size: 32px;\n        line-height: 100%;\n        height: 35px;\n    }\n    #header .menu {\n        /*float: right;\n        width: 83%;*/\n        margin-top: 20px;\n    }\n    .navbar {\n        margin-top: 20px;\n        min-height: 35px;\n    }\n    .top-search{\n        /*float: left;\n        width: 90%;  */\n        border-right: 1px solid #dae2e6;\n        border-left: 1px solid #dae2e6;\n        padding-left: 30px;\n    }\n    .top-search .form-group {\n        padding-bottom: 0;\n        margin: 0;\n    }\n    .top-search input{\n        font-size: 14px;\n        color: #bec5c9;\n        font-family: robotoregular !important;\n        box-shadow: none;\n        border: none;\n        float: left;\n        width: 95%;\n    }\n    .top-search input.form-control:focus {\n        border-color: none;\n        outline: none;\n        box-shadow: none;\n        background: none;\n    }\n    .top-search input[type=text] {\n        font-size: 14px;\n        color: #bec5c9;\n        border: none;\n        background: none;\n        padding: 6px 12px;\n        margin-bottom: 0px;\n    }\n    .top-search input::-webkit-input-placeholder {\n        font-size: 14px !important;\n    }\n    .top-search span.icon {\n        float: left;\n        margin-top: 10px;\n    }\n    .top-search span.icon i{\n        font-size: 18px;\n        color: #bec5c9;\n    }\n    .login{\n      /*float: right;\n      width: 10%;*/\n    }\n    .login-text {\n        float: right;\n        color: #8e989f;\n        font-size: 14px;\n        padding-top: 5px;\n    }\n    .login .login-text span.icon i {\n        font-size: 18px;\n        color: #ee795a;\n        top: 0px;\n        position: relative;\n    }\n    .login a:hover.login-text {\n        text-decoration: none;\n        color: #8e989f;\n    }\n    .signup-text{\n        float: right;\n        color: #8e989f;\n        font-size: 14px;\n        padding-top: 5px;\n        margin-right: 15px;\n    }\n    .login .signup-text span.icon i {\n        font-size: 18px;\n        color: #ee795a;\n        top: 0px;\n        position: relative;\n    }\n    .login a:hover.signup-text, .login a:focus.signup-text, .login a:active.signup-text {\n        text-decoration: none;\n        color: #8e989f;\n    }\n\n/* End: header section */\n\n/* start: tabs section */\n    .main-tabs .nav>li>a {\n        padding: 8px 40px;\n        font-size: 13px;\n        color: #8e989f !important;\n        line-height: 20px;\n        border-right: 1px solid #e9eef0 !important;\n        border-radius: 0;\n        margin-right: 0px;\n        width: 185px;\n        text-align: center;\n    }\n    .main-tabs .nav-tabs>li.active>a, .main-tabs .nav-tabs>li.active>a:focus, .main-tabs .nav-tabs>li.active>a:hover {\n        color: #8e989f !important;\n        cursor: pointer;\n        background-color: #e9eef0 !important;\n        border: none;\n        border-bottom-color: transparent;\n    }\n    .main-tabs .nav>li>a:hover {\n        background-color: #e9eef0 !important;\n        color: #8e989f !important;\n    }\n    .main-tabs .nav-tabs {\n        border-bottom: 1px solid #e9eef0;\n        border-top: 1px solid #e9eef0;\n        background: none;\n    }\n    .main-tabs .tab-pane {\n        background: #fff;\n        padding: 10px 0;\n        border: none;\n        margin-top: 0px;\n        float: left;\n    }\n    .main-tabs h1{\n      font-size: 24px;\n      color: #8e989f;\n      font-family: 'robotoregular';\n    }\n    .main-tabs p{\n      font-size: 14px;\n      color: #8e989f;\n      font-family: 'robotoregular';\n    }\n    .main-tabs hr {\n        margin-top: 30px;\n        margin-bottom: 35px;\n        border: 0;\n        border-top: 1px solid #e9eef0 !important;\n    }\n    .btn-blue {\n        color: #fff !important;\n        background-color: #5cc9e6 !important;\n        border-color: #5cc9e6 !important;\n        border-radius: 0 !important;\n        padding: 7px 60px !important;\n        margin-top: 15px !IMPORTANT;\n        margin-right: 25px !important;\n        -webkit-transition: all 0.3s ease 0s;\n        transition: all 0.3s ease 0s;\n        text-transform: none !important;\n    }\n    .btn-blue:hover, .btn-blue:focus, .btn-blue:active {\n        color: #fff;\n        background-color: #57bdd8;\n        border-color: #57bdd8;\n        box-shadow: none;\n    }\n    hr {\n        margin-top: 30px;\n        margin-bottom: 30px;\n        border: 0;\n        border-top: 1px solid #e9eef0 !important;\n    }\n\n/* end: tabs section */\n\n/* Start: sec featured */\n    .featured-section{\n       float: left;\n       width: 100%;\n    }\n    .featured-section h2{\n      font-size: 22px;\n      color: #269fd8;\n      margin-bottom: 5px;\n      margin-top: 0;\n    }\n    .featured-section span{\n      color: #8e989f;\n      font-size: 14px;\n    }\n    .featured-section .featured-text-block {\n        line-height: 22px;\n    }\n    .featured-section .icon i.material-icons {\n        font-size: 48px;\n        color: #c2c9cd;\n    }\n    .featured-section .icon-list{\n        margin-right: 15px;\n        position: relative;\n    }\n    .featured-section .icon-list span.badge {\n        position: absolute;\n        bottom: 0;\n        right: 0px;\n        background: #f65a30;\n        color: #fff;\n        font-size: 10px;\n        font-family: robotobold;\n        box-shadow: 0px 1px 1px rgba(0,0,0,0.18);\n    }\n    .featured-section .icon-list.active .icon i.material-icons {\n        color: #8e989f;\n    }\n    .featured-section .icon-list.active .icon i.material-icons {\n        color: #8e989f;\n    }\n    .featured-section .icon-list .icon i.material-icons:hover {\n        color: #8e989f;\n    }\n    .featured-list{margin-top: 25px;}\n\n/* End: sec featured */\n\n/* start: footer */\n    .footer-main{\n      float: left;\n      width: 100%;\n    }\n    .footer-top{\n      float: left;\n      width: 100%;\n      background: #e9eef0;\n      padding: 20px 10px 30px;\n    }\n    .footer-main .footer-top p{\n        font-size: 13px;\n        color: #8e989f;\n        line-height: 18px;\n        margin-top: 15px;\n    }\n    .footer-main .footer-top .footer-social-icons{\n        margin-top: 30px;\n    }\n    .footer-main .footer-top .footer-social-icons a img{\n        margin-right: 5px;\n    }\n    .footer-bottom{\n      float: left;\n      width: 100%;\n      margin: 25px 0px 15px;\n    }\n    .footer-bottom a{\n      color: #bbc1c5;\n      font-size: 12px;\n    }\n    .footer-bottom a:hover, .footer-bottom a:focus, .footer-bottom a:active{\n      text-decoration: none;\n      color: #8e989f;\n    }\n    .footer-bottom p.copyright{\n      font-size: 13px;\n      color: #bbc1c5;\n      text-align: right;\n    }\n\n/* end: footer */\n\n/* Start: Modal Forms Materiliaze CSS */\n  .modal i.material-icons {\n      font-size: 18px;\n      color: #fff;\n  }\n  .modal button.close.btn-close {\n      position: absolute;\n      right: 15px;\n      top: 15px;\n      z-index: 9;\n      opacity: 0.7;\n       -webkit-transition: all 0.3s ease 0s !important;\n       transition: all 0.3s ease 0s !important;\n  }\n  .modal .close:focus, .modal .close:hover {\n      color: #000;\n      text-decoration: none;\n      cursor: pointer;\n      filter: alpha(opacity=50);\n      opacity: .9 !important;\n  }\n  .modal-open .modal {\n      overflow-x: hidden;\n  }\n  .modal{\n      font-family: montserratregular;\n  }\n  .modal .form-control {\n      height: 38px;\n      padding: 7px 0;\n      font-size: 14px;\n      line-height: 1.42857143;\n      font-family: montserratregular;\n      color: #62696d;\n  }\n  .modal .form-group label.control-label {\n      font-size: 14px;\n      line-height: 1.07142857;\n      color: #8e989f;\n      font-weight: 400;\n      margin: 16px 0 0 0;\n      font-family: montserratregular;\n  }\n  .modal .form-group.label-floati62696dng label.control-label,\n  .modal .form-group.label-placeholder label.control-label {\n      top: -7px;\n      font-size: 14px;\n      line-height: 18px;\n  }\n  .modal .form-group.label-floating:not(.is-empty) label.control-label {\n      top: -20px;\n      font-family: montserratregular;\n      font-size: 11px;\n      text-transform: uppercase;\n      color: #8e989f !important;\n  }\n  .modal .form-group.label-floating.is-focused label.control-label {\n      top: -20px;\n      font-size: 11px;\n      font-family: montserratregular;\n      color: #8e989f !important;\n  }\n  .modal .form-group.is-focused label,\n  .modal .form-group.is-focused label.control-label {\n      color: #8e989f;\n      text-transform: uppercase;\n  }\n  .modal .form-control,\n  .modal .form-group .form-control {\n    border: 0;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #D2D2D2);\n    background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #d7dbdd);\n    background-image: linear-gradient(#009688, #009688), linear-gradient(#d7dbdd, #d7dbdd);\n  }\n  .modal .form-group.is-focused .form-control {\n    outline: none;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#fb545b), to(#fb545b)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: -webkit-linear-gradient(#fb545b, #fb545b), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n    background-image: linear-gradient(#fb545b, #fb545b), linear-gradient(#D2D2D2, #D2D2D2);\n    background-size: 100% 2px, 100% 1px;\n    box-shadow: none;\n    -webkit-transition-duration: 0.3s;\n            transition-duration: 0.3s;\n  }\n  .modal .form-group {\n      padding-bottom: 7px;\n      margin: 12px 0 0 0;\n      clear: both;\n  }\n  .modal-backdrop {\n      background: rgba(0, 0, 0, 0.99) !important;\n  }\n\n/* End: Modal Forms Materiliaze CSS */\n\n/* end: product css*/\n\n/* custom material css start (sahil) */\n    .sahil-material .form-control {\n        height: 38px;\n        padding: 7px 0;\n        font-size: 14px;\n        line-height: 1.42857143;\n        font-family: montserratregular;\n        color: #62696d;\n    }\n    .sahil-material .form-group label.control-label {\n        font-size: 14px;\n        line-height: 1.07142857;\n        color: #8e989f;\n        font-weight: 400;\n        margin: 16px 0 0 0;\n        font-family: montserratregular;\n    }\n    .sahil-material .form-group label.control-label.seo-static-label{\n        text-transform: uppercase !important;\n        font-size: 10px !important;\n        color: #8e989f !important;\n    }\n    .sahil-material .form-group.label-floating label.control-label,\n    .sahil-material .form-group.label-placeholder label.control-label {\n        top: -7px;\n        font-size: 14px;\n        line-height: 18px;\n        color: #8e989f;\n    }\n    .sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\n        top: -20px;\n        font-family: montserratregular;\n        font-size: 11px;\n        text-transform: uppercase;\n        color: #8e989f !important;\n    }\n    .sahil-material .form-group.label-floating.is-focused label.control-label {\n        top: -20px;\n        font-size: 11px;\n        font-family: montserratregular;\n        color: #8e989f !important;\n    }\n    .sahil-material .form-group.is-focused label,\n    .sahil-material .form-group.is-focused label.control-label {\n        font-size: 11px;\n        font-family: montserratregular;\n        color: #8e989f !important;\n        text-transform: uppercase;\n    }\n    .sahil-material .form-control,\n    .sahil-material .form-group .form-control {\n        border: 0 !important;\n        background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n        background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #D2D2D2);\n        background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #d7dbdd);\n        background-image: linear-gradient(#009688, #009688), linear-gradient(#d7dbdd, #d7dbdd);\n\n    }\n    \n    .sahil-material .form-group.is-focused .form-control {\n        outline: none;\n        background-image: -webkit-gradient(linear, left top, left bottom, from(#fb545b), to(#fb545b)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n        background-image: -webkit-linear-gradient(#fb545b, #fb545b), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n        background-image: linear-gradient(#fb545b, #fb545b), linear-gradient(#D2D2D2, #D2D2D2);\n        background-size: 100% 2px, 100% 1px;\n        box-shadow: none;\n        -webkit-transition-duration: 0.3s;\n                transition-duration: 0.3s;\n    }\n\n/* custom material css end (sahil) */\n\n/* Start: First signUp screen */\n    .first-signUp{\n        /*margin-top: 72px;*/\n    }\n\n    .first-signUp .alert.alert-danger {\n        background: none !important;\n        position: relative;\n        width: 100%;\n    }\n\n    .first-signUp .alert.alert-danger p{\n        position: absolute;\n        width: 100%;\n    }\n\n    .first-signUp .alert.alert-danger span.mat-icon{\n        float: left;\n        width: auto;\n    }\n\n    .first-signUp .alert.alert-danger span.mat-icon i.material-icons {\n        font-size: 12px;\n        margin-right: 5px;\n        margin-top: 1px;\n        color: #fb545b;\n    }\n\n    .first-signUp .form-group{\n        padding-bottom: 7px;\n        margin: 12px 0 0;\n        clear: both;\n    }\n\n    /* Start: loading dots */\n\n        .loading:after {\n            content: ' .';\n            -webkit-animation: dots 1s steps(5, end) infinite;\n                    animation: dots 1s steps(5, end) infinite;\n            font-size: 18px;\n            line-height: 1px;\n            position: relative;\n            left: -3px;\n        }\n\n        @-webkit-keyframes dots {\n            0%, 20% {\n                color: rgba(0,0,0,0);\n                text-shadow: .25em 0 0 rgba(0,0,0,0),\n                                .5em 0 0 rgba(0,0,0,0);\n            }\n\n            40% {\n                color: white;\n                text-shadow: .25em 0 0 rgba(0,0,0,0),\n                             .5em 0 0 rgba(0,0,0,0);\n            }\n\n            60% {\n                text-shadow: .25em 0 0 white,\n                             .5em 0 0 rgba(0,0,0,0);\n            }\n            80%, 100% {\n                text-shadow: .25em 0 0 white,\n                             .5em 0 0 white;\n            }\n\n        }\n\n        @keyframes dots {\n            0%, 20% {\n                color: rgba(0,0,0,0);\n                text-shadow: .25em 0 0 rgba(0,0,0,0),\n                                .5em 0 0 rgba(0,0,0,0);\n            }\n\n            40% {\n                color: white;\n                text-shadow: .25em 0 0 rgba(0,0,0,0),\n                             .5em 0 0 rgba(0,0,0,0);\n            }\n\n            60% {\n                text-shadow: .25em 0 0 white,\n                             .5em 0 0 rgba(0,0,0,0);\n            }\n            80%, 100% {\n                text-shadow: .25em 0 0 white,\n                             .5em 0 0 white;\n            }\n\n        }\n\n    /* End: loading dots */\n\n/* End: First signUp screen */\n\n/* Start: Responsive - First signUp  */\n    #leads .btn-createCalc{\n        margin-top: 40px !important;\n        margin-bottom: 0px !important;\n        padding: 10px 30px !important;\n        font-size: 13px !important;\n    }\n\n    @media screen and (min-width: 320px) and (max-width: 320px){\n        #leads.login .login-left{\n            width: 100%;\n            padding: 40px 23px 60px !important;\n        }\n\n        #leads.login{\n            overflow: scroll;\n        }\n\n    }\n\n    @media (max-width: 767px){\n        #leads.login{\n            padding-left: 0;\n        }\n\n        #leads .btn-createCalc{\n            padding: 8px 25px !important;\n            white-space: normal;\n        }\n\n        #leads .login-right{\n            display: none;\n        }\n\n        #leads.login .login-dialog {\n            width: auto;\n        }\n\n        #leads.login .login-left{\n            width: 100%;\n            padding: 40px 30px 60px;\n        }\n\n        /*#leads .login-left-inner{\n            -webkit-overflow-scrolling: auto !important;\n            overflow-y: auto !important;\n        }*/\n\n        #leads.login i.material-icons{\n            color: #8e989f !important;\n        }\n\n        #new-header .navbar-default.company-nav{\n            display: none !important;\n        }\n\n    }\n\n    @media screen and (min-width: 768px) and (max-width: 768px) {\n        .testimonial-block{\n            float: none;\n            margin: 0 auto;\n        }\n\n        .testimonial-content{\n            float: left;\n            width: 100%;\n            margin-left: 0;\n        }\n\n        .testi-desc{\n            text-align: center;\n        }\n\n        .testi-client{\n            text-align: center;\n        }\n\n    }\n\n    @media screen and (min-width: 1024px) and (max-width: 1024px) {\n        .testimonial-block{\n            float: none;\n            margin: 0 auto;\n        }\n\n        .testimonial-content{\n            float: left;\n            width: 100%;\n            margin-left: 0;\n        }\n\n        .testi-desc{\n            text-align: center;\n        }\n\n        .testi-client{\n            text-align: center;\n        }\n\n    }\n\n    @media (max-width: 1280px) {\n        .testimonial-block{\n            float: none;\n            margin: 0 auto;\n        }\n\n        .testimonial-content{\n            float: left;\n            width: 100%;\n            margin-left: 0;\n        }\n\n        .testi-desc{\n            text-align: center;\n        }\n\n        .testi-client{\n            text-align: center;\n        }\n\n    }\n\n/* End: Responsive - First signUp  */\n\n/* Start: Modal Login (materialize) */\n    #leads.login {\n        width: 100%;\n        float: left;\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 1050;\n        overflow: hidden;\n        -webkit-overflow-scrolling: touch;\n        outline: 0;\n    }\n\n    #leads .login-dialog {\n        position: relative;\n    }\n\n    #leads .login-content{\n      border-radius: 0px;\n      /*border: 1px solid #e9eef0;*/\n      float: left;\n      width: 100%;\n      position: relative;\n    }\n\n    #leads .login-header {\n        padding: 20px 25px;\n        border-bottom: none;\n    }\n\n    #leads .logo-section{\n        margin-bottom: 40px;\n    }\n\n    #leads .logo-section span{\n        display: block;\n        font-size: 30px;\n        color: #fb545b;\n        font-family: montserratultra_light;\n        line-height: 36px;\n        margin-top: 10px;\n    }\n\n    #leads .login-logo{\n        /*margin-bottom: 50px;\n        margin-top: 40px;*/\n    }\n\n    #leads .login-body {\n        position: relative;\n        padding: 0px;\n        float: left;\n        width: 100%;\n        /*background: #f6f8f9;*/\n        z-index: 9999;\n    }\n\n    #leads .login-left{\n        width: 50%;\n        float: left;\n        padding: 40px 40px 40px 40px;\n        display: table;\n        height: 100vh;\n        background: #fff;\n        /*height: 600px;*/\n    }\n\n    #leads .login-left-inner {\n        display: table-cell;\n        vertical-align: middle;\n        float: none;\n    }\n\n    #leads .login-right {\n        background: #fb545b;\n        float: left;\n        width: 50%;\n        height: 100vh;\n        padding: 30px;\n        display: table;\n      }\n\n    #leads .login-right-inner {\n        display: table-cell;\n        vertical-align: middle;\n        float: none;\n    }\n\n    /*#leads .img-margin{\n        margin: 40px 0px 15px;\n    }*/\n\n    #leads .img-section {\n        float: left;\n        width: 100%;\n        margin: 40px 0px 0px;\n        /*margin-left: 5% !important;*/\n        position: relative;\n        min-height: 365px;\n    }\n\n    #leads .img-width{\n        width: auto;\n        /*margin-left: 5% !important;*/\n        box-shadow: -9px -9px 12px rgba(0, 0, 0, 0.14);\n        /*position: relative;*/\n    }\n\n    .login-img1 {\n        position: absolute;\n        left: 30px;\n        top: 0;\n    }\n\n    .login-img2 {\n        position: absolute;\n        left: 233px;\n        top: 78px;\n        z-index: 9;\n    }\n\n    .login-img3 {\n        position: absolute;\n        left: 130px;\n        top: 180px;\n        z-index: 9;\n    }\n\n    #leads .input-group {\n        width: 100%;\n        margin-top: 30px;\n        border-bottom: 1px solid #d7dbdd;\n    }\n\n    #leads .input-field {\n        float: left !important;\n        /* width: 100% !important; */\n        border: none;\n        box-shadow: none;\n        color: #8e989f;\n        font-size: 14px;\n        font-family: montserratregular;\n        padding: 0;\n    }\n\n    #leads input[type=\"email\"]::-webkit-input-placeholder,\n    #leads input[type=\"password\"]::-webkit-input-placeholder,\n    #leads input[type=\"text\"]::-webkit-input-placeholder {\n      color: #8e989f !important;\n    }\n\n    #leads.login .form-group label.control-label {\n        font-size: 14px;\n        line-height: 1.07142857;\n        color: #8e989f;\n        font-weight: 400;\n        margin: 16px 0 0 0;\n        font-family: montserratregular;\n    }\n\n    #leads .dont-acc-signup {\n        color: #62696d;\n        font-size: 12px;\n        font-family: montserratregular;\n        margin-bottom: 0px;\n        padding-top: 10px;\n    }\n\n    #leads .forgot-btn {\n        position: absolute;\n        right: 2px;\n        bottom: 25px;\n        z-index: 9;\n        color: #fb545b;\n        font-size: 11px;\n        text-transform: uppercase;\n        font-family: montserratregular;\n        opacity: 1;\n    }\n\n    #leads .forgot-btn:hover,  #leads .forgot-btn:focus{\n        color: #fa5282;\n    }\n\n    #leads .btn-login{\n        margin-top: 20px !important;\n        margin-bottom: 0px !important;\n    }\n\n    #leads.login .val-success-msg {\n        float: left;\n        margin: 0;\n    }\n\n    #leads.login button.close.btn-close {\n        position: absolute;\n        right: 30px;\n        top: 15px;\n        z-index: 9;\n        opacity: 0.7;\n        -webkit-transition: all 0.3s ease 0s !important;\n        transition: all 0.3s ease 0s !important;\n    }\n\n    #leads.login button.close.btn-close:focus, #leads.login button.close.btn-close:hover {\n        color: #000;\n        text-decoration: none;\n        cursor: pointer;\n        filter: alpha(opacity=50);\n        opacity: .9 !important;\n    }\n\n    #leads.login button.close.btn-close i.material-icons {\n        font-size: 18px;\n        color: #fff;\n    }\n\n    #leads.login .alert.alert-danger {\n        background: none !important;\n        position: relative;\n        width: 100%;\n    }\n\n    #leads.login .alert.alert-danger p{\n        position: absolute;\n        width: 100%;\n    }\n\n    #leads.login .alert.alert-danger span.mat-icon{\n        float: left;\n        width: auto;\n    }\n\n    #leads.login .alert.alert-danger span.mat-icon i.material-icons {\n        font-size: 12px;\n        margin-right: 5px;\n        margin-top: 1px;\n        color: #fb545b !important;\n    }\n    #leads.login .signup-first{ text-align: center;}\n\n    #leads.login .form-group{\n        padding-bottom: 7px;\n        margin: 12px 0 0;\n        clear: both;\n    }\n\n    .video-wrapper{\n        position: relative;\n        float: left;\n        width: 100%;\n    }\n\n    iframe {\n        position: absolute;\n        top: 70px;\n        left: 98px;\n        right: 0;\n        width: 68%;\n    }\n\n    .smiley{\n        position: relative;\n        top: -1px;\n    }\n\n    .btn-lead-320{\n        display: none;\n    }\n\n    /* Start: login-testimonial */\n\n        .login-testimonial {\n            float: left;\n            width: 100%;\n            padding: 0px 25px;\n        }\n\n        .testimonial-block {\n            background: rgba(255,255,255, 0.3);\n            border-radius: 50%;\n            width: 76px;\n            height: 76px;\n            float: left;\n            position: relative;\n        }\n\n        .testimonial-block span{\n            position: absolute;\n            top: -15px;\n            left: 18px;\n            font-size: 120px;\n            color: #fff;\n            font-family: montserratlight;\n        }\n\n        .testimonial-content {\n            float: left;\n            width: 82%;\n            margin-left: 20px;\n            margin-top: 10px;\n        }\n\n        .testi-desc{\n            float: left;\n            width: 100%;\n            font-size: 24px;\n            color: #fff;\n            line-height: 26px;\n            font-family: montserratlight;\n        }\n\n        .testi-client{\n            font-size: 16px;\n            color: rgba(255,255,255,0.8);\n            line-height: 26px;\n            font-family: montserratregular;\n            font-style: italic;\n            float: left;\n            width: 100%;\n            padding-top: 15px;\n        }\n\n    /* End: login-testimonial */\n\n    /* Start: loading dots */\n\n        .loading:after {\n            content: ' .';\n            -webkit-animation: dots 1s steps(5, end) infinite;\n                    animation: dots 1s steps(5, end) infinite;\n            font-size: 18px;\n            line-height: 1px;\n            position: relative;\n            left: -3px;\n        }\n\n        @keyframes dots {\n            0%, 20% {\n                color: rgba(0,0,0,0);\n                text-shadow: .25em 0 0 rgba(0,0,0,0),\n                                .5em 0 0 rgba(0,0,0,0);\n            }\n\n            40% {\n                color: white;\n                text-shadow: .25em 0 0 rgba(0,0,0,0),\n                             .5em 0 0 rgba(0,0,0,0);\n            }\n\n            60% {\n                text-shadow: .25em 0 0 white,\n                             .5em 0 0 rgba(0,0,0,0);\n            }\n            80%, 100% {\n                text-shadow: .25em 0 0 white,\n                             .5em 0 0 white;\n            }\n\n        }\n\n    /* End: loading dots */\n\n/* End: Modal Login (materialize) */\n\n/* Start: Responsive - Login Modal */\n\n    @media screen and (min-width: 320px) and (max-width: 320px){\n\n    }\n\n    @media (max-width: 767px){\n        #leads.login{\n            padding-left: 0;\n            margin-top: -50px;\n        }\n\n        #leads .login-right{\n            display: none;\n        }\n\n        #leads.login .login-dialog {\n            width: auto;\n        }\n\n        #leads.login .login-left{\n            width: 100%;\n            padding: 40px 30px 60px;\n        }\n\n        #leads .login-logo{\n            margin-top: 10px;\n        }\n\n        #leads.login button.close.btn-close i.material-icons{\n            color: #8e989f !important;\n        }\n\n    }\n\n    @media screen and (min-width: 768px) and (max-width: 768px) {\n        .testimonial-block{\n            float: none;\n            margin: 0 auto;\n        }\n\n        .testimonial-content{\n            float: left;\n            width: 100%;\n            margin-left: 0;\n        }\n\n        .testi-desc{\n            text-align: center;\n        }\n\n        .testi-client{\n            text-align: center;\n        }\n\n        /*.video-wrapper iframe{\n            position: absolute;\n            top: 60px;\n            left: 55px;\n            right: 0;\n            width: 215px;\n            height: 120px;\n        }*/\n\n        #leads .btn-createCalc{\n            margin-top: 40px !important;\n            margin-bottom: 0px !important;\n            padding: 10px 10px !important;\n            font-size: 11px !important;\n        }\n\n        .login-testimonial {\n            padding: 0px 25px;\n        }\n\n        #leads .login-right {\n            padding: 0px;\n        }\n\n        .testi-desc{\n            font-size: 18px;\n        }\n\n        .testi-client {\n            font-size: 13px;\n        }\n\n        #leads .img-width {\n            width: 54%;\n        }\n\n        .login-img2 {\n            left: 145px;\n            top: 45px;\n        }\n\n        .login-img3 {\n            left: 85px;\n            top: 105px;\n        }\n\n        #leads .img-section {\n            margin: 55px 0px 0px;\n            min-height: 217px;\n        }\n\n    }\n\n    @media screen and (min-width: 1024px) and (max-width: 1024px) {\n        .testimonial-block{\n            float: none;\n            margin: 0 auto;\n        }\n\n        .testimonial-content{\n            float: left;\n            width: 100%;\n            margin-left: 0;\n        }\n\n        .testi-desc{\n            text-align: center;\n        }\n\n        .testi-client{\n            text-align: center;\n        }\n\n        /*iframe.iframe-1024{\n            position: absolute;\n            top: 60px;\n            left: 74px;\n            right: 0;\n            width: 305px;\n            height: 177px;\n        }*/\n\n        #leads .img-width{\n            width: 55%;\n        }\n\n        .login-img2{\n            left: 165px;\n            top: 52px;\n        }\n\n        .login-img3{\n            left: 100px;\n            top: 122px;\n        }\n\n        #leads .img-section {\n            min-height: 253px;\n        }\n\n    }\n\n    @media screen and (min-width: 1024px) and (max-width: 1279px) {\n        #leads .img-width{\n            width: 55%;\n        }\n\n        .login-img2{\n            left: 165px;\n            top: 52px;\n        }\n\n        .login-img3{\n            left: 100px;\n            top: 122px;\n        }\n\n        #leads .img-section {\n            min-height: 253px;\n        }\n\n        .testimonial-block{\n            float: none;\n            margin: 0 auto;\n        }\n\n        .testi-desc {\n            text-align: center;\n        }\n\n        .testi-client{\n            text-align: center;\n        }\n\n    }\n\n    @media screen and (min-width: 1280px) and (max-width: 1280px) {\n        .testimonial-block{\n            float: none;\n            margin: 0 auto;\n        }\n\n        .testimonial-content{\n            float: left;\n            width: 100%;\n            margin-left: 0;\n        }\n\n        .testi-desc{\n            text-align: center;\n        }\n\n        .testi-client{\n            text-align: center;\n        }\n\n        /*iframe{\n            position: absolute;\n            top: 65px;\n            left: 92px;\n            right: 0;\n            width: 380px;\n            height: 214px;\n        }*/\n\n        #leads .img-width{\n            width: 54%;\n        }\n\n        #leads .img-section{\n            margin: 30px 0px 0px;\n            min-height: 325px;\n        }\n\n        .login-img2{\n            left: 200px;\n            top: 67px;\n        }\n\n        .login-img3{\n            left: 130px;\n            top: 155px;\n        }\n\n    }\n\n    @media screen and (min-width: 1920px) and (max-width: 1920px) {\n        /*iframe{\n            position: absolute;\n            top: 75px;\n            left: 140px;\n            right: 0;\n            width: 610px;\n            height: 347px;\n        }*/\n\n        #leads .img-section{\n            width: 85%;\n            margin-left: 18%;\n        }\n\n    }\n\n/* End: Responsive - Login Modal */\n\n@media (max-width: 1900px) {\n    #signUp .form-group .control-label.label-url,\n    .modal .form-group.label-floating.is-focused label.control-label,\n    .modal .form-group.label-floating:not(.is-empty) label.control-label,\n    .my-profile .form-group.favicon-upload label.control-label,\n    .my-profile .form-group.time-zone label.control-label,\n    .sahil-material .form-group.label-floating.is-focused label.control-label,\n    .sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\n        font-size: 10px!important\n    }\n}\n\n.btn-red {\n    color: #fff;\n    background-color: #fb545b;\n    border-color: #fb545b;\n    border-radius: 0;\n    font-size: 14px;\n    padding: 7px 70px;\n    margin-top: 25px;\n    -webkit-transition: all .3s ease 0s;\n    transition: all .3s ease 0s;\n    margin-right: 0;\n    font-weight: 400;\n    text-transform: uppercase;\n    font-family: montserratregular;\n}\n.alert.alert-danger {\n    background: 0 0!important;\n    border: none;\n    position: relative;\n    top: -12px;\n    left: 0;\n    padding: 0;\n    color: #fb545b!important;\n    font-size: 11px;\n    margin: 0;\n    float: left;\n    width: 100%;\n    text-align: left\n}\n.alert.alert-danger p {\n    position: absolute;\n    width: 100%;\n    font-family: montserratregular;\n}\n.alert.alert-dange p span.mat-icon {\n    float: left;\n    width: auto\n}\n.alert.alert-danger p span.mat-icon i.material-icons {\n    float: left;\n    font-size: 12px!important;\n    margin-right: 5px;\n    margin-top: 1px;\n    color: #fb545b!important\n}\n.alert.alert-danger.custom-alert {\n    padding: 10px;\n    margin-top: 10px;\n    border-radius: 0;\n    background: #feddde!important\n}\n.alert.alert-danger.custom-alert p {\n    position: relative\n}\n.text-red {\n    color: #fb545b\n}\na.text-red:focus,\na.text-red:hover {\n    color: #fa5282\n}\na.text-red {\n    cursor: pointer;\n}\n\n\n/*animations*/\n\n/******************\n* Bounce in right *\n*******************/\n\n.animated { \n    -webkit-animation-duration: 1s; \n    animation-duration: 2s; \n    -webkit-animation-fill-mode: both; \n    animation-fill-mode: both; \n} \n.bounceInRight, .bounceInLeft, .bounceInUp, .bounceInDown{\n    opacity:0;\n    -webkit-transform: translateX(400px); \n    transform: translateX(400px); \n}\n/***********\n* bounceIn *\n************/\n@-webkit-keyframes bounceIn { \n    0% { \n        opacity: 0; \n        -webkit-transform: scale(.3); \n    } \n\n    50% { \n        opacity: 1; \n        -webkit-transform: scale(1.05); \n    } \n\n    70% { \n        -webkit-transform: scale(.9); \n    } \n\n    100% { \n         -webkit-transform: scale(1); \n    } \n} \n\n@keyframes bounceIn { \n    0% { \n        opacity: 0; \n        -webkit-transform: scale(.3); \n                transform: scale(.3); \n    } \n\n    50% { \n        opacity: 1; \n        -webkit-transform: scale(1.05); \n                transform: scale(1.05); \n    } \n\n    70% { \n        -webkit-transform: scale(.9); \n                transform: scale(.9); \n    } \n\n    100% { \n        -webkit-transform: scale(1); \n                transform: scale(1); \n    } \n} \n\n.bounceIn.go { \n    -webkit-animation-name: bounceIn; \n    animation-name: bounceIn; \n}\n\n/****************\n* bounceInRight *\n****************/\n\n@-webkit-keyframes bounceInRight { \n    0% { \n        opacity: 0; \n        \n        -webkit-transform: translateX(400px); \n    } \n    60% { \n        \n        -webkit-transform: translateX(-30px); \n    } \n    80% { \n        -webkit-transform: translateX(10px); \n    } \n    100% {\n    opacity: 1;\n     \n        -webkit-transform: translateX(0); \n    } \n} \n\n@keyframes bounceInRight { \n    0% { \n        opacity: 0; \n        \n        -webkit-transform: translateX(400px); \n        \n                transform: translateX(400px); \n    } \n    60% { \n        \n        -webkit-transform: translateX(-30px); \n        \n                transform: translateX(-30px); \n    } \n    80% { \n        -webkit-transform: translateX(10px); \n                transform: translateX(10px); \n    } \n    100% {\n    opacity: 1;\n     \n        -webkit-transform: translateX(0);\n     \n                transform: translateX(0); \n    } \n} \n\n\n.bounceInRight.go { \n    -webkit-animation-name: bounceInRight; \n    animation-name: bounceInRight; \n}\n\n/******************\n* Bounce in left *\n*******************/\n\n@-webkit-keyframes bounceInLeft { \n    0% { \n        opacity: 0; \n        \n        -webkit-transform: translateX(-400px); \n    } \n    60% { \n       \n        -webkit-transform: translateX(30px); \n    } \n    80% { \n        -webkit-transform: translateX(-10px); \n    } \n    100% {\n        opacity: 1;\n         \n        -webkit-transform: translateX(0); \n    } \n} \n\n@keyframes bounceInLeft { \n    0% { \n        opacity: 0; \n        \n        -webkit-transform: translateX(-400px); \n        \n                transform: translateX(-400px); \n    } \n    60% { \n       \n        -webkit-transform: translateX(30px); \n       \n                transform: translateX(30px); \n    } \n    80% { \n        -webkit-transform: translateX(-10px); \n                transform: translateX(-10px); \n    } \n    100% {\n        opacity: 1;\n         \n        -webkit-transform: translateX(0);\n         \n                transform: translateX(0); \n    } \n} \n\n.bounceInLeft.go { \n    -webkit-animation-name: bounceInLeft; \n    animation-name: bounceInLeft; \n}\n\n/******************\n* Bounce in up *\n*******************/\n\n@-webkit-keyframes bounceInUp { \n    0% { \n        opacity: 0; \n        \n        -webkit-transform: translateY(400px); \n    } \n    60% { \n       \n        -webkit-transform: translateY(-30px); \n    } \n    80% { \n        -webkit-transform: translateY(10px); \n    } \n    100% {\n        opacity: 1;\n         \n        -webkit-transform: translateY(0); \n    } \n} \n\n@keyframes bounceInUp { \n    0% { \n        opacity: 0; \n        \n        -webkit-transform: translateY(400px); \n        \n                transform: translateY(400px); \n    } \n    60% { \n       \n        -webkit-transform: translateY(-30px); \n       \n                transform: translateY(-30px); \n    } \n    80% { \n        -webkit-transform: translateY(10px); \n                transform: translateY(10px); \n    } \n    100% {\n        opacity: 1;\n         \n        -webkit-transform: translateY(0);\n         \n                transform: translateY(0); \n    } \n} \n\n.bounceInUp.go { \n    -webkit-animation-name: bounceInUp; \n    animation-name: bounceInUp; \n}\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ },

/***/ 757:
/***/ function(module, exports) {

module.exports = "@font-face {\n    font-family: 'Material Icons';\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/MaterialIcons-Regular.eot);\n    src: local('Material Icons'), \n    local('materialIcons-Regular'), \n    url(../../../../../assets/fonts/materialIcons-Regular.woff2) format('woff2'), \n    url(../../../../../assets/fonts/materialIcons-Regular.woff) format('woff'), \n    url(../../../../../assets/fonts/materialIcons-Regular.ttf) format('truetype')\n}\n\n.material-icons {\n font-family: 'Material Icons';\n font-weight: normal;\n font-style: normal;\n display: inline-block;\n line-height: 1;\n text-transform: none;\n letter-spacing: normal;\n word-wrap: normal;\n white-space: nowrap;\n direction: ltr;\n\n /* Support for all WebKit browsers. */\n -webkit-font-smoothing: antialiased;\n /* Support for Safari and Chrome. */\n text-rendering: optimizeLegibility;\n\n /* Support for Firefox. */\n -moz-osx-font-smoothing: grayscale;\n\n /* Support for IE. */\n -webkit-font-feature-settings: 'liga';\n         font-feature-settings: 'liga';\n}\n\n@font-face {\n    font-family: montserratregular;\n   font-style: normal;\n   font-weight: 400;\n   src: url(../../../../../assets/fonts/montserrat-regular-webfont.eot) format(\"embedded-opentype\"), \n   url(../../../../../assets/fonts/montserrat-regular-webfont.woff2) format(\"woff2\"),\n   url(../../../../../assets/fonts/montserrat-regular-webfont.woff) format(\"woff\"), \n   url(../../../../../assets/fonts/montserrat-regular-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratbold;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-bold-webfont.eot) format(\"embedded-opentype\"), \n    url(../../../../../assets/fonts/montserrat-bold-webfont.woff2) format(\"woff2\"), \n    url(../../../../../assets/fonts/montserrat-bold-webfont.woff) format(\"woff\"), \n    url(../../../../../assets/fonts/montserrat-bold-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratsemibold;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-semibold-webfont.eot?#iefix) format(\"embedded-opentype\"), \n    url(../../../../../assets/fonts/montserrat-semibold-webfont.woff2) format(\"woff2\"), \n    url(../../../../../assets/fonts/montserrat-semibold-webfont.woff) format(\"woff\"), \n    url(../../../../../assets/fonts/montserrat-semibold-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratlight;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-light-webfont.eot) format(\"embedded-opentype\"), \n    url(../../../../../assets/fonts/montserrat-light-webfont.woff2) format(\"woff2\"), \n    url(../../../../../assets./fonts/montserrat-light-webfont.woff) format(\"woff\"), \n    url(../../../../../assets/fonts/montserrat-light-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserrathairline;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../../../../../assets/fonts/montserrat-hairline-webfont.eot?#iefix) format(\"embedded-opentype\"), url(../../../../../assets/fonts/montserrat-hairline-webfont.woff2) format(\"woff2\"), url(../../../../../assets/fonts/montserrat-hairline-webfont.woff) format(\"woff\"), url(../../../../../assets/fonts/montserrat-hairline-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratultra_light;\n    src: url(../../../../../assets/fonts/montserrat-ultralight-webfont.woff2) format('woff2'), url(../../../../../assets/fonts/montserrat-ultralight-webfont.woff) format('woff'), url(../../../../../assets/fonts/montserrat-ultralight-webfont.ttf) format('truetype');\n    font-weight: 400;\n    font-style: normal\n}\n\n.font_newlight {\n    font-family: montserratlight!important\n}\n\n.font_newhairline {\n    font-family: montserrathairline\n}\n\n.font_newregular {\n    font-family: montserratregular\n}\n\n.font_newbold {\n    font-family: montserratbold\n}\n\n.font_semibold {\n    font-family: montserratsemibold\n}\nul,li{\n  list-style: none;\n}\na:hover, a:focus{\n  -webkit-transition: all 0.3s ease 0s !important;\n  transition: all 0.3s ease 0s !important;\n}\na:focus, img:focus, button:focus{\n  outline: none !important;\n}\n.ellipsis {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.btn-flat{\n  border-radius: 0px;\n}\n.btn-basic{\n  color: #e97252;\n  border: 1px solid #dae2e6;\n  font-size: 13px;\n}\n.btn-basic2{\n  color: #e97252;\n  border: 1px solid #dae2e6;\n  font-size: 11px;\n  background: #f6f8f9;\n  padding: 10px;\n}\n.btn-basic2 i{\n  color: #e97252;\n  font-size: 14px;\n  position: relative;\n  top: 3px;\n}\n.no-padding{\n  padding: 0px;\n}\n.navbar-fixed-top .nav-padding{\n  padding-left: 30px;\n  padding-right: 30px;\n}\n/* responsive tabs css start */\n\n.panel-heading {\n    padding: 0\n}\n.panel-heading a {\n    display: block;\n    padding: 20px 10px;\n}\n.panel-heading a.collapsed {\n    background: #fff\n}\n.panel-heading a {\n    background: #f7f7f7;\n    border-radius: 5px;\n}\n.panel-heading a:after {\n    content: '-'\n}\n.panel-heading a.collapsed:after {\n    content: '+'\n}\n.nav.nav-tabs li a,\n.nav.nav-tabs li.active > a:hover,\n.nav.nav-tabs li.active > a:active,\n.nav.nav-tabs li.active > a:focus {\n    border-bottom-width: 0px;\n    outline: none;\n}\n.nav.nav-tabs li a {\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n.tab-pane {\n    background: #fff;\n    padding: 10px;\n    border: 1px solid #ddd;\n    margin-top: -1px;\n}\n/* start: common css */\n.np{padding: 0px;}\n.clearfix {\n    clear: both;\n    float: left;\n    width: 100%;\n}\n.text-center{\n  text-align: center;\n}\n.section {\n    width: 100%;\n    float: left;\n}\na:hover, a:focus{text-decoration: none; color: #8e989f;}\n.font-italic{font-style: italic;}\n.text-grey{color: #8e989f;}\n.dis-block{display: block;}\n/* end: common css */\n\n#main {\n    height: 100%;\n    width: 100%;\n    float: left;\n}\n#main .container {\n    width: 100%;\n    padding: 0 30px;\n}\n\n/* Start: header section */\n#header {\n    height: 65px;\n}\n#header .logo {\n    padding-right: 40px;\n    margin-right: 0px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n#header .logo a img.standard-logo {\n    display: block;\n    max-width: 100%;\n}\n.logo {\n    /*float: left;*/\n    font-size: 32px;\n    line-height: 100%;\n    height: 35px;\n}\n#header .menu {\n    /*float: right;\n    width: 83%;*/\n    margin-top: 20px;\n}\n.navbar {\n    margin-top: 20px;\n    min-height: 35px;\n}\n.top-search{\n    /*float: left;\n    width: 90%;  */\n    border-right: 1px solid #dae2e6;\n    border-left: 1px solid #dae2e6;\n    padding-left: 30px;\n}\n.top-search .form-group {\n    padding-bottom: 0;\n    margin: 0;\n}\n.top-search input{\n    font-size: 14px;\n    color: #bec5c9;\n    font-family: robotoregular !important;\n    box-shadow: none;\n    border: none;\n    float: left;\n    width: 95%;\n}\n.top-search input.form-control:focus {\n    border-color: none;\n    outline: none;\n    box-shadow: none;\n    background: none;\n}\n.top-search input[type=text] {\n    font-size: 14px;\n    color: #bec5c9;\n    border: none;\n    background: none;\n    padding: 6px 12px;\n    margin-bottom: 0px;\n}\n.top-search input::-webkit-input-placeholder {\n    font-size: 14px !important;\n}\n.top-search span.icon {\n    float: left;\n    margin-top: 10px;\n}\n.top-search span.icon i{\n    font-size: 18px;\n    color: #bec5c9;\n}\n.login{\n  /*float: right;\n  width: 10%;*/\n}\n.login-text {\n    float: right;\n    color: #8e989f;\n    font-size: 14px;\n    padding-top: 5px;\n}\n.login .login-text span.icon i {\n    font-size: 18px;\n    color: #ee795a;\n    top: 0px;\n    position: relative;\n}\n.login a:hover.login-text {\n    text-decoration: none;\n    color: #8e989f;\n}\n.signup-text{\n    float: right;\n    color: #8e989f;\n    font-size: 14px;\n    padding-top: 5px;\n    margin-right: 15px;\n}\n.login .signup-text span.icon i {\n    font-size: 18px;\n    color: #ee795a;\n    top: 0px;\n    position: relative;\n}\n.login a:hover.signup-text, .login a:focus.signup-text, .login a:active.signup-text {\n    text-decoration: none;\n    color: #8e989f;\n}\n\n/* End: header section */\n\n/* start: tabs section */\n.main-tabs .nav>li>a {\n    padding: 8px 40px;\n    font-size: 13px;\n    color: #8e989f !important;\n    line-height: 20px;\n    border-right: 1px solid #e9eef0 !important;\n    border-radius: 0;\n    margin-right: 0px;\n    width: 185px;\n    text-align: center;\n}\n.main-tabs .nav-tabs>li.active>a, .main-tabs .nav-tabs>li.active>a:focus, .main-tabs .nav-tabs>li.active>a:hover {\n    color: #8e989f !important;\n    cursor: pointer;\n    background-color: #e9eef0 !important;\n    border: none;\n    border-bottom-color: transparent;\n}\n.main-tabs .nav>li>a:hover {\n    background-color: #e9eef0 !important;\n    color: #8e989f !important;\n}\n.main-tabs .nav-tabs {\n    border-bottom: 1px solid #e9eef0;\n    border-top: 1px solid #e9eef0;\n    background: none;\n}\n.main-tabs .tab-pane {\n    background: #fff;\n    padding: 10px 0;\n    border: none;\n    margin-top: 0px;\n    float: left;\n}\n.main-tabs h1{\n  font-size: 24px;\n  color: #8e989f;\n  font-family: 'robotoregular';\n}\n.main-tabs p{\n  font-size: 14px;\n  color: #8e989f;\n  font-family: 'robotoregular';\n}\n.main-tabs hr {\n    margin-top: 30px;\n    margin-bottom: 35px;\n    border: 0;\n    border-top: 1px solid #e9eef0 !important;\n}\n.btn-blue {\n    color: #fff !important;\n    background-color: #5cc9e6 !important;\n    border-color: #5cc9e6 !important;\n    border-radius: 0 !important;\n    padding: 7px 60px !important;\n    margin-top: 15px !IMPORTANT;\n    margin-right: 25px !important;\n    -webkit-transition: all 0.3s ease 0s;\n    transition: all 0.3s ease 0s;\n    text-transform: none !important;\n}\n.btn-blue:hover, .btn-blue:focus, .btn-blue:active {\n    color: #fff;\n    background-color: #57bdd8;\n    border-color: #57bdd8;\n    box-shadow: none;\n}\nhr {\n    margin-top: 30px;\n    margin-bottom: 30px;\n    border: 0;\n    border-top: 1px solid #e9eef0 !important;\n}\n/* end: tabs section */\n\n/* Start: sec featured */\n.featured-section{\n   float: left;\n   width: 100%;\n}\n.featured-section h2{\n  font-size: 22px;\n  color: #269fd8;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n.featured-section span{\n  color: #8e989f;\n  font-size: 14px;\n}\n.featured-section .featured-text-block {\n    line-height: 22px;\n}\n.featured-section .icon i.material-icons {\n    font-size: 48px;\n    color: #c2c9cd;\n}\n.featured-section .icon-list{\n    margin-right: 15px;\n    position: relative;\n}\n.featured-section .icon-list span.badge {\n    position: absolute;\n    bottom: 0;\n    right: 0px;\n    background: #f65a30;\n    color: #fff;\n    font-size: 10px;\n    font-family: robotobold;\n    box-shadow: 0px 1px 1px rgba(0,0,0,0.18);\n}\n.featured-section .icon-list.active .icon i.material-icons {\n    color: #8e989f;\n}\n.featured-section .icon-list.active .icon i.material-icons {\n    color: #8e989f;\n}\n.featured-section .icon-list .icon i.material-icons:hover {\n    color: #8e989f;\n}\n.featured-list{margin-top: 25px;}\n/* End: sec featured */\n\n/* start: footer */\n.footer-main{\n  float: left;\n  width: 100%;\n}\n.footer-top{\n  float: left;\n  width: 100%;\n  background: #e9eef0;\n  padding: 20px 10px 30px;\n}\n.footer-main .footer-top p{\n    font-size: 13px;\n    color: #8e989f;\n    line-height: 18px;\n    margin-top: 15px;\n}\n.footer-main .footer-top .footer-social-icons{\n    margin-top: 30px;\n}\n.footer-main .footer-top .footer-social-icons a img{\n    margin-right: 5px;\n}\n.footer-bottom{\n  float: left;\n  width: 100%;\n  margin: 25px 0px 15px;\n}\n.footer-bottom a{\n  color: #bbc1c5;\n  font-size: 12px;\n}\n.footer-bottom a:hover, .footer-bottom a:focus, .footer-bottom a:active{\n  text-decoration: none;\n  color: #8e989f;\n}\n.footer-bottom p.copyright{\n  font-size: 13px;\n  color: #bbc1c5;\n  text-align: right;\n}\n\n/* end: footer */\n\n/* Start: Modal Forms Materiliaze CSS */\n  .modal i.material-icons {\n      font-size: 18px;\n      color: #fff;\n  }\n  .modal button.close.btn-close {\n      position: absolute;\n      right: 15px;\n      top: 15px;\n      z-index: 9;\n      opacity: 0.7;\n       -webkit-transition: all 0.3s ease 0s !important;\n       transition: all 0.3s ease 0s !important;\n  }\n  .modal .close:focus, .modal .close:hover {\n      color: #000;\n      text-decoration: none;\n      cursor: pointer;\n      filter: alpha(opacity=50);\n      opacity: .9 !important;\n  }\n  .modal-open .modal {\n      overflow-x: hidden;\n  }\n  .modal{\n      font-family: montserratregular;\n  }\n  .modal .form-control {\n      height: 38px;\n      padding: 7px 0;\n      font-size: 14px;\n      line-height: 1.42857143;\n      font-family: montserratregular;\n      color: #62696d;\n  }\n  .modal .form-group label.control-label {\n      font-size: 14px;\n      line-height: 1.07142857;\n      color: #8e989f;\n      font-weight: 400;\n      margin: 16px 0 0 0;\n      font-family: montserratregular;\n  }\n  .modal .form-group.label-floati62696dng label.control-label,\n  .modal .form-group.label-placeholder label.control-label {\n      top: -7px;\n      font-size: 14px;\n      line-height: 18px;\n  }\n  .modal .form-group.label-floating:not(.is-empty) label.control-label {\n      top: -20px;\n      font-family: montserratregular;\n      font-size: 11px;\n      text-transform: uppercase;\n      color: #8e989f !important;\n  }\n  .modal .form-group.label-floating.is-focused label.control-label {\n      top: -20px;\n      font-size: 11px;\n      font-family: montserratregular;\n      color: #fb545b !important;\n  }\n  .modal .form-group.is-focused label,\n  .modal .form-group.is-focused label.control-label {\n      color: #8e989f;\n      text-transform: uppercase;\n  }\n  .modal .form-control,\n  .modal .form-group .form-control {\n    border: 0;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #D2D2D2);\n    background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #d7dbdd);\n    background-image: linear-gradient(#009688, #009688), linear-gradient(#d7dbdd, #d7dbdd);\n  }\n  .modal .form-group.is-focused .form-control {\n    outline: none;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#fb545b), to(#fb545b)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: -webkit-linear-gradient(#fb545b, #fb545b), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n    background-image: linear-gradient(#fb545b, #fb545b), linear-gradient(#D2D2D2, #D2D2D2);\n    background-size: 100% 2px, 100% 1px;\n    box-shadow: none;\n    -webkit-transition-duration: 0.3s;\n            transition-duration: 0.3s;\n  }\n  .modal .form-group {\n      padding-bottom: 7px;\n      margin: 12px 0 0 0;\n      clear: both;\n  }\n  .modal-backdrop {\n      background: rgba(0, 0, 0, 0.99) !important;\n  }\n\n/* End: Modal Forms Materiliaze CSS */\n\n/* end: product css*/\n\n/* custom material css start (sahil) */\n    .sahil-material .form-control {\n        height: 38px;\n        padding: 7px 0;\n        font-size: 14px;\n        line-height: 1.42857143;\n        font-family: montserratregular;\n        color: #62696d;\n    }\n    .sahil-material .form-group label.control-label {\n        font-size: 14px;\n        line-height: 1.07142857;\n        color: #8e989f;\n        font-weight: 400;\n        margin: 16px 0 0 0;\n        font-family: montserratregular;\n    }\n    .sahil-material .form-group label.control-label.seo-static-label{\n        text-transform: uppercase !important;\n        font-size: 11px;\n        color: #8e989f !important;\n    }\n    .sahil-material .form-group.label-floating label.control-label,\n    .sahil-material .form-group.label-placeholder label.control-label {\n        top: -7px;\n        font-size: 14px;\n        line-height: 18px;\n        color: #8e989f;\n    }\n    .sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\n        top: -20px;\n        font-family: montserratregular;\n        font-size: 11px;\n        text-transform: uppercase;\n        color: #8e989f !important;\n    }\n    .sahil-material .form-group.label-floating.is-focused label.control-label {\n        top: -20px;\n        font-size: 11px;\n        font-family: montserratregular;\n        color: #8e989f !important;\n    }\n    .sahil-material .form-group.is-focused label,\n    .sahil-material .form-group.is-focused label.control-label {\n        font-size: 11px;\n        font-family: montserratregular;\n        color: #8e989f !important;\n        text-transform: uppercase;\n    }\n    .sahil-material .form-control,\n    .sahil-material .form-group .form-control {\n        border: 0 !important;\n        background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n        background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #D2D2D2);\n        background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #d7dbdd);\n        background-image: linear-gradient(#009688, #009688), linear-gradient(#d7dbdd, #d7dbdd);\n        \n    }\n    \n    .sahil-material .form-group.is-focused .form-control {\n        outline: none;\n        background-image: -webkit-gradient(linear, left top, left bottom, from(#fb545b), to(#fb545b)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n        background-image: -webkit-linear-gradient(#fb545b, #fb545b), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n        background-image: linear-gradient(#fb545b, #fb545b), linear-gradient(#D2D2D2, #D2D2D2);\n        background-size: 100% 2px, 100% 1px;\n        box-shadow: none;\n        -webkit-transition-duration: 0.3s;\n                transition-duration: 0.3s;\n    }\n\n/* custom material css end (sahil) */\n\n\n/* Start: Modal SignUp */\n    #signUp.signUp .alert.alert-danger.custom-alert{ padding: 10px; background: #feddde !important;}\n    #signUp.signUp .alert.alert-danger.custom-alert p{position: relative;}\n    #signUp.signUp{\n      width: 100%;\n      float: left;\n      /*margin-top: -72px;*/\n    }\n\n    #signUp .signUp-content{\n      border-radius: 0px;\n      /*border: 1px solid #e9eef0;*/\n      float: left;\n      width: 100%;\n    }\n\n    #signUp .signUp-header {\n        padding: 20px 25px;\n        border-bottom: none;\n    }\n\n    #signUp .logo-section{\n        margin-bottom: 40px;\n    }\n\n    #signUp .logo-section span{\n        display: block;\n        font-size: 30px;\n        color: #fb545b;\n        font-family: montserratultra_light;\n        line-height: 36px;\n        margin-top: 10px;\n    }\n\n    #signUp .signUp-logo{\n        /*margin-bottom: 20px;*/\n    }\n\n    #signUp .signUp-body {\n        position: relative;\n        padding: 0px;\n        float: left;\n        width: 100%;\n        z-index: 9999;\n    }\n\n    #signUp .signUp-left{\n        width: 50%;\n        float: left;\n        padding: 20px 40px 20px 30px;\n        display: table;\n        height: 100vh;\n        /*margin-top: 72px;*/\n        background: #fff;\n    }\n\n    #signUp .signUp-left-inner {\n        display: table-cell;\n        vertical-align: middle;\n        float: none;\n    }\n\n    #signUp .signUp-right {\n        background: #fb545b;\n        float: left;\n        width: 50%;\n        height: 100vh;\n        padding: 30px;\n        display: table;\n        /*margin-top: 35px;*/\n    }\n\n    #signUp .signUp-right-inner {\n        display: table-cell;\n        vertical-align: middle;\n        float: none;\n    }\n\n    /*#signUp .img-margin{\n        margin: 40px 0px 90px;\n    }*/\n\n    #signUp .img-section {\n        float: left;\n        width: 100%;\n        margin: 50px 0px 85px;\n        /*margin-left: 5% !important;*/\n        position: relative;\n        min-height: 365px;\n    }\n\n    #signUp .img-width{\n        width: auto;\n        /*margin-left: 5% !important;*/\n        box-shadow: -9px -9px 12px rgba(0, 0, 0, 0.14);\n        /*position: relative;*/\n    }\n\n    .login-img1 {\n        position: absolute;\n        left: 30px;\n        top: 0;\n    }\n\n    .login-img2 {\n        position: absolute;\n        left: 233px;\n        top: 78px;\n        z-index: 9;\n    }\n\n    .login-img3 {\n        position: absolute;\n        left: 130px;\n        top: 180px;\n        z-index: 9;\n    }\n\n    #signUp .input-group {\n        width: 100%;\n        margin-top: 30px;\n        border-bottom: 1px solid #d7dbdd;\n    }\n\n    #signUp .input-field {\n        float: left !important;\n        /* width: 100% !important; */\n        border: none;\n        box-shadow: none;\n        color: #8e989f;\n        font-size: 14px;\n        font-family: montserratregular;\n        padding: 0;\n    }\n\n    #signUp input[type=\"email\"]::-webkit-input-placeholder,\n    #signUp input[type=\"password\"]::-webkit-input-placeholder,\n    #signUp input[type=\"text\"]::-webkit-input-placeholder {\n      color: #8e989f !important;\n    }\n\n    #signUp.signUp .monthly-traffic .form-control {\n        /*color: #fb545b;*/\n        font-size: 18px;\n    }\n\n    #signUp.signUp .contact-num .form-control {\n        /*color: #fb545b;*/\n        font-size: 18px;\n    }\n\n    #signUp.signUp .slide2 .form-group.is-focused label,\n    #signUp.signUp .slide2 .form-group.is-focused label.control-label {\n        color: #8e989f;\n        text-transform: uppercase;\n    }\n\n    #signUp .have-an-acc{\n        color: #62696d;\n        font-size: 12px;\n        font-family: montserratregular;\n        margin-bottom: 0px;\n        padding-top: 10px;\n    }\n\n    #signUp.signUp .slide2 .form-group.label-floating:not(.is-empty) label.control-label {\n        top: -22px;\n    }\n\n    #signUp.signUp .slide2 .form-group.label-floating.is-focused label.control-label {\n        top: -22px;\n    }\n\n    #signUp label.in-active {\n        /*background: #f7f8fa;*/\n        font-size: 14px;\n        position: absolute;\n        right: 0;\n        top: 0;\n        padding: 5px 0px 5px 0px;\n        color: #269fd8 !important;\n        margin-top: 6px;\n        font-family: montserratregular;\n        /*padding: 7px 0px;\n        font-size: 14px !important;\n        font-family: montserratregular;\n        color: #269fd8 !important;\n        float: left;\n        width: auto;\n        top: 0px;\n        position: relative;*/\n    }\n\n    /*#signUp .form-group.signup-companyUrl {\n        height: 38px;\n        margin-bottom: 14px !important;\n        border-bottom: 1px solid #d2d2d2;\n    }\n\n    #signUp .form-group.signup-companyUrl.is-focused:after {\n        content: \"\";\n        background: #fb545b;\n        position: absolute;\n        bottom: -1px;\n        width: 100%;\n        height: 2px;\n        left: 0px;\n    }\n\n    #signUp .form-group.signup-companyUrl.is-focused .form-control {\n        background-image: none;\n    }\n\n    #signUp .form-group.signup-companyUrl .form-control{\n        background: none;\n        float: left;\n        width: auto;\n        max-width: 31%;\n    }*/\n\n    #signUp .form-group .label-url {\n        font-size: 11px;\n        font-family: montserratregular;\n        color: #8e989f !important;\n        text-transform: uppercase;\n        float: left;\n        width: 100%;\n        top: -23px !important;\n    }\n\n    #signUp .signup-companyUrl span.small-text {\n        text-transform: none;\n    }\n\n    #signUp .signup-companyUrl input::-webkit-input-placeholder {\n        font-size: 14px !important;\n    }\n\n    #signUp .btn-signUp{\n        margin-bottom: 0px !important;\n        margin-top: 40px !important;\n    }\n\n    #signUp a.pswrd-show{\n        color: #fb545b;\n        text-transform: uppercase;\n        position: absolute;\n        right: 2px;\n        bottom: 18px;\n        font-size: 11px;\n        z-index: 9;\n    }\n\n    #signUp a.pswrd-show:hover{\n        color: #fa5282;\n    }\n\n    #signUp.signUp .val-success-msg {\n        float: left;\n        margin: 0;\n    }\n\n    #signUp.signUp span.small-text {\n        font-size: 10px;\n    }\n\n    /* Start: Toggle switch (Materialize) */\n        #signUp .form-group.toggle-switch {\n            margin-top: 20px;\n        }\n        .toggle-switch .togglebutton label input[type=checkbox]:checked + .toggle {\n            background-color: rgba(251, 84, 91, 0.5);\n        }\n        .toggle-switch .togglebutton label input[type=checkbox]:checked + .toggle:after {\n            background-color: #fb545b;\n        }\n        .toggle-switch.form-group .togglebutton label{\n            color: #62696d;\n            font-size: 14px;\n        }\n\n    /* End: Toggle switch (Materialize) */\n\n    /* Start: Toggle switch (custom) */\n        .toggle-switch.form-group label {\n            color: #62696d;\n            font-size: 14px;\n        }\n\n        .toggle-switch label {\n            cursor: pointer;\n            margin-bottom: 0px;\n        }\n\n        .toggle-switch label input[type=checkbox] {\n            opacity: 0;\n            width: 0;\n            height: 0;\n        }\n\n        .toggle-switch label input[type=checkbox][disabled]+.lever:after,\n        .toggle-switch label input[type=checkbox][disabled]:checked+.lever:after {\n            background-color: #00c494;\n        }\n\n        .toggle-switch label input[type=checkbox]:checked+.lever {\n            background: #ceeffe;\n        }\n\n        .toggle-switch label .lever {\n            content: \"\";\n            display: inline-block;\n            position: relative;\n            width: 22px;\n            height: 11px;\n            /* border: 1px solid #dae2e6; */\n            border-radius: 25px;\n            margin-right: 10px;\n            -webkit-transition: background 0.3s ease;\n            transition: background 0.3s ease;\n            vertical-align: middle;\n            font-size: 9px;\n            padding: 3px 4px;\n            font-family: \"montserratbold\";\n            background-color: #e4e4e4;\n        }\n\n        .toggle-switch label .lever:after {\n            content: \"\";\n            position: absolute;\n            display: inline-block;\n            width: 17px;\n            height: 17px;\n            background-color: #bec5c9;\n            border-radius: 8px;\n            left: -9px;\n            top: -3px;\n            color: #fff;\n            -webkit-transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease;\n            transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease;\n            padding: 3px 5px;\n            box-shadow: 2px 1px 2px 0px rgba(0, 0, 0, 0.3);\n        }\n\n        .toggle-switch label input[type=checkbox]:checked+.lever:after {\n            content: \"\";\n            background-color: #1483b7;\n            left: 15px;\n            height: 17px;\n            width: 17px;\n            box-shadow: -2px 1px 2px 0px rgba(0, 0, 0, 0.3);\n        }\n\n    /* End: Toggle switch (custom) */\n\n    /* Start: radio (Time slot) */\n        .time-slot .form-group .radio label,\n        .time-slot .form-group label {\n            font-size: 14px;\n            line-height: 1.42857143;\n            color: #8e989f;\n            font-weight: 400;\n        }\n\n        .time-slot .radio input[type=radio]:checked ~ .circle {\n            border-color: #fb545b;\n            background-color: #fb545b;\n        }\n\n        .time-slot .radio input[type=radio]:checked ~ .check {\n            background-color: #fb545b;\n        }\n\n        .time-slot .radio input[type=radio]:checked + span + span + div {\n            color: #fb545b;\n        }\n\n        .time-slot .radio-inline {\n            padding-left: 0px;\n            width: 35px;\n            float: left;\n            margin-right: 1px;\n        }\n\n        .time-slot .radio label .circle {\n            border: none;\n            height: 8px;\n            width: 35px;\n            border-radius: 0;\n            background: #d7dbdd;\n        }\n\n        .time-slot .radio label .check {\n            height: 8px;\n            width: 35px;\n            border-radius: 0;\n            background-color: #fb545b;\n        }\n\n        .time-slot .radio label span {\n            display: block;\n            position: absolute;\n            left: 0px;\n            top: 0px;\n        }\n\n        #signUp.modal .time-slot.form-group label.control-label.time-slot-text{\n            color: #62696d;\n            font-size: 14px;\n            margin-bottom: 10px;\n            margin-top: 10px;\n        }\n\n        .time-slot.form-group .radio label, .time-slot.form-group label {\n            font-size: 10px;\n            line-height: 1.42857143;\n            color: #8e989f;\n            font-weight: 400;\n            padding-left: 0px;\n            width: 100%;\n            float: left;\n        }\n\n        .time-slot.form-group .radio label div {\n            position: relative;\n            top: -15px;\n        }\n\n        .time-slot.form-group .radio{\n            margin-top: 30px;\n        }\n\n        .time-slot .radio-inline+.radio-inline {\n            margin-right: 1px;\n            float: left;\n            margin-left: 0px;\n        }\n\n        .time-slot .radio input[type=radio], .time-slot .radio-inline input[type=radio] {\n            position: absolute;\n            margin-top: 4px\\9;\n            margin-left: 35px;\n            top: 2px;\n        }\n\n        .time-slot .time-slot-bottom{\n            font-size: 12px;\n            color: #8e989f;\n            text-align: center;\n            width: 82%;\n            padding-left: 5px;\n        }\n\n        .time-slot .time-slot-bottom .time-am{\n            font-size: 10px;\n            color: #fb545b;\n        }\n\n        .time-slot .radio label, .checkbox label {\n            min-height: 14px;\n        }\n\n        #signUp .form-group.time-slot {\n            /* margin-top: 20px; */\n            margin-bottom: 20px;\n            border-bottom: 1px solid #d7dbdd;\n            padding-bottom: 25px;\n        }\n\n        .time-slot .radio label .check:after {\n            display: block;\n            position: absolute;\n            content: \"\";\n            background-color: rgba(0,0,0, 0.87);\n            left: -3px;\n            top: -18px;\n            height: 42px;\n            width: 42px;\n            border-radius: 100%;\n            z-index: 1;\n            opacity: 0;\n            margin: 0;\n            -webkit-transform: scale3d(1.5, 1.5, 1);\n            transform: scale3d(1.5, 1.5, 1);\n        }\n\n    /* End: radio (Time slot) */\n\n    .grey-text{\n        color: #8e989f;\n    }\n\n    .text-red{\n        color: #fb545b;\n    }\n\n    a.text-red:hover , a.text-red:focus {\n        color: #fa5282  ;\n    }\n\n    .btn-red {\n        color: #fff !important;\n        background-color: #fb545b !important;\n        border-color: #fb545b !important;\n        border-radius: 0 !important;\n        font-size: 14px !important;\n        padding: 7px 70px !important;\n        margin-top: 25px !important;\n        -webkit-transition: all 0.3s ease 0s;\n        transition: all 0.3s ease 0s;\n        margin-right: 0 !important;\n        font-family: montserratregular;\n        font-weight: normal;\n        text-transform: uppercase !important;\n    }\n\n    .btn-red:hover, .btn-red:focus, .btn-red:active {\n        color: #fff;\n        background-color: #fb545b;\n        border-color: #fb545b;\n        box-shadow: none;\n    }\n\n    /*#signUp .togglebutton {\n        border-bottom: 1px solid #d7dbdd;\n        height: 34px;\n    }*/\n\n    #signUp .skip-step{\n        color: #62696d;\n        font-size: 12px;\n        font-family: montserratregular;\n        margin-bottom: 0px;\n        padding-top: 5px;\n    }\n\n    #signUp.signUp .form-group label.control-label {\n        font-size: 14px;\n        line-height: 1.07142857;\n        color: #8e989f;\n        font-weight: 400;\n        margin: 16px 0 0 0;\n        font-family: montserratregular;\n    }\n\n    #signUp.signUp button.close.btn-close {\n        position: absolute;\n        right: 15px;\n        top: 15px;\n        z-index: 9;\n        opacity: 0.7;\n        -webkit-transition: all 0.3s ease 0s !important;\n        transition: all 0.3s ease 0s !important;\n    }\n\n    #signUp.signUp button.close.btn-close:focus, #signUp.signUp button.close.btn-close:hover {\n        color: #000;\n        text-decoration: none;\n        cursor: pointer;\n        filter: alpha(opacity=50);\n        opacity: .9 !important;\n    }\n\n    #signUp.signUp button.close.btn-close i.material-icons {\n        font-size: 18px;\n        color: #fff;\n    }\n\n    .slideimg2{display: none;}\n    /*.slide2-content{display: none;}*/\n\n    /* Start: login-testimonial */\n\n        .login-testimonial {\n            float: left;\n            width: 100%;\n            padding: 25px 25px 0px;\n        }\n\n        .testimonial-block {\n            background: rgba(255,255,255, 0.3);\n            border-radius: 50%;\n            width: 76px;\n            height: 76px;\n            float: left;\n            position: relative;\n        }\n\n        .testimonial-block span{\n            position: absolute;\n            top: -15px;\n            left: 18px;\n            font-size: 120px;\n            color: #fff;\n            font-family: montserratlight;\n        }\n\n        .testimonial-content {\n            float: left;\n            width: 82%;\n            margin-left: 20px;\n            margin-top: 10px;\n        }\n\n        .testi-desc{\n            float: left;\n            width: 100%;\n            font-size: 24px;\n            color: #fff;\n            line-height: 26px;\n            font-family: montserratlight;\n        }\n\n        .testi-client{\n            font-size: 16px;\n            color: rgba(255,255,255,0.8);\n            line-height: 26px;\n            font-family: montserratregular;\n            font-style: italic;\n            float: left;\n            width: 100%;\n            padding-top: 15px;\n        }\n\n        .video-wrapper{\n            position: relative;\n            float: left;\n            width: 100%;\n        }\n\n        iframe {\n            position: absolute;\n            top: 70px;\n            left: 98px;\n            right: 0;\n            width: 68%;\n        }\n\n    /* End: login-testimonial */\n\n    #signUp.signUp .alert.alert-danger {\n        background: none !important;\n        position: relative;\n        width: 100%;\n    }\n\n    #signUp.signUp .alert.alert-danger p{\n        position: absolute;\n        width: 100%;\n    }\n\n    #signUp.signUp .alert.alert-danger span.mat-icon{\n        float: left;\n        width: auto;\n    }\n\n    #signUp.signUp .alert.alert-danger span.mat-icon i.material-icons {\n        font-size: 12px;\n        margin-right: 5px;\n        margin-top: 1px;\n        color: #fb545b;\n    }\n\n    #signUp.signUp .sahil-material .form-group.label-floating:not(.is-empty) label.control-label .small-text {\n        color: #8e989f;\n        text-transform: none;\n    }\n\n    #signUp.signUp .sahil-material .form-group.label-floating.is-focused label.control-label .small-text{\n        color: #8e989f;\n        text-transform: none;\n    }\n\n    #signUp.signUp .sahil-material .form-group.is-focused label.in-active{\n        font-size: 14px !important;\n        text-transform: none;\n        /*margin-top: 3px;*/\n        /*margin-left: 5px;\n        position: relative;\n        top: 2px;*/\n    }\n\n    #signUp.signUp .form-group:first-child{\n        margin-top: 12px;\n    }\n\n    #signUp.signUp .form-group{\n        padding-bottom: 7px;\n        margin: 23px 0 0;\n        clear: both;\n    }\n\n    /* Start: loading dots */\n\n        .loading:after {\n            content: ' .';\n            -webkit-animation: dots 1s steps(5, end) infinite;\n                    animation: dots 1s steps(5, end) infinite;\n            font-size: 18px;\n            line-height: 1px;\n            position: relative;\n            left: -3px;\n        }\n\n        @-webkit-keyframes dots {\n            0%, 20% {\n                color: rgba(0,0,0,0);\n                text-shadow: .25em 0 0 rgba(0,0,0,0),\n                                .5em 0 0 rgba(0,0,0,0);\n            }\n\n            40% {\n                color: white;\n                text-shadow: .25em 0 0 rgba(0,0,0,0),\n                             .5em 0 0 rgba(0,0,0,0);\n            }\n\n            60% {\n                text-shadow: .25em 0 0 white,\n                             .5em 0 0 rgba(0,0,0,0);\n            }\n            80%, 100% {\n                text-shadow: .25em 0 0 white,\n                             .5em 0 0 white;\n            }\n\n        }\n\n        @keyframes dots {\n            0%, 20% {\n                color: rgba(0,0,0,0);\n                text-shadow: .25em 0 0 rgba(0,0,0,0),\n                                .5em 0 0 rgba(0,0,0,0);\n            }\n\n            40% {\n                color: white;\n                text-shadow: .25em 0 0 rgba(0,0,0,0),\n                             .5em 0 0 rgba(0,0,0,0);\n            }\n\n            60% {\n                text-shadow: .25em 0 0 white,\n                             .5em 0 0 rgba(0,0,0,0);\n            }\n            80%, 100% {\n                text-shadow: .25em 0 0 white,\n                             .5em 0 0 white;\n            }\n\n        }\n\n    /* End: loading dots */\n\n/* End: Modal SignUp */\n\n/* Start: Responsive - signUp Modal */\n\n  @media (max-width: 767px){\n      #signUp.signUp{\n          padding-left: 0 !important;\n          overflow-y: auto;\n          padding-bottom: 20px;\n          margin-top: -50px;\n      }\n\n      #signUp .signUp-right{\n          display: none;\n      }\n\n      #signUp.signUp .signUp-dialog {\n          width: auto;\n      }\n\n      #signUp.signUp .signUp-left{\n          width: 100%;\n          padding: 40px 20px 60px;\n      }\n\n      #signUp.signUp button.close.btn-close i.material-icons{\n          color: #8e989f;\n      }\n\n      #signUp.signUp .signUp-logo{\n          margin-top: 10px;\n      }\n\n      #signUp label.in-active {\n          padding: 5px;\n          font-size: 12px;\n          margin-top: 9px;\n      }\n\n      #signUp.signUp .form-group.is-focused label.in-active {\n          font-size: 12px !important;\n      }\n\n      #signUp.signUp .sahil-material .form-group.is-focused label.in-active{\n        font-size: 12px !important;\n      }\n\n  }\n\n  @media screen and (min-width: 768px) and (max-width: 768px) {\n        .testimonial-block{\n            float: none;\n            margin: 0 auto;\n        }\n\n        .testimonial-content{\n            float: left;\n            width: 100%;\n            margin-left: 0;\n        }\n\n        .testi-desc{\n            text-align: center;\n        }\n\n        .testi-client{\n            text-align: center;\n        }\n\n        /*.video-wrapper iframe{\n            position: absolute;\n            top: 60px;\n            left: 50px;\n            right: 0;\n            width: 215px;\n            height: 120px;\n        }*/\n\n        .login-testimonial {\n            padding: 70px 25px;\n        }\n\n        #signUp .signUp-right {\n            padding: 0px;\n        }\n\n        .testi-desc{\n            font-size: 18px;\n        }\n\n        .testi-client {\n            font-size: 13px;\n        }\n\n        #signUp .img-width {\n            width: 54%;\n        }\n\n        .login-img2 {\n            left: 145px;\n            top: 45px;\n        }\n\n        .login-img3 {\n            left: 85px;\n            top: 105px;\n        }\n\n        #signUp .img-section {\n          margin: 55px 0px 0px;\n          min-height: 420px;\n        }\n\n    }\n\n    @media screen and (min-width: 1024px) and (max-width: 1024px) {\n        .testimonial-block{\n            float: none;\n            margin: 0 auto;\n        }\n\n        .testimonial-content {\n            float: left;\n            width: 100%;\n            margin-left: 0;\n        }\n\n        .testi-desc{\n            text-align: center;\n        }\n\n        .testi-client{\n            text-align: center;\n        }\n\n        /*iframe.iframe-1024{\n            position: absolute;\n            top: 60px;\n            left: 69px;\n            right: 0;\n            width: 305px;\n            height: 177px;\n        }*/\n\n        #signUp .img-width{\n            width: 55%;\n        }\n\n        .login-img2{\n            left: 165px;\n            top: 52px;\n        }\n\n        .login-img3{\n            left: 100px;\n            top: 122px;\n        }\n\n        #signUp .img-section {\n            min-height: 253px;\n            margin: 50px 0px 120px;\n        }\n\n    }\n\n    @media screen and (min-width: 1024px) and (max-width: 1279px) {\n        #signUp .img-width{\n            width: 55%;\n        }\n\n        .login-img2{\n            left: 165px;\n            top: 52px;\n        }\n\n        .login-img3{\n            left: 100px;\n            top: 122px;\n        }\n\n        #signUp .img-section {\n            min-height: 253px;\n        }\n\n        .testimonial-block{\n            float: none;\n            margin: 0 auto;\n        }\n\n        .testi-desc {\n            text-align: center;\n        }\n\n        .testi-client{\n            text-align: center;\n        }\n\n    }\n\n    @media screen and (min-width: 1280px) and (max-width: 1280px) {\n        .testimonial-block{\n            float: none;\n            margin: 0 auto;\n        }\n\n        .testimonial-content {\n            float: left;\n            width: 100%;\n            margin-left: 0;\n        }\n\n        .testi-desc{\n            text-align: center;\n        }\n\n        .testi-client{\n            text-align: center;\n        }\n\n        /*iframe{\n            position: absolute;\n            top: 65px;\n            left: 92px;\n            right: 0;\n            width: 380px;\n            height: 214px;\n        }*/\n\n        #signUp .img-width{\n            width: 54%;\n        }\n\n\n        #signUp .img-width{\n            width: 54%;\n        }\n\n        #signUp .img-section{\n            margin: 30px 0px 95px;\n            min-height: 325px;\n        }\n\n        .login-img2{\n            left: 200px;\n            top: 67px;\n        }\n\n        .login-img3{\n            left: 130px;\n            top: 155px;\n        }\n\n        .login-testimonial{\n            padding: 0 25px;\n        }\n\n    }\n\n    @media screen and (min-width: 1920px) and (max-width: 1920px) {\n        /*iframe{\n            position: absolute;\n            top: 75px;\n            left: 140px;\n            right: 0;\n            width: 610px;\n            height: 347px;\n        }*/\n\n        #signUp .img-section{\n            width: 85%;\n            margin-left: 18%;\n        }\n\n    }\n\n/* End: Responsive - signUp Modal */\n\n@media (max-width: 1900px) {\n    #signUp .form-group .control-label.label-url,\n    .modal .form-group.label-floating.is-focused label.control-label,\n    .modal .form-group.label-floating:not(.is-empty) label.control-label,\n    .my-profile .form-group.favicon-upload label.control-label,\n    .my-profile .form-group.time-zone label.control-label,\n    .sahil-material .form-group.label-floating.is-focused label.control-label,\n    .sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\n        font-size: 10px!important\n    }\n}\n\n.btn-red {\n    color: #fff;\n    background-color: #fb545b;\n    border-color: #fb545b;\n    border-radius: 0;\n    font-size: 14px;\n    padding: 7px 70px;\n    margin-top: 25px;\n    -webkit-transition: all .3s ease 0s;\n    transition: all .3s ease 0s;\n    margin-right: 0;\n    font-weight: 400;\n    text-transform: uppercase;\n    font-family: montserratregular;\n}\n.alert.alert-danger {\n    background: 0 0!important;\n    border: none;\n    position: relative;\n    top: -12px;\n    left: 0;\n    padding: 0;\n    color: #fb545b!important;\n    font-size: 11px;\n    margin: 0;\n    float: left;\n    width: 100%;\n    text-align: left\n}\n.alert.alert-danger p {\n    position: absolute;\n    width: 100%;\n    font-family: montserratregular;\n}\n.alert.alert-dange p span.mat-icon {\n    float: left;\n    width: auto\n}\n.alert.alert-danger p span.mat-icon i.material-icons {\n    float: left;\n    font-size: 12px!important;\n    margin-right: 5px;\n    margin-top: 1px;\n    color: #fb545b!important\n}\n.alert.alert-danger.custom-alert {\n    padding: 10px;\n    margin-top: 10px;\n    border-radius: 0;\n    background: #feddde!important\n}\n.alert.alert-danger.custom-alert p {\n    position: relative\n}\n.text-red {\n    color: #fb545b;\n}\na.text-red:focus,\na.text-red:hover {\n    color: #fa5282\n}\na.text-red {\n    cursor: pointer;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ },

/***/ 758:
/***/ function(module, exports) {

module.exports = "@font-face {\n    font-family: montserratregular;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../assets/fonts/montserrat-regular-webfont.eot) format(\"embedded-opentype\"), url(../assets/fonts/montserrat-regular-webfont.woff2) format(\"woff2\"), url(../assets/fonts/montserrat-regular-webfont.woff) format(\"woff\"), url(../assets/fonts/montserrat-regular-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratbold;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../assets/fonts/montserrat-bold-webfont.eot) format(\"embedded-opentype\"), url(../assets/fonts/montserrat-bold-webfont.woff2) format(\"woff2\"), url(../assets/fonts/montserrat-bold-webfont.woff) format(\"woff\"), url(../assets/fonts/montserrat-bold-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratsemibold;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../assets/fonts/montserrat-semibold-webfont.eot?#iefix) format(\"embedded-opentype\"), url(../assets/fonts/montserrat-semibold-webfont.woff2) format(\"woff2\"), url(../assets/fonts/montserrat-semibold-webfont.woff) format(\"woff\"), url(../assets/fonts/montserrat-semibold-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: montserratlight;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../assets/fonts/montserrat-light-webfont.eot) format(\"embedded-opentype\"), url(../assets/fonts/montserrat-light-webfont.woff2) format(\"woff2\"), url(../assets/fonts/montserrat-light-webfont.woff) format(\"woff\"), url(../assets/fonts/montserrat-light-webfont.ttf) format(\"truetype\")\n}\n\n@font-face {\n    font-family: 'Material Icons';\n    font-style: normal;\n    font-weight: 400;\n    src: url(MaterialIcons-Regular.eot);\n    src: local('Material Icons'), local('materialIcons-Regular'), url(../assets/fonts/materialIcons-Regular.woff2) format('woff2'), url(../fonts/materialIcons-Regular.woff) format('woff'), url(../fonts/materialIcons-Regular.ttf) format('truetype')\n}\n\n.material-icons {\n    font-family: 'Material Icons';\n    font-weight: 400;\n    font-style: normal;\n    font-size: 24px;\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n    -webkit-font-smoothing: antialiased;\n    text-rendering: optimizeLegibility;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-feature-settings: 'liga';\n            font-feature-settings: 'liga'\n}\n\n.ellipsis {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\na:focus,\na:hover {\n    text-decoration: none;\n    color: #8e989f\n}\n\nbody {\n    font-family: montserratregular;\n}\n\n\n/* Sweep To Right */\n\n.hvr-sweep-to-right {\n    display: inline-block;\n    vertical-align: middle;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -moz-osx-font-smoothing: grayscale;\n    position: relative;\n    -webkit-transition-property: color;\n    transition-property: color;\n    -webkit-transition-duration: 0.3s;\n    transition-duration: 0.3s;\n}\n\n.hvr-sweep-to-right:before {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #2098d1;\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n    -webkit-transform-origin: 0 50%;\n    transform-origin: 0 50%;\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transition-duration: 0.3s;\n    transition-duration: 0.3s;\n    -webkit-transition-timing-function: ease-out;\n    transition-timing-function: ease-out;\n}\n\n.hvr-sweep-to-right:hover,\n.hvr-sweep-to-right:focus,\n.hvr-sweep-to-right:active {\n    color: white;\n}\n\n.hvr-sweep-to-right:hover:before,\n.hvr-sweep-to-right:focus:before,\n.hvr-sweep-to-right:active:before {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n}\n\n\n/* Underline From Left */\n\n.hvr-underline-from-left {\n    display: inline-block;\n    vertical-align: middle;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -moz-osx-font-smoothing: grayscale;\n    position: relative;\n    overflow: hidden;\n}\n\n.hvr-underline-from-left:before {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    left: 0;\n    right: 100%;\n    bottom: 0;\n    background: #2098d1;\n    height: 4px;\n    -webkit-transition-property: right;\n    transition-property: right;\n    -webkit-transition-duration: 0.3s;\n    transition-duration: 0.3s;\n    -webkit-transition-timing-function: ease-out;\n    transition-timing-function: ease-out;\n}\n\n.hvr-underline-from-left:hover:before,\n.hvr-underline-from-left:focus:before,\n.hvr-underline-from-left:active:before {\n    right: 0;\n}\n\n\n/* Sweep To Left */\n\n.hvr-sweep-to-left {\n    display: inline-block;\n    vertical-align: middle;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -moz-osx-font-smoothing: grayscale;\n    position: relative;\n    -webkit-transition-property: color;\n    transition-property: color;\n    -webkit-transition-duration: 0.3s;\n    transition-duration: 0.3s;\n}\n\n.hvr-sweep-to-left:before {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #2098d1;\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transition-property: transform;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transition-duration: 0.3s;\n    transition-duration: 0.3s;\n    -webkit-transition-timing-function: ease-out;\n    transition-timing-function: ease-out;\n}\n\n.hvr-sweep-to-left:hover,\n.hvr-sweep-to-left:focus,\n.hvr-sweep-to-left:active {\n    color: white;\n}\n\n.hvr-sweep-to-left:hover:before,\n.hvr-sweep-to-left:focus:before,\n.hvr-sweep-to-left:active:before {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n}\n\n\n/* header css */\n\n.name-dropdown-wrapper.btn-group {\n    position: relative;\n    margin: 0;\n    float: left;\n    width: 109px;\n}\n\n.navbar-rightside button.btn.btn-default.dropdown-toggle {\n    margin-top: 7px\n}\n\n.navbar-rightside .name-dropdown-wrapper .dropdown-menu {\n    top: 33px;\n    position: absolute\n}\n\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n    padding: 0;\n    font-size: 13px;\n    text-transform: none;\n    color: #8e989f;\n    font-family: montserratlight;\n    float: left;\n    width: 100%;\n    border: none;\n    background: 0 0;\n    box-shadow: none;\n    margin-top: 8px;\n}\n\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle i.material-icons {\n    font-size: 18px;\n    color: #fb545b;\n    float: left\n}\n\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle span.name-title {\n    float: left;\n    width: 82%;\n    min-width: 60px;\n    text-align: left;\n    text-transform: capitalize;\n    -webkit-transition: all .3s ease 0s;\n    transition: all .3s ease 0s\n}\n\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle span.name-title:hover {\n    color: #fb545b\n}\n\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle:focus,\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle:hover {\n    background: 0 0!important;\n    box-shadow: none!important;\n    border: 0!important\n}\n\n.name-dropdown-wrapper .dropdown-menu {\n    padding: 10px 0;\n    z-index: 1;\n    top: 9px;\n    left: -78px;\n    max-width: 180px;\n    font-size: 12px;\n    background: #62696d;\n    position: relative;\n    border-radius: 4px!important;\n    border: none;\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .24);\n    display: none\n}\n\n.name-dropdown-wrapper:hover .dropdown-menu {\n    display: block\n}\n\n.name-dropdown-wrapper .dropdown-menu:before {\n    position: absolute;\n    top: -9px;\n    left: 76px;\n    display: inline-block;\n    border-right: 10px solid transparent;\n    border-bottom: 12px solid #62696d;\n    border-left: 10px solid transparent;\n    border-bottom-color: #62696d;\n    content: '';\n}\n\n.name-dropdown-wrapper .dropdown-menu>.name-list {\n    float: left;\n    width: 100%\n}\n\n.name-dropdown-wrapper .dropdown-menu>.name-list li>a:focus i.material-icons,\n.name-dropdown-wrapper .dropdown-menu>.name-list li>a:hover i.material-icons {\n    color: #fff\n}\n\n.name-dropdown-wrapper .dropdown-menu>.name-list li>a {\n    color: #fff;\n    padding: 5px 13px!important;\n    text-transform: capitalize;\n    font-family: montserratregular;\n    float: left;\n    width: 100%;\n    font-size: 12px!important\n}\n\n.name-dropdown-wrapper .dropdown-menu>.name-list li>a span.name-list-icon {\n    float: left;\n    width: auto;\n    margin-right: 10px\n}\n\n.name-dropdown-wrapper .dropdown-menu>.name-list li>a i.material-icons {\n    font-size: 12px;\n    color: #fff;\n    padding: 5px 0 0\n}\n\n.name-dropdown-wrapper .dropdown-menu>.name-list li>a span.name-list-title {\n    float: left;\n    font-size: 12px;\n    color: #fff;\n    line-height: 22px\n}\n\n.navbar .name-dropdown-wrapper .dropdown-menu .name-list li>a:hover,\n.navbar.navbar-default .name-dropdown-wrapper .dropdown-menu .name-list li>a:hover {\n    background: #71787b;\n    color: #fff\n}\n\n.navbar .dropdown-menu .name-list li>a:focus,\n.navbar.navbar-default .name-dropdown-wrapper .dropdown-menu .name-list li>a:focus {\n    color: #fff;\n    background-color: transparent\n}\n\n.name-dropdown-wrapper .dropdown-menu>li>a.hvr-sweep-to-right::before {\n    background: #fa8f93!important\n}\n\n.navbar .dropdown-menu .company-list .active>a,\n.navbar .dropdown-menu .company-list li>a:focus,\n.navbar .dropdown-menu .company-list li>a:hover,\n.navbar.navbar-default .dropdown-menu .company-list .active>a,\n.navbar.navbar-default .dropdown-menu .company-list li>a:focus,\n.navbar.navbar-default .dropdown-menu .company-list li>a:hover {\n    color: #fff;\n    background-color: transparent\n}\n\n.name-dropdown-border {\n    float: left;\n    width: 87%;\n    margin: 5px 12px;\n    border-top: 1px solid #7a8185!important\n}\n\n.name-dropdown-wrapper .dropdown-menu .company-list {\n    float: left;\n    width: 100%\n}\n\n#new-header .navbar-right .name-dropdown-wrapper .dropdown-menu .company-list .slimScrollDiv {\n    height: 110px !important;\n}\n.name-dropdown-wrapper .dropdown-menu .company-list .slimScrollDiv {\n    height: 110px !important;\n}\n#new-header .name-dropdown-wrapper .dropdown-menu .company-list .slimscroll {\n    float: left;\n    width: 100%!important;\n    height: 110px!important\n}\n.name-dropdown-wrapper .dropdown-menu .company-list .slimscroll {\n    float: left;\n    width: 100%!important;\n    height: 110px!important\n}\n.name-dropdown-wrapper .dropdown-menu .company-list li>a {\n    color: #fff;\n    padding: 5px 13px!important;\n    text-transform: capitalize;\n    font-family: montserratregular;\n    float: left;\n    width: 100%;\n    font-size: 12px!important\n}\n\n.name-dropdown-wrapper .dropdown-menu .company-list li {\n    line-height: 24px\n}\n\n.name-dropdown-wrapper .dropdown-menu .company-list li span.company-list-title {\n    float: left;\n    width: 90%;\n    padding-right: 5px\n}\n\n.name-dropdown-wrapper .dropdown-menu .company-list li span.company-selected {\n    float: right\n}\n\n.name-dropdown-wrapper .dropdown-menu .company-list li a span.company-selected i.material-icons,\n.name-dropdown-wrapper .dropdown-menu .company-list li.active a span.company-selected i.material-icons {\n    font-size: 12px;\n    position: relative;\n    top: 2px\n}\n\n.name-dropdown-wrapper .dropdown-menu div>li>a.hvr-sweep-to-right::before {\n    background: #71787b\n}\n\n.name-dd-minh {\n    height: 37px\n}\n\n.help-dropdown-wrapper.btn-group {\n    position: relative;\n    margin: 0;\n    float: right;\n    width: 20%\n}\n\n.help-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n    padding: 15px 12px 12px;\n    font-size: 12px;\n    text-transform: none;\n    color: #62696d;\n    font-family: montserratlight;\n    border: none\n}\n\n.help-dropdown-wrapper button.btn.btn-default.dropdown-toggle i.material-icons {\n    font-size: 18px;\n    color: #bec5c9;\n    position: absolute;\n    top: -1px;\n    right: 3px\n}\n\n.help-dropdown-wrapper button.btn.btn-default.dropdown-toggle:focus,\n.help-dropdown-wrapper button.btn.btn-default.dropdown-toggle:hover {\n    background: 0 0!important;\n    box-shadow: none!important;\n    border: 0!important\n}\n\n.help-dropdown-wrapper .dropdown-menu {\n    padding: 10px 0;\n    z-index: 1;\n    top: 33px;\n    right: -13px;\n    min-width: 140px;\n    font-size: 12px;\n    background: #f87b80;\n    border-radius: 4px!important;\n    border: none;\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .24);\n    display: none\n}\n\n.help-dropdown-wrapper:hover .dropdown-menu {\n    display: block\n}\n\n.help-dropdown-wrapper .dropdown-menu:before {\n    position: absolute;\n    top: -12px;\n    right: 17px;\n    display: inline-block;\n    border-right: 8px solid transparent;\n    border-bottom: 12px solid #f87b80;\n    border-left: 8px solid transparent;\n    border-bottom-color: #f87b80;\n    content: ''\n}\n\n.help-dropdown-wrapper .dropdown-menu>li>a:focus,\n.help-dropdown-wrapper .dropdown-menu>li>a:hover {\n    color: #fff;\n    background: 0 0\n}\n\n.navbar .help-dropdown-wrapper .dropdown-menu li>a:hover,\n.navbar.navbar-default .help-dropdown-wrapper .dropdown-menu li>a:hover {\n    background: #f9888d;\n    color: #fff\n}\n\n.navbar .dropdown-menu .help-dropdown-wrapper li>a:focus,\n.navbar.navbar-default .help-dropdown-wrapper .dropdown-menu li>a:focus {\n    color: #fff;\n    background-color: transparent\n}\n\n.help-dropdown-wrapper .dropdown-menu>li>a:focus i.material-icons,\n.help-dropdown-wrapper .dropdown-menu>li>a:hover i.material-icons {\n    color: #fff\n}\n\n.help-dropdown-wrapper .dropdown-menu>li>a {\n    color: #fff;\n    padding: 3px 13px!important;\n    text-transform: capitalize;\n    font-family: montserratregular;\n    font-size: 13px!important;\n    float: left;\n    width: 100%\n}\n\n.help-dropdown-wrapper .dropdown-menu>li>a span.help-list-icon {\n    float: left;\n    width: auto;\n    margin-right: 10px\n}\n\n.help-dropdown-wrapper .dropdown-menu>li>a i.material-icons {\n    font-size: 18px;\n    color: #fff;\n    padding: 0\n}\n\n.help-dropdown-wrapper .dropdown-menu>li>a span.help-list-title {\n    float: left;\n    font-size: 12px;\n    color: #fff;\n    line-height: 22px\n}\n\n.icon-help {\n    z-index: 9;\n    position: relative;\n    cursor: pointer\n}\n\n.icon-help i.material-icons {\n    font-size: 18px;\n    color: #bec5c9;\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease\n}\n\n.icon-help i.material-icons:focus .icon-help i.material-icons:active,\n.icon-help i.material-icons:hover {\n    color: #fb545b\n}\n\n.builder-help-icon {\n    top: 8px\n}\n\n#new-header .navbar-left ul,\n#new-header .navbar-left ul li,\n.billing-grey-bottom ul.billing-list li,\n.billing-white-bottom ul.billing-list li,\n.left-sidebar ul li,\nli,\nul {\n    list-style: none\n}\n\n#new-header {\n    float: left;\n    width: 100%;\n    height: 60px;\n    -webkit-transition: all .5s linear;\n    transition: all .5s linear\n}\n\n#new-header .navbar-header {\n    width: 255px\n}\n\n#new-header .navbar-default {\n    background: #fff!important;\n    border-bottom: 1px solid #dae2e6;\n    padding-bottom: 10px!important;\n    margin: 0!important;\n    height: 60px;\n    z-index: 999;\n}\n\n#new-header.active {\n    box-shadow: 0 0 10px rgba(0, 0, 0, .4);\n    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .4);\n    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, .4);\n    min-height: 72px;\n    z-index: 99;\n    position: relative\n}\n\n#new-header .navbar-fixed-top .nav-padding {\n    padding-left: 0;\n    padding-right: 35px\n}\n\n#new-header .navbar-logopadding {\n    padding-right: 35px;\n    margin-left: 0!important;\n    padding-top: 0;\n    height: 60px;\n    position: relative;\n    top: -2px\n}\n\n#new-header .navbar-right a.navbar-logout,\n#new-header .navbar-right a.navbar-name {\n    font-family: montserratregular;\n    padding-top: 2px;\n    font-weight: 400;\n    cursor: pointer\n}\n\n#new-header .navbar-left {\n    margin-top: 10px;\n    border-left: 1px solid #dae2e6;\n    padding-left: 0px;\n}\n\n#new-header .navbar-left ul {\n    margin-top: 8px;\n    padding-left: 25px\n}\n\n#new-header .navbar-left ul li {\n    display: inline-block;\n    margin-right: 35px;\n    margin-top: 0\n}\n\n#new-header .navbar-left ul li a {\n    font-size: 12px;\n    color: #8e989f;\n    text-transform: uppercase;\n    -webkit-transition: all .1s ease 0s!important;\n    transition: all .1s ease 0s!important;\n    overflow: visible\n}\n\n#new-header .navbar-left ul li a i.material-icons {\n    font-size: 18px;\n    color: #bec5c9;\n    position: relative;\n    top: 3px\n}\n\n#new-header .navbar-left ul li a.hvr-underline-from-left::before {\n    background: #fb5f66;\n    height: 3px;\n    position: absolute;\n    top: 39px\n}\n\n#new-header .navbar-left ul li a.active.hvr-underline-from-left::before {\n    background: #fb5f66;\n    right: 0;\n    height: 3px;\n    position: absolute;\n    top: 39px\n}\n\n#new-header .navbar-right {\n    float: right;\n    color: #fb545b;\n    font-size: 18px;\n    width: 150px\n}\n\n#new-header .navbar-right-block {\n    margin-top: 11px;\n    padding-right: 0;\n    padding-left: 12px;\n    margin-bottom: -6px;\n    border-left: 1px solid #dae2e6;\n}\n\n#new-header .navbar-right a.navbar-name {\n    font-size: 13px;\n    color: #8e989f;\n    float: left;\n    padding-right: 15px\n}\n\n#new-header .navbar-right a.navbar-logout {\n    font-size: 13px;\n    color: #8e989f;\n    float: left\n}\n\n@media screen and (min-width: 768px) and (max-width: 768px) {\n    #new-header .navbar-right {\n        color: #fb545b;\n        font-size: 18px;\n        width: 100%\n    }\n    nav .cookies-header {\n        padding: 8px 10px\n    }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1024px) {\n    #new-header .navbar-right {\n        width: 100%\n    }\n}\n\n\n#new-header .company-nav {\n    display: block!important\n}\n\n#new-header .navbar-default.company-nav {\n    background: #fff!important;\n    border-bottom: 1px solid #dae2e6;\n    padding-top: 0!important\n}\n\n#new-header .company-nav .navbar-header {\n    width: 90%!important\n}\n\n#new-header .company-nav.navbar-default .navbar-collapse, #new-header .company-nav.navbar-default .navbar-form {\n    float: left;\n    width: 10%;\n    margin-top: 20px;\n}\n#new-header .company-nav .navbar-logopadding {\n    padding-left: 15px;\n    padding-top: 22px;\n    height: 105px;\n    width: 100%;\n    padding-right: 15px!important\n}\n\n#new-header .company-nav.navbar-fixed-top .nav-padding {\n    padding-left: 0;\n    padding-right: 0\n}\n\n#new-header.cookies-parent {\n    height: 58px;\n    margin-bottom: 40px\n}\n\n#new-header.cookies-parent .navbar-logopadding {\n    padding-top: 5px;\n    height: 72px;\n    margin-top: -2px\n}\n\n#new-header.cookies-parent .navbar-default {\n    height: 98px\n}\n\n#new-header.cookies-parent .navbar-left {\n    margin-top: 14px\n}\n\n#new-header.cookies-parent .navbar-right {\n    margin-top: 5px\n}\n\n#new-header.cookies-parent .navbar-right-block {\n    margin-top: 10px\n}\n\n#new-header .company-nav .navbar-logopadding {\n    padding-left: 30px;\n    padding-top: 22px;\n    height: 125px\n}\n\n#new-header .company-nav {\n    height: 125px!important\n}\n\n@media (max-width: 767px) {\n    .settings-cookies #new-header.cookies-parent {\n        height: 50px;\n        margin-bottom: 0\n    }\n    #new-header .company-nav.navbar-fixed-top .nav-padding {\n        padding-left: 0;\n        padding-right: 0\n    }\n    #new-header.cookies-parent {\n        height: 58px;\n        margin-bottom: 40px\n    }\n    #new-header.cookies-parent .navbar-logopadding {\n        padding-top: 5px;\n        height: 72px;\n        margin-top: -2px\n    }\n    #new-header.cookies-parent .navbar-default {\n        height: 98px\n    }\n    #new-header.cookies-parent .navbar-left {\n        margin-top: 14px\n    }\n}\n\n@media (max-width: 992px) {\n    #new-header .company-nav .navbar-logopadding {\n        padding-left: 30px;\n        padding-top: 22px;\n        height: 125px\n    }\n    #new-header .company-nav {\n        height: 125px!important\n    }\n}\n\n\n/* Start: Responsiveness */\n\n.mobile-menu {\n    display: none;\n}\n\n.white-logo {\n    display: none !important;\n}\n\n.company-list,\n.name-list {\n    width: 100%;\n    float: left;\n}\n\n@media (max-width: 767px) {\n    #new-header .navbar-fixed-top .nav-padding {\n        padding-right: 0px;\n    }\n    .full-menu,\n    .dash-circle,\n    .dash-prog-outer h2 {\n        display: none;\n    }\n    .main-logo {\n        display: none !important;\n    }\n    .mobile-menu {\n        display: block;\n        float: right;\n        margin-top: 9px;\n        position: relative;\n    }\n    #new-header .navbar-default {\n        background: #fb5f66 !important;\n        border: none;\n    }\n    #new-header .navbar-default .mat-icon i.material-icons {\n        font-size: 24px;\n        color: #fff;\n        padding: 15px;\n    }\n    #new-header .navbar-header h4.title {\n        color: #fff;\n        font-size: 18px;\n        text-align: center;\n        text-transform: uppercase;\n        padding-top: 10px;\n    }\n    .mobile-menu button {\n        border: none;\n        box-shadow: none;\n        color: #fff;\n        background: none;\n        float: right;\n        margin: 0px 10px;\n    }\n    .mobile-menu .btn-default:hover {\n        color: #fff;\n        background: none;\n    }\n    .mobile-dash {\n        padding: 0px;\n    }\n    .mobile-menu .dropdown-menu {\n        background: #62696d;\n        top: -11px;\n        border-radius: 0px;\n        left: -176px;\n        width: 235px;\n        font-family: montserratlight;\n        padding-bottom: 55px;\n    }\n    .mobile-menu .name-dropdown-border {\n        width: 100%;\n        margin: 10px 0px;\n        border-top: 1px solid #72787c!important;\n    }\n    .mobile-menu .user-outr {\n        float: left;\n        width: 100%;\n        padding: 0;\n        margin: 0px;\n        display: block;\n    }\n    .mobile-menu .user-outr li {\n        float: right;\n        font-size: 24px;\n        font-family: montserratlight;\n        color: #fff;\n        margin-right: 24px;\n        /* margin: 10px 19px; */\n        margin-top: 8px;\n        margin-bottom: 6px;\n    }\n    .mobile-menu .user-outr li a {\n        margin-right: 30px;\n    }\n    .user-outr li a {\n        float: left;\n        width: auto;\n        border: 2px solid #dae2e6;\n        border-radius: 50%;\n        margin-left: 5px;\n        margin-bottom: 5px;\n    }\n    .user-outr li a:hover {\n        border: 2px solid #f56151;\n    }\n    .mobile-menu .company-list li,\n    .mobile-menu .name-list li {\n        margin: 10px 0px;\n        text-align: right;\n        font-size: 16px;\n        width: 100%;\n        float: left;\n        padding-right: 30px;\n        font-family: montserratregular;\n    }\n    .mobile-menu .company-list li a,\n    .mobile-menu .name-list li a {\n        float: right;\n        color: #fff;\n    }\n    .mobile-menu .company-list li a i {\n        margin-right: 20px;\n        float: left;\n    }\n    .mobile-menu .name-list li a i {\n        margin-left: 20px;\n        float: right;\n    }\n    .mobile-menu .company-list-title {\n        float: left;\n        color: #fff;\n    }\n    .white-logo {\n        display: block !important;\n    }\n    .dash-prog-outer {\n        float: left;\n        width: 100%;\n        margin-top: 10px;\n        margin-bottom: 10px;\n    }\n    .dash-prog-outer h5 {\n        font-size: 24px;\n        text-align: center;\n        width: 100%;\n        margin-bottom: 1px;\n    }\n    .dash-prog-outer .company-dropdown-wrapper {\n        min-height: 35px;\n        width: 100%;\n        text-align: center;\n    }\n    .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n        margin: 0 auto;\n        float: none;\n        text-align: center;\n    }\n    #new-header .navbar-header {\n        float: left;\n        margin-left: 0px;\n        margin-right: 0px !important;\n    }\n    #new-header .navbar-logopadding {\n        padding-right: 0px;\n        padding-top: 0px;\n    }\n    #new-header .navbar-default {\n        height: 56px;\n    }\n    .white-logo .navbar-brand img {\n        height: 53px;\n        margin-top: -20px;\n        margin: 0 auto;\n        margin-top: -20px;\n    }\n    .white-logo .navbar-brand {\n        float: none;\n    }\n    .user-outr li a.add-user {\n        width: 45px;\n        height: 45px;\n        padding-top: 9px;\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\n        top: -30px;\n        left: 17px;\n        font-size: 34px;\n        position: relative;\n        color: #f87b80;\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\n        font-size: 16px;\n    }\n    .company-dropdown-wrapper .dropdown-menu > li > a .company-site {\n        width: 91%;\n        font-size: 14px;\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\n        width: 35px;\n        height: 35px;\n        padding-top: 8px;\n        font-size: 14px;\n        top: 13px;\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.add-new-company {\n        font-size: 14px;\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a i.material-icons {\n        font-size: 24px;\n    }\n    .company-block-content {\n        margin-left: 50px;\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n        left: 42px;\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\n        right: 34px;\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n        top: 8px;\n        left: -8px;\n    }\n    /* start: new css 19sep2016 */\n    .header-links li {\n        font-size: 14px !important;\n        text-transform: uppercase;\n        font-family: montserratregular;\n    }\n    .header-links i.material-icons {\n        opacity: 0.5;\n        font-size: 18px;\n    }\n    .setting-logout-links li a i.material-icons {\n        font-size: 14px;\n        margin-top: 5px;\n    }\n    /* end: new css 19sep2016 */\n    .hvr-underline-from-left:hover:before,\n    .hvr-underline-from-left:focus:before,\n    .hvr-underline-from-left:active:before {\n        background: none;\n    }\n    .hvr-underline-from-left:before {\n        background: none;\n    }\n    #new-header .company-nav {\n        display: block !important;\n    }\n    #new-header .navbar-default.company-nav {\n        background: #fff!important;\n        border-bottom: 1px solid #dae2e6;\n        padding-top: 0px !important;\n    }\n    .company-nav .navbar-header {\n        width: 100% !important;\n    }\n    #new-header .company-nav .navbar-logopadding {\n        padding-left: 15px;\n        padding-top: 22px;\n        height: 105px;\n        width: 100%;\n        padding-right: 15px !important;\n    }\n    .company_name_avatar-circle {\n        margin-right: 15px;\n    }\n    .company_name_span {\n        width: 57%;\n        line-height: 30px;\n    }\n}\n\n\n/* End: Responsiveness */\n\n.builder-dropdown-menu {\n    top: 46px;\n}\n\n\n/*.company_name_avatar-circle {\n    float: left;\n    width: 60px;\n    height: 60px;\n    border-radius: 50px;\n    background: #eceff0;\n    color: #444f54;\n    text-align: center;\n    font-family: montserratregular;\n    font-size: 24px;\n    padding-top: 23px;\n    margin-right: 20px;\n    text-transform: uppercase;\n  }\n\n  .company_name_span{\n    float: left;\n    margin-top: 20px;\n    font-size: 38px;\n  }*/\n\n@media (max-width: 767px) {\n    #setting-header .navbar-fixed-top .nav-padding {\n        padding-right: 0px;\n        padding-left: 0px;\n    }\n    .full-menu,\n    .dash-circle,\n    .dash-prog-outer h2 {\n        display: none;\n    }\n    .main-logo {\n        display: none !important;\n    }\n    .mobile-menu {\n        display: block;\n        float: right;\n        margin-top: 7px;\n        position: relative;\n    }\n    #setting-header .navbar-default {\n        background: #BEC5C9 !important;\n        border: none;\n        margin-top: 0px;\n    }\n    #setting-header .navbar-default .mat-icon i.material-icons {\n        font-size: 24px;\n        color: #fff;\n        padding: 13px;\n    }\n    #setting-header .navbar-header h4.title {\n        color: #fff;\n        font-size: 16px;\n        text-align: center;\n        text-transform: uppercase;\n        padding-top: 7px;\n    }\n    .mobile-menu button {\n        border: none;\n        box-shadow: none;\n        color: #fff;\n        background: none;\n        float: right;\n        margin: 0px 5px;\n    }\n    .mobile-menu .btn-default:hover {\n        color: #fff;\n        background: none;\n    }\n    .mobile-dash {\n        padding: 0px;\n    }\n    .mobile-menu .dropdown-menu {\n        background: #62696d;\n        top: -11px;\n        border-radius: 0px;\n        left: -176px;\n        width: 235px;\n        font-family: montserratlight;\n        padding-bottom: 55px;\n    }\n    .mobile-menu .name-dropdown-border {\n        width: 100%;\n        margin: 5px 0px;\n    }\n    .mobile-menu .user-outr {\n        float: left;\n        width: 100%;\n        padding: 0;\n        margin: 0px;\n        display: block;\n    }\n    .mobile-menu .user-outr li {\n        float: right;\n        font-size: 24px;\n        font-family: montserratlight;\n        color: #fff;\n        margin-right: 30px;\n        /* margin: 10px 19px; */\n        margin-top: 8px;\n        margin-bottom: 6px;\n    }\n    .mobile-menu .user-outr li a {\n        margin-right: 30px;\n    }\n    .user-outr li a {\n        float: left;\n        width: auto;\n        border: 2px solid #dae2e6;\n        border-radius: 50%;\n        margin-left: 5px;\n        margin-bottom: 5px;\n    }\n    .user-outr li a:hover {\n        border: 2px solid #f56151;\n    }\n    .mobile-menu .company-list li,\n    .mobile-menu .name-list li {\n        margin: 10px 0px;\n        text-align: right;\n        font-size: 16px;\n        width: 100%;\n        float: left;\n        padding-right: 30px;\n    }\n    .mobile-menu .company-list li a,\n    .mobile-menu .name-list li a {\n        float: right;\n        color: #fff;\n    }\n    .mobile-menu .company-list li a i {\n        margin-right: 20px;\n        float: left;\n    }\n    .mobile-menu .name-list li a i {\n        margin-left: 20px;\n        float: right;\n    }\n    .mobile-menu .company-list-title {\n        float: left;\n        color: #fff;\n        text-transform: capitalize;\n    }\n    .white-logo {\n        display: block !important;\n    }\n    .dash-prog-outer {\n        float: left;\n        width: 100%;\n        margin-top: 10px;\n        margin-bottom: 10px;\n    }\n    .dash-prog-outer h5 {\n        font-size: 24px;\n        text-align: center;\n        width: 100%;\n        margin-bottom: 1px;\n    }\n    .dash-prog-outer .company-dropdown-wrapper {\n        min-height: 35px;\n        width: 100%;\n        text-align: center;\n    }\n    .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n        margin: 0 auto;\n        float: none;\n        text-align: center;\n    }\n    #setting-header .navbar-header {\n        float: left;\n        margin-left: -5px;\n        margin-right: 0px !important;\n    }\n    #setting-header .navbar-logopadding {\n        padding-right: 0px;\n        padding-top: 0px;\n    }\n    #setting-header .navbar-default {\n        height: 50px;\n        margin: 0px;\n        padding-bottom: 0px;\n        /*z-index: 9999 !important;*/\n    }\n    .white-logo .navbar-brand img {\n        height: 53px;\n        margin-top: -20px;\n        margin: 0 auto;\n        margin-top: -20px;\n    }\n    .white-logo .navbar-brand {\n        float: none;\n    }\n    .user-outr li a.add-user {\n        width: 45px;\n        height: 45px;\n        padding-top: 9px;\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\n        top: -30px;\n        left: 17px;\n        font-size: 34px;\n        position: relative;\n        color: #f87b80;\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\n        font-size: 16px;\n    }\n    .company-dropdown-wrapper .dropdown-menu > li > a .company-site {\n        width: 91%;\n        font-size: 14px;\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\n        width: 35px;\n        height: 35px;\n        padding-top: 8px;\n        font-size: 14px;\n        top: 13px;\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.add-new-company {\n        font-size: 14px;\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a i.material-icons {\n        font-size: 24px;\n    }\n    .company-block-content {\n        margin-left: 50px;\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n        left: 42px;\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\n        right: 34px;\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n        top: 8px;\n        left: -8px;\n    }\n}\n\n@media screen and (min-width: 480px) and (max-width: 480px) {\n    .mobile-menu .dropdown-menu {\n        left: -158px;\n    }\n}\n\n@media screen and (min-width: 640px) and (max-width: 640px) {\n    .mobile-menu .dropdown-menu {\n        left: -130px;\n    }\n}\n\n@media screen and (min-width:1024px) and (max-width: 1280px) {\n    .name-dropdown-wrapper button.btn.btn-default.dropdown-toggle span.name-title {\n        width: 76%;\n    }\n}\n\n.cookies-header {\n    background: #f87b80;\n    color: #fff;\n    float: left;\n    width: 100%;\n    padding: 8px 15px;\n    font-family: montserratlight;\n    font-size: 12px;\n    box-shadow: 2px 2px 13px 1px rgba(0, 0, 0, .2)\n}\n\n.cookies-header i {\n    color: #fff;\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 9px;\n    font-size: 16px;\n    margin-top: -3px\n}\n\n.cookies-header .btn-close {\n    opacity: .8;\n    line-height: 15px\n}\n\n.cookies-header a {\n    color: #fff;\n    text-decoration: underline\n}\n\n#new-header.cookies-parent {\n    height: 58px;\n    margin-bottom: 40px\n}\n\n#new-header.cookies-parent .navbar-logopadding {\n    padding-top: 5px;\n    height: 72px;\n    margin-top: -2px\n}\n\n#new-header.cookies-parent .navbar-default {\n    height: 98px\n}\n\n#new-header.cookies-parent .navbar-left {\n    margin-top: 14px\n}\n\n.settings-cookies #membership-details .membership-details-inner-tabs,\n.settings-cookies .left-sidebar {\n    top: 98px\n}\n\n.settings-cookies .analytics-left-side {\n    top: 0!important\n}\n\n.settings-cookies #new-header.cookies-parent {\n    height: 98px;\n    margin-bottom: 0\n}\n\nheader#new-header.cookies-parent {\n    margin-bottom: 40;\n    height: 50px\n}\n\n.settings-cookies #smScrSideNavbar.left-sidebar,\n.settings-cookies .membership-details-inner-tabs {\n    top: 98px!important\n}\n\n.help-dropdown-wrapper.btn-group {\n    position: relative;\n    margin: 0;\n    float: right;\n    width: 20%\n}\n\n.help-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n    padding: 15px 12px 12px;\n    font-size: 12px;\n    text-transform: none;\n    color: #62696d;\n    font-family: montserratlight;\n    border: none\n}\n\n.help-dropdown-wrapper button.btn.btn-default.dropdown-toggle i.material-icons {\n    font-size: 18px;\n    color: #bec5c9;\n    position: absolute;\n    top: -1px;\n    right: 3px\n}\n\n.help-dropdown-wrapper button.btn.btn-default.dropdown-toggle:focus,\n.help-dropdown-wrapper button.btn.btn-default.dropdown-toggle:hover {\n    background: 0 0!important;\n    box-shadow: none!important;\n    border: 0!important\n}\n\n.help-dropdown-wrapper .dropdown-menu {\n    padding: 10px 0;\n    z-index: 1;\n    top: 33px;\n    right: -13px;\n    min-width: 140px;\n    font-size: 12px;\n    background: #f87b80;\n    border-radius: 4px!important;\n    border: none;\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .24);\n    display: none\n}\n\n.help-dropdown-wrapper:hover .dropdown-menu {\n    display: block\n}\n\n.help-dropdown-wrapper .dropdown-menu:before {\n    position: absolute;\n    top: -12px;\n    right: 17px;\n    display: inline-block;\n    border-right: 8px solid transparent;\n    border-bottom: 12px solid #f87b80;\n    border-left: 8px solid transparent;\n    border-bottom-color: #f87b80;\n    content: ''\n}\n\n.help-dropdown-wrapper .dropdown-menu>li>a:focus,\n.help-dropdown-wrapper .dropdown-menu>li>a:hover {\n    color: #fff;\n    background: 0 0\n}\n\n.navbar .help-dropdown-wrapper .dropdown-menu li>a:hover,\n.navbar.navbar-default .help-dropdown-wrapper .dropdown-menu li>a:hover {\n    background: #f9888d;\n    color: #fff\n}\n\n.navbar .dropdown-menu .help-dropdown-wrapper li>a:focus,\n.navbar.navbar-default .help-dropdown-wrapper .dropdown-menu li>a:focus {\n    color: #fff;\n    background-color: transparent\n}\n\n.help-dropdown-wrapper .dropdown-menu>li>a:focus i.material-icons,\n.help-dropdown-wrapper .dropdown-menu>li>a:hover i.material-icons {\n    color: #fff\n}\n\n.help-dropdown-wrapper .dropdown-menu>li>a {\n    color: #fff;\n    padding: 3px 13px!important;\n    text-transform: capitalize;\n    font-family: montserratregular;\n    font-size: 13px!important;\n    float: left;\n    width: 100%\n}\n\n.help-dropdown-wrapper .dropdown-menu>li>a span.help-list-icon {\n    float: left;\n    width: auto;\n    margin-right: 10px\n}\n\n.help-dropdown-wrapper .dropdown-menu>li>a i.material-icons {\n    font-size: 18px;\n    color: #fff;\n    padding: 0\n}\n\n.help-dropdown-wrapper .dropdown-menu>li>a span.help-list-title {\n    float: left;\n    font-size: 12px;\n    color: #fff;\n    line-height: 22px\n}\n\n.icon-help {\n    z-index: 9;\n    position: relative;\n    cursor: pointer\n}\n\n.icon-help i.material-icons {\n    font-size: 18px;\n    color: #bec5c9;\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease\n}\n\n.icon-help i.material-icons:focus .icon-help i.material-icons:active,\n.icon-help i.material-icons:hover {\n    color: #fb545b\n}\n\n.builder-help-icon {\n    top: 8px\n}\n\n.support_outer {\n    color: #999;\n    display: inline-block;\n    vertical-align: middle;\n    height: 37px;\n    cursor: pointer;\n    padding-top: 7px;\n}\n\ni.support_icon {\n    font-size: 17px;\n    color: #8e989f;\n    opacity: 0.5;\n}\n\n.support_outer:hover i.support_icon {\n    color: #fb5f66;\n    opacity: 1;\n}\n\n.help-options .dropdown-menu {\n    font-size: 12px;\n    background: #62696d;\n    top: 35px;\n    left: -105px;\n    min-width: 130px;\n}\n\n.help-options .dropdown-menu:before {\n    position: absolute;\n    top: -12px;\n    left: 105px;\n    display: inline-block;\n    border-right: 8px solid transparent;\n    border-bottom: 12px solid #62696d;\n    border-left: 8px solid transparent;\n    border-bottom-color: #62696d;\n    content: '';\n}\n\n.help-options .dropdown-menu>li>a {\n    color: #fff;\n    padding: 5px 13px!important;\n    text-transform: capitalize;\n    font-family: montserratregular;\n    float: left;\n    width: 100%;\n    font-size: 12px!important;\n}\n\n.help-options .dropdown-menu>li>a:hover {\n    background: #71787b;\n    color: #fff;\n}\n\n.help-options .dropdown-menu >li>a.hvr-sweep-to-right::before {\n    background: #71787b;\n}\n\n.help-options .dropdown-icons {\n    font-size: 12px;\n    color: #fff;\n    padding: 5px 0 0;\n    float: left;\n    margin-right: 10px;\n}\n\n.help-options .dropdown-text {\n    float: left;\n    font-size: 12px;\n    color: #fff;\n    line-height: 22px;\n}\n\n.help-options .dropdown-link {\n    font-size: 16px;\n    color: #8e989f;\n    opacity: 0.5;\n    \n    cursor: pointer;\n}\n\n.animated {\n    -webkit-animation-duration: 1s;\n    animation-duration: 2s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n.slow {\n    -webkit-animation-duration: 1.5s;\n    animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n.slower {\n    -webkit-animation-duration: 2s;\n    animation-duration: 2s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n.slowest {\n    -webkit-animation-duration: 3s;\n    animation-duration: 3s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n.bounceIn {\n    -webkit-animation-name: bounceIn;\n    animation-name: bounceIn;\n}\n\n\n/***********\n* bounceIn *\n************/\n\n@-webkit-keyframes bounceIn {\n    0% {\n        opacity: 0;\n        -webkit-transform: scale(.3);\n    }\n    50% {\n        opacity: 1;\n        -webkit-transform: scale(1.05);\n    }\n    70% {\n        -webkit-transform: scale(.9);\n    }\n    100% {\n        -webkit-transform: scale(1);\n    }\n}\n\n@keyframes bounceIn {\n    0% {\n        opacity: 0;\n        -webkit-transform: scale(.3);\n                transform: scale(.3);\n    }\n    50% {\n        opacity: 1;\n        -webkit-transform: scale(1.05);\n                transform: scale(1.05);\n    }\n    70% {\n        -webkit-transform: scale(.9);\n                transform: scale(.9);\n    }\n    100% {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n    }\n}\n\n\n#new-header .company-nav .navbar-logopadding {\n    padding-left: 30px;\n    padding-top: 22px;\n    height: 125px\n}\n\n#new-header .company-nav {\n    height: 125px!important\n}\n\n.company-nav .navbar-header {\n    width: 50%!important\n}\n\n.company_name_avatar-circle {\n    float: left;\n    width: 80px;\n    height: 80px;\n    border-radius: 50px;\n    background: #eceff0;\n    color: #61686e;\n    text-align: center;\n    font-family: montserratregular;\n    font-size: 28px;\n    padding-top: 30px;\n    margin-right: 30px;\n    text-transform: uppercase\n}\n\n.company_name_span {\n    float: left;\n    margin-top: 25px;\n    font-size: 26px;\n    color: #61686e;\n    font-family: montserratlight;\n    line-height: 30px\n}\n\n.company-home {\n    background: #f6f8f9;\n    height: 100vh;\n    float: left;\n    width: 100%;\n    padding-top: 100px!important;\n    margin-top: 0!important\n}\n@media (max-width: 767px) {\n     /*header#new-header.cookies-parent {\n        margin-bottom: 0;\n        height: 50px\n    }\n    .settings-cookies #smScrSideNavbar.left-sidebar,\n    .settings-cookies .membership-details-inner-tabs {\n        top: 50px!important\n    }*/\n    #smScrWrapperContent {\n        display: none\n    }\n    #new-header .company-nav {\n        display: block!important\n    }\n    #new-header .navbar-default.company-nav {\n        background: #fff!important;\n        border-bottom: 1px solid #dae2e6;\n        padding-top: 0!important\n    }\n    #new-header .company-nav .navbar-header {\n        width: 90%!important\n    }\n    #new-header .company-nav .navbar-logopadding {\n        padding-left: 15px;\n        padding-top: 22px;\n        height: 105px;\n        width: 100%;\n        padding-right: 15px!important\n    }\n    .company_name_avatar-circle {\n        margin-right: 15px\n    }\n    .company_name_span {\n        width: 45%;\n        line-height: 30px\n    }\n    #new-header .navbar-default .navbar-collapse, #new-header .navbar-default .navbar-form {\n        float: left;\n        width: 5%;\n        margin-top: 20px;\n        display: block;\n        padding: 0;\n        border: none;\n    }\n    #new-header .navbar-right {\n        width: 55px;\n    }\n    #new-header {\n        height: 50px\n    }\n    #new-header .company-nav.navbar-fixed-top .nav-padding {\n        padding-left: 0;\n        padding-right: 0\n    }\n}\n\n@media (max-width: 767px) {\n    #lgScrSideNavbar,\n    .dash-circle,\n    .dash-prog-outer h2,\n    .full-menu {\n        display: none\n    }\n    #responsive-header .navbar-fixed-top .nav-padding {\n        padding-right: 0;\n        padding-left: 0\n    }\n    .main-logo {\n        display: none!important\n    }\n    .mobile-menu {\n        display: block;\n        float: right;\n        margin-top: 7px;\n        position: relative\n    }\n    #responsive-header .navbar-default {\n        background: #fb5f66!important;\n        border: none;\n        margin-top: 0\n    }\n    #responsive-header .navbar-default .mat-icon i.material-icons {\n        font-size: 24px;\n        color: #fff;\n        padding: 13px\n    }\n    #responsive-header .navbar-header h4.title {\n        color: #fff;\n        font-size: 16px;\n        text-align: center;\n        text-transform: uppercase;\n        padding-top: 7px\n    }\n    .mobile-menu button {\n        border: none;\n        box-shadow: none;\n        color: #fff;\n        background: 0 0;\n        float: right;\n        margin: 0 5px\n    }\n    .mobile-menu button:focus {\n        background: 0 0!important;\n        color: #fff!important\n    }\n    .mobile-menu .btn-default:hover {\n        color: #fff;\n        background: 0 0\n    }\n    .mobile-dash {\n        padding: 0\n    }\n    .mobile-menu .dropdown-menu {\n        background: #62696d;\n        top: -11px;\n        border-radius: 0;\n        left: -176px;\n        width: 235px;\n        font-family: montserratlight;\n        padding-bottom: 55px\n    }\n    .mobile-menu .name-dropdown-border {\n        width: 100%;\n        margin: 5px 0\n    }\n    .mobile-menu .user-outr {\n        float: left;\n        width: 100%;\n        padding: 0;\n        margin: 0;\n        display: block;\n        text-transform: capitalize\n    }\n    .mobile-menu .user-outr li {\n        float: right;\n        font-size: 24px;\n        font-family: montserratlight;\n        color: #fff;\n        margin-right: 24px;\n        margin-top: 8px;\n        margin-bottom: 6px;\n        margin-left: 30px;\n        /*white-space: normal;*/\n        word-wrap: break-word;\n        width: 175px;\n        text-align: right;\n    }\n    .mobile-menu .user-outr li a {\n        margin-right: 30px\n    }\n    .user-outr li a {\n        float: left;\n        width: auto;\n        border: 2px solid #dae2e6;\n        border-radius: 50%;\n        margin-left: 5px;\n        margin-bottom: 5px\n    }\n    .user-outr li a:hover {\n        border: 2px solid #f56151\n    }\n    .mobile-menu .company-list li,\n    .mobile-menu .name-list li {\n        margin: 10px 0;\n        text-align: right;\n        font-size: 16px;\n        width: 100%;\n        float: left;\n        padding-right: 20px\n    }\n    .mobile-menu .company-list li a,\n    .mobile-menu .name-list li a {\n        float: right;\n        color: #fff\n    }\n    .mobile-menu .company-list li a i {\n        margin-right: 20px;\n        float: left\n    }\n    .mobile-menu .name-list li a i {\n        margin-left: 20px;\n        float: right\n    }\n    .mobile-menu .company-list-title {\n        float: left;\n        color: #fff\n    }\n    .white-logo {\n        display: block!important\n    }\n    .dash-prog-outer {\n        float: left;\n        width: 100%;\n        margin-top: 10px;\n        margin-bottom: 10px\n    }\n    .dash-prog-outer h5 {\n        font-size: 24px;\n        text-align: center;\n        width: 100%;\n        margin-bottom: 1px\n    }\n    .dash-prog-outer .company-dropdown-wrapper {\n        min-height: 35px;\n        width: 100%;\n        text-align: center\n    }\n    .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n        margin: 0 auto;\n        float: none;\n        text-align: center\n    }\n    #responsive-header .navbar-header {\n        float: left;\n        margin-left: -5px;\n        margin-right: 0!important\n    }\n    #responsive-header .navbar-logopadding {\n        padding-right: 0;\n        padding-top: 0\n    }\n    #responsive-header .navbar-default {\n        height: 50px;\n        margin: 0;\n        padding-bottom: 0\n    }\n    .settings-cookies #new-header.cookies-parent {\n        height: 50px;\n        margin-bottom: 0\n    }\n    .white-logo .navbar-brand img {\n        height: 53px;\n        margin: -20px auto 0\n    }\n    .white-logo .navbar-brand {\n        float: none\n    }\n    .user-outr li a.add-user {\n        width: 45px;\n        height: 45px;\n        padding-top: 9px\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\n        top: -30px;\n        left: 17px;\n        font-size: 34px;\n        position: relative;\n        color: #f87b80\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a .company-title {\n        font-size: 16px\n    }\n    .company-dropdown-wrapper .dropdown-menu>li>a .company-site {\n        width: 91%;\n        font-size: 14px\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a .company-block-inner {\n        width: 35px;\n        height: 35px;\n        padding-top: 8px;\n        font-size: 14px;\n        top: 13px\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a.add-new-company {\n        font-size: 14px\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a i.material-icons {\n        font-size: 24px\n    }\n    .company-block-content {\n        margin-left: 50px\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\n        right: 34px\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n        top: 8px;\n        left: -8px\n    }\n    header#new-header.cookies-parent {\n        margin-bottom: 0;\n        height: 50px\n    }\n    .settings-cookies #smScrSideNavbar.left-sidebar,\n    .settings-cookies .membership-details-inner-tabs {\n        top: 50px!important\n    }\n    #smScrWrapperContent {\n        display: none\n    }\n    #new-header .company-nav {\n        display: block!important\n    }\n    #new-header .navbar-default.company-nav {\n        background: #fff!important;\n        border-bottom: 1px solid #dae2e6;\n        padding-top: 0!important\n    }\n    #new-header .company-nav .navbar-header {\n        width: 90%!important\n    }\n    #new-header .company-nav .navbar-logopadding {\n        padding-left: 15px;\n        padding-top: 22px;\n        height: 105px;\n        width: 100%;\n        padding-right: 15px!important\n    }\n    .company_name_avatar-circle {\n        margin-right: 15px\n    }\n    .company_name_span {\n        width: 57%;\n        line-height: 30px\n    }\n    #new-header {\n        height: 50px !important;\n    }\n    #new-header .company-nav.navbar-fixed-top .nav-padding {\n        padding-left: 0;\n        padding-right: 0\n    }\n    #new-header.cookies-parent{\n        margin-bottom: 0;\n    }\n}"

/***/ },

/***/ 759:
/***/ function(module, exports) {

module.exports = " #salesforce-error .modal-body {\n    padding: 40px 15px;\n    min-height: 100%;\n    display: table-cell;\n    vertical-align: middle;\n    float: none;\n}\n#salesforce-error .subheading {\n    font-size: 12px;\n    font-family: \"montserratregular\";\n    color: #62696d;\n    margin: 20px 0px;\n    line-height: 22px;\n}\n#salesforce-error .btn-close {\n    color: #fb545b;\n    border: 1px solid #fb545b;\n    font-size: 13px;\n    margin-top: 0;\n    background: #fb545b;\n    color: #fff;\n    -webkit-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n    white-space: normal;\n    word-break: break-word;\n    border-radius: 0;\n    padding: 7px 30px;\n}\n\n#salesforce-error .modal-dialog {\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n}\n#salesforce-error .modal-content {\n    border-radius: 0px;\n    border: none;\n    width: 100%;\n    float: left;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: table;\n    height: 100vh;\n}\n#salesforce-error.modal {\n    padding-left: 0px !important;\n}\n"

/***/ },

/***/ 760:
/***/ function(module, exports) {

module.exports = "/* Preloader */\n.preloader {\n\tposition: fixed;\n\ttop:0;\n\tleft:0;\n\tright:0;\n\tbottom:0;\n\tbackground-color:#fff; /* change if the mask should be a color other than white */\n\tz-index:9999; /* makes sure it stays on top */\n}\n\n.status {\n\twidth:200px;\n\theight:200px;\n\tposition:absolute;\n\tleft:50%; /* centers the loading animation horizontally on the screen */\n\ttop:50%; /* centers the loading animation vertically on the screen */\n\tbackground-image:url(\"assets/images/logoAnim.gif\"); /* path to your loading animation */\n\tbackground-repeat:no-repeat;\n\tbackground-position:center;\n\tmargin:-100px 0 0 -100px; /* is width and height divided by two */\n}\n"

/***/ },

/***/ 761:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 762:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!--<og-header-nav></og-header-nav>-->"

/***/ },

/***/ 763:
/***/ function(module, exports) {

module.exports = "<div id=\"login\" class=\"modal fade hide\" tabindex=\"-1\" role=\"dialog\">\n\t\t<div class=\"modal-dialog modal-xlg\">\n\t\t\t<!-- Modal content-->\n\t\t\t<div class=\"modal-content modal-bg\">\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<i class=\"material-icons\">close</i></button>\n\t\t\t\t\t<div class=\"col-md-12 np\">\n\t\t\t\t\t\t<div class=\"col-md-6 np modal-left\">\n\t\t\t\t\t\t\t<div class=\"text-center\">\t\t\n\t\t\t\t\t\t\t\t<!-- <p class=\"font-italic text-grey\">or login with</p> -->\n\t\t\t\t\t\t\t\t<img class=\"modal-logo\" src=\"assets/images/outgrow-logo.png\" alt=\"Logo\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 np sahil-material\">\n                                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                    \n                                    <div class=\"form-group label-floating\">\n                                        <label for=\"inputEmail\" class=\"control-label\">Email</label>\n                                        <input id=\"inputEmail\" type=\"email\"  class=\"form-control is-empty\" formControlName=\"email\" required>\n                                    </div>\n                                    <div *ngIf=\"loginForm.controls.email.touched  && !loginForm.controls.email.valid\" class=\"alert alert-danger\">\n                                            <p *ngIf=\"loginForm.controls.email.errors.required\">Email is required.</p>\n                                            <p *ngIf=\"loginForm.controls.email.errors.minlength\">Min 3 character is reuired.</p>\n                                            <p *ngIf=\"loginForm.controls.email.errors.checkmail\">Invalid Email.</p>\n                                    </div>\n                                    <div class=\"label-floating form-group\">\n                                        <label for=\"inputPassword\" class=\"control-label\">Password</label>\n                                        <input id=\"inputPassword\" type=\"password\"  class=\"form-control is-empty\" required formControlName=\"password\">\n                                        <a href=\"\" class=\"forgot-btn\" data-toggle=\"modal\" data-target=\"#forgot-password\" data-dismiss=\"modal\">Forgot Password ?</a>\n                                    </div>\n                                    <div *ngIf=\"loginForm.controls.password.touched  && !loginForm.controls.password.valid\" class=\"alert alert-danger\">\n                                            <p *ngIf=\"loginForm.controls.password.errors.required\">password is required.</p>\n                                            <p *ngIf=\"loginForm.controls.password.errors.checkmail\">Invalid Email.</p>\n                                    </div>\n                                    <div *ngIf=\"ErrorMessageIsVisible\" class=\"alert alert-danger\">\n                                            <p>{{ErrorMessage}}</p>\n                                    </div>\n                                    <div class=\"text-center\">\n                                        <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-red next-step btn-login\" id='loginSubmit'>Login</button>\n                                        <p class=\"dont-acc-signup\">Don't have an account ? \n                                            <a href=\"javascript:void(0)\" class=\"text-red\" (click)=\"signUp()\"> Sign Up now</a>\n                                        </p>\n                                    </div>\n                                </form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6 np modal-right\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 np\">\n\t\t\t\t\t\t\t\t<img class=\"img-margin img-width\" src=\"assets/images/login-screen1.jpg\" alt=\"img\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<!-- <div class=\"modal-footer\">\n\t\t\t\t\t\n\t\t\t\t</div> -->\n\t\t\t</div>\n\t\t</div>\n</div>\n\n"

/***/ },

/***/ 764:
/***/ function(module, exports) {

module.exports = "<div  id=\"login\" class=\"login\">\n    <div class=\"login-dialog\">\n        <!-- Modal content-->\n        <div class=\"login-content modal-bg\">\n            <div class=\"login-body\">\n                <a id=\"menu-close\" href=\"javascript:void(0);\" (click)=\"closeLogin()\">\n                    <button type=\"button\" class=\"close btn-close\">\n                    <i class=\"material-icons\">close</i></button>\n                </a>\n                <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                    <div class=\"col-md-6 col-sm-6 col-xs-12 np login-left\">\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 np login-left-inner\">\n                            <div class=\"text-center logo-section\">\n                                <!-- <p class=\"font-italic text-grey\">or login with</p> -->\n                                <img class=\"login-logo\" src=\"assets/images/outgrow-logo.png\" alt=\"Logo\">\n                                <span class=\"\">Let's Give Your Interactive <br/>Content a New Home</span>\n                            </div>\n                            <div class=\"col-md-12 col-sm-12 col-xs-12 np sahil-material\">\n                                <div *ngIf=\"ErrorMessageIsVisible\" class=\"alert alert-danger custom-alert\">\n                                    <p>\n                                        <span class=\"mat-icon\">\n                                            <i class=\"material-icons\">report_problem</i>\n                                        </span>\n                                        {{ErrorMessage}}\n                                      <a href=\"javascript:void(0);\" id=\"sendMail\" *ngIf=\"resendEmailShow\" (click)=\"resendEmail()\">Click here to receive the verification link again</a>\n                                    </p>\n                                </div>\n                                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n\n                                    <div class=\"form-group label-floating\"  [class.is-empty] = \"model.emails.email ==''\">\n                                        <label for=\"inputEmail\" class=\"control-label\">Email</label>\n                                        <input id=\"inputEmail\" type=\"email\"  class=\"form-control\" formControlName=\"email\" (focus)=\"hideErrorMessage()\" tabindex=\"1\">\n                                    </div>\n                                    <div *ngIf=\"loginForm.controls.email.touched  && !loginForm.controls.email.valid\" class=\"alert alert-danger\">\n                                        <p *ngIf=\"loginForm.controls.email.errors.required\">\n                                        <span class=\"mat-icon\">\n                                            <i class=\"material-icons\">report_problem</i>\n                                        </span>\n                                        Email is required.</p>\n                                        <p *ngIf=\"loginForm.controls.email.errors.checkmail\">\n                                        <span class=\"mat-icon\">\n                                            <i class=\"material-icons\">report_problem</i>\n                                        </span>\n                                        Invalid Email.</p>\n                                    </div>\n                                    <div class=\"label-floating form-group is-empty\">\n                                        <label for=\"inputPassword\" class=\"control-label\">Password</label>\n                                        <input id=\"inputPassword\" type=\"password\"  class=\"form-control\" required formControlName=\"password\" (focus)=\"hideErrorMessage()\" tabindex=\"2\">\n                                        <a href=\"javascript:void(0)\" class=\"forgot-btn\" (click)=\"forgetPassword()\" tabindex=\"3\">Forgot Password ?</a>\n                                    </div>\n                                    <div *ngIf=\"loginForm.controls.password.touched  && !loginForm.controls.password.valid\" class=\"alert alert-danger\">\n                                        <p *ngIf=\"loginForm.controls.password.errors.required\">\n                                            <span class=\"mat-icon\">\n                                                <i class=\"material-icons\">report_problem</i>\n                                            </span>\n                                            Password is required.\n                                        </p>\n                                        <p *ngIf=\"loginForm.controls.password.errors.minlength\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t                                            <i class=\"material-icons\">report_problem</i>\n\t                                        </span>\n\t\t\t\t\t\t\t\t\t\t\tMin 8 character is required.\n\t\t\t\t\t\t\t\t\t\t</p>\n                                    </div>\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12 np text-center\">\n                                        <button (click)=\"callGA()\" type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-red next-step btn-login\" id='loginSubmit'>Login</button>\n                                        <p class=\"dont-acc-signup\" *ngIf=\"isDomainExist\" >     Logging in for the first time?\n                                            <a class=\"text-red\" (click)=\"signUp()\" tabindex=\"4\"> Sign up</a> instead\n                                        </p>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 col-sm-6 col-xs-12 np login-right\">\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 np login-right-inner\">\n                            <div class=\"login-testimonial\">\n                                <div class=\"testimonial-block\">\n                                    <span>“</span>\n                                </div>\n                                <div class=\"testimonial-content\">\n                                    <span class=\"testi-desc\">Two of our calculators went viral and completely transformed our lead generation strategy in a competitive market.</span>\n                                    <span class=\"testi-client\">Marketing Executive at a Top 10 Hotel Chain</span>\n                                </div>\n                            </div>\n                            <!-- <img class=\"img-margin img-width\" src=\"assets/images/login-screen1.jpg\" alt=\"img\"> -->\n                            <div class=\"img-section\">\n                                    <img class=\"img-margin img-width login-img1\" src=\"assets/images/login1.jpg\" alt=\"img\">\n                                    <img class=\"img-margin img-width login-img2\" src=\"assets/images/login2.jpg\" alt=\"img\">\n                                    <img class=\"img-margin img-width login-img3\" src=\"assets/images/login3.jpg\" alt=\"img\">\n                                </div>\n                            <!-- <div class=\"text-center video-wrapper\">\n                                <img class=\"img-margin img-width\" src=\"assets/images/leadform-videowrapper.png\" alt=\"img\">\n                                <iframe class=\"iframe-1024\" width=\"425\" height=\"236\" src=\"https://www.youtube.com/embed/wFrj5kc1MLs?vq=hd720p&play=1&loop=1&autoplay=1&loop=1&playlist=wFrj5kc1MLs\" frameborder=\"0\" allowfullscreen></iframe>\n                            </div> -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- <div class=\"modal-footer\">\n\n            </div> -->\n        </div>\n    </div>\n</div>\n\n<!--<og-payment-modal></og-payment-modal>-->\n\n\n<!--\n<div *ngIf=\"ErrorMessageIsVisible\" class=\"modal fade show in danger\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Error</h4>\n            </div>\n            <div class=\"modal-body\">\n                <p>{{ErrorMessage}}</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"hide()\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>-->\n\n<!--<script>\n    $(document).ready(function(){\n\n        $('#menu-close').click(function(){\n            $(\".login\").fadeOut(300);\n        });\n    }\n</script>-->\n"

/***/ },

/***/ 765:
/***/ function(module, exports) {

module.exports = "<div>\n    <nav class=\"navbar custom-navbar navbar-default navbar-fixed-top\">\n        <div class=\"container-fluid\">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"index.html\"><img src=\"assets/images/outgrow-logo.png\" /></a>\n            </div>\n\n            <!-- Collect the nav links, forms, and other content for toggling -->\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li><a href=\"javascript:void(0);\" (click)=\"whyCalculators()\">Why Calculators ?</a></li>\n                    <li><a href=\"javascript:void(0);\" (click)=\"features()\">Featuress</a></li>\n                    <li><a href=\"javascript:void(0);\" (click)=\"pricing()\">Pricing</a></li>\n                    <li><a href=\"javascript:void(0);\" (click)=\"examples()\">Examples</a></li>\n                    <li>\n                        <a *ngIf=\"!isLoggedin\" href=\"javascript:void(0);\" class=\"link-login\" (click)=\"login()\">Login</a>\n                    </li>\n                </ul>\n            </div>\n            <!-- /.navbar-collapse -->\n        </div><!-- /.container-fluid -->\n    </nav>\n    <!-- Homepage header end-->\n\t<!-- Homepage section 1 start-->\n    <section class=\"section section-1\">\n        <div class=\"container-fluid\">\n            <div class=\"col-xs-12 col-sm-6 section-1-left\">\n                <div class=\"section1-left-cell\">\n                    <h3 class=\"mk-animate-element fade-in heading-404\">\n                        404\n                    </h3>\n                    <h4 class=\"mk-animate-element fade-in heading2-404\">\n                        Looks like your calc is not published yet, please<br> login and publish your calc.\n                    </h4>\n                    <div class=\"form-group mk-animate-element fade-in hide\">\n                        <input type=\"text\" placeholder=\"Email Address\" />\n                    </div>\n                    <div class=\"col-xs-12 col-sm-8 np\">\n                        <button class=\"btn-buildcal mk-animate-element fade-in login-404\" (click)=\"login()\">Login</button>\n                    </div>\n                </div>\n            </div>\n\t\t\t<div class=\"col-xs-12 col-sm-6 np rs-hide\">\n\t\t\t\t<div class=\"sec1-box-left img-404\">\n\t\t\t\t\t<div class=\"sec1-box1 mk-animate-element fade-in\">\n\t\t\t\t\t\t<img src=\"assets/images/404.png\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n            <div class=\"col-xs-12 col-sm-12 text-center footer-404\">\n                <i class=\"material-icons\">copyright</i>\n                <span>Copyrights</span>\n                <img src=\"assets/images/footer-logo-dark.png\" />\n            </div>\n        </div>\n    </section>\n</div>"

/***/ },

/***/ 766:
/***/ function(module, exports) {

module.exports = "<!-- Start: Modal cc-modal-payment -->\n<div id=\"cc-modal-payment\" class=\"modal fade cc-modal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <form class=\"form-wrapper\" [formGroup]=\"setupPaymentForm\" id=\"setupPaymentForm\" (ngSubmit)=\"setupPayment()\">\n      <div class=\"modal-content modal-content-credit\">\n        <div class=\"modal-body\">\n          <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n            <div class=\"col-md-12 col-sm-12 np\">\n              <div class=\"col-md-6 col-sm-6 col-xs-6 np modal-header\">\n                Payment Setup\n              </div>\n              <img id=\"cardType\" src=\"assets/images/payment-icons/icon-{{cardType}}.png\" alt=\"{{cardType}}\" class=\"pull-right\" *ngIf=\"cardType\"/>\n            </div>\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n              <div class=\"col-md-12 col-sm-12 col-xs-12 np credit-sec\">\n                <input type=\"text\" pattern=\"[0-9]*\" size=\"4\" maxlength=\"4\" class=\"cc-number\" placeholder=\"XXXX\" formControlName=\"cardNumber1\" id=\"cardNumber1\" name = \"cardNumber1\" #num1 (keyup)=\"onChangeCardNumber(num1)\">\n                <input type=\"text\" pattern=\"[0-9]*\" size=\"4\" maxlength=\"4\" class=\"cc-number\" placeholder=\"XXXX\" formControlName=\"cardNumber2\" id=\"cardNumber2\" name = \"cardNumber2\" [readonly]=\"!setupPaymentForm.controls.cardNumber1.valid\" #num2 (keyup)=\"onChangeCardNumber(num2)\">\n                <input type=\"text\" pattern=\"[0-9]*\" size=\"4\" maxlength=\"4\" class=\"cc-number\" placeholder=\"XXXX\" formControlName=\"cardNumber3\" id=\"cardNumber3\" name = \"cardNumber3\" [readonly]=\"!setupPaymentForm.controls.cardNumber2.valid\" #num3 (keyup)=\"onChangeCardNumber(num3)\">\n                <input type=\"text\" pattern=\"[0-9]*\" size=\"4\" maxlength=\"4\" class=\"cc-number cc-number-last\" placeholder=\"XXXX\" formControlName=\"cardNumber4\" id=\"cardNumber4\" name = \"cardNumber4\" [readonly]=\"!setupPaymentForm.controls.cardNumber3.valid\" #num4 (keyup)=\"onChangeCardNumber(num4)\">\n              </div>\n              <div class=\"col-md-12 col-sm-12 col-xs-12 np validity-sec\">\n                <div class=\"col-md-5 col-sm-5 col-xs-5 np\"></div>\n                <div class=\"col-md-7 col-sm-7 col-xs-7 np\">\n                  <span class=\"val-text\">Validity</span>\n                  <div class=\"pull-right\">\n                    <input type=\"text\" pattern=\"[0-9]*\" placeholder=\"MM\" maxlength=\"2\" class=\"cc-exp\" id=\"cardMonth\" name=\"cardMonth\" formControlName=\"cardMonth\" #mm (keyup)=\"onChangeCardNumber(mm)\">\n                    <span class=\"separator\">/</span>\n                    <input type=\"text\" pattern=\"[0-9]*\" placeholder=\"YYYY\" maxlength=\"4\" class=\"cc-exp cc-exp-last\" id=\"cardYear\" name=\"cardYear\" formControlName=\"cardYear\" #yyyy (keyup)=\"onChangeCardNumber(yyyy)\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-12 col-sm-12 col-xs-12 np name-sec\">\n                <input type=\"text\" placeholder=\"YOUR NAME\" class=\"cc-name col-md-9 col-sm-9 col-xs-12 np\" id=\"nameOnCard\" name=\"nameOnCard\" formControlName=\"nameOnCard\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-content modal-content-cvv\">\n        <div class=\"modal-body\">\n          <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n            <div class=\"col-md-12 col-sm-12 np\">\n              <span class=\"grey-bg\"></span>\n            </div>\n            <div class=\"col-md-12 col-sm-12 np\">\n              <input type=\"password\" size=\"3\" maxlength=\"3\" class=\"cvv-number\" placeholder=\"XXX\" name=\"cvv\" id=\"cvv\" formControlName=\"cvv\" #cvv (keyup)=\"onChangeCardNumber(cvv)\">\n              <span class=\"cvv-text\">CVV</span>\n            </div>\n          </div>\n        </div>\n        <button id=\"btnSetupCard\" [disabled]=\"!setupPaymentForm.valid\" type=\"submit\" class=\"btn btn-red-outline btn-hover\">\n          <span *ngIf=\"subsStatus != 'cancelled'\">Submit</span>\n          <span *ngIf=\"subsStatus == 'cancelled'\">Make Payment</span>\n        </button>\n        <div *ngIf=\"error\" class=\"alert alert-danger custom-danger\">\n          <p>\n              <span class=\"mat-icon\">\n                  <i class=\"material-icons\">report_problem</i>\n              </span>\n            {{errorMessage}}\n          </p>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<!-- <div class=\"cc-modal-backdrop\"></div> -->\n<!-- End: Modal cc-modal-payment -->\n\n<!-- Start: Modal new-setup-payment -->\n<div id=\"new-setup-payment\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content modal-bg\">\n      <div class=\"modal-header\">\n        <!-- <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <i class=\"material-icons\">close</i>\n        </button> -->\n        <h5 class=\"modal-title\">Welcome to Outgrow</h5>\n      </div>\n         \n      <div class=\"modal-body col-md-12 np text-center\">\n      <div *ngIf=\"errorcard\" class=\"alert alert-danger custom-alert\">\n            {{errorMessage}}\n      </div>\n        <!-- <center><img src=\"assets/images/logoAnim.gif\" alt=\"loading...\" id=\"imgLoad\" *ngIf = \"loading\"></center> -->\n          <h4 class=\"wc-name\" >Hey {{username}} </h4>\n          <img src=\"assets/images/og-symbol.png\">\n          <p class=\"\">\n            <!-- Your outstanding payment left is {{\"$\"+payment_left}}<br/> -->\n            <span *ngIf=\"subsStatus != 'cancelled'\">\n              We're excited to have you on board! To get started, please set up payment below. Your outstanding payment is {{\"$\"+payment_left}}.<br/>If you have any questions, please reach out to {{\"questions@\"+ogExt}}.<br/>Looking forward to working with you!<br/>\n            </span>\n            <span *ngIf=\"subsStatus == 'cancelled'\">\n              Thanks for checking in! Seems like payment has not gone through - this can happen when the card is not setup, when the card expires or when a payment is blocked.<br/>\n              Your outstanding payment is {{\"$\"+payment_left}}. <br/>\n              If you have any questions, please reach out to questions@outgrow.co.\n            </span>\n          </p>\n          <img src=\"assets/images/icon-hand-pay.png\">\n          <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n            <button id=\"cc-modal-payment\" type=\"submit\" *ngIf=\"cardStatus != 'no_card' \" (click)=\"setup()\" class=\"btn btn-red-outline btn-hover\">Update Card</button>\n            <button id=\"cc-modal-payment\" type=\"submit\" *ngIf=\"cardStatus != 'no_card'\" (click)=\"activateNow()\" class=\"btn btn-red-outline btn-hover btnActivateNow\">Make Payment</button>\n            <button id=\"cc-modal-payment\" *ngIf=\"cardStatus == 'no_card'\" type=\"submit\" (click)=\"setup()\" class=\"btn btn-red-outline btn-hover\">Make Payment</button>\n          </div>\n      </div>\n      <!-- <div class=\"modal-footer col-md-12 np\">\n\n      </div> -->\n    </div>\n  </div>\n</div>\n<!-- <div class=\"new-setup-payment-backdrop\"></div> -->\n\n\n<!-- Start: Modal Activate -->\n<div id=\"activateModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content modal-bg\">\n      <div class=\"modal-header\">\n        <!-- <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <i class=\"material-icons\">close</i>\n        </button> -->\n        <h5 class=\"modal-title\">Welcome to Outgrow</h5>\n      </div>\n      <div class=\"modal-body col-md-12 np text-center\">\n        <div *ngIf=\"errorcard\" class=\"alert alert-danger custom-alert\">\n            {{errorMessage}}\n      </div>\n        <!-- <center><img src=\"assets/images/logoAnim.gif\" alt=\"loading...\" id=\"imgLoad\" *ngIf = \"loading\"></center> -->\n          <h4 class=\"wc-name\" >Hey {{username}} </h4>\n          <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n            <button id=\"btnActivateNow\" type=\"button\" (click)=\"activateNow()\" class=\"btn btn-red-outline btn-hover btnActivateNow\">Make Payment</button>\n            <button id=\"cc-modal-payment\" type=\"button\" *ngIf=\"errorcard\" (click)=\"setup()\" class=\"btn btn-red-outline btn-hover\">Update Card</button>\n          </div>\n      </div>\n      <!-- <div class=\"modal-footer col-md-12 np\">\n\n      </div> -->\n    </div>\n  </div>\n</div>\n<!-- <div class=\"new-setup-payment-backdrop\"></div> -->\n<!-- End: Modal Activate -->\n"

/***/ },

/***/ 767:
/***/ function(module, exports) {

module.exports = "<div id=\"premiumModal\" class=\"modal fade two-side\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog model-full\">\n    <div class=\"modal-content modal-bg\">\n      <div class=\"modal-body og-message\">\n        <button type=\"button\" (click)=\"callGA('LATER')\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <i class=\"material-icons\">close</i>\n        </button>\n        <div class=\"col-md-12 np\">\n          <div class=\"modal-left\">\n            <div class=\"text-center table-center\">\n              <!-- <p class=\"font-italic text-grey\">or login with</p> -->\n              <img class=\"modal-logo\" src=\"assets/images/black_g.png\" alt=\"Logo\"><br/>\n              <span class=\"premium-label\">PREMIUM</span>\n              <p>You tried to use a premium paid feature and you will need to upgrade to use it. </p>\n              <a href=\"javascript:void(0);\" [routerLink] = \"['/settings/membership']\" (click)=\"closePremModal()\" class=\"btn btn-red\" id=\"btnUpgradeNow\" type=\"submit\">Upgrade Now</a>\n              <br/><a href=\"\" (click)=\"callGA('LATER')\" data-dismiss=\"modal\">Maybe Later</a>\n            </div>\n          </div>\n          <div class=\"modal-right\">\n            <div class=\"table-center\">\n              <img class=\"\" src=\"assets/images/login-screen1.jpg\" alt=\"img\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer col-md-12 np hide\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 768:
/***/ function(module, exports) {

module.exports = "<!-- Start: Modal Forgot Password -->\n<div id=\"forgot-password\" class=\"forgot-password\">\n\t<div class=\"forgot-password-dialog\">\n\t\t<!-- Modal content-->\n\t\t<div class=\"forgot-password-content modal-bg\">\n\t\t\t<div class=\"forgot-password-body\">\t\n\t\t\t\t<a id=\"menu-close\" href=\"javascript:void(0);\" (click)=\"close()\">\n                    <button type=\"button\" class=\"close btn-close\">\n                    <i class=\"material-icons\">close</i></button>\n                </a>\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 no-padding\">\n\t\t\t\t\t<div class=\"col-md-6 col-sm-12 col-xs-12 no-padding forgot-password-left sahil-material\">\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 no-padding forgot-password-left-inner\">\n\t\t\t\t\t\t\t<div class=\"text-center logo-section\">\t\t\n\t\t\t\t\t\t\t\t<img class=\"forgot-password-logo\" src=\"assets/images/outgrow-logo.png\" alt=\"Logo\">\n\t\t\t\t\t\t\t\t<span class=\"\">Let's Give Your Interactive <br/>Content a New Home</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 no-padding\">\n\t\t\t\t\t\t\t\t<form [formGroup]=\"forgetPasswordForm\" (ngSubmit)=\"forgetPassword()\">\t\n\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\">\n\t\t\t\t\t\t\t            <label class=\"control-label\" for=\"inputEmail\"> Email</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" tabindex=\"1\" id=\"inputEmail\" type=\"email\" name=\"email\" formControlName=\"forgetemail\" (focus)=\"checkEmail()\" />\n\t\t\t\t\t\t          \t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"forgetPasswordForm.controls.forgetemail.touched && !forgetPasswordForm.controls.forgetemail.valid\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"forgetPasswordForm.controls.forgetemail.errors.required\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t                                <i class=\"material-icons\">report_problem</i>\n\t\t\t\t                            </span>\n\t\t\t\t\t\t\t\t\t\t\tEmail is required.\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"forgetPasswordForm.controls.forgetemail.errors.checkmail\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t                                <i class=\"material-icons\">report_problem</i>\n\t\t\t\t                            </span>\n\t\t\t\t\t\t\t\t\t\t\tInvalid Email.\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"forgetPasswordError\" class=\"alert alert-danger custom-alert\">\n                                    <p>\n                                        <span class=\"mat-icon\">\n                                            <i class=\"material-icons\">report_problem</i>\n                                        </span>\n                                        {{forgetPasswordError}}\n                                      <a href=\"javascript:void(0);\" id=\"sendMail\" *ngIf=\"resendEmailShow\" (click)=\"resendEmail()\">Click here to resend verification link</a>\n                                    </p>\n                                \t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"val-success-msg success-message hide\" id=\"success-mailSent\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-success\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">check_circle</i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t{{mailSent}}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"g-recaptcha\" data-sitekey=\"6LeGDQkUAAAAACMYuR5J6q379jbxayE2p1inhun9\" data-callback=\"verifyCallback\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 no-padding text-center\">\n\t\t\t\t\t\t\t\t\t\t<button  type=\"submit\" id=\"btnReset\" [disabled]=\"!forgetPasswordForm.valid || !isCaptcha\" class=\"btn btn-red btn-reset\">Reset Password</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12 no-padding forgot-password-right\">\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 no-padding forgot-password-right-inner\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"login-testimonial\">\n                                <div class=\"testimonial-block\">\n                                    <span>“</span>\n                                </div>\n                               <div class=\"testimonial-content\">\n                                    <span class=\"testi-desc\">Two of our calculators went viral and completely transformed our lead generation strategy in a competitive market.</span>\n                                    <span class=\"testi-client\">Marketing Executive at a Top 10 Hotel Chain</span>\n                                </div>\n                            </div>\n\t\t\t\t\t\t\t<!-- <img class=\"img-margin img-width\" src=\"assets/images/login-screen1.jpg\" alt=\"img\"> -->\n\t\t\t\t\t\t\t<div class=\"img-section\">\n                                <img class=\"img-margin img-width login-img1\" src=\"assets/images/login1.jpg\" alt=\"img\">\n                                <img class=\"img-margin img-width login-img2\" src=\"assets/images/login2.jpg\" alt=\"img\">\n                                <img class=\"img-margin img-width login-img3\" src=\"assets/images/login3.jpg\" alt=\"img\">\n                            </div>\n\t\t\t\t\t\t\t<!-- <div class=\"text-center video-wrapper\">\n                                <img class=\"img-margin img-width\" src=\"assets/images/leadform-videowrapper.png\" alt=\"img\">\n                                <iframe class=\"iframe-1024\" width=\"425\" height=\"236\" src=\"https://www.youtube.com/embed/wFrj5kc1MLs?vq=hd720p&play=1&loop=1&autoplay=1&loop=1&playlist=wFrj5kc1MLs\" frameborder=\"0\" allowfullscreen></iframe>\n                            </div> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\t\n\t\t\t</div>\n\t\t\t<!-- <div class=\"modal-footer\">\n\t\t\t\t\n\t\t\t</div> -->\n\t\t</div>\n\t</div>\n</div>\n<!-- End: Modal Forgot Password -->\n"

/***/ },

/***/ 769:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 np setPassword\">\n        <div class=\"col-md-4 col-sm-3 col-xs-3 np\">\n        </div>\n        <form [formGroup]=\"setPasswordForm\" (ngSubmit)=\"setPassword()\">\n            <div class=\"col-md-4 col-sm-6 col-xs-12\">\n                <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12 np sahil-material\">\n                    <h4 class=\"setNewPassword\">Set New Password</h4>\n                        <div class=\"form-group label-floating\">\n                            <label class=\"control-label\" for=\"inputPassword\">New Password</label>\n                            <input id=\"newPassword\" type=\"password\"  class=\"form-control\" formControlName=\"newPassword\" required (focus)=\"errorHide()\" >\n                        </div>\n                        <div *ngIf=\"setPasswordForm.controls.newPassword.touched && !setPasswordForm.controls.newPassword.valid\" class=\"alert alert-danger\">\n                            <p *ngIf=\"setPasswordForm.controls.newPassword.errors.required\">\n                                <span class=\"mat-icon\">\n                                    <i  class=\"material-icons\">report_problem</i>\n                                </span>\n                                New Password is required.\n                            </p>\n                            <p *ngIf=\"setPasswordForm.controls.newPassword.errors.minlength\">\n                                <span class=\"mat-icon\">\n                                    <i  class=\"material-icons\">report_problem</i>\n                                </span>\n                                Min 8 character is required.\n                            </p>\n                        </div>\n                        <div class=\"form-group label-floating\">\n                            <label class=\"control-label\" for=\"inputPassword\">Confirm Password</label>\n                            <input id=\"confirmPassword\" type=\"password\"  class=\"form-control\" formControlName=\"confirmPassword\" required (focus)=\"errorHide()\" >\n                        </div>\n                        <div *ngIf=\"setPasswordForm.controls.confirmPassword.touched && !setPasswordForm.controls.confirmPassword.valid\" class=\"alert alert-danger\">\n                            <p *ngIf=\"setPasswordForm.controls.confirmPassword.errors.required\">\n                                Confirm Password is required.\n                                <span class=\"mat-icon\">\n                                    <i  class=\"material-icons\">report_problem</i>\n                                </span>\n                            </p>\n                            <p *ngIf=\"setPasswordForm.controls.confirmPassword.errors.minlength\">\n                                Min 8 character is required.\n                                <span class=\"mat-icon\">\n                                    <i  class=\"material-icons\">report_problem</i>\n                                </span>\n                            </p>\n                        </div>\n                        <div *ngIf=\"error\" class=\"alert alert-danger\" >\n                            <p>{{error}}</p>\n                        </div>\n                        <div *ngIf=\"message\" class=\"alert alert-danger\" >\n                            <p>{{message}}</p>\n                        </div>\n                    </div>   \n                    <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                        <button [disabled]=\"!setPasswordForm.valid\"  type=\"submit\" class=\"btn btn-red-outline btn-hover\" id='btnSetNewPassword'>Update</button>\n                    </div>\n                </div> \n            </div>\n        </form>  \n</div>\n"

/***/ },

/***/ 770:
/***/ function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:70px\">\n        <div class=\"text-center\">\n                <div id= \"approval-error\" class=\"hide\"> \n                        <h2> {{errorMsg}}</h2>\n                        <button  type=\"submit\" class=\"btn btn-blue btn-red\" (click)=\"home()\">Go to Home</button>\n                </div>\n        </div>\n\n</div>"

/***/ },

/***/ 771:
/***/ function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:70px\">\n        <div class=\"text-center\">\n                <div *ngIf=\"error\"> \n                        <h2> {{errorMsg}}</h2>\n                        <button  type=\"submit\" class=\"btn btn-blue btn-red\" (click)=\"home()\">Go to Home</button>\n                </div>\n        </div>\n        <div id=\"#msgForApprove\" class=\"hide\">\n         <p>User has been approved thank you </p>\n        </div>\n</div>\n"

/***/ },

/***/ 772:
/***/ function(module, exports) {

module.exports = "<nav *ngIf=\"!loggedIn.isLoggedIn\">\n  <a *ngIf=\"showLogin\" data-target=\"#login\" data-toggle=\"modal\" href=\"#\">LOGIN</a>\n  <a *ngIf=\"!showLogin\" [routerLink]=\"['/']\">HOME</a>\n  <!--<a [routerLink]=\"['/dashboard']\">DASHBOARD</a>\n  <a [routerLink]=\"['/account']\">ACCOUNT</a>-->\n</nav>\n\n<nav *ngIf=\"loggedIn.isLoggedIn\">\n  <a href=\"javascript:void(0)\">{{username}}</a>\n  <a [routerLink]=\"['/dashboard']\">DASHBOARD</a>\n  <!--<a [routerLink]=\"['/account']\">ACCOUNT</a>-->\n  <!--<a [routerLink]=\"['/team-settings']\">TEAM SETTINGS</a>    -->\n</nav>\n"

/***/ },

/***/ 773:
/***/ function(module, exports) {

module.exports = "<div>\n  <nav *ngIf=\"!loggedIn.isLoggedIn\">\n    <a *ngIf=\"!showLogin\" data-target=\"#login\" data-toggle=\"modal\" href=\"#\">LOGIN</a>\n    <a *ngIf=\"!showLogin\" [routerLink]=\"['/']\">HOME</a>\n    <!--<a [routerLink]=\"['/dashboard']\">DASHBOARD</a>\n    <a [routerLink]=\"['/account']\">ACCOUNT</a>-->\n  </nav>\n\n  <nav *ngIf=\"loggedIn.isLoggedIn\">\n    <a href=\"javascript:void(0)\">{{username}}</a>\n    <a [routerLink]=\"['/dashboard']\">DASHBOARD</a>\n    <a [routerLink]=\"['/settings']\">SETTINGS</a>\n    <!--<a [routerLink]=\"['/account']\">ACCOUNT</a>-->\n    <!--<a [routerLink]=\"['/team-settings']\">TEAM SETTINGS</a>-->\n  </nav>\n</div>\n"

/***/ },

/***/ 774:
/***/ function(module, exports) {

module.exports = "<div id=\"leads\" class=\"login first-signUp\">\n    <div class=\"row\">\n        <div class=\"login-dialog\">\n            <!-- Modal content-->\n            <div class=\"login-content modal-bg\">\n                <div class=\"login-body\">\n                    <a href=\"javascript:void(0);\" id=\"menu-close\" (click)=\"close()\">\n                        <button class=\"close btn-close\" type=\"button\">\n                        <i class=\"material-icons\">close</i></button>\n                    </a>\n                    <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                        <div class=\"col-md-6 col-sm-6 col-xs-12 np login-left\">\n                            <div class=\"col-md-12 col-sm-12 col-xs-12 np login-left-inner\">\n                                <div class=\"text-center logo-section\">\n                                    <!-- <p class=\"font-italic text-grey\">or login with</p> -->\n                                    <img class=\"login-logo\" src=\"assets/images/outgrow-logo.png\" alt=\"Logo\">\n                                    <span class=\"\">Let's Give Your Interactive <br/>Content a New Home</span>\n                                </div>\n                                <div class=\"col-md-12 col-sm-12 col-xs-12 np sahil-material\">\n                                    <form [formGroup]=\"signupForm\" (ngSubmit)=\"saveLeads()\" class=\"col-md-12 col-sm-12 col-xs-12 np sahil-material\">\n                                        <!-- <h3 class=\"col-md-12 col-sm-12 col-xs-12 np\">Sign Up</h3> -->\n                                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                                            <div class=\"form-group label-floating\">\n                                                <label for=\"email\" class=\"control-label\">Your Work Email</label>\n                                                <input id=\"email\" type=\"text\"  class=\"form-control\" name=\"email\" formControlName=\"email\" (focus)=\"checkEmail()\" (blur)=\"checkEmail()\" tabindex=\"1\"/>\n                                            </div>\n                                            <div *ngIf=\"signupForm.controls.email.touched && !signupForm.controls.email.valid\" class=\"alert alert-danger\">\n                                                <p *ngIf=\"signupForm.controls.email.errors.required\">\n                                                    <span class=\"mat-icon\">\n                                                        <i class=\"material-icons\">report_problem</i>\n                                                    </span>\n                                                    Email is required.\n                                                </p>\n                                                <p *ngIf=\"signupForm.controls.email.errors.minlength\">\n                                                    <span class=\"mat-icon\">\n                                                        <i class=\"material-icons\">report_problem</i>\n                                                    </span>\n                                                    Min 3 character is required.\n                                                </p>\n                                                <p *ngIf=\"signupForm.controls.email.errors.checkmail\">\n                                                    <span class=\"mat-icon\">\n                                                        <i class=\"material-icons\">report_problem</i>\n                                                    </span>\n                                                    Invalid Email.\n                                                </p>\n                                            </div>\n                                            <div *ngIf=\"error\" class=\"alert alert-danger\">\n                                                <p class=\"have-an-acc col-md-12\">{{error}}\n                                                    <a href=\"javascript:void(0)\" *ngIf=\"isLeadExist\" class=\"text-red text-red-link\" (click)=\"login()\"> Login</a>\n                                                    {{resetMsg}}\n                                                    <a href=\"javascript:void(0)\" *ngIf=\"isLeadExist\" class=\"text-red text-red-link\" (click)=\"reset()\" >Reset Password</a>\n                                                </p>\n                                            </div>\n                                            <div class=\"col-md-12 col-sm-12 col-xs-12 np text-center btn-lead-main\">\n                                                <button (click)=\"callGA()\" type=\"submit\" id=\"btnSignUp\" [disabled]=\"!signupForm.valid\" class=\"btn btn-red btn-createCalc\">Get Started &nbsp;<img src=\"assets/images/smile.png\" class=\"smiley\"></button>\n                                            </div>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6 col-sm-6 col-xs-12 np login-right\">\n                            <div class=\"col-md-12 col-sm-12 col-xs-12 np login-right-inner\">\n                                <div class=\"login-testimonial\">\n                                    <div class=\"testimonial-block\">\n                                        <span>“</span>\n                                    </div>\n                                    <div class=\"testimonial-content\">\n                                    <span class=\"testi-desc\">Two of our calculators went viral and completely transformed our lead generation strategy in a competitive market.</span>\n                                    <span class=\"testi-client\">Marketing Executive at a Top 10 Hotel Chain</span>\n                                </div>\n                                </div>\n                                <div class=\"img-section\">\n                                    <img class=\"img-margin img-width login-img1 animated bounceInLeft go\" src=\"assets/images/login1.jpg\" alt=\"img\">\n                                    <img class=\"img-margin img-width login-img2 animated bounceInRight go\" src=\"assets/images/login2.jpg\" alt=\"img\">\n                                    <img class=\"img-margin img-width login-img3 animated bounceInUp go\" src=\"assets/images/login3.jpg\" alt=\"img\">\n                                </div>\n                                <!-- <div class=\"text-center video-wrapper\">\n                                    <img class=\"img-margin img-width\" src=\"assets/images/leadform-videowrapper.png\" alt=\"img\">\n                                    <iframe class=\"iframe-1024\" width=\"425\" height=\"236\" src=\"https://www.youtube.com/embed/wFrj5kc1MLs?vq=hd720p&play=1&loop=1&autoplay=1&loop=1&playlist=wFrj5kc1MLs\" frameborder=\"0\" allowfullscreen></iframe>\n                                </div> -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- <div class=\"modal-footer\">\n\n                </div> -->\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ },

/***/ 775:
/***/ function(module, exports) {

module.exports = "<div id=\"signUp\" class=\"signUp\">\n\t<div class=\"signUp-dialog\">\n\t\t<!-- Modal content-->\n\t\t<div class=\"signUp-content modal-bg\">\n\t\t\t<div class=\"signUp-body\">\n\t\t\t\t<a id=\"menu-close\" href=\"javascript:void(0);\" (click)=\"close()\">\n                    <button type=\"button\" class=\"close btn-close\">\n                    <i class=\"material-icons\">close</i></button>\n                </a>\n\t\t\t\t<div class=\"col-md-12 np\">\n\t\t\t\t\t<div class=\"col-md-6 np signUp-left sahil-material\">\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np signUp-left-inner\">\n\t\t\t\t\t\t\t<div class=\"text-center logo-section\">\n\t\t\t\t\t\t\t\t<!-- <p class=\"font-italic text-grey\">or login with</p> -->\n\t\t\t\t\t\t\t\t<img class=\"signUp-logo\" src=\"assets/images/outgrow-logo.png\" alt=\"Logo\">\n\t\t\t\t\t\t\t\t<span class=\"\">Let's Give Your Interactive <br/>Content a New Home</span>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"emailError\" class=\"alert alert-danger custom-alert\" >\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">report_problem</i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t{{emailError}}\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 np slide1\">\n\t\t\t\t\t\t\t\t<form [formGroup]=\"signupFormdetail\"  (ngSubmit)=\"userSignUp()\" >\n\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\" [class.is-empty] = \"model.name ==''\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\" for=\"name\">Name</label>\n\t\t\t\t\t\t\t\t\t\t<input  id=\"name\"  type=\"text\" class=\"form-control\" formControlName=\"name\" [(ngModel)]=\"model.name\" tabindex=\"1\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"signupFormdetail .controls.name.touched && !signupFormdetail.controls.name.valid || isSubmit && !signupFormdetail.controls.name.valid\"  class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"signupFormdetail.controls.name.errors.required && isSubmit\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t                                <i class=\"material-icons\">report_problem</i>\n\t\t\t\t                            </span>\n\t\t\t\t                            Username is required.\n\t\t\t                            </p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"signupFormdetail.controls.name.errors.minlength\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t                                            <i class=\"material-icons\">report_problem</i>\n\t                                        </span>\n\t\t\t\t\t\t\t\t\t\t\tMin 3 character is required.\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\" [class.is-empty] = \"model.emails.email ==''\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\" for=\"signup_email\">Company Email</label>\n\t\t\t\t\t\t\t\t\t\t<input id=\"signup_email\" tabindex=\"2\" type=\"text\" class=\"form-control\" formControlName=\"email\"  [(ngModel)]=\"model.emails.email\" (focus)=\"checkCompanyEmail()\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"signupFormdetail.controls.email.touched && !signupFormdetail.controls.email.valid || isSubmit && !signupFormdetail.controls.email.valid\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"signupFormdetail.controls.email.errors.required && isSubmit\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t                                <i class=\"material-icons\">report_problem</i>\n\t\t\t\t                            </span>\n\t\t\t\t\t\t\t\t\t\t\tEmail is required.\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"signupFormdetail.controls.email.errors.minlength\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t                                            <i class=\"material-icons\">report_problem</i>\n\t                                        </span>\n\t\t\t\t\t\t\t\t\t\t\tMin 3 character is required.\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"signupFormdetail.controls.email.errors.checkmail\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t                                <i class=\"material-icons\">report_problem</i>\n\t\t\t\t                            </span>\n\t\t\t\t\t\t\t\t\t\t\tInvalid Email.\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\" for=\"password\">Password <span class=\"small-text\">(Min. 8 characters)</span></label>\n\t\t\t\t\t\t\t\t\t\t<input  id=\"password\" type=\"password\"  class=\"form-control\" formControlName=\"password\" [(ngModel)]=\"model.password\" tabindex=\"3\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" id=\"btnShowPassword\" class=\"forgot-btn pswrd-show\" (click)=\"showPassword()\"><i class=\"material-icons\">visibility_off</i></a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" id=\"btnHidePassword\" class=\"forgot-btn pswrd-show hide\" (click)=\"hidePassword()\"><i class=\"material-icons\">visibility</i></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"signupFormdetail.controls.password.dirty && !signupFormdetail.controls.password.valid || isSubmit && !signupFormdetail.controls.password.valid\"  class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"signupFormdetail.controls.password.errors.required && isSubmit\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t                                <i class=\"material-icons\">report_problem</i>\n\t\t\t\t                            </span>\n\t\t\t\t\t\t\t\t\t\t\tPassword is required.\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"signupFormdetail.controls.password.errors.minlength\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t                                            <i class=\"material-icons\">report_problem</i>\n\t                                        </span>\n\t\t\t\t\t\t\t\t\t\t\tMin 8 character is required.\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating\" [class.is-empty] = \"model.companyname ==''\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\" for=\"companyName\">Company Name <span class=\"small-text\">(Min 4 characters)</span></label>\n\t\t\t\t\t\t\t\t\t\t<input  id=\"companyname\" tabindex=\"4\" type=\"text\"  class=\"form-control\" formControlName=\"companyname\" [(ngModel)]=\"model.companyname\" (focus)=\"checkCompanyEmail()\"  />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"signupFormdetail.controls.companyname.touched  && !signupFormdetail.controls.companyname.valid || isSubmit && !signupFormdetail.controls.companyname.valid\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"signupFormdetail.controls.companyname.errors.required && isSubmit\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t                                <i class=\"material-icons\">report_problem</i>\n\t\t\t\t                            </span>\n\t\t\t\t\t\t\t\t\t\t\tCompany Name is required.\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"signupFormdetail.controls.companyname.errors.minlength\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t                                            <i class=\"material-icons\">report_problem</i>\n\t                                        </span>\n\t\t\t\t\t\t\t\t\t\t\tMin 4 character is required.\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"isCompanyExist\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t<p>{{isCompanyExist}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating signup-companyUrl\" [class.is-empty] = \"model.domain ==''\" id=\"url\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"control-label label-url\" for=\"domain\">Your Outgrow URL <span class=\"small-text\">(Min 3 characters)</span></label>\n\t\t\t\t\t\t\t\t\t\t<input id=\"domain\" type=\"text\" tabindex=\"5\" class=\"form-control\" formControlName=\"domain\"  [(ngModel)]=\"model.domain\" (focus)=\"checkCompanyEmail()\" placeholder=\"Url\" />\n\t\t\t\t\t\t\t\t\t\t<label class=\"in-active\">{{domainExtension}}</label>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"signupFormdetail.controls.domain.touched  && !signupFormdetail.controls.domain.valid || isSubmit && !signupFormdetail.controls.domain.valid\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"signupFormdetail.controls.domain.errors.required && isSubmit\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t                                <i class=\"material-icons\">report_problem</i>\n\t\t\t\t                            </span>\n\t\t\t\t\t\t\t\t\t\t\tDomain is required.\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"signupFormdetail.controls.domain.errors.minlength\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t                                            <i class=\"material-icons\">report_problem</i>\n\t                                        </span>\n\t\t\t\t\t\t\t\t\t\t\tMin 3 character is required.\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"signupFormdetail.controls.domain.errors.pattern\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t                                <i class=\"material-icons\">report_problem</i>\n\t\t\t\t                            </span>\n\t\t\t\t\t\t\t\t\t\t\tInvalid Url\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"isDomainExist\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t<p>{{isDomainExist}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np text-center\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" id=\"btnSaveDetail\" class=\"btn btn-blue btn-red btn-signUp\"  >Sign Up</button>\n\t\t\t\t\t\t\t\t\t\t<p class=\"have-an-acc\">Already signed up?\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"text-red\" (click)=\"login()\" tabindex=\"6\"> Login</a> instead\n\t\t\t\t\t\t\t\t\t\t\t<!--<a href=\"javascript:void(0)\" type=\"submit\" class=\"text-red\" (click)=\"login()\" >Log in</a>-->\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-md-12 np slide2 hide\">\n\t\t\t\t\t\t\t\t<div class=\"slide2-content\">\n\t\t\t\t\t\t\t\t\t<form  [formGroup]=\"callSchedule\"  (ngSubmit)=\"saveSchedule()\" >\n\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating monthly-traffic is-empty\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"control-label \" for=\"inputMonthlyTraffic\">Monthly traffic</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"inputMonthlyTraffic\" type=\"text\" formControlName=\"traffic\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"callSchedule.controls.traffic.touched  && !callSchedule.controls.traffic.valid\" class=\"col-md-12 alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"callSchedule.controls.traffic.errors.maxlength\">Max 8 digits are allowed.</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"callSchedule.controls.traffic.errors.pattern\">Traffic Should be in number</p>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"form-group label-floating contact-num is-empty\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\" for=\"inputLeads\">Avg Leads generated every month</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"inputLeads\" type=\"tel\" formControlName=\"leads\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"callSchedule.controls.leads.touched  && !callSchedule.controls.leads.valid\" class=\"col-md-12 alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"callSchedule.controls.leads.errors.maxlength\">Max 8 digits are allowed.</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"callSchedule.controls.leads.errors.pattern\">Leads Should be in number</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group toggle-switch\">\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\tAre you an agency ? &nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"show-check\" checked formControlName=\"companyType\" >\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"lever\"></span>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t<button id=\"btnLeads\" [disabled]=\"!signupFormdetail.valid\" type=\"submit\" class=\"btn btn-blue btn-red\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<p class=\"skip-step\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"text-red\" (click)=\"skip()\">Skip this step</a>\n\t\t\t\t\t\t\t\t\t\t\t<!--<a href=\"#\" class=\"text-red\" data-next=\"#skip\" data-dismiss=\"modal\">Skip this step</a>-->\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 np signUp-right\">\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np signUp-right-inner\">\n\t\t\t\t\t\t\t<div class=\"login-testimonial\">\n                                <div class=\"testimonial-block\">\n                                    <span>“</span>\n                                </div>\n                                <div class=\"testimonial-content\">\n                                    <span class=\"testi-desc\">Two of our calculators went viral and completely transformed our lead generation strategy.</span>\n                                    <span class=\"testi-client\">Marketing Head @ a Top 10 Hotel Chain</span>\n                                </div>\n                            </div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 np slide1\">\n\t\t\t\t\t\t\t\t<div class=\"img-section\">\n                                    <img class=\"img-margin img-width login-img1\" src=\"assets/images/login1.jpg\" alt=\"img\">\n                                    <img class=\"img-margin img-width login-img2\" src=\"assets/images/login2.jpg\" alt=\"img\">\n                                    <img class=\"img-margin img-width login-img3\" src=\"assets/images/login3.jpg\" alt=\"img\">\n                                </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <div class=\"text-center video-wrapper\">\n                                <img class=\"img-margin img-width\" src=\"assets/images/leadform-videowrapper.png\" alt=\"img\">\n                                <iframe class=\"iframe-1024\" width=\"425\" height=\"236\" src=\"https://www.youtube.com/embed/wFrj5kc1MLs?vq=hd720p&play=1&loop=1&autoplay=1&loop=1&playlist=wFrj5kc1MLs\" frameborder=\"0\" allowfullscreen></iframe>\n                            </div> -->\n\t\t\t\t\t\t\t<div class=\"col-md-12 np slide2 hide\">\n\t\t\t\t\t\t\t\t<img class=\"img-margin img-width slideimg2\" src=\"assets/images/signup-slideimg2.png\" alt=\"img\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- <div class=\"modal-footer modal-bg2\">\n\n\t\t\t</div> -->\n\t\t</div>\n\t</div>\n</div>\n\n<!-- Start: Modal Forgot Password -->\n<div id=\"forgot-password\" class=\"forgot-password hide\">\n\t<div class=\"forgot-password-dialog\">\n\t\t<!-- Modal content-->\n\t\t<div class=\"forgot-password-content modal-bg\">\n\t\t\t<div class=\"forgot-password-body\">\n\t\t\t\t<!-- <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t<i class=\"material-icons\">close</i></button> -->\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t\t\t\t\t<div class=\"col-md-6 col-sm-12 col-xs-12 np forgot-password-left sahil-material\">\n\t\t\t\t\t\t<div class=\"text-center logo-section\">\n\t\t\t\t\t\t\t<img class=\"forgot-password-logo\" src=\"assets/images/outgrow-logo.png\" alt=\"Logo\">\n\t\t\t\t\t\t\t<span class=\"\">Let's Give Your Interactive Content a New Home</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t\t\t\t\t\t<form [formGroup]=\"forgetPasswordForm\" (ngSubmit)=\"forgetPassword()\">\n\t\t\t\t\t\t\t<div class=\"form-group label-floating is-empty\">\n\t\t\t\t\t            <label class=\"control-label\" for=\"inputEmail\"> Email</label>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"inputEmail\" type=\"email\" name=\"email\" formControlName=\"forgetemail\" (focus)=\"checkEmail()\"  />\n\t\t\t\t          \t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"forgetPasswordForm.controls.forgetemail.touched && !forgetPasswordForm.controls.forgetemail.valid\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"forgetPasswordForm.controls.forgetemail.errors.required\">Email is required.</p>\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"forgetPasswordForm.controls.forgetemail.errors.minlength\">Min 3 character is required.</p>\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"forgetPasswordForm.controls.forgetemail.errors.checkmail\">Invalid Email.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"forgetPasswordError\" class=\"alert alert-danger\" >\n\t\t\t\t\t\t\t\t<p>{{forgetPasswordError}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"val-success-msg success-message hide\" id=\"success-mailSent\">\n\t\t\t\t\t\t\t\t<span class=\"icon-success\">\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">check_circle</i>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t{{mailSent}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np text-center\">\n\t\t\t\t\t\t\t\t<button type=\"submit\" id=\"btnReset\" [disabled]=\"!forgetPasswordForm.valid\" class=\"btn btn-red btn-reset\">Reset Password</button>\n\t\t\t\t\t\t\t\t<p class=\"or-login\">\n\t\t\t\t\t\t\t\t\t<a href=\"login.html\" class=\"text-red\"> Login</a>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12 np forgot-password-right\">\n\t\t\t\t\t\t<div class=\"col-md-12 np\">\n\t\t\t\t\t\t\t<img class=\"img-margin img-width\" src=\"assets/images/login-img1.png\" alt=\"img\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- <div class=\"modal-footer\">\n\n\t\t\t</div> -->\n\t\t</div>\n\t</div>\n</div>\n<!-- End: Modal Forgot Password -->\n"

/***/ },

/***/ 776:
/***/ function(module, exports) {

module.exports = "<header id=\"new-header\" class=\"\" *ngIf=\"page != 'builder'\">\n    <nav class=\"navbar navbar-default navbar-fixed-top main-logo company-nav\" [class.company-nav]=\"!loggedIn.isLoggedIn\" id=\"nav-cookies-div\">\n        <div *ngIf=\"!isEmailVerified\" class=\"cookies-header\">\n\t\t\t<div class=\"col-md-12 np\">\n\t\t\t\t<i class=\"material-icons\">settings</i>\n                    <span>\n                        Your email ID is not verified yet. Please click on the verification link sent to your email or\n                        &nbsp;<a href=\"javascript:void();\" (click)=\"resendEmail();callGA();\">click here</a> to receive a new verification link.\n                    </span>\n\t\t\t\t<button type=\"button\" class=\"close btn-close pull-right\" (click)=\"close()\">\n                    <i class=\"material-icons\">clear</i>\n                </button>\n\t\t\t</div>\n        </div>\n        <div class=\"ie-browser-header\" *ngIf=\"IEbrowser\">\n            <div class=\"col-md-12\">\n                <i class=\"material-icons\">desktop_mac</i>\n                <a href=\"javascript:void();\">\n                    Please log in using a modern browser for better experience\n                </a>\n                <button class=\"close btn-close pull-right\" type=\"button\">\n                    <i class=\"material-icons\">clear</i>\n                </button>\n            </div>\n        </div>\n        <div class=\"container-fluid nav-padding\">\n            <div class=\"navbar-header\">\n                <a *ngIf=\"!isSubDomainUrl || loggedIn.isLoggedIn\" [routerLink]=\"['/dashboard']\" class=\"navbar-brand navbar-logopadding\">\n                    <img src=\"assets/images/outgrow-logo.png\" />\n                </a>\n                <a href=\"#\" *ngIf=\"isSubDomainUrl && !loggedIn.isLoggedIn\" class=\"navbar-brand navbar-logopadding\">\n                    <div class=\"company_name_avatar-circle\">\n                        {{companyInitial}}\n                    </div>\n                    <div class=\"company_name_span ellipsis\">{{companyName}}</div>\n                </a>\n            </div>\n            <div class=\"navbar-collapse collapse\" id=\"navbar\">\n                <div class=\"navbar-left col-md-7 np\">\n                    <ul *ngIf=\"loggedIn.isLoggedIn\">\n                        <li *ngIf=\"showDashboardLink\">\n                            <a href=\"\" class=\"hvr-underline-from-left\"\n                                [routerLinkActive]=\"['active']\"\n                                [routerLink]=\"['/dashboard']\"\n                                >\n                                <i class=\"material-icons\">home</i> &nbsp;Dashboard\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void();\" [routerLink]=\"['/analytics']\" class=\"hvr-underline-from-left\" (click) = \"analyticsClick($event)\" [routerLinkActive]=\"['active']\">\n                                <i class=\"material-icons\">equalizer</i> &nbsp;Analytics\n                            </a>\n                        </li>\n\n                        <!-- <li>\n                            <a href=\"\" class=\"hvr-underline-from-left\">\n                                <i class=\"material-icons\">lightbulb_outline</i> &nbsp;How do i\n                            </a>\n                        </li> -->\n                    </ul>\n                </div>\n                <div class=\"navbar-right\">\n                    <div class=\"col-xs-12 navbar-right-block\">\n                        <!-- <a href=\"\" class=\"navbar-name\">\n                                <i class=\"material-icons\">account_box</i>\n                                <span class=\"ellipsis\"> &nbsp;Pratham</span>\n                            </a> -->\n                        <!-- Start: header name-dropdown -->\n                        <div class=\"btn-group name-dropdown-wrapper name-dd-minh\" *ngIf=\"!loggedIn.isLoggedIn && !isSubDomainUrl\">\n                            <a [routerLink]=\"['/login']\" class=\"\" >\n                              <button type=\"button\" class=\"btn btn-default dropdown-toggle\">\n                                  <i class=\"material-icons\">account_box</i>\n                                  <span class=\"ellipsis name-title\"> &nbsp;Login</span>\n                              </button>\n                            </a>\n                        </div>\n                        <div class=\"btn-group name-dropdown-wrapper name-dd-minh\" *ngIf=\"loggedIn.isLoggedIn\">\n                            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"material-icons\">account_box</i>\n                                <span class=\"ellipsis name-title\"> &nbsp;{{name}}</span>\n                            </button>\n                            <ul class=\"dropdown-menu\">\n                                <div class=\"company-list\">\n                                    <div class=\"company-list-inner\"  [class.slimscroll] = \"mycompanyLength> 3\">\n                                        <li class=\"active\" *ngFor=\"let company of myCompanies\">\n                                            <a href=\"//{{company.sub_domain}}{{subDomainExt}}/dashboard\" class=\"hvr-sweep-to-right\">\n                                                <span class=\"company-list-title ellipsis\">{{ company.name}}</span>\n                                                <span class=\"company-selected\" *ngIf=\"company.sub_domain == co\"><i class=\"material-icons\">done</i></span>\n                                            </a>\n                                        </li>\n                                    </div>\n                                    <hr class=\"name-dropdown-border\">\n                                </div>\n                                <div class=\"name-list\">\n                                    <!-- <li>\n                                        <a href=\"#\" class=\"hvr-sweep-to-right\">\n                                            <span class=\"name-list-icon\"><i class=\"material-icons\">person</i></span>\n                                            <span class=\"name-list-title\">My Profile</span>\n                                        </a>\n                                    </li> -->\n                                    <li>\n                                        <a *ngIf=\"!is_subcripion_cancelled\"  class=\"hvr-sweep-to-right\" [routerLink]=\"['/settings']\">\n                                            <span class=\"name-list-icon\"><i class=\"material-icons\">settings</i></span>\n                                            <span class=\"name-list-title\">Settings</span>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a class=\"hvr-sweep-to-right\" (click)=\"onLogout()\" href=\"javascript:void(0)\">\n                                            <span class=\"name-list-icon\"><i class=\"material-icons\">power_settings_new</i></span>\n                                            <span class=\"name-list-title\">Logout</span>\n                                        </a>\n                                    </li>\n                                </div>\n                            </ul>\n                        </div>\n                        <!-- End: header name-dropdown -->\n                        <!-- Start: Help dropdown -->\n                         <!--<div class=\"btn-group help-dropdown-wrapper\">\n                            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"material-icons\">help_outline</i>\n                            </button>\n                        </div> -->\n                        <!-- End: Help dropdown -->\n                        <!-- Start: help icon -->\n                            <!--<span *ngIf=\"page != 'dashboard' && page != 'analytics' && page != 'settings' && page != 'templates'\"\n                                  class=\"icon-help popover-wrapper\" data-toggle=\"modal\" data-target=\"#video-modal\">\n                              <i class=\"material-icons\">help_outline</i>\n                              <div class=\"popover-block\">Help</div>\n                            </span>-->\n                        <!-- End: help icon -->\n                        <a href=\"http://support.outgrow.co\" target=\"_blank\" class=\"support_outer\">\n                            <i class=\"material-icons support_icon\">help_outline</i>\n\t\t\t\t\t  \t</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </nav>\n</header>\n\n<div class=\"btn-group name-dropdown-wrapper name-dd-minh\" *ngIf=\"page == 'builder'\">\n    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <i class=\"material-icons\">account_box</i>\n        <span class=\"ellipsis name-title\"> &nbsp;{{name}}</span>\n    </button>\n    <ul class=\"dropdown-menu builder-dropdown-menu \">\n        <div class=\"company-list\">\n            <div class=\"company-list-inner\" [class.slimscroll] = \"mycompanyLength> 3\">\n                <li class=\"active\" *ngFor=\"let company of myCompanies\">\n\n                    <a href=\"//{{company.sub_domain}}{{subDomainExt}}/dashboard\" class=\"hvr-sweep-to-right\">\n                        <span class=\"company-list-title ellipsis\">{{ company.name}}</span>\n                        <span class=\"company-selected\" *ngIf=\"company.sub_domain == co\"><i class=\"material-icons\">done</i></span>\n                    </a>\n                </li>\n            </div>\n            <hr class=\"name-dropdown-border\">\n        </div>\n        <div class=\"name-list\">\n            <!-- <li>\n                <a href=\"#\" class=\"hvr-sweep-to-right\">\n                    <span class=\"name-list-icon\"><i class=\"material-icons\">person</i></span>\n                    <span class=\"name-list-title\">My Profile</span>\n                </a>\n            </li> -->\n            <li>\n                <a class=\"hvr-sweep-to-right\" [routerLink]=\"['/settings']\">\n                    <span class=\"name-list-icon\"><i class=\"material-icons\">settings</i></span>\n                    <span class=\"name-list-title\">Settings</span>\n                </a>\n            </li>\n            <li>\n                <a class=\"hvr-sweep-to-right\" (click)=\"onLogout()\" href=\"javascript:void(0)\">\n                    <span class=\"name-list-icon\"><i class=\"material-icons\">power_settings_new</i></span>\n                    <span class=\"name-list-title\">Logout</span>\n                </a>\n            </li>\n        </div>\n    </ul>\n</div>\n<!-- Start: Responsive header -->\n<header id=\"responsive-header\" class=\"\" *ngIf=\"page != 'builder' && loggedIn.isLoggedIn\">\n    <nav class=\"navbar navbar-default navbar-fixed-top white-logo\">\n      <div class=\"container-fluid nav-padding\">\n          <div class=\"col-xs-2 np\"></div>\n          <div class=\"navbar-header col-xs-8 np\">\n              <!-- <a href=\"#\" class=\"navbar-brand\">\n                  <img src=\"assets/images/headerLogo-white.png\" class=\"\" />\n              </a> -->\n              <h4 class=\"col-xs-12 np ellipsis title\">{{respTitle}}</h4>\n          </div>\n          <div class=\"mobile-menu col-xs-2 np\">\n              <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  <i class=\"material-icons\">menu</i>\n              </button>\n              <ul class=\"dropdown-menu\">\n                  <div class=\"user-name user-outr\" *ngIf=\"loggedIn.isLoggedIn\">\n                      <li class=\"ellipsis\">\n                          <!-- <a href=\"javascript:void(0);\"><img src=\"assets/images/user1.png\"> </a> -->\n                          <span>{{name}}</span>\n                      </li>\n                      <hr class=\"name-dropdown-border\">\n                  </div>\n                  <div class=\"name-list header-links\">\n                      <li>\n                          <a [routerLink]=\"['/dashboard']\" [routerLinkActive]=\"['active']\" (click)=\"header('Dashboard')\">\n                              <span class=\"name-list-icon\"><i class=\"material-icons\">home</i></span>\n                              <span class=\"name-list-title\">Dashboard</span>\n                          </a>\n                      </li>\n                      <li>\n                          <a href=\"javascript:void();\" [routerLink]=\"['/analytics']\" class=\"hvr-underline-from-left\" (click) = \"analyticsClick($event)\" [routerLinkActive]=\"['active']\">\n                          <!-- <a class=\"hvr-underline-from-left\" [routerLinkActive]=\"['active']\"> -->\n                              <span class=\"name-list-icon\"><i class=\"material-icons\">equalizer</i></span>\n                              <span class=\"name-list-title\">Analytics</span>\n                          </a>\n                      </li>\n                      <!-- <li>\n                          <a href=\"#\">\n                              <span class=\"name-list-icon\"><i class=\"material-icons\">lightbulb_outline</i></span>\n                              <span class=\"name-list-title\">How Do I</span>\n                          </a>\n                      </li> -->\n                      <hr class=\"name-dropdown-border\">\n                  </div>\n                  <div class=\"company-list\">\n                      <li *ngFor=\"let company of myCompanies\" [class.active]=\"company.sub_domain == co\">\n                          <a href=\"//{{company.sub_domain}}{{subDomainExt}}/dashboard\">\n                              <span class=\"company-selected\"><i class=\"material-icons\" *ngIf=\"company.sub_domain == co\">done</i></span>\n                              <span class=\"company-list-title\">{{company.name}}</span>\n                          </a>\n                      </li>\n                  </div>\n                  <div class=\"name-list setting-logout-links\">\n                      <li>\n                          <a [routerLink]=\"['/settings']\" (click)=\"header('Settings')\">\n                              <span class=\"name-list-icon\"><i class=\"material-icons\">settings</i></span>\n                              <span class=\"name-list-title\">Settings</span>\n                          </a>\n                      </li>\n                      <li>\n                          <a (click)=\"onLogout()\" href=\"javascript:void(0)\">\n                              <span class=\"name-list-icon\"><i class=\"material-icons\">power_settings_new</i></span>\n                              <span class=\"name-list-title\">Logout</span>\n                          </a>\n                      </li>\n                      <li class=\"builder-help-icon\">\n                        <!-- Start: help icon -->\n                            <a href=\"javascript:void(0)\">\n                                <span class=\"icon-help\" data-toggle=\"modal\" data-target=\"#video-modal\">\n                                    <i class=\"material-icons\">help_outline</i> Help\n                                </span>\n                            </a>\n                        <!-- End: help icon -->\n                     </li>\n                  </div>\n              </ul>\n          </div>\n      </div>\n    </nav>\n</header>\n<!-- End: Responsive header -->\n\n<og-payment-modal></og-payment-modal>\n<og-premium-modal></og-premium-modal>\n\n"

/***/ },

/***/ 777:
/***/ function(module, exports) {

module.exports = "<!--<div id=\"salesforce-error\" class=\"modal fade hide\" tabindex=\"-1\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content modal-bg\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<i class=\"material-icons\">close</i>\n\t\t\t\t</button>\n                <div class=\"alert alert-danger custom-danger\">\n                    <h4 class=\"modal-title\">Error Found</h4>\n                </div>\n\t\t\t</div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div *ngIf=\"isSalesforceError\" class=\"alert alert-danger custom-danger\">\n                        <p>\n                            <span class=\"mat-icon\">\n                            <i class=\"material-icons\">report_problem</i>\n                            </span> \n                        {{salesforceError}}\n                        </p>\n                    </div>\n                </div>\n                 <div class=\"row\">\n                    <p> Please try Again!</p>\n                </div>\n            </div>\n\t\t</div>\n\t</div>\n</div>-->\n\n<div id=\"salesforce-error\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content modal-bg\">\n            <div class=\"modal-body text-center\">\n\t\t\t\t<div id=\"error\" class=\"\">\n\t\t\t\t\t<img src=\"assets/images/salesforce_new.png\">\n\t\t\t\t\t<p class=\"subheading\">Sorry we were not able to process this request.\n\t\t\t\t\t<br/>Please try again.</p>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-close btn-hover hide\" (click)=\"close()\">Close</button>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"please-wait\" class=\"hide\">\n\t\t\t\t\t<img src=\"assets/images/salesforce_new.png\">\n\t\t\t\t\t<p class=\"subheading\">Please wait while we authorize your connection</p>\n\t\t\t\t</div>\n            </div>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ },

/***/ 778:
/***/ function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:70px\">\n        <div class=\"text-center\">\n                <div id=\"token-error\" class=\"hide\"> \n                        <h2> {{errorMsg}}</h2>\n                        <button  type=\"submit\" class=\"btn btn-blue btn-red\" (click)=\"home()\">Go to Home</button>\n                </div>\n        </div>\n        <div id=\"#msgForApprove\" class=\"hide\">\n         <p>User has been Verified thank you </p>\n        </div>\n</div>\n"

/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* NgModule */])({
            declarations: [],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/shared.module.js.map

/***/ },

/***/ 798:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(418);


/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__subdomain_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FeatureAuthService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FeatureAuthService = (function (_super) {
    __extends(FeatureAuthService, _super);
    function FeatureAuthService(_http, _subDomainService) {
        _super.call(this);
        this._http = _http;
        this._subDomainService = _subDomainService;
        this.features = {
            users: 0,
            templates: 0,
            visits: 0,
            leads: 0,
            calculators: 0,
            analytics: false,
            cta: false,
            integrations: false,
            embedding: false,
            custom_branding: false,
            real_time_results: true,
            lead_generation: false,
            calc_in_limit: false,
            custom_font: false,
            background_tints: false,
            custom_colors: false,
        };
    }
    FeatureAuthService.prototype.getfeatureAccess = function (featureName) {
        var _this = this;
        var companyAccess = JSON.parse(this.readCookie('filepicker_token_json'));
        var subscription_status = '';
        companyAccess.forEach(function (e) {
            if (e.key === _this._subDomainService.subDomain.sub_domain) {
                subscription_status = e.value;
            }
        });
        if (subscription_status === 'active' || subscription_status === 'in_trial') {
            var company = localStorage.getItem('company');
            var getUrl = this._url + '/planfeature/check/' + company + '/' + featureName;
            return this._http.get(getUrl, this.options)
                .map(this.boolData)
                .catch(this.handleError);
        }
        else {
            return false;
        }
    };
    FeatureAuthService.prototype.checkCalcLimit = function () {
        var company = localStorage.getItem('company');
        var getUrl = this._url + '/plan/check/calc/' + company;
        return this._http.get(getUrl, this.options)
            .map(this.boolData)
            .catch(this.handleError);
    };
    FeatureAuthService.prototype.getAllFeatureAccess = function () {
        var _this = this;
        var companyAccess = JSON.parse(this.readCookie('filepicker_token_json'));
        var subscription_status = '';
        if (!companyAccess)
            window.location.href = window.location.origin + '/logout';
        else
            companyAccess.forEach(function (e) {
                if (e.key === _this._subDomainService.subDomain.sub_domain) {
                    subscription_status = e.value;
                }
            });
        var company = JSON.parse(this.readCookie('storage')).company;
        company.integration = company.integration ? company.integration : false;
        if (subscription_status === 'active' || subscription_status === 'in_trial') {
            var sub_domain = this._subDomainService.subDomain.sub_domain;
            var getUrl = this._url + '/planfeature/access/' + sub_domain;
            this._http.post(getUrl, {}, this.post_options())
                .map(this.extractData)
                .catch(this.handleError)
                .subscribe(function (result) {
                _this.features.users = result.users;
                _this.features.templates = result.templates;
                if (company.current_limit.calculators === undefined || company.current_limit.calculators === null)
                    _this.features.calculators = result.calculators;
                else
                    _this.features.calculators = company.current_limit.calculators;
                _this.features.visits = result.visits;
                _this.features.leads = result.leads;
                _this.features.analytics = result.analytics;
                _this.features.embedding = result.embedding;
                _this.features.cta = result.cta;
                _this.features.integrations = result.integrations || company.integration;
                _this.features.custom_branding = result.og_branding;
                _this.features.real_time_results = true;
                _this.features.lead_generation = result.lead_generation_viewing;
                _this.features.calc_in_limit = result.calc_in_limit;
                _this.features.custom_font = result.custom_styling;
                _this.features.background_tints = result.custom_styling;
                _this.features.custom_colors = result.custom_styling;
                //console.log(result, 'resultttttt');
            });
        }
    };
    FeatureAuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__subdomain_service__["a" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__subdomain_service__["a" /* SubDomainService */]) === 'function' && _b) || Object])
    ], FeatureAuthService);
    return FeatureAuthService;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_6__base_service__["a" /* BaseService */]));
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/feature-access.service.js.map

/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.format = function (control) {
        var EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (control.value !== '' && !EMAIL_REGEXP.test(control.value)) {
            return { 'checkmail': true };
        }
        return null;
    };
    return EmailValidator;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/projects/Outgrow/migration/Outgrow-frontend/src/email.validator.js.map

/***/ }

},[798]);
//# sourceMappingURL=main.bundle.map