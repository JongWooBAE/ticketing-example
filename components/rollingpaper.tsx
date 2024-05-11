import Image from "next/image";

export default function Rollingpaper() {
  return (
    // top-[calc(-100vw*833/1252+90px)] blur-[6px] sm:top-[calc(-640px*833/1252+90px)]"
    <div className="flex flex-col items-center base-bg">
      <span className="title-text w-[calc(100vw-74px)] sm:w-[calc(640px-74px)]">응원의 롤링페이퍼</span>
      <Image
        src="/rollingpaper3.png"
        width={800}
        height={800}
        alt="롤링페이퍼"
        className="w-[70%] mt-4 rounded-lg"
      />
      <a href="#" className="w-[50%] bg-blue-400 rounded-lg mt-4">
      {/* <a href="https://rollingpaper.site/rolls/1001555" className="w-[50%] bg-blue-400 rounded-lg mt-4"> */}
        <span className="flex justify-center py-2 text-white">
          롤링페이퍼 쓰러 가기
        </span>
      </a>
    </div>
  );
}
