import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className="widgets">
            <iframe  
              src=""             // Live Section 
              frameborder="0"
              width="340"
              height="100%"
              style={{border:"none", overflow:"hidden"}}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
              title="Live"
              >
            </iframe>
        </div>
    )
}

export default Widgets
