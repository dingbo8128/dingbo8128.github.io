"use strict";(self.webpackChunktddocs=self.webpackChunktddocs||[]).push([[3480],{3905:function(t,n,e){e.d(n,{Zo:function(){return o},kt:function(){return s}});var u=e(7294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);n&&(u=u.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,u)}return e}function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,u,a=function(t,n){if(null==t)return{};var e,u,a={},i=Object.keys(t);for(u=0;u<i.length;u++)e=i[u],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(u=0;u<i.length;u++)e=i[u],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var l=u.createContext({}),d=function(t){var n=u.useContext(l),e=n;return t&&(e="function"==typeof t?t(n):r(r({},n),t)),e},o=function(t){var n=d(t.components);return u.createElement(l.Provider,{value:n},t.children)},f={inlineCode:"code",wrapper:function(t){var n=t.children;return u.createElement(u.Fragment,{},n)}},m=u.forwardRef((function(t,n){var e=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),m=d(e),s=a,c=m["".concat(l,".").concat(s)]||m[s]||f[s]||i;return e?u.createElement(c,r(r({ref:n},o),{},{components:e})):u.createElement(c,r({ref:n},o))}));function s(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var i=e.length,r=new Array(i);r[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=t,p.mdxType="string"==typeof t?t:a,r[1]=p;for(var d=2;d<i;d++)r[d]=e[d];return u.createElement.apply(null,r)}return u.createElement.apply(null,e)}m.displayName="MDXCreateElement"},9937:function(t,n,e){e.r(n),e.d(n,{assets:function(){return o},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return f}});var u=e(7462),a=e(3366),i=(e(7294),e(3905)),r=["components"],p={sidebar_position:2},l="UDF\uff08\u7528\u6237\u5b9a\u4e49\u51fd\u6570\uff09",d={unversionedId:"reference/taos-sql/udf",id:"reference/taos-sql/udf",title:"UDF\uff08\u7528\u6237\u5b9a\u4e49\u51fd\u6570\uff09",description:"\u5728\u6709\u4e9b\u5e94\u7528\u573a\u666f\u4e2d\uff0c\u5e94\u7528\u903b\u8f91\u9700\u8981\u7684\u67e5\u8be2\u65e0\u6cd5\u76f4\u63a5\u4f7f\u7528\u7cfb\u7edf\u5185\u7f6e\u7684\u51fd\u6570\u6765\u8868\u793a\u3002\u5229\u7528 UDF \u529f\u80fd\uff0cTDengine \u53ef\u4ee5\u63d2\u5165\u7528\u6237\u7f16\u5199\u7684\u5904\u7406\u4ee3\u7801\u5e76\u5728\u67e5\u8be2\u4e2d\u4f7f\u7528\u5b83\u4eec\uff0c\u5c31\u80fd\u591f\u5f88\u65b9\u4fbf\u5730\u89e3\u51b3\u7279\u6b8a\u5e94\u7528\u573a\u666f\u4e2d\u7684\u4f7f\u7528\u9700\u6c42\u3002 UDF \u901a\u5e38\u4ee5\u6570\u636e\u8868\u4e2d\u7684\u4e00\u5217\u6570\u636e\u505a\u4e3a\u8f93\u5165\uff0c\u540c\u65f6\u652f\u6301\u4ee5\u5d4c\u5957\u5b50\u67e5\u8be2\u7684\u7ed3\u679c\u4f5c\u4e3a\u8f93\u5165\u3002",source:"@site/docs/15-reference/taos-sql/udf.md",sourceDirName:"15-reference/taos-sql",slug:"/reference/taos-sql/udf",permalink:"/tddocs/reference/taos-sql/udf",editUrl:"https://github.com/taosdata/docs.taosdata.com/edit/main/docs/15-reference/taos-sql/udf.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"SQL \u624b\u518c",permalink:"/tddocs/reference/taos-sql/tsql"},next:{title:"\u9519\u8bef\u7801",permalink:"/tddocs/reference/taos-sql/errorcode"}},o={},f=[{value:"\u7528 C/C++ \u8bed\u8a00\u6765\u5b9a\u4e49 UDF",id:"\u7528-cc-\u8bed\u8a00\u6765\u5b9a\u4e49-udf",level:2},{value:"\u6807\u91cf\u51fd\u6570",id:"\u6807\u91cf\u51fd\u6570",level:3},{value:"\u805a\u5408\u51fd\u6570",id:"\u805a\u5408\u51fd\u6570",level:3},{value:"\u5176\u4ed6 UDF \u51fd\u6570",id:"\u5176\u4ed6-udf-\u51fd\u6570",level:3},{value:"UDF \u5b9e\u73b0\u65b9\u5f0f\u7684\u89c4\u5219\u603b\u7ed3",id:"udf-\u5b9e\u73b0\u65b9\u5f0f\u7684\u89c4\u5219\u603b\u7ed3",level:3},{value:"\u7f16\u8bd1 UDF",id:"\u7f16\u8bd1-udf",level:2},{value:"\u5728\u7cfb\u7edf\u4e2d\u7ba1\u7406\u548c\u4f7f\u7528 UDF",id:"\u5728\u7cfb\u7edf\u4e2d\u7ba1\u7406\u548c\u4f7f\u7528-udf",level:2},{value:"\u521b\u5efa UDF",id:"\u521b\u5efa-udf",level:3},{value:"\u7ba1\u7406 UDF",id:"\u7ba1\u7406-udf",level:3},{value:"\u8c03\u7528 UDF",id:"\u8c03\u7528-udf",level:3},{value:"UDF \u7684\u4e00\u4e9b\u4f7f\u7528\u9650\u5236",id:"udf-\u7684\u4e00\u4e9b\u4f7f\u7528\u9650\u5236",level:2},{value:"\u4ee3\u7801\u9644\u4ef6",id:"\u4ee3\u7801\u9644\u4ef6",level:2},{value:"add_one.c",id:"add_onec",level:3},{value:"demo.c",id:"democ",level:3}],m={toc:f};function s(t){var n=t.components,e=(0,a.Z)(t,r);return(0,i.kt)("wrapper",(0,u.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"udf\u7528\u6237\u5b9a\u4e49\u51fd\u6570"},"UDF\uff08\u7528\u6237\u5b9a\u4e49\u51fd\u6570\uff09"),(0,i.kt)("p",null,"\u5728\u6709\u4e9b\u5e94\u7528\u573a\u666f\u4e2d\uff0c\u5e94\u7528\u903b\u8f91\u9700\u8981\u7684\u67e5\u8be2\u65e0\u6cd5\u76f4\u63a5\u4f7f\u7528\u7cfb\u7edf\u5185\u7f6e\u7684\u51fd\u6570\u6765\u8868\u793a\u3002\u5229\u7528 UDF \u529f\u80fd\uff0cTDengine \u53ef\u4ee5\u63d2\u5165\u7528\u6237\u7f16\u5199\u7684\u5904\u7406\u4ee3\u7801\u5e76\u5728\u67e5\u8be2\u4e2d\u4f7f\u7528\u5b83\u4eec\uff0c\u5c31\u80fd\u591f\u5f88\u65b9\u4fbf\u5730\u89e3\u51b3\u7279\u6b8a\u5e94\u7528\u573a\u666f\u4e2d\u7684\u4f7f\u7528\u9700\u6c42\u3002 UDF \u901a\u5e38\u4ee5\u6570\u636e\u8868\u4e2d\u7684\u4e00\u5217\u6570\u636e\u505a\u4e3a\u8f93\u5165\uff0c\u540c\u65f6\u652f\u6301\u4ee5\u5d4c\u5957\u5b50\u67e5\u8be2\u7684\u7ed3\u679c\u4f5c\u4e3a\u8f93\u5165\u3002"),(0,i.kt)("p",null,"\u4ece 2.2.0.0 \u7248\u672c\u5f00\u59cb\uff0cTDengine \u652f\u6301\u901a\u8fc7 C/C++ \u8bed\u8a00\u8fdb\u884c UDF \u5b9a\u4e49\u3002\u63a5\u4e0b\u6765\u7ed3\u5408\u793a\u4f8b\u8bb2\u89e3 UDF \u7684\u4f7f\u7528\u65b9\u6cd5\u3002"),(0,i.kt)("h2",{id:"\u7528-cc-\u8bed\u8a00\u6765\u5b9a\u4e49-udf"},"\u7528 C/C++ \u8bed\u8a00\u6765\u5b9a\u4e49 UDF"),(0,i.kt)("p",null,"TDengine \u63d0\u4f9b 3 \u4e2a UDF \u7684\u6e90\u4ee3\u7801\u793a\u4f8b\uff0c\u5206\u522b\u4e3a\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#add_one.c"},"add_one.c")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#abs_max.c"},"abs_max.c")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#demo.c"},"demo.c"))),(0,i.kt)("h3",{id:"\u6807\u91cf\u51fd\u6570"},"\u6807\u91cf\u51fd\u6570"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/taosdata/TDengine/blob/develop/tests/script/sh/add_one.c"},"add_one.c")," \u662f\u7ed3\u6784\u6700\u7b80\u5355\u7684 UDF \u5b9e\u73b0\u3002\u5176\u529f\u80fd\u4e3a\uff1a\u5bf9\u4f20\u5165\u7684\u4e00\u4e2a\u6570\u636e\u5217\uff08\u53ef\u80fd\u56e0 WHERE \u5b50\u53e5\u8fdb\u884c\u4e86\u7b5b\u9009\uff09\u4e2d\u7684\u6bcf\u4e00\u9879\uff0c\u90fd\u8f93\u51fa +1 \u4e4b\u540e\u7684\u503c\uff0c\u5e76\u4e14\u8981\u6c42\u8f93\u5165\u7684\u5217\u6570\u636e\u7c7b\u578b\u4e3a INT\u3002 "),(0,i.kt)("p",null,"\u8fd9\u4e00\u5177\u4f53\u7684\u5904\u7406\u903b\u8f91\u5728\u51fd\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"void add_one(char* data, short itype, short ibytes, int numOfRows, long long* ts, char* dataOutput, char* interBuf, char* tsOutput, int* numOfOutput, short otype, short obytes, SUdfInit* buf)")," \u4e2d\u5b9a\u4e49\u3002\u8fd9\u7c7b\u7528\u4e8e\u5b9e\u73b0 UDF \u7684\u57fa\u7840\u8ba1\u7b97\u903b\u8f91\u7684\u51fd\u6570\uff0c\u6211\u4eec\u79f0\u4e3a udfNormalFunc\uff0c\u4e5f\u5c31\u662f\u5bf9\u884c\u6570\u636e\u5757\u7684\u6807\u91cf\u8ba1\u7b97\u51fd\u6570\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cudfNormalFunc \u7684\u53c2\u6570\u9879\u662f\u56fa\u5b9a\u7684\uff0c\u7528\u4e8e\u6309\u7167\u7ea6\u675f\u5b8c\u6210\u4e0e\u5f15\u64ce\u4e4b\u95f4\u7684\u6570\u636e\u4ea4\u6362\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"udfNormalFunc \u4e2d\u5404\u53c2\u6570\u7684\u5177\u4f53\u542b\u4e49\u662f\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"data\uff1a\u8f93\u5165\u6570\u636e\u3002"),(0,i.kt)("li",{parentName:"ul"},"itype\uff1a\u8f93\u5165\u6570\u636e\u7684\u7c7b\u578b\u3002\u8fd9\u91cc\u91c7\u7528\u7684\u662f\u77ed\u6574\u578b\u8868\u793a\u6cd5\uff0c\u4e0e\u5404\u79cd\u6570\u636e\u7c7b\u578b\u5bf9\u5e94\u7684\u503c\u53ef\u4ee5\u53c2\u89c1 ",(0,i.kt)("a",{parentName:"li",href:"https://www.taosdata.com/cn/documentation/connector#column_meta"},"column_meta \u4e2d\u7684\u5217\u7c7b\u578b\u8bf4\u660e"),"\u3002\u4f8b\u5982 4 \u7528\u4e8e\u8868\u793a INT \u578b\u3002"),(0,i.kt)("li",{parentName:"ul"},"iBytes\uff1a\u8f93\u5165\u6570\u636e\u4e2d\u6bcf\u4e2a\u503c\u4f1a\u5360\u7528\u7684\u5b57\u8282\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},"numOfRows\uff1a\u8f93\u5165\u6570\u636e\u7684\u603b\u884c\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},"ts\uff1a\u4e3b\u952e\u65f6\u95f4\u6233\u5728\u8f93\u5165\u4e2d\u7684\u5217\u6570\u636e(\u53ea\u8bfb)\u3002"),(0,i.kt)("li",{parentName:"ul"},"dataOutput\uff1a\u8f93\u51fa\u6570\u636e\u7684\u7f13\u51b2\u533a\uff0c\u7f13\u51b2\u533a\u5927\u5c0f\u4e3a\u7528\u6237\u6307\u5b9a\u7684\u8f93\u51fa\u7c7b\u578b\u5927\u5c0f * numOfRows\u3002"),(0,i.kt)("li",{parentName:"ul"},"interBuf\uff1a\u4e2d\u95f4\u8ba1\u7b97\u7ed3\u679c\u7684\u7f13\u51b2\u533a\uff0c\u5927\u5c0f\u4e3a\u7528\u6237\u5728\u521b\u5efa UDF \u65f6\u6307\u5b9a\u7684BUFSIZE\u5927\u5c0f\u3002\u901a\u5e38\u7528\u4e8e\u8ba1\u7b97\u4e2d\u95f4\u7ed3\u679c\u4e0e\u6700\u7ec8\u7ed3\u679c\u4e0d\u4e00\u81f4\u65f6\u4f7f\u7528\uff0c\u7531\u5f15\u64ce\u8d1f\u8d23\u5206\u914d\u4e0e\u91ca\u653e\u3002"),(0,i.kt)("li",{parentName:"ul"},"tsOutput\uff1a\u4e3b\u952e\u65f6\u95f4\u6233\u5728\u8f93\u51fa\u65f6\u7684\u5217\u6570\u636e\uff0c\u5982\u679c\u975e\u7a7a\u53ef\u7528\u4e8e\u8f93\u51fa\u7ed3\u679c\u5bf9\u5e94\u7684\u65f6\u95f4\u6233\u3002"),(0,i.kt)("li",{parentName:"ul"},"numOfOutput\uff1a\u8f93\u51fa\u7ed3\u679c\u7684\u4e2a\u6570\uff08\u884c\u6570\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"oType\uff1a\u8f93\u51fa\u6570\u636e\u7684\u7c7b\u578b\u3002\u53d6\u503c\u542b\u4e49\u4e0e itype \u53c2\u6570\u4e00\u81f4\u3002"),(0,i.kt)("li",{parentName:"ul"},"oBytes\uff1a\u8f93\u51fa\u6570\u636e\u4e2d\u6bcf\u4e2a\u503c\u5360\u7528\u7684\u5b57\u8282\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},"buf\uff1a\u7528\u4e8e\u5728 UDF \u4e0e\u5f15\u64ce\u95f4\u7684\u72b6\u6001\u63a7\u5236\u4fe1\u606f\u4f20\u9012\u5757\u3002")))),(0,i.kt)("h3",{id:"\u805a\u5408\u51fd\u6570"},"\u805a\u5408\u51fd\u6570"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/taosdata/TDengine/blob/develop/tests/script/sh/abs_max.c"},"abs_max.c")," \u5b9e\u73b0\u7684\u662f\u4e00\u4e2a\u805a\u5408\u51fd\u6570\uff0c\u529f\u80fd\u662f\u5bf9\u4e00\u7ec4\u6570\u636e\u6309\u7edd\u5bf9\u503c\u53d6\u6700\u5927\u503c\u3002"),(0,i.kt)("p",null,"\u5176\u8ba1\u7b97\u8fc7\u7a0b\u4e3a\uff1a\u4e0e\u6240\u5728\u67e5\u8be2\u8bed\u53e5\u76f8\u5173\u7684\u6570\u636e\u4f1a\u88ab\u5206\u4e3a\u591a\u4e2a\u884c\u6570\u636e\u5757\uff0c\u5bf9\u6bcf\u4e2a\u884c\u6570\u636e\u5757\u8c03\u7528 udfNormalFunc\uff08\u5728\u672c\u4f8b\u7684\u5b9e\u73b0\u4ee3\u7801\u4e2d\uff0c\u5b9e\u9645\u51fd\u6570\u540d\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"abs_max"),")\u6765\u751f\u6210\u6bcf\u4e2a\u5b50\u8868\u7684\u4e2d\u95f4\u7ed3\u679c\uff0c\u518d\u5c06\u5b50\u8868\u7684\u4e2d\u95f4\u7ed3\u679c\u8c03\u7528 udfMergeFunc\uff08\u672c\u4f8b\u4e2d\uff0c\u5176\u5b9e\u9645\u7684\u51fd\u6570\u540d\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"abs_max_merge"),"\uff09\u8fdb\u884c\u805a\u5408\uff0c\u751f\u6210\u8d85\u7ea7\u8868\u7684\u6700\u7ec8\u805a\u5408\u7ed3\u679c\u6216\u4e2d\u95f4\u7ed3\u679c\u3002\u805a\u5408\u67e5\u8be2\u6700\u540e\u8fd8\u4f1a\u901a\u8fc7 udfFinalizeFunc\uff08\u672c\u4f8b\u4e2d\uff0c\u5176\u5b9e\u9645\u7684\u51fd\u6570\u540d\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"abs_max_finalize"),"\uff09\u518d\u628a\u8d85\u7ea7\u8868\u7684\u4e2d\u95f4\u7ed3\u679c\u5904\u7406\u4e3a\u6700\u7ec8\u7ed3\u679c\uff0c\u6700\u7ec8\u7ed3\u679c\u53ea\u80fd\u542b0\u62161\u6761\u7ed3\u679c\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0cudfNormalFunc\u3001udfMergeFunc\u3001udfFinalizeFunc \u4e4b\u95f4\uff0c\u51fd\u6570\u540d\u7ea6\u5b9a\u4f7f\u7528\u76f8\u540c\u7684\u524d\u7f00\uff0c\u6b64\u524d\u7f00\u5373 udfNormalFunc \u7684\u5b9e\u9645\u51fd\u6570\u540d\u3002udfMergeFunc \u7684\u51fd\u6570\u540d\u540e\u7f00 ",(0,i.kt)("inlineCode",{parentName:"p"},"_merge"),"\u3001udfFinalizeFunc \u7684\u51fd\u6570\u540d\u540e\u7f00 ",(0,i.kt)("inlineCode",{parentName:"p"},"_finalize"),"\uff0c\u662f UDF \u5b9e\u73b0\u89c4\u5219\u7684\u4e00\u90e8\u5206\uff0c\u7cfb\u7edf\u4f1a\u6309\u7167\u8fd9\u4e9b\u51fd\u6570\u540d\u540e\u7f00\u6765\u8c03\u7528\u76f8\u5e94\u529f\u80fd\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"udfMergeFunc \u7528\u4e8e\u5bf9\u8ba1\u7b97\u4e2d\u95f4\u7ed3\u679c\u8fdb\u884c\u805a\u5408\uff0c\u53ea\u6709\u9488\u5bf9\u8d85\u7ea7\u8868\u7684\u805a\u5408\u67e5\u8be2\u624d\u9700\u8981\u8c03\u7528\u8be5\u51fd\u6570\u3002\u672c\u4f8b\u4e2d udfMergeFunc \u5bf9\u5e94\u7684\u5b9e\u73b0\u51fd\u6570\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"void abs_max_merge(char* data, int32_t numOfRows, char* dataOutput, int32_t* numOfOutput, SUdfInit* buf)"),"\uff0c\u5176\u4e2d\u5404\u53c2\u6570\u7684\u5177\u4f53\u542b\u4e49\u662f\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"data\uff1audfNormalFunc \u7684\u8f93\u51fa\u6570\u636e\u6570\u7ec4\uff0c\u5982\u679c\u4f7f\u7528\u4e86 interBuf \u90a3\u4e48 data \u5c31\u662f interBuf \u7684\u6570\u7ec4\u3002"),(0,i.kt)("li",{parentName:"ul"},"numOfRows\uff1adata \u4e2d\u6570\u636e\u7684\u884c\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},"dataOutput\uff1a\u8f93\u51fa\u6570\u636e\u7684\u7f13\u51b2\u533a\uff0c\u5927\u5c0f\u7b49\u4e8e\u4e00\u6761\u6700\u7ec8\u7ed3\u679c\u7684\u5927\u5c0f\u3002\u5982\u679c\u6b64\u65f6\u8f93\u51fa\u8fd8\u4e0d\u662f\u6700\u7ec8\u7ed3\u679c\uff0c\u53ef\u4ee5\u9009\u62e9\u8f93\u51fa\u5230 interBuf \u4e2d\u5373data\u4e2d\u3002"),(0,i.kt)("li",{parentName:"ul"},"numOfOutput\uff1a\u8f93\u51fa\u7ed3\u679c\u7684\u4e2a\u6570\uff08\u884c\u6570\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"buf\uff1a\u7528\u4e8e\u5728 UDF \u4e0e\u5f15\u64ce\u95f4\u7684\u72b6\u6001\u63a7\u5236\u4fe1\u606f\u4f20\u9012\u5757\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"udfFinalizeFunc \u7528\u4e8e\u5bf9\u8ba1\u7b97\u7ed3\u679c\u8fdb\u884c\u6700\u7ec8\u8ba1\u7b97\uff0c\u901a\u5e38\u7528\u4e8e\u6709 interBuf \u4f7f\u7528\u7684\u573a\u666f\u3002\u672c\u4f8b\u4e2d udfFinalizeFunc \u5bf9\u5e94\u7684\u5b9e\u73b0\u51fd\u6570\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"void abs_max_finalize(char* dataOutput, char* interBuf, int* numOfOutput, SUdfInit* buf)"),"\uff0c\u5176\u4e2d\u5404\u53c2\u6570\u7684\u5177\u4f53\u542b\u4e49\u662f\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"dataOutput\uff1a\u8f93\u51fa\u6570\u636e\u7684\u7f13\u51b2\u533a\u3002"),(0,i.kt)("li",{parentName:"ul"},"interBuf\uff1a\u4e2d\u95f4\u7ed3\u7b97\u7ed3\u679c\u7f13\u51b2\u533a\uff0c\u53ef\u4f5c\u4e3a\u8f93\u5165\u3002"),(0,i.kt)("li",{parentName:"ul"},"numOfOutput\uff1a\u8f93\u51fa\u6570\u636e\u7684\u4e2a\u6570\uff0c\u5bf9\u805a\u5408\u51fd\u6570\u6765\u8bf4\u53ea\u80fd\u662f0\u6216\u80051\u3002"),(0,i.kt)("li",{parentName:"ul"},"buf\uff1a\u7528\u4e8e\u5728 UDF \u4e0e\u5f15\u64ce\u95f4\u7684\u72b6\u6001\u63a7\u5236\u4fe1\u606f\u4f20\u9012\u5757\u3002")))),(0,i.kt)("p",null,"\u5176\u4ed6\u5178\u578b\u573a\u666f\uff0c\u5982\u534f\u65b9\u5dee\u7684\u8ba1\u7b97\uff0c\u5373\u53ef\u901a\u8fc7\u5b9a\u4e49\u805a\u5408UDF\u7684\u65b9\u5f0f\u5b9e\u73b0\u3002"),(0,i.kt)("h3",{id:"\u5176\u4ed6-udf-\u51fd\u6570"},"\u5176\u4ed6 UDF \u51fd\u6570"),(0,i.kt)("p",null,"\u7528\u6237 UDF \u7a0b\u5e8f\u9664\u4e86\u9700\u8981\u5b9e\u73b0\u4e0a\u9762\u51e0\u4e2a\u51fd\u6570\u5916\uff0c\u8fd8\u6709\u4e24\u4e2a\u7528\u4e8e\u521d\u59cb\u5316\u548c\u91ca\u653e UDF \u4e0e\u5f15\u64ce\u95f4\u7684\u72b6\u6001\u63a7\u5236\u4fe1\u606f\u4f20\u9012\u5757\u7684\u51fd\u6570\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u4e5f\u5373\u5bf9\u5e94 udfInitFunc \u548c udfDestroyFunc\u3002\u5176\u51fd\u6570\u540d\u547d\u540d\u89c4\u5219\u540c\u6837\u662f\u91c7\u53d6\u4ee5 udfNormalFunc \u7684\u5b9e\u9645\u51fd\u6570\u540d\u4e3a\u524d\u7f00\uff0c\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"_init")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"_destroy")," \u4e3a\u540e\u7f00\u3002\u7cfb\u7edf\u4f1a\u5728\u521d\u59cb\u5316\u548c\u8d44\u6e90\u91ca\u653e\u65f6\u8c03\u7528\u5bf9\u5e94\u540d\u79f0\u7684\u51fd\u6570\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"udfInitFunc \u7528\u4e8e\u521d\u59cb\u5316\u72b6\u6001\u63a7\u5236\u4fe1\u606f\u4f20\u9012\u5757\u3002\u4e0a\u4f8b\u4e2d udfInitFunc \u5bf9\u5e94\u7684\u5b9e\u73b0\u51fd\u6570\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"int abs_max_init(SUdfInit* buf)"),"\uff0c\u5176\u4e2d\u5404\u53c2\u6570\u7684\u5177\u4f53\u542b\u4e49\u662f\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"buf\uff1a\u7528\u4e8e\u5728  UDF \u4e0e\u5f15\u64ce\u95f4\u7684\u72b6\u6001\u63a7\u5236\u4fe1\u606f\u4f20\u9012\u5757\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"udfDestroyFunc \u7528\u4e8e\u91ca\u653e\u72b6\u6001\u63a7\u5236\u4fe1\u606f\u4f20\u9012\u5757\u3002\u4e0a\u4f8b\u4e2d udfDestroyFunc \u5bf9\u5e94\u7684\u5b9e\u73b0\u51fd\u6570\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"void abs_max_destroy(SUdfInit* buf)"),"\uff0c\u5176\u4e2d\u5404\u53c2\u6570\u7684\u5177\u4f53\u542b\u4e49\u662f\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"buf\uff1a\u7528\u4e8e\u5728  UDF \u4e0e\u5f15\u64ce\u95f4\u7684\u72b6\u6001\u63a7\u5236\u4fe1\u606f\u4f20\u9012\u5757\u3002")))),(0,i.kt)("p",null,"\u76ee\u524d\u8be5\u529f\u80fd\u6682\u65f6\u6ca1\u6709\u5b9e\u9645\u610f\u4e49\uff0c\u5f85\u540e\u7eed\u6269\u5c55\u4f7f\u7528\u3002"),(0,i.kt)("h3",{id:"udf-\u5b9e\u73b0\u65b9\u5f0f\u7684\u89c4\u5219\u603b\u7ed3"},"UDF \u5b9e\u73b0\u65b9\u5f0f\u7684\u89c4\u5219\u603b\u7ed3"),(0,i.kt)("p",null,"\u6839\u636e UDF \u51fd\u6570\u7c7b\u578b\u7684\u4e0d\u540c\uff0c\u7528\u6237\u6240\u8981\u5b9e\u73b0\u7684\u529f\u80fd\u51fd\u6570\u4e5f\u4e0d\u540c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6807\u91cf\u51fd\u6570\uff1aUDF \u4e2d\u9700\u5b9e\u73b0 udfNormalFunc\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u805a\u5408\u51fd\u6570\uff1aUDF \u4e2d\u9700\u5b9e\u73b0 udfNormalFunc\u3001udfMergeFunc\uff08\u5bf9\u8d85\u7ea7\u8868\u67e5\u8be2\uff09\u3001udfFinalizeFunc\u3002")),(0,i.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u5bf9\u5e94\u7684\u51fd\u6570\u4e0d\u9700\u8981\u5177\u4f53\u7684\u529f\u80fd\uff0c\u4e5f\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a\u7a7a\u51fd\u6570\u3002"),(0,i.kt)("h2",{id:"\u7f16\u8bd1-udf"},"\u7f16\u8bd1 UDF"),(0,i.kt)("p",null,"\u7528\u6237\u5b9a\u4e49\u51fd\u6570\u7684 C \u8bed\u8a00\u6e90\u4ee3\u7801\u65e0\u6cd5\u76f4\u63a5\u88ab TDengine \u7cfb\u7edf\u4f7f\u7528\uff0c\u800c\u662f\u9700\u8981\u5148\u7f16\u8bd1\u4e3a .so \u94fe\u63a5\u5e93\uff0c\u4e4b\u540e\u624d\u80fd\u8f7d\u5165 TDengine \u7cfb\u7edf\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u6309\u7167\u4e0a\u4e00\u7ae0\u8282\u63cf\u8ff0\u7684\u89c4\u5219\u51c6\u5907\u597d\u4e86\u7528\u6237\u5b9a\u4e49\u51fd\u6570\u7684\u6e90\u4ee3\u7801 add_one.c\uff0c\u90a3\u4e48\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u6307\u4ee4\u7f16\u8bd1\u5f97\u5230\u52a8\u6001\u94fe\u63a5\u5e93\u6587\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gcc -g -O0 -fPIC -shared add_one.c -o add_one.so\n")),(0,i.kt)("p",null,"\u8fd9\u6837\u5c31\u51c6\u5907\u597d\u4e86\u52a8\u6001\u94fe\u63a5\u5e93 add_one.so \u6587\u4ef6\uff0c\u53ef\u4ee5\u4f9b\u540e\u6587\u521b\u5efa UDF \u65f6\u4f7f\u7528\u4e86\u3002\u4e3a\u4e86\u4fdd\u8bc1\u53ef\u9760\u7684\u7cfb\u7edf\u8fd0\u884c\uff0c\u7f16\u8bd1\u5668 GCC \u63a8\u8350\u4f7f\u7528 7.5\u53ca\u4ee5\u4e0a\u7248\u672c\u3002"),(0,i.kt)("h2",{id:"\u5728\u7cfb\u7edf\u4e2d\u7ba1\u7406\u548c\u4f7f\u7528-udf"},"\u5728\u7cfb\u7edf\u4e2d\u7ba1\u7406\u548c\u4f7f\u7528 UDF"),(0,i.kt)("h3",{id:"\u521b\u5efa-udf"},"\u521b\u5efa UDF"),(0,i.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 SQL \u6307\u4ee4\u5728\u7cfb\u7edf\u4e2d\u52a0\u8f7d\u5ba2\u6237\u7aef\u6240\u5728\u4e3b\u673a\u4e0a\u7684 UDF \u51fd\u6570\u5e93\uff08\u4e0d\u80fd\u901a\u8fc7 RESTful \u63a5\u53e3\u6216 HTTP \u7ba1\u7406\u754c\u9762\u6765\u8fdb\u884c\u8fd9\u4e00\u8fc7\u7a0b\uff09\u3002\u4e00\u65e6\u521b\u5efa\u6210\u529f\uff0c\u5219\u5f53\u524d TDengine \u96c6\u7fa4\u7684\u6240\u6709\u7528\u6237\u90fd\u53ef\u4ee5\u5728 SQL \u6307\u4ee4\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u51fd\u6570\u3002UDF \u5b58\u50a8\u5728\u7cfb\u7edf\u7684 MNode \u8282\u70b9\u4e0a\uff0c\u56e0\u6b64\u5373\u4f7f\u91cd\u542f TDengine \u7cfb\u7edf\uff0c\u5df2\u7ecf\u521b\u5efa\u7684 UDF \u4e5f\u4ecd\u7136\u53ef\u7528\u3002"),(0,i.kt)("p",null,"\u5728\u521b\u5efa UDF \u65f6\uff0c\u9700\u8981\u533a\u5206\u6807\u91cf\u51fd\u6570\u548c\u805a\u5408\u51fd\u6570\u3002\u5982\u679c\u521b\u5efa\u65f6\u58f0\u660e\u4e86\u9519\u8bef\u7684\u51fd\u6570\u7c7b\u522b\uff0c\u5219\u53ef\u80fd\u5bfc\u81f4\u901a\u8fc7 SQL \u6307\u4ee4\u8c03\u7528\u51fd\u6570\u65f6\u51fa\u9519\u3002\u6b64\u5916\uff0c UDF \u652f\u6301\u8f93\u5165\u4e0e\u8f93\u51fa\u7c7b\u578b\u4e0d\u4e00\u81f4\uff0c\u7528\u6237\u9700\u8981\u4fdd\u8bc1\u8f93\u5165\u6570\u636e\u7c7b\u578b\u4e0e UDF \u7a0b\u5e8f\u5339\u914d\uff0cUDF \u8f93\u51fa\u6570\u636e\u7c7b\u578b\u4e0e OUTPUTTYPE \u5339\u914d\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa\u6807\u91cf\u51fd\u6570\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE FUNCTION ids(X) AS ids(Y) OUTPUTTYPE typename(Z) [ BUFSIZE B ];")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ids(X)\uff1a\u6807\u91cf\u51fd\u6570\u672a\u6765\u5728 SQL \u6307\u4ee4\u4e2d\u88ab\u8c03\u7528\u65f6\u7684\u51fd\u6570\u540d\uff0c\u5fc5\u987b\u4e0e\u51fd\u6570\u5b9e\u73b0\u4e2d udfNormalFunc \u7684\u5b9e\u9645\u540d\u79f0\u4e00\u81f4\uff1b"),(0,i.kt)("li",{parentName:"ul"},"ids(Y)\uff1a\u5305\u542b UDF \u51fd\u6570\u5b9e\u73b0\u7684\u52a8\u6001\u94fe\u63a5\u5e93\u7684\u5e93\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84\uff08\u6307\u7684\u662f\u5e93\u6587\u4ef6\u5728\u5f53\u524d\u5ba2\u6237\u7aef\u6240\u5728\u4e3b\u673a\u4e0a\u7684\u4fdd\u5b58\u8def\u5f84\uff0c\u901a\u5e38\u662f\u6307\u5411\u4e00\u4e2a .so \u6587\u4ef6\uff09\uff0c\u8fd9\u4e2a\u8def\u5f84\u9700\u8981\u7528\u82f1\u6587\u5355\u5f15\u53f7\u6216\u82f1\u6587\u53cc\u5f15\u53f7\u62ec\u8d77\u6765\uff1b"),(0,i.kt)("li",{parentName:"ul"},"typename(Z)\uff1a\u6b64\u51fd\u6570\u8ba1\u7b97\u7ed3\u679c\u7684\u6570\u636e\u7c7b\u578b\uff0c\u4e0e\u4e0a\u6587\u4e2d udfNormalFunc \u7684 itype \u53c2\u6570\u4e0d\u540c\uff0c\u8fd9\u91cc\u4e0d\u662f\u4f7f\u7528\u6570\u5b57\u8868\u793a\u6cd5\uff0c\u800c\u662f\u76f4\u63a5\u5199\u7c7b\u578b\u540d\u79f0\u5373\u53ef\uff1b"),(0,i.kt)("li",{parentName:"ul"},"B\uff1a\u4e2d\u95f4\u8ba1\u7b97\u7ed3\u679c\u7684\u7f13\u51b2\u533a\u5927\u5c0f\uff0c\u5355\u4f4d\u662f\u5b57\u8282\uff0c\u6700\u5c0f 0\uff0c\u6700\u5927 512\uff0c\u5982\u679c\u4e0d\u4f7f\u7528\u53ef\u4ee5\u4e0d\u8bbe\u7f6e\u3002")),(0,i.kt)("p",{parentName:"li"},"\u4f8b\u5982\uff0c\u5982\u4e0b\u8bed\u53e5\u53ef\u4ee5\u628a add_one.so \u521b\u5efa\u4e3a\u7cfb\u7edf\u4e2d\u53ef\u7528\u7684 UDF\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION add_one AS "/home/taos/udf_example/add_one.so" OUTPUTTYPE INT;\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa\u805a\u5408\u51fd\u6570\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE AGGREGATE FUNCTION ids(X) AS ids(Y) OUTPUTTYPE typename(Z) [ BUFSIZE B ];")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ids(X)\uff1a\u805a\u5408\u51fd\u6570\u672a\u6765\u5728 SQL \u6307\u4ee4\u4e2d\u88ab\u8c03\u7528\u65f6\u7684\u51fd\u6570\u540d\uff0c\u5fc5\u987b\u4e0e\u51fd\u6570\u5b9e\u73b0\u4e2d udfNormalFunc \u7684\u5b9e\u9645\u540d\u79f0\u4e00\u81f4\uff1b"),(0,i.kt)("li",{parentName:"ul"},"ids(Y)\uff1a\u5305\u542b UDF \u51fd\u6570\u5b9e\u73b0\u7684\u52a8\u6001\u94fe\u63a5\u5e93\u7684\u5e93\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84\uff08\u6307\u7684\u662f\u5e93\u6587\u4ef6\u5728\u5f53\u524d\u5ba2\u6237\u7aef\u6240\u5728\u4e3b\u673a\u4e0a\u7684\u4fdd\u5b58\u8def\u5f84\uff0c\u901a\u5e38\u662f\u6307\u5411\u4e00\u4e2a .so \u6587\u4ef6\uff09\uff0c\u8fd9\u4e2a\u8def\u5f84\u9700\u8981\u7528\u82f1\u6587\u5355\u5f15\u53f7\u6216\u82f1\u6587\u53cc\u5f15\u53f7\u62ec\u8d77\u6765\uff1b"),(0,i.kt)("li",{parentName:"ul"},"typename(Z)\uff1a\u6b64\u51fd\u6570\u8ba1\u7b97\u7ed3\u679c\u7684\u6570\u636e\u7c7b\u578b\uff0c\u4e0e\u4e0a\u6587\u4e2d udfNormalFunc \u7684 itype \u53c2\u6570\u4e0d\u540c\uff0c\u8fd9\u91cc\u4e0d\u662f\u4f7f\u7528\u6570\u5b57\u8868\u793a\u6cd5\uff0c\u800c\u662f\u76f4\u63a5\u5199\u7c7b\u578b\u540d\u79f0\u5373\u53ef\uff1b"),(0,i.kt)("li",{parentName:"ul"},"B\uff1a\u4e2d\u95f4\u8ba1\u7b97\u7ed3\u679c\u7684\u7f13\u51b2\u533a\u5927\u5c0f\uff0c\u5355\u4f4d\u662f\u5b57\u8282\uff0c\u6700\u5c0f 0\uff0c\u6700\u5927 512\uff0c\u5982\u679c\u4e0d\u4f7f\u7528\u53ef\u4ee5\u4e0d\u8bbe\u7f6e\u3002")),(0,i.kt)("p",{parentName:"li"},"\u5173\u4e8e\u4e2d\u95f4\u8ba1\u7b97\u7ed3\u679c\u7684\u4f7f\u7528\uff0c\u53ef\u4ee5\u53c2\u8003\u793a\u4f8b\u7a0b\u5e8f",(0,i.kt)("a",{parentName:"p",href:"https://github.com/taosdata/TDengine/blob/develop/tests/script/sh/demo.c"},"demo.c")),(0,i.kt)("p",{parentName:"li"},"\u4f8b\u5982\uff0c\u5982\u4e0b\u8bed\u53e5\u53ef\u4ee5\u628a demo.so \u521b\u5efa\u4e3a\u7cfb\u7edf\u4e2d\u53ef\u7528\u7684 UDF\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE AGGREGATE FUNCTION demo AS "/home/taos/udf_example/demo.so" OUTPUTTYPE DOUBLE bufsize 14;\n')))),(0,i.kt)("h3",{id:"\u7ba1\u7406-udf"},"\u7ba1\u7406 UDF"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5220\u9664\u6307\u5b9a\u540d\u79f0\u7684\u7528\u6237\u5b9a\u4e49\u51fd\u6570\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"DROP FUNCTION ids(X);"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ids(X)\uff1a\u6b64\u53c2\u6570\u7684\u542b\u4e49\u4e0e CREATE \u6307\u4ee4\u4e2d\u7684 ids(X) \u53c2\u6570\u4e00\u81f4\uff0c\u4e5f\u5373\u8981\u5220\u9664\u7684\u51fd\u6570\u7684\u540d\u5b57\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"DROP FUNCTION add_one;"),"\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u663e\u793a\u7cfb\u7edf\u4e2d\u5f53\u524d\u53ef\u7528\u7684\u6240\u6709 UDF\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"SHOW FUNCTIONS;"))),(0,i.kt)("h3",{id:"\u8c03\u7528-udf"},"\u8c03\u7528 UDF"),(0,i.kt)("p",null,"\u5728 SQL \u6307\u4ee4\u4e2d\uff0c\u53ef\u4ee5\u76f4\u63a5\u4ee5\u5728\u7cfb\u7edf\u4e2d\u521b\u5efa UDF \u65f6\u8d4b\u4e88\u7684\u51fd\u6570\u540d\u6765\u8c03\u7528\u7528\u6237\u5b9a\u4e49\u51fd\u6570\u3002\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT X(c) FROM table/stable;\n")),(0,i.kt)("p",null,"\u8868\u793a\u5bf9\u540d\u4e3a c \u7684\u6570\u636e\u5217\u8c03\u7528\u540d\u4e3a X \u7684\u7528\u6237\u5b9a\u4e49\u51fd\u6570\u3002SQL \u6307\u4ee4\u4e2d\u7528\u6237\u5b9a\u4e49\u51fd\u6570\u53ef\u4ee5\u914d\u5408 WHERE \u7b49\u67e5\u8be2\u7279\u6027\u6765\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"udf-\u7684\u4e00\u4e9b\u4f7f\u7528\u9650\u5236"},"UDF \u7684\u4e00\u4e9b\u4f7f\u7528\u9650\u5236"),(0,i.kt)("p",null,"\u5728\u5f53\u524d\u7248\u672c\u4e0b\uff0c\u4f7f\u7528 UDF \u5b58\u5728\u5982\u4e0b\u8fd9\u4e9b\u9650\u5236\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u521b\u5efa\u548c\u8c03\u7528 UDF \u65f6\uff0c\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u90fd\u53ea\u652f\u6301 Linux \u64cd\u4f5c\u7cfb\u7edf\uff1b"),(0,i.kt)("li",{parentName:"ol"},"UDF \u4e0d\u80fd\u4e0e\u7cfb\u7edf\u5185\u5efa\u7684 SQL \u51fd\u6570\u6df7\u5408\u4f7f\u7528\uff0c\u6682\u4e0d\u652f\u6301\u5728\u4e00\u6761 SQL \u8bed\u53e5\u4e2d\u4f7f\u7528\u591a\u4e2a\u4e0d\u540c\u540d\u7684 UDF \uff1b"),(0,i.kt)("li",{parentName:"ol"},"UDF \u53ea\u652f\u6301\u4ee5\u5355\u4e2a\u6570\u636e\u5217\u4f5c\u4e3a\u8f93\u5165\uff1b"),(0,i.kt)("li",{parentName:"ol"},"UDF \u53ea\u8981\u521b\u5efa\u6210\u529f\uff0c\u5c31\u4f1a\u88ab\u6301\u4e45\u5316\u5b58\u50a8\u5230 MNode \u8282\u70b9\u4e2d\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u65e0\u6cd5\u901a\u8fc7 RESTful \u63a5\u53e3\u6765\u521b\u5efa UDF\uff1b"),(0,i.kt)("li",{parentName:"ol"},"UDF \u5728 SQL \u4e2d\u5b9a\u4e49\u7684\u51fd\u6570\u540d\uff0c\u5fc5\u987b\u4e0e .so \u5e93\u6587\u4ef6\u5b9e\u73b0\u4e2d\u7684\u63a5\u53e3\u51fd\u6570\u540d\u524d\u7f00\u4fdd\u6301\u4e00\u81f4\uff0c\u4e5f\u5373\u5fc5\u987b\u662f udfNormalFunc \u7684\u540d\u79f0\uff0c\u800c\u4e14\u4e0d\u53ef\u4e0e TDengine \u4e2d\u5df2\u6709\u7684\u5185\u5efa SQL \u51fd\u6570\u91cd\u540d\u3002")),(0,i.kt)("h2",{id:"\u4ee3\u7801\u9644\u4ef6"},"\u4ee3\u7801\u9644\u4ef6"),(0,i.kt)("h3",{id:"add_onec"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/taosdata/TDengine/blob/develop/tests/script/sh/add_one.c"},"add_one.c")),(0,i.kt)("span",{id:"add_one.c"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\ntypedef struct SUdfInit{\n int maybe_null;       /* 1 if function can return NULL */\n int decimals;     /* for real functions */\n long long length;       /* For string functions */\n char  *ptr;            /* free pointer for function data */\n int const_item;       /* 0 if result is independent of arguments */\n} SUdfInit;\n\nvoid add_one(char* data, short itype, short ibytes, int numOfRows, long long* ts, char* dataOutput, char* interBUf, char* tsOutput,\n                        int* numOfOutput, short otype, short obytes, SUdfInit* buf) {\n   int i;\n   int r = 0;\n  //  printf("add_one input data:%p, type:%d, rows:%d, ts:%p,%lld, dataoutput:%p, tsOutput:%p, numOfOutput:%p, buf:%p\\n", data, itype, numOfRows, ts, *ts, dataOutput, tsOutput, numOfOutput, buf);\n   if (itype == 4) {\n     for(i=0;i<numOfRows;++i) {\n      //  printf("input %d - %d", i, *((int *)data + i));\n       *((int *)dataOutput+i)=*((int *)data + i) + 1;\n      //  printf(", output %d\\n", *((int *)dataOutput+i));\n       if (tsOutput) {\n         *(long long*)tsOutput=1000000;\n       }\n     }\n     *numOfOutput=numOfRows;\n\n    //  printf("add_one out, numOfOutput:%d\\n", *numOfOutput);\n   }\n}\n'))),"### [abs_max.c](https://github.com/taosdata/TDengine/blob/develop/tests/script/sh/abs_max.c)",(0,i.kt)("span",{id:"abs_max.c"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <inttypes.h> \n\ntypedef struct SUdfInit{\n int maybe_null;       /* 1 if function can return NULL */\n int decimals;     /* for real functions */\n int64_t length;       /* For string functions */\n char  *ptr;            /* free pointer for function data */\n int const_item;       /* 0 if result is independent of arguments */\n} SUdfInit;\n\n\n#define TSDB_DATA_INT_NULL              0x80000000L\n#define TSDB_DATA_BIGINT_NULL           0x8000000000000000L\n\nvoid abs_max(char* data, short itype, short ibytes, int numOfRows, int64_t* ts, char* dataOutput, char* interBuf, char* tsOutput,\n                        int* numOfOutput, short otype, short obytes, SUdfInit* buf) {\n   int i;\n   int64_t r = 0;\n   // printf("abs_max input data:%p, type:%d, rows:%d, ts:%p, %" PRId64 ", dataoutput:%p, tsOutput:%p, numOfOutput:%p, buf:%p\\n", data, itype, numOfRows, ts, *ts, dataOutput, tsOutput, numOfOutput, buf);\n   if (itype == 5) {\n     r=*(int64_t *)dataOutput;\n     *numOfOutput=0;\n\n     for(i=0;i<numOfRows;++i) {\n       if (*((int64_t *)data + i) == TSDB_DATA_BIGINT_NULL) {\n         continue;\n       }\n\n       *numOfOutput=1;\n       //int64_t v = abs(*((int64_t *)data + i));\n       int64_t v = *((int64_t *)data + i);\n       if (v < 0) {\n          v = 0 - v;\n       }\n       \n       if (v > r) {\n          r = v;\n       }\n     }\n\n     *(int64_t *)dataOutput=r;\n\n   //   printf("abs_max out, dataoutput:%" PRId64", numOfOutput:%d\\n", *(int64_t *)dataOutput, *numOfOutput);\n   }else {\n     *numOfOutput=0;\n   }\n}\n\n\n\nvoid abs_max_finalize(char* dataOutput, char* interBuf, int* numOfOutput, SUdfInit* buf) {\n   int i;\n   //int64_t r = 0;\n   // printf("abs_max_finalize dataoutput:%p:%d, numOfOutput:%d, buf:%p\\n", dataOutput, *dataOutput, *numOfOutput, buf);\n   // *numOfOutput=1;\n   // printf("abs_max finalize, dataoutput:%" PRId64", numOfOutput:%d\\n", *(int64_t *)dataOutput, *numOfOutput);\n}\n\nvoid abs_max_merge(char* data, int32_t numOfRows, char* dataOutput, int32_t* numOfOutput, SUdfInit* buf) {\n   int64_t r = 0;\n   \n   if (numOfRows > 0) {\n      r = *((int64_t *)data);\n   }\n   // printf("abs_max_merge numOfRows:%d, dataoutput:%p, buf:%p\\n", numOfRows, dataOutput, buf);\n   for (int i = 1; i < numOfRows; ++i) {\n   //   printf("abs_max_merge %d - %" PRId64"\\n", i, *((int64_t *)data + i));\n     if (*((int64_t*)data + i) > r) {\n        r= *((int64_t*)data + i);\n     }\n   }\n   \n   *(int64_t*)dataOutput=r;\n   if (numOfRows > 0) {\n     *numOfOutput=1;\n   } else {\n     *numOfOutput=0;\n   }\n   \n   // printf("abs_max_merge, dataoutput:%" PRId64", numOfOutput:%d\\n", *(int64_t *)dataOutput, *numOfOutput);\n}\n\n\nint abs_max_init(SUdfInit* buf) {\n   // printf("abs_max init\\n");\n   return 0;\n}\n\n\nvoid abs_max_destroy(SUdfInit* buf) {\n   // printf("abs_max destroy\\n");\n}\n'))),(0,i.kt)("h3",{id:"democ"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/taosdata/TDengine/blob/develop/tests/script/sh/demo.c"},"demo.c")),(0,i.kt)("span",{id:"demo.c"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\ntypedef struct SUdfInit{\n int maybe_null;       /* 1 if function can return NULL */\n int decimals;     /* for real functions */\n long long length;       /* For string functions */\n char  *ptr;            /* free pointer for function data */\n int const_item;       /* 0 if result is independent of arguments */\n} SUdfInit;\n\ntypedef struct SDemo{\n  double sum;\n  int num;\n  short otype;\n}SDemo;\n\n#define FLOAT_NULL            0x7FF00000              // it is an NAN\n#define DOUBLE_NULL           0x7FFFFF0000000000L     // it is an NAN\n\n\nvoid demo(char* data, short itype, short ibytes, int numOfRows, long long* ts, char* dataOutput, char* interBuf, char* tsOutput,\n                        int* numOfOutput, short otype, short obytes, SUdfInit* buf) {\n   int i;\n   double r = 0;\n   SDemo *p = (SDemo *)interBuf;\n   SDemo *q = (SDemo *)dataOutput;\n   printf("demo input data:%p, type:%d, rows:%d, ts:%p,%lld, dataoutput:%p, interBUf:%p, tsOutput:%p, numOfOutput:%p, buf:%p\\n", data, itype, numOfRows, ts, *ts, dataOutput, interBuf, tsOutput, numOfOutput, buf);\n\n   for(i=0;i<numOfRows;++i) {\n     if (itype == 4) {\n       r=*((int *)data+i);\n     } else if (itype == 6) {\n       r=*((float *)data+i);\n     } else if (itype == 7) {\n       r=*((double *)data+i);\n     }\n\n     p->sum += r*r;\n   }\n\n   p->otype = otype;\n   p->num += numOfRows;\n\n   q->sum = p->sum;\n   q->num = p->num;\n   q->otype = p->otype;\n\n   *numOfOutput=1;\n\n   printf("demo out, sum:%f, num:%d, numOfOutput:%d\\n", p->sum, p->num, *numOfOutput);\n}\n\n\nvoid demo_merge(char* data, int32_t numOfRows, char* dataOutput, int32_t* numOfOutput, SUdfInit* buf) {\n   int i;\n   SDemo *p = (SDemo *)data;\n   SDemo res = {0};\n   printf("demo_merge input data:%p, rows:%d, dataoutput:%p, numOfOutput:%p, buf:%p\\n", data, numOfRows, dataOutput, numOfOutput, buf);\n\n   for(i=0;i<numOfRows;++i) {\n     res.sum += p->sum * p->sum;\n     res.num += p->num;\n     p++;\n   }\n\n   p->sum = res.sum;\n   p->num = res.num;\n\n   *numOfOutput=1;\n\n   printf("demo out, sum:%f, num:%d, numOfOutput:%d\\n", p->sum, p->num, *numOfOutput);\n}\n\n\n\nvoid demo_finalize(char* dataOutput, char* interBuf, int* numOfOutput, SUdfInit* buf) {\n   SDemo *p = (SDemo *)interBuf;\n   printf("demo_finalize interbuf:%p, numOfOutput:%p, buf:%p, sum:%f, num:%d\\n", interBuf, numOfOutput, buf, p->sum, p->num);\n   if (p->otype == 6) {\n     if (p->num != 30000) {\n       *(unsigned int *)dataOutput = FLOAT_NULL;  \n     } else {\n       *(float *)dataOutput = (float)(p->sum / p->num);  \n     }\n     printf("finalize values:%f\\n", *(float *)dataOutput);\n   } else if (p->otype == 7) {\n     if (p->num != 30000) {\n       *(unsigned long long *)dataOutput = DOUBLE_NULL;  \n     } else {    \n       *(double *)dataOutput = (double)(p->sum / p->num);\n     }\n     printf("finalize values:%f\\n", *(double *)dataOutput);\n   }\n\n   *numOfOutput=1;\n\n   printf("demo finalize, numOfOutput:%d\\n", *numOfOutput);\n}\n\n\nint demo_init(SUdfInit* buf) {\n   printf("demo init\\n");\n   return 0;\n}\n\n\nvoid demo_destroy(SUdfInit* buf) {\n   printf("demo destroy\\n");\n}\n'))))}s.isMDXComponent=!0}}]);