import React, { useState } from 'react'
import TShirt3D from './TShirt3D';
import TShirtEditor from './TShirtEditor';
import './Customize.css'

const Customize = () => {
    const [texture, setTexture] = useState("");
    const [color, setColor] = useState("#ffffff");
  return (
    <div>
        <div className="maincust">
       <div className="app-wrapper">
          <TShirtEditor onUpdateTexture={setTexture} onColorChange={setColor} />
          <TShirt3D textureUrl={texture} color={color} />
      </div>
        </div>
    </div>
  )
}

export default Customize
