import { NextRequest, NextResponse } from "next/server";

export async function GET(request : NextRequest, 
  { params } : { params : { slug : string }}) {
  
  const searchParams = request.nextUrl.searchParams
 
  const search = searchParams.get('search')
   
  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'

  const response = {
    message : 'Todos List One message',
    data : {
      id : params.slug,
      title : "Todo List One",
      is_done : false,
      query : search
    }
  }
  return NextResponse.json(response, { status : 200 });
}