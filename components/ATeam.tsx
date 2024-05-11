import Image from "next/image";

export default function ATeam() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full justify-center gap-2">
        <Image
          src="/casting/Chad_A.png"
          width={270}
          height={380}
          alt="프로필 들어갑니다."
          className="w-[45%] border"
        />
        <Image
          src="/casting/Natalie_A.png"
          width={270}
          height={380}
          alt="프로필 들어갑니다."
          className="w-[45%] border"
        />
      </div>
      <div className="flex w-full gap-2 justify-center">
        <Image
          src="/casting/Jim_A.png"
          width={270}
          height={380}
          alt="프로필 들어갑니다."
          className="w-[45%] border"
        />
        <Image
          src="/casting/Silvia_A.png"
          width={270}
          height={380}
          alt="프로필 들어갑니다."
          className="w-[45%] border"
        />
      </div>
      <div className="flex w-full gap-2 justify-center">
        <Image
          src="/casting/Dennis_A.png"
          width={270}
          height={380}
          alt="프로필 들어갑니다."
          className="w-[45%] border"
        />
        <Image
          src="/casting/Sandra_A.png"
          width={270}
          height={380}
          alt="프로필 들어갑니다."
          className="w-[45%] border"
        />
      </div>
      <div className="flex w-full gap-2 justify-center">
        <Image
          src="/casting/Dean_A.png"
          width={270}
          height={380}
          alt="프로필 들어갑니다."
          className="w-[45%] border"
        />
        <Image
          src="/casting/Lorraine_A.png"
          width={270}
          height={380}
          alt="프로필 들어갑니다."
          className="w-[45%] border"
        />
      </div>
      <div className="flex w-full gap-2 justify-center">
        <Image
          src="/casting/Matilda_A.png"
          width={270}
          height={380}
          alt="프로필 들어갑니다."
          className="w-[45%] border"
        />
        <Image
          src="/casting/Earl_A.png"
          width={270}
          height={380}
          alt="프로필 들어갑니다."
          className="w-[45%] border"
        />
      </div>
    </div>
  );
}
