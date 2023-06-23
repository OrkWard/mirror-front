"use strict";(self.webpackChunkzju_mirror=self.webpackChunkzju_mirror||[]).push([[4595],{3748:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var a=n(1151),r=n(9748);function l(e){const t=Object.assign({p:"p",a:"a",pre:"pre",code:"code"},(0,a.ah)(),e.components);return r.default.createElement(r.default.Fragment,null,r.default.createElement(t.p,null,"请参照 ",r.default.createElement(t.a,{href:"https://docs.ros.org/en/foxy/Installation/Ubuntu-Install-Debians.html"},"官方指南")," ，流程中仅做如下修改："),"\n",r.default.createElement(t.p,null,"下载并安装 ROS 的 GPG Key ："),"\n",r.default.createElement(t.pre,null,r.default.createElement(t.code,{className:"language-bash"},"sudo apt install curl gnupg2\nsudo curl -sSL https://mirrors.zju.edu.cn/rosdistro/ros.key  -o /usr/share/keyrings/ros-archive-keyring.gpg\n")),"\n",r.default.createElement(t.p,null,"添加软件仓库，更新索引："),"\n",r.default.createElement(t.pre,null,r.default.createElement(t.code,{className:"language-bash"},'echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://mirrors.zju.edu.cn/ros2/ubuntu $(source /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null\n')))}var u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.default.createElement(t,e,r.default.createElement(l,e)):l(e)},c=n(5512),o=n(1508),s=n(5725),i=n(2658),d=n(4680),m=n(7782),f=n(2834),p=n(625),E=n(2795),h=n(4001),g=n(1441),Z=n(4046),x=n(6884),v=n(3623),y=n(7950),b=n(2351),w=n(1304);const k=e=>{var t,n,l,u;let{data:k,children:I}=e;const{language:j}=(0,m.useI18next)(),z={id:k.document.frontmatter.mirrorId,name:{zh:"",en:""},status:"unknown"},P=k.document.frontmatter.mirrorId,{0:C,1:U}=(0,r.useState)((0,y.t)("mirrors_"+P,z));(0,r.useEffect)((()=>{(async function(e){const t=await fetch("/api/mirrors/"+e);if(!t.ok)throw new Error("API call failed: "+t.status+" "+await t.text());const n=await t.json();return(0,y.v)("mirrors_"+e,n),n})(P).then((e=>U(e))).catch((e=>console.error(e)))}),[]);const D="/"+P,T=(0,b.G)(null!==(t=C.url)&&void 0!==t?t:D,!1),_=C.name[j];return r.default.createElement(o.Z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}},r.default.createElement(h.Z,{title:_+" | ZJU Mirror"}),r.default.createElement(o.Z,null,r.default.createElement(o.Z,{sx:{px:{xs:4,sm:8},py:4},position:"relative"},r.default.createElement(s.ZP,{container:!0,direction:"column",spacing:4,justifyContent:"flex-start",alignItems:"flex-start"},r.default.createElement(s.ZP,{item:!0,sx:{width:"100%"}},r.default.createElement(s.ZP,{container:!0,justifyContent:"space-between"},r.default.createElement(x.r,{color:"primary",underline:"hover",to:"/"},r.default.createElement(i.Z,{variant:"h5",component:"div",color:"primary"},r.default.createElement(m.Trans,null,"ZJU Mirror"))),r.default.createElement(s.ZP,{item:!0},r.default.createElement(Z.Z,null))),r.default.createElement(o.Z,{sx:{mt:4,display:"flex",flexDirection:"row",alignItems:"center"}}),r.default.createElement(i.Z,{variant:"h2",fontWeight:400,component:"div"},_),r.default.createElement(s.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center"},r.default.createElement(o.Z,{sx:{mr:1}},r.default.createElement(g.Z,{status:C.status})),r.default.createElement(i.Z,{variant:"subtitle1",component:"div",color:"text.disabled",display:"cached"===C.status?"none":"block"},r.default.createElement(m.Trans,null,"最近更新于"," ",{date:new Date(1e3*C.lastUpdated).toLocaleString(j)})))),(null!==(n=null===(l=C.files)||void 0===l?void 0:l.length)&&void 0!==n?n:0)>0&&r.default.createElement(s.ZP,{item:!0,width:"100%"},r.default.createElement(o.Z,null,r.default.createElement(i.Z,{gutterBottom:!0,variant:"h5",component:"div"},r.default.createElement(m.Trans,null,"安装映像")),r.default.createElement(E.Z,{files:C.files||[]}))),!(null!==(u=k.document.frontmatter)&&void 0!==u&&u.isGit)&&r.default.createElement(s.ZP,{item:!0},r.default.createElement(f.zx,{color:"primary",size:"medium",variant:"contained",startIcon:r.default.createElement(c.Z,null),to:T},r.default.createElement(m.Trans,null,"文件列表")))),r.default.createElement(o.Z,{sx:{position:"fixed",top:"6rem",right:{xs:"-4rem",sm:"5rem"},zIndex:-1}},(0,w.Z)(P,"rgb(71 123 210 / 23%)","20rem"))),r.default.createElement(o.Z,{zIndex:1,position:"sticky"},r.default.createElement(d.Z,{sx:{px:{xs:4,sm:8},py:4},elevation:0},r.default.createElement(a.Zo,{components:v.Z},I)))),r.default.createElement(p.Z,null))};function I(e){return r.default.createElement(k,e,r.default.createElement(u,e))}}}]);
//# sourceMappingURL=component---src-templates-mirror-doc-tsx-content-file-path-d-repos-mirror-front-docs-zh-ros-2-mdx-acba84e14708cb9a91ae.js.map