import { useEffect, useRef } from 'react';
import OpenSeadragon from 'openseadragon';
import { Annotation } from '../types/types';

const OpenSeadragonViewer = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // You can set the src dynamically if needed
    if (iframeRef.current) {
      iframeRef.current.src = 'https://sreedevss.me'; // Replace with your desired URL
    }
  }, []);

  return (
    <div className="open-seadragon-viewer">
      <iframe
        ref={iframeRef}
        width="100%"
        style={{ height: 'calc(100vh - 280px)' }}
        frameBorder="0"
        title="Embedded webpage"
      />
    </div>
  );
};

export default OpenSeadragonViewer;