"use strict";(self.webpackChunkzju_mirror=self.webpackChunkzju_mirror||[]).push([[1568],{321:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var l=n(1151),a=n(9748);function r(e){const t=Object.assign({h3:"h3",h4:"h4",p:"p",code:"code",pre:"pre",a:"a"},(0,l.ah)(),e.components);return a.default.createElement(a.default.Fragment,null,a.default.createElement(t.h3,null,"Portage 配置"),"\n",a.default.createElement(t.h4,null,"rsync 方式"),"\n",a.default.createElement(t.p,null,"修改 ",a.default.createElement(t.code,null,"/etc/portage/repos.conf/gentoo.conf")," ，将"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-conf"},"sync-uri = rsync://rsync.gentoo.org/gentoo-portage\n")),"\n",a.default.createElement(t.p,null,"修改为"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-conf"},"sync-uri = rsync://mirror.zju.edu.cn/gentoo-portage\n")),"\n",a.default.createElement(t.h4,null,"git 方式"),"\n",a.default.createElement(t.p,null,"参考 ",a.default.createElement(t.a,{href:"/index/docs/gentoo-portage.git/"},"Gentoo Portage Git 帮助"),"。"),"\n",a.default.createElement(t.h3,null,"Distfiles 配置"),"\n",a.default.createElement(t.p,null,"参考 ",a.default.createElement(t.a,{href:"/index/docs/gentoo/"},"Gentoo 帮助"),"。"),"\n",a.default.createElement(t.p,null,"配置好 Portage 与 Distfiles 后，执行 ",a.default.createElement(t.code,null,"emerge --sync")," 进行更新。"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.default.createElement(t,e,a.default.createElement(r,e)):r(e)},o=n(5512),u=n(1508),i=n(5725),d=n(2658),m=n(4680),s=n(7782),f=n(2834),E=n(625),p=n(2795),g=n(4001),h=n(1441),Z=n(4046),x=n(6884),v=n(3623),y=n(7950),w=n(2351),P=n(1304);const b=e=>{var t,n,r,c;let{data:b,children:j}=e;const{language:I}=(0,s.useI18next)(),k={id:b.document.frontmatter.mirrorId,name:{zh:"",en:""},status:"unknown"},z=b.document.frontmatter.mirrorId,{0:C,1:D}=(0,a.useState)((0,y.t)("mirrors_"+z,k));(0,a.useEffect)((()=>{(async function(e){const t=await fetch("/api/mirrors/"+e);if(!t.ok)throw new Error("API call failed: "+t.status+" "+await t.text());const n=await t.json();return(0,y.v)("mirrors_"+e,n),n})(z).then((e=>D(e))).catch((e=>console.error(e)))}),[]);const G="/"+z,T=(0,w.G)(null!==(t=C.url)&&void 0!==t?t:G,!1),_=C.name[I];return a.default.createElement(u.Z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}},a.default.createElement(g.Z,{title:_+" | ZJU Mirror"}),a.default.createElement(u.Z,null,a.default.createElement(u.Z,{sx:{px:{xs:4,sm:8},py:4},position:"relative"},a.default.createElement(i.ZP,{container:!0,direction:"column",spacing:4,justifyContent:"flex-start",alignItems:"flex-start"},a.default.createElement(i.ZP,{item:!0,sx:{width:"100%"}},a.default.createElement(i.ZP,{container:!0,justifyContent:"space-between"},a.default.createElement(x.r,{color:"primary",underline:"hover",to:"/"},a.default.createElement(d.Z,{variant:"h5",component:"div",color:"primary"},a.default.createElement(s.Trans,null,"ZJU Mirror"))),a.default.createElement(i.ZP,{item:!0},a.default.createElement(Z.Z,null))),a.default.createElement(u.Z,{sx:{mt:4,display:"flex",flexDirection:"row",alignItems:"center"}}),a.default.createElement(d.Z,{variant:"h2",fontWeight:400,component:"div"},_),a.default.createElement(i.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center"},a.default.createElement(u.Z,{sx:{mr:1}},a.default.createElement(h.Z,{status:C.status})),a.default.createElement(d.Z,{variant:"subtitle1",component:"div",color:"text.disabled",display:"cached"===C.status?"none":"block"},a.default.createElement(s.Trans,null,"最近更新于"," ",{date:new Date(1e3*C.lastUpdated).toLocaleString(I)})))),(null!==(n=null===(r=C.files)||void 0===r?void 0:r.length)&&void 0!==n?n:0)>0&&a.default.createElement(i.ZP,{item:!0,width:"100%"},a.default.createElement(u.Z,null,a.default.createElement(d.Z,{gutterBottom:!0,variant:"h5",component:"div"},a.default.createElement(s.Trans,null,"安装映像")),a.default.createElement(p.Z,{files:C.files||[]}))),!(null!==(c=b.document.frontmatter)&&void 0!==c&&c.isGit)&&a.default.createElement(i.ZP,{item:!0},a.default.createElement(f.zx,{color:"primary",size:"medium",variant:"contained",startIcon:a.default.createElement(o.Z,null),to:T},a.default.createElement(s.Trans,null,"文件列表")))),a.default.createElement(u.Z,{sx:{position:"fixed",top:"6rem",right:{xs:"-4rem",sm:"5rem"},zIndex:-1}},(0,P.Z)(z,"rgb(71 123 210 / 23%)","20rem"))),a.default.createElement(u.Z,{zIndex:1,position:"sticky"},a.default.createElement(m.Z,{sx:{px:{xs:4,sm:8},py:4},elevation:0},a.default.createElement(l.Zo,{components:v.Z},j)))),a.default.createElement(E.Z,null))};function j(e){return a.default.createElement(b,e,a.default.createElement(c,e))}}}]);
//# sourceMappingURL=component---src-templates-mirror-doc-tsx-content-file-path-d-repos-mirror-front-docs-zh-gentoo-portage-mdx-3da322f66a5da68ca1a0.js.map