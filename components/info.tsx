import Image from "next/image";

export default function Info() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <span className="title-text mt-4">공연 정보</span>
        <div className="px-4">
          <Image
            src={"/poster.jpeg"}
            width={1252}
            height={1766}
            alt="포스터"
            className="rounded-md"
          />
        </div>
      </div>
      <div>
        <div className="px-4">
          <Image
            src={"/synopsis.png"}
            width={1252}
            height={1766}
            alt="시놉시스"
            className="rounded-md"
          />
        </div>
      </div>
      <div>
        <span className="title-text">NOTICE</span>
        <div className="px-4">
          <Image
            src={"/notice.png"}
            width={1252}
            height={1766}
            alt="포스터"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
