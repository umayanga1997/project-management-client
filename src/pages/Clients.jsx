import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_CLIENTS } from '../queries/Client';
import Loading from '../components/Loading';
import Error from '../components/Error';
import ClientCard from '../components/ClientCard';
import FormModel from '../components/FormModel';
import ClientForm from '../components/forms/ClientForm';

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
                        <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#addClientModel">Add New</button>
                        <FormModel title={"Add New Client"} modelId={"addClientModel"}>
                            <ClientForm />
                        </FormModel>
                        <div className='row row-cols-4 row-cols-sm-1 row-cols-md-4 row-cols-lg-4'>
                            {
                                data.getClients?.map((element, index) => (
                                    <ClientCard key={element.id} index={index} data={element} editBtn={true} />
                                ))
                            }
                        </div>
                    </>
                )
            }
        </>
    )
}
