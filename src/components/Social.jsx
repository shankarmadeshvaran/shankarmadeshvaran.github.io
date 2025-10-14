import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaEnvelope,
  FaTwitter,
  FaStackOverflow,
} from 'react-icons/fa';
import endpoints from '../constants/endpoints';

const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  socialIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    fontSize: '24px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
};

const getIcon = (network) => {
  switch (network.toLowerCase()) {
    case 'linkedin':
      return <FaLinkedin />;
    case 'github':
      return <FaGithub />;
    case 'medium':
      return <FaMedium />;
    case 'email':
      return <FaEnvelope />;
    case 'twitter':
      return <FaTwitter />;
    case 'stackoverflow':
      return <FaStackOverflow />;
    default:
      return <FaEnvelope />;
  }
};

const getNetworkColor = (network) => {
  switch (network.toLowerCase()) {
    case 'linkedin':
      return '#0077B5';
    case 'github':
      return '#333';
    case 'medium':
      return '#00AB6C';
    case 'email':
      return '#EA4335';
    case 'twitter':
      return '#1DA1F2';
    case 'stackoverflow':
      return '#FF9900';
    default:
      return '#333';
  }
};

function Social() {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.social, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('Social data loaded:', res);
        setData(res);
      })
      .catch((err) => {
        console.error('Error loading social data:', err);
      });
  }, []);

  console.log('Social component rendered, data:', data, 'theme:', theme);

  return (
    <div className="social">
      {data ? data.social.map((social) => (
        <a
          key={social.network}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.iconStyle,
            ...styles.socialIcon,
            backgroundColor: getNetworkColor(social.network),
            color: 'white',
            border: `2px solid ${getNetworkColor(social.network)}`,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}
          title={social.network}
        >
          {getIcon(social.network)}
        </a>
      )) : null}
    </div>
  );
}

export default Social;
