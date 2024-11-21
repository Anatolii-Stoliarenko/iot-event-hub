# IoT Event Hub

[**See the application in action here**](https://iot-event-hub.vercel.app/)

**Polska wersja**: Zobacz [README.md](README.md)

## Project Description

IoT Event Hub is a web application built with Angular that enables managing and monitoring IoT events. Device data is presented in a clear format, and users can create, edit, and manage events through dynamic forms. The project uses Angular Material to create intuitive and responsive user interfaces.

---

## Features

- **Event Creation**: Users can add new IoT events using a form.
- **Event List**: Displays all events with the ability to edit them.
- **Event Details**: View detailed information about each event.
- **Dynamic Data Handling**: Data processed using Angular services (`EventService`).
- **Responsiveness**: The application adapts to various devices thanks to Angular Material.

---

## Technologies and Libraries

- **Angular** - Framework for building web applications.
- **RxJS** - Managing asynchronous operations.
- **TypeScript** - Programming language that is a superset of JavaScript.
- **Angular Material** - Material Design component set for modern UI.
- **SCSS** - CSS preprocessor for advanced style management.

---

## Project Structure

```plaintext
src/
├── app/
│   ├── event-form/
│   │   ├── event-form.component.html          // Form for creating/editing events
│   │   ├── event-form.component.scss          // Styles for the form
│   │   └── event-form.component.ts            // Logic for the form
│   ├── footer/
│   │   ├── footer.component.html              // HTML for the footer
│   │   ├── footer.component.scss              // Styles for the footer
│   │   └── footer.component.ts                // Footer logic
│   ├── header/
│   │   ├── header.component.html              // HTML for the header
│   │   ├── header.component.scss              // Styles for the header
│   │   └── header.component.ts                // Header logic
│   ├── models/
│   │   └── event.models.ts                    // Data model for events
│   ├── services/
│   │   ├── api.service.ts                     // Service for backend communication
│   │   ├── data-generator.service.ts          // Service for generating test data
│   │   └── event.service.ts                   // Service for managing events
│   ├── app.component.html                     // Main application HTML
│   ├── app.component.scss                     // Main application styles
│   ├── app.component.ts                       // Main application logic
│   ├── app.config.ts                          // Application configuration
│   ├── app.routes.ts                          // Application routing
│   ├── index.html                             // Main HTML entry point
│   ├── main.ts                                // Main TypeScript entry point
│   └── styles.scss                            // Global styles
└── public/                                    // Public assets (e.g., images, fonts)
```

---

## Installation and Setup

1. Clone the repository

```bash
git clone https://github.com/Anatolii-Stoliarenko/iot-event-hub.git
cd iot-event-hub
```

2. Install dependencies

```bash
npm install
```

3. Run the application

```bash
ng serve
```

The application will be available at http://localhost:4200/.

---

## How It Works

1. The user adds new IoT events using the form.

2. All events are displayed in a table with the option to edit them.

3. Dynamic data is generated using Angular services.

---

## Future Development

1. API Integration: Connecting with real IoT devices.

2. Unit Testing: Adding tests for components and services.

3. Advanced Validation: Implementing more comprehensive data validation.

---

## License

The LICENSE file contains information regarding the project's license.

---

## Contact

If you have any questions about the project or its setup, contact via:

1. **Email**: [anatolii.stoliarenko@gmail.com](mailto:anatolii.stoliarenko@gmail.com)
2. **Website**: [https://anatolii-stoliarenko.webflow.io/](https://anatolii-stoliarenko.webflow.io/)
