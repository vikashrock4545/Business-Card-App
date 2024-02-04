import './index.css'
function SocialButtons({ linkedinLink, twitterLink }) {

  return (
    <div>
      <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="button-style">
        LinkedIn
      </a>
      <a href={twitterLink} target="_blank" rel="noopener noreferrer" className="button-style">
        Twitter
      </a>
    </div>
  );
}

export default SocialButtons;
