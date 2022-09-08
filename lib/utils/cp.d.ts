export default function cp({ src, dest, desc, isDir, ...rest }: {
    /**
     * 源目录
     */
    src: string;
    /**
     * 目标目录
     */
    dest: string;
    /**
     * 是否为目录
     */
    isDir?: boolean;
    /**
     * 描述
     */
    desc?: string;
    [prop: string]: any;
}): Promise<unknown>;
