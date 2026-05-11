"use strict";var C=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var O=C(function(L,p){
var k=require('@stdlib/ndarray-base-assert-is-column-major/dist');function z(e,a,q,s,i,y,x,g,d,t,f,v){var c,h,u,j,m,n,l,r,o;if(e<=0||a<=0)return-1;if(k([s,i])){for(u=e,j=a,o=0;o<j;o++){for(m=y+o*i,l=d,r=0;r<u&&q[m]===x[l];r++)m+=s,l+=g;if(r===u)return o}return-1}for(u=a,j=e,c=i,h=s-u*i,n=v,r=0;r<u;r++)t[n]=1,n+=f;for(m=y,l=d,o=0;o<j;o++){for(n=v,r=0;r<u;r++)q[m]!==x[l]&&(t[n]=0),m+=c,n+=f;m+=h,l+=g}for(n=v,r=0;r<u&&t[n]!==1;r++)n+=f;return r===u?-1:r}p.exports=z
});var F=C(function(D,E){
var B=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),H=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),w=require('@stdlib/strided-base-stride2offset/dist'),I=require('@stdlib/math-base-special-fast-max/dist'),R=require('@stdlib/error-tools-fmtprodmsg/dist'),J=O();function K(e,a,q,s,i,y,x,g,d){var t,f,v;if(!B(e))throw new TypeError(R('nullFx',e));if(G(e)?v=q:v=a,i<I(1,v))throw new RangeError(R('nullIR',v,i));return H(e)?(t=1,f=i):(t=i,f=1),J(a,q,s,t,f,0,y,x,w(a,x),g,d,w(q,d))}E.exports=K
});var _=C(function(X,V){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=F(),Q=O();P(S,"ndarray",Q);V.exports=S
});var U=require("path").join,Y=require('@stdlib/utils-try-require/dist'),Z=require('@stdlib/assert-is-error/dist'),$=_(),b,T=Y(U(__dirname,"./native.js"));Z(T)?b=$:b=T;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
