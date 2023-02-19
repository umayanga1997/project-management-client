import React from "react";
import FormModel from "./FormModel";
import EmployeeForm from "../components/forms/EmployeeForm";

export default function EmployeeCard({ data, editBtn = false, index }) {
  return (
    <div className="card p-2 m-2">
      <div className="card-body">
        <h5>{data?.firstName + " " + data?.lastName}</h5>
        <p className="m-0">
          NIC : <b>{data?.nic}</b>
        </p>
        <p className="m-0">
          Address : <b>{data?.address}</b>
        </p>
        <p className="m-0">
          Job Role : <b>{data?.jobRole}</b>
        </p>
      </div>
      {editBtn && (
        <FormModel
          title={"Edit Employee"}
          btnName={"Edit"}
          modelId={`${index}editDataModel`}
        >
          <EmployeeForm data={data} />
        </FormModel>
      )}
    </div>
  );
}
