import { NextResponse } from 'next/server';

export async function GET() {
  const data = await fetch('http://localhost:7979/pub2/info');
  const json = await data.json();
  return NextResponse.json(json);
}