import React from 'react'
import { Link } from 'react-router-dom'
import FormModel from './FormModel';
import ProjectForm from './forms/ProjectForm';

export default function ProjectCard({ data, editBtn = false, index }) {

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
                            <FormModel title={"Edit Project"} btnName={"Edit"} modelId={`${index}editDataModel`}>
                                <ProjectForm data={data} />
                            </FormModel>
                        </div>
                    )}
                </div>

            </Link>

        </>
    )
}
