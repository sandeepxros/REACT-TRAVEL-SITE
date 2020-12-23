import React from 'react'
import img from './offer.jpg'
import './offer.css'
import {Link} from 'react-router-dom'
import { Button } from './Button'

function Offer() {
    return (
        <div className="offer">
            <img src={img} alt='offers' className="img-fluid"/>
            <div class="content">
                <h1 class="header">Offer for cruise Ship</h1>
                <p>ventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem</p>
                <Button>Get The offer</Button>
            </div>
        </div>
    )
}

export default Offer
