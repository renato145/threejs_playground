(this.webpackJsonpthree_js_playground=this.webpackJsonpthree_js_playground||[]).push([[0],{230:function(e,t,n){e.exports=n(407)},404:function(e,t,n){},405:function(e,t,n){},407:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(41),c=n.n(o),l=n(195),u=n(44),i=n(125),m=n(50),s=n(205),f=n(8),v=n(9),d=n(25),h=function(e){var t=e.children,n=e.tw,a=void 0===n?"":n,o=Object(u.a)(e,["children","tw"]);return r.a.createElement("div",Object.assign({className:"text-center align-middle text-lg ".concat(a)},o),r.a.createElement("p",null,t))},b=function(e){var t=e.text,n=e.children,a=e.xtra,o=e.measure,c=Object(u.a)(e,["text","children","xtra","measure"]);return r.a.createElement("div",{className:"w-full h-screen flex flex-col"},r.a.createElement("div",Object.assign({ref:o,className:"flex-auto"},c),r.a.createElement(v.a,null,r.a.createElement("ambientLight",null),r.a.createElement("pointLight",{position:[10,10,10]}),n,r.a.createElement(d.c,null))),r.a.createElement("div",{className:"py-2"},a&&a,t&&r.a.createElement(h,null,t)))},p=function(){var e=Object(a.useRef)(),t=Object(a.useState)(!1),n=Object(f.a)(t,2),o=n[0],c=n[1];return Object(v.d)((function(){return e.current.rotation.x=e.current.rotation.y+=.01})),r.a.createElement("mesh",{ref:e,scale:o?[1.5,1.5,1.5]:[1,1,1],onPointerOver:function(){return c(!0)},onPointerOut:function(){return c(!1)}},r.a.createElement("boxBufferGeometry",{attach:"geometry",args:[2,2,2]}),r.a.createElement("meshStandardMaterial",{attach:"material",color:o?"hotpink":"orange"}),r.a.createElement(d.a,null))},g=function(){return r.a.createElement(b,{text:"Simple box geometry with hover event."},r.a.createElement(p,null))},x=n(0),y=n(21),E=101,j=function(e,t){for(var n=t*e,a=new Array(t*e),r=new Array(t*e),o=new Array(t*e),c=0,l=0;c<e;++c)for(var u=0;u<t;++u,++l)r[l]=u,o[l]=25*Math.sin(u*Math.PI/50)+c,a[l]=Math.pow(r[l]-50,2)+Math.pow(o[l]-50,2);return{xgrid:r,ygrid:o,values:a,nverts:n}}(101,E),O=j.xgrid,_=j.ygrid,S=j.values,w=j.nverts,M=Object(y.b)(O),z=Object(f.a)(M,2),C=z[0],U=z[1],F=.5*(C+U),A=U-C,P=Object(y.b)(_),k=Object(f.a)(P,2),N=k[0],B=k[1],G=.5*(N+B),D=B-N,T=Object(y.b)(S),R=Object(f.a)(T,2),V=R[0],I=R[1],L=.5*(V+I),q=I-V,H=1.2/Math.max(A,D),K=.5/q,X=Object(y.d)().domain(Object(y.b)(S)).interpolate((function(){return y.c})),J=function(){var e=Object(a.useMemo)((function(){for(var e=[],t=[],n=0;n<w;n++){e.push((O[n]-F)*H),e.push((_[n]-G)*H),e.push((S[n]-L)*K);var a=Object(y.a)(X(S[n]));t.push(a.r/255,a.g/255,a.b/255)}return[new Float32Array(e),new Float32Array(t)]}),[]),t=Object(f.a)(e,2),n=t[0],o=t[1],c=Object(a.useMemo)((function(){for(var e=[],t=0;t<100;t++)for(var n=0;n<100;n++){var a=t*E+n,r=a+1,o=(t+1)*E+n+1,c=o-1;e.push(a,r,o),e.push(o,c,a)}return new Uint16Array(e)}),[]);return r.a.createElement("mesh",{"rotation-x":-Math.PI/2,scale:[4,4,4]},r.a.createElement("bufferGeometry",{attach:"geometry",onUpdate:function(e){e.computeFaceNormals(),e.computeVertexNormals()}},r.a.createElement("bufferAttribute",{attachObject:["attributes","position"],count:n.length/3,array:n,itemSize:3}),r.a.createElement("bufferAttribute",{attachObject:["attributes","color"],count:o.length/3,array:o,itemSize:3}),r.a.createElement("bufferAttribute",{attach:"index",count:c.length,array:c,itemSize:1})),r.a.createElement("meshPhongMaterial",{attach:"material",side:x.DoubleSide,vertexColors:!0}),r.a.createElement(d.a,null))},W=function(){return r.a.createElement(b,{text:"Surface plot using vertex and faces, colored with d3."},r.a.createElement(J,null))},Q=function(e,t){for(var n=t*e,a=new Array(t*e),r=new Array(t*e),o=new Array(t*e),c=0,l=0;c<e;++c)for(var u=0;u<t;++u,++l)r[l]=u,o[l]=25*Math.sin(u*Math.PI/50)+c,a[l]=Math.pow(r[l]-50,2)+Math.pow(o[l]-50,2);return{xgrid:r,ygrid:o,values:a,nverts:n}}(101,101),Y=Q.xgrid,Z=Q.ygrid,$=Q.values,ee=Q.nverts,te=Object(y.b)(Y),ne=Object(f.a)(te,2),ae=ne[0],re=ne[1],oe=.5*(ae+re),ce=re-ae,le=Object(y.b)(Z),ue=Object(f.a)(le,2),ie=ue[0],me=ue[1],se=.5*(ie+me),fe=me-ie,ve=Object(y.b)($),de=Object(f.a)(ve,2),he=de[0],be=de[1],pe=.5*(he+be),ge=be-he,xe=1.2/Math.max(ce,fe),ye=.5/ge,Ee=Object(y.d)().domain(Object(y.b)($)).interpolate((function(){return y.c})),je=function(){var e=Object(a.useMemo)((function(){for(var e=[],t=[],n=0;n<ee;n++){e.push((Y[n]-oe)*xe),e.push((Z[n]-se)*xe),e.push(($[n]-pe)*ye);var a=Object(y.a)(Ee($[n]));t.push(a.r/255,a.g/255,a.b/255)}return[new Float32Array(e),new Float32Array(t)]}),[]),t=Object(f.a)(e,2),n=t[0],o=t[1],c=Object(a.useMemo)((function(){for(var e=[],t=0;t<100;t++)for(var n=0;n<100;n++){var a=101*t+n,r=a+1,o=101*(t+1)+n+1,c=o-1;e.push(a,r,o),e.push(o,c,a)}return new Uint16Array(e)}),[]),l=Object(a.useMemo)((function(){return{vertexShader:"\n  varying float z;\n\n  void main() {\n    vec3 pos = position;\n    z = 0.41 + pos.z*1.5;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n  }\n",fragmentShader:"\n  varying float z;\n  \n  void main() {\n    gl_FragColor = vec4(z, cos(z*200.0), cos(z*100.0), 1.0);\n  }\n"}}),[]);return r.a.createElement("mesh",{"rotation-x":-Math.PI/2,scale:[4,4,4]},r.a.createElement("bufferGeometry",{attach:"geometry",onUpdate:function(e){e.computeFaceNormals(),e.computeVertexNormals()}},r.a.createElement("bufferAttribute",{attachObject:["attributes","position"],count:n.length/3,array:n,itemSize:3}),r.a.createElement("bufferAttribute",{attachObject:["attributes","color"],count:o.length/3,array:o,itemSize:3}),r.a.createElement("bufferAttribute",{attach:"index",count:c.length,array:c,itemSize:1})),r.a.createElement("shaderMaterial",Object.assign({attach:"material"},l,{side:x.DoubleSide})),r.a.createElement(d.a,null))},Oe=function(){return r.a.createElement(b,{text:"Surface plot using vertex and faces, colored with a custom fragment shader."},r.a.createElement(je,null))},_e=n(22),Se=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useMemo)((function(){return{vertexShader:"\n  attribute float displacement;\n  varying float z;\n\n  void main() {\n    vec3 pos = position;\n    z = pos.z;\n    pos.x += (displacement/1.0);\n    // pos.y += cos(displacement/2.0);\n    // pos.y += fract(displacement/2.0);\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n  }\n",fragmentShader:"\n  uniform float delta;\n  varying float z;\n  \n  void main() {\n    gl_FragColor = vec4(z*0.5, 0.5 + cos(delta)*0.25, sin(delta), 1.0);\n  }\n",uniforms:{delta:{value:0}}}}),[]),o=Object(a.useState)(),c=Object(f.a)(o,2),l=c[0],u=c[1],i=Object(a.useCallback)((function(e){if(!l){var t=e.attributes.position.count,n=new Float32Array(t);u(n)}}),[l]),m=Object(_e.b)("Color speed",{type:"number",value:.1,max:10}),s=Object(_e.b)("Distortion lvl",{type:"number",value:0,max:1});return Object(v.d)((function(){e.current.rotation.x=e.current.rotation.y+=.01,n.uniforms.delta.value+=m;for(var a=0;a<l.length;a++)l[a]=Math.random()*s;t.current.attributes.displacement.needsUpdate=!0})),r.a.createElement("mesh",{ref:e},r.a.createElement("boxBufferGeometry",{ref:t,attach:"geometry",args:[3,3,3],onUpdate:function(e){return i(e)}},l&&r.a.createElement("bufferAttribute",{attachObject:["attributes","displacement"],count:l.length,array:l,itemSize:1})),r.a.createElement("shaderMaterial",Object.assign({attach:"material"},n)),r.a.createElement(d.a,null))},we=function(){return r.a.createElement(b,{text:"Testing the use of shaders.",xtra:r.a.createElement(_e.a,null)},r.a.createElement(Se,null))},Me=n(18),ze=function(){var e=Object(a.useRef)(),t=Object(_e.b)("width",{type:"number",value:5,min:1,max:10}),n=Object(_e.b)("height",{type:"number",value:5,min:1,max:10}),o=Object(_e.b)("width segments",{type:"number",value:10,min:2,max:100}),c=Object(_e.b)("height segments",{type:"number",value:10,min:2,max:100}),l=Object(_e.b)("max elevation",{type:"number",value:.25,min:0,max:2}),u=Object(_e.b)("wireframe",{type:"boolean",value:!1}),i=Object(a.useState)([]),m=Object(f.a)(i,2),s=m[0],v=m[1],h=Object(a.useCallback)((function(e){for(var t=e.attributes.position.array,n=0;n<t.length;n++)n%3===2&&(t[n]=Math.random()*l);if(s&&s.length===t.length)e.setAttribute("color",new x.Float32BufferAttribute(s,3));else{var a=Object(Me.a)(t.filter((function(e,t){return t%3===2}))),r=Object(y.d)().domain(Object(y.b)(a)).interpolate((function(){return y.c})),o=[];a.forEach((function(e){var t=Object(y.a)(r(e));o.push(t.r/255,t.g/255,t.b/255)})),v((function(){return e.setAttribute("color",new x.Float32BufferAttribute(o,3)),o}))}}),[s,l]);return Object(a.useEffect)((function(){h(e.current),e.current.attributes.position.needsUpdate=!0}),[l,h]),r.a.createElement("mesh",{"rotation-x":-Math.PI/2,"position-y":-1.5},r.a.createElement("planeBufferGeometry",{ref:e,attach:"geometry",args:[t,n,o,c],onUpdate:function(e){return h(e)}}),r.a.createElement("meshPhongMaterial",{attach:"material",side:x.DoubleSide,wireframe:u,vertexColors:!0}),r.a.createElement(d.a,null))},Ce=function(){return r.a.createElement(b,{text:"Using a plane buffer geometry to show a surface plot, with colors given by d3.",xtra:r.a.createElement(_e.a,null)},r.a.createElement(ze,null))},Ue=function(){var e=Object(a.useRef)(),t=Object(_e.b)("width",{type:"number",value:5,min:1,max:10}),n=Object(_e.b)("height",{type:"number",value:5,min:1,max:10}),o=Object(_e.b)("width segments",{type:"number",value:10,min:2,max:100}),c=Object(_e.b)("height segments",{type:"number",value:10,min:2,max:100}),l=Object(_e.b)("max elevation",{type:"number",value:.35,min:0,max:2}),u=Object(_e.b)("wireframe",{type:"boolean",value:!1}),i=Object(a.useCallback)((function(e){for(var t=e.attributes.position.array,n=0;n<t.length;n++)n%3===2&&(t[n]=Math.random()*l)}),[l]);Object(a.useEffect)((function(){i(e.current),e.current.attributes.position.needsUpdate=!0}),[l,i]);var m=Object(a.useMemo)((function(){return{vertexShader:"\n  varying float z;\n\n  void main() {\n    vec3 pos = position;\n    z = pos.z;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n  }\n",fragmentShader:"\n  varying float z;\n  \n  void main() {\n    gl_FragColor = vec4(z, 0.1, 0.3, 1.0);\n  }\n"}}),[]);return r.a.createElement("mesh",{"rotation-x":-Math.PI/2,"position-y":-1.5},r.a.createElement("planeBufferGeometry",{ref:e,attach:"geometry",args:[t,n,o,c],onUpdate:function(e){return i(e)}}),r.a.createElement("shaderMaterial",Object.assign({attach:"material"},m,{side:x.DoubleSide,wireframe:u})),r.a.createElement(d.a,null))},Fe=function(){return r.a.createElement(b,{text:"Using a plane buffer geometry to show a surface plot, with colors given by a fragment shader.",xtra:r.a.createElement(_e.a,null)},r.a.createElement(Ue,null))},Ae=function(){var e=Object(v.g)(),t=e.mouse,n=e.clock,o=Object(a.useMemo)((function(){return{vertexShader:"\n  varying vec2 vuv;\n\n  void main() {\n    vuv = uv;\n    gl_Position = vec4( position, 1.0 );\n  }\n",fragmentShader:"\n  uniform float u_time;\n  uniform vec2 u_mouse;\n  varying vec2 vuv;\n\n  void main() {\n    vec2 st = vuv;\n    st.y += sin(u_time) * 0.05;\n    vec2 mouse = (u_mouse + 1.0) / 2.0;\n    gl_FragColor = vec4(st.x, st.y, (mouse.x + mouse.y) / 2.0, 1.0);\n  }\n",uniforms:{u_time:{value:0},u_mouse:{value:t}}}}),[t]);return Object(v.d)((function(){o.uniforms.u_time.value+=n.elapsedTime/1e3})),r.a.createElement("mesh",null,r.a.createElement("planeBufferGeometry",{attach:"geometry",args:[2,2]}),r.a.createElement("shaderMaterial",Object.assign({attach:"material"},o)))},Pe=function(){return r.a.createElement(b,{text:"Basic template to play with shaders."},r.a.createElement(Ae,null))},ke=n(38),Ne=n(40),Be=function(e){var t=e.bounds,n=Object(v.g)().mouse,o=Object(a.useMemo)((function(){return{vertexShader:"\n  void main() {\n    gl_Position = vec4( position, 1.0 );\n  }\n",fragmentShader:"\n  uniform float u_time;\n  uniform vec2 u_resolution;\n  uniform vec2 u_mouse;\n\n  void main() {\n    vec2 st = gl_FragCoord.xy/u_resolution.xy;\n    vec3 color = vec3(0.0);\n    vec2 mouse = u_mouse;\n\n    // Borders\n    // vec2 bl = smoothstep(0.05, 0.5, st);\n    // float pct = bl.x * bl.y;\n    // vec2 tr = step(0.05, 1.0 - st);\n    // pct *= tr.x * tr.y;\n    // color = vec3(pct);\n\n    // Circle\n    // float pct = distance(st, vec2(0.5));\n    // color = vec3(pct);\n\n    // Repeating circles\n    float d = 0.0;\n    st = st * 2. - 1.; // normalize between 0-1\n    st.x -= mouse.x;\n    // st.y -= mouse.y;\n    st.y = step(1.0, st.y);\n    // st.y = smoothstep(-1.0, 1.0, st.y);\n    d = length( abs(st) - sin(u_time/20.0) );\n    color = vec3(st.x, st.y + mouse.y*0.25, 0.0);\n    color.b += (mouse.x + 1.0) / 2.0 * 0.35;\n    color += fract(d*12.0);\n\n    gl_FragColor=vec4(color, 1.0);\n  }\n",uniforms:{u_time:{value:0},u_resolution:{value:new x.Vector2},u_mouse:{value:n}}}}),[n]);return Object(a.useEffect)((function(){o.uniforms.u_resolution.value.x=t.width,o.uniforms.u_resolution.value.y=t.height}),[t,o]),Object(v.d)((function(){o.uniforms.u_time.value+=.05})),r.a.createElement("mesh",null,r.a.createElement("planeBufferGeometry",{attach:"geometry",args:[2,2]}),r.a.createElement("shaderMaterial",Object.assign({attach:"material"},o)))},Ge=function(){var e=Object(ke.a)({polyfill:Ne.a}),t=Object(f.a)(e,2),n=t[0],a=t[1];return r.a.createElement(b,{text:"Playing with shapes on shaders.",measure:n},r.a.createElement(Be,{bounds:a}))},De=function(e){var t=e.bounds,n=Object(v.g)().mouse,o=Object(a.useMemo)((function(){return{vertexShader:"\n  void main() {\n    gl_Position = vec4( position, 1.0 );\n  }\n",fragmentShader:"\n  uniform float u_time;\n  uniform vec2 u_resolution;\n  uniform vec2 u_mouse;\n\n  const mat2 m = mat2( 0.80,  0.60, -0.60,  0.80 );\n\n  float hash( vec2 p ) {\n    float h = dot(p,vec2(127.1,311.7));\n    return -1.0 + 2.0*fract(sin(h)*43758.5453123);\n  }\n\n  float noise( in vec2 p ) {\n    vec2 i = floor( p );\n    vec2 f = fract( p );\n    vec2 u = f*f*(3.0-2.0*f);\n\n    return mix( mix( hash( i + vec2(0.0,0.0) ), \n                    hash( i + vec2(1.0,0.0) ), u.x),\n                mix( hash( i + vec2(0.0,1.0) ), \n                    hash( i + vec2(1.0,1.0) ), u.x), u.y);\n  }\n\n  float fbm( vec2 p )\n  {\n      float f = 0.0;\n      f += 0.5000*noise( p ); p = m*p*2.02;\n      f += 0.2500*noise( p ); p = m*p*2.03;\n      f += 0.1250*noise( p ); p = m*p*2.01;\n      f += 0.0625*noise( p );\n      return f/0.9375;\n  }\n\n  vec2 fbm2( in vec2 p )\n  {\n      return vec2( fbm(p.xy), fbm(p.yx) );\n  }\n\n  vec3 map( vec2 p )\n  {   \n      p *= 0.7;\n      float t = u_time * ( 1.0 + 2. * distance(u_mouse, vec2(0.0)));\n\n      float f = dot( fbm2( 1.0*(0.05*t + p + fbm2(-0.05*t+2.0*(p + fbm2(4.0*p)))) ), vec2(1.0,-1.0) );\n\n      float bl = smoothstep( -0.8, 0.8, f );\n\n      float ti = smoothstep( -1.0, 1.0, fbm(p) );\n\n      return mix( mix( vec3(0.50,0.00,0.00), \n                       vec3(1.00,0.75,0.35), ti ), \n                       vec3(0.00,0.00,0.02), bl );\n  }\n\n  void main() {\n    vec2 p = (-u_resolution.xy+2.0*gl_FragCoord.xy)/u_resolution.y;\n\n    float e = 0.0045;\n\n    vec3 colc = map( p               ); float gc = dot(colc,vec3(0.433));\n    vec3 cola = map( p + vec2(e,0.0) ); float ga = dot(cola,vec3(0.333));\n    vec3 colb = map( p + vec2(0.0,e) ); float gb = dot(colb,vec3(0.333));\n    \n    vec3 nor = normalize( vec3(ga-gc, e, gb-gc ) );\n\n    vec3 col = colc;\n    col += vec3(1.0,0.7,0.6)*8.0*abs(2.0*gc-ga-gb);\n    col *= 1.0+0.2*nor.y*nor.y;\n    col += 0.05*nor.y*nor.y*nor.y;\n    \n    \n    vec2 q = gl_FragCoord.xy/u_resolution.xy;\n    col *= pow(16.0*q.x*q.y*(1.0-q.x)*(1.0-q.y),0.1);\n    vec2 m = (u_mouse.xy + 1.0 ) / 2.0;\n    col.r *= m.x;\n    col.g *= m.y;\n    \n    gl_FragColor = vec4( col, 1.0 );\n  }\n",uniforms:{u_time:{value:0},u_resolution:{value:new x.Vector2},u_mouse:{value:n}}}}),[n]);return Object(a.useEffect)((function(){o.uniforms.u_resolution.value.x=t.width,o.uniforms.u_resolution.value.y=t.height}),[t,o]),Object(v.d)((function(){o.uniforms.u_time.value+=.05})),r.a.createElement("mesh",null,r.a.createElement("planeBufferGeometry",{attach:"geometry",args:[2,2]}),r.a.createElement("shaderMaterial",Object.assign({attach:"material"},o)))},Te=function(){return r.a.createElement(h,null,"A more complex test (inspired by"," ",r.a.createElement("a",{className:"font-semibold",href:"https://www.shadertoy.com/view/MdSXzz",target:"_black"},"this work"),").")},Re=function(){var e=Object(ke.a)({polyfill:Ne.a}),t=Object(f.a)(e,2),n=t[0],a=t[1];return r.a.createElement(b,{xtra:r.a.createElement(Te,null),measure:n},r.a.createElement(De,{bounds:a}))},Ve=n(91),Ie=n.n(Ve),Le=function(e){var t=e.children,n=e.handleUpload,o=void 0===n?function(){}:n,c=Object(u.a)(e,["children","handleUpload"]),l=Object(a.useRef)();return r.a.createElement("div",{className:"inline text-sm"},r.a.createElement("input",{ref:l,type:"file",className:"hidden",accept:"image/*",onChange:o}),r.a.createElement("button",Object.assign({},c,{onClick:function(){return l.current.click()}}),t))},qe=function(e){var t=(new x.TextureLoader).load(e);return t.wrapS=x.RepeatWrapping,t.wrapT=x.RepeatWrapping,t},He=function(e){var t=e.bounds,n=e.textureUrl,o=Object(v.g)().mouse,c=Object(a.useMemo)((function(){return qe(Ie.a)}),[]),l=Object(a.useMemo)((function(){return{vertexShader:"\n  void main() {\n    gl_Position = vec4( position, 1.0 );\n  }\n",fragmentShader:"\n  uniform float u_time;\n  uniform vec2 u_resolution;\n  uniform vec2 u_mouse;\n  uniform sampler2D u_texture;\n\n  vec2 N(float angle) {\n    return vec2(sin(angle), cos(angle));\n  }\n\n  void main() {\n    vec2 uv = (gl_FragCoord.xy - 0.5*u_resolution) / u_resolution.y;\n    vec2 mouse = (u_mouse + 1.0) / 2.0;\n\n    uv *= 1.5; // zoom \n    vec3 col = vec3(0.0);\n\n    uv.x = abs(uv.x); // reflect x coords\n\n    // shift y coord to center the graph\n    // tan(a) = y / 0.5 -> y = tan(a)*0.5\n    uv.y += tan(5.0/6.0*3.1415) * 0.5;\n\n    // setup a reflection over an angle\n    vec2 n = N(5.0/6.0*3.1415); // reflection angle\n    float d = dot(uv - vec2(0.5, 0.0), n); // vec2 sets the reflection point\n    uv -= max(0.0, d)*n*2.0;\n\n    // col += smoothstep(0.01, 0.0, abs(d)); // a line\n\n    n = N(u_mouse.y * (2.0/3.0) * 3.1415);\n    uv.x += 0.5; // compensates the 1st step on for loop ( + 1.5/3)\n    float scale = 2.0; // track the width of the lines\n\n    for(int i=0; i<10; i++) {\n      scale *= 3.0;\n      uv *= 3.0;\n      uv.x -= 1.5;\n\n      uv.x = abs(uv.x); // reflect x coords\n      uv.x -= 0.5;\n      uv -= min(0.0, dot(uv, n))*n*2.0; // reflection over angle\n      uv *= 0.9 + mouse.x * 0.1;\n    }\n\n    d = length(uv - vec2(clamp(uv.x, -1.0, 1.0), 0.0));\n    col += smoothstep(2.0 / u_resolution.y, 0.0, d/scale);\n    uv /= scale; // normalize\n    col += texture2D(u_texture, uv*2.0 + u_time*0.03).rgb;\n\n    gl_FragColor=vec4(col, 1.0);\n  }\n",uniforms:{u_time:{value:0},u_resolution:{value:new x.Vector2},u_mouse:{value:o},u_texture:{value:c}}}}),[o,c]);return Object(a.useEffect)((function(){n&&(l.uniforms.u_texture.value=qe(n))}),[n,l]),Object(a.useEffect)((function(){l.uniforms.u_resolution.value.x=t.width,l.uniforms.u_resolution.value.y=t.height}),[t,l]),Object(v.d)((function(){l.uniforms.u_time.value+=.05})),r.a.createElement("mesh",null,r.a.createElement("planeBufferGeometry",{attach:"geometry",args:[2,2]}),r.a.createElement("shaderMaterial",Object.assign({attach:"material"},l)))},Ke=function(e){var t=e.handleUpload;return r.a.createElement(h,null,"Example of a Koch Snowflake fractal pattern, try a custom texture:",r.a.createElement(Le,{handleUpload:t},"Upload texture"))},Xe=function(){var e=Object(ke.a)({polyfill:Ne.a}),t=Object(f.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(),l=Object(f.a)(c,2),u=l[0],i=l[1];return r.a.createElement(b,{xtra:r.a.createElement(Ke,{handleUpload:function(e){var t=URL.createObjectURL(e.target.files[0]);i(t)}}),measure:n},r.a.createElement(He,{bounds:o,textureUrl:u}))},Je=function(e){var t=e.bounds,n=Object(v.g)().mouse,o=Object(a.useMemo)((function(){return{vertexShader:"\n  void main() {\n    gl_Position = vec4(position, 1.0);\n  }\n",fragmentShader:"\n  uniform float u_time;\n  uniform vec2 u_resolution;\n  uniform vec2 u_mouse;\n  varying vec3 pos;\n\n  void main() {\n    vec2 uv = (gl_FragCoord.xy - 0.5*u_resolution) / u_resolution.y;\n    vec2 mouse = (u_mouse + 1.0) / 2.0;\n    float zoom = pow(10.0, 5.0 * (0.1 - mouse.y));\n\n    vec2 c = uv*zoom*2.8;\n    c += vec2(-0.69955, 0.37999);\n\n    vec2 z = vec2(0.0);\n    float iter = 0.0;\n\n    float ma = 100.0;\n    const float max_iter = 100.0;\n\n    for(float i=0.0; i<max_iter; i++) {\n      z = vec2(z.x*z.x - z.y*z.y, 2.0*z.x*z.y) + c; // z^2 of a complex number\n      // ma = distance(z, mouse)*mouse.x*0.5;\n      // z *= mouse.x;\n      if(length(z) > 2.0) break;\n      iter++;\n    }\n\n    float f = iter/max_iter;\n    // f = ma;\n\n    vec3 col = vec3(f);\n    vec2 t = vec2(sin(u_time*0.1), cos(u_time*0.15))*0.5;\n    col.rb += gl_FragCoord.xy / u_resolution * 0.5 + t;\n    gl_FragColor=vec4(col, 1.0);\n  }\n",uniforms:{u_time:{value:0},u_resolution:{value:new x.Vector2},u_mouse:{value:n}}}}),[n]);return Object(a.useEffect)((function(){o.uniforms.u_resolution.value.x=t.width,o.uniforms.u_resolution.value.y=t.height}),[t,o]),Object(v.d)((function(){o.uniforms.u_time.value+=.05})),r.a.createElement("mesh",null,r.a.createElement("planeBufferGeometry",{attach:"geometry",args:[2,2]}),r.a.createElement("shaderMaterial",Object.assign({attach:"material"},o)))},We=function(){var e=Object(ke.a)({polyfill:Ne.a}),t=Object(f.a)(e,2),n=t[0],o=t[1];return r.a.createElement(b,{text:"Example of a MandelBrot fractal pattern.",measure:n},r.a.createElement(Je,{bounds:o}),r.a.createElement(a.Suspense,{fallback:null},r.a.createElement(d.b,{bloom:!1,ao:!1,smaa:!0})))},Qe=function(){var e=Object(v.g)(),t=e.mouse,n=e.clock,o=Object(v.f)(),c=Object(f.a)(o,2),l=c[0],u=c[1],i=Object(a.useMemo)((function(){if(!u)return{randomDirections:void 0,randomStrengths:void 0};for(var e=u.getAttribute("position").count/3,t=new x.Vector3,n=[],a=[],r=0;r<e;r++){var o=t.set.apply(t,Object(Me.a)(Array(3).fill().map((function(){return Math.random()})))).multiplyScalar(2).subScalar(1).normalize().toArray();n.push.apply(n,Object(Me.a)(Array(3).fill(o).flat())),a.push.apply(a,Object(Me.a)(Array(3).fill(Math.random())))}return{randomDirections:new Float32Array(n),randomStrengths:new Float32Array(a)}}),[u]),m=i.randomDirections,s=i.randomStrengths,d=Object(a.useMemo)((function(){return{vertexShader:"\n  attribute vec3 randomDirections;\n  attribute float randomStrength;\n  uniform float u_explosion;\n  uniform vec2 u_mouse;\n  varying vec2 vUv;\n  varying vec3 vPos;\n\n  void main() {\n    vUv = uv;\n    vPos = position;\n    vec3 pos = position;\n    pos += randomDirections * randomStrength * pow(u_explosion*1.5, 2.0);\n    // pos += randomDirections * randomStrength * distance(u_mouse, vec2(0.0));\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n  }\n",fragmentShader:"\n  uniform float u_time;\n  uniform vec2 u_mouse;\n  varying vec2 vUv;\n  varying vec3 vPos;\n\n  void main() {\n    vec3 col = normalize(vPos) * 0.5 + 0.5;\n    gl_FragColor = vec4(col, 1.0);\n    // vec2 st = vUv;\n    // st.y += sin(u_time) * 0.05;\n    // vec2 mouse = (u_mouse + 1.0) / 2.0;\n    // gl_FragColor = vec4(st.x, st.y, (mouse.x + mouse.y) / 2.0, 1.0);\n  }\n",uniforms:{u_explosion:{value:1},u_mouse:{value:t}}}}),[t]);return Object(v.d)((function(){d.uniforms.u_explosion.value=.5*Math.sin(n.elapsedTime/1.5-Math.PI/4)+.5})),r.a.createElement("mesh",null,r.a.createElement("icosahedronBufferGeometry",{ref:l,attach:"geometry",args:[1.5,6]},m&&r.a.createElement("bufferAttribute",{attachObject:["attributes","randomDirections"],count:m.length/3,array:m,itemSize:3}),s&&r.a.createElement("bufferAttribute",{attachObject:["attributes","randomStrength"],count:s.length,array:s,itemSize:1})),r.a.createElement("shaderMaterial",Object.assign({attach:"material",side:x.DoubleSide},d)))},Ye=function(){return r.a.createElement(b,{text:"An exploding sphere using vertex shaders."},r.a.createElement(Qe,null),r.a.createElement(d.a,null))},Ze=n(123),$e=n(203),et=n.n($e),tt=n(128),nt=n(124),at=(n(404),function(e){var t=e.vertexShaderCode,n=e.fragmentShaderCode,o=(e.bounds,e.textureUrl),c=Object(v.g)(),l=c.mouse,u=c.clock,i=c.aspect,m=Object(a.useMemo)((function(){return qe(Ie.a)}),[]),s=Object(v.h)((function(e){e.vertexShader=t,e.fragmentShader=n,e.needsUpdate=!0}),[t,n]),f=Object(a.useMemo)((function(){return{u_time:{value:0},u_aspect:{value:1},u_resolution:{value:new x.Vector2},u_mouse:{value:l},u_texture:{value:m}}}),[l,m]);return Object(a.useEffect)((function(){f.u_aspect.value=i}),[i,f]),Object(a.useEffect)((function(){o&&(f.u_texture.value=qe(o))}),[o,f]),Object(v.d)((function(){f.u_time.value+=u.elapsedTime/1e3})),r.a.createElement("mesh",null,r.a.createElement("planeBufferGeometry",{attach:"geometry",args:[2,2]}),r.a.createElement("shaderMaterial",{ref:s,attach:"material",uniforms:f}))}),rt=function(e){var t=e.code,n=e.setCode,o=e.className,c=void 0===o?"":o,l=Object(u.a)(e,["code","setCode","className"]),i=Object(a.useCallback)((function(e){return r.a.createElement(tt.a,Object.assign({},tt.b,{theme:nt.a,code:e,language:"jsx"}),(function(e){var t=e.tokens,n=e.getLineProps,a=e.getTokenProps;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement("div",n({line:e,key:t}),r.a.createElement(r.a.Fragment,null,e.map((function(e,t){return r.a.createElement("span",Object.assign({key:t},a({token:e,key:t})))}))))})))}))}),[]);return r.a.createElement(et.a,{value:t,onValueChange:n,highlight:i,padding:10,textareaClassName:"editor-text-area",className:c,style:Object(Ze.a)(Object(Ze.a)({fontSize:"0.8em",overflow:"auto",boxSizing:"border-box",fontFamily:'"Dank Mono", "Fira Code", monospace'},nt.a.plain),l)})},ot=function(e){var t=e.handleUpload;return r.a.createElement(h,null,"A simple shader code editor.",r.a.createElement(Le,{handleUpload:t},"Upload texture"))},ct=function(){var e=Object(a.useState)(),t=Object(f.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)("varying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = vec4(position, 1.0 );\n}"),l=Object(f.a)(c,2),u=l[0],i=l[1],m=Object(a.useState)("varying vec2 vUv;\nuniform float u_time;\nuniform float u_aspect;\nuniform vec2 u_mouse;\nuniform sampler2D u_texture;\n\nvoid main() {\n  vec2 uv = vUv - 0.5;\n  uv.x *= u_aspect;\n  vec2 mouse = (u_mouse + 1.0) / 2.0; // 0-1\n\n  uv *= 1.0; // control zoom \n  vec3 col = vec3(0.0);\n\n\n  // Circle\n  vec2 center = vec2(0.0);\n  float r = 0.1;\n  // r = 0.1 + sin(u_time)*0.02; // using time\n  // center = clamp(u_mouse, -0.5, 0.5); // using mouse\n  float pct = distance(uv, center);\n  col += smoothstep(r, r-0.001, pct);\n\n  // col += texture2D(u_texture, vUv).rgb; // texture example\n\n  gl_FragColor=vec4(col, 1.0);\n}"),s=Object(f.a)(m,2),v=s[0],d=s[1];return r.a.createElement("div",{className:"w-full grid grid-cols-6 grid-flow-row"},r.a.createElement("div",{className:"row-span-2 col-span-3 xl:col-span-4"},r.a.createElement(b,{xtra:r.a.createElement(ot,{handleUpload:function(e){var t=URL.createObjectURL(e.target.files[0]);o(t)}})},r.a.createElement(at,{vertexShaderCode:u,fragmentShaderCode:v,textureUrl:n}))),r.a.createElement("div",{className:"col-span-3 xl:col-span-2"},r.a.createElement(rt,{code:u,className:"h-screen-49",setCode:i})),r.a.createElement("div",{className:"col-span-3 xl:col-span-2"},r.a.createElement(rt,{code:v,className:"h-screen-49",setCode:d})))};n(405);function lt(){var e=Object(l.a)(["\n  position: absolute;\n  display: flex;\n  flex-wrap: wrap;\n  flex-flow: column;\n  justify-content: space-between;\n  margin-top: 3rem;\n  padding: 1em 1em;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 100;\n  transition: all 0.2s ease-out;\n\n  ","\n"]);return lt=function(){return e},e}var ut=function(e){var t=e.children,n=Object(u.a)(e,["children"]);return r.a.createElement(i.b,Object.assign({className:"pb-1",activeClassName:"text-gray-400 hover:text-gray-400 font-bold",exact:!0},n),t)},it=s.a.div(lt(),(function(e){return!e.isHome&&"\n    border-right: rgba(20, 20, 20, 0.6) 1.0rem solid;\n    transform: translateX(calc(80px - 100%));\n    padding-right: 80px;\n\n    &:hover {\n      transform: translateX(0px);\n      padding-right: 1em;\n      border-right: rgba(0, 0, 0, 0.0) 1.0rem solid;\n    }"})),mt=function(){return r.a.createElement("div",{className:"pt-10 text-center"},r.a.createElement("h1",null,"Threejs Playground"),r.a.createElement("p",{className:"mt-10"},"Made by: Renato Hermoza, check the"," ",r.a.createElement("a",{href:"https://github.com/renato145/threejs_playground/",target:"_black"},"source code"),"."))},st=function(){var e="/"===Object(m.f)().pathname;return r.a.createElement(r.a.Fragment,null,r.a.createElement(it,{isHome:e},r.a.createElement(ut,{to:"/"},"Home"),r.a.createElement(ut,{to:"/BoxGeometry"},"BoxGeometry"),r.a.createElement(ut,{to:"/SurfaceD3"},"SurfaceD3"),r.a.createElement(ut,{to:"/SurfaceShader"},"SurfaceShader"),r.a.createElement(ut,{to:"/TestShader"},"TestShader"),r.a.createElement(ut,{to:"/PlaneGeometry"},"PlaneGeometry"),r.a.createElement(ut,{to:"/PlaneGeometryShader"},"PlaneGeometryShader"),r.a.createElement(ut,{to:"/ShaderTemplate"},"ShaderTemplate"),r.a.createElement(ut,{to:"/ShaderShapes"},"ShaderShapes"),r.a.createElement(ut,{to:"/ShaderTexture"},"ShaderTexture"),r.a.createElement(ut,{to:"/FractalKoch"},"FractalKoch"),r.a.createElement(ut,{to:"/FractalMandelBrot"},"FractalMandelBrot"),r.a.createElement(ut,{to:"/ExplodingSphere"},"ExplodingSphere"),r.a.createElement(ut,{to:"/ShaderEditor"},"ShaderEditor"),r.a.createElement("a",{href:"https://github.com/renato145/threejs_playground/",target:"_black"},"Source Code")),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(mt,null)),r.a.createElement(m.a,{path:"/BoxGeometry"},r.a.createElement(g,null)),r.a.createElement(m.a,{path:"/SurfaceD3"},r.a.createElement(W,null)),r.a.createElement(m.a,{path:"/SurfaceShader"},r.a.createElement(Oe,null)),r.a.createElement(m.a,{path:"/TestShader"},r.a.createElement(we,null)),r.a.createElement(m.a,{path:"/PlaneGeometry"},r.a.createElement(Ce,null)),r.a.createElement(m.a,{path:"/PlaneGeometryShader"},r.a.createElement(Fe,null)),r.a.createElement(m.a,{path:"/ShaderTemplate"},r.a.createElement(Pe,null)),r.a.createElement(m.a,{path:"/ShaderShapes"},r.a.createElement(Ge,null)),r.a.createElement(m.a,{path:"/ShaderTexture"},r.a.createElement(Re,null)),r.a.createElement(m.a,{path:"/FractalKoch"},r.a.createElement(Xe,null)),r.a.createElement(m.a,{path:"/FractalMandelBrot"},r.a.createElement(We,null)),r.a.createElement(m.a,{path:"/ExplodingSphere"},r.a.createElement(Ye,null)),r.a.createElement(m.a,{path:"/ShaderEditor"},r.a.createElement(ct,null))))},ft=function(){return r.a.createElement(i.a,{basename:"/"},r.a.createElement(st,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ft,null)),document.getElementById("root"))},91:function(e,t,n){e.exports=n.p+"static/media/texture1.72757f21.png"}},[[230,1,2]]]);
//# sourceMappingURL=main.91c6f9b9.chunk.js.map