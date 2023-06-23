"use strict";(self.webpackChunkzju_mirror=self.webpackChunkzju_mirror||[]).push([[4094],{9797:function(e,t,l){l.r(t),l.d(t,{default:function(){return k}});var n=l(1151),a=l(9748);function r(e){const t=Object.assign({blockquote:"blockquote",p:"p",h3:"h3",pre:"pre",code:"code"},(0,n.ah)(),e.components);return a.default.createElement(a.default.Fragment,null,a.default.createElement(t.blockquote,null,"\n",a.default.createElement(t.p,null,"pypi 镜像目前仅为校内用户提供镜像服务。若您的网络环境处于校外， pip 的 HTTP(S) 请求将会被重定向（ 302 ）至清华 TUNA 镜像站。"),"\n"),"\n",a.default.createElement(t.h3,null,"临时使用"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-bash"},"pip install -i https://mirrors.zju.edu.cn/pypi/web/simple some-package\n")),"\n",a.default.createElement(t.p,null,"注意，",a.default.createElement(t.code,null,"simple")," 不能少，若使用 http 镜像需要加上 ",a.default.createElement(t.code,null,"--trusted-host mirrors.zju.edu.cn")),"\n",a.default.createElement(t.h3,null,"设为默认"),"\n",a.default.createElement(t.p,null,"升级 pip 到最新的版本 (>=10.0.0) 后进行配置："),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-bash"},"pip install pip -U\npip config set global.index-url https://mirrors.zju.edu.cn/pypi/web/simple\n")),"\n",a.default.createElement(t.p,null,"如果您到 pip 默认源的网络连接较差，临时使用本镜像站来升级 pip ："),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-bash"},"pip install -i https://mirrors.zju.edu.cn/pypi/web/simple pip -U\n")))}var u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?a.default.createElement(t,e,a.default.createElement(r,e)):r(e)},c=l(5512),i=l(1508),o=l(5725),m=l(2658),s=l(4680),d=l(7782),f=l(2834),p=l(625),E=l(2795),h=l(4001),Z=l(1441),x=l(4046),g=l(6884),v=l(3623),b=l(7950),w=l(2351),y=l(1304);const j=e=>{var t,l,r,u;let{data:j,children:k}=e;const{language:z}=(0,d.useI18next)(),I={id:j.document.frontmatter.mirrorId,name:{zh:"",en:""},status:"unknown"},P=j.document.frontmatter.mirrorId,{0:T,1:C}=(0,a.useState)((0,b.t)("mirrors_"+P,I));(0,a.useEffect)((()=>{(async function(e){const t=await fetch("/api/mirrors/"+e);if(!t.ok)throw new Error("API call failed: "+t.status+" "+await t.text());const l=await t.json();return(0,b.v)("mirrors_"+e,l),l})(P).then((e=>C(e))).catch((e=>console.error(e)))}),[]);const U="/"+P,N=(0,w.G)(null!==(t=T.url)&&void 0!==t?t:U,!1),_=T.name[z];return a.default.createElement(i.Z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}},a.default.createElement(h.Z,{title:_+" | ZJU Mirror"}),a.default.createElement(i.Z,null,a.default.createElement(i.Z,{sx:{px:{xs:4,sm:8},py:4},position:"relative"},a.default.createElement(o.ZP,{container:!0,direction:"column",spacing:4,justifyContent:"flex-start",alignItems:"flex-start"},a.default.createElement(o.ZP,{item:!0,sx:{width:"100%"}},a.default.createElement(o.ZP,{container:!0,justifyContent:"space-between"},a.default.createElement(g.r,{color:"primary",underline:"hover",to:"/"},a.default.createElement(m.Z,{variant:"h5",component:"div",color:"primary"},a.default.createElement(d.Trans,null,"ZJU Mirror"))),a.default.createElement(o.ZP,{item:!0},a.default.createElement(x.Z,null))),a.default.createElement(i.Z,{sx:{mt:4,display:"flex",flexDirection:"row",alignItems:"center"}}),a.default.createElement(m.Z,{variant:"h2",fontWeight:400,component:"div"},_),a.default.createElement(o.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center"},a.default.createElement(i.Z,{sx:{mr:1}},a.default.createElement(Z.Z,{status:T.status})),a.default.createElement(m.Z,{variant:"subtitle1",component:"div",color:"text.disabled",display:"cached"===T.status?"none":"block"},a.default.createElement(d.Trans,null,"最近更新于"," ",{date:new Date(1e3*T.lastUpdated).toLocaleString(z)})))),(null!==(l=null===(r=T.files)||void 0===r?void 0:r.length)&&void 0!==l?l:0)>0&&a.default.createElement(o.ZP,{item:!0,width:"100%"},a.default.createElement(i.Z,null,a.default.createElement(m.Z,{gutterBottom:!0,variant:"h5",component:"div"},a.default.createElement(d.Trans,null,"安装映像")),a.default.createElement(E.Z,{files:T.files||[]}))),!(null!==(u=j.document.frontmatter)&&void 0!==u&&u.isGit)&&a.default.createElement(o.ZP,{item:!0},a.default.createElement(f.zx,{color:"primary",size:"medium",variant:"contained",startIcon:a.default.createElement(c.Z,null),to:N},a.default.createElement(d.Trans,null,"文件列表")))),a.default.createElement(i.Z,{sx:{position:"fixed",top:"6rem",right:{xs:"-4rem",sm:"5rem"},zIndex:-1}},(0,y.Z)(P,"rgb(71 123 210 / 23%)","20rem"))),a.default.createElement(i.Z,{zIndex:1,position:"sticky"},a.default.createElement(s.Z,{sx:{px:{xs:4,sm:8},py:4},elevation:0},a.default.createElement(n.Zo,{components:v.Z},k)))),a.default.createElement(p.Z,null))};function k(e){return a.default.createElement(j,e,a.default.createElement(u,e))}}}]);
//# sourceMappingURL=component---src-templates-mirror-doc-tsx-content-file-path-d-repos-mirror-front-docs-zh-pypi-mdx-01b7c96273f8917ca5c3.js.map