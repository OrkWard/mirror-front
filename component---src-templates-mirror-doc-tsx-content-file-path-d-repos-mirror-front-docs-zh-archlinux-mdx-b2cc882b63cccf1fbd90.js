"use strict";(self.webpackChunkzju_mirror=self.webpackChunkzju_mirror||[]).push([[1718],{6837:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var a=n(1151),l=n(9748);function r(e){const t=Object.assign({p:"p",code:"code",pre:"pre"},(0,a.ah)(),e.components);return l.default.createElement(l.default.Fragment,null,l.default.createElement(t.p,null,"编辑 ",l.default.createElement(t.code,null,"/etc/pacman.d/mirrorlist")," ， 在文件的最顶端添加："),"\n",l.default.createElement(t.pre,null,l.default.createElement(t.code,{className:"language-plaintext"},"Server = https://mirrors.zju.edu.cn/archlinux/$repo/os/$arch\n")),"\n",l.default.createElement(t.p,null,"更新软件包缓存："),"\n",l.default.createElement(t.pre,null,l.default.createElement(t.code,{className:"language-bash"},"sudo pacman -Syy\n")))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.default.createElement(t,e,l.default.createElement(r,e)):r(e)},u=n(5512),o=n(1508),i=n(5725),m=n(2658),d=n(4680),s=n(7782),f=n(2834),E=n(625),p=n(2795),Z=n(4001),x=n(1441),h=n(4046),v=n(6884),g=n(3623),w=n(7950),y=n(2351),b=n(1304);const j=e=>{var t,n,r,c;let{data:j,children:I}=e;const{language:k}=(0,s.useI18next)(),z={id:j.document.frontmatter.mirrorId,name:{zh:"",en:""},status:"unknown"},P=j.document.frontmatter.mirrorId,{0:C,1:S}=(0,l.useState)((0,w.t)("mirrors_"+P,z));(0,l.useEffect)((()=>{(async function(e){const t=await fetch("/api/mirrors/"+e);if(!t.ok)throw new Error("API call failed: "+t.status+" "+await t.text());const n=await t.json();return(0,w.v)("mirrors_"+e,n),n})(P).then((e=>S(e))).catch((e=>console.error(e)))}),[]);const T="/"+P,_=(0,y.G)(null!==(t=C.url)&&void 0!==t?t:T,!1),D=C.name[k];return l.default.createElement(o.Z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}},l.default.createElement(Z.Z,{title:D+" | ZJU Mirror"}),l.default.createElement(o.Z,null,l.default.createElement(o.Z,{sx:{px:{xs:4,sm:8},py:4},position:"relative"},l.default.createElement(i.ZP,{container:!0,direction:"column",spacing:4,justifyContent:"flex-start",alignItems:"flex-start"},l.default.createElement(i.ZP,{item:!0,sx:{width:"100%"}},l.default.createElement(i.ZP,{container:!0,justifyContent:"space-between"},l.default.createElement(v.r,{color:"primary",underline:"hover",to:"/"},l.default.createElement(m.Z,{variant:"h5",component:"div",color:"primary"},l.default.createElement(s.Trans,null,"ZJU Mirror"))),l.default.createElement(i.ZP,{item:!0},l.default.createElement(h.Z,null))),l.default.createElement(o.Z,{sx:{mt:4,display:"flex",flexDirection:"row",alignItems:"center"}}),l.default.createElement(m.Z,{variant:"h2",fontWeight:400,component:"div"},D),l.default.createElement(i.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center"},l.default.createElement(o.Z,{sx:{mr:1}},l.default.createElement(x.Z,{status:C.status})),l.default.createElement(m.Z,{variant:"subtitle1",component:"div",color:"text.disabled",display:"cached"===C.status?"none":"block"},l.default.createElement(s.Trans,null,"最近更新于"," ",{date:new Date(1e3*C.lastUpdated).toLocaleString(k)})))),(null!==(n=null===(r=C.files)||void 0===r?void 0:r.length)&&void 0!==n?n:0)>0&&l.default.createElement(i.ZP,{item:!0,width:"100%"},l.default.createElement(o.Z,null,l.default.createElement(m.Z,{gutterBottom:!0,variant:"h5",component:"div"},l.default.createElement(s.Trans,null,"安装映像")),l.default.createElement(p.Z,{files:C.files||[]}))),!(null!==(c=j.document.frontmatter)&&void 0!==c&&c.isGit)&&l.default.createElement(i.ZP,{item:!0},l.default.createElement(f.zx,{color:"primary",size:"medium",variant:"contained",startIcon:l.default.createElement(u.Z,null),to:_},l.default.createElement(s.Trans,null,"文件列表")))),l.default.createElement(o.Z,{sx:{position:"fixed",top:"6rem",right:{xs:"-4rem",sm:"5rem"},zIndex:-1}},(0,b.Z)(P,"rgb(71 123 210 / 23%)","20rem"))),l.default.createElement(o.Z,{zIndex:1,position:"sticky"},l.default.createElement(d.Z,{sx:{px:{xs:4,sm:8},py:4},elevation:0},l.default.createElement(a.Zo,{components:g.Z},I)))),l.default.createElement(E.Z,null))};function I(e){return l.default.createElement(j,e,l.default.createElement(c,e))}}}]);
//# sourceMappingURL=component---src-templates-mirror-doc-tsx-content-file-path-d-repos-mirror-front-docs-zh-archlinux-mdx-b2cc882b63cccf1fbd90.js.map