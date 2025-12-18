import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
			  <a className="navbar-brand" href="#">
				  <img src="/logos/logo-png.png" alt="Logo" height="80" width="80" />
				  </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* SLIDER */}
      <div id="mainSlider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img 
              src="/images/01-slide-1-1.jpg" 
              className="d-block w-100 h-80"
              alt="Slide 1"
            />
          </div>

          <div className="carousel-item">
            <img 
              src="/images/01-slide-1.jpg" 
              className="d-block w-100 h-80"
              alt="Slide 2"
            />
				  </div>
				  <div className="carousel-item">
            <img 
              src="/images/01-slide-1-1.jpg" 
              className="d-block w-100 h-80"
              alt="Slide 2"
            />
				  </div>
				  

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#mainSlider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#mainSlider" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* CATEGORY SCROLL */}
      <div className="container my-4">
        <h3 className="text-center pb-3">Categories</h3>

        <div className="d-flex gap-3 overflow-auto category-row">

          {[
            "Sneaker",
            "loafers",
            "Sports Shoes",
            "Kids",
            "Formal Shoes",
            "Sandals",
            "Boots"
          ].map((item, i) => (
            <div className="text-center" key={i}>
  <div className="flex items-center justify-center">
    <div className="!w-20 !h-20 rounded-full border border-gray-300 shadow-sm 
                    flex items-center justify-center bg-white hover:shadow-md 
                    transition-all duration-200">
      <img
        src={`/categories/${item}.png`}
							  alt={item}
							  height="100"
							  width="100"
        className="!w-12 !h-12 object-contain"
      />
    </div>
  </div>
  
  <p className="mt-2 text-sm font-medium text-gray-700">{item}</p>
</div>

          ))}

        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="container my-4">
        <h3 className="text-center pb-4">Products</h3>

        <div className="row row-cols-1 row-cols-md-4 g-4">

          {[1-1,1-2,2-1,3-1,4-1,5-1].map((p) => (
            <div className="col" key={p}>
              <div className="card h-100">
                <img 
                  src={`/samples/1-1.webp`} 
                  className="card-img-top" 
                  alt={`Product ${p}`}
                />
                <div className="card-body">
                  <h5 className="card-title">Product {p}</h5>
                  <p className="card-text">₹499 Only</p>
                  <button className="btn btn-dark btn-sm me-2">Add to Cart</button>
                  <button className="btn btn-primary btn-sm">Buy Now</button>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Home;
