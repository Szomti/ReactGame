import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function LeaderboardForm(props) {
    const onSubmitNick = (e) => {
        e.preventDefault();
        let value = document.getElementById('playerNick').value;
        if(value === null) return;
        props.onClick(value);
    }

    const impossibleText = () => {
        let tempmoves = props.moves;
        if(tempmoves === 1) return 'move';
        return 'moves';
    }

    return(
        <div className='container-fluid p-5 mt-3 default-bg w-50'>
            <h3 className='mb-4'>You Won!</h3>
            <p>It took you {props.moves} {impossibleText()}!</p>
            <form>
                <div><label>Nickname:<br/><input type='text' className='input' id='playerNick'/></label></div>
                <button className='btn btn-primary mt-2' onClick={onSubmitNick}>Submit</button>
            </form>
        </div>
    );
}

export default LeaderboardForm;