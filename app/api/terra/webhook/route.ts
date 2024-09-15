import { NextRequest, NextResponse } from 'next/server';
import Terra from 'terra-api';
import { PrismaClient } from '@prisma/client';

const terra = new Terra(
  process.env.TERRA_DEV_ID ?? "",
  process.env.TERRA_API_KEY ?? "",
  process.env.TERRA_WEBHOOK_SECRET ?? ""
);

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = req.headers.get('terra-signature');

    if (!signature) {
      return NextResponse.json({ error: 'Missing Terra signature' }, { status: 400 });
    }

    const data = JSON.parse(body);
    console.log('Received webhook data:');
    console.log(JSON.stringify(data, null, 2));

    // Store the data in the database
    const userId = data.user.user_id;
    const storedData = await prisma.terraData.create({
      data: {
        userId: userId,
        type: data.type,
        data: JSON.stringify(data), // Stringify the JSON data
      },
    });

    console.log('Stored data in database with ID:', storedData.id);

    return NextResponse.json({ message: 'Webhook received, processed, and stored' }, { status: 200 });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}