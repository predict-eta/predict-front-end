import { AI_API } from '../configs/app'

async function fetchAiAPI(endpoint, { headers, body } = {}) {
  const res = await fetch(AI_API + endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'no-cors',
      ...headers
    },
    body,
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json
}

export async function predictRoute(data) {
  const result = await fetchAiAPI('predict', {
    body: JSON.stringify(data)
  })
  return result
}
