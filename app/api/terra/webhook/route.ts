import { NextRequest, NextResponse } from 'next/server';
import Terra from 'terra-api';
import fs from 'fs/promises';
import path from 'path';

const terra = new Terra(
  process.env.TERRA_DEV_ID ?? "",
  process.env.TERRA_API_KEY ?? "",
  process.env.TERRA_WEBHOOK_SECRET ?? ""
);

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

    // Save the data to a JSON file
    const userId = data.user.user_id;
    const fileName = `${userId}_${Date.now()}.json`;
    const filePath = path.join(process.cwd(), 'app', 'api', 'terra', fileName);

    await fs.writeFile(filePath, JSON.stringify(data, null, 2));

    console.log('Stored data in file:', filePath);

    return NextResponse.json({ message: 'Webhook received, processed, and stored' }, { status: 200 });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}