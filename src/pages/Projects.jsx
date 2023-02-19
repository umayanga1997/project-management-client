import { useQuery } from '@apollo/client'
import React from 'react'
import Loading from '../components/Loading';
import Error from '../components/Error';
import ProjectCard from '../components/ProjectCard';
import { GET_PROJECTS } from '../queries/Project';

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
                        <button type="button" class="btn btn-outline-success">Add New</button>
                        <div className='row row-cols-4 row-cols-sm-1 row-cols-md-4 row-cols-lg-4'>
                            {
                                data.getProjects?.map((element) => (
                                    <ProjectCard key={element.id} data={element} editBtn={true} />
                                ))
                            }
                        </div>
                    </>
                )
            }
        </>
    )
}
