import React from 'react';
import { Link } from 'react-router-dom';

import './Breadcrumb.css';

const Breadcrumb = () => {
    const handleRefresh = () => {
        window.location.reload();
      };
    return (
        
            <div className='breadcrumb-container'>
                <div className='breadcrumbs-group'>
                    <Link className="bc-item" to="/browse">Browse</Link>
                    <img className="icon-default" src="/assets/icons/chevron-right.png" alt=""></img>
                    {/* Use template literals for dynamic parts */}
                    <div className="bc-item currentPage" onClick= {handleRefresh}>
                        Book Name 
                    </div>
                </div>
            </div>
            
  );
};

export default Breadcrumb;
