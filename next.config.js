/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: '/ManagerDB',
  async redirects() {
    return [
      {
        source: '/UserBase',
        destination: 'http://svgccrm01.dot.ca.gov:3030/UserBase/build/',
        permanent: true,
        basePath: false,
      },
      // TODO : If someone goes to /ManagerDB/Home, direct them to /ManagerDB
      
    ]
  },
  


}
