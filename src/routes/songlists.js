import styles from "../songlist.module.css";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Song from "./song";
const SongLists = () => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios(`http://localhost:3001/Songs`);
        const songs = await data;
        setSongs(songs);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  return (
    <div className="{styles.main}">
      <h2 className={styles.title}> Song list</h2>
      <div>
        <label>Search</label>
        <input />
      </div>
      <div>
        {songs &&
          songs.map((song, id) => (
            <div key={song.id}>
              {song.id}
              <Link
                to={`${song.name}`}
                state={{ name: song.name, author: song.author }}
              >
                {song.name}
              </Link>
            </div>
          ))}
      </div>
      <div></div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SongLists;
