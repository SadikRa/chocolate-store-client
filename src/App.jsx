
import './App.css'
import { Link, useLoaderData } from 'react-router-dom'
import ChocolatesCard from './component/ChocolatesCard'

function App() {
  
const choData = useLoaderData()
  return (

      <div className='container mx-auto'>
        <h1 className="text-center font-bold text-4xl bg-amber-950	rounded p-4 ">
        Chocolate Management System
      </h1>
        <div className='my-8'>
        <Link className='mx-12' to='/addChocolates'>Add Chocolates</Link>
        </div>
        <div className=''>
          {
            choData.map((chocalate) => <ChocolatesCard key={chocalate._id} chocalate={chocalate}></ChocolatesCard>)
          }
        </div>
      </div>
      
  )
}

export default App
