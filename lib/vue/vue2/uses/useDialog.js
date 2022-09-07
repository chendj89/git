"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDialog = void 0;
/**
 * 使用弹窗
 * @param {*} file 单文件组件
 * @param {*} options 个性参数
 * @param options.$el 指定接受弹窗容器
 * @tutorial
 * ```js
 * //主动销毁弹窗
 * this.$close(someData);
 * ```
 * @returns
 */
function useDialog(file, options) {
    return ((file, { $el, ...reset } = {}) => {
        return new Promise((resolve) => {
            let target = $el || document.body;
            const ComponentConstructor = Vue.extend(file);
            ComponentConstructor.prototype.$close = function (params = true) {
                destroyInstance();
                resolve(params);
            };
            let instance = new ComponentConstructor(Object.assign({ el: document.createElement("div") }, {
                propsData: reset,
            }));
            function destroyInstance() {
                target.removeChild(instance.$el);
                instance.$destroy();
                instance = null;
            }
            target.appendChild(instance.$el);
        });
    })(file, options);
}
exports.useDialog = useDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlRGlhbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Z1ZS92dWUyL3VzZXMvdXNlRGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsU0FBZ0IsU0FBUyxDQUFDLElBQVEsRUFBRSxPQUFZO0lBQzlDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO1FBQ3ZDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUM3QixJQUFJLE1BQU0sR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQztZQUNsQyxNQUFNLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFVLE1BQU0sR0FBRyxJQUFJO2dCQUM3RCxlQUFlLEVBQUUsQ0FBQztnQkFDbEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQztZQUNGLElBQUksUUFBUSxHQUFHLElBQUksb0JBQW9CLENBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQ1gsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUNyQztnQkFDRSxTQUFTLEVBQUUsS0FBSzthQUNqQixDQUNGLENBQ0YsQ0FBQztZQUNGLFNBQVMsZUFBZTtnQkFDdEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDcEIsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNsQixDQUFDO1lBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDcEIsQ0FBQztBQXpCRCw4QkF5QkMifQ==