import RadioGroup from "./radio_team/radioGroup";
import Radio from "./radio_team/radio";
import { useState } from "react";
import BTeam from "./BTeam";
import ATeam from "./ATeam";
import Image from "next/image";

export default function Casting2() {
  const [team, setTeam] = useState("A");

  return (
    <div className="flex flex-col gap-10">
      <div className="base-bg">
        <span className="title-text">타임테이블</span>
        <Image
          src="/casting/timetable.png"
          width={2504}
          height={3532}
          alt="포스터"
          className="w-full px-4"
        />
      </div>
      <div>
        <div className="base-bg">
          <span className="title-text">캐스팅 사진</span>
          <div className="mb-2">
            <RadioGroup
              label={false}
              value={team}
              onChange={setTeam}
              className={"flex justify-around"}
            >
              <Radio name="team" id={"A"} value={"A"}>
                A팀
              </Radio>
              <Radio name="team" id={"B"} value={"B"}>
                B팀
              </Radio>
            </RadioGroup>
          </div>

          <div>{team == "A" ? <ATeam /> : <BTeam />}</div>
        </div>
      </div>
    </div>
  );
}
