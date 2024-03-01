import { NextRequest, NextResponse } from "next/server";
import dummyTodos from '@/data/dummy.json'

export async function GET(request : NextRequest) {
  
  const response = {
    message : 'Todos Lists message',
    data : dummyTodos
  }
  return NextResponse.json(response, { status : 200 });
}