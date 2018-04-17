const fs = require('fs');
const path = require('path');
/**
 * 
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
function findSync(startPath) {
    let result = [];
    function finder(pa) {
        let files = fs.readdirSync(pa);
        files.forEach((val,index) => {
            let fPath = path.join(pa,val);
            let stats = fs.statSync(fPath);
            if(stats.isDirectory()) {
                result.push(fPath);
                // 递归读取文件夹下文件
                // finder(fPath)
            };
            // 读取文件名
            if(stats.isFile()) result.push(fPath);
        });
    }
    finder(startPath);
    return result;
}

function makeContent(data, componentName) {
  let _d = '`'
  let _data = `
> 使用
${_d}${_d}${_d}js
import { ${componentName} } form 'im-vuer'
Vue.component(\${${componentName}.name}, ${componentName})
${_d}${_d}${_d}

> 示例代码
${_d}${_d}${_d}js
${data}
${_d}${_d}${_d}
> 参数说明
`
  return _data
}

function makeTable(tb_data) {
  let table_data = ''
  for (var i = 0; i < tb_data.length; i++) {
    table_data += `
    <tr>
      <td>${tb_data[i].params}</td> 
      <td>${tb_data[i].instructions}</td> 
      <td>${tb_data[i].type}</td> 
      <td>${tb_data[i].optional}</td> 
      <td>${tb_data[i].default}</td>
    </tr>`
  }
  let result = `
  <div>
   <table>
    <thead>
     <tr>
      <th>参数</th> 
      <th>说明</th> 
      <th>类型</th> 
      <th>可选值</th> 
      <th>默认值</th>
     </tr>
    </thead> 
    <tbody>`
    + table_data + 
    `
    </tbody>
   </table>
  </div>
  `

  return result
}


let _$str = `let api = [{
  params: 'data',
  instructions: '数据列表',
  type: 'Array',
  optional: '-',
  default: '-'
},{
  params: 'showStatus',
  instructions: '控制组件显示',
  type: 'Boolean',
  optional: 'true, false',
  default: 'false'
},{
  params: '@cancelBtn',
  instructions: '取消按钮事件',
  type: 'Function',
  optional: '-',
  default: '-'
},{
  params: '@confirmBtn',
  instructions: '确定按钮事件',
  type: 'Function',
  optional: '-',
  default: '-'
}]

module.exports = api`

function creatFile(files) {

  let count = 0;
  files.map(v => {

    const ext = path.parse(v).ext;  // 获取文件后缀名
    const fileName = path.parse(v).name;  // 获取文件名字
    const md_create_path = `./create/${fileName}.MD`;  // 创建路径和文件名字
    // const js_create_path = `./api/${fileName}.js`;  // 创建路径和文件名字

    if (ext != '.vue') {
      return
    }

    fs.exists(md_create_path, function(exists) {

      if (!exists) return

      let md_data_content = fs.readFileSync(v, "utf-8");  // 读取文件内容

      let api_data = require('./api/' + fileName + '.js');  // 获取对应的文件的api参数内容

      let md_result_data = makeContent(md_data_content, fileName) + makeTable(api_data);  // 生成模板
      let js_result_data = _$str;  // 生成模板

      fs.writeFileSync(md_create_path, md_result_data, function(err) {
        if(err) {
          return console.log(err);
        }
        console.log(`The file ${fileName}.MD was saved!`, count);
        count++;
      });

    })

  })
}

let files = findSync(path.resolve('../src/demo'));
creatFile(files);