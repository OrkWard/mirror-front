"use strict";(self.webpackChunkzju_mirror=self.webpackChunkzju_mirror||[]).push([[1443],{9674:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var l=n(1151),a=n(9748);function r(e){const t=Object.assign({p:"p",a:"a",code:"code",pre:"pre",h3:"h3",ol:"ol",li:"li"},(0,l.ah)(),e.components);return a.default.createElement(a.default.Fragment,null,a.default.createElement(t.p,null,"Bioconductor 为高通量基因组数据的分析和可视化提供开源工具。Bioconductor 多数软件包采用 R 统计编程语言开发。Bioconductor 每年释出两个版本，并有活跃的用户社区。"),"\n",a.default.createElement(t.p,null,"使用方法：",a.default.createElement(t.a,{href:"https://www.bioconductor.org/"},"Bioconductor")," 镜像源配置文件之一是 ",a.default.createElement(t.code,null,".Rprofile"),"（linux 下位于 ",a.default.createElement(t.code,null,"~/.Rprofile"),", Windows 下位于 ",a.default.createElement(t.code,null,"~\\library\\base\\R\\Rprofile"),"）。"),"\n",a.default.createElement(t.p,null,"在文末添加如下语句或在 R/RStudio 终端下键入："),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-R"},'options(BioC_mirror="https://mirrors.zju.edu.cn/bioconductor")\n')),"\n",a.default.createElement(t.p,null,"即可使用该 Bioconductor 镜像源安装 Bioconductor 软件包。命令如下："),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-R"},'if (!requireNamespace("BiocManager", quietly = TRUE))\n    install.packages("BiocManager")\nBiocManager::install("$package_name")\n')),"\n",a.default.createElement(t.h3,null,"离线使用"),"\n",a.default.createElement(t.p,null,"如果您的网络环境处于校内但无法访问公网，在完成下列步骤后，即可正常使用 Bioconductor 镜像。"),"\n",a.default.createElement(t.ol,null,"\n",a.default.createElement(t.li,null,"确保 BiocManager 的版本不低于 ",a.default.createElement(t.code,null,"1.30.12"),"。"),"\n",a.default.createElement(t.li,null,"使用一台可以访问公网的设备，访问 ",a.default.createElement(t.a,{href:"https://bioconductor.org/config.yaml"},"https://bioconductor.org/config.yaml")," 下载 ",a.default.createElement(t.code,null,"config.yaml"),"，并将该文件拷贝到 BiocManager 所在的校内设备上。然后，在 ",a.default.createElement(t.code,null,"~/.Rprofile")," 添加如下配置："),"\n"),"\n",a.default.createElement(t.pre,null,a.default.createElement(t.code,{className:"language-R"},'options(\n    BIOCONDUCTOR_CONFIG_FILE = "file:///path/to/config.yaml"  # config.yaml 所在的路径\n)\n')))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.default.createElement(t,e,a.default.createElement(r,e)):r(e)},c=n(5512),u=n(1508),i=n(5725),d=n(2658),m=n(4680),f=n(7782),s=n(2834),E=n(625),p=n(2795),g=n(4001),h=n(1441),Z=n(4046),x=n(6884),w=n(3623),v=n(7950),y=n(2351),b=n(1304);const B=e=>{var t,n,r,o;let{data:B,children:R}=e;const{language:I}=(0,f.useI18next)(),j={id:B.document.frontmatter.mirrorId,name:{zh:"",en:""},status:"unknown"},k=j.id,{0:C,1:z}=(0,a.useState)((0,v.t)("mirrors_"+k,j));(0,a.useEffect)((()=>{(async function(e){const t=await fetch("/mirror-front/mirror.json");if(!t.ok)throw new Error("API call failed: "+t.status+" "+await t.text());const n=await t.json();for(let l=0;l<n.length;l+=1)if(n[l].id===e)return n[l];throw new Error("Mirror fetch failed: "+e+" not exist")})(k).then((e=>z(e)))}),[]);const M="/"+k,P=(0,y.Z)(null!==(t=C.url)&&void 0!==t?t:M,!1);if("zh"!==I&&"en"!==I)throw Error("language out of range");const _=C.name[I];return a.default.createElement(u.Z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}},a.default.createElement(g.Z,{title:_+" | ZJU Mirror"}),a.default.createElement(u.Z,null,a.default.createElement(u.Z,{sx:{px:{xs:4,sm:8},py:4},position:"relative"},a.default.createElement(i.ZP,{container:!0,direction:"column",spacing:4,justifyContent:"flex-start",alignItems:"flex-start"},a.default.createElement(i.ZP,{item:!0,sx:{width:"100%"}},a.default.createElement(i.ZP,{container:!0,justifyContent:"space-between"},a.default.createElement(x.r,{color:"primary",underline:"hover",to:"/"},a.default.createElement(d.Z,{variant:"h5",component:"div",color:"primary"},a.default.createElement(f.Trans,null,"ZJU Mirror"))),a.default.createElement(i.ZP,{item:!0},a.default.createElement(Z.Z,null))),a.default.createElement(u.Z,{sx:{mt:4,display:"flex",flexDirection:"row",alignItems:"center"}}),a.default.createElement(d.Z,{variant:"h2",fontWeight:400,component:"div"},_),a.default.createElement(i.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center"},a.default.createElement(u.Z,{sx:{mr:1}},a.default.createElement(h.Z,{status:C.status})),a.default.createElement(d.Z,{variant:"subtitle1",component:"div",color:"text.disabled",display:"cached"===C.status?"none":"block"},a.default.createElement(f.Trans,null,"最近更新于"," ",{date:new Date(1e3*C.lastUpdated).toLocaleString(I)})))),(null!==(n=null===(r=C.files)||void 0===r?void 0:r.length)&&void 0!==n?n:0)>0&&a.default.createElement(i.ZP,{item:!0,width:"100%"},a.default.createElement(u.Z,null,a.default.createElement(d.Z,{gutterBottom:!0,variant:"h5",component:"div"},a.default.createElement(f.Trans,null,"安装映像")),a.default.createElement(p.Z,{files:C.files||[]}))),!(null!==(o=B.document.frontmatter)&&void 0!==o&&o.isGit)&&a.default.createElement(i.ZP,{item:!0},a.default.createElement(s.zx,{color:"primary",size:"medium",variant:"contained",startIcon:a.default.createElement(c.Z,null),to:P},a.default.createElement(f.Trans,null,"文件列表")))),a.default.createElement(u.Z,{sx:{position:"fixed",top:"6rem",right:{xs:"-4rem",sm:"5rem"},zIndex:-1}},(0,b.Z)(k,"rgb(71 123 210 / 23%)","20rem"))),a.default.createElement(u.Z,{zIndex:1,position:"sticky"},a.default.createElement(m.Z,{sx:{px:{xs:4,sm:8},py:4},elevation:0},a.default.createElement(l.Zo,{components:w.Z},R)))),a.default.createElement(E.Z,null))};function R(e){return a.default.createElement(B,e,a.default.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-mirror-doc-tsx-content-file-path-d-repos-mirror-front-docs-zh-bioconductor-mdx-af36ef0fc942abdfbdc3.js.map