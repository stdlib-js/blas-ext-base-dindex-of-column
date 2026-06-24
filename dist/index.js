"use strict";var C=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(v){throw (a=0, v)}};};var O=C(function(L,p){
var k=require('@stdlib/ndarray-base-assert-is-column-major/dist');function z(e,a,v,s,i,y,x,g,d,f,m,o){var c,h,u,j,q,n,l,r,t;if(e<=0||a<=0)return-1;if(k([s,i])){for(u=e,j=a,t=0;t<j;t++){for(q=y+t*i,l=d,r=0;r<u&&v[q]===x[l];r++)q+=s,l+=g;if(r===u)return t}return-1}for(u=a,j=e,c=i,h=s-u*i,n=o,r=0;r<u;r++)f[n]=1,n+=m;for(q=y,l=d,t=0;t<j;t++){for(n=o,r=0;r<u;r++)v[q]!==x[l]&&(f[n]=0),q+=c,n+=m;q+=h,l+=g}for(n=o,r=0;r<u&&f[n]!==1;r++)n+=m;return r===u?-1:r}p.exports=z
});var F=C(function(D,E){
var B=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),H=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),w=require('@stdlib/strided-base-stride2offset/dist'),I=require('@stdlib/math-base-special-fast-max/dist'),R=require('@stdlib/error-tools-fmtprodmsg/dist'),J=O();function K(e,a,v,s,i,y,x,g,d){var f,m,o;if(!B(e))throw new TypeError(R('2f3Fx',e));if(G(e)?o=v:o=a,i<I(1,o))throw new RangeError(R('2f3IR',o,i));return H(e)?(f=1,m=i):(f=i,m=1),J(a,v,s,f,m,0,y,x,w(a,x),g,d,w(v,d))}E.exports=K
});var _=C(function(X,V){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=F(),Q=O();P(S,"ndarray",Q);V.exports=S
});var U=require("path").join,Y=require('@stdlib/utils-try-require/dist'),Z=require('@stdlib/assert-is-error/dist'),$=_(),b,T=Y(U(__dirname,"./native.js"));Z(T)?b=$:b=T;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
