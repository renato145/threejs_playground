import React, { useMemo, useEffect } from "react";
import { Vector2 } from "three";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";
import { CanvasContainer, Text } from "./CanvasContainer";
import { Link } from "./App";
import { useThree, useFrame } from "react-three-fiber";

const Mesh = ({ bounds }) => {
  const { mouse } = useThree();

  // credits to https://www.shadertoy.com/view/MdSXzz
  const shaderData = useMemo(() => {
    const vertexShader = /*glsl*/`
  void main() {
    gl_Position = vec4( position, 1.0 );
  }
`;

    const fragmentShader = /*glsl*/`
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;

  const mat2 m = mat2( 0.80,  0.60, -0.60,  0.80 );

  float hash( vec2 p ) {
    float h = dot(p,vec2(127.1,311.7));
    return -1.0 + 2.0*fract(sin(h)*43758.5453123);
  }

  float noise( in vec2 p ) {
    vec2 i = floor( p );
    vec2 f = fract( p );
    vec2 u = f*f*(3.0-2.0*f);

    return mix( mix( hash( i + vec2(0.0,0.0) ), 
                    hash( i + vec2(1.0,0.0) ), u.x),
                mix( hash( i + vec2(0.0,1.0) ), 
                    hash( i + vec2(1.0,1.0) ), u.x), u.y);
  }

  float fbm( vec2 p )
  {
      float f = 0.0;
      f += 0.5000*noise( p ); p = m*p*2.02;
      f += 0.2500*noise( p ); p = m*p*2.03;
      f += 0.1250*noise( p ); p = m*p*2.01;
      f += 0.0625*noise( p );
      return f/0.9375;
  }

  vec2 fbm2( in vec2 p )
  {
      return vec2( fbm(p.xy), fbm(p.yx) );
  }

  vec3 map( vec2 p )
  {   
      p *= 0.7;
      float t = u_time * ( 1.0 + 2. * distance(u_mouse, vec2(0.0)));

      float f = dot( fbm2( 1.0*(0.05*t + p + fbm2(-0.05*t+2.0*(p + fbm2(4.0*p)))) ), vec2(1.0,-1.0) );

      float bl = smoothstep( -0.8, 0.8, f );

      float ti = smoothstep( -1.0, 1.0, fbm(p) );

      return mix( mix( vec3(0.50,0.00,0.00), 
                       vec3(1.00,0.75,0.35), ti ), 
                       vec3(0.00,0.00,0.02), bl );
  }

  void main() {
    vec2 p = (-u_resolution.xy+2.0*gl_FragCoord.xy)/u_resolution.y;

    float e = 0.0045;

    vec3 colc = map( p               ); float gc = dot(colc,vec3(0.433));
    vec3 cola = map( p + vec2(e,0.0) ); float ga = dot(cola,vec3(0.333));
    vec3 colb = map( p + vec2(0.0,e) ); float gb = dot(colb,vec3(0.333));
    
    vec3 nor = normalize( vec3(ga-gc, e, gb-gc ) );

    vec3 col = colc;
    col += vec3(1.0,0.7,0.6)*8.0*abs(2.0*gc-ga-gb);
    col *= 1.0+0.2*nor.y*nor.y;
    col += 0.05*nor.y*nor.y*nor.y;
    
    
    vec2 q = gl_FragCoord.xy/u_resolution.xy;
    col *= pow(16.0*q.x*q.y*(1.0-q.x)*(1.0-q.y),0.1);
    vec2 m = (u_mouse.xy + 1.0 ) / 2.0;
    col.r *= m.x;
    col.g *= m.y;
    
    gl_FragColor = vec4( col, 1.0 );
  }
`;

    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new Vector2() },
      u_mouse: { value: mouse },
    };

    return { vertexShader, fragmentShader, uniforms };
  }, [mouse]);

  useEffect(() => {
    shaderData.uniforms.u_resolution.value.x = bounds.width;
    shaderData.uniforms.u_resolution.value.y = bounds.height;
  }, [bounds, shaderData]);

  useFrame(() => {
    shaderData.uniforms.u_time.value += 0.05;
  });

  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[2, 2]} />
      <shaderMaterial attach="material" {...shaderData} />
    </mesh>
  );
};

const Xtra = () => (
  <Text>
    A more complex test (inspired by{" "}
    {
      <Link href="https://www.shadertoy.com/view/MdSXzz" target="_black">
        this work
      </Link>
    }
    ).
  </Text>
);

export const ShaderTexture = () => {
  const [ref, bounds] = useMeasure({ polyfill: ResizeObserver });

  return (
    <CanvasContainer xtra={<Xtra />} measure={ref}>
      <Mesh bounds={bounds} />
    </CanvasContainer>
  );
};
