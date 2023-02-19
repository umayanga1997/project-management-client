import React from 'react'
import FormModel from './FormModel';
import ClientForm from './forms/ClientForm';

export default function ClientCard({ data, editBtn = false, index }) {
    return (
        <div className='card p-2 m-2'>
            <div className='card-body'>
                <h5>{data?.name}</h5>
                <p className='m-0'>Company : <b>{data?.company}</b></p>
                <p className='m-0'>Mobile : <b>{data?.mobileNo}</b></p>
            </div>
            {editBtn && (
                <FormModel title={"Edit Client"} btnName={"Edit"} modelId={`${index}editDataModel`}>
                    <ClientForm data={data} />
                </FormModel>
            )
            }
        </div >
    )
}
