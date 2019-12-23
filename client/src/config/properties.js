export const Properties = {
restAPIURL: ((process.env.NODE_ENV === 'production') ?
  'https://www.hacknodap-archive.com/api' : 'http://localhost:5000/api'),
  s3URL: 'https://hacknodap-archive-assets.s3.ap-northeast-2.amazonaws.com'
};