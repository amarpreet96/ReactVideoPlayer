import React from 'react';
import SearchBox from './searchbox';
import youtube from '../api/key';
import VideoList from './videos';
import VideoDetail from './videoDetail';

class App extends React.Component{
    state = {videos : [] , selectVideo : null};
    onInputSubmit = async (term)=>{
      //  console.log("from app term" + term);
      //  this.setState({keyword:term});
      //  console.log("from app---->" + this.state.keyword); // way of getting values from child to parent components
       const response = await youtube.get('/search',{
            params : {
                q : term
            }
        });
    //console.log(response);
    this.setState({videos : response.data.items});
    };

    onVideoSelect=(video)=>{
        this.setState({selectVideo:video});
    }

    render(){
        return (
            <div>
             <SearchBox onSubmit={this.onInputSubmit}/> 
             <VideoDetail video={this.state.selectVideo} />
             <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
             </div>
            )
    }
};

export default App;
