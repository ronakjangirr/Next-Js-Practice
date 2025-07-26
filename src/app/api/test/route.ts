import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const userAgent = req.headers.get('user-agent');
  const customHeader = req.headers.get('x-custom-header');

  return NextResponse.json({
    userAgent,
    customHeader,
  });
}