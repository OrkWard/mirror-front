"use strict";(self.webpackChunkzju_mirror=self.webpackChunkzju_mirror||[]).push([[3362],{5969:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var l=n(1151),a=n(9748);function r(e){const t=Object.assign({p:"p",pre:"pre",code:"code",h3:"h3"},(0,l.ah)(),e.components);return a.default.createElement(a.default.Fragment,null,a.default.createElement(t.p,null,"如需克隆 Linux 代码，使用"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-bash"},"git clone https://mirrors.zju.edu.cn/git/linux.git\n")),"\n",a.default.createElement(t.p,null,"若要将 mirror 加入已有代码库，可在已有仓库中运行"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-bash"},"git remote add mirror https://mirrors.zju.edu.cn/git/linux.git\n")),"\n",a.default.createElement(t.p,null,"或运行"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-bash"},"git remote set-url origin https://mirrors.zju.edu.cn/git/linux.git\n")),"\n",a.default.createElement(t.p,null,"将默认上游设置为镜像站"),"\n",a.default.createElement(t.h3,null,"增量下载"),"\n",a.default.createElement(t.p,null,"如果需要其它 linux 分支的代码（如树莓派内核代码），可以在 clone 本项目基础上增量下载分支的代码，从而加速下载"),"\n",a.default.createElement(t.p,null,"以树莓派为例，具体操作为"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-bash"},"git clone https://mirrors.zju.edu.cn/git/linux.git\ngit remote add rasp https://github.com/raspberrypi/linux.git\ngit fetch rasp\n")))}var u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.default.createElement(t,e,a.default.createElement(r,e)):r(e)},i=n(5512),c=n(1508),o=n(5725),m=n(2658),d=n(4680),s=n(7782),f=n(2834),E=n(625),p=n(2795),g=n(4001),h=n(1441),x=n(4046),Z=n(6884),v=n(3623),w=n(7950),b=n(2351),y=n(1304);const j=e=>{var t,n,r,u;let{data:j,children:z}=e;const{language:I}=(0,s.useI18next)(),k={id:j.document.frontmatter.mirrorId,name:{zh:"",en:""},status:"unknown"},P=k.id,{0:C,1:N}=(0,a.useState)((0,w.t)("mirrors_"+P,k));(0,a.useEffect)((()=>{(async function(e){const t=await fetch("/mirror-front/mirror.json");if(!t.ok)throw new Error("API call failed: "+t.status+" "+await t.text());const n=await t.json();for(let l=0;l<n.length;l+=1)if(n[l].id===e)return n[l];throw new Error("Mirror fetch failed: "+e+" not exist")})(P).then((e=>N(e)))}),[]);const T="/"+P,D=(0,b.Z)(null!==(t=C.url)&&void 0!==t?t:T,!1);if("zh"!==I&&"en"!==I)throw Error("language out of range");const M=C.name[I];return a.default.createElement(c.Z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}},a.default.createElement(g.Z,{title:M+" | ZJU Mirror"}),a.default.createElement(c.Z,null,a.default.createElement(c.Z,{sx:{px:{xs:4,sm:8},py:4},position:"relative"},a.default.createElement(o.ZP,{container:!0,direction:"column",spacing:4,justifyContent:"flex-start",alignItems:"flex-start"},a.default.createElement(o.ZP,{item:!0,sx:{width:"100%"}},a.default.createElement(o.ZP,{container:!0,justifyContent:"space-between"},a.default.createElement(Z.r,{color:"primary",underline:"hover",to:"/"},a.default.createElement(m.Z,{variant:"h5",component:"div",color:"primary"},a.default.createElement(s.Trans,null,"ZJU Mirror"))),a.default.createElement(o.ZP,{item:!0},a.default.createElement(x.Z,null))),a.default.createElement(c.Z,{sx:{mt:4,display:"flex",flexDirection:"row",alignItems:"center"}}),a.default.createElement(m.Z,{variant:"h2",fontWeight:400,component:"div"},M),a.default.createElement(o.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center"},a.default.createElement(c.Z,{sx:{mr:1}},a.default.createElement(h.Z,{status:C.status})),a.default.createElement(m.Z,{variant:"subtitle1",component:"div",color:"text.disabled",display:"cached"===C.status?"none":"block"},a.default.createElement(s.Trans,null,"最近更新于"," ",{date:new Date(1e3*C.lastUpdated).toLocaleString(I)})))),(null!==(n=null===(r=C.files)||void 0===r?void 0:r.length)&&void 0!==n?n:0)>0&&a.default.createElement(o.ZP,{item:!0,width:"100%"},a.default.createElement(c.Z,null,a.default.createElement(m.Z,{gutterBottom:!0,variant:"h5",component:"div"},a.default.createElement(s.Trans,null,"安装映像")),a.default.createElement(p.Z,{files:C.files||[]}))),!(null!==(u=j.document.frontmatter)&&void 0!==u&&u.isGit)&&a.default.createElement(o.ZP,{item:!0},a.default.createElement(f.zx,{color:"primary",size:"medium",variant:"contained",startIcon:a.default.createElement(i.Z,null),to:D},a.default.createElement(s.Trans,null,"文件列表")))),a.default.createElement(c.Z,{sx:{position:"fixed",top:"6rem",right:{xs:"-4rem",sm:"5rem"},zIndex:-1}},(0,y.Z)(P,"rgb(71 123 210 / 23%)","20rem"))),a.default.createElement(c.Z,{zIndex:1,position:"sticky"},a.default.createElement(d.Z,{sx:{px:{xs:4,sm:8},py:4},elevation:0},a.default.createElement(l.Zo,{components:v.Z},z)))),a.default.createElement(E.Z,null))};function z(e){return a.default.createElement(j,e,a.default.createElement(u,e))}}}]);
//# sourceMappingURL=component---src-templates-mirror-doc-tsx-content-file-path-d-repos-mirror-front-docs-zh-linux-git-mdx-f4236737e438e2d5c2b0.js.map