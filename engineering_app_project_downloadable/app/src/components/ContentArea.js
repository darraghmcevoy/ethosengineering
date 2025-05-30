import React from 'react';
import { marked } from 'marked';

const ContentArea = ({ contentType, contentPath, contentTitle }) => {
  const [content, setContent] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      try {
        // In a real app, this would fetch from an API or content management system
        // For now, we'll simulate content loading based on the path
        let contentData = '';
        
        if (contentPath === '/') {
          contentData = await import('../content/home.md');
        } else {
          // This would be replaced with actual content fetching logic
          contentData = await simulateFetchContent(contentPath);
        }
        
        setContent(contentData);
        setError(null);
      } catch (err) {
        console.error('Error loading content:', err);
        setError('Failed to load content. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [contentPath]);

  // This function simulates fetching content based on the path
  // In a real app, this would be replaced with actual API calls
  const simulateFetchContent = async (path) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Default content for demonstration
    let contentData = `
# ${contentTitle}

Content for ${contentPath} is being developed.

This page will contain comprehensive information about this topic, including:

- Detailed explanations
- Practical examples
- Best practices
- References to relevant standards

Please check back soon for updates.
`;

    // Return the content
    return contentData;
  };

  const renderContent = () => {
    if (loading) {
      return <div className="loading">Loading content...</div>;
    }

    if (error) {
      return <div className="error">{error}</div>;
    }

    // Convert markdown to HTML
    const htmlContent = marked(content);
    
    return (
      <div 
        className="content-html"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    );
  };

  return (
    <main className="main-content">
      <div className="container">
        <div className="breadcrumbs">
          <ul className="breadcrumbs-list">
            <li className="breadcrumbs-item">
              <a href="/" className="breadcrumbs-link">Home</a>
            </li>
            {contentPath !== '/' && (
              <li className="breadcrumbs-item">
                <span className="breadcrumbs-current">{contentTitle}</span>
              </li>
            )}
          </ul>
        </div>
        
        <div className="content-container">
          {renderContent()}
        </div>
      </div>
    </main>
  );
};

export default ContentArea;
