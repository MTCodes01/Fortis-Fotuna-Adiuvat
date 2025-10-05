import { useState, useEffect } from 'react';
import OpenSeadragonViewer from '../components/OpenSeadragonViewer';
import AnnotationPanel from '../components/AnnotationPanel';
import { Annotation } from '../types/types';

const ImageExplorer = () => {
  const [selectedAnnotation, setSelectedAnnotation] = useState<Annotation | null>(null);
  
  // Demo annotations for the NASA image
  const annotations: Annotation[] = [];

  // Load annotations from external JSON files
  useEffect(() => {
    let featureCatalogue: any[] = [];
    
    // Define mosaic bounds constants
    const MOSAIC_RA_MIN = 0;
    const MOSAIC_RA_MAX = 360;
    const MOSAIC_DEC_MIN = -90;
    const MOSAIC_DEC_MAX = 90;

    fetch('../../View/exoplanets.json')
      .then(response => response.json())
      .then(data => {
        // Filter exoplanets within the mosaic bounds
        const filteredExoplanets = data.filter((exoplanet: any) => {
          return exoplanet.ra >= MOSAIC_RA_MIN && 
                 exoplanet.ra <= MOSAIC_RA_MAX &&
                 exoplanet.dec >= MOSAIC_DEC_MIN && 
                 exoplanet.dec <= MOSAIC_DEC_MAX;
        });

        console.log(`Found ${filteredExoplanets.length} exoplanets within mosaic bounds`);

        // Convert to feature catalogue format
        featureCatalogue = filteredExoplanets.map((exoplanet: any) => ({
          id: exoplanet.id || 'Unknown',
          name: exoplanet.name || 'Unknown Exoplanet',
          type: 'exoplanet',
          ra: exoplanet.ra,
          dec: exoplanet.dec,
          magnitude: exoplanet.magnitude || 'N/A',
          description: exoplanet.description || 'No description available.',
          hasLightCurve: exoplanet.hasLightCurve || false
        }));

        console.log(`Loaded ${featureCatalogue.length} exoplanets within mosaic bounds`);
      })
      .catch(error => {
        console.error('Error loading exoplanets data:', error);
        featureCatalogue = [];
      })
      .then(() => fetch('../../View/stars.json'))
      .then(response => response.json())
      .then(data => {
        const filteredStars = data.filter((star: any) => {
          return star.ra >= MOSAIC_RA_MIN && 
                 star.ra <= MOSAIC_RA_MAX &&
                 star.dec >= MOSAIC_DEC_MIN && 
                 star.dec <= MOSAIC_DEC_MAX;
        });

        console.log(`Found ${filteredStars.length} stars within mosaic bounds`);

        const starFeatures = filteredStars.map((star: any) => ({
          id: star.id || 'Unknown',
          name: star.name || 'Unknown Star',
          type: 'star',
          ra: star.ra,
          dec: star.dec,
          magnitude: star.magnitude || 'N/A',
          description: star.description || 'No description available.',
          hasLightCurve: star.hasLightCurve || false
        }));

        featureCatalogue = featureCatalogue.concat(starFeatures);
        console.log(`Total features loaded: ${featureCatalogue.length}`);
      })
      .catch(error => {
        console.error('Error loading stars data:', error);
      })
      .then(() => fetch('../../View/clusters.json'))
      .then(response => response.json())
      .then(data => {
        const filteredClusters = data.filter((item: any) => {
          return item.type === 'cluster' &&
                 item.ra >= MOSAIC_RA_MIN && 
                 item.ra <= MOSAIC_RA_MAX &&
                 item.dec >= MOSAIC_DEC_MIN && 
                 item.dec <= MOSAIC_DEC_MAX;
        });

        console.log(`Found ${filteredClusters.length} clusters within mosaic bounds`);

        const clusterFeatures = filteredClusters.map((cluster: any) => ({
          id: cluster.id || 'Unknown',
          name: cluster.name || 'Unknown Cluster',
          type: 'cluster',
          ra: cluster.ra,
          dec: cluster.dec,
          magnitude: cluster.magnitude || 'N/A',
          description: cluster.description || 'No description available.',
          hasLightCurve: cluster.hasLightCurve || false
        }));

        featureCatalogue = featureCatalogue.concat(clusterFeatures);
        console.log(`Total features loaded: ${featureCatalogue.length}`);
      })
      .catch(error => {
        console.error('Error loading clusters data:', error);
      });
  }, []);

  return (
    <div className="image-explorer">
      <div className="explorer-container">
        <OpenSeadragonViewer />
      </div>
      
      <div className="explorer-info">
        <h2>High-Resolution Image Navigation</h2>
        <p>
          Explore NASA imagery with deep-zoom capabilities. Click on markers to learn more
          about celestial features. This demo showcases how gigapixel astronomical data
          can be navigated like Google Maps.
        </p>
        <div className="controls-help">
          <h3>Controls:</h3>
          <ul>
            <li>🖱️ <strong>Pan:</strong> Click and drag</li>
            <li>🔍 <strong>Zoom:</strong> Scroll wheel or pinch</li>
            <li> ⬅️ <strong>Reset:</strong> Reset the model</li>
            <li> 💯<strong>Full Size:</strong> Full size the model to view it more</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageExplorer;