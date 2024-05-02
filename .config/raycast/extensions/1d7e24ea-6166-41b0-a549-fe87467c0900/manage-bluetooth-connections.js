"use strict";var zn=Object.create;var Q=Object.defineProperty;var Qn=Object.getOwnPropertyDescriptor;var Jn=Object.getOwnPropertyNames;var Yn=Object.getPrototypeOf,Zn=Object.prototype.hasOwnProperty;var d=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),er=(e,t)=>{for(var n in t)Q(e,n,{get:t[n],enumerable:!0})},Oe=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Jn(t))!Zn.call(e,i)&&i!==n&&Q(e,i,{get:()=>t[i],enumerable:!(r=Qn(t,i))||r.enumerable});return e};var Ne=(e,t,n)=>(n=e!=null?zn(Yn(e)):{},Oe(t||!e||!e.__esModule?Q(n,"default",{value:e,enumerable:!0}):n,e)),tr=e=>Oe(Q({},"__esModule",{value:!0}),e);var Ue=d((cs,je)=>{je.exports=Fe;Fe.sync=rr;var $e=require("fs");function nr(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var i=n[r].toLowerCase();if(i&&e.substr(-i.length).toLowerCase()===i)return!0}return!1}function qe(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:nr(t,n)}function Fe(e,t,n){$e.stat(e,function(r,i){n(r,r?!1:qe(i,e,t))})}function rr(e,t){return qe($e.statSync(e),e,t)}});var We=d((as,Ve)=>{Ve.exports=Xe;Xe.sync=ir;var He=require("fs");function Xe(e,t,n){He.stat(e,function(r,i){n(r,r?!1:Ke(i,t))})}function ir(e,t){return Ke(He.statSync(e),t)}function Ke(e,t){return e.isFile()&&sr(e,t)}function sr(e,t){var n=e.mode,r=e.uid,i=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),s=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),c=parseInt("100",8),u=parseInt("010",8),a=parseInt("001",8),p=c|u,g=n&a||n&u&&i===s||n&c&&r===o||n&p&&o===0;return g}});var Qe=d((us,ze)=>{var ds=require("fs"),J;process.platform==="win32"||global.TESTING_WINDOWS?J=Ue():J=We();ze.exports=fe;fe.sync=or;function fe(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,i){fe(e,t||{},function(o,s){o?i(o):r(s)})})}J(e,t||{},function(r,i){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,i=!1),n(r,i)})}function or(e,t){try{return J.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var rt=d((ls,nt)=>{var T=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Je=require("path"),cr=T?";":":",Ye=Qe(),Ze=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),et=(e,t)=>{let n=t.colon||cr,r=e.match(/\//)||T&&e.match(/\\/)?[""]:[...T?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],i=T?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=T?i.split(n):[""];return T&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:r,pathExt:o,pathExtExe:i}},tt=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:i,pathExtExe:o}=et(e,t),s=[],c=a=>new Promise((p,g)=>{if(a===r.length)return t.all&&s.length?p(s):g(Ze(e));let v=r[a],h=/^".*"$/.test(v)?v.slice(1,-1):v,x=Je.join(h,e),b=!h&&/^\.[\\\/]/.test(e)?e.slice(0,2)+x:x;p(u(b,a,0))}),u=(a,p,g)=>new Promise((v,h)=>{if(g===i.length)return v(c(p+1));let x=i[g];Ye(a+x,{pathExt:o},(b,C)=>{if(!b&&C)if(t.all)s.push(a+x);else return v(a+x);return v(u(a,p,g+1))})});return n?c(0).then(a=>n(null,a),n):c(0)},ar=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:i}=et(e,t),o=[];for(let s=0;s<n.length;s++){let c=n[s],u=/^".*"$/.test(c)?c.slice(1,-1):c,a=Je.join(u,e),p=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+a:a;for(let g=0;g<r.length;g++){let v=p+r[g];try{if(Ye.sync(v,{pathExt:i}))if(t.all)o.push(v);else return v}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw Ze(e)};nt.exports=tt;tt.sync=ar});var ve=d((ps,me)=>{"use strict";var it=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};me.exports=it;me.exports.default=it});var at=d((fs,ct)=>{"use strict";var st=require("path"),dr=rt(),ur=ve();function ot(e,t){let n=e.options.env||process.env,r=process.cwd(),i=e.options.cwd!=null,o=i&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let s;try{s=dr.sync(e.command,{path:n[ur({env:n})],pathExt:t?st.delimiter:void 0})}catch{}finally{o&&process.chdir(r)}return s&&(s=st.resolve(i?e.options.cwd:"",s)),s}function lr(e){return ot(e)||ot(e,!0)}ct.exports=lr});var dt=d((ms,he)=>{"use strict";var ge=/([()\][%!^"`<>&|;, *?])/g;function pr(e){return e=e.replace(ge,"^$1"),e}function fr(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(ge,"^$1"),t&&(e=e.replace(ge,"^$1")),e}he.exports.command=pr;he.exports.argument=fr});var lt=d((vs,ut)=>{"use strict";ut.exports=/^#!(.*)/});var ft=d((gs,pt)=>{"use strict";var mr=lt();pt.exports=(e="")=>{let t=e.match(mr);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),i=n.split("/").pop();return i==="env"?r:r?`${i} ${r}`:i}});var vt=d((hs,mt)=>{"use strict";var xe=require("fs"),vr=ft();function gr(e){let n=Buffer.alloc(150),r;try{r=xe.openSync(e,"r"),xe.readSync(r,n,0,150,0),xe.closeSync(r)}catch{}return vr(n.toString())}mt.exports=gr});var yt=d((xs,xt)=>{"use strict";var hr=require("path"),gt=at(),ht=dt(),xr=vt(),yr=process.platform==="win32",br=/\.(?:com|exe)$/i,Sr=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Dr(e){e.file=gt(e);let t=e.file&&xr(e.file);return t?(e.args.unshift(e.file),e.command=t,gt(e)):e.file}function wr(e){if(!yr)return e;let t=Dr(e),n=!br.test(t);if(e.options.forceShell||n){let r=Sr.test(t);e.command=hr.normalize(e.command),e.command=ht.command(e.command),e.args=e.args.map(o=>ht.argument(o,r));let i=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${i}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Ir(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:wr(r)}xt.exports=Ir});var Dt=d((ys,St)=>{"use strict";var ye=process.platform==="win32";function be(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Er(e,t){if(!ye)return;let n=e.emit;e.emit=function(r,i){if(r==="exit"){let o=bt(i,t,"spawn");if(o)return n.call(e,"error",o)}return n.apply(e,arguments)}}function bt(e,t){return ye&&e===1&&!t.file?be(t.original,"spawn"):null}function Pr(e,t){return ye&&e===1&&!t.file?be(t.original,"spawnSync"):null}St.exports={hookChildProcess:Er,verifyENOENT:bt,verifyENOENTSync:Pr,notFoundError:be}});var Et=d((bs,R)=>{"use strict";var wt=require("child_process"),Se=yt(),De=Dt();function It(e,t,n){let r=Se(e,t,n),i=wt.spawn(r.command,r.args,r.options);return De.hookChildProcess(i,r),i}function Ar(e,t,n){let r=Se(e,t,n),i=wt.spawnSync(r.command,r.args,r.options);return i.error=i.error||De.verifyENOENTSync(i.status,r),i}R.exports=It;R.exports.spawn=It;R.exports.sync=Ar;R.exports._parse=Se;R.exports._enoent=De});var At=d((Ss,Pt)=>{"use strict";Pt.exports=e=>{let t=typeof e=="string"?`
`:10,n=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var Rt=d((Ds,F)=>{"use strict";var q=require("path"),Ct=ve(),Tt=e=>{e={cwd:process.cwd(),path:process.env[Ct()],execPath:process.execPath,...e};let t,n=q.resolve(e.cwd),r=[];for(;t!==n;)r.push(q.join(n,"node_modules/.bin")),t=n,n=q.resolve(n,"..");let i=q.resolve(e.cwd,e.execPath,"..");return r.push(i),r.concat(e.path).join(q.delimiter)};F.exports=Tt;F.exports.default=Tt;F.exports.env=e=>{e={env:process.env,...e};let t={...e.env},n=Ct({env:t});return e.path=t[n],t[n]=F.exports(e),t}});var Mt=d((ws,we)=>{"use strict";var Gt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};we.exports=Gt;we.exports.default=Gt});var Lt=d((Is,Z)=>{"use strict";var Cr=Mt(),Y=new WeakMap,_t=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,i=e.displayName||e.name||"<anonymous>",o=function(...s){if(Y.set(o,++r),r===1)n=e.apply(this,s),e=null;else if(t.throw===!0)throw new Error(`Function \`${i}\` can only be called once`);return n};return Cr(o,e),Y.set(o,r),o};Z.exports=_t;Z.exports.default=_t;Z.exports.callCount=e=>{if(!Y.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return Y.get(e)}});var Bt=d(ee=>{"use strict";Object.defineProperty(ee,"__esModule",{value:!0});ee.SIGNALS=void 0;var Tr=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];ee.SIGNALS=Tr});var Ie=d(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.SIGRTMAX=G.getRealtimeSignals=void 0;var Rr=function(){let e=Ot-kt+1;return Array.from({length:e},Gr)};G.getRealtimeSignals=Rr;var Gr=function(e,t){return{name:`SIGRT${t+1}`,number:kt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},kt=34,Ot=64;G.SIGRTMAX=Ot});var Nt=d(te=>{"use strict";Object.defineProperty(te,"__esModule",{value:!0});te.getSignals=void 0;var Mr=require("os"),_r=Bt(),Lr=Ie(),Br=function(){let e=(0,Lr.getRealtimeSignals)();return[..._r.SIGNALS,...e].map(kr)};te.getSignals=Br;var kr=function({name:e,number:t,description:n,action:r,forced:i=!1,standard:o}){let{signals:{[e]:s}}=Mr.constants,c=s!==void 0;return{name:e,number:c?s:t,description:n,supported:c,action:r,forced:i,standard:o}}});var qt=d(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});M.signalsByNumber=M.signalsByName=void 0;var Or=require("os"),$t=Nt(),Nr=Ie(),$r=function(){return(0,$t.getSignals)().reduce(qr,{})},qr=function(e,{name:t,number:n,description:r,supported:i,action:o,forced:s,standard:c}){return{...e,[t]:{name:t,number:n,description:r,supported:i,action:o,forced:s,standard:c}}},Fr=$r();M.signalsByName=Fr;var jr=function(){let e=(0,$t.getSignals)(),t=Nr.SIGRTMAX+1,n=Array.from({length:t},(r,i)=>Ur(i,e));return Object.assign({},...n)},Ur=function(e,t){let n=Hr(e,t);if(n===void 0)return{};let{name:r,description:i,supported:o,action:s,forced:c,standard:u}=n;return{[e]:{name:r,number:e,description:i,supported:o,action:s,forced:c,standard:u}}},Hr=function(e,t){let n=t.find(({name:r})=>Or.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},Xr=jr();M.signalsByNumber=Xr});var jt=d((Ts,Ft)=>{"use strict";var{signalsByName:Kr}=qt(),Vr=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:i,exitCode:o,isCanceled:s})=>e?`timed out after ${t} milliseconds`:s?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${i})`:o!==void 0?`failed with exit code ${o}`:"failed",Wr=({stdout:e,stderr:t,all:n,error:r,signal:i,exitCode:o,command:s,escapedCommand:c,timedOut:u,isCanceled:a,killed:p,parsed:{options:{timeout:g}}})=>{o=o===null?void 0:o,i=i===null?void 0:i;let v=i===void 0?void 0:Kr[i].description,h=r&&r.code,b=`Command ${Vr({timedOut:u,timeout:g,errorCode:h,signal:i,signalDescription:v,exitCode:o,isCanceled:a})}: ${s}`,C=Object.prototype.toString.call(r)==="[object Error]",W=C?`${b}
${r.message}`:b,z=[W,t,e].filter(Boolean).join(`
`);return C?(r.originalMessage=r.message,r.message=z):r=new Error(z),r.shortMessage=W,r.command=s,r.escapedCommand=c,r.exitCode=o,r.signal=i,r.signalDescription=v,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=!!u,r.isCanceled=a,r.killed=p&&!u,r};Ft.exports=Wr});var Ht=d((Rs,Ee)=>{"use strict";var ne=["stdin","stdout","stderr"],zr=e=>ne.some(t=>e[t]!==void 0),Ut=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return ne.map(r=>e[r]);if(zr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${ne.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,ne.length);return Array.from({length:n},(r,i)=>t[i])};Ee.exports=Ut;Ee.exports.node=e=>{let t=Ut(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Xt=d((Gs,re)=>{re.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&re.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&re.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Qt=d((Ms,B)=>{var l=global.process,w=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};w(l)?(Kt=require("assert"),_=Xt(),Vt=/^win/i.test(l.platform),j=require("events"),typeof j!="function"&&(j=j.EventEmitter),l.__signal_exit_emitter__?f=l.__signal_exit_emitter__:(f=l.__signal_exit_emitter__=new j,f.count=0,f.emitted={}),f.infinite||(f.setMaxListeners(1/0),f.infinite=!0),B.exports=function(e,t){if(!w(global.process))return function(){};Kt.equal(typeof e,"function","a callback must be provided for exit handler"),L===!1&&Pe();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){f.removeListener(n,e),f.listeners("exit").length===0&&f.listeners("afterexit").length===0&&ie()};return f.on(n,e),r},ie=function(){!L||!w(global.process)||(L=!1,_.forEach(function(t){try{l.removeListener(t,se[t])}catch{}}),l.emit=oe,l.reallyExit=Ae,f.count-=1)},B.exports.unload=ie,I=function(t,n,r){f.emitted[t]||(f.emitted[t]=!0,f.emit(t,n,r))},se={},_.forEach(function(e){se[e]=function(){if(w(global.process)){var n=l.listeners(e);n.length===f.count&&(ie(),I("exit",null,e),I("afterexit",null,e),Vt&&e==="SIGHUP"&&(e="SIGINT"),l.kill(l.pid,e))}}}),B.exports.signals=function(){return _},L=!1,Pe=function(){L||!w(global.process)||(L=!0,f.count+=1,_=_.filter(function(t){try{return l.on(t,se[t]),!0}catch{return!1}}),l.emit=zt,l.reallyExit=Wt)},B.exports.load=Pe,Ae=l.reallyExit,Wt=function(t){w(global.process)&&(l.exitCode=t||0,I("exit",l.exitCode,null),I("afterexit",l.exitCode,null),Ae.call(l,l.exitCode))},oe=l.emit,zt=function(t,n){if(t==="exit"&&w(global.process)){n!==void 0&&(l.exitCode=n);var r=oe.apply(this,arguments);return I("exit",l.exitCode,null),I("afterexit",l.exitCode,null),r}else return oe.apply(this,arguments)}):B.exports=function(){return function(){}};var Kt,_,Vt,j,f,ie,I,se,L,Pe,Ae,Wt,oe,zt});var Yt=d((_s,Jt)=>{"use strict";var Qr=require("os"),Jr=Qt(),Yr=1e3*5,Zr=(e,t="SIGTERM",n={})=>{let r=e(t);return ei(e,t,n,r),r},ei=(e,t,n,r)=>{if(!ti(t,n,r))return;let i=ri(n),o=setTimeout(()=>{e("SIGKILL")},i);o.unref&&o.unref()},ti=(e,{forceKillAfterTimeout:t},n)=>ni(e)&&t!==!1&&n,ni=e=>e===Qr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",ri=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Yr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},ii=(e,t)=>{e.kill()&&(t.isCanceled=!0)},si=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},oi=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let i,o=new Promise((c,u)=>{i=setTimeout(()=>{si(e,n,u)},t)}),s=r.finally(()=>{clearTimeout(i)});return Promise.race([o,s])},ci=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},ai=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let i=Jr(()=>{e.kill()});return r.finally(()=>{i()})};Jt.exports={spawnedKill:Zr,spawnedCancel:ii,setupTimeout:oi,validateTimeout:ci,setExitHandler:ai}});var en=d((Ls,Zt)=>{"use strict";var S=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";S.writable=e=>S(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";S.readable=e=>S(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";S.duplex=e=>S.writable(e)&&S.readable(e);S.transform=e=>S.duplex(e)&&typeof e._transform=="function";Zt.exports=S});var nn=d((Bs,tn)=>{"use strict";var{PassThrough:di}=require("stream");tn.exports=e=>{e={...e};let{array:t}=e,{encoding:n}=e,r=n==="buffer",i=!1;t?i=!(n||r):n=n||"utf8",r&&(n=null);let o=new di({objectMode:i});n&&o.setEncoding(n);let s=0,c=[];return o.on("data",u=>{c.push(u),i?s=c.length:s+=u.length}),o.getBufferedValue=()=>t?c:r?Buffer.concat(c,s):c.join(""),o.getBufferedLength=()=>s,o}});var rn=d((ks,U)=>{"use strict";var{constants:ui}=require("buffer"),li=require("stream"),{promisify:pi}=require("util"),fi=nn(),mi=pi(li.pipeline),ce=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function Ce(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:n}=t,r=fi(t);return await new Promise((i,o)=>{let s=c=>{c&&r.getBufferedLength()<=ui.MAX_LENGTH&&(c.bufferedData=r.getBufferedValue()),o(c)};(async()=>{try{await mi(e,r),i()}catch(c){s(c)}})(),r.on("data",()=>{r.getBufferedLength()>n&&s(new ce)})}),r.getBufferedValue()}U.exports=Ce;U.exports.buffer=(e,t)=>Ce(e,{...t,encoding:"buffer"});U.exports.array=(e,t)=>Ce(e,{...t,array:!0});U.exports.MaxBufferError=ce});var on=d((Os,sn)=>{"use strict";var{PassThrough:vi}=require("stream");sn.exports=function(){var e=[],t=new vi({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",i),Array.prototype.slice.call(arguments).forEach(n),t;function n(o){return Array.isArray(o)?(o.forEach(n),this):(e.push(o),o.once("end",i.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function r(){return e.length==0}function i(o){e=e.filter(function(s){return s!==o}),!e.length&&t.readable&&t.end()}}});var un=d((Ns,dn)=>{"use strict";var an=en(),cn=rn(),gi=on(),hi=(e,t)=>{t===void 0||e.stdin===void 0||(an(t)?t.pipe(e.stdin):e.stdin.end(t))},xi=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=gi();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},Te=async(e,t)=>{if(e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},Re=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?cn(e,{encoding:t,maxBuffer:r}):cn.buffer(e,{maxBuffer:r})},yi=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:i,maxBuffer:o},s)=>{let c=Re(e,{encoding:r,buffer:i,maxBuffer:o}),u=Re(t,{encoding:r,buffer:i,maxBuffer:o}),a=Re(n,{encoding:r,buffer:i,maxBuffer:o*2});try{return await Promise.all([s,c,u,a])}catch(p){return Promise.all([{error:p,signal:p.signal,timedOut:p.timedOut},Te(e,c),Te(t,u),Te(n,a)])}},bi=({input:e})=>{if(an(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};dn.exports={handleInput:hi,makeAllStream:xi,getSpawnedResult:yi,validateInputSync:bi}});var pn=d(($s,ln)=>{"use strict";var Si=(async()=>{})().constructor.prototype,Di=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Si,e)]),wi=(e,t)=>{for(let[n,r]of Di){let i=typeof t=="function"?(...o)=>Reflect.apply(r.value,t(),o):r.value.bind(t);Reflect.defineProperty(e,n,{...r,value:i})}return e},Ii=e=>new Promise((t,n)=>{e.on("exit",(r,i)=>{t({exitCode:r,signal:i})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});ln.exports={mergePromise:wi,getSpawnedPromise:Ii}});var vn=d((qs,mn)=>{"use strict";var fn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Ei=/^[\w.-]+$/,Pi=/"/g,Ai=e=>typeof e!="string"||Ei.test(e)?e:`"${e.replace(Pi,'\\"')}"`,Ci=(e,t)=>fn(e,t).join(" "),Ti=(e,t)=>fn(e,t).map(n=>Ai(n)).join(" "),Ri=/ +/g,Gi=e=>{let t=[];for(let n of e.trim().split(Ri)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};mn.exports={joinCommand:Ci,getEscapedCommand:Ti,parseCommand:Gi}});var Dn=d((Fs,k)=>{"use strict";var Mi=require("path"),Ge=require("child_process"),_i=Et(),Li=At(),Bi=Rt(),ki=Lt(),ae=jt(),hn=Ht(),{spawnedKill:Oi,spawnedCancel:Ni,setupTimeout:$i,validateTimeout:qi,setExitHandler:Fi}=Yt(),{handleInput:ji,getSpawnedResult:Ui,makeAllStream:Hi,validateInputSync:Xi}=un(),{mergePromise:gn,getSpawnedPromise:Ki}=pn(),{joinCommand:xn,parseCommand:yn,getEscapedCommand:bn}=vn(),Vi=1e3*1e3*100,Wi=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:i})=>{let o=t?{...process.env,...e}:e;return n?Bi.env({env:o,cwd:r,execPath:i}):o},Sn=(e,t,n={})=>{let r=_i._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n={maxBuffer:Vi,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...n},n.env=Wi(n),n.stdio=hn(n),process.platform==="win32"&&Mi.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},H=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?Li(t):t,de=(e,t,n)=>{let r=Sn(e,t,n),i=xn(e,t),o=bn(e,t);qi(r.options);let s;try{s=Ge.spawn(r.file,r.args,r.options)}catch(h){let x=new Ge.ChildProcess,b=Promise.reject(ae({error:h,stdout:"",stderr:"",all:"",command:i,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return gn(x,b)}let c=Ki(s),u=$i(s,r.options,c),a=Fi(s,r.options,u),p={isCanceled:!1};s.kill=Oi.bind(null,s.kill.bind(s)),s.cancel=Ni.bind(null,s,p);let v=ki(async()=>{let[{error:h,exitCode:x,signal:b,timedOut:C},W,z,Wn]=await Ui(s,r.options,a),_e=H(r.options,W),Le=H(r.options,z),Be=H(r.options,Wn);if(h||x!==0||b!==null){let ke=ae({error:h,exitCode:x,signal:b,stdout:_e,stderr:Le,all:Be,command:i,escapedCommand:o,parsed:r,timedOut:C,isCanceled:p.isCanceled,killed:s.killed});if(!r.options.reject)return ke;throw ke}return{command:i,escapedCommand:o,exitCode:0,stdout:_e,stderr:Le,all:Be,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return ji(s,r.options.input),s.all=Hi(s,r.options),gn(s,v)};k.exports=de;k.exports.sync=(e,t,n)=>{let r=Sn(e,t,n),i=xn(e,t),o=bn(e,t);Xi(r.options);let s;try{s=Ge.spawnSync(r.file,r.args,r.options)}catch(a){throw ae({error:a,stdout:"",stderr:"",all:"",command:i,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let c=H(r.options,s.stdout,s.error),u=H(r.options,s.stderr,s.error);if(s.error||s.status!==0||s.signal!==null){let a=ae({stdout:c,stderr:u,error:s.error,signal:s.signal,exitCode:s.status,command:i,escapedCommand:o,parsed:r,timedOut:s.error&&s.error.code==="ETIMEDOUT",isCanceled:!1,killed:s.signal!==null});if(!r.options.reject)return a;throw a}return{command:i,escapedCommand:o,exitCode:0,stdout:c,stderr:u,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};k.exports.command=(e,t)=>{let[n,...r]=yn(e);return de(n,r,t)};k.exports.commandSync=(e,t)=>{let[n,...r]=yn(e);return de.sync(n,r,t)};k.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=hn.node(n),i=process.execArgv.filter(c=>!c.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:s=i}=n;return de(o,[...s,e,...Array.isArray(t)?t:[]],{...n,stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1})}});var ss={};er(ss,{default:()=>Vn});module.exports=tr(ss);var A=require("@raycast/api"),V=require("react");var N=require("path"),$=require("fs");var wn=Ne(require("node:process"),1),In=Ne(Dn(),1);function ue(e,{humanReadableOutput:t=!0}={}){if(wn.default.platform!=="darwin")throw new Error("macOS only");let n=t?[]:["-ss"],{stdout:r}=In.default.sync("osascript",["-e",e,...n]);return r}var m=require("@raycast/api");var En={"0x2002":{name:"AirPods 1",main:"icons/devices/apple/airpods.svg",case:"icons/devices/apple/extra/airpods.case.svg",left:"icons/devices/apple/extra/airpods.left.svg",right:"icons/devices/apple/extra/airpods.right.svg"},"0x200F":{name:"AirPods 2",main:"icons/devices/apple/airpods.svg",case:"icons/devices/apple/extra/airpods.case.svg",left:"icons/devices/apple/extra/airpods.left.svg",right:"icons/devices/apple/extra/airpods.right.svg"},"0x2013":{name:"AirPods 3",main:"icons/devices/apple/airpods.gen3.svg",case:"icons/devices/apple/extra/airpods.gen3.case.svg",left:"icons/devices/apple/extra/airpods.gen3.left.svg",right:"icons/devices/apple/extra/airpods.gen3.right.svg"},"0x200E":{name:"AirPods Pro (Gen 1)",main:"icons/devices/apple/airpods.pro.svg",case:"icons/devices/apple/extra/airpods.pro.case.svg",left:"icons/devices/apple/extra/airpods.pro.left.svg",right:"icons/devices/apple/extra/airpods.pro.right.svg"},"0x2014":{name:"AirPods Pro (Gen 2)",main:"icons/devices/apple/airpods.pro.svg",case:"icons/devices/apple/extra/airpods.pro.case.svg",left:"icons/devices/apple/extra/airpods.pro.left.svg",right:"icons/devices/apple/extra/airpods.pro.right.svg"},"0x200A":{name:"AirPods Max",main:"icons/devices/apple/airpods.max.svg"}};var Pn={"0x2010":{name:"Beats Flex",main:"icons/devices/apple/beats.earphones.svg"},"0x200C":{name:"Beats Solo Pro",main:"icons/devices/apple/beats.headphones.svg"},"0x2012":{name:"Beats Fit Pro",main:"icons/devices/apple/beats.fit.pro.svg",case:"icons/devices/apple/extra/beats.fit.pro.case.svg",left:"icons/devices/apple/extra/beats.fit.pro.left.svg",right:"icons/devices/apple/extra/beats.fit.pro.right.svg"},"0x2011":{name:"Beats Studio Buds",main:"icons/devices/apple/beats.studio.buds.svg",case:"icons/devices/apple/extra/beats.studio.buds.case.svg",left:"icons/devices/apple/extra/beats.studio.buds.left.svg",right:"icons/devices/apple/extra/beats.studio.buds.right.svg"}};var An={"0x0267":{name:"Magic Keyboard (Standard)"},"0x026C":{name:"Magic Keyboard (Numpad)"},"0x029C":{name:"Magic Keyboard (Standard | 2021)"},"0x029F":{name:"Magic Keyboard (Numpad | 2021)"},"0x029A":{name:"Magic Keyboard (Fingerprint | 2021)"}};var Cn={"0x030D":{name:"Magic Mouse (Gen 1)",main:"icons/devices/apple/magic-mouse.svg"},"0x0269":{name:"Magic Mouse (Gen 2)",main:"icons/devices/apple/magic-mouse.svg"}};var Tn={"0x030E":{name:"Magic Trackpad (Gen 1)",main:"icons/devices/apple/magic-trackpad.svg"},"0x0265":{name:"Magic Trackpad (Gen 2)",main:"icons/devices/apple/magic-trackpad.svg"}};var zi={...En,...Pn,...An,...Cn,...Tn},Rn=zi;var Qi={"0x400C":{name:"QuietComfort 35",main:"icons/devices/bose/qc.35.svg"},"0x4020":{name:"QuietComfort 35 II",main:"icons/devices/bose/qc.35.svg"},"0x4024":{name:"Noise Cancelling Headphones 700",main:"icons/devices/bose/nch.700.svg"}},Gn=Qi;var Ji={"0x3004":{name:"Pixel Buds Pro",main:"icons/devices/google/pixel.buds.pro.svg"}},Mn=Ji;var Yi={"0x24CD":{name:"Elite 85t",main:"icons/devices/jabra/elite.85t.svg"}},_n=Yi;var Zi={"0xB023":{name:"MX Master 3",main:"icons/devices/logitech/mx.master.svg"},"0xB034":{name:"MX Master 3S",main:"icons/devices/logitech/mx.master.svg"}},Ln=Zi;var es={"0xA013":{name:"Galaxy Buds Live (D701)",main:"icons/devices/samsung/galaxy.buds.live.svg"},"0xA012":{name:"Galaxy Buds+",main:"icons/devices/samsung/galaxy.buds.plus.svg"}},Bn=es;var ts={"0x004B":{name:"Momentum M2",main:"icons/devices/sennheiser/momentum.m2.svg"}},kn=ts;var ns={"0x0DF0":{name:"WH-1000XM5",main:"icons/devices/sony/wh.1000xm5.svg"},"0x0D58":{name:"WH-1000XM4",main:"icons/devices/sony/wh.1000xm3-4.svg"},"0x0CD3":{name:"WH-1000XM3",main:"icons/devices/sony/wh.1000xm3-4.svg"},"0x0DE1":{name:"WF-1000XM4",main:"icons/devices/sony/wf.1000xm4.svg"},"0x0CE0":{name:"WF-1000XM3",main:"icons/devices/sony/wf.1000xm3.svg"}},On=ns;var rs={"0x223B":{name:"HiTuneX6",main:"icons/devices/ugreen/hitune.x6.svg"}},Nn=rs;var $n={"0x004C":Rn,"0x009E":Gn,"0x00E0":Mn,"0x0067":_n,"0x046D":Ln,"0x0075":Bn,"0x0082":kn,"0x054C":On,"0x005D":Nn};var D=require("@raycast/api");async function qn(e){let{bluetoothBackend:t}=(0,D.getPreferenceValues)(),n=O(t);await(0,D.showToast)({style:D.Toast.Style.Animated,title:"Disconnecting..."}),n?.disconnectDevice(e.macAddress)?await(0,D.showToast)({style:D.Toast.Style.Success,title:"Device disconnected successfully."}):await(0,D.showToast)({style:D.Toast.Style.Failure,title:"Failed to disconnect."})}var y=require("@raycast/api");async function Fn(e){let{closeOnSuccessfulConnection:t,bluetoothBackend:n}=(0,y.getPreferenceValues)(),r=O(n);await(0,y.showToast)({style:y.Toast.Style.Animated,title:"Connecting..."}),r?.connectDevice(e.macAddress)?await(0,y.showToast)({style:y.Toast.Style.Success,title:"Device connected successfully."}):await(0,y.showToast)({style:y.Toast.Style.Failure,title:"Failed to connect."}),t&&(0,y.closeMainWindow)()}var X=require("react/jsx-runtime"),le=class{constructor(t){if(this.name=t.name,this.icon=t.icon,this.type=t.type,this.macAddress=t.macAddress,this.connected=t.connected,this.batteryLevels=t.batteryLevels,this.productId=t.productId,this.vendorId=t.vendorId,this.actions=this.generateActions(t.actions),this.accessories=this.generateAccessories(t.accessories),this.rawDeviceData=t.rawDeviceData,this.productId&&this.vendorId){let n=this.tryFetchIconPath("main");this.icon=n?{source:n}:this.icon}}generateActions(t){return[this.connected?(0,X.jsx)(m.Action,{title:"Disconnect",onAction:()=>qn(this),icon:{source:"icons/disconnect.svg",tintColor:m.Color.PrimaryText}},"disconnect-action"):(0,X.jsx)(m.Action,{title:"Connect",onAction:()=>Fn(this),icon:{source:"icons/connect.svg",tintColor:m.Color.PrimaryText}},"connect-action"),(0,X.jsx)(m.Action,{title:`Copy Mac Address: ${this.macAddress}`,onAction:()=>m.Clipboard.copy(this.macAddress),icon:m.Icon.Hammer},"copy-mac-address"),(0,X.jsx)(m.Action,{title:"Copy Device Data",onAction:()=>m.Clipboard.copy(JSON.stringify(this.rawDeviceData)),icon:m.Icon.ComputerChip},"copy-device-data"),...t]}generateAccessories(t){let n=[],r="icons/bolt.svg";return this.connected&&(this.batteryLevels.main&&n.push({text:this.batteryLevels.main,icon:{source:r,tintColor:m.Color.PrimaryText}}),this.batteryLevels.case&&n.push({text:this.batteryLevels.case,icon:{source:this.tryFetchIconPath("case")??r,tintColor:m.Color.PrimaryText}}),this.batteryLevels.left&&n.push({text:this.batteryLevels.left,icon:{source:this.tryFetchIconPath("left")??r,tintColor:m.Color.PrimaryText}}),this.batteryLevels.right&&n.push({text:this.batteryLevels.right,icon:{source:this.tryFetchIconPath("right")??r,tintColor:m.Color.PrimaryText}})),n=[...n,...t],n}tryFetchIconPath(t){this.vendorId=this.vendorId,this.productId=this.productId;try{return $n[this.vendorId][this.productId][t]}catch{return}}};function jn(e){let t=Object.keys(e)[0],n=e[t],r=n.device_minorType,i=n.device_address,o=n.device_vendorID,s=n.device_productID,c=n.device_connected==="true",u={main:n.device_batteryLevelMain,case:n.device_batteryLevelCase,left:n.device_batteryLevelLeft,right:n.device_batteryLevelRight},a;switch(r){case"Keyboard":a="icons/devices/generic/keyboard.svg";break;case"Mouse":a="icons/devices/generic/mouse.svg";break;case"Headphones":a="icons/devices/generic/headphones.svg";break;case"Speaker":a="icons/devices/generic/speaker.svg";break;case"Gamepad":a="icons/devices/generic/gamepad.svg";break;default:a="icons/devices/generic/bluetooth.svg";break}return new le({name:t,icon:{source:a},type:r,macAddress:i,connected:c,batteryLevels:u,productId:s,vendorId:o,actions:[],accessories:[],rawDeviceData:n})}var Un=require("child_process"),E=class{getDevices(){return this._fetchRawDevicesData().map(r=>this._mapDevice(r))}connectDevice(t){let n=t.toUpperCase().replaceAll(":","-"),r=(0,$.readFileSync)((0,N.resolve)(__dirname,"assets/scripts/connectDevice.applescript")).toString(),i=(0,$.readFileSync)((0,N.resolve)(__dirname,"assets/scripts/getFirstMatchingDevice.applescript")).toString();return ue(`
      use framework "IOBluetooth"

      use scripting additions

      

      ${i}

      

      ${r}

      

      return connectDevice(getFirstMatchingDevice("${n}"))`)==="0"}disconnectDevice(t){let n=t.toUpperCase().replaceAll(":","-"),r=(0,$.readFileSync)((0,N.resolve)(__dirname,"assets/scripts/disconnectDevice.applescript")).toString(),i=(0,$.readFileSync)((0,N.resolve)(__dirname,"assets/scripts/getFirstMatchingDevice.applescript")).toString();return ue(`
      use framework "IOBluetooth"

      use scripting additions

      

      ${i}

      

      ${r}

      

      disconnectDevice(getFirstMatchingDevice("${n}"))`)==="0"}_fetchRawDevicesData(){let t=(0,$.readFileSync)((0,N.resolve)(__dirname,"assets/scripts/getAllDevices.applescript")).toString(),n=ue(`${t}`),r=JSON.parse(n).SPBluetoothDataType,i=r.flatMap(s=>s.device_connected?s.device_connected:[]),o=r.flatMap(s=>s.device_not_connected?s.device_not_connected:[]);return i.forEach(s=>this._injectConnectionStatus(s,!0)),o.forEach(s=>this._injectConnectionStatus(s,!1)),i.forEach(s=>this._injectIoRegBatteryLevel(s)),[...i,...o]}_injectConnectionStatus(t,n){let r=Object.keys(t)[0];t[r].device_connected=n?"true":"false"}_injectIoRegBatteryLevel(t){let n=Object.keys(t)[0],r=t[n].device_address.replaceAll(":","-").toLowerCase();if(t[n].device_batteryLevelMain)return;let i="";try{i=(0,Un.execSync)("ioreg -c AppleDeviceManagementHIDEventService | grep -e BatteryPercent -e DeviceAddress",{env:{...process.env,PATH:`${process.env.PATH}:/usr/bin:/usr/sbin:`}}).toString()}catch{return}let o=i.split(`
