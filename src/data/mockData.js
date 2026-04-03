export const currentUser = {
  username: "Abhinav Khare",
  handle: "@abhi_navkhare",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  posts: 472,
  followers: "12.4K",
  following: 228,
  bio: "UI Designer | Traveler | Lifestyle Blogger",
  highlights: [
    { id: 1, name: "New", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
    { id: 2, name: "Garden", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=100&h=100&fit=crop" },
    { id: 3, name: "Camera", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&h=100&fit=crop" },
    { id: 4, name: "Walls", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop" },
  ]
};

export const stories = [
  { id: 1, username: "Your story", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", isUser: true, hasStory: false },
  { id: 2, username: "Sonya", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face", hasStory: true, isLive: true },
  { id: 3, username: "Adam", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", hasStory: true },
  { id: 4, username: "Andrew", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face", hasStory: true },
  { id: 5, username: "Nicole", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face", hasStory: true },
  { id: 6, username: "Ashley", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", hasStory: true },
  { id: 7, username: "Michael", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", hasStory: true },
  { id: 8, username: "Damian", avatar: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150&h=150&fit=crop&crop=face", hasStory: true },
];

export const posts = [
  {
    id: 1,
    user: {
      name: "Sonya Leena",
      location: "Dubai, UAE",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
    },
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=750&fit=crop",
    likes: 360,
    likedBy: "Andrew",
    caption: "You can never dull my sparkle ✨",
    comments: 12,
    time: "2h"
  },
  {
    id: 2,
    user: {
      name: "Adam Addisin",
      location: "Oklahoma, US",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=750&fit=crop",
    likes: 360,
    likedBy: "Andrew",
    caption: "In photography, there is a reality so subtle that...",
    comments: 8,
    time: "4h"
  },
  {
    id: 3,
    user: {
      name: "Andrew Devitt",
      location: "Auckland Park, SA",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
    },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop",
    likes: 360,
    likedBy: "Sonya",
    caption: "The unexpected moment is always sweeter",
    comments: 15,
    time: "5h"
  },
  {
    id: 4,
    user: {
      name: "Nicole Segall",
      location: "New Delhi, India",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
    },
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=750&fit=crop",
    likes: 245,
    likedBy: "Michael",
    caption: "Colors of the city 🌈",
    comments: 6,
    time: "6h"
  },
  {
    id: 5,
    user: {
      name: "Michael Gilmore",
      location: "Lawrence, KS",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=750&fit=crop",
    likes: 189,
    likedBy: "Nicole",
    caption: "Mountain mornings 🏔️",
    comments: 4,
    time: "8h"
  },
  {
    id: 6,
    user: {
      name: "Damian Elton",
      location: "Birmingham, UK",
      avatar: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop&crop=face"
    },
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=750&fit=crop",
    likes: 421,
    likedBy: "Adam",
    caption: "Weekend vibes only",
    comments: 22,
    time: "10h"
  }
];