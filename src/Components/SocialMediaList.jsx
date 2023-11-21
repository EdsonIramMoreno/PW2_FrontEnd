import React, { useEffect, useState } from 'react';
import SocialMediaItem from './SocialMediaItem';
import FaceImg from '../assets/img/Facebook.jpg';
import { API_ENDPOINTS_SOCIAL_MEDIA } from '../Api';

function SocialMediaList() {
  // Initialize socialMedia as an empty array
  const [socialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINTS_SOCIAL_MEDIA.getSocialMedia);

        if (response.ok) {
          const result = await response.json();
          setSocialMedia(result.data);
        } else {
          console.error('Failed to fetch data:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error during data fetching:', error);
        setSocialMedia([]);
      }
    };

    fetchData();
  }, [socialMedia]);

  return (
    <div className="social-media-list">
      {socialMedia
        .filter(media => media.isActive)
        .map((media) => (
          <SocialMediaItem
            key={media._id}
            icon={media.icon}
            name={media.name}
            url={media.url} 
          />
        ))}
    </div>
  );
}

export default SocialMediaList;
