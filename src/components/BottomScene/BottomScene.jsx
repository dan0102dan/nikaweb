import React from 'react'
import grass from '../../assets/grass.png'
import flower from '../../assets/flower.png'

const BottomScene = () => (
    <div className="bottomScene">
        <img src={grass} alt="Трава справа" className="grass" />
        <img src={flower} alt="Цветочек" className="flower" />
    </div>
)

export default BottomScene
