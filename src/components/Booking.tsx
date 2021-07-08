import styles from '../styles/components/Booking.module.css'

const Booking = () => {
  return (
    <div className={styles.content}>
      <img className={styles.img}
        src="/assets/images/profile-example.png"
        width={56}
        height={56}
      />
      <span>Sarah’s day care available now in North Sydney</span>
      <h4>Wednesday, Thursday, Friday - 7:30 - 5:30</h4>
    </div>

  )
}

export default Booking

