import React from 'react';
import { Route } from 'react-router-dom';
import React360Image from './component/react360/React360Image';
import VideoReact from './component/video-react/VideoReact';
import ReactPlayerComponent from './component/reactPlayer/ReactPlayer';
import Plyr from './component/plyr/Plyr';

function App() {
  return (
    <div>
      <header>
        <p>this is in React application</p>
      </header>

      <Route path='/react360' component={React360Image} />
      <Route path='/video-react' component={VideoReact} />
      <Route path='/reactplayer/' component={ReactPlayerComponent} />
      <Route path='/plyr/' component={Plyr} />
    </div>
  );
}

export default App;
