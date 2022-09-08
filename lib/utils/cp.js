"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const common_1 = require("./common");
const ansi_1 = require("./ansi");
const path_1 = require("path");
async function cp({ src, dest, desc, isDir, ...rest }) {
    if (isDir) {
        // 判断目录是否存在
        if (!(0, fs_1.existsSync)(dest)) {
            // 没有就创建
            (0, fs_1.mkdirSync)(dest);
        }
        if (!(0, fs_1.existsSync)(src)) {
            (0, common_1.printMsg)((0, ansi_1.error)("源目录不存在"));
            return false;
        }
        if (src.startsWith(process.cwd())) {
            (0, common_1.printMsg)((0, ansi_1.error)("不能自己复制给自己"));
            return false;
        }
        let files = (0, fs_1.readdirSync)(src);
        return new Promise((resolve) => {
            for (let i = 0; i < files.length; i++) {
                let file = files[i];
                let filePath = (0, path_1.join)(src, file);
                let temp = (0, fs_1.statSync)(filePath);
                if (temp.isFile()) {
                    (0, fs_1.copyFileSync)(filePath, (0, path_1.join)(dest, file));
                }
            }
            resolve(true);
        });
    }
    else {
        console.log(src);
        console.log(dest);
        (0, fs_1.copyFileSync)(src, dest);
    }
}
exports.default = cp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvY3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQkFBZ0Y7QUFDaEYscUNBQW9DO0FBQ3BDLGlDQUE0QztBQUM1QywrQkFBNEI7QUFFYixLQUFLLFVBQVUsRUFBRSxDQUFDLEVBQy9CLEdBQUcsRUFDSCxJQUFJLEVBQ0osSUFBSSxFQUNKLEtBQUssRUFDTCxHQUFHLElBQUksRUFtQlI7SUFDQyxJQUFJLEtBQUssRUFBRTtRQUNULFdBQVc7UUFDWCxJQUFJLENBQUMsSUFBQSxlQUFVLEVBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckIsUUFBUTtZQUNSLElBQUEsY0FBUyxFQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pCO1FBQ0QsSUFBSSxDQUFDLElBQUEsZUFBVSxFQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUEsaUJBQVEsRUFBQyxJQUFBLFlBQVMsRUFBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUU7WUFDakMsSUFBQSxpQkFBUSxFQUFDLElBQUEsWUFBUyxFQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDakMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksS0FBSyxHQUFHLElBQUEsZ0JBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxRQUFRLEdBQUcsSUFBQSxXQUFJLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMvQixJQUFJLElBQUksR0FBRyxJQUFBLGFBQVEsRUFBQyxRQUFRLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7b0JBQ2pCLElBQUEsaUJBQVksRUFBQyxRQUFRLEVBQUUsSUFBQSxXQUFJLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQzFDO2FBQ0Y7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7S0FDSjtTQUFNO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxCLElBQUEsaUJBQVksRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDekI7QUFDSCxDQUFDO0FBekRELHFCQXlEQyJ9