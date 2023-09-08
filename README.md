# Node.js Mailer Backend

This Node.js backend application simplifies email sending using NodeMailer, offering a user-friendly API for integrating email functionality into your application.

## Getting Started

To set up and run the Node.js Mailer Backend on your local machine or server, follow these steps:

### Prerequisites

Ensure you have the following software installed on your system:

- [Node.js](https://nodejs.org/)
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/brandonadams21/nodeEmail.git
   ```

2. Navigate to the project directory:

   ```
   cd ~
   ```

3. Install the project dependencies:

   ```
   npm install
   ```

4. Configure your email service provider in the `app.js` file (see Configuration section below).

5. Start the application:

   ```
   node app.js
   ```

The Node.js Mailer Backend should now be running on http://localhost:8080.

## Usage

You can use this backend to send emails from your application by making HTTP POST requests to the appropriate API endpoint. Refer to the API Endpoints section below for details on available endpoints.

## Configuration

To configure the email service provider, open the `app.js` file and provide the necessary credentials and settings for your email provider. For example, if you are using Gmail:

```javascript
module.exports = {
  email: {
    service: 'Gmail',
    auth: {
      user: 'your.email@gmail.com',
      pass: 'your-password'
    }
  }
};
```

Ensure that you keep sensitive information like email passwords in environment variables or use a secure configuration management solution for production deployments.

## API Endpoints

### Send Email

- **Endpoint**: `/api/send-email`
- **Method**: POST
- **Request Body**:

  ```json
  {
    "to": "recipient@example.com",
    "subject": "Your Subject",
    "text": "Email content in plain text",
    "html": "<p>Email content in HTML format</p>"
  }
  ```

- **Response**:

  - `200 OK`: Email sent successfully.
  - `400 Bad Request`: Invalid request body.
  - `500 Internal Server Error`: Email sending failed.

Example cURL request to send an email:

```bash
curl -X POST http://localhost:8080/api/send-email -H "Content-Type: application/json" -d '{
  "to": "recipient@example.com",
  "subject": "Hello",
  "text": "This is a test email.",
  "html": "<p>This is a test email.</p>"
}'
```

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please create an issue or open a pull request.

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.