import { gql } from "@apollo/client";


const CREATE_EMPLOYEE = gql`
    mutation createEmployee($firstName: String!, $lastName: String!, $nic: String!, $address: String!, $jobRole: String){
        createEmployee(firstName: $firstName,
            lastName: $lastName,
            nic: $nic,
            address: $address,
            jobRole: $jobRole
            ) {        
            firstName
            lastName
            nic
            address
            jobRole
        }
    }
`
const UPDATE_EMPLOYEE = gql`
    mutation updateEmployee($id: ID!, $firstName: String!, $lastName: String!, $nic: String!, $address: String!, $jobRole: String){
        updateEmployee(id: $id, firstName: $firstName,
            lastName: $lastName,
            nic: $nic,
            address: $address,
            jobRole: $jobRole
            ) {        
            firstName
            lastName
            nic
            address
            jobRole
        }
    }
`
const DELETE_EMPLOYEE = gql`
    mutation deleteEmployee($id: ID!){
        createEmployee(id: $id
            ) {        
            firstName
            lastName
            nic
            address
            jobRole
        }
    }
`

export { CREATE_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE }