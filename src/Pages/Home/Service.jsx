
const Service = () => {
    return (
        <div>
            <h2 className="text-5xl text-center font-bold my-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card card-side bg-[#096F7D] px-2 py-6 shadow-xl flex-col" style={{ marginLeft: '40px' }}>
                    <figure className='w-full'><img className="w-1/2 filter brightness-0 invert" src="https://i.ibb.co/zSwTdSK/coding.png" alt="Movie" /></figure>
                    <div className="card-body w-full text-center">
                        <h2 className="text-2xl font-bold text-gray-200">Employee Details</h2>
                    </div>
                </div>

                <div className="card card-side bg-[#096F7D] py-6 px-2 shadow-xl flex-col">
                    <figure className='w-full'><img className="w-1/2 filter brightness-0 invert" src="https://i.ibb.co/MfgRPxx/social-media.png" alt="Movie" /></figure>
                    <div className="card-body w-full text-center">
                        <h2 className="text-2xl font-bold text-gray-200">Employee Progress</h2>
                    </div>
                </div>

                <div className="card card-side bg-[#096F7D] px-2 py-6 shadow-xl flex-col">
                    <figure className='w-full'><img className="w-1/2 filter brightness-0 invert" src="https://i.ibb.co/VxhnFyy/settings.png" alt="Movie" /></figure>
                    <div className="card-body w-full text-center">
                        <h2 className="text-2xl font-bold text-gray-200">Salary Payment</h2>
                    </div>
                </div>

                <div className="card card-side bg-[#096F7D] px-2 py-6 shadow-xl flex-col" style={{ marginRight: '40px' }}>
                    <figure className='w-full'><img className="w-1/2 filter brightness-0 invert" src="https://i.ibb.co/1ThpCyM/app-development.png" alt="Movie" /></figure>
                    <div className="card-body w-full text-center">
                        <h2 className="text-2xl font-bold text-gray-200">Update Work</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;