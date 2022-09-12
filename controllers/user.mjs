import ip from "ip-in";

// following object will be returned by --- ip.getCountryDetails()
// "countryDetails": {
// "status": "success",
// "ip": "39.34.143.11",
// "country": "Pakistan",
// "countryCode": "PK",
// "region": "SD",
// "regionName": "Sindh",
// "city": "Karachi",
// "zip": "75300",
// "lat": 24.9246,
// "lon": 67.087,
// "timezone": "Asia/Karachi",
// "isp": "Connect Communication",
// "org": "Pakistan Telecommuication company limited",
// "as": "AS132165 Connect Communications",
// "mobile": true,
// "proxy": false
//   }

// controller that extract information of the visitor/user
const user = async (req, res) => {
  // fetching details with the help of third party package
  // -- name : ip -in
  // -- link : https://www.npmjs.com/package/ip-in
  const user_details = await ip.getCountryDetails();

  // creating visitor object
  const visitor = {
    ip: user_details.ip,
    from: `${user_details.city}, ${user_details.country}`,
    from: `${user_details.city}, ${user_details.country}`,
  };

  // returning visitor
  res.status(200).send(visitor);
};

export default user;
