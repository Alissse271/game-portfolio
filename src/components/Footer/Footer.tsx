import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  MailIcon,
  TelegramIcon,
  YoutubeIcon,
} from "assets";
import { Link, StyledFooter, YoutubeLink } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <Link href="#">
        <DiscordIcon />
      </Link>
      <Link href="#">
        <GithubIcon />
      </Link>
      <Link href="#">
        <InstagramIcon />
      </Link>
      <Link href="#">
        <MailIcon />
      </Link>
      <Link href="#">
        <TelegramIcon />
      </Link>
      <YoutubeLink href="#">
        <YoutubeIcon />
      </YoutubeLink>
    </StyledFooter>
  );
};
