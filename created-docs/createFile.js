const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

/**
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
function findFileSync (startPath) {
  let result = [];
  function finder(pa) {
    let files = fs.readdirSync(pa);
    files.forEach((val, index) => {
      let fPath = path.join(pa, val);
      let stats = fs.statSync(fPath);
      if (stats.isDirectory()) {
        result.push(fPath);
        // 递归读取文件夹下文件
        // finder(fPath)
      };
      // 读取文件名
      if (stats.isFile()) result.push(fPath);
    });
  }
  finder(startPath);
  return result;
}

function makeContent(data, componentName) {
  let _data = `> 使用

\`\`\`js
import { ${componentName} } form 'im-vuer'
Vue.component(${componentName}.name, ${componentName})
\`\`\`

> 示例代码

\`\`\`js
${data}
\`\`\`
> 参数说明
`
  return _data
}

function makeTable(tb_data) {
  let table_data = ''
  for (var i = 0; i < tb_data.length; i++) {
    table_data += `<tr>
        <td>${tb_data[i].params}</td> 
        <td>${tb_data[i].instructions}</td> 
        <td>${tb_data[i].type}</td> 
        <td>${tb_data[i].optional}</td> 
        <td>${tb_data[i].default}</td>
      </tr>
      `
  }
  let result = `<div>
  <table>
    <thead>
      <tr>
        <th>参数</th> 
        <th>说明</th> 
        <th>类型</th> 
        <th>可选值/备注</th> 
        <th>默认值</th>
      </tr>
    </thead> 
    <tbody>
      ${table_data}
    </tbody>
  </table>
</div>`
  return result
}

function creatFile(files) {

  let count = 0;
  files.map(v => {
    // 获取文件后缀名
    if (path.parse(v).ext != '.vue') return

    const fileName = path.parse(v).name;  // 获取文件名字
    const md_create_path = path.resolve(__dirname, `./create/${fileName}.MD`);  // 将要获取的文件路径

    fs.exists(md_create_path, function (exists) {

      if (!exists) return

      let demoContent = fs.readFileSync(v, "utf-8");  // 读取文件内容，用于生成示例代码

      let apiData = require(path.resolve(__dirname, './api/' + fileName + '.js'));  // 获取对应的文件的api参数内容，用于生成表格

      let resultData = makeContent(demoContent, fileName) + makeTable(apiData);  // 生成模板

      fs.writeFileSync(md_create_path, resultData);

      console.log(chalk.yellowBright.bgBlack.bold(`The file ${fileName}.MD was saved!`, count++ + '\n'));
    })

  })
}

let files = findFileSync(path.resolve(__dirname, '../src/demo'));
creatFile(files);