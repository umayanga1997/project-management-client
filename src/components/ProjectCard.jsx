import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ data, editBtn = false }) {

    const handleClick = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <Link to={{ pathname: `/proview/${data.id}`, }} style={{
                textDecoration: 'none',
                color: '#000000'
            }}>

                <div className="card md p-2 m-2" >
                    <div className="card-body">
                        <h5 className="card-title">{data?.projectName}</h5>
                        <p className="card-text">{data?.comment}</p>
                        <div className='row row-cols-2'>
                            <div className="cols"><small><p className='card-text'>Clients: <b>{data.clients?.length}</b></p></small></div>
                            <div className="cols"><small><p className='card-text'>Employees: <b>{data.employees?.length}</b></p></small></div>
                        </div>
                    </div>
                    {editBtn && (
                        <div onClick={handleClick}>
                            <button type="button" className="btn btn-outline-info w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>

                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </Link>

        </>
    )
}
