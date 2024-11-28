import React, { useState, useRef } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";


const HomeSectionCarousel = ({data, sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    if (activeIndex > 0) {
      const newIndex = activeIndex - 1;
      setActiveIndex(newIndex);
      carouselRef.current.slideTo(newIndex);
    }
  };

  const slideNext = () => {
    if (activeIndex < data.length - 5) {
      const newIndex = activeIndex + 1;
      setActiveIndex(newIndex);
      carouselRef.current.slideTo(newIndex);
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(0, 10).map((item) => (
    <HomeSectionCard key={item.id} product={item} />
  ));

  return (
    <div>
      <h2 className="text-3xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          ref={carouselRef}
        />
        {activeIndex < items.length - 5 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}

        {activeIndex > 0 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;



// import React from "react";
// import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
// import AliceCarousel from "react-alice-carousel";
// import { Button } from "@mui/material";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import { useEffect, useState } from "react";
// import { mens_kurta } from "../../../Data/mens_kurta";

// const HomeSectionCarousel = () => {
//   const [activeIndex, setActiveIndex]= useState(0);
//   const responsive = {
//     0: { items: 1 },
//     720: { items: 3 },
//     1024: { items: 5.5 },
//   };

//   const slidePrev = () => setActiveIndex(activeIndex - 1);
//   const slideNext = () => setActiveIndex(activeIndex + 1);

//   const syncActiveIndex = ({ item }) => setActiveIndex(item);

//   const items = mens_kurta
//     .slice(0, 10)
//     .map((item) => <HomeSectionCard product={item} />);
//   return (
//     <div className="border">
//       <div className="relative p-5">
//         <AliceCarousel
//           items={items}
//           disableButtonsControls
//           responsive={responsive}
//           disableDotsControls
//           onSlideChanged={syncActiveIndex}
//           activeIndex={activeIndex}
//         />
//         {activeIndex !== items.length - 5 && (
//           <Button
//             variant="contained"
//             className="z-50 bg-white"
//             onClick={slideNext}
//             sx={{
//               position: "absolute",
//               top: "8rem",
//               right: "0rem",
//               transform: "translateX(50%) rotate(90deg)",
//               bgcolor: "white",
//             }}
//             aria-label="next"
//           >
//             <KeyboardArrowLeftIcon
//               sx={{ transform: "rotate(90deg)", color: "black" }}
//             />
//           </Button>
//         )}

//         {activeIndex !== items.length - 5 && (
//           <Button
//             variant="contained"
//             className="z-50 bg-white"
//             onClick={slidePrev}
//             sx={{
//               position: "absolute",
//               top: "8rem",
//               left: "0rem",
//               transform: "translateX(-50%) rotate(90deg)",
//               bgcolor: "white",
//             }}
//             aria-label="next"
//           >
//             <KeyboardArrowLeftIcon
//               sx={{ transform: "rotate(-90deg)", color: "black" }}
//             />
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCarousel;
