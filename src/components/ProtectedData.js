// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ProtectedData = () => {
//   const [data, setData] = useState('');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         setError('You are not authorized to access this page.');
//         return;
//       }

//       try {
//         const response = await axios.get('http://localhost:8080/api/protected-data', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setData(response.data);
//       } catch (err) {
//         setError('Failed to fetch protected data.');
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="protected-container">
//       <h2>Protected Data</h2>
//       {error && <p className="error">{error}</p>}
//       {data && <p>{data}</p>}
//     </div>
//   );
// };

// export default ProtectedData;



// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const ProtectedData = () => {
// //   const [data, setData] = useState('');
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const token = localStorage.getItem('token');
// //       if (!token) {
// //         setError('You are not authorized to access this page.');
// //         return;
// //       }

// //       try {
// //         const response = await axios.post(
// //           'http://localhost:8080/auth/protected-data',
// //           {}, 
// //           {
// //             headers: {
// //               Authorization: `Bearer ${token}`,
// //             },
// //           }
// //         );
// //         setData(response.data);
// //       } catch (err) {
// //         setError('Failed to fetch protected data.');
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   return (
// //     <div className="protected-container">
// //       <h2>Protected Data</h2>
// //       {error && <p className="error">{error}</p>}
// //       {data && <p>{data}</p>}
// //     </div>
// //   );
// // };

// // export default ProtectedData;