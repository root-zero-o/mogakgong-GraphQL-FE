import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import Seo from "../components/Seo";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="wrapper h-full bg-ivory overflow-hidden">
      <Seo title="Home"/>
      <div className="circle shadow-lg absolute left-[25px] top-[5px] w-[120px] h-[120px] bg-green_light" />
      <div className="circle shadow-lg absolute right-[-20px] top-[-20px] w-[180px] h-[180px] bg-green_deep" />
      <div className="circle shadow-lg absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 w-[330px] h-[330px] bg-green_mid">
        <span className="text-7xl">모각공</span>
        <span className="text-xl mt-2">모여서 각자 공부하자!</span>
      </div>
      <div
        className="circle shadow-lg absolute hover left-[-50px] bottom-[20px] w-[150px] h-[150px] bg-green_deep"
        onClick={() => router.push("/aboutUs")}
      >
        <span className="text-xl mt-2 ml-8">
          만든 <br /> 사람들
        </span>
      </div>
      <div
        className="circle shadow-lg absolute hover right-[30px] bottom-[-25px] w-[190px] h-[190px] bg-green_light"
        onClick={() => router.push("/login")}
      >
        <span className="text-4xl">시작하기</span>
      </div>
    </div>
  );
};

export default Home;
