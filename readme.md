# DevExcuses API

DevExcuses API is a fun and simple API that provides excuses for developers. You can use it to generate random programming excuses, perfect for those moments when you need a reason for a delay or an issue.

## Features

- Get random developer excuses.
- Easy to use and integrate.

## Getting Started

To get started with DevExcuses API locally, follow these steps:

### Prerequisites

- Node.js (v12 or later)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/devexcuses.git
   ```
2. Install the dependencies:
   ```bash
   cd devexcuses
   npm install
   ```
3. Run the application:

```bash
npm start
```

### Endpoints

#### Get a random developer excuse

GET http://localhost:3000/excuses

```bash
{
  "excuse": "I was too busy debugging my code."
}
```

### License

This project is licensed under the MIT License.
