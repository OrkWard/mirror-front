"use strict";(self.webpackChunkzju_mirror=self.webpackChunkzju_mirror||[]).push([[4760],{3010:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var l=n(1151),a=n(9748);function r(e){const t=Object.assign({h3:"h3",p:"p",strong:"strong",a:"a",h4:"h4",pre:"pre",code:"code"},(0,l.ah)(),e.components);return a.default.createElement(a.default.Fragment,null,a.default.createElement(t.h3,null,"设置"),"\n",a.default.createElement(t.p,null,"如果要在您的系统上启用 IUS 仓库，请安装 ",a.default.createElement(t.strong,null,"ius-release")," 包。此包包含 IUS 的仓库配置和签名公钥。此外，许多 IUS 中的软件包依赖于 ",a.default.createElement(t.a,{href:"http://mirrors.zju.edu.cn/docs/epel/"},"EPEL")," 仓库，因此也要安装 ",a.default.createElement(t.strong,null,"epel-release")," 包。"),"\n",a.default.createElement(t.h4,null,"RHEL/CentOS 7"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-bash"},"yum install \\\nhttps://mirrors.zju.edu.cn/ius/ius-release-el7.rpm \\\nhttps://mirrors.zju.edu.cn/epel/epel-release-latest-7.noarch.rpm\n")),"\n",a.default.createElement(t.h4,null,"测试"),"\n",a.default.createElement(t.p,null,"IUS 软件包在被发布到主仓库之前，将首先在 ius-testing 中提供。安装 ius-release 时，默认情况下 ius-testing 仓库是禁用的。如果您希望参与测试新的 IUS 软件包，请启用它。"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-bash"},"yum install yum-utils\nyum-config-manager --enable ius-testing\n")))}var u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.default.createElement(t,e,a.default.createElement(r,e)):r(e)},c=n(5512),i=n(1508),o=n(5725),s=n(2658),m=n(4680),d=n(7782),f=n(2834),E=n(625),p=n(2795),h=n(4001),g=n(1441),Z=n(4046),x=n(6884),v=n(3623),w=n(7950),y=n(2351),I=n(1304);const b=e=>{var t,n,r,u;let{data:b,children:j}=e;const{language:z}=(0,d.useI18next)(),P={id:b.document.frontmatter.mirrorId,name:{zh:"",en:""},status:"unknown"},k=P.id,{0:S,1:U}=(0,a.useState)((0,w.t)("mirrors_"+k,P));(0,a.useEffect)((()=>{(async function(e){const t=await fetch("/mirror-front/mirror.json");if(!t.ok)throw new Error("API call failed: "+t.status+" "+await t.text());const n=await t.json();for(let l=0;l<n.length;l+=1)if(n[l].id===e)return n[l];throw new Error("Mirror fetch failed: "+e+" not exist")})(k).then((e=>U(e)))}),[]);const C="/"+k,T=(0,y.Z)(null!==(t=S.url)&&void 0!==t?t:C,!1);if("zh"!==z&&"en"!==z)throw Error("language out of range");const D=S.name[z];return a.default.createElement(i.Z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}},a.default.createElement(h.Z,{title:D+" | ZJU Mirror"}),a.default.createElement(i.Z,null,a.default.createElement(i.Z,{sx:{px:{xs:4,sm:8},py:4},position:"relative"},a.default.createElement(o.ZP,{container:!0,direction:"column",spacing:4,justifyContent:"flex-start",alignItems:"flex-start"},a.default.createElement(o.ZP,{item:!0,sx:{width:"100%"}},a.default.createElement(o.ZP,{container:!0,justifyContent:"space-between"},a.default.createElement(x.r,{color:"primary",underline:"hover",to:"/"},a.default.createElement(s.Z,{variant:"h5",component:"div",color:"primary"},a.default.createElement(d.Trans,null,"ZJU Mirror"))),a.default.createElement(o.ZP,{item:!0},a.default.createElement(Z.Z,null))),a.default.createElement(i.Z,{sx:{mt:4,display:"flex",flexDirection:"row",alignItems:"center"}}),a.default.createElement(s.Z,{variant:"h2",fontWeight:400,component:"div"},D),a.default.createElement(o.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center"},a.default.createElement(i.Z,{sx:{mr:1}},a.default.createElement(g.Z,{status:S.status})),a.default.createElement(s.Z,{variant:"subtitle1",component:"div",color:"text.disabled",display:"cached"===S.status?"none":"block"},a.default.createElement(d.Trans,null,"最近更新于"," ",{date:new Date(1e3*S.lastUpdated).toLocaleString(z)})))),(null!==(n=null===(r=S.files)||void 0===r?void 0:r.length)&&void 0!==n?n:0)>0&&a.default.createElement(o.ZP,{item:!0,width:"100%"},a.default.createElement(i.Z,null,a.default.createElement(s.Z,{gutterBottom:!0,variant:"h5",component:"div"},a.default.createElement(d.Trans,null,"安装映像")),a.default.createElement(p.Z,{files:S.files||[]}))),!(null!==(u=b.document.frontmatter)&&void 0!==u&&u.isGit)&&a.default.createElement(o.ZP,{item:!0},a.default.createElement(f.zx,{color:"primary",size:"medium",variant:"contained",startIcon:a.default.createElement(c.Z,null),to:T},a.default.createElement(d.Trans,null,"文件列表")))),a.default.createElement(i.Z,{sx:{position:"fixed",top:"6rem",right:{xs:"-4rem",sm:"5rem"},zIndex:-1}},(0,I.Z)(k,"rgb(71 123 210 / 23%)","20rem"))),a.default.createElement(i.Z,{zIndex:1,position:"sticky"},a.default.createElement(m.Z,{sx:{px:{xs:4,sm:8},py:4},elevation:0},a.default.createElement(l.Zo,{components:v.Z},j)))),a.default.createElement(E.Z,null))};function j(e){return a.default.createElement(b,e,a.default.createElement(u,e))}}}]);
//# sourceMappingURL=component---src-templates-mirror-doc-tsx-content-file-path-d-repos-mirror-front-docs-zh-ius-mdx-40e617783b118d4439a1.js.map