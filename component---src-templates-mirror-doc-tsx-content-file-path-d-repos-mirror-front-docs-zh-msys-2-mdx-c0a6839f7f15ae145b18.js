"use strict";(self.webpackChunkzju_mirror=self.webpackChunkzju_mirror||[]).push([[354],{3467:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var l=n(1151),a=n(9748);function r(e){const t=Object.assign({h3:"h3",ul:"ul",li:"li",p:"p",code:"code",pre:"pre"},(0,l.ah)(),e.components);return a.default.createElement(a.default.Fragment,null,a.default.createElement(t.h3,null,"收录架构"),"\n",a.default.createElement(t.ul,null,"\n",a.default.createElement(t.li,null,"MINGW: i686, x86_64, ucrt64, clang64"),"\n",a.default.createElement(t.li,null,"MSYS: i686, x86_64"),"\n"),"\n",a.default.createElement(t.h3,null,"安装"),"\n",a.default.createElement(t.p,null,"请访问镜像目录下的 ",a.default.createElement(t.code,null,"distrib/")," 目录"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-conf"},"# x86_64\nhttps://mirrors.zju.edu.cn/msys2/distrib/x86_64/\n# i686\nhttps://mirrors.zju.edu.cn/msys2/distrib/i686/\n")),"\n",a.default.createElement(t.p,null,"找到名为 ",a.default.createElement(t.code,null,"msys2-<架构>-<日期>.exe")," 的文件（如 ",a.default.createElement(t.code,null,"msys2-x86_64-20141113.exe"),"），下载安装即可。"),"\n",a.default.createElement(t.h3,null,"pacman 的配置"),"\n",a.default.createElement(t.p,null,"直接运行"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-bash"},'sed -i "s#https\\?://mirror.msys2.org/#https://mirrors.zju.edu.cn/msys2/#g" /etc/pacman.d/mirrorlist*\n')))}var u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.default.createElement(t,e,a.default.createElement(r,e)):r(e)},c=n(5512),i=n(1508),m=n(5725),o=n(2658),s=n(4680),d=n(7782),f=n(2834),E=n(625),p=n(2795),h=n(4001),x=n(1441),Z=n(4046),g=n(6884),v=n(3623),y=n(7950),w=n(2351),b=n(1304);const j=e=>{var t,n,r,u;let{data:j,children:I}=e;const{language:z}=(0,d.useI18next)(),_={id:j.document.frontmatter.mirrorId,name:{zh:"",en:""},status:"unknown"},k=j.document.frontmatter.mirrorId,{0:P,1:C}=(0,a.useState)((0,y.t)("mirrors_"+k,_));(0,a.useEffect)((()=>{(async function(e){const t=await fetch("/api/mirrors/"+e);if(!t.ok)throw new Error("API call failed: "+t.status+" "+await t.text());const n=await t.json();return(0,y.v)("mirrors_"+e,n),n})(k).then((e=>C(e))).catch((e=>console.error(e)))}),[]);const M="/"+k,S=(0,w.G)(null!==(t=P.url)&&void 0!==t?t:M,!1),T=P.name[z];return a.default.createElement(i.Z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}},a.default.createElement(h.Z,{title:T+" | ZJU Mirror"}),a.default.createElement(i.Z,null,a.default.createElement(i.Z,{sx:{px:{xs:4,sm:8},py:4},position:"relative"},a.default.createElement(m.ZP,{container:!0,direction:"column",spacing:4,justifyContent:"flex-start",alignItems:"flex-start"},a.default.createElement(m.ZP,{item:!0,sx:{width:"100%"}},a.default.createElement(m.ZP,{container:!0,justifyContent:"space-between"},a.default.createElement(g.r,{color:"primary",underline:"hover",to:"/"},a.default.createElement(o.Z,{variant:"h5",component:"div",color:"primary"},a.default.createElement(d.Trans,null,"ZJU Mirror"))),a.default.createElement(m.ZP,{item:!0},a.default.createElement(Z.Z,null))),a.default.createElement(i.Z,{sx:{mt:4,display:"flex",flexDirection:"row",alignItems:"center"}}),a.default.createElement(o.Z,{variant:"h2",fontWeight:400,component:"div"},T),a.default.createElement(m.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center"},a.default.createElement(i.Z,{sx:{mr:1}},a.default.createElement(x.Z,{status:P.status})),a.default.createElement(o.Z,{variant:"subtitle1",component:"div",color:"text.disabled",display:"cached"===P.status?"none":"block"},a.default.createElement(d.Trans,null,"最近更新于"," ",{date:new Date(1e3*P.lastUpdated).toLocaleString(z)})))),(null!==(n=null===(r=P.files)||void 0===r?void 0:r.length)&&void 0!==n?n:0)>0&&a.default.createElement(m.ZP,{item:!0,width:"100%"},a.default.createElement(i.Z,null,a.default.createElement(o.Z,{gutterBottom:!0,variant:"h5",component:"div"},a.default.createElement(d.Trans,null,"安装映像")),a.default.createElement(p.Z,{files:P.files||[]}))),!(null!==(u=j.document.frontmatter)&&void 0!==u&&u.isGit)&&a.default.createElement(m.ZP,{item:!0},a.default.createElement(f.zx,{color:"primary",size:"medium",variant:"contained",startIcon:a.default.createElement(c.Z,null),to:S},a.default.createElement(d.Trans,null,"文件列表")))),a.default.createElement(i.Z,{sx:{position:"fixed",top:"6rem",right:{xs:"-4rem",sm:"5rem"},zIndex:-1}},(0,b.Z)(k,"rgb(71 123 210 / 23%)","20rem"))),a.default.createElement(i.Z,{zIndex:1,position:"sticky"},a.default.createElement(s.Z,{sx:{px:{xs:4,sm:8},py:4},elevation:0},a.default.createElement(l.Zo,{components:v.Z},I)))),a.default.createElement(E.Z,null))};function I(e){return a.default.createElement(j,e,a.default.createElement(u,e))}}}]);
//# sourceMappingURL=component---src-templates-mirror-doc-tsx-content-file-path-d-repos-mirror-front-docs-zh-msys-2-mdx-c0a6839f7f15ae145b18.js.map