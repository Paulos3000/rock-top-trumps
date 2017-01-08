import React from 'react'
import { cloudinaryConfig, CloudinaryImage } from 'react-cloudinary';

cloudinaryConfig({ cloud_name: 'ldldkmn0o' });

const getCloudinaryId = (tag) => `rock-tt/${tag}` 

const Avatar = ({ guitaristId, playerId }) => (
   <CloudinaryImage className={`avatar avatar-reveal avatar-${playerId}`} publicId={getCloudinaryId(guitaristId)}/>
)

export default Avatar;
