webpackJsonp([0],[function(e,t,n){(function(e){"use strict";n(1);var t=n(3);(0,t.getUsers)().then(function(n){var r="";n.forEach(function(e){r+='<tr>\n    <td><a href="#" data-id="'+e.id+'" class="deleteUser">Delete</a></td>\n    <td>'+e.id+"</td>\n    <td>"+e.firstName+"</td>\n    <td>"+e.lastName+"</td>\n    <td>"+e.email+"</td>\n    </tr>"}),e.document.getElementById("users").innerHTML=r;var o=e.document.getElementsByClassName("deleteUser");Array.from(o,function(e){e.onclick=function(e){var n=e.target;e.preventDefault(),(0,t.deleteUser)(n.attributes["data-id"].value);var r=n.parentNode.parentNode;r.parentNode.removeChild(r)}})})}).call(t,function(){return this}())},function(e,t){},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){return a("users")}function u(e){return s("users/"+e)}function a(e){return fetch(f+e).then(c,d)}function s(e){var t=new Request(f+e,{method:"DELETE"});return fetch(t).then(c,d)}function c(e){return e.json()}function d(e){console.log(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getUsers=o,t.deleteUser=u,n(4);var i=n(5),l=r(i),f=(0,l["default"])()},,function(e,t){"use strict";function n(){var e="localhost"===window.location.hostname;return e?"http://localhost:3001/":"/"}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n}]);
//# sourceMappingURL=main.2b62b1f17e90117b31cf.js.map