// import { useActionState } from "react";
// import { useState, useTransition } from "react";

// What’s new in React 19

// Actions

// A common use case in React apps is to perform a data mutation and then update state in response. For example, when a user submits a form to change their name, you will make an API request, and then handle the response. In the past, you would need to handle pending states, errors, optimistic updates, and sequential requests manually.

// For example, you could handle the pending and error state in useState:

// Before Actions
// function App() {
//   const [name, setName] = useState("");
//   const [error, setError] = useState(null); // for handling error
//   const [isPending, setIsPending] = useState(false); // for disabling the submit btn

//   const handleSubmit = async () => {
//     setIsPending(true);
//     const error = await updateName(name);
//     setIsPending(false);
//     if (error) {
//       setError(error);
//       return;
//     }
//   };

//   return (
//     <div>
//       <input value={name} onChange={(event) => setName(event.target.value)} />
//       <button onClick={handleSubmit} disabled={isPending}>
//         Update
//       </button>
//       {error && <p>{error}</p>}
//     </div>
//   );
// }

// export default App;

// In React 19, we’re adding support for using async functions in transitions to handle pending states, errors, forms, and optimistic updates automatically.

// For example, you can use useTransition to handle the pending state for you:

// function App() {
//   const [name, setName] = useState("");
//   const [error, setError] = useState(null);
//   const [isPending, startTransition] = useTransition();

//   const handleSubmit = () => {
//     startTransition(async () => {
//       const error = await updateName(name);
//       if (error) {
//         setError(error);
//         return;
//       }
//     });
//   };

//   return (
//     <div>
//       <input value={name} onChange={(event) => setName(event.target.value)} />
//       <button onClick={handleSubmit} disabled={isPending}>
//         Update
//       </button>
//       {error && <p>{error}</p>}
//     </div>
//   );
// }

// export default App;

// Using <form> Actions and useActionState
// function App({ name, setName }) {
//   const [error, submitAction, isPending] = useActionState(
//     async (previousState, formData) => {
//       const error = await updateName(formData.get("name"));
//       if (error) {
//         return error;
//       }
//       return null;
//     },
//     null
//   );

//   return (
//     <form action={submitAction}>
//       <input type="text" name="name" />
//       <button type="submit" disabled={isPending}>
//         Update
//       </button>
//       {error && <p>{error}</p>}
//     </form>
//   );
// }

// export default App;

// We’ve added support for passing functions as the action

// <form action={actionFunction}>

// React DOM: New hook: useFormStatus

// New hook: useOptimistic

// New API: use

// In React 19 we’re introducing a new API to read resources in render: use.

// For example, you can read a promise with use, and React will Suspend until the promise resolves:

// We’ve added two new APIs to react-dom/static for static site generation:

// prerender
// prerenderToNodeStream

// These new APIs improve on renderToString by waiting for data to load for static HTML generation.

// React Server Components

// Server Components are a new option that allows rendering components ahead of time, before bundling, in an environment separate from your client application or SSR server. This separate environment is the “server” in React Server Components. Server Components can run once at build time on your CI server, or they can be run for each request using a web server.

// Improvements in React 19
// ref as a prop
// Diffs for hydration errors
// <Context> as a provider
// Cleanup functions for refs
// useDeferredValue initial value
// const value = useDeferredValue(deferredValue, '');
// Support for Document Metadata
// Support for stylesheets
// Support for async scripts
// Support for preloading resources
// Better error reporting
// Support for Custom Elements

export default function App() {
  return (
    <h1
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Hello Muhammad Farooq
    </h1>
  );
}
