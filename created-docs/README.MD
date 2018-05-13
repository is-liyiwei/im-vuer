node createFile

生成文档，对应demo下的没有.vue文件

table数据生成依赖api文件夹下的对应的.js文件

Dialog.MD要手动改下，特殊引入方式








备注：更新步骤

1、先删除example和dist，再打包example，即npm run build然后改名字成example

2、打包js，即npm run bnpm生成dist目录

3、example里面的文件更新到github.io上面(另一个git)，更新示例

4、如果修改了文档什么的，还要更改docs目录，使用本目录的createFile.js自动生成，然后create目录全部覆盖docs目录

5、然后修改package.json的version，然后发布到npm上

6、然后整个目录提交到git上面
