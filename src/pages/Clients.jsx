import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_CLIENTS } from '../queries/Client';
import Loading from '../components/Loading';
import Error from '../components/Error';
import ClientCard from '../components/ClientCard';

export default function Clients() {

    const { loading, error, data } = useQuery(GET_CLIENTS);

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
                                data.getClients?.map((element) => (
                                    <ClientCard key={element.id} data={element} editBtn={true} />
                                ))
                            }
                        </div>
                    </>
                )
            }
        </>
    )
}
