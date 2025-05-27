import styles from "../styles/SimpleAppointmentCard.module.css";

// Emoji map for different appointment types
const emojiMap = {
  health: "💉",
  ophthalmologist: "👁️",
  cardiologist: "❤️",
  neurologist: "🧠",
};

function SimpleAppointmentCard({ title, time }) {
  const lowerTitle = title.toLowerCase();
  let emoji = "👨‍⚕️"; // default emoji

  if (lowerTitle.includes("health")) emoji = emojiMap.health;
  else if (lowerTitle.includes("ophthalmologist"))
    emoji = emojiMap.ophthalmologist;
  else if (lowerTitle.includes("cardiologist")) emoji = emojiMap.cardiologist;
  else if (lowerTitle.includes("neurologist")) emoji = emojiMap.neurologist;

  return (
    <div className={styles.appointmentCard}>
      <div className={styles.cardContent}>
        <h5>{title}</h5>
        <p>{time}</p>
      </div>
      <div className={styles.cardIcon}>
        <span className={styles.emoji}>{emoji}</span>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;
