import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import MenuItem from '@/models/MenuItem';
import { productsData } from '@/data/products-data';

export async function GET() {
  try {
    await connectToDatabase();
    
    // Auto-seed: If database is completely empty, import from the static data file
    const count = await MenuItem.countDocuments();
    if (count === 0) {
      // Map the static data to match Mongoose schema strictly
      const seedData = productsData.map(item => ({
        name: item.name,
        description: item.description,
        price: item.price,
        category: item.category,
        image: item.image,
        isAvailable: item.isAvailable
      }));
      await MenuItem.insertMany(seedData);
    }

    const items = await MenuItem.find({}).sort({ createdAt: -1 });
    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch items' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectToDatabase();
    
    // Quick validation (you can expand this)
    if (!body.name || !body.price || !body.category) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newItem = new MenuItem(body);
    await newItem.save();
    
    return NextResponse.json({ message: 'تم إضافة الصنف بنجاح', item: newItem }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create item' }, { status: 500 });
  }
}
