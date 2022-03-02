(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{605:function(s,n,a){"use strict";a.r(n);var e=a(6),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"使用createobjecturl遇到的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用createobjecturl遇到的问题"}},[s._v("#")]),s._v(" 使用createObjectURL遇到的问题")]),s._v(" "),a("h3",{attrs:{id:"在chrome中的表现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在chrome中的表现"}},[s._v("#")]),s._v(" 在chrome中的表现")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/65b969abecd04ae08da5d05e0ef78518~tplv-k3u1fbpfcp-watermark.image",alt:""}}),s._v(" "),a("code",[s._v("blob:http://172.28.74.136:8019/c2c5811e-906b-48d1-93a8-edb89c237f54")])]),s._v(" "),a("h3",{attrs:{id:"在ie中的表现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在ie中的表现"}},[s._v("#")]),s._v(" 在IE中的表现")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/06e4d26dcaff492a874c75d090e3fc8f~tplv-k3u1fbpfcp-watermark.image",alt:""}}),s._v(" "),a("code",[s._v("blob:9C9B0F3D-3E46-46F3-95AF-524089FB5E0F")])]),s._v(" "),a("h3",{attrs:{id:"第一时间想到的时候-createobjecturl这个属性的兼容问题-在ie中生成的链接不一样-于是决定手动去拼接一个和chrome一样的地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一时间想到的时候-createobjecturl这个属性的兼容问题-在ie中生成的链接不一样-于是决定手动去拼接一个和chrome一样的地址"}},[s._v("#")]),s._v(" 第一时间想到的时候，createObjectURL这个属性的兼容问题，在ie中生成的链接不一样，于是决定手动去拼接一个和chrome一样的地址")]),s._v(" "),a("h4",{attrs:{id:"blob-window-location-origin-url-createobjecturl-blob-split-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blob-window-location-origin-url-createobjecturl-blob-split-1"}},[s._v("#")]),s._v(" "),a("code",[s._v("blob:${window.location.origin}/${URL.createObjectURL(blob).split(':')[1]}")])]),s._v(" "),a("p",[s._v("结果遇到了另外一个坑，window.location.origin在IE中的结果是Undefined。。。换种方式拼接")]),s._v(" "),a("h4",{attrs:{id:"blob-window-location-protocol-window-location-host-url-createobjecturl-blob-split-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blob-window-location-protocol-window-location-host-url-createobjecturl-blob-split-1"}},[s._v("#")]),s._v(" "),a("code",[s._v("blob:${window.location.protocol}//${window.location.host}/${URL.createObjectURL(blob).split(':')[1]}")])]),s._v(" "),a("p",[s._v("难受的是拼好也没用，在IE中，这样的方式也无法下载文件，于是乎，谷歌搜索。")]),s._v(" "),a("h3",{attrs:{id:"解决方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方式"}},[s._v("#")]),s._v(" 解决方式")]),s._v(" "),a("p",[a("code",[s._v("window.navigator.msSaveOrOpenBlob(blob, filename)")]),s._v(" "),a("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7f7e3df74fe47d3923736abfca43d4f~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"文件流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件流"}},[s._v("#")]),s._v(" 文件流")]),s._v(" "),a("h3",{attrs:{id:"文件流相关接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件流相关接口"}},[s._v("#")]),s._v(" 文件流相关接口")]),s._v(" "),a("ul",[a("li",[s._v("内置文件流接口："),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Blob",target:"_blank",rel:"noopener noreferrer"}},[s._v("Blob"),a("OutboundLink")],1),s._v("（文件流接口定义）")]),s._v(" "),a("li",[s._v("内置文件流对象 ："),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/File",target:"_blank",rel:"noopener noreferrer"}},[s._v("File"),a("OutboundLink")],1),s._v("（单文件，继承于接口Blob，故可使用Blod的方法级）和 FileList（多文件集合）")]),s._v(" "),a("li",[s._v("内置文件流读取对象 ："),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader",target:"_blank",rel:"noopener noreferrer"}},[s._v("FileReader"),a("OutboundLink")],1),s._v("（单文件读取）")])]),s._v(" "),a("h2",{attrs:{id:"文件流转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件流转换"}},[s._v("#")]),s._v(" 文件流转换")]),s._v(" "),a("h3",{attrs:{id:"_1、file转base64"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、file转base64"}},[s._v("#")]),s._v(" 1、file转base64")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/**\n * 上传附件转base64\n * @param {File} file 文件流\n */\nexport const fileByBase64 = (file, callback) => {\n  var reader = new FileReader();\n  // 传入一个参数对象即可得到基于该参数对象的文本内容\n  reader.readAsDataURL(file);\n  reader.onload = function (e) {\n    // target.result 该属性表示目标对象的DataURL\n    console.log(e.target.result);\n    callback(e.target.result)\n  };\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"_2、base64转blob"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、base64转blob"}},[s._v("#")]),s._v(" 2、base64转blob")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/**\n * base64转Blob\n * @param {*} data \n */\nexport const base64ByBlob = (base64, callback) => {\n  var arr = base64.split(','), mime = arr[0].match(/:(.*?);/)[1],\n    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);\n  while (n--) {\n    u8arr[n] = bstr.charCodeAt(n);\n  }\n  console.log(new Blob([u8arr], { type: mime }))\n  callback(new Blob([u8arr], { type: mime }))\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"_3、blob转url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、blob转url"}},[s._v("#")]),s._v(" 3、blob转url")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var url = window.URL.createObjectURL(blob)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4、使用demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、使用demo"}},[s._v("#")]),s._v(" 4、使用demo")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>文件流的转换与下载</title>\n  </head>\n  <body>\n    <input type="file" id="input"/>\n  </body>\n  <script>\n    const input = document.querySelector("input");\n    input.addEventListener("input", inputChanged);\n    function inputChanged(e) {\n      console.log(e.target.files[0], "files");\n      fileByBase64(e.target.files[0], () => {});\n      //   fileByBase64(e.target.files[0], base64ByBlob);\n    }\n    const fileByBase64 = (file, callback) => {\n      var reader = new FileReader();\n      // 传入一个参数对象即可得到基于该参数对象的文本内容\n      reader.readAsDataURL(file);\n      reader.onload = function (e) {\n        // target.result 该属性表示目标对象的DataURL\n        console.log(e.target.result, "fileByBase64");\n        callback(e.target.result);\n      };\n    };\n    const base64ByBlob = (base64) => {\n      var arr = base64.split(","),\n        mime = arr[0].match(/:(.*?);/)[1],\n        bstr = atob(arr[1]),\n        n = bstr.length,\n        u8arr = new Uint8Array(n);\n      while (n--) {\n        u8arr[n] = bstr.charCodeAt(n);\n      }\n      const blob = new Blob([u8arr], { type: mime });\n      console.log(blob, "base64ByBlob");\n      // console.log(window.URL.createObjectURL(blob), "URL");\n      //   downloadByFile(blob);\n      //   callback(new Blob([u8arr], { type: mime }));\n    };\n    const downloadByFile = (blob) => {\n      // 创建a标签\n      const alink = document.createElement("a");\n      // 文件名\n      alink.download = "backup.txt";\n      // 开始下载\n      alink.style.display = "none";\n      // for IE\n      if (window.navigator && window.navigator.msSaveOrOpenBlob) {\n        window.navigator.msSaveOrOpenBlob(blob, "backup.txt");\n      } else {\n        // for No-IE\n        alink.href = URL.createObjectURL(blob);\n        document.body.appendChild(alink);\n        // 触发点击a标签事件\n        alink.click();\n        document.body.removeChild(alink);\n      }\n    };\n  <\/script>\n</html>\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br")])]),a("h2",{attrs:{id:"文件下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件下载"}},[s._v("#")]),s._v(" 文件下载")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import axios from 'axios';\nimport request from '@/utils/request';\naxios.defaults.timeout = 1000 * 60 * 5;\n\n// 取response中的文件名称\nconst getFileNameFromHeader = headers => {\n  if (!headers) {\n    return '';\n  }\n  const contentDisposition = headers['content-disposition'];\n  if (!contentDisposition) {\n    return '';\n  }\n  const reg = /filename=(.*)/;\n  const result = reg.exec(contentDisposition);\n  return result ? decodeURI(result[1]) : '';\n};\n\nexport default {\n  // 下载文件， 传入文件流\n  downloadByFile (res) {\n    // 处理返回的文件流\n    const content = res.data;\n    const headers = res.headers;\n    // 创建a标签\n    const alink = document.createElement('a');\n    // 文件名\n    alink.download = getFileNameFromHeader(headers);\n    // 开始下载\n    alink.style.display = 'none';\n    const blob = new Blob([content]);\n    // for IE\n    if (window.navigator && window.navigator.msSaveOrOpenBlob) {\n      window.navigator.msSaveOrOpenBlob(blob, getFileNameFromHeader(headers));\n    } else {\n      // for No-IE\n      alink.href = URL.createObjectURL(blob);\n      document.body.appendChild(alink);\n      // 触发点击a标签事件\n      alink.click();\n      document.body.removeChild(alink);\n    }\n  },\n\n  // 下载文件， 传入接口名\n  downloadByUrl (exportParams) {\n    return new Promise(async (resolve, reject) => {\n      const {\n        url,\n        params,\n        fileName,\n        method\n      } = exportParams;\n      const requestParams = {\n        url: url,\n        method: method || 'get',\n        responseType: 'blob'\n      };\n      // 接口请求方式\n      if (method === 'post') {\n        requestParams.data = params;\n      } else {\n        requestParams.params = params;\n      }\n      try {\n        const res = await request(requestParams);\n        // 请求成功\n        resolve(res);\n        // 处理返回的文件流\n        const content = res.data;\n        const headers = res.headers;\n        // 创建a标签\n        const alink = document.createElement('a');\n        // 文件名\n        if (fileName) {\n          alink.download = fileName;\n        } else {\n          alink.download = getFileNameFromHeader(headers);\n        }\n        // 开始下载\n        alink.style.display = 'none';\n        const blob = new Blob([content]);\n        // for IE\n        if (window.navigator && window.navigator.msSaveOrOpenBlob) {\n          window.navigator.msSaveOrOpenBlob(blob, getFileNameFromHeader(headers));\n        } else {\n          // for No-IE\n          alink.href = URL.createObjectURL(blob);\n          document.body.appendChild(alink);\n          // 触发点击a标签事件\n          alink.click();\n          document.body.removeChild(alink);\n        }\n      } catch (err) {\n        reject(err);\n      }\n    });\n  }\n};\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br")])]),a("h2",{attrs:{id:"大文件上传-与-断点续传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大文件上传-与-断点续传"}},[s._v("#")]),s._v(" 大文件上传 与 断点续传")]),s._v(" "),a("ul",[a("li",[s._v("大文件上传基本都是分片，Blob.slice")]),s._v(" "),a("li",[s._v("断点续传：根据文件内容生成hash作为分片的名称，然后和服务端比对，上传过的不再上传。")])]),s._v(" "),a("p",[s._v("参考这篇文章，讲的很清楚 ："),a("a",{attrs:{href:"https://juejin.im/post/6844904046436843527",target:"_blank",rel:"noopener noreferrer"}},[s._v("字节跳动面试官：请你实现一个大文件上传和断点续传"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/6844903617606975496",target:"_blank",rel:"noopener noreferrer"}},[s._v("JavaScript 文件流转换与使用"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000020153597",target:"_blank",rel:"noopener noreferrer"}},[s._v("javascript实现上传文件流file转base64，base64转blob，blob转url访问地址"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000022208272",target:"_blank",rel:"noopener noreferrer"}},[s._v("前端文件操作--上传篇"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=t.exports}}]);