`).filter(s=>s.length>0).map(s=>s.replace(/[\s|]+/gim,"")).filter(s=>/(DeviceAddress)|(BatteryPercent)/.test(s)).map(s=>s.replace(/["\s]/gim,"")).map(s=>s.split("="));for(let s=0;s<o.length-1;s++)if(o[s][0]==="DeviceAddress"&&o[s][1]===r)if(o[s+1][0]==="BatteryPercent"){let c=o[s+1][1];c!==void 0&&(t[n].device_batteryLevelMain=`${c}%`)}else return}_mapDevice(t){let n=jn(t);if(n.connected){let r=n.icon.source.toString(),i=r.lastIndexOf("/");n.icon.source=r.substring(0,i)+"/connected/"+r.substring(i+1)}return n}};var Hn=require("fs"),pe=require("child_process");var Xn=require("@raycast/api"),is=["/opt/homebrew/bin","/usr/local/bin","/usr/bin","/bin"],K=class extends E{constructor(){super();this.envVars=process.env;let n=!1,r=is,{blueutilDirectory:i}=(0,Xn.getPreferenceValues)();if(i&&(r=[i]),r.forEach(o=>{n||(n=n||(0,Hn.existsSync)(`${o}/blueutil`),this.envVars={...process.env,PATH:`${process.env.PATH}:${o}:`})}),n)console.info("Discovered blueutil!");else throw new Error("Could not find 'blueutil'!")}getDevices(){let n=super.getDevices();try{let i=JSON.parse((0,pe.execSync)("blueutil --paired --format json",{env:this.envVars}).toString()).map(s=>s.address.replaceAll("-",":").toUpperCase());return n.filter(s=>i.includes(s.macAddress.toUpperCase()))}catch{return n}}connectDevice(n){try{return(0,pe.execSync)(`blueutil --connect ${n} --wait-connect ${n} 5`,{env:this.envVars}),!0}catch{return!1}}disconnectDevice(n){try{return(0,pe.execSync)(`blueutil --disconnect ${n} --wait-disconnect ${n} 5`,{env:this.envVars}),!0}catch{return!1}}};var Kn,Me;function O(e){if(e&&Kn!==e)switch(Kn=e,e){case"applescript":Me=new E;break;case"blueutil":Me=new K;break}return Me}var P=require("react/jsx-runtime");function Vn(){let[e,t]=(0,V.useState)(!0),[n,r]=(0,V.useState)([]),{bluetoothBackend:i}=(0,A.getPreferenceValues)(),o=O(i);if(!o)throw new Error("Could not find 'blueutil'!");let s=()=>{r(o?.getDevices()??[]),setTimeout(()=>s(),300)};return(0,V.useEffect)(()=>{r(o?.getDevices()??[]),t(!1),s()},[]),(0,P.jsx)(A.List,{isLoading:e,children:n.map(c=>(0,P.jsx)(A.List.Item,{icon:c.icon,title:c.name?c.name:c.macAddress,accessories:c.accessories,subtitle:c.type,actions:(0,P.jsx)(A.ActionPanel,{title:`Actions for ${c.name?c.name:c.macAddress}`,children:(0,P.jsx)(P.Fragment,{children:c.actions})})},c.macAddress))})}
