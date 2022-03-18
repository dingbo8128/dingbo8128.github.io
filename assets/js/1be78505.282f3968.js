"use strict";(self.webpackChunktddocs=self.webpackChunktddocs||[]).push([[9514,4608],{6292:function(e,t,a){a.r(t),a.d(t,{default:function(){return ie}});var n=a(7294),l=a(3905),r=a(8790),o=a(2860),c=a(6010),i=a(3725),s=a(8487),d=a(7462);function m(e){return n.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var u=a(5999),p=a(3366),b=a(9960),v=a(3919),f=a(541),h="menuHtmlItem_fVIQ",E=a(2389),_=["item"],g=["item","onItemClick","activePath","level","index"],k=["item","onItemClick","activePath","level","index"];function C(e){var t=e.item,a=(0,p.Z)(e,_);switch(t.type){case"category":return n.createElement(N,(0,d.Z)({item:t},a));case"html":return n.createElement(S,(0,d.Z)({item:t},a));default:return n.createElement(I,(0,d.Z)({item:t},a))}}function N(e){var t=e.item,a=e.onItemClick,l=e.activePath,r=e.level,o=e.index,s=(0,p.Z)(e,g),m=t.items,v=t.label,f=t.collapsible,h=t.className,_=t.href,k=function(e){var t=(0,E.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0}),[e,t])}(t),C=(0,i._F)(t,l),N=(0,i.Mg)(_,l),S=(0,i.uR)({initialState:function(){return!!f&&(!C&&t.collapsed)}}),I=S.collapsed,Z=S.setCollapsed;!function(e){var t=e.isActive,a=e.collapsed,l=e.setCollapsed,r=(0,i.D9)(t);(0,n.useEffect)((function(){t&&!r&&a&&l(!1)}),[t,r,a,l])}({isActive:C,collapsed:I,setCollapsed:Z});var T=(0,i.fP)(),L=T.expandedItem,x=T.setExpandedItem;function y(e){void 0===e&&(e=!I),x(e?null:o),Z(e)}var w=(0,i.LU)().autoCollapseSidebarCategories;return(0,n.useEffect)((function(){f&&L&&L!==o&&w&&Z(!0)}),[f,L,o,Z,w]),n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":I},h)},n.createElement("div",{className:(0,c.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":N})},n.createElement(b.Z,(0,d.Z)({className:(0,c.Z)("menu__link",{"menu__link--sublist":f&&!_,"menu__link--active":C}),onClick:f?function(e){null==a||a(t),_?y(!1):(e.preventDefault(),y())}:function(){null==a||a(t)},"aria-current":N?"page":void 0,href:f?null!=k?k:"#":k},s),v),_&&f&&n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:v}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),y()}})),n.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},n.createElement(M,{items:m,tabIndex:I?-1:0,onItemClick:a,activePath:l,level:r+1})))}function S(e){var t=e.item,a=e.level,l=e.index,r=t.value,o=t.defaultStyle,s=t.className;return n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(a),o&&h+" menu__list-item",s),key:l,dangerouslySetInnerHTML:{__html:r}})}function I(e){var t=e.item,a=e.onItemClick,l=e.activePath,r=e.level,o=(e.index,(0,p.Z)(e,k)),s=t.href,m=t.label,u=t.className,h=(0,i._F)(t,l);return n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(r),"menu__list-item",u),key:m},n.createElement(b.Z,(0,d.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":h}),"aria-current":h?"page":void 0,to:s},(0,v.Z)(s)&&{onClick:a?function(){return a(t)}:void 0},o),(0,v.Z)(s)?m:n.createElement("span",null,m,n.createElement(f.Z,null))))}var Z=["items"];function T(e){var t=e.items,a=(0,p.Z)(e,Z);return n.createElement(i.D_,null,t.map((function(e,t){return n.createElement(C,(0,d.Z)({key:t,item:e,index:t},a))})))}var M=(0,n.memo)(T),L="sidebar_gi4H",x="sidebarWithHideableNavbar_vOD8",y="sidebarHidden_pDGd",w="sidebarLogo_YnPk",A="menu_PfFV",P="menuWithAnnouncementBar_QKNV",B="collapseSidebarButton_FGfn",F="collapseSidebarButtonIcon_tdHK",D="versionDropdownWrapper_Qxj6",H="versionSelect_lz6N",R="sidebarTop_Qw2W",W="searchBar_Xj6T",z="iconLabel_Oh1n",V="searchIcon_fLua",Y=function(e){return n.createElement("div",{className:W},n.createElement("input",{type:"text"}),n.createElement("label",{className:z},n.createElement("svg",{width:"20",height:"20",className:V,viewBox:"0 0 20 20"},n.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))))};function q(e){return n.createElement("div",{className:R},n.createElement("div",{className:D},n.createElement("select",{name:"version",className:H},n.createElement("option",{value:"v2.x"},"v2.4"),n.createElement("option",{value:"v1.6"},"v1.6"))),n.createElement(Y,null))}function K(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",B),onClick:t},n.createElement(m,{className:F}))}function Q(e){var t,a,l=e.path,r=e.sidebar,o=e.onCollapse,d=e.isHidden,m=function(){var e=(0,i.nT)().isActive,t=(0,n.useState)(e),a=t[0],l=t[1];return(0,i.RF)((function(t){var a=t.scrollY;e&&l(0===a)}),[e]),e&&a}(),u=(0,i.LU)(),p=u.navbar.hideOnScroll,b=u.hideableSidebar;return n.createElement("div",{className:(0,c.Z)(L,(t={},t[x]=p,t[y]=d,t))},p&&n.createElement(s.Z,{tabIndex:-1,className:w}),n.createElement(q,null),n.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",A,(a={},a[P]=m,a))},n.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(M,{items:r,activePath:l,level:1}))),b&&n.createElement(K,{onClick:o}))}var j=function(e){var t=e.toggleSidebar,a=e.sidebar,l=e.path;return n.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(M,{items:a,activePath:l,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function G(e){return n.createElement(i.Cv,{component:j,props:e})}var O=n.memo(Q),U=n.memo(G);function X(e){var t=(0,i.iP)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(O,e),l&&n.createElement(U,e))}var J=a(5119),$=a(4608),ee="backToTopButton_RiI4",te="backToTopButtonShow_ssHd";function ae(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}function ne(){var e,t=(0,n.useState)(!1),a=t[0],l=t[1],r=(0,n.useRef)(!1),o=ae(),s=o.smoothScrollTop,d=o.cancelScrollToTop;return(0,i.RF)((function(e,t){var a=e.scrollY,n=null==t?void 0:t.scrollY;if(n)if(r.current)r.current=!1;else{var o=a<n;if(o||d(),a<300)l(!1);else if(o){var c=document.documentElement.scrollHeight;a+window.innerHeight<c&&l(!0)}else l(!1)}})),(0,i.SL)((function(e){e.location.hash&&(r.current=!0,l(!1))})),n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,ee,(e={},e[te]=a,e)),type:"button",onClick:function(){return s()}})}var le=a(6775),re={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"},oe=a(5742);function ce(e){var t,a,r,s=e.currentDocRoute,d=e.versionMetadata,p=e.children,b=e.sidebarName,v=(0,i.Vq)(),f=d.pluginId,h=d.version,E=(0,n.useState)(!1),_=E[0],g=E[1],k=(0,n.useState)(!1),C=k[0],N=k[1],S=(0,n.useCallback)((function(){C&&N(!1),g((function(e){return!e}))}),[C]);return n.createElement(o.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:h,tag:(0,i.os)(f,h)}},n.createElement("div",{className:re.docPage},n.createElement(ne,null),v&&n.createElement("aside",{className:(0,c.Z)(i.kM.docs.docSidebarContainer,re.docSidebarContainer,(t={},t[re.docSidebarContainerHidden]=_,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(re.docSidebarContainer)&&_&&N(!0)}},n.createElement(X,{key:b,sidebar:v,path:s.path,onCollapse:S,isHidden:C}),C&&n.createElement("div",{className:re.collapsedDocSidebar,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:S,onClick:S},n.createElement(m,{className:re.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,c.Z)(re.docMainContainer,(a={},a[re.docMainContainerEnhanced]=_||!v,a))},n.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",re.docItemWrapper,(r={},r[re.docItemWrapperEnhanced]=_,r))},n.createElement(l.Zo,{components:J.Z},p)))))}function ie(e){var t=e.route.routes,a=e.versionMetadata,l=e.location,o=t.find((function(e){return(0,le.LX)(l.pathname,e)}));if(!o)return n.createElement($.default,null);var c=o.sidebar,s=c?a.docsSidebars[c]:null;return n.createElement(n.Fragment,null,n.createElement(oe.Z,null,n.createElement("html",{className:a.className})),n.createElement(i.qu,{version:a},n.createElement(i.bT,{sidebar:s},n.createElement(ce,{currentDocRoute:o,versionMetadata:a,sidebarName:c},(0,r.H)(t,{versionMetadata:a})))))}},4608:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(7294),l=a(2860),r=a(5999);function o(){return n.createElement(l.Z,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);