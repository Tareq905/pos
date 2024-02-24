import React from 'react'
import {Link} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

function HomePage() {
  return (
    <MainLayout>
        <div className='bg-light p-5 mt-4 rounded-3'>
            <h1>Welcome to the Point of Sale System</h1>
            <p>Siple Point Of Sale System Using React js, Bootstrap and Axios.</p>
            <p>If you have an issue, call +8801625****** anytimes</p>
            <Link to='/pos' className='btn btn-primary'>Sell Now</Link>
        </div>
    </MainLayout>
  )
}

export default HomePage