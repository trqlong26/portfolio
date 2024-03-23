import Link from "next/link";
import { GrGithub, GrLinkedin } from "react-icons/gr";

const socials = [
  {
    path: "https://github.com/trqlong26",
    icon: <GrGithub />,
  },
  {
    path: "https://www.linkedin.com/in/long-tran-quang-0b76922bb/",
    icon: <GrLinkedin />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((social, index) => {
        return (
          <Link href={social.path} key={index} target="_blank">
            <div className={`${iconStyles}`}>{social.icon}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
