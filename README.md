# Gold-Fundamentals-payment-gateway-demo-


Gold Fundamentals Payment Gateway (Demo)

Overview

The Gold Fundamentals Payment Gateway is a demonstration payment processing backend built with Node.js and Express.js. It is designed to work with the accompanying "Gateway.html" frontend by providing a simple tokenization and payment authorization workflow.

This project is intended for development, testing, and educational purposes only. It does not connect to a real bank or payment processor and does not require a MongoDB database.

---

Features

- Express.js REST API
- Card tokenization
- In-memory token storage
- Payment authorization simulation
- Input validation middleware
- Error handling middleware
- CORS enabled
- Helmet security headers
- Environment variable support
- No database required

---

Technology Stack

- Node.js
- Express.js
- UUID
- Helmet
- CORS
- Dotenv

---

Project Structure

payment-gateway-backend/
│
├── controllers/
│   └── paymentController.js
│
├── middleware/
│   ├── validationMiddleware.js
│   └── errorMiddleware.js
│
├── routes/
│   └── paymentRoutes.js
│
├── services/
│   └── tokenService.js
│
├── utils/
│   └── response.js
│
├── .env
├── package.json
├── server.js
└── README.md

---

Installation

Clone the repository.

git clone https://github.com/yourusername/gold-payment-gateway.git

Move into the project directory.

cd gold-payment-gateway

Install the dependencies.

npm install

---

Environment Variables

Create a ".env" file in the root directory.

PORT=8080

---

Running the Server

Development mode

npm run dev

Production mode

npm start

The server will run on:

http://localhost:8080

---

API Endpoints

Health Check

GET /

Returns the server status.

Example Response

{
  "status": "Gateway Running"
}

---

Tokenize Card

POST /v1/tokens

Creates a payment token from card information.

Request

{
  "card_number": "4111111111111111",
  "expiry_month": "12",
  "expiry_year": "29",
  "cvc": "123"
}

Response

{
  "token": "7fdde2dc-61db-4f0c-bec5-7ad8cbec04c4"
}

---

Charge Card

POST /v1/charges

Charges a previously generated payment token.

Request

{
  "amount": 50000,
  "currency": "ZAR",
  "token": "7fdde2dc-61db-4f0c-bec5-7ad8cbec04c4",
  "merchant_id": "mer_gold_fundamentals_1"
}

Successful Response

{
  "status": "succeeded",
  "transaction_id": "TXN-17223456789",
  "amount": 50000,
  "currency": "ZAR"
}

Failed Response

{
  "status": "failed",
  "error": "Invalid token"
}

---

Request Flow

Gateway.html

        │

        ▼

POST /v1/tokens

        │

Generate UUID Token

        │

Store Token In Memory

        │

Return Token

        ▼

POST /v1/charges

        │

Validate Token

        │

Approve Transaction

        ▼

Return Success Response

---

Validation

The backend validates:

- Card number
- Expiry month
- Expiry year
- CVC
- Payment amount
- Currency
- Payment token

Requests with missing information return HTTP 400.

---

Security

This demonstration project includes:

- Helmet security headers
- JSON body parsing
- CORS support
- Tokenized payment flow
- Separation of routes, controllers, middleware, and services

Because this is a demo project:

- Card information is temporarily stored in memory.
- Tokens are deleted after a successful charge.
- No payment information is permanently stored.

---

Testing

You can test the API using:

- Postman
- Insomnia
- Thunder Client
- The included "Gateway.html" frontend

---

Limitations

This project is not intended for production use.

The project does not include:

- Real banking integration
- PCI DSS compliance
- Database storage
- Payment settlement
- Fraud detection
- Encryption of stored payment data
- Authentication
- User accounts
- Merchant onboarding

---

Future Improvements

Possible future enhancements include:

- PostgreSQL or MySQL integration
- JWT authentication
- Merchant accounts
- Transaction history
- Refund API
- Webhooks
- AES-256 encryption
- Rate limiting
- Logging
- Payment receipts
- Admin dashboard
- Docker support
- Automated testing
- CI/CD pipeline
- OpenAPI (Swagger) documentation

---

License

This project is provided for educational and demonstration purposes.

Use at your own discretion.

---

Author

Developed for the Gold Fundamentals project by Lona Matshingana in the Republic of South Africa as a demonstration payment gateway using Node.js and Express.js.
