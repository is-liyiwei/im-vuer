node createFile

生成文档，对应demo下的所有.vue文件

table数据生成，依赖api文件夹下的对应的.js文件，这个要自己写

Dialog.MD要手动改下，特殊引入方式
PreviewImage.MD要手动改下，特殊引入方式

新增组件步骤

1、编写api/的js文件，文件名要和demo目录下的一样即可

2、docs目录下面的_sidebar.md这里要添加那个组件

3、src/index.html也要更新，复制到dist目录

4、main-npm.js要引入组件再打包






每次更新代码，要修改package.json的version


备注：更新步骤

1、先删除example和dist，再打包example，即npm run build

2、打包js，即npm run bnpm生成dist目录，这里要把浏览器使用的demo放到里面来，文件在/src/index.html

3、example里面的文件更新到github.io上面(另一个git)，更新示例

4、如果修改了文档什么的，还要更改docs目录，使用本目录的createFile.js自动生成，然后create目录全部覆盖docs根目录(en子目录暂时不管)，_coverpage.md文件更新版本号

5、然后整个目录提交到git上面
