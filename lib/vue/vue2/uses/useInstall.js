"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 注册组件
 * @param app vue3/vue2.7+
 * @param com 单文件组件
 * @param opts 用户参数=>重写组件属性(需要提前定义)
 */
function useInstall(app, com, opts = {}) {
    for (const [attr, value] of Object.entries(opts)) {
        if (com.props[attr]) {
            com.props[attr].default = () => value;
        }
    }
    let __file = com.__file;
    let reg = "";
    if (__file.includes("index.vue")) {
        reg = /([\w-]*)\/index.vue/;
    }
    else {
        reg = /([\w-]*)\.vue/;
    }
    let res = __file.match(reg);
    if (res) {
        app.component(res[1], com);
    }
    else {
        console.error(`组件注册失败,文件：${com.__file}`);
    }
}
exports.default = useInstall;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlSW5zdGFsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92dWUvdnVlMi91c2VzL3VzZUluc3RhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7R0FLRztBQUNILFNBQXdCLFVBQVUsQ0FBQyxHQUFRLEVBQUUsR0FBUSxFQUFFLE9BQVksRUFBRTtJQUNuRSxLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNoRCxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkIsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1NBQ3ZDO0tBQ0Y7SUFDRCxJQUFJLE1BQU0sR0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ2hDLElBQUksR0FBRyxHQUFvQixFQUFFLENBQUM7SUFDOUIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1FBQ2hDLEdBQUcsR0FBRyxxQkFBcUIsQ0FBQztLQUM3QjtTQUFNO1FBQ0wsR0FBRyxHQUFHLGVBQWUsQ0FBQztLQUN2QjtJQUNELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsSUFBSSxHQUFHLEVBQUU7UUFDUCxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUM1QjtTQUFNO1FBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0tBQzFDO0FBQ0gsQ0FBQztBQW5CRCw2QkFtQkMifQ==