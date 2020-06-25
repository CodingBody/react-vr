import React, { Component } from 'react';

import Plyr from 'react-plyr';

// add the component in the render function
class Container extends Component {
  render() {
    return (
      <Plyr
        type='youtube' // or "vimeo"
        videoId='https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1'
      />
    );
  }
}

export default Container;
