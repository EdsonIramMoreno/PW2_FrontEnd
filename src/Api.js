const API_URL = 'http://localhost:3001/api';

const API_MODULE_USER = 'user';
const API_MODULE_POST = 'post';
const API_MODULE_MEDIA = 'media';
const API_MODULE_ABOUT = 'about';
const API_MODULE_SOCIAL_MEDIA = 'social_media';

export const API_ENDPOINTS_USER = {
  getUsers: `${API_URL}/${API_MODULE_USER}`,
  userLogin: `${API_URL}/${API_MODULE_USER}/userLogin`,
  userRegister: `${API_URL}/${API_MODULE_USER}/userRegister`
};

export const API_ENDPOINTS_POST = {
    getPosts: `${API_URL}/${API_MODULE_POST}`,
    postUpload: `${API_URL}/${API_MODULE_POST}/postUpload`,
    postUpdate: `${API_URL}/${API_MODULE_POST}/postUpdate`
};

export const API_ENDPOINTS_MEDIA = {
    getMedia: `${API_URL}/${API_MODULE_MEDIA}`,
    mediaCreation: `${API_URL}/${API_MODULE_MEDIA}/mediaCreation`,
    mediaUpdate: `${API_URL}/${API_MODULE_MEDIA}/mediaUpdate`
};

export const API_ENDPOINTS_ABOUT = {
    getAbout: `${API_URL}/${API_MODULE_ABOUT}`,
    aboutUpdate: `${API_URL}/${API_MODULE_ABOUT}/aboutUpdate`
};

export const API_ENDPOINTS_SOCIAL_MEDIA = {
    getSocialMedia: `${API_URL}/${API_MODULE_SOCIAL_MEDIA}`,
    socialMediaUpload: `${API_URL}/${API_MODULE_SOCIAL_MEDIA}/social_media_Upload`,
    socialMeidaUpdate: `${API_URL}/${API_MODULE_SOCIAL_MEDIA}/social_media_Update`
};
  

