import { useEffect, useState } from 'react';
import { users } from '../data/users'; // וודא שזה הנתיב הנכון

export const useUser = (userId) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) {
      setError(new Error('User ID is required'));
      setLoading(false);
      return;
    }

    try {
      const userData = users[userId];
      if (!userData) {
        setError(new Error('User not found'));
      } else if (userData.status !== 1) {
        setError(new Error('User is not active'));
      } else {
        setSelectedUser(userData);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  return { user: selectedUser, loading, error };
};
