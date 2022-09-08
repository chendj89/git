import { join } from "path";
import cp from "../utils/cp";
/**
 * 初始化目录
 * @param name 目录
 */
export default function init(name: string) {
  cp({
    src: join(__dirname, "../../.vscode"),
    dest: join(process.cwd(), name, ".vscode"),
    desc: "复制.vscode",
    isDir: true,
  });
  cp({
    src: join(__dirname, "../../.prettierrc.js"),
    dest: join(process.cwd(), name, ".prettierrc.js"),
    desc: "复制.prettierrc.js",
  });
  cp({
    src: join(__dirname, "../../tsconfig.json"),
    dest: join(process.cwd(), name, "tsconfig.json"),
    desc: "复制tsconfig.json",
  });
}
