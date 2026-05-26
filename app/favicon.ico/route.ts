import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://lh3.googleusercontent.com/d/11PftqrVrqzER602AoZWUbAu12fzD95mc', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const headers = new Headers();
    // Serve as image/x-icon or image/png depending on source
    headers.set('Content-Type', 'image/x-icon');
    headers.set('Cache-Control', 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=600');

    return new NextResponse(Buffer.from(arrayBuffer), {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error proxying favicon.ico:', error);
    return NextResponse.redirect('https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=48&h=48&auto=format&fit=crop');
  }
}
