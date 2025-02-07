// src/data/users.js

// User Status Codes:
// 0 - Inactive
// 1 - Active
// 2 - Suspended
// 3 - Blocked

export const users = {
  user_001: {
    id: 'user_001',
    name: 'Emma Thompson',
    profileImage: 'user_001.jpg',
    status: 1,
    likesCount: 85,
    commentsCount: 12,
    contributions: {
      imagesEdited: 10,
      videosEdited: 5,
      toolsUsed: {
        MidJourney: 5,
        Photoshop: 3,
        GPT: 2
      }
    }
  },
  user_002: {
    id: 'user_002',
    name: 'John Doe',
    profileImage: 'user_002.jpg',
    status: 1,
    likesCount: 120,
    commentsCount: 15,
    contributions: {
      imagesEdited: 15,
      videosEdited: 8,
      toolsUsed: {
        MidJourney: 8,
        Photoshop: 4,
        GPT: 3
      }
    }
  },
  user_003: {
    id: 'user_003',
    name: 'Sarah Bennett',
    profileImage: 'user_003.jpg',
    status: 1,
    likesCount: 100,
    commentsCount: 200,
    contributions: {
      imagesEdited: 20,
      videosEdited: 10,
      toolsUsed: {
        MidJourney: 10,
        Photoshop: 5,
        GPT: 5
      }
    }
  },
  user_004: {
    id: 'user_004',
    name: 'Michael Chen',
    profileImage: 'user_004.jpg',
    status: 1,
    likesCount: 150,
    commentsCount: 25,
    contributions: {
      imagesEdited: 25,
      videosEdited: 12,
      toolsUsed: {
        MidJourney: 12,
        Photoshop: 8,
        GPT: 5
      }
    }
  },
  user_005: {
    id: 'user_005',
    name: 'Lisa Rodriguez',
    profileImage: 'user_005.jpg',
    status: 0,
    likesCount: 75,
    commentsCount: 10,
    contributions: {
      imagesEdited: 8,
      videosEdited: 3,
      toolsUsed: {
        MidJourney: 4,
        Photoshop: 2,
        GPT: 2
      }
    }
  },
  user_006: {
    id: 'user_006',
    name: 'David Kim',
    profileImage: 'user_006.jpg',
    status: 1,
    likesCount: 200,
    commentsCount: 45,
    contributions: {
      imagesEdited: 30,
      videosEdited: 15,
      toolsUsed: {
        MidJourney: 15,
        Photoshop: 10,
        GPT: 5
      }
    }
  },
  user_007: {
    id: 'user_007',
    name: 'Rachel Green',
    profileImage: 'user_007.jpg',
    status: 3,
    likesCount: 90,
    commentsCount: 18,
    contributions: {
      imagesEdited: 12,
      videosEdited: 6,
      toolsUsed: {
        MidJourney: 6,
        Photoshop: 4,
        GPT: 2
      }
    }
  },
  user_008: {
    id: 'user_008',
    name: 'Alex Martinez',
    profileImage: 'user_008.jpg',
    status: 1,
    likesCount: 180,
    commentsCount: 35,
    contributions: {
      imagesEdited: 22,
      videosEdited: 11,
      toolsUsed: {
        MidJourney: 11,
        Photoshop: 7,
        GPT: 4
      }
    }
  }
};
 

export const getActiveUsers = () => {
  return Object.values(users).filter(user => user.status === 1);
};


