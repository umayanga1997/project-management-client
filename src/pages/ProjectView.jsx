import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_PROJECTBYID } from '../queries/Project';
import Loading from '../components/Loading';
import Error from '../components/Error';
import ClientCard from '../components/ClientCard';
import EmployeeCard from '../components/EmployeeCard';

export default function ProjectView() {

    const { id } = useParams();

    const { loading, error, data } = useQuery(GET_PROJECTBYID, {
        variables: { id }
    })

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    return (
        <>
            {
                !loading && !error &&
                (
                    <div className='container'>
                        <div className='d-flex justify-content-center'>
                            <p className='fs-1 fw-bold'> {data.getProjectByID?.projectName}</p>
                        </div>
                        <div>
                            <div className='pt-4'>
                                <p className='fs-5 fw-bold pb-0 mb-0'>Comment/Description</p>
                                <p className='fs-5 pt-0'> {data.getProjectByID?.comment}</p>
                            </div>
                            <div className="accordion w-50" id="accordionPanelsStayOpenProjects">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                            Clients
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                        <div className="accordion-body d-flex justify-content-center">
                                            {
                                                data.getProjectByID?.clients?.map((element) => (

                                                    <ClientCard key={element.id} data={element} />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            Employees
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                        <div className="accordion-body d-flex justify-content-center">
                                            {
                                                data.getProjectByID?.employees?.map((element) => (
                                                    <EmployeeCard key={element.id} data={element} />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <p className='fs-5 fw-bold pb-0 mb-0'>Create Date</p>
                            <p className='fs-5 pt-0'> {data.getProjectByID?.createDate}</p>
                        </div>
                        <div className='mt-4'>
                            <p className='fs-5 fw-bold pb-0 mb-0'>Due Date</p>
                            <p className='fs-5 pt-0'> {data.getProjectByID?.dueDate}</p>
                        </div>
                    </div>
                )
            }
        </>
    )
}
