/**
 * 通用的工具方法
 */

import {
  readFileSync,
  writeFileSync,
  existsSync,
  statSync,
  readdirSync,
  unlinkSync,
  rmdirSync,
} from "fs";
//import { mkdirsp } from "mkdirsp";
import { resolve } from "path";
import * as clear from "clear-console";
// import  * as shell from "shelljs";

export interface PackageJSON {
  name: string;
  version: string;
  description: string;
  scripts: {
    [key: string]: string;
  };
}

export interface JSON {
  [key: string]: unknown;
}

/**
 * 读取指定路径下 json 文件
 * @param filename json 文件的路径
 */
export function readJsonFile<T>(filename: string): T {
  return JSON.parse(readFileSync(filename, { encoding: "utf-8", flag: "r" }));
}

/**
 * 覆写指定路径下的 json 文件
 * @param filename json 文件的路径
 * @param content  json 内容
 */
export function writeJsonFile<T>(filename: string, content: T): void {
  writeFileSync(filename, JSON.stringify(content, null, 2));
}

/**
 * 获取项目绝对路径
 * @param projectName 项目名
 */
export function getProjectPath(projectName: string): string {
  return resolve(process.cwd(), projectName);
}
/**
 * 删除文件或目录
 * @param path
 */
export async function rm(path: string) {
  // 得到相对路径
  let dir = resolve(process.cwd(), path);
  // 如果目录不存在
  if (!existsSync(dir)) {
    return;
  }
  // 判断是否为目录
  if (statSync(dir).isDirectory()) {
    // 读取目录里的文件
    let files = readdirSync(dir);
    // 如果有文件
    if (files.length) {
      for (let i = 0; i < files.length; i++) {
        let url = dir + "/" + files[i];
        // 判断文件是否为目录或者文件
        if (statSync(url).isDirectory()) {
          // 递归删除子目录
          rm(url);
        } else {
          // 删除文件
          unlinkSync(url);
        }
      }
    }
    rmdirSync(dir);
  } else {
    // 不是目录，删除文件
    unlinkSync(dir);
  }
}

/**
 * 打印信息
 * @param msg 信息
 */
export function printMsg(msg: string): void {
  console.log(msg);
}

/**
 * 清空命令行
 */
export function clearConsole(): void {
  clear();
}
