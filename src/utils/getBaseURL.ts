const prod = process.env.REACT_APP_BASE_URL_PROD;
const dev = process.env.REACT_APP_BASE_DEV;

const idProd = process.env.REACT_APP_ID_BASE_URL_PROD;
const idDev = process.env.REACT_APP_ID_BASE_URL_DEV;

const env = process.env.REACT_APP_DEV_ENV

const getBaseURL = () => {
  return (env && env === 'development') ? dev : prod;
};

export const getIDBaseURL = () => {
  return (env && env === 'development') ? idDev : idProd;
};

export const getAppId = () => {
  return (env && env === 'development') ? process.env.REACT_APP_API_KEY_DEV : process.env.REACT_APP_API_KEY;
}

export const getTransferBaseURL = () => {
  return process.env.REACT_APP_BASE_TRANSFER_SERVICE;
  // return (env && env === 'development') ? process.env.REACT_APP_ID_BASE_URL_DEV : process.env.REACT_APP_ID_BASE_URL_PROD;
};


export default getBaseURL;