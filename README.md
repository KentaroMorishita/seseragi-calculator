# seseragi-calculator

A mobile-first calculator demo built with Seseragi.

The demo focuses on a small but real application architecture: pure calculator state transitions, reusable UI modules, Basic / Scientific modes, and calculation history.

## Development

```sh
seseragi dev --open
```

Production build:

```sh
seseragi build .
```

## Structure

```text
src/
├─ main.ssrg              # DOM runtime boundary
├─ app.ssrg               # Signal ownership, action dispatch, and screen wiring
├─ calculator/
│  ├─ model.ssrg          # Domain types, calculator state, actions, and pure update
│  ├─ entry.ssrg          # Numeric entry editing and parsing
│  ├─ format.ssrg         # Display, expression, and history formatting
│  └─ math.ssrg           # Pure arithmetic and scientific operations
└─ ui/
   ├─ styles.ssrg         # Visual tokens, responsive sizing, and styles
   ├─ components.ssrg     # Shared toolbar, display, and button components
   ├─ keypads.ssrg        # Basic and scientific keypads
   ├─ overlays.ssrg       # Mode menu and history sheet
   └─ view.ssrg           # Screen composition
```
