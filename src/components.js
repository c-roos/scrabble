import { calcScore } from './utils.js';


class Word extends React.Component {
    render() {
        return (
            <div className="card border-info mb-3 ml-1 mr-1">
                <div className="card-header">
                    <small>{this.props.word}</small>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.score} points</h5>
                </div>
            </div>
        );
    }
}


class WordContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {words: []};
    }
    
    render() {
        return (
            <div>
                {this.state.words.map(w => <Word word={w} key={w} score={calcScore(w)} />)}
            </div>
        );
    }
}


export { Word, WordContainer };