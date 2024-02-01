function SocialButtons({ linkedinLink, twitterLink }) {
  const buttonStyle = {
    borderRadius: '8px',
    padding: '10px',
    margin: '5px',
    backgroundColor: '#0077B5',
    color: 'white',
    textDecoration: 'none',
    display: 'inline-block',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div>
      <a href={linkedinLink} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
        LinkedIn
      </a>
      <a href={twitterLink} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
        Twitter
      </a>
    </div>
  );
}

export default SocialButtons;
