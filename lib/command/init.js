"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const cp_1 = require("../utils/cp");
/**
 * 初始化目录
 * @param name 目录
 */
function init(name) {
    (0, cp_1.default)({
        src: (0, path_1.join)(__dirname, "../../.vscode"),
        dest: (0, path_1.join)(process.cwd(), name, ".vscode"),
        desc: "复制.vscode",
        isDir: true,
    });
    (0, cp_1.default)({
        src: (0, path_1.join)(__dirname, "../../.prettierrc.js"),
        dest: (0, path_1.join)(process.cwd(), name, ".prettierrc.js"),
        desc: "复制.prettierrc.js",
    });
    (0, cp_1.default)({
        src: (0, path_1.join)(__dirname, "../../tsconfig.json"),
        dest: (0, path_1.join)(process.cwd(), name, "tsconfig.json"),
        desc: "复制tsconfig.json",
    });
}
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kL2luaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBNEI7QUFDNUIsb0NBQTZCO0FBQzdCOzs7R0FHRztBQUNILFNBQXdCLElBQUksQ0FBQyxJQUFZO0lBQ3ZDLElBQUEsWUFBRSxFQUFDO1FBQ0QsR0FBRyxFQUFFLElBQUEsV0FBSSxFQUFDLFNBQVMsRUFBRSxlQUFlLENBQUM7UUFDckMsSUFBSSxFQUFFLElBQUEsV0FBSSxFQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDO1FBQzFDLElBQUksRUFBRSxXQUFXO1FBQ2pCLEtBQUssRUFBRSxJQUFJO0tBQ1osQ0FBQyxDQUFDO0lBQ0gsSUFBQSxZQUFFLEVBQUM7UUFDRCxHQUFHLEVBQUUsSUFBQSxXQUFJLEVBQUMsU0FBUyxFQUFFLHNCQUFzQixDQUFDO1FBQzVDLElBQUksRUFBRSxJQUFBLFdBQUksRUFBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFDO1FBQ2pELElBQUksRUFBRSxrQkFBa0I7S0FDekIsQ0FBQyxDQUFDO0lBQ0gsSUFBQSxZQUFFLEVBQUM7UUFDRCxHQUFHLEVBQUUsSUFBQSxXQUFJLEVBQUMsU0FBUyxFQUFFLHFCQUFxQixDQUFDO1FBQzNDLElBQUksRUFBRSxJQUFBLFdBQUksRUFBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQWUsQ0FBQztRQUNoRCxJQUFJLEVBQUUsaUJBQWlCO0tBQ3hCLENBQUMsQ0FBQztBQUNMLENBQUM7QUFqQkQsdUJBaUJDIn0=