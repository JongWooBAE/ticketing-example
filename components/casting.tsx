import Image from "next/image";

export default function Casting() {
  return (
    <div>
      <span>캐스팅 사진</span>
      <div className="flex flex-col gap-2">
        <div className="flex w-full justify-center gap-2">
          <Image
            src="/casting/Chad_B.png"
            width={400}
            height={200}
            alt="포스터"
            className="w-[24%]"
          />
          <Image
            src="/casting/Natalie_B.png"
            width={400}
            height={200}
            alt="포스터"
            className="w-[24%]"
          />
        </div>
        <div className="flex w-full gap-2 justify-around">
          <Image
            src="/casting/Jim_B.png"
            width={400}
            height={200}
            alt="포스터"
            className="w-[24%]"
          />
          <Image
            src="/casting/Silvia_B.png"
            width={400}
            height={200}
            alt="포스터"
            className="w-[24%]"
          />
          <Image
            src="/casting/Dennis_B.png"
            width={400}
            height={200}
            alt="포스터"
            className="w-[24%]"
          />
          <Image
            src="/casting/Sandra_B.png"
            width={400}
            height={200}
            alt="포스터"
            className="w-[24%]"
          />
        </div>
        <div className="flex w-full gap-2 justify-around">
          <Image
            src="/casting/Dean_B.png"
            width={400}
            height={200}
            alt="포스터"
            className="w-[24%]"
          />
          <Image
            src="/casting/Lorraine_B.png"
            width={400}
            height={200}
            alt="포스터"
            className="w-[24%]"
          />
          <Image
            src="/casting/Matilda_B.png"
            width={400}
            height={200}
            alt="포스터"
            className="w-[24%]"
          />
          <Image
            src="/casting/Earl_B.png"
            width={400}
            height={200}
            alt="포스터"
            className="w-[24%]"
          />
        </div>
      </div>
    </div>
  );
}
