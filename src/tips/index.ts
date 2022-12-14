import { printMsg } from "../utils/common";
import {
  code as ansiCode,
  title as ansiTitle,
  text as ansiText,
} from "../utils/ansi";

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
export function tipsArray() {
  printMsg(ansiTitle(`数组方法[${array.length}]`.padStart(13, " ")));
  array.map((item) => {
    printMsg(
      ansiCode(item[0].trim().padStart(16, " ")) +
        ansiText(line + item[1].trim())
    );
  });
}

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
export function tipsObject() {
  printMsg(ansiTitle(`常用对象方法[${obj.length}]`.padStart(23, " ")));
  obj.map((item) => {
    printMsg(
      ansiCode(item[0].trim().padStart(28, " ")) +
        ansiText(line + item[1].trim())
    );
  });
}
