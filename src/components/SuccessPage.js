import React from 'react';

const SuccessPage = () => {
  return (
    <div className="success-page">
      <h1>Welcome to My Page</h1>
      <p>You are logged in successfully!</p>
    </div>
  );
};

export default SuccessPage;



// import React from "react";
// import "./SuccessPage.css"

// const SuccessPage = () => {
//   return (
//     <div>
//       <header className="myheader">
//         <div className="myh1">
//           <h1 className="myh2">Amma Recipes</h1>
//           <img
//             className="logoimage"
//             src="WhatsApp_Image_2024-07-08_at_3.03.06_PM-removebg-preview (1).png"
//             height="96px"
//             width="100px"
//             alt="Logo"
//           />
//         </div>
//       </header>
//       <div className="icon">
//         <img src="bag_icon.png" alt="Cart" />
//       </div>
//       <nav>
//         <ul>
//           {[
//             "Home",
//             "About",
//             "Deserts",
//             "Burger",
//             "Pizza",
//             "Biriyani",
//             "Salad",
//             "More Recipes",
//           ].map((item, index) => (
//             <li key={index}>
//               <a href="#">{item}</a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <div className="logo">
//         <img
//           src="Screenshot_1-7-2024_03817_www.canva.com-removebg-preview.png"
//           width="100px"
//           height="100px"
//           alt="Secondary Logo"
//         />
//       </div>

//       <div className="allfood">
//         {[
//           { name: "Biriyani", img: "biryani.jpg" },
//           { name: "Fried Rice", img: "food_2.png" },
//           { name: "Kerala Parota", img: "Kerala-Parotta-2.jpg" },
//           { name: "Prawn", img: "prawn.webp" },
//           { name: "Pulav", img: "pulav.webp" },
//         ].map((food, index) => (
//           <div key={index} className="food-item">
//             <img src={food.img} width="200" height="200" alt={food.name} />
//             <h2>{food.name}</h2>
//             <h4>$10/-</h4>
//             <button className="btn2">Add</button>
//           </div>
//         ))}
//       </div>

//       <footer id="footer">
//         <p>
//           Contact us
//           <br /> Email: Thiru052@gmail.com
//           <br /> Mobile: +91-9342783052
//         </p>
//         <div className="footer-buttons">
//           <button>Buy Food</button>
//           <button>Buy Masalas</button>
//           <button>Contact</button>
//         </div>
//       </footer>

//       <style>{`
//         .btn2 {
//           background-color: black;
//           color: white;
//           border: 2px solid black;
//           border-radius: 10px;
//           font-size: 15px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SuccessPage;
