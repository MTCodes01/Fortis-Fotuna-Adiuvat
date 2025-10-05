import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SolarSystemViewer = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // You can set the src dynamically if needed
    if (iframeRef.current) {
      iframeRef.current.src = 'https://sreedevss.me'; // Replace with your desired URL
    }
  }, []);

  return (
    <div className="solar-system-viewer">
      <iframe
        ref={iframeRef}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Embedded webpage"
      />
    </div>
  );
};

export default SolarSystemViewer;