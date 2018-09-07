class InitialStateGenerator {
  getInitialState() {
    return {
      taskList: {
        newTaskDescription: "New task",
        tasks: [
          { id: 0, description: "Sleep" },
          { id: 1, description: "Breakfast" },
          { id: 2, description: "Workout" },
          { id: 3, description: "Dinner" }
        ]
      }
    };
  }
}

export const initialStateGenerator = new InitialStateGenerator();