import React from "react"
import "./style2.css"


class One extends React.Component{
    render()
    {
        return (
            <div className="classhead">
            <h1>This is created using Class Component</h1>
            <p> <b>This is done using External CSS </b></p>
            <p className="ppp">This is done using Inline CSS</p>
            </div>
        )
    }
}
export default One;