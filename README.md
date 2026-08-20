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
├─ app.ssrg               # Signal ownership and dispatch
├─ calculator/
│  ├─ model.ssrg          # Domain types and application state
│  ├─ entry.ssrg          # Numeric entry parsing / formatting
│  ├─ math.ssrg           # Pure calculator operations
│  └─ update.ssrg         # Pure state transition
└─ ui/
   ├─ styles.ssrg         # Visual tokens and styles
   ├─ components.ssrg     # Shared calculator UI pieces
   ├─ keypads.ssrg        # Basic and scientific keypads
   ├─ overlays.ssrg       # Mode menu and history sheet
   └─ view.ssrg           # Screen composition
```
