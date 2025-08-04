# Front-End Technical Challenge: Accessible Dialog Component

Your task is to create a fully functional and accessible dialog component. This component will be triggered by a button click and should adhere to the following specifications.

## Run the project

```shell
pnpm install
pnpm dev
```

## Requirements

- **Trigger Button**: The dialog component must be displayed when a user clicks a button. This button should be outside the dialog component itself.
- **Dialog Content**: The dialog should contain the text "What's your name".
- **Input**: The dialog should have an input who can handle user name.
- **Action Buttons**: The dialog must include two buttons:
  - **Confirm Button**: A "Confirm" button that, when clicked, executes the `onConfirm` function provided as a prop to the component. The name filled in the input should be send.
  - **Cancel Button**: A "Cancel" button that simply closes the dialog. Ideally, this button should be distinguished from the other by a different color variant.
- **Accessibility**: The component must be built with accessibility in mind. This includes but is not limited to:
  - **Focus Management**: The focus should move to the dialog when it opens and be trapped within it. When the dialog closes, focus should return to the button that opened it.
  - **Keyboard Navigation**: The dialog must be fully operable using a keyboard. The **Escape** key should close the dialog.
  - **ARIA Attributes**: Use appropriate ARIA attributes (if needed) to ensure the dialog is properly announced and understood by screen readers.
  - **Semantics**: Use proper HTML semantic elements.

## Technical Constraints

- You can use any library that you think useful.
- The `onConfirm` function will be a simple callback that you should simulate for the purpose of this test (e.g., `console.log('Confirmed!')`).

## What We're Looking For

We will be evaluating your code based on the following criteria:

- **Correctness and Functionality**: Does the dialog work as expected, opening and closing correctly?
- **Code Quality**: Is the code clean, well-structured, and easy to read?
- **Accessibility Implementation**: How well have you handled focus management, keyboard navigation, and ARIA attributes?
- **Use of Best Practices**: Does your solution demonstrate an understanding of modern front-end development principles?

Good luck!
