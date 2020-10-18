# 
# goodbits interview for demonstrating REST API with Node and OAuth 2.0

This app shows how to create a REST API in Node and secure it with OAuth 2.0 Client Credentials using Okta.

## Getting Started

### Install Dependencies

After cloning the repository, simply run `npm install` to install the dependencies.

### Save Environment Variables

If you don't have one already, [sign up for a free Okta Developer account](https://www.okta.com/developer/signup/). Log in to your developer console to get the following information.

Create a file named `.env` that has the following variables, all obtained from your Okta developer console:

* **ISSUER**

  Log in to your developer console and navigate to **API** > **Authorization Servers**. Copy the `Issuer URI` for the `default` server.

* **SCOPE**

  Click on the word `default` to get details about the authorization server. Go to the **Scopes** tab and click the **Add Scope** button. Give it a name and optionally a description. The example app is for a parts manager, so for example you could name it `parts_manager`.

* **CLIENT_ID**

  Navigate to **Applications**, then click the **Add Application** button. Select **Service**, then click **Next**. Choose a name then click **Done**. The **Client ID** is shown on the next page.

* **CLIENT_SECRET**

  The **Client Secret** is on the same page as the **Client ID**

When you're done, your `.env` file should look something like this:

```bash
ISSUER=https://dev-4574750.okta.com/oauth2/default
SCOPE=employee
CLIENT_ID=0oabjhdaVnOX3Cn5n5d5
CLIENT_SECRET=hDdtacmfaWUGM_HGOY0vJnYR4YfTCBX3rpSrQ2wH
```

### Run the Server

To run the server, run `npm start` from the terminal.

### Run the Client
Run the `http://localhost:3000/get-token` : for getting token
Then run `http://localhost:3000/employees` : for listing employees
Then run `http://localhost:3000/employees/create` : for creating employees. Params empId,empName,empDept

