import React from 'react';

const Banner = () => {
    return (
        <div className='w-10/12 mx-auto py-8 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,1))] border border-3-white shadow sm mt-4 rounded-xl mb-4'>
            <h1 className='text-4xl font-semibold text-center'>
                Dependable Care, Backed by Trusted <br />Professionals.
            </h1>
            <p className='py-2 text-center text-gra font-thin'>
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a
                <br />routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust. 
            </p>
            
            {/* Search box */}
            <div className="flex justify-center items-center py-6 w-full">
                <div className="flex gap-4 items-center">
                    <label className="input validator join-item rounded-xl">
                        <input className='' type="text" placeholder="Search any doctor" required />
                    </label>
                    <button className="btn btn-active btn-primary rounded-2xl text-white">
                        Search
                    </button>
                </div>
            </div>
            {/* Banner section */}
            <div className="banner-container flex gap-4 justify-between items-center">
                <div className="left">
                    <img src="/public/banner-img-1.png" alt="" />
                </div>
                <div className="right">
                <img src="/public/banner-img-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
