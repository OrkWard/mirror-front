"use strict";(self.webpackChunkzju_mirror=self.webpackChunkzju_mirror||[]).push([[2768],{9195:function(e,t,r){r.r(t),r.d(t,{default:function(){return H}});var l=r(1151),n=r(9748);function a(e){const t=Object.assign({blockquote:"blockquote",p:"p",code:"code",a:"a",h3:"h3",pre:"pre",ul:"ul",li:"li",em:"em",strong:"strong"},(0,l.ah)(),e.components);return n.default.createElement(n.default.Fragment,null,n.default.createElement(t.blockquote,null,"\n",n.default.createElement(t.p,null,"该镜像仍在施工中，可能无法正常工作"),"\n"),"\n",n.default.createElement(t.p,null,"**注：该镜像是 Homebrew / Linuxbrew 源程序以及 formula / cask 索引的镜像（即 ",n.default.createElement(t.code,null,"brew update")," 时所更新内容）。镜像站同时提供相应的二进制预编译包的镜像（",n.default.createElement(t.a,{href:"https://mirrors.zju.edu.cn/homebrew-bottles"},"Homebrew bottles"),"） **"),"\n",n.default.createElement(t.p,null,"镜像站提供了 ",n.default.createElement(t.a,{href:"https://github.com/Homebrew"},"https://github.com/Homebrew")," 组织下的以下 ",n.default.createElement(t.code,null,"repo"),"：",n.default.createElement(t.code,null,"brew"),", ",n.default.createElement(t.code,null,"homebrew-core"),", ",n.default.createElement(t.code,null,"homebrew-cask"),", ",n.default.createElement(t.code,null,"homebrew-cask-fonts"),", ",n.default.createElement(t.code,null,"homebrew-cask-drivers"),", ",n.default.createElement(t.code,null,"homebrew-cask-versions"),", ",n.default.createElement(t.code,null,"homebrew-command-not-found"),", ",n.default.createElement(t.code,null,"install"),"。"),"\n",n.default.createElement(t.h3,null,"日常使用（只使用 Homebrew bottles 镜像）"),"\n",n.default.createElement(t.pre,null,n.default.createElement(t.code,{className:"language-bash"},'export HOMEBREW_API_DOMAIN="https://mirrors.zju.edu.cn/homebrew-bottles/api"\nexport HOMEBREW_BOTTLE_DOMAIN="https://mirrors.zju.edu.cn/homebrew-bottles"\nexport HOMEBREW_PIP_INDEX_URL="https://mirrors.zju.edu.cn/pypi/web/simple/"\n')),"\n",n.default.createElement(t.h3,null,"首次安装 Homebrew / Linuxbrew"),"\n",n.default.createElement(t.p,null,"首先，需要确保系统中安装了 bash、git 和 curl，对于 macOS 用户需额外要求安装 Command Line Tools (CLT) for Xcode。"),"\n",n.default.createElement(t.ul,null,"\n",n.default.createElement(t.li,null,"对于 macOS 用户，系统自带 bash、git 和 curl，在命令行输入 ",n.default.createElement(t.code,null,"xcode-select --install")," 安装 CLT for Xcode 即可。"),"\n",n.default.createElement(t.li,null,"对于 Linux 用户，系统自带 bash，仅需额外安装 git 和 curl。"),"\n"),"\n",n.default.createElement(t.p,null,"接着，在终端输入以下几行命令设置环境变量："),"\n",n.default.createElement(t.pre,null,n.default.createElement(t.code,{className:"language-bash"},'export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.zju.edu.cn/git/homebrew/brew.git"\nexport HOMEBREW_CORE_GIT_REMOTE="https://mirrors.zju.edu.cn/git/homebrew/homebrew-core.git"\nexport HOMEBREW_INSTALL_FROM_API=1\n# export HOMEBREW_API_DOMAIN\n# export HOMEBREW_BOTTLE_DOMAIN\n# export HOMEBREW_PIP_INDEX_URL\n')),"\n",n.default.createElement(t.p,null,"前往 ",n.default.createElement(t.a,{href:"/index/docs/homebrew-bottles/"},"Homebrew bottles 镜像使用帮助"),"中「临时替换」一节设置好 ",n.default.createElement(t.code,null,"HOMEBREW_API_DOMAIN")," 与 ",n.default.createElement(t.code,null,"HOMEBREW_BOTTLE_DOMAIN"),"。"),"\n",n.default.createElement(t.p,null,"前往 ",n.default.createElement(t.a,{href:"/index/docs/pypi/"},"PyPI 镜像使用帮助"),"中「Homebrew」一节设置好 ",n.default.createElement(t.code,null,"HOMEBREW_PIP_INDEX_URL"),"。"),"\n",n.default.createElement(t.p,null,n.default.createElement(t.em,null,"注：自 ",n.default.createElement(t.code,null,"brew")," 4.0 起，",n.default.createElement(t.code,null,"HOMEBREW_INSTALL_FROM_API")," 会成为默认行为，无需设置；大部分用户无需再克隆 homebrew/core 仓库，故无需设置 ",n.default.createElement(t.code,null,"HOMEBREW_CORE_GIT_REMOTE")," 环境变量。但若需要运行 ",n.default.createElement(t.code,null,"brew")," 的开发命令或者 ",n.default.createElement(t.code,null,"brew")," 安装在非官方支持的默认 prefix 位置，则仍需设置  ",n.default.createElement(t.code,null,"HOMEBREW_CORE_GIT_REMOTE")," 环境变量；如果不想通过 API 安装，可以设置 ",n.default.createElement(t.code,null,"HOMEBREW_NO_INSTALL_FROM_API=1"),"。")),"\n",n.default.createElement(t.p,null,"最后，在终端运行以下命令以安装 Homebrew / Linuxbrew："),"\n",n.default.createElement(t.pre,null,n.default.createElement(t.code,{className:"language-bash"},'# 从镜像下载安装脚本并安装 Homebrew / Linuxbrew\ngit clone --depth=1 https://mirrors.zju.edu.cn/git/homebrew/install.git brew-install\n/bin/bash brew-install/install.sh\nrm -rf brew-install\n# 也可从 GitHub 获取官方安装脚本安装 Homebrew / Linuxbrew\n/bin/bash -c "$(curl -fsSL https://github.com/Homebrew/install/raw/master/install.sh)"\n')),"\n",n.default.createElement(t.p,null,"这样在首次安装的时候也可以使用镜像。更多信息请参考 ",n.default.createElement(t.a,{href:"https://docs.brew.sh/Installation"},"Homebrew 官方安装文档"),"。"),"\n",n.default.createElement(t.p,null,n.default.createElement(t.em,null,"* 安装成功后需将 brew 程序的相关路径加入到环境变量中：")),"\n",n.default.createElement(t.ul,null,"\n",n.default.createElement(t.li,null,"\n",n.default.createElement(t.p,null,n.default.createElement(t.em,null,"以下针对基于 Apple Silicon CPU 设备上的 macOS 系统（命令行运行 ",n.default.createElement(t.code,null,"uname -m")," 应输出 ",n.default.createElement(t.code,null,"arm64"),"）上的 Homebrew：")),"\n",n.default.createElement(t.pre,null,n.default.createElement(t.code,{className:"language-bash"},"test -r ~/.bash_profile && echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> ~/.bash_profile\ntest -r ~/.zprofile && echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> ~/.zprofile\n")),"\n",n.default.createElement(t.p,null,n.default.createElement(t.em,null,"对基于 Intel CPU 设备上的 macOS 系统（命令行运行 ",n.default.createElement(t.code,null,"uname -m")," 应输出 ",n.default.createElement(t.code,null,"x86_64"),"）的用户可跳过本步。")),"\n"),"\n",n.default.createElement(t.li,null,"\n",n.default.createElement(t.p,null,n.default.createElement(t.em,null,"以下针对 Linux 系统上的 Linuxbrew：")),"\n",n.default.createElement(t.pre,null,n.default.createElement(t.code,{className:"language-bash"},'test -d ~/.linuxbrew && eval "$(~/.linuxbrew/bin/brew shellenv)"\ntest -d /home/linuxbrew/.linuxbrew && eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"\ntest -r ~/.bash_profile && echo "eval \\"\\$($(brew --prefix)/bin/brew shellenv)\\"" >> ~/.bash_profile\ntest -r ~/.profile && echo "eval \\"\\$($(brew --prefix)/bin/brew shellenv)\\"" >> ~/.profile\ntest -r ~/.zprofile && echo "eval \\"\\$($(brew --prefix)/bin/brew shellenv)\\"" >> ~/.zprofile\n')),"\n",n.default.createElement(t.p,null,n.default.createElement(t.em,null,"参考了 ",n.default.createElement(t.a,{href:"https://docs.brew.sh/Homebrew-on-Linux"},"https://docs.brew.sh/Homebrew-on-Linux"),"。")),"\n"),"\n"),"\n",n.default.createElement(t.h3,null,"替换现有仓库上游"),"\n",n.default.createElement(t.p,null,"替换 brew 程序本身的源，Homebrew / Linuxbrew 相同："),"\n",n.default.createElement(t.pre,null,n.default.createElement(t.code,{className:"language-bash"},'# export HOMEBREW_API_DOMAIN=\nexport HOMEBREW_BREW_GIT_REMOTE="https://mirrors.zju.edu.cn/git/homebrew/brew.git"\nbrew update\n')),"\n",n.default.createElement(t.p,null,"前往 ",n.default.createElement(t.a,{href:"/index/docs/homebrew-bottles/"},"Homebrew bottles 镜像使用帮助"),"中「临时替换」一节设置好 ",n.default.createElement(t.code,null,"HOMEBREW_API_DOMAIN")),"\n",n.default.createElement(t.p,null,"以下针对 macOS 系统上的 Homebrew："),"\n",n.default.createElement(t.pre,null,n.default.createElement(t.code,{className:"language-bash"},'# 手动设置\nexport HOMEBREW_CORE_GIT_REMOTE="https://mirrors.zju.edu.cn/git/homebrew/homebrew-core.git"\n# 注：自 brew 4.0 起，大部分 Homebrew 用户无需设置 homebrew/core 和 homebrew/cask 镜像，只需设置 HOMEBREW_API_DOMAIN 即可。\n# 如果需要使用 Homebrew 的开发命令 (如 `brew cat <formula>`)，则仍然需要设置 homebrew/core 和 homebrew/cask 镜像。\n# 请按需执行如下两行命令：\nbrew tap --custom-remote --force-auto-update homebrew/core https://mirrors.zju.edu.cn/git/homebrew/homebrew-core.git\nbrew tap --custom-remote --force-auto-update homebrew/cask https://mirrors.zju.edu.cn/git/homebrew/homebrew-cask.git\n# 除 homebrew/core 和 homebrew/cask 仓库外的 tap 仓库仍然需要设置镜像\nbrew tap --custom-remote --force-auto-update homebrew/cask-fonts https://mirrors.zju.edu.cn/git/homebrew/homebrew-cask-fonts.git\nbrew tap --custom-remote --force-auto-update homebrew/cask-drivers https://mirrors.zju.edu.cn/git/homebrew/homebrew-cask-drivers.git\nbrew tap --custom-remote --force-auto-update homebrew/cask-versions https://mirrors.zju.edu.cn/git/homebrew/homebrew-cask-versions.git\nbrew tap --custom-remote --force-auto-update homebrew/command-not-found https://mirrors.zju.edu.cn/git/homebrew/homebrew-command-not-found.git\nbrew update\n# 或使用下面的几行命令自动设置\nexport HOMEBREW_CORE_GIT_REMOTE="https://mirrors.zju.edu.cn/git/homebrew/homebrew-core.git"\nfor tap in core cask{,-fonts,-drivers,-versions} command-not-found; do\n    brew tap --custom-remote --force-auto-update "homebrew/${tap}" "https://mirrors.zju.edu.cn/git/homebrew/homebrew-${tap}.git"\ndone\nbrew update\n')),"\n",n.default.createElement(t.p,null,"以下针对 Linux 系统上的 Linuxbrew："),"\n",n.default.createElement(t.pre,null,n.default.createElement(t.code,{className:"language-bash"},'export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.zju.edu.cn/git/homebrew/homebrew-core.git"\n# 注：自 brew 4.0 起，使用默认 prefix (即 "/home/linuxbrew/.linuxbrew") 的大部分 Homebrew 用户无需设置 homebrew/core 镜像，只需设置 HOMEBREW_API_DOMAIN 即可。\n# 如果不是默认 prefix 或者需要使用 Homebrew 的开发命令 (如 `brew cat <formula>`)，则仍然需要设置 homebrew/core 镜像。\n# 请按需执行如下命令：\nbrew tap --custom-remote --force-auto-update homebrew/core https://mirrors.zju.edu.cn/git/homebrew/homebrew-core.git\n# 除 homebrew/core 仓库外的 tap 仓库仍然需要设置镜像\nbrew tap --custom-remote --force-auto-update homebrew/command-not-found https://mirrors.zju.edu.cn/git/homebrew/homebrew-command-not-found.git\nbrew update\n')),"\n",n.default.createElement(t.p,null,n.default.createElement(t.strong,null,"注：如果用户设置了环境变量 ",n.default.createElement(t.code,null,"HOMEBREW_BREW_GIT_REMOTE")," 和 ",n.default.createElement(t.code,null,"HOMEBREW_CORE_GIT_REMOTE"),"，则每次执行 ",n.default.createElement(t.code,null,"brew update")," 时，",n.default.createElement(t.code,null,"brew")," 程序本身和 Core Tap (",n.default.createElement(t.code,null,"homebrew-core"),") 的远程将被自动设置。推荐用户将这两个环境变量设置加入 shell 的 profile 设置中。")),"\n",n.default.createElement(t.pre,null,n.default.createElement(t.code,{className:"language-bash"},"test -r ~/.bash_profile && echo 'export HOMEBREW_BREW_GIT_REMOTE=\"https://mirrors.zju.edu.cn/git/homebrew/brew.git\"' >> ~/.bash_profile  # bash\ntest -r ~/.bash_profile && echo 'export HOMEBREW_CORE_GIT_REMOTE=\"https://mirrors.zju.edu.cn/git/homebrew/homebrew-core.git\"' >> ~/.bash_profile\ntest -r ~/.profile && echo 'export HOMEBREW_BREW_GIT_REMOTE=\"https://mirrors.zju.edu.cn/git/homebrew/brew.git\"' >> ~/.profile\ntest -r ~/.profile && echo 'export HOMEBREW_CORE_GIT_REMOTE=\"https://mirrors.zju.edu.cn/git/homebrew/homebrew-core.git\"' >> ~/.profile\ntest -r ~/.zprofile && echo 'export HOMEBREW_BREW_GIT_REMOTE=\"https://mirrors.zju.edu.cn/git/homebrew/brew.git\"' >> ~/.zprofile  # zsh\ntest -r ~/.zprofile && echo 'export HOMEBREW_CORE_GIT_REMOTE=\"https://mirrors.zju.edu.cn/git/homebrew/homebrew-core.git\"' >> ~/.zprofile\n")),"\n",n.default.createElement(t.p,null,"对于 ",n.default.createElement(t.code,null,"HOMEBREW_API_DOMAIN")," 与其余 bottles 相关环境变量的持久化，可以参考 ",n.default.createElement(t.a,{href:"/index/docs/homebrew-bottles/"},"Homebrew Bottles 帮助"),"。"),"\n",n.default.createElement(t.p,null,n.default.createElement(t.em,null,"镜像迁移说明：Linuxbrew 核心仓库（",n.default.createElement(t.code,null,"linuxbrew-core"),"）自 2021 年 10 月 25 日（",n.default.createElement(t.code,null,"brew")," 版本 3.3.0 起）被弃用，Linuxbrew 用户应迁移至 ",n.default.createElement(t.code,null,"homebrew-core"),"。Linuxbrew 用户请依新版镜像说明重新设置镜像。注意迁移前请先运行 ",n.default.createElement(t.code,null,"brew update")," 将 ",n.default.createElement(t.code,null,"brew")," 更新至 3.3.0 或以上版本。迁移过程中若出现任何问题，可使用如下命令重新安装 ",n.default.createElement(t.code,null,"homebrew-core"),"：")),"\n",n.default.createElement(t.pre,null,n.default.createElement(t.code,{className:"language-bash"},'export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.zju.edu.cn/git/homebrew/homebrew-core.git"\nrm -rf "$(brew --repo homebrew/core)"\nbrew tap --custom-remote --force-auto-update homebrew/core https://mirrors.zju.edu.cn/git/homebrew/homebrew-core.git\n')),"\n",n.default.createElement(t.h3,null,"复原仓库上游"),"\n",n.default.createElement(t.p,null,n.default.createElement(t.em,null,"(感谢 Snowonion Lee 提供说明)")),"\n",n.default.createElement(t.pre,null,n.default.createElement(t.code,{className:"language-bash"},'# brew 程序本身，Homebrew / Linuxbrew 相同\nunset HOMEBREW_API_DOMAIN\nunset HOMEBREW_BREW_GIT_REMOTE\ngit -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew\n# 以下针对 macOS 系统上的 Homebrew\nunset HOMEBREW_CORE_GIT_REMOTE\nBREW_TAPS="$(BREW_TAPS="$(brew tap 2>/dev/null)"; echo -n "${BREW_TAPS//$\'\\n\'/:}")"\nfor tap in core cask{,-fonts,-drivers,-versions} command-not-found; do\n    if [[ ":${BREW_TAPS}:" == *":homebrew/${tap}:"* ]]; then  # 只复原已安装的 Tap\n        brew tap --custom-remote "homebrew/${tap}" "https://github.com/Homebrew/homebrew-${tap}"\n    fi\ndone\n# 以下针对 Linux 系统上的 Linuxbrew\nunset HOMEBREW_API_DOMAIN\nunset HOMEBREW_CORE_GIT_REMOTE\nbrew tap --custom-remote homebrew/core https://github.com/Homebrew/homebrew-core\nbrew tap --custom-remote homebrew/command-not-found https://github.com/Homebrew/homebrew-command-not-found\n# 重新拉取远程\nbrew update\n')),"\n",n.default.createElement(t.p,null,n.default.createElement(t.strong,null,"注：重置回默认远程后，用户应该删除 shell 的 profile 设置中的环境变量 ",n.default.createElement(t.code,null,"HOMEBREW_BREW_GIT_REMOTE")," 和 ",n.default.createElement(t.code,null,"HOMEBREW_CORE_GIT_REMOTE")," 以免运行 ",n.default.createElement(t.code,null,"brew update")," 时远程再次被更换。")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?n.default.createElement(t,e,n.default.createElement(a,e)):a(e)},u=r(5512),m=r(1508),c=r(5725),d=r(2658),s=r(4680),E=r(7782),i=r(2834),b=r(625),f=r(2795),h=r(4001),w=r(1441),p=r(4046),_=r(6884),O=r(3623),g=r(7950),R=r(2351),x=r(1304);const M=e=>{var t,r,a,o;let{data:M,children:H}=e;const{language:I}=(0,E.useI18next)(),T={id:M.document.frontmatter.mirrorId,name:{zh:"",en:""},status:"unknown"},B=M.document.frontmatter.mirrorId,{0:W,1:v}=(0,n.useState)((0,g.t)("mirrors_"+B,T));(0,n.useEffect)((()=>{(async function(e){const t=await fetch("/api/mirrors/"+e);if(!t.ok)throw new Error("API call failed: "+t.status+" "+await t.text());const r=await t.json();return(0,g.v)("mirrors_"+e,r),r})(B).then((e=>v(e))).catch((e=>console.error(e)))}),[]);const z="/"+B,j=(0,R.G)(null!==(t=W.url)&&void 0!==t?t:z,!1),L=W.name[I];return n.default.createElement(m.Z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}},n.default.createElement(h.Z,{title:L+" | ZJU Mirror"}),n.default.createElement(m.Z,null,n.default.createElement(m.Z,{sx:{px:{xs:4,sm:8},py:4},position:"relative"},n.default.createElement(c.ZP,{container:!0,direction:"column",spacing:4,justifyContent:"flex-start",alignItems:"flex-start"},n.default.createElement(c.ZP,{item:!0,sx:{width:"100%"}},n.default.createElement(c.ZP,{container:!0,justifyContent:"space-between"},n.default.createElement(_.r,{color:"primary",underline:"hover",to:"/"},n.default.createElement(d.Z,{variant:"h5",component:"div",color:"primary"},n.default.createElement(E.Trans,null,"ZJU Mirror"))),n.default.createElement(c.ZP,{item:!0},n.default.createElement(p.Z,null))),n.default.createElement(m.Z,{sx:{mt:4,display:"flex",flexDirection:"row",alignItems:"center"}}),n.default.createElement(d.Z,{variant:"h2",fontWeight:400,component:"div"},L),n.default.createElement(c.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center"},n.default.createElement(m.Z,{sx:{mr:1}},n.default.createElement(w.Z,{status:W.status})),n.default.createElement(d.Z,{variant:"subtitle1",component:"div",color:"text.disabled",display:"cached"===W.status?"none":"block"},n.default.createElement(E.Trans,null,"最近更新于"," ",{date:new Date(1e3*W.lastUpdated).toLocaleString(I)})))),(null!==(r=null===(a=W.files)||void 0===a?void 0:a.length)&&void 0!==r?r:0)>0&&n.default.createElement(c.ZP,{item:!0,width:"100%"},n.default.createElement(m.Z,null,n.default.createElement(d.Z,{gutterBottom:!0,variant:"h5",component:"div"},n.default.createElement(E.Trans,null,"安装映像")),n.default.createElement(f.Z,{files:W.files||[]}))),!(null!==(o=M.document.frontmatter)&&void 0!==o&&o.isGit)&&n.default.createElement(c.ZP,{item:!0},n.default.createElement(i.zx,{color:"primary",size:"medium",variant:"contained",startIcon:n.default.createElement(u.Z,null),to:j},n.default.createElement(E.Trans,null,"文件列表")))),n.default.createElement(m.Z,{sx:{position:"fixed",top:"6rem",right:{xs:"-4rem",sm:"5rem"},zIndex:-1}},(0,x.Z)(B,"rgb(71 123 210 / 23%)","20rem"))),n.default.createElement(m.Z,{zIndex:1,position:"sticky"},n.default.createElement(s.Z,{sx:{px:{xs:4,sm:8},py:4},elevation:0},n.default.createElement(l.Zo,{components:O.Z},H)))),n.default.createElement(b.Z,null))};function H(e){return n.default.createElement(M,e,n.default.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-mirror-doc-tsx-content-file-path-d-repos-mirror-front-docs-zh-homebrew-git-mdx-b5ffb874c285ade046b6.js.map