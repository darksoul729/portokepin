
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Konfigurasi transport email menggunakan SMTP Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "panzekstorage@gmail.com", // Ganti dengan email pengirim
        pass: "xpbfshhltjozioto ", // Gunakan password aplikasi, bukan password asli!
      },
    });

    // Konfigurasi isi email
    const mailOptions = {
      from: email,
      to: "panzekstorage@gmail.com", // Kirim email ke panzekstorage
      subject: `Pesan dari ${name}`,
      text: `Nama: ${name}\nEmail: ${email}\nPesan:\n${message}`,
    };

    // Kirim email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email berhasil dikirim!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Gagal mengirim email." }, { status: 500 });
  }
}
