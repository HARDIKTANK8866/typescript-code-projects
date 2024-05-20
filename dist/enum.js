"use strict";
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["manager"] = 1] = "manager";
    Role[Role["employe"] = 2] = "employe";
})(Role || (Role = {}));
console.log(Role.manager);
