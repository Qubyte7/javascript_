import React from "react";
import Card from "./card";
import Search_box from "./search-box";

const Home = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-7">
      <div className="flex flex-row w-[80vw] items-center justify-between">
        <div className="aura-header flex flex-row gap-5 justify-center">
          <img
            src="/images/logo_black.svg"
            alt="aura logo"
            className="w-[3rem]"
          />
          <h1 className="text-5xl font-display-crash-medium">Aura</h1>
        </div>
        <img
          src="/images/profile_img.jpg"
          alt="profile img"
          className="w-[4rem] h-[4rem] rounded-full "
        />
      </div>
      <img src="/images/poster.png" alt="poster image" className="w-[83vw]" />
      <Search_box />
      <p className="font-lexend text-3xl font-bold">Our products</p>
      <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
