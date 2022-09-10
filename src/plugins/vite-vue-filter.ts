type Without<FirstType, SecondType> = {
  [KeyType in Exclude<keyof FirstType, keyof SecondType>]?: never;
};
/**
 * 二选一
 */
type MergeExclusive<FirstType, SecondType> =
  | FirstType
  | SecondType extends object
  ?
      | (Without<FirstType, SecondType> & SecondType)
      | (Without<SecondType, FirstType> & FirstType)
  : FirstType | SecondType;

/**
 * vite插件用户输入参数
 */
export type TUserOptions = Partial<
  {
    /**
     * 文件结尾
     */
    endsWith: string;
    alias: Record<string, string>;
  } & MergeExclusive<
    {
      /**
       * 包含路径
       */
      include: string[];
    },
    {
      /**
       * 排除路径
       */
      exclude: string[];
    }
  >
>;

/**
 *
 * @param id 文件路径
 * @param opts
 * @param opts.endsWith 文件结尾
 * @param opts.include 包含路径
 * @param opts.exclude 排除路径
 * @returns boolean 是否需要过滤
 */
export default function viteVueFilter(id: string, opts: TUserOptions): boolean {
  // 结尾不匹配，返回false
  if (opts.endsWith) {
    if (!id.includes(opts.endsWith)) {
      return false;
    }
  }
  if (opts.include) {
    // 满足一个即为true
    let result = opts.include.some((item) => {
      return id.includes(item);
    });
    return result;
  }
  if (opts.exclude) {
    // 满足一个即为true
    let result = opts.exclude.some((item) => {
      return id.includes(item);
    });
    // 取反
    return !result;
  }
  return true;
}
