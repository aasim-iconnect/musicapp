import styles from "../songlist.module.css";
const SongLists = () => {
  const songs = [
    "Single Ladies (Put a Ring on It)",
    "Umbrella",
    "Shake it Off",
    "Toxic",
    "Rolling in the Deep",
    "Firework",
    "Rehab",
    "Blinding Lights",
  ];
  return (
    <div className="{styles.main}">
      <h2 className={styles.title}> Song list</h2>
      <div>
        <label>Search</label>
        <input />
      </div>
      <div>
        {songs.map((e, index) => (
          <div>
            <span className={styles.index}>{index + 1}.</span>
            <Link>{e}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongLists;
