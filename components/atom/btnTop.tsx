import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';




const BtnTop = () => {

    const [showBtnTop, setShowBtnTop] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if( window.scrollY > 400 ){
                setShowBtnTop(true);
            } else {
                setShowBtnTop(false);
            }
        });
    });

    const goToTop = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        })
    }


    return (
    <div className='absolute'>
        {showBtnTop && (
            <FontAwesomeIcon icon={faArrowUp} 
            onClick={goToTop} className="fixed bottom-14 right-10 rounded-lg bg-slate-200/75 p-2" />
        )}
        
    </div>
  )
}

export default BtnTop