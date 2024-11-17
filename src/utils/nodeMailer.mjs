import nodemailer from "nodemailer";


  export const  sendEmail = async(email,subject,emailBody)=>{
        
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.APP_EMAIL,
                pass: process.env.APP_PASSWORD
            },
            requireTLS: true,
            logger: true
        })

        const info = await transporter.sendMail({
            // from: process.env.EMAIL,
            from: process.env.APP_EMAIL,
            to: email,
            subject: `Thank you note `,
            html: `
            <span>${subject}</span>
            <p>${emailBody}</p>
            <p>Thank you for using Email marketing application.</p>
            <h4>Email marketing app</h4>
            `,
            
            headers: { 'x-myheader': 'test header' }
        })


        if (info.accepted.includes(email)) return true
        else return false

    }
