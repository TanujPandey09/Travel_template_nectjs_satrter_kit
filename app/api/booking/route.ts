import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, phone, travelDate, paxCount, tripNotes, defaultContext } = data;

    if (!fullName || !phone) {
      return NextResponse.json(
        { error: 'Full name and phone/WhatsApp number are required.' },
        { status: 400 }
      );
    }

    const bookingLead = {
      type: 'CUSTOM_TRIP_PLANNER',
      fullName: String(fullName).trim(),
      phone: String(phone).trim(),
      travelDate: travelDate || 'Flexible',
      paxCount: paxCount || '02 Passengers',
      tripNotes: tripNotes || 'None',
      context: defaultContext || 'General Inquiry',
      receivedAt: new Date().toISOString(),
    };

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🎫 NEW BOOKING LEAD LOGGED:');
    console.log(JSON.stringify(bookingLead, null, 2));
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    // Optional webhook integration (Discord, Slack, or Zapier)
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `🏔️ **New Custom Journey Dossier**\n**Name:** ${bookingLead.fullName}\n**Phone:** ${bookingLead.phone}\n**Travel Window:** ${bookingLead.travelDate}\n**Pax:** ${bookingLead.paxCount}\n**Context:** ${bookingLead.context}\n**Notes:** ${bookingLead.tripNotes}`,
          }),
        });
      } catch (err) {
        console.error('Webhook notification failed:', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Booking request registered successfully!',
    });
  } catch (error) {
    console.error('Booking API Error:', error);
    return NextResponse.json(
      { error: 'Unable to process booking. Please contact via WhatsApp.' },
      { status: 500 }
    );
  }
}

