import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4003/book");
        const data = res.data.filter(
          (data) =>
            data.category === "Novel" ||
            "Mystery" ||
            "Documentary" ||
            "Historical"
        );
        console.log("Fetched books:", data);
        setBook(data);
      } catch (error) {
        console.error("Error fetching books:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    className: "py-8",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  if (loading) {
    return <div className="text-center py-10">Loading books...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  if (!book.length) {
    return <div className="text-center py-10">No Novels available</div>;
  }

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-8 lg:px-12 ">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Novels</h2>
        <p className="text-gray-600">Explore our collection of Novels</p>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
