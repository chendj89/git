"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipsObject = exports.tipsArray = void 0;
const common_1 = require("../utils/common");
const ansi_1 = require("../utils/ansi");
const line = "：";
let array = [
    ["join()", "用指定的分隔符将数组每一项拼接为字符串"],
    ["push()", "向数组的末尾添加新元素"],
    ["pop()", "删除数组的最后一项"],
    ["shift()", "删除数组的第一项"],
    ["unshift()", "向数组首位添加新元素"],
    ["slice()", "按照条件查找出其中的部分元素"],
    ["splice()", "对数组进行增删改"],
    ["fill()", " 方法能使用特定值填充数组中的一个或多个元素"],
    ["filter()", "过滤功能"],
    ["concat()", "用于连接两个或多个数组"],
    ["indexOf()", "检测当前值在数组中第一次出现的位置索引"],
    ["lastIndexOf()", "检测当前值在数组中最后一次出现的位置索引"],
    ["every()", "判断数组中每一项都是否满足条件"],
    ["some()", "判断数组中是否存在满足条件的项"],
    ["includes()", "判断一个数组是否包含一个指定的值"],
    ["sort()", "对数组的元素进行排序"],
    ["reverse()", "对数组进行倒序"],
    ["forEach()", "ES5及以下循环遍历数组每一项"],
    ["map()", "ES6循环遍历数组每一项"],
    ["copyWithin()", "用于从数组的指定位置拷贝元素到数组的另一个指定位置中"],
    ["find()", "返回匹配的值"],
    ["findIndex()", "返回匹配位置的索引"],
    ["toString()", "将数组转换为字符串"],
    ["toLocaleString()", "将数组转换为字符串"],
    ["flat()", "扁平化数组"],
    ["flatMap()", "扁平化数组"],
    ["entries()", "遍历数组"],
    ["keys()", "遍历数组"],
    ["values()", "遍历数组"],
];
/**
 * 显示数组帮助
 */
function tipsArray() {
    (0, common_1.printMsg)((0, ansi_1.title)(`数组方法[${array.length}]`.padStart(13, " ")));
    array.map((item) => {
        (0, common_1.printMsg)((0, ansi_1.code)(item[0].trim().padStart(16, " ")) +
            (0, ansi_1.text)(line + item[1].trim()));
    });
}
exports.tipsArray = tipsArray;
let obj = [
    ["for-in", "遍历整个对象"],
    ["Object.keys()", "用于返回对象所有key组成的数组"],
    ["Object.getOwnPropertyNames()", "用于返回对象所有key组成的数组"],
    ["Reflect.ownKeys()", "用于返回对象所有key组成的数组"],
    ["Object.values()", "用于返回对象所有value组成的数组"],
    ["Object.entries()", "方法返回一个给定对象自身可枚举属性的键值对数组"],
    ["hasOwnProperty", "对象是否有某一个属于自己的属性"],
    ["in", "判断某个属性是否在某个对象或者对象的原型上"],
    ["Object.assign", "用于对象的合并"],
];
/**
 * 显示对象帮助
 */
function tipsObject() {
    (0, common_1.printMsg)((0, ansi_1.title)(`常用对象方法[${obj.length}]`.padStart(23, " ")));
    obj.map((item) => {
        (0, common_1.printMsg)((0, ansi_1.code)(item[0].trim().padStart(28, " ")) +
            (0, ansi_1.text)(line + item[1].trim()));
    });
}
exports.tipsObject = tipsObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGlwcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0Q0FBMkM7QUFDM0Msd0NBSXVCO0FBRXZCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUVqQixJQUFJLEtBQUssR0FBRztJQUNWLENBQUMsUUFBUSxFQUFFLHFCQUFxQixDQUFDO0lBQ2pDLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQztJQUN6QixDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7SUFDdEIsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDO0lBQ3ZCLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQztJQUMzQixDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQztJQUM3QixDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7SUFDeEIsQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLENBQUM7SUFDcEMsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDO0lBQ3BCLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQztJQUMzQixDQUFDLFdBQVcsRUFBRSxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQztJQUN6QyxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQztJQUM5QixDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQztJQUM3QixDQUFDLFlBQVksRUFBRSxrQkFBa0IsQ0FBQztJQUNsQyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUM7SUFDeEIsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDO0lBQ3hCLENBQUMsV0FBVyxFQUFFLGlCQUFpQixDQUFDO0lBQ2hDLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQztJQUN6QixDQUFDLGNBQWMsRUFBRSw0QkFBNEIsQ0FBQztJQUM5QyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7SUFDcEIsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDO0lBQzVCLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQztJQUMzQixDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQztJQUNqQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7SUFDbkIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDO0lBQ3RCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQztJQUNyQixDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7SUFDbEIsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDO0NBQ3JCLENBQUM7QUFDRjs7R0FFRztBQUNILFNBQWdCLFNBQVM7SUFDdkIsSUFBQSxpQkFBUSxFQUFDLElBQUEsWUFBUyxFQUFDLFFBQVEsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNqQixJQUFBLGlCQUFRLEVBQ04sSUFBQSxXQUFRLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEMsSUFBQSxXQUFRLEVBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUNsQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBUkQsOEJBUUM7QUFFRCxJQUFJLEdBQUcsR0FBRztJQUNSLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztJQUNwQixDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQztJQUNyQyxDQUFDLDhCQUE4QixFQUFFLGtCQUFrQixDQUFDO0lBQ3BELENBQUMsbUJBQW1CLEVBQUUsa0JBQWtCLENBQUM7SUFDekMsQ0FBQyxpQkFBaUIsRUFBRSxvQkFBb0IsQ0FBQztJQUN6QyxDQUFDLGtCQUFrQixFQUFFLHlCQUF5QixDQUFDO0lBQy9DLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUM7SUFDckMsQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLENBQUM7SUFDL0IsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDO0NBQzdCLENBQUM7QUFDRjs7R0FFRztBQUNILFNBQWdCLFVBQVU7SUFDeEIsSUFBQSxpQkFBUSxFQUFDLElBQUEsWUFBUyxFQUFDLFVBQVUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNmLElBQUEsaUJBQVEsRUFDTixJQUFBLFdBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN4QyxJQUFBLFdBQVEsRUFBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQ2xDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFSRCxnQ0FRQyJ9