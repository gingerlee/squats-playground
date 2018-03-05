const initialState = {
  currentWorkoutId: 1,
  workoutById: {
    1: {
      title: 'Jump!',
      day: 'Day 1',
      duration: '30min',
      level: 'Intermediate',
      intensity: 'Medium',
      image: '',
      videoURL: 'https://www.youtube.com/watch?v=E4tiWhsQhQg&list=PL5lPziO_t_VgdnI02Bi4XDlJTphcuX6dW',
      users: []
    },
    2: {
      title: 'Step up to your goals',
      day: 'Day 2',
      duration: '40min',
      level: 'Advanced',
      intensity: 'Hard',
      image: '',
      videoURL: 'https://www.youtube.com/watch?v=Ea6o73uwVYM',
      users: []
    },
    3: {
      title: 'Abs',
      day: 'Day 3',
      duration: '30min',
      level: 'Beginner',
      intensity: 'Low',
      image: '',
      videoURL: 'https://www.youtube.com/watch?v=EkWBqgXUXDY',
      users: []
    },
  },
  currentUserId: null,
  usersByID: {
    1: {
      name: 'Test',
      title: '',
      image: '',
      completedWorkouts: []
    }
  },
};

export default initialState;
