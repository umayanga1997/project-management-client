import { gql } from '@apollo/client'

const GET_PROJECTS = gql`
    query getProjects{
        getProjects {
            id 
            projectName
            createDate
            dueDate
            employees{
                id
                firstName
                lastName
                nic
                address
                jobRole
            }
            clients{
                id
                name
                company
                mobileNo
            }
            comment
        }
    }
`

const GET_PROJECTBYID = gql`
    query getProjectById($id: ID!){
        getProjectByID(id:$id) {
            id 
            projectName
            createDate
            dueDate
            employees{
                id
                firstName
                lastName
                nic
                address
                jobRole
            }
            clients{
                id
                name
                company
                mobileNo
            }
            comment
        }
    }
`

export { GET_PROJECTS, GET_PROJECTBYID }