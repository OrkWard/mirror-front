"use strict";(self.webpackChunkzju_mirror=self.webpackChunkzju_mirror||[]).push([[7540],{1845:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(1151),l=n(9748);function r(e){const t=Object.assign({blockquote:"blockquote",p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components);return l.default.createElement(l.default.Fragment,null,l.default.createElement(t.blockquote,null,"\n",l.default.createElement(t.p,null,"以下代码在 AnolisOS 8.6 上经过测试，结合您所使用的系统版本，命令可能有所不同。"),"\n"),"\n",l.default.createElement(t.p,null,"输入以下命令替换配置："),"\n",l.default.createElement(t.pre,null,l.default.createElement(t.code,{className:"language-bash"},"sed -e 's|mirrors.openanolis.cn|mirrors.zju.edu.cn|g' \\\n    -i.bak \\\n    /etc/yum.repos.d/AnolisOS-*.repo\n")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.default.createElement(t,e,l.default.createElement(r,e)):r(e)},c=n(5512),u=n(1508),i=n(5725),m=n(2658),s=n(4680),d=n(7782),f=n(2834),E=n(625),p=n(2795),Z=n(4001),x=n(1441),h=n(4046),v=n(6884),g=n(3623),w=n(7950),b=n(2351),y=n(1304);const k=e=>{var t,n,r,o;let{data:k,children:j}=e;const{language:I}=(0,d.useI18next)(),z={id:k.document.frontmatter.mirrorId,name:{zh:"",en:""},status:"unknown"},P=k.document.frontmatter.mirrorId,{0:C,1:O}=(0,l.useState)((0,w.t)("mirrors_"+P,z));(0,l.useEffect)((()=>{(async function(e){const t=await fetch("/api/mirrors/"+e);if(!t.ok)throw new Error("API call failed: "+t.status+" "+await t.text());const n=await t.json();return(0,w.v)("mirrors_"+e,n),n})(P).then((e=>O(e))).catch((e=>console.error(e)))}),[]);const S="/"+P,T=(0,b.G)(null!==(t=C.url)&&void 0!==t?t:S,!1),_=C.name[I];return l.default.createElement(u.Z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}},l.default.createElement(Z.Z,{title:_+" | ZJU Mirror"}),l.default.createElement(u.Z,null,l.default.createElement(u.Z,{sx:{px:{xs:4,sm:8},py:4},position:"relative"},l.default.createElement(i.ZP,{container:!0,direction:"column",spacing:4,justifyContent:"flex-start",alignItems:"flex-start"},l.default.createElement(i.ZP,{item:!0,sx:{width:"100%"}},l.default.createElement(i.ZP,{container:!0,justifyContent:"space-between"},l.default.createElement(v.r,{color:"primary",underline:"hover",to:"/"},l.default.createElement(m.Z,{variant:"h5",component:"div",color:"primary"},l.default.createElement(d.Trans,null,"ZJU Mirror"))),l.default.createElement(i.ZP,{item:!0},l.default.createElement(h.Z,null))),l.default.createElement(u.Z,{sx:{mt:4,display:"flex",flexDirection:"row",alignItems:"center"}}),l.default.createElement(m.Z,{variant:"h2",fontWeight:400,component:"div"},_),l.default.createElement(i.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center"},l.default.createElement(u.Z,{sx:{mr:1}},l.default.createElement(x.Z,{status:C.status})),l.default.createElement(m.Z,{variant:"subtitle1",component:"div",color:"text.disabled",display:"cached"===C.status?"none":"block"},l.default.createElement(d.Trans,null,"最近更新于"," ",{date:new Date(1e3*C.lastUpdated).toLocaleString(I)})))),(null!==(n=null===(r=C.files)||void 0===r?void 0:r.length)&&void 0!==n?n:0)>0&&l.default.createElement(i.ZP,{item:!0,width:"100%"},l.default.createElement(u.Z,null,l.default.createElement(m.Z,{gutterBottom:!0,variant:"h5",component:"div"},l.default.createElement(d.Trans,null,"安装映像")),l.default.createElement(p.Z,{files:C.files||[]}))),!(null!==(o=k.document.frontmatter)&&void 0!==o&&o.isGit)&&l.default.createElement(i.ZP,{item:!0},l.default.createElement(f.zx,{color:"primary",size:"medium",variant:"contained",startIcon:l.default.createElement(c.Z,null),to:T},l.default.createElement(d.Trans,null,"文件列表")))),l.default.createElement(u.Z,{sx:{position:"fixed",top:"6rem",right:{xs:"-4rem",sm:"5rem"},zIndex:-1}},(0,y.Z)(P,"rgb(71 123 210 / 23%)","20rem"))),l.default.createElement(u.Z,{zIndex:1,position:"sticky"},l.default.createElement(s.Z,{sx:{px:{xs:4,sm:8},py:4},elevation:0},l.default.createElement(a.Zo,{components:g.Z},j)))),l.default.createElement(E.Z,null))};function j(e){return l.default.createElement(k,e,l.default.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-mirror-doc-tsx-content-file-path-d-repos-mirror-front-docs-zh-anolis-mdx-b3ffc1671e69f067f784.js.map