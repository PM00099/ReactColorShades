import React from 'react'

const ShadeInput = (props) => {
    return (
        <div className="shade-search" >
            <div className="emojis"><span role="img"  aria-labelledby="false">🎈✨🎉🎊🎇</span></div>
            <input type="text" className="shade-input" value={props.color} onChange={(e => props.onInputChange(e.target.value))} />
            <p >Click to copy color</p>
            <div className="emojis"><span role="img" aria-labelledby="false">🎈✨🎉🎊🎇</span></div>
        </div>
    )
}

export default ShadeInput
