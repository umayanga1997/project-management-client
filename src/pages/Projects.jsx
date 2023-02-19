import { useQuery } from '@apollo/client'
import React from 'react'
import Loading from '../components/Loading';
import Error from '../components/Error';
import ProjectCard from '../components/ProjectCard';
import { GET_PROJECTS } from '../queries/Project';
import ProjectForm from '../components/forms/ProjectForm';
import FormModel from '../components/FormModel';

export default function Projects() {

    const { loading, error, data } = useQuery(GET_PROJECTS);

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    return (
        <>
            {
                !loading && !error &&
                (
                    <>
                        <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#addProjectModel">Add New</button>
                        <FormModel title={"Add New Project"} modelId={"addProjectModel"}>
                            <ProjectForm />
                        </FormModel>
                        <div className='row row-cols-4 row-cols-sm-1 row-cols-md-4 row-cols-lg-4'>
                            {
                                data.getProjects?.map((element, index) => (
                                    <ProjectCard key={index} index={index} data={element} editBtn={true} />
                                ))
                            }
                        </div>
                    </>
                )
            }
        </>
    )
}
