
# Todo List Application

## Summary of Changes

### 1. `TaskController`

- **Created and Updated Methods:**
  - Added implementations for the `create` and `update` methods.
  - Used `SaveTaskUseCase` for handling task creation and updates, ensuring consistency with other endpoints.

### 2. `TaskRepository`

- **Implemented `save` Method:**
  - Completed the `save` method to handle both task creation and updates using Prisma.
  - Added logic to differentiate between creating a new task and updating an existing one.

### 3. `SaveTaskUseCase`

- **Implemented `handle` Method:**
  - Integrated `TaskRepository` to save tasks, either creating a new task or updating an existing one based on the presence of an ID.

## Reason for Changes

- **Consistency:** Ensured that all endpoints have a consistent implementation approach using `UseCase` patterns.
- **Functionality:** Provided complete functionality for creating, updating, and saving tasks.