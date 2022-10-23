import { Modal } from "@mantine/core";
import { Dispatch, SetStateAction, useState } from "react";
import { GrClose } from "react-icons/gr";
import { RangeSlider } from "@mantine/core";
import House from "../../assets/icons/house.svg";
import Hotel from "../../assets/icons/hotel.svg";
import GuestHouse from "../../assets/icons/guestHouse.svg";
import Apartment from "../../assets/icons/apartment.svg";
import styles from "./filterModal.module.scss";

interface FilterProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}
const FilterModal = ({ openModal, setOpenModal }: FilterProps) => {
  const [price, setPrice] = useState<[number, number]>([10, 1000]);

  const [bedroom, setBedroom] = useState("Any");
  const [bed, setBed] = useState("Any");
  const [bathroom, setBathroom] = useState("Any");

  const [propertyType, setPropertyType] = useState("");

  const [showMoreAmenities, setShowMoreAmenities] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showMoreHostLanguage, setShowMoreHostLanguage] = useState(false);

  const placeTypes = [
    { title: "Entire place", description: "A place all to yourself" },
    {
      title: "Private Room",
      description:
        "Your own room in a home or a hotel, plus some shared common spaces",
    },
    {
      title: "Shared room",
      description:
        "A sleeping space and common areas that may be shared with others",
    },
  ];

  const numbers = ["Any", "1", "2", "3", "4", "5", "6", "7", "8+"];

  const propertyTypes = [
    { icon: House, name: "House" },
    { icon: Apartment, name: "Apartment" },
    { icon: GuestHouse, name: "Guest House" },
    { icon: Hotel, name: "Hotel" },
  ];

  const bookingOptions = [
    {
      title: "Instant Book",
      description: "Listings you can book without waiting for Host approval",
    },
    {
      title: "Self check-in",
      description: "Easy access to the property once you arrive",
    },
    {
      title: "Free cancellation",
      description: "Only show stays that offer free cancellation",
    },
  ];
  const essentials = [
    "wifi",
    "Kitchen",
    "Washer",
    "Dryer",
    "Air conditioning",
    "Heating",
    "Dedicated workspace",
    "TV",
    "Hair dryer",
    "iron",
  ];
  const features = [
    "Pool",
    "Hot tub",
    "Free parking on premises",
    "EV charger",
    "Crib",
    "Gym",
    "BBQ grill",
    "Breakfast",
    "Indoor fireplace",
    "Smoking allowed",
  ];
  const location = ["Beachfront", "Waterfront"];
  const safety = ["Smoke alarm", "Carbon monoxide alarm"];
  const guestEntrance = [
    "Step-free guest entrance",
    "Guest entrance wider than 32 inches",
    "Accessibile parking spot",
    "Step-free path to the guest entrance",
  ];
  const bedrooms = [
    "Step-free bedroom access",
    "Bedroom entrance wider than 32 inches",
  ];
  const bathrooms = [
    "Step-free bathroom access",
    "Bathroom entrance wider than 32 inches",
    "shower gab bar",
    "Toilet grab bar",
    "Step-free shower",
    "Shower or bath chair",
  ];
  const adaptiveEquipments = ["ceiling or mobile hoist"];
  const hostLanguage = [
    "English",
    "French",
    "German",
    "Japanese",
    "Italian",
    "Russian",
    "Spanish",
    "Chinese(Simplified)",
    "Arabic",
    "Portuguese",
    "Turkish",
    "Indonesian",
    "Dutch",
    "Greek",
    "Hebrew",
    "Polish",
    "Danish",
    "Swedish",
    "Norwegian",
    "Czech",
  ];
  return (
    <Modal
      opened={openModal}
      onClose={() => setOpenModal(false)}
      //centered
      withCloseButton={false}
      size="xl"
      transition="rotate-right"
      transitionDuration={600}
      overlayBlur={2}
      overlayColor="#132013"
      overlayOpacity={0.2}
    >
      <div className="flex items-center">
        <GrClose
          onClick={() => setOpenModal(false)}
          onKeyDown={() => setOpenModal(false)}
          aria-hidden="true"
          aria-label="close icon"
          className="cursor-pointer"
          size="15px"
        />
        <p className="font-bold body-medium  w-full text-center flex justify-center">
          Filters
        </p>
      </div>
      <hr className="text-neutral mt-3" />
      <div className="h-[450px] overflow-y-scroll">
        <h4 className="text-2xl font-semibold mb-2 mt-4">Price range</h4>
        <p>The average nightly price is $180</p>
        <div className="pt-10 px-6">
          <RangeSlider
            defaultValue={[10, 1000]}
            min={0}
            max={1000}
            value={price}
            onChange={(value: [number, number]) => {
              setPrice(value);
            }}
            data-testid="slider"
            styles={{
              thumb: {
                backgroundColor: "#B3AAAA",
                borderBlockWidth: "15px",
                border: "#B3AAAA",
              },
              bar: { backgroundColor: "#B3AAAA" },
            }}
          />
          <div className="flex mt-2">
            <div className="px-2 md:px-4  items-center border border-neutral h-12 md:h-14 rounded w-full">
              <span className="body-regular">min price</span>
              <div>
                <span>$</span>
                <input
                  type="number"
                  className="rounded"
                  value={price[0]}
                  onChange={(e) => setPrice([Number(e.target.value), price[1]])}
                  data-testid="first_input"
                />
              </div>
            </div>
            <p className="mt-4 font-semibold pl-2 pr-2">-</p>
            <div className="px-2 md:px-4 items-center border border-neutral h-12 md:h-14 rounded w-full">
              <span className="body-regular">max price</span>
              <div>
                <span>$</span>
                <input
                  type="number"
                  className="rounded"
                  value={price[1]}
                  data-testid="second_input"
                  onChange={(e) => setPrice([price[0], Number(e.target.value)])}
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="text-neutral mt-6 mb-8" />
        <h4 className="font-semibold mb-2">Type of place</h4>
        <div className="grid grid-cols-2">
          {placeTypes.map((item, index) => (
            <label key={index} htmlFor="Entire place" className="flex pt-4">
              <div>
                <input
                  type="checkbox"
                  //id="Entire place"
                  className="accent-black-10 focus:ring-0 outline-none cursor-pointer focus:outline-none border border-neutral-10 h-8 w-6"
                  // onChange={() => handleList(index)}
                  // checked={checkboxes[index]}
                />
              </div>

              <div className="flex flex-col ml-4">
                <span> {item.title} </span>
                <span className="text-[#717171]">{item.description} </span>
              </div>
            </label>
          ))}
        </div>
        <hr className="text-neutral mt-10 mb-8" />
        <h4 className="font-semibold mb-2">Rooms and Beds</h4>
        <p className="my-4">Bedrooms</p>
        <div className="flex">
          {numbers.map((item) => (
            <p
              key={item}
              className={`border border-neutral rounded-full hover:border-black-10 h-10 text-center w-16 mr-2 self-center pt-1.5 ${
                item === bedroom && "text-white bg-black-10"
              }`}
              onClick={() => setBedroom(item)}
            >
              {item}
            </p>
          ))}
        </div>
        <p className="my-4">Beds</p>
        <div className="flex">
          {numbers.map((item) => (
            <p
              key={item}
              className={`border border-neutral rounded-full hover:border-black-10 h-10 text-center w-16 mr-2 self-center pt-1.5 ${
                item === bed && "text-white bg-black-10"
              }`}
              onClick={() => setBed(item)}
            >
              {item}
            </p>
          ))}
        </div>
        <p className="my-4">Bathrooms</p>
        <div className="flex">
          {numbers.map((item) => (
            <p
              key={item}
              className={`border border-neutral rounded-full hover:border-black-10 h-10 text-center w-16 mr-2 self-center pt-1.5 ${
                item === bathroom && "text-white bg-black-10"
              }`}
              onClick={() => setBathroom(item)}
            >
              {item}
            </p>
          ))}
        </div>
        <hr className="text-neutral mt-10 mb-8" />
        <h4 className="font-semibold mb-2">Property type</h4>
        <div className="grid grid-cols-4">
          {propertyTypes.map((item, index) => (
            <div
              key={index}
              className={`border border-neutral rounded-md w-[160px] h-[120px] pt-4 pl-4 font-semibold hover:border-black-10 bg-white ${
                item.name === propertyType && "border-black-10 bg-[#eeeee4]"
              }`}
              onClick={() => setPropertyType(item.name)}
            >
              <img src={item.icon} alt="" />
              <p className="pt-8">{item.name}</p>
            </div>
          ))}
        </div>

        <hr className="text-neutral mt-6 mb-8" />
        <h4 className="font-semibold mb-10">Amenities</h4>
        <p className="font-semibold mt-6">Essentials</p>
        <div className="grid grid-cols-2">
          {essentials.slice(0, 6).map((item, index) => (
            <label key={index} htmlFor="Entire place" className="flex pt-4">
              <div>
                <input
                  type="checkbox"
                  //id="Entire place"
                  className="accent-black-10 focus:ring-0 outline-none cursor-pointer focus:outline-none border border-neutral-10 h-8 w-6"
                  // onChange={() => handleList(index)}
                  // checked={checkboxes[index]}
                />
              </div>

              <p className="ml-4"> {item} </p>
            </label>
          ))}
        </div>
        {showMoreAmenities ? (
          <>
            <div className="grid grid-cols-2">
              {essentials.slice(6, 11).map((item, index) => (
                <label key={index} htmlFor="Entire place" className="flex pt-4">
                  <div>
                    <input
                      type="checkbox"
                      //id="Entire place"
                      className="accent-black-10 focus:ring-0 outline-none cursor-pointer focus:outline-none border border-neutral-10 h-8 w-6"
                      // onChange={() => handleList(index)}
                      // checked={checkboxes[index]}
                    />
                  </div>

                  <p className="ml-4"> {item} </p>
                </label>
              ))}
            </div>
            <p className="font-semibold mt-6">Features</p>
            <div className="grid grid-cols-2">
              {features.map((item, index) => (
                <label key={index} htmlFor="Entire place" className="flex pt-4">
                  <div>
                    <input
                      type="checkbox"
                      //id="Entire place"
                      className="accent-black-10 focus:ring-0 outline-none cursor-pointer focus:outline-none border border-neutral-10 h-8 w-6"
                      // onChange={() => handleList(index)}
                      // checked={checkboxes[index]}
                    />
                  </div>

                  <p className="ml-4"> {item} </p>
                </label>
              ))}
            </div>
            <p className="font-semibold mt-6">Location</p>
            <div className="grid grid-cols-2">
              {location.map((item, index) => (
                <label key={index} htmlFor="Entire place" className="flex pt-4">
                  <div>
                    <input
                      type="checkbox"
                      //id="Entire place"
                      className="accent-black-10 focus:ring-0 outline-none cursor-pointer focus:outline-none border border-neutral-10 h-8 w-6"
                     
                    />
                  </div>

                  <p className="ml-4"> {item} </p>
                </label>
              ))}
            </div>
            <p className="font-semibold mt-6">Safety</p>
            <div className="grid grid-cols-2">
              {safety.map((item, index) => (
                <label key={index} htmlFor="Entire place" className="flex pt-4">
                  <div>
                    <input
                      type="checkbox"
                      //id="Entire place"
                      className="accent-black-10 focus:ring-0 outline-none cursor-pointer focus:outline-none border border-neutral-10 h-8 w-6"
                      // onChange={() => handleList(index)}
                      // checked={checkboxes[index]}
                    />
                  </div>

                  <p className="ml-4"> {item} </p>
                </label>
              ))}
            </div>
            <p
              className="font-semibold underline cursor-pointer mt-2"
              onClick={() => setShowMoreAmenities(false)}
            >
              Show less
            </p>
          </>
        ) : (
          <p
            className="font-semibold underline cursor-pointer mt-2"
            onClick={() => setShowMoreAmenities(true)}
          >
            Show more
          </p>
        )}
        <hr className="text-neutral mt-8 mb-8" />
        <h4 className="font-semibold mb-6">Booking options</h4>

        {bookingOptions.map((item, index) => (
          <div key={index} className="flex justify-between mb-4 pr-10">
            <div>
              <p>{item.title}</p>
              <p className="text-black-20 body-regular">{item.description}</p>
            </div>

            <label className={styles.switch}>
              <input
                type="checkbox"
                
              />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
          </div>
        ))}
        <hr className="text-neutral mt-10 mb-8" />
        <h4 className="font-semibold mb-2">Accessibility features</h4>
        <p>This info was provided by the Host and reviewed by Airbnb</p>
        <p className="font-semibold mt-12">Guest entrance and parking</p>
        <div className="grid grid-cols-2">
          {guestEntrance.map((item, index) => (
            <label key={index} htmlFor="Entire place" className="flex pt-4">
              <div>
                <input
                  type="checkbox"
                  //id="Entire place"
                  className="accent-black-10 focus:ring-0 outline-none cursor-pointer focus:outline-none border border-neutral-10 h-8 w-6"
                  // onChange={() => handleList(index)}
                  // checked={checkboxes[index]}
                />
              </div>

              <p className="ml-4"> {item} </p>
            </label>
          ))}
        </div>
        {showMore ? (
          <>
            <p className="font-semibold mt-6">Bedroom</p>
            <div className="grid grid-cols-2">
              {bedrooms.map((item, index) => (
                <label key={index} htmlFor="Entire place" className="flex pt-4">
                  <div>
                    <input
                      type="checkbox"
                      //id="Entire place"
                      className="accent-black-10 focus:ring-0 outline-none cursor-pointer focus:outline-none border border-neutral-10 h-8 w-6"
                      // onChange={() => handleList(index)}
                      // checked={checkboxes[index]}
                    />
                  </div>

                  <p className="ml-4"> {item} </p>
                </label>
              ))}
            </div>
            <p className="font-semibold mt-6">Bathroom</p>
            <div className="grid grid-cols-2">
              {bathrooms.map((item, index) => (
                <label key={index} htmlFor="Entire place" className="flex pt-4">
                  <div>
                    <input
                      type="checkbox"
                      //id="Entire place"
                      className="accent-black-10 focus:ring-0 outline-none cursor-pointer focus:outline-none border border-neutral-10 h-8 w-6"
                      // onChange={() => handleList(index)}
                      // checked={checkboxes[index]}
                    />
                  </div>

                  <p className="ml-4"> {item} </p>
                </label>
              ))}
            </div>

            <p className="font-semibold mt-6">Adaptive equiment</p>
            <div className="grid grid-cols-2">
              {adaptiveEquipments.map((item, index) => (
                <label key={index} htmlFor="Entire place" className="flex pt-4">
                  <div>
                    <input
                      type="checkbox"
                      //id="Entire place"
                      className="accent-black-10 focus:ring-0 outline-none cursor-pointer focus:outline-none border border-neutral-10 h-8 w-6"
                    />
                  </div>

                  <p className="ml-4"> {item} </p>
                </label>
              ))}
            </div>

            <p
              className="font-semibold underline cursor-pointer mt-2"
              onClick={() => setShowMore(false)}
            >
              Show less
            </p>
          </>
        ) : (
          <p
            className="font-semibold underline cursor-pointer mt-2"
            onClick={() => setShowMore(true)}
          >
            Show more
          </p>
        )}
        <hr className="text-neutral mt-6 mb-8" />
        <h4 className="font-semibold mb-2">Top tier stays</h4>
        <div className="flex justify-between mb-4 pr-10">
          <div>
            <p>Superhost</p>
            <p className="text-black-20 body-regular">
              Stay with recognized Hosts
            </p>
            <a className="font-semibold underline body-regular" href="#">
              Learn more
            </a>
          </div>

          <label className={styles.switch}>
            <input
              type="checkbox"
              //checked={checked}
              // onChange={(event) => {
              //   setChecked(event.currentTarget.checked);
              // }}
            />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
        </div>
        <div className="flex justify-between mb-4 pr-10">
          <div>
            <p>Airnbnb Plus</p>
            <p className="text-black-20 body-regular">
              A selection of places to stay verified for quality and design
            </p>
          </div>

          <label className={styles.switch}>
            <input
              type="checkbox"
              //checked={checked}
              // onChange={(event) => {
              //   setChecked(event.currentTarget.checked);
              // }}
            />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
        </div>
        <hr className="text-neutral mt-10 mb-8" />
        <h4 className="font-semibold mb-2">Host language</h4>
        <div className="grid grid-cols-2">
          {hostLanguage.slice(0, 4).map((item, index) => (
            <label key={index} htmlFor="Entire place" className="flex pt-4">
              <div>
                <input
                  type="checkbox"
                  //id="Entire place"
                  className="accent-black-10 focus:ring-0 outline-none cursor-pointer focus:outline-none border border-neutral-10 h-8 w-6"
                  // onChange={() => handleList(index)}
                  // checked={checkboxes[index]}
                />
              </div>

              <p className="ml-4"> {item} </p>
            </label>
          ))}
        </div>
        {showMoreHostLanguage ? (
          <>
            <div className="grid grid-cols-2">
              {hostLanguage.slice(4, 21).map((item, index) => (
                <label key={index} htmlFor="Entire place" className="flex pt-4">
                  <div>
                    <input
                      type="checkbox"
                      //id="Entire place"
                      className="accent-black-10 focus:ring-0 outline-none cursor-pointer focus:outline-none border border-neutral-10 h-8 w-6"
                      // onChange={() => handleList(index)}
                      // checked={checkboxes[index]}
                    />
                  </div>

                  <p className="ml-4"> {item} </p>
                </label>
              ))}
            </div>
            <p
              className="font-semibold underline cursor-pointer mt-2 mb-10"
              onClick={() => setShowMoreHostLanguage(false)}
            >
              Show less
            </p>
          </>
        ) : (
          <p
            className="font-semibold underline cursor-pointer mt-2 mb-10"
            onClick={() => setShowMoreHostLanguage(true)}
          >
            Show more
          </p>
        )}
      </div>
      <div className="flex border-t border-neutral justify-between pt-4 bg-white items-center">
        <a className="font-semibold underline" href="#">
          Clear all
        </a>
        <button className="rounded-md bg-black-10 text-white p-4 ">
          Show 331 homes
        </button>
      </div>
    </Modal>
  );
};

export default FilterModal;
