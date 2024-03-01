import { NextRequest, NextResponse } from "next/server";

export async function GET(request : NextRequest) {
  
  const response = {
    message : 'This is a response message from the server',
    data : 'This is a response data from the server'
  }
  return NextResponse.json(response, { status : 200 });
}