import React from 'react'
import ProjectCard from './ProjectCard'
import { useQuery } from "@apollo/client"
import { GET_PROJECTS } from '../queries/Project'
import Loading from './Loading'
import Error from './Error'

export default function ProjectContainer() {
    const { loading, error, data } = useQuery(GET_PROJECTS)

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    return (
        <div className='row row-cols-4 row-cols-sm-1 row-cols-md-4 row-cols-lg-4'>
            {
                !loading && !error &&

                (data.getProjects.map((element) =>
                    (<ProjectCard data={element} key={element.projectName} />)
                ))
            }
        </div>
    )
}
