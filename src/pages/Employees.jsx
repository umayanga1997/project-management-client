import { useQuery } from '@apollo/client'
import React from 'react'
import Loading from '../components/Loading';
import Error from '../components/Error';
import { GET_EMPLOYEES } from '../queries/Employees';
import EmployeeCard from '../components/EmployeeCard';

export default function Employees() {

    const { loading, error, data } = useQuery(GET_EMPLOYEES);

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
                                data.getEmployees?.map((element) => (
                                    <EmployeeCard key={element.id} data={element} editBtn={true} />
                                ))
                            }
                        </div>
                    </>
                )
            }
        </>
    )
}
