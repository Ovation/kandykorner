import React from "react"

export const Location = ({location}) => {

    return (<div className="location" id={`location--${location.name}`}>
        <div className="location__name">
            Location: {location.name}
        </div>
    </div>)
}