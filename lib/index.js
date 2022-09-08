"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const init_1 = require("./command/init");
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
    .command("init <dirName>")
    .description("初始化目录")
    .action(async (dirName) => {
    (0, init_1.default)(dirName);
});
commander_1.program
    .command("rm <dirName>")
    .description("删除目录")
    .action(async (dirName) => {
    (0, common_1.rm)(dirName);
});
commander_1.program.parse(process.argv);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBa0M7QUFDbEMseUNBQW9DO0FBQ3BDLGlDQUErQztBQUMvQywyQ0FBb0M7QUFDcEMsbUJBQU87S0FDSixPQUFPLENBQUMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxjQUFjLENBQUM7S0FDaEUsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFaEMsbUJBQU87S0FDSixPQUFPLENBQUMsa0JBQWtCLENBQUM7S0FDM0IsV0FBVyxDQUFDLFlBQVksQ0FBQztLQUN6QixNQUFNLENBQUMsS0FBSyxFQUFFLE9BQWUsRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUM7QUFFekMsbUJBQU87S0FDSixPQUFPLENBQUMsbUJBQW1CLENBQUM7S0FDNUIsV0FBVyxDQUFDLGtCQUFrQixDQUFDO0tBQy9CLE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBa0IsRUFBRSxFQUFFO0lBQ25DLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQzNDLElBQUEsZ0JBQVMsR0FBRSxDQUFDO0tBQ2I7SUFDRCxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDcEQsSUFBQSxpQkFBVSxHQUFFLENBQUM7S0FDZDtBQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsbUJBQU87S0FDSixPQUFPLENBQUMsZ0JBQWdCLENBQUM7S0FDekIsV0FBVyxDQUFDLE9BQU8sQ0FBQztLQUNwQixNQUFNLENBQUMsS0FBSyxFQUFFLE9BQWUsRUFBRSxFQUFFO0lBQ2hDLElBQUEsY0FBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2hCLENBQUMsQ0FBQyxDQUFDO0FBRUwsbUJBQU87S0FDSixPQUFPLENBQUMsY0FBYyxDQUFDO0tBQ3ZCLFdBQVcsQ0FBQyxNQUFNLENBQUM7S0FDbkIsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFlLEVBQUUsRUFBRTtJQUNoQyxJQUFBLFdBQUUsRUFBQyxPQUFPLENBQUMsQ0FBQztBQUNkLENBQUMsQ0FBQyxDQUFDO0FBQ0wsbUJBQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDIn0=