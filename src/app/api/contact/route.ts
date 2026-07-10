import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Obtiene las variables del Request
    const { name, email, service, message } = await request.json();

    // Validaciones de los campos del formulario
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Se configura el NodeMailer para SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Plantilla para el correo de recepción
    const mailToAdmin = {
      from: `"Deviathan Web" <${process.env.EMAIL_USER}>`,
      to: 'ruedamarinsebastian@gmail.com',
      subject: `🔥 Nuevo Proyecto Deviathan: ${service} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E2E8F0; border-radius: 10px;">
          <h2 style="color: #7668E7;">Nueva Solicitud de Proyecto</h2>
          <p>Has recibido un nuevo mensaje desde el formulario de la página web de Deviathan.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Nombre:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Servicio:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${service}</td>
            </tr>
          </table>
          <h3 style="color: #110941; margin-top: 20px;">Detalles del Proyecto:</h3>
          <div style="background-color: #f7f7f7; padding: 15px; border-left: 4px solid #FF6B00; border-radius: 4px; white-space: pre-wrap;">
            ${message}
          </div>
        </div>
      `,
    };

    // Plantilla para el correo de confirmación
    const mailToUser = {
      from: `"Deviathan" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Hemos recibido tu solicitud de proyecto - Deviathan',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E2E8F0; border-radius: 10px;">
          <h2 style="color: #7668E7;">¡Misión Confirmada, ${name}!</h2>
          <p>Hemos recibido correctamente tu solicitud de contacto interesándote en el servicio de <strong>${service}</strong>.</p>
          <p>Nuestro escuadrón de ingeniería ya está revisando los detalles de tu proyecto. Nos pondremos en contacto contigo a la mayor brevedad posible para agendar una reunión o enviarte una propuesta directa.</p>
          <h3 style="color: #110941; margin-top: 20px;">Resumen de tu mensaje:</h3>
          <div style="background-color: #f7f7f7; padding: 15px; border-left: 4px solid #7668E7; border-radius: 4px; font-style: italic;">
            ${message}
          </div>
          <br/>
          <p>Si tienes información adicional que quieras agregar, simplemente responde a este correo.</p>
          <p style="margin-top: 30px;">
            <strong>El equipo de Deviathan</strong><br/>
            <span style="color: #FF6B00;">Diseñando la evolución digital de tu empresa.</span>
          </p>
        </div>
      `,
    };

    // Envía ambos correos
    await Promise.all([
      transporter.sendMail(mailToAdmin),
      transporter.sendMail(mailToUser)
    ]);
    return NextResponse.json({ success: true, message: 'Correos enviados exitosamente' });
    
  } catch (error) {
    console.error('Error enviando el correo:', error);
    return NextResponse.json(
      { error: 'Error interno al procesar el envío de correos' },
      { status: 500 }
    );
  }
}
