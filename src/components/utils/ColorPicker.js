import { TextField } from '@material-ui/core'
import React from 'react'

function ColorPicker({value = "#362121", colorChange}) {
    return (
        <div 
        	style={{
						display: "flex",
						flexDirection: "column",
						margin: "10px"
						}}>
            <label>Color picker</label>
            <input 
							type="color" 
							style={{
								height: "100px",
								width: "100px",
								border: "none	",
								cursor: "pointer",
								padding: "0",
								marginTop: "5px"
								}}
								value={value}
								onInput={colorChange}
						/>
						<TextField 
							value={value}
							style={{
								marginTop: "5px"
							}}
							onChange={colorChange}
						/>
        </div>
    )
}

export default ColorPicker
