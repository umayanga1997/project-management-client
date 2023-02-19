import { gql } from "@apollo/client";

const GET_EMPLOYEES = gql`
    query getEmployees{
        getEmployees {
            id
            firstName
            lastName
            nic
            address
            jobRole
        }
    }
`

export { GET_EMPLOYEES }