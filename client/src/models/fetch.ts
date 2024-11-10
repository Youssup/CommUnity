const ROOT = import.meta.env.VITE_API_URL;

export async function rest(url: string, data?: {}, method?: string) {
  const response = await fetch(ROOT + url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });
  console.log(data)
  if(response.ok){
        return await response.json();
    } else {
        console.log(data)
        throw await response.json();
    }
}