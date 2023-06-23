"use strict";(self.webpackChunkzju_mirror=self.webpackChunkzju_mirror||[]).push([[8078],{7890:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var l=n(1151),a=n(9748);function r(e){const t=Object.assign({p:"p",a:"a",ul:"ul",li:"li",code:"code",pre:"pre"},(0,l.ah)(),e.components);return a.default.createElement(a.default.Fragment,null,a.default.createElement(t.p,null,"Arch Linux 中文社区仓库 是由 Arch Linux 中文社区驱动的非官方用户仓库。包含中文用户常用软件、工具、字体/美化包等。"),"\n",a.default.createElement(t.p,null,"完整的包信息列表（包名称/架构/维护者/状态）请 ",a.default.createElement(t.a,{href:"https://github.com/archlinuxcn/repo"},"点击这里")," 查看。"),"\n",a.default.createElement(t.ul,null,"\n",a.default.createElement(t.li,null,"官方仓库地址： ",a.default.createElement(t.a,{href:"https://repo.archlinuxcn.org"},"https://repo.archlinuxcn.org")),"\n",a.default.createElement(t.li,null,"镜像地址： ",a.default.createElement(t.a,{href:"https://mirrors.zju.edu.cn/archlinuxcn/"},"https://mirrors.zju.edu.cn/archlinuxcn/")),"\n"),"\n",a.default.createElement(t.p,null,"使用方法：在 ",a.default.createElement(t.code,null,"/etc/pacman.conf")," 文件末尾添加以下两行："),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-toml"},"[archlinuxcn]\nServer = https://mirrors.zju.edu.cn/archlinuxcn/$arch\n")),"\n",a.default.createElement(t.p,null,"之后安装 ",a.default.createElement(t.code,null,"archlinuxcn-keyring")," 包导入 GPG key。"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.default.createElement(t,e,a.default.createElement(r,e)):r(e)},u=n(5512),i=n(1508),o=n(5725),m=n(2658),d=n(4680),f=n(7782),s=n(2834),E=n(625),p=n(2795),h=n(4001),x=n(1441),Z=n(4046),g=n(6884),v=n(3623),w=n(7950),y=n(2351),j=n(1304);const b=e=>{var t,n,r,c;let{data:b,children:z}=e;const{language:k}=(0,f.useI18next)(),I={id:b.document.frontmatter.mirrorId,name:{zh:"",en:""},status:"unknown"},P=I.id,{0:C,1:T}=(0,a.useState)((0,w.t)("mirrors_"+P,I));(0,a.useEffect)((()=>{(async function(e){const t=await fetch("/mirror-front/mirror.json");if(!t.ok)throw new Error("API call failed: "+t.status+" "+await t.text());const n=await t.json();for(let l=0;l<n.length;l+=1)if(n[l].id===e)return n[l];throw new Error("Mirror fetch failed: "+e+" not exist")})(P).then((e=>T(e)))}),[]);const A="/"+P,D=(0,y.Z)(null!==(t=C.url)&&void 0!==t?t:A,!1);if("zh"!==k&&"en"!==k)throw Error("language out of range");const G=C.name[k];return a.default.createElement(i.Z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}},a.default.createElement(h.Z,{title:G+" | ZJU Mirror"}),a.default.createElement(i.Z,null,a.default.createElement(i.Z,{sx:{px:{xs:4,sm:8},py:4},position:"relative"},a.default.createElement(o.ZP,{container:!0,direction:"column",spacing:4,justifyContent:"flex-start",alignItems:"flex-start"},a.default.createElement(o.ZP,{item:!0,sx:{width:"100%"}},a.default.createElement(o.ZP,{container:!0,justifyContent:"space-between"},a.default.createElement(g.r,{color:"primary",underline:"hover",to:"/"},a.default.createElement(m.Z,{variant:"h5",component:"div",color:"primary"},a.default.createElement(f.Trans,null,"ZJU Mirror"))),a.default.createElement(o.ZP,{item:!0},a.default.createElement(Z.Z,null))),a.default.createElement(i.Z,{sx:{mt:4,display:"flex",flexDirection:"row",alignItems:"center"}}),a.default.createElement(m.Z,{variant:"h2",fontWeight:400,component:"div"},G),a.default.createElement(o.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center"},a.default.createElement(i.Z,{sx:{mr:1}},a.default.createElement(x.Z,{status:C.status})),a.default.createElement(m.Z,{variant:"subtitle1",component:"div",color:"text.disabled",display:"cached"===C.status?"none":"block"},a.default.createElement(f.Trans,null,"最近更新于"," ",{date:new Date(1e3*C.lastUpdated).toLocaleString(k)})))),(null!==(n=null===(r=C.files)||void 0===r?void 0:r.length)&&void 0!==n?n:0)>0&&a.default.createElement(o.ZP,{item:!0,width:"100%"},a.default.createElement(i.Z,null,a.default.createElement(m.Z,{gutterBottom:!0,variant:"h5",component:"div"},a.default.createElement(f.Trans,null,"安装映像")),a.default.createElement(p.Z,{files:C.files||[]}))),!(null!==(c=b.document.frontmatter)&&void 0!==c&&c.isGit)&&a.default.createElement(o.ZP,{item:!0},a.default.createElement(s.zx,{color:"primary",size:"medium",variant:"contained",startIcon:a.default.createElement(u.Z,null),to:D},a.default.createElement(f.Trans,null,"文件列表")))),a.default.createElement(i.Z,{sx:{position:"fixed",top:"6rem",right:{xs:"-4rem",sm:"5rem"},zIndex:-1}},(0,j.Z)(P,"rgb(71 123 210 / 23%)","20rem"))),a.default.createElement(i.Z,{zIndex:1,position:"sticky"},a.default.createElement(d.Z,{sx:{px:{xs:4,sm:8},py:4},elevation:0},a.default.createElement(l.Zo,{components:v.Z},z)))),a.default.createElement(E.Z,null))};function z(e){return a.default.createElement(b,e,a.default.createElement(c,e))}}}]);
//# sourceMappingURL=component---src-templates-mirror-doc-tsx-content-file-path-d-repos-mirror-front-docs-zh-archlinuxcn-mdx-46f2cafaf304278a7cd5.js.map