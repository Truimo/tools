const html = `<!DOCTYPE html>
<body>
  <h1>Hello World</h1>
</body>`

async function handleRequest(request) {
    const url = new URL(request.url)

    if (url.pathname === "/info") {
        const headersObj = {}
        for (const [key, value] of request.headers.entries()) {
            headersObj[key] = value
        }

        const info = {
            method: request.method,
            url: request.url,
            pathname: url.pathname,
            searchParams: Object.fromEntries(url.searchParams.entries()),
            headers: headersObj,
        }

        return new Response(JSON.stringify(info, null, 2), {
            headers: {
                "content-type": "application/json; charset=UTF-8",
            },
        })
    }

    return new Response(html, {
        headers: {
            "content-type": "text/html;charset=UTF-8",
        },
    })
}

export default {
    async fetch(request) {
        return handleRequest(request)
    }
}
