import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;



const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
  padding: 20px;
`;

const ModalContent = styled.div`
  position: relative;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  animation: ${slideIn} 0.3s ease-out;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (min-width: 768px) {
    max-width: 800px;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  background: #000;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  outline: none;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;
  color: white;
  font-size: 18px;
  
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
  
  &:focus {
    outline: 2px solid #4f46e5;
    outline-offset: 2px;
  }
`;

const VideoInfo = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const VideoTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  line-height: 1.3;
`;

const VideoDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
`;

const VideoModal = ({ isOpen, onClose, video }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton onClick={onClose} aria-label="Close video modal">
          ×
        </CloseButton>
        
        <VideoContainer>
          <Video
            src={video.url}
            controls
            autoPlay
            playsInline
            preload="metadata"
          />
        </VideoContainer>
        
        <VideoInfo>
          <VideoTitle>{video.title}</VideoTitle>
          <VideoDescription>{video.description}</VideoDescription>
        </VideoInfo>
      </ModalContent>
    </ModalOverlay>
  );
};

export default VideoModal;