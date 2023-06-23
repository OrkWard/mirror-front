"use strict";(self.webpackChunkzju_mirror=self.webpackChunkzju_mirror||[]).push([[4035],{9832:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(1151),l=n(9748);function a(e){const t=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,r.ah)(),e.components);return l.default.createElement(l.default.Fragment,null,l.default.createElement(t.p,null,l.default.createElement(t.a,{href:"https://rustup.rs/"},"Rustup")," 是 Rust 官方的跨平台 Rust 安装工具。"),"\n",l.default.createElement(t.p,null,"镜像站只会保留一段时间的 nightly，如果在安装时出现错误，请用 ",l.default.createElement(t.code,null,"RUSTUP_DIST_SERVER= rustup ...")," 来使用官方源。"),"\n",l.default.createElement(t.p,null,"使用 rustup 安装 rust 时，若要启用镜像源，执行："),"\n",l.default.createElement(t.pre,null,l.default.createElement(t.code,{className:"language-bash"},"# for bash\nRUSTUP_DIST_SERVER=https://mirrors.zju.edu.cn/rustup rustup install stable # for stable\n# for fish\nenv RUSTUP_DIST_SERVER=https://mirrors.zju.edu.cn/rustup rustup install stable # for stable\n# for bash\nRUSTUP_DIST_SERVER=https://mirrors.zju.edu.cn/rustup rustup install nightly # for nightly\n# for fish\nenv RUSTUP_DIST_SERVER=https://mirrors.zju.edu.cn/rustup rustup install nightly # for nightly\n# for bash\nRUSTUP_DIST_SERVER=https://mirrors.zju.edu.cn/rustup rustup install nightly-YYYY-mm-dd\n# for fish\nenv RUSTUP_DIST_SERVER=https://mirrors.zju.edu.cn/rustup rustup install nightly-YYYY-mm-dd\n")),"\n",l.default.createElement(t.p,null,"若要长期启用镜像源，执行："),"\n",l.default.createElement(t.pre,null,l.default.createElement(t.code,{className:"language-bash"},"# for bash\necho 'export RUSTUP_UPDATE_ROOT=https://mirrors.zju.edu.cn/rustup/rustup' >> ~/.bash_profile\necho 'export RUSTUP_DIST_SERVER=https://mirrors.zju.edu.cn/rustup' >> ~/.bash_profile\n# for fish\necho 'set -x RUSTUP_UPDATE_ROOT https://mirrors.zju.edu.cn/rustup/rustup' >> ~/.config/fish/config.fish\necho 'set -x RUSTUP_DIST_SERVER https://mirrors.zju.edu.cn/rustup' >> ~/.config/fish/config.fish\n")),"\n",l.default.createElement(t.p,null,"注：rustup 在判断是否需要更新时依赖于 toml 的 sha256，由于 toml 内容中相关链接被替换为镜像源，第一次切换到镜像源时各个 channel 会被认为需要更新。"))}var u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.default.createElement(t,e,l.default.createElement(a,e)):a(e)},s=n(5512),o=n(1508),c=n(5725),i=n(2658),m=n(4680),f=n(7782),d=n(2834),p=n(625),E=n(2795),h=n(4001),R=n(1441),g=n(4046),S=n(6884),Z=n(3623),x=n(7950),T=n(2351),_=n(1304);const U=e=>{var t,n,a,u;let{data:U,children:v}=e;const{language:b}=(0,f.useI18next)(),y={id:U.document.frontmatter.mirrorId,name:{zh:"",en:""},status:"unknown"},P=U.document.frontmatter.mirrorId,{0:j,1:I}=(0,l.useState)((0,x.t)("mirrors_"+P,y));(0,l.useEffect)((()=>{(async function(e){const t=await fetch("/api/mirrors/"+e);if(!t.ok)throw new Error("API call failed: "+t.status+" "+await t.text());const n=await t.json();return(0,x.v)("mirrors_"+e,n),n})(P).then((e=>I(e))).catch((e=>console.error(e)))}),[]);const z="/"+P,w=(0,T.G)(null!==(t=j.url)&&void 0!==t?t:z,!1),D=j.name[b];return l.default.createElement(o.Z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}},l.default.createElement(h.Z,{title:D+" | ZJU Mirror"}),l.default.createElement(o.Z,null,l.default.createElement(o.Z,{sx:{px:{xs:4,sm:8},py:4},position:"relative"},l.default.createElement(c.ZP,{container:!0,direction:"column",spacing:4,justifyContent:"flex-start",alignItems:"flex-start"},l.default.createElement(c.ZP,{item:!0,sx:{width:"100%"}},l.default.createElement(c.ZP,{container:!0,justifyContent:"space-between"},l.default.createElement(S.r,{color:"primary",underline:"hover",to:"/"},l.default.createElement(i.Z,{variant:"h5",component:"div",color:"primary"},l.default.createElement(f.Trans,null,"ZJU Mirror"))),l.default.createElement(c.ZP,{item:!0},l.default.createElement(g.Z,null))),l.default.createElement(o.Z,{sx:{mt:4,display:"flex",flexDirection:"row",alignItems:"center"}}),l.default.createElement(i.Z,{variant:"h2",fontWeight:400,component:"div"},D),l.default.createElement(c.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center"},l.default.createElement(o.Z,{sx:{mr:1}},l.default.createElement(R.Z,{status:j.status})),l.default.createElement(i.Z,{variant:"subtitle1",component:"div",color:"text.disabled",display:"cached"===j.status?"none":"block"},l.default.createElement(f.Trans,null,"最近更新于"," ",{date:new Date(1e3*j.lastUpdated).toLocaleString(b)})))),(null!==(n=null===(a=j.files)||void 0===a?void 0:a.length)&&void 0!==n?n:0)>0&&l.default.createElement(c.ZP,{item:!0,width:"100%"},l.default.createElement(o.Z,null,l.default.createElement(i.Z,{gutterBottom:!0,variant:"h5",component:"div"},l.default.createElement(f.Trans,null,"安装映像")),l.default.createElement(E.Z,{files:j.files||[]}))),!(null!==(u=U.document.frontmatter)&&void 0!==u&&u.isGit)&&l.default.createElement(c.ZP,{item:!0},l.default.createElement(d.zx,{color:"primary",size:"medium",variant:"contained",startIcon:l.default.createElement(s.Z,null),to:w},l.default.createElement(f.Trans,null,"文件列表")))),l.default.createElement(o.Z,{sx:{position:"fixed",top:"6rem",right:{xs:"-4rem",sm:"5rem"},zIndex:-1}},(0,_.Z)(P,"rgb(71 123 210 / 23%)","20rem"))),l.default.createElement(o.Z,{zIndex:1,position:"sticky"},l.default.createElement(m.Z,{sx:{px:{xs:4,sm:8},py:4},elevation:0},l.default.createElement(r.Zo,{components:Z.Z},v)))),l.default.createElement(p.Z,null))};function v(e){return l.default.createElement(U,e,l.default.createElement(u,e))}}}]);
//# sourceMappingURL=component---src-templates-mirror-doc-tsx-content-file-path-d-repos-mirror-front-docs-zh-rustup-mdx-d9a8d65e2494c8e19adb.js.map