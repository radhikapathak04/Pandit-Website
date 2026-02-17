import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const data = await req.formData();
  const file = data.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file" });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), "public/uploads");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const filePath = path.join(uploadDir, file.name);
  fs.writeFileSync(filePath, buffer);

  // update list
  const listPath = path.join(process.cwd(), "public/uploads-list.json");

  let list: string[] = [];

  if (fs.existsSync(listPath)) {
    list = JSON.parse(fs.readFileSync(listPath, "utf-8"));
  }

  list.push(`/uploads/${file.name}`);

  fs.writeFileSync(listPath, JSON.stringify(list));

  return NextResponse.json({ success: true });
}
