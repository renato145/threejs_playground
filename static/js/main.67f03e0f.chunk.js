(this.webpackJsonpthree_js_playground=this.webpackJsonpthree_js_playground||[]).push([[0],{224:function(e,t,n){e.exports=n(400)},398:function(e,t,n){},400:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(39),c=n.n(o),l=n(42),u=n(122),i=n(51),m=n(43),s=n(8),f=n(10),b=n(27);function h(){var e=Object(l.a)(["\n  color: #fff;\n  font-size: 1.2em;\n  text-align: center;\n  padding-top: 0.5em;\n"]);return h=function(){return e},e}function v(){var e=Object(l.a)(["\n  height: 90vh;\n  width: 100vw;\n  & canvas:focus {\n    outline-width: 0px;\n  }\n"]);return v=function(){return e},e}var p=m.a.div(v()),d=m.a.div(h()),g=function(e){var t=e.text,n=e.children,a=e.xtra,o=e.measure;return r.a.createElement(p,{ref:o},r.a.createElement(f.a,null,r.a.createElement("ambientLight",null),r.a.createElement("pointLight",{position:[10,10,10]}),n,r.a.createElement(b.b,null)),a&&a,t&&r.a.createElement(d,null,t))},y=function(){var e=Object(a.useRef)(),t=Object(a.useState)(!1),n=Object(s.a)(t,2),o=n[0],c=n[1];return Object(f.d)((function(){return e.current.rotation.x=e.current.rotation.y+=.01})),r.a.createElement("mesh",{ref:e,scale:o?[1.5,1.5,1.5]:[1,1,1],onPointerOver:function(){return c(!0)},onPointerOut:function(){return c(!1)}},r.a.createElement("boxBufferGeometry",{attach:"geometry",args:[2,2,2]}),r.a.createElement("meshStandardMaterial",{attach:"material",color:o?"hotpink":"orange"}),r.a.createElement(b.a,null))},E=function(){return r.a.createElement(g,{text:"Simple box geometry with hover event."},r.a.createElement(y,null))},x=n(0),j=n(20),O=101,_=function(e,t){for(var n=t*e,a=new Array(t*e),r=new Array(t*e),o=new Array(t*e),c=0,l=0;c<e;++c)for(var u=0;u<t;++u,++l)r[l]=u,o[l]=25*Math.sin(u*Math.PI/50)+c,a[l]=Math.pow(r[l]-50,2)+Math.pow(o[l]-50,2);return{xgrid:r,ygrid:o,values:a,nverts:n}}(101,O),w=_.xgrid,S=_.ygrid,M=_.values,z=_.nverts,A=Object(j.b)(w),P=Object(s.a)(A,2),F=P[0],C=P[1],G=.5*(F+C),B=C-F,k=Object(j.b)(S),U=Object(s.a)(k,2),T=U[0],D=U[1],V=.5*(T+D),I=D-T,R=Object(j.b)(M),q=Object(s.a)(R,2),N=q[0],H=q[1],J=.5*(N+H),L=H-N,X=1.2/Math.max(B,I),K=.5/L,Q=Object(j.d)().domain(Object(j.b)(M)).interpolate((function(){return j.c})),W=function(){var e=Object(a.useMemo)((function(){for(var e=[],t=[],n=0;n<z;n++){e.push((w[n]-G)*X),e.push((S[n]-V)*X),e.push((M[n]-J)*K);var a=Object(j.a)(Q(M[n]));t.push(a.r/255,a.g/255,a.b/255)}return[new Float32Array(e),new Float32Array(t)]}),[]),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useMemo)((function(){for(var e=[],t=0;t<100;t++)for(var n=0;n<100;n++){var a=t*O+n,r=a+1,o=(t+1)*O+n+1,c=o-1;e.push(a,r,o),e.push(o,c,a)}return new Uint16Array(e)}),[]);return r.a.createElement("mesh",{"rotation-x":-Math.PI/2,scale:[4,4,4]},r.a.createElement("bufferGeometry",{attach:"geometry",onUpdate:function(e){console.log(e),e.computeFaceNormals(),e.computeVertexNormals()}},r.a.createElement("bufferAttribute",{attachObject:["attributes","position"],count:n.length/3,array:n,itemSize:3}),r.a.createElement("bufferAttribute",{attachObject:["attributes","color"],count:o.length/3,array:o,itemSize:3}),r.a.createElement("bufferAttribute",{attach:"index",count:c.length,array:c,itemSize:1})),r.a.createElement("meshPhongMaterial",{attach:"material",side:x.DoubleSide,vertexColors:!0}),r.a.createElement(b.a,null))},Y=function(){return r.a.createElement(g,{text:"Surface plot using vertex and faces, colored with d3."},r.a.createElement(W,null))},Z=function(e,t){for(var n=t*e,a=new Array(t*e),r=new Array(t*e),o=new Array(t*e),c=0,l=0;c<e;++c)for(var u=0;u<t;++u,++l)r[l]=u,o[l]=25*Math.sin(u*Math.PI/50)+c,a[l]=Math.pow(r[l]-50,2)+Math.pow(o[l]-50,2);return{xgrid:r,ygrid:o,values:a,nverts:n}}(101,101),$=Z.xgrid,ee=Z.ygrid,te=Z.values,ne=Z.nverts,ae=Object(j.b)($),re=Object(s.a)(ae,2),oe=re[0],ce=re[1],le=.5*(oe+ce),ue=ce-oe,ie=Object(j.b)(ee),me=Object(s.a)(ie,2),se=me[0],fe=me[1],be=.5*(se+fe),he=fe-se,ve=Object(j.b)(te),pe=Object(s.a)(ve,2),de=pe[0],ge=pe[1],ye=.5*(de+ge),Ee=ge-de,xe=1.2/Math.max(ue,he),je=.5/Ee,Oe=Object(j.d)().domain(Object(j.b)(te)).interpolate((function(){return j.c})),_e=function(){var e=Object(a.useMemo)((function(){for(var e=[],t=[],n=0;n<ne;n++){e.push(($[n]-le)*xe),e.push((ee[n]-be)*xe),e.push((te[n]-ye)*je);var a=Object(j.a)(Oe(te[n]));t.push(a.r/255,a.g/255,a.b/255)}return[new Float32Array(e),new Float32Array(t)]}),[]),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useMemo)((function(){for(var e=[],t=0;t<100;t++)for(var n=0;n<100;n++){var a=101*t+n,r=a+1,o=101*(t+1)+n+1,c=o-1;e.push(a,r,o),e.push(o,c,a)}return new Uint16Array(e)}),[]),l=Object(a.useMemo)((function(){return{vertexShader:"\n  varying float z;\n\n  void main() {\n    vec3 pos = position;\n    z = 0.41 + pos.z*1.5;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n  }\n",fragmentShader:"\n  varying float z;\n  \n  void main() {\n    gl_FragColor = vec4(z, cos(z*200.0), cos(z*100.0), 1.0);\n  }\n"}}),[]);return r.a.createElement("mesh",{"rotation-x":-Math.PI/2,scale:[4,4,4]},r.a.createElement("bufferGeometry",{attach:"geometry",onUpdate:function(e){console.log(e),e.computeFaceNormals(),e.computeVertexNormals()}},r.a.createElement("bufferAttribute",{attachObject:["attributes","position"],count:n.length/3,array:n,itemSize:3}),r.a.createElement("bufferAttribute",{attachObject:["attributes","color"],count:o.length/3,array:o,itemSize:3}),r.a.createElement("bufferAttribute",{attach:"index",count:c.length,array:c,itemSize:1})),r.a.createElement("shaderMaterial",Object.assign({attach:"material"},l,{side:x.DoubleSide})),r.a.createElement(b.a,null))},we=function(){return r.a.createElement(g,{text:"Surface plot using vertex and faces, colored with a custom fragment shader."},r.a.createElement(_e,null))},Se=n(21),Me=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useMemo)((function(){return{vertexShader:"\n  attribute float displacement;\n  varying float z;\n\n  void main() {\n    vec3 pos = position;\n    z = pos.z;\n    pos.x += (displacement/1.0);\n    // pos.y += cos(displacement/2.0);\n    // pos.y += fract(displacement/2.0);\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n  }\n",fragmentShader:"\n  uniform float delta;\n  varying float z;\n  \n  void main() {\n    gl_FragColor = vec4(z*0.5, 0.5 + cos(delta)*0.25, sin(delta), 1.0);\n  }\n",uniforms:{delta:{value:0}}}}),[]),o=Object(a.useState)(),c=Object(s.a)(o,2),l=c[0],u=c[1],i=Object(a.useCallback)((function(e){if(!l){var t=e.attributes.position.count,n=new Float32Array(t);u(n)}}),[l]),m=Object(Se.b)("Color speed",{type:"number",value:.1,max:10}),h=Object(Se.b)("Distortion lvl",{type:"number",value:0,max:1});return Object(f.d)((function(){e.current.rotation.x=e.current.rotation.y+=.01,n.uniforms.delta.value+=m;for(var a=0;a<l.length;a++)l[a]=Math.random()*h;t.current.attributes.displacement.needsUpdate=!0})),r.a.createElement("mesh",{ref:e},r.a.createElement("boxBufferGeometry",{ref:t,attach:"geometry",args:[3,3,3],onUpdate:function(e){return i(e)}},l&&r.a.createElement("bufferAttribute",{attachObject:["attributes","displacement"],count:l.length,array:l,itemSize:1})),r.a.createElement("shaderMaterial",Object.assign({attach:"material"},n)),r.a.createElement(b.a,null))},ze=function(){return r.a.createElement(g,{text:"Testing the use of shaders.",xtra:r.a.createElement(Se.a,null)},r.a.createElement(Me,null))},Ae=n(23),Pe=function(){var e=Object(a.useRef)(),t=Object(Se.b)("width",{type:"number",value:5,min:1,max:10}),n=Object(Se.b)("height",{type:"number",value:5,min:1,max:10}),o=Object(Se.b)("width segments",{type:"number",value:10,min:2,max:100}),c=Object(Se.b)("height segments",{type:"number",value:10,min:2,max:100}),l=Object(Se.b)("max elevation",{type:"number",value:.25,min:0,max:2}),u=Object(Se.b)("wireframe",{type:"boolean",value:!1}),i=Object(a.useState)([]),m=Object(s.a)(i,2),f=m[0],h=m[1],v=Object(a.useCallback)((function(e){for(var t=e.attributes.position.array,n=0;n<t.length;n++)n%3===2&&(t[n]=Math.random()*l);if(f&&f.length===t.length)e.setAttribute("color",new x.Float32BufferAttribute(f,3));else{var a=Object(Ae.a)(t.filter((function(e,t){return t%3===2}))),r=Object(j.d)().domain(Object(j.b)(a)).interpolate((function(){return j.c})),o=[];a.forEach((function(e){var t=Object(j.a)(r(e));o.push(t.r/255,t.g/255,t.b/255)})),h((function(){return e.setAttribute("color",new x.Float32BufferAttribute(o,3)),o}))}}),[f,l]);return Object(a.useEffect)((function(){v(e.current),e.current.attributes.position.needsUpdate=!0}),[l,v]),r.a.createElement("mesh",{"rotation-x":-Math.PI/2,"position-y":-1.5},r.a.createElement("planeBufferGeometry",{ref:e,attach:"geometry",args:[t,n,o,c],onUpdate:function(e){return v(e)}}),r.a.createElement("meshPhongMaterial",{attach:"material",side:x.DoubleSide,wireframe:u,vertexColors:!0}),r.a.createElement(b.a,null))},Fe=function(){return r.a.createElement(g,{text:"Using a plane buffer geometry to show a surface plot, with colors given by d3.",xtra:r.a.createElement(Se.a,null)},r.a.createElement(Pe,null))},Ce=function(){var e=Object(a.useRef)(),t=Object(Se.b)("width",{type:"number",value:5,min:1,max:10}),n=Object(Se.b)("height",{type:"number",value:5,min:1,max:10}),o=Object(Se.b)("width segments",{type:"number",value:10,min:2,max:100}),c=Object(Se.b)("height segments",{type:"number",value:10,min:2,max:100}),l=Object(Se.b)("max elevation",{type:"number",value:.35,min:0,max:2}),u=Object(Se.b)("wireframe",{type:"boolean",value:!1}),i=Object(a.useCallback)((function(e){for(var t=e.attributes.position.array,n=0;n<t.length;n++)n%3===2&&(t[n]=Math.random()*l)}),[l]);Object(a.useEffect)((function(){i(e.current),e.current.attributes.position.needsUpdate=!0}),[l,i]);var m=Object(a.useMemo)((function(){return{vertexShader:"\n  varying float z;\n\n  void main() {\n    vec3 pos = position;\n    z = pos.z;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n  }\n",fragmentShader:"\n  varying float z;\n  \n  void main() {\n    gl_FragColor = vec4(z, 0.1, 0.3, 1.0);\n  }\n"}}),[]);return r.a.createElement("mesh",{"rotation-x":-Math.PI/2,"position-y":-1.5},r.a.createElement("planeBufferGeometry",{ref:e,attach:"geometry",args:[t,n,o,c],onUpdate:function(e){return i(e)}}),r.a.createElement("shaderMaterial",Object.assign({attach:"material"},m,{side:x.DoubleSide,wireframe:u})),r.a.createElement(b.a,null))},Ge=function(){return r.a.createElement(g,{text:"Using a plane buffer geometry to show a surface plot, with colors given by a fragment shader.",xtra:r.a.createElement(Se.a,null)},r.a.createElement(Ce,null))},Be=n(48),ke=n(50),Ue=function(e){var t=e.bounds,n=Object(f.f)().mouse,o=Object(a.useMemo)((function(){return{vertexShader:"\n  void main() {\n    gl_Position = vec4( position, 1.0 );\n  }\n",fragmentShader:"\n  uniform float u_time;\n  uniform vec2 u_resolution;\n  uniform vec2 u_mouse;\n\n\n  void main() {\n    vec2 st = gl_FragCoord.xy/u_resolution.xy;\n    st.y += sin(u_time) * 0.05;\n    vec2 mouse = (u_mouse + 1.0) / 2.0;\n    gl_FragColor=vec4(st.x, st.y, (mouse.x + mouse.y) / 2.0, 1.0);\n  }\n",uniforms:{u_time:{value:0},u_resolution:{value:new x.Vector2},u_mouse:{value:n}}}}),[n]);return Object(a.useEffect)((function(){o.uniforms.u_resolution.value.x=t.width,o.uniforms.u_resolution.value.y=t.height}),[t,o]),Object(f.d)((function(){o.uniforms.u_time.value+=.05})),r.a.createElement("mesh",null,r.a.createElement("planeBufferGeometry",{attach:"geometry",args:[2,2]}),r.a.createElement("shaderMaterial",Object.assign({attach:"material"},o)))},Te=function(){var e=Object(Be.a)({polyfill:ke.a}),t=Object(s.a)(e,2),n=t[0],a=t[1];return r.a.createElement(g,{text:"Basic template to play with shaders.",measure:n},r.a.createElement(Ue,{bounds:a}))},De=function(e){var t=e.bounds,n=Object(f.f)().mouse,o=Object(a.useMemo)((function(){return{vertexShader:"\n  void main() {\n    gl_Position = vec4( position, 1.0 );\n  }\n",fragmentShader:"\n  uniform float u_time;\n  uniform vec2 u_resolution;\n  uniform vec2 u_mouse;\n\n  void main() {\n    vec2 st = gl_FragCoord.xy/u_resolution.xy;\n    vec3 color = vec3(0.0);\n    vec2 mouse = u_mouse;\n\n    // Borders\n    // vec2 bl = smoothstep(0.05, 0.5, st);\n    // float pct = bl.x * bl.y;\n    // vec2 tr = step(0.05, 1.0 - st);\n    // pct *= tr.x * tr.y;\n    // color = vec3(pct);\n\n    // Circle\n    // float pct = distance(st, vec2(0.5));\n    // color = vec3(pct);\n\n    // Repeating circles\n    float d = 0.0;\n    st = st * 2. - 1.; // normalize between 0-1\n    st.x -= mouse.x;\n    // st.y -= mouse.y;\n    st.y = step(1.0, st.y);\n    // st.y = smoothstep(-1.0, 1.0, st.y);\n    d = length( abs(st) - sin(u_time/20.0) );\n    color = vec3(st.x, st.y + mouse.y*0.25, 0.0);\n    color.b += (mouse.x + 1.0) / 2.0 * 0.35;\n    color += fract(d*12.0);\n\n    gl_FragColor=vec4(color, 1.0);\n  }\n",uniforms:{u_time:{value:0},u_resolution:{value:new x.Vector2},u_mouse:{value:n}}}}),[n]);return Object(a.useEffect)((function(){o.uniforms.u_resolution.value.x=t.width,o.uniforms.u_resolution.value.y=t.height}),[t,o]),Object(f.d)((function(){o.uniforms.u_time.value+=.05})),r.a.createElement("mesh",null,r.a.createElement("planeBufferGeometry",{attach:"geometry",args:[2,2]}),r.a.createElement("shaderMaterial",Object.assign({attach:"material"},o)))},Ve=function(){var e=Object(Be.a)({polyfill:ke.a}),t=Object(s.a)(e,2),n=t[0],a=t[1];return r.a.createElement(g,{text:"Playing with shapes on shaders.",measure:n},r.a.createElement(De,{bounds:a}))},Ie=function(e){var t=e.bounds,n=Object(f.f)().mouse,o=Object(a.useMemo)((function(){return{vertexShader:"\n  void main() {\n    gl_Position = vec4( position, 1.0 );\n  }\n",fragmentShader:"\n  uniform float u_time;\n  uniform vec2 u_resolution;\n  uniform vec2 u_mouse;\n\n  const mat2 m = mat2( 0.80,  0.60, -0.60,  0.80 );\n\n  float hash( vec2 p ) {\n    float h = dot(p,vec2(127.1,311.7));\n    return -1.0 + 2.0*fract(sin(h)*43758.5453123);\n  }\n\n  float noise( in vec2 p ) {\n    vec2 i = floor( p );\n    vec2 f = fract( p );\n    vec2 u = f*f*(3.0-2.0*f);\n\n    return mix( mix( hash( i + vec2(0.0,0.0) ), \n                    hash( i + vec2(1.0,0.0) ), u.x),\n                mix( hash( i + vec2(0.0,1.0) ), \n                    hash( i + vec2(1.0,1.0) ), u.x), u.y);\n  }\n\n  float fbm( vec2 p )\n  {\n      float f = 0.0;\n      f += 0.5000*noise( p ); p = m*p*2.02;\n      f += 0.2500*noise( p ); p = m*p*2.03;\n      f += 0.1250*noise( p ); p = m*p*2.01;\n      f += 0.0625*noise( p );\n      return f/0.9375;\n  }\n\n  vec2 fbm2( in vec2 p )\n  {\n      return vec2( fbm(p.xy), fbm(p.yx) );\n  }\n\n  vec3 map( vec2 p )\n  {   \n      p *= 0.7;\n      float t = u_time * ( 1.0 + 2. * distance(u_mouse, vec2(0.0)));\n\n      float f = dot( fbm2( 1.0*(0.05*t + p + fbm2(-0.05*t+2.0*(p + fbm2(4.0*p)))) ), vec2(1.0,-1.0) );\n\n      float bl = smoothstep( -0.8, 0.8, f );\n\n      float ti = smoothstep( -1.0, 1.0, fbm(p) );\n\n      return mix( mix( vec3(0.50,0.00,0.00), \n                       vec3(1.00,0.75,0.35), ti ), \n                       vec3(0.00,0.00,0.02), bl );\n  }\n\n  void main() {\n    vec2 p = (-u_resolution.xy+2.0*gl_FragCoord.xy)/u_resolution.y;\n\n    float e = 0.0045;\n\n    vec3 colc = map( p               ); float gc = dot(colc,vec3(0.433));\n    vec3 cola = map( p + vec2(e,0.0) ); float ga = dot(cola,vec3(0.333));\n    vec3 colb = map( p + vec2(0.0,e) ); float gb = dot(colb,vec3(0.333));\n    \n    vec3 nor = normalize( vec3(ga-gc, e, gb-gc ) );\n\n    vec3 col = colc;\n    col += vec3(1.0,0.7,0.6)*8.0*abs(2.0*gc-ga-gb);\n    col *= 1.0+0.2*nor.y*nor.y;\n    col += 0.05*nor.y*nor.y*nor.y;\n    \n    \n    vec2 q = gl_FragCoord.xy/u_resolution.xy;\n    col *= pow(16.0*q.x*q.y*(1.0-q.x)*(1.0-q.y),0.1);\n    vec2 m = (u_mouse.xy + 1.0 ) / 2.0;\n    col.r *= m.x;\n    col.g *= m.y;\n    \n    gl_FragColor = vec4( col, 1.0 );\n  }\n",uniforms:{u_time:{value:0},u_resolution:{value:new x.Vector2},u_mouse:{value:n}}}}),[n]);return Object(a.useEffect)((function(){o.uniforms.u_resolution.value.x=t.width,o.uniforms.u_resolution.value.y=t.height}),[t,o]),Object(f.d)((function(){o.uniforms.u_time.value+=.05})),r.a.createElement("mesh",null,r.a.createElement("planeBufferGeometry",{attach:"geometry",args:[2,2]}),r.a.createElement("shaderMaterial",Object.assign({attach:"material"},o)))},Re=function(){return r.a.createElement(d,null,"A more complex test (inspired by"," ",r.a.createElement(We,{href:"https://www.shadertoy.com/view/MdSXzz",target:"_black"},"this work"),").")},qe=function(){var e=Object(Be.a)({polyfill:ke.a}),t=Object(s.a)(e,2),n=t[0],a=t[1];return r.a.createElement(g,{xtra:r.a.createElement(Re,null),measure:n},r.a.createElement(Ie,{bounds:a}))};n(398);function Ne(){var e=Object(l.a)(["\n  color: #fff;\n  font-size: 1.2em;\n  text-align: center;\n  padding-top: 3em;\n"]);return Ne=function(){return e},e}function He(){var e=Object(l.a)(["\n  color: #fff;\n  font-size: 2em;\n  text-align: center;\n  padding-top: 2em;\n"]);return He=function(){return e},e}function Je(){var e=Object(l.a)(["\n  position: absolute;\n  display: flex;\n  flex-wrap: wrap;\n  flex-flow: column;\n  justify-content: space-between;\n  margin-top: 3rem;\n  padding: 1em 1em;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 100;\n\n  & > div {\n    padding-bottom: 0.5rem;\n  }\n"]);return Je=function(){return e},e}function Le(){var e=Object(l.a)(["\n  color: #abc;\n  font-size: 1rem;\n  &.active {\n    color: #fff;\n  }\n"]);return Le=function(){return e},e}function Xe(){var e=Object(l.a)(["\n  color: #abc;\n  font-size: 1rem;\n  &.active {\n    color: #fff;\n  }\n"]);return Xe=function(){return e},e}var Ke="threejs_playground",Qe=Object(m.a)(u.b).attrs((function(e){return{exact:!0}}))(Xe()),We=m.a.a(Le()),Ye=m.a.div(Je()),Ze=m.a.div(He()),$e=m.a.div(Ne()),et=function(){return r.a.createElement(u.a,null,r.a.createElement(Ye,null,r.a.createElement("div",null,r.a.createElement(Qe,{to:"/".concat(Ke,"/")},"Home")),r.a.createElement("div",null,r.a.createElement(Qe,{to:"/".concat(Ke,"/BoxGeometry")},"BoxGeometry")),r.a.createElement("div",null,r.a.createElement(Qe,{to:"/".concat(Ke,"/SurfaceD3")},"SurfaceD3")),r.a.createElement("div",null,r.a.createElement(Qe,{to:"/".concat(Ke,"/SurfaceShader")},"SurfaceShader")),r.a.createElement("div",null,r.a.createElement(Qe,{to:"/".concat(Ke,"/TestShader")},"TestShader")),r.a.createElement("div",null,r.a.createElement(Qe,{to:"/".concat(Ke,"/PlaneGeometry")},"PlaneGeometry")),r.a.createElement("div",null,r.a.createElement(Qe,{to:"/".concat(Ke,"/PlaneGeometryShader")},"PlaneGeometryShader")),r.a.createElement("div",null,r.a.createElement(Qe,{to:"/".concat(Ke,"/ShaderTemplate")},"ShaderTemplate")),r.a.createElement("div",null,r.a.createElement(Qe,{to:"/".concat(Ke,"/ShaderShapes")},"ShaderShapes")),r.a.createElement("div",null,r.a.createElement(Qe,{to:"/".concat(Ke,"/ShaderTexture")},"ShaderTexture")),r.a.createElement("div",null,r.a.createElement(We,{href:"https://github.com/renato145/threejs_playground/",target:"_black"},"Source Code"))),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/".concat(Ke,"/")},r.a.createElement(Ze,null,"Threejs playground"),r.a.createElement($e,null,"Made by: Renato Hermoza, check the"," ",r.a.createElement(We,{href:"https://github.com/renato145/threejs_playground/",target:"_black"},"source code"),".")),r.a.createElement(i.a,{path:"/".concat(Ke,"/BoxGeometry")},r.a.createElement(E,null)),r.a.createElement(i.a,{path:"/".concat(Ke,"/SurfaceD3")},r.a.createElement(Y,null)),r.a.createElement(i.a,{path:"/".concat(Ke,"/SurfaceShader")},r.a.createElement(we,null)),r.a.createElement(i.a,{path:"/".concat(Ke,"/TestShader")},r.a.createElement(ze,null)),r.a.createElement(i.a,{path:"/".concat(Ke,"/PlaneGeometry")},r.a.createElement(Fe,null)),r.a.createElement(i.a,{path:"/".concat(Ke,"/PlaneGeometryShader")},r.a.createElement(Ge,null)),r.a.createElement(i.a,{path:"/".concat(Ke,"/ShaderTemplate")},r.a.createElement(Te,null)),r.a.createElement(i.a,{path:"/".concat(Ke,"/ShaderShapes")},r.a.createElement(Ve,null)),r.a.createElement(i.a,{path:"/".concat(Ke,"/ShaderTexture")},r.a.createElement(qe,null))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(et,null)),document.getElementById("root"))}},[[224,1,2]]]);
//# sourceMappingURL=main.67f03e0f.chunk.js.map