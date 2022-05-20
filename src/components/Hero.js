import React from "react";

const Hero = () => {
  return (
    <>
      <div>
        <p>Welcome to Music App</p>
      </div>
    </>
  );
};

// class HeroClass extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <>
//         <div>
//           <h2 className={styles.title}> Song list</h2>
//           <div>
//             <label>Search</label>
//             <input />
//           </div>
//           {this.props.songs.map((e, index) => (
//             <div>
//               <span className={styles.index}>{index + 1}.</span>
//               <span>{e}</span>
//             </div>
//           ))}
//         </div>
//       </>
//     );
//   }
// }

export default Hero;
