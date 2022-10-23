import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import House1 from "../../assets/images/house1.png";
import House2 from "../../assets/images/house2.png";
import House3 from "../../assets/images/house3.png";
import House4 from "../../assets/images/house4.png";

const Card = () => {
  const cardItems = [
    {
      images: [House1, House2, House3, House4],
      location: "Lagos, Nigeria",
      ratings: "New",
      date: "Jan 3-8",
      price: "$507",
    },
    {
      images: [House1, House2, House3, House4],
      location: "Lagos, Nigeria",
      ratings: "4.74",
      date: "Jan3 3-8",
      price: "$507",
    },
    {
      images: [House1, House2, House3, House4],
      location: "Lagos, Nigeria",
      ratings: "4.74",
      date: "Jan3 3-8",
      price: "$507",
    },
    {
      images: [House1, House2, House3, House4],
      location: "Lagos, Nigeria",
      ratings: "4.74",
      date: "Jan3 3-8",
      price: "$507",
    },
    {
      images: [House1, House2, House3, House4],
      location: "Lagos, Nigeria",
      ratings: "New",
      date: "Jan 3-8",
      price: "$507",
    },
    {
      images: [House1, House2, House3, House4],
      location: "Lagos, Nigeria",
      ratings: "4.74",
      date: "Jan3 3-8",
      price: "$507",
    },
    {
      images: [House1, House2, House3, House4],
      location: "Lagos, Nigeria",
      ratings: "4.74",
      date: "Jan3 3-8",
      price: "$507",
    },
    {
      images: [House1, House2, House3, House4],
      location: "Lagos, Nigeria",
      ratings: "4.74",
      date: "Jan3 3-8",
      price: "$507",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-10 md:gap-6 mt-4 px-8">
      {cardItems.map((item, index) => (
        <div key={index}>
          <img src="" alt="" className="" />
          <Carousel
            additionalTransfrom={0}
            centerMode={false}
            shouldResetAutoplay={false}
            containerClass="container"
            //itemClass="ml-10"
            partialVisible={true}
            customLeftArrow={
              <button
                type="button"
                className="border border-neutral absolute shadow-default left-4 bg-white  w-8 h-8 rounded-full flex items-center justify-center"
              >
                <BiChevronLeft color="black" size={22} />
              </button>
            }
            customRightArrow={
              <button
                type="button"
                className="border border-neutral absolute shadow-default  right-8 w-8 h-8  bg-white rounded-full flex items-center justify-center"
              >
                <BiChevronRight color="black" size={22} />
              </button>
            }
            draggable={false}
            swipeable={false}
            focusOnSelect={false}
            keyBoardControl
            renderButtonGroupOutside={true}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
                //partialVisibilityGutter: 10,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
            }}
            showDots={true}
            slidesToSlide={1}
          >
            {item.images.map((item, index) => (
              <img
                key={index}
                src={item}
                alt=""
                //h-40 md:h-52 w-80 object-cover rounded-t-xl
                className="w-72 object-cover"
                width={200}
                height={200}
              />
            ))}
          </Carousel>
          <div>
            <p className="font-semibold">{item.location} </p>
            <div>
              <img src="" alt="" />
              <p>{item.ratings}</p>
            </div>
          </div>
          <p>{item.date}</p>
          <p>
            <span className="font-semibold"> {item.price}</span> night
          </p>
        </div>
      ))}
      
    </div>
  );
};

export default Card;
