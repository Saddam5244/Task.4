import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
const [color,setColor] = useState(0);

  return (
    <>
     
        <h3 className='text-3xl text-center mb-3.5 text-black'>Photo</h3>
        <div style={{gap:'10px', display:'flex'}}>
<div className='column' style={{display:'flex',flexDirection:'column',gap:'10px' }}>
        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-red-400' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-red-200' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        
        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-red-300' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-amber-200' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-amber-300' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-amber-500' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-amber-600' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-amber-900' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-purple-300' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-purple-400' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>
        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-purple-500' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-purple-700' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-purple-800' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-purple-900' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-purple-950' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>
</div>

<div className='column' style={{display:'flex',flexDirection:'column',gap:'10px' }}>
        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-red-500' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-red-600' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        
        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-red-950' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

                <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-cyan-950' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-cyan-800' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-orange-500' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-orange-700' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box' style={{backgroundColor:'slateblue',width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box' style={{ backgroundColor:'skyblue',width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box' style={{backgroundColor:'steelblue',width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>
        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box' style={{backgroundColor:'tan',width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box' style={{backgroundColor:'teal',width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box' style={{backgroundColor:'thistle',width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box' style={{backgroundColor:'violet',width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box' style={{backgroundColor:'plum',width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>
</div>

<div className='column' style={{display:'flex',flexDirection:'column',gap:'10px' }}>
        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-sky-200' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-sky-300' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        
        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-sky-500' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>


             <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-slate-800' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-slate-950' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%', color:'white'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-fuchsia-400' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-fuchsia-600' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-fuchsia-800' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-fuchsia-950' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-rose-400' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>
        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-rose-600' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-rose-800' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-rose-900' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center', backgroundColor:'seashell' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center', backgroundColor:'sienna' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>
</div>

<div className='column' style={{display:'flex',flexDirection:'column',gap:'10px' }}>
        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-green-100' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-green-200' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        
        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-green-300' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

             <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-gray-700' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-gray-900' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-blue-400' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-blue-600' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-blue-800' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-blue-950' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-violet-300' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>
        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-violet-500' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-violet-800' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-cyan-300' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-cyan-500' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-cyan-700' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>
        
</div>

<div className='column' style={{display:'flex',flexDirection:'column',gap:'10px' }}>
        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-green-400' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-green-600' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        
        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-green-900' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

                <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-gray-400' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-gray-300' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>


        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-gray-500' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-yellow-800' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-yellow-900' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-pink-300' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-pink-400' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>
        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-pink-500' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-pink-600' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-pink-700' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-pink-800' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>

        <div className='box border-black border-2' style={{width:'250px', height:'250px',display:'flex', alignItems:'center', justifyContent:'center',justifyItems:'center'}}>
          <div className='box bg-pink-900' style={{width: '180px', height:'180px',display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center' }}>
           <div style={{display:'flex',alignItems:'center', justifyContent:'center',justifyItems:'center',height:'100%',width:'100%'}}>600x600</div>
          </div>
        </div>
</div>
         </div>
    </>
  )
}

export default App
