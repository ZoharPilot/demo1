export const comments = [
  {
    id: 'comment_001',
    userId: 'user_004',
    userName: users['user_004']?.firstName && users['user_004']?.lastName
      ? `${users['user_004'].firstName} ${users['user_004'].lastName}`
      : "Unknown User",
    targetId: 'edit_001',
    type: 'edit',
    text: "This looks amazing! Can you make the colors pop even more?",
    createdAt: '2024-02-02T16:00:00Z'
  }
];
