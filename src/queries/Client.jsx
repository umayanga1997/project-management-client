import { gql } from "@apollo/client";

const GET_CLIENTS = gql`
    query getClients{
        getClients {
            id
            name
            company
            mobileNo
        }
    }
    
`
const GET_CLIENTBYID = gql`
    query getClients($id: ID!){
        getClientByID(id: $id) {
            id
            name
            company
            mobileNo
        }
    }
    
`

export { GET_CLIENTS, GET_CLIENTBYID }