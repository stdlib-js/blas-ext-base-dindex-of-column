"use strict";var O=function(n,a){return function(){try{return a||n((a={exports:{}}).exports,a),a.exports}catch(v){throw (a=0, v)}};};var b=O(function(L,p){
var k=require('@stdlib/ndarray-base-assert-is-column-major/dist');function z(n,a,v,d,e,g,x,j,y,f,l,o){var q,h,i,C,m,u,s,r,t;if(n<=0||a<=0)return-1;if(k([d,e])){for(i=n,C=a,t=0;t<C;t++){for(m=g+t*e,s=y,r=0;r<i&&v[m]===x[s];r++)m+=d,s+=j;if(r===i)return t}return-1}for(i=a,C=n,q=e,h=d-i*e,u=o,r=0;r<i;r++)f[u]=1,u+=l;for(m=g,s=y,t=0;t<C;t++){for(u=o,r=0;r<i;r++)v[m]!==x[s]&&(f[u]=0),m+=q,u+=l;m+=h,s+=j}for(u=o,r=0;r<i&&f[u]!==1;r++)u+=l;return r===i?-1:r}p.exports=z
});var F=O(function(M,E){
var B=require('@stdlib/blas-base-layout-resolve-str/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),w=require('@stdlib/strided-base-stride2offset/dist'),H=require('@stdlib/math-base-special-fast-max/dist'),R=require('@stdlib/error-tools-fmtprodmsg/dist'),I=b();function J(n,a,v,d,e,g,x,j,y){var f,l,o,q;if(q=B(n),q===null)throw new TypeError(R('2f3Fx',n));if(G(q)?(o=v,f=e,l=1):(o=a,f=1,l=e),e<H(1,o))throw new RangeError(R('2f3IR',o,e));return I(a,v,d,f,l,0,g,x,w(a,x),j,y,w(v,y))}E.exports=J
});var _=O(function(D,V){
var K=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=F(),P=b();K(S,"ndarray",P);V.exports=S
});var Q=require("path").join,U=require('@stdlib/utils-try-require/dist'),Y=require('@stdlib/assert-is-error/dist'),Z=_(),c,T=U(Q(__dirname,"./native.js"));Y(T)?c=Z:c=T;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
