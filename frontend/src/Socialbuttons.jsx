function SocialButtons({ linkedinLink, twitterLink }) {
  const buttonStyle = {
    borderRadius: '8px',
    padding: '10px',
    margin: '5px',
    backgroundColor: '#0077B5',
    color: 'white',
    textDecoration: 'none',
    display: 'inline-block',
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
