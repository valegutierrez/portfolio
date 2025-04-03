import BehanceIconFuschia from "../../assets/svg/behance-fuschia.svg"
import GithubIconFuschia from "../../assets/svg/github-fuschia.svg"
import InstagramIconFuschia from "../../assets/svg/instagram-fuschia.svg"
import LinkedinIconFuschia from "../../assets/svg/linkedin-fuschia.svg"
import BehanceIcon from "../../assets/svg/behance-svg.svg"
import GithubIcon from "../../assets/svg/github-svg.svg"
import InstagramIcon from "../../assets/svg/instagram-svg.svg"
import LinkedinIcon from "../../assets/svg/linkedin-svg.svg"


interface SNIProps {
  fuschia?: boolean;
}

function SocialNetworkIcons(props: SNIProps) {
  const { fuschia } = props;

  return (
    <div className="footer-sn">
      <a href="https://www.behance.net/valeux" target="_blank"><img src={fuschia ? BehanceIconFuschia : BehanceIcon} className="sn-icon"/></a>
      <a href="https://github.com/valegutierrez" target="_blank"><img src={fuschia ? GithubIconFuschia : GithubIcon} className="sn-icon"/></a>
      <a href="https://www.instagram.com/poricorgi" target="_blank"><img src={fuschia ? InstagramIconFuschia : InstagramIcon} className="sn-icon"/></a>
      <a href="https://www.linkedin.com/in/valegutierrezc/" target="_blank"><img src={fuschia ? LinkedinIconFuschia : LinkedinIcon} className="sn-icon"/></a>
    </div>
  )
}
export default SocialNetworkIcons;