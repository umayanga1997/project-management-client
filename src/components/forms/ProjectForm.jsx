import React from 'react'

export default function ProjectForm({ data }) {
    return (
        <>
            <div className="modal-body">
                <><p>{data?.projectName}</p></>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
        </>
    )
}
