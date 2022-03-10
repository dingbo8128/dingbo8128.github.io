"use strict";(self.webpackChunktddocs=self.webpackChunktddocs||[]).push([[584],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return g}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=c(a),g=l,f=u["".concat(d,".").concat(g)]||u[g]||p[g]||r;return a?n.createElement(f,o(o({ref:t},i),{},{components:a})):n.createElement(f,o({ref:t},i))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9402:function(e,t,a){a.r(t),a.d(t,{assets:function(){return i},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),o=["components"],s={sidebar_label:"TDengine + collectd/StatsD + Grafana"},d="\u4f7f\u7528 TDengine + collectd/StatsD + Grafana \u5feb\u901f\u642d\u5efa IT \u8fd0\u7ef4\u76d1\u63a7\u7cfb\u7edf",c={unversionedId:"devops/collectd",id:"devops/collectd",title:"\u4f7f\u7528 TDengine + collectd/StatsD + Grafana \u5feb\u901f\u642d\u5efa IT \u8fd0\u7ef4\u76d1\u63a7\u7cfb\u7edf",description:"\u80cc\u666f\u4ecb\u7ecd",source:"@site/docs/12-devops/02-collectd.md",sourceDirName:"12-devops",slug:"/devops/collectd",permalink:"/tddocs/devops/collectd",editUrl:"https://github.com/taosdata/docs.taosdata.com/edit/main/docs/12-devops/02-collectd.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"TDengine + collectd/StatsD + Grafana"},sidebar:"tutorialSidebar",previous:{title:"TDengine + Telegraf + Grafana",permalink:"/tddocs/devops/telegraf"},next:{title:"OpenTSDB \u8fc1\u79fb\u5230 TDengine",permalink:"/tddocs/devops/immigrate"}},i={},p=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"\u5b89\u88c5\u6b65\u9aa4",id:"\u5b89\u88c5\u6b65\u9aa4",level:2},{value:"\u5b89\u88c5 collectd",id:"\u5b89\u88c5-collectd",level:3},{value:"\u5b89\u88c5 StatsD",id:"\u5b89\u88c5-statsd",level:3},{value:"\u5b89\u88c5 Grafana",id:"\u5b89\u88c5-grafana",level:3},{value:"\u5b89\u88c5 TDengine",id:"\u5b89\u88c5-tdengine",level:3},{value:"\u6570\u636e\u94fe\u8def\u8bbe\u7f6e",id:"\u6570\u636e\u94fe\u8def\u8bbe\u7f6e",level:2},{value:"\u590d\u5236 TDengine \u63d2\u4ef6\u5230 grafana \u63d2\u4ef6\u76ee\u5f55",id:"\u590d\u5236-tdengine-\u63d2\u4ef6\u5230-grafana-\u63d2\u4ef6\u76ee\u5f55",level:3},{value:"\u914d\u7f6e collectd",id:"\u914d\u7f6e-collectd",level:3},{value:"\u914d\u7f6e StatsD",id:"\u914d\u7f6e-statsd",level:3},{value:"\u5bfc\u5165 Dashboard",id:"\u5bfc\u5165-dashboard",level:3},{value:"\u5bfc\u5165 collectd \u4eea\u8868\u76d8",id:"\u5bfc\u5165-collectd-\u4eea\u8868\u76d8",level:4},{value:"\u5bfc\u5165 StatsD \u4eea\u8868\u76d8",id:"\u5bfc\u5165-statsd-\u4eea\u8868\u76d8",level:4},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],u={toc:p};function g(e){var t=e.components,s=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4f7f\u7528-tdengine--collectdstatsd--grafana-\u5feb\u901f\u642d\u5efa-it-\u8fd0\u7ef4\u76d1\u63a7\u7cfb\u7edf"},"\u4f7f\u7528 TDengine + collectd/StatsD + Grafana \u5feb\u901f\u642d\u5efa IT \u8fd0\u7ef4\u76d1\u63a7\u7cfb\u7edf"),(0,r.kt)("h2",{id:"\u80cc\u666f\u4ecb\u7ecd"},"\u80cc\u666f\u4ecb\u7ecd"),(0,r.kt)("p",null,"TDengine \u662f\u6d9b\u601d\u6570\u636e\u4e13\u4e3a\u7269\u8054\u7f51\u3001\u8f66\u8054\u7f51\u3001\u5de5\u4e1a\u4e92\u8054\u7f51\u3001IT \u8fd0\u7ef4\u7b49\u8bbe\u8ba1\u548c\u4f18\u5316\u7684\u5927\u6570\u636e\u5e73\u53f0\u3002\u81ea\u4ece 2019 \u5e74 7 \u6708\u5f00\u6e90\u4ee5\u6765\uff0c\u51ed\u501f\u521b\u65b0\u7684\u6570\u636e\u5efa\u6a21\u8bbe\u8ba1\u3001\u5feb\u6377\u7684\u5b89\u88c5\u65b9\u5f0f\u3001\u6613\u7528\u7684\u7f16\u7a0b\u63a5\u53e3\u548c\u5f3a\u5927\u7684\u6570\u636e\u5199\u5165\u67e5\u8be2\u6027\u80fd\u535a\u5f97\u4e86\u5927\u91cf\u65f6\u5e8f\u6570\u636e\u5f00\u53d1\u8005\u7684\u9752\u7750\u3002"),(0,r.kt)("p",null,"IT \u8fd0\u7ef4\u76d1\u6d4b\u6570\u636e\u901a\u5e38\u90fd\u662f\u5bf9\u65f6\u95f4\u7279\u6027\u6bd4\u8f83\u654f\u611f\u7684\u6570\u636e\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u8d44\u6e90\u6307\u6807\uff1aCPU\u3001\u5185\u5b58\u3001IO\u3001\u5e26\u5bbd\u7b49\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8f6f\u4ef6\u7cfb\u7edf\u6307\u6807\uff1a\u5b58\u6d3b\u72b6\u6001\u3001\u8fde\u63a5\u6570\u76ee\u3001\u8bf7\u6c42\u6570\u76ee\u3001\u8d85\u65f6\u6570\u76ee\u3001\u9519\u8bef\u6570\u76ee\u3001\u54cd\u5e94\u65f6\u95f4\u3001\u670d\u52a1\u7c7b\u578b\u53ca\u5176\u4ed6\u4e0e\u4e1a\u52a1\u6709\u5173\u7684\u6307\u6807\u3002")),(0,r.kt)("p",null,"\u5f53\u524d\u4e3b\u6d41\u7684 IT \u8fd0\u7ef4\u7cfb\u7edf\u901a\u5e38\u5305\u542b\u4e00\u4e2a\u6570\u636e\u91c7\u96c6\u6a21\u5757\uff0c\u4e00\u4e2a\u6570\u636e\u5b58\u50a8\u6a21\u5757\uff0c\u548c\u4e00\u4e2a\u53ef\u89c6\u5316\u663e\u793a\u6a21\u5757\u3002collectd / statsD \u4f5c\u4e3a\u8001\u724c\u5f00\u6e90\u6570\u636e\u91c7\u96c6\u5de5\u5177\uff0c\u5177\u6709\u5e7f\u6cdb\u7684\u7528\u6237\u7fa4\u3002\u4f46\u662f collectd / StatsD \u81ea\u8eab\u529f\u80fd\u6709\u9650\uff0c\u5f80\u5f80\u9700\u8981\u914d\u5408 Telegraf\u3001Grafana \u4ee5\u53ca\u65f6\u5e8f\u6570\u636e\u5e93\u7ec4\u5408\u642d\u5efa\u6210\u4e3a\u5b8c\u6574\u7684\u76d1\u63a7\u7cfb\u7edf\u3002\u800c TDengine \u65b0\u7248\u672c\u652f\u6301\u591a\u79cd\u6570\u636e\u534f\u8bae\u63a5\u5165\uff0c\u53ef\u4ee5\u76f4\u63a5\u63a5\u53d7 collectd \u548c statsD \u7684\u6570\u636e\u5199\u5165\uff0c\u5e76\u63d0\u4f9b Grafana dashboard \u8fdb\u884c\u56fe\u5f62\u5316\u5c55\u793a\u3002"),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e0d\u9700\u8981\u5199\u4e00\u884c\u4ee3\u7801\uff0c\u901a\u8fc7\u7b80\u5355\u4fee\u6539\u51e0\u884c\u914d\u7f6e\u6587\u4ef6\uff0c\u5c31\u53ef\u4ee5\u5feb\u901f\u642d\u5efa\u4e00\u4e2a\u57fa\u4e8e TDengine + collectd / statsD + Grafana \u7684 IT \u8fd0\u7ef4\u7cfb\u7edf\u3002\u67b6\u6784\u5982\u4e0b\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"IT-DevOps-Solutions-Collectd-StatsD.png",src:a(1418).Z,width:"1280",height:"720"})),(0,r.kt)("h2",{id:"\u5b89\u88c5\u6b65\u9aa4"},"\u5b89\u88c5\u6b65\u9aa4"),(0,r.kt)("p",null,"\u5b89\u88c5 collectd\uff0c StatsD\uff0c Grafana \u548c TDengine \u8bf7\u53c2\u8003\u76f8\u5173\u5b98\u65b9\u6587\u6863\u3002"),(0,r.kt)("h3",{id:"\u5b89\u88c5-collectd"},"\u5b89\u88c5 collectd"),(0,r.kt)("p",null,"\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://collectd.org/documentation.shtml"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,r.kt)("h3",{id:"\u5b89\u88c5-statsd"},"\u5b89\u88c5 StatsD"),(0,r.kt)("p",null,"\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://github.com/statsd/statsd"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,r.kt)("h3",{id:"\u5b89\u88c5-grafana"},"\u5b89\u88c5 Grafana"),(0,r.kt)("p",null,"\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/download"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,r.kt)("h3",{id:"\u5b89\u88c5-tdengine"},"\u5b89\u88c5 TDengine"),(0,r.kt)("p",null,"\u4ece\u6d9b\u601d\u6570\u636e\u5b98\u7f51","[\u4e0b\u8f7d]","(",(0,r.kt)("a",{parentName:"p",href:"http://taosdata.com/cn/all-downloads/%EF%BC%89%E9%A1%B5%E9%9D%A2%E4%B8%8B%E8%BD%BD%E6%9C%80%E6%96%B0"},"http://taosdata.com/cn/all-downloads/\uff09\u9875\u9762\u4e0b\u8f7d\u6700\u65b0")," TDengine-server 2.3.0.0 \u6216\u4ee5\u4e0a\u7248\u672c\u5b89\u88c5\u3002"),(0,r.kt)("h2",{id:"\u6570\u636e\u94fe\u8def\u8bbe\u7f6e"},"\u6570\u636e\u94fe\u8def\u8bbe\u7f6e"),(0,r.kt)("h3",{id:"\u590d\u5236-tdengine-\u63d2\u4ef6\u5230-grafana-\u63d2\u4ef6\u76ee\u5f55"},"\u590d\u5236 TDengine \u63d2\u4ef6\u5230 grafana \u63d2\u4ef6\u76ee\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'1. wget -c https://github.com/taosdata/grafanaplugin/releases/download/v3.1.3/tdengine-datasource-3.1.3.zip\n2. sudo unzip tdengine-datasource-3.1.3.zip -d /var/lib/grafana/plugins/\n3. sudo chown grafana:grafana -R /var/lib/grafana/plugins/tdengine\n4. echo -e "[plugins]\\nallow_loading_unsigned_plugins = tdengine-datasource\\n" | sudo tee -a /etc/grafana/grafana.ini\n5. sudo systemctl restart grafana-server.service\n')),(0,r.kt)("h3",{id:"\u914d\u7f6e-collectd"},"\u914d\u7f6e collectd"),(0,r.kt)("p",null,"\u5728 /etc/collectd/collectd.conf \u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u5185\u5bb9\uff0c\u5176\u4e2d host \u548c port \u8bf7\u586b\u5199 TDengine \u548c taosAdapter \u914d\u7f6e\u7684\u5b9e\u9645\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'LoadPlugin network\n<Plugin network>\n  Server "<TDengine cluster/server host>" "<port for collectd>"\n</Plugin>\n\nsudo systemctl start collectd\n')),(0,r.kt)("h3",{id:"\u914d\u7f6e-statsd"},"\u914d\u7f6e StatsD"),(0,r.kt)("p",null,"\u5728 config.js \u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u5185\u5bb9\u540e\u542f\u52a8 StatsD\uff0c\u5176\u4e2d host \u548c port \u8bf7\u586b\u5199 TDengine \u548c taosAdapter \u914d\u7f6e\u7684\u5b9e\u9645\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"backends \u90e8\u5206\u6dfb\u52a0 \"./backends/repeater\"\nrepeater \u90e8\u5206\u6dfb\u52a0 { host:'<TDengine server/cluster host>', port: <port for StatsD>}\n")),(0,r.kt)("h3",{id:"\u5bfc\u5165-dashboard"},"\u5bfc\u5165 Dashboard"),(0,r.kt)("p",null,"\u4f7f\u7528 Web \u6d4f\u89c8\u5668\u8bbf\u95ee\u8fd0\u884c Grafana \u7684\u670d\u52a1\u5668\u7684 3000 \u7aef\u53e3 host:3000 \u767b\u5f55 Grafana \u754c\u9762\uff0c\u7cfb\u7edf\u521d\u59cb\u7528\u6237\u540d\u5bc6\u7801\u4e3a admin/admin\u3002\n\u70b9\u51fb\u5de6\u4fa7\u9f7f\u8f6e\u56fe\u6807\u5e76\u9009\u62e9 Plugins\uff0c\u5e94\u8be5\u53ef\u4ee5\u627e\u5230 TDengine data source \u63d2\u4ef6\u56fe\u6807\u3002"),(0,r.kt)("h4",{id:"\u5bfc\u5165-collectd-\u4eea\u8868\u76d8"},"\u5bfc\u5165 collectd \u4eea\u8868\u76d8"),(0,r.kt)("p",null,"\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/taosdata/grafanaplugin/blob/master/examples/collectd/grafana/dashboards/collect-metrics-with-tdengine-v0.1.0.json"},"https://github.com/taosdata/grafanaplugin/blob/master/examples/collectd/grafana/dashboards/collect-metrics-with-tdengine-v0.1.0.json")," \u4e0b\u8f7d dashboard json \u6587\u4ef6\uff0c\u70b9\u51fb\u5de6\u4fa7\u52a0\u53f7\u56fe\u6807\u5e76\u9009\u62e9 Import\uff0c\u6309\u7167\u754c\u9762\u63d0\u793a\u9009\u62e9 JSON \u6587\u4ef6\u5bfc\u5165\u3002\u4e4b\u540e\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u754c\u9762\u7684\u4eea\u8868\u76d8\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"IT-DevOps-Solutions-collectd-dashboard.png",src:a(8848).Z,width:"1539",height:"1129"})),(0,r.kt)("h4",{id:"\u5bfc\u5165-statsd-\u4eea\u8868\u76d8"},"\u5bfc\u5165 StatsD \u4eea\u8868\u76d8"),(0,r.kt)("p",null,"\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/taosdata/grafanaplugin/blob/master/examples/statsd/dashboards/statsd-with-tdengine-v0.1.0.json"},"https://github.com/taosdata/grafanaplugin/blob/master/examples/statsd/dashboards/statsd-with-tdengine-v0.1.0.json")," \u4e0b\u8f7d dashboard json \u6587\u4ef6\uff0c\u70b9\u51fb\u5de6\u4fa7\u52a0\u53f7\u56fe\u6807\u5e76\u9009\u62e9 Import\uff0c\u6309\u7167\u754c\u9762\u63d0\u793a\u5bfc\u5165 JSON \u6587\u4ef6\u3002\u4e4b\u540e\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u754c\u9762\u7684\u4eea\u8868\u76d8\uff1a\n",(0,r.kt)("img",{loading:"lazy",alt:"IT-DevOps-Solutions-statsd-dashboard.png",src:a(3372).Z,width:"1138",height:"918"})),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"TDengine \u4f5c\u4e3a\u65b0\u5174\u7684\u65f6\u5e8f\u5927\u6570\u636e\u5e73\u53f0\uff0c\u5177\u5907\u6781\u5f3a\u7684\u9ad8\u6027\u80fd\u3001\u9ad8\u53ef\u9760\u3001\u6613\u7ba1\u7406\u3001\u6613\u7ef4\u62a4\u7684\u4f18\u52bf\u3002\u5f97\u529b\u4e8e TDengine 2.3.0.0 \u7248\u672c\u4e2d\u65b0\u589e\u7684 schemaless \u534f\u8bae\u89e3\u6790\u529f\u80fd\uff0c\u4ee5\u53ca\u5f3a\u5927\u7684\u751f\u6001\u8f6f\u4ef6\u9002\u914d\u80fd\u529b\uff0c\u7528\u6237\u53ef\u4ee5\u77ed\u77ed\u6570\u5206\u949f\u5c31\u53ef\u4ee5\u642d\u5efa\u4e00\u4e2a\u9ad8\u6548\u6613\u7528\u7684 IT \u8fd0\u7ef4\u7cfb\u7edf\u6216\u8005\u9002\u914d\u4e00\u4e2a\u5df2\u5b58\u5728\u7684\u7cfb\u7edf\u3002"),(0,r.kt)("p",null,"TDengine \u5f3a\u5927\u7684\u6570\u636e\u5199\u5165\u67e5\u8be2\u6027\u80fd\u548c\u5176\u4ed6\u4e30\u5bcc\u529f\u80fd\u8bf7\u53c2\u8003\u5b98\u65b9\u6587\u6863\u548c\u4ea7\u54c1\u6210\u529f\u843d\u5730\u6848\u4f8b\u3002"))}g.isMDXComponent=!0},1418:function(e,t,a){t.Z=a.p+"assets/images/IT-DevOps-Solutions-Collectd-StatsD-f97bc5b0af0f64936fc186f79c87cd78.png"},8848:function(e,t,a){t.Z=a.p+"assets/images/IT-DevOps-Solutions-collectd-dashboard-bcb67aa4c42ecf3a4be655528e1cb7b8.png"},3372:function(e,t,a){t.Z=a.p+"assets/images/IT-DevOps-Solutions-statsd-dashboard-f025a6abf3f1340f80e75063bf64f81e.png"}}]);