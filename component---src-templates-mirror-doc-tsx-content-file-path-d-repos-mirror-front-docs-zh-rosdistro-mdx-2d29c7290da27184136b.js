"use strict";(self.webpackChunkzju_mirror=self.webpackChunkzju_mirror||[]).push([[3759],{9521:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(1151),l=n(9748);function r(e){const t=Object.assign({p:"p",a:"a"},(0,a.ah)(),e.components);return l.default.createElement(t.p,null,"参照 ROS 说明： ",l.default.createElement(t.a,{href:"/index/docs/ros/"},"链接"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.default.createElement(t,e,l.default.createElement(r,e)):r(e)},c=n(5512),i=n(1508),u=n(5725),m=n(2658),s=n(4680),d=n(7782),f=n(2834),E=n(625),p=n(2795),Z=n(4001),x=n(1441),h=n(4046),v=n(6884),w=n(3623),g=n(7950),y=n(2351),b=n(1304);const I=e=>{var t,n,r,o;let{data:I,children:j}=e;const{language:k}=(0,d.useI18next)(),P={id:I.document.frontmatter.mirrorId,name:{zh:"",en:""},status:"unknown"},z=I.document.frontmatter.mirrorId,{0:C,1:T}=(0,l.useState)((0,g.t)("mirrors_"+z,P));(0,l.useEffect)((()=>{(async function(e){const t=await fetch("/api/mirrors/"+e);if(!t.ok)throw new Error("API call failed: "+t.status+" "+await t.text());const n=await t.json();return(0,g.v)("mirrors_"+e,n),n})(z).then((e=>T(e))).catch((e=>console.error(e)))}),[]);const _="/"+z,D=(0,y.G)(null!==(t=C.url)&&void 0!==t?t:_,!1),O=C.name[k];return l.default.createElement(i.Z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}},l.default.createElement(Z.Z,{title:O+" | ZJU Mirror"}),l.default.createElement(i.Z,null,l.default.createElement(i.Z,{sx:{px:{xs:4,sm:8},py:4},position:"relative"},l.default.createElement(u.ZP,{container:!0,direction:"column",spacing:4,justifyContent:"flex-start",alignItems:"flex-start"},l.default.createElement(u.ZP,{item:!0,sx:{width:"100%"}},l.default.createElement(u.ZP,{container:!0,justifyContent:"space-between"},l.default.createElement(v.r,{color:"primary",underline:"hover",to:"/"},l.default.createElement(m.Z,{variant:"h5",component:"div",color:"primary"},l.default.createElement(d.Trans,null,"ZJU Mirror"))),l.default.createElement(u.ZP,{item:!0},l.default.createElement(h.Z,null))),l.default.createElement(i.Z,{sx:{mt:4,display:"flex",flexDirection:"row",alignItems:"center"}}),l.default.createElement(m.Z,{variant:"h2",fontWeight:400,component:"div"},O),l.default.createElement(u.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center"},l.default.createElement(i.Z,{sx:{mr:1}},l.default.createElement(x.Z,{status:C.status})),l.default.createElement(m.Z,{variant:"subtitle1",component:"div",color:"text.disabled",display:"cached"===C.status?"none":"block"},l.default.createElement(d.Trans,null,"最近更新于"," ",{date:new Date(1e3*C.lastUpdated).toLocaleString(k)})))),(null!==(n=null===(r=C.files)||void 0===r?void 0:r.length)&&void 0!==n?n:0)>0&&l.default.createElement(u.ZP,{item:!0,width:"100%"},l.default.createElement(i.Z,null,l.default.createElement(m.Z,{gutterBottom:!0,variant:"h5",component:"div"},l.default.createElement(d.Trans,null,"安装映像")),l.default.createElement(p.Z,{files:C.files||[]}))),!(null!==(o=I.document.frontmatter)&&void 0!==o&&o.isGit)&&l.default.createElement(u.ZP,{item:!0},l.default.createElement(f.zx,{color:"primary",size:"medium",variant:"contained",startIcon:l.default.createElement(c.Z,null),to:D},l.default.createElement(d.Trans,null,"文件列表")))),l.default.createElement(i.Z,{sx:{position:"fixed",top:"6rem",right:{xs:"-4rem",sm:"5rem"},zIndex:-1}},(0,b.Z)(z,"rgb(71 123 210 / 23%)","20rem"))),l.default.createElement(i.Z,{zIndex:1,position:"sticky"},l.default.createElement(s.Z,{sx:{px:{xs:4,sm:8},py:4},elevation:0},l.default.createElement(a.Zo,{components:w.Z},j)))),l.default.createElement(E.Z,null))};function j(e){return l.default.createElement(I,e,l.default.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-mirror-doc-tsx-content-file-path-d-repos-mirror-front-docs-zh-rosdistro-mdx-2d29c7290da27184136b.js.map