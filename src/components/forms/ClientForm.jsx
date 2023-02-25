import React from "react";
import { useMutation } from "@apollo/client";
import { CREATE_CLIENT } from "../../mutations/Client";
import { GET_CLIENTS } from "../../queries/Client";

export default function ClientForm({ data }) {
  const [createClient, { loading, error }] = useMutation(CREATE_CLIENT, {
    update(cache, { data }) {
      const { getClients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { getClients: [...getClients, data.createClient] },
      });
    },
  });

  const submit = () => {
    createClient({
      variables: {
        name: "Avishka",
        company: "New Company",
        mobileNo: "08882912",
      },
    });
  };

  return (
    <>
      <div className="modal-body">
        <>
          <p>{data?.projectName}</p>
        </>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" onClick={submit} className="btn btn-primary">
          Save changes
        </button>
      </div>
    </>
  );
}
