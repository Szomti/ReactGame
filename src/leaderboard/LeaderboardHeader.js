import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function LeaderboardItem(props) {
    return(
        <div className='container-fluid mb-3 p-2 default-bg'>
            <p className='text-center h3'>Leaderboard</p>
            <div className='row'>
                <p className='col text-center h5 mb-1'>Player</p>
                <p className='col text-center h5 mb-1'>Moves</p>
            </div>
        </div>
    );
}

export default LeaderboardItem;