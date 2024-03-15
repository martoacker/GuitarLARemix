export async function getCurso() {
    const respuestsa = await fetch(`${process.env.API_URL}/curso?populate=imagen`)
    return await respuestsa.json()
}