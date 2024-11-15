/*
 * @Description: 读取模版静态文件目录
 */
import fileAction from '@common/utils/file';
import { getAppPath } from '@common/utils/appPath';
import { createUID } from '@common/utils';
import useTemplateModel from '@src/store/templateModel';

export default function () {
  const { updateStore } = useTemplateModel();
  return () => {
    // 1. 先获取应用地址
    getAppPath().then((appPath: string) => {
      console.log(appPath);
      // 2. 从assets读取模版图片信息，构造模版列表
      fileAction
        .readDir(`${appPath}/assets/template`)
        .then(async (files: string[]) => {
          // 3. 构造模版列表
          if (files.length > 0) {
            let templateList: TSTemplate.Item[] = [];
            for (const fileName of files) {
              const base64URL = await fileAction.read(`${appPath}/assets/template/${fileName}`, 'base64');
              templateList.push({
                templateName: fileName,
                templateId: createUID(),
                templateCover: `data:image/png;base64,${base64URL}`,
              });
            }
            updateStore('templateList', templateList)
            updateStore('selectTemplate', templateList[0])
          }
        })
        .catch((err: NodeJS.ErrnoException) => {
          throw new Error(err.message);
        });
    });
  };
}
