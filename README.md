A lightweight React library for creating responsive and accessible typography. Adjust font sizes dynamically based on viewport width while respecting user accessibility preferences like `prefers-reduced-motion`.

## Features
- 📏 **Responsive Typography**: Automatically scales font sizes based on screen width.
- ♿ **Accessibility**: Honors `prefers-reduced-motion` for smooth or static transitions.
- ⚡ **Lightweight**: Minimal footprint (~1.2 kB minified).
- 🛠 **TypeScript Support**: Fully typed for a better developer experience.

# **Installation**

Install the package and dependencies:
~~~
npm install react-dynamic-typography react react-dom
~~~

# **Usage**
Import and use the DynamicTypography component in your React project. Pass a baseSize and an optional scale prop to control the typography.

~~~
import React from 'react';
import { DynamicTypography } from 'react-dynamic-typography';

function App() {
  return (
    <div>
      <DynamicTypography baseSize="16px" scale={1.2}>
        This text scales with your viewport!
      </DynamicTypography>
    </div>
  );
}

export default App;
~~~

# **Props**

| Prop | Type | Default | Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| baseSize | string | - | Base font size (e.g., "16px", "1rem") | 
| scale | number | 1 | Scaling factor for responsiveness |
| children | React.ReactNode | - | Content to render with dynamic typography |



# **How It Works**
* The library calculates font size based on the viewport width relative to a 1440px baseline.
* It uses CSS custom properties (--dynamic-font-size) for flexibility.
* Transitions are disabled if the user prefers reduced motion, ensuring accessibility.
# **Requirements**
* React 18.2.0 or higher
* React DOM 18.2.0 or higher

# **Development**

To contribute or run locally:

1. Clone the repository:

~~~
    git clone https://github.com/Meybiz/react-dynamic-typography.git
    cd react-dynamic-typography
~~~

2. Install dependencies:

~~~
    npm install
~~~

3. Build the library:

~~~
    npm run build
~~~

# **Contributing**
Feel free to open issues or submit pull requests on GitHub. All contributions are welcome! Or send suggestions for improvements or ideas to email: gemestron@gmail.com

# **Author**
Created by meybiz (Victor Pererva).

# **License**

This project is licensed under the MIT License.