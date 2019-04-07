import React from 'react'

export default function OfficialBanner({bannerOptions}) {
  if (bannerOptions.show) {
    return (
       <gov-banner 
        flag_icon={bannerOptions.flag_icon} 
        alt={bannerOptions.alt}
        title={bannerOptions.title} />
    );
  } else {
    return null;
  }
}