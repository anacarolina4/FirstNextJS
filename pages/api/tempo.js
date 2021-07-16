async function tempo(req, res) {
    const apiSecret = process.env.CONVERT_API_SECRET;
    const dynamicDate = new Date();

    const subsAPI = await fetch(`https://www.google.com?api_secret=${apiSecret}`);
    const subsAPIJson = await subsAPI.json();
    const subs = subsAPIJson.total_subscribers;

    res.setHeader('Cache-Control', 's-manage=10, stale-while-revalidate');

    res.json ({
        date: dynamicDate.toGMTString(),
        subs: subs
    });
}

export default tempo;
