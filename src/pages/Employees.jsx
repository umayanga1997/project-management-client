import { useQuery } from "@apollo/client";
import React from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { GET_EMPLOYEES } from "../queries/Employees";
import EmployeeCard from "../components/EmployeeCard";
import EmployeeForm from "../components/forms/EmployeeForm";
import FormModel from "../components/FormModel";

export default function Employees() {
  const { loading, error, data } = useQuery(GET_EMPLOYEES);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <>
      {!loading && !error && (
        <>
          <button
            type="button"
            className="btn btn-outline-success"
            data-bs-toggle="modal"
            data-bs-target="#addEmployeeModel"
          >
            Add New
          </button>
          <FormModel title={"Add New Employee"} modelId={"addEmployeeModel"}>
            <EmployeeForm />
          </FormModel>
          <div className="row row-cols-4 row-cols-sm-1 row-cols-md-4 row-cols-lg-4">
            {data.getEmployees?.map((element, index) => (
              <EmployeeCard
                key={element.id}
                index={index}
                data={element}
                editBtn={true}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
