import img1 from "../../assets/images/banner/1.jpg"
import img2 from "../../assets/images/banner/2.jpg"
import img3 from "../../assets/images/banner/3.jpg"
import img4 from "../../assets/images/banner/4.jpg"
// import img5 from "../../assets/images/banner/5.jpg"
// import img6 from "../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[590px] mb-4 ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full object-fill" />
                <div className="absolute top-0 left-0 w-3/4 lg:w-1/3 h-full transform flex flex-col justify-center pl-7  text-white space-y-3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h2 className="text-2xl lg:text-5xl font-bold">
                        Affordable Price For Car Servicing
                    </h2>
                    <p>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>
                    <div className="space-x-2">
                        <button className="btn btn-warning">Warning</button>
                        <button className="btn btn-outline btn-error">Error</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 space-x-3 left-5 right-5 bottom-1">
                    <a href="#slide4" className="btn btn-circle bg-red-500 border-none">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-red-500 border-none">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute top-0 left-0 w-3/4 lg:w-1/3 h-full transform flex flex-col justify-center pl-7  text-white space-y-3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h2 className="text-2xl lg:text-5xl font-bold">
                        Affordable Price For Car Servicing
                    </h2>
                    <p>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>
                    <div className="space-x-2">
                        <button className="btn btn-warning">Warning</button>
                        <button className="btn btn-outline btn-error">Error</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 space-x-3 left-5 right-5 bottom-1">
                    <a href="#slide1" className="btn btn-circle bg-red-500 border-none">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-red-500 border-none">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute top-0 left-0 w-3/4 lg:w-1/3 h-full transform flex flex-col justify-center pl-7  text-white space-y-3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h2 className="text-2xl lg:text-5xl font-bold">
                        Affordable Price For Car Servicing
                    </h2>
                    <p>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>
                    <div className="space-x-2">
                        <button className="btn btn-warning">Warning</button>
                        <button className="btn btn-outline btn-error">Error</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 space-x-3 left-5 right-5 bottom-1">
                    <a href="#slide2" className="btn btn-circle bg-red-500 border-none">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-red-500 border-none">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute top-0 left-0 w-3/4 lg:w-1/3 h-full transform flex flex-col justify-center pl-7  text-white space-y-3 bg-gradient-to-r from-[#020202] to-[rgba(21, 21, 21, 40)]">
                    <h2 className="text-2xl lg:text-5xl font-bold">
                        Affordable Price For Car Servicing
                    </h2>
                    <p>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                    </p>
                    <div className="space-x-2">
                        <button className="btn btn-warning">Warning</button>
                        <button className="btn btn-outline btn-error">Error</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 space-x-3 left-5 right-5 bottom-1">
                    <a href="#slide3" className="btn btn-circle bg-red-500 border-none">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-red-500 border-none">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;