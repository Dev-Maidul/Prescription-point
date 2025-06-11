import React from 'react';

const Spinner = () => {
    return (
        <div className='w-10/12 mx-auto py-8 mt-8'>
            <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-xl"></span>
        </div>
    );
};

export default Spinner;