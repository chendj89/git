declare const createVNode:any;
declare const render:any;
/**
 * 使用弹窗-vue3/vue2.7+
 * @param file 单文件组件
 * @returns 
 */
export default function useDialog(file: any) {
  // @ts-ignore
  let ins: any = getCurrentInstance() || this;
  return new Promise((resolve, reject) => {
    // 服务器渲染
    if (typeof document !== "undefined") {
      let container = document.createElement("div");
      let app: any = createVNode(file, {});
      Object.assign(app.appContext, ins.appContext.app._context);
      app.appContext.$close = (result: any = true) => {
        // 销毁组件
        render(null, container);
        container.parentNode?.removeChild(container);
        resolve(result);
      };
      render(app, container);
      document.body.appendChild(container);
    }
  });
}
