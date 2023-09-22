import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-1/5 h-screen bg-[#1D2540]'>
        <div className='flex flex-col h-[100%]'>
        <div className='h-1/3 bg-[#1D2540]'>
            <div className=' flex flex-col justify-center items-center'>
        <img src={{}} alt=""></img>
        <h3 className='font-bold text-white text-2xl'>JOHN DAO HAO</h3>
        <button className='bg-blue-600 px-4 rounded-lg  text-white text-xs'>Profile</button>
            
        </div></div>
        <div className='h-2/3 bg-[#172554] rounded-tr-[4rem] flex flex-col justify-between'>
         <div className='flex flex-col items-center text-white text-xm gap-y-4 my-4'>
<div className=''>
    
    <h6>Dashboard</h6>
</div>
<div className=''>
    <h6>Jobs</h6>
</div>
<div className=''>
    <h6>Attendance</h6>
</div>
<div className=''>
    <h6>Payment</h6>
</div>
<div className=''>
    <h6>Logout</h6>
</div>
         </div>
         <div className='bg-[#1D2540] my-6 mx-10  rounded-lg '>
         <div className='flex flex-col justify-center p-2 py-4 text-xs'>
           <h6 className='text-white' >Having troubles?</h6>
           <h6 className='text-white'>Contact us</h6>
         </div>
         </div>
        </div>
        </div>
    </div>
  )
}

export default Sidebar