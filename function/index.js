async function handleRequest(request) {
    const url = new URL(request.url)

    if (url.pathname === "/dns-query") {
        const target = "https://dns.alidns.com/dns-query" + url.search

        const headers = new Headers(request.headers)

        return fetch(target, {
            method: request.method,
            headers: headers,
            body: request.body,
        })
    }

    if (url.pathname === "/info") {
        const info = {}

        for (const key of Object.getOwnPropertyNames(request)) {
            try {
                output[key] = request[key]
            } catch (_) { }
        }

        info.method = request.method
        info.url = request.url
        info.headers = Object.fromEntries(request.headers.entries())

        try {
            info.body = await request.text()
        } catch (err) {
            info.body = `Unable to read body: ${err}`
        }

        return new Response(JSON.stringify(info, null, 2), {
            headers: {
                "content-type": "application/json; charset=UTF-8",
            },
        })
    }

    return new Response('404 not found', {
        status: 404,
    })
}

export default {
    async fetch(request) {
        return handleRequest(request)
    }
}
