import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ Song }) => {
    if ( !Song ){
        return <div>No Song Selected</div>;
    }
    return (
        <div>
            <h1>Details for:</h1>
            <p>Title: {Song.title}</p>
            <p>Duration: {Song.duration}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { Song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);