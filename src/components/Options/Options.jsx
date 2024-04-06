import style from './Options.module.css';

const Options = ({onClick, onReset, value}) => {
    return (
        <div className={style.cntBox}>
            <button onClick={() => onClick('good')} type="button" className={style.good}>Good</button>
            <button onClick={() => onClick('neutral')} type="button" className={style.neutral}>Neutral</button>
            <button onClick={() => onClick('bad')} type="button" className={style.bad}>Bad</button>
            { value > 0 &&  <button type="reset" onClick={onReset}>Reset</button>}
        </div>
    );
}
export default Options;