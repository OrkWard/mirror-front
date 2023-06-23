"use strict";(self.webpackChunkzju_mirror=self.webpackChunkzju_mirror||[]).push([[1184],{5484:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var l=n(1151),a=n(9748);function r(e){const t=Object.assign({blockquote:"blockquote",p:"p",pre:"pre",code:"code"},(0,l.ah)(),e.components);return a.default.createElement(a.default.Fragment,null,a.default.createElement(t.blockquote,null,"\n",a.default.createElement(t.p,null,"以下命令在 AlmaLinux 9.1 上经过测试，结合您使用的实际版本命令也许有所更改。"),"\n"),"\n",a.default.createElement(t.p,null,"输入以下命令替换配置："),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-bash"},"sed -e 's|^mirrorlist=|#mirrorlist=|g' \\\n    -e 's|^#\\s*baseurl=https://repo.almalinux.org/almalinux|baseurl=https://mirrors.zju.edu.cn/almalinux|g' \\\n    -i.bak \\\n    /etc/yum.repos.d/almalinux-*.repo\n")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.default.createElement(t,e,a.default.createElement(r,e)):r(e)},u=n(5512),i=n(1508),c=n(5725),s=n(2658),m=n(4680),d=n(7782),f=n(2834),E=n(625),p=n(2795),x=n(4001),Z=n(1441),h=n(4046),g=n(6884),v=n(3623),w=n(7950),b=n(2351),y=n(1304);const k=e=>{var t,n,r,o;let{data:k,children:j}=e;const{language:z}=(0,d.useI18next)(),I={id:k.document.frontmatter.mirrorId,name:{zh:"",en:""},status:"unknown"},P=I.id,{0:C,1:T}=(0,a.useState)((0,w.t)("mirrors_"+P,I));(0,a.useEffect)((()=>{(async function(e){const t=await fetch("/mirror-front/mirror.json");if(!t.ok)throw new Error("API call failed: "+t.status+" "+await t.text());const n=await t.json();for(let l=0;l<n.length;l+=1)if(n[l].id===e)return n[l];throw new Error("Mirror fetch failed: "+e+" not exist")})(P).then((e=>T(e)))}),[]);const q="/"+P,D=(0,b.Z)(null!==(t=C.url)&&void 0!==t?t:q,!1);if("zh"!==z&&"en"!==z)throw Error("language out of range");const M=C.name[z];return a.default.createElement(i.Z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}},a.default.createElement(x.Z,{title:M+" | ZJU Mirror"}),a.default.createElement(i.Z,null,a.default.createElement(i.Z,{sx:{px:{xs:4,sm:8},py:4},position:"relative"},a.default.createElement(c.ZP,{container:!0,direction:"column",spacing:4,justifyContent:"flex-start",alignItems:"flex-start"},a.default.createElement(c.ZP,{item:!0,sx:{width:"100%"}},a.default.createElement(c.ZP,{container:!0,justifyContent:"space-between"},a.default.createElement(g.r,{color:"primary",underline:"hover",to:"/"},a.default.createElement(s.Z,{variant:"h5",component:"div",color:"primary"},a.default.createElement(d.Trans,null,"ZJU Mirror"))),a.default.createElement(c.ZP,{item:!0},a.default.createElement(h.Z,null))),a.default.createElement(i.Z,{sx:{mt:4,display:"flex",flexDirection:"row",alignItems:"center"}}),a.default.createElement(s.Z,{variant:"h2",fontWeight:400,component:"div"},M),a.default.createElement(c.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center"},a.default.createElement(i.Z,{sx:{mr:1}},a.default.createElement(Z.Z,{status:C.status})),a.default.createElement(s.Z,{variant:"subtitle1",component:"div",color:"text.disabled",display:"cached"===C.status?"none":"block"},a.default.createElement(d.Trans,null,"最近更新于"," ",{date:new Date(1e3*C.lastUpdated).toLocaleString(z)})))),(null!==(n=null===(r=C.files)||void 0===r?void 0:r.length)&&void 0!==n?n:0)>0&&a.default.createElement(c.ZP,{item:!0,width:"100%"},a.default.createElement(i.Z,null,a.default.createElement(s.Z,{gutterBottom:!0,variant:"h5",component:"div"},a.default.createElement(d.Trans,null,"安装映像")),a.default.createElement(p.Z,{files:C.files||[]}))),!(null!==(o=k.document.frontmatter)&&void 0!==o&&o.isGit)&&a.default.createElement(c.ZP,{item:!0},a.default.createElement(f.zx,{color:"primary",size:"medium",variant:"contained",startIcon:a.default.createElement(u.Z,null),to:D},a.default.createElement(d.Trans,null,"文件列表")))),a.default.createElement(i.Z,{sx:{position:"fixed",top:"6rem",right:{xs:"-4rem",sm:"5rem"},zIndex:-1}},(0,y.Z)(P,"rgb(71 123 210 / 23%)","20rem"))),a.default.createElement(i.Z,{zIndex:1,position:"sticky"},a.default.createElement(m.Z,{sx:{px:{xs:4,sm:8},py:4},elevation:0},a.default.createElement(l.Zo,{components:v.Z},j)))),a.default.createElement(E.Z,null))};function j(e){return a.default.createElement(k,e,a.default.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-mirror-doc-tsx-content-file-path-d-repos-mirror-front-docs-zh-almalinux-mdx-0dea17a53a8fad84088e.js.map