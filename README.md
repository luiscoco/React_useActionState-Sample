# useActionState

## 1. Overview

The app demonstrates React’s **useActionState** to run an async action from a form submit and update UI state automatically.

It splits logic into a small action function and two presentational components: a form and a result display.

**Key Files**

useActionState_sample/src/App.tsx (line 7) sets up useActionState and wires components.

useActionState_sample/src/components/SaveForm.tsx (line 10) renders the form with action={formAction} and submit button.

useActionState_sample/src/components/Result.tsx (line 1) displays the latest result text.

useActionState_sample/src/actions.ts (line 1) provides the async saveMessage used by the action.

**How it Works**

Initialize action state:

**App.tsx** (lines 7-10) calls useActionState(handler, 'Initial message').

It returns [status, formAction, isPending] where:

**status** is the current message shown to the user.

**formAction** is a function you attach to a form’s action attribute.

**isPending** indicates if the async handler is running.

**Submit handling**:

**SaveForm.tsx** (line 10) binds action={action} so submitting the form invokes the useActionState handler with FormData.

**SaveForm.tsx** (lines 16-18) disables the button and shows “Saving...” while isPending is true.

**Async work**:

**actions.ts** (lines 1-4) simulates a save with a small delay, reads message from FormData, and returns either “Saved: …” or “Please enter a message”.

**State update**:

**App.tsx** (lines 7-9) uses the handler async (_prev, formData) => saveMessage(formData).

Whatever string the handler resolves to becomes the new status.

**Result.tsx** (lines 1-6) renders the latest status.

**Why use useActionState**

It ties form submission, async work, pending state, and resulting state updates into a single hook, reducing boilerplate around onSubmit, preventDefault, manual loading flags, and setState.
