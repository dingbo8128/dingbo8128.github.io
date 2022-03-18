"use strict";(self.webpackChunktddocs=self.webpackChunktddocs||[]).push([[9454],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=l,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},245:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var n=r(7462),l=r(3366),o=(r(7294),r(3905)),a=["components"],i={sidebar_label:"\u8fb9\u754c\u9650\u5236"},u="\u8fb9\u754c\u9650\u5236",c={unversionedId:"reference/taos-sql/limit",id:"reference/taos-sql/limit",title:"\u8fb9\u754c\u9650\u5236",description:"\u4e00\u822c\u9650\u5236",source:"@site/docs/14-reference/01-taos-sql/09-limit.md",sourceDirName:"14-reference/01-taos-sql",slug:"/reference/taos-sql/limit",permalink:"/reference/taos-sql/limit",editUrl:"https://github.com/taosdata/docs.taosdata.com/edit/main/docs/14-reference/01-taos-sql/09-limit.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_label:"\u8fb9\u754c\u9650\u5236"},sidebar:"defaultSidebar",previous:{title:"\u6309\u7a97\u53e3\u5207\u5206\u805a\u5408",permalink:"/reference/taos-sql/interval"},next:{title:"JSON \u7c7b\u578b\u4f7f\u7528\u8bf4\u660e",permalink:"/reference/taos-sql/json"}},p={},s=[{value:"\u4e00\u822c\u9650\u5236",id:"\u4e00\u822c\u9650\u5236",level:2},{value:"GROUP BY \u7684\u9650\u5236",id:"group-by-\u7684\u9650\u5236",level:2},{value:"IS NOT NULL \u7684\u9650\u5236",id:"is-not-null-\u7684\u9650\u5236",level:2},{value:"ORDER BY \u7684\u9650\u5236",id:"order-by-\u7684\u9650\u5236",level:2},{value:"\u8868(\u5217)\u540d\u5408\u6cd5\u6027\u8bf4\u660e",id:"\u8868\u5217\u540d\u5408\u6cd5\u6027\u8bf4\u660e",level:2}],f={toc:s};function d(e){var t=e.components,r=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8fb9\u754c\u9650\u5236"},"\u8fb9\u754c\u9650\u5236"),(0,o.kt)("h2",{id:"\u4e00\u822c\u9650\u5236"},"\u4e00\u822c\u9650\u5236"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u540d\u6700\u5927\u957f\u5ea6\u4e3a 32\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8868\u540d\u6700\u5927\u957f\u5ea6\u4e3a 192\uff0c\u6bcf\u884c\u6570\u636e\u6700\u5927\u957f\u5ea6 16k \u4e2a\u5b57\u7b26, \u4ece 2.1.7.0 \u7248\u672c\u5f00\u59cb\uff0c\u6bcf\u884c\u6570\u636e\u6700\u5927\u957f\u5ea6 48k \u4e2a\u5b57\u7b26\uff08\u6ce8\u610f\uff1a\u6570\u636e\u884c\u5185\u6bcf\u4e2a BINARY/NCHAR \u7c7b\u578b\u7684\u5217\u8fd8\u4f1a\u989d\u5916\u5360\u7528 2 \u4e2a\u5b57\u8282\u7684\u5b58\u50a8\u4f4d\u7f6e\uff09\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5217\u540d\u6700\u5927\u957f\u5ea6\u4e3a 64\uff0c\u6700\u591a\u5141\u8bb8 1024 \u5217\uff0c\u6700\u5c11\u9700\u8981 2 \u5217\uff0c\u7b2c\u4e00\u5217\u5fc5\u987b\u662f\u65f6\u95f4\u6233\u3002\uff08\u4ece 2.1.7.0 \u7248\u672c\u5f00\u59cb\uff0c\u6539\u4e3a\u6700\u591a\u5141\u8bb8 4096 \u5217\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u6807\u7b7e\u540d\u6700\u5927\u957f\u5ea6\u4e3a 64\uff0c\u6700\u591a\u5141\u8bb8 128 \u4e2a\uff0c\u53ef\u4ee5 1 \u4e2a\uff0c\u4e00\u4e2a\u8868\u4e2d\u6807\u7b7e\u503c\u7684\u603b\u957f\u5ea6\u4e0d\u8d85\u8fc7 16k \u4e2a\u5b57\u7b26\u3002"),(0,o.kt)("li",{parentName:"ul"},"SQL \u8bed\u53e5\u6700\u5927\u957f\u5ea6 1048576 \u4e2a\u5b57\u7b26\uff0c\u4e5f\u53ef\u901a\u8fc7\u5ba2\u6237\u7aef\u914d\u7f6e\u53c2\u6570 maxSQLLength \u4fee\u6539\uff0c\u53d6\u503c\u8303\u56f4 65480 ~ 1048576\u3002"),(0,o.kt)("li",{parentName:"ul"},"SELECT \u8bed\u53e5\u7684\u67e5\u8be2\u7ed3\u679c\uff0c\u6700\u591a\u5141\u8bb8\u8fd4\u56de 1024 \u5217\uff08\u8bed\u53e5\u4e2d\u7684\u51fd\u6570\u8c03\u7528\u53ef\u80fd\u4e5f\u4f1a\u5360\u7528\u4e00\u4e9b\u5217\u7a7a\u95f4\uff09\uff0c\u8d85\u9650\u65f6\u9700\u8981\u663e\u5f0f\u6307\u5b9a\u8f83\u5c11\u7684\u8fd4\u56de\u6570\u636e\u5217\uff0c\u4ee5\u907f\u514d\u8bed\u53e5\u6267\u884c\u62a5\u9519\u3002\uff08\u4ece 2.1.7.0 \u7248\u672c\u5f00\u59cb\uff0c\u6539\u4e3a\u6700\u591a\u5141\u8bb8 4096 \u5217\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u5e93\u7684\u6570\u76ee\uff0c\u8d85\u7ea7\u8868\u7684\u6570\u76ee\u3001\u8868\u7684\u6570\u76ee\uff0c\u7cfb\u7edf\u4e0d\u505a\u9650\u5236\uff0c\u4ec5\u53d7\u7cfb\u7edf\u8d44\u6e90\u9650\u5236\u3002")),(0,o.kt)("h2",{id:"group-by-\u7684\u9650\u5236"},"GROUP BY \u7684\u9650\u5236"),(0,o.kt)("p",null,"TAOS SQL \u652f\u6301\u5bf9\u6807\u7b7e\u3001TBNAME \u8fdb\u884c GROUP BY \u64cd\u4f5c\uff0c\u4e5f\u652f\u6301\u666e\u901a\u5217\u8fdb\u884c GROUP BY\uff0c\u524d\u63d0\u662f\uff1a\u4ec5\u9650\u4e00\u5217\u4e14\u8be5\u5217\u7684\u552f\u4e00\u503c\u5c0f\u4e8e 10 \u4e07\u4e2a\u3002\u6ce8\u610f\uff1agroup by \u4e0d\u652f\u6301 float,double \u7c7b\u578b\u3002"),(0,o.kt)("h2",{id:"is-not-null-\u7684\u9650\u5236"},"IS NOT NULL \u7684\u9650\u5236"),(0,o.kt)("p",null,"IS NOT NULL \u4e0e\u4e0d\u4e3a\u7a7a\u7684\u8868\u8fbe\u5f0f\u9002\u7528\u8303\u56f4\u3002"),(0,o.kt)("p",null,"IS NOT NULL \u652f\u6301\u6240\u6709\u7c7b\u578b\u7684\u5217\u3002\u4e0d\u4e3a\u7a7a\u7684\u8868\u8fbe\u5f0f\u4e3a <",">",'""\uff0c\u4ec5\u5bf9\u975e\u6570\u503c\u7c7b\u578b\u7684\u5217\u9002\u7528\u3002'),(0,o.kt)("h2",{id:"order-by-\u7684\u9650\u5236"},"ORDER BY \u7684\u9650\u5236"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u975e\u8d85\u7ea7\u8868\u53ea\u80fd\u6709\u4e00\u4e2a order by."),(0,o.kt)("li",{parentName:"ul"},"\u8d85\u7ea7\u8868\u6700\u591a\u4e24\u4e2a order by\uff0c \u5e76\u4e14\u7b2c\u4e8c\u4e2a\u5fc5\u987b\u4e3a ts."),(0,o.kt)("li",{parentName:"ul"},"order by tag\uff0c\u5fc5\u987b\u548c group by tag \u4e00\u8d77\uff0c\u5e76\u4e14\u662f\u540c\u4e00\u4e2a tag\u3002 tbname \u548c tag \u4e00\u6837\u903b\u8f91\u3002 \u53ea\u9002\u7528\u4e8e\u8d85\u7ea7\u8868"),(0,o.kt)("li",{parentName:"ul"},"order by \u666e\u901a\u5217\uff0c\u5fc5\u987b\u548c group by \u4e00\u8d77\u6216\u8005\u548c top/bottom \u4e00\u8d77\uff0c\u5e76\u4e14\u662f\u540c\u4e00\u4e2a\u666e\u901a\u5217\u3002 \u9002\u7528\u4e8e\u8d85\u7ea7\u8868\u548c\u666e\u901a\u8868\u3002\u5982\u679c\u540c\u65f6\u5b58\u5728 group by \u548c top/bottom \u4e00\u8d77\uff0corder by \u4f18\u5148\u5fc5\u987b\u548c group by \u540c\u4e00\u5217\u3002"),(0,o.kt)("li",{parentName:"ul"},"order by ts. \u9002\u7528\u4e8e\u8d85\u7ea7\u8868\u548c\u666e\u901a\u8868\u3002"),(0,o.kt)("li",{parentName:"ul"},"order by ts \u540c\u65f6\u542b\u6709 group by \u65f6 \u9488\u5bf9 group \u5185\u90e8\u7528 ts \u6392\u5e8f")),(0,o.kt)("h2",{id:"\u8868\u5217\u540d\u5408\u6cd5\u6027\u8bf4\u660e"},"\u8868(\u5217)\u540d\u5408\u6cd5\u6027\u8bf4\u660e"),(0,o.kt)("p",null,"TDengine \u4e2d\u7684\u8868\uff08\u5217\uff09\u540d\u547d\u540d\u89c4\u5219\u5982\u4e0b\uff1a\n\u53ea\u80fd\u7531\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\u6784\u6210\uff0c\u6570\u5b57\u4e0d\u80fd\u5728\u9996\u4f4d\uff0c\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7 192 \u5b57\u8282\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u3002\u8fd9\u91cc\u8868\u540d\u79f0\u4e0d\u5305\u62ec\u6570\u636e\u5e93\u540d\u7684\u524d\u7f00\u548c\u5206\u9694\u7b26\u3002"),(0,o.kt)("p",null,'\u8f6c\u79fb\u540e\u8868\uff08\u5217\uff09\u540d\u89c4\u5219\uff1a\n\u4e3a\u4e86\u517c\u5bb9\u652f\u6301\u66f4\u591a\u5f62\u5f0f\u7684\u8868\uff08\u5217\uff09\u540d\uff0cTDengine \u5f15\u5165\u65b0\u7684\u8f6c\u4e49\u7b26 "`"\u3002\u53ef\u7528\u8ba9\u8868\u540d\u4e0e\u5173\u952e\u8bcd\u4e0d\u51b2\u7a81\uff0c\u540c\u65f6\u4e0d\u53d7\u9650\u4e8e\u4e0a\u8ff0\u8868\u540d\u79f0\u5408\u6cd5\u6027\u7ea6\u675f\u68c0\u67e5\uff0c\u8f6c\u4e49\u7b26\u4e0d\u8ba1\u5165\u8868\u540d\u79f0\u7684\u957f\u5ea6\u3002\n\u8f6c\u4e49\u540e\u7684\u8868\uff08\u5217\uff09\u540d\u540c\u6837\u53d7\u5230\u957f\u5ea6\u9650\u5236\u8981\u6c42\uff0c\u4e14\u957f\u5ea6\u8ba1\u7b97\u7684\u65f6\u5019\u4e0d\u8ba1\u7b97\u8f6c\u4e49\u7b26\u3002\u4f7f\u7528\u8f6c\u4e49\u5b57\u7b26\u4ee5\u540e\uff0c\u4e0d\u518d\u5bf9\u8f6c\u4e49\u5b57\u7b26\u4e2d\u7684\u5185\u5bb9\u8fdb\u884c\u5927\u5c0f\u5199\u7edf\u4e00\u3002'),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a\n","`","aBc","`"," \u548c ","`","abc","`"," \u662f\u4e0d\u540c\u7684\u8868\uff08\u5217\uff09\u540d\uff0c\u4f46\u662f abc \u548c aBc \u662f\u76f8\u540c\u7684\u8868\uff08\u5217\uff09\u540d\u3002"),(0,o.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u8f6c\u4e49\u5b57\u7b26\u4e2d\u7684\u5185\u5bb9\u5fc5\u987b\u662f\u53ef\u6253\u5370\u5b57\u7b26\u3002"),(0,o.kt)("p",null,"\u652f\u6301\u7248\u672c\n\u652f\u6301\u8f6c\u4e49\u7b26\u7684\u529f\u80fd\u4ece 2.3.0.1 \u7248\u672c\u5f00\u59cb\u3002"))}d.isMDXComponent=!0}}]);