import { FunctionComponent } from "react";
import Image from "next/image";
import { SMainNavProfile } from "./styles/SMainNavProfile";

interface IProfile {
  name: string;
  avatar: string;
}

export const MainNavProfile: FunctionComponent<IProfile> = ({
  avatar,
  name,
}) => {
  return (
    <SMainNavProfile>
      {name && <p>{name}</p>}
      {avatar && <Image src={avatar} alt={name} width={30} height={30} />}
    </SMainNavProfile>
  );
};
