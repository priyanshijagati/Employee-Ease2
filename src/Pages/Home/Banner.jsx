
const Banner = () => {
    return (
        <div>
            <div className="mt-4">
                <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full flex items-center">

    
    
    <div className="w-1/2">
        <img src="https://i.ibb.co/kmcQHYy/3504380-removebg-preview.png" className="w-full" style={{ marginLeft: '40px', marginRight: '40px', marginBottom :'380px' }} />
    </div>

    <div className="w-1/2">
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
        </div>

        <div className="text-black text-left" style={{ marginBottom: '300px'}}>
          <h2 className="text-3xl font-bold mb-4 text-center" style={{ marginBottom: '50px'}}>Your Ultimate Work Companion!</h2>
          <p className="text-lg mb-4">Easily manage all your employee information in one centralized location.
          From personal details to performance reviews, everything you need is at your fingertips.
          Effortlessly streamline  tasks with our comprehensive employee management platform.
        
          </p>

        </div>

    </div>
</div>

                    <div id="slide2" className="carousel-item relative w-full">

                        <div className="w-1/2">
                        <img src="https://i.ibb.co/kmcQHYy/3504380-removebg-preview.png" className="w-full" style={{ marginLeft: '40px', marginRight: '40px' }} />
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>

                        <div className="w-1/2">
                        <img  src="https://i.ibb.co/sqDKpw0/2968290-removebg-preview.png" alt="2968290-removebg-preview"  className="w-full" style={{  marginRight: '160px' }} />
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;