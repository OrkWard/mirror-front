"use strict";(self.webpackChunkzju_mirror=self.webpackChunkzju_mirror||[]).push([[5732],{2793:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var l=n(1151),a=n(9748);function r(e){const t=Object.assign({p:"p",h3:"h3",code:"code",pre:"pre",a:"a"},(0,l.ah)(),e.components);return a.default.createElement(a.default.Fragment,null,a.default.createElement(t.p,null,"本仓库是 Gentoo 的 Stage 3 镜像。"),"\n",a.default.createElement(t.h3,null,"Distfiles 配置"),"\n",a.default.createElement(t.p,null,"在 ",a.default.createElement(t.code,null,"/etc/portage/make.conf")," 中加入："),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-conf"},'GENTOO_MIRRORS="https://mirrors.zju.edu.cn/gentoo"\n')),"\n",a.default.createElement(t.p,null,"关于 Portage 配置可以参考 ",a.default.createElement(t.a,{href:"/mirror-front/docs/gentoo-portage/"},"Gentoo Portage 镜像"),"。"),"\n",a.default.createElement(t.p,null,"配置好 Portage 与 Distfiles 后，执行 ",a.default.createElement(t.code,null,"emerge --sync")," 进行更新。"),"\n",a.default.createElement(t.h3,null,"Gentoo Prefix Bootstrap 镜像配置"),"\n",a.default.createElement(t.p,null,"在运行 Bootstrap 脚本之前，可通过设置以下环境变量选择 Bootstrap 过程中使用的镜像。"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-bash"},'export GENTOO_MIRRORS="https://mirrors.zju.edu.cn/gentoo"\nexport SNAPSHOT_URL="https://mirrors.zju.edu.cn/gentoo/snapshots"\n# export GNU_URL="http://mirrors.zju.edu.cn/gnu"\n')),"\n",a.default.createElement(t.p,null,a.default.createElement(t.code,null,"GNU_URL")," 的具体设置可以参考 ",a.default.createElement(t.a,{href:"/mirror-front/docs/gnu/"},"GNU 帮助"),"。"),"\n",a.default.createElement(t.p,null,"Bootstrap 成功后，若对 Gentoo Portage 和 Distfiles 换源，可参照以上几节，只需将 ",a.default.createElement(t.code,null,"/etc")," 换成 ",a.default.createElement(t.code,null,"$EPREFIX/etc")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.default.createElement(t,e,a.default.createElement(r,e)):r(e)},u=n(5512),c=n(1508),i=n(5725),d=n(2658),m=n(4680),s=n(7782),f=n(2834),E=n(625),p=n(2795),h=n(4001),g=n(1441),Z=n(4046),x=n(6884),v=n(3623),w=n(7950),y=n(2351),P=n(1304);const j=e=>{var t,n,r,o;let{data:j,children:z}=e;const{language:I}=(0,s.useI18next)(),b={id:j.document.frontmatter.mirrorId,name:{zh:"",en:""},status:"unknown"},G=b.id,{0:R,1:k}=(0,a.useState)((0,w.t)("mirrors_"+G,b));(0,a.useEffect)((()=>{(async function(e){const t=await fetch("/mirror-front/mirror.json");if(!t.ok)throw new Error("API call failed: "+t.status+" "+await t.text());const n=await t.json();for(let l=0;l<n.length;l+=1)if(n[l].id===e)return n[l];throw new Error("Mirror fetch failed: "+e+" not exist")})(G).then((e=>k(e)))}),[]);const O="/"+G,U=(0,y.Z)(null!==(t=R.url)&&void 0!==t?t:O,!1);if("zh"!==I&&"en"!==I)throw Error("language out of range");const N=R.name[I];return a.default.createElement(c.Z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}},a.default.createElement(h.Z,{title:N+" | ZJU Mirror"}),a.default.createElement(c.Z,null,a.default.createElement(c.Z,{sx:{px:{xs:4,sm:8},py:4},position:"relative"},a.default.createElement(i.ZP,{container:!0,direction:"column",spacing:4,justifyContent:"flex-start",alignItems:"flex-start"},a.default.createElement(i.ZP,{item:!0,sx:{width:"100%"}},a.default.createElement(i.ZP,{container:!0,justifyContent:"space-between"},a.default.createElement(x.r,{color:"primary",underline:"hover",to:"/"},a.default.createElement(d.Z,{variant:"h5",component:"div",color:"primary"},a.default.createElement(s.Trans,null,"ZJU Mirror"))),a.default.createElement(i.ZP,{item:!0},a.default.createElement(Z.Z,null))),a.default.createElement(c.Z,{sx:{mt:4,display:"flex",flexDirection:"row",alignItems:"center"}}),a.default.createElement(d.Z,{variant:"h2",fontWeight:400,component:"div"},N),a.default.createElement(i.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center"},a.default.createElement(c.Z,{sx:{mr:1}},a.default.createElement(g.Z,{status:R.status})),a.default.createElement(d.Z,{variant:"subtitle1",component:"div",color:"text.disabled",display:"cached"===R.status?"none":"block"},a.default.createElement(s.Trans,null,"最近更新于"," ",{date:new Date(1e3*R.lastUpdated).toLocaleString(I)})))),(null!==(n=null===(r=R.files)||void 0===r?void 0:r.length)&&void 0!==n?n:0)>0&&a.default.createElement(i.ZP,{item:!0,width:"100%"},a.default.createElement(c.Z,null,a.default.createElement(d.Z,{gutterBottom:!0,variant:"h5",component:"div"},a.default.createElement(s.Trans,null,"安装映像")),a.default.createElement(p.Z,{files:R.files||[]}))),!(null!==(o=j.document.frontmatter)&&void 0!==o&&o.isGit)&&a.default.createElement(i.ZP,{item:!0},a.default.createElement(f.zx,{color:"primary",size:"medium",variant:"contained",startIcon:a.default.createElement(u.Z,null),to:U},a.default.createElement(s.Trans,null,"文件列表")))),a.default.createElement(c.Z,{sx:{position:"fixed",top:"6rem",right:{xs:"-4rem",sm:"5rem"},zIndex:-1}},(0,P.Z)(G,"rgb(71 123 210 / 23%)","20rem"))),a.default.createElement(c.Z,{zIndex:1,position:"sticky"},a.default.createElement(m.Z,{sx:{px:{xs:4,sm:8},py:4},elevation:0},a.default.createElement(l.Zo,{components:v.Z},z)))),a.default.createElement(E.Z,null))};function z(e){return a.default.createElement(j,e,a.default.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-mirror-doc-tsx-content-file-path-d-repos-mirror-front-docs-zh-gentoo-mdx-f01f091bb1bdd4316827.js.map