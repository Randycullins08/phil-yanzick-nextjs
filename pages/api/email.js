import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "randycullins2018@gmail.com",
      from: "randycullins2018@gmail.com",
      subject: `Message from ${req.body.name}`,
      html: `
            <div>
                <h1>New Email From ${req.body.name}</h1>
                <br/>
                <h3>Their email is ${req.body.email}</h3>
                <br/>
                <p>${req.body.message}</p>
            </div>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}
