import { NextRequest, NextResponse } from 'next/server'
import { queryPineconeVectorStoreAndQueryLLM } from '../../../utils'
import { indexName } from '../../../config'
import { Pinecone } from '@pinecone-database/pinecone'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY || '',
    environment: process.env.PINECONE_ENVIRONMENT || ''
  })
  const text = await queryPineconeVectorStoreAndQueryLLM(
    pinecone,
    indexName,
    body
  )
  return NextResponse.json({
    data: text
  })
}
