import React from 'react';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const [showResults, setShowResults] = React.useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    
    if (e.target.value.length > 2) {
      performSearch(e.target.value);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const performSearch = (query) => {
    setIsSearching(true);
    
    // In a real app, this would be an API call to a search endpoint
    // For now, we'll simulate search results
    setTimeout(() => {
      const simulatedResults = simulateSearchResults(query);
      setSearchResults(simulatedResults);
      setShowResults(true);
      setIsSearching(false);
    }, 300);
  };

  const simulateSearchResults = (query) => {
    // This is a placeholder function that would be replaced with actual search logic
    const lowercaseQuery = query.toLowerCase();
    
    // Sample data structure representing content in the app
    const contentIndex = [
      {
        title: 'Mechanical Engineering Standards',
        path: '/standards/mechanical',
        category: 'Standards',
        keywords: ['mechanical', 'standards', 'engineering', 'technical drawing', 'tolerancing']
      },
      {
        title: 'Electrical Engineering Standards',
        path: '/standards/electrical',
        category: 'Standards',
        keywords: ['electrical', 'standards', 'engineering', 'cables', 'wiring', 'safety']
      },
      {
        title: 'Design Engineering Standards',
        path: '/standards/design',
        category: 'Standards',
        keywords: ['design', 'standards', 'engineering', 'product design', 'human factors']
      },
      {
        title: 'Autodesk Tips and Tricks',
        path: '/software/autodesk',
        category: 'Software Guides',
        keywords: ['autodesk', 'software', 'cad', 'design', 'modeling']
      },
      {
        title: 'Bluebeam Revu Tips and Tricks',
        path: '/software/bluebeam',
        category: 'Software Guides',
        keywords: ['bluebeam', 'revu', 'pdf', 'markup', 'annotation']
      },
      {
        title: 'ETAP Tips and Tricks',
        path: '/software/etap',
        category: 'Software Guides',
        keywords: ['etap', 'electrical', 'power systems', 'analysis']
      },
      {
        title: 'SOLIDWORKS Tips and Tricks',
        path: '/software/solidworks',
        category: 'Software Guides',
        keywords: ['solidworks', '3d modeling', 'cad', 'design']
      },
      {
        title: 'Trimble Tips and Tricks',
        path: '/software/trimble',
        category: 'Software Guides',
        keywords: ['trimble', 'construction', 'layout', 'survey']
      },
      {
        title: 'Project Templates and Checklists',
        path: '/resources/templates',
        category: 'Resources',
        keywords: ['templates', 'checklists', 'project planning', 'quality assurance']
      },
      {
        title: 'Reference Materials',
        path: '/resources/reference',
        category: 'Resources',
        keywords: ['reference', 'conversion tables', 'material properties', 'formulas']
      }
    ];
    
    // Filter content based on query
    return contentIndex.filter(item => {
      // Check if query matches title
      if (item.title.toLowerCase().includes(lowercaseQuery)) {
        return true;
      }
      
      // Check if query matches keywords
      return item.keywords.some(keyword => keyword.includes(lowercaseQuery));
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.length > 2) {
      performSearch(searchQuery);
    }
  };

  const handleResultClick = (path) => {
    // In a real app, this would navigate to the selected result
    console.log(`Navigating to: ${path}`);
    setShowResults(false);
  };

  return (
    <div className="search-component">
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search standards, guides, and resources..."
          value={searchQuery}
          onChange={handleSearchChange}
          aria-label="Search"
        />
        <button type="submit" className="search-button" aria-label="Submit search">
          <span className="search-icon">🔍</span>
        </button>
      </form>
      
      {showResults && (
        <div className="search-results">
          {isSearching ? (
            <div className="search-loading">Searching...</div>
          ) : (
            <>
              {searchResults.length > 0 ? (
                <ul className="search-results-list">
                  {searchResults.map((result, index) => (
                    <li key={index} className="search-result-item">
                      <a 
                        href={result.path} 
                        className="search-result-link"
                        onClick={(e) => {
                          e.preventDefault();
                          handleResultClick(result.path);
                        }}
                      >
                        <span className="search-result-title">{result.title}</span>
                        <span className="search-result-category">{result.category}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="search-no-results">
                  No results found for "{searchQuery}"
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
