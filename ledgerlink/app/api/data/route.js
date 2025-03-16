let distances = []; // In-memory storage for distance data

export async function GET(request) {
    return new Response(JSON.stringify(distances), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { distance } = body;

        if (distance !== undefined) {
            distances.push({ distance, timestamp: new Date() });
            console.log(`Distance received: ${distance} cm`);
            return new Response(JSON.stringify({ message: "Distance data received" }), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        } else {
            return new Response(JSON.stringify({ error: "Invalid data" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
