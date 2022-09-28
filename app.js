// var features, feature_two, elem, elem_two, object, hero;
// object = {
//   features: ".feature",
//   features_two: ".features",
//   elems: ".element",
//   elems_two: ".element-two",
//   heros: ".action-section",
// };
// features = document.querySelector(object.features);
// feature_two = document.querySelector(object.features_two);
// elem = document.querySelector(object.elems);
// elem_two = document.querySelector(object.elems_two);
// hero = document.querySelector(object.heros);

// var controller = (function () {
//   var setupEventListeners = function () {
//     hero.addEventListener("click", function () {
//       elem.style.display = "none";
//     });
//     hero.addEventListener("click", function () {
//       elem_two.style.display = "none";
//     });
//   };
//   setupEventListeners();
//   var eventListeners = function () {
//     feature_two.addEventListener("click", works);
//     features.addEventListener("click", work);
//   };
//   eventListeners();
//   function works() {
//     elem_two.style.display = "flex";
//     if (elem) {
//       elem.style.display = "none";
//     }
//   }
//   function work() {
//     elem.style.display = "flex";
//     if (elem_two) {
//       elem_two.style.display = "none";
//     } else {
//       elem_two.style.display = "none";
//     }
//   }
// })();
var click = document.querySelector(".open");
click.addEventListener("click", function () {
  document.querySelector("nav").style.display = "flex";
});
var unClick = document.querySelector(".close");
unClick.addEventListener("click", function () {
  document.querySelector("nav").style.display = "none";
});
