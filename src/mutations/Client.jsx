import { gql } from "@apollo/client";

const CREATE_CLIENT = gql`
    mutation createClient($name: String!, $company: String!, $mobileNo: String!){
        createClient(name: $name,
            company: $company,
            mobileNo: $mobileNo
          
            ) {        
            name
            company
            mobileNo
        }
    }
`
const UPDATE_CLIENT = gql`
    mutation updateClient($id: ID!, $name: String!, $company: String!, $mobileNo: String!){
        updateClient(
            id: $id,
            name: $name,
            company: $company,
            mobileNo: $mobileNo          
            ) {        
            name
            company
            mobileNo         
        }
    }
`
const DELETE_CLIENT = gql`
    mutation deleteClient($id: ID!){
        deleteClient(
            id: $id     
            ) {        
            name
            company
            mobileNo
        }
    }
`
export {
    CREATE_CLIENT,
    UPDATE_CLIENT,
    DELETE_CLIENT
}