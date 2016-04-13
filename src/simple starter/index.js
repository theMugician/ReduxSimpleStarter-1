import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SearchBar from './components/search_bar';
//import reducers from './reducers';

const API_KEY = 'AIzaSyDKTRxDdTWKKCk9BQs_CtSms7x0ZTSTm-o';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            videos:[],
            selectedVideo: null
        };
        this.videoSearch ('dogsyou');
    }
    videoSearch (term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            console.log(videos);
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
        return(
            <div>this
                <h1>hello</h1>
                <VideoDetail video={this.state.videos[0]} />
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoList
                    onVideoSelect={selectedVideo=>this.setState=({selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));
