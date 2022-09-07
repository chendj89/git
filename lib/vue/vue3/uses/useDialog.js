"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 使用弹窗-vue3/vue2.7+
 * @param file 单文件组件
 * @returns
 */
function useDialog(file) {
    // @ts-ignore
    let ins = getCurrentInstance() || this;
    return new Promise((resolve, reject) => {
        // 服务器渲染
        if (typeof document !== "undefined") {
            let container = document.createElement("div");
            let app = createVNode(file, {});
            Object.assign(app.appContext, ins.appContext.app._context);
            app.appContext.$close = (result = true) => {
                var _a;
                // 销毁组件
                render(null, container);
                (_a = container.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(container);
                resolve(result);
            };
            render(app, container);
            document.body.appendChild(container);
        }
    });
}
exports.default = useDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlRGlhbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Z1ZS92dWUzL3VzZXMvdXNlRGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7Ozs7R0FJRztBQUNILFNBQXdCLFNBQVMsQ0FBQyxJQUFTO0lBQ3pDLGFBQWE7SUFDYixJQUFJLEdBQUcsR0FBUSxrQkFBa0IsRUFBRSxJQUFJLElBQUksQ0FBQztJQUM1QyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3JDLFFBQVE7UUFDUixJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsRUFBRTtZQUNuQyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlDLElBQUksR0FBRyxHQUFRLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNELEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsU0FBYyxJQUFJLEVBQUUsRUFBRTs7Z0JBQzdDLE9BQU87Z0JBQ1AsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDeEIsTUFBQSxTQUFTLENBQUMsVUFBVSwwQ0FBRSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUM7WUFDRixNQUFNLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBbkJELDRCQW1CQyJ9