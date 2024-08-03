from fastapi import FastAPI, Form
from fastapi.responses import JSONResponse
from fastapi_mail import FastMail
from fastapi_mail import MessageSchema
from pydantic import EmailStr
from starlette.middleware.cors import CORSMiddleware
from starlette.requests import Request
from config import mail_password
app = FastAPI()

origins = ["http://localhost:3000/contact"] 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

mail_conf = {
    "MAIL_USERNAME": "raheem.dev7@gmail.com",
    "MAIL_PASSWORD": mail_password,
    "MAIL_FROM": "raheem@support.com",
    "MAIL_PORT": 587,
    "MAIL_SERVER": "smtp.gmail.com",
    "MAIL_TLS": True,
    "MAIL_SSL": False,
}

fast_mail = FastMail(mail_conf)

@app.post("/contact/")
async def contact_form(
    first_name: str = Form(...),
    last_name: str = Form(...),
    email: EmailStr = Form(...),
    country: str = Form(...),
    subject: str = Form(...)
):
    # Log the received data for debugging
    print(f"Received data: first_name={first_name}, last_name={last_name}, email={email}, country={country}, subject={subject}")

    # Compose the email message
    email_body = f"Name: {first_name} {last_name}\nEmail: {email}\nCountry: {country}\nSubject: {subject}"

    message = MessageSchema(
        subject="New Contact Form Submission",
        body=email_body,
        from_address=mail_conf["MAIL_FROM"],
        to_address="raheem.dev7@gmail.com",  
    )

    try:
        # Send the email
        await fast_mail.send_message(message)

        return JSONResponse(content={"message": "Email sent successfully"}, status_code=200)

    except Exception as e:
        # If sending fails, return an error response
        return JSONResponse(
            content={"error": f"Failed to send email. Error: {str(e)}"},
            status_code=500,
        )
