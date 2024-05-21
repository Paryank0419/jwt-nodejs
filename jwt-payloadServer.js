const jwt = require('jsonwebtoken');
const fs = require('fs');

// Define or load the secret keys
const secret = '2023sl93028';


const ecPrivateKey = fs.readFileSync('ec-priv.pem', 'utf8');
const ecPublicKey = fs.readFileSync('ec-pub.pem', 'utf8');

// Define the payload
const payload = {
    userID: '0987654321',
    fullName: 'Jane Smith',
    emailAddress: 'jane.smith@example.com',
    isAdmin: false,
    city: 'Berlin',
    customField1: 'customValue1',
    customField2: 'customValue2',
}

const token = jwt.sign(payload, secret, { algorithm: 'HS256' });
console.log('Generated Token:', token);
jwt.verify(token, secret, { algorithms: ['HS256'] }, (err, decoded) => {
  if (err) {
    console.error('Token verification failed:', err);
  } else {
    console.log('Decoded Token:', decoded);
  }
});


console.log('--------------------------------------------------');
const token2 = jwt.sign(payload, ecPrivateKey, { algorithm: 'ES256' });
console.log('Generated Token:', token);
jwt.verify(token2, ecPublicKey, { algorithms: ['ES256'] }, (err, decoded) => {
  if (err) {
    console.error('Token verification failed:', err);
  } else {
    console.log('Decoded Token:', decoded);
  }
});