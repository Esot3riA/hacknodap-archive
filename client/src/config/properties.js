export const Properties = {
  restAPIURL: (process.env.NODE_ENV === 'production') ?
    'https://www.hacknodap-archive.com/api' : 'http://localhost:5000/api'
};