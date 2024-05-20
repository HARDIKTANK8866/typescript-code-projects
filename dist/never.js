"use strict";
function apiError(msg, code) {
    throw { msg, code };
}
console.log(apiError("server side error", 500));
