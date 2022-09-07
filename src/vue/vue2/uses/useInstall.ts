/**
 * 注册组件
 * @param app vue3/vue2.7+
 * @param com 单文件组件
 * @param opts 用户参数=>重写组件属性(需要提前定义)
 */
export default function useInstall(app: any, com: any, opts: any = {}) {
  for (const [attr, value] of Object.entries(opts)) {
    if (com.props[attr]) {
      com.props[attr].default = () => value;
    }
  }
  let __file = <string>com.__file;
  let reg: RegExp | string = "";
  if (__file.includes("index.vue")) {
    reg = /([\w-]*)\/index.vue/;
  } else {
    reg = /([\w-]*)\.vue/;
  }
  let res = __file.match(reg);
  if (res) {
    app.component(res[1], com);
  } else {
    console.error(`组件注册失败,文件：${com.__file}`);
  }
}
