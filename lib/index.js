"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const tips_1 = require("./tips");
const common_1 = require("./utils/common");
commander_1.program
    .version(`${require("../package.json").version}`, "-v,--version")
    .usage("<command> [options]");
commander_1.program
    .command("create <appName>")
    .description("创建新项目来自cli")
    .action(async (appName) => { });
commander_1.program
    .command("tips <methodName>")
    .description("获取提示信息 array,obj")
    .action(async (methodName) => {
    if (["array", "Array"].includes(methodName)) {
        (0, tips_1.tipsArray)();
    }
    if (["obj", "object", "Object"].includes(methodName)) {
        (0, tips_1.tipsObject)();
    }
});
commander_1.program
    .command("rm <dirName>")
    .description("删除目录")
    .action(async (dirName) => {
    (0, common_1.rm)(dirName);
});
commander_1.program.parse(process.argv);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBb0M7QUFDcEMsaUNBQStDO0FBQy9DLDJDQUFvQztBQUNwQyxtQkFBTztLQUNKLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLGNBQWMsQ0FBQztLQUNoRSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUVoQyxtQkFBTztLQUNKLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztLQUMzQixXQUFXLENBQUMsWUFBWSxDQUFDO0tBQ3pCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBZSxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQztBQUV6QyxtQkFBTztLQUNKLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztLQUM1QixXQUFXLENBQUMsa0JBQWtCLENBQUM7S0FDL0IsTUFBTSxDQUFDLEtBQUssRUFBRSxVQUFrQixFQUFFLEVBQUU7SUFDbkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDM0MsSUFBQSxnQkFBUyxHQUFFLENBQUM7S0FDYjtJQUNELElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUNwRCxJQUFBLGlCQUFVLEdBQUUsQ0FBQztLQUNkO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFTCxtQkFBTztLQUNKLE9BQU8sQ0FBQyxjQUFjLENBQUM7S0FDdkIsV0FBVyxDQUFDLE1BQU0sQ0FBQztLQUNuQixNQUFNLENBQUMsS0FBSyxFQUFFLE9BQWUsRUFBRSxFQUFFO0lBQ2hDLElBQUEsV0FBRSxFQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2QsQ0FBQyxDQUFDLENBQUM7QUFDTCxtQkFBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMifQ==