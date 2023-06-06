const { Midjourney } = require("midjourney");

const midjourneySharkCamp = async (prompt) => {
  const client = new Midjourney({
    ServerId: process.env.NEXT_PUBLIC_SERVER_ID,
    ChannelId: process.env.NEXT_PUBLIC_CHANNEL_ID,
    SalaiToken: process.env.NEXT_PUBLIC_SALAI_TOKEN,
    Debug: true,
    Ws: true,
  });

  try {
    await client.init();
    const msg = await client.Imagine(prompt, (uri, progress) => {
      console.log("loading", uri, "progress", progress);
    });

    if (!msg) {
      console.log("no msg");
      return;
    }

    return msg?.uri;
  } catch (error) {
    throw new Error(`Midjourney Error ${error} `);
  }
};

module.exports = midjourneySharkCamp;
