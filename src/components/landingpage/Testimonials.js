import React from 'react';

const Services = () => {
  return (
    <div style={styles.container}>
      <div style={styles.contentBox}>
        <div style={styles.header}>
          <h2 style={styles.heading}>Our Services</h2>
          <p style={styles.paragraph}>
            We provide specialized expertise across the content, publishing, and media spectrum,
            <br />
            delivering tailored solutions to meet your unique needs. Our portfolio of services
            <br />
            encompasses:
          </p>
        </div>
        <div style={styles.listContainer}>
          <ul style={styles.listLeft}>
            <li style={styles.listItem}>Content Creation & Writing</li>
            <li style={styles.listItem}>Social Media Management</li>
            <li style={styles.listItem}>Manuscript Editing & Proofreading</li>
            <li style={styles.listItem}>Artist Management</li>
          </ul>
          <ul style={styles.listRight}>
            <li style={styles.listItem}>Publishing & Translations</li>
            <li style={styles.listItem}>Media Monitoring</li>
            <li style={styles.listItem}>Transcriptions</li>
            <li style={styles.listItem}>Media Buying & Advertising</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Full width for the container
    padding: '20px',
    backgroundColor: '#f9f9f9', // Light background for the outer container
  },
  contentBox: {
    width: '100%', // Make content box take full width
    maxWidth: '1200px', // Optional: Limit maximum width to ensure content isn't stretched too far
    padding: '20px',
    backgroundColor: '#ffffff', // White background for the content box
    border: '1px solid #e0e0e0', // Light border for the box
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  },
  header: {
    backgroundColor: '#89298d', // Purple background for the header
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    color: '#ffffff', // White text for contrast
    textAlign: 'center', // Center the text in the header
  },
  heading: {
    fontSize: '32px', // Increased font size for the heading
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '18px', // Increased font size for the paragraph
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  listContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px', // Adds space between the two lists
  },
  listLeft: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    flex: 1, // Ensures the left list takes up available space
  },
  listRight: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    flex: 1, // Ensures the right list takes up available space
  },
  listItem: {
    fontSize: '18px', // Increased font size for list items
    marginBottom: '10px',
    paddingLeft: '20px',
    position: 'relative',
    color: '#555555', // Matching text color for list items
  },
};

export default Services;
