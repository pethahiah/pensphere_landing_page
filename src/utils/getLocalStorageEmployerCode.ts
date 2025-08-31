export const getLocalStorageEmployerCode = () => {
  const code = localStorage.getItem('employerCode');
  if (code) return `?employerCode=${code}`;
  return '';
};
