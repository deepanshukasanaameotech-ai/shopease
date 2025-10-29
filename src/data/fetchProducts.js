export async function fetchProducts() {
  try {
    const res = await fetch('/data/products.json')
    if (!res.ok) throw new Error('Failed to fetch')
    const json = await res.json()
    await new Promise((r) => setTimeout(r, 150)) // simulate delay
    return json
  } catch (err) {
    console.error(err)
    return []
  }
}
