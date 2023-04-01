import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function ScoreboardItem(props) {
    return(
        <div className={'row scoreboard-item '+props.rank}>
            <p className='mb-0 col-7'>{props.nickname}</p>
            <p className='mb-0 text-center col-5'>{props.moves}</p>
        </div>
    );
}

export default ScoreboardItem;