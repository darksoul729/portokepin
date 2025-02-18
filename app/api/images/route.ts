
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
  try {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const folder = process.env.CLOUDINARY_FOLDER;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !folder || !apiKey || !apiSecret) {
      throw new Error('Missing Cloudinary environment variables');
    }

    // Cloudinary URL untuk mengambil gambar dari folder tertentu
    const cloudinaryURL = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload`;

    // Request ke Cloudinary
    const response = await axios.get(cloudinaryURL, {
      params: {
        prefix: folder,    // Nama folder yang mau diambil
        max_results: 100,  // Jumlah maksimal gambar
      },
      auth: {
        username: apiKey,
        password: apiSecret,
      },
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('Error fetching images:', error.response?.data || error.message);
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}
