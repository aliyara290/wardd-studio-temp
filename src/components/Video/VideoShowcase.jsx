const VideoShowcase = () => {
  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#000', color: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: '700', marginBottom: '40px' }}>
          PRODUCTION.
        </h1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px',
          marginTop: '50px' 
        }}>
          {/* Video 1 */}
          <div style={{ 
            backgroundColor: '#111', 
            borderRadius: '8px', 
            padding: '20px',
            textAlign: 'left'
          }}>
            <h3>OM - SA3A</h3>
            <p style={{ color: '#888' }}>// Mohamed Guarouani</p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Music Video</p>
          </div>

          {/* Video 2 */}
          <div style={{ 
            backgroundColor: '#111', 
            borderRadius: '8px', 
            padding: '20px',
            textAlign: 'left'
          }}>
            <h3>GITEX BEST OF</h3>
            <p style={{ color: '#888' }}>// WARDD STUDIOS</p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Promotional</p>
          </div>

          {/* Video 3 */}
          <div style={{ 
            backgroundColor: '#111', 
            borderRadius: '8px', 
            padding: '20px',
            textAlign: 'left'
          }}>
            <h3>LOVE AND CHOICE</h3>
            <p style={{ color: '#888' }}>// Mohamed Guarouani</p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Short Film</p>
          </div>

          {/* Video 4 */}
          <div style={{ 
            backgroundColor: '#111', 
            borderRadius: '8px', 
            padding: '20px',
            textAlign: 'left'
          }}>
            <h3>ELJAMAI COUTURE</h3>
            <p style={{ color: '#888' }}>// KAMAL SEKKAR</p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Commercial</p>
          </div>

          {/* Video 5 */}
          <div style={{ 
            backgroundColor: '#111', 
            borderRadius: '8px', 
            padding: '20px',
            textAlign: 'left'
          }}>
            <h3>MAYBELLINE LIPSTICK GLOSS</h3>
            <p style={{ color: '#888' }}>// KAMAL SEKKAR</p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Promotional</p>
          </div>

          {/* Video 6 */}
          <div style={{ 
            backgroundColor: '#111', 
            borderRadius: '8px', 
            padding: '20px',
            textAlign: 'left'
          }}>
            <h3>KELMA - RACHID GOUDI</h3>
            <p style={{ color: '#888' }}>// WARDD STUDIOS</p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Music Video</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase; 