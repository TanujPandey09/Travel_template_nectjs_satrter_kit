import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, service, destination, passengers, message } = data;

    // Validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Full name and contact number are required.' },
        { status: 400 }
      );
    }

    // Optional email validation if provided
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const leadPayload = {
      type: 'CONTACT_INQUIRY',
      name: String(name).trim(),
      email: email ? String(email).trim() : 'N/A',
      phone: String(phone).trim(),
      service: service || 'Tour Package',
      destination: destination || 'Unspecified',
      passengers: passengers || '1-2',
      message: message || '',
      receivedAt: new Date().toISOString(),
    };

    // Log lead to server console
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📥 NEW ALPINEX INQUIRY RECEIVED:');
    console.log(JSON.stringify(leadPayload, null, 2));
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    // Webhook integration (e.g. Discord, Slack, Zapier, Make)
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `🚀 **New Alpinex Inquiry**\n**Name:** ${leadPayload.name}\n**Phone:** ${leadPayload.phone}\n**Email:** ${leadPayload.email}\n**Service:** ${leadPayload.service}\n**Destination:** ${leadPayload.destination}\n**Pax:** ${leadPayload.passengers}\n**Notes:** ${leadPayload.message}`,
          }),
        });
      } catch (err) {
        console.error('Webhook notification failed:', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been submitted! Our travel curators will reach out shortly.',
      lead: { name: leadPayload.name, service: leadPayload.service },
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'An error occurred while submitting. Please message us on WhatsApp.' },
      { status: 500 }
    );
  }
}

