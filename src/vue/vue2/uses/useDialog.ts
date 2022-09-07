
declare const Vue:any;

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
export function useDialog(file:any, options?:any) {
  return ((file, { $el, ...reset } = {}) => {
    return new Promise((resolve) => {
      let target = $el || document.body;
      const ComponentConstructor = Vue.extend(file);
      ComponentConstructor.prototype.$close = function (params = true) {
        destroyInstance();
        resolve(params);
      };
      let instance = new ComponentConstructor(
        Object.assign(
          { el: document.createElement("div") },
          {
            propsData: reset,
          }
        )
      );
      function destroyInstance() {
        target.removeChild(instance.$el);
        instance.$destroy();
        instance = null;
      }
      target.appendChild(instance.$el);
    });
  })(file, options);
}
