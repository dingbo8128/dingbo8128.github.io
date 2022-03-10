"use strict";(self.webpackChunktddocs=self.webpackChunktddocs||[]).push([[4776],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(k,l(l({ref:n},c),{},{components:t})):a.createElement(k,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4216:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],p={sidebar_position:3},i="Python Connector",s={unversionedId:"reference/connector/python",id:"reference/connector/python",title:"Python Connector",description:"Python \u8fde\u63a5\u5668\u7684\u4f7f\u7528\u53c2\u89c1\u89c6\u9891\u6559\u7a0b",source:"@site/docs/15-reference/connector/python.mdx",sourceDirName:"15-reference/connector",slug:"/reference/connector/python",permalink:"/reference/connector/python",editUrl:"https://github.com/taosdata/docs.taosdata.com/edit/main/docs/15-reference/connector/python.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Java Connector",permalink:"/reference/connector/java"},next:{title:"Go Connector",permalink:"/reference/connector/go"}},c={},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"Python \u8fde\u63a5\u5668\u5b89\u88c5",id:"python-\u8fde\u63a5\u5668\u5b89\u88c5",level:3},{value:"\u793a\u4f8b\u7a0b\u5e8f",id:"\u793a\u4f8b\u7a0b\u5e8f",level:3},{value:"\u5b89\u88c5\u9a8c\u8bc1",id:"\u5b89\u88c5\u9a8c\u8bc1",level:3},{value:"Python \u8fde\u63a5\u5668\u7684\u4f7f\u7528",id:"python-\u8fde\u63a5\u5668\u7684\u4f7f\u7528",level:3},{value:"PEP-249 \u517c\u5bb9 API",id:"pep-249-\u517c\u5bb9-api",level:4},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:5},{value:"Query API",id:"query-api",level:4},{value:"\u8ba2\u9605 API",id:"\u8ba2\u9605-api",level:4},{value:"JSON \u7c7b\u578b",id:"json-\u7c7b\u578b",level:4},{value:"\u5173\u4e8e\u7eb3\u79d2 (nanosecond) \u5728 Python \u8fde\u63a5\u5668\u4e2d\u7684\u8bf4\u660e",id:"\u5173\u4e8e\u7eb3\u79d2-nanosecond-\u5728-python-\u8fde\u63a5\u5668\u4e2d\u7684\u8bf4\u660e",level:4},{value:"\u5e2e\u52a9\u4fe1\u606f",id:"\u5e2e\u52a9\u4fe1\u606f",level:4},{value:'<a class="anchor" id="restful"></a>RESTful Connector',id:"restful-connector",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5-1",level:3},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",level:3}],m={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python-connector"},"Python Connector"),(0,o.kt)("p",null,"Python \u8fde\u63a5\u5668\u7684\u4f7f\u7528\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://www.taosdata.com/blog/2020/11/11/1963.html"},"\u89c6\u9891\u6559\u7a0b")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\uff1a\u53c2\u89c1\u4e0b\u9762\u5177\u4f53\u6b65\u9aa4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u793a\u4f8b\u7a0b\u5e8f"),"\uff1a\u4f4d\u4e8e install_directory/examples/python")),(0,o.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("p",null,"Python \u8fde\u63a5\u5668\u652f\u6301\u7684\u7cfb\u7edf\u6709\uff1aLinux 64/Windows x64"),(0,o.kt)("p",null,"\u5b89\u88c5\u524d\u51c6\u5907\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5df2\u5b89\u88c5\u597d TDengine \u5e94\u7528\u9a71\u52a8\uff0c\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"li",href:"https://www.taosdata.com/cn/documentation/connector#driver"},"\u5b89\u88c5\u8fde\u63a5\u5668\u9a71\u52a8\u6b65\u9aa4")),(0,o.kt)("li",{parentName:"ul"},"\u5df2\u5b89\u88c5 python 2.7 or >= 3.4"),(0,o.kt)("li",{parentName:"ul"},"\u5df2\u5b89\u88c5 pip")),(0,o.kt)("h3",{id:"python-\u8fde\u63a5\u5668\u5b89\u88c5"},"Python \u8fde\u63a5\u5668\u5b89\u88c5"),(0,o.kt)("p",null,"Python \u8fde\u63a5\u5668\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"pip")," \u4ece PyPI \u4e0b\u8f7d\u5b89\u88c5\u3002\u6ce8\u610f TDengine Python \u8fde\u63a5\u5668\u7684\u5305\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"taospy")," \u800c\u4e0d\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"taos"),"\uff08\u8fd9\u662f\u4e00\u4e2a\u4e0e TDengine \u65e0\u5173\u7684\u53e6\u4e00\u4e2a\u7a0b\u5e8f\uff09\u3002\u4f46\u4e3a\u4fdd\u6301\u5411\u540e\u517c\u5bb9\u6027\uff0c\u4ecd\u7136\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"import taos")," \u5bfc\u5165\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install taospy\n")),(0,o.kt)("p",null,"\u5982\u679c\u4e0d\u4f7f\u7528\u7cfb\u7edf\u9ed8\u8ba4\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"python")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"pip"),"\uff0c\u5219\u9700\u8981\u6307\u5b9a ",(0,o.kt)("inlineCode",{parentName:"p"},"pip")," \u7684\u7248\u672c\u6216\u8def\u5f84\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip2 install taospy\npip3 install taospy\n")),(0,o.kt)("p",null,"Python \u547d\u4ee4\u884c\u4f9d\u8d56 taos \u52a8\u6001\u5e93 ",(0,o.kt)("inlineCode",{parentName:"p"},"libtaos.so")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"taos.dll"),", \u5bf9\u4e8e Windows \u5ba2\u6237\u7aef\uff0c\u5b89\u88c5 TDengine windows \u5ba2\u6237\u7aef\u540e\uff0c\u5982\u679c\u4e0d\u80fd\u6b63\u5e38 ",(0,o.kt)("inlineCode",{parentName:"p"},"import taos"),"\uff0c\u53ef\u4ee5\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\TDengine\\driver\\taos.dll")," \u62f7\u8d1d\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\windows\\system32")," \u76ee\u5f55\u540e\u91cd\u65b0\u5c1d\u8bd5\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u65e0\u6cd5\u8054\u7f51\u7528\u6237\uff0c\u53ef\u4ee5\u5c06 TDengine \u5ba2\u6237\u7aef\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"connector/python")," \u8def\u5f84\uff08Linux \u4e0b\u5176\u5b89\u88c5\u8def\u5f84\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/taos/connector/python/"),"\uff0cWindows \u4e0b\u9ed8\u8ba4\u5b89\u88c5\u8def\u5f84\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\TDengine\\connector\\python"),"\uff09\u6dfb\u52a0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"PYTHONPATH")," \u73af\u5883\u53d8\u91cf\u4e2d\u4f7f\u7528\u3002"),(0,o.kt)("h3",{id:"\u793a\u4f8b\u7a0b\u5e8f"},"\u793a\u4f8b\u7a0b\u5e8f"),(0,o.kt)("p",null,"\u793a\u4f8b\u7a0b\u5e8f\u6e90\u7801\u4f4d\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"<install_directory>/examples/python"),"\uff0c\u6709\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"read_example.py")," Python \u793a\u4f8b\u6e90\u7a0b\u5e8f")),(0,o.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("inlineCode",{parentName:"p"},"read_example.py"),"\u8fd9\u4e2a\u7a0b\u5e8f\u6765\u8bbe\u8ba1\u7528\u6237\u81ea\u5df1\u7684\u5199\u5165\u3001\u67e5\u8be2\u7a0b\u5e8f\u3002"),(0,o.kt)("p",null,"\u5728\u5b89\u88c5\u4e86\u5bf9\u5e94\u7684\u5e94\u7528\u9a71\u52a8\u540e\uff0c\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"import taos"),"\u5f15\u5165 taos \u7c7b\u3002\u4e3b\u8981\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u901a\u8fc7 taos.connect \u83b7\u53d6 TaosConnection \u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u53ef\u4ee5\u4e00\u4e2a\u7a0b\u5e8f\u53ea\u7533\u8bf7\u4e00\u4e2a\uff0c\u5728\u591a\u7ebf\u7a0b\u4e2d\u5171\u4eab\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u901a\u8fc7 TaosConnection \u5bf9\u8c61\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},".cursor()")," \u65b9\u6cd5\u83b7\u53d6\u4e00\u4e2a\u65b0\u7684\u6e38\u6807\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u6e38\u6807\u5bf9\u8c61\u5fc5\u987b\u4fdd\u8bc1\u6bcf\u4e2a\u7ebf\u7a0b\u72ec\u4eab\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u901a\u8fc7\u6e38\u6807\u5bf9\u8c61\u7684 execute()\u65b9\u6cd5\uff0c\u6267\u884c\u5199\u5165\u6216\u67e5\u8be2\u7684 SQL \u8bed\u53e5\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u6267\u884c\u7684\u662f\u5199\u5165\u8bed\u53e5\uff0cexecute \u8fd4\u56de\u7684\u662f\u6210\u529f\u5199\u5165\u7684\u884c\u6570\u4fe1\u606f affected rows\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u6267\u884c\u7684\u662f\u67e5\u8be2\u8bed\u53e5\uff0c\u5219 execute \u6267\u884c\u6210\u529f\u540e\uff0c\u9700\u8981\u901a\u8fc7 fetchall \u65b9\u6cd5\u53bb\u62c9\u53d6\u7ed3\u679c\u96c6\u3002 \u5177\u4f53\u65b9\u6cd5\u53ef\u4ee5\u53c2\u8003\u793a\u4f8b\u4ee3\u7801\u3002"))),(0,o.kt)("h3",{id:"\u5b89\u88c5\u9a8c\u8bc1"},"\u5b89\u88c5\u9a8c\u8bc1"),(0,o.kt)("p",null,"\u8fd0\u884c\u5982\u4e0b\u6307\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd {install_directory}/examples/python/PYTHONConnectorChecker/`\npython3 PythonChecker.py -host <fqdn>\n")),(0,o.kt)("p",null,"\u9a8c\u8bc1\u901a\u8fc7\u5c06\u6253\u5370\u51fa\u6210\u529f\u4fe1\u606f\u3002"),(0,o.kt)("h3",{id:"python-\u8fde\u63a5\u5668\u7684\u4f7f\u7528"},"Python \u8fde\u63a5\u5668\u7684\u4f7f\u7528"),(0,o.kt)("h4",{id:"pep-249-\u517c\u5bb9-api"},"PEP-249 \u517c\u5bb9 API"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u50cf\u5176\u4ed6\u6570\u636e\u5e93\u4e00\u6837\uff0c\u4f7f\u7528\u7c7b\u4f3c ",(0,o.kt)("a",{parentName:"p",href:"https://www.python.org/dev/peps/pep-0249/"},"PEP-249")," \u6570\u636e\u5e93 API \u89c4\u8303\u98ce\u683c\u7684 API\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import taos\n\nconn = taos.connect()\ncursor = conn.cursor()\n\ncursor.execute("show databases")\nresults = cursor.fetchall()\nfor row in results:\n    print(row)\n')),(0,o.kt)("h5",{id:"\u4ee3\u7801\u793a\u4f8b"},"\u4ee3\u7801\u793a\u4f8b"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5bfc\u5165 TDengine \u5ba2\u6237\u7aef\u6a21\u5757"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import taos\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u83b7\u53d6\u8fde\u63a5\u5e76\u83b7\u53d6\u6e38\u6807\u5bf9\u8c61"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'conn = taos.connect(host="127.0.0.1", user="root", password="taosdata", config="/etc/taos")\nc1 = conn.cursor()\n')),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"host")," \u662f TDengine \u670d\u52a1\u7aef\u6240\u5728 IP, ",(0,o.kt)("em",{parentName:"p"},"config")," \u4e3a\u5ba2\u6237\u7aef\u914d\u7f6e\u6587\u4ef6\u6240\u5728\u76ee\u5f55\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5199\u5165\u6570\u636e"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import datetime\n\n# \u521b\u5efa\u6570\u636e\u5e93\nc1.execute('create database db')\nc1.execute('use db')\n# \u5efa\u8868\nc1.execute('create table tb (ts timestamp, temperature int, humidity float)')\n# \u63d2\u5165\u6570\u636e\nstart_time = datetime.datetime(2019, 11, 1)\naffected_rows = c1.execute('insert into tb values (\\'%s\\', 0, 0.0)' %start_time)\n# \u6279\u91cf\u63d2\u5165\u6570\u636e\ntime_interval = datetime.timedelta(seconds=60)\nsqlcmd = ['insert into tb values']\nfor irow in range(1,11):\n    start_time += time_interval\n    sqlcmd.append('(\\'%s\\', %d, %f)' %(start_time, irow, irow*1.2))\naffected_rows = c1.execute(' '.join(sqlcmd))\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u67e5\u8be2\u6570\u636e"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"c1.execute('select * from tb')\n# \u62c9\u53d6\u67e5\u8be2\u7ed3\u679c\ndata = c1.fetchall()\n# \u8fd4\u56de\u7684\u7ed3\u679c\u662f\u4e00\u4e2a\u5217\u8868\uff0c\u6bcf\u4e00\u884c\u6784\u6210\u5217\u8868\u7684\u4e00\u4e2a\u5143\u7d20\nnumOfRows = c1.rowcount\nnumOfCols = len(c1.description)\nfor irow in range(numOfRows):\n    print(\"Row%d: ts=%s, temperature=%d, humidity=%f\" %(irow, data[irow][0], data[irow][1], data[irow][2]))\n\n# \u76f4\u63a5\u4f7f\u7528cursor \u5faa\u73af\u62c9\u53d6\u67e5\u8be2\u7ed3\u679c\nc1.execute('select * from tb')\nfor data in c1:\n    print(\"ts=%s, temperature=%d, humidity=%f\" %(data[0], data[1], data[2]))\n")))),(0,o.kt)("h4",{id:"query-api"},"Query API"),(0,o.kt)("p",null,"\u4ece v2.1.0 \u7248\u672c\u5f00\u59cb, \u6211\u4eec\u63d0\u4f9b\u53e6\u5916\u4e00\u79cd\u65b9\u6cd5\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"connection.query")," \u6765\u64cd\u4f5c\u6570\u636e\u5e93\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import taos\n\nconn = taos.connect()\nconn.execute("create database if not exists pytest")\n\nresult = conn.query("show databases")\nnum_of_fields = result.field_count\nfor field in result.fields:\n    print(field)\nfor row in result:\n    print(row)\nconn.execute("drop database pytest")\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"query")," \u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"TaosResult")," \u5bf9\u8c61\uff0c\u5e76\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u5c5e\u6027\u6216\u65b9\u6cd5:"),(0,o.kt)("p",null,"\u5c5e\u6027:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fields"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"TaosFields")," \u96c6\u5408\u7c7b\uff0c\u63d0\u4f9b\u8fd4\u56de\u6570\u636e\u7684\u5217\u4fe1\u606f\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"field_count"),": \u8fd4\u56de\u6570\u636e\u7684\u5217\u6570."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"affected_rows"),": \u63d2\u5165\u6570\u636e\u7684\u884c\u6570."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"row_count"),": \u67e5\u8be2\u6570\u636e\u7ed3\u679c\u6570."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"precision"),": \u5f53\u524d\u6570\u636e\u5e93\u7684\u65f6\u95f4\u7cbe\u5ea6.")),(0,o.kt)("p",null,"\u65b9\u6cd5:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fetch_all()"),": \u7c7b\u4f3c\u4e8e ",(0,o.kt)("inlineCode",{parentName:"li"},"cursor.fetchall()")," \u8fd4\u56de\u540c\u6837\u7684\u96c6\u5408\u6570\u636e"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fetch_all_into_dict()"),": v2.1.1 \u65b0\u6dfb\u52a0\u7684 API\uff0c\u5c06\u4e0a\u9762\u7684\u6570\u636e\u8f6c\u6362\u6210\u5b57\u5178\u7c7b\u578b\u8fd4\u56de"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"blocks_iter()")," ",(0,o.kt)("inlineCode",{parentName:"li"},"rows_iter()"),": \u6839\u636e\u5e95\u5c42 API \u63d0\u4f9b\u7684\u4e24\u79cd\u4e0d\u540c\u8fed\u4ee3\u5668\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fetch_rows_a"),": \u5f02\u6b65 API"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"errno"),": \u9519\u8bef\u7801"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"errstr"),": \u9519\u8bef\u4fe1\u606f"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"close"),": \u5173\u95ed\u7ed3\u679c\u5bf9\u8c61\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u76f4\u63a5\u8c03\u7528")),(0,o.kt)("h4",{id:"\u8ba2\u9605-api"},"\u8ba2\u9605 API"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u540c\u6b65\u8ba2\u9605\u961f\u5217\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# \u521b\u5efa\u4e00\u4e2a\u4e3b\u9898\u4e3a 'test' \u6d88\u8d39\u5468\u671f\u4e3a1000\u6beb\u79d2\u7684\u8ba2\u9605\n#   \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a True \u8868\u793a\u91cd\u65b0\u5f00\u59cb\u8ba2\u9605\uff0c\u5982\u4e3a False \u4e14\u4e4b\u524d\u521b\u5efa\u8fc7\u4e3b\u9898\u4e3a 'test' \u7684\u8ba2\u9605\uff0c\n#   \u5219\u8868\u793a\u7ee7\u7eed\u6d88\u8d39\u6b64\u8ba2\u9605\u7684\u6570\u636e\uff0c\u800c\u4e0d\u662f\u91cd\u65b0\u5f00\u59cb\u6d88\u8d39\u6240\u6709\u6570\u636e\nsub = conn.subscribe(True, \"test\", \"select * from tb;\", 1000)\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6d88\u8d39\u8ba2\u9605\u7684\u6570\u636e"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"data = sub.consume()\nfor d in data:\n    print(d)\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u53d6\u6d88\u8ba2\u9605"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"sub.close()\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5173\u95ed\u8fde\u63a5"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"conn.close()\n")))),(0,o.kt)("h4",{id:"json-\u7c7b\u578b"},"JSON \u7c7b\u578b"),(0,o.kt)("p",null,"\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"taospy")," ",(0,o.kt)("inlineCode",{parentName:"p"},"v2.2.0")," \u5f00\u59cb\uff0cPython \u8fde\u63a5\u5668\u5f00\u59cb\u652f\u6301 JSON \u6570\u636e\u7c7b\u578b\u7684\u6807\u7b7e\uff08TDengine \u7248\u672c\u8981\u6c42 Beta \u7248 2.3.5+\uff0c \u7a33\u5b9a\u7248 2.4.0+\uff09\u3002"),(0,o.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u4f7f\u7528 JSON \u7c7b\u578b\u6807\u7b7e\u7684\u8d85\u7ea7\u8868\u53ca\u5176\u5b50\u8868\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# encoding:UTF-8\nimport taos\n\nconn = taos.connect()\nconn.execute("create database if not exists py_test_json_type")\nconn.execute("use py_test_json_type")\n\nconn.execute("create stable s1 (ts timestamp, v1 int) tags (info json)")\nconn.execute("create table s1_1 using s1 tags (\'{\\"k1\\": \\"v1\\"}\')")\n')),(0,o.kt)("p",null,"\u67e5\u8be2\u5b50\u8868\u6807\u7b7e\u53ca\u8868\u540d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'tags = conn.query("select info, tbname from s1").fetch_all_into_dict()\ntags\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tags")," \u5185\u5bb9\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"[{'info': '{\"k1\":\"v1\"}', 'tbname': 's1_1'}]\n")),(0,o.kt)("p",null,"\u83b7\u53d6 JSON \u4e2d\u67d0\u503c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'k1 = conn.query("select info->\'k1\' as k1 from s1").fetch_all_into_dict()\n"""\n>>> k1\n[{\'k1\': \'"v1"\'}]\n"""\n')),(0,o.kt)("p",null,"\u66f4\u591a JSON \u7c7b\u578b\u7684\u64cd\u4f5c\u65b9\u5f0f\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://www.taosdata.com/cn/documentation/taos-sql"},"JSON \u7c7b\u578b\u4f7f\u7528\u8bf4\u660e"),"\u3002"),(0,o.kt)("h4",{id:"\u5173\u4e8e\u7eb3\u79d2-nanosecond-\u5728-python-\u8fde\u63a5\u5668\u4e2d\u7684\u8bf4\u660e"},"\u5173\u4e8e\u7eb3\u79d2 (nanosecond) \u5728 Python \u8fde\u63a5\u5668\u4e2d\u7684\u8bf4\u660e"),(0,o.kt)("p",null,"\u7531\u4e8e\u76ee\u524d Python \u5bf9 nanosecond \u652f\u6301\u7684\u4e0d\u5b8c\u5584(\u53c2\u89c1\u94fe\u63a5 1. 2. )\uff0c\u76ee\u524d\u7684\u5b9e\u73b0\u65b9\u5f0f\u662f\u5728 nanosecond \u7cbe\u5ea6\u65f6\u8fd4\u56de\u6574\u6570\uff0c\u800c\u4e0d\u662f ms \u548c us \u8fd4\u56de\u7684 datetime \u7c7b\u578b\uff0c\u5e94\u7528\u5f00\u53d1\u8005\u9700\u8981\u81ea\u884c\u5904\u7406\uff0c\u5efa\u8bae\u4f7f\u7528 pandas \u7684 to_datetime()\u3002\u672a\u6765\u5982\u679c Python \u6b63\u5f0f\u5b8c\u6574\u652f\u6301\u4e86\u7eb3\u79d2\uff0c\u6d9b\u601d\u6570\u636e\u53ef\u80fd\u4f1a\u4fee\u6539\u76f8\u5173\u63a5\u53e3\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/10611328/parsing-datetime-strings-containing-nanoseconds"},"https://stackoverflow.com/questions/10611328/parsing-datetime-strings-containing-nanoseconds")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.python.org/dev/peps/pep-0564/"},"https://www.python.org/dev/peps/pep-0564/"))),(0,o.kt)("h4",{id:"\u5e2e\u52a9\u4fe1\u606f"},"\u5e2e\u52a9\u4fe1\u606f"),(0,o.kt)("p",null,"\u7528\u6237\u53ef\u901a\u8fc7 python \u7684\u5e2e\u52a9\u4fe1\u606f\u76f4\u63a5\u67e5\u770b\u6a21\u5757\u7684\u4f7f\u7528\u4fe1\u606f\uff0c\u6216\u8005\u53c2\u8003 tests/examples/python \u4e2d\u7684\u793a\u4f8b\u7a0b\u5e8f\u3002\u4ee5\u4e0b\u4e3a\u90e8\u5206\u5e38\u7528\u7c7b\u548c\u65b9\u6cd5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"TaosConnection")," \u7c7b"),(0,o.kt)("p",{parentName:"li"},"\u53c2\u8003 python \u4e2d help(taos.TaosConnection)\u3002\n\u8fd9\u4e2a\u7c7b\u5bf9\u5e94\u5ba2\u6237\u7aef\u548c TDengine \u5efa\u7acb\u7684\u4e00\u4e2a\u8fde\u63a5\u3002\u5728\u5ba2\u6237\u7aef\u591a\u7ebf\u7a0b\u7684\u573a\u666f\u4e0b\uff0c\u63a8\u8350\u6bcf\u4e2a\u7ebf\u7a0b\u7533\u8bf7\u4e00\u4e2a\u72ec\u7acb\u7684\u8fde\u63a5\u5b9e\u4f8b\uff0c\u800c\u4e0d\u5efa\u8bae\u591a\u7ebf\u7a0b\u5171\u4eab\u4e00\u4e2a\u8fde\u63a5\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"TaosCursor")," \u7c7b"),(0,o.kt)("p",{parentName:"li"},"\u53c2\u8003 python \u4e2d help(taos.TaosCursor)\u3002\n\u8fd9\u4e2a\u7c7b\u5bf9\u5e94\u5ba2\u6237\u7aef\u8fdb\u884c\u7684\u5199\u5165\u3001\u67e5\u8be2\u64cd\u4f5c\u3002\u5728\u5ba2\u6237\u7aef\u591a\u7ebf\u7a0b\u7684\u573a\u666f\u4e0b\uff0c\u8fd9\u4e2a\u6e38\u6807\u5b9e\u4f8b\u5fc5\u987b\u4fdd\u6301\u7ebf\u7a0b\u72ec\u4eab\uff0c\u4e0d\u80fd\u8de8\u7ebf\u7a0b\u5171\u4eab\u4f7f\u7528\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u8fd4\u56de\u7ed3\u679c\u51fa\u73b0\u9519\u8bef\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"connect")," \u65b9\u6cd5"),(0,o.kt)("p",{parentName:"li"},"\u7528\u4e8e\u751f\u6210 taos.TaosConnection \u7684\u5b9e\u4f8b\u3002"))),(0,o.kt)("h2",{id:"restful-connector"},(0,o.kt)("a",{class:"anchor",id:"restful"}),"RESTful Connector"),(0,o.kt)("p",null,"\u4e3a\u652f\u6301\u5404\u79cd\u4e0d\u540c\u7c7b\u578b\u5e73\u53f0\u7684\u5f00\u53d1\uff0cTDengine \u63d0\u4f9b\u7b26\u5408 REST \u8bbe\u8ba1\u6807\u51c6\u7684 API\uff0c\u5373 RESTful API\u3002\u4e3a\u6700\u5927\u7a0b\u5ea6\u964d\u4f4e\u5b66\u4e60\u6210\u672c\uff0c\u4e0d\u540c\u4e8e\u5176\u4ed6\u6570\u636e\u5e93 RESTful API \u7684\u8bbe\u8ba1\u65b9\u6cd5\uff0cTDengine \u76f4\u63a5\u901a\u8fc7 HTTP POST \u8bf7\u6c42 BODY \u4e2d\u5305\u542b\u7684 SQL \u8bed\u53e5\u6765\u64cd\u4f5c\u6570\u636e\u5e93\uff0c\u4ec5\u9700\u8981\u4e00\u4e2a URL\u3002RESTful \u8fde\u63a5\u5668\u7684\u4f7f\u7528\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://www.taosdata.com/blog/2020/11/11/1965.html"},"\u89c6\u9891\u6559\u7a0b"),"\u3002"),(0,o.kt)("p",null,"\u6ce8\u610f\uff1a\u4e0e\u539f\u751f\u8fde\u63a5\u5668\u7684\u4e00\u4e2a\u533a\u522b\u662f\uff0cRESTful \u63a5\u53e3\u662f\u65e0\u72b6\u6001\u7684\uff0c\u56e0\u6b64 ",(0,o.kt)("inlineCode",{parentName:"p"},"USE db_name")," \u6307\u4ee4\u6ca1\u6709\u6548\u679c\uff0c\u6240\u6709\u5bf9\u8868\u540d\u3001\u8d85\u7ea7\u8868\u540d\u7684\u5f15\u7528\u90fd\u9700\u8981\u6307\u5b9a\u6570\u636e\u5e93\u540d\u524d\u7f00\u3002\uff08\u4ece 2.2.0.0 \u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301\u5728 RESTful url \u4e2d\u6307\u5b9a db_name\uff0c\u8fd9\u65f6\u5982\u679c SQL \u8bed\u53e5\u4e2d\u6ca1\u6709\u6307\u5b9a\u6570\u636e\u5e93\u540d\u524d\u7f00\u7684\u8bdd\uff0c\u4f1a\u4f7f\u7528 url \u4e2d\u6307\u5b9a\u7684\u8fd9\u4e2a db_name\u3002\u4ece 2.4.0.0 \u7248\u672c\u5f00\u59cb\uff0cRESTful \u9ed8\u8ba4\u6709 taosAdapter \u63d0\u4f9b\uff0c\u8981\u6c42\u5fc5\u987b\u5728 url \u4e2d\u6307\u5b9a db_name\u3002\uff09"),(0,o.kt)("h3",{id:"\u5b89\u88c5-1"},"\u5b89\u88c5"),(0,o.kt)("p",null,"RESTful \u63a5\u53e3\u4e0d\u4f9d\u8d56\u4e8e\u4efb\u4f55 TDengine \u7684\u5e93\uff0c\u56e0\u6b64\u5ba2\u6237\u7aef\u4e0d\u9700\u8981\u5b89\u88c5\u4efb\u4f55 TDengine \u7684\u5e93\uff0c\u53ea\u8981\u5ba2\u6237\u7aef\u7684\u5f00\u53d1\u8bed\u8a00\u652f\u6301 HTTP \u534f\u8bae\u5373\u53ef\u3002"),(0,o.kt)("h3",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,o.kt)("p",null,"\u5728\u5df2\u7ecf\u5b89\u88c5 TDengine \u670d\u52a1\u5668\u7aef\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u4ee5 Ubuntu \u73af\u5883\u4e2d\u4f7f\u7528 curl \u5de5\u5177\uff08\u786e\u8ba4\u5df2\u7ecf\u5b89\u88c5\uff09\u6765\u9a8c\u8bc1 RESTful \u63a5\u53e3\u7684\u6b63\u5e38\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u793a\u4f8b\u662f\u5217\u51fa\u6240\u6709\u7684\u6570\u636e\u5e93\uff0c\u8bf7\u628a h1.taosdata.com \u548c 6041\uff08\u7f3a\u7701\u503c\uff09\u66ff\u6362\u4e3a\u5b9e\u9645\u8fd0\u884c\u7684 TDengine \u670d\u52a1 fqdn \u548c\u7aef\u53e3\u53f7\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"curl -H 'Authorization: Basic cm9vdDp0YW9zZGF0YQ==' -d 'show databases;'\nh1.taosdata.com:6041/rest/sql\n")),(0,o.kt)("p",null,"\u8fd4\u56de\u503c\u7ed3\u679c\u5982\u4e0b\u8868\u793a\u9a8c\u8bc1\u901a\u8fc7\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "succ",\n  "head": [\n    "name",\n    "created_time",\n    "ntables",\n    "vgroups",\n    "replica",\n    "quorum",\n    "days",\n    "keep1,keep2,keep(D)",\n    "cache(MB)",\n    "blocks",\n    "minrows",\n    "maxrows",\n    "wallevel",\n    "fsync",\n    "comp",\n    "precision",\n    "status"\n  ],\n  "data": [\n    [\n      "log",\n      "2020-09-02 17:23:00.039",\n      4,\n      1,\n      1,\n      1,\n      10,\n      "30,30,30",\n      1,\n      3,\n      100,\n      4096,\n      1,\n      3000,\n      2,\n      "us",\n      "ready"\n    ]\n  ],\n  "rows": 1\n}\n')))}d.isMDXComponent=!0}}]);