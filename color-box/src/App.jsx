import { useState } from 'react'
import useFetch from './hooks/useFetch'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
const {data, loading , error} = useFetch('https://api.escuelajs.co/api/v1/products');

 if(loading) {
   return <div style={{padding:20}}>Loading...</div>;
 }
 if(error){
   return <div style={{padding:20, color:'red'}}>Error: {error}</div>;
 }

return (
    <>
      <h3 className='text-3xl text-center mb-3.5 text-black'>Photo</h3>
      <div style={{ gap: '10px', display: 'flex', flexWrap: 'wrap' }}>
        {Array.isArray(data) && data.map(item => (
            <div key={item.id || item.key} className='column' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div className='box border-black border-2' style={{ width: '250px', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div
                  className='box'
                  style={{width: '180px',height: '180px',display: 'flex',alignItems: 'center',justifyContent: 'center',backgroundImage: item.images?.[0] ? `url(${item.images[0]})` : undefined,backgroundSize: 'cover',backgroundColor:'aqua' 
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', color:'gray'}}>600x600</div>
                </div>
              </div>
            </div>
          ))}

          {Array.isArray(data) &&
          data.map(item => (
            <div key={item.id || item.key} className='column' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div className='box border-black border-2' style={{ width: '250px', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div
                  className='box'
                  style={{
                    width: '180px',
                    height: '180px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: item.images?.[0] ? `url(${item.images[0]})` : undefined,
                    backgroundSize: 'cover',
                    backgroundColor:'red'
                    
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', color:'gray'}}>600x600</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default App;