import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
function Home() {
  return (
    <div id="home" className={styles.home}>
      <div>
        <Link to={"/todos"}>
          <div>Todo App</div>
        </Link>
        <Link to={"/notes"}>
          <div>Notes App</div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
