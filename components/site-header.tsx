@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: 248 250 252;
  --foreground: 15 23 42;
}

body {
  background: rgb(var(--background));
  color: rgb(var(--foreground));
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
}
