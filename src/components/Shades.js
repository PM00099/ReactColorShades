import React,{useEffect, useState,useRef} from 'react';
import Values from 'values.js';
import isColor from 'is-color';
import Shade from './Shade';

const Shades = (props) => {
    
    const audioRef = useRef();
    const [shades,setShades] = useState([]);

    useEffect(() => {
        if(isColor(props.color)){
            createShades();
        }
    },[props.color]);

    const onColorCopy = () => {
        audioRef.current.play();
    }

    const createShades = () =>{
        const shades_Color = new Values(props.color).shades(1);
        // console.log(shades_Color);
        setShades(shades_Color);
    }

    return (
        <div className="shades">
        <audio ref={audioRef} src={require("../assets/sound1.mp3")} />
            {shades.map((shade) => <Shade shade={shade} onColorCopy={onColorCopy} />)}
        </div>
    )
}

export default Shades
