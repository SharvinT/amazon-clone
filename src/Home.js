import React from 'react';
import "./Home.css";
import Product from "./Product";
export default function Home() {
    return (
        <div className="home" >
            <img 
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB409152107_.jpg" 
                alt=""
            />
            {/* products is, title, rating. image */}
            <div className="home__row">
                <Product 
                    id="1234"
                    title="The lean startup:Now Constant innovation creates"
                    price={199.96}
                    rating={3}
                    image = "https://www.amazon.in/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg"
                />
                <Product 
                    id="4567"
                    title="The 3 Mistakes of My Life Paperback – 1"
                    price={549.96}
                    rating={5}
                    image = "https://www.amazon.in/images/I/51nziLHeduL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="7890"
                    title="One Night @ the call center"
                    price={599.96}
                    rating={4}
                    image = "https://www.amazon.in/images/I/41cxBmgXFML._SX311_BO1,204,203,200_.jpg"
                />
                <Product 
                    id="2468"
                    title="Half Girlfriend"
                    price={140.96}
                    rating={5}
                    image = "https://www.amazon.in/images/I/51IpHUkHttL._SX326_BO1,204,203,200_.jpg"
                />
                <Product 
                    id="1357"
                    title="The India Positive"
                    price={189.96}
                    rating={5}
                    image = "https://www.amazon.in/images/I/51EAxY6xhwL._SX320_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="14916"
                    title="Samsung 49 CHG90 Super Ultra-Wide Monitor - Matte dark blue black
                    Model:C49HG90SKU:6115611"
                    price={89000.96}
                    rating={5}
                    image = "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6115/6115611_sd.jpg;maxHeight=640;maxWidth=550"
                />
                {/* product */}
            </div>
        </div>
    );
}
