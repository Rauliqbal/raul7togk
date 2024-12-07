import { Hono } from "hono";
import { handle } from "hono/vercel";
import nodemailer from "nodemailer";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
   return c.json({
      status: "Success",
   });
});

// app.post("/contact", async (c) => {
//    const body = await c.req.parseBody();
//    let name = String(body.title);
//    let email = String(body.email);
//    let subject = String(body.subject);
//    let detail = String(body.detail);

//    const mailOption = {
//       from: "Portfolio Website <doomangle1@gmail.com>",
//       to: "muhamadrauliqbal.13@gmail.com",
//       subject: subject + name,
//       html: template,
//    };

//    transporter.sendMail(mailOption, (err, info) => {
//       if (err) {
//          return c.json({
//             message: err.message,
//          });
//       } else {
//          return c.json({
//             message: `Email ${info.response} Terkirim!`,
//          });
//       }
//    });
// });

export const GET = handle(app);
// export const POST = handle(app);
