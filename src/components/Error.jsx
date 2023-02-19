import React from 'react'

export default function Error({ error }) {
    return (
        <div className="position-absolute top-50 start-50 translate-middle"><p>Something went wrong! {error.message}</p></div>
    )
}
