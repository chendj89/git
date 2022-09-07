"use strict";
/**
 * 通用的工具方法
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearConsole = exports.printMsg = exports.rm = exports.getProjectPath = exports.writeJsonFile = exports.readJsonFile = void 0;
const fs_1 = require("fs");
//import { mkdirsp } from "mkdirsp";
const path_1 = require("path");
const clear = require("clear-console");
/**
 * 读取指定路径下 json 文件
 * @param filename json 文件的路径
 */
function readJsonFile(filename) {
    return JSON.parse((0, fs_1.readFileSync)(filename, { encoding: "utf-8", flag: "r" }));
}
exports.readJsonFile = readJsonFile;
/**
 * 覆写指定路径下的 json 文件
 * @param filename json 文件的路径
 * @param content  json 内容
 */
function writeJsonFile(filename, content) {
    (0, fs_1.writeFileSync)(filename, JSON.stringify(content, null, 2));
}
exports.writeJsonFile = writeJsonFile;
/**
 * 获取项目绝对路径
 * @param projectName 项目名
 */
function getProjectPath(projectName) {
    return (0, path_1.resolve)(process.cwd(), projectName);
}
exports.getProjectPath = getProjectPath;
/**
 * 删除文件或目录
 * @param path
 */
async function rm(path) {
    // 得到相对路径
    let dir = (0, path_1.resolve)(process.cwd(), path);
    // 如果目录不存在
    if (!(0, fs_1.existsSync)(dir)) {
        return;
    }
    // 判断是否为目录
    if ((0, fs_1.statSync)(dir).isDirectory()) {
        // 读取目录里的文件
        let files = (0, fs_1.readdirSync)(dir);
        // 如果有文件
        if (files.length) {
            for (let i = 0; i < files.length; i++) {
                let url = dir + "/" + files[i];
                // 判断文件是否为目录或者文件
                if ((0, fs_1.statSync)(url).isDirectory()) {
                    // 递归删除子目录
                    rm(url);
                }
                else {
                    // 删除文件
                    (0, fs_1.unlinkSync)(url);
                }
            }
        }
        (0, fs_1.rmdirSync)(dir);
    }
    else {
        // 不是目录，删除文件
        (0, fs_1.unlinkSync)(dir);
    }
}
exports.rm = rm;
/**
 * 打印信息
 * @param msg 信息
 */
function printMsg(msg) {
    console.log(msg);
}
exports.printMsg = printMsg;
/**
 * 清空命令行
 */
function clearConsole() {
    clear();
}
exports.clearConsole = clearConsole;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7OztBQUVILDJCQVFZO0FBQ1osb0NBQW9DO0FBQ3BDLCtCQUErQjtBQUMvQix1Q0FBdUM7QUFnQnZDOzs7R0FHRztBQUNILFNBQWdCLFlBQVksQ0FBSSxRQUFnQjtJQUM5QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBQSxpQkFBWSxFQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5RSxDQUFDO0FBRkQsb0NBRUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsYUFBYSxDQUFJLFFBQWdCLEVBQUUsT0FBVTtJQUMzRCxJQUFBLGtCQUFhLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVELENBQUM7QUFGRCxzQ0FFQztBQUVEOzs7R0FHRztBQUNILFNBQWdCLGNBQWMsQ0FBQyxXQUFtQjtJQUNoRCxPQUFPLElBQUEsY0FBTyxFQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBRkQsd0NBRUM7QUFDRDs7O0dBR0c7QUFDSSxLQUFLLFVBQVUsRUFBRSxDQUFDLElBQVk7SUFDbkMsU0FBUztJQUNULElBQUksR0FBRyxHQUFHLElBQUEsY0FBTyxFQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxVQUFVO0lBQ1YsSUFBSSxDQUFDLElBQUEsZUFBVSxFQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCLE9BQU87S0FDUjtJQUNELFVBQVU7SUFDVixJQUFJLElBQUEsYUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO1FBQy9CLFdBQVc7UUFDWCxJQUFJLEtBQUssR0FBRyxJQUFBLGdCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsUUFBUTtRQUNSLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDckMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLGdCQUFnQjtnQkFDaEIsSUFBSSxJQUFBLGFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtvQkFDL0IsVUFBVTtvQkFDVixFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ1Q7cUJBQU07b0JBQ0wsT0FBTztvQkFDUCxJQUFBLGVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQztpQkFDakI7YUFDRjtTQUNGO1FBQ0QsSUFBQSxjQUFTLEVBQUMsR0FBRyxDQUFDLENBQUM7S0FDaEI7U0FBTTtRQUNMLFlBQVk7UUFDWixJQUFBLGVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQztLQUNqQjtBQUNILENBQUM7QUE5QkQsZ0JBOEJDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFDLEdBQVc7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBRkQsNEJBRUM7QUFFRDs7R0FFRztBQUNILFNBQWdCLFlBQVk7SUFDMUIsS0FBSyxFQUFFLENBQUM7QUFDVixDQUFDO0FBRkQsb0NBRUMifQ==