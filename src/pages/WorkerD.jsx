import React from 'react'
import Sidebar from '../components/Sidebar';
import { Dash_work } from '../components/Dash_work';
import { Add_job } from '../components/Add_job';

const WorkerD = () => {
  return (
    <div className='w-full flex'>
    <Sidebar />
    {/* <Dash_work /> */}
    <Add_job />
    </div>
  )
}

export default WorkerD