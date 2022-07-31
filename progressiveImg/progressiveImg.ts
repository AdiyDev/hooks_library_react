// import { MyImage } from "./MyImage";

// import Full from "./images/full.jpg";
// import SmallImg from "./images/img-small.jpg";

// export default function progressiveImg() {
//   return (
//     <div className="App">
//       <h1>Progressive Image</h1>
//       <h2>Emulate 3G in DevTools</h2>

//       <MyImage src={Full} placeholderSrc={SmallImg} height="300" />
//     </div>
//   );

// import { useState, useEffect } from "react";

// export const MyImage = ({ src, placeholderSrc, width = "100%", ...props }) => {
//   const [imageSrc, setImageSrc] = useState(placeholderSrc);

//   const cn = `progressive ${
//     imageSrc === placeholderSrc ? "loading" : "loaded"
//   }`;

//   useEffect(() => {
//     const img = new Image();
//     img.src = src;
//     img.onload = () => {
//       setImageSrc(src);
//     };
//   }, [src]);

//   return (
//     <img
//       className={cn}
//       src={imageSrc}
//       alt={props.alt || ""}
//       width={width}
//       {...props}
//     />
//   );
// };

// .App {
//   font-family: sans-serif;
//   text-align: center;
// }

// .progressive {
//   object-fit: cover;
//   object-position: center;
// }
// .loading {
//   filter: blur(10px);
// }
// .loaded {
//   filter: blur(0);
//   transition: filter 0.3s linear;
// }
