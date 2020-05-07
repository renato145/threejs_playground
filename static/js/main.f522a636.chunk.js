(this.webpackJsonpthree_js_playground=this.webpackJsonpthree_js_playground||[]).push([[0],{223:function(e,t,n){e.exports=n(399)},397:function(e,t,n){},399:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(38),o=n.n(c),l=n(41),u=n(120),i=n(48),s=n(42),m=n(11),f=n(37);function b(){var e=Object(l.a)(["\n  color: #fff;\n  font-size: 1.2em;\n  text-align: center;\n  padding-top: 0.5em;\n"]);return b=function(){return e},e}function h(){var e=Object(l.a)(["\n  height: 90vh;\n  width: 100vw;\n  & canvas:focus {\n    outline-width: 0px;\n  }\n"]);return h=function(){return e},e}var d=s.a.div(h()),p=s.a.div(b()),v=function(e){var t=e.text,n=e.children,a=e.xtra;return r.a.createElement(d,null,r.a.createElement(m.a,null,r.a.createElement("ambientLight",null),r.a.createElement("pointLight",{position:[10,10,10]}),n,r.a.createElement(f.b,null)),a&&a,t&&r.a.createElement(p,null,t))},E=n(8),g=function(){var e=Object(a.useRef)(),t=Object(a.useState)(!1),n=Object(E.a)(t,2),c=n[0],o=n[1];return Object(m.d)((function(){return e.current.rotation.x=e.current.rotation.y+=.01})),r.a.createElement("mesh",{ref:e,scale:c?[1.5,1.5,1.5]:[1,1,1],onPointerOver:function(){return o(!0)},onPointerOut:function(){return o(!1)}},r.a.createElement("boxBufferGeometry",{attach:"geometry",args:[2,2,2]}),r.a.createElement("meshStandardMaterial",{attach:"material",color:c?"hotpink":"orange"}),r.a.createElement(f.a,null))},j=function(){return r.a.createElement(v,{text:"Simple box geometry with hover event."},r.a.createElement(g,null))},O=n(0),y=n(25),x=101,w=function(e,t){for(var n=t*e,a=new Array(t*e),r=new Array(t*e),c=new Array(t*e),o=0,l=0;o<e;++o)for(var u=0;u<t;++u,++l)r[l]=u,c[l]=25*Math.sin(u*Math.PI/50)+o,a[l]=Math.pow(r[l]-50,2)+Math.pow(c[l]-50,2);return{xgrid:r,ygrid:c,values:a,nverts:n}}(101,x),M=w.xgrid,S=w.ygrid,z=w.values,T=w.nverts,A=Object(y.b)(M),F=Object(E.a)(A,2),P=F[0],_=F[1],U=.5*(P+_),C=_-P,I=Object(y.b)(S),k=Object(E.a)(I,2),G=k[0],N=k[1],V=.5*(G+N),B=N-G,D=Object(y.b)(z),R=Object(E.a)(D,2),J=R[0],L=R[1],H=.5*(J+L),q=L-J,K=1.2/Math.max(C,B),Q=.5/q,W=Object(y.d)().domain(Object(y.b)(z)).interpolate((function(){return y.c})),X=function(){var e=Object(a.useMemo)((function(){for(var e=[],t=[],n=0;n<T;n++){e.push((M[n]-U)*K),e.push((S[n]-V)*K),e.push((z[n]-H)*Q);var a=Object(y.a)(W(z[n]));t.push(a.r/255,a.g/255,a.b/255)}return[new Float32Array(e),new Float32Array(t)]}),[]),t=Object(E.a)(e,2),n=t[0],c=t[1],o=Object(a.useMemo)((function(){for(var e=[],t=0;t<100;t++)for(var n=0;n<100;n++){var a=t*x+n,r=a+1,c=(t+1)*x+n+1,o=c-1;e.push(a,r,c),e.push(c,o,a)}return new Uint16Array(e)}),[]);return r.a.createElement("mesh",{"rotation-x":-Math.PI/2,scale:[4,4,4]},r.a.createElement("bufferGeometry",{attach:"geometry",onUpdate:function(e){console.log(e),e.computeFaceNormals(),e.computeVertexNormals()}},r.a.createElement("bufferAttribute",{attachObject:["attributes","position"],count:n.length/3,array:n,itemSize:3}),r.a.createElement("bufferAttribute",{attachObject:["attributes","color"],count:c.length/3,array:c,itemSize:3}),r.a.createElement("bufferAttribute",{attach:"index",count:o.length,array:o,itemSize:1})),r.a.createElement("meshPhongMaterial",{attach:"material",side:O.DoubleSide,vertexColors:!0}),r.a.createElement(f.a,null))},Y=function(){return r.a.createElement(v,{text:"Surface plot using vertex and faces, colored with d3."},r.a.createElement(X,null))},Z=function(e,t){for(var n=t*e,a=new Array(t*e),r=new Array(t*e),c=new Array(t*e),o=0,l=0;o<e;++o)for(var u=0;u<t;++u,++l)r[l]=u,c[l]=25*Math.sin(u*Math.PI/50)+o,a[l]=Math.pow(r[l]-50,2)+Math.pow(c[l]-50,2);return{xgrid:r,ygrid:c,values:a,nverts:n}}(101,101),$=Z.xgrid,ee=Z.ygrid,te=Z.values,ne=Z.nverts,ae=Object(y.b)($),re=Object(E.a)(ae,2),ce=re[0],oe=re[1],le=.5*(ce+oe),ue=oe-ce,ie=Object(y.b)(ee),se=Object(E.a)(ie,2),me=se[0],fe=se[1],be=.5*(me+fe),he=fe-me,de=Object(y.b)(te),pe=Object(E.a)(de,2),ve=pe[0],Ee=pe[1],ge=.5*(ve+Ee),je=Ee-ve,Oe=1.2/Math.max(ue,he),ye=.5/je,xe=Object(y.d)().domain(Object(y.b)(te)).interpolate((function(){return y.c})),we=function(){var e=Object(a.useMemo)((function(){for(var e=[],t=[],n=0;n<ne;n++){e.push(($[n]-le)*Oe),e.push((ee[n]-be)*Oe),e.push((te[n]-ge)*ye);var a=Object(y.a)(xe(te[n]));t.push(a.r/255,a.g/255,a.b/255)}return[new Float32Array(e),new Float32Array(t)]}),[]),t=Object(E.a)(e,2),n=t[0],c=t[1],o=Object(a.useMemo)((function(){for(var e=[],t=0;t<100;t++)for(var n=0;n<100;n++){var a=101*t+n,r=a+1,c=101*(t+1)+n+1,o=c-1;e.push(a,r,c),e.push(c,o,a)}return new Uint16Array(e)}),[]),l=Object(a.useMemo)((function(){return{vertexShader:"\n  varying float z;\n\n  void main() {\n    vec3 pos = position;\n    z = 0.41 + pos.z*1.5;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n  }\n",fragmentShader:"\n  varying float z;\n  \n  void main() {\n    gl_FragColor = vec4(z, cos(z*200.0), cos(z*100.0), 1.0);\n  }\n"}}),[]);return r.a.createElement("mesh",{"rotation-x":-Math.PI/2,scale:[4,4,4]},r.a.createElement("bufferGeometry",{attach:"geometry",onUpdate:function(e){console.log(e),e.computeFaceNormals(),e.computeVertexNormals()}},r.a.createElement("bufferAttribute",{attachObject:["attributes","position"],count:n.length/3,array:n,itemSize:3}),r.a.createElement("bufferAttribute",{attachObject:["attributes","color"],count:c.length/3,array:c,itemSize:3}),r.a.createElement("bufferAttribute",{attach:"index",count:o.length,array:o,itemSize:1})),r.a.createElement("shaderMaterial",Object.assign({attach:"material"},l,{side:O.DoubleSide})),r.a.createElement(f.a,null))},Me=function(){return r.a.createElement(v,{text:"Surface plot using vertex and faces, colored with a custom fragment shader."},r.a.createElement(we,null))},Se=n(89);function ze(){var e=Object(l.a)([""]);return ze=function(){return e},e}s.a.input.attrs((function(e){return{type:"range"}}))(ze());var Te=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useMemo)((function(){return{vertexShader:"\n  attribute float displacement;\n  varying float z;\n\n  void main() {\n    vec3 pos = position;\n    z = pos.z;\n    pos.x += (displacement/1.0);\n    // pos.y += cos(displacement/2.0);\n    // pos.y += fract(displacement/2.0);\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n  }\n",fragmentShader:"\n  uniform float delta;\n  varying float z;\n  \n  void main() {\n    gl_FragColor = vec4(z*0.5, 0.5 + cos(delta)*0.25, sin(delta), 1.0);\n  }\n",uniforms:{delta:{value:0}}}}),[]),c=Object(a.useState)(),o=Object(E.a)(c,2),l=o[0],u=o[1],i=Object(a.useCallback)((function(e){if(!l){var t=e.attributes.position.count,n=new Float32Array(t);u(n)}}),[l]),s=Object(Se.b)("Color speed",{type:"number",value:.1,max:10}),b=Object(Se.b)("Distortion lvl",{type:"number",value:0,max:1});return Object(m.d)((function(){e.current.rotation.x=e.current.rotation.y+=.01,n.uniforms.delta.value+=s;for(var a=0;a<l.length;a++)l[a]=Math.random()*b;t.current.attributes.displacement.needsUpdate=!0})),r.a.createElement("mesh",{ref:e},r.a.createElement("boxBufferGeometry",{ref:t,attach:"geometry",args:[3,3,3],onUpdate:function(e){return i(e)}},l&&r.a.createElement("bufferAttribute",{attachObject:["attributes","displacement"],count:l.length,array:l,itemSize:1})),r.a.createElement("shaderMaterial",Object.assign({attach:"material"},n)),r.a.createElement(f.a,null))},Ae=function(){return r.a.createElement(v,{text:"Testing the use of shaders.",xtra:r.a.createElement(Se.a,null)},r.a.createElement(Te,null))};n(397);function Fe(){var e=Object(l.a)(["\n  color: #fff;\n  font-size: 2em;\n  text-align: center;\n  padding-top: 2em;\n"]);return Fe=function(){return e},e}function Pe(){var e=Object(l.a)(["\n  position: absolute;\n  display: flex;\n  flex-wrap: wrap;\n  flex-flow: column;\n  justify-content: space-between;\n  padding-left: 1rem;\n  padding-right: 0rem;\n  padding-top: 3rem;\n  z-index: 100;\n"]);return Pe=function(){return e},e}function _e(){var e=Object(l.a)(["\n  color: #abc;\n  font-size: 1.0rem;\n  &.active {\n    color: #fff;\n  }\n"]);return _e=function(){return e},e}var Ue=Object(s.a)(u.b).attrs((function(e){return{exact:!0}}))(_e()),Ce=s.a.div(Pe()),Ie=s.a.div(Fe()),ke=function(){return r.a.createElement(u.a,null,r.a.createElement(Ce,null,r.a.createElement("div",null,r.a.createElement(Ue,{to:"/"},"Home")),r.a.createElement("div",null,r.a.createElement(Ue,{to:"/ThreeTest1"},"ThreeTest1")),r.a.createElement("div",null,r.a.createElement(Ue,{to:"/ThreeTest2"},"ThreeTest2")),r.a.createElement("div",null,r.a.createElement(Ue,{to:"/ThreeTest3"},"ThreeTest3")),r.a.createElement("div",null,r.a.createElement(Ue,{to:"/TestShader"},"TestShader"))),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(Ie,null,"Some threejs tests")),r.a.createElement(i.a,{path:"/ThreeTest1"},r.a.createElement(j,null)),r.a.createElement(i.a,{path:"/ThreeTest2"},r.a.createElement(Y,null)),r.a.createElement(i.a,{path:"/ThreeTest3"},r.a.createElement(Me,null)),r.a.createElement(i.a,{path:"/TestShader"},r.a.createElement(Ae,null))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ke,null)),document.getElementById("root"))}},[[223,1,2]]]);
//# sourceMappingURL=main.f522a636.chunk.js.map