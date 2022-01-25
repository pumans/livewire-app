/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/users.js":
/*!*******************************!*\
  !*** ./resources/js/users.js ***!
  \*******************************/
/***/ (() => {

eval("var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), options);\nLivewire.on(\"deleteTriggered\", function (id, name) {\n  var proceed = confirm(\"Are you sure you want to delete \".concat(name));\n\n  if (proceed) {\n    Livewire.emit(\"delete\", id);\n  }\n});\nLivewire.on(\"triggerCreate\", function () {\n  myModal.show();\n});\nwindow.addEventListener(\"user-saved\", function (event) {\n  $(\"#user-modal\").modal(\"hide\");\n  alert(\"User \".concat(event.detail.user_name, \" was \").concat(event.detail.action, \"!\"));\n});\nLivewire.on(\"dataFetched\", function (user) {\n  $(\"#user-modal\").modal(\"show\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXNlcnMuanM/MTFiYiJdLCJuYW1lcyI6WyJteU1vZGFsIiwiYm9vdHN0cmFwIiwiTW9kYWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib3B0aW9ucyIsIkxpdmV3aXJlIiwib24iLCJpZCIsIm5hbWUiLCJwcm9jZWVkIiwiY29uZmlybSIsImVtaXQiLCJzaG93Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiJCIsIm1vZGFsIiwiYWxlcnQiLCJkZXRhaWwiLCJ1c2VyX25hbWUiLCJhY3Rpb24iLCJ1c2VyIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxPQUFPLEdBQUcsSUFBSUMsU0FBUyxDQUFDQyxLQUFkLENBQW9CQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBcEIsRUFBNkRDLE9BQTdELENBQWQ7QUFFQUMsUUFBUSxDQUFDQyxFQUFULENBQVksaUJBQVosRUFBK0IsVUFBQ0MsRUFBRCxFQUFLQyxJQUFMLEVBQWM7QUFDekMsTUFBTUMsT0FBTyxHQUFHQyxPQUFPLDJDQUFvQ0YsSUFBcEMsRUFBdkI7O0FBRUEsTUFBSUMsT0FBSixFQUFhO0FBQ1RKLElBQUFBLFFBQVEsQ0FBQ00sSUFBVCxDQUFjLFFBQWQsRUFBd0JKLEVBQXhCO0FBQ0g7QUFDSixDQU5EO0FBT0FGLFFBQVEsQ0FBQ0MsRUFBVCxDQUFZLGVBQVosRUFBNkIsWUFBTTtBQUMvQlAsRUFBQUEsT0FBTyxDQUFDYSxJQUFSO0FBQ0gsQ0FGRDtBQUdBQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDLFVBQUNDLEtBQUQsRUFBVztBQUM3Q0MsRUFBQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkMsS0FBakIsQ0FBdUIsTUFBdkI7QUFDQUMsRUFBQUEsS0FBSyxnQkFBU0gsS0FBSyxDQUFDSSxNQUFOLENBQWFDLFNBQXRCLGtCQUF1Q0wsS0FBSyxDQUFDSSxNQUFOLENBQWFFLE1BQXBELE9BQUw7QUFDSCxDQUhEO0FBSUFoQixRQUFRLENBQUNDLEVBQVQsQ0FBWSxhQUFaLEVBQTJCLFVBQUNnQixJQUFELEVBQVU7QUFDakNOLEVBQUFBLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJDLEtBQWpCLENBQXVCLE1BQXZCO0FBQ0gsQ0FGRCIsInNvdXJjZXNDb250ZW50IjpbInZhciBteU1vZGFsID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZU1vZGFsJyksIG9wdGlvbnMpXG5cbkxpdmV3aXJlLm9uKFwiZGVsZXRlVHJpZ2dlcmVkXCIsIChpZCwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb2NlZWQgPSBjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7bmFtZX1gKTtcblxuICAgIGlmIChwcm9jZWVkKSB7XG4gICAgICAgIExpdmV3aXJlLmVtaXQoXCJkZWxldGVcIiwgaWQpO1xuICAgIH1cbn0pO1xuTGl2ZXdpcmUub24oXCJ0cmlnZ2VyQ3JlYXRlXCIsICgpID0+IHtcbiAgICBteU1vZGFsLnNob3coKVxufSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInVzZXItc2F2ZWRcIiwgKGV2ZW50KSA9PiB7XG4gICAgJChcIiN1c2VyLW1vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKTtcbiAgICBhbGVydChgVXNlciAke2V2ZW50LmRldGFpbC51c2VyX25hbWV9IHdhcyAke2V2ZW50LmRldGFpbC5hY3Rpb259IWApO1xufSk7XG5MaXZld2lyZS5vbihcImRhdGFGZXRjaGVkXCIsICh1c2VyKSA9PiB7XG4gICAgJChcIiN1c2VyLW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcbn0pO1xuIl0sImZpbGUiOiIuL3Jlc291cmNlcy9qcy91c2Vycy5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/users.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/users.js"]();
/******/ 	
/******/ })()
;