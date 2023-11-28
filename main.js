import * as THREE from 'three';
import "./style.css"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import gsap from "gsap"
import { TimelineLite } from 'gsap/gsap-core';

// scene
const scene = new THREE.Scene();

// sphere
const geometry = new THREE.SphereGeometry( 10, 64, 64 ); 
const material = new THREE.MeshStandardMaterial( { color: 0xe3f2fd } ); 
const sphere = new THREE.Mesh( geometry, material ); 
scene.add( sphere );


const sizes={
  width:window.innerWidth,
  height:window.innerHeight
}

// light
const light = new THREE.PointLight( 0xf6aa1c, 70, 50 );
light.position.set( 0, 20, 20 );
scene.add( light );




// camera
const camera = new THREE.PerspectiveCamera(45,sizes.width/sizes.height)
camera.position.z=50
scene.add(camera)


// canvas
const canvas=document.querySelector('.webgl')
const renderer=new THREE.WebGLRenderer({canvas})
renderer.setSize( sizes.width, sizes.height );
renderer.setPixelRatio(2)
// render
renderer.render(scene,camera)


// controlls
const controls=new OrbitControls(camera, canvas)
controls.enableDamping=true
controls.enablePan=false
controls.enableZoom=false
controls.autoRotate=true




// Resize
window.addEventListener('resize',()=>{
  sizes.width=window.innerHeight
  sizes.height=window.innerWidth
  
  // update camera
})

const loop=()=>{

  controls.update()
  // light.position.x+=0.2
  renderer.render(scene,camera)
  window.requestAnimationFrame(loop)
}

loop()

const t1= gsap.timeline({defaults:{duration:1}})
t1.fromTo('.title',{opacity:0},{opacity:1})
