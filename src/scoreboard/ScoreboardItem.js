import 'bootstrap/dist/css/bootstrap.min.css';

function ScoreboardItem(props) {
    return(
        <div className='row'>
            <p className='col-7'>{props.nickname}</p>
            <p className='text-center col-5'>{props.moves}</p>
        </div>
    );
}

export default ScoreboardItem;