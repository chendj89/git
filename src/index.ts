import { program } from "commander";
import { tipsArray, tipsObject } from "./tips";
import { rm } from "./utils/common";
program
  .version(`${require("../package.json").version}`, "-v,--version")
  .usage("<command> [options]");

program
  .command("create <appName>")
  .description("创建新项目来自cli")
  .action(async (appName: string) => {});

program
  .command("tips <methodName>")
  .description("获取提示信息 array,obj")
  .action(async (methodName: string) => {
    if (["array", "Array"].includes(methodName)) {
      tipsArray();
    }
    if (["obj", "object", "Object"].includes(methodName)) {
      tipsObject();
    }
  });

program
  .command("rm <dirName>")
  .description("删除目录")
  .action(async (dirName: string) => {
    rm(dirName);
  });
program.parse(process.argv);
