"use strict";(self.webpackChunkzju_mirror=self.webpackChunkzju_mirror||[]).push([[8176],{296:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var l=n(1151),a=n(9748);function r(e){const t=Object.assign({blockquote:"blockquote",p:"p",a:"a",code:"code",h3:"h3",pre:"pre"},(0,l.ah)(),e.components);return a.default.createElement(a.default.Fragment,null,a.default.createElement(t.blockquote,null,"\n",a.default.createElement(t.p,null,"镜像站已正常工作，但可能未进入中国镜像站列表。"),"\n",a.default.createElement(t.p,null,"手动设置方法可参照 ",a.default.createElement(t.a,{href:"/index/docs/archlinux"},"ArchLinux 文档")),"\n"),"\n",a.default.createElement(t.p,null,"包含架构：",a.default.createElement(t.code,null,"i686"),", ",a.default.createElement(t.code,null,"x86_64"),", ",a.default.createElement(t.code,null,"aarch64")),"\n",a.default.createElement(t.p,null,"目前 AArch64 (ARM) 架构的 manjaro 源位于主源，manjaro-arm 镜像上游已不再更新。"),"\n",a.default.createElement(t.h3,null,"使用说明"),"\n",a.default.createElement(t.p,null,"生成可用中国镜像站列表："),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-shell"},"pacman-mirrors -i -c China -m rank\n")),"\n",a.default.createElement(t.p,null,"勾选"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-plaintext"},"https://mirrors.zju.edu.cn/manjaro/\n")),"\n",a.default.createElement(t.p,null,"然后按 ",a.default.createElement(t.code,null,"OK")," 键两次。"),"\n",a.default.createElement(t.p,null,"最后刷新缓存："),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-bash"},"pacman -Syy\n")))}var u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.default.createElement(t,e,a.default.createElement(r,e)):r(e)},c=n(5512),o=n(1508),m=n(5725),d=n(2658),i=n(4680),f=n(7782),s=n(2834),E=n(625),p=n(2795),h=n(4001),x=n(1441),Z=n(4046),g=n(6884),v=n(3623),w=n(7950),y=n(2351),b=n(1304);const j=e=>{var t,n,r,u;let{data:j,children:k}=e;const{language:z}=(0,f.useI18next)(),I={id:j.document.frontmatter.mirrorId,name:{zh:"",en:""},status:"unknown"},P=I.id,{0:C,1:A}=(0,a.useState)((0,w.t)("mirrors_"+P,I));(0,a.useEffect)((()=>{(async function(e){const t=await fetch("/mirror.json");if(!t.ok)throw new Error("API call failed: "+t.status+" "+await t.text());const n=await t.json();for(let l=0;l<n.length;l+=1)if(n[l].id===e)return n[l];throw new Error("Mirror fetch failed: "+e+" not exist")})(P).then((e=>A(e)))}),[]);const M="/"+P,T=(0,y.Z)(null!==(t=C.url)&&void 0!==t?t:M,!1);if("zh"!==z&&"en"!==z)throw Error("language out of range");const _=C.name[z];return a.default.createElement(o.Z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}},a.default.createElement(h.Z,{title:_+" | ZJU Mirror"}),a.default.createElement(o.Z,null,a.default.createElement(o.Z,{sx:{px:{xs:4,sm:8},py:4},position:"relative"},a.default.createElement(m.ZP,{container:!0,direction:"column",spacing:4,justifyContent:"flex-start",alignItems:"flex-start"},a.default.createElement(m.ZP,{item:!0,sx:{width:"100%"}},a.default.createElement(m.ZP,{container:!0,justifyContent:"space-between"},a.default.createElement(g.r,{color:"primary",underline:"hover",to:"/"},a.default.createElement(d.Z,{variant:"h5",component:"div",color:"primary"},a.default.createElement(f.Trans,null,"ZJU Mirror"))),a.default.createElement(m.ZP,{item:!0},a.default.createElement(Z.Z,null))),a.default.createElement(o.Z,{sx:{mt:4,display:"flex",flexDirection:"row",alignItems:"center"}}),a.default.createElement(d.Z,{variant:"h2",fontWeight:400,component:"div"},_),a.default.createElement(m.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center"},a.default.createElement(o.Z,{sx:{mr:1}},a.default.createElement(x.Z,{status:C.status})),a.default.createElement(d.Z,{variant:"subtitle1",component:"div",color:"text.disabled",display:"cached"===C.status?"none":"block"},a.default.createElement(f.Trans,null,"最近更新于"," ",{date:new Date(1e3*C.lastUpdated).toLocaleString(z)})))),(null!==(n=null===(r=C.files)||void 0===r?void 0:r.length)&&void 0!==n?n:0)>0&&a.default.createElement(m.ZP,{item:!0,width:"100%"},a.default.createElement(o.Z,null,a.default.createElement(d.Z,{gutterBottom:!0,variant:"h5",component:"div"},a.default.createElement(f.Trans,null,"安装映像")),a.default.createElement(p.Z,{files:C.files||[]}))),!(null!==(u=j.document.frontmatter)&&void 0!==u&&u.isGit)&&a.default.createElement(m.ZP,{item:!0},a.default.createElement(s.zx,{color:"primary",size:"medium",variant:"contained",startIcon:a.default.createElement(c.Z,null),to:T},a.default.createElement(f.Trans,null,"文件列表")))),a.default.createElement(o.Z,{sx:{position:"fixed",top:"6rem",right:{xs:"-4rem",sm:"5rem"},zIndex:-1}},(0,b.Z)(P,"rgb(71 123 210 / 23%)","20rem"))),a.default.createElement(o.Z,{zIndex:1,position:"sticky"},a.default.createElement(i.Z,{sx:{px:{xs:4,sm:8},py:4},elevation:0},a.default.createElement(l.Zo,{components:v.Z},k)))),a.default.createElement(E.Z,null))};function k(e){return a.default.createElement(j,e,a.default.createElement(u,e))}}}]);
//# sourceMappingURL=component---src-templates-mirror-doc-tsx-content-file-path-d-repos-mirror-front-docs-zh-manjaro-mdx-f70b9d36ec214832d897.js.map