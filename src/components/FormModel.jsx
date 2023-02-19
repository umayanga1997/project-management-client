import React from 'react'

export default function FormMode(props) {

    return (
        <>
            {props.btnName && (<button type="button" className="btn btn-outline-info w-100" data-bs-toggle="modal" data-bs-target={`#${props.modelId}`}>{props.btnName}</button>)}
            <div className="modal fade" id={props.modelId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{props?.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {props?.children}
                    </div>
                </div>
            </div>
        </>
    )
}
