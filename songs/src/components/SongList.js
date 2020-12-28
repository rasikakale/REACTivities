import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';


//using a class component
class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            );

        });
    }

    render() {

        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

// takes state object (all data in redux store) run computation to cause data
// to show up as props inside component
const mapStateToProps = (state) => {
    return { songs: state.songs };
};

// dispatch function is automatically called through the connect function
export default connect(mapStateToProps, {selectSong})(SongList);