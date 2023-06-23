"use strict";(self.webpackChunkzju_mirror=self.webpackChunkzju_mirror||[]).push([[3412],{621:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var l=n(1151),r=n(9748);function a(e){const t=Object.assign({p:"p",code:"code",ul:"ul",li:"li",pre:"pre"},(0,l.ah)(),e.components);return r.default.createElement(r.default.Fragment,null,r.default.createElement(t.p,null,"该文件夹提供较早版本的 CentOS，例如 CentOS 6；同时提供当前 CentOS 大版本的历史小版本的归档；\n还提供 CentOS 各个版本的源代码和调试符号。"),"\n",r.default.createElement(t.p,null,"建议先备份 ",r.default.createElement(t.code,null,"/etc/yum.repos.d/")," 内的文件。"),"\n",r.default.createElement(t.p,null,"需要确定您所需要的小版本，如无特殊需要则使用该大版本的最后一个小版本，比如 6.10，5.11，我们将其标记为 ",r.default.createElement(t.code,null,"$minorver"),"，需要您在之后的命令中替换。"),"\n",r.default.createElement(t.p,null,"然后编辑 ",r.default.createElement(t.code,null,"/etc/yum.repos.d/")," 中的相应文件，在 ",r.default.createElement(t.code,null,"mirrorlist=")," 开头行前面加 ",r.default.createElement(t.code,null,"#")," 注释掉；并将 ",r.default.createElement(t.code,null,"baseurl=")," 开头行取消注释（如果被注释的话）。"),"\n",r.default.createElement(t.ul,null,"\n",r.default.createElement(t.li,null,"对于 CentOS 8 之前的版本，请把该行内的域名及路径（例如",r.default.createElement(t.code,null,"mirror.centos.org/centos/$releasever"),"）替换为 ",r.default.createElement(t.code,null,"{{mirror}}/$minorver"),"。"),"\n",r.default.createElement(t.li,null,"对于 CentOS 8，请注意域名及路径发生了更换，此时需要替换的字段为 ",r.default.createElement(t.code,null,"http://mirror.centos.org/$contentdir/$releasever")," 。"),"\n"),"\n",r.default.createElement(t.p,null,"以上步骤可以被下方的命令完成"),"\n",r.default.createElement(t.pre,null,r.default.createElement(t.code,{className:"language-shell"},'# CentOS 8 之前\nminorver=6.10\nsed -e "s|^mirrorlist=|#mirrorlist=|g" \\\n         -e "s|^#baseurl=http://mirror.centos.org/centos/\\$releasever|baseurl=https://mirrors.zju.edu.cn/$minorver|g" \\\n         -i.bak \\\n         /etc/yum.repos.d/CentOS-*.repo\n\n# CentOS 8 之后\nminorver=8.5.2111\nsed -e "s|^mirrorlist=|#mirrorlist=|g" \\\n         -e "s|^#baseurl=http://mirror.centos.org/\\$contentdir/\\$releasever|baseurl=https://mirrors.zju.edu.cn/$minorver|g" \\\n         -i.bak \\\n         /etc/yum.repos.d/CentOS-*.repo\n')),"\n",r.default.createElement(t.p,null,"注意其中的",r.default.createElement(t.code,null,"*"),"通配符，如果只需要替换一些文件中的源，请自行增删。"),"\n",r.default.createElement(t.p,null,"注意，如果需要启用其中一些 repo，需要将其中的 ",r.default.createElement(t.code,null,"enabled=0")," 改为 ",r.default.createElement(t.code,null,"enabled=1"),"。"),"\n",r.default.createElement(t.p,null,"最后，更新软件包缓存"),"\n",r.default.createElement(t.pre,null,r.default.createElement(t.code,{className:"language-shell"},"yum makecache\n")))}var u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.default.createElement(t,e,r.default.createElement(a,e)):a(e)},c=n(5512),o=n(1508),d=n(5725),m=n(2658),i=n(4680),s=n(7782),f=n(2834),E=n(625),p=n(2795),h=n(4001),g=n(1441),v=n(4046),Z=n(6884),x=n(3623),b=n(7950),w=n(2351),y=n(1304);const C=e=>{var t,n,a,u;let{data:C,children:j}=e;const{language:O}=(0,s.useI18next)(),S={id:C.document.frontmatter.mirrorId,name:{zh:"",en:""},status:"unknown"},k=S.id,{0:z,1:$}=(0,r.useState)((0,b.t)("mirrors_"+k,S));(0,r.useEffect)((()=>{(async function(e){const t=await fetch("/mirror.json");if(!t.ok)throw new Error("API call failed: "+t.status+" "+await t.text());const n=await t.json();for(let l=0;l<n.length;l+=1)if(n[l].id===e)return n[l];throw new Error("Mirror fetch failed: "+e+" not exist")})(k).then((e=>$(e)))}),[]);const I="/"+k,P=(0,w.Z)(null!==(t=z.url)&&void 0!==t?t:I,!1);if("zh"!==O&&"en"!==O)throw Error("language out of range");const T=z.name[O];return r.default.createElement(o.Z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}},r.default.createElement(h.Z,{title:T+" | ZJU Mirror"}),r.default.createElement(o.Z,null,r.default.createElement(o.Z,{sx:{px:{xs:4,sm:8},py:4},position:"relative"},r.default.createElement(d.ZP,{container:!0,direction:"column",spacing:4,justifyContent:"flex-start",alignItems:"flex-start"},r.default.createElement(d.ZP,{item:!0,sx:{width:"100%"}},r.default.createElement(d.ZP,{container:!0,justifyContent:"space-between"},r.default.createElement(Z.r,{color:"primary",underline:"hover",to:"/"},r.default.createElement(m.Z,{variant:"h5",component:"div",color:"primary"},r.default.createElement(s.Trans,null,"ZJU Mirror"))),r.default.createElement(d.ZP,{item:!0},r.default.createElement(v.Z,null))),r.default.createElement(o.Z,{sx:{mt:4,display:"flex",flexDirection:"row",alignItems:"center"}}),r.default.createElement(m.Z,{variant:"h2",fontWeight:400,component:"div"},T),r.default.createElement(d.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center"},r.default.createElement(o.Z,{sx:{mr:1}},r.default.createElement(g.Z,{status:z.status})),r.default.createElement(m.Z,{variant:"subtitle1",component:"div",color:"text.disabled",display:"cached"===z.status?"none":"block"},r.default.createElement(s.Trans,null,"最近更新于"," ",{date:new Date(1e3*z.lastUpdated).toLocaleString(O)})))),(null!==(n=null===(a=z.files)||void 0===a?void 0:a.length)&&void 0!==n?n:0)>0&&r.default.createElement(d.ZP,{item:!0,width:"100%"},r.default.createElement(o.Z,null,r.default.createElement(m.Z,{gutterBottom:!0,variant:"h5",component:"div"},r.default.createElement(s.Trans,null,"安装映像")),r.default.createElement(p.Z,{files:z.files||[]}))),!(null!==(u=C.document.frontmatter)&&void 0!==u&&u.isGit)&&r.default.createElement(d.ZP,{item:!0},r.default.createElement(f.zx,{color:"primary",size:"medium",variant:"contained",startIcon:r.default.createElement(c.Z,null),to:P},r.default.createElement(s.Trans,null,"文件列表")))),r.default.createElement(o.Z,{sx:{position:"fixed",top:"6rem",right:{xs:"-4rem",sm:"5rem"},zIndex:-1}},(0,y.Z)(k,"rgb(71 123 210 / 23%)","20rem"))),r.default.createElement(o.Z,{zIndex:1,position:"sticky"},r.default.createElement(i.Z,{sx:{px:{xs:4,sm:8},py:4},elevation:0},r.default.createElement(l.Zo,{components:x.Z},j)))),r.default.createElement(E.Z,null))};function j(e){return r.default.createElement(C,e,r.default.createElement(u,e))}}}]);
//# sourceMappingURL=component---src-templates-mirror-doc-tsx-content-file-path-d-repos-mirror-front-docs-zh-centos-vault-mdx-1cc2d0b5b781728b38ef.js.map