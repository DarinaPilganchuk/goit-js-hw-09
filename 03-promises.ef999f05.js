!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i"),i=document.querySelector(".form");function u(e,n){return new Promise((function(o,t){var r=Math.random()>.3;setTimeout((function(){r&&o("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")),t("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}console.log(i),i.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,o=n.delay,t=n.step,i=n.amount,c=Number(o.value),l=Number(t.value),a=Number(i.value);console.log(c),console.log(l);for(var f=1,s=0;s<a;s+=1)u(f,c).then((function(e){return r.Notify.success(e)})).catch((function(e){return r.Notify.failure(e)})),f+=1,c+=l}))}();
//# sourceMappingURL=03-promises.ef999f05.js.map
