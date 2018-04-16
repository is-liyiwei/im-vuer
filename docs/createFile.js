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
    <tbody>
     <tr>
      <td>message</td> 
      <td>文本内容</td> 
      <td>String</td> 
      <td></td> 
      <td></td>
     </tr> 
     <tr>
      <td>position</td> 
      <td>Toast 的位置</td> 
      <td>String</td> 
      <td>'top'<br />'bottom'<br />'middle'</td> 
      <td>'middle'</td>
     </tr> 
     <tr>
      <td>duration</td> 
      <td>持续时间（毫秒），若为 -1 则不会自动关闭</td> 
      <td>Number</td> 
      <td></td> 
      <td>3000</td>
     </tr> 
     <tr>
      <td>className</td> 
      <td>Toast 的类名。可以为其添加样式</td> 
      <td>String</td> 
      <td></td> 
      <td></td>
     </tr> 
     <tr>
      <td>iconClass</td> 
      <td>icon 图标的类名</td> 
      <td>String</td> 
      <td></td> 
      <td></td>
     </tr>
    </tbody>
   </table>
  </div>

`
  return _data
}

function creatFile(fileNames) {

  let count = 0;
  fileNames.map(v => {

    const ext = path.parse(v).ext;
    const name = path.parse(v).name;
    const dev_path = `./create/${name}.MD`;

    if (ext != '.vue') {
      return
    }

    fs.exists(dev_path, function(exists) {

      if (!exists) return

      let data = fs.readFileSync(v, "utf-8");

      fs.writeFileSync(dev_path, makeContent(data, name), function(err) {
        if(err) {
          return console.log(err);
        }
        console.log(`The file ${name}.MD was saved!`, count);
        count++;
      });

    })

  })
}

let fileNames = findSync(path.resolve('../src/demo'));
creatFile(fileNames);