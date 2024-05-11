import Casting2 from "@components/casting2";
import Rollingpaper from "@components/rollingpaper";
import Info from "@components/info";
import Radio from "@components/radio/radio";
import RadioGroup from "@components/radio/radioGroup";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

const Home: NextPage = () => {
  const [select, setSelect] = useState("공연정보");

  return (
    <div className="flex flex-col max-w-[640px] shadow-2xl sm:mx-[calc(50vw-320px)]">
      <div className="h-[180px] relative">
        <Image
          src="/poster.jpeg"
          width={2504}
          height={3532}
          alt="포스터"
          className="absolute w-[100%] top-[calc(-100vw*833/1252+90px)] blur-[6px] sm:top-[calc(-640px*833/1252+90px)]"
        />
        <Image
          src="/poster.jpeg"
          width={1169}
          height={2478}
          alt="포스터"
          className="z-20 w-[115px] h-[162px] absolute top-[55px] left-[25px]"
        />
        <div className="absolute bottom-3 right-4 text-slate-100 text-[14px] flex items-center gap-1">
          <span>내 마음속 1위</span>
          <span className="text-[1px] mr-1">►</span>
          <span>평점 10.0</span>
          <span className="text-[1px]">►</span>
        </div>
      </div>
      <div className="z-10 bg-white pt-[50px] px-[20px] ">
        <div className="grid">
          <span className="text-[24px] font-[600] ">
            쇼 뮤지컬 {"<"}BURNIN&apos; LUV{">"}
          </span>
          <span className="text-[13px] text-slate-500">
            뮤지컬·120분·8세이상 관람가능
          </span>
          <div className="py-2">
            <a
              href="https://map.naver.com/p/entry/place/13503358?lng=126.883962400377&lat=37.4999740005826&placePath=%2Fhome&entry=plt&c=15.00,0,0,0,dh"
              className="flex justify-start items-center text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span className="text-[15px] pl-1">예술나무씨어터</span>
            </a>
            <div className="flex justify-start items-center gap-1 py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              <span className="">2023.10.07~2023.10.08</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <RadioGroup
            label={false}
            value={select}
            onChange={setSelect}
            className={"flex border rounded-xl"}
          >
            <Radio name="select" id={"공연정보"} value={"공연정보"}>
              공연정보
            </Radio>
            <Radio name="select" id={"캐스팅"} value={"캐스팅"}>
              캐스팅
            </Radio>
            <Radio name="select" id={"롤링페이퍼"} value={"롤링페이퍼"}>
              롤링페이퍼
            </Radio>
          </RadioGroup>
        </div>
        <div className="mt-10 mb-20 base-bg">
          {select == "공연정보" ? (
            <Info />
          ) : select == "캐스팅" ? (
            <Casting2 />
          ) : (
            <Rollingpaper />
          )}
        </div>
      </div>

      <footer className="fixed bottom-0 z-30 bg-white border border-white">
        <a href="" onClick={() => alert("예매창은 만료되었습니다. 현장예매 부탁드립니다.")}>
          {/* <a href="https://forms.gle/GZtCXhkGnEhWXNNo9"> */}
          <span className="text-[17px] font-extrabold flex justify-center w-[calc(100vw-44px)] sm:w-[calc(640px-44px)] bg-blue-500 text-white mx-5 my-2 py-3 rounded-lg">
            예매하기
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
