import{S as v,i as x,s as w,l as d,a as E,u as S,m as f,p as m,c as k,v as T,h,q as c,b as Z,F as p,N as _,G as y,n as b,O as $}from"./index-205ca844.js";function A(i){let e,t,o,s,r,l,u;return{c(){e=d("div"),t=d("input"),o=E(),s=d("button"),r=S("Join Waiting List"),this.h()},l(a){e=f(a,"DIV",{class:!0});var n=m(e);t=f(n,"INPUT",{class:!0,type:!0,placeholder:!0}),o=k(n),s=f(n,"BUTTON",{class:!0});var g=m(s);r=T(g,"Join Waiting List"),g.forEach(h),n.forEach(h),this.h()},h(){c(t,"class","bg-gray-100 rounded-xl rounded-r-none text-base leading-none text-gray-800 p-3 w-4/5 border border-transparent focus:outline-none focus:border-gray-500"),c(t,"type","email"),c(t,"placeholder","Your Email"),c(s,"class","w-48 rounded-l-none hover:bg-pink-500 bg-pink-600 rounded-xl text-base font-medium leading-none text-white p-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600"),c(e,"class","flex items-stretch shadow-lg")},m(a,n){Z(a,e,n),p(e,t),_(t,i[0]),p(e,o),p(e,s),p(s,r),l||(u=[y(t,"input",i[2]),y(s,"click",i[1])],l=!0)},p(a,[n]){n&1&&t.value!==a[0]&&_(t,a[0])},i:b,o:b,d(a){a&&h(e),l=!1,$(u)}}}function N(i,e,t){let o="";function s(){return new RegExp(`([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|"([]!#-[^-~ 	]|(\\[	 -~]))+")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[	 -Z^-~]*])`).test(String(o).toLowerCase())}async function r(){if(!s()){console.log("invalid email yo ",o);return}const u={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o})},n=await fetch("https://rayse-sign-up.netlify.app/api/index",u);n.ok?console.log("woot! ",n):console.log("noooooo ",n)}function l(){o=this.value,t(0,o)}return[o,r,l]}class U extends v{constructor(e){super(),x(this,e,N,A,w,{})}}export{U as E};
