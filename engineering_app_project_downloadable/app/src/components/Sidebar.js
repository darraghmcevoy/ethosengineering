import React, { useState } from 'react';

const Sidebar = ({ isOpen }) => {
  const [activeCategory, setActiveCategory] = useState('standards');
  const [expandedItems, setExpandedItems] = useState({
    mechanical: true,
    electrical: false,
    design: false,
    autodesk: false,
    bluebeam: false,
    etap: false,
    solidworks: false,
    trimble: false
  });

  const toggleExpand = (item) => {
    setExpandedItems({
      ...expandedItems,
      [item]: !expandedItems[item]
    });
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <nav className="sidebar-nav">
          <div className="sidebar-section">
            <h2 
              className={`sidebar-heading ${activeCategory === 'standards' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('standards')}
            >
              Engineering Standards
            </h2>
            {activeCategory === 'standards' && (
              <ul className="sidebar-list">
                <li className="sidebar-item">
                  <div 
                    className="sidebar-item-header"
                    onClick={() => toggleExpand('mechanical')}
                  >
                    <span>Mechanical Engineering</span>
                    <span className="expand-icon">{expandedItems.mechanical ? '−' : '+'}</span>
                  </div>
                  {expandedItems.mechanical && (
                    <ul className="sidebar-sublist">
                      <li><a href="/standards/mechanical/technical-drawing">Technical Drawing</a></li>
                      <li><a href="/standards/mechanical/tolerancing">Tolerancing</a></li>
                      <li><a href="/standards/mechanical/component-standards">Component Standards</a></li>
                      <li><a href="/standards/mechanical/structural-design">Structural Design</a></li>
                      <li><a href="/standards/mechanical/welding">Welding and Joining</a></li>
                      <li><a href="/standards/mechanical/quality">Quality and Safety</a></li>
                      <li><a href="/standards/mechanical/corrosion">Corrosion Protection</a></li>
                      <li><a href="/standards/mechanical/regulatory">Regulatory Bodies</a></li>
                    </ul>
                  )}
                </li>
                <li className="sidebar-item">
                  <div 
                    className="sidebar-item-header"
                    onClick={() => toggleExpand('electrical')}
                  >
                    <span>Electrical Engineering</span>
                    <span className="expand-icon">{expandedItems.electrical ? '−' : '+'}</span>
                  </div>
                  {expandedItems.electrical && (
                    <ul className="sidebar-sublist">
                      <li><a href="/standards/electrical/low-voltage">Low Voltage</a></li>
                      <li><a href="/standards/electrical/cables">Cables and Wiring</a></li>
                      <li><a href="/standards/electrical/safety">Safety Systems</a></li>
                      <li><a href="/standards/electrical/lighting">Lighting</a></li>
                      <li><a href="/standards/electrical/installations">Installations</a></li>
                      <li><a href="/standards/electrical/alarm-systems">Alarm Systems</a></li>
                      <li><a href="/standards/electrical/regulatory">Regulatory Bodies</a></li>
                      <li><a href="/standards/electrical/best-practices">Best Practices</a></li>
                    </ul>
                  )}
                </li>
                <li className="sidebar-item">
                  <div 
                    className="sidebar-item-header"
                    onClick={() => toggleExpand('design')}
                  >
                    <span>Design Engineering</span>
                    <span className="expand-icon">{expandedItems.design ? '−' : '+'}</span>
                  </div>
                  {expandedItems.design && (
                    <ul className="sidebar-sublist">
                      <li><a href="/standards/design/technical-drawing">Technical Drawing</a></li>
                      <li><a href="/standards/design/product-design">Product Design</a></li>
                      <li><a href="/standards/design/human-factors">Human Factors</a></li>
                      <li><a href="/standards/design/sustainable-design">Sustainable Design</a></li>
                      <li><a href="/standards/design/communication">Design Communication</a></li>
                      <li><a href="/standards/design/regulatory">Regulatory Bodies</a></li>
                      <li><a href="/standards/design/best-practices">Best Practices</a></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </div>

          <div className="sidebar-section">
            <h2 
              className={`sidebar-heading ${activeCategory === 'software' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('software')}
            >
              Software Guides
            </h2>
            {activeCategory === 'software' && (
              <ul className="sidebar-list">
                <li className="sidebar-item">
                  <div 
                    className="sidebar-item-header"
                    onClick={() => toggleExpand('autodesk')}
                  >
                    <span>Autodesk</span>
                    <span className="expand-icon">{expandedItems.autodesk ? '−' : '+'}</span>
                  </div>
                  {expandedItems.autodesk && (
                    <ul className="sidebar-sublist">
                      <li><a href="/software/autodesk/getting-started">Getting Started</a></li>
                      <li><a href="/software/autodesk/interface-tips">Interface Tips</a></li>
                      <li><a href="/software/autodesk/design-techniques">Design Techniques</a></li>
                      <li><a href="/software/autodesk/collaboration">Collaboration Features</a></li>
                      <li><a href="/software/autodesk/best-practices">Best Practices</a></li>
                    </ul>
                  )}
                </li>
                <li className="sidebar-item">
                  <div 
                    className="sidebar-item-header"
                    onClick={() => toggleExpand('bluebeam')}
                  >
                    <span>Bluebeam Revu</span>
                    <span className="expand-icon">{expandedItems.bluebeam ? '−' : '+'}</span>
                  </div>
                  {expandedItems.bluebeam && (
                    <ul className="sidebar-sublist">
                      <li><a href="/software/bluebeam/interface-tips">Interface Tips</a></li>
                      <li><a href="/software/bluebeam/navigation-tips">Navigation Tips</a></li>
                      <li><a href="/software/bluebeam/markup-editing">Markup Editing</a></li>
                      <li><a href="/software/bluebeam/engineering-tips">Engineering Tips</a></li>
                      <li><a href="/software/bluebeam/best-practices">Best Practices</a></li>
                    </ul>
                  )}
                </li>
                <li className="sidebar-item">
                  <div 
                    className="sidebar-item-header"
                    onClick={() => toggleExpand('etap')}
                  >
                    <span>ETAP</span>
                    <span className="expand-icon">{expandedItems.etap ? '−' : '+'}</span>
                  </div>
                  {expandedItems.etap && (
                    <ul className="sidebar-sublist">
                      <li><a href="/software/etap/getting-started">Getting Started</a></li>
                      <li><a href="/software/etap/data-entry">Data Entry</a></li>
                      <li><a href="/software/etap/analysis">Analysis Techniques</a></li>
                      <li><a href="/software/etap/reporting">Reporting</a></li>
                      <li><a href="/software/etap/advanced-tips">Advanced Tips</a></li>
                      <li><a href="/software/etap/troubleshooting">Troubleshooting</a></li>
                    </ul>
                  )}
                </li>
                <li className="sidebar-item">
                  <div 
                    className="sidebar-item-header"
                    onClick={() => toggleExpand('solidworks')}
                  >
                    <span>SOLIDWORKS</span>
                    <span className="expand-icon">{expandedItems.solidworks ? '−' : '+'}</span>
                  </div>
                  {expandedItems.solidworks && (
                    <ul className="sidebar-sublist">
                      <li><a href="/software/solidworks/getting-started">Getting Started</a></li>
                      <li><a href="/software/solidworks/sketch-techniques">Sketch Techniques</a></li>
                      <li><a href="/software/solidworks/part-modeling">Part Modeling</a></li>
                      <li><a href="/software/solidworks/assembly">Assembly Techniques</a></li>
                      <li><a href="/software/solidworks/drawing">Drawing & Documentation</a></li>
                      <li><a href="/software/solidworks/productivity">Productivity Tips</a></li>
                      <li><a href="/software/solidworks/advanced">Advanced Techniques</a></li>
                    </ul>
                  )}
                </li>
                <li className="sidebar-item">
                  <div 
                    className="sidebar-item-header"
                    onClick={() => toggleExpand('trimble')}
                  >
                    <span>Trimble</span>
                    <span className="expand-icon">{expandedItems.trimble ? '−' : '+'}</span>
                  </div>
                  {expandedItems.trimble && (
                    <ul className="sidebar-sublist">
                      <li><a href="/software/trimble/fieldlink">FieldLink</a></li>
                      <li><a href="/software/trimble/business-centre">Business Centre</a></li>
                      <li><a href="/software/trimble/connect">Trimble Connect</a></li>
                      <li><a href="/software/trimble/tekla">Tekla</a></li>
                      <li><a href="/software/trimble/best-practices">Best Practices</a></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </div>

          <div className="sidebar-section">
            <h2 
              className={`sidebar-heading ${activeCategory === 'resources' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('resources')}
            >
              Project Resources
            </h2>
            {activeCategory === 'resources' && (
              <ul className="sidebar-list">
                <li><a href="/resources/templates">Templates & Checklists</a></li>
                <li><a href="/resources/case-studies">Case Studies</a></li>
                <li><a href="/resources/reference">Reference Materials</a></li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
