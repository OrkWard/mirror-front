"use strict";(self.webpackChunkzju_mirror=self.webpackChunkzju_mirror||[]).push([[4595],{3748:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(1151),r=n(9748);function l(e){const t=Object.assign({p:"p",a:"a",pre:"pre",code:"code"},(0,a.ah)(),e.components);return r.default.createElement(r.default.Fragment,null,r.default.createElement(t.p,null,"请参照 ",r.default.createElement(t.a,{href:"https://docs.ros.org/en/foxy/Installation/Ubuntu-Install-Debians.html"},"官方指南")," ，流程中仅做如下修改："),"\n",r.default.createElement(t.p,null,"下载并安装 ROS 的 GPG Key ："),"\n",r.default.createElement(t.pre,null,r.default.createElement(t.code,{className:"language-bash"},"sudo apt install curl gnupg2\nsudo curl -sSL https://mirrors.zju.edu.cn/rosdistro/ros.key  -o /usr/share/keyrings/ros-archive-keyring.gpg\n")),"\n",r.default.createElement(t.p,null,"添加软件仓库，更新索引："),"\n",r.default.createElement(t.pre,null,r.default.createElement(t.code,{className:"language-bash"},'echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://mirrors.zju.edu.cn/ros2/ubuntu $(source /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null\n')))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.default.createElement(t,e,r.default.createElement(l,e)):l(e)},u=n(5512),c=n(1508),s=n(5725),i=n(2658),d=n(4680),m=n(7782),f=n(2834),E=n(625),p=n(2795),h=n(4001),g=n(1441),Z=n(4046),x=n(6884),v=n(3623),y=n(7950),w=n(2351),b=n(1304);const k=e=>{var t,n,l,o;let{data:k,children:j}=e;const{language:I}=(0,m.useI18next)(),z={id:k.document.frontmatter.mirrorId,name:{zh:"",en:""},status:"unknown"},P=z.id,{0:C,1:U}=(0,r.useState)((0,y.t)("mirrors_"+P,z));(0,r.useEffect)((()=>{(async function(e){const t=await fetch("/mirror-front/mirror.json");if(!t.ok)throw new Error("API call failed: "+t.status+" "+await t.text());const n=await t.json();for(let a=0;a<n.length;a+=1)if(n[a].id===e)return n[a];throw new Error("Mirror fetch failed: "+e+" not exist")})(P).then((e=>U(e)))}),[]);const D="/"+P,T=(0,w.Z)(null!==(t=C.url)&&void 0!==t?t:D,!1);if("zh"!==I&&"en"!==I)throw Error("language out of range");const M=C.name[I];return r.default.createElement(c.Z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}},r.default.createElement(h.Z,{title:M+" | ZJU Mirror"}),r.default.createElement(c.Z,null,r.default.createElement(c.Z,{sx:{px:{xs:4,sm:8},py:4},position:"relative"},r.default.createElement(s.ZP,{container:!0,direction:"column",spacing:4,justifyContent:"flex-start",alignItems:"flex-start"},r.default.createElement(s.ZP,{item:!0,sx:{width:"100%"}},r.default.createElement(s.ZP,{container:!0,justifyContent:"space-between"},r.default.createElement(x.r,{color:"primary",underline:"hover",to:"/"},r.default.createElement(i.Z,{variant:"h5",component:"div",color:"primary"},r.default.createElement(m.Trans,null,"ZJU Mirror"))),r.default.createElement(s.ZP,{item:!0},r.default.createElement(Z.Z,null))),r.default.createElement(c.Z,{sx:{mt:4,display:"flex",flexDirection:"row",alignItems:"center"}}),r.default.createElement(i.Z,{variant:"h2",fontWeight:400,component:"div"},M),r.default.createElement(s.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center"},r.default.createElement(c.Z,{sx:{mr:1}},r.default.createElement(g.Z,{status:C.status})),r.default.createElement(i.Z,{variant:"subtitle1",component:"div",color:"text.disabled",display:"cached"===C.status?"none":"block"},r.default.createElement(m.Trans,null,"最近更新于"," ",{date:new Date(1e3*C.lastUpdated).toLocaleString(I)})))),(null!==(n=null===(l=C.files)||void 0===l?void 0:l.length)&&void 0!==n?n:0)>0&&r.default.createElement(s.ZP,{item:!0,width:"100%"},r.default.createElement(c.Z,null,r.default.createElement(i.Z,{gutterBottom:!0,variant:"h5",component:"div"},r.default.createElement(m.Trans,null,"安装映像")),r.default.createElement(p.Z,{files:C.files||[]}))),!(null!==(o=k.document.frontmatter)&&void 0!==o&&o.isGit)&&r.default.createElement(s.ZP,{item:!0},r.default.createElement(f.zx,{color:"primary",size:"medium",variant:"contained",startIcon:r.default.createElement(u.Z,null),to:T},r.default.createElement(m.Trans,null,"文件列表")))),r.default.createElement(c.Z,{sx:{position:"fixed",top:"6rem",right:{xs:"-4rem",sm:"5rem"},zIndex:-1}},(0,b.Z)(P,"rgb(71 123 210 / 23%)","20rem"))),r.default.createElement(c.Z,{zIndex:1,position:"sticky"},r.default.createElement(d.Z,{sx:{px:{xs:4,sm:8},py:4},elevation:0},r.default.createElement(a.Zo,{components:v.Z},j)))),r.default.createElement(E.Z,null))};function j(e){return r.default.createElement(k,e,r.default.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-mirror-doc-tsx-content-file-path-d-repos-mirror-front-docs-zh-ros-2-mdx-06c3afb25540d29060cf.js.map