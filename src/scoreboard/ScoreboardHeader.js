import 'bootstrap/dist/css/bootstrap.min.css';

function ScoreboardItem(props) {
    return(
        <div className='container-fluid mb-3'>
            <p className='text-center h3'>Scoreboard</p>
            <div className='row'>
                <p className='col text-center h5'>Nickname</p>
                <p className='col text-center h5'>Moves</p>
            </div>
        </div>
    );
}

export default ScoreboardItem;