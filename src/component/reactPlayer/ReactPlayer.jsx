import React from 'react';
import ReactPlayer from 'react-player';

function Container(props) {
  return (
    <div>
      <ReactPlayer url='https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1' />
    </div>
  );
}

export default Container;
