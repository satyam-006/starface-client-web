import react, { Suspense } from 'react'
import { LayoutCollection } from './Layout-collection'
import { Predesigned } from './Predesigned'
import Apps from './Home-hero'



function Home() {
  
  return (
    <>
    <Suspense fallback={'Loading...'}>
       <Apps />
       <LayoutCollection />
       <Predesigned />
    </Suspense>
    </>
  )
}

export default Home
