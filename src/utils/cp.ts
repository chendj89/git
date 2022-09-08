import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from "fs";
import { printMsg } from "./common";
import { error as ansiError } from "./ansi";
import { join } from "path";

export default async function cp({
  src,
  dest,
  desc,
  isDir,
  ...rest
}: {
  /**
   * 源目录
   */
  src: string;
  /**
   * 目标目录
   */
  dest: string;
  /**
   * 是否为目录
   */
  isDir?: boolean;
  /**
   * 描述
   */
  desc?: string;
  [prop: string]: any;
}) {
  if (isDir) {
    // 判断目录是否存在
    if (!existsSync(dest)) {
      // 没有就创建
      mkdirSync(dest);
    }
    if (!existsSync(src)) {
      printMsg(ansiError("源目录不存在"));
      return false;
    }
    if (src.startsWith(process.cwd())) {
      printMsg(ansiError("不能自己复制给自己"));
      return false;
    }
    let files = readdirSync(src);
    return new Promise((resolve) => {
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let filePath = join(src, file);
        let temp = statSync(filePath);
        if (temp.isFile()) {
          copyFileSync(filePath, join(dest, file));
        }
      }
      resolve(true);
    });
  } else {
    console.log(src);
    console.log(dest);

    copyFileSync(src, dest);
  }
}
