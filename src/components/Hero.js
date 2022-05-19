import React from "react";
import styles from "../hero.module.css";
const Hero = (props) => {
  console.log(props);
  return (
    <>
      <div>
        <h2 className={styles.title}> Song list</h2>
        <div>
          <label>Search</label>
          <input />
        </div>
        {props.songs.map((e, index) => (
          <div>
            <span className={styles.index}>{index + 1}.</span>
            <span>{e}</span>
          </div>
        ))}
      </div>
    </>
  );
};

class HeroClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div>
          <h2 className={styles.title}> Song list</h2>
          <div>
            <label>Search</label>
            <input />
          </div>
          {this.props.songs.map((e, index) => (
            <div>
              <span className={styles.index}>{index + 1}.</span>
              <span>{e}</span>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default HeroClass;
