import { useState } from 'react'
import './EqualizerBand.css'

const randomVolume = () => Math.floor(Math.random() * 40);

const updateVolume = (volume) => {
    const changAmount = Math.floor(Math.random() * 3);
    if (volume > 38) {
        return volume - changAmount;
    } else if ()
}
function EqualizerBand() {

    return (
        <div class="container">
        <div class="band">
            <div class="item l0"></div>
            <div class="item l1"></div>
            <div class="item l1"></div>
            <div class="item l1"></div>
            <div class="item l1"></div>
            <div class="item l2"></div>
            <div class="item l3"></div>
        </div>
        </div>
    )
}

export default EqualizerBand;