import ReactGA from 'react-ga4';

export const trackPageView = (pathname) => {
  if (process.env.NODE_ENV !== 'development') {
    ReactGA.send({
      page: pathname,
      hitType: "pageview",
      title: pathname.split('/')[1] || 'home'
    });
  }
};

export const trackAction = (action, category) => {
  if (process.env.NODE_ENV !== 'development') {
    ReactGA.event({
      category,
      action,
    });
  }
}

export const trackErrors = (error, fatal) => {
  ReactGA.event({
    category: 'Error',
    action: `${error} - ${fatal}`,
    label: error
  });
};

export const trackModalView = (modalName) => {
  if (process.env.NODE_ENV !== 'development') {
    ReactGA.send({
      page: modalName,
      hitType: "pageview",
      title: 'Modal View'
    });
  }
};
