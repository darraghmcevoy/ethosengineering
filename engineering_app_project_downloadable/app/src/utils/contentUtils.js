// Content utility functions for the Engineering Knowledge App

/**
 * Loads content from the appropriate source based on the content path
 * @param {string} contentPath - The path to the content
 * @returns {Promise<string>} - The content as a string
 */
export const loadContent = async (contentPath) => {
  // In a production app, this would fetch from an API or content management system
  // For now, we'll map paths to our local content files
  
  try {
    let contentModule;
    
    // Map paths to content files
    switch (contentPath) {
      case '/':
        contentModule = await import('../content/home.md');
        break;
      case '/standards/mechanical':
        contentModule = await import('../content/standards/mechanical.md');
        break;
      case '/standards/electrical':
        contentModule = await import('../content/standards/electrical.md');
        break;
      case '/standards/design':
        contentModule = await import('../content/standards/design.md');
        break;
      case '/software/autodesk':
        contentModule = await import('../content/software/autodesk.md');
        break;
      case '/software/bluebeam':
        contentModule = await import('../content/software/bluebeam.md');
        break;
      case '/software/etap':
        contentModule = await import('../content/software/etap.md');
        break;
      case '/software/solidworks':
        contentModule = await import('../content/software/solidworks.md');
        break;
      case '/software/trimble':
        contentModule = await import('../content/software/trimble.md');
        break;
      case '/resources/templates':
        contentModule = await import('../content/resources/templates.md');
        break;
      case '/resources/reference':
        contentModule = await import('../content/resources/reference.md');
        break;
      default:
        // For paths that don't match, return a "not found" message
        return `# Page Not Found\n\nThe requested content at "${contentPath}" could not be found.`;
    }
    
    return contentModule.default;
  } catch (error) {
    console.error('Error loading content:', error);
    return `# Error Loading Content\n\nThere was an error loading the content for "${contentPath}". Please try again later.`;
  }
};

/**
 * Generates breadcrumb data based on the content path
 * @param {string} contentPath - The path to the content
 * @param {string} contentTitle - The title of the content
 * @returns {Array} - Array of breadcrumb items
 */
export const generateBreadcrumbs = (contentPath, contentTitle) => {
  const breadcrumbs = [
    { title: 'Home', path: '/' }
  ];
  
  if (contentPath === '/') {
    return breadcrumbs;
  }
  
  const pathParts = contentPath.split('/').filter(part => part);
  
  if (pathParts.length > 0) {
    let currentPath = '';
    
    // Add intermediate breadcrumbs
    pathParts.forEach((part, index) => {
      if (index < pathParts.length - 1) {
        currentPath += `/${part}`;
        
        let title = part.charAt(0).toUpperCase() + part.slice(1);
        
        // Special case for software guides
        if (part === 'software') {
          title = 'Software Guides';
        }
        
        breadcrumbs.push({
          title,
          path: currentPath
        });
      }
    });
    
    // Add current page as the last breadcrumb
    breadcrumbs.push({
      title: contentTitle,
      path: contentPath
    });
  }
  
  return breadcrumbs;
};

/**
 * Searches content based on a query string
 * @param {string} query - The search query
 * @returns {Promise<Array>} - Array of search results
 */
export const searchContent = async (query) => {
  // In a production app, this would search through an index or API
  // For now, we'll simulate search results
  
  if (!query || query.length < 3) {
    return [];
  }
  
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
