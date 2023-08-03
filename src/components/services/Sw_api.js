import styles from './Sw_api.module.css'
function Sw_api(props) {
  const { setSpaceShips, name } = props;

  return (
    <div className={styles.Whole}>
      <div className={styles.Squad}>
        <h1>{name}</h1>
      </div>
    </div>
  )
}
export default Sw_api;