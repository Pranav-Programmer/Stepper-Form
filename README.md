
# React Multi-Step Form Component

The React Multi-Step Form component is a reusable component that allows you to create multi-step forms with ease. It utilizes React and Material-UI components to provide a user-friendly and interactive form experience. This README file will guide you on how to use and integrate the component into your React web application.

## Table of Contents

1. Installation
2. Usage
3. Component Structure
4. Styling
5. Credits
## Installation
Installation
To use the React Multi-Step Form component in your React web application, you can follow these steps:

1. Install the required dependencies by running the following command:

```bash
  npm install @mui/icons-material @material-ui/core react
```

2. Copy the ActiveState.js and HorizontalLinearStepper.js files into your project's component directory.

3. Import the HorizontalLinearStepper component into your desired React component:



```bash
  import HorizontalLinearStepper from './path/to/HorizontalLinearStepper';
```

4. You are now ready to use the React Multi-Step Form component in your application!
## Usage

To use the React Multi-Step Form component, you can follow these steps:

1. Render the 'HorizontalLinearStepper' component in your desired React component:

```bash
  function App() {
  return (
    <div>
      <HorizontalLinearStepper />
    </div>
  );
}
```

2. Customize the form steps, input fields, and validation according to your requirements. The component is designed to be flexible and easily adaptable to different use cases.

3. Customize the styling of the form and its components by modifying the provided CSS classes or adding your own styles using the 'makeStyles' hook.

4. Implement form submission handling by updating the 'handleSubmit' function inside the 'HorizontalLinearStepper' component. You can use the submitted form data in your application logic or send it to a server for further processing.

5. Enjoy the benefits of a multi-step form that provides a smooth user experience and organized data collection.

https://user-images.githubusercontent.com/79044490/230094686-4fbec320-fc98-4a16-b6fd-074046b9c82e.mp4

## Component Structure

The React Multi-Step Form component consists of two main components:

- ActiveState: This component is responsible for rendering the active state indicator for each step in the form. It receives props such as 'formSubmitted', 'activeStep', and 'step' to determine the appearance of each step.

- HorizontalLinearStepper: This is the main component that renders the multi-step form. It manages the form state, handles form navigation, and contains the form input fields. It utilizes the 'ActiveState' component and Material-UI components to create an intuitive form experience.

## Styling

The React Multi-Step Form component uses Material-UI's styling solution to provide flexibility in customizing the component's appearance. The 'makeStyles' hook is used to define CSS styles for different parts of the form.

To customize the styling, you can modify the CSS classes inside the 'makeStyles' function in the 'HorizontalLinearStepper' component. You can change colors, margins, paddings, font styles, and more to match your application's design.

## 🚀 Credits

The React Multi-Step Form Component was created by Pranav Dharme.

Happy coding!
