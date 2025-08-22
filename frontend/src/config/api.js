// API Configuration for Umeed App
// This file handles both development and production environments

// Development: localhost:5000
// Production: Render backend URL (will be updated after deployment)
const isDevelopment = process.env.NODE_ENV === 'development';

const BACKEND_URL = isDevelopment 
  ? 'http://localhost:5000' 
  : 'https://umeed-backend.onrender.com'; // Update this after deploying to Render

export const API_BASE_URL = `${BACKEND_URL}/api`;

console.log('=== UMEED API CONFIGURATION ===');
console.log('Environment:', process.env.NODE_ENV);
console.log('Backend URL:', BACKEND_URL);
console.log('API Base URL:', API_BASE_URL);
console.log('Timestamp:', new Date().toISOString());
console.log('================================');

// API endpoints
export const API_ENDPOINTS = {
  // Auth
  auth: `${BACKEND_URL}/api/auth`,
  authProfile: `${BACKEND_URL}/api/auth/profile`,
  
  // Chat
  chat: `${BACKEND_URL}/api/chat`,
  chatHistory: `${BACKEND_URL}/api/chat/history`,
  
  // Goals
  goals: `${BACKEND_URL}/api/goals`,
  goalsAnalytics: `${BACKEND_URL}/api/goals/analytics`,
  goalsDailyProgress: `${BACKEND_URL}/api/goals/update-daily-progress`,
  goalsLog: (goalId) => `${BACKEND_URL}/api/goals/${goalId}/log`,
  goalsCheckin: (goalId) => `${BACKEND_URL}/api/goals/${goalId}/checkin`,
  goalsById: (goalId) => `${BACKEND_URL}/api/goals/${goalId}`,
  
  // Journal
  journal: `${BACKEND_URL}/api/journal`,
  journalStats: `${BACKEND_URL}/api/journal/stats/overview`,
  journalTest: `${BACKEND_URL}/api/journal/test`,
  journalById: (entryId) => `${BACKEND_URL}/api/journal/${entryId}`,
  
  // Emotions
  emotions: `${BACKEND_URL}/api/emotions`,
  emotionsById: (entryId) => `${BACKEND_URL}/api/emotions/${entryId}`,
  
  // Dashboard
  dashboardStats: `${BACKEND_URL}/api/dashboard/stats`,
  dashboardActivities: `${BACKEND_URL}/api/dashboard/activities`,
};

export default API_BASE_URL;
