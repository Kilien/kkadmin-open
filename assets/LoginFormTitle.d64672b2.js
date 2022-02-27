var S=Object.defineProperty;var P=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var O=(e,o,s)=>o in e?S(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,p=(e,o)=>{for(var s in o||(o={}))T.call(o,s)&&O(e,s,o[s]);if(P)for(var s of P(o))I.call(o,s)&&O(e,s,o[s]);return e};var R=(e,o,s)=>new Promise((t,i)=>{var g=n=>{try{u(s.next(n))}catch(r){i(r)}},F=n=>{try{u(s.throw(n))}catch(r){i(r)}},u=n=>n.done?t(n.value):Promise.resolve(n.value).then(g,F);u((s=s.apply(e,o)).next())});import{b}from"./index.024752fa.js";import{r as w,j as c,u as l,B as v,D as x,F as E,K as j}from"./vendor.bf608252.js";var a=(e=>(e[e.LOGIN=0]="LOGIN",e[e.REGISTER=1]="REGISTER",e[e.RESET_PASSWORD=2]="RESET_PASSWORD",e[e.MOBILE=3]="MOBILE",e[e.QR_CODE=4]="QR_CODE",e))(a||{});const y=w(0);function B(){function e(t){y.value=t}const o=c(()=>y.value);function s(){e(0)}return{setLoginState:e,getLoginState:o,handleBackLogin:s}}function L(e){function o(){return R(this,null,function*(){const s=l(e);return s?yield s.validate():void 0})}return{validForm:o}}function k(e){const{t:o}=b(),s=c(()=>f(o("sys.login.accountPlaceholder"))),t=c(()=>f(o("sys.login.passwordPlaceholder"))),i=c(()=>f(o("sys.login.smsPlaceholder"))),g=c(()=>f(o("sys.login.mobilePlaceholder"))),F=(r,d)=>R(this,null,function*(){return d?Promise.resolve():Promise.reject(o("sys.login.policyPlaceholder"))}),u=r=>(d,m)=>R(this,null,function*(){return m?m!==r?Promise.reject(o("sys.login.diffPwd")):Promise.resolve():Promise.reject(o("sys.login.passwordPlaceholder"))});return{getFormRules:c(()=>{const r=l(s),d=l(t),m=l(i),h=l(g),_={sms:m,mobile:h};switch(l(y)){case 1:return p({account:r,password:d,confirmPassword:[{validator:u(e==null?void 0:e.password),trigger:"change"}],policy:[{validator:F,trigger:"change"}]},_);case 2:return p({account:r},_);case 3:return _;default:return{account:r,password:d}}})}}function f(e){return[{required:!0,message:e,trigger:"change"}]}const G={class:"mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left"},C=v({setup(e){const{t:o}=b(),{getLoginState:s}=B(),t=c(()=>({[a.RESET_PASSWORD]:o("sys.login.forgetFormTitle"),[a.LOGIN]:o("sys.login.signInFormTitle"),[a.REGISTER]:o("sys.login.signUpFormTitle"),[a.MOBILE]:o("sys.login.mobileSignInFormTitle"),[a.QR_CODE]:o("sys.login.qrSignInFormTitle")})[l(s)]);return(i,g)=>(x(),E("h2",G,j(l(t)),1))}});var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});export{a as L,C as _,k as a,L as b,N as c,B as u};