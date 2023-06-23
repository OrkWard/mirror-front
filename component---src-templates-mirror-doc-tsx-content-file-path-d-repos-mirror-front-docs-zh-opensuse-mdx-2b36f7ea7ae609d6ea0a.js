"use strict";(self.webpackChunkzju_mirror=self.webpackChunkzju_mirror||[]).push([[9963],{3651:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var l=n(1151),a=n(9748);function r(e){const t=Object.assign({p:"p",code:"code",a:"a",h3:"h3",pre:"pre",strong:"strong",ol:"ol",li:"li"},(0,l.ah)(),e.components);return a.default.createElement(a.default.Fragment,null,a.default.createElement(t.p,null,"openSUSE 项目是一个由 Novell 赞助的社区项目。该项目旨在推进 Linux 的广泛应用，提供自由、易于入手和美观实用的 openSUSE Linux 发行版。openSUSE 使用 ",a.default.createElement(t.code,null,"zypper")," 作为包管理器。"),"\n",a.default.createElement(t.p,null,"openSUSE 默认使用 ",a.default.createElement(t.a,{href:"https://zh.opensuse.org/MirrorBrain"},"MirrorBrain")," 技术统一镜像入口，在下载时自动分配镜像站点，从而给用户提供更好的安全性，通常情况下使用默认配置即可。"),"\n",a.default.createElement(t.p,null,"使用 MirrorBrain 需要从位于德国的 openSUSE 主服务器上获取元数据，这可能导致使用默认软件源时获取元数据较慢，此时可以使用镜像源替换默认软件源。"),"\n",a.default.createElement(t.h3,null,"openSUSE Leap 15.2 或更新版本使用方法"),"\n",a.default.createElement(t.p,null,"禁用官方软件源"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-bash"},"zypper mr -da\n")),"\n",a.default.createElement(t.p,null,"添加镜像源"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-bash"},"zypper ar -cfg 'https://mirrors.zju.edu.cn/opensuse/distribution/leap/$releasever/repo/oss/' mirror-oss\nzypper ar -cfg 'https://mirrors.zju.edu.cn/opensuse/distribution/leap/$releasever/repo/non-oss/' mirror-non-oss\nzypper ar -cfg 'https://mirrors.zju.edu.cn/opensuse/update/leap/$releasever/oss/' mirror-update\nzypper ar -cfg 'https://mirrors.zju.edu.cn/opensuse/update/leap/$releasever/non-oss/' mirror-update-non-oss\n")),"\n",a.default.createElement(t.p,null,"Leap 15.3 用户还需添加 sle 和 backports 源"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-bash"},"zypper ar -cfg 'https://mirrors.zju.edu.cn/opensuse/update/leap/$releasever/sle/' mirror-sle-update\nzypper ar -cfg 'https://mirrors.zju.edu.cn/opensuse/update/leap/$releasever/backports/' mirror-backports-update\n")),"\n",a.default.createElement(t.p,null,"Leap 15.3 注：若在安装时",a.default.createElement(t.strong,null,"没有"),"启用在线软件源，sle 源和 backports 源将在系统首次更新后引入，请确保系统在更新后仅启用了",a.default.createElement(t.strong,null,"六个"),"所需软件源。可使用 ",a.default.createElement(t.code,null,"zypper lr")," 检查软件源状态，并使用 ",a.default.createElement(t.code,null,"zypper mr -d")," 禁用多余的软件源。"),"\n",a.default.createElement(t.h3,null,"openSUSE Tumbleweed 使用方法"),"\n",a.default.createElement(t.p,null,"禁用官方软件源"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-bash"},"zypper mr -da\n")),"\n",a.default.createElement(t.p,null,"添加镜像源"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-bash"},"zypper ar -cfg 'https://mirrors.zju.edu.cn/opensuse/tumbleweed/repo/oss/' mirror-oss\nzypper ar -cfg 'https://mirrors.zju.edu.cn/opensuse/tumbleweed/repo/non-oss/' mirror-non-oss\n")),"\n",a.default.createElement(t.p,null,"刷新软件源"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-bash"},"zypper ref\n")),"\n",a.default.createElement(t.p,null,"Tumbleweed 注：Tumbleweed 安装后默认会启用 oss, non-oss, update, 3 个官方软件源，\n其中 oss 及 non-oss 源用于发布 Tumbleweed 的每日构建快照，快照中已包含系统所需的全部软件包及更新。\nupdate 源仅用于推送临时安全补丁，如当日快照已发布但仍有临时安全补丁时，会首先推送至 update 源，并在次日合入下一版快照。\n由于 update 源存在较强的时效性，上游镜像并未同步 update 源，镜像源亦无法提供该源的镜像。\n禁用 update 源并不会使系统缺失任何功能或安全更新，仅会导致极少数更新晚些推送，如有需求可以重新启用官方 update 源。"),"\n",a.default.createElement(t.h3,null,"图形界面下配置方法"),"\n",a.default.createElement(t.p,null,"以 openSUSE Leap 15.3 为例："),"\n",a.default.createElement(t.ol,null,"\n",a.default.createElement(t.li,null,"\n",a.default.createElement(t.p,null,"打开 YaST；"),"\n"),"\n",a.default.createElement(t.li,null,"\n",a.default.createElement(t.p,null,"点击 Software 分组中的 Software Repositories；"),"\n"),"\n",a.default.createElement(t.li,null,"\n",a.default.createElement(t.p,null,"在打开的窗口上方的列表中点击 Main Repository，点击 Edit；"),"\n"),"\n",a.default.createElement(t.li,null,"\n",a.default.createElement(t.p,null,"将 download.opensuse.org 替换为"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-plaintext"},"mirrors.zju.edu.cn/opensuse\n")),"\n",a.default.createElement(t.p,null,"点 OK；"),"\n"),"\n",a.default.createElement(t.li,null,"\n",a.default.createElement(t.p,null,"再用同样的方法编辑 Non-OSS Repository, Main Update Repository, Update Repository (Non-Oss) 和 Update repository with updates from SUSE Linux Enterprise 15。"),"\n"),"\n"))}var u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.default.createElement(t,e,a.default.createElement(r,e)):r(e)},o=n(5512),s=n(1508),c=n(5725),d=n(2658),m=n(4680),p=n(7782),i=n(2834),f=n(625),E=n(2795),h=n(4001),g=n(1441),y=n(4046),z=n(6884),Z=n(3623),v=n(7950),x=n(2351),b=n(1304);const w=e=>{var t,n,r,u;let{data:w,children:S}=e;const{language:j}=(0,p.useI18next)(),U={id:w.document.frontmatter.mirrorId,name:{zh:"",en:""},status:"unknown"},k=w.document.frontmatter.mirrorId,{0:I,1:N}=(0,a.useState)((0,v.t)("mirrors_"+k,U));(0,a.useEffect)((()=>{(async function(e){const t=await fetch("/api/mirrors/"+e);if(!t.ok)throw new Error("API call failed: "+t.status+" "+await t.text());const n=await t.json();return(0,v.v)("mirrors_"+e,n),n})(k).then((e=>N(e))).catch((e=>console.error(e)))}),[]);const T="/"+k,L=(0,x.G)(null!==(t=I.url)&&void 0!==t?t:T,!1),P=I.name[j];return a.default.createElement(s.Z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}},a.default.createElement(h.Z,{title:P+" | ZJU Mirror"}),a.default.createElement(s.Z,null,a.default.createElement(s.Z,{sx:{px:{xs:4,sm:8},py:4},position:"relative"},a.default.createElement(c.ZP,{container:!0,direction:"column",spacing:4,justifyContent:"flex-start",alignItems:"flex-start"},a.default.createElement(c.ZP,{item:!0,sx:{width:"100%"}},a.default.createElement(c.ZP,{container:!0,justifyContent:"space-between"},a.default.createElement(z.r,{color:"primary",underline:"hover",to:"/"},a.default.createElement(d.Z,{variant:"h5",component:"div",color:"primary"},a.default.createElement(p.Trans,null,"ZJU Mirror"))),a.default.createElement(c.ZP,{item:!0},a.default.createElement(y.Z,null))),a.default.createElement(s.Z,{sx:{mt:4,display:"flex",flexDirection:"row",alignItems:"center"}}),a.default.createElement(d.Z,{variant:"h2",fontWeight:400,component:"div"},P),a.default.createElement(c.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center"},a.default.createElement(s.Z,{sx:{mr:1}},a.default.createElement(g.Z,{status:I.status})),a.default.createElement(d.Z,{variant:"subtitle1",component:"div",color:"text.disabled",display:"cached"===I.status?"none":"block"},a.default.createElement(p.Trans,null,"最近更新于"," ",{date:new Date(1e3*I.lastUpdated).toLocaleString(j)})))),(null!==(n=null===(r=I.files)||void 0===r?void 0:r.length)&&void 0!==n?n:0)>0&&a.default.createElement(c.ZP,{item:!0,width:"100%"},a.default.createElement(s.Z,null,a.default.createElement(d.Z,{gutterBottom:!0,variant:"h5",component:"div"},a.default.createElement(p.Trans,null,"安装映像")),a.default.createElement(E.Z,{files:I.files||[]}))),!(null!==(u=w.document.frontmatter)&&void 0!==u&&u.isGit)&&a.default.createElement(c.ZP,{item:!0},a.default.createElement(i.zx,{color:"primary",size:"medium",variant:"contained",startIcon:a.default.createElement(o.Z,null),to:L},a.default.createElement(p.Trans,null,"文件列表")))),a.default.createElement(s.Z,{sx:{position:"fixed",top:"6rem",right:{xs:"-4rem",sm:"5rem"},zIndex:-1}},(0,b.Z)(k,"rgb(71 123 210 / 23%)","20rem"))),a.default.createElement(s.Z,{zIndex:1,position:"sticky"},a.default.createElement(m.Z,{sx:{px:{xs:4,sm:8},py:4},elevation:0},a.default.createElement(l.Zo,{components:Z.Z},S)))),a.default.createElement(f.Z,null))};function S(e){return a.default.createElement(w,e,a.default.createElement(u,e))}}}]);
//# sourceMappingURL=component---src-templates-mirror-doc-tsx-content-file-path-d-repos-mirror-front-docs-zh-opensuse-mdx-2b36f7ea7ae609d6ea0a.js.map