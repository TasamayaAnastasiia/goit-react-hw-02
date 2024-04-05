import style from './Feedback.module.css';

const Feedback = ({good, neutral, bad, total, percent}) => {
    return(
        <>
        <ul className={style.listFeedback}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive: {percent}%</li>
        </ul>
        </>
    );
}
export default Feedback;