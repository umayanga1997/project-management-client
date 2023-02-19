import React from 'react'

export default function EmployeeCard({ data, editBtn = false }) {
    return (
        <div className='card p-2 m-2'>
            <div className='card-body'>
                <h5>{data?.firstName + " " + data?.lastName}</h5>
                <p className='m-0'>NIC : <b>{data?.nic}</b></p>
                <p className='m-0'>Address : <b>{data?.address}</b></p>
                <p className='m-0'>Job Role : <b>{data?.jobRole}</b></p>
            </div>
            {editBtn && (<button type="button" className="btn btn-outline-info">Edit</button>)
            }
        </div >
    )
}
