import React from 'react';
import InfoIcon from '@material-ui/icons/Info'
import './Widgets.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {
    const newArticle = (header, subtitle) => (
        <div className='widget__article'>
            <div className='widget__articleLeft'><FiberManualRecordIcon/></div>
            <div className='widget__articleRight'>
                <h4>{header}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='app__widgets'>
            <div className="widgets">
                <div className="widgets__header">
                    <h2>LinkedIn News</h2>
                    <InfoIcon/>
                </div>
                {newArticle('Hot news', 'he is back')}
                {newArticle('Hot news', 'he is back')}
                {newArticle('Hot news', 'he is back')}
                {newArticle('Hot news', 'he is back')}
            </div>
        </div>
    );
};

export default Widgets;