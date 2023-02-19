import React from 'react'

export default function ClientCard({ data, editBtn = false }) {
    return (
        <div className='card p-2 m-2'>
            <div className='card-body'>
                <h5>{data?.name}</h5>
                <p className='m-0'>Company : <b>{data?.company}</b></p>
                <p className='m-0'>Mobile : <b>{data?.mobileNo}</b></p>
            </div>
            {editBtn && (<button type="button" className="btn btn-outline-info">Edit</button>)
            }
        </div >
    )
}
