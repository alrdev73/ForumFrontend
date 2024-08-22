export async function doGet(endpoint: string) {
    return await fetch(endpoint)
        .then((res) => {
            console.log(res)
            return res.json()
        })
}